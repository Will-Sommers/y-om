(ns y-om.components.card-modal
  (:require
   [y-om.utils :as utils]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [om.core :as om :include-macros true]))


(defcomponent card-modal-component [data owner]

  (render [_]
    (let [selected-card-id (get-in data [:state :card-modal :id])
          card (first (filter #(= selected-card-id (:id %)) (:cards data)))]

      (dom/div {:class "overlay"}
        (dom/div {:class "modal"
                  :style {:top "100px"
                          :left "300px"}}
          (dom/a  {:class "close"
                   :on-click #(om/transact! data [:state :card-modal :display] (fn [_] false))} "Close")
          (dom/input {:on-change #(let [new-val (.. % -target -value)]
                                    (om/transact! card :task (fn [_] new-val)))
                      :default-value (:task card)}))))))
