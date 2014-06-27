(ns y-om.components.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [y-om.components.board :as board]))

(enable-console-print!)

(defn app-component [data owner]
  (reify
    om/IRender
    (render [_]
      (html [:div
             (om/build board/board-view data)]))))
