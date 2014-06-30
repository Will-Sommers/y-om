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

  (render-state [_ {:keys [c-column-control]}]
    (dom/div {:class "list-card"
              :on-click #(put! c-column-control (:id @data))}
      (dom/div (:task data)))))
