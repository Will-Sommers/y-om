(ns y-om.components.card-modal
  (:require
   [y-om.utils :as utils]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   [om.core :as om :include-macros true]
   [clojure.string :as string]))




(defn hide-modal [card event data owner]
  (. event stopPropagation)

  (if (string/blank? (:task @card))
    (do
      (utils/timeout #(om/set-state! owner :valid? true) 1500)
      (om/set-state! owner :valid? false))
    (om/transact! data [:state :card-modal :display] (fn [_] false))))

(defcomponent card-modal-component [data owner]
  (init-state [_]
    {:valid? true})

  (render-state [_ {:keys [valid?]}]
    (let [selected-card-id (get-in data [:state :card-modal :id])
          card (first (filter #(= selected-card-id (:id %)) (:cards data)))]

      (dom/div {:class "overlay"
                :on-click #(hide-modal card % data owner)}
        (dom/div {:class "modal"
                  :style {:top "100px"
                          :left "300px"}}
          (dom/a  {:class "close"
                   :on-click #(hide-modal card % data owner)} "Close")
          (dom/input {:on-change #(let [new-val (.. % -target -value)]
                                    (om/transact! card :task (fn [_] new-val)))
                      :on-key-down #(if (= 13 (.. % -keyCode))
                                        (hide-modal card % data owner))
                      :default-value (:task card)})
          (if-not valid?
            (dom/div "Cannot have a card without text")))))))
