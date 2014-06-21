(ns y-om.components.card-modal
  (:require
   [y-om.utils :as utils]
   [om.dom :as dom :include-macros true]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]))


(defn card-modal-component [data owner]
  (reify
    om/IRender
    (render [_]
      (let [selected-card-id (get-in data [:state :card-modal :id])
            card (first (filter #(= selected-card-id (:id %)) (:cards data)))]
        (html
         [:div.overlay
          [:div.modal {:style {:top "100px"
                               :left "300px"}}
           [:a.close {:on-click #(om/transact! data :display (fn [_] false))} "Close"]
           [:input {:on-change #(let [new-val (.. % -target -value)]
                                  (om/transact! card :task (fn [_] new-val)))
                    :default-value (:task card)}]]])))))
