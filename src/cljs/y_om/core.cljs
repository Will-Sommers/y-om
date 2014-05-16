(ns y-om.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [y-om.app-state :as app-state]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [y-om.components.board-header :as header]
   [y-om.components.cards :as cards]
   [y-om.components.columns :as columns]
   [y-om.components.draggable :as dnd]))

(enable-console-print!)



(defn toggle-component-state [owner attribute]
  (om/set-state! owner attribute (not (om/get-state owner attribute))))

(defn display? [show-input?]
  (if show-input?
    ""
    "hide"))

(defn toggle-input [owner state]
  (let [current-state (om/get-state owner state)]
    (om/set-state! owner state (not current-state))))

(defn submit-card [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/transact! data :cards #(conj % {:task text}))
    (set! (.-value element) "")
    (toggle-input owner state)))

(defn rename-column [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/update! data :name text)
    (toggle-input owner state)))

(defn add-column [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/transact! data :columns #(conj % {:name text :cards []}))
    (toggle-input owner state)))

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
            [:a.close {:on-click #(toggle-input owner state)} "Close"])))

(defn board-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:c-board-control (chan)
       :c-column-drag (chan)
       :add-new-column? false})

    om/IRenderState
    (render-state [_ {:keys [c-board-control
                             add-new-column?]}]
      (html [:div.container
             (om/build header/board-header (:board-info data))
             [:div.board-container
              (om/build-all columns/columns-view (:columns data))
              [:div.column
               (if add-new-column?
                 (render-input owner data add-column "" :add-new-column?  "add-column" "Save")
                 [:div.add-column {:on-click #(toggle-component-state owner :add-new-column?)} "Add a list..."])]]]))))

(defn app [data owner]
  (om/component
   (html [:div
          (om/build board-view data)])))

(om/root
 app
 app-state/app-state
 {:target (. js/document (getElementById "app"))})



