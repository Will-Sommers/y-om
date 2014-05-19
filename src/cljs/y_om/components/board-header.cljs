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
             [:h3 (:board-name data)]
             [:span.icon {:on-click #(utils/toggle-board-attribute data :starred)
                                :class (str "starred-" (:starred data))}]
             [:span.icon {:on-click #(utils/toggle-board-attribute data :private)
                          :class (str "private-" (:private data)) }]
             [:div.show-sidebar 
              [:div "Show sidebar"]]
             ]))))
