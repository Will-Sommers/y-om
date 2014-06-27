(ns y-om.components.sidebar
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))


(defn sidebar-component [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [c-board-control]}]
      (html
       (if (:open data)
         [:div
          [:div.sidebar {:on-click #(put! c-board-control [:sidebar :close])} "Close"]]
         [:div])))))
