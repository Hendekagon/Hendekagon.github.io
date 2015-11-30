(ns dynomics.ui.svg
  "Functions for SVG string generation etc")

(defn trs
  "Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])"
  [& transforms]
  (apply str
    (mapcat
      (fn [[k & p]]
        (concat ({:t "translate" :r "rotate" :s "scale"} k) "(" (interpose \, (map double p)) ") "))
      transforms)))

(defn make-bezier
  ([[point & control-points]] {:point point :control-points control-points}))

(defn to-svg-path [[{[fpx fpy] :point [[fcx fcy]] :control-points ml :ml :as first-point :or {ml "M"}} & points]]
  (apply str
    (concat
      [ml fpx "," fpy]
      (mapcat
        (fn [[{[cp11 cp12] :control-points} {[cp21 cp22] :control-points p2 :point}]]
          (if cp22
            (concat " C" (interpose \, cp21) " " (interpose \, cp22) " " (interpose \, p2))
            (concat " C" (interpose \, (if cp12 cp12 cp11)) " " (interpose \, cp21) " " (interpose \, p2))))
        (partition 2 1 (cons first-point points))))))

(defn to-smooth-svg-path [[{[fpx fpy] :point [[fcx fcy]] :control-points :as first-point} & points]]
  (apply str
    (concat
      ["M" fpx "," fpy]
      (mapcat
        (fn [[{[cp1] :control-points} {[cp2] :control-points p2 :point}]]
          (concat " S" (interpose \, cp1) " " (interpose \, p2)))
        (partition 2 1 (cons first-point points))))))

(defn to-closed-svg-path [[{[fpx fpy] :point [[fcx fcy]] :control-points :as first-point} & points]]
  (apply str
    (concat
      ["M" fpx "," fpy]
      (mapcat
        (fn [[{[cp11 cp12] :control-points} {[cp21 cp22] :control-points p2 :point}]]
          (if cp22
            (concat " C" (interpose \, cp21) " " (interpose \, cp22) " " (interpose \, p2))
            (concat " C" (interpose \, (if cp12 cp12 cp11)) " " (interpose \, cp21) " " (interpose \, p2))))
        (partition 2 (cons first-point points))))))