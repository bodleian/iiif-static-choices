import { R as i, r as s, a1 as b, a2 as m, a3 as v, w, a5 as g, cI as h, bD as O, av as _ } from "./index.js";
function P(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function j(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, C(r.key), r);
  }
}
function R(t, e, n) {
  return e && j(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function C(t) {
  var e = E(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function E(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function T(t, e, n) {
  return e = a(e), S(t, l() ? Reflect.construct(e, n || [], a(t).constructor) : e.apply(t, n));
}
function S(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return k(t);
}
function k(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function l() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (l = function() {
    return !!t;
  })();
}
function a(t) {
  return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, a(t);
}
function V(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && u(t, e);
}
function u(t, e) {
  return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, u(t, e);
}
var f = /* @__PURE__ */ function(t) {
  function e() {
    return P(this, e), T(this, e, arguments);
  }
  return V(e, t), R(e, [{
    key: "render",
    value: (
      /* eslint-disable jsx-a11y/media-has-caption */
      /** */
      function() {
        var r = this.props, p = r.captions, c = r.classes, d = r.audioOptions, y = r.audioResources;
        return /* @__PURE__ */ i.createElement("div", {
          className: c.container
        }, /* @__PURE__ */ i.createElement("audio", Object.assign({
          className: c.audio
        }, d), y.map(function(o) {
          return /* @__PURE__ */ i.createElement(s.Fragment, {
            key: o.id
          }, /* @__PURE__ */ i.createElement("source", {
            src: o.id,
            type: o.getFormat()
          }));
        }), p.map(function(o) {
          return /* @__PURE__ */ i.createElement(s.Fragment, {
            key: o.id
          }, /* @__PURE__ */ i.createElement("track", {
            src: o.id,
            label: o.getDefaultLabel(),
            srcLang: o.getProperty("language")
          }));
        })));
      }
    )
    /* eslint-enable jsx-a11y/media-has-caption */
  }]);
}(s.Component);
f.defaultProps = {
  audioOptions: {},
  audioResources: [],
  captions: []
};
var A = function(e, n) {
  var r = n.windowId;
  return {
    audioOptions: _(e).audioOptions,
    audioResources: O(e, {
      windowId: r
    }) || [],
    captions: h(e, {
      windowId: r
    }) || []
  };
}, I = function() {
  return {
    audio: {
      width: "100%"
    },
    container: {
      alignItems: "center",
      display: "flex",
      width: "100%"
    }
  };
}, x = b(g(), w(I), v(A, null), m("AudioViewer"));
const D = x(f);
export {
  D as default
};
//# sourceMappingURL=AudioViewer.js.map
