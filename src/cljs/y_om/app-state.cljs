(ns y-om.app-state)

(def app-state (atom {:board-info {:board-name "My Board"
                                   :starred false
                                   :private false}
                      :sidebar {:open true}
                      :columns [{:name "To Do" :cards [{:task "Sidebar"
                                                        :id 0}
                                                       {:task "Header"
                                                        :id 1}
                                                       {:task "Create new board"
                                                        :id 2}]
                                 :state {:add-header? false
                                         :add-card? false
                                         :card-modal {:display false
                                                      :id 10}}}
                                {:name "Doing" :cards [{:task "Drag Lists"
                                                        :id 1}
                                                       {:task "Drag Cards"
                                                        :id 2}
                                                       {:task "Make it look pretty"
                                                        :id 3}
                                                       {:task "Handle Resizing"
                                                        :id 4}
                                                       {:task "placeholder"
                                                        :id 5}
                                                       {:task "placeholder"
                                                        :id 6}
                                                       {:task "placeholder"
                                                        :id 7}
                                                       {:task "placeholder"
                                                        :id 8}
                                                       {:task "placeholder"
                                                        :id 9}
                                                       {:task "placeholder"
                                                        :id 10}
                                                       {:task "placeholder"
                                                        :id 11}
                                                       {:task "placeholder"
                                                        :id 12}]
                                 :state {:add-header? false
                                         :add-card? false
                                         :card-modal {:display false
                                                      :id 0}}}
                                {:name "Done" :cards []
                                 :state {:add-header? false
                                         :add-card? false
                                         :card-modal {:display false
                                                      :id 0}}}]}))
