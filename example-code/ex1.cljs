(def app-state (atom {:text "Hello world!"}))

(defn app-component [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil (:text data)))))

(om/root
  app-component
  app-state
  {:target (. js/document (getElementById "app"))})
