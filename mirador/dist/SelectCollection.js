import { a7 as m, a8 as y, a9 as b, aa as w, ab as _, R as i, x as g, a0 as C, r as P, a1 as S, a2 as I, a3 as O, bx as j, w as E, a5 as R, b5 as D } from "./index.js";
import { S as p } from "./WorkspaceArea.js";
var a = {}, f;
function z() {
  if (f) return a;
  f = 1;
  var t = m(), e = y();
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), a.default = void 0;
  var o = e(b()), r = t(/* @__PURE__ */ w()), n = (0, r.default)(/* @__PURE__ */ o.createElement("path", {
    d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
  }), "ListSharp");
  return a.default = n, a;
}
var H = /* @__PURE__ */ z();
const q = /* @__PURE__ */ _(H);
function T(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function x(t, e) {
  for (var o = 0; o < e.length; o++) {
    var r = e[o];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, k(r.key), r);
  }
}
function L(t, e, o) {
  return e && x(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function k(t) {
  var e = M(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function M(t, e) {
  if (typeof t != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function V(t, e, o) {
  return e = l(e), B(t, v() ? Reflect.construct(e, o || [], l(t).constructor) : e.apply(t, o));
}
function B(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return W(t);
}
function W(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function v() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (v = function() {
    return !!t;
  })();
}
function l(t) {
  return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, l(t);
}
function N(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && s(t, e);
}
function s(t, e) {
  return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, s(t, e);
}
var h = /* @__PURE__ */ function(t) {
  function e(o) {
    var r;
    return T(this, e), r = V(this, e, [o]), r.openCollectionDialog = r.openCollectionDialog.bind(r), r;
  }
  return N(e, t), L(e, [{
    key: "openCollectionDialog",
    value: function() {
      var r = this.props, n = r.collectionPath, c = r.manifestId, u = r.showCollectionDialog, d = r.windowId;
      u(c, n.slice(0, -1), d);
    }
    /** */
  }, {
    key: "render",
    value: function() {
      var r = this.props.t;
      return /* @__PURE__ */ i.createElement(p, {
        container: !0,
        justifyContent: "center",
        alignItems: "center"
      }, /* @__PURE__ */ i.createElement(p, {
        container: !0,
        direction: "column",
        alignItems: "center"
      }, /* @__PURE__ */ i.createElement(g, {
        variant: "h4",
        paragraph: !0
      }, /* @__PURE__ */ i.createElement("em", null, r("noItemSelected"))), /* @__PURE__ */ i.createElement(C, {
        color: "primary",
        variant: "contained",
        onClick: this.openCollectionDialog,
        startIcon: /* @__PURE__ */ i.createElement(q, null)
      }, r("showCollection"))));
    }
  }]);
}(P.Component);
h.defaultProps = {
  collectionPath: [],
  manifestId: null,
  t: function() {
  },
  windowId: null
};
var $ = function(e, o) {
  var r = o.windowId, n = D(e, {
    windowId: r
  }) || {}, c = n.collectionPath, u = n.manifestId;
  return {
    collectionPath: c,
    manifestId: u
  };
}, F = {
  showCollectionDialog: j
}, G = function(e) {
  return {};
}, K = S(R(), E(G), O($, F), I("SelectCollection"));
const Q = K(h);
export {
  Q as default
};
//# sourceMappingURL=SelectCollection.js.map
