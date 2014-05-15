(ns y-om.core
  (:require [y-om.app-state :as app-state]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn display? [show-input?]
  (if show-input?
    ""
    "hide"))

(defn toggle-input [owner]
  (let [current-state (om/get-state owner :show-input?)]
    (om/set-state! owner :show-input? (not current-state))))

(defn submit-card [owner data]
  (let [element (om/get-node owner "add-card")
        text (. element -value)]
    (om/transact! data :cards #(conj % {:task text}))
    (set! (.-value element) "")
    (toggle-input owner)))


(defn add-column [owner data]
  (reify
    om/IRender
    (render [_]
      (html [:div.column
             [:div.add-column "Add a list..."]]))))

(defn card-view [data owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.list-card (:task data)]))))

(defn columns-view [data owner]
  (reify

    om/IInitState
    (init-state [_]
      {:show-input? false})

    om/IRender
    (render [_]
      (html [:div.column
             [:div.column-header (:name data)]
             (if (empty? (:cards data))
               [:div.empty-column]
               (om/build-all card-view (:cards data)))
             [:div {:class (display? (om/get-state owner :show-input?))}
              [:input {:type "textarea"
                       :auto-complete "off"
                       :ref "add-card"
                       :on-key-down #(if (= 13 (.. % -keyCode))
                                       (submit-card owner data))}]
              (html/submit-button {:on-click
                                   #(submit-card owner data)}
                                  "Add")
              [:a.close {:on-click #(toggle-input owner)} "Close"]]
             [:div
              [:a {:on-click #(toggle-input owner)
                                 :class (display? (not (om/get-state owner :show-input?)))} "Add a new card..."]]]))))

(defn toggle-board-attribute [data attribute]
  ;; Send API req!
  (om/transact! data attribute #(not (attribute @data))))

(defn board-header [data owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.board-header
             [:div.board-name (:board-name data)]
             [:span.board-star {:on-click #(toggle-board-attribute data :starred)} (str "Starred: "(:starred data))]
             [:span.private {:on-click #(toggle-board-attribute data :private)} (str "Private: " (:private data))]]))))


(defn app [data owner]
  (om/component
   (html [:div.container 
          (om/build board-header (:board-info data))
          [:div.board-container
           (om/build-all columns-view (:columns data))
           (om/build add-column (:columns data)) ]
          ])))

(om/root
 app
 app-state/app-state
 {:target (. js/document (getElementById "app"))})



