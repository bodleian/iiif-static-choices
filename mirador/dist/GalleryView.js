import { o as e } from "./chunk.js";
import { $t as t, Ai as n, Bt as r, Ci as i, D as a, G as o, K as s, Ln as c, Oi as l, R as u, bn as d, da as f, gn as p, gr as m, mr as ee, oa as h, or as g, sa as _, sr as v, ta as y, vt as b, wi as te } from "./selectors.js";
import { M as x, Z as S, t as C, x as w } from "./actions.js";
import { t as ne } from "./Paper.js";
import { t as re } from "./classnames.js";
import { i as ie, n as T, r as ae, t as oe } from "./SearchSharp.js";
import { M as se, j as ce } from "./ButtonBase.js";
import { n as le } from "./WorkspaceArea.js";
//#region node_modules/@material-ui/core/esm/internal/svg-icons/Person.js
var E = /* @__PURE__ */ e(f());
se();
var ue = ce(/*#__PURE__*/ E.createElement("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
_(), te(), m(), g();
var de = function(e) {
	return {
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
		colorDefault: {
			color: e.palette.background.default,
			backgroundColor: e.palette.type === "light" ? e.palette.grey[400] : e.palette.grey[600]
		},
		circle: {},
		circular: {},
		rounded: { borderRadius: e.shape.borderRadius },
		square: { borderRadius: 0 },
		img: {
			width: "100%",
			height: "100%",
			textAlign: "center",
			objectFit: "cover",
			color: "transparent",
			textIndent: 1e4
		},
		fallback: {
			width: "75%",
			height: "75%"
		}
	};
};
function D(e) {
	var t = e.src, n = e.srcSet, r = E.useState(!1), i = r[0], a = r[1];
	return E.useEffect(function() {
		if (!(!t && !n)) {
			a(!1);
			var e = !0, r = new Image();
			return r.src = t, r.srcSet = n, r.onload = function() {
				e && a("loaded");
			}, r.onerror = function() {
				e && a("error");
			}, function() {
				e = !1;
			};
		}
	}, [t, n]), i;
}
var O = /*#__PURE__*/ E.forwardRef(function(e, t) {
	var n = e.alt, r = e.children, a = e.classes, o = e.className, s = e.component, c = s === void 0 ? "div" : s, l = e.imgProps, u = e.sizes, d = e.src, f = e.srcSet, p = e.variant, m = p === void 0 ? "circular" : p, g = i(e, [
		"alt",
		"children",
		"classes",
		"className",
		"component",
		"imgProps",
		"sizes",
		"src",
		"srcSet",
		"variant"
	]), _ = null, v = D({
		src: d,
		srcSet: f
	}), y = d || f, b = y && v !== "error";
	return _ = b ? /*#__PURE__*/ E.createElement("img", h({
		alt: n,
		src: d,
		srcSet: f,
		sizes: u,
		className: a.img
	}, l)) : r ?? (y && n ? n[0] : /*#__PURE__*/ E.createElement(ue, { className: a.fallback })), /*#__PURE__*/ E.createElement(c, h({
		className: ee(a.root, a.system, a[m], o, !b && a.colorDefault),
		ref: t
	}, g), _);
}), k = v(de, { name: "MuiAvatar" })(O);
//#endregion
//#region node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js
n();
var A = /* @__PURE__ */ e(d()), j = /* @__PURE__ */ e(le()), M = /* @__PURE__ */ e(oe()), N = /* @__PURE__ */ e(re());
function P(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function F(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, L(r.key), r);
	}
}
function I(e, t, n) {
	return t && F(e.prototype, t), n && F(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function L(e) {
	var t = R(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function R(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function z(e, t, n) {
	return t = U(t), B(e, H() ? Reflect.construct(t, n || [], U(e).constructor) : t.apply(e, n));
}
function B(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return V(e);
}
function V(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function H() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (H = function() {
		return !!e;
	})();
}
function U(e) {
	return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, U(e);
}
function fe(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && W(e, t);
}
function W(e, t) {
	return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, W(e, t);
}
var G = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return P(this, t), n = z(this, t, [e]), n.state = { requestedAnnotations: !1 }, n.handleSelect = n.handleSelect.bind(n), n.handleKey = n.handleKey.bind(n), n.handleIntersection = n.handleIntersection.bind(n), n;
	}
	return fe(t, e), I(t, [
		{
			key: "handleSelect",
			value: function() {
				var e = this.props, t = e.canvas, n = e.selected, r = e.setCanvas, i = e.focusOnCanvas;
				n ? i() : r(t.id);
			}
		},
		{
			key: "handleKey",
			value: function(e) {
				var t = this.props, n = t.canvas, r = t.setCanvas, i = t.focusOnCanvas;
				this.keys = {
					enter: "Enter",
					space: " "
				}, this.chars = {
					enter: 13,
					space: 32
				}, e.key === this.keys.enter || e.which === this.chars.enter || e.key === this.keys.space || e.which === this.chars.space ? i() : r(n.id);
			}
		},
		{
			key: "handleIntersection",
			value: function(e) {
				var t = e.isIntersecting, n = this.props, r = n.annotationsCount, i = n.requestCanvasAnnotations, a = this.state.requestedAnnotations;
				!t || r === void 0 || r > 0 || a || (this.setState({ requestedAnnotations: !0 }), i());
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.annotationsCount, n = e.searchAnnotationsCount, r = e.canvas, i = e.classes, a = e.config, o = e.selected, s = new p(r);
				return /*#__PURE__*/ E.createElement(ie, { onChange: this.handleIntersection }, /*#__PURE__*/ E.createElement("div", {
					key: r.index,
					className: (0, N.default)(i.galleryViewItem, o ? i.selected : "", n > 0 ? i.hasAnnotations : ""),
					onClick: this.handleSelect,
					onKeyUp: this.handleKey,
					role: "button",
					tabIndex: 0
				}, /*#__PURE__*/ E.createElement(ae, {
					resource: r,
					labelled: !0,
					variant: "outside",
					maxWidth: a.width,
					maxHeight: a.height,
					style: {
						margin: "0 auto",
						maxWidth: `${Math.ceil(a.height * s.aspectRatio)}px`
					}
				}, /*#__PURE__*/ E.createElement("div", { className: i.chips }, n > 0 && /*#__PURE__*/ E.createElement(T, {
					avatar: /*#__PURE__*/ E.createElement(k, {
						className: i.avatar,
						classes: { circle: i.avatarIcon }
					}, /*#__PURE__*/ E.createElement(M.default, { fontSize: "small" })),
					label: n,
					className: (0, N.default)(i.searchChip),
					size: "small"
				}), (t || 0) > 0 && /*#__PURE__*/ E.createElement(T, {
					avatar: /*#__PURE__*/ E.createElement(k, {
						className: i.avatar,
						classes: { circle: i.avatarIcon }
					}, /*#__PURE__*/ E.createElement(j.default, { className: i.annotationIcon })),
					label: t,
					className: (0, N.default)(i.annotationsChip),
					size: "small"
				})))));
			}
		}
	]);
}(E.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js
G.defaultProps = {
	annotationsCount: void 0,
	config: {
		height: 100,
		width: null
	},
	requestCanvasAnnotations: function() {},
	searchAnnotationsCount: 0,
	selected: !1
}, g();
function K(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? K(Object(n), !0).forEach(function(t) {
			pe(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function pe(e, t, n) {
	return (t = me(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function me(e) {
	var t = he(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function he(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ge = l(y(function(e, n) {
	var i = n.canvas, o = n.windowId, c = s(e, { windowId: o }), l = (0, A.default)(a(e, { windowId: o }).map(function(e) {
		return e.resources;
	})).filter(function(e) {
		return e.targetId === i.id;
	}), d = t(e, {
		content: "annotations",
		windowId: o
	}).length > 0;
	return {
		annotationsCount: function() {
			if (d) return u(e, { canvasId: i.id }).reduce(function(e, t) {
				return e + t.resources.filter(function(e) {
					return e.targetId === i.id;
				}).length;
			}, 0);
		}(),
		config: r(e).galleryView,
		searchAnnotationsCount: l.length,
		selected: c && c.id === i.id
	};
}, function(e, t) {
	var n = t.canvas;
	t.id;
	var r = t.windowId;
	return {
		focusOnCanvas: function() {
			return e(S(r, "single"));
		},
		requestCanvasAnnotations: function() {
			return e(w(r, n.id));
		},
		setCanvas: function() {
			var t = [...arguments];
			return e(x.apply(C, [r].concat(t)));
		}
	};
}), v(function(e) {
	return {
		annotationIcon: {
			height: "1rem",
			width: "1rem"
		},
		annotationsChip: q({}, e.typography.caption),
		avatar: { backgroundColor: "transparent" },
		chips: {
			opacity: .875,
			position: "absolute",
			right: 0,
			textAlign: "right",
			top: 0
		},
		galleryViewItem: {
			"&$hasAnnotations": { border: `2px solid ${e.palette.action.selected}` },
			"&$selected,&$selected$hasAnnotations": { border: `2px solid ${e.palette.primary.main}` },
			"&:focus": { outline: "none" },
			"&:hover": { backgroundColor: e.palette.action.hover },
			border: "2px solid transparent",
			cursor: "pointer",
			display: "inline-block",
			margin: `${e.spacing(1)}px ${e.spacing(.5)}px`,
			maxHeight: function(e) {
				return e.config.height + 45;
			},
			minWidth: "60px",
			overflow: "hidden",
			padding: e.spacing(.5),
			position: "relative",
			width: "min-content"
		},
		hasAnnotations: {},
		searchChip: q(q({}, e.typography.caption), {}, {
			"&$selected $avatar": { backgroundColor: e.palette.highlights.primary },
			marginTop: 2
		}),
		selected: {}
	};
}))(G);
//#endregion
//#region node_modules/mirador/dist/es/src/components/GalleryView.js
function _e(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function J(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ve(r.key), r);
	}
}
function Y(e, t, n) {
	return t && J(e.prototype, t), n && J(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ve(e) {
	var t = ye(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ye(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function be(e, t, n) {
	return t = Z(t), xe(e, X() ? Reflect.construct(t, n || [], Z(e).constructor) : t.apply(e, n));
}
function xe(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Se(e);
}
function Se(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function X() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (X = function() {
		return !!e;
	})();
}
function Z(e) {
	return Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Z(e);
}
function Ce(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Q(e, t);
}
function Q(e, t) {
	return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Q(e, t);
}
var $ = /*#__PURE__*/ function(e) {
	function t() {
		return _e(this, t), be(this, t, arguments);
	}
	return Ce(t, e), Y(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.canvases, n = e.classes, r = e.viewingDirection, i = e.windowId, a = r === "right-to-left" ? "rtl" : "ltr";
			return /*#__PURE__*/ E.createElement(ne, {
				component: "section",
				dir: a,
				square: !0,
				elevation: 0,
				className: n.galleryContainer,
				id: `${i}-gallery`
			}, t.map(function(e) {
				return /*#__PURE__*/ E.createElement(ge, {
					key: e.id,
					windowId: i,
					canvas: e
				});
			}));
		}
	}]);
}(E.Component);
$.defaultProps = {
	classes: {},
	viewingDirection: ""
}, n(), g();
var we = l(v(function(e) {
	return { galleryContainer: {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		overflowX: "hidden",
		overflowY: "scroll",
		padding: "50px 0 50px 20px",
		width: "100%"
	} };
}), y(function(e, t) {
	var n = t.windowId;
	return {
		canvases: o(e, { windowId: n }),
		viewingDirection: b(e, { windowId: n })
	};
}), c("GalleryView"))($);
//#endregion
export { we as default };

//# sourceMappingURL=GalleryView.js.map