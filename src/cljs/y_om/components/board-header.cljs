(ns y-om.components.board-header
  (:require
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [y-om.utils :as utils]
   [sablono.core :as html :refer-macros [html]]))

(defn board-header [data owner]
  (reify 
    
    om/IRender
    (render [_]
      (html [:div.board-header 
             [:div.board-name (:board-name data)]
             [:span.board-star {:on-click #(utils/toggle-board-attribute data :starred)} (str "Starred: "(:starred data))]
             [:span.private {:on-click #(utils/toggle-board-attribute data :private)} (str "Private: " (:private data))]]))))
