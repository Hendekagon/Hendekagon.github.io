(ns dynomics.ui.messaging
  "
  Handling messages to/from server,
  and internally

  WebSocket/async pub/sub

  "
  (:require-macros [cljs.core.async.macros :as asm :refer [go alt!]])
  (:require
    [cljs.reader :as reader]
    [cljs.core.async :as async :refer [<! >! put! chan close! pub sub]]
    [goog.events :as events]
    )
  (:import goog.net.WebSocket))

(defn subscribe!
  "Subscribe the given component to its topic with its handler"
  ([state topic f]
   (let [{:keys [message-channel message-pub]} (:messaging state) c (chan)]
     (sub message-pub topic c)
     (go (loop [] (f (<! c)) (recur)))
     state))
  ([state component]
   (doseq [{:keys [topic handler]} ((:subscriptions component) state)]
     (subscribe! state topic handler))))

(defn setup-updates [ch g]
  (go (loop [] (let [f (<! ch)] (g f)) (recur))))

(defn connect! [{{ws :ws ws-uri :ws-uri} :messaging :as s}]
  (.open ws ws-uri) s)

(defn make-channels
  "
  Configures messaging channels for the application:

  * ws a websocket for talking with the server
  * state-updates for state update requests
  * msgs for inter-component messaging

  "
  ([] (make-channels identity))
  ([f]
    (let [
          ws  (WebSocket.)
          rch (chan)
          wch (chan)
          doc-uri (.-location js/window)
          ws-uri (str "ws://" (.-host doc-uri) "/ws")
          mch (chan)
          msgs (pub mch (juxt :verb :type))
          state-updates (chan)
          messaging {:message-channel mch :message-pub msgs
                      :state-updates state-updates :ws-uri ws-uri}]
          (events/listen ws #js
            [ WebSocket.EventType.CLOSED
              WebSocket.EventType.ERROR
              WebSocket.EventType.MESSAGE
              WebSocket.EventType.OPENED]
            (fn [e]
              (cond (= (.-type e) WebSocket.EventType.MESSAGE)
                      (put! rch (.-message e))
                    (= (.-type e) WebSocket.EventType.OPENED)
                      (go (loop [] (let [m (<! wch)] (.send ws (pr-str m))) (recur))))))
     (set! (.-onbeforeunload js/window) (fn [] (close! rch) (.close ws)))
     (go (loop [] (let [m (reader/read-string (<! rch))] (put! mch m)) (recur)))
     (assoc messaging :ws ws :read-channel rch :write-channel wch))))