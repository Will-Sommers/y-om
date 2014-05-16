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
      (html [:div.list-card (:task data)]))))


(defn card-modal [data owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.card-modal {:style (utils/modal-center)} (:test data)]))))



