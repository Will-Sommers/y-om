(ns y-om.components.columns
  (:require
   [y-om.utils :as utils]
   [y-om.components.cards :as cards]
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))


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

(defn add-column [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/transact! data :columns #(conj % {:name text :cards []}))
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
            [:a.close {:on-click #(toggle-component-state owner state)} "Close"])))

(defn columns-view [data owner]
  (reify

    om/IInitState
    (init-state [_]
      {:show-input? false
       :edit-header? false
       :dragging false})

    om/IRenderState
    (render-state [this {:keys [edit-header? show-input?]}]
      (html [:div.column {:on-mousedown (om/set-state! owner :dragging true)}
             (if edit-header?
               [:div.column-header
                (render-input owner data rename-column (:name data) :edit-header? "header" "Save")]
               [:div.column-header {:on-click #(utils/toggle-component-state owner :edit-header?)} (:name data)])
             (if (empty? (:cards data))
               [:div.empty-column]
               (om/build-all cards/card-view (:cards data)))
             [:div {:class (display? show-input?)}
              (render-input owner data submit-card "" :show-input? "add-card" "Add")]
             [:div
              [:a {:on-click #(utils/toggle-component-state owner :show-input?)
                                 :class (display? (not show-input?))} "Add a new card..."]]]))))




