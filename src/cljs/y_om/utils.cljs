(ns y-om.utils
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]))


(defn toggle-component-state [owner attribute]
  (om/set-state! owner attribute (not (om/get-state owner attribute))))

(defn toggle-input [owner state]
  (let [current-state (om/get-state owner state)]
    (om/set-state! owner state (not current-state))))

(defn toggle-board-attribute [data attribute]
  ;; Send API req!
  (om/transact! data attribute #(not (attribute @data))))

(defn modal-center []
  (let [left (/ (- (.-innerWidth js/window) 300)
                       2)]
    #js {:left left}))

(defn render-input [owner data submit-fn val state ref button-text]
  (do (html [:input {:type "textarea"
                     :auto-complete "off"
                     :ref ref
                     :defaultValue val
                     :on-key-down #(if (= 13 (.. % -keyCode))
                                     (submit-fn owner data state ref))}]
            (html/submit-button {:on-click
                                 #(submit-fn owner data state ref)}
                                button-text)
            [:a.close {:on-click #(toggle-input owner state)} "Close"])))

