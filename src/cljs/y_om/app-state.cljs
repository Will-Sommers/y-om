(ns y-om.app-state)

(def app-state (atom {:board-info {:board-name "My Board"
                                   :starred false
                                   :private false}
                      :columns [{:name "To Do" :cards [{:task "Sidebar"
                                                        :id 1}
                                                       {:task "Header"
                                                        :id 1}
                                                       {:task "Create new board"
                                                        :id 1}]}
                                {:name "Doing" :cards [{:task "Drag Lists"
                                                        :id 1}
                                                       {:task "Drag Cards"
                                                        :id 1}
                                                       {:task "Make it look pretty"
                                                        :id 1}]}
                                {:name "Done" :cards []}]
                      :focus-card [1]}))
