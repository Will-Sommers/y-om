(ns y-om.components.cards
  (:require
   [y-om.utils :as utils]
   [om.dom :as dom :include-macros true]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]))



(defn card-view [data owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.list-card {:on-click #(println "test")} (:task data)]))))
