(ns y-om.components.card
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [y-om.utils :as utils]
   [om.dom :as dom :include-macros true]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [y-om.app-state :as app-state]))



(defn card-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:c-drag-card (chan)
       :dragging false})

    om/IWillMount
    (will-mount [_]
      (let [c-drag-card (om/get-state owner :c-drag-card)]
        (go (while true
              (let [pos (<! c-drag-card)]
                (println pos))))))
    om/IRenderState
    (render-state [_ {:keys [dragging c-drag-card]}]
      (let [c-column-control (om/get-state owner :c-column-control)]
        (html [:div.list-card {:on-click #(if-not dragging (put! c-column-control (:id @data)))
                               }
               [:div (:task data)]])))))
