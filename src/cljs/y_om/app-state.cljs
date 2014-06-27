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
                                         :card-modal {:display false
                                                      :id 10}}}
                                {:name "Doing" :cards [{:task "Drag Lists"
                                                        :id 1}
                                                       {:task "Drag Cards"
                                                        :id 2}
                                                       {:task "Make it look pretty"
                                                        :id 3}
                                                       {:task "Handle Resizing"
                                                        :id 10}
                                                       {:task "placeholder"
                                                        :id 11}
                                                       {:task "placeholder"
                                                        :id 12}
                                                       {:task "placeholder"
                                                        :id 13}
                                                       {:task "placeholder"
                                                        :id 14}
                                                       {:task "placeholder"
                                                        :id 15}
                                                       {:task "placeholder"
                                                        :id 16}
                                                       {:task "placeholder"
                                                        :id 17}
                                                       {:task "placeholder"
                                                        :id 18}]
                                 :state {:add-header? false
                                         :add-card? false
                                         :card-modal {:display false
                                                      :id 0}}}
                                {:name "Done" :cards []
                                 :state {:add-header? false
                                         :add-card? false
                                         :card-modal {:display false
                                                      :id 0}}}]}))
