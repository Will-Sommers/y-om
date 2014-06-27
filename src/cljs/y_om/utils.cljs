(ns y-om.utils
  (:require
   [clojure.string :as string]
   [om.core :as om :include-macros true]
   [sablono.core :as html :include-macros true]))

(defn toggle-component-state [owner attribute]
  (om/set-state! owner attribute (not (om/get-state owner attribute))))

(defn toggle-board-attribute [data attribute]
  ;; Send API req!
  (om/transact! data attribute #(not (attribute @data))))

(defn toggle-component-global-state [data attribute]
  ;; Send API req!
  (om/transact! data attribute #(not (attribute @data))))

(defn modal-center []
  (let [left (/ (- (.-innerWidth js/window) 300)
                       2)]
    #js {:left left}))

(defn get-query-params []
  (let [params (-> js/location
             (.-search)
             (.substr 1)
             (string/split #"&"))
        params-hash (into '{} (doall
                               (map
                                #(let [param-vec (string/split % #"=")]
                                   (hash-map (first param-vec) (last param-vec)))
                                params)))]
    (if (= "1" (get params-hash "ankha"))
      true)))
