!(function (e) {
  function t(t) {
    for (
      var o, i, c = t[0], l = t[1], d = t[2], u = 0, g = [];
      u < c.length;
      u++
    )
      (i = c[u]),
        Object.prototype.hasOwnProperty.call(s, i) && s[i] && g.push(s[i][0]),
        (s[i] = 0);
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    for (a && a(t); g.length; ) g.shift()();
    return r.push.apply(r, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, c = 1; c < n.length; c++) {
        var l = n[c];
        0 !== s[l] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    s = { 1: 0 },
    r = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var d = 0; d < c.length; d++) t(c[d]);
  var a = l;
  r.push([2, 2]), n();
})([
  ,
  ,
  function (e, t, n) {
    n(3), (e.exports = n(4));
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(5);
    const o = document.getElementById("quote"),
      s = document.getElementById("btn-more"),
      r = document.getElementById("expand-time"),
      i = document.getElementById("date-container"),
      c = document.getElementById("quote-content"),
      l = document.getElementById("quote-author"),
      d = document.getElementById("regenerate-quote"),
      a = document.getElementById("greeting"),
      u = document.getElementById("current-time"),
      g = document.getElementById("currnet-time-zone"),
      m = document.getElementById("day-of-the-year"),
      p = document.getElementById("day-of-the-week"),
      f = document.getElementById("week-number"),
      y = document.getElementById("current-city");
    let h, v, L;
    s.addEventListener("click", function (e) {
      e.preventDefault(),
        o.classList.contains("slide-out-top")
          ? (i.classList.remove("pt-5"),
            r.classList.add("slide-out-bottom"),
            r.classList.add("d-none"),
            o.classList.remove("slide-out-top"),
            o.classList.add("slide-in-top"),
            o.classList.remove("d-none"),
            i.classList.remove("slide-in-bottom"),
            i.classList.add("slide-in-top"),
            (s.innerHTML =
              '\n    more\n    <svg\n      id="svg"\n      width="40"\n      height="40"\n      viewBox="0 0 40 40"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <circle cx="20" cy="20" r="20" />\n      <path d="M14 17L20 23L26 17" stroke="white" stroke-width="2" />\n    </svg>'))
          : (r.classList.remove("d-none"),
            r.classList.remove("slide-out-bottom"),
            o.classList.add("slide-out-top"),
            o.classList.add("d-none"),
            i.classList.add("pt-5"),
            i.classList.remove("slide-in-top"),
            i.classList.add("slide-in-bottom"),
            (s.innerHTML =
              '\n  less\n    <svg\n        id="svg"\n        width="40"\n        height="40"\n        viewBox="0 0 40 40"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n        >\n        <circle cx="20" cy="20" r="20" />\n        <path d="M14 23L20 17L26 23" stroke="white" stroke-width="2" />\n    </svg>'));
    });
    const w = function () {
      const e = new XMLHttpRequest();
      e.open("GET", "https://api.quotable.io/random"),
        e.send(),
        e.addEventListener("load", function () {
          const e = JSON.parse(this.responseText);
          (c.textContent = e.content), (l.textContent = e.author);
        });
    };
    w(), d.addEventListener("click", w);
    !(function () {
      const e = new XMLHttpRequest();
      e.open("GET", "http://worldtimeapi.org/api/ip"),
        e.send(),
        e.addEventListener("load", function () {
          const e = JSON.parse(this.responseText);
          (u.textContent = e.datetime.slice(11, 16)),
            (g.textContent = e.timezone),
            (m.textContent = e.day_of_year),
            (p.textContent = e.day_of_week),
            (f.textContent = e.week_number),
            (function (e) {
              L = "";
              const t = "assets/img/sun.svg";
              (L =
                e >= 5 && e < 12
                  ? `<img src="${t}" alt="sun" /> Good morning, IT’S CURRENTLY`
                  : e >= 12 && e < 18
                  ? `<img src="${t}" alt="sun" />  Good afternoon, IT’S CURRENTLY`
                  : '<img src="assets/img/moon.svg" alt="moon" />  Good evening, IT’S CURRENTLY'),
                (a.textContent = ""),
                a.insertAdjacentHTML("afterbegin", L);
            })(u.textContent.slice(0, 2)),
            b(u.textContent.slice(0, 2));
        });
    })(),
      navigator.geolocation.getCurrentPosition(
        function (e) {
          console.log(e),
            (h = e.coords.latitude),
            (v = e.coords.longitude),
            console.log("Latitude:", h),
            console.log("Longitude:", v),
            (function (e, t) {
              fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${e},${t}&key=AIzaSyCApnyTd1IaheE-DGFE4gspB0xLrf8kix0`
              )
                .then((e) => e.json())
                .then((e) => {
                  const t = e.results;
                  if (t.length > 0) {
                    const e = t[0].address_components.find((e) =>
                      e.types.includes("locality")
                    );
                    if (e) {
                      console.log(e);
                      const t = e.long_name;
                      console.log("City:", t), (y.textContent = "In " + t);
                    }
                  } else console.log("No results found.");
                })
                .catch((e) => {
                  console.error("Error:", e);
                });
            })(h, v);
        },
        function (e) {
          console.log("Error:", e.message);
        }
      );
    const b = function (e) {
      e >= 6 && e < 18
        ? (document.body.style.backgroundImage =
            "url('assets/img/daytime.png')")
        : (e >= 18 || e < 6) &&
          (document.body.style.backgroundImage =
            "url('assets/img/nighttime.png')");
    };
  },
  function (e, t, n) {},
]);
