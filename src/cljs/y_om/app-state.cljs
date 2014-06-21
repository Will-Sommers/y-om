(ns y-om.app-state)

(def app-state (atom {:board-info {:board-name "My Board"
                                   :starred false
                                   :private false}
                      :sidebar {:open true}
                      :columns [{:name "To Do" :cards [{:task "Sidebar"
                                                        :id 3}
                                                       {:task "Header"
                                                        :id 10}
                                                       {:task "Create new board"
                                                        :id 0}]
                                 :state {:add-header? false
                                         :add-card? false
                                         :card-modal {:display true
                                                      :id 0}}}
                                {:name "Doing" :cards [{:task "Drag Lists"
                                                        :id 1}
                                                       {:task "Drag Cards"
                                                        :id 1}
                                                       {:task "Make it look pretty"
                                                        :id 1}
                                                       {:task "Handle Resizing`"}]
                                 :state {:add-header? true
                                         :add-card? false}}
                                {:name "Done" :cards []
                                 :state {:add-header? false
                                         :add-card? false}}]}))
