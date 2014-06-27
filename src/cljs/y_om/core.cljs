(ns y-om.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [y-om.app-state :as app-state]
   [y-om.utils :as utils]
   [y-om.components.app :as app]
   [ankha.core :as ankha]))

(enable-console-print!)

(defn ankha-viewer [data owner]
  (om/component
   (html
    [:div
     [:div#ankha-header "Ankha Inspector"]
     [:div#inspector (om/build ankha/inspector data)]])))

(defn init [app-state]
  (let [options (utils/get-query-params)]
    (om/root
     app/app-component
     app-state
     {:target (. js/document (getElementById "app"))})

    (if options
      (om/root
       ankha-viewer
       app-state
       {:target (. js/document (getElementById "inspector-view"))}))))

(init app-state/app-state)
