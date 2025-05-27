import { bd as z, r as f, w as P, h as K, b as S, j as W, bc as F, R as u, cJ as G, aC as g, cK as M, bv as I, b2 as B, a1 as A, a3 as E, cL as H, cM as L, cN as J, cO as Q, av as U, cP as X, cQ as Y, cR as Z, cS as ee, aP as te, P as ne, a2 as re, cT as ae, b9 as oe } from "./index.js";
import { A as ie } from "./WorkspaceArea.js";
const se = z(/* @__PURE__ */ f.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}));
var ce = function(e) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none"
    },
    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: e.palette.background.default,
      backgroundColor: e.palette.type === "light" ? e.palette.grey[400] : e.palette.grey[600]
    },
    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},
    /* Styles applied to the root element if `variant="circular"`. */
    circular: {},
    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: e.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },
    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: "cover",
      // Hide alt text.
      color: "transparent",
      // Hide the image broken icon, only works on Chrome.
      textIndent: 1e4
    },
    /* Styles applied to the fallback icon */
    fallback: {
      width: "75%",
      height: "75%"
    }
  };
};
function le(t) {
  var e = t.src, r = t.srcSet, n = f.useState(!1), i = n[0], o = n[1];
  return f.useEffect(function() {
    if (!(!e && !r)) {
      o(!1);
      var s = !0, a = new Image();
      return a.src = e, a.srcSet = r, a.onload = function() {
        s && o("loaded");
      }, a.onerror = function() {
        s && o("error");
      }, function() {
        s = !1;
      };
    }
  }, [e, r]), i;
}
var ue = /* @__PURE__ */ f.forwardRef(function(e, r) {
  var n = e.alt, i = e.children, o = e.classes, s = e.className, a = e.component, c = a === void 0 ? "div" : a, l = e.imgProps, p = e.sizes, d = e.src, v = e.srcSet, O = e.variant, D = O === void 0 ? "circular" : O, q = K(e, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]), h = null, V = le({
    src: d,
    srcSet: v
  }), _ = d || v, j = _ && V !== "error";
  return j ? h = /* @__PURE__ */ f.createElement("img", S({
    alt: n,
    src: d,
    srcSet: v,
    sizes: p,
    className: o.img
  }, l)) : i != null ? h = i : _ && n ? h = n[0] : h = /* @__PURE__ */ f.createElement(se, {
    className: o.fallback
  }), /* @__PURE__ */ f.createElement(c, S({
    className: W(o.root, o.system, o[D], s, !j && o.colorDefault),
    ref: r
  }, q), h);
});
const $ = P(ce, {
  name: "MuiAvatar"
})(ue);
function fe(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function pe(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ve(n.key), n);
  }
}
function de(t, e, r) {
  return e && pe(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ve(t) {
  var e = he(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function he(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function ye(t, e, r) {
  return e = y(e), me(t, T() ? Reflect.construct(e, r || [], y(t).constructor) : e.apply(t, r));
}
function me(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ge(t);
}
function ge(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function T() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (T = function() {
    return !!t;
  })();
}
function y(t) {
  return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, y(t);
}
function be(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && w(t, e);
}
function w(t, e) {
  return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, w(t, e);
}
var k = /* @__PURE__ */ function(t) {
  function e(r) {
    var n;
    return fe(this, e), n = ye(this, e, [r]), n.state = {
      requestedAnnotations: !1
    }, n.handleSelect = n.handleSelect.bind(n), n.handleKey = n.handleKey.bind(n), n.handleIntersection = n.handleIntersection.bind(n), n;
  }
  return be(e, t), de(e, [{
    key: "handleSelect",
    value: function() {
      var n = this.props, i = n.canvas, o = n.selected, s = n.setCanvas, a = n.focusOnCanvas;
      o ? a() : s(i.id);
    }
    /** @private */
  }, {
    key: "handleKey",
    value: function(n) {
      var i = this.props, o = i.canvas, s = i.setCanvas, a = i.focusOnCanvas;
      this.keys = {
        enter: "Enter",
        space: " "
      }, this.chars = {
        enter: 13,
        space: 32
      };
      var c = n.key === this.keys.enter || n.which === this.chars.enter || n.key === this.keys.space || n.which === this.chars.space;
      c ? a() : s(o.id);
    }
    /** */
  }, {
    key: "handleIntersection",
    value: function(n) {
      var i = n.isIntersecting, o = this.props, s = o.annotationsCount, a = o.requestCanvasAnnotations, c = this.state.requestedAnnotations;
      !i || s === void 0 || s > 0 || c || (this.setState({
        requestedAnnotations: !0
      }), a());
    }
    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.annotationsCount, o = n.searchAnnotationsCount, s = n.canvas, a = n.classes, c = n.config, l = n.selected, p = new F(s);
      return /* @__PURE__ */ u.createElement(G, {
        onChange: this.handleIntersection
      }, /* @__PURE__ */ u.createElement("div", {
        key: s.index,
        className: g(a.galleryViewItem, l ? a.selected : "", o > 0 ? a.hasAnnotations : ""),
        onClick: this.handleSelect,
        onKeyUp: this.handleKey,
        role: "button",
        tabIndex: 0
      }, /* @__PURE__ */ u.createElement(M, {
        resource: s,
        labelled: !0,
        variant: "outside",
        maxWidth: c.width,
        maxHeight: c.height,
        style: {
          margin: "0 auto",
          maxWidth: "".concat(Math.ceil(c.height * p.aspectRatio), "px")
        }
      }, /* @__PURE__ */ u.createElement("div", {
        className: a.chips
      }, o > 0 && /* @__PURE__ */ u.createElement(I, {
        avatar: /* @__PURE__ */ u.createElement($, {
          className: a.avatar,
          classes: {
            circle: a.avatarIcon
          }
        }, /* @__PURE__ */ u.createElement(B, {
          fontSize: "small"
        })),
        label: o,
        className: g(a.searchChip),
        size: "small"
      }), (i || 0) > 0 && /* @__PURE__ */ u.createElement(I, {
        avatar: /* @__PURE__ */ u.createElement($, {
          className: a.avatar,
          classes: {
            circle: a.avatarIcon
          }
        }, /* @__PURE__ */ u.createElement(ie, {
          className: a.annotationIcon
        })),
        label: i,
        className: g(a.annotationsChip),
        size: "small"
      })))));
    }
  }]);
}(f.Component);
k.defaultProps = {
  annotationsCount: void 0,
  config: {
    height: 100,
    width: null
  },
  requestCanvasAnnotations: function() {
  },
  searchAnnotationsCount: 0,
  selected: !1
};
function x(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function b(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? x(Object(r), !0).forEach(function(n) {
      we(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function we(t, e, r) {
  return (e = Ce(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Ce(t) {
  var e = Pe(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Pe(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Oe = function(e) {
  return {
    annotationIcon: {
      height: "1rem",
      width: "1rem"
    },
    annotationsChip: b({}, e.typography.caption),
    avatar: {
      backgroundColor: "transparent"
    },
    chips: {
      opacity: 0.875,
      position: "absolute",
      right: 0,
      textAlign: "right",
      top: 0
    },
    galleryViewItem: {
      "&$hasAnnotations": {
        border: "2px solid ".concat(e.palette.action.selected)
      },
      "&$selected,&$selected$hasAnnotations": {
        border: "2px solid ".concat(e.palette.primary.main)
      },
      "&:focus": {
        outline: "none"
      },
      "&:hover": {
        backgroundColor: e.palette.action.hover
      },
      border: "2px solid transparent",
      cursor: "pointer",
      display: "inline-block",
      margin: "".concat(e.spacing(1), "px ").concat(e.spacing(0.5), "px"),
      maxHeight: function(n) {
        return n.config.height + 45;
      },
      minWidth: "60px",
      overflow: "hidden",
      padding: e.spacing(0.5),
      position: "relative",
      width: "min-content"
    },
    hasAnnotations: {},
    searchChip: b(b({}, e.typography.caption), {}, {
      "&$selected $avatar": {
        backgroundColor: e.palette.highlights.primary
      },
      marginTop: 2
    }),
    selected: {}
  };
}, _e = function(e, r) {
  var n = r.canvas, i = r.windowId, o = H(e, {
    windowId: i
  }), s = L(e, {
    windowId: i
  }), a = J(s.map(function(l) {
    return l.resources;
  })).filter(function(l) {
    return l.targetId === n.id;
  }), c = Q(e, {
    content: "annotations",
    windowId: i
  }).length > 0;
  return {
    annotationsCount: function() {
      if (c) {
        var l = X(e, {
          canvasId: n.id
        });
        return l.reduce(function(p, d) {
          return p + d.resources.filter(function(v) {
            return v.targetId === n.id;
          }).length;
        }, 0);
      }
    }(),
    config: U(e).galleryView,
    searchAnnotationsCount: a.length,
    selected: o && o.id === n.id
  };
}, je = function(e, r) {
  var n = r.canvas;
  r.id;
  var i = r.windowId;
  return {
    focusOnCanvas: function() {
      return e(te(i, "single"));
    },
    requestCanvasAnnotations: function() {
      return e(ee(i, n.id));
    },
    setCanvas: function() {
      for (var s = arguments.length, a = new Array(s), c = 0; c < s; c++)
        a[c] = arguments[c];
      return e(Y.apply(Z, [i].concat(a)));
    }
  };
}, Se = A(
  E(_e, je),
  P(Oe)
  // further HOC go here
);
const Ie = Se(k);
function $e(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function xe(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Ee(n.key), n);
  }
}
function Ae(t, e, r) {
  return e && xe(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ee(t) {
  var e = Te(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Te(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function ke(t, e, r) {
  return e = m(e), Re(t, R() ? Reflect.construct(e, r || [], m(t).constructor) : e.apply(t, r));
}
function Re(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ne(t);
}
function Ne(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function R() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (R = function() {
    return !!t;
  })();
}
function m(t) {
  return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, m(t);
}
function De(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && C(t, e);
}
function C(t, e) {
  return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, C(t, e);
}
var N = /* @__PURE__ */ function(t) {
  function e() {
    return $e(this, e), ke(this, e, arguments);
  }
  return De(e, t), Ae(e, [{
    key: "render",
    value: (
      /**
       * Renders things
       */
      function() {
        var n = this.props, i = n.canvases, o = n.classes, s = n.viewingDirection, a = n.windowId, c = s === "right-to-left" ? "rtl" : "ltr";
        return /* @__PURE__ */ u.createElement(ne, {
          component: "section",
          dir: c,
          square: !0,
          elevation: 0,
          className: o.galleryContainer,
          id: "".concat(a, "-gallery")
        }, i.map(function(l) {
          return /* @__PURE__ */ u.createElement(Ie, {
            key: l.id,
            windowId: a,
            canvas: l
          });
        }));
      }
    )
  }]);
}(f.Component);
N.defaultProps = {
  classes: {},
  viewingDirection: ""
};
var qe = function(e, r) {
  var n = r.windowId;
  return {
    canvases: oe(e, {
      windowId: n
    }),
    viewingDirection: ae(e, {
      windowId: n
    })
  };
}, Ve = function(e) {
  return {
    galleryContainer: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      overflowX: "hidden",
      overflowY: "scroll",
      padding: "50px 0 50px 20px",
      width: "100%"
    }
  };
}, ze = A(
  P(Ve),
  E(qe),
  re("GalleryView")
  // further HOC go here
);
const Fe = ze(N);
export {
  Fe as default
};
//# sourceMappingURL=GalleryView.js.map
