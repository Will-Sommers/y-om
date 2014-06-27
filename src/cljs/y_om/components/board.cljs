(ns y-om.components.board
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [y-om.app-state :as app-state]
   [y-om.utils :as utils]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [om-tools.core :refer-macros [defcomponent]]
   [y-om.components.board-header :as header]
   [y-om.components.card :as card]
   [y-om.components.columns :as columns]
   [y-om.components.sidebar :as sidebar]
   [y-om.components.card-modal :as card-modal]
   ))

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
    (om/transact! data
                  :columns
                  #(conj % {:name text :cards []}))
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

(defcomponent board-component [data owner]

  (init-state [_]
    {:c-board-control (chan)
     :c-column-drag (chan)
     :add-new-column? false})

  (will-mount [_]
    (let [c-board-control (om/get-state owner :c-board-control)]
      (go (while true
            (let [[msg-name command] (<! c-board-control)]
              (condp = msg-name
                :move-column (move-column data command)
                :sidebar (om/transact! data [:sidebar :open] #(if (= command :open)
                                                                true
                                                                false))))))))

  (render-state [_ {:keys [c-board-control
                           add-new-column?]}]
    (html
      [:div
       [:header]
       [:div.container
        (when (some true? (map #(get-in % [:state :card-modal :display]) (:columns data)))
          (map
            #(if (get-in % [:state :card-modal :display])
               (om/build card-modal/card-modal-component %))
            (:columns data)))
        [:div.board-container

         (om/build header/board-header (:board-info data) {:init-state {:c-board-control c-board-control}})

         [:div.yar
          (map
            #(om/build columns/column-component % {:init-state {:c-board-control c-board-control}
                                               :state {:pos %2
                                                       :n-columns (count (:columns data))}})
            (:columns data)
            (range))]

         [:div.add-column
          (if add-new-column?
            (render-input owner data add-column "" :add-new-column?  "add-column" "Save")
            [:div {:on-click #(utils/toggle-component-state owner :add-new-column?)} "Add a list..."])]
         (om/build sidebar/sidebar-component (:sidebar data) {:init-state {:c-board-control c-board-control}})]]])))
