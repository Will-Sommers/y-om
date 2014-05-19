(ns y-om.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [y-om.app-state :as app-state]
   [y-om.utils :as utils]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [y-om.components.board-header :as header]
   [y-om.components.cards :as cards]
   [y-om.components.columns :as columns]))


(enable-console-print!)

(defn move-column [data {old-pos :pos direction :direction}]
  (let [new-pos (if (= direction :right)
                    (+ old-pos 1)
                    (- old-pos 1))
        column-move (nth (:columns @data) old-pos)
        column-replace (nth (:columns @data) new-pos)
        new-columns (assoc (:columns @data) new-pos column-move old-pos column-replace)]
    (om/update! data :columns new-columns)))


(defn add-column [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/transact! data :columns #(conj % {:name text :cards []}))
    (utils/toggle-component-state owner state)))

(defn render-input [owner data submit-fn val state ref button-text]
  (do (html [:input {:type "textarea"
                     :auto-complete "off"
                     :ref ref
                     :defaultValue val
                     :on-key-down #(if (= 13 (.. % -keyCode))
                                     (submit-fn owner data state ref))}]
            (html/submit-button {:on-click 
                                 #(submit-fn owner data state ref)}
                                button-text)
            [:a.close {:on-click #(utils/toggle-component-state owner state)} "Close"])))

(defn board-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:c-board-control (chan)
       :c-column-drag (chan)
       :add-new-column? false})

    om/IWillMount
    (will-mount [_]
      (let [c-board-control (om/get-state owner :c-board-control)]
        (go (while true
              (let [command (<! c-board-control)]
                (move-column data command))))))
    
    om/IRenderState
    (render-state [_ {:keys [c-board-control
                             add-new-column?]}]
      (html
       [:div
        [:header ]
        [:div.container
         (om/build header/board-header (:board-info data))
         [:div.board-container
          (map
           #(om/build columns/columns-view % {:init-state {:c-board-control c-board-control
                                                           :edit-header? false
                                                           :show-input? false}
                                              :state {:pos %2
                                                      :n-columns (count (:columns data))}})
           (:columns data)
           (range))
          [:div.add-column
           (if add-new-column?
             (render-input owner data add-column "" :add-new-column?  "add-column" "Save")
             [:div {:on-click #(utils/toggle-component-state owner :add-new-column?)} "Add a list..."])]
          [:div.sidebar]]]]))))

(defn app [data owner]
  (om/component
   (html [:div
          (om/build board-view data)])))

(defn init [app-state]
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "app"))}))

(init app-state/app-state)
