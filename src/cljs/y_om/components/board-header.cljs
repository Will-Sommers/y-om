(ns y-om.components.board-header
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [y-om.utils :as utils]
   [sablono.core :as html :refer-macros [html]]))

(defn board-header [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [c-board-control]}]
      (html [:div.board-header
             [:h3 (:board-name data)]
             [:span.icon {:on-click #(utils/toggle-component-global-state data :starred)
                                :class (str "starred-" (:starred data))}]
             [:span.icon {:on-click #(utils/toggle-component-global-state data :private)
                          :class (str "private-" (:private data)) }]
             [:div.show-sidebar
              [:div {:on-click #(put! c-board-control [:sidebar :open])} "Show sidebar"]]]))))
