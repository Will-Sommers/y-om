(ns y-om.components.board-header
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [y-om.utils :as utils]))

(defcomponent board-header [data owner]

  (render-state [_ {:keys [c-board-control]}]
    (dom/div {:class "board-header"}
      (dom/h3 (:board-name data))
      (dom/span {:on-click #(utils/toggle-component-global-state data :starred)
                 :class (str "icon" " " "starred-" (:starred data))})
      (dom/span {:on-click #(utils/toggle-component-global-state data :private)
                 :class (str "icon" " " "private-" (:private data))})
      (dom/div {:class "show-sidebar"}
        (dom/div {:on-click #(put! c-board-control [:sidebar :open])} "Show sidebar")))))
