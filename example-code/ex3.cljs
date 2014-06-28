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

(defn card-component [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "list-card"
                    :onClick #(println "Hello1")}
        (dom/div nil (:name data))))))

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
      (dom/div nil
        (dom/div nil (:board-name data))
        (apply dom/div nil
          (om/build-all column-component (:columns data)))))))

(om/root
  app-component
  app-state
  {:target (. js/document (getElementById "app"))})
