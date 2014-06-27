(defproject y-om "0.1.0-SNAPSHOT"
  :description  "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2234"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.4"]
                 [prismatic/om-tools "0.2.2"]
                 [ankha "0.1.1"]
                 [sablono "0.2.17"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "draw-me"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "draw_me.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :source-map true}}]})
