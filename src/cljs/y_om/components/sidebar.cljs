(ns y-om.components.sidebar
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om-tools.dom :as dom :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]))


(defn get-class [open?]
  (if open?
    "sidebar sidebar-open"
    "sidebar sidebar-closed"))

(defcomponent sidebar-component [data owner]

  (render-state [_ {:keys [c-board-control]}]
    (dom/div
      (dom/nav {:class (get-class (:open data))
                :on-click #(put! c-board-control [:sidebar :close])} "Close"))))
