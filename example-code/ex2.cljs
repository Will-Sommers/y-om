(def app-state (atom {:board-name "Yo yo yo, get it done!"
                      :columns [{:name "To Do"}
                                {:name "Doing"}
                                {:name "Done"}]}))

(defn column-component [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "column"}
               (dom/div nil (:name data))
               (dom/div #js {:className "cards-wrapper"}
                        (dom/div nil "Cards go here"))))))

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
