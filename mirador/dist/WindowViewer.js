import { o as e, t } from "./chunk.js";
import { Ai as n, G as r, Gt as i, J as a, K as o, Ln as s, Oi as c, W as l, ci as u, da as d, hn as ee, mt as te, or as f, q as ne, sr as p, ta as m, un as re, vt as ie } from "./selectors.js";
import { n as ae, r as h, t as g } from "./colorManipulator.js";
import { F as oe, N as se, P as ce } from "./actions.js";
import { t as le } from "./Paper.js";
import { t as ue } from "./classnames.js";
import { B as _, N as de, P as fe, R as v, V as y, l as b } from "./ButtonBase.js";
import { n as x, t as pe } from "./PluginHook.js";
//#region node_modules/@material-ui/icons/AddCircleOutlineSharp.js
var me = /* @__PURE__ */ t(((e) => {
	var t = _(), n = v();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(d());
	e.default = (0, t(b()).default)(/*#__PURE__*/ r.createElement("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), "AddCircleOutlineSharp");
})), S = /* @__PURE__ */ t(((e) => {
	var t = _(), n = v();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(d());
	e.default = (0, t(b()).default)(/*#__PURE__*/ r.createElement("path", { d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), "RemoveCircleOutlineSharp");
}));
//#endregion
//#region node_modules/mirador/dist/es/src/components/icons/RestoreZoomIcon.js
n();
var C = /* @__PURE__ */ e(ue()), he = ae(), ge = g(), _e = /* @__PURE__ */ e(me()), ve = /* @__PURE__ */ e(S()), w = /* @__PURE__ */ e(d());
de();
function ye(e) {
	return /*#__PURE__*/ w.createElement(fe, e, /*#__PURE__*/ w.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "24",
		height: "24",
		viewBox: "0 0 24 24"
	}, /*#__PURE__*/ w.createElement("path", { d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z" }), /*#__PURE__*/ w.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z" })));
}
//#endregion
//#region node_modules/mirador/dist/es/src/components/ZoomControls.js
function be(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function T(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Se(r.key), r);
	}
}
function xe(e, t, n) {
	return t && T(e.prototype, t), n && T(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Se(e) {
	var t = Ce(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ce(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function we(e, t, n) {
	return t = k(t), E(e, O() ? Reflect.construct(t, n || [], k(e).constructor) : t.apply(e, n));
}
function E(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return D(e);
}
function D(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function O() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (O = function() {
		return !!e;
	})();
}
function k(e) {
	return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, k(e);
}
function Te(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && A(e, t);
}
function A(e, t) {
	return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, A(e, t);
}
var j = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return be(this, t), n = we(this, t, [e]), n.handleZoomInClick = n.handleZoomInClick.bind(n), n.handleZoomOutClick = n.handleZoomOutClick.bind(n), n;
	}
	return Te(t, e), xe(t, [
		{
			key: "handleZoomInClick",
			value: function() {
				var e = this.props, t = e.windowId, n = e.updateViewport, r = e.viewer;
				n(t, { zoom: r.zoom * 2 });
			}
		},
		{
			key: "handleZoomOutClick",
			value: function() {
				var e = this.props, t = e.windowId, n = e.updateViewport, r = e.viewer;
				n(t, { zoom: r.zoom / 2 });
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.displayDivider, n = e.showZoomControls, r = e.classes, i = e.t, a = e.zoomToWorld;
				return n ? /*#__PURE__*/ w.createElement("div", { className: r.zoom_controls }, /*#__PURE__*/ w.createElement(h, {
					"aria-label": i("zoomIn"),
					onClick: this.handleZoomInClick
				}, /*#__PURE__*/ w.createElement(_e.default, null)), /*#__PURE__*/ w.createElement(h, {
					"aria-label": i("zoomOut"),
					onClick: this.handleZoomOutClick
				}, /*#__PURE__*/ w.createElement(ve.default, null)), /*#__PURE__*/ w.createElement(h, {
					"aria-label": i("zoomReset"),
					onClick: function() {
						return a(!1);
					}
				}, /*#__PURE__*/ w.createElement(ye, null)), t && /*#__PURE__*/ w.createElement("span", { className: r.divider })) : /*#__PURE__*/ w.createElement(w.Fragment, null);
			}
		}
	]);
}(w.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/ZoomControls.js
j.defaultProps = {
	displayDivider: !0,
	showZoomControls: !1,
	t: function(e) {
		return e;
	},
	updateViewport: function() {},
	viewer: {},
	windowId: ""
}, f();
var Ee = function(e, t) {
	var n = t.windowId;
	return {
		showZoomControls: i(e),
		viewer: re(e, { windowId: n })
	};
}, De = { updateViewport: oe }, Oe = c(u(), p(function(e) {
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
}), m(Ee, De), s("ZoomControls"))(j);
//#endregion
//#region node_modules/mirador/dist/es/src/components/ViewerInfo.js
function ke(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function M(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, je(r.key), r);
	}
}
function Ae(e, t, n) {
	return t && M(e.prototype, t), n && M(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function je(e) {
	var t = Me(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Me(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ne(e, t, n) {
	return t = P(t), Pe(e, N() ? Reflect.construct(t, n || [], P(e).constructor) : t.apply(e, n));
}
function Pe(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Fe(e);
}
function Fe(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function N() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (N = function() {
		return !!e;
	})();
}
function P(e) {
	return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, P(e);
}
function Ie(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && F(e, t);
}
function F(e, t) {
	return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, F(e, t);
}
var I = /*#__PURE__*/ function(e) {
	function t() {
		return ke(this, t), Ne(this, t, arguments);
	}
	return Ie(t, e), Ae(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.canvasCount, n = e.canvasIndex, r = e.canvasLabel, i = e.classes, a = e.t;
			return /*#__PURE__*/ w.createElement("div", { className: (0, C.default)(x("osd-info"), i.osdInfo) }, /*#__PURE__*/ w.createElement(y, {
				display: "inline",
				variant: "caption",
				className: x("canvas-count")
			}, a("pagination", {
				current: n + 1,
				total: t
			})), /*#__PURE__*/ w.createElement(y, {
				display: "inline",
				variant: "caption",
				className: x("canvas-label")
			}, r && ` • ${r}`));
		}
	}]);
}(w.Component);
I.defaultProps = {
	canvasLabel: void 0,
	t: function() {}
}, n(), f();
var L = c(p({ osdInfo: {
	order: 2,
	overflow: "hidden",
	paddingBottom: 3,
	textOverflow: "ellipsis",
	unicodeBidi: "plaintext",
	whiteSpace: "nowrap",
	width: "100%"
} }), u(), m(function(e, t) {
	var n = t.windowId, i = r(e, { windowId: n }), a = te(e, { windowId: n }), s = (o(e, { windowId: n }) || {}).id;
	return {
		canvasCount: i.length,
		canvasIndex: a,
		canvasLabel: l(e, {
			canvasId: s,
			windowId: n
		})
	};
}, null), s("ViewerInfo"))(I), R = /* @__PURE__ */ e((/* @__PURE__ */ t(((e) => {
	var t = _(), n = v();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(d());
	e.default = (0, t(b()).default)(/*#__PURE__*/ r.createElement("path", { d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), "PlayCircleOutlineSharp");
})))());
function Le(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function z(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ze(r.key), r);
	}
}
function Re(e, t, n) {
	return t && z(e.prototype, t), n && z(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ze(e) {
	var t = Be(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Be(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ve(e, t, n) {
	return t = V(t), He(e, B() ? Reflect.construct(t, n || [], V(e).constructor) : t.apply(e, n));
}
function He(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ue(e);
}
function Ue(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function B() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (B = function() {
		return !!e;
	})();
}
function V(e) {
	return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, V(e);
}
function We(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && H(e, t);
}
function H(e, t) {
	return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, H(e, t);
}
var U = /*#__PURE__*/ function(e) {
	function t() {
		return Le(this, t), Ve(this, t, arguments);
	}
	return We(t, e), Re(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.hasNextCanvas, n = e.hasPreviousCanvas, r = e.setNextCanvas, i = e.setPreviousCanvas, a = e.t, o = e.classes, s = e.viewingDirection, c = "ltr", l = {}, u = {};
			switch (s) {
				case "top-to-bottom":
					l = { transform: "rotate(270deg)" }, u = { transform: "rotate(90deg)" };
					break;
				case "bottom-to-top":
					l = { transform: "rotate(90deg)" }, u = { transform: "rotate(270deg)" };
					break;
				case "right-to-left":
					c = "rtl", l = {}, u = { transform: "rotate(180deg)" };
					break;
				default: l = { transform: "rotate(180deg)" }, u = {};
			}
			return /*#__PURE__*/ w.createElement("div", {
				className: (0, C.default)(x("osd-navigation"), o.osdNavigation),
				dir: c
			}, /*#__PURE__*/ w.createElement(h, {
				"aria-label": a("previousCanvas"),
				className: x("previous-canvas-button"),
				disabled: !n,
				onClick: function() {
					n && i();
				}
			}, /*#__PURE__*/ w.createElement(R.default, { style: l })), /*#__PURE__*/ w.createElement(h, {
				"aria-label": a("nextCanvas"),
				className: x("next-canvas-button"),
				disabled: !t,
				onClick: function() {
					t && r();
				}
			}, /*#__PURE__*/ w.createElement(R.default, { style: u })));
		}
	}]);
}(w.Component);
U.defaultProps = {
	hasNextCanvas: !1,
	hasPreviousCanvas: !1,
	setNextCanvas: function() {},
	setPreviousCanvas: function() {},
	viewingDirection: ""
}, n(), f();
var Ge = c(p({ osdNavigation: { order: 1 } }), u(), m(function(e, t) {
	var n = t.windowId;
	return {
		hasNextCanvas: !!ne(e, { windowId: n }),
		hasPreviousCanvas: !!a(e, { windowId: n }),
		viewingDirection: ie(e, { windowId: n })
	};
}, function(e, t) {
	var n = t.windowId;
	return {
		setNextCanvas: function() {
			return e(se(n));
		},
		setPreviousCanvas: function() {
			return e(ce(n));
		}
	};
}), s("ViewerNavigation"))(U);
//#endregion
//#region node_modules/mirador/dist/es/src/components/WindowCanvasNavigationControls.js
function Ke(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function W(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Je(r.key), r);
	}
}
function qe(e, t, n) {
	return t && W(e.prototype, t), n && W(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Je(e) {
	var t = Ye(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ye(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Xe(e, t, n) {
	return t = K(t), Ze(e, G() ? Reflect.construct(t, n || [], K(e).constructor) : t.apply(e, n));
}
function Ze(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Qe(e);
}
function Qe(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function G() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (G = function() {
		return !!e;
	})();
}
function K(e) {
	return K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, K(e);
}
function $e(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && q(e, t);
}
function q(e, t) {
	return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, q(e, t);
}
var J = /*#__PURE__*/ function(e) {
	function t() {
		return Ke(this, t), Xe(this, t, arguments);
	}
	return $e(t, e), qe(t, [{
		key: "canvasNavControlsAreStacked",
		value: function() {
			var e = this.props.size;
			return e && e.width && e.width <= 253;
		}
	}, {
		key: "render",
		value: function() {
			var e = this.props, t = e.classes, n = e.visible, r = e.windowId, i = e.zoomToWorld;
			return n ? /*#__PURE__*/ w.createElement(le, {
				square: !0,
				className: (0, C.default)(t.controls, x("canvas-nav"), t.canvasNav, this.canvasNavControlsAreStacked() ? x("canvas-nav-stacked") : null, this.canvasNavControlsAreStacked() ? t.canvasNavStacked : null),
				elevation: 0
			}, /*#__PURE__*/ w.createElement(Oe, {
				displayDivider: !this.canvasNavControlsAreStacked(),
				windowId: r,
				zoomToWorld: i
			}), /*#__PURE__*/ w.createElement(Ge, { windowId: r }), /*#__PURE__*/ w.createElement(L, { windowId: r }), /*#__PURE__*/ w.createElement(pe, this.props)) : /*#__PURE__*/ w.createElement(y, {
				variant: "srOnly",
				component: "div"
			}, /*#__PURE__*/ w.createElement(L, { windowId: r }));
		}
	}]);
}(w.Component);
J.defaultProps = {
	classes: {},
	visible: !0
}, n(), f();
var et = c(m(function(e, t) {
	var n = t.windowId;
	return { visible: ee(e).focusedWindowId === n };
}), p(function(e) {
	return {
		canvasNav: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			textAlign: "center"
		},
		canvasNavStacked: { flexDirection: "column" },
		controls: {
			backgroundColor: (0, ge.alpha)(e.palette.background.paper, .5),
			bottom: 0,
			position: "absolute",
			width: "100%",
			zIndex: 50
		}
	};
}), (0, he.withSize)(), s("WindowCanvasNavigationControls"))(J);
//#endregion
//#region node_modules/mirador/dist/es/src/components/WindowViewer.js
function tt(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Y(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, X(r.key), r);
	}
}
function nt(e, t, n) {
	return t && Y(e.prototype, t), n && Y(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function X(e) {
	var t = rt(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function rt(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function it(e, t, n) {
	return t = Q(t), at(e, Z() ? Reflect.construct(t, n || [], Q(e).constructor) : t.apply(e, n));
}
function at(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ot(e);
}
function ot(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Z() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Z = function() {
		return !!e;
	})();
}
function Q(e) {
	return Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Q(e);
}
function st(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $(e, t);
}
function $(e, t) {
	return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, $(e, t);
}
var ct = /*#__PURE__*/ (0, w.lazy)(function() {
	return import("./OpenSeadragonViewer.js");
}), lt = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return tt(this, t), n = it(this, t, [e]), n.state = {}, n;
	}
	return st(t, e), nt(t, [{
		key: "render",
		value: function() {
			var e = this.props.windowId;
			return this.state.hasError ? /*#__PURE__*/ w.createElement(w.Fragment, null) : /*#__PURE__*/ w.createElement(w.Suspense, { fallback: /*#__PURE__*/ w.createElement("div", null) }, /*#__PURE__*/ w.createElement(ct, { windowId: e }, /*#__PURE__*/ w.createElement(et, { windowId: e })));
		}
	}], [{
		key: "getDerivedStateFromError",
		value: function(e) {
			return { hasError: !0 };
		}
	}]);
}(w.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/WindowViewer.js
n();
var ut = c(s("WindowViewer"))(lt);
//#endregion
export { ut as default };

//# sourceMappingURL=WindowViewer.js.map