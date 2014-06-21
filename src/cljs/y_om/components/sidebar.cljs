(ns y-om.components.sidebar
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))


(defn sidebar [data owner]
  (reify
    om/IRender
    (render [_]
      (html
       (if (:open data)
         [:div
          [:div.sidebar {:on-click #(om/transact! data :open (fn [x] false))} "Close"]]
         [:div])))))
