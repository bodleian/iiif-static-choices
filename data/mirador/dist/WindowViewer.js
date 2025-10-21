import { a7 as x, a8 as T, a9 as z, aa as D, ab as V, R as o, aq as ae, ai as h, r as l, a1 as b, a2 as w, a3 as E, cU as ie, w as $, a5 as Z, bh as se, aA as ce, aC as q, aw as u, x as j, b9 as ue, cV as le, cL as fe, cW as pe, cT as ve, cX as de, cY as ye, cZ as me, c_ as he, P as be, ay as we, c$ as Ce, bG as _e, ag as Pe } from "./index.js";
var d = {}, A;
function Oe() {
  if (A) return d;
  A = 1;
  var t = x(), e = T();
  Object.defineProperty(d, "__esModule", {
    value: !0
  }), d.default = void 0;
  var n = e(z()), r = t(/* @__PURE__ */ D()), a = (0, r.default)(/* @__PURE__ */ n.createElement("path", {
    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }), "AddCircleOutlineSharp");
  return d.default = a, d;
}
var ge = /* @__PURE__ */ Oe();
const Ee = /* @__PURE__ */ V(ge);
var y = {}, M;
function $e() {
  if (M) return y;
  M = 1;
  var t = x(), e = T();
  Object.defineProperty(y, "__esModule", {
    value: !0
  }), y.default = void 0;
  var n = e(z()), r = t(/* @__PURE__ */ D()), a = (0, r.default)(/* @__PURE__ */ n.createElement("path", {
    d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }), "RemoveCircleOutlineSharp");
  return y.default = a, y;
}
var je = /* @__PURE__ */ $e();
const Se = /* @__PURE__ */ V(je);
function Ie(t) {
  return /* @__PURE__ */ o.createElement(ae, t, /* @__PURE__ */ o.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ o.createElement("path", {
    d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
  })));
}
function Re(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ke(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, xe(r.key), r);
  }
}
function Ne(t, e, n) {
  return e && ke(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function xe(t) {
  var e = Te(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Te(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function ze(t, e, n) {
  return e = C(e), De(t, G() ? Reflect.construct(e, n || [], C(t).constructor) : e.apply(t, n));
}
function De(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ve(t);
}
function Ve(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function G() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (G = function() {
    return !!t;
  })();
}
function C(t) {
  return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, C(t);
}
function Ze(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && S(t, e);
}
function S(t, e) {
  return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, S(t, e);
}
var U = /* @__PURE__ */ function(t) {
  function e(n) {
    var r;
    return Re(this, e), r = ze(this, e, [n]), r.handleZoomInClick = r.handleZoomInClick.bind(r), r.handleZoomOutClick = r.handleZoomOutClick.bind(r), r;
  }
  return Ze(e, t), Ne(e, [{
    key: "handleZoomInClick",
    value: function() {
      var r = this.props, a = r.windowId, s = r.updateViewport, i = r.viewer;
      s(a, {
        zoom: i.zoom * 2
      });
    }
    /**
     * @private
     */
  }, {
    key: "handleZoomOutClick",
    value: function() {
      var r = this.props, a = r.windowId, s = r.updateViewport, i = r.viewer;
      s(a, {
        zoom: i.zoom / 2
      });
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function() {
      var r = this.props, a = r.displayDivider, s = r.showZoomControls, i = r.classes, c = r.t, f = r.zoomToWorld;
      return s ? /* @__PURE__ */ o.createElement("div", {
        className: i.zoom_controls
      }, /* @__PURE__ */ o.createElement(h, {
        "aria-label": c("zoomIn"),
        onClick: this.handleZoomInClick
      }, /* @__PURE__ */ o.createElement(Ee, null)), /* @__PURE__ */ o.createElement(h, {
        "aria-label": c("zoomOut"),
        onClick: this.handleZoomOutClick
      }, /* @__PURE__ */ o.createElement(Se, null)), /* @__PURE__ */ o.createElement(h, {
        "aria-label": c("zoomReset"),
        onClick: function() {
          return f(!1);
        }
      }, /* @__PURE__ */ o.createElement(Ie, null)), a && /* @__PURE__ */ o.createElement("span", {
        className: i.divider
      })) : /* @__PURE__ */ o.createElement(o.Fragment, null);
    }
  }]);
}(l.Component);
U.defaultProps = {
  displayDivider: !0,
  showZoomControls: !1,
  t: function(e) {
    return e;
  },
  updateViewport: function() {
  },
  viewer: {},
  windowId: ""
};
var qe = function(e, n) {
  var r = n.windowId;
  return {
    showZoomControls: ce(e),
    viewer: se(e, {
      windowId: r
    })
  };
}, We = {
  updateViewport: ie
}, Be = function(e) {
  return {
    divider: {
      borderRight: "1px solid #808080",
      display: "inline-block",
      height: "24px",
      margin: "12px 6px"
    },
    ListItem: {
      paddingBottom: 0,
      paddingTop: 0
    },
    zoom_controls: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  };
}, Ae = b(Z(), $(Be), E(qe, We), w("ZoomControls"));
const Me = Ae(U);
function Le(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function He(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Ke(r.key), r);
  }
}
function Fe(t, e, n) {
  return e && He(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ke(t) {
  var e = Ge(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ge(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Ue(t, e, n) {
  return e = _(e), Xe(t, X() ? Reflect.construct(e, n || [], _(t).constructor) : e.apply(t, n));
}
function Xe(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ye(t);
}
function Ye(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function X() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (X = function() {
    return !!t;
  })();
}
function _(t) {
  return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, _(t);
}
function Je(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && I(t, e);
}
function I(t, e) {
  return I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, I(t, e);
}
var Y = /* @__PURE__ */ function(t) {
  function e() {
    return Le(this, e), Ue(this, e, arguments);
  }
  return Je(e, t), Fe(e, [{
    key: "render",
    value: (
      /** */
      function() {
        var r = this.props, a = r.canvasCount, s = r.canvasIndex, i = r.canvasLabel, c = r.classes, f = r.t;
        return /* @__PURE__ */ o.createElement("div", {
          className: q(u("osd-info"), c.osdInfo)
        }, /* @__PURE__ */ o.createElement(j, {
          display: "inline",
          variant: "caption",
          className: u("canvas-count")
        }, f("pagination", {
          current: s + 1,
          total: a
        })), /* @__PURE__ */ o.createElement(j, {
          display: "inline",
          variant: "caption",
          className: u("canvas-label")
        }, i && " • ".concat(i)));
      }
    )
  }]);
}(l.Component);
Y.defaultProps = {
  canvasLabel: void 0,
  t: function() {
  }
};
var Qe = function(e, n) {
  var r = n.windowId, a = ue(e, {
    windowId: r
  }), s = le(e, {
    windowId: r
  }), i = (fe(e, {
    windowId: r
  }) || {}).id;
  return {
    canvasCount: a.length,
    canvasIndex: s,
    canvasLabel: pe(e, {
      canvasId: i,
      windowId: r
    })
  };
}, et = {
  osdInfo: {
    order: 2,
    overflow: "hidden",
    paddingBottom: 3,
    textOverflow: "ellipsis",
    unicodeBidi: "plaintext",
    whiteSpace: "nowrap",
    width: "100%"
  }
}, tt = b($(et), Z(), E(Qe, null), w("ViewerInfo"));
const L = tt(Y);
var m = {}, H;
function rt() {
  if (H) return m;
  H = 1;
  var t = x(), e = T();
  Object.defineProperty(m, "__esModule", {
    value: !0
  }), m.default = void 0;
  var n = e(z()), r = t(/* @__PURE__ */ D()), a = (0, r.default)(/* @__PURE__ */ n.createElement("path", {
    d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }), "PlayCircleOutlineSharp");
  return m.default = a, m;
}
var nt = /* @__PURE__ */ rt();
const F = /* @__PURE__ */ V(nt);
function ot(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function at(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, st(r.key), r);
  }
}
function it(t, e, n) {
  return e && at(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function st(t) {
  var e = ct(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ct(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function ut(t, e, n) {
  return e = P(e), lt(t, J() ? Reflect.construct(e, n || [], P(t).constructor) : e.apply(t, n));
}
function lt(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ft(t);
}
function ft(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function J() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (J = function() {
    return !!t;
  })();
}
function P(t) {
  return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, P(t);
}
function pt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && R(t, e);
}
function R(t, e) {
  return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, R(t, e);
}
var Q = /* @__PURE__ */ function(t) {
  function e() {
    return ot(this, e), ut(this, e, arguments);
  }
  return pt(e, t), it(e, [{
    key: "render",
    value: (
      /**
       * Renders things
       */
      function() {
        var r = this.props, a = r.hasNextCanvas, s = r.hasPreviousCanvas, i = r.setNextCanvas, c = r.setPreviousCanvas, f = r.t, W = r.classes, ne = r.viewingDirection, B = "ltr", p = {}, v = {};
        switch (ne) {
          case "top-to-bottom":
            p = {
              transform: "rotate(270deg)"
            }, v = {
              transform: "rotate(90deg)"
            };
            break;
          case "bottom-to-top":
            p = {
              transform: "rotate(90deg)"
            }, v = {
              transform: "rotate(270deg)"
            };
            break;
          case "right-to-left":
            B = "rtl", p = {}, v = {
              transform: "rotate(180deg)"
            };
            break;
          default:
            p = {
              transform: "rotate(180deg)"
            }, v = {};
        }
        return /* @__PURE__ */ o.createElement("div", {
          className: q(u("osd-navigation"), W.osdNavigation),
          dir: B
        }, /* @__PURE__ */ o.createElement(h, {
          "aria-label": f("previousCanvas"),
          className: u("previous-canvas-button"),
          disabled: !s,
          onClick: function() {
            s && c();
          }
        }, /* @__PURE__ */ o.createElement(F, {
          style: p
        })), /* @__PURE__ */ o.createElement(h, {
          "aria-label": f("nextCanvas"),
          className: u("next-canvas-button"),
          disabled: !a,
          onClick: function() {
            a && i();
          }
        }, /* @__PURE__ */ o.createElement(F, {
          style: v
        })));
      }
    )
  }]);
}(l.Component);
Q.defaultProps = {
  hasNextCanvas: !1,
  hasPreviousCanvas: !1,
  setNextCanvas: function() {
  },
  setPreviousCanvas: function() {
  },
  viewingDirection: ""
};
var vt = function(e, n) {
  var r = n.windowId;
  return {
    hasNextCanvas: !!ye(e, {
      windowId: r
    }),
    hasPreviousCanvas: !!de(e, {
      windowId: r
    }),
    viewingDirection: ve(e, {
      windowId: r
    })
  };
}, dt = function(e, n) {
  var r = n.windowId;
  return {
    setNextCanvas: function() {
      return e(he(r));
    },
    setPreviousCanvas: function() {
      return e(me(r));
    }
  };
}, yt = {
  osdNavigation: {
    order: 1
  }
}, mt = b(
  $(yt),
  Z(),
  E(vt, dt),
  w("ViewerNavigation")
  // further HOC go here
);
const ht = mt(Q);
function bt(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function wt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, _t(r.key), r);
  }
}
function Ct(t, e, n) {
  return e && wt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _t(t) {
  var e = Pt(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Pt(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Ot(t, e, n) {
  return e = O(e), gt(t, ee() ? Reflect.construct(e, n || [], O(t).constructor) : e.apply(t, n));
}
function gt(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Et(t);
}
function Et(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ee() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ee = function() {
    return !!t;
  })();
}
function O(t) {
  return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, O(t);
}
function $t(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && k(t, e);
}
function k(t, e) {
  return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, k(t, e);
}
var te = /* @__PURE__ */ function(t) {
  function e() {
    return bt(this, e), Ot(this, e, arguments);
  }
  return $t(e, t), Ct(e, [{
    key: "canvasNavControlsAreStacked",
    value: (
      /**
       * Determine if canvasNavControls are stacked (based on a hard-coded width)
      */
      function() {
        var r = this.props.size;
        return r && r.width && r.width <= 253;
      }
    )
    /** */
  }, {
    key: "render",
    value: function() {
      var r = this.props, a = r.classes, s = r.visible, i = r.windowId, c = r.zoomToWorld;
      return s ? /* @__PURE__ */ o.createElement(be, {
        square: !0,
        className: q(a.controls, u("canvas-nav"), a.canvasNav, this.canvasNavControlsAreStacked() ? u("canvas-nav-stacked") : null, this.canvasNavControlsAreStacked() ? a.canvasNavStacked : null),
        elevation: 0
      }, /* @__PURE__ */ o.createElement(Me, {
        displayDivider: !this.canvasNavControlsAreStacked(),
        windowId: i,
        zoomToWorld: c
      }), /* @__PURE__ */ o.createElement(ht, {
        windowId: i
      }), /* @__PURE__ */ o.createElement(L, {
        windowId: i
      }), /* @__PURE__ */ o.createElement(we, this.props)) : /* @__PURE__ */ o.createElement(j, {
        variant: "srOnly",
        component: "div"
      }, /* @__PURE__ */ o.createElement(L, {
        windowId: i
      }));
    }
  }]);
}(l.Component);
te.defaultProps = {
  classes: {},
  visible: !0
};
var jt = function(e, n) {
  var r = n.windowId;
  return {
    visible: Pe(e).focusedWindowId === r
  };
}, St = function(e) {
  return {
    canvasNav: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center"
    },
    canvasNavStacked: {
      flexDirection: "column"
    },
    controls: {
      backgroundColor: _e.alpha(e.palette.background.paper, 0.5),
      bottom: 0,
      position: "absolute",
      width: "100%",
      zIndex: 50
    }
  };
}, It = b(E(jt), $(St), Ce.withSize(), w("WindowCanvasNavigationControls"));
const Rt = It(te);
function kt(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function K(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, xt(r.key), r);
  }
}
function Nt(t, e, n) {
  return e && K(t.prototype, e), n && K(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function xt(t) {
  var e = Tt(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Tt(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function zt(t, e, n) {
  return e = g(e), Dt(t, re() ? Reflect.construct(e, n || [], g(t).constructor) : e.apply(t, n));
}
function Dt(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Vt(t);
}
function Vt(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function re() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (re = function() {
    return !!t;
  })();
}
function g(t) {
  return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, g(t);
}
function Zt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && N(t, e);
}
function N(t, e) {
  return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, N(t, e);
}
var qt = /* @__PURE__ */ l.lazy(function() {
  return import("./OpenSeadragonViewer.js");
}), Wt = /* @__PURE__ */ function(t) {
  function e(n) {
    var r;
    return kt(this, e), r = zt(this, e, [n]), r.state = {}, r;
  }
  return Zt(e, t), Nt(e, [{
    key: "render",
    value: (
      /**
       * Renders things
       */
      function() {
        var r = this.props.windowId, a = this.state.hasError;
        return a ? /* @__PURE__ */ o.createElement(o.Fragment, null) : /* @__PURE__ */ o.createElement(l.Suspense, {
          fallback: /* @__PURE__ */ o.createElement("div", null)
        }, /* @__PURE__ */ o.createElement(qt, {
          windowId: r
        }, /* @__PURE__ */ o.createElement(Rt, {
          windowId: r
        })));
      }
    )
  }], [{
    key: "getDerivedStateFromError",
    value: function(r) {
      return {
        hasError: !0
      };
    }
  }]);
}(l.Component), Bt = b(
  w("WindowViewer")
  // further HOC go here
);
const Mt = Bt(Wt);
export {
  Mt as default
};
//# sourceMappingURL=WindowViewer.js.map
