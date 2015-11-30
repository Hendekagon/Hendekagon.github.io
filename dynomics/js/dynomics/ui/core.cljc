(ns dynomics.ui.core
  "
  This namespace is for managing the state of the application

  "
  (:require
    [dynomics.space.core :as dc]
    ))

(enable-console-print!)

(def alphabet
  {
   65		:a
   66		:b
   67		:c
   68		:d
   69		:e
   70		:f
   71		:g
   72		:h
   73		:i
   74		:j
   75		:k
   76		:l
   77		:m
   78		:n
   79		:o
   80		:p
   81		:q
   82		:r
   83		:s
   84		:t
   85		:u
   86		:v
   87		:w
   88		:x
   89		:y
   90		:z
   }
  )

(def numbers
  {48		:0
   49		:1
   50		:2
   51		:3
   52		:4
   53		:5
   54		:6
   55		:7
   56		:8
   57		:9}
  )

; keycodes to keywords (name of key on keyboard)
; if the key has multiple synonyms, the shortest name first in alphabet is taken
(def keycode-to-keyword
  (merge
    {
     8   :backspace
     9   :tab
     13  :enter
     16  :shift
     17  :ctrl
     18  :alt
     19  :break
     20  :capslock
     27  :esc
     91  :leftmeta
     93  :rightmeta
     32  :space
     33  :pageup
     34  :pagedown
     35  :end
     36  :home
     37  :left
     38  :up
     39  :right
     40  :down
     45  :insert
     46  :delete

     144 :numlock
     145 :scrolllock
     188 :comma
     190 :dot
     191 :forwardslash
     192 :tilde
     219 :leftbracket
     220 :backslash
     221 :rightbracket
     222 ::apostrophe

     ; http://www.javascripter.net/faq/keycodes.htm
     186 :semicolon
     59  :semicolon
     187 :equals
     107 :equals
     189 :minus
     109 :minus
     }
    alphabet
    numbers
    ))

(defn rotate-left [v] (conj (subvec v 1 (count v)) (first v)))

(defn rotate-right [v] (vec (cons (last v) (subvec v 0 (dec (count v))))))

(defn kop [x] (update-in x [:keypath] (fn [p] (if (zero? (count p)) [:keymap] (subvec p 0 (dec (count p)))))))

(defn reset-keypath [s] (assoc s :keypath [:keymap]))

(defn keydown [s] (update-in s [:keypath] (fn [kp] (conj kp (:key s)))))

(defn keyup
  ([s] (keyup s (get-in s (conj (:keypath s) (:key s)) identity)))
  ([s f] (or (f (kop (assoc s :fn (.-name f)))) s)))

(defn
  fn-for-event
  [s e]
  (if
    (= e (select-keys s (keys e)))
    identity
    (get-in s [(:event e) (:key e)] (get-in s [(:event e) :default] identity))))

(defn push-history [state]
  (update-in state [:history]
    (fn [h] (conj h (apply dissoc state (:dont-record state))))))

(defn keep-stuff [cs us] (apply assoc us (mapcat (juxt identity (fn [k] (k cs))) (:dont-record cs))))

(defn undo
  ([s] (undo s (rotate-right (rotate-right (:history s)))))
  ([s h] (undo s h (first h)))
  ([cs h us]
   (if us
     (reset-keypath
       (keep-stuff cs (assoc us :history h :fn :undo)))
     cs))
  )

(defn redo
  ([s] (redo s (rotate-left (rotate-left (:history s)))))
  ([s h] (redo s h (last h)))
  ([cs h rs]
   (if rs
     (reset-keypath (keep-stuff cs (assoc rs :history h :fn :redo)))
     cs)))

(defn add-keybinding [s k f] (assoc-in s [:keymap k k] f))

(defn default-keymap
  []
  {
   :z       {:z undo :shift {:z {:z redo} :shift identity} :ctrl identity}
   :x       {:x redo}
   :default identity
   :esc reset-keypath
   })

(defn update-state
  "Returns an updated version of the given state,
  either in response to the given event e, or according
  to the given function f"
  ([s e] (update-state (merge s e) e (fn-for-event s e)))
  ([s e f]
   (let [ns (f s) g (or (:fn ns) (.-name f))]
     (if (or (get-in s [:action :dont-record]) (= g :undo) (= g :redo) (= g "cljs$core$identity"))
       (update-in ns [:version] inc)
       (assoc (update-in ns [:version] inc) :history (:history (push-history s)))
      ))))

(defn make-state
  "Returns a blank default state"
  ([]
   {
    :app-name "Dynomics"
    :app-version "0.1.0-alpha"
    :dont-record        [:messaging :show-history]
    :version            0
    :dt 0
    :action             {}
    :history            [{:action {:description "-start-"}}]
    :vx                 1
    :space (dynomics.space.core/make-phase-space)
    :ui
                        {
                         :mouse            {:vx 0 :vy 0 :x 0 :y 0}
                         :current-function :dynomics
                         :functions        {}
                         :appropriate-functions {}
                         }
    :keymap             (default-keymap)
    :keyup              {:esc reset-keypath :default keyup}
    :keydown            {:default keydown}
    :keypath            [:keymap]})
  )
