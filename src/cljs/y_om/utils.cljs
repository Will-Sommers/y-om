(ns y-om.utils
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as html :include-macros true]))


(defn toggle-component-state [owner attribute]
  (om/set-state! owner attribute (not (om/get-state owner attribute))))

(defn toggle-board-attribute [data attribute]
  ;; Send API req!
  (om/transact! data attribute #(not (attribute @data))))

(defn modal-center []
  (let [left (/ (- (.-innerWidth js/window) 300)
                       2)]
    #js {:left left}))


