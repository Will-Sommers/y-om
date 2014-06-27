(ns y-om.components.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [y-om.components.board :as board]))

(enable-console-print!)

(defcomponent app-component [data owner]

  (render [_]
    (dom/div
      (om/build board/board-component data))))
