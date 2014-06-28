(enable-console-print!)

(defn log [data]
  (.log js/console data))

(def app-state (atom {:board-name "Yo yo yo, get it done!"
                      :columns [{:name "To Do"
                                 :cards [{:name "Make it look good"}]}
                                {:name "Doing"
                                 :cards [{:name "Tutorial number two"}]}
                                {:name "Done"
                                 :cards [{:name "Explain WTF#js"}]}]}))

(defn card-style [clicked?]
  (if clicked?
    (do
      (println "true case")
      #js {:background-color "#DBA6FF"})
    #js {}))

(defn card-component [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:clicked? false
       :example "Hi, all"})

    om/IRenderState
    (render-state [_ {:keys [clicked?]}]
      (let [example (om/get-state owner :example)]
        (println clicked?)
        (println example)
        (dom/div #js {:className "list-card"
                      :onClick #(om/set-state!
                                  owner
                                  :clicked?
                                  (not clicked?))
                      :style (card-style clicked?)}
          (dom/div nil (:name data)))))))

(defn column-component [data owner]
  (reify
    om/IRender
    (render [_]
      (println data)
      (log data)
      (dom/div #js {:className "column"}
               (dom/div nil (:name data))
               (apply dom/div #js {:className "cards-wrapper"}
                        (om/build-all card-component (:cards data)))))))

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
