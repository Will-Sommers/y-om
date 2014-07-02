
(enable-console-print!)
;
(defn log [data]
  (.log js/console data))

(def app-state (atom {:board-name "Yo yo yo, get it done!"
                      :columns [{:name "To Do"
                                 :cards [{:name "Make it look good"}]}
                                {:name "Doing"
                                 :cards [{:name "Tutorial number two"}]}
                                {:name "Done"
                                 :cards [{:name "Explain WTF#js"}]}]}))

(defn card-component [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "list-card"
                    :onClick #(log %)}
        (dom/div nil (:name data))))))



(defn column-component [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:add-card? false})

    om/IRenderState
    (render-state [_ {:keys [add-card?]}]
      (dom/div #js {:className "column"}
               (dom/div nil (:name data))
               (apply dom/div #js {:className "cards-wrapper"}
                 (om/build-all card-component (:cards data)))
               (if add-card?
                 (dom/input #js
                   {:placeholder "Add a card"
                    :ref "new-card"
                    :onKeyDown (fn [event] (if (= 13 (aget event "keyCode"))
                                            (let [input (om/get-node owner "new-card")
                                                  input-val (.-value input)
                                                  new-card {:name input-val}]
                                              (do
                                                (om/transact! data :cards #(conj % new-card))
                                                (set! (.-value input) "")
                                                (om/set-state! owner :add-card? false)))))})
                 (dom/div #js {:onClick #(om/set-state! owner :add-card? true)} "Add a card ..."))))))

(defn app-component [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "container"}
        (dom/div nil (:board-name data))
        (apply dom/div nil
          (om/build-all column-component (:columns data)))))))

(om/root
  app-component
  app-state
  {:target (. js/document (getElementById "app"))})
