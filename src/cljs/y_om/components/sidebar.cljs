(ns y-om.components.sidebar
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om-tools.dom :as dom :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]))


(defcomponent sidebar-component [data owner]

  (render-state [_ {:keys [c-board-control]}]
    (if (:open data)
      (dom/div
        (dom/div {:class "sidebar"
                  :on-click #(put! c-board-control [:sidebar :close])} "Close"))
      (dom/div "hi"))))
