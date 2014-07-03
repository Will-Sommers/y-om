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
    (om/update! data :modal {:cursor nil})))

(defcomponent card-modal-component [data owner]
  (display-name [_]
    "Card Modal")
  (init-state [_]
    {:valid? true})

  (render-state [_ {:keys [valid?]}]
    (dom/div
      (if-let [modal-cursor (get-in data [:modal :cursor])]
        (dom/div {:class "overlay"
                  :on-click #(hide-modal modal-cursor % data owner)}
          (dom/div {:class "modal"
                    :style {:top "100px"
                            :left "300px"}}
            (dom/a  {:class "close"
                     :on-click #(hide-modal modal-cursor % data owner)} "Close")
            (dom/input {:on-change #(let [new-val (.. % -target -value)]
                                      (om/transact! modal-cursor :task (fn [_] new-val)))
                        :on-key-down #(if (= 13 (.. % -keyCode))
                                        (hide-modal modal-cursor % data owner))
                        :default-value (:task modal-cursor)})
            (if-not valid?
              (dom/div "Cannot have a modal-cursor without text")))))))
)
