(ns y-om.components.card
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [y-om.utils :as utils]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]))

(defcomponent card-component [data owner]

  (display-name [_]
    "Card")

  (init-state [_]
    {:c-drag-card (chan)
     :dragging false})

  (will-mount [_]
    (let [c-drag-card (om/get-state owner :c-drag-card)]
      (go (while true
            (let [pos (<! c-drag-card)]
              )))))

  (render-state [_ {:keys [dragging c-drag-card]}]
    (let [c-column-control (om/get-state owner :c-column-control)]
      (dom/div {:class "list-card"
                :on-click #(if-not dragging (put! c-column-control (:id @data)))}
        (dom/div (:task data))))))
