(ns y-om.components.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [y-om.components.board :as board]
   [y-om.utils :as utils]
   [goog.events :as g-events]
   [goog.dom :as gdom]))

(enable-console-print!)

(defn set-board-height [owner]
  (om/set-state! owner :board-height (- (.. (gdom/getViewportSize) -height) 200)))

(defcomponent app-component [data owner]
  (display-name [_]
    "App")

  (will-mount [_]
    (set-board-height owner)
    (g-events/listen js/window goog.events.EventType.RESIZE #(set-board-height owner)))

  (render-state [_ {:keys [board-height]}]
    (dom/div
      (om/build board/board-component data {:state {:board-height board-height}}))))
