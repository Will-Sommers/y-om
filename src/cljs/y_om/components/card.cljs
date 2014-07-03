(ns y-om.components.card
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [y-om.utils :as utils :refer [log]]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [goog.style :as gstyle]))

(enable-console-print!)

(defcomponent card-component [data owner]

  (display-name [_]
    "Card")

  (init-state [_]
    {:display-editor? false})

  (render-state [_ {:keys [c-column-control
                           c-board-control
                           display-editor?]}]
    (dom/div {:class "yar"}
      (dom/div {:class "list-card"
                :ref "card"
                :on-click #(put! c-board-control [:update-modal data])}
        (dom/div (:task data)))
      (dom/div {:class "edit-card"
                :on-click #(pr (utils/access-props (gstyle/getPageOffset (om/get-node owner "card")) "x" "y"))}
        (dom/div {:class "fa fa-pencil"}))
      (when display-editor?
        (dom/div {:class "quick-editor"} "hi")))))
