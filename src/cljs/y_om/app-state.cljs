(ns y-om.app-state)

(def app-state (atom {:board-info {:board-name "My Board"
                                   :starred false
                                   :private false}
                      :columns [{:name "To Do" :cards []}
                                {:name "Doing" :cards [{:task "Do work"
                                                        :id 1}]}
                                {:name "Done" :cards []}]
                      :focus-card [1]}))
