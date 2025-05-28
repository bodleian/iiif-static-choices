import { R as i, r as s, a1 as v, a2 as b, a3 as m, w, a5 as g, bC as h, av as O, cI as _ } from "./index.js";
function P(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function j(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, R(r.key), r);
  }
}
function C(t, e, n) {
  return e && j(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function R(t) {
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
function V(t, e, n) {
  return e = a(e), T(t, l() ? Reflect.construct(e, n || [], a(t).constructor) : e.apply(t, n));
}
function T(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return S(t);
}
function S(t) {
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
function k(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && c(t, e);
}
function c(t, e) {
  return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, c(t, e);
}
var f = /* @__PURE__ */ function(t) {
  function e() {
    return P(this, e), V(this, e, arguments);
  }
  return k(e, t), C(e, [{
    key: "render",
    value: (
      /* eslint-disable jsx-a11y/media-has-caption */
      /** */
      function() {
        var r = this.props, p = r.captions, u = r.classes, d = r.videoOptions, y = r.videoResources;
        return /* @__PURE__ */ i.createElement("div", {
          className: u.container
        }, /* @__PURE__ */ i.createElement("video", Object.assign({
          className: u.video
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
  captions: [],
  videoOptions: {},
  videoResources: []
};
var x = function(e, n) {
  var r = n.windowId;
  return {
    captions: _(e, {
      windowId: r
    }) || [],
    videoOptions: O(e).videoOptions,
    videoResources: h(e, {
      windowId: r
    }) || []
  };
}, I = function() {
  return {
    container: {
      alignItems: "center",
      display: "flex",
      width: "100%"
    },
    video: {
      maxHeight: "100%",
      width: "100%"
    }
  };
}, N = v(g(), w(I), m(x, null), b("VideoViewer"));
const B = N(f);
export {
  B as default
};
//# sourceMappingURL=VideoViewer.js.map
