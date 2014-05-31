(ns y-om.components.columns
  (:require
   [y-om.utils :as utils]
   [y-om.components.cards :as cards]
   [clojure.string :as string]
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn toggle-header [data state]
  (let [current-state (get-in @data state)]
    (om/update! data state (not current-state))))

(defn submit-card [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (if-not (string/blank? text)
      (do (om/transact! data :cards #(conj % {:task text}))
          (set! (.-value element) "")
          (utils/toggle-component-state owner state)))))

(defn rename-column [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (om/update! data :name text)
    (toggle-header data state)))

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
            [:a.close {:on-click #(toggle-header data state)} "Close"])))


(defn column-header [data owner]
  (reify
    
    om/IRender
    (render [_]
      (let [add-header? (get-in data [:state :add-header?])]
        (html
         (if add-header?
           [:h4.column-header
            (render-input owner data rename-column (:name data) [:state :add-header?] "header" "Save")]
           [:h4.column-header {:on-click #(toggle-header data [:state :add-header?])} (:name data)]))))))

(defn columns-view [data owner]
  (reify

    om/IRenderState
    (render-state [this {:keys [pos n-columns c-board-control]}]
      (let [add-card? (get-in data [:state :add-card?])]
        (html [:div.column {:on-mousedown (om/set-state! owner :dragging true)}

               (om/build column-header data)

               (if (empty? (:cards data))
                 [:div.empty-column]
                 (apply dom/div #js {:id "yar"}
                        
                        (om/build-all cards/card-view (:cards data) {:init-state {:pos 1}})))
               [:div {:class (display? add-card?)}
                (render-input owner data submit-card "" [:state :add-card?] "add-card" "Add")]
               [:div
                [:a.add-card {:class (display? (not add-card?))
                              :on-click #(om/update! data [:state :add-card?] true)} "Add a new card..."]]
               [:div
                (if (not= pos 0)
                  [:a.left {:on-click #(put! c-board-control {:pos pos :direction :left})} "<<"])
                (if (not= (+ 1 pos) n-columns)
                  [:a.right {:on-click #(put! c-board-control {:pos pos :direction :right})} ">>"])]])))))




