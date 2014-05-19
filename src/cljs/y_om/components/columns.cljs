(ns y-om.components.columns
  (:require
   [y-om.utils :as utils]
   [y-om.components.cards :as cards]
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn submit-card [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/transact! data :cards #(conj % {:task text}))
    (set! (.-value element) "")
    (utils/toggle-component-state owner state)))

(defn rename-column [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/update! data :name text)
    (utils/toggle-component-state owner state)))

(defn display? [show-input?]
  (if show-input?
    ""
    "hide"))

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

(defn columns-view [data owner]
  (reify

    om/IRenderState
    (render-state [this {:keys [edit-header? show-input? pos n-columns c-board-control]}]
      (html [:div.column {:on-mousedown (om/set-state! owner :dragging true)}
             (if edit-header?
               [:h4.column-header
                (render-input owner data rename-column (:name data) :edit-header? "header" "Save")]
               [:h4.column-header {:on-click #(utils/toggle-component-state owner :edit-header?)} (:name data)])
             (if (empty? (:cards data))
               [:div.empty-column]
               (apply dom/div #js {:id "yar"}
                      
                      (om/build-all cards/card-view (:cards data) {:init-state {:pos 1}})))
             [:div {:class (display? show-input?)}
              (render-input owner data submit-card "" :show-input? "add-card" "Add")]
             [:div
              [:a.add-card {:on-click #(utils/toggle-component-state owner :show-input?)
                   :class (display? (not show-input?))} "Add a new card..."]]
             [:div
              (if (not= pos 0)
                [:a.left {:on-click #(put! c-board-control {:pos pos :direction :left})} "<<"])
              (if (not= (+ 1 pos) n-columns)
                [:a.right {:on-click #(put! c-board-control {:pos pos :direction :right})} ">>"])]]))))




