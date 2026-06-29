import { a as e, o as t, t as n } from "./chunk.js";
import { Ai as r, Ci as i, Ln as a, Mi as o, Ni as s, Oi as c, Vt as l, Zr as u, br as d, cr as f, da as p, dr as m, ei as h, gr as g, li as _, lr as v, mr as y, ni as b, oa as x, oi as S, or as C, ri as w, sa as T, sr as E, ta as D, ua as O, ui as k, wi as A } from "./selectors.js";
import { H as j, I as M, L as N, S as P, U as F, b as ee, d as te, f as ne, g as I, h as L, m as re, n as ie, p as ae, s as oe, t as se, x as ce, y as le } from "./ButtonBase.js";
import { n as ue } from "./PluginHook.js";
//#region node_modules/@material-ui/core/esm/styles/useTheme.js
var de = /* @__PURE__ */ t(O());
T(), A(), h(), g(), m();
var R = /* @__PURE__ */ t(p());
v();
function fe() {
	return d() || f;
}
C(), F();
var pe = 10, me = 4, z = function(e) {
	return {
		root: {
			position: "relative",
			display: "inline-flex",
			verticalAlign: "middle",
			flexShrink: 0
		},
		badge: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			position: "absolute",
			boxSizing: "border-box",
			fontFamily: e.typography.fontFamily,
			fontWeight: e.typography.fontWeightMedium,
			fontSize: e.typography.pxToRem(12),
			minWidth: pe * 2,
			lineHeight: 1,
			padding: "0 6px",
			height: pe * 2,
			borderRadius: pe,
			zIndex: 1,
			transition: e.transitions.create("transform", {
				easing: e.transitions.easing.easeInOut,
				duration: e.transitions.duration.enteringScreen
			})
		},
		colorPrimary: {
			backgroundColor: e.palette.primary.main,
			color: e.palette.primary.contrastText
		},
		colorSecondary: {
			backgroundColor: e.palette.secondary.main,
			color: e.palette.secondary.contrastText
		},
		colorError: {
			backgroundColor: e.palette.error.main,
			color: e.palette.error.contrastText
		},
		dot: {
			borderRadius: me,
			height: me * 2,
			minWidth: me * 2,
			padding: 0
		},
		anchorOriginTopRightRectangle: {
			top: 0,
			right: 0,
			transform: "scale(1) translate(50%, -50%)",
			transformOrigin: "100% 0%",
			"&$invisible": { transform: "scale(0) translate(50%, -50%)" }
		},
		anchorOriginTopRightRectangular: {
			top: 0,
			right: 0,
			transform: "scale(1) translate(50%, -50%)",
			transformOrigin: "100% 0%",
			"&$invisible": { transform: "scale(0) translate(50%, -50%)" }
		},
		anchorOriginBottomRightRectangle: {
			bottom: 0,
			right: 0,
			transform: "scale(1) translate(50%, 50%)",
			transformOrigin: "100% 100%",
			"&$invisible": { transform: "scale(0) translate(50%, 50%)" }
		},
		anchorOriginBottomRightRectangular: {
			bottom: 0,
			right: 0,
			transform: "scale(1) translate(50%, 50%)",
			transformOrigin: "100% 100%",
			"&$invisible": { transform: "scale(0) translate(50%, 50%)" }
		},
		anchorOriginTopLeftRectangle: {
			top: 0,
			left: 0,
			transform: "scale(1) translate(-50%, -50%)",
			transformOrigin: "0% 0%",
			"&$invisible": { transform: "scale(0) translate(-50%, -50%)" }
		},
		anchorOriginTopLeftRectangular: {
			top: 0,
			left: 0,
			transform: "scale(1) translate(-50%, -50%)",
			transformOrigin: "0% 0%",
			"&$invisible": { transform: "scale(0) translate(-50%, -50%)" }
		},
		anchorOriginBottomLeftRectangle: {
			bottom: 0,
			left: 0,
			transform: "scale(1) translate(-50%, 50%)",
			transformOrigin: "0% 100%",
			"&$invisible": { transform: "scale(0) translate(-50%, 50%)" }
		},
		anchorOriginBottomLeftRectangular: {
			bottom: 0,
			left: 0,
			transform: "scale(1) translate(-50%, 50%)",
			transformOrigin: "0% 100%",
			"&$invisible": { transform: "scale(0) translate(-50%, 50%)" }
		},
		anchorOriginTopRightCircle: {
			top: "14%",
			right: "14%",
			transform: "scale(1) translate(50%, -50%)",
			transformOrigin: "100% 0%",
			"&$invisible": { transform: "scale(0) translate(50%, -50%)" }
		},
		anchorOriginTopRightCircular: {
			top: "14%",
			right: "14%",
			transform: "scale(1) translate(50%, -50%)",
			transformOrigin: "100% 0%",
			"&$invisible": { transform: "scale(0) translate(50%, -50%)" }
		},
		anchorOriginBottomRightCircle: {
			bottom: "14%",
			right: "14%",
			transform: "scale(1) translate(50%, 50%)",
			transformOrigin: "100% 100%",
			"&$invisible": { transform: "scale(0) translate(50%, 50%)" }
		},
		anchorOriginBottomRightCircular: {
			bottom: "14%",
			right: "14%",
			transform: "scale(1) translate(50%, 50%)",
			transformOrigin: "100% 100%",
			"&$invisible": { transform: "scale(0) translate(50%, 50%)" }
		},
		anchorOriginTopLeftCircle: {
			top: "14%",
			left: "14%",
			transform: "scale(1) translate(-50%, -50%)",
			transformOrigin: "0% 0%",
			"&$invisible": { transform: "scale(0) translate(-50%, -50%)" }
		},
		anchorOriginTopLeftCircular: {
			top: "14%",
			left: "14%",
			transform: "scale(1) translate(-50%, -50%)",
			transformOrigin: "0% 0%",
			"&$invisible": { transform: "scale(0) translate(-50%, -50%)" }
		},
		anchorOriginBottomLeftCircle: {
			bottom: "14%",
			left: "14%",
			transform: "scale(1) translate(-50%, 50%)",
			transformOrigin: "0% 100%",
			"&$invisible": { transform: "scale(0) translate(-50%, 50%)" }
		},
		anchorOriginBottomLeftCircular: {
			bottom: "14%",
			left: "14%",
			transform: "scale(1) translate(-50%, 50%)",
			transformOrigin: "0% 100%",
			"&$invisible": { transform: "scale(0) translate(-50%, 50%)" }
		},
		invisible: { transition: e.transitions.create("transform", {
			easing: e.transitions.easing.easeInOut,
			duration: e.transitions.duration.leavingScreen
		}) }
	};
}, he = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.anchorOrigin, r = n === void 0 ? {
		vertical: "top",
		horizontal: "right"
	} : n, a = e.badgeContent, o = e.children, s = e.classes, c = e.className, l = e.color, u = l === void 0 ? "default" : l, d = e.component, f = d === void 0 ? "span" : d, p = e.invisible, m = e.max, h = m === void 0 ? 99 : m, g = e.overlap, _ = g === void 0 ? "rectangle" : g, v = e.showZero, b = v === void 0 ? !1 : v, S = e.variant, C = S === void 0 ? "standard" : S, w = i(e, [
		"anchorOrigin",
		"badgeContent",
		"children",
		"classes",
		"className",
		"color",
		"component",
		"invisible",
		"max",
		"overlap",
		"showZero",
		"variant"
	]), T = p;
	p == null && (a === 0 && !b || a == null && C !== "dot") && (T = !0);
	var E = "";
	return C !== "dot" && (E = a > h ? `${h}+` : a), /*#__PURE__*/ R.createElement(f, x({
		className: y(s.root, c),
		ref: t
	}, w), o, /*#__PURE__*/ R.createElement("span", { className: y(s.badge, s[`${r.horizontal}${j(r.vertical)}}`], s[`anchorOrigin${j(r.vertical)}${j(r.horizontal)}${j(_)}`], u !== "default" && s[`color${j(u)}`], T && s.invisible, C === "dot" && s.dot) }, E));
}), ge = E(z, { name: "MuiBadge" })(he);
T(), A(), g(), C(), F();
var _e = function(e) {
	return {
		root: {
			textAlign: "center",
			flex: "0 0 auto",
			fontSize: e.typography.pxToRem(24),
			padding: 12,
			borderRadius: "50%",
			overflow: "visible",
			color: e.palette.action.active,
			transition: e.transitions.create("background-color", { duration: e.transitions.duration.shortest }),
			"&:hover": {
				backgroundColor: u(e.palette.action.active, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			},
			"&$disabled": {
				backgroundColor: "transparent",
				color: e.palette.action.disabled
			}
		},
		edgeStart: {
			marginLeft: -12,
			"$sizeSmall&": { marginLeft: -3 }
		},
		edgeEnd: {
			marginRight: -12,
			"$sizeSmall&": { marginRight: -3 }
		},
		colorInherit: { color: "inherit" },
		colorPrimary: {
			color: e.palette.primary.main,
			"&:hover": {
				backgroundColor: u(e.palette.primary.main, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		colorSecondary: {
			color: e.palette.secondary.main,
			"&:hover": {
				backgroundColor: u(e.palette.secondary.main, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		disabled: {},
		sizeSmall: {
			padding: 3,
			fontSize: e.typography.pxToRem(18)
		},
		label: {
			width: "100%",
			display: "flex",
			alignItems: "inherit",
			justifyContent: "inherit"
		}
	};
}, ve = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.edge, r = n === void 0 ? !1 : n, a = e.children, o = e.classes, s = e.className, c = e.color, l = c === void 0 ? "default" : c, u = e.disabled, d = u === void 0 ? !1 : u, f = e.disableFocusRipple, p = f === void 0 ? !1 : f, m = e.size, h = m === void 0 ? "medium" : m, g = i(e, [
		"edge",
		"children",
		"classes",
		"className",
		"color",
		"disabled",
		"disableFocusRipple",
		"size"
	]);
	return /*#__PURE__*/ R.createElement(se, x({
		className: y(o.root, s, l !== "default" && o[`color${j(l)}`], d && o.disabled, h === "small" && o[`size${j(h)}`], {
			start: o.edgeStart,
			end: o.edgeEnd
		}[r]),
		centerRipple: !0,
		focusRipple: !p,
		disabled: d,
		ref: t
	}, g), /*#__PURE__*/ R.createElement("span", { className: o.label }, a));
}), B = E(_e, { name: "MuiIconButton" })(ve);
//#endregion
//#region node_modules/@material-ui/core/esm/transitions/utils.js
ie();
var ye = function(e) {
	return e.scrollTop;
};
function V(e, t) {
	var n = e.timeout, r = e.style, i = r === void 0 ? {} : r;
	return {
		duration: i.transitionDuration || typeof n == "number" ? n : n[t.mode] || 0,
		delay: i.transitionDelay
	};
}
T(), k(), A(), L();
function H(e) {
	return `scale(${e}, ${e ** 2})`;
}
var be = {
	entering: {
		opacity: 1,
		transform: H(1)
	},
	entered: {
		opacity: 1,
		transform: "none"
	}
}, xe = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.children, r = e.disableStrictModeCompat, a = r === void 0 ? !1 : r, o = e.in, s = e.onEnter, c = e.onEntered, l = e.onEntering, u = e.onExit, d = e.onExited, f = e.onExiting, p = e.style, m = e.timeout, h = m === void 0 ? "auto" : m, g = e.TransitionComponent, v = g === void 0 ? oe : g, y = i(e, [
		"children",
		"disableStrictModeCompat",
		"in",
		"onEnter",
		"onEntered",
		"onEntering",
		"onExit",
		"onExited",
		"onExiting",
		"style",
		"timeout",
		"TransitionComponent"
	]), b = R.useRef(), S = R.useRef(), C = fe(), w = C.unstable_strictMode && !a, T = R.useRef(null), E = I(n.ref, t), D = I(w ? T : void 0, E), O = function(e) {
		return function(t, n) {
			if (e) {
				var r = _(w ? [T.current, t] : [t, n], 2), i = r[0], a = r[1];
				a === void 0 ? e(i) : e(i, a);
			}
		};
	}, k = O(l), A = O(function(e, t) {
		ye(e);
		var n = V({
			style: p,
			timeout: h
		}, { mode: "enter" }), r = n.duration, i = n.delay, a;
		h === "auto" ? (a = C.transitions.getAutoHeightDuration(e.clientHeight), S.current = a) : a = r, e.style.transition = [C.transitions.create("opacity", {
			duration: a,
			delay: i
		}), C.transitions.create("transform", {
			duration: a * .666,
			delay: i
		})].join(","), s && s(e, t);
	}), j = O(c), M = O(f), N = O(function(e) {
		var t = V({
			style: p,
			timeout: h
		}, { mode: "exit" }), n = t.duration, r = t.delay, i;
		h === "auto" ? (i = C.transitions.getAutoHeightDuration(e.clientHeight), S.current = i) : i = n, e.style.transition = [C.transitions.create("opacity", {
			duration: i,
			delay: r
		}), C.transitions.create("transform", {
			duration: i * .666,
			delay: r || i * .333
		})].join(","), e.style.opacity = "0", e.style.transform = H(.75), u && u(e);
	}), P = O(d);
	return R.useEffect(function() {
		return function() {
			clearTimeout(b.current);
		};
	}, []), /*#__PURE__*/ R.createElement(v, x({
		appear: !0,
		in: o,
		nodeRef: w ? T : void 0,
		onEnter: A,
		onEntered: j,
		onEntering: k,
		onExit: N,
		onExited: P,
		onExiting: M,
		addEndListener: function(e, t) {
			h === "auto" && (b.current = setTimeout(w ? e : t, S.current || 0));
		},
		timeout: h === "auto" ? null : h
	}, y), function(e, t) {
		return /*#__PURE__*/ R.cloneElement(n, x({
			style: x({
				opacity: 0,
				transform: H(.75),
				visibility: e === "exited" && !o ? "hidden" : void 0
			}, be[e], p, n.props.style),
			ref: D
		}, t));
	});
});
//#endregion
//#region node_modules/popper.js/dist/esm/popper.js
xe.muiSupportAuto = !0, ce();
var U = typeof window < "u" && typeof document < "u" && typeof navigator < "u", Se = function() {
	for (var e = [
		"Edge",
		"Trident",
		"Firefox"
	], t = 0; t < e.length; t += 1) if (U && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
	return 0;
}();
function Ce(e) {
	var t = !1;
	return function() {
		t || (t = !0, window.Promise.resolve().then(function() {
			t = !1, e();
		}));
	};
}
function we(e) {
	var t = !1;
	return function() {
		t || (t = !0, setTimeout(function() {
			t = !1, e();
		}, Se));
	};
}
var Te = U && window.Promise ? Ce : we;
function Ee(e) {
	return e && {}.toString.call(e) === "[object Function]";
}
function W(e, t) {
	if (e.nodeType !== 1) return [];
	var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
	return t ? n[t] : n;
}
function G(e) {
	return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function K(e) {
	if (!e) return document.body;
	switch (e.nodeName) {
		case "HTML":
		case "BODY": return e.ownerDocument.body;
		case "#document": return e.body;
	}
	var t = W(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /(auto|scroll|overlay)/.test(n + i + r) ? e : K(G(e));
}
function De(e) {
	return e && e.referenceNode ? e.referenceNode : e;
}
var Oe = U && !!(window.MSInputMethodContext && document.documentMode), ke = U && /MSIE 10/.test(navigator.userAgent);
function q(e) {
	return e === 11 ? Oe : e === 10 ? ke : Oe || ke;
}
function J(e) {
	if (!e) return document.documentElement;
	for (var t = q(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
	var r = n && n.nodeName;
	return !r || r === "BODY" || r === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : [
		"TH",
		"TD",
		"TABLE"
	].indexOf(n.nodeName) !== -1 && W(n, "position") === "static" ? J(n) : n;
}
function Ae(e) {
	var t = e.nodeName;
	return t === "BODY" ? !1 : t === "HTML" || J(e.firstElementChild) === e;
}
function je(e) {
	return e.parentNode === null ? e : je(e.parentNode);
}
function Y(e, t) {
	if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
	var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e, a = document.createRange();
	a.setStart(r, 0), a.setEnd(i, 0);
	var o = a.commonAncestorContainer;
	if (e !== o && t !== o || r.contains(i)) return Ae(o) ? o : J(o);
	var s = je(e);
	return s.host ? Y(s.host, t) : Y(e, je(t).host);
}
function X(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top") === "top" ? "scrollTop" : "scrollLeft", n = e.nodeName;
	if (n === "BODY" || n === "HTML") {
		var r = e.ownerDocument.documentElement;
		return (e.ownerDocument.scrollingElement || r)[t];
	}
	return e[t];
}
function Me(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = X(t, "top"), i = X(t, "left"), a = n ? -1 : 1;
	return e.top += r * a, e.bottom += r * a, e.left += i * a, e.right += i * a, e;
}
function Ne(e, t) {
	var n = t === "x" ? "Left" : "Top", r = n === "Left" ? "Right" : "Bottom";
	return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
}
function Pe(e, t, n, r) {
	return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], q(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0);
}
function Fe(e) {
	var t = e.body, n = e.documentElement, r = q(10) && getComputedStyle(n);
	return {
		height: Pe("Height", t, n, r),
		width: Pe("Width", t, n, r)
	};
}
var Ie = function(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}, Le = function() {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
		}
	}
	return function(t, n, r) {
		return n && e(t.prototype, n), r && e(t, r), t;
	};
}(), Z = function(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}, Q = Object.assign || function(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t];
		for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	}
	return e;
};
function $(e) {
	return Q({}, e, {
		right: e.left + e.width,
		bottom: e.top + e.height
	});
}
function Re(e) {
	var t = {};
	try {
		if (q(10)) {
			t = e.getBoundingClientRect();
			var n = X(e, "top"), r = X(e, "left");
			t.top += n, t.left += r, t.bottom += n, t.right += r;
		} else t = e.getBoundingClientRect();
	} catch {}
	var i = {
		left: t.left,
		top: t.top,
		width: t.right - t.left,
		height: t.bottom - t.top
	}, a = e.nodeName === "HTML" ? Fe(e.ownerDocument) : {}, o = a.width || e.clientWidth || i.width, s = a.height || e.clientHeight || i.height, c = e.offsetWidth - o, l = e.offsetHeight - s;
	if (c || l) {
		var u = W(e);
		c -= Ne(u, "x"), l -= Ne(u, "y"), i.width -= c, i.height -= l;
	}
	return $(i);
}
function ze(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = q(10), i = t.nodeName === "HTML", a = Re(e), o = Re(t), s = K(e), c = W(t), l = parseFloat(c.borderTopWidth), u = parseFloat(c.borderLeftWidth);
	n && i && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
	var d = $({
		top: a.top - o.top - l,
		left: a.left - o.left - u,
		width: a.width,
		height: a.height
	});
	if (d.marginTop = 0, d.marginLeft = 0, !r && i) {
		var f = parseFloat(c.marginTop), p = parseFloat(c.marginLeft);
		d.top -= l - f, d.bottom -= l - f, d.left -= u - p, d.right -= u - p, d.marginTop = f, d.marginLeft = p;
	}
	return (r && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") && (d = Me(d, t)), d;
}
function Be(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.ownerDocument.documentElement, r = ze(e, n), i = Math.max(n.clientWidth, window.innerWidth || 0), a = Math.max(n.clientHeight, window.innerHeight || 0), o = t ? 0 : X(n), s = t ? 0 : X(n, "left");
	return $({
		top: o - r.top + r.marginTop,
		left: s - r.left + r.marginLeft,
		width: i,
		height: a
	});
}
function Ve(e) {
	var t = e.nodeName;
	if (t === "BODY" || t === "HTML") return !1;
	if (W(e, "position") === "fixed") return !0;
	var n = G(e);
	return n ? Ve(n) : !1;
}
function He(e) {
	if (!e || !e.parentElement || q()) return document.documentElement;
	for (var t = e.parentElement; t && W(t, "transform") === "none";) t = t.parentElement;
	return t || document.documentElement;
}
function Ue(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, a = {
		top: 0,
		left: 0
	}, o = i ? He(e) : Y(e, De(t));
	if (r === "viewport") a = Be(o, i);
	else {
		var s = void 0;
		r === "scrollParent" ? (s = K(G(t)), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement)) : s = r === "window" ? e.ownerDocument.documentElement : r;
		var c = ze(s, o, i);
		if (s.nodeName === "HTML" && !Ve(o)) {
			var l = Fe(e.ownerDocument), u = l.height, d = l.width;
			a.top += c.top - c.marginTop, a.bottom = u + c.top, a.left += c.left - c.marginLeft, a.right = d + c.left;
		} else a = c;
	}
	n ||= 0;
	var f = typeof n == "number";
	return a.left += f ? n : n.left || 0, a.top += f ? n : n.top || 0, a.right -= f ? n : n.right || 0, a.bottom -= f ? n : n.bottom || 0, a;
}
function We(e) {
	return e.width * e.height;
}
function Ge(e, t, n, r, i) {
	var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
	if (e.indexOf("auto") === -1) return e;
	var o = Ue(n, r, a, i), s = {
		top: {
			width: o.width,
			height: t.top - o.top
		},
		right: {
			width: o.right - t.right,
			height: o.height
		},
		bottom: {
			width: o.width,
			height: o.bottom - t.bottom
		},
		left: {
			width: t.left - o.left,
			height: o.height
		}
	}, c = Object.keys(s).map(function(e) {
		return Q({ key: e }, s[e], { area: We(s[e]) });
	}).sort(function(e, t) {
		return t.area - e.area;
	}), l = c.filter(function(e) {
		var t = e.width, r = e.height;
		return t >= n.clientWidth && r >= n.clientHeight;
	}), u = l.length > 0 ? l[0].key : c[0].key, d = e.split("-")[1];
	return u + (d ? "-" + d : "");
}
function Ke(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
	return ze(n, r ? He(t) : Y(t, De(n)), r);
}
function qe(e) {
	var t = e.ownerDocument.defaultView.getComputedStyle(e), n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0), r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
	return {
		width: e.offsetWidth + r,
		height: e.offsetHeight + n
	};
}
function Je(e) {
	var t = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};
	return e.replace(/left|right|bottom|top/g, function(e) {
		return t[e];
	});
}
function Ye(e, t, n) {
	n = n.split("-")[0];
	var r = qe(e), i = {
		width: r.width,
		height: r.height
	}, a = ["right", "left"].indexOf(n) !== -1, o = a ? "top" : "left", s = a ? "left" : "top", c = a ? "height" : "width", l = a ? "width" : "height";
	return i[o] = t[o] + t[c] / 2 - r[c] / 2, n === s ? i[s] = t[s] - r[l] : i[s] = t[Je(s)], i;
}
function Xe(e, t) {
	return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function Ze(e, t, n) {
	if (Array.prototype.findIndex) return e.findIndex(function(e) {
		return e[t] === n;
	});
	var r = Xe(e, function(e) {
		return e[t] === n;
	});
	return e.indexOf(r);
}
function Qe(e, t, n) {
	return (n === void 0 ? e : e.slice(0, Ze(e, "name", n))).forEach(function(e) {
		e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
		var n = e.function || e.fn;
		e.enabled && Ee(n) && (t.offsets.popper = $(t.offsets.popper), t.offsets.reference = $(t.offsets.reference), t = n(t, e));
	}), t;
}
function $e() {
	if (!this.state.isDestroyed) {
		var e = {
			instance: this,
			styles: {},
			arrowStyles: {},
			attributes: {},
			flipped: !1,
			offsets: {}
		};
		e.offsets.reference = Ke(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Ge(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Ye(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Qe(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
	}
}
function et(e, t) {
	return e.some(function(e) {
		var n = e.name;
		return e.enabled && n === t;
	});
}
function tt(e) {
	for (var t = [
		!1,
		"ms",
		"Webkit",
		"Moz",
		"O"
	], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
		var i = t[r], a = i ? "" + i + n : e;
		if (document.body.style[a] !== void 0) return a;
	}
	return null;
}
function nt() {
	return this.state.isDestroyed = !0, et(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[tt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function rt(e) {
	var t = e.ownerDocument;
	return t ? t.defaultView : window;
}
function it(e, t, n, r) {
	var i = e.nodeName === "BODY", a = i ? e.ownerDocument.defaultView : e;
	a.addEventListener(t, n, { passive: !0 }), i || it(K(a.parentNode), t, n, r), r.push(a);
}
function at(e, t, n, r) {
	n.updateBound = r, rt(e).addEventListener("resize", n.updateBound, { passive: !0 });
	var i = K(e);
	return it(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
}
function ot() {
	this.state.eventsEnabled || (this.state = at(this.reference, this.options, this.state, this.scheduleUpdate));
}
function st(e, t) {
	return rt(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
		e.removeEventListener("scroll", t.updateBound);
	}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function ct() {
	this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = st(this.reference, this.state));
}
function lt(e) {
	return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function ut(e, t) {
	Object.keys(t).forEach(function(n) {
		var r = "";
		[
			"width",
			"height",
			"top",
			"right",
			"bottom",
			"left"
		].indexOf(n) !== -1 && lt(t[n]) && (r = "px"), e.style[n] = t[n] + r;
	});
}
function dt(e, t) {
	Object.keys(t).forEach(function(n) {
		t[n] === !1 ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
	});
}
function ft(e) {
	return ut(e.instance.popper, e.styles), dt(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && ut(e.arrowElement, e.arrowStyles), e;
}
function pt(e, t, n, r, i) {
	var a = Ke(i, t, e, n.positionFixed), o = Ge(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
	return t.setAttribute("x-placement", o), ut(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
}
function mt(e, t) {
	var n = e.offsets, r = n.popper, i = n.reference, a = Math.round, o = Math.floor, s = function(e) {
		return e;
	}, c = a(i.width), l = a(r.width), u = ["left", "right"].indexOf(e.placement) !== -1, d = e.placement.indexOf("-") !== -1, f = c % 2 == l % 2, p = c % 2 == 1 && l % 2 == 1, m = t ? u || d || f ? a : o : s, h = t ? a : s;
	return {
		left: m(p && !d && t ? r.left - 1 : r.left),
		top: h(r.top),
		bottom: h(r.bottom),
		right: m(r.right)
	};
}
var ht = U && /Firefox/i.test(navigator.userAgent);
function gt(e, t) {
	var n = t.x, r = t.y, i = e.offsets.popper, a = Xe(e.instance.modifiers, function(e) {
		return e.name === "applyStyle";
	}).gpuAcceleration;
	a !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
	var o = a === void 0 ? t.gpuAcceleration : a, s = J(e.instance.popper), c = Re(s), l = { position: i.position }, u = mt(e, window.devicePixelRatio < 2 || !ht), d = n === "bottom" ? "top" : "bottom", f = r === "right" ? "left" : "right", p = tt("transform"), m = void 0, h = void 0;
	if (h = d === "bottom" ? s.nodeName === "HTML" ? -s.clientHeight + u.bottom : -c.height + u.bottom : u.top, m = f === "right" ? s.nodeName === "HTML" ? -s.clientWidth + u.right : -c.width + u.right : u.left, o && p) l[p] = "translate3d(" + m + "px, " + h + "px, 0)", l[d] = 0, l[f] = 0, l.willChange = "transform";
	else {
		var g = d === "bottom" ? -1 : 1, _ = f === "right" ? -1 : 1;
		l[d] = h * g, l[f] = m * _, l.willChange = d + ", " + f;
	}
	return e.attributes = Q({}, { "x-placement": e.placement }, e.attributes), e.styles = Q({}, l, e.styles), e.arrowStyles = Q({}, e.offsets.arrow, e.arrowStyles), e;
}
function _t(e, t, n) {
	var r = Xe(e, function(e) {
		return e.name === t;
	}), i = !!r && e.some(function(e) {
		return e.name === n && e.enabled && e.order < r.order;
	});
	if (!i) {
		var a = "`" + t + "`", o = "`" + n + "`";
		console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!");
	}
	return i;
}
function vt(e, t) {
	var n;
	if (!_t(e.instance.modifiers, "arrow", "keepTogether")) return e;
	var r = t.element;
	if (typeof r == "string") {
		if (r = e.instance.popper.querySelector(r), !r) return e;
	} else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
	var i = e.placement.split("-")[0], a = e.offsets, o = a.popper, s = a.reference, c = ["left", "right"].indexOf(i) !== -1, l = c ? "height" : "width", u = c ? "Top" : "Left", d = u.toLowerCase(), f = c ? "left" : "top", p = c ? "bottom" : "right", m = qe(r)[l];
	s[p] - m < o[d] && (e.offsets.popper[d] -= o[d] - (s[p] - m)), s[d] + m > o[p] && (e.offsets.popper[d] += s[d] + m - o[p]), e.offsets.popper = $(e.offsets.popper);
	var h = s[d] + s[l] / 2 - m / 2, g = W(e.instance.popper), _ = parseFloat(g["margin" + u]), v = parseFloat(g["border" + u + "Width"]), y = h - e.offsets.popper[d] - _ - v;
	return y = Math.max(Math.min(o[l] - m, y), 0), e.arrowElement = r, e.offsets.arrow = (n = {}, Z(n, d, Math.round(y)), Z(n, f, ""), n), e;
}
function yt(e) {
	return e === "end" ? "start" : e === "start" ? "end" : e;
}
var bt = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], xt = bt.slice(3);
function St(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = xt.indexOf(e), r = xt.slice(n + 1).concat(xt.slice(0, n));
	return t ? r.reverse() : r;
}
var Ct = {
	FLIP: "flip",
	CLOCKWISE: "clockwise",
	COUNTERCLOCKWISE: "counterclockwise"
};
function wt(e, t) {
	if (et(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement) return e;
	var n = Ue(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), r = e.placement.split("-")[0], i = Je(r), a = e.placement.split("-")[1] || "", o = [];
	switch (t.behavior) {
		case Ct.FLIP:
			o = [r, i];
			break;
		case Ct.CLOCKWISE:
			o = St(r);
			break;
		case Ct.COUNTERCLOCKWISE:
			o = St(r, !0);
			break;
		default: o = t.behavior;
	}
	return o.forEach(function(s, c) {
		if (r !== s || o.length === c + 1) return e;
		r = e.placement.split("-")[0], i = Je(r);
		var l = e.offsets.popper, u = e.offsets.reference, d = Math.floor, f = r === "left" && d(l.right) > d(u.left) || r === "right" && d(l.left) < d(u.right) || r === "top" && d(l.bottom) > d(u.top) || r === "bottom" && d(l.top) < d(u.bottom), p = d(l.left) < d(n.left), m = d(l.right) > d(n.right), h = d(l.top) < d(n.top), g = d(l.bottom) > d(n.bottom), _ = r === "left" && p || r === "right" && m || r === "top" && h || r === "bottom" && g, v = ["top", "bottom"].indexOf(r) !== -1, y = !!t.flipVariations && (v && a === "start" && p || v && a === "end" && m || !v && a === "start" && h || !v && a === "end" && g), b = !!t.flipVariationsByContent && (v && a === "start" && m || v && a === "end" && p || !v && a === "start" && g || !v && a === "end" && h), x = y || b;
		(f || _ || x) && (e.flipped = !0, (f || _) && (r = o[c + 1]), x && (a = yt(a)), e.placement = r + (a ? "-" + a : ""), e.offsets.popper = Q({}, e.offsets.popper, Ye(e.instance.popper, e.offsets.reference, e.placement)), e = Qe(e.instance.modifiers, e, "flip"));
	}), e;
}
function Tt(e) {
	var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0], a = Math.floor, o = ["top", "bottom"].indexOf(i) !== -1, s = o ? "right" : "bottom", c = o ? "left" : "top", l = o ? "width" : "height";
	return n[s] < a(r[c]) && (e.offsets.popper[c] = a(r[c]) - n[l]), n[c] > a(r[s]) && (e.offsets.popper[c] = a(r[s])), e;
}
function Et(e, t, n, r) {
	var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), a = +i[1], o = i[2];
	if (!a) return e;
	if (o.indexOf("%") === 0) {
		var s = void 0;
		switch (o) {
			case "%p":
				s = n;
				break;
			default: s = r;
		}
		return $(s)[t] / 100 * a;
	} else if (o === "vh" || o === "vw") {
		var c = void 0;
		return c = o === "vh" ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * a;
	} else return a;
}
function Dt(e, t, n, r) {
	var i = [0, 0], a = ["right", "left"].indexOf(r) !== -1, o = e.split(/(\+|\-)/).map(function(e) {
		return e.trim();
	}), s = o.indexOf(Xe(o, function(e) {
		return e.search(/,|\s/) !== -1;
	}));
	o[s] && o[s].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
	var c = /\s*,\s*|\s+/, l = s === -1 ? [o] : [o.slice(0, s).concat([o[s].split(c)[0]]), [o[s].split(c)[1]].concat(o.slice(s + 1))];
	return l = l.map(function(e, r) {
		var i = (r === 1 ? !a : a) ? "height" : "width", o = !1;
		return e.reduce(function(e, t) {
			return e[e.length - 1] === "" && ["+", "-"].indexOf(t) !== -1 ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t);
		}, []).map(function(e) {
			return Et(e, i, t, n);
		});
	}), l.forEach(function(e, t) {
		e.forEach(function(n, r) {
			lt(n) && (i[t] += n * (e[r - 1] === "-" ? -1 : 1));
		});
	}), i;
}
function Ot(e, t) {
	var n = t.offset, r = e.placement, i = e.offsets, a = i.popper, o = i.reference, s = r.split("-")[0], c = void 0;
	return c = lt(+n) ? [+n, 0] : Dt(n, a, o, s), s === "left" ? (a.top += c[0], a.left -= c[1]) : s === "right" ? (a.top += c[0], a.left += c[1]) : s === "top" ? (a.left += c[0], a.top -= c[1]) : s === "bottom" && (a.left += c[0], a.top += c[1]), e.popper = a, e;
}
function kt(e, t) {
	var n = t.boundariesElement || J(e.instance.popper);
	e.instance.reference === n && (n = J(n));
	var r = tt("transform"), i = e.instance.popper.style, a = i.top, o = i.left, s = i[r];
	i.top = "", i.left = "", i[r] = "";
	var c = Ue(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
	i.top = a, i.left = o, i[r] = s, t.boundaries = c;
	var l = t.priority, u = e.offsets.popper, d = {
		primary: function(e) {
			var n = u[e];
			return u[e] < c[e] && !t.escapeWithReference && (n = Math.max(u[e], c[e])), Z({}, e, n);
		},
		secondary: function(e) {
			var n = e === "right" ? "left" : "top", r = u[n];
			return u[e] > c[e] && !t.escapeWithReference && (r = Math.min(u[n], c[e] - (e === "right" ? u.width : u.height))), Z({}, n, r);
		}
	};
	return l.forEach(function(e) {
		var t = ["left", "top"].indexOf(e) === -1 ? "secondary" : "primary";
		u = Q({}, u, d[t](e));
	}), e.offsets.popper = u, e;
}
function At(e) {
	var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
	if (r) {
		var i = e.offsets, a = i.reference, o = i.popper, s = ["bottom", "top"].indexOf(n) !== -1, c = s ? "left" : "top", l = s ? "width" : "height", u = {
			start: Z({}, c, a[c]),
			end: Z({}, c, a[c] + a[l] - o[l])
		};
		e.offsets.popper = Q({}, o, u[r]);
	}
	return e;
}
function jt(e) {
	if (!_t(e.instance.modifiers, "hide", "preventOverflow")) return e;
	var t = e.offsets.reference, n = Xe(e.instance.modifiers, function(e) {
		return e.name === "preventOverflow";
	}).boundaries;
	if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
		if (e.hide === !0) return e;
		e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
	} else {
		if (e.hide === !1) return e;
		e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
	}
	return e;
}
function Mt(e) {
	var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, a = r.reference, o = ["left", "right"].indexOf(n) !== -1, s = ["top", "left"].indexOf(n) === -1;
	return i[o ? "left" : "top"] = a[n] - (s ? i[o ? "width" : "height"] : 0), e.placement = Je(t), e.offsets.popper = $(i), e;
}
var Nt = {
	placement: "bottom",
	positionFixed: !1,
	eventsEnabled: !0,
	removeOnDestroy: !1,
	onCreate: function() {},
	onUpdate: function() {},
	modifiers: {
		shift: {
			order: 100,
			enabled: !0,
			fn: At
		},
		offset: {
			order: 200,
			enabled: !0,
			fn: Ot,
			offset: 0
		},
		preventOverflow: {
			order: 300,
			enabled: !0,
			fn: kt,
			priority: [
				"left",
				"right",
				"top",
				"bottom"
			],
			padding: 5,
			boundariesElement: "scrollParent"
		},
		keepTogether: {
			order: 400,
			enabled: !0,
			fn: Tt
		},
		arrow: {
			order: 500,
			enabled: !0,
			fn: vt,
			element: "[x-arrow]"
		},
		flip: {
			order: 600,
			enabled: !0,
			fn: wt,
			behavior: "flip",
			padding: 5,
			boundariesElement: "viewport",
			flipVariations: !1,
			flipVariationsByContent: !1
		},
		inner: {
			order: 700,
			enabled: !1,
			fn: Mt
		},
		hide: {
			order: 800,
			enabled: !0,
			fn: jt
		},
		computeStyle: {
			order: 850,
			enabled: !0,
			fn: gt,
			gpuAcceleration: !0,
			x: "bottom",
			y: "right"
		},
		applyStyle: {
			order: 900,
			enabled: !0,
			fn: ft,
			onLoad: pt,
			gpuAcceleration: void 0
		}
	}
}, Pt = function() {
	function e(t, n) {
		var r = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		Ie(this, e), this.scheduleUpdate = function() {
			return requestAnimationFrame(r.update);
		}, this.update = Te(this.update.bind(this)), this.options = Q({}, e.Defaults, i), this.state = {
			isDestroyed: !1,
			isCreated: !1,
			scrollParents: []
		}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Q({}, e.Defaults.modifiers, i.modifiers)).forEach(function(t) {
			r.options.modifiers[t] = Q({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
		}), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
			return Q({ name: e }, r.options.modifiers[e]);
		}).sort(function(e, t) {
			return e.order - t.order;
		}), this.modifiers.forEach(function(e) {
			e.enabled && Ee(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
		}), this.update();
		var a = this.options.eventsEnabled;
		a && this.enableEventListeners(), this.state.eventsEnabled = a;
	}
	return Le(e, [
		{
			key: "update",
			value: function() {
				return $e.call(this);
			}
		},
		{
			key: "destroy",
			value: function() {
				return nt.call(this);
			}
		},
		{
			key: "enableEventListeners",
			value: function() {
				return ot.call(this);
			}
		},
		{
			key: "disableEventListeners",
			value: function() {
				return ct.call(this);
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/@material-ui/core/esm/Portal/Portal.js
Pt.Utils = (typeof window < "u" ? window : global).PopperUtils, Pt.placements = bt, Pt.Defaults = Nt, L();
function Ft(e) {
	return e = typeof e == "function" ? e() : e, de.findDOMNode(e);
}
var It = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Lt = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.children, r = e.container, i = e.disablePortal, a = i === void 0 ? !1 : i, o = e.onRendered, s = R.useState(null), c = s[0], l = s[1], u = I(/*#__PURE__*/ R.isValidElement(n) ? n.ref : null, t);
	return It(function() {
		a || l(Ft(r) || document.body);
	}, [r, a]), It(function() {
		if (c && !a) return P(t, c), function() {
			P(t, null);
		};
	}, [
		t,
		c,
		a
	]), It(function() {
		o && (c || a) && o();
	}, [
		o,
		c,
		a
	]), a ? /*#__PURE__*/ R.isValidElement(n) ? /*#__PURE__*/ R.cloneElement(n, { ref: u }) : n : c && /*#__PURE__*/ de.createPortal(n, c);
});
T(), A(), m(), N(), ce(), L();
function Rt(e, t) {
	if ((t && t.direction || "ltr") === "ltr") return e;
	switch (e) {
		case "bottom-end": return "bottom-start";
		case "bottom-start": return "bottom-end";
		case "top-end": return "top-start";
		case "top-start": return "top-end";
		default: return e;
	}
}
function zt(e) {
	return typeof e == "function" ? e() : e;
}
var Bt = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Vt = {}, Ht = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.anchorEl, r = e.children, a = e.container, o = e.disablePortal, s = o === void 0 ? !1 : o, c = e.keepMounted, l = c === void 0 ? !1 : c, u = e.modifiers, f = e.open, p = e.placement, m = p === void 0 ? "bottom" : p, h = e.popperOptions, g = h === void 0 ? Vt : h, _ = e.popperRef, v = e.style, y = e.transition, b = y === void 0 ? !1 : y, S = i(e, [
		"anchorEl",
		"children",
		"container",
		"disablePortal",
		"keepMounted",
		"modifiers",
		"open",
		"placement",
		"popperOptions",
		"popperRef",
		"style",
		"transition"
	]), C = R.useRef(null), w = I(C, t), T = R.useRef(null), E = I(T, _), D = R.useRef(E);
	Bt(function() {
		D.current = E;
	}, [E]), R.useImperativeHandle(_, function() {
		return T.current;
	}, []);
	var O = R.useState(!0), k = O[0], A = O[1], j = Rt(m, d()), N = R.useState(j), F = N[0], ee = N[1];
	R.useEffect(function() {
		T.current && T.current.update();
	});
	var te = R.useCallback(function() {
		if (!(!C.current || !n || !f)) {
			T.current && (T.current.destroy(), D.current(null));
			var e = function(e) {
				ee(e.placement);
			};
			zt(n);
			var t = new Pt(zt(n), C.current, x({ placement: j }, g, {
				modifiers: x({}, s ? {} : { preventOverflow: { boundariesElement: "window" } }, u, g.modifiers),
				onCreate: M(e, g.onCreate),
				onUpdate: M(e, g.onUpdate)
			}));
			D.current(t);
		}
	}, [
		n,
		s,
		u,
		f,
		j,
		g
	]), ne = R.useCallback(function(e) {
		P(w, e), te();
	}, [w, te]), L = function() {
		A(!1);
	}, re = function() {
		T.current && (T.current.destroy(), D.current(null));
	}, ie = function() {
		A(!0), re();
	};
	if (R.useEffect(function() {
		return function() {
			re();
		};
	}, []), R.useEffect(function() {
		!f && !b && re();
	}, [f, b]), !l && !f && (!b || k)) return null;
	var ae = { placement: F };
	return b && (ae.TransitionProps = {
		in: f,
		onEnter: L,
		onExited: ie
	}), /*#__PURE__*/ R.createElement(Lt, {
		disablePortal: s,
		container: a
	}, /*#__PURE__*/ R.createElement("div", x({
		ref: ne,
		role: "tooltip"
	}, S, { style: x({
		position: "fixed",
		top: 0,
		left: 0,
		display: !f && l && !b ? "none" : null
	}, v) }), typeof r == "function" ? r(ae) : r));
});
T(), k(), A(), s(), g(), w(), h(), C(), F(), L(), ae(), ce(), te(), le();
function Ut(e) {
	return Math.round(e * 1e5) / 1e5;
}
function Wt() {
	return {
		"&[x-placement*=\"bottom\"] $arrow": {
			top: 0,
			left: 0,
			marginTop: "-0.71em",
			marginLeft: 4,
			marginRight: 4,
			"&::before": { transformOrigin: "0 100%" }
		},
		"&[x-placement*=\"top\"] $arrow": {
			bottom: 0,
			left: 0,
			marginBottom: "-0.71em",
			marginLeft: 4,
			marginRight: 4,
			"&::before": { transformOrigin: "100% 0" }
		},
		"&[x-placement*=\"right\"] $arrow": {
			left: 0,
			marginLeft: "-0.71em",
			height: "1em",
			width: "0.71em",
			marginTop: 4,
			marginBottom: 4,
			"&::before": { transformOrigin: "100% 100%" }
		},
		"&[x-placement*=\"left\"] $arrow": {
			right: 0,
			marginRight: "-0.71em",
			height: "1em",
			width: "0.71em",
			marginTop: 4,
			marginBottom: 4,
			"&::before": { transformOrigin: "0 0" }
		}
	};
}
var Gt = function(e) {
	return {
		popper: {
			zIndex: e.zIndex.tooltip,
			pointerEvents: "none"
		},
		popperInteractive: { pointerEvents: "auto" },
		popperArrow: Wt(),
		tooltip: {
			backgroundColor: u(e.palette.grey[700], .9),
			borderRadius: e.shape.borderRadius,
			color: e.palette.common.white,
			fontFamily: e.typography.fontFamily,
			padding: "4px 8px",
			fontSize: e.typography.pxToRem(10),
			lineHeight: `${Ut(14 / 10)}em`,
			maxWidth: 300,
			wordWrap: "break-word",
			fontWeight: e.typography.fontWeightMedium
		},
		tooltipArrow: {
			position: "relative",
			margin: "0"
		},
		arrow: {
			overflow: "hidden",
			position: "absolute",
			width: "1em",
			height: "0.71em",
			boxSizing: "border-box",
			color: u(e.palette.grey[700], .9),
			"&::before": {
				content: "\"\"",
				margin: "auto",
				display: "block",
				width: "100%",
				height: "100%",
				backgroundColor: "currentColor",
				transform: "rotate(45deg)"
			}
		},
		touch: {
			padding: "8px 16px",
			fontSize: e.typography.pxToRem(14),
			lineHeight: `${Ut(16 / 14)}em`,
			fontWeight: e.typography.fontWeightRegular
		},
		tooltipPlacementLeft: o({
			transformOrigin: "right center",
			margin: "0 24px "
		}, e.breakpoints.up("sm"), { margin: "0 14px" }),
		tooltipPlacementRight: o({
			transformOrigin: "left center",
			margin: "0 24px"
		}, e.breakpoints.up("sm"), { margin: "0 14px" }),
		tooltipPlacementTop: o({
			transformOrigin: "center bottom",
			margin: "24px 0"
		}, e.breakpoints.up("sm"), { margin: "14px 0" }),
		tooltipPlacementBottom: o({
			transformOrigin: "center top",
			margin: "24px 0"
		}, e.breakpoints.up("sm"), { margin: "14px 0" })
	};
}, Kt = !1, qt = null, Jt = /*#__PURE__*/ R.forwardRef(function(e, t) {
	var n = e.arrow, r = n === void 0 ? !1 : n, a = e.children, o = e.classes, s = e.disableFocusListener, c = s === void 0 ? !1 : s, l = e.disableHoverListener, u = l === void 0 ? !1 : l, d = e.disableTouchListener, f = d === void 0 ? !1 : d, p = e.enterDelay, m = p === void 0 ? 100 : p, h = e.enterNextDelay, g = h === void 0 ? 0 : h, v = e.enterTouchDelay, b = v === void 0 ? 700 : v, C = e.id, w = e.interactive, T = w === void 0 ? !1 : w, E = e.leaveDelay, D = E === void 0 ? 0 : E, O = e.leaveTouchDelay, k = O === void 0 ? 1500 : O, A = e.onClose, M = e.onOpen, N = e.open, F = e.placement, te = F === void 0 ? "bottom" : F, L = e.PopperComponent, ie = L === void 0 ? Ht : L, ae = e.PopperProps, oe = e.title, se = e.TransitionComponent, ce = se === void 0 ? xe : se, le = e.TransitionProps, ue = i(e, [
		"arrow",
		"children",
		"classes",
		"disableFocusListener",
		"disableHoverListener",
		"disableTouchListener",
		"enterDelay",
		"enterNextDelay",
		"enterTouchDelay",
		"id",
		"interactive",
		"leaveDelay",
		"leaveTouchDelay",
		"onClose",
		"onOpen",
		"open",
		"placement",
		"PopperComponent",
		"PopperProps",
		"title",
		"TransitionComponent",
		"TransitionProps"
	]), pe = fe(), me = R.useState(), z = me[0], he = me[1], ge = R.useState(null), _e = ge[0], ve = ge[1], B = R.useRef(!1), ye = R.useRef(), V = R.useRef(), H = R.useRef(), be = R.useRef(), U = _(ee({
		controlled: N,
		default: !1,
		name: "Tooltip",
		state: "open"
	}), 2), Se = U[0], Ce = U[1], we = Se, Te = re(C);
	R.useEffect(function() {
		return function() {
			clearTimeout(ye.current), clearTimeout(V.current), clearTimeout(H.current), clearTimeout(be.current);
		};
	}, []);
	var Ee = function(e) {
		clearTimeout(qt), Kt = !0, Ce(!0), M && M(e);
	}, W = function() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		return function(t) {
			var n = a.props;
			t.type === "mouseover" && n.onMouseOver && e && n.onMouseOver(t), !(B.current && t.type !== "touchstart") && (z && z.removeAttribute("title"), clearTimeout(V.current), clearTimeout(H.current), m || Kt && g ? (t.persist(), V.current = setTimeout(function() {
				Ee(t);
			}, Kt ? g : m)) : Ee(t));
		};
	}, G = ne(), K = G.isFocusVisible, De = G.onBlurVisible, Oe = G.ref, ke = R.useState(!1), q = ke[0], J = ke[1], Ae = function() {
		q && (J(!1), De());
	}, je = function() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		return function(t) {
			z || he(t.currentTarget), K(t) && (J(!0), W()(t));
			var n = a.props;
			n.onFocus && e && n.onFocus(t);
		};
	}, Y = function(e) {
		clearTimeout(qt), qt = setTimeout(function() {
			Kt = !1;
		}, 800 + D), Ce(!1), A && A(e), clearTimeout(ye.current), ye.current = setTimeout(function() {
			B.current = !1;
		}, pe.transitions.duration.shortest);
	}, X = function() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
		return function(t) {
			var n = a.props;
			t.type === "blur" && (n.onBlur && e && n.onBlur(t), Ae()), t.type === "mouseleave" && n.onMouseLeave && t.currentTarget === z && n.onMouseLeave(t), clearTimeout(V.current), clearTimeout(H.current), t.persist(), H.current = setTimeout(function() {
				Y(t);
			}, D);
		};
	}, Me = function(e) {
		B.current = !0;
		var t = a.props;
		t.onTouchStart && t.onTouchStart(e);
	}, Ne = function(e) {
		Me(e), clearTimeout(H.current), clearTimeout(ye.current), clearTimeout(be.current), e.persist(), be.current = setTimeout(function() {
			W()(e);
		}, b);
	}, Pe = function(e) {
		a.props.onTouchEnd && a.props.onTouchEnd(e), clearTimeout(be.current), clearTimeout(H.current), e.persist(), H.current = setTimeout(function() {
			Y(e);
		}, k);
	}, Fe = I(Oe, I(he, t)), Ie = R.useCallback(function(e) {
		P(Fe, de.findDOMNode(e));
	}, [Fe]), Le = I(a.ref, Ie);
	oe === "" && (we = !1);
	var Z = x({
		"aria-describedby": we ? Te : null,
		title: !we && !u && typeof oe == "string" ? oe : null
	}, ue, a.props, {
		className: y(ue.className, a.props.className),
		onTouchStart: Me,
		ref: Le
	}), Q = {};
	f || (Z.onTouchStart = Ne, Z.onTouchEnd = Pe), u || (Z.onMouseOver = W(), Z.onMouseLeave = X(), T && (Q.onMouseOver = W(!1), Q.onMouseLeave = X(!1))), c || (Z.onFocus = je(), Z.onBlur = X(), T && (Q.onFocus = je(!1), Q.onBlur = X(!1)));
	var $ = R.useMemo(function() {
		return S({ popperOptions: { modifiers: { arrow: {
			enabled: !!_e,
			element: _e
		} } } }, ae);
	}, [_e, ae]);
	return /*#__PURE__*/ R.createElement(R.Fragment, null, /*#__PURE__*/ R.cloneElement(a, Z), /*#__PURE__*/ R.createElement(ie, x({
		className: y(o.popper, T && o.popperInteractive, r && o.popperArrow),
		placement: te,
		anchorEl: z,
		open: z ? we : !1,
		id: Z["aria-describedby"],
		transition: !0
	}, Q, $), function(e) {
		var t = e.placement, n = e.TransitionProps;
		return /*#__PURE__*/ R.createElement(ce, x({ timeout: pe.transitions.duration.shorter }, n, le), /*#__PURE__*/ R.createElement("div", { className: y(o.tooltip, o[`tooltipPlacement${j(t.split("-")[0])}`], B.current && o.touch, r && o.tooltipArrow) }, oe, r ? /*#__PURE__*/ R.createElement("span", {
			className: o.arrow,
			ref: ve
		}) : null));
	}));
}), Yt = E(Gt, {
	name: "MuiTooltip",
	flip: !1
})(Jt);
//#endregion
//#region node_modules/mirador/dist/es/src/components/MiradorMenuButton.js
r();
var Xt = [
	"badge",
	"children",
	"containerId",
	"dispatch",
	"BadgeProps",
	"TooltipProps"
];
function Zt(e, t) {
	if (e == null) return {};
	var n, r, i = Qt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Qt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
function $t(e) {
	var t = e["aria-label"], n = e.badge, r = e.children, i = e.containerId;
	e.dispatch;
	var a = e.BadgeProps, o = e.TooltipProps, s = Zt(e, Xt), c = /*#__PURE__*/ R.createElement(B, s, n ? /*#__PURE__*/ R.createElement(ge, a, r) : r);
	return s.disabled ? c : /*#__PURE__*/ R.createElement(Yt, Object.assign({
		PopperProps: { container: document.querySelector(`#${i} .${ue("viewer")}`) },
		title: t
	}, o), c);
}
$t.defaultProps = {
	badge: !1,
	BadgeProps: {},
	dispatch: function() {},
	TooltipProps: {}
};
var en = c(D(function(e) {
	return { containerId: l(e) };
}, null), a("MiradorMenuButton"))($t), tn = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e, t, n, r, i, a, o, s) {
		if (!e) {
			var c;
			if (t === void 0) c = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var l = [
					n,
					r,
					i,
					a,
					o,
					s
				], u = 0;
				c = Error(t.replace(/%s/g, function() {
					return l[u++];
				})), c.name = "Invariant Violation";
			}
			throw c.framesToPop = 1, c;
		}
	};
})), nn = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? r(e) : typeof define == "function" && define.amd ? define(["exports"], r) : (n ||= self, r(n.throttleDebounce = {}));
	})(e, (function(e) {
		function t(e, t, n, r) {
			var i, a = !1, o = 0;
			function s() {
				i && clearTimeout(i);
			}
			function c() {
				s(), a = !0;
			}
			typeof t != "boolean" && (r = n, n = t, t = void 0);
			function l() {
				var c = [...arguments], l = this, u = Date.now() - o;
				if (a) return;
				function d() {
					o = Date.now(), n.apply(l, c);
				}
				function f() {
					i = void 0;
				}
				r && !i && d(), s(), r === void 0 && u > e ? d() : t !== !0 && (i = setTimeout(r ? f : d, r === void 0 ? e - u : e));
			}
			return l.cancel = c, l;
		}
		function n(e, n, r) {
			return r === void 0 ? t(e, n, !1) : t(e, r, n !== !1);
		}
		e.debounce = n, e.throttle = t, Object.defineProperty(e, "__esModule", { value: !0 });
	}));
})), rn = /* @__PURE__ */ n(((e, t) => {
	var n = t.exports = {};
	n.forEach = function(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = t(e[n]);
			if (r) return r;
		}
	};
})), an = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e) {
		var t = e.stateHandler.getState;
		function n(e) {
			var n = t(e);
			return n && !!n.isDetectable;
		}
		function r(e) {
			t(e).isDetectable = !0;
		}
		function i(e) {
			return !!t(e).busy;
		}
		function a(e, n) {
			t(e).busy = !!n;
		}
		return {
			isDetectable: n,
			markAsDetectable: r,
			isBusy: i,
			markBusy: a
		};
	};
})), on = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e) {
		var t = {};
		function n(n) {
			var r = e.get(n);
			return r === void 0 ? [] : t[r] || [];
		}
		function r(n, r) {
			var i = e.get(n);
			t[i] || (t[i] = []), t[i].push(r);
		}
		function i(e, t) {
			for (var r = n(e), i = 0, a = r.length; i < a; ++i) if (r[i] === t) {
				r.splice(i, 1);
				break;
			}
		}
		function a(e) {
			var t = n(e);
			t && (t.length = 0);
		}
		return {
			get: n,
			add: r,
			removeListener: i,
			removeAllListeners: a
		};
	};
})), sn = /* @__PURE__ */ n(((e, t) => {
	t.exports = function() {
		var e = 1;
		function t() {
			return e++;
		}
		return { generate: t };
	};
})), cn = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e) {
		var t = e.idGenerator, n = e.stateHandler.getState;
		function r(e) {
			var t = n(e);
			return t && t.id !== void 0 ? t.id : null;
		}
		function i(e) {
			var r = n(e);
			if (!r) throw Error("setId required the element to have a resize detection state.");
			var i = t.generate();
			return r.id = i, i;
		}
		return {
			get: r,
			set: i
		};
	};
})), ln = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e) {
		function t() {}
		var n = {
			log: t,
			warn: t,
			error: t
		};
		if (!e && window.console) {
			var r = function(e, t) {
				e[t] = function() {
					var e = console[t];
					if (e.apply) e.apply(console, arguments);
					else for (var n = 0; n < arguments.length; n++) e(arguments[n]);
				};
			};
			r(n, "log"), r(n, "warn"), r(n, "error");
		}
		return n;
	};
})), un = /* @__PURE__ */ n(((e, t) => {
	var n = t.exports = {};
	n.isIE = function(e) {
		function t() {
			var e = navigator.userAgent.toLowerCase();
			return e.indexOf("msie") !== -1 || e.indexOf("trident") !== -1 || e.indexOf(" edge/") !== -1;
		}
		return t() ? e ? e === function() {
			var e, t = 3, n = document.createElement("div"), r = n.getElementsByTagName("i");
			do
				n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->";
			while (r[0]);
			return t > 4 ? t : e;
		}() : !0 : !1;
	}, n.isLegacyOpera = function() {
		return !!window.opera;
	};
})), dn = /* @__PURE__ */ n(((e, t) => {
	var n = t.exports = {};
	n.getOption = r;
	function r(e, t, n) {
		var r = e[t];
		return r == null && n !== void 0 ? n : r;
	}
})), fn = /* @__PURE__ */ n(((e, t) => {
	var n = dn();
	t.exports = function(e) {
		e ||= {};
		var t = e.reporter, i = n.getOption(e, "async", !0), a = n.getOption(e, "auto", !0);
		a && !i && (t && t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), i = !0);
		var o = r(), s, c = !1;
		function l(e, t) {
			!c && a && i && o.size() === 0 && f(), o.add(e, t);
		}
		function u() {
			for (c = !0; o.size();) {
				var e = o;
				o = r(), e.process();
			}
			c = !1;
		}
		function d(e) {
			c || (e === void 0 && (e = i), s &&= (p(s), null), e ? f() : u());
		}
		function f() {
			s = m(u);
		}
		function p(e) {
			return clearTimeout(e);
		}
		function m(e) {
			return function(e) {
				return setTimeout(e, 0);
			}(e);
		}
		return {
			add: l,
			force: d
		};
	};
	function r() {
		var e = {}, t = 0, n = 0, r = 0;
		function i(i, a) {
			a || (a = i, i = 0), i > n ? n = i : i < r && (r = i), e[i] || (e[i] = []), e[i].push(a), t++;
		}
		function a() {
			for (var t = r; t <= n; t++) for (var i = e[t], a = 0; a < i.length; a++) {
				var o = i[a];
				o();
			}
		}
		function o() {
			return t;
		}
		return {
			add: i,
			process: a,
			size: o
		};
	}
})), pn = /* @__PURE__ */ n(((e, t) => {
	var n = "_erd";
	function r(e) {
		return e[n] = {}, i(e);
	}
	function i(e) {
		return e[n];
	}
	function a(e) {
		delete e[n];
	}
	t.exports = {
		initState: r,
		getState: i,
		cleanState: a
	};
})), mn = /* @__PURE__ */ n(((e, t) => {
	var n = un();
	t.exports = function(e) {
		e ||= {};
		var t = e.reporter, r = e.batchProcessor, i = e.stateHandler.getState;
		if (!t) throw Error("Missing required dependency: reporter.");
		function a(e, t) {
			function r() {
				t(e);
			}
			if (n.isIE(8)) i(e).object = { proxy: r }, e.attachEvent("onresize", r);
			else {
				var a = c(e);
				if (!a) throw Error("Element is not detectable by this strategy.");
				a.contentDocument.defaultView.addEventListener("resize", r);
			}
		}
		function o(t) {
			var n = e.important ? " !important; " : "; ";
			return (t.join(n) + n).trim();
		}
		function s(e, a, s) {
			s || (s = a, a = e, e = null), e ||= {}, e.debug;
			function c(a, s) {
				var c = o([
					"display: block",
					"position: absolute",
					"top: 0",
					"left: 0",
					"width: 100%",
					"height: 100%",
					"border: none",
					"padding: 0",
					"margin: 0",
					"opacity: 0",
					"z-index: -1000",
					"pointer-events: none"
				]), l = !1, u = window.getComputedStyle(a), d = a.offsetWidth, f = a.offsetHeight;
				i(a).startSize = {
					width: d,
					height: f
				};
				function p() {
					function r() {
						if (u.position === "static") {
							a.style.setProperty("position", "relative", e.important ? "important" : "");
							var n = function(t, n, r, i) {
								function a(e) {
									return e.replace(/[^-\d\.]/g, "");
								}
								var o = r[i];
								o !== "auto" && a(o) !== "0" && (t.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", n), n.style.setProperty(i, "0", e.important ? "important" : ""));
							};
							n(t, a, u, "top"), n(t, a, u, "right"), n(t, a, u, "bottom"), n(t, a, u, "left");
						}
					}
					function o() {
						l || r();
						function e(t, n) {
							if (!t.contentDocument) {
								var r = i(t);
								r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId), r.checkForObjectDocumentTimeoutId = setTimeout(function() {
									r.checkForObjectDocumentTimeoutId = 0, e(t, n);
								}, 100);
								return;
							}
							n(t.contentDocument);
						}
						e(this, function(e) {
							s(a);
						});
					}
					u.position !== "" && (r(u), l = !0);
					var d = document.createElement("object");
					d.style.cssText = c, d.tabIndex = -1, d.type = "text/html", d.setAttribute("aria-hidden", "true"), d.onload = o, n.isIE() || (d.data = "about:blank"), i(a) && (a.appendChild(d), i(a).object = d, n.isIE() && (d.data = "about:blank"));
				}
				r ? r.add(p) : p();
			}
			n.isIE(8) ? s(a) : c(a, s);
		}
		function c(e) {
			return i(e).object;
		}
		function l(e) {
			if (i(e)) {
				var t = c(e);
				t && (n.isIE(8) ? e.detachEvent("onresize", t.proxy) : e.removeChild(t), i(e).checkForObjectDocumentTimeoutId && window.clearTimeout(i(e).checkForObjectDocumentTimeoutId), delete i(e).object);
			}
		}
		return {
			makeDetectable: s,
			addListener: a,
			uninstall: l
		};
	};
})), hn = /* @__PURE__ */ n(((e, t) => {
	var n = rn().forEach;
	t.exports = function(e) {
		e ||= {};
		var t = e.reporter, r = e.batchProcessor, i = e.stateHandler.getState;
		e.stateHandler.hasState;
		var a = e.idHandler;
		if (!r) throw Error("Missing required dependency: batchProcessor");
		if (!t) throw Error("Missing required dependency: reporter.");
		var o = d(), s = "erd_scroll_detection_scrollbar_style", c = "erd_scroll_detection_container";
		function l(e) {
			f(e, s, c);
		}
		l(window.document);
		function u(t) {
			var n = e.important ? " !important; " : "; ";
			return (t.join(n) + n).trim();
		}
		function d() {
			var e = 500, t = 500, n = document.createElement("div");
			n.style.cssText = u([
				"position: absolute",
				"width: " + e * 2 + "px",
				"height: " + t * 2 + "px",
				"visibility: hidden",
				"margin: 0",
				"padding: 0"
			]);
			var r = document.createElement("div");
			r.style.cssText = u([
				"position: absolute",
				"width: " + e + "px",
				"height: " + t + "px",
				"overflow: scroll",
				"visibility: none",
				"top: " + -e * 3 + "px",
				"left: " + -t * 3 + "px",
				"visibility: hidden",
				"margin: 0",
				"padding: 0"
			]), r.appendChild(n), document.body.insertBefore(r, document.body.firstChild);
			var i = e - r.clientWidth, a = t - r.clientHeight;
			return document.body.removeChild(r), {
				width: i,
				height: a
			};
		}
		function f(e, t, n) {
			function r(n, r) {
				r ||= function(t) {
					e.head.appendChild(t);
				};
				var i = e.createElement("style");
				return i.innerHTML = n, i.id = t, r(i), i;
			}
			if (!e.getElementById(t)) {
				var i = n + "_animation", a = n + "_animation_active", o = "/* Created by the element-resize-detector library. */\n";
				o += "." + n + " > div::-webkit-scrollbar { " + u(["display: none"]) + " }\n\n", o += "." + a + " { " + u([
					"-webkit-animation-duration: 0.1s",
					"animation-duration: 0.1s",
					"-webkit-animation-name: " + i,
					"animation-name: " + i
				]) + " }\n", o += "@-webkit-keyframes " + i + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n", o += "@keyframes " + i + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", r(o);
			}
		}
		function p(e) {
			e.className += " " + c + "_animation_active";
		}
		function m(e, n, r) {
			if (e.addEventListener) e.addEventListener(n, r);
			else if (e.attachEvent) e.attachEvent("on" + n, r);
			else return t.error("[scroll] Don't know how to add event listeners.");
		}
		function h(e, n, r) {
			if (e.removeEventListener) e.removeEventListener(n, r);
			else if (e.detachEvent) e.detachEvent("on" + n, r);
			else return t.error("[scroll] Don't know how to remove event listeners.");
		}
		function g(e) {
			return i(e).container.childNodes[0].childNodes[0].childNodes[0];
		}
		function _(e) {
			return i(e).container.childNodes[0].childNodes[0].childNodes[1];
		}
		function v(e, t) {
			if (!i(e).listeners.push) throw Error("Cannot add listener to an element that is not detectable.");
			i(e).listeners.push(t);
		}
		function y(e, s, l) {
			l || (l = s, s = e, e = null), e ||= {};
			function d() {
				if (e.debug) {
					var n = Array.prototype.slice.call(arguments);
					if (n.unshift(a.get(s), "Scroll: "), t.log.apply) t.log.apply(null, n);
					else for (var r = 0; r < n.length; r++) t.log(n[r]);
				}
			}
			function f(e) {
				function t(e) {
					var t = e.getRootNode && e.getRootNode().contains(e);
					return e === e.ownerDocument.body || e.ownerDocument.body.contains(e) || t;
				}
				return !t(e) || window.getComputedStyle(e) === null;
			}
			function h(e) {
				var t = i(e).container.childNodes[0], n = window.getComputedStyle(t);
				return !n.width || n.width.indexOf("px") === -1;
			}
			function v() {
				var e = window.getComputedStyle(s), t = {};
				return t.position = e.position, t.width = s.offsetWidth, t.height = s.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t;
			}
			function y() {
				var e = v();
				i(s).startSize = {
					width: e.width,
					height: e.height
				}, d("Element start size", i(s).startSize);
			}
			function b() {
				i(s).listeners = [];
			}
			function x() {
				if (d("storeStyle invoked."), !i(s)) {
					d("Aborting because element has been uninstalled");
					return;
				}
				var e = v();
				i(s).style = e;
			}
			function S(e, t, n) {
				i(e).lastWidth = t, i(e).lastHeight = n;
			}
			function C(e) {
				return g(e).childNodes[0];
			}
			function w() {
				return 2 * o.width + 1;
			}
			function T() {
				return 2 * o.height + 1;
			}
			function E(e) {
				return e + 10 + w();
			}
			function D(e) {
				return e + 10 + T();
			}
			function O(e) {
				return e * 2 + w();
			}
			function k(e) {
				return e * 2 + T();
			}
			function A(e, t, n) {
				var r = g(e), i = _(e), a = E(t), o = D(n), s = O(t), c = k(n);
				r.scrollLeft = a, r.scrollTop = o, i.scrollLeft = s, i.scrollTop = c;
			}
			function j() {
				var e = i(s).container;
				if (!e) {
					e = document.createElement("div"), e.className = c, e.style.cssText = u([
						"visibility: hidden",
						"display: inline",
						"width: 0px",
						"height: 0px",
						"z-index: -1",
						"overflow: hidden",
						"margin: 0",
						"padding: 0"
					]), i(s).container = e, p(e), s.appendChild(e);
					var t = function() {
						i(s).onRendered && i(s).onRendered();
					};
					m(e, "animationstart", t), i(s).onAnimationStart = t;
				}
				return e;
			}
			function M() {
				function n() {
					var n = i(s).style;
					if (n.position === "static") {
						s.style.setProperty("position", "relative", e.important ? "important" : "");
						var r = function(e, t, n, r) {
							function i(e) {
								return e.replace(/[^-\d\.]/g, "");
							}
							var a = n[r];
							a !== "auto" && i(a) !== "0" && (e.warn("An element that is positioned static has style." + r + "=" + a + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0);
						};
						r(t, s, n, "top"), r(t, s, n, "right"), r(t, s, n, "bottom"), r(t, s, n, "left");
					}
				}
				function r(e, t, n, r) {
					return e = e ? e + "px" : "0", t = t ? t + "px" : "0", n = n ? n + "px" : "0", r = r ? r + "px" : "0", [
						"left: " + e,
						"top: " + t,
						"right: " + r,
						"bottom: " + n
					];
				}
				if (d("Injecting elements"), !i(s)) {
					d("Aborting because element has been uninstalled");
					return;
				}
				n();
				var a = i(s).container;
				a ||= j();
				var l = o.width, f = o.height, p = u([
					"position: absolute",
					"flex: none",
					"overflow: hidden",
					"z-index: -1",
					"visibility: hidden",
					"width: 100%",
					"height: 100%",
					"left: 0px",
					"top: 0px"
				]), h = u([
					"position: absolute",
					"flex: none",
					"overflow: hidden",
					"z-index: -1",
					"visibility: hidden"
				].concat(r(-(1 + l), -(1 + f), -f, -l))), g = u([
					"position: absolute",
					"flex: none",
					"overflow: scroll",
					"z-index: -1",
					"visibility: hidden",
					"width: 100%",
					"height: 100%"
				]), _ = u([
					"position: absolute",
					"flex: none",
					"overflow: scroll",
					"z-index: -1",
					"visibility: hidden",
					"width: 100%",
					"height: 100%"
				]), v = u([
					"position: absolute",
					"left: 0",
					"top: 0"
				]), y = u([
					"position: absolute",
					"width: 200%",
					"height: 200%"
				]), b = document.createElement("div"), x = document.createElement("div"), S = document.createElement("div"), C = document.createElement("div"), w = document.createElement("div"), T = document.createElement("div");
				b.dir = "ltr", b.style.cssText = p, b.className = c, x.className = c, x.style.cssText = h, S.style.cssText = g, C.style.cssText = v, w.style.cssText = _, T.style.cssText = y, S.appendChild(C), w.appendChild(T), x.appendChild(S), x.appendChild(w), b.appendChild(x), a.appendChild(b);
				function E() {
					var e = i(s);
					e && e.onExpand ? e.onExpand() : d("Aborting expand scroll handler: element has been uninstalled");
				}
				function D() {
					var e = i(s);
					e && e.onShrink ? e.onShrink() : d("Aborting shrink scroll handler: element has been uninstalled");
				}
				m(S, "scroll", E), m(w, "scroll", D), i(s).onExpandScroll = E, i(s).onShrinkScroll = D;
			}
			function N() {
				function o(t, n, r) {
					var i = C(t), a = E(n), o = D(r);
					i.style.setProperty("width", a + "px", e.important ? "important" : ""), i.style.setProperty("height", o + "px", e.important ? "important" : "");
				}
				function c(n) {
					var c = s.offsetWidth, u = s.offsetHeight, f = c !== i(s).lastWidth || u !== i(s).lastHeight;
					d("Storing current size", c, u), S(s, c, u), r.add(0, function() {
						if (f) {
							if (!i(s)) {
								d("Aborting because element has been uninstalled");
								return;
							}
							if (!l()) {
								d("Aborting because element container has not been initialized");
								return;
							}
							if (e.debug) {
								var n = s.offsetWidth, r = s.offsetHeight;
								(n !== c || r !== u) && t.warn(a.get(s), "Scroll: Size changed before updating detector elements.");
							}
							o(s, c, u);
						}
					}), r.add(1, function() {
						if (!i(s)) {
							d("Aborting because element has been uninstalled");
							return;
						}
						if (!l()) {
							d("Aborting because element container has not been initialized");
							return;
						}
						A(s, c, u);
					}), f && n && r.add(2, function() {
						if (!i(s)) {
							d("Aborting because element has been uninstalled");
							return;
						}
						if (!l()) {
							d("Aborting because element container has not been initialized");
							return;
						}
						n();
					});
				}
				function l() {
					return !!i(s).container;
				}
				function u() {
					function e() {
						return i(s).lastNotifiedWidth === void 0;
					}
					d("notifyListenersIfNeeded invoked");
					var t = i(s);
					if (e() && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height) return d("Not notifying: Size is the same as the start size, and there has been no notification yet.");
					if (t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight) return d("Not notifying: Size already notified");
					d("Current size not notified, notifying..."), t.lastNotifiedWidth = t.lastWidth, t.lastNotifiedHeight = t.lastHeight, n(i(s).listeners, function(e) {
						e(s);
					});
				}
				function f() {
					if (d("startanimation triggered."), h(s)) {
						d("Ignoring since element is still unrendered...");
						return;
					}
					d("Element rendered.");
					var e = g(s), t = _(s);
					(e.scrollLeft === 0 || e.scrollTop === 0 || t.scrollLeft === 0 || t.scrollTop === 0) && (d("Scrollbars out of sync. Updating detector elements..."), c(u));
				}
				function p() {
					if (d("Scroll detected."), h(s)) {
						d("Scroll event fired while unrendered. Ignoring...");
						return;
					}
					c(u);
				}
				if (d("registerListenersAndPositionElements invoked."), !i(s)) {
					d("Aborting because element has been uninstalled");
					return;
				}
				i(s).onRendered = f, i(s).onExpand = p, i(s).onShrink = p;
				var m = i(s).style;
				o(s, m.width, m.height);
			}
			function P() {
				if (d("finalizeDomMutation invoked."), !i(s)) {
					d("Aborting because element has been uninstalled");
					return;
				}
				var e = i(s).style;
				S(s, e.width, e.height), A(s, e.width, e.height);
			}
			function F() {
				l(s);
			}
			function ee() {
				d("Installing..."), b(), y(), r.add(0, x), r.add(1, M), r.add(2, N), r.add(3, P), r.add(4, F);
			}
			d("Making detectable..."), f(s) ? (d("Element is detached"), j(), d("Waiting until element is attached..."), i(s).onRendered = function() {
				d("Element is now attached"), ee();
			}) : ee();
		}
		function b(e) {
			var t = i(e);
			t && (t.onExpandScroll && h(g(e), "scroll", t.onExpandScroll), t.onShrinkScroll && h(_(e), "scroll", t.onShrinkScroll), t.onAnimationStart && h(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container));
		}
		return {
			makeDetectable: y,
			addListener: v,
			uninstall: b,
			initDocument: l
		};
	};
})), gn = /* @__PURE__ */ n(((e, t) => {
	var n = rn().forEach, r = an(), i = on(), a = sn(), o = cn(), s = ln(), c = un(), l = fn(), u = pn(), d = mn(), f = hn();
	function p(e) {
		return Array.isArray(e) || e.length !== void 0;
	}
	function m(e) {
		if (Array.isArray(e)) return e;
		var t = [];
		return n(e, function(e) {
			t.push(e);
		}), t;
	}
	function h(e) {
		return e && e.nodeType === 1;
	}
	t.exports = function(e) {
		e ||= {};
		var t = e.idHandler ? {
			get: function(t) {
				return e.idHandler.get(t, !0);
			},
			set: e.idHandler.set
		} : o({
			idGenerator: a(),
			stateHandler: u
		}), _ = e.reporter;
		_ ||= s(_ === !1);
		var v = g(e, "batchProcessor", l({ reporter: _ })), y = {};
		y.callOnAdd = !!g(e, "callOnAdd", !0), y.debug = !!g(e, "debug", !1);
		var b = i(t), x = r({ stateHandler: u }), S, C = g(e, "strategy", "object"), w = g(e, "important", !1), T = {
			reporter: _,
			batchProcessor: v,
			stateHandler: u,
			idHandler: t,
			important: w
		};
		if (C === "scroll" && (c.isLegacyOpera() ? (_.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), C = "object") : c.isIE(9) && (_.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), C = "object")), C === "scroll") S = f(T);
		else if (C === "object") S = d(T);
		else throw Error("Invalid strategy name: " + C);
		var E = {};
		function D(e, r, i) {
			function a(e) {
				n(b.get(e), function(t) {
					t(e);
				});
			}
			function o(e, t, n) {
				b.add(t, n), e && n(t);
			}
			if (i || (i = r, r = e, e = {}), !r) throw Error("At least one element required.");
			if (!i) throw Error("Listener required.");
			if (h(r)) r = [r];
			else if (p(r)) r = m(r);
			else return _.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
			var s = 0, c = g(e, "callOnAdd", y.callOnAdd), l = g(e, "onReady", function() {}), d = g(e, "debug", y.debug);
			n(r, function(e) {
				u.getState(e) || (u.initState(e), t.set(e));
				var f = t.get(e);
				if (d && _.log("Attaching listener to element", f, e), !x.isDetectable(e)) {
					if (d && _.log(f, "Not detectable."), x.isBusy(e)) {
						d && _.log(f, "System busy making it detectable"), o(c, e, i), E[f] = E[f] || [], E[f].push(function() {
							s++, s === r.length && l();
						});
						return;
					}
					return d && _.log(f, "Making detectable..."), x.markBusy(e, !0), S.makeDetectable({
						debug: d,
						important: w
					}, e, function(e) {
						if (d && _.log(f, "onElementDetectable"), u.getState(e)) {
							x.markAsDetectable(e), x.markBusy(e, !1), S.addListener(e, a), o(c, e, i);
							var t = u.getState(e);
							if (t && t.startSize) {
								var p = e.offsetWidth, m = e.offsetHeight;
								(t.startSize.width !== p || t.startSize.height !== m) && a(e);
							}
							E[f] && n(E[f], function(e) {
								e();
							});
						} else d && _.log(f, "Element uninstalled before being detectable.");
						delete E[f], s++, s === r.length && l();
					});
				}
				d && _.log(f, "Already detecable, adding listener."), o(c, e, i), s++;
			}), s === r.length && l();
		}
		function O(e) {
			if (!e) return _.error("At least one element is required.");
			if (h(e)) e = [e];
			else if (p(e)) e = m(e);
			else return _.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
			n(e, function(e) {
				b.removeAllListeners(e), S.uninstall(e), u.cleanState(e);
			});
		}
		function k(e) {
			S.initDocument && S.initDocument(e);
		}
		return {
			listenTo: D,
			removeListener: b.removeListener,
			removeAllListeners: b.removeAllListeners,
			uninstall: O,
			initDocument: k
		};
	};
	function g(e, t, n) {
		var r = e[t];
		return r == null && n !== void 0 ? n : r;
	}
})), _n = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e, t, n, r) {
		var i = n ? n.call(r, e, t) : void 0;
		if (i !== void 0) return !!i;
		if (e === t) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var a = Object.keys(e), o = Object.keys(t);
		if (a.length !== o.length) return !1;
		for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
			var l = a[c];
			if (!s(l)) return !1;
			var u = e[l], d = t[l];
			if (i = n ? n.call(r, u, d, l) : void 0, i === !1 || i === void 0 && u !== d) return !1;
		}
		return !0;
	};
})), vn = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return e && typeof e == "object" && "default" in e ? e.default : e;
	}
	var r = p(), i = n(r), a = n(O()), o = n(tn()), s = nn(), c = n(gn()), l = n(_n());
	function u(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function d(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
		}
	}
	function f(e, t, n) {
		return t && d(e.prototype, t), n && d(e, n), e;
	}
	function m(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function h() {
		return h = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, h.apply(this, arguments);
	}
	function g(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function _(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? g(Object(n), !0).forEach(function(t) {
				m(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function v(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			writable: !0,
			configurable: !0
		} }), t && b(e, t);
	}
	function y(e) {
		return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e);
		}, y(e);
	}
	function b(e, t) {
		return b = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e;
		}, b(e, t);
	}
	function x(e, t) {
		if (e == null) return {};
		var n = {}, r = Object.keys(e), i, a;
		for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	function S(e, t) {
		if (e == null) return {};
		var n = x(e, t), r, i;
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function C(e) {
		if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	function w(e, t) {
		return t && (typeof t == "object" || typeof t == "function") ? t : C(e);
	}
	var T = {};
	function E() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "scroll";
		return T[e] || (T[e] = c({ strategy: e })), T[e];
	}
	var D = "react-sizeme: an error occurred whilst stopping to listen to node size changes", k = {
		monitorWidth: !0,
		monitorHeight: !1,
		monitorPosition: !1,
		refreshRate: 16,
		refreshMode: "throttle",
		noPlaceholder: !1,
		resizeDetectorStrategy: "scroll"
	};
	function A(e) {
		return e.displayName || e.name || "Component";
	}
	var j = /*#__PURE__*/ function(e) {
		v(t, e);
		function t() {
			return u(this, t), w(this, y(t).apply(this, arguments));
		}
		return f(t, [{
			key: "render",
			value: function() {
				return r.Children.only(this.props.children);
			}
		}]), t;
	}(r.Component);
	m(j, "displayName", "SizeMeReferenceWrapper");
	function M(e) {
		var t = e.className, n = e.style, r = {};
		return !t && !n ? r.style = {
			width: "100%",
			height: "100%"
		} : (t && (r.className = t), n && (r.style = n)), i.createElement("div", r);
	}
	M.displayName = "SizeMePlaceholder";
	var N = function(e) {
		function t(t) {
			var n = t.explicitRef, r = t.className, a = t.style, o = t.size, s = t.disablePlaceholder;
			t.onSize;
			var c = S(t, [
				"explicitRef",
				"className",
				"style",
				"size",
				"disablePlaceholder",
				"onSize"
			]), l = (o == null || o.width == null && o.height == null && o.position == null) && !s, u = {
				className: r,
				style: a
			};
			o != null && (u.size = o);
			var d = l ? i.createElement(M, {
				className: r,
				style: a
			}) : i.createElement(e, h({}, u, c));
			return i.createElement(j, { ref: n }, d);
		}
		return t.displayName = `SizeMeRenderer(${A(e)})`, t;
	};
	function P() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k, t = e.monitorWidth, n = t === void 0 ? k.monitorWidth : t, r = e.monitorHeight, c = r === void 0 ? k.monitorHeight : r, l = e.monitorPosition, d = l === void 0 ? k.monitorPosition : l, p = e.refreshRate, g = p === void 0 ? k.refreshRate : p, b = e.refreshMode, x = b === void 0 ? k.refreshMode : b, S = e.noPlaceholder, T = S === void 0 ? k.noPlaceholder : S, O = e.resizeDetectorStrategy, j = O === void 0 ? k.resizeDetectorStrategy : O;
		o(n || c || d, "You have to monitor at least one of the width, height, or position when using \"sizeMe\""), o(g >= 16, "It is highly recommended that you don't put your refreshRate lower than 16 as this may cause layout thrashing."), o(x === "throttle" || x === "debounce", "The refreshMode should have a value of \"throttle\" or \"debounce\"");
		var M = x === "throttle" ? s.throttle : s.debounce;
		return function(e) {
			var t = N(e), r = /*#__PURE__*/ function(e) {
				v(r, e);
				function r() {
					var e, t;
					u(this, r);
					var i = [...arguments];
					return t = w(this, (e = y(r)).call.apply(e, [this].concat(i))), m(C(t), "domEl", null), m(C(t), "state", {
						width: void 0,
						height: void 0,
						position: void 0
					}), m(C(t), "uninstall", function() {
						if (t.domEl) {
							try {
								t.detector.uninstall(t.domEl);
							} catch {
								console.warn(D);
							}
							t.domEl = null;
						}
					}), m(C(t), "determineStrategy", function(e) {
						e.onSize ? (t.callbackState ||= _({}, t.state), t.strategy = "callback") : t.strategy = "render";
					}), m(C(t), "strategisedSetState", function(e) {
						t.strategy === "callback" && (t.callbackState = e, t.props.onSize(e)), t.setState(e);
					}), m(C(t), "strategisedGetState", function() {
						return t.strategy === "callback" ? t.callbackState : t.state;
					}), m(C(t), "refCallback", function(e) {
						t.element = e;
					}), m(C(t), "hasSizeChanged", function(e, t) {
						var r = e, i = t, a = r.position || {}, o = i.position || {};
						return n && r.width !== i.width || c && r.height !== i.height || d && (a.top !== o.top || a.left !== o.left || a.bottom !== o.bottom || a.right !== o.right);
					}), m(C(t), "checkIfSizeChanged", M(g, function(e) {
						var r = e.getBoundingClientRect(), i = r.width, a = r.height, o = r.right, s = r.left, l = r.top, u = r.bottom, f = {
							width: n ? i : null,
							height: c ? a : null,
							position: d ? {
								right: o,
								left: s,
								top: l,
								bottom: u
							} : null
						};
						t.hasSizeChanged(t.strategisedGetState(), f) && t.strategisedSetState(f);
					})), t;
				}
				return f(r, [
					{
						key: "componentDidMount",
						value: function() {
							this.detector = E(j), this.determineStrategy(this.props), this.handleDOMNode();
						}
					},
					{
						key: "componentDidUpdate",
						value: function() {
							this.determineStrategy(this.props), this.handleDOMNode();
						}
					},
					{
						key: "componentWillUnmount",
						value: function() {
							this.hasSizeChanged = function() {}, this.checkIfSizeChanged = function() {}, this.uninstall();
						}
					},
					{
						key: "handleDOMNode",
						value: function() {
							var e = this.element && a.findDOMNode(this.element);
							if (!e) {
								this.uninstall();
								return;
							}
							this.domEl ? (this.domEl.isSameNode && !this.domEl.isSameNode(e) || this.domEl !== e) && (this.uninstall(), this.domEl = e, this.detector.listenTo(this.domEl, this.checkIfSizeChanged)) : (this.domEl = e, this.detector.listenTo(this.domEl, this.checkIfSizeChanged));
						}
					},
					{
						key: "render",
						value: function() {
							var e = P.enableSSRBehaviour || P.noPlaceholders || T || this.strategy === "callback", n = _({}, this.state);
							return i.createElement(t, h({
								explicitRef: this.refCallback,
								size: this.strategy === "callback" ? null : n,
								disablePlaceholder: e
							}, this.props));
						}
					}
				]), r;
			}(i.Component);
			return m(r, "displayName", `SizeMe(${A(e)})`), r.WrappedComponent = e, r;
		};
	}
	P.enableSSRBehaviour = !1, P.noPlaceholders = !1;
	var F = /*#__PURE__*/ function(e) {
		v(t, e);
		function t(e) {
			var n;
			u(this, t), n = w(this, y(t).call(this, e)), m(C(n), "createComponent", function(e) {
				n.SizeAware = P(e)(function(e) {
					return e.children;
				});
			}), m(C(n), "onSize", function(e) {
				return n.setState({ size: e });
			}), e.children, e.render;
			var r = S(e, ["children", "render"]);
			return n.createComponent(r), n.state = { size: {
				width: void 0,
				height: void 0
			} }, n;
		}
		return f(t, [{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this.props;
				t.children, t.render;
				var n = S(t, ["children", "render"]);
				e.children, e.render, l(n, S(e, ["children", "render"])) || this.createComponent(n);
			}
		}, {
			key: "render",
			value: function() {
				var e = this.SizeAware, t = this.props.children || this.props.render;
				return i.createElement(e, { onSize: this.onSize }, t({ size: this.state.size }));
			}
		}]), t;
	}(r.Component);
	m(F, "defaultProps", {
		children: void 0,
		render: void 0
	}), P.SizeMe = F, P.withSize = P, t.exports = P;
})), yn = /* @__PURE__ */ n(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.hexToRgb = i, t.rgbToHex = o, t.hslToRgb = s, t.decomposeColor = c, t.recomposeColor = l, t.getContrastRatio = u, t.getLuminance = d, t.emphasize = f, t.fade = p, t.alpha = m, t.darken = h, t.lighten = g;
	var n = (w(), e(b));
	function r(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
		return Math.min(Math.max(t, e), n);
	}
	function i(e) {
		e = e.substr(1);
		var t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
		return n && n[0].length === 1 && (n = n.map(function(e) {
			return e + e;
		})), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map(function(e, t) {
			return t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3;
		}).join(", ")})` : "";
	}
	function a(e) {
		var t = e.toString(16);
		return t.length === 1 ? `0${t}` : t;
	}
	function o(e) {
		return e.indexOf("#") === 0 ? e : `#${c(e).values.map(function(e) {
			return a(e);
		}).join("")}`;
	}
	function s(e) {
		e = c(e);
		var t = e.values, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), o = function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (e + n / 30) % 12;
			return i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
		}, s = "rgb", u = [
			Math.round(o(0) * 255),
			Math.round(o(8) * 255),
			Math.round(o(4) * 255)
		];
		return e.type === "hsla" && (s += "a", u.push(t[3])), l({
			type: s,
			values: u
		});
	}
	function c(e) {
		if (e.type) return e;
		if (e.charAt(0) === "#") return c(i(e));
		var t = e.indexOf("("), r = e.substring(0, t);
		if ([
			"rgb",
			"rgba",
			"hsl",
			"hsla"
		].indexOf(r) === -1) throw Error((0, n.formatMuiErrorMessage)(3, e));
		var a = e.substring(t + 1, e.length - 1).split(",");
		return a = a.map(function(e) {
			return parseFloat(e);
		}), {
			type: r,
			values: a
		};
	}
	function l(e) {
		var t = e.type, n = e.values;
		return t.indexOf("rgb") === -1 ? t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`) : n = n.map(function(e, t) {
			return t < 3 ? parseInt(e, 10) : e;
		}), `${t}(${n.join(", ")})`;
	}
	function u(e, t) {
		var n = d(e), r = d(t);
		return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
	}
	function d(e) {
		e = c(e);
		var t = e.type === "hsl" ? c(s(e)).values : e.values;
		return t = t.map(function(e) {
			return e /= 255, e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
		}), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
	}
	function f(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : .15;
		return d(e) > .5 ? h(e, t) : g(e, t);
	}
	function p(e, t) {
		return m(e, t);
	}
	function m(e, t) {
		return e = c(e), t = r(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.values[3] = t, l(e);
	}
	function h(e, t) {
		if (e = c(e), t = r(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
		else if (e.type.indexOf("rgb") !== -1) for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
		return l(e);
	}
	function g(e, t) {
		if (e = c(e), t = r(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t;
		else if (e.type.indexOf("rgb") !== -1) for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
		return l(e);
	}
}));
//#endregion
export { Yt as a, xe as c, B as d, ge as f, $t as i, V as l, vn as n, Ht as o, fe as p, en as r, Lt as s, yn as t, ye as u };

//# sourceMappingURL=colorManipulator.js.map