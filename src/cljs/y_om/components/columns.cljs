(ns y-om.components.columns
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [y-om.utils :as utils]
   [y-om.components.card :as card]
   [clojure.string :as string]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn toggle-state [data state]
  (let [current-state (get-in @data state)]
    (om/update! data state (not current-state))))

(defn submit-card [owner data state ref]
  (let [element (om/get-node owner ref)
        text (. element -value)]
    (when (not (string/blank? text))
      (let [next-id (->> (:cards @data)
                  last
                  :id)
            id (if (nil? next-id)
                 0
                 (inc next-id))]
        (om/transact! data :cards #(conj % {:task text :id id}))
        (set! (.-value element) "")
        (om/update! data [:state :add-card?] false)))))

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
  (dom/div
    (dom/input {:type "textarea"
                :auto-complete "off"
                :ref ref
                :defaultValue val
                :on-key-down #(if (= 13 (.. % -keyCode))
                                (submit-fn owner data state ref))})
    (dom/button {:on-click
                 #(submit-fn owner data state ref)}
      button-text)
    (dom/a {:class "close"
            :on-click #(toggle-state data state)} "Close")))

(defcomponent column-header-component [data owner]

  (display-name [_]
    "Column Header")

  (render [_]
    (let [add-header? (get-in data [:state :add-header?])]
      (dom/div (if add-header?
                 (dom/h4 {:class "column-header"}
                   (render-input owner data rename-column (:name data) [:state :add-header?] "header" "Save"))
                 (dom/h4 {:class "column-header"
                          :on-click #(toggle-state data [:state :add-header?])} (:name data)))))))

(defcomponent column-component [data owner]

  (display-name [_]
    "Column")

  (init-state [_]
    {:c-column-control (chan)})

  (will-mount [_]
    (let [c-column-control (om/get-state owner :c-column-control)]
      (go (while true
            (let [card-id (<! c-column-control)]
              (om/update! data [:state :card-modal] {:display true :id card-id}))))))

  (render-state [this {:keys [pos n-columns c-board-control c-column-control]}]

    (let [add-card? (get-in data [:state :add-card?])]
      (dom/div {:class "column"
                :on-mousedown #(om/set-state! owner :dragging true)}
        (om/build column-header-component data)

        (if (empty? (:cards data))
          (dom/div {:class "empty-column"})
          (dom/div
            (om/build-all card/card-component (:cards data) {:init-state {:pos 1 :c-column-control c-column-control}})))

        (dom/div {:class (display? add-card?)}
          (render-input owner data submit-card "" [:state :add-card?] "add-card" "Add"))

        (dom/div
          (dom/a {:class (str "add-card " (display? (not add-card?)))
                  :on-click #(om/update! data [:state :add-card?] true)} "Add a new card..."))

        (dom/div nil
          (if (not= pos 0)
            (dom/a {:class "left"
                    :on-click #(put! c-board-control [:move-column {:pos pos :direction :left}])} "<<"))
          (if (not= (+ 1 pos) n-columns)
            (dom/a {:class "right"
                    :on-click #(put! c-board-control [:move-column {:pos pos :direction :right}])} ">>")))))))
