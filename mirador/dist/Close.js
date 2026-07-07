import { a as e, n as t, o as n, r, t as i } from "./chunk.js";
import { $i as a, A as o, Ai as s, An as c, Ar as l, At as u, B as d, Bi as f, Bn as p, Br as m, Bt as h, C as g, Ci as _, Dn as v, Dr as y, Dt as b, Ei as x, En as S, Et as C, F as w, Fi as T, Ft as E, G as D, Gi as ee, Gn as O, Gr as k, Hi as A, Hn as j, Hr as M, I as te, In as N, It as P, J as F, K as ne, Kn as I, Kr as re, Li as L, Ln as R, Lt as ie, M as ae, Mi as oe, N as z, Ni as se, Nn as ce, Nr as B, Oi as V, On as le, Or as ue, P as de, Pi as fe, Pn as H, Pt as pe, Qi as me, Qr as U, Ri as he, Rt as ge, Si as _e, Sr as ve, St as ye, T as be, Ti as xe, Tn as Se, Tt as Ce, U as we, Ui as Te, Un as Ee, V as De, Vi as Oe, Vn as ke, Vr as Ae, W as je, Yi as Me, Z as Ne, Zi as Pe, Zn as Fe, Zr as Ie, Zt as Le, _t as Re, ar as ze, at as Be, bi as Ve, br as He, bt as Ue, ca as We, ci as Ge, cn as Ke, ct as qe, d as Je, da as W, dn as Ye, dr as Xe, ei as Ze, er as Qe, f as $e, gn as et, gr as tt, h as nt, hr as rt, ht as it, ii as at, j as ot, jn as st, jt as ct, k as lt, ki as ut, kn as dt, kr as ft, kt as pt, l as mt, la as ht, li as gt, m as _t, mr as G, mt as vt, na as yt, oa as K, or as q, q as bt, qi as xt, qt as St, r as Ct, ra as wt, ri as Tt, sa as J, sr as Y, ta as Et, ti as Dt, u as Ot, ua as kt, ui as At, vt as jt, w as Mt, wi as Nt, wt as Pt, xi as Ft, xt as It, yi as Lt, yt as Rt, z as zt, zn as Bt, zr as Vt, zt as Ht } from "./selectors.js";
import { a as Ut, c as Wt, d as Gt, l as Kt, n as qt, o as Jt, p as Yt, r as Xt, s as Zt, t as Qt, u as $t } from "./colorManipulator.js";
import { C as en, M as tn, N as nn, P as rn, Q as an, S as on, _ as sn, a as cn, c as ln, ct as un, et as dn, g as fn, i as pn, lt as mn, ot as hn, st as gn, t as _n } from "./actions.js";
import { t as vn } from "./Paper.js";
import { t as yn } from "./classnames.js";
import { n as bn, r as xn, t as Sn } from "./SearchSharp.js";
import { A as Cn, B as wn, C as Tn, D as En, E as Dn, H as On, I as kn, L as An, M as jn, O as Mn, R as Nn, S as Pn, T as Fn, U as In, V as Ln, _ as Rn, b as zn, d as Bn, f as Vn, g as Hn, h as Un, j as Wn, k as Gn, l as Kn, m as qn, n as Jn, s as Yn, t as Xn, u as Zn, v as Qn, w as $n, x as er, y as tr, z as nr } from "./ButtonBase.js";
import { n as rr, t as ir } from "./PluginHook.js";
import { t as ar } from "./Button.js";
import { t as or } from "./debounce.js";
//#region node_modules/lodash/_assignValue.js
var sr = /* @__PURE__ */ i(((e, t) => {
	var n = he(), r = ee(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), cr = /* @__PURE__ */ i(((e, t) => {
	var n = sr(), r = Oe(), i = L(), a = xt(), o = f();
	function s(e, t, s, c) {
		if (!a(e)) return e;
		t = r(t, e);
		for (var l = -1, u = t.length, d = u - 1, f = e; f != null && ++l < u;) {
			var p = o(t[l]), m = s;
			if (p === "__proto__" || p === "constructor" || p === "prototype") return e;
			if (l != d) {
				var h = f[p];
				m = c ? c(h, p, f) : void 0, m === void 0 && (m = a(h) ? h : i(t[l + 1]) ? [] : {});
			}
			n(f, p, m), f = f[p];
		}
		return e;
	}
	t.exports = s;
})), lr = /* @__PURE__ */ n(kt());
J();
var ur = /* @__PURE__ */ n(wt());
yt(), T(), se(), s(), Nt(), _e(), Ve(), At(), Ze(), re(), M(), Vt(), l(), tt(), Xe(), q();
var X = /* @__PURE__ */ n(W()), dr = typeof window < "u" ? window : typeof self < "u" ? self : global, fr = null, pr = null, mr = 20, hr = dr.clearTimeout, gr = dr.setTimeout, _r = dr.cancelAnimationFrame || dr.mozCancelAnimationFrame || dr.webkitCancelAnimationFrame, vr = dr.requestAnimationFrame || dr.mozRequestAnimationFrame || dr.webkitRequestAnimationFrame;
_r == null || vr == null ? (fr = hr, pr = function(e) {
	return gr(e, mr);
}) : (fr = function([e, t]) {
	_r(e), hr(t);
}, pr = function(e) {
	let t = vr(function() {
		hr(n), e();
	}), n = gr(function() {
		_r(t), e();
	}, mr);
	return [t, n];
});
function yr(e) {
	let t, n, r, i, a, o, s, c = typeof document < "u" && document.attachEvent;
	if (!c) {
		o = function(e) {
			let t = e.__resizeTriggers__, n = t.firstElementChild, r = t.lastElementChild, i = n.firstElementChild;
			r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, i.style.width = n.offsetWidth + 1 + "px", i.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight;
		}, a = function(e) {
			return e.offsetWidth !== e.__resizeLast__.width || e.offsetHeight !== e.__resizeLast__.height;
		}, s = function(e) {
			if (e.target.className && typeof e.target.className.indexOf == "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) return;
			let t = this;
			o(this), this.__resizeRAF__ && fr(this.__resizeRAF__), this.__resizeRAF__ = pr(function() {
				a(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach(function(n) {
					n.call(t, e);
				}));
			});
		};
		let e = !1, c = "";
		r = "animationstart";
		let l = "Webkit Moz O ms".split(" "), u = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), d = "";
		{
			let t = document.createElement("fakeelement");
			if (t.style.animationName !== void 0 && (e = !0), e === !1) {
				for (let n = 0; n < l.length; n++) if (t.style[l[n] + "AnimationName"] !== void 0) {
					d = l[n], c = "-" + d.toLowerCase() + "-", r = u[n], e = !0;
					break;
				}
			}
		}
		n = "resizeanim", t = "@" + c + "keyframes " + n + " { from { opacity: 0; } to { opacity: 0; } } ", i = c + "animation: 1ms " + n + "; ";
	}
	let l = function(n) {
		if (!n.getElementById("detectElementResize")) {
			let r = (t || "") + ".resize-triggers { " + (i || "") + "visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }", a = n.head || n.getElementsByTagName("head")[0], o = n.createElement("style");
			o.id = "detectElementResize", o.type = "text/css", e != null && o.setAttribute("nonce", e), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(n.createTextNode(r)), a.appendChild(o);
		}
	};
	return {
		addResizeListener: function(e, t) {
			if (c) e.attachEvent("onresize", t);
			else {
				if (!e.__resizeTriggers__) {
					let t = e.ownerDocument, i = dr.getComputedStyle(e);
					i && i.position === "static" && (e.style.position = "relative"), l(t), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = t.createElement("div")).className = "resize-triggers";
					let a = t.createElement("div");
					a.className = "expand-trigger", a.appendChild(t.createElement("div"));
					let c = t.createElement("div");
					c.className = "contract-trigger", e.__resizeTriggers__.appendChild(a), e.__resizeTriggers__.appendChild(c), e.appendChild(e.__resizeTriggers__), o(e), e.addEventListener("scroll", s, !0), r && (e.__resizeTriggers__.__animationListener__ = function(t) {
						t.animationName === n && o(e);
					}, e.__resizeTriggers__.addEventListener(r, e.__resizeTriggers__.__animationListener__));
				}
				e.__resizeListeners__.push(t);
			}
		},
		removeResizeListener: function(e, t) {
			if (c) e.detachEvent("onresize", t);
			else if (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), !e.__resizeListeners__.length) {
				e.removeEventListener("scroll", s, !0), e.__resizeTriggers__.__animationListener__ && (e.__resizeTriggers__.removeEventListener(r, e.__resizeTriggers__.__animationListener__), e.__resizeTriggers__.__animationListener__ = null);
				try {
					e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__);
				} catch {}
			}
		}
	};
}
var br = class extends X.Component {
	constructor(...e) {
		super(...e), this.state = {
			height: this.props.defaultHeight || 0,
			width: this.props.defaultWidth || 0
		}, this._autoSizer = null, this._detectElementResize = null, this._didLogDeprecationWarning = !1, this._parentNode = null, this._resizeObserver = null, this._timeoutId = null, this._onResize = () => {
			this._timeoutId = null;
			let { disableHeight: e, disableWidth: t, onResize: n } = this.props;
			if (this._parentNode) {
				let r = window.getComputedStyle(this._parentNode) || {}, i = parseFloat(r.paddingLeft || "0"), a = parseFloat(r.paddingRight || "0"), o = parseFloat(r.paddingTop || "0"), s = parseFloat(r.paddingBottom || "0"), c = this._parentNode.getBoundingClientRect(), l = c.height - o - s, u = c.width - i - a;
				if (!e && this.state.height !== l || !t && this.state.width !== u) {
					this.setState({
						height: l,
						width: u
					});
					let e = () => {
						this._didLogDeprecationWarning || (this._didLogDeprecationWarning = !0, console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead"));
					};
					typeof n == "function" && n({
						height: l,
						width: u,
						get scaledHeight() {
							return e(), l;
						},
						get scaledWidth() {
							return e(), u;
						}
					});
				}
			}
		}, this._setRef = (e) => {
			this._autoSizer = e;
		};
	}
	componentDidMount() {
		let { nonce: e } = this.props, t = this._autoSizer ? this._autoSizer.parentNode : null;
		if (t != null && t.ownerDocument && t.ownerDocument.defaultView && t instanceof t.ownerDocument.defaultView.HTMLElement) {
			this._parentNode = t;
			let n = t.ownerDocument.defaultView.ResizeObserver;
			n == null ? (this._detectElementResize = yr(e), this._detectElementResize.addResizeListener(t, this._onResize)) : (this._resizeObserver = new n(() => {
				this._timeoutId = setTimeout(this._onResize, 0);
			}), this._resizeObserver.observe(t)), this._onResize();
		}
	}
	componentWillUnmount() {
		this._parentNode && (this._detectElementResize && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize), this._timeoutId !== null && clearTimeout(this._timeoutId), this._resizeObserver && this._resizeObserver.disconnect());
	}
	render() {
		let { children: e, defaultHeight: t, defaultWidth: n, disableHeight: r = !1, disableWidth: i = !1, doNotBailOutOnEmptyChildren: a = !1, nonce: o, onResize: s, style: c = {}, tagName: l = "div", ...u } = this.props, { height: d, width: f } = this.state, p = { overflow: "visible" }, m = {}, h = !1;
		return r || (d === 0 && (h = !0), p.height = 0, m.height = d, m.scaledHeight = d), i || (f === 0 && (h = !0), p.width = 0, m.width = f, m.scaledWidth = f), a && (h = !1), (0, X.createElement)(l, {
			ref: this._setRef,
			style: {
				...p,
				...c
			},
			...u
		}, !h && e(m));
	}
};
//#endregion
//#region node_modules/memoize-one/dist/memoize-one.esm.js
ue();
var xr = Number.isNaN || function(e) {
	return typeof e == "number" && e !== e;
};
function Sr(e, t) {
	return !!(e === t || xr(e) && xr(t));
}
function Cr(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (!Sr(e[n], t[n])) return !1;
	return !0;
}
function wr(e, t) {
	t === void 0 && (t = Cr);
	var n, r = [], i, a = !1;
	function o() {
		var o = [...arguments];
		return a && n === this && t(o, r) ? i : (i = e.apply(this, o), a = !0, n = this, r = o, i);
	}
	return o;
}
//#endregion
//#region node_modules/react-window/dist/index.esm.js
var Tr = typeof performance == "object" && typeof performance.now == "function" ? function() {
	return performance.now();
} : function() {
	return Date.now();
};
function Er(e) {
	cancelAnimationFrame(e.id);
}
function Dr(e, t) {
	var n = Tr();
	function r() {
		Tr() - n >= t ? e.call(null) : i.id = requestAnimationFrame(r);
	}
	var i = { id: requestAnimationFrame(r) };
	return i;
}
var Or = -1;
function kr(e) {
	if (e === void 0 && (e = !1), Or === -1 || e) {
		var t = document.createElement("div"), n = t.style;
		n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), Or = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
	}
	return Or;
}
var Ar = null;
function jr(e) {
	if (e === void 0 && (e = !1), Ar === null || e) {
		var t = document.createElement("div"), n = t.style;
		n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
		var r = document.createElement("div"), i = r.style;
		return i.width = "100px", i.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? Ar = "positive-descending" : (t.scrollLeft = 1, Ar = t.scrollLeft === 0 ? "negative" : "positive-ascending"), document.body.removeChild(t), Ar;
	}
	return Ar;
}
var Mr = 150, Nr = function(e, t) {
	return e;
};
function Pr(e) {
	var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, i = e.getItemSize, a = e.getOffsetForIndexAndAlignment, o = e.getStartIndexForOffset, s = e.getStopIndexForStartIndex, c = e.initInstanceProps, l = e.shouldResetStyleCacheOnItemSizeChange, u = e.validateProps;
	return t = /*#__PURE__*/ function(e) {
		ft(t, e);
		function t(t) {
			var r = e.call(this, t) || this;
			return r._instanceProps = c(r.props, y(r)), r._outerRef = void 0, r._resetIsScrollingTimeoutId = null, r.state = {
				instance: y(r),
				isScrolling: !1,
				scrollDirection: "forward",
				scrollOffset: typeof r.props.initialScrollOffset == "number" ? r.props.initialScrollOffset : 0,
				scrollUpdateWasRequested: !1
			}, r._callOnItemsRendered = void 0, r._callOnItemsRendered = wr(function(e, t, n, i) {
				return r.props.onItemsRendered({
					overscanStartIndex: e,
					overscanStopIndex: t,
					visibleStartIndex: n,
					visibleStopIndex: i
				});
			}), r._callOnScroll = void 0, r._callOnScroll = wr(function(e, t, n) {
				return r.props.onScroll({
					scrollDirection: e,
					scrollOffset: t,
					scrollUpdateWasRequested: n
				});
			}), r._getItemStyle = void 0, r._getItemStyle = function(e) {
				var t = r.props, a = t.direction, o = t.itemSize, s = t.layout, c = r._getItemStyleCache(l && o, l && s, l && a), u;
				if (c.hasOwnProperty(e)) u = c[e];
				else {
					var d = n(r.props, e, r._instanceProps), f = i(r.props, e, r._instanceProps), p = a === "horizontal" || s === "horizontal", m = a === "rtl", h = p ? d : 0;
					c[e] = u = {
						position: "absolute",
						left: m ? void 0 : h,
						right: m ? h : void 0,
						top: p ? 0 : d,
						height: p ? "100%" : f,
						width: p ? f : "100%"
					};
				}
				return u;
			}, r._getItemStyleCache = void 0, r._getItemStyleCache = wr(function(e, t, n) {
				return {};
			}), r._onScrollHorizontal = function(e) {
				var t = e.currentTarget, n = t.clientWidth, i = t.scrollLeft, a = t.scrollWidth;
				r.setState(function(e) {
					if (e.scrollOffset === i) return null;
					var t = r.props.direction, o = i;
					if (t === "rtl") switch (jr()) {
						case "negative":
							o = -i;
							break;
						case "positive-descending":
							o = a - n - i;
							break;
					}
					return o = Math.max(0, Math.min(o, a - n)), {
						isScrolling: !0,
						scrollDirection: e.scrollOffset < o ? "forward" : "backward",
						scrollOffset: o,
						scrollUpdateWasRequested: !1
					};
				}, r._resetIsScrollingDebounced);
			}, r._onScrollVertical = function(e) {
				var t = e.currentTarget, n = t.clientHeight, i = t.scrollHeight, a = t.scrollTop;
				r.setState(function(e) {
					if (e.scrollOffset === a) return null;
					var t = Math.max(0, Math.min(a, i - n));
					return {
						isScrolling: !0,
						scrollDirection: e.scrollOffset < t ? "forward" : "backward",
						scrollOffset: t,
						scrollUpdateWasRequested: !1
					};
				}, r._resetIsScrollingDebounced);
			}, r._outerRefSetter = function(e) {
				var t = r.props.outerRef;
				r._outerRef = e, typeof t == "function" ? t(e) : typeof t == "object" && t && t.hasOwnProperty("current") && (t.current = e);
			}, r._resetIsScrollingDebounced = function() {
				r._resetIsScrollingTimeoutId !== null && Er(r._resetIsScrollingTimeoutId), r._resetIsScrollingTimeoutId = Dr(r._resetIsScrolling, Mr);
			}, r._resetIsScrolling = function() {
				r._resetIsScrollingTimeoutId = null, r.setState({ isScrolling: !1 }, function() {
					r._getItemStyleCache(-1, null);
				});
			}, r;
		}
		t.getDerivedStateFromProps = function(e, t) {
			return Fr(e, t), u(e), null;
		};
		var d = t.prototype;
		return d.scrollTo = function(e) {
			e = Math.max(0, e), this.setState(function(t) {
				return t.scrollOffset === e ? null : {
					scrollDirection: t.scrollOffset < e ? "forward" : "backward",
					scrollOffset: e,
					scrollUpdateWasRequested: !0
				};
			}, this._resetIsScrollingDebounced);
		}, d.scrollToItem = function(e, t) {
			t === void 0 && (t = "auto");
			var n = this.props, r = n.itemCount, i = n.layout, o = this.state.scrollOffset;
			e = Math.max(0, Math.min(e, r - 1));
			var s = 0;
			if (this._outerRef) {
				var c = this._outerRef;
				s = i === "vertical" ? c.scrollWidth > c.clientWidth ? kr() : 0 : c.scrollHeight > c.clientHeight ? kr() : 0;
			}
			this.scrollTo(a(this.props, e, t, o, this._instanceProps, s));
		}, d.componentDidMount = function() {
			var e = this.props, t = e.direction, n = e.initialScrollOffset, r = e.layout;
			if (typeof n == "number" && this._outerRef != null) {
				var i = this._outerRef;
				t === "horizontal" || r === "horizontal" ? i.scrollLeft = n : i.scrollTop = n;
			}
			this._callPropsCallbacks();
		}, d.componentDidUpdate = function() {
			var e = this.props, t = e.direction, n = e.layout, r = this.state, i = r.scrollOffset;
			if (r.scrollUpdateWasRequested && this._outerRef != null) {
				var a = this._outerRef;
				if (t === "horizontal" || n === "horizontal") if (t === "rtl") switch (jr()) {
					case "negative":
						a.scrollLeft = -i;
						break;
					case "positive-ascending":
						a.scrollLeft = i;
						break;
					default:
						var o = a.clientWidth;
						a.scrollLeft = a.scrollWidth - o - i;
						break;
				}
				else a.scrollLeft = i;
				else a.scrollTop = i;
			}
			this._callPropsCallbacks();
		}, d.componentWillUnmount = function() {
			this._resetIsScrollingTimeoutId !== null && Er(this._resetIsScrollingTimeoutId);
		}, d.render = function() {
			var e = this.props, t = e.children, n = e.className, i = e.direction, a = e.height, o = e.innerRef, s = e.innerElementType, c = e.innerTagName, l = e.itemCount, u = e.itemData, d = e.itemKey, f = d === void 0 ? Nr : d, p = e.layout, m = e.outerElementType, h = e.outerTagName, g = e.style, _ = e.useIsScrolling, v = e.width, y = this.state.isScrolling, b = i === "horizontal" || p === "horizontal", x = b ? this._onScrollHorizontal : this._onScrollVertical, S = this._getRangeToRender(), C = S[0], w = S[1], T = [];
			if (l > 0) for (var E = C; E <= w; E++) T.push((0, X.createElement)(t, {
				data: u,
				key: f(E, u),
				index: E,
				isScrolling: _ ? y : void 0,
				style: this._getItemStyle(E)
			}));
			var D = r(this.props, this._instanceProps);
			return (0, X.createElement)(m || h || "div", {
				className: n,
				onScroll: x,
				ref: this._outerRefSetter,
				style: K({
					position: "relative",
					height: a,
					width: v,
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					willChange: "transform",
					direction: i
				}, g)
			}, (0, X.createElement)(s || c || "div", {
				children: T,
				ref: o,
				style: {
					height: b ? "100%" : D,
					pointerEvents: y ? "none" : void 0,
					width: b ? D : "100%"
				}
			}));
		}, d._callPropsCallbacks = function() {
			if (typeof this.props.onItemsRendered == "function" && this.props.itemCount > 0) {
				var e = this._getRangeToRender(), t = e[0], n = e[1], r = e[2], i = e[3];
				this._callOnItemsRendered(t, n, r, i);
			}
			if (typeof this.props.onScroll == "function") {
				var a = this.state, o = a.scrollDirection, s = a.scrollOffset, c = a.scrollUpdateWasRequested;
				this._callOnScroll(o, s, c);
			}
		}, d._getRangeToRender = function() {
			var e = this.props, t = e.itemCount, n = e.overscanCount, r = this.state, i = r.isScrolling, a = r.scrollDirection, c = r.scrollOffset;
			if (t === 0) return [
				0,
				0,
				0,
				0
			];
			var l = o(this.props, c, this._instanceProps), u = s(this.props, l, c, this._instanceProps), d = !i || a === "backward" ? Math.max(1, n) : 1, f = !i || a === "forward" ? Math.max(1, n) : 1;
			return [
				Math.max(0, l - d),
				Math.max(0, Math.min(t - 1, u + f)),
				l,
				u
			];
		}, t;
	}(X.PureComponent), t.defaultProps = {
		direction: "ltr",
		itemData: void 0,
		layout: "vertical",
		overscanCount: 2,
		useIsScrolling: !1
	}, t;
}
var Fr = function(e, t) {
	e.children, e.direction, e.height, e.layout, e.innerTagName, e.outerTagName, e.width, t.instance;
}, Ir = 50, Lr = function(e, t, n) {
	var r = e.itemSize, i = n.itemMetadataMap, a = n.lastMeasuredIndex;
	if (t > a) {
		var o = 0;
		if (a >= 0) {
			var s = i[a];
			o = s.offset + s.size;
		}
		for (var c = a + 1; c <= t; c++) {
			var l = r(c);
			i[c] = {
				offset: o,
				size: l
			}, o += l;
		}
		n.lastMeasuredIndex = t;
	}
	return i[t];
}, Rr = function(e, t, n) {
	var r = t.itemMetadataMap, i = t.lastMeasuredIndex;
	return (i > 0 ? r[i].offset : 0) >= n ? zr(e, t, i, 0, n) : Br(e, t, Math.max(0, i), n);
}, zr = function(e, t, n, r, i) {
	for (; r <= n;) {
		var a = r + Math.floor((n - r) / 2), o = Lr(e, a, t).offset;
		if (o === i) return a;
		o < i ? r = a + 1 : o > i && (n = a - 1);
	}
	return r > 0 ? r - 1 : 0;
}, Br = function(e, t, n, r) {
	for (var i = e.itemCount, a = 1; n < i && Lr(e, n, t).offset < r;) n += a, a *= 2;
	return zr(e, t, Math.min(n, i - 1), Math.floor(n / 2), r);
}, Vr = function(e, t) {
	var n = e.itemCount, r = t.itemMetadataMap, i = t.estimatedItemSize, a = t.lastMeasuredIndex, o = 0;
	if (a >= n && (a = n - 1), a >= 0) {
		var s = r[a];
		o = s.offset + s.size;
	}
	var c = (n - a - 1) * i;
	return o + c;
}, Hr = /*#__PURE__*/ Pr({
	getItemOffset: function(e, t, n) {
		return Lr(e, t, n).offset;
	},
	getItemSize: function(e, t, n) {
		return n.itemMetadataMap[t].size;
	},
	getEstimatedTotalSize: Vr,
	getOffsetForIndexAndAlignment: function(e, t, n, r, i, a) {
		var o = e.direction, s = e.height, c = e.layout, l = e.width, u = o === "horizontal" || c === "horizontal" ? l : s, d = Lr(e, t, i), f = Vr(e, i), p = Math.max(0, Math.min(f - u, d.offset)), m = Math.max(0, d.offset - u + d.size + a);
		switch (n === "smart" && (n = r >= m - u && r <= p + u ? "auto" : "center"), n) {
			case "start": return p;
			case "end": return m;
			case "center": return Math.round(m + (p - m) / 2);
			default: return r >= m && r <= p ? r : r < m ? m : p;
		}
	},
	getStartIndexForOffset: function(e, t, n) {
		return Rr(e, n, t);
	},
	getStopIndexForStartIndex: function(e, t, n, r) {
		for (var i = e.direction, a = e.height, o = e.itemCount, s = e.layout, c = e.width, l = i === "horizontal" || s === "horizontal" ? c : a, u = Lr(e, t, r), d = n + l, f = u.offset + u.size, p = t; p < o - 1 && f < d;) p++, f += Lr(e, p, r).size;
		return p;
	},
	initInstanceProps: function(e, t) {
		var n = {
			itemMetadataMap: {},
			estimatedItemSize: e.estimatedItemSize || Ir,
			lastMeasuredIndex: -1
		};
		return t.resetAfterIndex = function(e, r) {
			r === void 0 && (r = !0), n.lastMeasuredIndex = Math.min(n.lastMeasuredIndex, e - 1), t._getItemStyleCache(-1), r && t.forceUpdate();
		}, n;
	},
	shouldResetStyleCacheOnItemSizeChange: !1,
	validateProps: function(e) {
		e.itemSize;
	}
});
//#endregion
//#region node_modules/mirador/dist/es/src/components/ThumbnailCanvasGrouping.js
In();
var Ur = /* @__PURE__ */ n(yn());
function Wr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Gr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wr(Object(n), !0).forEach(function(t) {
			Kr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Kr(e, t, n) {
	return (t = Xr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qr(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Jr(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Xr(r.key), r);
	}
}
function Yr(e, t, n) {
	return t && Jr(e.prototype, t), n && Jr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xr(e) {
	var t = Zr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Zr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Qr(e, t, n) {
	return t = ni(t), $r(e, ti() ? Reflect.construct(t, n || [], ni(e).constructor) : t.apply(e, n));
}
function $r(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ei(e);
}
function ei(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ti() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ti = function() {
		return !!e;
	})();
}
function ni(e) {
	return ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ni(e);
}
function ri(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ii(e, t);
}
function ii(e, t) {
	return ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ii(e, t);
}
var ai = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return qr(this, t), n = Qr(this, t, [e]), n.setCanvas = n.setCanvas.bind(n), n;
	}
	return ri(t, e), Yr(t, [
		{
			key: "setCanvas",
			value: function(e) {
				var t = this.props.setCanvas;
				t(e.currentTarget.dataset.canvasId);
			}
		},
		{
			key: "currentCanvasClass",
			value: function(e) {
				var t = this.props.index;
				return e.includes(t) ? "current-canvas-grouping" : "";
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.index, n = e.style, r = e.data, i = e.classes, a = e.currentCanvasId, o = r.canvasGroupings, s = r.position, c = r.height, l = o[t], u = 8;
				return /*#__PURE__*/ X.createElement("div", {
					style: Gr(Gr({}, n), {}, {
						boxSizing: "content-box",
						height: Number.isInteger(n.height) ? n.height - u : null,
						left: Number.isInteger(n.left) ? n.left + u : null,
						top: n.top + u,
						width: Number.isInteger(n.width) ? n.width - u : null
					}),
					className: rr("thumbnail-nav-container"),
					role: "gridcell",
					"aria-colindex": t + 1
				}, /*#__PURE__*/ X.createElement("div", {
					role: "button",
					"data-canvas-id": l[0].id,
					"data-canvas-index": l[0].index,
					onKeyUp: this.setCanvas,
					onClick: this.setCanvas,
					tabIndex: -1,
					style: {
						height: s === "far-right" ? "auto" : `${c - u}px`,
						width: s === "far-bottom" ? "auto" : `${n.width}px`
					},
					className: (0, Ur.default)(rr([
						"thumbnail-nav-canvas",
						`thumbnail-nav-canvas-${t}`,
						this.currentCanvasClass(l.map(function(e) {
							return e.index;
						}))
					]), i.canvas, Kr({}, i.currentCanvas, l.map(function(e) {
						return e.id;
					}).includes(a)))
				}, l.map(function(e, t) {
					return /*#__PURE__*/ X.createElement(xn, {
						key: e.id,
						resource: e,
						labelled: !0,
						maxHeight: s === "far-right" ? n.height - 1.5 * u : c - 1.5 * u,
						variant: "inside"
					});
				})));
			}
		}
	]);
}(X.PureComponent);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/ThumbnailCanvasGrouping.js
q();
var oi = V(Ge(), Y(function(e) {
	return {
		canvas: {
			"&$currentCanvas": {
				outline: `2px solid ${e.palette.primary.main}`,
				outlineOffset: "3px"
			},
			"&:hover": {
				outline: `9px solid ${e.palette.action.hover}`,
				outlineOffset: "-2px"
			},
			boxSizing: "border-box",
			color: e.palette.common.white,
			cursor: "pointer",
			display: "inline-block",
			outline: 0,
			whiteSpace: "nowrap"
		},
		currentCanvas: {}
	};
}), Et(function(e, t) {
	var n = t.data;
	return { currentCanvasId: (ne(e, { windowId: n.windowId }) || {}).id };
}, function(e, t) {
	var n = t.data;
	return { setCanvas: function() {
		var t = [...arguments];
		return e(tn.apply(_n, [n.windowId].concat(t)));
	} };
}), R("ThumbnailCanvasGrouping"))(ai);
//#endregion
//#region node_modules/mirador/dist/es/src/components/ThumbnailNavigation.js
function si(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ci(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ui(r.key), r);
	}
}
function li(e, t, n) {
	return t && ci(e.prototype, t), n && ci(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ui(e) {
	var t = di(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function di(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function fi(e, t, n) {
	return t = gi(t), pi(e, hi() ? Reflect.construct(t, n || [], gi(e).constructor) : t.apply(e, n));
}
function pi(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return mi(e);
}
function mi(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function hi() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (hi = function() {
		return !!e;
	})();
}
function gi(e) {
	return gi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, gi(e);
}
function _i(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vi(e, t);
}
function vi(e, t) {
	return vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, vi(e, t);
}
var yi = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return si(this, t), n = fi(this, t, [e]), n.scrollbarSize = 15, n.spacing = 8, n.calculateScaledSize = n.calculateScaledSize.bind(n), n.itemCount = n.itemCount.bind(n), n.handleKeyUp = n.handleKeyUp.bind(n), n.nextCanvas = n.nextCanvas.bind(n), n.previousCanvas = n.previousCanvas.bind(n), n.gridRef = /*#__PURE__*/ X.createRef(), n;
	}
	return _i(t, e), li(t, [
		{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this.props, n = t.canvasIndex, r = t.position, i = t.view;
				if (e.view !== i && r !== "off" && this.gridRef.current.resetAfterIndex(0), e.canvasIndex !== n) {
					var a = n;
					i === "book" && (a = Math.ceil(a / 2)), this.gridRef.current.scrollToItem(a, "center");
				}
			}
		},
		{
			key: "handleKeyUp",
			value: function(e) {
				var t = this.props.position, n = "ArrowRight", r = "ArrowLeft";
				switch (t === "far-right" && (n = "ArrowDown", r = "ArrowUp"), e.key) {
					case n:
						this.nextCanvas();
						break;
					case r:
						this.previousCanvas();
						break;
					default: break;
				}
			}
		},
		{
			key: "calculateScaledSize",
			value: function(e) {
				var t = this.props, n = t.thumbnailNavigation, r = t.canvasGroupings, i = t.position, a = r[e] || [], o = new Ct(a).worldBounds();
				switch (i) {
					case "far-right":
						var s = Math.floor(this.calculatingWidth(a.length) * o[3] / o[2]);
						return Number.isInteger(s) ? s + this.spacing : n.width + this.spacing;
					default: return o[3] === 0 ? n.width + this.spacing : Math.ceil((n.height - this.scrollbarSize - this.spacing - 4) * o[2] / o[3]);
				}
			}
		},
		{
			key: "calculatingWidth",
			value: function(e) {
				var t = this.props.thumbnailNavigation;
				return e === 1 ? t.width : t.width * 2;
			}
		},
		{
			key: "rightWidth",
			value: function() {
				var e = this.props, t = e.view, n = e.thumbnailNavigation;
				switch (t) {
					case "book": return n.width * 2;
					default: return n.width;
				}
			}
		},
		{
			key: "style",
			value: function() {
				var e = this.props, t = e.position, n = e.thumbnailNavigation;
				switch (t) {
					case "far-right": return {
						height: "100%",
						minHeight: 0,
						width: `${this.rightWidth() + this.scrollbarSize + this.spacing}px`
					};
					default: return {
						height: `${n.height}px`,
						width: "100%"
					};
				}
			}
		},
		{
			key: "areaHeight",
			value: function(e) {
				var t = this.props, n = t.position, r = t.thumbnailNavigation;
				switch (n) {
					case "far-right": return e;
					default: return r.height;
				}
			}
		},
		{
			key: "itemCount",
			value: function() {
				return this.props.canvasGroupings.length;
			}
		},
		{
			key: "nextCanvas",
			value: function() {
				var e = this.props, t = e.hasNextCanvas, n = e.setNextCanvas;
				t && n();
			}
		},
		{
			key: "previousCanvas",
			value: function() {
				var e = this.props, t = e.hasPreviousCanvas, n = e.setPreviousCanvas;
				t && n();
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, n = t.t, r = t.canvasGroupings, i = t.classes, a = t.position, o = t.thumbnailNavigation, s = t.viewingDirection, c = t.windowId;
				if (a === "off") return /*#__PURE__*/ X.createElement(X.Fragment, null);
				var l = s === "right-to-left" ? "rtl" : "ltr", u = {
					canvasGroupings: r,
					height: o.height - this.spacing - this.scrollbarSize,
					position: a,
					windowId: c
				};
				return /*#__PURE__*/ X.createElement(vn, {
					className: (0, Ur.default)(rr("thumb-navigation"), i.thumbNavigation),
					"aria-label": n("thumbnailNavigation"),
					square: !0,
					elevation: 0,
					style: this.style(),
					tabIndex: 0,
					onKeyUp: this.handleKeyUp,
					role: "grid"
				}, /*#__PURE__*/ X.createElement("div", {
					role: "row",
					style: {
						height: "100%",
						width: "100%"
					}
				}, /*#__PURE__*/ X.createElement(br, {
					defaultHeight: 100,
					defaultWidth: 400
				}, function(t) {
					var n = t.height, r = t.width;
					return /*#__PURE__*/ X.createElement(Hr, {
						direction: l,
						height: e.areaHeight(n),
						itemCount: e.itemCount(),
						itemSize: e.calculateScaledSize,
						width: r,
						layout: a === "far-bottom" ? "horizontal" : "vertical",
						itemData: u,
						ref: e.gridRef
					}, oi);
				})));
			}
		}
	]);
}(X.Component);
yi.defaultProps = {
	hasNextCanvas: !1,
	hasPreviousCanvas: !1,
	setNextCanvas: function() {},
	setPreviousCanvas: function() {},
	view: void 0,
	viewingDirection: ""
}, s(), q();
var bi = V(Y(function(e) {
	return { thumbNavigation: { "&:focus": {
		boxShadow: 0,
		outline: 0
	} } };
}), Ge(), Et(function(e, t) {
	var n = t.windowId;
	return {
		canvasGroupings: we(e, { windowId: n }),
		canvasIndex: vt(e, { windowId: n }),
		hasNextCanvas: !!bt(e, { windowId: n }),
		hasPreviousCanvas: !!F(e, { windowId: n }),
		position: Le(e, { companionWindowId: Ye(e, { windowId: n }).thumbnailNavigationId }).position,
		thumbnailNavigation: h(e).thumbnailNavigation,
		view: qe(e, { windowId: n }),
		viewingDirection: jt(e, { windowId: n })
	};
}, function(e, t) {
	var n = t.windowId;
	return {
		setNextCanvas: function() {
			return e(nn(n));
		},
		setPreviousCanvas: function() {
			return e(rn(n));
		}
	};
}), R("ThumbnailNavigation"))(yi), xi = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }), "VisibilitySharp");
})), Si = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM3.42 2.45L2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l3.43 3.43 1.41-1.41L3.42 2.45zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z" }), "VisibilityOffSharp");
}));
An(), jn(), Cn(), En(), Fn(), Tn(), er(), tr(), Rn(), Un(), Bn(), Zn(), Jn();
var Ci = /* @__PURE__ */ n(xi()), wi = /* @__PURE__ */ n(Si());
function Ti(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ei(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Oi(r.key), r);
	}
}
function Di(e, t, n) {
	return t && Ei(e.prototype, t), n && Ei(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Oi(e) {
	var t = ki(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ki(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ai(e, t, n) {
	return t = Pi(t), ji(e, Ni() ? Reflect.construct(t, n || [], Pi(e).constructor) : t.apply(e, n));
}
function ji(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Mi(e);
}
function Mi(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ni() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ni = function() {
		return !!e;
	})();
}
function Pi(e) {
	return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Pi(e);
}
function Fi(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ii(e, t);
}
function Ii(e, t) {
	return Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Ii(e, t);
}
var Li = /*#__PURE__*/ function(e) {
	function t() {
		return Ti(this, t), Ai(this, t, arguments);
	}
	return Fi(t, e), Di(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.displayAll, n = e.displayAllDisabled, r = e.t, i = e.toggleAnnotationDisplay;
			return /*#__PURE__*/ X.createElement(Xt, {
				"aria-label": r(t ? "displayNoAnnotations" : "highlightAllAnnotations"),
				onClick: i,
				disabled: n,
				size: "small"
			}, t ? /*#__PURE__*/ X.createElement(Ci.default, null) : /*#__PURE__*/ X.createElement(wi.default, null));
		}
	}]);
}(X.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/AnnotationSettings.js
s();
var Ri = V(Ge(), Et(function(e, t) {
	var n = t.windowId;
	return {
		displayAll: Ye(e, { windowId: n }).highlightAllAnnotations,
		displayAllDisabled: w(e, { windowId: n }).length < 2
	};
}, function(e, t) {
	var n = t.windowId;
	return { toggleAnnotationDisplay: function() {
		e(en(n));
	} };
}), R("AnnotationSettings"))(Li), zi = X.createContext({});
//#endregion
//#region node_modules/@material-ui/core/esm/List/List.js
J();
var Bi = {
	root: {
		listStyle: "none",
		margin: 0,
		padding: 0,
		position: "relative"
	},
	padding: {
		paddingTop: 8,
		paddingBottom: 8
	},
	dense: {},
	subheader: { paddingTop: 0 }
}, Vi = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.component, o = a === void 0 ? "ul" : a, s = e.dense, c = s === void 0 ? !1 : s, l = e.disablePadding, u = l === void 0 ? !1 : l, d = e.subheader, f = _(e, [
		"children",
		"classes",
		"className",
		"component",
		"dense",
		"disablePadding",
		"subheader"
	]), p = X.useMemo(function() {
		return { dense: c };
	}, [c]);
	return /*#__PURE__*/ X.createElement(zi.Provider, { value: p }, /*#__PURE__*/ X.createElement(o, K({
		className: G(r.root, i, c && r.dense, !u && r.padding, d && r.subheader),
		ref: t
	}, f), d, n));
}), Hi = Y(Bi, { name: "MuiList" })(Vi);
//#endregion
//#region node_modules/@material-ui/core/esm/utils/getScrollbarSize.js
function Ui() {
	var e = document.createElement("div");
	e.style.width = "99px", e.style.height = "99px", e.style.position = "absolute", e.style.top = "-9999px", e.style.overflow = "scroll", document.body.appendChild(e);
	var t = e.offsetWidth - e.clientWidth;
	return document.body.removeChild(e), t;
}
J(), Nt();
function Wi(e, t, n) {
	return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Gi(e, t, n) {
	return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Ki(e, t) {
	if (t === void 0) return !0;
	var n = e.innerText;
	return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function qi(e, t, n, r, i, a) {
	for (var o = !1, s = i(e, t, t ? n : !1); s;) {
		if (s === e.firstChild) {
			if (o) return;
			o = !0;
		}
		var c = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
		if (!s.hasAttribute("tabindex") || !Ki(s, a) || c) s = i(e, s, n);
		else {
			s.focus();
			return;
		}
	}
}
var Ji = typeof window > "u" ? X.useEffect : X.useLayoutEffect, Yi = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.actions, r = e.autoFocus, i = r === void 0 ? !1 : r, a = e.autoFocusItem, o = a === void 0 ? !1 : a, s = e.children, c = e.className, l = e.disabledItemsFocusable, u = l === void 0 ? !1 : l, d = e.disableListWrap, f = d === void 0 ? !1 : d, p = e.onKeyDown, m = e.variant, h = m === void 0 ? "selectedMenu" : m, g = _(e, [
		"actions",
		"autoFocus",
		"autoFocusItem",
		"children",
		"className",
		"disabledItemsFocusable",
		"disableListWrap",
		"onKeyDown",
		"variant"
	]), v = X.useRef(null), y = X.useRef({
		keys: [],
		repeating: !0,
		previousKeyMatched: !0,
		lastTime: null
	});
	Ji(function() {
		i && v.current.focus();
	}, [i]), X.useImperativeHandle(n, function() {
		return { adjustStyleForScrollbar: function(e, t) {
			var n = !v.current.style.width;
			if (e.clientHeight < v.current.clientHeight && n) {
				var r = `${Ui(!0)}px`;
				v.current.style[t.direction === "rtl" ? "paddingLeft" : "paddingRight"] = r, v.current.style.width = `calc(100% + ${r})`;
			}
			return v.current;
		} };
	}, []);
	var b = function(e) {
		var t = v.current, n = e.key, r = Dn(t).activeElement;
		if (n === "ArrowDown") e.preventDefault(), qi(t, r, f, u, Wi);
		else if (n === "ArrowUp") e.preventDefault(), qi(t, r, f, u, Gi);
		else if (n === "Home") e.preventDefault(), qi(t, null, f, u, Wi);
		else if (n === "End") e.preventDefault(), qi(t, null, f, u, Gi);
		else if (n.length === 1) {
			var i = y.current, a = n.toLowerCase(), o = performance.now();
			i.keys.length > 0 && (o - i.lastTime > 500 ? (i.keys = [], i.repeating = !0, i.previousKeyMatched = !0) : i.repeating && a !== i.keys[0] && (i.repeating = !1)), i.lastTime = o, i.keys.push(a);
			var s = r && !i.repeating && Ki(r, i);
			i.previousKeyMatched && (s || qi(t, r, !1, u, Wi, i)) ? e.preventDefault() : i.previousKeyMatched = !1;
		}
		p && p(e);
	}, x = Hn(X.useCallback(function(e) {
		v.current = lr.findDOMNode(e);
	}, []), t), S = -1;
	X.Children.forEach(s, function(e, t) {
		/*#__PURE__*/ X.isValidElement(e) && (e.props.disabled || (h === "selectedMenu" && e.props.selected || S === -1) && (S = t));
	});
	var C = X.Children.map(s, function(e, t) {
		if (t === S) {
			var n = {};
			return o && (n.autoFocus = !0), e.props.tabIndex === void 0 && h === "selectedMenu" && (n.tabIndex = 0), /*#__PURE__*/ X.cloneElement(e, n);
		}
		return e;
	});
	return /*#__PURE__*/ X.createElement(Hi, K({
		role: "menu",
		ref: x,
		className: c,
		onKeyDown: b,
		tabIndex: i ? 0 : -1
	}, g), C);
});
J(), Nt(), tt(), q(), Un();
var Xi = function(e) {
	return {
		root: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			position: "relative",
			textDecoration: "none",
			width: "100%",
			boxSizing: "border-box",
			textAlign: "left",
			paddingTop: 8,
			paddingBottom: 8,
			"&$focusVisible": { backgroundColor: e.palette.action.selected },
			"&$selected, &$selected:hover": { backgroundColor: e.palette.action.selected },
			"&$disabled": { opacity: .5 }
		},
		container: { position: "relative" },
		focusVisible: {},
		dense: {
			paddingTop: 4,
			paddingBottom: 4
		},
		alignItemsFlexStart: { alignItems: "flex-start" },
		disabled: {},
		divider: {
			borderBottom: `1px solid ${e.palette.divider}`,
			backgroundClip: "padding-box"
		},
		gutters: {
			paddingLeft: 16,
			paddingRight: 16
		},
		button: {
			transition: e.transitions.create("background-color", { duration: e.transitions.duration.shortest }),
			"&:hover": {
				textDecoration: "none",
				backgroundColor: e.palette.action.hover,
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		secondaryAction: { paddingRight: 48 },
		selected: {}
	};
}, Zi = typeof window > "u" ? X.useEffect : X.useLayoutEffect, Qi = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.alignItems, r = n === void 0 ? "center" : n, i = e.autoFocus, a = i === void 0 ? !1 : i, o = e.button, s = o === void 0 ? !1 : o, c = e.children, l = e.classes, u = e.className, d = e.component, f = e.ContainerComponent, p = f === void 0 ? "li" : f, m = e.ContainerProps;
	m = m === void 0 ? {} : m;
	var h = m.className, g = _(m, ["className"]), v = e.dense, y = v === void 0 ? !1 : v, b = e.disabled, x = b === void 0 ? !1 : b, S = e.disableGutters, C = S === void 0 ? !1 : S, w = e.divider, T = w === void 0 ? !1 : w, E = e.focusVisibleClassName, D = e.selected, ee = D === void 0 ? !1 : D, O = _(e, [
		"alignItems",
		"autoFocus",
		"button",
		"children",
		"classes",
		"className",
		"component",
		"ContainerComponent",
		"ContainerProps",
		"dense",
		"disabled",
		"disableGutters",
		"divider",
		"focusVisibleClassName",
		"selected"
	]), k = X.useContext(zi), A = {
		dense: y || k.dense || !1,
		alignItems: r
	}, j = X.useRef(null);
	Zi(function() {
		a && j.current && j.current.focus();
	}, [a]);
	var M = X.Children.toArray(c), te = M.length && Mn(M[M.length - 1], ["ListItemSecondaryAction"]), N = Hn(X.useCallback(function(e) {
		j.current = lr.findDOMNode(e);
	}, []), t), P = K({
		className: G(l.root, u, A.dense && l.dense, !C && l.gutters, T && l.divider, x && l.disabled, s && l.button, r !== "center" && l.alignItemsFlexStart, te && l.secondaryAction, ee && l.selected),
		disabled: x
	}, O), F = d || "li";
	return s && (P.component = d || "div", P.focusVisibleClassName = G(l.focusVisible, E), F = Xn), te ? (F = !P.component && !d ? "div" : F, p === "li" && (F === "li" ? F = "div" : P.component === "li" && (P.component = "div")), /*#__PURE__*/ X.createElement(zi.Provider, { value: A }, /*#__PURE__*/ X.createElement(p, K({
		className: G(l.container, h),
		ref: N
	}, g), /*#__PURE__*/ X.createElement(F, P, M), M.pop()))) : /*#__PURE__*/ X.createElement(zi.Provider, { value: A }, /*#__PURE__*/ X.createElement(F, K({ ref: N }, P), M));
}), $i = Y(Xi, { name: "MuiListItem" })(Qi);
Nt(), J(), tt(), q();
var ea = function(e) {
	return {
		root: K({}, e.typography.body1, oe({
			minHeight: 48,
			paddingTop: 6,
			paddingBottom: 6,
			boxSizing: "border-box",
			width: "auto",
			overflow: "hidden",
			whiteSpace: "nowrap"
		}, e.breakpoints.up("sm"), { minHeight: "auto" })),
		gutters: {},
		selected: {},
		dense: K({}, e.typography.body2, { minHeight: "auto" })
	};
}, ta = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.component, a = i === void 0 ? "li" : i, o = e.disableGutters, s = o === void 0 ? !1 : o, c = e.ListItemClasses, l = e.role, u = l === void 0 ? "menuitem" : l, d = e.selected, f = e.tabIndex, p = _(e, [
		"classes",
		"className",
		"component",
		"disableGutters",
		"ListItemClasses",
		"role",
		"selected",
		"tabIndex"
	]), m;
	return e.disabled || (m = f === void 0 ? -1 : f), /*#__PURE__*/ X.createElement($i, K({
		button: !0,
		role: u,
		tabIndex: m,
		component: a,
		selected: d,
		disableGutters: s,
		classes: K({ dense: n.dense }, c),
		className: G(n.root, r, d && n.selected, !s && n.gutters),
		ref: t
	}, p));
}), na = Y(ea, { name: "MuiMenuItem" })(ta);
J(), Nt(), tt(), q();
var ra = {
	root: {
		flex: "1 1 auto",
		minWidth: 0,
		marginTop: 4,
		marginBottom: 4
	},
	multiline: {
		marginTop: 6,
		marginBottom: 6
	},
	dense: {},
	inset: { paddingLeft: 56 },
	primary: {},
	secondary: {}
}, ia = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.disableTypography, o = a === void 0 ? !1 : a, s = e.inset, c = s === void 0 ? !1 : s, l = e.primary, u = e.primaryTypographyProps, d = e.secondary, f = e.secondaryTypographyProps, p = _(e, [
		"children",
		"classes",
		"className",
		"disableTypography",
		"inset",
		"primary",
		"primaryTypographyProps",
		"secondary",
		"secondaryTypographyProps"
	]), m = X.useContext(zi).dense, h = l ?? n;
	h != null && h.type !== Ln && !o && (h = /*#__PURE__*/ X.createElement(Ln, K({
		variant: m ? "body2" : "body1",
		className: r.primary,
		component: "span",
		display: "block"
	}, u), h));
	var g = d;
	return g != null && g.type !== Ln && !o && (g = /*#__PURE__*/ X.createElement(Ln, K({
		variant: "body2",
		className: r.secondary,
		color: "textSecondary",
		display: "block"
	}, f), g)), /*#__PURE__*/ X.createElement("div", K({
		className: G(r.root, i, m && r.dense, c && r.inset, h && g && r.multiline),
		ref: t
	}, p), h, g);
}), aa = Y(ra, { name: "MuiListItemText" })(ia), { entries: oa, setPrototypeOf: sa, isFrozen: ca, getPrototypeOf: la, getOwnPropertyDescriptor: ua } = Object, { freeze: da, seal: fa, create: pa } = Object, { apply: ma, construct: ha } = typeof Reflect < "u" && Reflect;
da ||= function(e) {
	return e;
}, fa ||= function(e) {
	return e;
}, ma ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, ha ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var ga = Aa(Array.prototype.forEach), _a = Aa(Array.prototype.lastIndexOf), va = Aa(Array.prototype.pop), ya = Aa(Array.prototype.push), ba = Aa(Array.prototype.splice), xa = Aa(String.prototype.toLowerCase), Sa = Aa(String.prototype.toString), Ca = Aa(String.prototype.match), wa = Aa(String.prototype.replace), Ta = Aa(String.prototype.indexOf), Ea = Aa(String.prototype.trim), Da = Aa(Object.prototype.hasOwnProperty), Oa = Aa(RegExp.prototype.test), ka = ja(TypeError);
function Aa(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return ma(e, t, n);
	};
}
function ja(e) {
	return function() {
		return ha(e, [...arguments]);
	};
}
function Ma(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xa;
	sa && sa(e, null);
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (ca(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Na(e) {
	for (let t = 0; t < e.length; t++) Da(e, t) || (e[t] = null);
	return e;
}
function Pa(e) {
	let t = pa(null);
	for (let [n, r] of oa(e)) Da(e, n) && (Array.isArray(r) ? t[n] = Na(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Pa(r) : t[n] = r);
	return t;
}
function Fa(e, t) {
	for (; e !== null;) {
		let n = ua(e, t);
		if (n) {
			if (n.get) return Aa(n.get);
			if (typeof n.value == "function") return Aa(n.value);
		}
		e = la(e);
	}
	function n() {
		return null;
	}
	return n;
}
var Ia = da(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), La = da(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Ra = da([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), za = da([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Ba = da(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Va = da([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Ha = da(["#text"]), Ua = da(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(".")), Wa = da(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Ga = da(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Ka = da([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), qa = fa(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ja = fa(/<%[\w\W]*|[\w\W]*%>/gm), Ya = fa(/\$\{[\w\W]*/gm), Xa = fa(/^data-[\-\w.\u00B7-\uFFFF]+$/), Za = fa(/^aria-[\-\w]+$/), Qa = fa(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), $a = fa(/^(?:\w+script|data):/i), eo = fa(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), to = fa(/^html$/i), no = fa(/^[a-z][.\w]*(-[.\w]+)+$/i), ro = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ARIA_ATTR: Za,
	ATTR_WHITESPACE: eo,
	CUSTOM_ELEMENT: no,
	DATA_ATTR: Xa,
	DOCTYPE_NAME: to,
	ERB_EXPR: Ja,
	IS_ALLOWED_URI: Qa,
	IS_SCRIPT_OR_DATA: $a,
	MUSTACHE_EXPR: qa,
	TMPLIT_EXPR: Ya
}), io = {
	element: 1,
	text: 3,
	progressingInstruction: 7,
	comment: 8,
	document: 9
}, ao = function() {
	return typeof window > "u" ? null : window;
}, oo = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, so = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
function co() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ao(), t = (e) => co(e);
	if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== io.document || !e.Element) return t.isSupported = !1, t;
	let { document: n } = e, r = n, i = r.currentScript, { DocumentFragment: a, HTMLTemplateElement: o, Node: s, Element: c, NodeFilter: l, NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: d, DOMParser: f, trustedTypes: p } = e, m = c.prototype, h = Fa(m, "cloneNode"), g = Fa(m, "remove"), _ = Fa(m, "nextSibling"), v = Fa(m, "childNodes"), y = Fa(m, "parentNode");
	if (typeof o == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let b, x = "", { implementation: S, createNodeIterator: C, createDocumentFragment: w, getElementsByTagName: T } = n, { importNode: E } = r, D = so();
	t.isSupported = typeof oa == "function" && typeof y == "function" && S && S.createHTMLDocument !== void 0;
	let { MUSTACHE_EXPR: ee, ERB_EXPR: O, TMPLIT_EXPR: k, DATA_ATTR: A, ARIA_ATTR: j, IS_SCRIPT_OR_DATA: M, ATTR_WHITESPACE: te, CUSTOM_ELEMENT: N } = ro, { IS_ALLOWED_URI: P } = ro, F = null, ne = Ma({}, [
		...Ia,
		...La,
		...Ra,
		...Ba,
		...Ha
	]), I = null, re = Ma({}, [
		...Ua,
		...Wa,
		...Ga,
		...Ka
	]), L = Object.seal(pa(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), R = null, ie = null, ae = Object.seal(pa(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), oe = !0, z = !0, se = !1, ce = !0, B = !1, V = !0, le = !1, ue = !1, de = !1, fe = !1, H = !1, pe = !1, me = !0, U = !1, he = !0, ge = !1, _e = {}, ve = null, ye = Ma({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]), be = null, xe = Ma({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Se = null, Ce = Ma({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), we = "http://www.w3.org/1998/Math/MathML", Te = "http://www.w3.org/2000/svg", Ee = "http://www.w3.org/1999/xhtml", De = Ee, Oe = !1, ke = null, Ae = Ma({}, [
		we,
		Te,
		Ee
	], Sa), je = Ma({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Me = Ma({}, ["annotation-xml"]), Ne = Ma({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Pe = null, Fe = ["application/xhtml+xml", "text/html"], Ie = null, Le = null, Re = n.createElement("form"), ze = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Be = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (!(Le && Le === e)) {
			if ((!e || typeof e != "object") && (e = {}), e = Pa(e), Pe = Fe.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, Ie = Pe === "application/xhtml+xml" ? Sa : xa, F = Da(e, "ALLOWED_TAGS") ? Ma({}, e.ALLOWED_TAGS, Ie) : ne, I = Da(e, "ALLOWED_ATTR") ? Ma({}, e.ALLOWED_ATTR, Ie) : re, ke = Da(e, "ALLOWED_NAMESPACES") ? Ma({}, e.ALLOWED_NAMESPACES, Sa) : Ae, Se = Da(e, "ADD_URI_SAFE_ATTR") ? Ma(Pa(Ce), e.ADD_URI_SAFE_ATTR, Ie) : Ce, be = Da(e, "ADD_DATA_URI_TAGS") ? Ma(Pa(xe), e.ADD_DATA_URI_TAGS, Ie) : xe, ve = Da(e, "FORBID_CONTENTS") ? Ma({}, e.FORBID_CONTENTS, Ie) : ye, R = Da(e, "FORBID_TAGS") ? Ma({}, e.FORBID_TAGS, Ie) : Pa({}), ie = Da(e, "FORBID_ATTR") ? Ma({}, e.FORBID_ATTR, Ie) : Pa({}), _e = Da(e, "USE_PROFILES") ? e.USE_PROFILES : !1, oe = e.ALLOW_ARIA_ATTR !== !1, z = e.ALLOW_DATA_ATTR !== !1, se = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ce = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = e.SAFE_FOR_TEMPLATES || !1, V = e.SAFE_FOR_XML !== !1, le = e.WHOLE_DOCUMENT || !1, fe = e.RETURN_DOM || !1, H = e.RETURN_DOM_FRAGMENT || !1, pe = e.RETURN_TRUSTED_TYPE || !1, de = e.FORCE_BODY || !1, me = e.SANITIZE_DOM !== !1, U = e.SANITIZE_NAMED_PROPS || !1, he = e.KEEP_CONTENT !== !1, ge = e.IN_PLACE || !1, P = e.ALLOWED_URI_REGEXP || Qa, De = e.NAMESPACE || Ee, je = e.MATHML_TEXT_INTEGRATION_POINTS || je, Me = e.HTML_INTEGRATION_POINTS || Me, L = e.CUSTOM_ELEMENT_HANDLING || pa(null), e.CUSTOM_ELEMENT_HANDLING && ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (z = !1), H && (fe = !0), _e && (F = Ma({}, Ha), I = pa(null), _e.html === !0 && (Ma(F, Ia), Ma(I, Ua)), _e.svg === !0 && (Ma(F, La), Ma(I, Wa), Ma(I, Ka)), _e.svgFilters === !0 && (Ma(F, Ra), Ma(I, Wa), Ma(I, Ka)), _e.mathMl === !0 && (Ma(F, Ba), Ma(I, Ga), Ma(I, Ka))), ae.tagCheck = null, ae.attributeCheck = null, e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? ae.tagCheck = e.ADD_TAGS : (F === ne && (F = Pa(F)), Ma(F, e.ADD_TAGS, Ie))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? ae.attributeCheck = e.ADD_ATTR : (I === re && (I = Pa(I)), Ma(I, e.ADD_ATTR, Ie))), e.ADD_URI_SAFE_ATTR && Ma(Se, e.ADD_URI_SAFE_ATTR, Ie), e.FORBID_CONTENTS && (ve === ye && (ve = Pa(ve)), Ma(ve, e.FORBID_CONTENTS, Ie)), e.ADD_FORBID_CONTENTS && (ve === ye && (ve = Pa(ve)), Ma(ve, e.ADD_FORBID_CONTENTS, Ie)), he && (F["#text"] = !0), le && Ma(F, [
				"html",
				"head",
				"body"
			]), F.table && (Ma(F, ["tbody"]), delete R.tbody), e.TRUSTED_TYPES_POLICY) {
				if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw ka("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw ka("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				b = e.TRUSTED_TYPES_POLICY, x = b.createHTML("");
			} else b === void 0 && (b = oo(p, i)), b !== null && typeof x == "string" && (x = b.createHTML(""));
			da && da(e), Le = e;
		}
	}, Ve = Ma({}, [
		...La,
		...Ra,
		...za
	]), He = Ma({}, [...Ba, ...Va]), Ue = function(e) {
		let t = y(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: De,
			tagName: "template"
		});
		let n = xa(e.tagName), r = xa(t.tagName);
		return ke[e.namespaceURI] ? e.namespaceURI === Te ? t.namespaceURI === Ee ? n === "svg" : t.namespaceURI === we ? n === "svg" && (r === "annotation-xml" || je[r]) : !!Ve[n] : e.namespaceURI === we ? t.namespaceURI === Ee ? n === "math" : t.namespaceURI === Te ? n === "math" && Me[r] : !!He[n] : e.namespaceURI === Ee ? t.namespaceURI === Te && !Me[r] || t.namespaceURI === we && !je[r] ? !1 : !He[n] && (Ne[n] || !Ve[n]) : !!(Pe === "application/xhtml+xml" && ke[e.namespaceURI]) : !1;
	}, We = function(e) {
		ya(t.removed, { element: e });
		try {
			y(e).removeChild(e);
		} catch {
			g(e);
		}
	}, Ge = function(e, n) {
		try {
			ya(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			ya(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (fe || H) try {
			We(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, Ke = function(e) {
		let t = null, r = null;
		if (de) e = "<remove></remove>" + e;
		else {
			let t = Ca(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Pe === "application/xhtml+xml" && De === Ee && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = b ? b.createHTML(e) : e;
		if (De === Ee) try {
			t = new f().parseFromString(i, Pe);
		} catch {}
		if (!t || !t.documentElement) {
			t = S.createDocument(De, "template", null);
			try {
				t.documentElement.innerHTML = Oe ? x : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), De === Ee ? T.call(t, le ? "html" : "body")[0] : le ? t.documentElement : a;
	}, qe = function(e) {
		return C.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, Je = function(e) {
		return e instanceof d && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof u) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
	}, W = function(e) {
		return typeof s == "function" && e instanceof s;
	};
	function Ye(e, n, r) {
		ga(e, (e) => {
			e.call(t, n, r, Le);
		});
	}
	let Xe = function(e) {
		let n = null;
		if (Ye(D.beforeSanitizeElements, e, null), Je(e)) return We(e), !0;
		let r = Ie(e.nodeName);
		if (Ye(D.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: F
		}), V && e.hasChildNodes() && !W(e.firstElementChild) && Oa(/<[/\w!]/g, e.innerHTML) && Oa(/<[/\w!]/g, e.textContent) || V && e.namespaceURI === Ee && r === "style" && W(e.firstElementChild) || e.nodeType === io.progressingInstruction || V && e.nodeType === io.comment && Oa(/<[/\w]/g, e.data)) return We(e), !0;
		if (R[r] || !(ae.tagCheck instanceof Function && ae.tagCheck(r)) && !F[r]) {
			if (!R[r] && Qe(r) && (L.tagNameCheck instanceof RegExp && Oa(L.tagNameCheck, r) || L.tagNameCheck instanceof Function && L.tagNameCheck(r))) return !1;
			if (he && !ve[r]) {
				let t = y(e) || e.parentNode, n = v(e) || e.childNodes;
				if (n && t) {
					let r = n.length;
					for (let i = r - 1; i >= 0; --i) {
						let r = h(n[i], !0);
						r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, _(e));
					}
				}
			}
			return We(e), !0;
		}
		return e instanceof c && !Ue(e) || (r === "noscript" || r === "noembed" || r === "noframes") && Oa(/<\/no(script|embed|frames)/i, e.innerHTML) ? (We(e), !0) : (B && e.nodeType === io.text && (n = e.textContent, ga([
			ee,
			O,
			k
		], (e) => {
			n = wa(n, e, " ");
		}), e.textContent !== n && (ya(t.removed, { element: e.cloneNode() }), e.textContent = n)), Ye(D.afterSanitizeElements, e, null), !1);
	}, Ze = function(e, t, r) {
		if (ie[t] || me && (t === "id" || t === "name") && (r in n || r in Re)) return !1;
		if (!(z && !ie[t] && Oa(A, t)) && !(oe && Oa(j, t)) && !(ae.attributeCheck instanceof Function && ae.attributeCheck(t, e))) {
			if (!I[t] || ie[t]) {
				if (!(Qe(e) && (L.tagNameCheck instanceof RegExp && Oa(L.tagNameCheck, e) || L.tagNameCheck instanceof Function && L.tagNameCheck(e)) && (L.attributeNameCheck instanceof RegExp && Oa(L.attributeNameCheck, t) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(t, e)) || t === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && Oa(L.tagNameCheck, r) || L.tagNameCheck instanceof Function && L.tagNameCheck(r)))) return !1;
			} else if (!Se[t] && !Oa(P, wa(r, te, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Ta(r, "data:") === 0 && be[e]) && !(se && !Oa(M, wa(r, te, ""))) && r) return !1;
		}
		return !0;
	}, Qe = function(e) {
		return e !== "annotation-xml" && Ca(e, N);
	}, $e = function(e) {
		Ye(D.beforeSanitizeAttributes, e, null);
		let { attributes: n } = e;
		if (!n || Je(e)) return;
		let r = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: I,
			forceKeepAttr: void 0
		}, i = n.length;
		for (; i--;) {
			let { name: a, namespaceURI: o, value: s } = n[i], c = Ie(a), l = s, u = a === "value" ? l : Ea(l);
			if (r.attrName = c, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, Ye(D.uponSanitizeAttribute, e, r), u = r.attrValue, U && (c === "id" || c === "name") && (Ge(a, e), u = "user-content-" + u), V && Oa(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, u)) {
				Ge(a, e);
				continue;
			}
			if (c === "attributename" && Ca(u, "href")) {
				Ge(a, e);
				continue;
			}
			if (r.forceKeepAttr) continue;
			if (!r.keepAttr) {
				Ge(a, e);
				continue;
			}
			if (!ce && Oa(/\/>/i, u)) {
				Ge(a, e);
				continue;
			}
			B && ga([
				ee,
				O,
				k
			], (e) => {
				u = wa(u, e, " ");
			});
			let d = Ie(e.nodeName);
			if (!Ze(d, c, u)) {
				Ge(a, e);
				continue;
			}
			if (b && typeof p == "object" && typeof p.getAttributeType == "function" && !o) switch (p.getAttributeType(d, c)) {
				case "TrustedHTML":
					u = b.createHTML(u);
					break;
				case "TrustedScriptURL":
					u = b.createScriptURL(u);
					break;
			}
			if (u !== l) try {
				o ? e.setAttributeNS(o, a, u) : e.setAttribute(a, u), Je(e) ? We(e) : va(t.removed);
			} catch {
				Ge(a, e);
			}
		}
		Ye(D.afterSanitizeAttributes, e, null);
	}, et = function(e) {
		let t = null, n = qe(e);
		for (Ye(D.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) Ye(D.uponSanitizeShadowNode, t, null), Xe(t), $e(t), t.content instanceof a && et(t.content);
		Ye(D.afterSanitizeShadowDOM, e, null);
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, o = null, c = null, l = null;
		if (Oe = !e, Oe && (e = "<!-->"), typeof e != "string" && !W(e)) if (typeof e.toString == "function") {
			if (e = e.toString(), typeof e != "string") throw ka("dirty is not a string, aborting");
		} else throw ka("toString is not a function");
		if (!t.isSupported) return e;
		if (ue || Be(n), t.removed = [], typeof e == "string" && (ge = !1), ge) {
			if (e.nodeName) {
				let t = Ie(e.nodeName);
				if (!F[t] || R[t]) throw ka("root node is forbidden and cannot be sanitized in-place");
			}
		} else if (e instanceof s) i = Ke("<!---->"), o = i.ownerDocument.importNode(e, !0), o.nodeType === io.element && o.nodeName === "BODY" || o.nodeName === "HTML" ? i = o : i.appendChild(o);
		else {
			if (!fe && !B && !le && e.indexOf("<") === -1) return b && pe ? b.createHTML(e) : e;
			if (i = Ke(e), !i) return fe ? null : pe ? x : "";
		}
		i && de && We(i.firstChild);
		let u = qe(ge ? e : i);
		for (; c = u.nextNode();) Xe(c), $e(c), c.content instanceof a && et(c.content);
		if (ge) return e;
		if (fe) {
			if (B) {
				i.normalize();
				let e = i.innerHTML;
				ga([
					ee,
					O,
					k
				], (t) => {
					e = wa(e, t, " ");
				}), i.innerHTML = e;
			}
			if (H) for (l = w.call(i.ownerDocument); i.firstChild;) l.appendChild(i.firstChild);
			else l = i;
			return (I.shadowroot || I.shadowrootmode) && (l = E.call(r, l, !0)), l;
		}
		let d = le ? i.outerHTML : i.innerHTML;
		return le && F["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && Oa(to, i.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + d), B && ga([
			ee,
			O,
			k
		], (e) => {
			d = wa(d, e, " ");
		}), b && pe ? b.createHTML(d) : d;
	}, t.setConfig = function() {
		Be(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), ue = !0;
	}, t.clearConfig = function() {
		Le = null, ue = !1;
	}, t.isValidAttribute = function(e, t, n) {
		return Le || Be({}), Ze(Ie(e), Ie(t), n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && ya(D[e], t);
	}, t.removeHook = function(e, t) {
		if (t !== void 0) {
			let n = _a(D[e], t);
			return n === -1 ? void 0 : ba(D[e], n, 1)[0];
		}
		return va(D[e]);
	}, t.removeHooks = function(e) {
		D[e] = [];
	}, t.removeAllHooks = function() {
		D = so();
	}, t;
}
var lo = co(), uo = {
	iiif: {
		ALLOWED_ATTR: [
			"href",
			"src",
			"alt"
		],
		ALLOWED_TAGS: [
			"a",
			"b",
			"br",
			"i",
			"img",
			"p",
			"span"
		]
	},
	liberal: {},
	mirador2: {
		ALLOWED_ATTR: [
			"href",
			"target",
			"src",
			"alt",
			"dir"
		],
		ALLOWED_TAGS: [
			"a",
			"b",
			"br",
			"i",
			"img",
			"p",
			"span",
			"strong",
			"em",
			"ul",
			"ol",
			"li"
		]
	},
	noHtml: { ALLOWED_TAGS: [] }
};
//#endregion
//#region node_modules/mirador/dist/es/src/components/SanitizedHtml.js
function fo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function po(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ho(r.key), r);
	}
}
function mo(e, t, n) {
	return t && po(e.prototype, t), n && po(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ho(e) {
	var t = go(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function go(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function _o(e, t, n) {
	return t = xo(t), vo(e, bo() ? Reflect.construct(t, n || [], xo(e).constructor) : t.apply(e, n));
}
function vo(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return yo(e);
}
function yo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function bo() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (bo = function() {
		return !!e;
	})();
}
function xo(e) {
	return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, xo(e);
}
function So(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Co(e, t);
}
function Co(e, t) {
	return Co = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Co(e, t);
}
var wo = /*#__PURE__*/ function(e) {
	function t() {
		return fo(this, t), _o(this, t, arguments);
	}
	return So(t, e), mo(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.classes, n = e.htmlString, r = e.ruleSet;
			return lo.addHook("afterSanitizeAttributes", function(e) {
				"target" in e && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer"));
			}), /*#__PURE__*/ X.createElement("span", {
				className: [t.root, rr("third-party-html")].join(" "),
				dangerouslySetInnerHTML: { __html: lo.sanitize(n, uo[r]) }
			});
		}
	}]);
}(X.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/SanitizedHtml.js
wo.defaultProps = { classes: {} }, q();
var To = Y(function(e) {
	return { root: { "& a": {
		color: e.palette.primary.main,
		textDecoration: "underline"
	} } };
})(wo);
//#endregion
//#region node_modules/mirador/dist/es/src/components/ScrollTo.js
function Eo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Do(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ko(r.key), r);
	}
}
function Oo(e, t, n) {
	return t && Do(e.prototype, t), n && Do(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ko(e) {
	var t = Ao(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ao(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function jo(e, t, n) {
	return t = Fo(t), Mo(e, Po() ? Reflect.construct(t, n || [], Fo(e).constructor) : t.apply(e, n));
}
function Mo(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return No(e);
}
function No(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Po() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Po = function() {
		return !!e;
	})();
}
function Fo(e) {
	return Fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Fo(e);
}
function Io(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lo(e, t);
}
function Lo(e, t) {
	return Lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Lo(e, t);
}
var Ro = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Eo(this, t), n = jo(this, t, [e]), n.scrollToRef = /*#__PURE__*/ X.createRef(), n;
	}
	return Io(t, e), Oo(t, [
		{
			key: "componentDidMount",
			value: function() {
				this.props.scrollTo && this.scrollToElement();
			}
		},
		{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this.props.scrollTo;
				t && e.scrollTo !== t && this.scrollToElement();
			}
		},
		{
			key: "containerBoundingRect",
			value: function() {
				var e = this.props.containerRef;
				return !e || !e.current || !e.current.domEl ? {} : e.current.domEl.getBoundingClientRect();
			}
		},
		{
			key: "scrollToBoundingRect",
			value: function() {
				return this.elementToScrollTo() ? this.elementToScrollTo().getBoundingClientRect() : {};
			}
		},
		{
			key: "elementToScrollTo",
			value: function() {
				return !this.scrollToRef || !this.scrollToRef.current ? null : this.scrollToRef.current;
			}
		},
		{
			key: "scrollabelContainer",
			value: function() {
				var e = this.props.containerRef;
				return !e || !e.current || !e.current.domEl ? null : e.current.domEl.getElementsByClassName("mirador-scrollto-scrollable")[0];
			}
		},
		{
			key: "elementIsVisible",
			value: function() {
				var e = this.props.offsetTop;
				return !(this.scrollToBoundingRect().top < this.containerBoundingRect().top + e || this.scrollToBoundingRect().bottom > this.containerBoundingRect().bottom);
			}
		},
		{
			key: "scrollToElement",
			value: function() {
				var e = this.props, t = e.offsetTop;
				if (e.scrollTo && this.elementToScrollTo() && !this.elementIsVisible() && this.scrollabelContainer()) {
					var n = this.elementToScrollTo().offsetTop - this.containerBoundingRect().height / 2 + t;
					this.scrollabelContainer().scrollTo(0, n);
				}
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.children;
				return e.scrollTo ? /*#__PURE__*/ X.createElement("div", { ref: this.scrollToRef }, t) : t;
			}
		}
	]);
}(X.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/components/CanvasAnnotations.js
Ro.defaultProps = { offsetTop: 0 }, tt();
function zo(e, t, n) {
	return (t = Uo(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Bo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Vo(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Uo(r.key), r);
	}
}
function Ho(e, t, n) {
	return t && Vo(e.prototype, t), n && Vo(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uo(e) {
	var t = Wo(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Wo(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Go(e, t, n) {
	return t = Yo(t), Ko(e, Jo() ? Reflect.construct(t, n || [], Yo(e).constructor) : t.apply(e, n));
}
function Ko(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return qo(e);
}
function qo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Jo() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Jo = function() {
		return !!e;
	})();
}
function Yo(e) {
	return Yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Yo(e);
}
function Xo(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zo(e, t);
}
function Zo(e, t) {
	return Zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Zo(e, t);
}
var Qo = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Bo(this, t), n = Go(this, t, [e]), n.handleClick = n.handleClick.bind(n), n.handleAnnotationHover = n.handleAnnotationHover.bind(n), n.handleAnnotationBlur = n.handleAnnotationBlur.bind(n), n;
	}
	return Xo(t, e), Ho(t, [
		{
			key: "handleClick",
			value: function(e, t) {
				var n = this.props, r = n.deselectAnnotation, i = n.selectAnnotation, a = n.selectedAnnotationId, o = n.windowId;
				a === t.id ? r(o, t.id) : i(o, t.id);
			}
		},
		{
			key: "handleAnnotationHover",
			value: function(e) {
				var t = this.props, n = t.hoverAnnotation, r = t.windowId;
				n(r, [e.id]);
			}
		},
		{
			key: "handleAnnotationBlur",
			value: function() {
				var e = this.props, t = e.hoverAnnotation, n = e.windowId;
				t(n, []);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, n = t.annotations, r = t.classes, i = t.index, a = t.label, o = t.selectedAnnotationId, s = t.t, c = t.totalSize, l = t.listContainerComponent, u = t.htmlSanitizationRuleSet, d = t.hoveredAnnotationIds, f = t.containerRef;
				return n.length === 0 ? /*#__PURE__*/ X.createElement(X.Fragment, null) : /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Ln, {
					className: r.sectionHeading,
					variant: "overline"
				}, s("annotationCanvasLabel", {
					context: `${i + 1}/${c}`,
					label: a
				})), /*#__PURE__*/ X.createElement(Yi, {
					autoFocusItem: !0,
					variant: "selectedMenu"
				}, n.map(function(t) {
					return /*#__PURE__*/ X.createElement(Ro, {
						containerRef: f,
						key: `${t.id}-scroll`,
						offsetTop: 96,
						scrollTo: o === t.id
					}, /*#__PURE__*/ X.createElement(na, {
						button: !0,
						component: l,
						className: G(r.annotationListItem, zo({}, r.hovered, d.includes(t.id))),
						key: t.id,
						annotationid: t.id,
						selected: o === t.id,
						onClick: function(n) {
							return e.handleClick(n, t);
						},
						onFocus: function() {
							return e.handleAnnotationHover(t);
						},
						onBlur: e.handleAnnotationBlur,
						onMouseEnter: function() {
							return e.handleAnnotationHover(t);
						},
						onMouseLeave: e.handleAnnotationBlur
					}, /*#__PURE__*/ X.createElement(aa, { primaryTypographyProps: { variant: "body2" } }, /*#__PURE__*/ X.createElement(To, {
						ruleSet: u,
						htmlString: t.content
					}), /*#__PURE__*/ X.createElement("div", null, t.tags.map(function(e) {
						return /*#__PURE__*/ X.createElement(bn, {
							size: "small",
							variant: "outlined",
							label: e,
							id: e,
							className: r.chip,
							key: e.toString()
						});
					})))));
				})));
			}
		}
	]);
}(X.Component);
Qo.defaultProps = {
	annotations: [],
	classes: {},
	containerRef: void 0,
	hoveredAnnotationIds: [],
	htmlSanitizationRuleSet: "iiif",
	listContainerComponent: "li",
	selectedAnnotationId: void 0
}, s(), q();
function $o(e) {
	return e.map(function(e, t) {
		return {
			content: e.chars,
			id: e.id,
			tags: e.tags,
			targetId: e.targetId
		};
	});
}
var es = function(e, t) {
	var n = t.canvasId, r = t.windowId;
	return {
		annotations: $o(te(e, {
			canvasId: n,
			windowId: r
		})),
		htmlSanitizationRuleSet: h(e).annotations.htmlSanitizationRuleSet,
		label: je(e, {
			canvasId: n,
			windowId: r
		}),
		selectedAnnotationId: zt(e, { windowId: r })
	};
}, ts = {
	deselectAnnotation: fn,
	hoverAnnotation: sn,
	selectAnnotation: on
}, ns = V(Ge(), Y(function(e) {
	return {
		annotationListItem: {
			"&$hovered": { backgroundColor: e.palette.action.hover },
			"&:hover,&:focus": { backgroundColor: e.palette.action.hover },
			borderBottom: `0.5px solid ${e.palette.divider}`,
			cursor: "pointer",
			whiteSpace: "normal"
		},
		chip: {
			backgroundColor: e.palette.background.paper,
			marginRight: e.spacing(.5),
			marginTop: e.spacing(1)
		},
		hovered: {},
		sectionHeading: {
			paddingLeft: e.spacing(2),
			paddingRight: e.spacing(1),
			paddingTop: e.spacing(2)
		}
	};
}), Et(es, ts), R("CanvasAnnotations"))(Qo);
J(), Nt(), tt(), q();
var rs = function(e) {
	return {
		root: {
			height: 0,
			overflow: "hidden",
			transition: e.transitions.create("height")
		},
		entered: {
			height: "auto",
			overflow: "visible"
		},
		hidden: { visibility: "hidden" },
		wrapper: { display: "flex" },
		wrapperInner: { width: "100%" }
	};
}, is = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.collapsedHeight, o = e.collapsedSize, s = o === void 0 ? "0px" : o, c = e.component, l = c === void 0 ? "div" : c, u = e.disableStrictModeCompat, d = u === void 0 ? !1 : u, f = e.in, p = e.onEnter, m = e.onEntered, h = e.onEntering, g = e.onExit, v = e.onExited, y = e.onExiting, b = e.style, x = e.timeout, S = x === void 0 ? Ae.standard : x, C = e.TransitionComponent, w = C === void 0 ? Yn : C, T = _(e, [
		"children",
		"classes",
		"className",
		"collapsedHeight",
		"collapsedSize",
		"component",
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
	]), E = Yt(), D = X.useRef(), ee = X.useRef(null), O = X.useRef(), k = typeof (a || s) == "number" ? `${a || s}px` : a || s;
	X.useEffect(function() {
		return function() {
			clearTimeout(D.current);
		};
	}, []);
	var A = E.unstable_strictMode && !d, j = X.useRef(null), M = Hn(t, A ? j : void 0), te = function(e) {
		return function(t, n) {
			if (e) {
				var r = gt(A ? [j.current, t] : [t, n], 2), i = r[0], a = r[1];
				a === void 0 ? e(i) : e(i, a);
			}
		};
	}, N = te(function(e, t) {
		e.style.height = k, p && p(e, t);
	}), P = te(function(e, t) {
		var n = ee.current ? ee.current.clientHeight : 0, r = Kt({
			style: b,
			timeout: S
		}, { mode: "enter" }).duration;
		if (S === "auto") {
			var i = E.transitions.getAutoHeightDuration(n);
			e.style.transitionDuration = `${i}ms`, O.current = i;
		} else e.style.transitionDuration = typeof r == "string" ? r : `${r}ms`;
		e.style.height = `${n}px`, h && h(e, t);
	}), F = te(function(e, t) {
		e.style.height = "auto", m && m(e, t);
	}), ne = te(function(e) {
		var t = ee.current ? ee.current.clientHeight : 0;
		e.style.height = `${t}px`, g && g(e);
	}), I = te(v), re = te(function(e) {
		var t = ee.current ? ee.current.clientHeight : 0, n = Kt({
			style: b,
			timeout: S
		}, { mode: "exit" }).duration;
		if (S === "auto") {
			var r = E.transitions.getAutoHeightDuration(t);
			e.style.transitionDuration = `${r}ms`, O.current = r;
		} else e.style.transitionDuration = typeof n == "string" ? n : `${n}ms`;
		e.style.height = k, y && y(e);
	});
	return /*#__PURE__*/ X.createElement(w, K({
		in: f,
		onEnter: N,
		onEntered: F,
		onEntering: P,
		onExit: ne,
		onExited: I,
		onExiting: re,
		addEndListener: function(e, t) {
			S === "auto" && (D.current = setTimeout(A ? e : t, O.current || 0));
		},
		nodeRef: A ? j : void 0,
		timeout: S === "auto" ? null : S
	}, T), function(e, t) {
		return /*#__PURE__*/ X.createElement(l, K({
			className: G(r.root, r.container, i, {
				entered: r.entered,
				exited: !f && k === "0px" && r.hidden
			}[e]),
			style: K({ minHeight: k }, b),
			ref: M
		}, t), /*#__PURE__*/ X.createElement("div", {
			className: r.wrapper,
			ref: ee
		}, /*#__PURE__*/ X.createElement("div", { className: r.wrapperInner }, n)));
	});
});
is.muiSupportAuto = !0;
var as = Y(rs, { name: "MuiCollapse" })(is);
J(), At(), Nt(), Jn(), M(), Un();
var os = {
	entering: { opacity: 1 },
	entered: { opacity: 1 }
}, ss = {
	enter: Ae.enteringScreen,
	exit: Ae.leavingScreen
}, cs = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.disableStrictModeCompat, i = r === void 0 ? !1 : r, a = e.in, o = e.onEnter, s = e.onEntered, c = e.onEntering, l = e.onExit, u = e.onExited, d = e.onExiting, f = e.style, p = e.TransitionComponent, m = p === void 0 ? Yn : p, h = e.timeout, g = h === void 0 ? ss : h, v = _(e, [
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
		"TransitionComponent",
		"timeout"
	]), y = Yt(), b = y.unstable_strictMode && !i, x = X.useRef(null), S = Hn(n.ref, t), C = Hn(b ? x : void 0, S), w = function(e) {
		return function(t, n) {
			if (e) {
				var r = gt(b ? [x.current, t] : [t, n], 2), i = r[0], a = r[1];
				a === void 0 ? e(i) : e(i, a);
			}
		};
	}, T = w(c), E = w(function(e, t) {
		$t(e);
		var n = Kt({
			style: f,
			timeout: g
		}, { mode: "enter" });
		e.style.webkitTransition = y.transitions.create("opacity", n), e.style.transition = y.transitions.create("opacity", n), o && o(e, t);
	}), D = w(s), ee = w(d), O = w(function(e) {
		var t = Kt({
			style: f,
			timeout: g
		}, { mode: "exit" });
		e.style.webkitTransition = y.transitions.create("opacity", t), e.style.transition = y.transitions.create("opacity", t), l && l(e);
	}), k = w(u);
	return /*#__PURE__*/ X.createElement(m, K({
		appear: !0,
		in: a,
		nodeRef: b ? x : void 0,
		onEnter: E,
		onEntered: D,
		onEntering: T,
		onExit: O,
		onExited: k,
		onExiting: ee,
		timeout: g
	}, v), function(e, t) {
		return /*#__PURE__*/ X.cloneElement(n, K({
			style: K({
				opacity: 0,
				visibility: e === "exited" && !a ? "hidden" : void 0
			}, os[e], f, n.props.style),
			ref: C
		}, t));
	});
});
J(), Nt(), tt(), q();
var ls = {
	root: {
		zIndex: -1,
		position: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		right: 0,
		bottom: 0,
		top: 0,
		left: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		WebkitTapHighlightColor: "transparent"
	},
	invisible: { backgroundColor: "transparent" }
}, us = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.invisible, o = a === void 0 ? !1 : a, s = e.open, c = e.transitionDuration, l = e.TransitionComponent, u = l === void 0 ? cs : l, d = _(e, [
		"children",
		"classes",
		"className",
		"invisible",
		"open",
		"transitionDuration",
		"TransitionComponent"
	]);
	return /*#__PURE__*/ X.createElement(u, K({
		in: s,
		timeout: c
	}, d), /*#__PURE__*/ X.createElement("div", {
		className: G(r.root, i, o && r.invisible),
		"aria-hidden": !0,
		ref: t
	}, n));
}), ds = Y(ls, { name: "MuiBackdrop" })(us), fs = X.createContext();
function ps() {
	return X.useContext(fs);
}
//#endregion
//#region node_modules/@material-ui/core/esm/FormControl/useFormControl.js
function ms() {
	return X.useContext(fs);
}
J(), Nt(), tt(), q();
var hs = 44, gs = function(e) {
	return {
		root: { display: "inline-block" },
		static: { transition: e.transitions.create("transform") },
		indeterminate: { animation: "$circular-rotate 1.4s linear infinite" },
		determinate: { transition: e.transitions.create("transform") },
		colorPrimary: { color: e.palette.primary.main },
		colorSecondary: { color: e.palette.secondary.main },
		svg: { display: "block" },
		circle: { stroke: "currentColor" },
		circleStatic: { transition: e.transitions.create("stroke-dashoffset") },
		circleIndeterminate: {
			animation: "$circular-dash 1.4s ease-in-out infinite",
			strokeDasharray: "80px, 200px",
			strokeDashoffset: "0px"
		},
		circleDeterminate: { transition: e.transitions.create("stroke-dashoffset") },
		"@keyframes circular-rotate": {
			"0%": { transformOrigin: "50% 50%" },
			"100%": { transform: "rotate(360deg)" }
		},
		"@keyframes circular-dash": {
			"0%": {
				strokeDasharray: "1px, 200px",
				strokeDashoffset: "0px"
			},
			"50%": {
				strokeDasharray: "100px, 200px",
				strokeDashoffset: "-15px"
			},
			"100%": {
				strokeDasharray: "100px, 200px",
				strokeDashoffset: "-125px"
			}
		},
		circleDisableShrink: { animation: "none" }
	};
}, _s = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.color, a = i === void 0 ? "primary" : i, o = e.disableShrink, s = o === void 0 ? !1 : o, c = e.size, l = c === void 0 ? 40 : c, u = e.style, d = e.thickness, f = d === void 0 ? 3.6 : d, p = e.value, m = p === void 0 ? 0 : p, h = e.variant, g = h === void 0 ? "indeterminate" : h, v = _(e, [
		"classes",
		"className",
		"color",
		"disableShrink",
		"size",
		"style",
		"thickness",
		"value",
		"variant"
	]), y = {}, b = {}, x = {};
	if (g === "determinate" || g === "static") {
		var S = 2 * Math.PI * ((hs - f) / 2);
		y.strokeDasharray = S.toFixed(3), x["aria-valuenow"] = Math.round(m), y.strokeDashoffset = `${((100 - m) / 100 * S).toFixed(3)}px`, b.transform = "rotate(-90deg)";
	}
	return /*#__PURE__*/ X.createElement("div", K({
		className: G(n.root, r, a !== "inherit" && n[`color${On(a)}`], {
			determinate: n.determinate,
			indeterminate: n.indeterminate,
			static: n.static
		}[g]),
		style: K({
			width: l,
			height: l
		}, b, u),
		ref: t,
		role: "progressbar"
	}, x, v), /*#__PURE__*/ X.createElement("svg", {
		className: n.svg,
		viewBox: `${hs / 2} ${hs / 2} ${hs} ${hs}`
	}, /*#__PURE__*/ X.createElement("circle", {
		className: G(n.circle, s && n.circleDisableShrink, {
			determinate: n.circleDeterminate,
			indeterminate: n.circleIndeterminate,
			static: n.circleStatic
		}[g]),
		style: y,
		cx: hs,
		cy: hs,
		r: (hs - f) / 2,
		fill: "none",
		strokeWidth: f
	})));
}), vs = Y(gs, {
	name: "MuiCircularProgress",
	flip: !1
})(_s);
//#endregion
//#region node_modules/@material-ui/core/esm/Modal/ModalManager.js
Fn();
function ys(e) {
	var t = Dn(e);
	return t.body === e ? $n(t).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function bs(e, t) {
	t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function xs(e) {
	return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0;
}
function Ss(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [], i = arguments.length > 4 ? arguments[4] : void 0, a = [t, n].concat(k(r)), o = [
		"TEMPLATE",
		"SCRIPT",
		"STYLE"
	];
	[].forEach.call(e.children, function(e) {
		e.nodeType === 1 && a.indexOf(e) === -1 && o.indexOf(e.tagName) === -1 && bs(e, i);
	});
}
function Cs(e, t) {
	var n = -1;
	return e.some(function(e, r) {
		return t(e) ? (n = r, !0) : !1;
	}), n;
}
function ws(e, t) {
	var n = [], r = [], i = e.container, a;
	if (!t.disableScrollLock) {
		if (ys(i)) {
			var o = Ui();
			n.push({
				value: i.style.paddingRight,
				key: "padding-right",
				el: i
			}), i.style["padding-right"] = `${xs(i) + o}px`, a = Dn(i).querySelectorAll(".mui-fixed"), [].forEach.call(a, function(e) {
				r.push(e.style.paddingRight), e.style.paddingRight = `${xs(e) + o}px`;
			});
		}
		var s = i.parentElement, c = s.nodeName === "HTML" && window.getComputedStyle(s)["overflow-y"] === "scroll" ? s : i;
		n.push({
			value: c.style.overflow,
			key: "overflow",
			el: c
		}), c.style.overflow = "hidden";
	}
	return function() {
		a && [].forEach.call(a, function(e, t) {
			r[t] ? e.style.paddingRight = r[t] : e.style.removeProperty("padding-right");
		}), n.forEach(function(e) {
			var t = e.value, n = e.el, r = e.key;
			t ? n.style.setProperty(r, t) : n.style.removeProperty(r);
		});
	};
}
function Ts(e) {
	var t = [];
	return [].forEach.call(e.children, function(e) {
		e.getAttribute && e.getAttribute("aria-hidden") === "true" && t.push(e);
	}), t;
}
var Es = /*#__PURE__*/ function() {
	function e() {
		Ft(this, e), this.modals = [], this.containers = [];
	}
	return Lt(e, [
		{
			key: "add",
			value: function(e, t) {
				var n = this.modals.indexOf(e);
				if (n !== -1) return n;
				n = this.modals.length, this.modals.push(e), e.modalRef && bs(e.modalRef, !1);
				var r = Ts(t);
				Ss(t, e.mountNode, e.modalRef, r, !0);
				var i = Cs(this.containers, function(e) {
					return e.container === t;
				});
				return i === -1 ? (this.containers.push({
					modals: [e],
					container: t,
					restore: null,
					hiddenSiblingNodes: r
				}), n) : (this.containers[i].modals.push(e), n);
			}
		},
		{
			key: "mount",
			value: function(e, t) {
				var n = Cs(this.containers, function(t) {
					return t.modals.indexOf(e) !== -1;
				}), r = this.containers[n];
				r.restore ||= ws(r, t);
			}
		},
		{
			key: "remove",
			value: function(e) {
				var t = this.modals.indexOf(e);
				if (t === -1) return t;
				var n = Cs(this.containers, function(t) {
					return t.modals.indexOf(e) !== -1;
				}), r = this.containers[n];
				if (r.modals.splice(r.modals.indexOf(e), 1), this.modals.splice(t, 1), r.modals.length === 0) r.restore && r.restore(), e.modalRef && bs(e.modalRef, !0), Ss(r.container, e.mountNode, e.modalRef, r.hiddenSiblingNodes, !1), this.containers.splice(n, 1);
				else {
					var i = r.modals[r.modals.length - 1];
					i.modalRef && bs(i.modalRef, !1);
				}
				return t;
			}
		},
		{
			key: "isTopModal",
			value: function(e) {
				return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
			}
		}
	]), e;
}();
Fn(), Un();
function Ds(e) {
	var t = e.children, n = e.disableAutoFocus, r = n === void 0 ? !1 : n, i = e.disableEnforceFocus, a = i === void 0 ? !1 : i, o = e.disableRestoreFocus, s = o === void 0 ? !1 : o, c = e.getDoc, l = e.isEnabled, u = e.open, d = X.useRef(), f = X.useRef(null), p = X.useRef(null), m = X.useRef(), h = X.useRef(null), g = X.useCallback(function(e) {
		h.current = lr.findDOMNode(e);
	}, []), _ = Hn(t.ref, g), v = X.useRef();
	return X.useEffect(function() {
		v.current = u;
	}, [u]), !v.current && u && typeof window < "u" && (m.current = c().activeElement), X.useEffect(function() {
		if (u) {
			var e = Dn(h.current);
			!r && h.current && !h.current.contains(e.activeElement) && (h.current.hasAttribute("tabIndex") || h.current.setAttribute("tabIndex", -1), h.current.focus());
			var t = function() {
				if (h.current !== null) {
					if (!e.hasFocus() || a || !l() || d.current) {
						d.current = !1;
						return;
					}
					h.current && !h.current.contains(e.activeElement) && h.current.focus();
				}
			}, n = function(t) {
				a || !l() || t.keyCode !== 9 || e.activeElement === h.current && (d.current = !0, t.shiftKey ? p.current.focus() : f.current.focus());
			};
			e.addEventListener("focus", t, !0), e.addEventListener("keydown", n, !0);
			var i = setInterval(function() {
				t();
			}, 50);
			return function() {
				clearInterval(i), e.removeEventListener("focus", t, !0), e.removeEventListener("keydown", n, !0), s || (m.current && m.current.focus && m.current.focus(), m.current = null);
			};
		}
	}, [
		r,
		a,
		s,
		l,
		u
	]), /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("div", {
		tabIndex: 0,
		ref: f,
		"data-test": "sentinelStart"
	}), /*#__PURE__*/ X.cloneElement(t, { ref: _ }), /*#__PURE__*/ X.createElement("div", {
		tabIndex: 0,
		ref: p,
		"data-test": "sentinelEnd"
	}));
}
J(), Nt();
var Os = {
	root: {
		zIndex: -1,
		position: "fixed",
		right: 0,
		bottom: 0,
		top: 0,
		left: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		WebkitTapHighlightColor: "transparent"
	},
	invisible: { backgroundColor: "transparent" }
}, ks = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.invisible, r = n === void 0 ? !1 : n, i = e.open, a = _(e, ["invisible", "open"]);
	return i ? /*#__PURE__*/ X.createElement("div", K({
		"aria-hidden": !0,
		ref: t
	}, a, { style: K({}, Os.root, r ? Os.invisible : {}, a.style) })) : null;
});
Nt(), J(), Fn(), Un();
function As(e) {
	return e = typeof e == "function" ? e() : e, lr.findDOMNode(e);
}
function js(e) {
	return e.children ? e.children.props.hasOwnProperty("in") : !1;
}
var Ms = new Es(), Ns = function(e) {
	return {
		root: {
			position: "fixed",
			zIndex: e.zIndex.modal,
			right: 0,
			bottom: 0,
			top: 0,
			left: 0
		},
		hidden: { visibility: "hidden" }
	};
}, Ps = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = He(), r = B({
		name: "MuiModal",
		props: K({}, e),
		theme: n
	}), i = r.BackdropComponent, a = i === void 0 ? ks : i, o = r.BackdropProps, s = r.children, c = r.closeAfterTransition, l = c === void 0 ? !1 : c, u = r.container, d = r.disableAutoFocus, f = d === void 0 ? !1 : d, p = r.disableBackdropClick, h = p === void 0 ? !1 : p, g = r.disableEnforceFocus, v = g === void 0 ? !1 : g, y = r.disableEscapeKeyDown, b = y === void 0 ? !1 : y, x = r.disablePortal, S = x === void 0 ? !1 : x, C = r.disableRestoreFocus, w = C === void 0 ? !1 : C, T = r.disableScrollLock, E = T === void 0 ? !1 : T, D = r.hideBackdrop, ee = D === void 0 ? !1 : D, O = r.keepMounted, k = O === void 0 ? !1 : O, A = r.manager, j = A === void 0 ? Ms : A, M = r.onBackdropClick, te = r.onClose, N = r.onEscapeKeyDown, P = r.onRendered, F = r.open, ne = _(r, [
		"BackdropComponent",
		"BackdropProps",
		"children",
		"closeAfterTransition",
		"container",
		"disableAutoFocus",
		"disableBackdropClick",
		"disableEnforceFocus",
		"disableEscapeKeyDown",
		"disablePortal",
		"disableRestoreFocus",
		"disableScrollLock",
		"hideBackdrop",
		"keepMounted",
		"manager",
		"onBackdropClick",
		"onClose",
		"onEscapeKeyDown",
		"onRendered",
		"open"
	]), I = X.useState(!0), re = I[0], L = I[1], R = X.useRef({}), ie = X.useRef(null), ae = X.useRef(null), oe = Hn(ae, t), z = js(r), se = function() {
		return Dn(ie.current);
	}, ce = function() {
		return R.current.modalRef = ae.current, R.current.mountNode = ie.current, R.current;
	}, V = function() {
		j.mount(ce(), { disableScrollLock: E }), ae.current.scrollTop = 0;
	}, le = Qn(function() {
		var e = As(u) || se().body;
		j.add(ce(), e), ae.current && V();
	}), ue = X.useCallback(function() {
		return j.isTopModal(ce());
	}, [j]), de = Qn(function(e) {
		ie.current = e, e && (P && P(), F && ue() ? V() : bs(ae.current, !0));
	}), fe = X.useCallback(function() {
		j.remove(ce());
	}, [j]);
	if (X.useEffect(function() {
		return function() {
			fe();
		};
	}, [fe]), X.useEffect(function() {
		F ? le() : (!z || !l) && fe();
	}, [
		F,
		fe,
		z,
		l,
		le
	]), !k && !F && (!z || re)) return null;
	var H = function() {
		L(!1);
	}, pe = function() {
		L(!0), l && fe();
	}, me = function(e) {
		e.target === e.currentTarget && (M && M(e), !h && te && te(e, "backdropClick"));
	}, U = function(e) {
		e.key !== "Escape" || !ue() || (N && N(e), b || (e.stopPropagation(), te && te(e, "escapeKeyDown")));
	}, he = Ns(n || { zIndex: m }), ge = {};
	return s.props.tabIndex === void 0 && (ge.tabIndex = s.props.tabIndex || "-1"), z && (ge.onEnter = kn(H, s.props.onEnter), ge.onExited = kn(pe, s.props.onExited)), /*#__PURE__*/ X.createElement(Zt, {
		ref: de,
		container: u,
		disablePortal: S
	}, /*#__PURE__*/ X.createElement("div", K({
		ref: oe,
		onKeyDown: U,
		role: "presentation"
	}, ne, { style: K({}, he.root, !F && re ? he.hidden : {}, ne.style) }), ee ? null : /*#__PURE__*/ X.createElement(a, K({
		open: F,
		onClick: me
	}, o)), /*#__PURE__*/ X.createElement(Ds, {
		disableEnforceFocus: v,
		disableAutoFocus: f,
		disableRestoreFocus: w,
		getDoc: se,
		isEnabled: ue,
		open: F
	}, /*#__PURE__*/ X.cloneElement(s, ge))));
});
J(), Nt(), se(), tt(), q(), In(), M();
var Fs = function(e) {
	return {
		root: { "@media print": { position: "absolute !important" } },
		scrollPaper: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		scrollBody: {
			overflowY: "auto",
			overflowX: "hidden",
			textAlign: "center",
			"&:after": {
				content: "\"\"",
				display: "inline-block",
				verticalAlign: "middle",
				height: "100%",
				width: "0"
			}
		},
		container: {
			height: "100%",
			"@media print": { height: "auto" },
			outline: 0
		},
		paper: {
			margin: 32,
			position: "relative",
			overflowY: "auto",
			"@media print": {
				overflowY: "visible",
				boxShadow: "none"
			}
		},
		paperScrollPaper: {
			display: "flex",
			flexDirection: "column",
			maxHeight: "calc(100% - 64px)"
		},
		paperScrollBody: {
			display: "inline-block",
			verticalAlign: "middle",
			textAlign: "left"
		},
		paperWidthFalse: { maxWidth: "calc(100% - 64px)" },
		paperWidthXs: {
			maxWidth: Math.max(e.breakpoints.values.xs, 444),
			"&$paperScrollBody": oe({}, e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64), { maxWidth: "calc(100% - 64px)" })
		},
		paperWidthSm: {
			maxWidth: e.breakpoints.values.sm,
			"&$paperScrollBody": oe({}, e.breakpoints.down(e.breakpoints.values.sm + 64), { maxWidth: "calc(100% - 64px)" })
		},
		paperWidthMd: {
			maxWidth: e.breakpoints.values.md,
			"&$paperScrollBody": oe({}, e.breakpoints.down(e.breakpoints.values.md + 64), { maxWidth: "calc(100% - 64px)" })
		},
		paperWidthLg: {
			maxWidth: e.breakpoints.values.lg,
			"&$paperScrollBody": oe({}, e.breakpoints.down(e.breakpoints.values.lg + 64), { maxWidth: "calc(100% - 64px)" })
		},
		paperWidthXl: {
			maxWidth: e.breakpoints.values.xl,
			"&$paperScrollBody": oe({}, e.breakpoints.down(e.breakpoints.values.xl + 64), { maxWidth: "calc(100% - 64px)" })
		},
		paperFullWidth: { width: "calc(100% - 64px)" },
		paperFullScreen: {
			margin: 0,
			width: "100%",
			maxWidth: "100%",
			height: "100%",
			maxHeight: "none",
			borderRadius: 0,
			"&$paperScrollBody": {
				margin: 0,
				maxWidth: "100%"
			}
		}
	};
}, Is = {
	enter: Ae.enteringScreen,
	exit: Ae.leavingScreen
}, Ls = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.BackdropProps, r = e.children, i = e.classes, a = e.className, o = e.disableBackdropClick, s = o === void 0 ? !1 : o, c = e.disableEscapeKeyDown, l = c === void 0 ? !1 : c, u = e.fullScreen, d = u === void 0 ? !1 : u, f = e.fullWidth, p = f === void 0 ? !1 : f, m = e.maxWidth, h = m === void 0 ? "sm" : m, g = e.onBackdropClick, v = e.onClose, y = e.onEnter, b = e.onEntered, x = e.onEntering, S = e.onEscapeKeyDown, C = e.onExit, w = e.onExited, T = e.onExiting, E = e.open, D = e.PaperComponent, ee = D === void 0 ? vn : D, O = e.PaperProps, k = O === void 0 ? {} : O, A = e.scroll, j = A === void 0 ? "paper" : A, M = e.TransitionComponent, te = M === void 0 ? cs : M, N = e.transitionDuration, P = N === void 0 ? Is : N, F = e.TransitionProps, ne = e["aria-describedby"], I = e["aria-labelledby"], re = _(e, /* @__PURE__ */ "BackdropProps.children.classes.className.disableBackdropClick.disableEscapeKeyDown.fullScreen.fullWidth.maxWidth.onBackdropClick.onClose.onEnter.onEntered.onEntering.onEscapeKeyDown.onExit.onExited.onExiting.open.PaperComponent.PaperProps.scroll.TransitionComponent.transitionDuration.TransitionProps.aria-describedby.aria-labelledby".split(".")), L = X.useRef();
	return /*#__PURE__*/ X.createElement(Ps, K({
		className: G(i.root, a),
		BackdropComponent: ds,
		BackdropProps: K({ transitionDuration: P }, n),
		closeAfterTransition: !0
	}, s ? { disableBackdropClick: s } : {}, {
		disableEscapeKeyDown: l,
		onEscapeKeyDown: S,
		onClose: v,
		open: E,
		ref: t
	}, re), /*#__PURE__*/ X.createElement(te, K({
		appear: !0,
		in: E,
		timeout: P,
		onEnter: y,
		onEntering: x,
		onEntered: b,
		onExit: C,
		onExiting: T,
		onExited: w,
		role: "none presentation"
	}, F), /*#__PURE__*/ X.createElement("div", {
		className: G(i.container, i[`scroll${On(j)}`]),
		onMouseUp: function(e) {
			e.target === e.currentTarget && e.target === L.current && (L.current = null, g && g(e), !s && v && v(e, "backdropClick"));
		},
		onMouseDown: function(e) {
			L.current = e.target;
		}
	}, /*#__PURE__*/ X.createElement(ee, K({
		elevation: 24,
		role: "dialog",
		"aria-describedby": ne,
		"aria-labelledby": I
	}, k, { className: G(i.paper, i[`paperScroll${On(j)}`], i[`paperWidth${On(String(h))}`], k.className, d && i.paperFullScreen, p && i.paperFullWidth) }), r))));
}), Rs = Y(Fs, { name: "MuiDialog" })(Ls);
J(), Nt(), tt(), q();
var zs = function(e) {
	return {
		root: {
			flex: "1 1 auto",
			WebkitOverflowScrolling: "touch",
			overflowY: "auto",
			padding: "8px 24px",
			"&:first-child": { paddingTop: 20 }
		},
		dividers: {
			padding: "16px 24px",
			borderTop: `1px solid ${e.palette.divider}`,
			borderBottom: `1px solid ${e.palette.divider}`
		}
	};
}, Bs = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.dividers, a = i === void 0 ? !1 : i, o = _(e, [
		"classes",
		"className",
		"dividers"
	]);
	return /*#__PURE__*/ X.createElement("div", K({
		className: G(n.root, r, a && n.dividers),
		ref: t
	}, o));
}), Vs = Y(zs, { name: "MuiDialogContent" })(Bs);
J(), Nt(), tt(), q();
var Hs = { root: {
	margin: 0,
	padding: "16px 24px",
	flex: "0 0 auto"
} }, Us = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.disableTypography, o = a === void 0 ? !1 : a, s = _(e, [
		"children",
		"classes",
		"className",
		"disableTypography"
	]);
	return /*#__PURE__*/ X.createElement("div", K({
		className: G(r.root, i),
		ref: t
	}, s), o ? n : /*#__PURE__*/ X.createElement(Ln, {
		component: "h2",
		variant: "h6"
	}, n));
}), Ws = Y(Hs, { name: "MuiDialogTitle" })(Us);
//#endregion
//#region node_modules/@material-ui/core/esm/FormControl/formControlState.js
function Gs(e) {
	var t = e.props, n = e.states, r = e.muiFormControl;
	return n.reduce(function(e, n) {
		return e[n] = t[n], r && t[n] === void 0 && (e[n] = r[n]), e;
	}, {});
}
J(), Nt(), Un();
function Ks(e, t) {
	return parseInt(e[t], 10) || 0;
}
var qs = typeof window < "u" ? X.useLayoutEffect : X.useEffect, Js = { shadow: {
	visibility: "hidden",
	position: "absolute",
	overflow: "hidden",
	height: 0,
	top: 0,
	left: 0,
	transform: "translateZ(0)"
} }, Ys = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.onChange, r = e.rows, i = e.rowsMax, a = e.rowsMin, o = e.maxRows, s = e.minRows, c = s === void 0 ? 1 : s, l = e.style, u = e.value, d = _(e, [
		"onChange",
		"rows",
		"rowsMax",
		"rowsMin",
		"maxRows",
		"minRows",
		"style",
		"value"
	]), f = o || i, p = r || a || c, m = X.useRef(u != null).current, h = X.useRef(null), g = Hn(t, h), v = X.useRef(null), y = X.useRef(0), b = X.useState({}), x = b[0], S = b[1], C = X.useCallback(function() {
		var t = h.current, n = window.getComputedStyle(t), r = v.current;
		r.style.width = n.width, r.value = t.value || e.placeholder || "x", r.value.slice(-1) === "\n" && (r.value += " ");
		var i = n["box-sizing"], a = Ks(n, "padding-bottom") + Ks(n, "padding-top"), o = Ks(n, "border-bottom-width") + Ks(n, "border-top-width"), s = r.scrollHeight - a;
		r.value = "x";
		var c = r.scrollHeight - a, l = s;
		p && (l = Math.max(Number(p) * c, l)), f && (l = Math.min(Number(f) * c, l)), l = Math.max(l, c);
		var u = l + (i === "border-box" ? a + o : 0), d = Math.abs(l - s) <= 1;
		S(function(e) {
			return y.current < 20 && (u > 0 && Math.abs((e.outerHeightStyle || 0) - u) > 1 || e.overflow !== d) ? (y.current += 1, {
				overflow: d,
				outerHeightStyle: u
			}) : e;
		});
	}, [
		f,
		p,
		e.placeholder
	]);
	return X.useEffect(function() {
		var e = Gn(function() {
			y.current = 0, C();
		});
		return window.addEventListener("resize", e), function() {
			e.clear(), window.removeEventListener("resize", e);
		};
	}, [C]), qs(function() {
		C();
	}), X.useEffect(function() {
		y.current = 0;
	}, [u]), /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("textarea", K({
		value: u,
		onChange: function(e) {
			y.current = 0, m || C(), n && n(e);
		},
		ref: g,
		rows: p,
		style: K({
			height: x.outerHeightStyle,
			overflow: x.overflow ? "hidden" : null
		}, l)
	}, d)), /*#__PURE__*/ X.createElement("textarea", {
		"aria-hidden": !0,
		className: e.className,
		readOnly: !0,
		ref: v,
		tabIndex: -1,
		style: K({}, Js.shadow, l)
	}));
});
//#endregion
//#region node_modules/@material-ui/core/esm/InputBase/utils.js
function Xs(e) {
	return e != null && !(Array.isArray(e) && e.length === 0);
}
function Zs(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
	return e && (Xs(e.value) && e.value !== "" || t && Xs(e.defaultValue) && e.defaultValue !== "");
}
function Qs(e) {
	return e.startAdornment;
}
Nt(), J(), Tt(), tt(), q(), In(), Un();
var $s = function(e) {
	var t = e.palette.type === "light", n = {
		color: "currentColor",
		opacity: t ? .42 : .5,
		transition: e.transitions.create("opacity", { duration: e.transitions.duration.shorter })
	}, r = { opacity: "0 !important" }, i = { opacity: t ? .42 : .5 };
	return {
		"@global": {
			"@keyframes mui-auto-fill": {},
			"@keyframes mui-auto-fill-cancel": {}
		},
		root: K({}, e.typography.body1, {
			color: e.palette.text.primary,
			lineHeight: "1.1876em",
			boxSizing: "border-box",
			position: "relative",
			cursor: "text",
			display: "inline-flex",
			alignItems: "center",
			"&$disabled": {
				color: e.palette.text.disabled,
				cursor: "default"
			}
		}),
		formControl: {},
		focused: {},
		disabled: {},
		adornedStart: {},
		adornedEnd: {},
		error: {},
		marginDense: {},
		multiline: {
			padding: "6px 0 7px",
			"&$marginDense": { paddingTop: 3 }
		},
		colorSecondary: {},
		fullWidth: { width: "100%" },
		input: {
			font: "inherit",
			letterSpacing: "inherit",
			color: "currentColor",
			padding: "6px 0 7px",
			border: 0,
			boxSizing: "content-box",
			background: "none",
			height: "1.1876em",
			margin: 0,
			WebkitTapHighlightColor: "transparent",
			display: "block",
			minWidth: 0,
			width: "100%",
			animationName: "mui-auto-fill-cancel",
			animationDuration: "10ms",
			"&::-webkit-input-placeholder": n,
			"&::-moz-placeholder": n,
			"&:-ms-input-placeholder": n,
			"&::-ms-input-placeholder": n,
			"&:focus": { outline: 0 },
			"&:invalid": { boxShadow: "none" },
			"&::-webkit-search-decoration": { "-webkit-appearance": "none" },
			"label[data-shrink=false] + $formControl &": {
				"&::-webkit-input-placeholder": r,
				"&::-moz-placeholder": r,
				"&:-ms-input-placeholder": r,
				"&::-ms-input-placeholder": r,
				"&:focus::-webkit-input-placeholder": i,
				"&:focus::-moz-placeholder": i,
				"&:focus:-ms-input-placeholder": i,
				"&:focus::-ms-input-placeholder": i
			},
			"&$disabled": { opacity: 1 },
			"&:-webkit-autofill": {
				animationDuration: "5000s",
				animationName: "mui-auto-fill"
			}
		},
		inputMarginDense: { paddingTop: 3 },
		inputMultiline: {
			height: "auto",
			resize: "none",
			padding: 0
		},
		inputTypeSearch: {
			"-moz-appearance": "textfield",
			"-webkit-appearance": "textfield"
		},
		inputAdornedStart: {},
		inputAdornedEnd: {},
		inputHiddenLabel: {}
	};
}, ec = typeof window > "u" ? X.useEffect : X.useLayoutEffect, tc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e["aria-describedby"], r = e.autoComplete, i = e.autoFocus, a = e.classes, o = e.className;
	e.color;
	var s = e.defaultValue, c = e.disabled, l = e.endAdornment;
	e.error;
	var u = e.fullWidth, d = u === void 0 ? !1 : u, f = e.id, p = e.inputComponent, m = p === void 0 ? "input" : p, h = e.inputProps, g = h === void 0 ? {} : h, v = e.inputRef;
	e.margin;
	var y = e.multiline, b = y === void 0 ? !1 : y, x = e.name, S = e.onBlur, C = e.onChange, w = e.onClick, T = e.onFocus, E = e.onKeyDown, D = e.onKeyUp, ee = e.placeholder, O = e.readOnly, k = e.renderSuffix, A = e.rows, j = e.rowsMax, M = e.rowsMin, te = e.maxRows, N = e.minRows, P = e.startAdornment, F = e.type, ne = F === void 0 ? "text" : F, I = e.value, re = _(e, /* @__PURE__ */ "aria-describedby.autoComplete.autoFocus.classes.className.color.defaultValue.disabled.endAdornment.error.fullWidth.id.inputComponent.inputProps.inputRef.margin.multiline.name.onBlur.onChange.onClick.onFocus.onKeyDown.onKeyUp.placeholder.readOnly.renderSuffix.rows.rowsMax.rowsMin.maxRows.minRows.startAdornment.type.value".split(".")), L = g.value == null ? I : g.value, R = X.useRef(L != null).current, ie = X.useRef(), ae = X.useCallback(function(e) {}, []), oe = Hn(ie, Hn(v, Hn(g.ref, ae))), z = X.useState(!1), se = z[0], ce = z[1], B = ps(), V = Gs({
		props: e,
		muiFormControl: B,
		states: [
			"color",
			"disabled",
			"error",
			"hiddenLabel",
			"margin",
			"required",
			"filled"
		]
	});
	V.focused = B ? B.focused : se, X.useEffect(function() {
		!B && c && se && (ce(!1), S && S());
	}, [
		B,
		c,
		se,
		S
	]);
	var le = B && B.onFilled, ue = B && B.onEmpty, de = X.useCallback(function(e) {
		Zs(e) ? le && le() : ue && ue();
	}, [le, ue]);
	ec(function() {
		R && de({ value: L });
	}, [
		L,
		de,
		R
	]);
	var fe = function(e) {
		if (V.disabled) {
			e.stopPropagation();
			return;
		}
		T && T(e), g.onFocus && g.onFocus(e), B && B.onFocus ? B.onFocus(e) : ce(!0);
	}, H = function(e) {
		S && S(e), g.onBlur && g.onBlur(e), B && B.onBlur ? B.onBlur(e) : ce(!1);
	}, pe = function(e) {
		if (!R) {
			var t = e.target || ie.current;
			if (t == null) throw Error(at(1));
			de({ value: t.value });
		}
		var n = [...arguments].slice(1);
		g.onChange && g.onChange.apply(g, [e].concat(n)), C && C.apply(void 0, [e].concat(n));
	};
	X.useEffect(function() {
		de(ie.current);
	}, []);
	var me = function(e) {
		ie.current && e.currentTarget === e.target && ie.current.focus(), w && w(e);
	}, U = m, he = K({}, g, { ref: oe });
	return typeof U == "string" ? b ? A && !te && !N && !j && !M ? U = "textarea" : (he = K({
		minRows: A || N,
		rowsMax: j,
		maxRows: te
	}, he), U = Ys) : he = K({ type: ne }, he) : he = K({
		inputRef: oe,
		type: ne
	}, he, { ref: null }), X.useEffect(function() {
		B && B.setAdornedStart(!!P);
	}, [B, P]), /*#__PURE__*/ X.createElement("div", K({
		className: G(a.root, a[`color${On(V.color || "primary")}`], o, V.disabled && a.disabled, V.error && a.error, d && a.fullWidth, V.focused && a.focused, B && a.formControl, b && a.multiline, P && a.adornedStart, l && a.adornedEnd, V.margin === "dense" && a.marginDense),
		onClick: me,
		ref: t
	}, re), P, /*#__PURE__*/ X.createElement(fs.Provider, { value: null }, /*#__PURE__*/ X.createElement(U, K({
		"aria-invalid": V.error,
		"aria-describedby": n,
		autoComplete: r,
		autoFocus: i,
		defaultValue: s,
		disabled: V.disabled,
		id: f,
		onAnimationStart: function(e) {
			de(e.animationName === "mui-auto-fill-cancel" ? ie.current : { value: "x" });
		},
		name: x,
		placeholder: ee,
		readOnly: O,
		required: V.required,
		rows: A,
		value: L,
		onKeyDown: E,
		onKeyUp: D
	}, he, {
		className: G(a.input, g.className, V.disabled && a.disabled, b && a.inputMultiline, V.hiddenLabel && a.inputHiddenLabel, P && a.inputAdornedStart, l && a.inputAdornedEnd, ne === "search" && a.inputTypeSearch, V.margin === "dense" && a.inputMarginDense),
		onBlur: H,
		onChange: pe,
		onFocus: fe
	}))), l, k ? k(K({}, V, { startAdornment: P })) : null);
}), nc = Y($s, { name: "MuiInputBase" })(tc);
J(), Nt(), tt(), q();
var rc = function(e) {
	var t = e.palette.type === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)";
	return {
		root: {
			position: "relative",
			backgroundColor: r,
			borderTopLeftRadius: e.shape.borderRadius,
			borderTopRightRadius: e.shape.borderRadius,
			transition: e.transitions.create("background-color", {
				duration: e.transitions.duration.shorter,
				easing: e.transitions.easing.easeOut
			}),
			"&:hover": {
				backgroundColor: t ? "rgba(0, 0, 0, 0.13)" : "rgba(255, 255, 255, 0.13)",
				"@media (hover: none)": { backgroundColor: r }
			},
			"&$focused": { backgroundColor: t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)" },
			"&$disabled": { backgroundColor: t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)" }
		},
		colorSecondary: { "&$underline:after": { borderBottomColor: e.palette.secondary.main } },
		underline: {
			"&:after": {
				borderBottom: `2px solid ${e.palette.primary.main}`,
				left: 0,
				bottom: 0,
				content: "\"\"",
				position: "absolute",
				right: 0,
				transform: "scaleX(0)",
				transition: e.transitions.create("transform", {
					duration: e.transitions.duration.shorter,
					easing: e.transitions.easing.easeOut
				}),
				pointerEvents: "none"
			},
			"&$focused:after": { transform: "scaleX(1)" },
			"&$error:after": {
				borderBottomColor: e.palette.error.main,
				transform: "scaleX(1)"
			},
			"&:before": {
				borderBottom: `1px solid ${n}`,
				left: 0,
				bottom: 0,
				content: "\"\\00a0\"",
				position: "absolute",
				right: 0,
				transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }),
				pointerEvents: "none"
			},
			"&:hover:before": { borderBottom: `1px solid ${e.palette.text.primary}` },
			"&$disabled:before": { borderBottomStyle: "dotted" }
		},
		focused: {},
		disabled: {},
		adornedStart: { paddingLeft: 12 },
		adornedEnd: { paddingRight: 12 },
		error: {},
		marginDense: {},
		multiline: {
			padding: "27px 12px 10px",
			"&$marginDense": {
				paddingTop: 23,
				paddingBottom: 6
			}
		},
		input: {
			padding: "27px 12px 10px",
			"&:-webkit-autofill": {
				WebkitBoxShadow: e.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
				WebkitTextFillColor: e.palette.type === "light" ? null : "#fff",
				caretColor: e.palette.type === "light" ? null : "#fff",
				borderTopLeftRadius: "inherit",
				borderTopRightRadius: "inherit"
			}
		},
		inputMarginDense: {
			paddingTop: 23,
			paddingBottom: 6
		},
		inputHiddenLabel: {
			paddingTop: 18,
			paddingBottom: 19,
			"&$inputMarginDense": {
				paddingTop: 10,
				paddingBottom: 11
			}
		},
		inputMultiline: { padding: 0 },
		inputAdornedStart: { paddingLeft: 0 },
		inputAdornedEnd: { paddingRight: 0 }
	};
}, ic = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.disableUnderline, r = e.classes, i = e.fullWidth, a = i === void 0 ? !1 : i, o = e.inputComponent, s = o === void 0 ? "input" : o, c = e.multiline, l = c === void 0 ? !1 : c, u = e.type, d = u === void 0 ? "text" : u, f = _(e, [
		"disableUnderline",
		"classes",
		"fullWidth",
		"inputComponent",
		"multiline",
		"type"
	]);
	return /*#__PURE__*/ X.createElement(nc, K({
		classes: K({}, r, {
			root: G(r.root, !n && r.underline),
			underline: null
		}),
		fullWidth: a,
		inputComponent: s,
		multiline: l,
		ref: t,
		type: d
	}, f));
});
ic.muiName = "Input";
var ac = Y(rc, { name: "MuiFilledInput" })(ic);
J(), Nt(), tt(), q(), In(), En();
var oc = {
	root: {
		display: "inline-flex",
		flexDirection: "column",
		position: "relative",
		minWidth: 0,
		padding: 0,
		margin: 0,
		border: 0,
		verticalAlign: "top"
	},
	marginNormal: {
		marginTop: 16,
		marginBottom: 8
	},
	marginDense: {
		marginTop: 8,
		marginBottom: 4
	},
	fullWidth: { width: "100%" }
}, sc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.color, o = a === void 0 ? "primary" : a, s = e.component, c = s === void 0 ? "div" : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.error, f = d === void 0 ? !1 : d, p = e.fullWidth, m = p === void 0 ? !1 : p, h = e.focused, g = e.hiddenLabel, v = g === void 0 ? !1 : g, y = e.margin, b = y === void 0 ? "none" : y, x = e.required, S = x === void 0 ? !1 : x, C = e.size, w = e.variant, T = w === void 0 ? "standard" : w, E = _(e, [
		"children",
		"classes",
		"className",
		"color",
		"component",
		"disabled",
		"error",
		"fullWidth",
		"focused",
		"hiddenLabel",
		"margin",
		"required",
		"size",
		"variant"
	]), D = X.useState(function() {
		var e = !1;
		return n && X.Children.forEach(n, function(t) {
			if (Mn(t, ["Input", "Select"])) {
				var n = Mn(t, ["Select"]) ? t.props.input : t;
				n && Qs(n.props) && (e = !0);
			}
		}), e;
	}), ee = D[0], O = D[1], k = X.useState(function() {
		var e = !1;
		return n && X.Children.forEach(n, function(t) {
			Mn(t, ["Input", "Select"]) && Zs(t.props, !0) && (e = !0);
		}), e;
	}), A = k[0], j = k[1], M = X.useState(!1), te = M[0], N = M[1], P = h === void 0 ? te : h;
	u && P && N(!1);
	var F, ne = X.useCallback(function() {
		j(!0);
	}, []), I = X.useCallback(function() {
		j(!1);
	}, []), re = {
		adornedStart: ee,
		setAdornedStart: O,
		color: o,
		disabled: u,
		error: f,
		filled: A,
		focused: P,
		fullWidth: m,
		hiddenLabel: v,
		margin: (C === "small" ? "dense" : void 0) || b,
		onBlur: function() {
			N(!1);
		},
		onEmpty: I,
		onFilled: ne,
		onFocus: function() {
			N(!0);
		},
		registerEffect: F,
		required: S,
		variant: T
	};
	return /*#__PURE__*/ X.createElement(fs.Provider, { value: re }, /*#__PURE__*/ X.createElement(c, K({
		className: G(r.root, i, b !== "none" && r[`margin${On(b)}`], m && r.fullWidth),
		ref: t
	}, E), n));
}), cc = Y(oc, { name: "MuiFormControl" })(sc);
Nt(), J(), tt(), q();
var lc = function(e) {
	return {
		root: K({ color: e.palette.text.secondary }, e.typography.caption, {
			textAlign: "left",
			marginTop: 3,
			margin: 0,
			"&$disabled": { color: e.palette.text.disabled },
			"&$error": { color: e.palette.error.main }
		}),
		error: {},
		disabled: {},
		marginDense: { marginTop: 4 },
		contained: {
			marginLeft: 14,
			marginRight: 14
		},
		focused: {},
		filled: {},
		required: {}
	};
}, uc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.component, o = a === void 0 ? "p" : a;
	e.disabled, e.error, e.filled, e.focused, e.margin, e.required, e.variant;
	var s = _(e, [
		"children",
		"classes",
		"className",
		"component",
		"disabled",
		"error",
		"filled",
		"focused",
		"margin",
		"required",
		"variant"
	]), c = Gs({
		props: e,
		muiFormControl: ms(),
		states: [
			"variant",
			"margin",
			"disabled",
			"error",
			"filled",
			"focused",
			"required"
		]
	});
	return /*#__PURE__*/ X.createElement(o, K({
		className: G(r.root, (c.variant === "filled" || c.variant === "outlined") && r.contained, i, c.disabled && r.disabled, c.error && r.error, c.filled && r.filled, c.focused && r.focused, c.required && r.required, c.margin === "dense" && r.marginDense),
		ref: t
	}, s), n === " " ? /*#__PURE__*/ X.createElement("span", { dangerouslySetInnerHTML: { __html: "&#8203;" } }) : n);
}), dc = Y(lc, { name: "MuiFormHelperText" })(uc);
Nt(), J(), tt(), In(), q();
var fc = function(e) {
	return {
		root: K({ color: e.palette.text.secondary }, e.typography.body1, {
			lineHeight: 1,
			padding: 0,
			"&$focused": { color: e.palette.primary.main },
			"&$disabled": { color: e.palette.text.disabled },
			"&$error": { color: e.palette.error.main }
		}),
		colorSecondary: { "&$focused": { color: e.palette.secondary.main } },
		focused: {},
		disabled: {},
		error: {},
		filled: {},
		required: {},
		asterisk: { "&$error": { color: e.palette.error.main } }
	};
}, pc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className;
	e.color;
	var a = e.component, o = a === void 0 ? "label" : a;
	e.disabled, e.error, e.filled, e.focused, e.required;
	var s = _(e, [
		"children",
		"classes",
		"className",
		"color",
		"component",
		"disabled",
		"error",
		"filled",
		"focused",
		"required"
	]), c = Gs({
		props: e,
		muiFormControl: ms(),
		states: [
			"color",
			"required",
			"focused",
			"disabled",
			"error",
			"filled"
		]
	});
	return /*#__PURE__*/ X.createElement(o, K({
		className: G(r.root, r[`color${On(c.color || "primary")}`], i, c.disabled && r.disabled, c.error && r.error, c.filled && r.filled, c.focused && r.focused, c.required && r.required),
		ref: t
	}, s), n, c.required && /*#__PURE__*/ X.createElement("span", {
		"aria-hidden": !0,
		className: G(r.asterisk, c.error && r.error)
	}, " ", "*"));
}), mc = Y(fc, { name: "MuiFormLabel" })(pc);
J(), Xe();
function hc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = He(), r = B({
		theme: n,
		name: "MuiUseMediaQuery",
		props: {}
	}), i = typeof e == "function" ? e(n) : e;
	i = i.replace(/^@media( ?)/m, "");
	var a = typeof window < "u" && window.matchMedia !== void 0, o = K({}, r, t), s = o.defaultMatches, c = s === void 0 ? !1 : s, l = o.matchMedia, u = l === void 0 ? a ? window.matchMedia : null : l, d = o.noSsr, f = d === void 0 ? !1 : d, p = o.ssrMatchMedia, m = p === void 0 ? null : p, h = X.useState(function() {
		return f && a ? u(i).matches : m ? m(i).matches : c;
	}), g = h[0], _ = h[1];
	return X.useEffect(function() {
		var e = !0;
		if (a) {
			var t = u(i), n = function() {
				e && _(t.matches);
			};
			return n(), t.addListener(n), function() {
				e = !1, t.removeListener(n);
			};
		}
	}, [
		i,
		u,
		a
	]), g;
}
J(), Nt(), Xe();
var gc = typeof window > "u" ? X.useEffect : X.useLayoutEffect, _c = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	return function(t) {
		var n = e.withTheme, r = n === void 0 ? !1 : n, i = e.noSSR, a = i === void 0 ? !1 : i, o = e.initialWidth;
		function s(e) {
			var n = Yt(), i = e.theme || n, s = B({
				theme: i,
				name: "MuiWithWidth",
				props: K({}, e)
			}), c = s.initialWidth, l = s.width, u = _(s, ["initialWidth", "width"]), d = X.useState(!1), f = d[0], p = d[1];
			gc(function() {
				p(!0);
			}, []);
			var m = i.breakpoints.keys.slice().reverse().reduce(function(e, t) {
				var n = hc(i.breakpoints.up(t));
				return !e && n ? t : e;
			}, null), h = K({ width: l || (f || a ? m : void 0) || c || o }, r ? { theme: i } : {}, u);
			return h.width === void 0 ? null : /*#__PURE__*/ X.createElement(t, h);
		}
		return (0, ur.default)(s, t), s;
	};
};
J(), Nt(), tt(), q();
var vc = function(e) {
	var t = e.palette.type === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
	return {
		root: { position: "relative" },
		formControl: { "label + &": { marginTop: 16 } },
		focused: {},
		disabled: {},
		colorSecondary: { "&$underline:after": { borderBottomColor: e.palette.secondary.main } },
		underline: {
			"&:after": {
				borderBottom: `2px solid ${e.palette.primary.main}`,
				left: 0,
				bottom: 0,
				content: "\"\"",
				position: "absolute",
				right: 0,
				transform: "scaleX(0)",
				transition: e.transitions.create("transform", {
					duration: e.transitions.duration.shorter,
					easing: e.transitions.easing.easeOut
				}),
				pointerEvents: "none"
			},
			"&$focused:after": { transform: "scaleX(1)" },
			"&$error:after": {
				borderBottomColor: e.palette.error.main,
				transform: "scaleX(1)"
			},
			"&:before": {
				borderBottom: `1px solid ${t}`,
				left: 0,
				bottom: 0,
				content: "\"\\00a0\"",
				position: "absolute",
				right: 0,
				transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }),
				pointerEvents: "none"
			},
			"&:hover:not($disabled):before": {
				borderBottom: `2px solid ${e.palette.text.primary}`,
				"@media (hover: none)": { borderBottom: `1px solid ${t}` }
			},
			"&$disabled:before": { borderBottomStyle: "dotted" }
		},
		error: {},
		marginDense: {},
		multiline: {},
		fullWidth: {},
		input: {},
		inputMarginDense: {},
		inputMultiline: {},
		inputTypeSearch: {}
	};
}, yc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.disableUnderline, r = e.classes, i = e.fullWidth, a = i === void 0 ? !1 : i, o = e.inputComponent, s = o === void 0 ? "input" : o, c = e.multiline, l = c === void 0 ? !1 : c, u = e.type, d = u === void 0 ? "text" : u, f = _(e, [
		"disableUnderline",
		"classes",
		"fullWidth",
		"inputComponent",
		"multiline",
		"type"
	]);
	return /*#__PURE__*/ X.createElement(nc, K({
		classes: K({}, r, {
			root: G(r.root, !n && r.underline),
			underline: null
		}),
		fullWidth: a,
		inputComponent: s,
		multiline: l,
		ref: t,
		type: d
	}, f));
});
yc.muiName = "Input";
var bc = Y(vc, { name: "MuiInput" })(yc);
J(), Nt(), tt(), q();
var xc = {
	root: {
		display: "flex",
		height: "0.01em",
		maxHeight: "2em",
		alignItems: "center",
		whiteSpace: "nowrap"
	},
	filled: { "&$positionStart:not($hiddenLabel)": { marginTop: 16 } },
	positionStart: { marginRight: 8 },
	positionEnd: { marginLeft: 8 },
	disablePointerEvents: { pointerEvents: "none" },
	hiddenLabel: {},
	marginDense: {}
}, Sc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.component, o = a === void 0 ? "div" : a, s = e.disablePointerEvents, c = s === void 0 ? !1 : s, l = e.disableTypography, u = l === void 0 ? !1 : l, d = e.position, f = e.variant, p = _(e, [
		"children",
		"classes",
		"className",
		"component",
		"disablePointerEvents",
		"disableTypography",
		"position",
		"variant"
	]), m = ps() || {}, h = f;
	return f && m.variant, m && !h && (h = m.variant), /*#__PURE__*/ X.createElement(fs.Provider, { value: null }, /*#__PURE__*/ X.createElement(o, K({
		className: G(r.root, i, d === "end" ? r.positionEnd : r.positionStart, c && r.disablePointerEvents, m.hiddenLabel && r.hiddenLabel, h === "filled" && r.filled, m.margin === "dense" && r.marginDense),
		ref: t
	}, p), typeof n == "string" && !u ? /*#__PURE__*/ X.createElement(Ln, { color: "textSecondary" }, n) : n));
}), Cc = Y(xc, { name: "MuiInputAdornment" })(Sc);
J(), Nt(), tt(), q();
var wc = function(e) {
	return {
		root: {
			display: "block",
			transformOrigin: "top left"
		},
		focused: {},
		disabled: {},
		error: {},
		required: {},
		asterisk: {},
		formControl: {
			position: "absolute",
			left: 0,
			top: 0,
			transform: "translate(0, 24px) scale(1)"
		},
		marginDense: { transform: "translate(0, 21px) scale(1)" },
		shrink: {
			transform: "translate(0, 1.5px) scale(0.75)",
			transformOrigin: "top left"
		},
		animated: { transition: e.transitions.create(["color", "transform"], {
			duration: e.transitions.duration.shorter,
			easing: e.transitions.easing.easeOut
		}) },
		filled: {
			zIndex: 1,
			pointerEvents: "none",
			transform: "translate(12px, 20px) scale(1)",
			"&$marginDense": { transform: "translate(12px, 17px) scale(1)" },
			"&$shrink": {
				transform: "translate(12px, 10px) scale(0.75)",
				"&$marginDense": { transform: "translate(12px, 7px) scale(0.75)" }
			}
		},
		outlined: {
			zIndex: 1,
			pointerEvents: "none",
			transform: "translate(14px, 20px) scale(1)",
			"&$marginDense": { transform: "translate(14px, 12px) scale(1)" },
			"&$shrink": { transform: "translate(14px, -6px) scale(0.75)" }
		}
	};
}, Tc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.disableAnimation, a = i === void 0 ? !1 : i;
	e.margin;
	var o = e.shrink;
	e.variant;
	var s = _(e, [
		"classes",
		"className",
		"disableAnimation",
		"margin",
		"shrink",
		"variant"
	]), c = ms(), l = o;
	l === void 0 && c && (l = c.filled || c.focused || c.adornedStart);
	var u = Gs({
		props: e,
		muiFormControl: c,
		states: ["margin", "variant"]
	});
	return /*#__PURE__*/ X.createElement(mc, K({
		"data-shrink": l,
		className: G(n.root, r, c && n.formControl, !a && n.animated, l && n.shrink, u.margin === "dense" && n.marginDense, {
			filled: n.filled,
			outlined: n.outlined
		}[u.variant]),
		classes: {
			focused: n.focused,
			disabled: n.disabled,
			error: n.error,
			required: n.required,
			asterisk: n.asterisk
		},
		ref: t
	}, s));
}), Ec = Y(wc, { name: "MuiInputLabel" })(Tc);
J(), Nt(), tt(), In(), q(), Un();
var Dc = {
	root: {},
	underlineNone: { textDecoration: "none" },
	underlineHover: {
		textDecoration: "none",
		"&:hover": { textDecoration: "underline" }
	},
	underlineAlways: { textDecoration: "underline" },
	button: {
		position: "relative",
		WebkitTapHighlightColor: "transparent",
		backgroundColor: "transparent",
		outline: 0,
		border: 0,
		margin: 0,
		borderRadius: 0,
		padding: 0,
		cursor: "pointer",
		userSelect: "none",
		verticalAlign: "middle",
		"-moz-appearance": "none",
		"-webkit-appearance": "none",
		"&::-moz-focus-inner": { borderStyle: "none" },
		"&$focusVisible": { outline: "auto" }
	},
	focusVisible: {}
}, Oc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.color, a = i === void 0 ? "primary" : i, o = e.component, s = o === void 0 ? "a" : o, c = e.onBlur, l = e.onFocus, u = e.TypographyClasses, d = e.underline, f = d === void 0 ? "hover" : d, p = e.variant, m = p === void 0 ? "inherit" : p, h = _(e, [
		"classes",
		"className",
		"color",
		"component",
		"onBlur",
		"onFocus",
		"TypographyClasses",
		"underline",
		"variant"
	]), g = Vn(), v = g.isFocusVisible, y = g.onBlurVisible, b = g.ref, x = X.useState(!1), S = x[0], C = x[1], w = Hn(t, b);
	return /*#__PURE__*/ X.createElement(Ln, K({
		className: G(n.root, n[`underline${On(f)}`], r, S && n.focusVisible, s === "button" && n.button),
		classes: u,
		color: a,
		component: s,
		onBlur: function(e) {
			S && (y(), C(!1)), c && c(e);
		},
		onFocus: function(e) {
			v(e) && C(!0), l && l(e);
		},
		ref: w,
		variant: m
	}, h));
}), kc = Y(Dc, { name: "MuiLink" })(Oc);
J(), Nt(), tt(), q();
var Ac = function(e) {
	return {
		root: {
			minWidth: 56,
			color: e.palette.action.active,
			flexShrink: 0,
			display: "inline-flex"
		},
		alignItemsFlexStart: { marginTop: 8 }
	};
}, jc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = _(e, ["classes", "className"]), a = X.useContext(zi);
	return /*#__PURE__*/ X.createElement("div", K({
		className: G(n.root, r, a.alignItems === "flex-start" && n.alignItemsFlexStart),
		ref: t
	}, i));
}), Mc = Y(Ac, { name: "MuiListItemIcon" })(jc);
J(), Nt(), tt(), q(), In();
var Nc = function(e) {
	return {
		root: {
			boxSizing: "border-box",
			lineHeight: "48px",
			listStyle: "none",
			color: e.palette.text.secondary,
			fontFamily: e.typography.fontFamily,
			fontWeight: e.typography.fontWeightMedium,
			fontSize: e.typography.pxToRem(14)
		},
		colorPrimary: { color: e.palette.primary.main },
		colorInherit: { color: "inherit" },
		gutters: {
			paddingLeft: 16,
			paddingRight: 16
		},
		inset: { paddingLeft: 72 },
		sticky: {
			position: "sticky",
			top: 0,
			zIndex: 1,
			backgroundColor: "inherit"
		}
	};
}, Pc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.color, a = i === void 0 ? "default" : i, o = e.component, s = o === void 0 ? "li" : o, c = e.disableGutters, l = c === void 0 ? !1 : c, u = e.disableSticky, d = u === void 0 ? !1 : u, f = e.inset, p = f === void 0 ? !1 : f, m = _(e, [
		"classes",
		"className",
		"color",
		"component",
		"disableGutters",
		"disableSticky",
		"inset"
	]);
	return /*#__PURE__*/ X.createElement(s, K({
		className: G(n.root, r, a !== "default" && n[`color${On(a)}`], p && n.inset, !d && n.sticky, !l && n.gutters),
		ref: t
	}, m));
}), Fc = Y(Nc, { name: "MuiListSubheader" })(Pc);
J(), Nt(), Cn(), tt(), Fn(), Tn(), An(), q();
function Ic(e, t) {
	var n = 0;
	return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Lc(e, t) {
	var n = 0;
	return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Rc(e) {
	return [e.horizontal, e.vertical].map(function(e) {
		return typeof e == "number" ? `${e}px` : e;
	}).join(" ");
}
function zc(e, t) {
	for (var n = t, r = 0; n && n !== e;) n = n.parentElement, r += n.scrollTop;
	return r;
}
function Bc(e) {
	return typeof e == "function" ? e() : e;
}
var Vc = {
	root: {},
	paper: {
		position: "absolute",
		overflowY: "auto",
		overflowX: "hidden",
		minWidth: 16,
		minHeight: 16,
		maxWidth: "calc(100% - 32px)",
		maxHeight: "calc(100% - 32px)",
		outline: 0
	}
}, Hc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.action, r = e.anchorEl, i = e.anchorOrigin, a = i === void 0 ? {
		vertical: "top",
		horizontal: "left"
	} : i, o = e.anchorPosition, s = e.anchorReference, c = s === void 0 ? "anchorEl" : s, l = e.children, u = e.classes, d = e.className, f = e.container, p = e.elevation, m = p === void 0 ? 8 : p, h = e.getContentAnchorEl, g = e.marginThreshold, v = g === void 0 ? 16 : g, y = e.onEnter, b = e.onEntered, x = e.onEntering, S = e.onExit, C = e.onExited, w = e.onExiting, T = e.open, E = e.PaperProps, D = E === void 0 ? {} : E, ee = e.transformOrigin, O = ee === void 0 ? {
		vertical: "top",
		horizontal: "left"
	} : ee, k = e.TransitionComponent, A = k === void 0 ? Wt : k, j = e.transitionDuration, M = j === void 0 ? "auto" : j, te = e.TransitionProps, N = te === void 0 ? {} : te, P = _(e, [
		"action",
		"anchorEl",
		"anchorOrigin",
		"anchorPosition",
		"anchorReference",
		"children",
		"classes",
		"className",
		"container",
		"elevation",
		"getContentAnchorEl",
		"marginThreshold",
		"onEnter",
		"onEntered",
		"onEntering",
		"onExit",
		"onExited",
		"onExiting",
		"open",
		"PaperProps",
		"transformOrigin",
		"TransitionComponent",
		"transitionDuration",
		"TransitionProps"
	]), F = X.useRef(), ne = X.useCallback(function(e) {
		if (c === "anchorPosition") return o;
		var t = Bc(r), n = (t && t.nodeType === 1 ? t : Dn(F.current).body).getBoundingClientRect(), i = e === 0 ? a.vertical : "center";
		return {
			top: n.top + Ic(n, i),
			left: n.left + Lc(n, a.horizontal)
		};
	}, [
		r,
		a.horizontal,
		a.vertical,
		o,
		c
	]), I = X.useCallback(function(e) {
		var t = 0;
		if (h && c === "anchorEl") {
			var n = h(e);
			if (n && e.contains(n)) {
				var r = zc(e, n);
				t = n.offsetTop + n.clientHeight / 2 - r || 0;
			}
		}
		return t;
	}, [
		a.vertical,
		c,
		h
	]), re = X.useCallback(function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		return {
			vertical: Ic(e, O.vertical) + t,
			horizontal: Lc(e, O.horizontal)
		};
	}, [O.horizontal, O.vertical]), L = X.useCallback(function(e) {
		var t = I(e), n = {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, i = re(n, t);
		if (c === "none") return {
			top: null,
			left: null,
			transformOrigin: Rc(i)
		};
		var a = ne(t), o = a.top - i.vertical, s = a.left - i.horizontal, l = o + n.height, u = s + n.width, d = $n(Bc(r)), f = d.innerHeight - v, p = d.innerWidth - v;
		if (o < v) {
			var m = o - v;
			o -= m, i.vertical += m;
		} else if (l > f) {
			var h = l - f;
			o -= h, i.vertical += h;
		}
		if (s < v) {
			var g = s - v;
			s -= g, i.horizontal += g;
		} else if (u > p) {
			var _ = u - p;
			s -= _, i.horizontal += _;
		}
		return {
			top: `${Math.round(o)}px`,
			left: `${Math.round(s)}px`,
			transformOrigin: Rc(i)
		};
	}, [
		r,
		c,
		ne,
		I,
		re,
		v
	]), R = X.useCallback(function() {
		var e = F.current;
		if (e) {
			var t = L(e);
			t.top !== null && (e.style.top = t.top), t.left !== null && (e.style.left = t.left), e.style.transformOrigin = t.transformOrigin;
		}
	}, [L]), ie = function(e, t) {
		x && x(e, t), R();
	}, ae = X.useCallback(function(e) {
		F.current = lr.findDOMNode(e);
	}, []);
	X.useEffect(function() {
		T && R();
	}), X.useImperativeHandle(n, function() {
		return T ? { updatePosition: function() {
			R();
		} } : null;
	}, [T, R]), X.useEffect(function() {
		if (T) {
			var e = Gn(function() {
				R();
			});
			return window.addEventListener("resize", e), function() {
				e.clear(), window.removeEventListener("resize", e);
			};
		}
	}, [T, R]);
	var oe = M;
	M === "auto" && !A.muiSupportAuto && (oe = void 0);
	var z = f || (r ? Dn(Bc(r)).body : void 0);
	return /*#__PURE__*/ X.createElement(Ps, K({
		container: z,
		open: T,
		ref: t,
		BackdropProps: { invisible: !0 },
		className: G(u.root, d)
	}, P), /*#__PURE__*/ X.createElement(A, K({
		appear: !0,
		in: T,
		onEnter: y,
		onEntered: b,
		onExit: S,
		onExited: C,
		onExiting: w,
		timeout: oe
	}, N, { onEntering: kn(ie, N.onEntering) }), /*#__PURE__*/ X.createElement(vn, K({
		elevation: m,
		ref: ae
	}, D, { className: G(u.paper, D.className) }), l)));
}), Uc = Y(Vc, { name: "MuiPopover" })(Hc);
J(), Nt(), tt(), q();
var Wc = {
	vertical: "top",
	horizontal: "right"
}, Gc = {
	vertical: "top",
	horizontal: "left"
}, Kc = {
	paper: {
		maxHeight: "calc(100% - 96px)",
		WebkitOverflowScrolling: "touch"
	},
	list: { outline: 0 }
}, qc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.autoFocus, r = n === void 0 ? !0 : n, i = e.children, a = e.classes, o = e.disableAutoFocusItem, s = o === void 0 ? !1 : o, c = e.MenuListProps, l = c === void 0 ? {} : c, u = e.onClose, d = e.onEntering, f = e.open, p = e.PaperProps, m = p === void 0 ? {} : p, h = e.PopoverClasses, g = e.transitionDuration, v = g === void 0 ? "auto" : g, y = e.TransitionProps;
	y = y === void 0 ? {} : y;
	var b = y.onEntering, x = _(y, ["onEntering"]), S = e.variant, C = S === void 0 ? "selectedMenu" : S, w = _(e, [
		"autoFocus",
		"children",
		"classes",
		"disableAutoFocusItem",
		"MenuListProps",
		"onClose",
		"onEntering",
		"open",
		"PaperProps",
		"PopoverClasses",
		"transitionDuration",
		"TransitionProps",
		"variant"
	]), T = Yt(), E = r && !s && f, D = X.useRef(null), ee = X.useRef(null), O = function() {
		return ee.current;
	}, k = function(e, t) {
		D.current && D.current.adjustStyleForScrollbar(e, T), d && d(e, t), b && b(e, t);
	}, A = function(e) {
		e.key === "Tab" && (e.preventDefault(), u && u(e, "tabKeyDown"));
	}, j = -1;
	X.Children.map(i, function(e, t) {
		/*#__PURE__*/ X.isValidElement(e) && (e.props.disabled || (C !== "menu" && e.props.selected || j === -1) && (j = t));
	});
	var M = X.Children.map(i, function(e, t) {
		return t === j ? /*#__PURE__*/ X.cloneElement(e, { ref: function(t) {
			ee.current = lr.findDOMNode(t), Pn(e.ref, t);
		} }) : e;
	});
	return /*#__PURE__*/ X.createElement(Uc, K({
		getContentAnchorEl: O,
		classes: h,
		onClose: u,
		TransitionProps: K({ onEntering: k }, x),
		anchorOrigin: T.direction === "rtl" ? Wc : Gc,
		transformOrigin: T.direction === "rtl" ? Wc : Gc,
		PaperProps: K({}, m, { classes: K({}, m.classes, { root: a.paper }) }),
		open: f,
		ref: t,
		transitionDuration: v
	}, w), /*#__PURE__*/ X.createElement(Yi, K({
		onKeyDown: A,
		actions: D,
		autoFocus: r && (j === -1 || s),
		autoFocusItem: E,
		variant: C
	}, l, { className: G(a.list, l.className) }), M));
}), Jc = Y(Kc, { name: "MuiMenu" })(qc);
J(), Nt(), tt(), In();
var Yc = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.disabled, a = e.IconComponent, o = e.inputRef, s = e.variant, c = s === void 0 ? "standard" : s, l = _(e, [
		"classes",
		"className",
		"disabled",
		"IconComponent",
		"inputRef",
		"variant"
	]);
	return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("select", K({
		className: G(n.root, n.select, n[c], r, i && n.disabled),
		disabled: i,
		ref: o || t
	}, l)), e.multiple ? null : /*#__PURE__*/ X.createElement(a, { className: G(n.icon, n[`icon${On(c)}`], i && n.disabled) }));
}), Xc = Wn(/*#__PURE__*/ X.createElement("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown");
J(), Nt(), q();
var Zc = function(e) {
	return {
		root: {},
		select: {
			"-moz-appearance": "none",
			"-webkit-appearance": "none",
			userSelect: "none",
			borderRadius: 0,
			minWidth: 16,
			cursor: "pointer",
			"&:focus": {
				backgroundColor: e.palette.type === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
				borderRadius: 0
			},
			"&::-ms-expand": { display: "none" },
			"&$disabled": { cursor: "default" },
			"&[multiple]": { height: "auto" },
			"&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: e.palette.background.paper },
			"&&": { paddingRight: 24 }
		},
		filled: { "&&": { paddingRight: 32 } },
		outlined: {
			borderRadius: e.shape.borderRadius,
			"&&": { paddingRight: 32 }
		},
		selectMenu: {
			height: "auto",
			minHeight: "1.1876em",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			overflow: "hidden"
		},
		disabled: {},
		icon: {
			position: "absolute",
			right: 0,
			top: "calc(50% - 12px)",
			pointerEvents: "none",
			color: e.palette.action.active,
			"&$disabled": { color: e.palette.action.disabled }
		},
		iconOpen: { transform: "rotate(180deg)" },
		iconFilled: { right: 7 },
		iconOutlined: { right: 7 },
		nativeInput: {
			bottom: 0,
			left: 0,
			position: "absolute",
			opacity: 0,
			pointerEvents: "none",
			width: "100%"
		}
	};
}, Qc = /*#__PURE__*/ X.createElement(bc, null), $c = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.IconComponent, a = i === void 0 ? Xc : i, o = e.input, s = o === void 0 ? Qc : o, c = e.inputProps;
	e.variant;
	var l = _(e, [
		"children",
		"classes",
		"IconComponent",
		"input",
		"inputProps",
		"variant"
	]), u = Gs({
		props: e,
		muiFormControl: ms(),
		states: ["variant"]
	});
	return /*#__PURE__*/ X.cloneElement(s, K({
		inputComponent: Yc,
		inputProps: K({
			children: n,
			classes: r,
			IconComponent: a,
			variant: u.variant,
			type: void 0
		}, c, s ? s.props.inputProps : {}),
		ref: t
	}, l));
});
$c.muiName = "Select", Y(Zc, { name: "MuiNativeSelect" })($c), se(), J(), Nt(), tt(), q(), In();
var el = function(e) {
	return {
		root: {
			position: "absolute",
			bottom: 0,
			right: 0,
			top: -5,
			left: 0,
			margin: 0,
			padding: "0 8px",
			pointerEvents: "none",
			borderRadius: "inherit",
			borderStyle: "solid",
			borderWidth: 1,
			overflow: "hidden"
		},
		legend: {
			textAlign: "left",
			padding: 0,
			lineHeight: "11px",
			transition: e.transitions.create("width", {
				duration: 150,
				easing: e.transitions.easing.easeOut
			})
		},
		legendLabelled: {
			display: "block",
			width: "auto",
			textAlign: "left",
			padding: 0,
			height: 11,
			fontSize: "0.75em",
			visibility: "hidden",
			maxWidth: .01,
			transition: e.transitions.create("max-width", {
				duration: 50,
				easing: e.transitions.easing.easeOut
			}),
			"& > span": {
				paddingLeft: 5,
				paddingRight: 5,
				display: "inline-block"
			}
		},
		legendNotched: {
			maxWidth: 1e3,
			transition: e.transitions.create("max-width", {
				duration: 100,
				easing: e.transitions.easing.easeOut,
				delay: 50
			})
		}
	};
}, tl = /*#__PURE__*/ X.forwardRef(function(e, t) {
	e.children;
	var n = e.classes, r = e.className, i = e.label, a = e.labelWidth, o = e.notched, s = e.style, c = _(e, [
		"children",
		"classes",
		"className",
		"label",
		"labelWidth",
		"notched",
		"style"
	]), l = Yt().direction === "rtl" ? "right" : "left";
	if (i !== void 0) return /*#__PURE__*/ X.createElement("fieldset", K({
		"aria-hidden": !0,
		className: G(n.root, r),
		ref: t,
		style: s
	}, c), /*#__PURE__*/ X.createElement("legend", { className: G(n.legendLabelled, o && n.legendNotched) }, i ? /*#__PURE__*/ X.createElement("span", null, i) : /*#__PURE__*/ X.createElement("span", { dangerouslySetInnerHTML: { __html: "&#8203;" } })));
	var u = a > 0 ? a * .75 + 8 : .01;
	return /*#__PURE__*/ X.createElement("fieldset", K({
		"aria-hidden": !0,
		style: K(oe({}, `padding${On(l)}`, 8), s),
		className: G(n.root, r),
		ref: t
	}, c), /*#__PURE__*/ X.createElement("legend", {
		className: n.legend,
		style: { width: o ? u : .01 }
	}, /*#__PURE__*/ X.createElement("span", { dangerouslySetInnerHTML: { __html: "&#8203;" } })));
}), nl = Y(el, { name: "PrivateNotchedOutline" })(tl);
J(), Nt(), tt(), q();
var rl = function(e) {
	var t = e.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return {
		root: {
			position: "relative",
			borderRadius: e.shape.borderRadius,
			"&:hover $notchedOutline": { borderColor: e.palette.text.primary },
			"@media (hover: none)": { "&:hover $notchedOutline": { borderColor: t } },
			"&$focused $notchedOutline": {
				borderColor: e.palette.primary.main,
				borderWidth: 2
			},
			"&$error $notchedOutline": { borderColor: e.palette.error.main },
			"&$disabled $notchedOutline": { borderColor: e.palette.action.disabled }
		},
		colorSecondary: { "&$focused $notchedOutline": { borderColor: e.palette.secondary.main } },
		focused: {},
		disabled: {},
		adornedStart: { paddingLeft: 14 },
		adornedEnd: { paddingRight: 14 },
		error: {},
		marginDense: {},
		multiline: {
			padding: "18.5px 14px",
			"&$marginDense": {
				paddingTop: 10.5,
				paddingBottom: 10.5
			}
		},
		notchedOutline: { borderColor: t },
		input: {
			padding: "18.5px 14px",
			"&:-webkit-autofill": {
				WebkitBoxShadow: e.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
				WebkitTextFillColor: e.palette.type === "light" ? null : "#fff",
				caretColor: e.palette.type === "light" ? null : "#fff",
				borderRadius: "inherit"
			}
		},
		inputMarginDense: {
			paddingTop: 10.5,
			paddingBottom: 10.5
		},
		inputMultiline: { padding: 0 },
		inputAdornedStart: { paddingLeft: 0 },
		inputAdornedEnd: { paddingRight: 0 }
	};
}, il = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.fullWidth, i = r === void 0 ? !1 : r, a = e.inputComponent, o = a === void 0 ? "input" : a, s = e.label, c = e.labelWidth, l = c === void 0 ? 0 : c, u = e.multiline, d = u === void 0 ? !1 : u, f = e.notched, p = e.type, m = p === void 0 ? "text" : p, h = _(e, [
		"classes",
		"fullWidth",
		"inputComponent",
		"label",
		"labelWidth",
		"multiline",
		"notched",
		"type"
	]);
	return /*#__PURE__*/ X.createElement(nc, K({
		renderSuffix: function(e) {
			return /*#__PURE__*/ X.createElement(nl, {
				className: n.notchedOutline,
				label: s,
				labelWidth: l,
				notched: f === void 0 ? !!(e.startAdornment || e.filled || e.focused) : f
			});
		},
		classes: K({}, n, {
			root: G(n.root, n.underline),
			notchedOutline: null
		}),
		fullWidth: i,
		inputComponent: o,
		multiline: d,
		ref: t,
		type: m
	}, h));
});
il.muiName = "Input";
var al = Y(rl, { name: "MuiOutlinedInput" })(il);
J(), At(), Nt(), Tt(), tt(), Fn(), In(), Un();
function ol(e, t) {
	return fe(t) === "object" && t !== null ? e === t : String(e) === String(t);
}
function sl(e) {
	return e == null || typeof e == "string" && !e.trim();
}
var cl = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e["aria-label"], r = e.autoFocus, i = e.autoWidth, a = e.children, o = e.classes, s = e.className, c = e.defaultValue, l = e.disabled, u = e.displayEmpty, d = e.IconComponent, f = e.inputRef, p = e.labelId, m = e.MenuProps, h = m === void 0 ? {} : m, g = e.multiple, v = e.name, y = e.onBlur, b = e.onChange, x = e.onClose, S = e.onFocus, C = e.onOpen, w = e.open, T = e.readOnly, E = e.renderValue, D = e.SelectDisplayProps, ee = D === void 0 ? {} : D, O = e.tabIndex;
	e.type;
	var k = e.value, A = e.variant, j = A === void 0 ? "standard" : A, M = _(e, /* @__PURE__ */ "aria-label.autoFocus.autoWidth.children.classes.className.defaultValue.disabled.displayEmpty.IconComponent.inputRef.labelId.MenuProps.multiple.name.onBlur.onChange.onClose.onFocus.onOpen.open.readOnly.renderValue.SelectDisplayProps.tabIndex.type.value.variant".split(".")), te = gt(zn({
		controlled: k,
		default: c,
		name: "Select"
	}), 2), N = te[0], P = te[1], F = X.useRef(null), ne = X.useState(null), I = ne[0], re = ne[1], L = X.useRef(w != null).current, R = X.useState(), ie = R[0], ae = R[1], oe = X.useState(!1), z = oe[0], se = oe[1], ce = Hn(t, f);
	X.useImperativeHandle(ce, function() {
		return {
			focus: function() {
				I.focus();
			},
			node: F.current,
			value: N
		};
	}, [I, N]), X.useEffect(function() {
		r && I && I.focus();
	}, [r, I]), X.useEffect(function() {
		if (I) {
			var e = Dn(I).getElementById(p);
			if (e) {
				var t = function() {
					getSelection().isCollapsed && I.focus();
				};
				return e.addEventListener("click", t), function() {
					e.removeEventListener("click", t);
				};
			}
		}
	}, [p, I]);
	var B = function(e, t) {
		e ? C && C(t) : x && x(t), L || (ae(i ? null : I.clientWidth), se(e));
	}, V = function(e) {
		e.button === 0 && (e.preventDefault(), I.focus(), B(!0, e));
	}, le = function(e) {
		B(!1, e);
	}, ue = X.Children.toArray(a), de = function(e) {
		var t = ue.map(function(e) {
			return e.props.value;
		}).indexOf(e.target.value);
		if (t !== -1) {
			var n = ue[t];
			P(n.props.value), b && b(e, n);
		}
	}, fe = function(e) {
		return function(t) {
			g || B(!1, t);
			var n;
			if (g) {
				n = Array.isArray(N) ? N.slice() : [];
				var r = N.indexOf(e.props.value);
				r === -1 ? n.push(e.props.value) : n.splice(r, 1);
			} else n = e.props.value;
			e.props.onClick && e.props.onClick(t), N !== n && (P(n), b && (t.persist(), Object.defineProperty(t, "target", {
				writable: !0,
				value: {
					value: n,
					name: v
				}
			}), b(t, e)));
		};
	}, H = function(e) {
		T || [
			" ",
			"ArrowUp",
			"ArrowDown",
			"Enter"
		].indexOf(e.key) !== -1 && (e.preventDefault(), B(!0, e));
	}, pe = I !== null && (L ? w : z), me = function(e) {
		!pe && y && (e.persist(), Object.defineProperty(e, "target", {
			writable: !0,
			value: {
				value: N,
				name: v
			}
		}), y(e));
	};
	delete M["aria-invalid"];
	var U, he, ge = [], _e = !1;
	(Zs({ value: N }) || u) && (E ? U = E(N) : _e = !0);
	var ve = ue.map(function(e) {
		if (!/*#__PURE__*/ X.isValidElement(e)) return null;
		var t;
		if (g) {
			if (!Array.isArray(N)) throw Error(at(2));
			t = N.some(function(t) {
				return ol(t, e.props.value);
			}), t && _e && ge.push(e.props.children);
		} else t = ol(N, e.props.value), t && _e && (he = e.props.children);
		return /*#__PURE__*/ X.cloneElement(e, {
			"aria-selected": t ? "true" : void 0,
			onClick: fe(e),
			onKeyUp: function(t) {
				t.key === " " && t.preventDefault(), e.props.onKeyUp && e.props.onKeyUp(t);
			},
			role: "option",
			selected: t,
			value: void 0,
			"data-value": e.props.value
		});
	});
	_e && (U = g ? ge.join(", ") : he);
	var ye = ie;
	!i && L && I && (ye = I.clientWidth);
	var be = O === void 0 ? l ? null : 0 : O, xe = ee.id || (v ? `mui-component-select-${v}` : void 0);
	return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("div", K({
		className: G(o.root, o.select, o.selectMenu, o[j], s, l && o.disabled),
		ref: re,
		tabIndex: be,
		role: "button",
		"aria-disabled": l ? "true" : void 0,
		"aria-expanded": pe ? "true" : void 0,
		"aria-haspopup": "listbox",
		"aria-label": n,
		"aria-labelledby": [p, xe].filter(Boolean).join(" ") || void 0,
		onKeyDown: H,
		onMouseDown: l || T ? null : V,
		onBlur: me,
		onFocus: S
	}, ee, { id: xe }), sl(U) ? /*#__PURE__*/ X.createElement("span", { dangerouslySetInnerHTML: { __html: "&#8203;" } }) : U), /*#__PURE__*/ X.createElement("input", K({
		value: Array.isArray(N) ? N.join(",") : N,
		name: v,
		ref: F,
		"aria-hidden": !0,
		onChange: de,
		tabIndex: -1,
		className: o.nativeInput,
		autoFocus: r
	}, M)), /*#__PURE__*/ X.createElement(d, { className: G(o.icon, o[`icon${On(j)}`], pe && o.iconOpen, l && o.disabled) }), /*#__PURE__*/ X.createElement(Jc, K({
		id: `menu-${v || ""}`,
		anchorEl: I,
		open: pe,
		onClose: le
	}, h, {
		MenuListProps: K({
			"aria-labelledby": p,
			role: "listbox",
			disableListWrap: !0
		}, h.MenuListProps),
		PaperProps: K({}, h.PaperProps, { style: K({ minWidth: ye }, h.PaperProps == null ? null : h.PaperProps.style) })
	}), ve));
});
J(), Nt(), Xe(), q();
var ll = Zc, ul = /*#__PURE__*/ X.createElement(bc, null), dl = /*#__PURE__*/ X.createElement(ac, null), fl = /*#__PURE__*/ X.forwardRef(function e(t, n) {
	var r = t.autoWidth, i = r === void 0 ? !1 : r, a = t.children, o = t.classes, s = t.displayEmpty, c = s === void 0 ? !1 : s, l = t.IconComponent, u = l === void 0 ? Xc : l, d = t.id, f = t.input, p = t.inputProps, m = t.label, h = t.labelId, g = t.labelWidth, v = g === void 0 ? 0 : g, y = t.MenuProps, b = t.multiple, x = b === void 0 ? !1 : b, S = t.native, C = S === void 0 ? !1 : S, w = t.onClose, T = t.onOpen, E = t.open, D = t.renderValue, ee = t.SelectDisplayProps, O = t.variant, k = O === void 0 ? "standard" : O, A = _(t, [
		"autoWidth",
		"children",
		"classes",
		"displayEmpty",
		"IconComponent",
		"id",
		"input",
		"inputProps",
		"label",
		"labelId",
		"labelWidth",
		"MenuProps",
		"multiple",
		"native",
		"onClose",
		"onOpen",
		"open",
		"renderValue",
		"SelectDisplayProps",
		"variant"
	]), j = C ? Yc : cl, M = Gs({
		props: t,
		muiFormControl: ms(),
		states: ["variant"]
	}).variant || k, te = f || {
		standard: ul,
		outlined: /*#__PURE__*/ X.createElement(al, {
			label: m,
			labelWidth: v
		}),
		filled: dl
	}[M];
	return /*#__PURE__*/ X.cloneElement(te, K({
		inputComponent: j,
		inputProps: K({
			children: a,
			IconComponent: u,
			variant: M,
			type: void 0,
			multiple: x
		}, C ? { id: d } : {
			autoWidth: i,
			displayEmpty: c,
			labelId: h,
			MenuProps: y,
			onClose: w,
			onOpen: T,
			open: E,
			renderValue: D,
			SelectDisplayProps: K({ id: d }, ee)
		}, p, { classes: p ? ve({
			baseClasses: o,
			newClasses: p.classes,
			Component: e
		}) : o }, f ? f.props.inputProps : {}),
		ref: n
	}, A));
});
fl.muiName = "Select";
var pl = Y(ll, { name: "MuiSelect" })(fl);
J(), tt(), q();
var ml = function(e) {
	return {
		thumb: { "&$open": { "& $offset": { transform: "scale(1) translateY(-10px)" } } },
		open: {},
		offset: K({ zIndex: 1 }, e.typography.body2, {
			fontSize: e.typography.pxToRem(12),
			lineHeight: 1.2,
			transition: e.transitions.create(["transform"], { duration: e.transitions.duration.shortest }),
			top: -34,
			transformOrigin: "bottom center",
			transform: "scale(0)",
			position: "absolute"
		}),
		circle: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: 32,
			height: 32,
			borderRadius: "50% 50% 50% 0",
			backgroundColor: "currentColor",
			transform: "rotate(-45deg)"
		},
		label: {
			color: e.palette.primary.contrastText,
			transform: "rotate(45deg)"
		}
	};
};
function hl(e) {
	var t = e.children, n = e.classes, r = e.className, i = e.open, a = e.value, o = e.valueLabelDisplay;
	return o === "off" ? t : /*#__PURE__*/ X.cloneElement(t, { className: G(t.props.className, (i || o === "on") && n.open, n.thumb) }, /*#__PURE__*/ X.createElement("span", { className: G(n.offset, r) }, /*#__PURE__*/ X.createElement("span", { className: n.circle }, /*#__PURE__*/ X.createElement("span", { className: n.label }, a))));
}
var gl = Y(ml, { name: "PrivateValueLabel" })(hl);
re(), At(), Nt(), J(), tt(), q(), Bn(), Fn(), Rn(), Un(), In(), tr();
function _l(e, t) {
	return e - t;
}
function vl(e, t, n) {
	return Math.min(Math.max(t, e), n);
}
function yl(e, t) {
	return e.reduce(function(e, n, r) {
		var i = Math.abs(t - n);
		return e === null || i < e.distance || i === e.distance ? {
			distance: i,
			index: r
		} : e;
	}, null).index;
}
function bl(e, t) {
	if (t.current !== void 0 && e.changedTouches) {
		for (var n = 0; n < e.changedTouches.length; n += 1) {
			var r = e.changedTouches[n];
			if (r.identifier === t.current) return {
				x: r.clientX,
				y: r.clientY
			};
		}
		return !1;
	}
	return {
		x: e.clientX,
		y: e.clientY
	};
}
function xl(e, t, n) {
	return (e - t) * 100 / (n - t);
}
function Sl(e, t, n) {
	return (n - t) * e + t;
}
function Cl(e) {
	if (Math.abs(e) < 1) {
		var t = e.toExponential().split("e-"), n = t[0].split(".")[1];
		return (n ? n.length : 0) + parseInt(t[1], 10);
	}
	var r = e.toString().split(".")[1];
	return r ? r.length : 0;
}
function wl(e, t, n) {
	var r = Math.round((e - n) / t) * t + n;
	return Number(r.toFixed(Cl(t)));
}
function Tl(e) {
	var t = e.values, n = e.source, r = e.newValue, i = e.index;
	if (t[i] === r) return n;
	var a = t.slice();
	return a[i] = r, a;
}
function El(e) {
	var t = e.sliderRef, n = e.activeIndex, r = e.setActive;
	(!t.current.contains(document.activeElement) || Number(document.activeElement.getAttribute("data-index")) !== n) && t.current.querySelector(`[role="slider"][data-index="${n}"]`).focus(), r && r(n);
}
var Dl = {
	horizontal: {
		offset: function(e) {
			return { left: `${e}%` };
		},
		leap: function(e) {
			return { width: `${e}%` };
		}
	},
	"horizontal-reverse": {
		offset: function(e) {
			return { right: `${e}%` };
		},
		leap: function(e) {
			return { width: `${e}%` };
		}
	},
	vertical: {
		offset: function(e) {
			return { bottom: `${e}%` };
		},
		leap: function(e) {
			return { height: `${e}%` };
		}
	}
}, Ol = function(e) {
	return e;
}, kl = function(e) {
	return {
		root: {
			height: 2,
			width: "100%",
			boxSizing: "content-box",
			padding: "13px 0",
			display: "inline-block",
			position: "relative",
			cursor: "pointer",
			touchAction: "none",
			color: e.palette.primary.main,
			WebkitTapHighlightColor: "transparent",
			"&$disabled": {
				pointerEvents: "none",
				cursor: "default",
				color: e.palette.grey[400]
			},
			"&$vertical": {
				width: 2,
				height: "100%",
				padding: "0 13px"
			},
			"@media (pointer: coarse)": {
				padding: "20px 0",
				"&$vertical": { padding: "0 20px" }
			},
			"@media print": { colorAdjust: "exact" }
		},
		colorPrimary: {},
		colorSecondary: { color: e.palette.secondary.main },
		marked: {
			marginBottom: 20,
			"&$vertical": {
				marginBottom: "auto",
				marginRight: 20
			}
		},
		vertical: {},
		disabled: {},
		rail: {
			display: "block",
			position: "absolute",
			width: "100%",
			height: 2,
			borderRadius: 1,
			backgroundColor: "currentColor",
			opacity: .38,
			"$vertical &": {
				height: "100%",
				width: 2
			}
		},
		track: {
			display: "block",
			position: "absolute",
			height: 2,
			borderRadius: 1,
			backgroundColor: "currentColor",
			"$vertical &": { width: 2 }
		},
		trackFalse: { "& $track": { display: "none" } },
		trackInverted: {
			"& $track": { backgroundColor: e.palette.type === "light" ? Dt(e.palette.primary.main, .62) : U(e.palette.primary.main, .5) },
			"& $rail": { opacity: 1 }
		},
		thumb: {
			position: "absolute",
			width: 12,
			height: 12,
			marginLeft: -6,
			marginTop: -5,
			boxSizing: "border-box",
			borderRadius: "50%",
			outline: 0,
			backgroundColor: "currentColor",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			transition: e.transitions.create(["box-shadow"], { duration: e.transitions.duration.shortest }),
			"&::after": {
				position: "absolute",
				content: "\"\"",
				borderRadius: "50%",
				left: -15,
				top: -15,
				right: -15,
				bottom: -15
			},
			"&$focusVisible,&:hover": {
				boxShadow: `0px 0px 0px 8px ${Ie(e.palette.primary.main, .16)}`,
				"@media (hover: none)": { boxShadow: "none" }
			},
			"&$active": { boxShadow: `0px 0px 0px 14px ${Ie(e.palette.primary.main, .16)}` },
			"&$disabled": {
				width: 8,
				height: 8,
				marginLeft: -4,
				marginTop: -3,
				"&:hover": { boxShadow: "none" }
			},
			"$vertical &": {
				marginLeft: -5,
				marginBottom: -6
			},
			"$vertical &$disabled": {
				marginLeft: -3,
				marginBottom: -4
			}
		},
		thumbColorPrimary: {},
		thumbColorSecondary: {
			"&$focusVisible,&:hover": { boxShadow: `0px 0px 0px 8px ${Ie(e.palette.secondary.main, .16)}` },
			"&$active": { boxShadow: `0px 0px 0px 14px ${Ie(e.palette.secondary.main, .16)}` }
		},
		active: {},
		focusVisible: {},
		valueLabel: { left: "calc(-50% - 4px)" },
		mark: {
			position: "absolute",
			width: 2,
			height: 2,
			borderRadius: 1,
			backgroundColor: "currentColor"
		},
		markActive: {
			backgroundColor: e.palette.background.paper,
			opacity: .8
		},
		markLabel: K({}, e.typography.body2, {
			color: e.palette.text.secondary,
			position: "absolute",
			top: 26,
			transform: "translateX(-50%)",
			whiteSpace: "nowrap",
			"$vertical &": {
				top: "auto",
				left: 26,
				transform: "translateY(50%)"
			},
			"@media (pointer: coarse)": {
				top: 40,
				"$vertical &": { left: 31 }
			}
		}),
		markLabelActive: { color: e.palette.text.primary }
	};
}, Al = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e["aria-label"], r = e["aria-labelledby"], i = e["aria-valuetext"], a = e.classes, o = e.className, s = e.color, c = s === void 0 ? "primary" : s, l = e.component, u = l === void 0 ? "span" : l, d = e.defaultValue, f = e.disabled, p = f === void 0 ? !1 : f, m = e.getAriaLabel, h = e.getAriaValueText, g = e.marks, v = g === void 0 ? !1 : g, y = e.max, b = y === void 0 ? 100 : y, x = e.min, S = x === void 0 ? 0 : x, C = e.name, w = e.onChange, T = e.onChangeCommitted, E = e.onMouseDown, D = e.orientation, ee = D === void 0 ? "horizontal" : D, O = e.scale, A = O === void 0 ? Ol : O, j = e.step, M = j === void 0 ? 1 : j, te = e.ThumbComponent, N = te === void 0 ? "span" : te, P = e.track, F = P === void 0 ? "normal" : P, ne = e.value, I = e.ValueLabelComponent, re = I === void 0 ? gl : I, L = e.valueLabelDisplay, R = L === void 0 ? "off" : L, ie = e.valueLabelFormat, ae = ie === void 0 ? Ol : ie, oe = _(e, /* @__PURE__ */ "aria-label.aria-labelledby.aria-valuetext.classes.className.color.component.defaultValue.disabled.getAriaLabel.getAriaValueText.marks.max.min.name.onChange.onChangeCommitted.onMouseDown.orientation.scale.step.ThumbComponent.track.value.ValueLabelComponent.valueLabelDisplay.valueLabelFormat".split(".")), z = Yt(), se = X.useRef(), ce = X.useState(-1), B = ce[0], V = ce[1], le = X.useState(-1), ue = le[0], de = le[1], fe = gt(zn({
		controlled: ne,
		default: d,
		name: "Slider"
	}), 2), H = fe[0], pe = fe[1], me = Array.isArray(H), U = me ? H.slice().sort(_l) : [H];
	U = U.map(function(e) {
		return vl(e, S, b);
	});
	var he = v === !0 && M !== null ? k(Array(Math.floor((b - S) / M) + 1)).map(function(e, t) {
		return { value: S + M * t };
	}) : v || [], ge = Vn(), _e = ge.isFocusVisible, ve = ge.onBlurVisible, ye = ge.ref, be = X.useState(-1), xe = be[0], Se = be[1], Ce = X.useRef(), we = Hn(t, Hn(ye, Ce)), Te = Qn(function(e) {
		var t = Number(e.currentTarget.getAttribute("data-index"));
		_e(e) && Se(t), de(t);
	}), Ee = Qn(function() {
		xe !== -1 && (Se(-1), ve()), de(-1);
	}), De = Qn(function(e) {
		de(Number(e.currentTarget.getAttribute("data-index")));
	}), Oe = Qn(function() {
		de(-1);
	}), ke = z.direction === "rtl", Ae = Qn(function(e) {
		var t = Number(e.currentTarget.getAttribute("data-index")), n = U[t], r = (b - S) / 10, i = he.map(function(e) {
			return e.value;
		}), a = i.indexOf(n), o, s = ke ? "ArrowLeft" : "ArrowRight", c = ke ? "ArrowRight" : "ArrowLeft";
		switch (e.key) {
			case "Home":
				o = S;
				break;
			case "End":
				o = b;
				break;
			case "PageUp":
				M && (o = n + r);
				break;
			case "PageDown":
				M && (o = n - r);
				break;
			case s:
			case "ArrowUp":
				o = M ? n + M : i[a + 1] || i[i.length - 1];
				break;
			case c:
			case "ArrowDown":
				o = M ? n - M : i[a - 1] || i[0];
				break;
			default: return;
		}
		if (e.preventDefault(), M && (o = wl(o, M, S)), o = vl(o, S, b), me) {
			var l = o;
			o = Tl({
				values: U,
				source: H,
				newValue: o,
				index: t
			}).sort(_l), El({
				sliderRef: Ce,
				activeIndex: o.indexOf(l)
			});
		}
		pe(o), Se(t), w && w(e, o), T && T(e, o);
	}), je = X.useRef(), Me = ee;
	ke && ee !== "vertical" && (Me += "-reverse");
	var Ne = function(e) {
		var t = e.finger, n = e.move, r = n === void 0 ? !1 : n, i = e.values, a = e.source, o = Ce.current.getBoundingClientRect(), s = o.width, c = o.height, l = o.bottom, u = o.left, d = Me.indexOf("vertical") === 0 ? (l - t.y) / c : (t.x - u) / s;
		Me.indexOf("-reverse") !== -1 && (d = 1 - d);
		var f = Sl(d, S, b);
		if (M) f = wl(f, M, S);
		else {
			var p = he.map(function(e) {
				return e.value;
			});
			f = p[yl(p, f)];
		}
		f = vl(f, S, b);
		var m = 0;
		if (me) {
			m = r ? je.current : yl(i, f);
			var h = f;
			f = Tl({
				values: i,
				source: a,
				newValue: f,
				index: m
			}).sort(_l), m = f.indexOf(h), je.current = m;
		}
		return {
			newValue: f,
			activeIndex: m
		};
	}, Pe = Qn(function(e) {
		var t = bl(e, se);
		if (t) {
			var n = Ne({
				finger: t,
				move: !0,
				values: U,
				source: H
			}), r = n.newValue, i = n.activeIndex;
			El({
				sliderRef: Ce,
				activeIndex: i,
				setActive: V
			}), pe(r), w && w(e, r);
		}
	}), Fe = Qn(function(e) {
		var t = bl(e, se);
		if (t) {
			var n = Ne({
				finger: t,
				values: U,
				source: H
			}).newValue;
			V(-1), e.type === "touchend" && de(-1), T && T(e, n), se.current = void 0;
			var r = Dn(Ce.current);
			r.removeEventListener("mousemove", Pe), r.removeEventListener("mouseup", Fe), r.removeEventListener("touchmove", Pe), r.removeEventListener("touchend", Fe);
		}
	}), Ie = Qn(function(e) {
		e.preventDefault();
		var t = e.changedTouches[0];
		t != null && (se.current = t.identifier);
		var n = Ne({
			finger: bl(e, se),
			values: U,
			source: H
		}), r = n.newValue, i = n.activeIndex;
		El({
			sliderRef: Ce,
			activeIndex: i,
			setActive: V
		}), pe(r), w && w(e, r);
		var a = Dn(Ce.current);
		a.addEventListener("touchmove", Pe), a.addEventListener("touchend", Fe);
	});
	X.useEffect(function() {
		var e = Ce.current;
		e.addEventListener("touchstart", Ie);
		var t = Dn(e);
		return function() {
			e.removeEventListener("touchstart", Ie), t.removeEventListener("mousemove", Pe), t.removeEventListener("mouseup", Fe), t.removeEventListener("touchmove", Pe), t.removeEventListener("touchend", Fe);
		};
	}, [
		Fe,
		Pe,
		Ie
	]);
	var Le = Qn(function(e) {
		E && E(e), e.preventDefault();
		var t = Ne({
			finger: bl(e, se),
			values: U,
			source: H
		}), n = t.newValue, r = t.activeIndex;
		El({
			sliderRef: Ce,
			activeIndex: r,
			setActive: V
		}), pe(n), w && w(e, n);
		var i = Dn(Ce.current);
		i.addEventListener("mousemove", Pe), i.addEventListener("mouseup", Fe);
	}), Re = xl(me ? U[0] : S, S, b), ze = xl(U[U.length - 1], S, b) - Re, Be = K({}, Dl[Me].offset(Re), Dl[Me].leap(ze));
	return /*#__PURE__*/ X.createElement(u, K({
		ref: we,
		className: G(a.root, a[`color${On(c)}`], o, p && a.disabled, he.length > 0 && he.some(function(e) {
			return e.label;
		}) && a.marked, F === !1 && a.trackFalse, ee === "vertical" && a.vertical, F === "inverted" && a.trackInverted),
		onMouseDown: Le
	}, oe), /*#__PURE__*/ X.createElement("span", { className: a.rail }), /*#__PURE__*/ X.createElement("span", {
		className: a.track,
		style: Be
	}), /*#__PURE__*/ X.createElement("input", {
		value: U.join(","),
		name: C,
		type: "hidden"
	}), he.map(function(e, t) {
		var n = xl(e.value, S, b), r = Dl[Me].offset(n), i = F === !1 ? U.indexOf(e.value) !== -1 : F === "normal" && (me ? e.value >= U[0] && e.value <= U[U.length - 1] : e.value <= U[0]) || F === "inverted" && (me ? e.value <= U[0] || e.value >= U[U.length - 1] : e.value >= U[0]);
		return /*#__PURE__*/ X.createElement(X.Fragment, { key: e.value }, /*#__PURE__*/ X.createElement("span", {
			style: r,
			"data-index": t,
			className: G(a.mark, i && a.markActive)
		}), e.label == null ? null : /*#__PURE__*/ X.createElement("span", {
			"aria-hidden": !0,
			"data-index": t,
			style: r,
			className: G(a.markLabel, i && a.markLabelActive)
		}, e.label));
	}), U.map(function(e, t) {
		var o = xl(e, S, b), s = Dl[Me].offset(o);
		return /*#__PURE__*/ X.createElement(re, {
			key: t,
			valueLabelFormat: ae,
			valueLabelDisplay: R,
			className: a.valueLabel,
			value: typeof ae == "function" ? ae(A(e), t) : ae,
			index: t,
			open: ue === t || B === t || R === "on",
			disabled: p
		}, /*#__PURE__*/ X.createElement(N, {
			className: G(a.thumb, a[`thumbColor${On(c)}`], B === t && a.active, p && a.disabled, xe === t && a.focusVisible),
			tabIndex: p ? null : 0,
			role: "slider",
			style: s,
			"data-index": t,
			"aria-label": m ? m(t) : n,
			"aria-labelledby": r,
			"aria-orientation": ee,
			"aria-valuemax": A(b),
			"aria-valuemin": A(S),
			"aria-valuenow": A(e),
			"aria-valuetext": h ? h(A(e), t) : i,
			onKeyDown: Ae,
			onFocus: Te,
			onBlur: Ee,
			onMouseOver: De,
			onMouseLeave: Oe
		}));
	}));
}), jl = Y(kl, { name: "MuiSlider" })(Al);
Nt(), se(), J(), tt(), q(), In();
var Ml = function(e) {
	var t;
	return {
		root: K({}, e.typography.button, (t = {
			maxWidth: 264,
			minWidth: 72,
			position: "relative",
			boxSizing: "border-box",
			minHeight: 48,
			flexShrink: 0,
			padding: "6px 12px"
		}, oe(t, e.breakpoints.up("sm"), { padding: "6px 24px" }), oe(t, "overflow", "hidden"), oe(t, "whiteSpace", "normal"), oe(t, "textAlign", "center"), oe(t, e.breakpoints.up("sm"), { minWidth: 160 }), t)),
		labelIcon: {
			minHeight: 72,
			paddingTop: 9,
			"& $wrapper > *:first-child": { marginBottom: 6 }
		},
		textColorInherit: {
			color: "inherit",
			opacity: .7,
			"&$selected": { opacity: 1 },
			"&$disabled": { opacity: .5 }
		},
		textColorPrimary: {
			color: e.palette.text.secondary,
			"&$selected": { color: e.palette.primary.main },
			"&$disabled": { color: e.palette.text.disabled }
		},
		textColorSecondary: {
			color: e.palette.text.secondary,
			"&$selected": { color: e.palette.secondary.main },
			"&$disabled": { color: e.palette.text.disabled }
		},
		selected: {},
		disabled: {},
		fullWidth: {
			flexShrink: 1,
			flexGrow: 1,
			flexBasis: 0,
			maxWidth: "none"
		},
		wrapped: {
			fontSize: e.typography.pxToRem(12),
			lineHeight: 1.5
		},
		wrapper: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			flexDirection: "column"
		}
	};
}, Nl = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.disabled, a = i === void 0 ? !1 : i, o = e.disableFocusRipple, s = o === void 0 ? !1 : o, c = e.fullWidth, l = e.icon, u = e.indicator, d = e.label, f = e.onChange, p = e.onClick, m = e.onFocus, h = e.selected, g = e.selectionFollowsFocus, v = e.textColor, y = v === void 0 ? "inherit" : v, b = e.value, x = e.wrapped, S = x === void 0 ? !1 : x, C = _(e, [
		"classes",
		"className",
		"disabled",
		"disableFocusRipple",
		"fullWidth",
		"icon",
		"indicator",
		"label",
		"onChange",
		"onClick",
		"onFocus",
		"selected",
		"selectionFollowsFocus",
		"textColor",
		"value",
		"wrapped"
	]);
	return /*#__PURE__*/ X.createElement(Xn, K({
		focusRipple: !s,
		className: G(n.root, n[`textColor${On(y)}`], r, a && n.disabled, h && n.selected, d && l && n.labelIcon, c && n.fullWidth, S && n.wrapped),
		ref: t,
		role: "tab",
		"aria-selected": h,
		disabled: a,
		onClick: function(e) {
			f && f(e, b), p && p(e);
		},
		onFocus: function(e) {
			g && !h && f && f(e, b), m && m(e);
		},
		tabIndex: h ? 0 : -1
	}, C), /*#__PURE__*/ X.createElement("span", { className: n.wrapper }, l, d), u);
}), Pl = Y(Ml, { name: "MuiTab" })(Nl);
J(), Nt(), se(), tt(), q();
var Fl = function(e) {
	return {
		root: {
			position: "relative",
			display: "flex",
			alignItems: "center"
		},
		gutters: oe({
			paddingLeft: e.spacing(2),
			paddingRight: e.spacing(2)
		}, e.breakpoints.up("sm"), {
			paddingLeft: e.spacing(3),
			paddingRight: e.spacing(3)
		}),
		regular: e.mixins.toolbar,
		dense: { minHeight: 48 }
	};
}, Il = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.component, a = i === void 0 ? "div" : i, o = e.disableGutters, s = o === void 0 ? !1 : o, c = e.variant, l = c === void 0 ? "regular" : c, u = _(e, [
		"classes",
		"className",
		"component",
		"disableGutters",
		"variant"
	]);
	return /*#__PURE__*/ X.createElement(a, K({
		className: G(n.root, n[l], r, !s && n.gutters),
		ref: t
	}, u));
}), Ll = Y(Fl, { name: "MuiToolbar" })(Il);
//#endregion
//#region node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js
jn();
var Rl = Wn(/*#__PURE__*/ X.createElement("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft");
//#endregion
//#region node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js
jn();
var zl = Wn(/*#__PURE__*/ X.createElement("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight"), Bl;
function Vl() {
	if (Bl) return Bl;
	var e = document.createElement("div"), t = document.createElement("div");
	return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), Bl = "reverse", e.scrollLeft > 0 ? Bl = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (Bl = "negative")), document.body.removeChild(e), Bl;
}
function Hl(e, t) {
	var n = e.scrollLeft;
	if (t !== "rtl") return n;
	switch (Vl()) {
		case "negative": return e.scrollWidth - e.clientWidth + n;
		case "reverse": return e.scrollWidth - e.clientWidth - n;
		default: return n;
	}
}
//#endregion
//#region node_modules/@material-ui/core/esm/internal/animate.js
function Ul(e) {
	return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Wl(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function() {}, a = r.ease, o = a === void 0 ? Ul : a, s = r.duration, c = s === void 0 ? 300 : s, l = null, u = t[e], d = !1, f = function() {
		d = !0;
	};
	return u === n ? (i(/* @__PURE__ */ Error("Element already at target position")), f) : (requestAnimationFrame(function r(a) {
		if (d) {
			i(/* @__PURE__ */ Error("Animation cancelled"));
			return;
		}
		l === null && (l = a);
		var s = Math.min(1, (a - l) / c);
		if (t[e] = o(s) * (n - u) + u, s >= 1) {
			requestAnimationFrame(function() {
				i(null);
			});
			return;
		}
		requestAnimationFrame(r);
	}), f);
}
J(), Nt(), Cn();
var Gl = {
	width: 99,
	height: 99,
	position: "absolute",
	top: -9999,
	overflow: "scroll"
};
function Kl(e) {
	var t = e.onChange, n = _(e, ["onChange"]), r = X.useRef(), i = X.useRef(null), a = function() {
		r.current = i.current.offsetHeight - i.current.clientHeight;
	};
	return X.useEffect(function() {
		var e = Gn(function() {
			var e = r.current;
			a(), e !== r.current && t(r.current);
		});
		return window.addEventListener("resize", e), function() {
			e.clear(), window.removeEventListener("resize", e);
		};
	}, [t]), X.useEffect(function() {
		a(), t(r.current);
	}, [t]), /*#__PURE__*/ X.createElement("div", K({
		style: Gl,
		ref: i
	}, n));
}
J(), Nt(), tt(), q(), In();
var ql = function(e) {
	return {
		root: {
			position: "absolute",
			height: 2,
			bottom: 0,
			width: "100%",
			transition: e.transitions.create()
		},
		colorPrimary: { backgroundColor: e.palette.primary.main },
		colorSecondary: { backgroundColor: e.palette.secondary.main },
		vertical: {
			height: "100%",
			width: 2,
			right: 0
		}
	};
}, Jl = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.color, a = e.orientation, o = _(e, [
		"classes",
		"className",
		"color",
		"orientation"
	]);
	return /*#__PURE__*/ X.createElement("span", K({
		className: G(n.root, n[`color${On(i)}`], r, a === "vertical" && n.vertical),
		ref: t
	}, o));
}), Yl = Y(ql, { name: "PrivateTabIndicator" })(Jl);
J(), Nt(), tt(), q();
var Xl = {
	root: {
		width: 40,
		flexShrink: 0,
		opacity: .8,
		"&$disabled": { opacity: 0 }
	},
	vertical: {
		width: "100%",
		height: 40,
		"& svg": { transform: "rotate(90deg)" }
	},
	disabled: {}
}, Zl = /*#__PURE__*/ X.createElement(Rl, { fontSize: "small" }), Ql = /*#__PURE__*/ X.createElement(zl, { fontSize: "small" }), $l = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.classes, r = e.className, i = e.direction, a = e.orientation, o = e.disabled, s = _(e, [
		"classes",
		"className",
		"direction",
		"orientation",
		"disabled"
	]);
	return /*#__PURE__*/ X.createElement(Xn, K({
		component: "div",
		className: G(n.root, r, o && n.disabled, a === "vertical" && n.vertical),
		ref: t,
		role: null,
		tabIndex: null
	}, s), i === "left" ? Zl : Ql);
}), eu = Y(Xl, { name: "MuiTabScrollButton" })($l);
J(), Nt(), se(), tt(), Cn(), Tn(), q(), Rn();
var tu = function(e) {
	return {
		root: {
			overflow: "hidden",
			minHeight: 48,
			WebkitOverflowScrolling: "touch",
			display: "flex"
		},
		vertical: { flexDirection: "column" },
		flexContainer: { display: "flex" },
		flexContainerVertical: { flexDirection: "column" },
		centered: { justifyContent: "center" },
		scroller: {
			position: "relative",
			display: "inline-block",
			flex: "1 1 auto",
			whiteSpace: "nowrap"
		},
		fixed: {
			overflowX: "hidden",
			width: "100%"
		},
		scrollable: {
			overflowX: "scroll",
			scrollbarWidth: "none",
			"&::-webkit-scrollbar": { display: "none" }
		},
		scrollButtons: {},
		scrollButtonsDesktop: oe({}, e.breakpoints.down("xs"), { display: "none" }),
		indicator: {}
	};
}, nu = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e["aria-label"], r = e["aria-labelledby"], i = e.action, a = e.centered, o = a === void 0 ? !1 : a, s = e.children, c = e.classes, l = e.className, u = e.component, d = u === void 0 ? "div" : u, f = e.indicatorColor, p = f === void 0 ? "secondary" : f, m = e.onChange, h = e.orientation, g = h === void 0 ? "horizontal" : h, v = e.ScrollButtonComponent, y = v === void 0 ? eu : v, b = e.scrollButtons, x = b === void 0 ? "auto" : b, S = e.selectionFollowsFocus, C = e.TabIndicatorProps, w = C === void 0 ? {} : C, T = e.TabScrollButtonProps, E = e.textColor, D = E === void 0 ? "inherit" : E, ee = e.value, O = e.variant, k = O === void 0 ? "standard" : O, A = _(e, [
		"aria-label",
		"aria-labelledby",
		"action",
		"centered",
		"children",
		"classes",
		"className",
		"component",
		"indicatorColor",
		"onChange",
		"orientation",
		"ScrollButtonComponent",
		"scrollButtons",
		"selectionFollowsFocus",
		"TabIndicatorProps",
		"TabScrollButtonProps",
		"textColor",
		"value",
		"variant"
	]), j = Yt(), M = k === "scrollable", te = j.direction === "rtl", N = g === "vertical", P = N ? "scrollTop" : "scrollLeft", F = N ? "top" : "left", ne = N ? "bottom" : "right", I = N ? "clientHeight" : "clientWidth", re = N ? "height" : "width", L = X.useState(!1), R = L[0], ie = L[1], ae = X.useState({}), z = ae[0], se = ae[1], ce = X.useState({
		start: !1,
		end: !1
	}), B = ce[0], V = ce[1], le = X.useState({
		overflow: "hidden",
		marginBottom: null
	}), ue = le[0], de = le[1], fe = /* @__PURE__ */ new Map(), H = X.useRef(null), pe = X.useRef(null), me = function() {
		var e = H.current, t;
		if (e) {
			var n = e.getBoundingClientRect();
			t = {
				clientWidth: e.clientWidth,
				scrollLeft: e.scrollLeft,
				scrollTop: e.scrollTop,
				scrollLeftNormalized: Hl(e, j.direction),
				scrollWidth: e.scrollWidth,
				top: n.top,
				bottom: n.bottom,
				left: n.left,
				right: n.right
			};
		}
		var r;
		if (e && ee !== !1) {
			var i = pe.current.children;
			if (i.length > 0) {
				var a = i[fe.get(ee)];
				r = a ? a.getBoundingClientRect() : null;
			}
		}
		return {
			tabsMeta: t,
			tabMeta: r
		};
	}, U = Qn(function() {
		var e, t = me(), n = t.tabsMeta, r = t.tabMeta, i = 0;
		if (r && n) if (N) i = r.top - n.top + n.scrollTop;
		else {
			var a = te ? n.scrollLeftNormalized + n.clientWidth - n.scrollWidth : n.scrollLeft;
			i = r.left - n.left + a;
		}
		var o = (e = {}, oe(e, F, i), oe(e, re, r ? r[re] : 0), e);
		if (isNaN(z[F]) || isNaN(z[re])) se(o);
		else {
			var s = Math.abs(z[F] - o[F]), c = Math.abs(z[re] - o[re]);
			(s >= 1 || c >= 1) && se(o);
		}
	}), he = function(e) {
		Wl(P, H.current, e);
	}, ge = function(e) {
		var t = H.current[P];
		N ? t += e : (t += e * (te ? -1 : 1), t *= te && Vl() === "reverse" ? -1 : 1), he(t);
	}, _e = function() {
		ge(-H.current[I]);
	}, ve = function() {
		ge(H.current[I]);
	}, ye = X.useCallback(function(e) {
		de({
			overflow: null,
			marginBottom: -e
		});
	}, []), be = function() {
		var e = {};
		e.scrollbarSizeListener = M ? /*#__PURE__*/ X.createElement(Kl, {
			className: c.scrollable,
			onChange: ye
		}) : null;
		var t = B.start || B.end, n = M && (x === "auto" && t || x === "desktop" || x === "on");
		return e.scrollButtonStart = n ? /*#__PURE__*/ X.createElement(y, K({
			orientation: g,
			direction: te ? "right" : "left",
			onClick: _e,
			disabled: !B.start,
			className: G(c.scrollButtons, x !== "on" && c.scrollButtonsDesktop)
		}, T)) : null, e.scrollButtonEnd = n ? /*#__PURE__*/ X.createElement(y, K({
			orientation: g,
			direction: te ? "left" : "right",
			onClick: ve,
			disabled: !B.end,
			className: G(c.scrollButtons, x !== "on" && c.scrollButtonsDesktop)
		}, T)) : null, e;
	}, xe = Qn(function() {
		var e = me(), t = e.tabsMeta, n = e.tabMeta;
		!n || !t || (n[F] < t[F] ? he(t[P] + (n[F] - t[F])) : n[ne] > t[ne] && he(t[P] + (n[ne] - t[ne])));
	}), Se = Qn(function() {
		if (M && x !== "off") {
			var e = H.current, t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight, i = e.scrollWidth, a = e.clientWidth, o, s;
			if (N) o = t > 1, s = t < n - r - 1;
			else {
				var c = Hl(H.current, j.direction);
				o = te ? c < i - a - 1 : c > 1, s = te ? c > 1 : c < i - a - 1;
			}
			(o !== B.start || s !== B.end) && V({
				start: o,
				end: s
			});
		}
	});
	X.useEffect(function() {
		var e = Gn(function() {
			U(), Se();
		}), t = $n(H.current);
		return t.addEventListener("resize", e), function() {
			e.clear(), t.removeEventListener("resize", e);
		};
	}, [U, Se]);
	var Ce = X.useCallback(Gn(function() {
		Se();
	}));
	X.useEffect(function() {
		return function() {
			Ce.clear();
		};
	}, [Ce]), X.useEffect(function() {
		ie(!0);
	}, []), X.useEffect(function() {
		U(), Se();
	}), X.useEffect(function() {
		xe();
	}, [xe, z]), X.useImperativeHandle(i, function() {
		return {
			updateIndicator: U,
			updateScrollButtons: Se
		};
	}, [U, Se]);
	var we = /*#__PURE__*/ X.createElement(Yl, K({
		className: c.indicator,
		orientation: g,
		color: p
	}, w, { style: K({}, z, w.style) })), Te = 0, Ee = X.Children.map(s, function(e) {
		if (!/*#__PURE__*/ X.isValidElement(e)) return null;
		var t = e.props.value === void 0 ? Te : e.props.value;
		fe.set(t, Te);
		var n = t === ee;
		return Te += 1, /*#__PURE__*/ X.cloneElement(e, {
			fullWidth: k === "fullWidth",
			indicator: n && !R && we,
			selected: n,
			selectionFollowsFocus: S,
			onChange: m,
			textColor: D,
			value: t
		});
	}), De = function(e) {
		var t = e.target;
		if (t.getAttribute("role") === "tab") {
			var n = null, r = g === "vertical" ? "ArrowUp" : "ArrowLeft", i = g === "vertical" ? "ArrowDown" : "ArrowRight";
			switch (g !== "vertical" && j.direction === "rtl" && (r = "ArrowRight", i = "ArrowLeft"), e.key) {
				case r:
					n = t.previousElementSibling || pe.current.lastChild;
					break;
				case i:
					n = t.nextElementSibling || pe.current.firstChild;
					break;
				case "Home":
					n = pe.current.firstChild;
					break;
				case "End":
					n = pe.current.lastChild;
					break;
				default: break;
			}
			n !== null && (n.focus(), e.preventDefault());
		}
	}, Oe = be();
	return /*#__PURE__*/ X.createElement(d, K({
		className: G(c.root, l, N && c.vertical),
		ref: t
	}, A), Oe.scrollButtonStart, Oe.scrollbarSizeListener, /*#__PURE__*/ X.createElement("div", {
		className: G(c.scroller, M ? c.scrollable : c.fixed),
		style: ue,
		ref: H,
		onScroll: Ce
	}, /*#__PURE__*/ X.createElement("div", {
		"aria-label": n,
		"aria-labelledby": r,
		className: G(c.flexContainer, N && c.flexContainerVertical, o && !M && c.centered),
		onKeyDown: De,
		ref: pe,
		role: "tablist"
	}, Ee), R && we), Oe.scrollButtonEnd);
}), ru = Y(tu, { name: "MuiTabs" })(nu);
J(), Nt(), tt(), q();
var iu = {
	standard: bc,
	filled: ac,
	outlined: al
}, au = { root: {} }, ou = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.autoComplete, r = e.autoFocus, i = r === void 0 ? !1 : r, a = e.children, o = e.classes, s = e.className, c = e.color, l = c === void 0 ? "primary" : c, u = e.defaultValue, d = e.disabled, f = d === void 0 ? !1 : d, p = e.error, m = p === void 0 ? !1 : p, h = e.FormHelperTextProps, g = e.fullWidth, v = g === void 0 ? !1 : g, y = e.helperText, b = e.hiddenLabel, x = e.id, S = e.InputLabelProps, C = e.inputProps, w = e.InputProps, T = e.inputRef, E = e.label, D = e.multiline, ee = D === void 0 ? !1 : D, O = e.name, k = e.onBlur, A = e.onChange, j = e.onFocus, M = e.placeholder, te = e.required, N = te === void 0 ? !1 : te, P = e.rows, F = e.rowsMax, ne = e.maxRows, I = e.minRows, re = e.select, L = re === void 0 ? !1 : re, R = e.SelectProps, ie = e.type, ae = e.value, oe = e.variant, z = oe === void 0 ? "standard" : oe, se = _(e, /* @__PURE__ */ "autoComplete.autoFocus.children.classes.className.color.defaultValue.disabled.error.FormHelperTextProps.fullWidth.helperText.hiddenLabel.id.InputLabelProps.inputProps.InputProps.inputRef.label.multiline.name.onBlur.onChange.onFocus.placeholder.required.rows.rowsMax.maxRows.minRows.select.SelectProps.type.value.variant".split(".")), ce = {};
	if (z === "outlined" && (S && S.shrink !== void 0 && (ce.notched = S.shrink), E)) {
		var B = S?.required ?? N;
		ce.label = /*#__PURE__*/ X.createElement(X.Fragment, null, E, B && "\xA0*");
	}
	L && ((!R || !R.native) && (ce.id = void 0), ce["aria-describedby"] = void 0);
	var V = y && x ? `${x}-helper-text` : void 0, le = E && x ? `${x}-label` : void 0, ue = iu[z], de = /*#__PURE__*/ X.createElement(ue, K({
		"aria-describedby": V,
		autoComplete: n,
		autoFocus: i,
		defaultValue: u,
		fullWidth: v,
		multiline: ee,
		name: O,
		rows: P,
		rowsMax: F,
		maxRows: ne,
		minRows: I,
		type: ie,
		value: ae,
		id: x,
		inputRef: T,
		onBlur: k,
		onChange: A,
		onFocus: j,
		placeholder: M,
		inputProps: C
	}, ce, w));
	return /*#__PURE__*/ X.createElement(cc, K({
		className: G(o.root, s),
		disabled: f,
		error: m,
		fullWidth: v,
		hiddenLabel: b,
		ref: t,
		required: N,
		color: l,
		variant: z
	}, se), E && /*#__PURE__*/ X.createElement(Ec, K({
		htmlFor: x,
		id: le
	}, S), E), L ? /*#__PURE__*/ X.createElement(pl, K({
		"aria-describedby": V,
		id: x,
		labelId: le,
		value: ae,
		input: de
	}, R), a) : de, y && /*#__PURE__*/ X.createElement(dc, K({ id: V }, h), y));
}), su = Y(au, { name: "MuiTextField" })(ou), cu = qt(), lu = function() {
	return function(e) {
		return /* @__PURE__ */ (0, X.forwardRef)(function(t, n) {
			return /*#__PURE__*/ X.createElement(e, Object.assign({ innerRef: n }, t));
		});
	};
}, uu = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }), "CloseSharp");
})), du = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }), "OpenInNewSharp");
})), fu = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }), "DragIndicatorSharp");
})), pu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dontSetMe = a, e.findInArray = t, e.int = i, e.isFunction = n, e.isNum = r;
	function t(e, t) {
		for (let n = 0, r = e.length; n < r; n++) if (t.apply(t, [
			e[n],
			n,
			e
		])) return e[n];
	}
	function n(e) {
		return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
	}
	function r(e) {
		return typeof e == "number" && !isNaN(e);
	}
	function i(e) {
		return parseInt(e, 10);
	}
	function a(e, t, n) {
		if (e[t]) return /* @__PURE__ */ Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
	}
})), mu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.browserPrefixToKey = r, e.browserPrefixToStyle = i, e.default = void 0, e.getPrefix = n;
	var t = [
		"Moz",
		"Webkit",
		"O",
		"ms"
	];
	function n() {
		var e;
		let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
		if (typeof window > "u") return "";
		let i = (e = window.document) == null || (e = e.documentElement) == null ? void 0 : e.style;
		if (!i || n in i) return "";
		for (let e = 0; e < t.length; e++) if (r(n, t[e]) in i) return t[e];
		return "";
	}
	function r(e, t) {
		return t ? `${t}${a(e)}` : e;
	}
	function i(e, t) {
		return t ? `-${t.toLowerCase()}-${e}` : e;
	}
	function a(e) {
		let t = "", n = !0;
		for (let r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
		return t;
	}
	e.default = n();
})), hu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.addClassName = S, e.addEvent = c, e.addUserSelectStyles = b, e.createCSSTransform = h, e.createSVGTransform = g, e.getTouch = v, e.getTouchIdentifier = y, e.getTranslation = _, e.innerHeight = f, e.innerWidth = p, e.matchesSelector = o, e.matchesSelectorAndParentsTo = s, e.offsetXYFromParent = m, e.outerHeight = u, e.outerWidth = d, e.removeClassName = C, e.removeEvent = l, e.removeUserSelectStyles = x;
	var t = pu(), n = i(mu());
	function r(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (r = function(e) {
			return e ? n : t;
		})(e);
	}
	function i(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = r(t);
		if (n && n.has(e)) return n.get(e);
		var i = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o];
		}
		return i.default = e, n && n.set(e, i), i;
	}
	var a = "";
	function o(e, n) {
		return a ||= (0, t.findInArray)([
			"matches",
			"webkitMatchesSelector",
			"mozMatchesSelector",
			"msMatchesSelector",
			"oMatchesSelector"
		], function(n) {
			return (0, t.isFunction)(e[n]);
		}), (0, t.isFunction)(e[a]) ? e[a](n) : !1;
	}
	function s(e, t, n) {
		let r = e;
		do {
			if (o(r, t)) return !0;
			if (r === n) return !1;
			r = r.parentNode;
		} while (r);
		return !1;
	}
	function c(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		};
		e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
	}
	function l(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		};
		e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
	}
	function u(e) {
		let n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n += (0, t.int)(r.borderTopWidth), n += (0, t.int)(r.borderBottomWidth), n;
	}
	function d(e) {
		let n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n += (0, t.int)(r.borderLeftWidth), n += (0, t.int)(r.borderRightWidth), n;
	}
	function f(e) {
		let n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n -= (0, t.int)(r.paddingTop), n -= (0, t.int)(r.paddingBottom), n;
	}
	function p(e) {
		let n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n -= (0, t.int)(r.paddingLeft), n -= (0, t.int)(r.paddingRight), n;
	}
	function m(e, t, n) {
		let r = t === t.ownerDocument.body ? {
			left: 0,
			top: 0
		} : t.getBoundingClientRect();
		return {
			x: (e.clientX + t.scrollLeft - r.left) / n,
			y: (e.clientY + t.scrollTop - r.top) / n
		};
	}
	function h(e, t) {
		let r = _(e, t, "px");
		return { [(0, n.browserPrefixToKey)("transform", n.default)]: r };
	}
	function g(e, t) {
		return _(e, t, "");
	}
	function _(e, t, n) {
		let { x: r, y: i } = e, a = `translate(${r}${n},${i}${n})`;
		return t && (a = `translate(${`${typeof t.x == "string" ? t.x : t.x + n}`}, ${`${typeof t.y == "string" ? t.y : t.y + n}`})` + a), a;
	}
	function v(e, n) {
		return e.targetTouches && (0, t.findInArray)(e.targetTouches, (e) => n === e.identifier) || e.changedTouches && (0, t.findInArray)(e.changedTouches, (e) => n === e.identifier);
	}
	function y(e) {
		if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	function b(e) {
		if (!e) return;
		let t = e.getElementById("react-draggable-style-el");
		t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(t)), e.body && S(e.body, "react-draggable-transparent-selection");
	}
	function x(e) {
		if (e) try {
			if (e.body && C(e.body, "react-draggable-transparent-selection"), e.selection) e.selection.empty();
			else {
				let t = (e.defaultView || window).getSelection();
				t && t.type !== "Caret" && t.removeAllRanges();
			}
		} catch {}
	}
	function S(e, t) {
		e.classList ? e.classList.add(t) : e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e.className += ` ${t}`);
	}
	function C(e, t) {
		e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
	}
})), gu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.canDragX = a, e.canDragY = o, e.createCoreData = c, e.createDraggableData = l, e.getBoundPosition = r, e.getControlPosition = s, e.snapToGrid = i;
	var t = pu(), n = hu();
	function r(e, r, i) {
		if (!e.props.bounds) return [r, i];
		let { bounds: a } = e.props;
		a = typeof a == "string" ? a : u(a);
		let o = d(e);
		if (typeof a == "string") {
			let { ownerDocument: e } = o, r = e.defaultView, i;
			if (i = a === "parent" ? o.parentNode : e.querySelector(a), !(i instanceof r.HTMLElement)) throw Error("Bounds selector \"" + a + "\" could not find an element.");
			let s = i, c = r.getComputedStyle(o), l = r.getComputedStyle(s);
			a = {
				left: -o.offsetLeft + (0, t.int)(l.paddingLeft) + (0, t.int)(c.marginLeft),
				top: -o.offsetTop + (0, t.int)(l.paddingTop) + (0, t.int)(c.marginTop),
				right: (0, n.innerWidth)(s) - (0, n.outerWidth)(o) - o.offsetLeft + (0, t.int)(l.paddingRight) - (0, t.int)(c.marginRight),
				bottom: (0, n.innerHeight)(s) - (0, n.outerHeight)(o) - o.offsetTop + (0, t.int)(l.paddingBottom) - (0, t.int)(c.marginBottom)
			};
		}
		return (0, t.isNum)(a.right) && (r = Math.min(r, a.right)), (0, t.isNum)(a.bottom) && (i = Math.min(i, a.bottom)), (0, t.isNum)(a.left) && (r = Math.max(r, a.left)), (0, t.isNum)(a.top) && (i = Math.max(i, a.top)), [r, i];
	}
	function i(e, t, n) {
		return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]];
	}
	function a(e) {
		return e.props.axis === "both" || e.props.axis === "x";
	}
	function o(e) {
		return e.props.axis === "both" || e.props.axis === "y";
	}
	function s(e, t, r) {
		let i = typeof t == "number" ? (0, n.getTouch)(e, t) : null;
		if (typeof t == "number" && !i) return null;
		let a = d(r), o = r.props.offsetParent || a.offsetParent || a.ownerDocument.body;
		return (0, n.offsetXYFromParent)(i || e, o, r.props.scale);
	}
	function c(e, n, r) {
		let i = !(0, t.isNum)(e.lastX), a = d(e);
		return i ? {
			node: a,
			deltaX: 0,
			deltaY: 0,
			lastX: n,
			lastY: r,
			x: n,
			y: r
		} : {
			node: a,
			deltaX: n - e.lastX,
			deltaY: r - e.lastY,
			lastX: e.lastX,
			lastY: e.lastY,
			x: n,
			y: r
		};
	}
	function l(e, t) {
		let n = e.props.scale;
		return {
			node: t.node,
			x: e.state.x + t.deltaX / n,
			y: e.state.y + t.deltaY / n,
			deltaX: t.deltaX / n,
			deltaY: t.deltaY / n,
			lastX: e.state.x,
			lastY: e.state.y
		};
	}
	function u(e) {
		return {
			left: e.left,
			top: e.top,
			right: e.right,
			bottom: e.bottom
		};
	}
	function d(e) {
		let t = e.findDOMNode();
		if (!t) throw Error("<DraggableCore>: Unmounted during event!");
		return t;
	}
})), _u = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t() {}
})), vu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = u(W()), n = c(ht()), r = c(kt()), i = hu(), a = gu(), o = pu(), s = c(_u());
	function c(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function l(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (l = function(e) {
			return e ? n : t;
		})(e);
	}
	function u(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = l(t);
		if (n && n.has(e)) return n.get(e);
		var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function d(e, t, n) {
		return t = f(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function f(e) {
		var t = p(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function p(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var m = {
		touch: {
			start: "touchstart",
			move: "touchmove",
			stop: "touchend"
		},
		mouse: {
			start: "mousedown",
			move: "mousemove",
			stop: "mouseup"
		}
	}, h = m.mouse, g = class extends t.Component {
		constructor() {
			super(...arguments), d(this, "dragging", !1), d(this, "lastX", NaN), d(this, "lastY", NaN), d(this, "touchIdentifier", null), d(this, "mounted", !1), d(this, "handleDragStart", (e) => {
				if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0) return !1;
				let t = this.findDOMNode();
				if (!t || !t.ownerDocument || !t.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
				let { ownerDocument: n } = t;
				if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !(0, i.matchesSelectorAndParentsTo)(e.target, this.props.handle, t) || this.props.cancel && (0, i.matchesSelectorAndParentsTo)(e.target, this.props.cancel, t)) return;
				e.type === "touchstart" && e.preventDefault();
				let r = (0, i.getTouchIdentifier)(e);
				this.touchIdentifier = r;
				let o = (0, a.getControlPosition)(e, r, this);
				if (o == null) return;
				let { x: c, y: l } = o, u = (0, a.createCoreData)(this, c, l);
				(0, s.default)("DraggableCore: handleDragStart: %j", u), (0, s.default)("calling", this.props.onStart), !(this.props.onStart(e, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, i.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, i.addEvent)(n, h.move, this.handleDrag), (0, i.addEvent)(n, h.stop, this.handleDragStop));
			}), d(this, "handleDrag", (e) => {
				let t = (0, a.getControlPosition)(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX, t = r - this.lastY;
					if ([e, t] = (0, a.snapToGrid)(this.props.grid, e, t), !e && !t) return;
					n = this.lastX + e, r = this.lastY + t;
				}
				let i = (0, a.createCoreData)(this, n, r);
				if ((0, s.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
					try {
						this.handleDragStop(new MouseEvent("mouseup"));
					} catch {
						let e = document.createEvent("MouseEvents");
						e.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(e);
					}
					return;
				}
				this.lastX = n, this.lastY = r;
			}), d(this, "handleDragStop", (e) => {
				if (!this.dragging) return;
				let t = (0, a.getControlPosition)(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX || 0, t = r - this.lastY || 0;
					[e, t] = (0, a.snapToGrid)(this.props.grid, e, t), n = this.lastX + e, r = this.lastY + t;
				}
				let o = (0, a.createCoreData)(this, n, r);
				if (this.props.onStop(e, o) === !1 || this.mounted === !1) return !1;
				let c = this.findDOMNode();
				c && this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(c.ownerDocument), (0, s.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, s.default)("DraggableCore: Removing handlers"), (0, i.removeEvent)(c.ownerDocument, h.move, this.handleDrag), (0, i.removeEvent)(c.ownerDocument, h.stop, this.handleDragStop));
			}), d(this, "onMouseDown", (e) => (h = m.mouse, this.handleDragStart(e))), d(this, "onMouseUp", (e) => (h = m.mouse, this.handleDragStop(e))), d(this, "onTouchStart", (e) => (h = m.touch, this.handleDragStart(e))), d(this, "onTouchEnd", (e) => (h = m.touch, this.handleDragStop(e)));
		}
		componentDidMount() {
			this.mounted = !0;
			let e = this.findDOMNode();
			e && (0, i.addEvent)(e, m.touch.start, this.onTouchStart, { passive: !1 });
		}
		componentWillUnmount() {
			this.mounted = !1;
			let e = this.findDOMNode();
			if (e) {
				let { ownerDocument: t } = e;
				(0, i.removeEvent)(t, m.mouse.move, this.handleDrag), (0, i.removeEvent)(t, m.touch.move, this.handleDrag), (0, i.removeEvent)(t, m.mouse.stop, this.handleDragStop), (0, i.removeEvent)(t, m.touch.stop, this.handleDragStop), (0, i.removeEvent)(e, m.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(t);
			}
		}
		findDOMNode() {
			var e, t;
			return (e = this.props) != null && e.nodeRef ? (t = this.props) == null || (t = t.nodeRef) == null ? void 0 : t.current : r.default.findDOMNode(this);
		}
		render() {
			return /*#__PURE__*/ t.cloneElement(t.Children.only(this.props.children), {
				onMouseDown: this.onMouseDown,
				onMouseUp: this.onMouseUp,
				onTouchEnd: this.onTouchEnd
			});
		}
	};
	e.default = g, d(g, "displayName", "DraggableCore"), d(g, "propTypes", {
		allowAnyClick: n.default.bool,
		children: n.default.node.isRequired,
		disabled: n.default.bool,
		enableUserSelectHack: n.default.bool,
		offsetParent: function(e, t) {
			if (e[t] && e[t].nodeType !== 1) throw Error("Draggable's offsetParent must be a DOM Node.");
		},
		grid: n.default.arrayOf(n.default.number),
		handle: n.default.string,
		cancel: n.default.string,
		nodeRef: n.default.object,
		onStart: n.default.func,
		onDrag: n.default.func,
		onStop: n.default.func,
		onMouseDown: n.default.func,
		scale: n.default.number,
		className: o.dontSetMe,
		style: o.dontSetMe,
		transform: o.dontSetMe
	}), d(g, "defaultProps", {
		allowAnyClick: !1,
		disabled: !1,
		enableUserSelectHack: !0,
		onStart: function() {},
		onDrag: function() {},
		onStop: function() {},
		onMouseDown: function() {},
		scale: 1
	});
})), yu = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "DraggableCore", {
		enumerable: !0,
		get: function() {
			return l.default;
		}
	}), t.default = void 0;
	var n = p(W()), r = d(ht()), i = d(kt()), a = d((tt(), e(rt))), o = hu(), s = gu(), c = pu(), l = d(vu()), u = d(_u());
	function d(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function f(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (f = function(e) {
			return e ? n : t;
		})(e);
	}
	function p(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = f(t);
		if (n && n.has(e)) return n.get(e);
		var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function m() {
		return m = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, m.apply(this, arguments);
	}
	function h(e, t, n) {
		return t = g(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function g(e) {
		var t = _(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function _(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var v = class extends n.Component {
		static getDerivedStateFromProps(e, t) {
			let { position: n } = e, { prevPropsPosition: r } = t;
			return n && (!r || n.x !== r.x || n.y !== r.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", {
				position: n,
				prevPropsPosition: r
			}), {
				x: n.x,
				y: n.y,
				prevPropsPosition: { ...n }
			}) : null;
		}
		constructor(e) {
			super(e), h(this, "onDragStart", (e, t) => {
				if ((0, u.default)("Draggable: onDragStart: %j", t), this.props.onStart(e, (0, s.createDraggableData)(this, t)) === !1) return !1;
				this.setState({
					dragging: !0,
					dragged: !0
				});
			}), h(this, "onDrag", (e, t) => {
				if (!this.state.dragging) return !1;
				(0, u.default)("Draggable: onDrag: %j", t);
				let n = (0, s.createDraggableData)(this, t), r = {
					x: n.x,
					y: n.y,
					slackX: 0,
					slackY: 0
				};
				if (this.props.bounds) {
					let { x: e, y: t } = r;
					r.x += this.state.slackX, r.y += this.state.slackY;
					let [i, a] = (0, s.getBoundPosition)(this, r.x, r.y);
					r.x = i, r.y = a, r.slackX = this.state.slackX + (e - r.x), r.slackY = this.state.slackY + (t - r.y), n.x = r.x, n.y = r.y, n.deltaX = r.x - this.state.x, n.deltaY = r.y - this.state.y;
				}
				if (this.props.onDrag(e, n) === !1) return !1;
				this.setState(r);
			}), h(this, "onDragStop", (e, t) => {
				if (!this.state.dragging || this.props.onStop(e, (0, s.createDraggableData)(this, t)) === !1) return !1;
				(0, u.default)("Draggable: onDragStop: %j", t);
				let n = {
					dragging: !1,
					slackX: 0,
					slackY: 0
				};
				if (this.props.position) {
					let { x: e, y: t } = this.props.position;
					n.x = e, n.y = t;
				}
				this.setState(n);
			}), this.state = {
				dragging: !1,
				dragged: !1,
				x: e.position ? e.position.x : e.defaultPosition.x,
				y: e.position ? e.position.y : e.defaultPosition.y,
				prevPropsPosition: { ...e.position },
				slackX: 0,
				slackY: 0,
				isElementSVG: !1
			}, e.position && !(e.onDrag || e.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
		}
		componentDidMount() {
			window.SVGElement !== void 0 && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
		}
		componentWillUnmount() {
			this.setState({ dragging: !1 });
		}
		findDOMNode() {
			var e;
			return ((e = this.props) == null || (e = e.nodeRef) == null ? void 0 : e.current) ?? i.default.findDOMNode(this);
		}
		render() {
			let { axis: e, bounds: t, children: r, defaultPosition: i, defaultClassName: c, defaultClassNameDragging: u, defaultClassNameDragged: d, position: f, positionOffset: p, scale: h, ...g } = this.props, _ = {}, v = null, y = !f || this.state.dragging, b = f || i, x = {
				x: (0, s.canDragX)(this) && y ? this.state.x : b.x,
				y: (0, s.canDragY)(this) && y ? this.state.y : b.y
			};
			this.state.isElementSVG ? v = (0, o.createSVGTransform)(x, p) : _ = (0, o.createCSSTransform)(x, p);
			let S = (0, a.default)(r.props.className || "", c, {
				[u]: this.state.dragging,
				[d]: this.state.dragged
			});
			return /*#__PURE__*/ n.createElement(l.default, m({}, g, {
				onStart: this.onDragStart,
				onDrag: this.onDrag,
				onStop: this.onDragStop
			}), /*#__PURE__*/ n.cloneElement(n.Children.only(r), {
				className: S,
				style: {
					...r.props.style,
					..._
				},
				transform: v
			}));
		}
	};
	t.default = v, h(v, "displayName", "Draggable"), h(v, "propTypes", {
		...l.default.propTypes,
		axis: r.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		bounds: r.default.oneOfType([
			r.default.shape({
				left: r.default.number,
				right: r.default.number,
				top: r.default.number,
				bottom: r.default.number
			}),
			r.default.string,
			r.default.oneOf([!1])
		]),
		defaultClassName: r.default.string,
		defaultClassNameDragging: r.default.string,
		defaultClassNameDragged: r.default.string,
		defaultPosition: r.default.shape({
			x: r.default.number,
			y: r.default.number
		}),
		positionOffset: r.default.shape({
			x: r.default.oneOfType([r.default.number, r.default.string]),
			y: r.default.oneOfType([r.default.number, r.default.string])
		}),
		position: r.default.shape({
			x: r.default.number,
			y: r.default.number
		}),
		className: c.dontSetMe,
		style: c.dontSetMe,
		transform: c.dontSetMe
	}), h(v, "defaultProps", {
		...l.default.defaultProps,
		axis: "both",
		bounds: !1,
		defaultClassName: "react-draggable",
		defaultClassNameDragging: "react-draggable-dragging",
		defaultClassNameDragged: "react-draggable-dragged",
		defaultPosition: {
			x: 0,
			y: 0
		},
		scale: 1
	});
})), bu = /* @__PURE__ */ i(((e, t) => {
	var { default: n, DraggableCore: r } = yu();
	t.exports = n, t.exports.default = n, t.exports.DraggableCore = r;
})), xu = /* @__PURE__ */ i(((e) => {
	var t = W(), n = 60103;
	if (e.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
		var r = Symbol.for;
		n = r("react.element"), e.Fragment = r("react.fragment");
	}
	var i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = Object.prototype.hasOwnProperty, o = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function s(e, t, r) {
		var s, c = {}, l = null, u = null;
		for (s in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
		if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: i.current
		};
	}
	e.jsx = s, e.jsxs = s;
})), Su = /* @__PURE__ */ i(((e, t) => {
	t.exports = xu();
})), Cu = /* @__PURE__ */ n(uu()), wu = /* @__PURE__ */ n(du()), Tu = /* @__PURE__ */ n(fu()), Eu = /* @__PURE__ */ n(bu()), Du = Su(), Ou = function() {
	return Ou = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Ou.apply(this, arguments);
}, ku = {
	width: "100%",
	height: "10px",
	top: "0px",
	left: "0px",
	cursor: "row-resize"
}, Au = {
	width: "10px",
	height: "100%",
	top: "0px",
	left: "0px",
	cursor: "col-resize"
}, ju = {
	width: "20px",
	height: "20px",
	position: "absolute",
	zIndex: 1
}, Mu = {
	top: Ou(Ou({}, ku), { top: "-5px" }),
	right: Ou(Ou({}, Au), {
		left: void 0,
		right: "-5px"
	}),
	bottom: Ou(Ou({}, ku), {
		top: void 0,
		bottom: "-5px"
	}),
	left: Ou(Ou({}, Au), { left: "-5px" }),
	topRight: Ou(Ou({}, ju), {
		right: "-10px",
		top: "-10px",
		cursor: "ne-resize"
	}),
	bottomRight: Ou(Ou({}, ju), {
		right: "-10px",
		bottom: "-10px",
		cursor: "se-resize"
	}),
	bottomLeft: Ou(Ou({}, ju), {
		left: "-10px",
		bottom: "-10px",
		cursor: "sw-resize"
	}),
	topLeft: Ou(Ou({}, ju), {
		left: "-10px",
		top: "-10px",
		cursor: "nw-resize"
	})
}, Nu = (0, X.memo)(function(e) {
	var t = e.onResizeStart, n = e.direction, r = e.children, i = e.replaceStyles, a = e.className, o = (0, X.useCallback)(function(e) {
		t(e, n);
	}, [t, n]), s = (0, X.useCallback)(function(e) {
		t(e, n);
	}, [t, n]), c = (0, X.useMemo)(function() {
		return Ou(Ou({
			position: "absolute",
			userSelect: "none"
		}, Mu[n]), i ?? {});
	}, [i, n]);
	return (0, Du.jsx)("div", {
		className: a || void 0,
		style: c,
		onMouseDown: o,
		onTouchStart: s,
		children: r
	});
}), Pu = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Fu = function() {
	return Fu = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Fu.apply(this, arguments);
}, Iu = {
	width: "auto",
	height: "auto"
}, Lu = function(e, t, n) {
	return Math.max(Math.min(e, n), t);
}, Ru = function(e, t, n) {
	var r = Math.round(e / t);
	return r * t + n * (r - 1);
}, zu = function(e, t) {
	return new RegExp(e, "i").test(t);
}, Bu = function(e) {
	return !!(e.touches && e.touches.length);
}, Vu = function(e) {
	return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, Hu = function(e, t, n) {
	n === void 0 && (n = 0);
	var r = t.reduce(function(n, r, i) {
		return Math.abs(r - e) < Math.abs(t[n] - e) ? i : n;
	}, 0), i = Math.abs(t[r] - e);
	return n === 0 || i < n ? t[r] : e;
}, Uu = function(e) {
	return e = e.toString(), e === "auto" || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : `${e}px`;
}, Wu = function(e, t, n, r) {
	if (e && typeof e == "string") {
		if (e.endsWith("px")) return Number(e.replace("px", ""));
		if (e.endsWith("%")) {
			var i = Number(e.replace("%", "")) / 100;
			return t * i;
		}
		if (e.endsWith("vw")) {
			var i = Number(e.replace("vw", "")) / 100;
			return n * i;
		}
		if (e.endsWith("vh")) {
			var i = Number(e.replace("vh", "")) / 100;
			return r * i;
		}
	}
	return e;
}, Gu = function(e, t, n, r, i, a, o) {
	return r = Wu(r, e.width, t, n), i = Wu(i, e.height, t, n), a = Wu(a, e.width, t, n), o = Wu(o, e.height, t, n), {
		maxWidth: r === void 0 ? void 0 : Number(r),
		maxHeight: i === void 0 ? void 0 : Number(i),
		minWidth: a === void 0 ? void 0 : Number(a),
		minHeight: o === void 0 ? void 0 : Number(o)
	};
}, Ku = function(e) {
	return Array.isArray(e) ? e : [e, e];
}, qu = /* @__PURE__ */ "as.ref.style.className.grid.gridGap.snap.bounds.boundsByDirection.size.defaultSize.minWidth.minHeight.maxWidth.maxHeight.lockAspectRatio.lockAspectRatioExtraWidth.lockAspectRatioExtraHeight.enable.handleStyles.handleClasses.handleWrapperStyle.handleWrapperClass.children.onResizeStart.onResize.onResizeStop.handleComponent.scale.resizeRatio.snapGap".split("."), Ju = "__resizable_base__", Yu = function(e) {
	Pu(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.ratio = 1, n.resizable = null, n.parentLeft = 0, n.parentTop = 0, n.resizableLeft = 0, n.resizableRight = 0, n.resizableTop = 0, n.resizableBottom = 0, n.targetLeft = 0, n.targetTop = 0, n.delta = {
			width: 0,
			height: 0
		}, n.appendBase = function() {
			if (!n.resizable || !n.window) return null;
			var e = n.parentNode;
			if (!e) return null;
			var t = n.window.document.createElement("div");
			return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(Ju) : t.className += Ju, e.appendChild(t), t;
		}, n.removeBase = function(e) {
			var t = n.parentNode;
			t && t.removeChild(e);
		}, n.state = {
			isResizing: !1,
			width: n.propsSize?.width ?? "auto",
			height: n.propsSize?.height ?? "auto",
			direction: "right",
			original: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			backgroundStyle: {
				height: "100%",
				width: "100%",
				backgroundColor: "rgba(0,0,0,0)",
				cursor: "auto",
				opacity: 0,
				position: "fixed",
				zIndex: 9999,
				top: "0",
				left: "0",
				bottom: "0",
				right: "0"
			},
			flexBasis: void 0
		}, n.onResizeStart = n.onResizeStart.bind(n), n.onMouseMove = n.onMouseMove.bind(n), n.onMouseUp = n.onMouseUp.bind(n), n;
	}
	return Object.defineProperty(t.prototype, "parentNode", {
		get: function() {
			return this.resizable ? this.resizable.parentNode : null;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(t.prototype, "window", {
		get: function() {
			return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(t.prototype, "propsSize", {
		get: function() {
			return this.props.size || this.props.defaultSize || Iu;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(t.prototype, "size", {
		get: function() {
			var e = 0, t = 0;
			if (this.resizable && this.window) {
				var n = this.resizable.offsetWidth, r = this.resizable.offsetHeight, i = this.resizable.style.position;
				i !== "relative" && (this.resizable.style.position = "relative"), e = this.resizable.style.width === "auto" ? n : this.resizable.offsetWidth, t = this.resizable.style.height === "auto" ? r : this.resizable.offsetHeight, this.resizable.style.position = i;
			}
			return {
				width: e,
				height: t
			};
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(t.prototype, "sizeStyle", {
		get: function() {
			var e = this, t = this.props.size, n = function(t) {
				if (e.state[t] === void 0 || e.state[t] === "auto") return "auto";
				if (e.propsSize && e.propsSize[t] && e.propsSize[t]?.toString().endsWith("%")) {
					if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
					var n = e.getParentSize();
					return `${Number(e.state[t].toString().replace("px", "")) / n[t] * 100}%`;
				}
				return Uu(e.state[t]);
			};
			return {
				width: t && t.width !== void 0 && !this.state.isResizing ? Uu(t.width) : n("width"),
				height: t && t.height !== void 0 && !this.state.isResizing ? Uu(t.height) : n("height")
			};
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype.getParentSize = function() {
		if (!this.parentNode) return this.window ? {
			width: this.window.innerWidth,
			height: this.window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		var e = this.appendBase();
		if (!e) return {
			width: 0,
			height: 0
		};
		var t = !1, n = this.parentNode.style.flexWrap;
		n !== "wrap" && (t = !0, this.parentNode.style.flexWrap = "wrap"), e.style.position = "relative", e.style.minWidth = "100%", e.style.minHeight = "100%";
		var r = {
			width: e.offsetWidth,
			height: e.offsetHeight
		};
		return t && (this.parentNode.style.flexWrap = n), this.removeBase(e), r;
	}, t.prototype.bindEvents = function() {
		this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
			capture: !0,
			passive: !1
		}), this.window.addEventListener("touchend", this.onMouseUp));
	}, t.prototype.unbindEvents = function() {
		this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
	}, t.prototype.componentDidMount = function() {
		if (!(!this.resizable || !this.window)) {
			var e = this.window.getComputedStyle(this.resizable);
			this.setState({
				width: this.state.width || this.size.width,
				height: this.state.height || this.size.height,
				flexBasis: e.flexBasis === "auto" ? void 0 : e.flexBasis
			});
		}
	}, t.prototype.componentWillUnmount = function() {
		this.window && this.unbindEvents();
	}, t.prototype.createSizeForCssProperty = function(e, t) {
		var n = this.propsSize && this.propsSize[t];
		return this.state[t] === "auto" && this.state.original[t] === e && (n === void 0 || n === "auto") ? "auto" : e;
	}, t.prototype.calculateNewMaxFromBoundary = function(e, t) {
		var n = this.props.boundsByDirection, r = this.state.direction, i = n && zu("left", r), a = n && zu("top", r), o, s;
		if (this.props.bounds === "parent") {
			var c = this.parentNode;
			c && (o = i ? this.resizableRight - this.parentLeft : c.offsetWidth + (this.parentLeft - this.resizableLeft), s = a ? this.resizableBottom - this.parentTop : c.offsetHeight + (this.parentTop - this.resizableTop));
		} else this.props.bounds === "window" ? this.window && (o = i ? this.resizableRight : this.window.innerWidth - this.resizableLeft, s = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (o = i ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), s = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
		return o && Number.isFinite(o) && (e = e && e < o ? e : o), s && Number.isFinite(s) && (t = t && t < s ? t : s), {
			maxWidth: e,
			maxHeight: t
		};
	}, t.prototype.calculateNewSizeFromDirection = function(e, t) {
		var n = this.props.scale || 1, r = Ku(this.props.resizeRatio || 1), i = r[0], a = r[1], o = this.state, s = o.direction, c = o.original, l = this.props, u = l.lockAspectRatio, d = l.lockAspectRatioExtraHeight, f = l.lockAspectRatioExtraWidth, p = c.width, m = c.height, h = d || 0, g = f || 0;
		return zu("right", s) && (p = c.width + (e - c.x) * i / n, u && (m = (p - g) / this.ratio + h)), zu("left", s) && (p = c.width - (e - c.x) * i / n, u && (m = (p - g) / this.ratio + h)), zu("bottom", s) && (m = c.height + (t - c.y) * a / n, u && (p = (m - h) * this.ratio + g)), zu("top", s) && (m = c.height - (t - c.y) * a / n, u && (p = (m - h) * this.ratio + g)), {
			newWidth: p,
			newHeight: m
		};
	}, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, n, r) {
		var i = this.props, a = i.lockAspectRatio, o = i.lockAspectRatioExtraHeight, s = i.lockAspectRatioExtraWidth, c = r.width === void 0 ? 10 : r.width, l = n.width === void 0 || n.width < 0 ? e : n.width, u = r.height === void 0 ? 10 : r.height, d = n.height === void 0 || n.height < 0 ? t : n.height, f = o || 0, p = s || 0;
		if (a) {
			var m = (u - f) * this.ratio + p, h = (d - f) * this.ratio + p, g = (c - p) / this.ratio + f, _ = (l - p) / this.ratio + f, v = Math.max(c, m), y = Math.min(l, h), b = Math.max(u, g), x = Math.min(d, _);
			e = Lu(e, v, y), t = Lu(t, b, x);
		} else e = Lu(e, c, l), t = Lu(t, u, d);
		return {
			newWidth: e,
			newHeight: t
		};
	}, t.prototype.setBoundingClientRect = function() {
		var e = 1 / (this.props.scale || 1);
		if (this.props.bounds === "parent") {
			var t = this.parentNode;
			if (t) {
				var n = t.getBoundingClientRect();
				this.parentLeft = n.left * e, this.parentTop = n.top * e;
			}
		}
		if (this.props.bounds && typeof this.props.bounds != "string") {
			var r = this.props.bounds.getBoundingClientRect();
			this.targetLeft = r.left * e, this.targetTop = r.top * e;
		}
		if (this.resizable) {
			var i = this.resizable.getBoundingClientRect(), a = i.left, o = i.top, s = i.right, c = i.bottom;
			this.resizableLeft = a * e, this.resizableRight = s * e, this.resizableTop = o * e, this.resizableBottom = c * e;
		}
	}, t.prototype.onResizeStart = function(e, t) {
		if (!(!this.resizable || !this.window)) {
			var n = 0, r = 0;
			if (e.nativeEvent && Vu(e.nativeEvent) ? (n = e.nativeEvent.clientX, r = e.nativeEvent.clientY) : e.nativeEvent && Bu(e.nativeEvent) && (n = e.nativeEvent.touches[0].clientX, r = e.nativeEvent.touches[0].clientY), !(this.props.onResizeStart && this.resizable && this.props.onResizeStart(e, t, this.resizable) === !1)) {
				this.props.size && (this.props.size.height !== void 0 && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), this.props.size.width !== void 0 && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
				var i, a = this.window.getComputedStyle(this.resizable);
				if (a.flexBasis !== "auto") {
					var o = this.parentNode;
					if (o) {
						var s = this.window.getComputedStyle(o).flexDirection;
						this.flexDir = s.startsWith("row") ? "row" : "column", i = a.flexBasis;
					}
				}
				this.setBoundingClientRect(), this.bindEvents();
				var c = {
					original: {
						x: n,
						y: r,
						width: this.size.width,
						height: this.size.height
					},
					isResizing: !0,
					backgroundStyle: Fu(Fu({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(e.target).cursor || "auto" }),
					direction: t,
					flexBasis: i
				};
				this.setState(c);
			}
		}
	}, t.prototype.onMouseMove = function(e) {
		var t = this;
		if (!(!this.state.isResizing || !this.resizable || !this.window)) {
			if (this.window.TouchEvent && Bu(e)) try {
				e.preventDefault(), e.stopPropagation();
			} catch {}
			var n = this.props, r = n.maxWidth, i = n.maxHeight, a = n.minWidth, o = n.minHeight, s = Bu(e) ? e.touches[0].clientX : e.clientX, c = Bu(e) ? e.touches[0].clientY : e.clientY, l = this.state, u = l.direction, d = l.original, f = l.width, p = l.height, m = this.getParentSize(), h = Gu(m, this.window.innerWidth, this.window.innerHeight, r, i, a, o);
			r = h.maxWidth, i = h.maxHeight, a = h.minWidth, o = h.minHeight;
			var g = this.calculateNewSizeFromDirection(s, c), _ = g.newHeight, v = g.newWidth, y = this.calculateNewMaxFromBoundary(r, i);
			this.props.snap && this.props.snap.x && (v = Hu(v, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (_ = Hu(_, this.props.snap.y, this.props.snapGap));
			var b = this.calculateNewSizeFromAspectRatio(v, _, {
				width: y.maxWidth,
				height: y.maxHeight
			}, {
				width: a,
				height: o
			});
			if (v = b.newWidth, _ = b.newHeight, this.props.grid) {
				var x = Ru(v, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), S = Ru(_, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), C = this.props.snapGap || 0, w = C === 0 || Math.abs(x - v) <= C ? x : v, T = C === 0 || Math.abs(S - _) <= C ? S : _;
				v = w, _ = T;
			}
			var E = {
				width: v - d.width,
				height: _ - d.height
			};
			if (this.delta = E, f && typeof f == "string") {
				if (f.endsWith("%")) {
					var D = v / m.width * 100;
					v = `${D}%`;
				} else if (f.endsWith("vw")) {
					var ee = v / this.window.innerWidth * 100;
					v = `${ee}vw`;
				} else if (f.endsWith("vh")) {
					var O = v / this.window.innerHeight * 100;
					v = `${O}vh`;
				}
			}
			if (p && typeof p == "string") {
				if (p.endsWith("%")) {
					var D = _ / m.height * 100;
					_ = `${D}%`;
				} else if (p.endsWith("vw")) {
					var ee = _ / this.window.innerWidth * 100;
					_ = `${ee}vw`;
				} else if (p.endsWith("vh")) {
					var O = _ / this.window.innerHeight * 100;
					_ = `${O}vh`;
				}
			}
			var k = {
				width: this.createSizeForCssProperty(v, "width"),
				height: this.createSizeForCssProperty(_, "height")
			};
			this.flexDir === "row" ? k.flexBasis = k.width : this.flexDir === "column" && (k.flexBasis = k.height);
			var A = this.state.width !== k.width, j = this.state.height !== k.height, M = this.state.flexBasis !== k.flexBasis, te = A || j || M;
			te && (0, lr.flushSync)(function() {
				t.setState(k);
			}), this.props.onResize && te && this.props.onResize(e, u, this.resizable, E);
		}
	}, t.prototype.onMouseUp = function(e) {
		var t = this.state, n = t.isResizing, r = t.direction;
		t.original, !(!n || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(e, r, this.resizable, this.delta), this.props.size && this.setState({
			width: this.props.size.width ?? "auto",
			height: this.props.size.height ?? "auto"
		}), this.unbindEvents(), this.setState({
			isResizing: !1,
			backgroundStyle: Fu(Fu({}, this.state.backgroundStyle), { cursor: "auto" })
		}));
	}, t.prototype.updateSize = function(e) {
		this.setState({
			width: e.width ?? "auto",
			height: e.height ?? "auto"
		});
	}, t.prototype.renderResizer = function() {
		var e = this, t = this.props, n = t.enable, r = t.handleStyles, i = t.handleClasses, a = t.handleWrapperStyle, o = t.handleWrapperClass, s = t.handleComponent;
		return n ? (0, Du.jsx)("div", {
			className: o,
			style: a,
			children: Object.keys(n).map(function(t) {
				return n[t] === !1 ? null : (0, Du.jsx)(Nu, {
					direction: t,
					onResizeStart: e.onResizeStart,
					replaceStyles: r && r[t],
					className: i && i[t],
					children: s && s[t] ? s[t] : null
				}, t);
			})
		}) : null;
	}, t.prototype.render = function() {
		var e = this, t = Object.keys(this.props).reduce(function(t, n) {
			return qu.indexOf(n) === -1 && (t[n] = e.props[n]), t;
		}, {}), n = Fu(Fu(Fu({
			position: "relative",
			userSelect: this.state.isResizing ? "none" : "auto"
		}, this.props.style), this.sizeStyle), {
			maxWidth: this.props.maxWidth,
			maxHeight: this.props.maxHeight,
			minWidth: this.props.minWidth,
			minHeight: this.props.minHeight,
			boxSizing: "border-box",
			flexShrink: 0
		});
		return this.state.flexBasis && (n.flexBasis = this.state.flexBasis), (0, Du.jsxs)(this.props.as || "div", Fu({
			style: n,
			className: this.props.className
		}, t, {
			ref: function(t) {
				t && (e.resizable = t);
			},
			children: [
				this.state.isResizing && (0, Du.jsx)("div", { style: this.state.backgroundStyle }),
				this.props.children,
				this.renderResizer()
			]
		}));
	}, t.defaultProps = {
		as: "div",
		onResizeStart: function() {},
		onResize: function() {},
		onResizeStop: function() {},
		enable: {
			top: !0,
			right: !0,
			bottom: !0,
			left: !0,
			topRight: !0,
			bottomRight: !0,
			bottomLeft: !0,
			topLeft: !0
		},
		style: {},
		grid: [1, 1],
		gridGap: [0, 0],
		lockAspectRatio: !1,
		lockAspectRatioExtraWidth: 0,
		lockAspectRatioExtraHeight: 0,
		scale: 1,
		resizeRatio: 1,
		snapGap: 0
	}, t;
}(X.PureComponent), Xu = function(e, t) {
	return Xu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	}, Xu(e, t);
};
function Zu(e, t) {
	Xu(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Qu = function() {
	return Qu = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Qu.apply(this, arguments);
};
function $u(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var ed = {
	width: "auto",
	height: "auto",
	display: "inline-block",
	position: "absolute",
	top: 0,
	left: 0
}, td = function(e) {
	return {
		bottom: e,
		bottomLeft: e,
		bottomRight: e,
		left: e,
		right: e,
		top: e,
		topLeft: e,
		topRight: e
	};
}, nd = function(e) {
	Zu(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.resizingPosition = {
			x: 0,
			y: 0
		}, n.offsetFromParent = {
			left: 0,
			top: 0
		}, n.resizableElement = { current: null }, n.originalPosition = {
			x: 0,
			y: 0
		}, n.state = {
			resizing: !1,
			bounds: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			},
			maxWidth: t.maxWidth,
			maxHeight: t.maxHeight
		}, n.onResizeStart = n.onResizeStart.bind(n), n.onResize = n.onResize.bind(n), n.onResizeStop = n.onResizeStop.bind(n), n.onDragStart = n.onDragStart.bind(n), n.onDrag = n.onDrag.bind(n), n.onDragStop = n.onDragStop.bind(n), n.getMaxSizesFromProps = n.getMaxSizesFromProps.bind(n), n;
	}
	return t.prototype.componentDidMount = function() {
		this.updateOffsetFromParent();
		var e = this.offsetFromParent, t = e.left, n = e.top, r = this.getDraggablePosition(), i = r.x, a = r.y;
		this.draggable.setState({
			x: i - t,
			y: a - n
		}), this.forceUpdate();
	}, t.prototype.getDraggablePosition = function() {
		var e = this.draggable.state;
		return {
			x: e.x,
			y: e.y
		};
	}, t.prototype.getParent = function() {
		return this.resizable && this.resizable.parentNode;
	}, t.prototype.getParentSize = function() {
		return this.resizable.getParentSize();
	}, t.prototype.getMaxSizesFromProps = function() {
		return {
			maxWidth: this.props.maxWidth === void 0 ? 2 ** 53 - 1 : this.props.maxWidth,
			maxHeight: this.props.maxHeight === void 0 ? 2 ** 53 - 1 : this.props.maxHeight
		};
	}, t.prototype.getSelfElement = function() {
		return this.resizable && this.resizable.resizable;
	}, t.prototype.getOffsetHeight = function(e) {
		var t = this.props.scale;
		switch (this.props.bounds) {
			case "window": return window.innerHeight / t;
			case "body": return document.body.offsetHeight / t;
			default: return e.offsetHeight;
		}
	}, t.prototype.getOffsetWidth = function(e) {
		var t = this.props.scale;
		switch (this.props.bounds) {
			case "window": return window.innerWidth / t;
			case "body": return document.body.offsetWidth / t;
			default: return e.offsetWidth;
		}
	}, t.prototype.onDragStart = function(e, t) {
		this.props.onDragStart && this.props.onDragStart(e, t);
		var n = this.getDraggablePosition();
		if (this.originalPosition = n, this.props.bounds) {
			var r = this.getParent(), i = this.props.scale, a;
			if (this.props.bounds === "parent") a = r;
			else if (this.props.bounds === "body") {
				var o = r.getBoundingClientRect(), s = o.left, c = o.top, l = document.body.getBoundingClientRect(), u = -(s - r.offsetLeft * i - l.left) / i, d = -(c - r.offsetTop * i - l.top) / i, f = (document.body.offsetWidth - this.resizable.size.width * i) / i + u, p = (document.body.offsetHeight - this.resizable.size.height * i) / i + d;
				return this.setState({ bounds: {
					top: d,
					right: f,
					bottom: p,
					left: u
				} });
			} else if (this.props.bounds === "window") {
				if (!this.resizable) return;
				var m = r.getBoundingClientRect(), h = m.left, g = m.top, _ = -(h - r.offsetLeft * i) / i, v = -(g - r.offsetTop * i) / i, f = (window.innerWidth - this.resizable.size.width * i) / i + _, p = (window.innerHeight - this.resizable.size.height * i) / i + v;
				return this.setState({ bounds: {
					top: v,
					right: f,
					bottom: p,
					left: _
				} });
			} else typeof this.props.bounds == "string" ? a = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
			if (!(!(a instanceof HTMLElement) || !(r instanceof HTMLElement))) {
				var y = a.getBoundingClientRect(), b = y.left, x = y.top, S = r.getBoundingClientRect(), C = S.left, w = S.top, T = (b - C) / i, E = x - w;
				if (this.resizable) {
					this.updateOffsetFromParent();
					var D = this.offsetFromParent;
					this.setState({ bounds: {
						top: E - D.top,
						right: T + (a.offsetWidth - this.resizable.size.width) - D.left / i,
						bottom: E + (a.offsetHeight - this.resizable.size.height) - D.top,
						left: T - D.left / i
					} });
				}
			}
		}
	}, t.prototype.onDrag = function(e, t) {
		if (this.props.onDrag) {
			var n = this.offsetFromParent, r = n.left, i = n.top;
			if (!this.props.dragAxis || this.props.dragAxis === "both") return this.props.onDrag(e, Qu(Qu({}, t), {
				x: t.x + r,
				y: t.y + i
			}));
			if (this.props.dragAxis === "x") return this.props.onDrag(e, Qu(Qu({}, t), {
				x: t.x + r,
				y: this.originalPosition.y + i,
				deltaY: 0
			}));
			if (this.props.dragAxis === "y") return this.props.onDrag(e, Qu(Qu({}, t), {
				x: this.originalPosition.x + r,
				y: t.y + i,
				deltaX: 0
			}));
		}
	}, t.prototype.onDragStop = function(e, t) {
		if (this.props.onDragStop) {
			var n = this.offsetFromParent, r = n.left, i = n.top;
			if (!this.props.dragAxis || this.props.dragAxis === "both") return this.props.onDragStop(e, Qu(Qu({}, t), {
				x: t.x + r,
				y: t.y + i
			}));
			if (this.props.dragAxis === "x") return this.props.onDragStop(e, Qu(Qu({}, t), {
				x: t.x + r,
				y: this.originalPosition.y + i,
				deltaY: 0
			}));
			if (this.props.dragAxis === "y") return this.props.onDragStop(e, Qu(Qu({}, t), {
				x: this.originalPosition.x + r,
				y: t.y + i,
				deltaX: 0
			}));
		}
	}, t.prototype.onResizeStart = function(e, t, n) {
		e.stopPropagation(), this.setState({ resizing: !0 });
		var r = this.props.scale, i = this.offsetFromParent, a = this.getDraggablePosition();
		if (this.resizingPosition = {
			x: a.x + i.left,
			y: a.y + i.top
		}, this.originalPosition = a, this.props.bounds) {
			var o = this.getParent(), s = void 0;
			this.props.bounds === "parent" ? s = o : this.props.bounds === "body" ? s = document.body : this.props.bounds === "window" ? s = window : typeof this.props.bounds == "string" ? s = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (s = this.props.bounds);
			var c = this.getSelfElement();
			if (c instanceof Element && (s instanceof HTMLElement || s === window) && o instanceof HTMLElement) {
				var l = this.getMaxSizesFromProps(), u = l.maxWidth, d = l.maxHeight, f = this.getParentSize();
				if (u && typeof u == "string") if (u.endsWith("%")) {
					var p = Number(u.replace("%", "")) / 100;
					u = f.width * p;
				} else u.endsWith("px") && (u = Number(u.replace("px", "")));
				if (d && typeof d == "string") if (d.endsWith("%")) {
					var p = Number(d.replace("%", "")) / 100;
					d = f.height * p;
				} else d.endsWith("px") && (d = Number(d.replace("px", "")));
				var m = c.getBoundingClientRect(), h = m.left, g = m.top, _ = this.props.bounds === "window" ? {
					left: 0,
					top: 0
				} : s.getBoundingClientRect(), v = _.left, y = _.top, b = this.getOffsetWidth(s), x = this.getOffsetHeight(s), S = t.toLowerCase().endsWith("left"), C = t.toLowerCase().endsWith("right"), w = t.startsWith("top"), T = t.startsWith("bottom");
				if ((S || w) && this.resizable) {
					var E = (h - v) / r + this.resizable.size.width;
					this.setState({ maxWidth: E > Number(u) ? u : E });
				}
				if (C || this.props.lockAspectRatio && !S && !w) {
					var E = b + (v - h) / r;
					this.setState({ maxWidth: E > Number(u) ? u : E });
				}
				if ((w || S) && this.resizable) {
					var E = (g - y) / r + this.resizable.size.height;
					this.setState({ maxHeight: E > Number(d) ? d : E });
				}
				if (T || this.props.lockAspectRatio && !w && !S) {
					var E = x + (y - g) / r;
					this.setState({ maxHeight: E > Number(d) ? d : E });
				}
			}
		} else this.setState({
			maxWidth: this.props.maxWidth,
			maxHeight: this.props.maxHeight
		});
		this.props.onResizeStart && this.props.onResizeStart(e, t, n);
	}, t.prototype.onResize = function(e, t, n, r) {
		var i = this, a = {
			x: this.originalPosition.x,
			y: this.originalPosition.y
		}, o = -r.width, s = -r.height;
		[
			"top",
			"left",
			"topLeft",
			"bottomLeft",
			"topRight"
		].includes(t) && (t === "bottomLeft" ? a.x += o : (t === "topRight" || (a.x += o), a.y += s));
		var c = this.draggable.state;
		(a.x !== c.x || a.y !== c.y) && (0, lr.flushSync)(function() {
			i.draggable.setState(a);
		}), this.updateOffsetFromParent();
		var l = this.offsetFromParent, u = this.getDraggablePosition().x + l.left, d = this.getDraggablePosition().y + l.top;
		this.resizingPosition = {
			x: u,
			y: d
		}, this.props.onResize && this.props.onResize(e, t, n, r, {
			x: u,
			y: d
		});
	}, t.prototype.onResizeStop = function(e, t, n, r) {
		this.setState({ resizing: !1 });
		var i = this.getMaxSizesFromProps(), a = i.maxWidth, o = i.maxHeight;
		this.setState({
			maxWidth: a,
			maxHeight: o
		}), this.props.onResizeStop && this.props.onResizeStop(e, t, n, r, this.resizingPosition);
	}, t.prototype.updateSize = function(e) {
		this.resizable && this.resizable.updateSize({
			width: e.width,
			height: e.height
		});
	}, t.prototype.updatePosition = function(e) {
		this.draggable.setState(e);
	}, t.prototype.updateOffsetFromParent = function() {
		var e = this.props.scale, t = this.getParent(), n = this.getSelfElement();
		if (!t || n === null) return {
			top: 0,
			left: 0
		};
		var r = t.getBoundingClientRect(), i = r.left, a = r.top, o = n.getBoundingClientRect(), s = this.getDraggablePosition(), c = t.scrollLeft, l = t.scrollTop;
		this.offsetFromParent = {
			left: o.left - i + c - s.x * e,
			top: o.top - a + l - s.y * e
		};
	}, t.prototype.render = function() {
		var e = this, t = this.props, n = t.disableDragging, r = t.style, i = t.dragHandleClassName, a = t.position, o = t.onMouseDown, s = t.onMouseUp, c = t.dragAxis, l = t.dragGrid, u = t.bounds, d = t.enableUserSelectHack, f = t.cancel, p = t.children;
		t.onResizeStart, t.onResize, t.onResizeStop, t.onDragStart, t.onDrag, t.onDragStop;
		var m = t.resizeHandleStyles, h = t.resizeHandleClasses, g = t.resizeHandleComponent, _ = t.enableResizing, v = t.resizeGrid, y = t.resizeHandleWrapperClass, b = t.resizeHandleWrapperStyle, x = t.scale, S = t.allowAnyClick, C = t.dragPositionOffset, w = $u(t, /* @__PURE__ */ "disableDragging.style.dragHandleClassName.position.onMouseDown.onMouseUp.dragAxis.dragGrid.bounds.enableUserSelectHack.cancel.children.onResizeStart.onResize.onResizeStop.onDragStart.onDrag.onDragStop.resizeHandleStyles.resizeHandleClasses.resizeHandleComponent.enableResizing.resizeGrid.resizeHandleWrapperClass.resizeHandleWrapperStyle.scale.allowAnyClick.dragPositionOffset".split(".")), T = this.props.default ? Qu({}, this.props.default) : void 0;
		delete w.default;
		var E = n || i ? { cursor: "auto" } : { cursor: "move" }, D = Qu(Qu(Qu({}, ed), E), r), ee = this.offsetFromParent, O = ee.left, k = ee.top, A;
		a && (A = {
			x: a.x - O,
			y: a.y - k
		});
		var j = this.state.resizing ? void 0 : A, M = this.state.resizing ? "both" : c;
		return (0, X.createElement)(Eu.default, {
			ref: function(t) {
				t && (e.draggable = t);
			},
			handle: i ? `.${i}` : void 0,
			defaultPosition: T,
			onMouseDown: o,
			onMouseUp: s,
			onStart: this.onDragStart,
			onDrag: this.onDrag,
			onStop: this.onDragStop,
			axis: M,
			disabled: n,
			grid: l,
			bounds: u ? this.state.bounds : void 0,
			position: j,
			enableUserSelectHack: d,
			cancel: f,
			scale: x,
			allowAnyClick: S,
			nodeRef: this.resizableElement,
			positionOffset: C
		}, (0, X.createElement)(Yu, Qu({}, w, {
			ref: function(t) {
				t && (e.resizable = t, e.resizableElement.current = t.resizable);
			},
			defaultSize: T,
			size: this.props.size,
			enable: typeof _ == "boolean" ? td(_) : _,
			onResizeStart: this.onResizeStart,
			onResize: this.onResize,
			onResizeStop: this.onResizeStop,
			style: D,
			minWidth: this.props.minWidth,
			minHeight: this.props.minHeight,
			maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth,
			maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight,
			grid: v,
			handleWrapperClass: y,
			handleWrapperStyle: b,
			lockAspectRatio: this.props.lockAspectRatio,
			lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
			lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
			handleStyles: m,
			handleClasses: h,
			handleComponent: g,
			scale: this.props.scale
		}), p));
	}, t.defaultProps = {
		maxWidth: 2 ** 53 - 1,
		maxHeight: 2 ** 53 - 1,
		scale: 1,
		onResizeStart: function() {},
		onResize: function() {},
		onResizeStop: function() {},
		onDragStart: function() {},
		onDrag: function() {},
		onDragStop: function() {}
	}, t;
}(X.PureComponent);
//#endregion
//#region node_modules/mirador/dist/es/src/components/CompanionWindow.js
function rd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function id(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? rd(Object(n), !0).forEach(function(t) {
			ad(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rd(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ad(e, t, n) {
	return (t = ld(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function od(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function sd(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ld(r.key), r);
	}
}
function cd(e, t, n) {
	return t && sd(e.prototype, t), n && sd(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ld(e) {
	var t = ud(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ud(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dd(e, t, n) {
	return t = hd(t), fd(e, md() ? Reflect.construct(t, n || [], hd(e).constructor) : t.apply(e, n));
}
function fd(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return pd(e);
}
function pd(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function md() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (md = function() {
		return !!e;
	})();
}
function hd(e) {
	return hd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, hd(e);
}
function gd(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _d(e, t);
}
function _d(e, t) {
	return _d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, _d(e, t);
}
var vd = /*#__PURE__*/ function(e) {
	function t() {
		return od(this, t), dd(this, t, arguments);
	}
	return gd(t, e), cd(t, [
		{
			key: "openInNewStyle",
			value: function() {
				return this.props.direction === "rtl" ? { transform: "scale(-1, 1)" } : {};
			}
		},
		{
			key: "resizeHandles",
			value: function() {
				var e = this.props, t = e.direction, n = e.position, r = {
					ltr: {
						default: "left",
						opposite: "right"
					},
					rtl: {
						default: "right",
						opposite: "left"
					}
				}, i = {
					bottom: !1,
					bottomLeft: !1,
					bottomRight: !1,
					left: !1,
					right: !1,
					top: !1,
					topLeft: !1,
					topRight: !1
				};
				return n === "right" || n === "far-right" ? id(id({}, i), {}, ad({}, r[t].default, !0)) : n === "left" ? id(id({}, i), {}, ad({}, r[t].opposite, !0)) : n === "bottom" || n === "far-bottom" ? id(id({}, i), {}, { top: !0 }) : i;
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.ariaLabel, n = e.classes, r = e.paperClassName, i = e.onCloseClick, a = e.updateCompanionWindow, o = e.isDisplayed, s = e.position, c = e.t, l = e.title, u = e.children, d = e.titleControls, f = e.size, p = e.defaultSidebarPanelWidth, m = e.defaultSidebarPanelHeight, h = s === "bottom" || s === "far-bottom", g = X.Children.map(u, function(e) {
					return e ? /*#__PURE__*/ X.cloneElement(e, { parentactions: { closeCompanionWindow: i } }) : null;
				});
				return /*#__PURE__*/ X.createElement(vn, {
					className: [
						n.root,
						s === "bottom" ? n.horizontal : n.vertical,
						n[`companionWindow-${s}`],
						rr(`companion-window-${s}`),
						r
					].join(" "),
					style: {
						display: o ? null : "none",
						order: s === "left" ? -1 : null
					},
					square: !0,
					component: "aside",
					"aria-label": t || l
				}, /*#__PURE__*/ X.createElement(nd, {
					className: [n.rnd],
					style: {
						display: "flex",
						position: "relative"
					},
					default: {
						height: h ? m : "100%",
						width: h ? "auto" : p
					},
					disableDragging: !0,
					enableResizing: this.resizeHandles(),
					minHeight: 50,
					minWidth: s === "left" ? 235 : 100
				}, /*#__PURE__*/ X.createElement(Ll, {
					className: [
						n.toolbar,
						n.companionWindowHeader,
						f.width < 370 ? n.small : null,
						rr("companion-window-header")
					].join(" "),
					disableGutters: !0
				}, /*#__PURE__*/ X.createElement(Ln, {
					variant: "h3",
					className: n.windowSideBarTitle
				}, l), s === "left" ? a && /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": c("openInCompanionWindow"),
					onClick: function() {
						a({ position: "right" });
					}
				}, /*#__PURE__*/ X.createElement(wu.default, { style: this.openInNewStyle() })) : /*#__PURE__*/ X.createElement(X.Fragment, null, a && /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": c(s === "bottom" ? "moveCompanionWindowToRight" : "moveCompanionWindowToBottom"),
					className: n.positionButton,
					onClick: function() {
						a({ position: s === "bottom" ? "right" : "bottom" });
					}
				}, /*#__PURE__*/ X.createElement(Tu.default, null)), /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": c("closeCompanionWindow"),
					className: n.closeButton,
					onClick: i
				}, /*#__PURE__*/ X.createElement(Cu.default, null))), d && /*#__PURE__*/ X.createElement("div", { className: [
					n.titleControls,
					h ? n.companionWindowTitleControlsBottom : n.companionWindowTitleControls,
					rr("companion-window-title-controls")
				].join(" ") }, d)), /*#__PURE__*/ X.createElement(vn, {
					className: [n.content, rr("scrollto-scrollable")].join(" "),
					elevation: 0
				}, g)));
			}
		}
	]);
}(X.Component);
vd.defaultProps = {
	ariaLabel: void 0,
	children: void 0,
	defaultSidebarPanelHeight: 201,
	defaultSidebarPanelWidth: 235,
	isDisplayed: !1,
	onCloseClick: function() {},
	paperClassName: "",
	position: null,
	size: {},
	t: function(e) {
		return e;
	},
	title: null,
	titleControls: null,
	updateCompanionWindow: void 0
}, s(), q();
function yd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function bd(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? yd(Object(n), !0).forEach(function(t) {
			xd(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yd(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function xd(e, t, n) {
	return (t = Sd(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Sd(e) {
	var t = Cd(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Cd(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var wd = V(lu(), Ge(), Y(function(e) {
	return {
		closeButton: { order: 4 },
		"companionWindow-bottom": { borderTop: `0.5px solid ${e.palette.divider}` },
		"companionWindow-left": { borderRight: `0.5px solid ${e.palette.divider}` },
		"companionWindow-right": { borderLeft: `0.5px solid ${e.palette.divider}` },
		companionWindowHeader: { flexWrap: "wrap" },
		companionWindowTitleControls: {
			flexGrow: 1,
			order: 1e3
		},
		companionWindowTitleControlsBottom: { order: "unset" },
		content: {
			overflowY: "auto",
			wordBreak: "break-word"
		},
		horizontal: {},
		positionButton: {
			marginLeft: -16,
			order: -100,
			width: 24
		},
		rnd: {
			display: "flex",
			flexDirection: "column",
			minHeight: 0
		},
		root: {
			boxShadow: "none",
			boxSizing: "border-box",
			display: "flex",
			flexDirection: "column",
			minHeight: 0
		},
		small: {},
		titleControls: {
			alignItems: "center",
			display: "flex",
			flexFlow: "row wrap",
			minHeight: 48,
			order: 3
		},
		toolbar: {
			"&$small": {
				"& $closeButton": { order: "unset" },
				"& $titleControls": { order: "unset" }
			},
			alignItems: "flex-start",
			background: e.palette.shades.light,
			justifyContent: "space-between",
			minHeight: "max-content",
			paddingLeft: e.spacing(2)
		},
		vertical: {},
		windowSideBarTitle: bd(bd({}, e.typography.subtitle1), {}, {
			alignSelf: "center",
			flexGrow: 1,
			width: 160
		})
	};
}), (0, cu.withSize)(), Et(function(e, t) {
	var n = t.id, r = t.windowId, i = Le(e, { companionWindowId: n }), a = Be(e, { windowId: r }), o = a.defaultSidebarPanelHeight, s = a.defaultSidebarPanelWidth;
	return bd(bd({}, i), {}, {
		defaultSidebarPanelHeight: o,
		defaultSidebarPanelWidth: s,
		direction: St(e),
		isDisplayed: i && i.content && i.content.length > 0
	});
}, function(e, t) {
	var n = t.windowId, r = t.id;
	return {
		onCloseClick: function() {
			return e(gn(n, r));
		},
		updateCompanionWindow: function() {
			var t = [...arguments];
			return e(mn.apply(_n, [n, r].concat(t)));
		}
	};
}), R("CompanionWindow"))(vd);
//#endregion
//#region node_modules/mirador/dist/es/src/components/WindowSideBarAnnotationsPanel.js
function Td(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ed(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Od(r.key), r);
	}
}
function Dd(e, t, n) {
	return t && Ed(e.prototype, t), n && Ed(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Od(e) {
	var t = kd(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function kd(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ad(e, t, n) {
	return t = Pd(t), jd(e, Nd() ? Reflect.construct(t, n || [], Pd(e).constructor) : t.apply(e, n));
}
function jd(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Md(e);
}
function Md(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Nd() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Nd = function() {
		return !!e;
	})();
}
function Pd(e) {
	return Pd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Pd(e);
}
function Fd(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Id(e, t);
}
function Id(e, t) {
	return Id = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Id(e, t);
}
var Ld = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Td(this, t), n = Ad(this, t, [e]), n.containerRef = /*#__PURE__*/ X.createRef(), n;
	}
	return Fd(t, e), Dd(t, [{
		key: "render",
		value: function() {
			var e = this, t = this.props, n = t.annotationCount, r = t.classes, i = t.canvasIds, a = t.t, o = t.windowId, s = t.id;
			return /*#__PURE__*/ X.createElement(wd, {
				title: a("annotations"),
				paperClassName: rr("window-sidebar-annotation-panel"),
				windowId: o,
				id: s,
				ref: this.containerRef,
				otherRef: this.containerRef,
				titleControls: /*#__PURE__*/ X.createElement(Ri, { windowId: o })
			}, /*#__PURE__*/ X.createElement("div", { className: r.section }, /*#__PURE__*/ X.createElement(Ln, {
				component: "p",
				variant: "subtitle2"
			}, a("showingNumAnnotations", {
				count: n,
				number: n
			}))), i.map(function(t, n) {
				return /*#__PURE__*/ X.createElement(ns, {
					canvasId: t,
					containerRef: e.containerRef,
					key: t,
					index: n,
					totalSize: i.length,
					windowId: o
				});
			}));
		}
	}]);
}(X.Component);
Ld.defaultProps = {
	canvasIds: [],
	t: function(e) {
		return e;
	}
}, s(), q();
var Rd = V(Ge(), Y(function(e) {
	return { section: {
		borderBottom: `.5px solid ${e.palette.section_divider}`,
		paddingBottom: e.spacing(1),
		paddingLeft: e.spacing(2),
		paddingRight: e.spacing(1),
		paddingTop: e.spacing(2)
	} };
}), Et(function(e, t) {
	var n = t.windowId;
	return {
		annotationCount: w(e, { windowId: n }).length,
		canvasIds: Ne(e, { windowId: n })
	};
}, null), R("WindowSideBarAnnotationsPanel"))(Ld), zd = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }), "KeyboardArrowDownSharp");
})), Bd = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" }), "KeyboardArrowUpSharp");
})), Vd = /* @__PURE__ */ n(zd()), Hd = /* @__PURE__ */ n(Bd());
function Ud(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Wd(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Kd(r.key), r);
	}
}
function Gd(e, t, n) {
	return t && Wd(e.prototype, t), n && Wd(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kd(e) {
	var t = qd(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qd(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Jd(e, t, n) {
	return t = Qd(t), Yd(e, Zd() ? Reflect.construct(t, n || [], Qd(e).constructor) : t.apply(e, n));
}
function Yd(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Xd(e);
}
function Xd(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Zd() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Zd = function() {
		return !!e;
	})();
}
function Qd(e) {
	return Qd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Qd(e);
}
function $d(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ef(e, t);
}
function ef(e, t) {
	return ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ef(e, t);
}
var tf = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Ud(this, t), n = Jd(this, t, [e]), n.state = { open: !0 }, n.toggleSection = n.toggleSection.bind(n), n;
	}
	return $d(t, e), Gd(t, [{
		key: "toggleSection",
		value: function() {
			var e = this.state.open;
			this.setState({ open: !e });
		}
	}, {
		key: "render",
		value: function() {
			var e = this.props, t = e.children, n = e.classes, r = e.id, i = e.label, a = e.t, o = this.state.open;
			return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("div", { className: n.container }, /*#__PURE__*/ X.createElement(Ln, {
				className: n.heading,
				id: r,
				onClick: this.toggleSection,
				variant: "overline",
				component: "h4"
			}, i), /*#__PURE__*/ X.createElement(Xt, {
				"aria-label": a(o ? "collapseSection" : "expandSection", { section: i }),
				"aria-expanded": o,
				className: n.button,
				onClick: this.toggleSection
			}, o ? /*#__PURE__*/ X.createElement(Hd.default, null) : /*#__PURE__*/ X.createElement(Vd.default, null))), o && t);
		}
	}]);
}(X.Component);
s(), q();
var nf = V(Ge(), Y({
	button: { padding: 0 },
	container: {
		display: "flex",
		justifyContent: "space-between"
	},
	heading: { cursor: "pointer" }
}))(tf);
//#endregion
//#region node_modules/mirador/dist/es/src/components/LabelValueMetadata.js
function rf(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function af(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, sf(r.key), r);
	}
}
function of(e, t, n) {
	return t && af(e.prototype, t), n && af(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sf(e) {
	var t = cf(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function cf(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function lf(e, t, n) {
	return t = pf(t), uf(e, ff() ? Reflect.construct(t, n || [], pf(e).constructor) : t.apply(e, n));
}
function uf(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return df(e);
}
function df(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ff() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ff = function() {
		return !!e;
	})();
}
function pf(e) {
	return pf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, pf(e);
}
function mf(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hf(e, t);
}
function hf(e, t) {
	return hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, hf(e, t);
}
var gf = /*#__PURE__*/ function(e) {
	function t() {
		return rf(this, t), lf(this, t, arguments);
	}
	return mf(t, e), of(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.defaultLabel, n = e.labelValuePairs;
			return n.length === 0 ? /*#__PURE__*/ X.createElement(X.Fragment, null) : /*#__PURE__*/ X.createElement("dl", { className: rr("label-value-metadata") }, n.reduce(function(e, n, r) {
				return e.concat([/*#__PURE__*/ X.createElement(Ln, {
					component: "dt",
					key: `label-${r}`,
					variant: "subtitle2"
				}, n.label || t), /*#__PURE__*/ X.createElement(Ln, {
					style: {
						marginBottom: ".5em",
						marginLeft: "0px"
					},
					component: "dd",
					key: `value-${r}`,
					variant: "body1"
				}, /*#__PURE__*/ X.createElement(To, {
					htmlString: n.values.join(", "),
					ruleSet: "iiif"
				}))]);
			}, []));
		}
	}]);
}(X.Component);
gf.defaultProps = { defaultLabel: void 0 };
//#endregion
//#region node_modules/mirador/dist/es/src/components/CanvasInfo.js
function _f(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function vf(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, bf(r.key), r);
	}
}
function yf(e, t, n) {
	return t && vf(e.prototype, t), n && vf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bf(e) {
	var t = xf(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function xf(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Sf(e, t, n) {
	return t = Ef(t), Cf(e, Tf() ? Reflect.construct(t, n || [], Ef(e).constructor) : t.apply(e, n));
}
function Cf(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return wf(e);
}
function wf(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Tf() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Tf = function() {
		return !!e;
	})();
}
function Ef(e) {
	return Ef = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Ef(e);
}
function Df(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Of(e, t);
}
function Of(e, t) {
	return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Of(e, t);
}
var kf = /*#__PURE__*/ function(e) {
	function t() {
		return _f(this, t), Sf(this, t, arguments);
	}
	return Df(t, e), yf(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.canvasDescription, n = e.canvasLabel, r = e.canvasMetadata, i = e.id, a = e.index, o = e.t, s = e.totalSize;
			return /*#__PURE__*/ X.createElement(nf, {
				id: `${i}-currentItem-${a}`,
				label: o("currentItem", { context: `${a + 1}/${s}` })
			}, n && /*#__PURE__*/ X.createElement(Ln, {
				"aria-labelledby": `${i}-currentItem-${a} ${i}-currentItem-${a}-heading`,
				id: `${i}-currentItem-${a}-heading`,
				variant: "h4",
				component: "h5"
			}, n), t && /*#__PURE__*/ X.createElement(Ln, { variant: "body1" }, /*#__PURE__*/ X.createElement(To, {
				htmlString: t,
				ruleSet: "iiif"
			})), r && r.length > 0 && /*#__PURE__*/ X.createElement(gf, { labelValuePairs: r }), /*#__PURE__*/ X.createElement(ir, this.props));
		}
	}]);
}(X.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/CanvasInfo.js
kf.defaultProps = {
	canvasDescription: null,
	canvasLabel: null,
	canvasMetadata: [],
	index: 1,
	t: function(e) {
		return e;
	},
	totalSize: 1
}, s();
var Af = V(Ge(), Et(function(e, t) {
	var n = t.canvasId, r = t.id, i = t.windowId;
	return {
		canvasDescription: De(e, {
			canvasId: n,
			companionWindowId: r,
			windowId: i
		}),
		canvasLabel: je(e, {
			canvasId: n,
			companionWindowId: r,
			windowId: i
		}),
		canvasMetadata: Ue(d(e, {
			canvasId: n,
			companionWindowId: r,
			windowId: i
		}))
	};
}), R("CanvasInfo"))(kf);
//#endregion
//#region node_modules/mirador/dist/es/src/components/LocalePicker.js
function jf(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Mf(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Pf(r.key), r);
	}
}
function Nf(e, t, n) {
	return t && Mf(e.prototype, t), n && Mf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pf(e) {
	var t = Ff(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ff(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function If(e, t, n) {
	return t = Bf(t), Lf(e, zf() ? Reflect.construct(t, n || [], Bf(e).constructor) : t.apply(e, n));
}
function Lf(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Rf(e);
}
function Rf(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function zf() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (zf = function() {
		return !!e;
	})();
}
function Bf(e) {
	return Bf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Bf(e);
}
function Vf(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hf(e, t);
}
function Hf(e, t) {
	return Hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Hf(e, t);
}
var Uf = /*#__PURE__*/ function(e) {
	function t() {
		return jf(this, t), If(this, t, arguments);
	}
	return Vf(t, e), Nf(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.availableLocales, n = e.classes, r = e.locale, i = e.setLocale;
			return !i || t.length < 2 ? /*#__PURE__*/ X.createElement(X.Fragment, null) : /*#__PURE__*/ X.createElement(cc, null, /*#__PURE__*/ X.createElement(pl, {
				MenuProps: {
					anchorOrigin: {
						horizontal: "left",
						vertical: "bottom"
					},
					getContentAnchorEl: null
				},
				displayEmpty: !0,
				value: r,
				onChange: function(e) {
					i(e.target.value);
				},
				name: "locale",
				classes: { select: n.select },
				className: n.selectEmpty
			}, t.map(function(e) {
				return /*#__PURE__*/ X.createElement(na, {
					key: e,
					value: e
				}, /*#__PURE__*/ X.createElement(Ln, { variant: "body2" }, e));
			})));
		}
	}]);
}(X.Component);
Uf.defaultProps = {
	availableLocales: [],
	classes: {},
	locale: "",
	setLocale: void 0
}, s(), q();
var Wf = V(Ge(), Y(function(e) {
	return {
		select: { "&:focus": { backgroundColor: e.palette.background.paper } },
		selectEmpty: { backgroundColor: e.palette.background.paper }
	};
}))(Uf);
//#endregion
//#region node_modules/mirador/dist/es/src/components/ManifestInfo.js
function Gf(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Kf(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Jf(r.key), r);
	}
}
function qf(e, t, n) {
	return t && Kf(e.prototype, t), n && Kf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jf(e) {
	var t = Yf(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Yf(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Xf(e, t, n) {
	return t = ep(t), Zf(e, $f() ? Reflect.construct(t, n || [], ep(e).constructor) : t.apply(e, n));
}
function Zf(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Qf(e);
}
function Qf(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function $f() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return ($f = function() {
		return !!e;
	})();
}
function ep(e) {
	return ep = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ep(e);
}
function tp(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && np(e, t);
}
function np(e, t) {
	return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, np(e, t);
}
var rp = /*#__PURE__*/ function(e) {
	function t() {
		return Gf(this, t), Xf(this, t, arguments);
	}
	return tp(t, e), qf(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.manifestDescription, n = e.manifestLabel, r = e.manifestMetadata, i = e.id, a = e.t;
			return /*#__PURE__*/ X.createElement(nf, {
				id: `${i}-resource`,
				label: a("resource")
			}, n && /*#__PURE__*/ X.createElement(Ln, {
				"aria-labelledby": `${i}-resource ${i}-resource-heading`,
				id: `${i}-resource-heading`,
				variant: "h4",
				component: "h5"
			}, n), t && /*#__PURE__*/ X.createElement(Ln, { variant: "body1" }, /*#__PURE__*/ X.createElement(To, {
				htmlString: t,
				ruleSet: "iiif"
			})), r.length > 0 && /*#__PURE__*/ X.createElement(gf, { labelValuePairs: r }), /*#__PURE__*/ X.createElement(ir, this.props));
		}
	}]);
}(X.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/ManifestInfo.js
rp.defaultProps = {
	manifestDescription: null,
	manifestLabel: null,
	manifestMetadata: [],
	t: function(e) {
		return e;
	}
}, s();
var ip = V(Ge(), Et(function(e, t) {
	var n = t.id, r = t.manifestId, i = t.windowId;
	return {
		manifestDescription: ye(e, {
			companionWindowId: n,
			manifestId: r,
			windowId: i
		}),
		manifestLabel: pe(e, {
			companionWindowId: n,
			manifestId: r,
			windowId: i
		}),
		manifestMetadata: b(e, {
			companionWindowId: n,
			manifestId: r,
			windowId: i
		})
	};
}), R("ManifestInfo"))(rp), ap = /* @__PURE__ */ n((/* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h12v-4H8v4zm0 5h12v-4H8v4zM8 5v4h12V5H8z" }), "ViewListSharp");
})))());
function op(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function sp(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, lp(r.key), r);
	}
}
function cp(e, t, n) {
	return t && sp(e.prototype, t), n && sp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lp(e) {
	var t = up(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function up(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dp(e, t, n) {
	return t = hp(t), fp(e, mp() ? Reflect.construct(t, n || [], hp(e).constructor) : t.apply(e, n));
}
function fp(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return pp(e);
}
function pp(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function mp() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (mp = function() {
		return !!e;
	})();
}
function hp(e) {
	return hp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, hp(e);
}
function gp(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _p(e, t);
}
function _p(e, t) {
	return _p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, _p(e, t);
}
var vp = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return op(this, t), n = dp(this, t, [e]), n.openCollectionDialog = n.openCollectionDialog.bind(n), n;
	}
	return gp(t, e), cp(t, [{
		key: "openCollectionDialog",
		value: function() {
			var e = this.props, t = e.collectionPath, n = e.showCollectionDialog, r = e.windowId, i = t[t.length - 1];
			n(i, t.slice(0, -1), r);
		}
	}, {
		key: "render",
		value: function() {
			var e = this.props, t = e.collectionLabel, n = e.collectionPath, r = e.id, i = e.t;
			return n.length === 0 ? null : /*#__PURE__*/ X.createElement(nf, {
				id: `${r}-collection`,
				label: i("collection")
			}, t && /*#__PURE__*/ X.createElement(Ln, {
				"aria-labelledby": `${r}-resource ${r}-resource-heading`,
				id: `${r}-resource-heading`,
				variant: "h4"
			}, t), /*#__PURE__*/ X.createElement(ar, {
				color: "primary",
				onClick: this.openCollectionDialog,
				startIcon: /*#__PURE__*/ X.createElement(ap.default, null)
			}, i("showCollection")));
		}
	}]);
}(X.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/CollectionInfo.js
vp.defaultProps = {
	collectionLabel: null,
	collectionPath: [],
	t: function(e) {
		return e;
	},
	windowId: null
}, s();
var yp = function(e, t) {
	t.id;
	var n = t.windowId, r = (Ye(e, { windowId: n }) || {}).collectionPath, i = r[r.length - 1];
	return {
		collectionLabel: pe(e, { manifestId: i }),
		collectionPath: r
	};
}, bp = { showCollectionDialog: an }, xp = V(Ge(), Et(yp, bp), R("CollectionInfo"))(vp);
//#endregion
//#region node_modules/mirador/dist/es/src/components/ManifestRelatedLinks.js
function Sp(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Cp(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tp(r.key), r);
	}
}
function wp(e, t, n) {
	return t && Cp(e.prototype, t), n && Cp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Tp(e) {
	var t = Ep(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ep(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Dp(e, t, n) {
	return t = jp(t), Op(e, Ap() ? Reflect.construct(t, n || [], jp(e).constructor) : t.apply(e, n));
}
function Op(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return kp(e);
}
function kp(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ap() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ap = function() {
		return !!e;
	})();
}
function jp(e) {
	return jp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, jp(e);
}
function Mp(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
	return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Np(e, t);
}
var Pp = /*#__PURE__*/ function(e) {
	function t() {
		return Sp(this, t), Dp(this, t, arguments);
	}
	return Mp(t, e), wp(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.classes, n = e.homepage, r = e.manifestUrl, i = e.renderings, a = e.seeAlso, o = e.id, s = e.t;
			return /*#__PURE__*/ X.createElement(nf, {
				id: `${o}-related`,
				label: s("related")
			}, /*#__PURE__*/ X.createElement(Ln, {
				"aria-labelledby": `${o}-related ${o}-related-heading`,
				id: `${o}-related-heading`,
				variant: "h4",
				component: "h5"
			}, s("links")), /*#__PURE__*/ X.createElement("dl", { className: (0, Ur.default)(rr("label-value-metadata"), t.labelValueMetadata) }, n && /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Ln, {
				variant: "subtitle2",
				component: "dt"
			}, s("iiif_homepage")), n.map(function(e) {
				return /*#__PURE__*/ X.createElement(Ln, {
					key: e.value,
					variant: "body1",
					component: "dd"
				}, /*#__PURE__*/ X.createElement(kc, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: e.value
				}, e.label || e.value));
			})), i && i.length > 0 && /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Ln, {
				variant: "subtitle2",
				component: "dt"
			}, s("iiif_renderings")), i.map(function(e) {
				return /*#__PURE__*/ X.createElement(Ln, {
					key: e.value,
					variant: "body1",
					component: "dd"
				}, /*#__PURE__*/ X.createElement(kc, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: e.value
				}, e.label || e.value));
			})), a && /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Ln, {
				variant: "subtitle2",
				component: "dt"
			}, s("iiif_seeAlso")), a.map(function(e) {
				return /*#__PURE__*/ X.createElement(Ln, {
					key: e.value,
					variant: "body1",
					component: "dd"
				}, /*#__PURE__*/ X.createElement(kc, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: e.value
				}, e.label || e.value), e.format && /*#__PURE__*/ X.createElement(Ln, { component: "span" }, ` (${e.format})`));
			})), r && /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Ln, {
				variant: "subtitle2",
				component: "dt"
			}, s("iiif_manifest")), /*#__PURE__*/ X.createElement(Ln, {
				variant: "body1",
				component: "dd"
			}, /*#__PURE__*/ X.createElement(kc, {
				target: "_blank",
				rel: "noopener noreferrer",
				href: r
			}, r)))), /*#__PURE__*/ X.createElement(ir, this.props));
		}
	}]);
}(X.Component);
Pp.defaultProps = {
	homepage: null,
	manifestUrl: null,
	renderings: null,
	seeAlso: null,
	t: function(e) {
		return e;
	}
}, s(), q();
var Fp = V(Y({ labelValueMetadata: { "& dd": {
	marginBottom: ".5em",
	marginLeft: "0"
} } }), Ge(), Et(function(e, t) {
	t.id;
	var n = t.windowId;
	return {
		homepage: Pt(e, { windowId: n }),
		manifestUrl: E(e, { windowId: n }),
		renderings: u(e, { windowId: n }),
		seeAlso: pt(e, { windowId: n })
	};
}), R("ManifestRelatedLinks"))(Pp);
//#endregion
//#region node_modules/mirador/dist/es/src/components/WindowSideBarInfoPanel.js
function Ip(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Lp(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, zp(r.key), r);
	}
}
function Rp(e, t, n) {
	return t && Lp(e.prototype, t), n && Lp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zp(e) {
	var t = Bp(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Bp(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Vp(e, t, n) {
	return t = Gp(t), Hp(e, Wp() ? Reflect.construct(t, n || [], Gp(e).constructor) : t.apply(e, n));
}
function Hp(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Up(e);
}
function Up(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Wp() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Wp = function() {
		return !!e;
	})();
}
function Gp(e) {
	return Gp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Gp(e);
}
function Kp(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qp(e, t);
}
function qp(e, t) {
	return qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, qp(e, t);
}
var Jp = /*#__PURE__*/ function(e) {
	function t() {
		return Ip(this, t), Vp(this, t, arguments);
	}
	return Kp(t, e), Rp(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.windowId, n = e.id, r = e.canvasIds, i = e.classes, a = e.collectionPath, o = e.t, s = e.locale, c = e.setLocale, l = e.availableLocales, u = e.showLocalePicker;
			return /*#__PURE__*/ X.createElement(wd, {
				title: o("aboutThisItem"),
				paperClassName: rr("window-sidebar-info-panel"),
				windowId: t,
				id: n,
				titleControls: u && /*#__PURE__*/ X.createElement(Wf, {
					locale: s,
					setLocale: c,
					availableLocales: l
				})
			}, r.map(function(e, a) {
				return /*#__PURE__*/ X.createElement("div", {
					key: e,
					className: i.section
				}, /*#__PURE__*/ X.createElement(Af, {
					id: n,
					canvasId: e,
					index: a,
					totalSize: r.length,
					windowId: t
				}));
			}), a.length > 0 && /*#__PURE__*/ X.createElement("div", { className: i.section }, /*#__PURE__*/ X.createElement(xp, {
				id: n,
				windowId: t
			})), /*#__PURE__*/ X.createElement("div", { className: i.section }, /*#__PURE__*/ X.createElement(ip, {
				id: n,
				windowId: t
			})), /*#__PURE__*/ X.createElement("div", { className: i.section }, /*#__PURE__*/ X.createElement(Fp, {
				id: n,
				windowId: t
			})));
		}
	}]);
}(X.Component);
Jp.defaultProps = {
	availableLocales: [],
	canvasIds: [],
	classes: {},
	collectionPath: [],
	locale: "",
	setLocale: void 0,
	showLocalePicker: !1,
	t: function(e) {
		return e;
	}
}, s(), q();
var Yp = V(Ge(), Y(function(e) {
	return { section: {
		borderBottom: `.5px solid ${e.palette.section_divider}`,
		paddingBottom: e.spacing(1),
		paddingLeft: e.spacing(2),
		paddingRight: e.spacing(1),
		paddingTop: e.spacing(2)
	} };
}), Et(function(e, t) {
	var n = t.id, r = t.windowId;
	return {
		availableLocales: ie(e, {
			companionWindowId: n,
			windowId: r
		}),
		canvasIds: Ne(e, { windowId: r }),
		collectionPath: (Ye(e, { windowId: r }) || {}).collectionPath,
		locale: Le(e, { companionWindowId: n }).locale || Ce(e, { windowId: r }),
		showLocalePicker: Be(e, { windowId: r }).showLocalePicker
	};
}, function(e, t) {
	var n = t.windowId, r = t.id;
	return { setLocale: function(t) {
		return e(mn(n, r, { locale: t }));
	} };
}), R("WindowSideBarInfoPanel"))(Jp), Xp = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" }), "ReorderSharp");
})), Zp = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" }), "SortSharp");
})), Qp = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" }), "ArrowForwardSharp");
})), $p = /* @__PURE__ */ n(Xp()), em = /* @__PURE__ */ n(Zp()), tm = /* @__PURE__ */ n(Qp());
function nm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function rm(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, am(r.key), r);
	}
}
function im(e, t, n) {
	return t && rm(e.prototype, t), n && rm(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function am(e) {
	var t = om(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function om(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function sm(e, t, n) {
	return t = dm(t), cm(e, um() ? Reflect.construct(t, n || [], dm(e).constructor) : t.apply(e, n));
}
function cm(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return lm(e);
}
function lm(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function um() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (um = function() {
		return !!e;
	})();
}
function dm(e) {
	return dm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, dm(e);
}
function fm(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pm(e, t);
}
function pm(e, t) {
	return pm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, pm(e, t);
}
var mm = /*#__PURE__*/ function(e) {
	function t() {
		return nm(this, t), sm(this, t, arguments);
	}
	return fm(t, e), im(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.classes, n = e.label;
			return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(Ln, {
				className: (0, Ur.default)(t.label),
				variant: "body1"
			}, n));
		}
	}]);
}(X.Component);
s(), q();
var hm = V(Y(function(e) {
	return { label: { paddingLeft: e.spacing(1) } };
}), Ge(), Et(null, null), R("SidebarIndexItem"))(mm);
//#endregion
//#region node_modules/mirador/dist/es/src/components/SidebarIndexThumbnail.js
function gm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _m(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ym(r.key), r);
	}
}
function vm(e, t, n) {
	return t && _m(e.prototype, t), n && _m(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ym(e) {
	var t = bm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function bm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function xm(e, t, n) {
	return t = Tm(t), Sm(e, wm() ? Reflect.construct(t, n || [], Tm(e).constructor) : t.apply(e, n));
}
function Sm(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Cm(e);
}
function Cm(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function wm() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (wm = function() {
		return !!e;
	})();
}
function Tm(e) {
	return Tm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Tm(e);
}
function Em(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dm(e, t);
}
function Dm(e, t) {
	return Dm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Dm(e, t);
}
var Om = /*#__PURE__*/ function(e) {
	function t() {
		return gm(this, t), xm(this, t, arguments);
	}
	return Em(t, e), vm(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.classes, n = e.canvas, r = e.height, i = e.label, a = e.width;
			return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("div", { style: { minWidth: 50 } }, /*#__PURE__*/ X.createElement(xn, {
				label: i,
				resource: n,
				className: (0, Ur.default)(t.clickable),
				maxHeight: r,
				maxWidth: a
			})), /*#__PURE__*/ X.createElement(Ln, {
				className: (0, Ur.default)(t.label),
				variant: "body1"
			}, i));
		}
	}]);
}(X.Component);
Om.defaultProps = {
	height: void 0,
	width: void 0
}, s(), q();
function km(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Am(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? km(Object(n), !0).forEach(function(t) {
			jm(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : km(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function jm(e, t, n) {
	return (t = Mm(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Mm(e) {
	var t = Nm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Nm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Pm = V(Y(function(e) {
	return { label: { paddingLeft: e.spacing(1) } };
}), Ge(), Et(function(e, t) {
	return t.data, Am({}, h(e).canvasNavigation || {});
}, null), R("SidebarIndexThumbnail"))(Om);
//#endregion
//#region node_modules/mirador/dist/es/src/components/SidebarIndexList.js
function Fm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Im(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rm(r.key), r);
	}
}
function Lm(e, t, n) {
	return t && Im(e.prototype, t), n && Im(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Rm(e) {
	var t = zm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function zm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Bm(e, t, n) {
	return t = Wm(t), Vm(e, Um() ? Reflect.construct(t, n || [], Wm(e).constructor) : t.apply(e, n));
}
function Vm(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Hm(e);
}
function Hm(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Um() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Um = function() {
		return !!e;
	})();
}
function Wm(e) {
	return Wm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Wm(e);
}
function Gm(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Km(e, t);
}
function Km(e, t) {
	return Km = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Km(e, t);
}
var qm = /*#__PURE__*/ function(e) {
	function t() {
		return Fm(this, t), Bm(this, t, arguments);
	}
	return Gm(t, e), Lm(t, [{
		key: "getIdAndLabelOfCanvases",
		value: function() {
			return this.props.canvases.map(function(e, t) {
				return {
					id: e.id,
					label: new et(e).getLabel()
				};
			});
		}
	}, {
		key: "render",
		value: function() {
			var e = this.props, t = e.canvases, n = e.classes, r = e.containerRef, i = e.selectedCanvasIds, a = e.setCanvas, o = e.variant, s = e.windowId, c = this.getIdAndLabelOfCanvases(t), l;
			switch (o) {
				case "thumbnail":
					l = Pm;
					break;
				default: l = hm;
			}
			return /*#__PURE__*/ X.createElement(Yi, { variant: "selectedMenu" }, c.map(function(e, c) {
				return /*#__PURE__*/ X.createElement(Ro, {
					containerRef: r,
					key: `${e.id}-${o}`,
					offsetTop: 96,
					scrollTo: i.includes(e.id)
				}, /*#__PURE__*/ X.createElement(na, {
					key: e.id,
					className: n.listItem,
					alignItems: "flex-start",
					onClick: function() {
						a(s, e.id);
					},
					button: !0,
					component: "li",
					selected: i.includes(e.id)
				}, /*#__PURE__*/ X.createElement(l, {
					label: e.label,
					canvas: t[c]
				})));
			}));
		}
	}]);
}(X.Component);
qm.defaultProps = {
	selectedCanvasIds: [],
	variant: "item"
}, s(), q();
var Jm = V(Y(function(e) {
	return {
		label: { paddingLeft: e.spacing(1) },
		listItem: {
			borderBottom: `0.5px solid ${e.palette.divider}`,
			paddingRight: e.spacing(1)
		}
	};
}), Ge(), Et(function(e, t) {
	var n = t.id, r = t.windowId;
	return {
		canvases: D(e, { windowId: r }),
		selectedCanvasIds: Ne(e, { windowId: r }),
		variant: Le(e, {
			companionWindowId: n,
			windowId: r
		}).variant
	};
}, function(e, t) {
	return t.id, t.windowId, { setCanvas: function() {
		return e(tn.apply(_n, arguments));
	} };
}), R("SidebarIndexList"))(qm), Ym = X.createContext({});
J(), At(), Nt(), tt(), q(), Zn();
var Xm = { root: {
	padding: 0,
	margin: 0,
	listStyle: "none"
} };
function Zm(e, t) {
	if (e.length !== t.length) return !0;
	for (var n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !0;
	return !1;
}
var Qm = function(e, t, n) {
	for (var r = t; r < e.length; r += 1) if (n === e[r]) return r;
	return -1;
}, $m = [], eh = [], th = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.defaultCollapseIcon, o = e.defaultEndIcon, s = e.defaultExpanded, c = s === void 0 ? $m : s, l = e.defaultExpandIcon, u = e.defaultParentIcon, d = e.defaultSelected, f = d === void 0 ? eh : d, p = e.disableSelection, m = p === void 0 ? !1 : p, h = e.multiSelect, g = h === void 0 ? !1 : h, v = e.expanded, y = e.onNodeSelect, b = e.onNodeToggle, x = e.selected, S = _(e, [
		"children",
		"classes",
		"className",
		"defaultCollapseIcon",
		"defaultEndIcon",
		"defaultExpanded",
		"defaultExpandIcon",
		"defaultParentIcon",
		"defaultSelected",
		"disableSelection",
		"multiSelect",
		"expanded",
		"onNodeSelect",
		"onNodeToggle",
		"selected"
	]), C = X.useState(null), w = C[0], T = C[1], E = X.useState(null), D = E[0], ee = E[1], O = X.useRef({}), k = X.useRef({}), A = X.useRef([]), j = gt(zn({
		controlled: v,
		default: c,
		name: "TreeView",
		state: "expanded"
	}), 2), M = j[0], te = j[1], N = gt(zn({
		controlled: x,
		default: f,
		name: "TreeView",
		state: "selected"
	}), 2), P = N[0], F = N[1], ne = X.useCallback(function(e) {
		return Array.isArray(M) ? M.indexOf(e) !== -1 : !1;
	}, [M]), I = X.useCallback(function(e) {
		return Array.isArray(P) ? P.indexOf(e) !== -1 : P === e;
	}, [P]), re = function(e) {
		return w === e;
	}, L = function(e) {
		return D === e;
	}, R = function(e) {
		var t = A.current.indexOf(e);
		return t !== -1 && t + 1 < A.current.length ? A.current[t + 1] : null;
	}, ie = function(e) {
		var t = A.current.indexOf(e);
		return t !== -1 && t - 1 >= 0 ? A.current[t - 1] : null;
	}, ae = function() {
		return A.current[A.current.length - 1];
	}, oe = function() {
		return A.current[0];
	}, z = function(e) {
		return O.current[e].parent;
	}, se = function(e, t) {
		var n = A.current.indexOf(e), r = A.current.indexOf(t), i = Math.min(n, r), a = Math.max(n, r);
		return A.current.slice(i, a + 1);
	}, ce = function(e) {
		e && (T(e), ee(e));
	}, B = function(e) {
		return ce(R(e));
	}, V = function(e) {
		return ce(ie(e));
	}, le = function() {
		return ce(oe());
	}, ue = function() {
		return ce(ae());
	}, de = function(e, t) {
		var n, r, i = t.toLowerCase(), a = [], o = [];
		Object.keys(k.current).forEach(function(e) {
			var t = k.current[e], n = O.current[e];
			(!n.parent || ne(n.parent)) && (a.push(e), o.push(t));
		}), n = a.indexOf(e) + 1, n === O.current.length && (n = 0), r = Qm(o, n, i), r === -1 && (r = Qm(o, 0, i)), r > -1 && ce(a[r]);
	}, fe = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : D, n;
		M.indexOf(t) === -1 ? n = [t].concat(M) : (n = M.filter(function(e) {
			return e !== t;
		}), T(function(e) {
			var n = O.current[e];
			return e && (n && n.parent ? n.parent.id : null) === t ? t : e;
		})), b && b(e, n), te(n);
	}, H = function(e, t) {
		var n = O.current[t], r = O.current[n.parent], i = r ? r.children.filter(function(e) {
			return !ne(e);
		}) : O.current[-1].children.filter(function(e) {
			return !ne(e);
		}), a = M.concat(i);
		i.length > 0 && (te(a), b && b(e, a));
	}, pe = X.useRef(null), me = X.useRef(!1), U = X.useRef([]), he = function(e, t) {
		var n = P, r = t.start, i = t.next, a = t.current;
		!i || !a || (U.current.indexOf(a) === -1 && (U.current = []), me.current ? U.current.indexOf(i) === -1 ? (n.push(i), U.current.push(i)) : (n = n.filter(function(e) {
			return e === r || e !== a;
		}), U.current = U.current.filter(function(e) {
			return e === r || e !== a;
		})) : (n.push(i), U.current.push(a, i)), y && y(e, n), F(n));
	}, ge = function(e, t) {
		var n = P, r = t.start, i = t.end;
		me.current && (n = P.filter(function(e) {
			return U.current.indexOf(e) === -1;
		}));
		var a = se(r, i);
		U.current = a;
		var o = n.concat(a);
		o = o.filter(function(e, t) {
			return o.indexOf(e) === t;
		}), y && y(e, o), F(o);
	}, _e = function(e, t) {
		var n = [];
		n = P.indexOf(t) === -1 ? [t].concat(P) : P.filter(function(e) {
			return e !== t;
		}), y && y(e, n), F(n);
	}, ve = function(e, t) {
		var n = g ? [t] : t;
		y && y(e, n), F(n);
	}, ye = function(e, t) {
		var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
		return t ? (n ? _e(e, t) : ve(e, t), pe.current = t, me.current = !1, U.current = [], !0) : !1;
	}, be = function(e, t) {
		var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = t.start, i = r === void 0 ? pe.current : r, a = t.end, o = t.current;
		return n ? he(e, {
			start: i,
			next: a,
			current: o
		}) : ge(e, {
			start: i,
			end: a
		}), me.current = !0, !0;
	}, xe = function(e, t) {
		return pe.current ||= t, be(e, {
			start: me.current ? pe.current : t,
			end: oe()
		});
	}, Se = function(e, t) {
		return pe.current ||= t, be(e, {
			start: me.current ? pe.current : t,
			end: ae()
		});
	}, Ce = function(e, t) {
		return be(e, {
			end: R(t),
			current: t
		}, !0);
	}, we = function(e, t) {
		return be(e, {
			end: ie(t),
			current: t
		}, !0);
	}, Te = function(e) {
		return be(e, {
			start: oe(),
			end: ae()
		});
	}, Ee = function(e, t) {
		var n = O.current[e];
		O.current[e] = K({}, n, {
			children: t,
			id: e
		}), t.forEach(function(t) {
			var n = O.current[t];
			O.current[t] = K({}, n, {
				parent: e,
				id: t
			});
		});
	}, De = X.useCallback(function(e) {
		var t = O.current[e], n = [];
		return t && (n.push(e), t.children && (n.concat(t.children), t.children.forEach(function(e) {
			n.concat(De(e));
		}))), n;
	}, []), Oe = X.useCallback(function(e) {
		var t = K({}, k.current);
		e.forEach(function(e) {
			t[e] && delete t[e];
		}), k.current = t;
	}, []), ke = X.useCallback(function(e) {
		var t = De(e);
		Oe(t);
		var n = K({}, O.current);
		t.forEach(function(e) {
			var t = n[e];
			if (t) {
				if (t.parent) {
					var r = n[t.parent];
					if (r && r.children) {
						var i = r.children.filter(function(t) {
							return t !== e;
						});
						n[t.parent] = K({}, r, { children: i });
					}
				}
				delete n[e];
			}
		}), O.current = n, ee(function(t) {
			return t === e ? null : t;
		});
	}, [De, Oe]), Ae = function(e, t) {
		k.current[e] = t;
	}, je = X.useRef([]), Me = X.useState(!1), Ne = Me[0], Pe = Me[1];
	X.useEffect(function() {
		var e = [];
		X.Children.forEach(n, function(t) {
			/*#__PURE__*/ X.isValidElement(t) && t.props.nodeId && e.push(t.props.nodeId);
		}), Zm(je.current, e) && (O.current[-1] = {
			parent: null,
			children: e
		}, e.forEach(function(e, t) {
			t === 0 && T(e);
		}), A.current = O.current[-1].children, je.current = e, Pe(!0));
	}, [n]), X.useEffect(function() {
		Ne && (A.current = function e(t) {
			for (var n = [], r = 0; r < t.length; r += 1) {
				var i = t[r];
				n.push(i);
				var a = O.current[i].children;
				ne(i) && a && (n = n.concat(e(a)));
			}
			return n;
		}(O.current[-1].children));
	}, [
		M,
		Ne,
		ne,
		n
	]);
	var Fe = function() {
		return !1;
	};
	return /*#__PURE__*/ X.createElement(Ym.Provider, { value: {
		icons: {
			defaultCollapseIcon: a,
			defaultExpandIcon: l,
			defaultParentIcon: u,
			defaultEndIcon: o
		},
		focus: ce,
		focusFirstNode: le,
		focusLastNode: ue,
		focusNextNode: B,
		focusPreviousNode: V,
		focusByFirstCharacter: de,
		expandAllSiblings: H,
		toggleExpansion: fe,
		isExpanded: ne,
		isFocused: L,
		isSelected: I,
		selectNode: m ? Fe : ye,
		selectRange: m ? Fe : be,
		selectNextNode: m ? Fe : Ce,
		selectPreviousNode: m ? Fe : we,
		rangeSelectToFirst: m ? Fe : xe,
		rangeSelectToLast: m ? Fe : Se,
		selectAllNodes: m ? Fe : Te,
		isTabbable: re,
		multiSelect: g,
		getParent: z,
		mapFirstChar: Ae,
		addNodeToNodeMap: Ee,
		removeNodeFromNodeMap: ke
	} }, /*#__PURE__*/ X.createElement("ul", K({
		role: "tree",
		"aria-multiselectable": g,
		className: G(r.root, i),
		ref: t
	}, S), n));
}), nh = Y(Xm, { name: "MuiTreeView" })(th), rh = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }), "ExpandMore");
})), ih = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), "ChevronRight");
}));
J(), Nt(), tt(), Ze(), q(), Zn();
var ah = function(e) {
	return {
		root: {
			listStyle: "none",
			margin: 0,
			padding: 0,
			outline: 0,
			WebkitTapHighlightColor: "transparent",
			"&:focus > $content $label": { backgroundColor: e.palette.action.hover },
			"&$selected > $content $label": { backgroundColor: Ie(e.palette.primary.main, e.palette.action.selectedOpacity) },
			"&$selected > $content $label:hover, &$selected:focus > $content $label": {
				backgroundColor: Ie(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		expanded: {},
		selected: {},
		group: {
			margin: 0,
			padding: 0,
			marginLeft: 17
		},
		content: {
			width: "100%",
			display: "flex",
			alignItems: "center",
			cursor: "pointer"
		},
		iconContainer: {
			marginRight: 4,
			width: 15,
			display: "flex",
			flexShrink: 0,
			justifyContent: "center",
			"& svg": { fontSize: 18 }
		},
		label: {
			width: "100%",
			paddingLeft: 4,
			position: "relative",
			"&:hover": {
				backgroundColor: e.palette.action.hover,
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		}
	};
}, oh = function(e) {
	return e && e.length === 1 && e.match(/\S/);
}, sh = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.children, r = e.classes, i = e.className, a = e.collapseIcon, o = e.endIcon, s = e.expandIcon, c = e.icon, l = e.label, u = e.nodeId, d = e.onClick, f = e.onLabelClick, p = e.onIconClick, m = e.onFocus, h = e.onKeyDown, g = e.onMouseDown, v = e.TransitionComponent, y = v === void 0 ? as : v, b = e.TransitionProps, x = _(e, [
		"children",
		"classes",
		"className",
		"collapseIcon",
		"endIcon",
		"expandIcon",
		"icon",
		"label",
		"nodeId",
		"onClick",
		"onLabelClick",
		"onIconClick",
		"onFocus",
		"onKeyDown",
		"onMouseDown",
		"TransitionComponent",
		"TransitionProps"
	]), S = X.useContext(Ym), C = S.icons, w = S.focus, T = S.focusFirstNode, E = S.focusLastNode, D = S.focusNextNode, ee = S.focusPreviousNode, O = S.focusByFirstCharacter, k = S.selectNode, A = S.selectRange, j = S.selectNextNode, M = S.selectPreviousNode, te = S.rangeSelectToFirst, N = S.rangeSelectToLast, P = S.selectAllNodes, F = S.expandAllSiblings, ne = S.toggleExpansion, I = S.isExpanded, re = S.isFocused, L = S.isSelected, R = S.isTabbable, ie = S.multiSelect, ae = S.getParent, oe = S.mapFirstChar, z = S.addNodeToNodeMap, se = S.removeNodeFromNodeMap, ce = X.useRef(null), B = X.useRef(null), V = Hn(ce, t), le = c, ue = !!(Array.isArray(n) ? n.length : n), de = I ? I(u) : !1, fe = re ? re(u) : !1, H = R ? R(u) : !1, pe = L ? L(u) : !1, me = C || {}, U = Yt();
	le || (ue ? (le = de ? a || me.defaultCollapseIcon : s || me.defaultExpandIcon, le ||= me.defaultParentIcon) : le = o || me.defaultEndIcon);
	var he = function(e) {
		fe || w(u);
		var t = ie && (e.shiftKey || e.ctrlKey || e.metaKey);
		ue && !e.defaultPrevented && !(t && I(u)) && ne(e, u), t ? e.shiftKey ? A(e, { end: u }) : k(e, u, !0) : k(e, u), d && d(e);
	}, ge = function(e) {
		(e.shiftKey || e.ctrlKey || e.metaKey) && e.preventDefault(), g && g(e);
	}, _e = function(e) {
		return ue && (de ? D(u) : ne(e)), !0;
	}, ve = function(e) {
		if (de) return ne(e, u), !0;
		var t = ae(u);
		return t ? (w(t), !0) : !1;
	}, ye = function(e) {
		var t = !1, n = e.key;
		if (!(e.altKey || e.currentTarget !== e.target)) {
			var r = e.ctrlKey || e.metaKey;
			switch (n) {
				case " ":
					ce.current === e.currentTarget && (t = ie && e.shiftKey ? A(e, { end: u }) : ie ? k(e, u, !0) : k(e, u)), e.stopPropagation();
					break;
				case "Enter":
					ce.current === e.currentTarget && ue && (ne(e), t = !0), e.stopPropagation();
					break;
				case "ArrowDown":
					ie && e.shiftKey && j(e, u), D(u), t = !0;
					break;
				case "ArrowUp":
					ie && e.shiftKey && M(e, u), ee(u), t = !0;
					break;
				case "ArrowRight":
					t = U.direction === "rtl" ? ve(e) : _e(e);
					break;
				case "ArrowLeft":
					t = U.direction === "rtl" ? _e(e) : ve(e);
					break;
				case "Home":
					ie && r && e.shiftKey && te(e, u), T(), t = !0;
					break;
				case "End":
					ie && r && e.shiftKey && N(e, u), E(), t = !0;
					break;
				default: n === "*" ? (F(e, u), t = !0) : ie && r && n.toLowerCase() === "a" ? t = P(e) : !r && !e.shiftKey && oh(n) && (O(u, n), t = !0);
			}
			t && (e.preventDefault(), e.stopPropagation()), h && h(e);
		}
	}, be = function(e) {
		!fe && e.currentTarget === e.target && w(u), m && m(e);
	};
	X.useEffect(function() {
		if (z) {
			var e = [];
			X.Children.forEach(n, function(t) {
				/*#__PURE__*/ X.isValidElement(t) && t.props.nodeId && e.push(t.props.nodeId);
			}), z(u, e);
		}
	}, [
		n,
		u,
		z
	]), X.useEffect(function() {
		if (se) return function() {
			se(u);
		};
	}, [u, se]), X.useEffect(function() {
		oe && l && oe(u, B.current.textContent.substring(0, 1).toLowerCase());
	}, [
		oe,
		u,
		l
	]), X.useEffect(function() {
		fe && ce.current.focus();
	}, [fe]);
	var xe;
	return ie ? xe = pe : pe && (xe = !0), /*#__PURE__*/ X.createElement("li", K({
		className: G(r.root, i, de && r.expanded, pe && r.selected),
		role: "treeitem",
		onKeyDown: ye,
		onFocus: be,
		"aria-expanded": ue ? de : null,
		"aria-selected": xe,
		ref: V,
		tabIndex: H ? 0 : -1
	}, x), /*#__PURE__*/ X.createElement("div", {
		className: r.content,
		onClick: he,
		onMouseDown: ge,
		ref: B
	}, /*#__PURE__*/ X.createElement("div", {
		onClick: p,
		className: r.iconContainer
	}, le), /*#__PURE__*/ X.createElement(Ln, {
		onClick: f,
		component: "div",
		className: r.label
	}, l)), n && /*#__PURE__*/ X.createElement(y, K({
		unmountOnExit: !0,
		className: r.group,
		in: de,
		component: "ul",
		role: "group"
	}, b), n));
}), ch = Y(ah, { name: "MuiTreeItem" })(sh), lh = Qt(), uh = /* @__PURE__ */ n(rh()), dh = /* @__PURE__ */ n(ih());
tt();
function fh(e, t, n) {
	return (t = gh(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ph(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function mh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, gh(r.key), r);
	}
}
function hh(e, t, n) {
	return t && mh(e.prototype, t), n && mh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gh(e) {
	var t = _h(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _h(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function vh(e, t, n) {
	return t = Sh(t), yh(e, xh() ? Reflect.construct(t, n || [], Sh(e).constructor) : t.apply(e, n));
}
function yh(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return bh(e);
}
function bh(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function xh() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (xh = function() {
		return !!e;
	})();
}
function Sh(e) {
	return Sh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Sh(e);
}
function Ch(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wh(e, t);
}
function wh(e, t) {
	return wh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, wh(e, t);
}
function Th(e) {
	var t = e.data.__jsonld;
	if (t.startCanvas && typeof t.startCanvas == "string") return t.startCanvas;
	if (t.start) {
		if (t.start.type === "Canvas" && typeof t.start.id == "string") return t.start.id;
		if (t.start.type === "SpecificResource" && typeof t.start.source == "string") return t.start.source;
	}
	return e.data.getCanvasIds()[0];
}
var Eh = /*#__PURE__*/ function(e) {
	function t() {
		return ph(this, t), vh(this, t, arguments);
	}
	return Ch(t, e), hh(t, [
		{
			key: "handleKeyPressed",
			value: function(e, t) {
				var n = this.props, r = n.expandedNodeIds, i = n.toggleNode;
				(e.key === "Enter" || e.key === " " || e.key === "Spacebar") && this.selectTreeItem(t), (e.key === "ArrowLeft" && r.indexOf(t.id) !== -1 || e.key === "ArrowRight" && r.indexOf(t.id) === -1 && t.nodes.length > 0) && i(t.id);
			}
		},
		{
			key: "selectTreeItem",
			value: function(e) {
				var t = this.props, n = t.setCanvas, r = t.toggleNode, i = t.windowId;
				if (e.nodes.length > 0 && r(e.id), !(!e.data.getCanvasIds() || e.data.getCanvasIds().length === 0 || e.nodes.length > 0)) {
					var a = Th(e);
					n(i, a.indexOf("#") === -1 ? a : a.substr(0, a.indexOf("#")));
				}
			}
		},
		{
			key: "buildTreeItems",
			value: function(e, t, n, r) {
				var i = this, a = this.props.classes;
				return e ? e.map(function(e) {
					return /*#__PURE__*/ X.createElement(Ro, {
						containerRef: n,
						key: `${e.id}-scroll`,
						offsetTop: 96,
						scrollTo: r === e.id
					}, /*#__PURE__*/ X.createElement(ch, {
						key: e.id,
						nodeId: e.id,
						classes: {
							content: a.content,
							group: a.group,
							label: a.label,
							root: a.treeItemRoot,
							selected: a.selected
						},
						label: /*#__PURE__*/ X.createElement("div", { className: G(fh({}, a.visibleNode, t.indexOf(e.id) !== -1)) }, e.label),
						onClick: function() {
							return i.selectTreeItem(e);
						},
						onKeyDown: function(t) {
							return i.handleKeyPressed(t, e);
						}
					}, e.nodes && e.nodes.length > 0 ? i.buildTreeItems(e.nodes, t, n, r) : null));
				}) : null;
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.classes, n = e.treeStructure, r = e.visibleNodeIds, i = e.expandedNodeIds, a = e.containerRef, o = e.nodeIdToScrollTo;
				return n ? /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(nh, {
					className: t.root,
					defaultCollapseIcon: /*#__PURE__*/ X.createElement(uh.default, { color: "action" }),
					defaultExpandIcon: /*#__PURE__*/ X.createElement(dh.default, { color: "action" }),
					defaultEndIcon: /*#__PURE__*/ X.createElement(X.Fragment, null),
					expanded: i
				}, this.buildTreeItems(n.nodes, r, a, o))) : /*#__PURE__*/ X.createElement(X.Fragment, null);
			}
		}
	]);
}(X.Component);
s(), q();
var Dh = V(Y(function(e) {
	return {
		content: {
			alignItems: "flex-start",
			borderLeft: "1px solid transparent",
			padding: "8px 16px 8px 0",
			width: "auto"
		},
		group: { borderLeft: `1px solid ${e.palette.grey[300]}` },
		label: { paddingLeft: 0 },
		root: { flexGrow: 1 },
		selected: {},
		treeItemRoot: {
			"&:focus > $content": { backgroundColor: e.palette.action.selected },
			"&:hover > $content": { backgroundColor: e.palette.action.hover },
			"&:hover >$content $label, &:focus > $content $label, &$selected > $content $label, &$selected > $content $label:hover, &$selected:focus > $content $label": { backgroundColor: "transparent" }
		},
		visibleNode: {
			backgroundColor: (0, lh.alpha)(e.palette.highlights.primary, .35),
			display: "inline"
		}
	};
}), Ge(), Et(function(e, t) {
	var n = t.id, r = t.windowId;
	return {
		expandedNodeIds: $e(e, {
			companionWindowId: n,
			windowId: r
		}),
		nodeIdToScrollTo: _t(e, {
			companionWindowId: n,
			windowId: r
		}),
		treeStructure: Re(e, { windowId: r }),
		visibleNodeIds: nt(e, {
			companionWindowId: n,
			windowId: r
		})
	};
}, function(e, t) {
	var n = t.id, r = t.windowId;
	return {
		setCanvas: function() {
			return e(tn.apply(_n, arguments));
		},
		toggleNode: function(t) {
			return e(un(r, n, t));
		}
	};
}), R("SidebarIndexTableOfContents"))(Eh);
//#endregion
//#region node_modules/mirador/dist/es/src/components/WindowSideBarCanvasPanel.js
function Oh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function kh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, jh(r.key), r);
	}
}
function Ah(e, t, n) {
	return t && kh(e.prototype, t), n && kh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jh(e) {
	var t = Mh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Mh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Nh(e, t, n) {
	return t = Lh(t), Ph(e, Ih() ? Reflect.construct(t, n || [], Lh(e).constructor) : t.apply(e, n));
}
function Ph(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Fh(e);
}
function Fh(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ih() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Ih = function() {
		return !!e;
	})();
}
function Lh(e) {
	return Lh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Lh(e);
}
function Rh(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zh(e, t);
}
function zh(e, t) {
	return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, zh(e, t);
}
var Bh = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Oh(this, t), n = Nh(this, t, [e]), n.handleSequenceChange = n.handleSequenceChange.bind(n), n.handleVariantChange = n.handleVariantChange.bind(n), n.containerRef = /*#__PURE__*/ X.createRef(), n;
	}
	return Rh(t, e), Ah(t, [
		{
			key: "handleSequenceChange",
			value: function(e) {
				var t = this.props.updateSequence;
				t(e.target.value);
			}
		},
		{
			key: "handleVariantChange",
			value: function(e, t) {
				var n = this.props.updateVariant;
				n(t);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, n = e.classes, r = e.collection, i = e.id, a = e.showMultipart, o = e.sequenceId, s = e.sequences, c = e.t, l = e.variant, u = e.showToc, d = e.windowId, f = l === "tableOfContents" ? /*#__PURE__*/ X.createElement(Dh, {
					id: i,
					containerRef: this.containerRef,
					windowId: d
				}) : /*#__PURE__*/ X.createElement(Jm, {
					id: i,
					containerRef: this.containerRef,
					windowId: d
				});
				return /*#__PURE__*/ X.createElement(wd, {
					title: c("canvasIndex"),
					id: i,
					windowId: d,
					ref: this.containerRef,
					otherRef: this.containerRef,
					titleControls: /*#__PURE__*/ X.createElement(X.Fragment, null, s && s.length > 1 && /*#__PURE__*/ X.createElement(cc, null, /*#__PURE__*/ X.createElement(pl, {
						MenuProps: {
							anchorOrigin: {
								horizontal: "left",
								vertical: "bottom"
							},
							getContentAnchorEl: null
						},
						displayEmpty: !0,
						value: o,
						onChange: this.handleSequenceChange,
						name: "sequenceId",
						classes: { select: n.select },
						className: n.selectEmpty
					}, s.map(function(e, n) {
						return /*#__PURE__*/ X.createElement(na, {
							value: e.id,
							key: e.id
						}, /*#__PURE__*/ X.createElement(Ln, { variant: "body2" }, t.getUseableLabel(e, n)));
					}))), /*#__PURE__*/ X.createElement("div", { className: n.break }), /*#__PURE__*/ X.createElement(ru, {
						value: l,
						onChange: this.handleVariantChange,
						variant: "fullWidth",
						indicatorColor: "primary",
						textColor: "primary"
					}, u && /*#__PURE__*/ X.createElement(Ut, {
						title: c("tableOfContentsList"),
						value: "tableOfContents"
					}, /*#__PURE__*/ X.createElement(Pl, {
						className: n.variantTab,
						value: "tableOfContents",
						"aria-label": c("tableOfContentsList"),
						"aria-controls": `tab-panel-${i}`,
						icon: /*#__PURE__*/ X.createElement(em.default, { style: { transform: "scale(-1, 1)" } })
					})), /*#__PURE__*/ X.createElement(Ut, {
						title: c("itemList"),
						value: "item"
					}, /*#__PURE__*/ X.createElement(Pl, {
						className: n.variantTab,
						value: "item",
						"aria-label": c("itemList"),
						"aria-controls": `tab-panel-${i}`,
						icon: /*#__PURE__*/ X.createElement($p.default, null)
					})), /*#__PURE__*/ X.createElement(Ut, {
						title: c("thumbnailList"),
						value: "thumbnail"
					}, /*#__PURE__*/ X.createElement(Pl, {
						className: n.variantTab,
						value: "thumbnail",
						"aria-label": c("thumbnailList"),
						"aria-controls": `tab-panel-${i}`,
						icon: /*#__PURE__*/ X.createElement(ap.default, null)
					}))))
				}, /*#__PURE__*/ X.createElement("div", { id: `tab-panel-${i}` }, r && /*#__PURE__*/ X.createElement(ar, {
					fullWidth: !0,
					onClick: a,
					endIcon: /*#__PURE__*/ X.createElement(tm.default, null)
				}, /*#__PURE__*/ X.createElement(Ln, { className: n.collectionNavigationButton }, t.getUseableLabel(r))), f));
			}
		}
	], [{
		key: "getUseableLabel",
		value: function(e, t) {
			return e && e.getLabel && e.getLabel().length > 0 ? e.getLabel().getValue() : e.id;
		}
	}]);
}(X.Component);
Bh.defaultProps = {
	collection: null,
	sequenceId: null,
	sequences: [],
	showToc: !1
}, s(), q();
var Vh = V(Ge(), Y(function(e) {
	return {
		break: {
			flexBasis: "100%",
			height: 0
		},
		collectionNavigationButton: { textTransform: "none" },
		label: { paddingLeft: e.spacing(1) },
		select: { "&:focus": { backgroundColor: e.palette.background.paper } },
		selectEmpty: { backgroundColor: e.palette.background.paper },
		variantTab: { minWidth: "auto" }
	};
}), Et(function(e, t) {
	var n = t.id, r = t.windowId, i = Re(e, { windowId: r }), a = Ye(e, { windowId: r }), o = e.config, s = Le(e, { companionWindowId: n }), c = a.collectionPath || [], l = c && c[c.length - 1], u = it(e, { windowId: r });
	return {
		collection: l && P(e, { manifestId: l }),
		config: o,
		sequenceId: u && u.id,
		sequences: Rt(e, { windowId: r }),
		showToc: i && i.nodes && i.nodes.length > 0,
		variant: s.variant || Je(e, { windowId: r })
	};
}, function(e, t) {
	var n = t.id, r = t.windowId;
	return {
		showMultipart: function() {
			return e(hn(r, {
				content: "collection",
				position: "right"
			}));
		},
		updateSequence: function(t) {
			return e(dn(r, { sequenceId: t }));
		},
		updateVariant: function(t) {
			return e(mn(r, n, { variant: t }));
		}
	};
}), R("WindowSideBarCanvasPanel"))(Bh);
J(), Nt(), tt(), Ze(), q();
var Hh = function(e) {
	return {
		root: {
			display: "block",
			backgroundColor: Ie(e.palette.text.primary, e.palette.type === "light" ? .11 : .13),
			height: "1.2em"
		},
		text: {
			marginTop: 0,
			marginBottom: 0,
			height: "auto",
			transformOrigin: "0 60%",
			transform: "scale(1, 0.60)",
			borderRadius: e.shape.borderRadius,
			"&:empty:before": { content: "\"\\00a0\"" }
		},
		rect: {},
		circle: { borderRadius: "50%" },
		pulse: { animation: "$pulse 1.5s ease-in-out 0.5s infinite" },
		"@keyframes pulse": {
			"0%": { opacity: 1 },
			"50%": { opacity: .4 },
			"100%": { opacity: 1 }
		},
		wave: {
			position: "relative",
			overflow: "hidden",
			"&::after": {
				animation: "$wave 1.6s linear 0.5s infinite",
				background: `linear-gradient(90deg, transparent, ${e.palette.action.hover}, transparent)`,
				content: "\"\"",
				position: "absolute",
				transform: "translateX(-100%)",
				bottom: 0,
				left: 0,
				right: 0,
				top: 0
			}
		},
		"@keyframes wave": {
			"0%": { transform: "translateX(-100%)" },
			"60%": { transform: "translateX(100%)" },
			"100%": { transform: "translateX(100%)" }
		},
		withChildren: { "& > *": { visibility: "hidden" } },
		fitContent: { maxWidth: "fit-content" },
		heightAuto: { height: "auto" }
	};
}, Uh = /*#__PURE__*/ X.forwardRef(function(e, t) {
	var n = e.animation, r = n === void 0 ? "pulse" : n, i = e.classes, a = e.className, o = e.component, s = o === void 0 ? "span" : o, c = e.height, l = e.variant, u = l === void 0 ? "text" : l, d = e.width, f = _(e, [
		"animation",
		"classes",
		"className",
		"component",
		"height",
		"variant",
		"width"
	]), p = !!f.children;
	return /*#__PURE__*/ X.createElement(s, K({
		ref: t,
		className: G(i.root, i[u], a, p && [
			i.withChildren,
			!d && i.fitContent,
			!c && i.heightAuto
		], r !== !1 && i[r])
	}, f, { style: K({
		width: d,
		height: c
	}, f.style) }));
}), Wh = Y(Hh, { name: "MuiSkeleton" })(Uh), Gh = /* @__PURE__ */ i(((e, t) => {
	var n = nr().default;
	function r(e, t) {
		if (n(e) != "object" || !e) return e;
		var r = e[Symbol.toPrimitive];
		if (r !== void 0) {
			var i = r.call(e, t || "default");
			if (n(i) != "object") return i;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})), Kh = /* @__PURE__ */ i(((e, t) => {
	var n = nr().default, r = Gh();
	function i(e) {
		var t = r(e, "string");
		return n(t) == "symbol" ? t : t + "";
	}
	t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})), qh = /* @__PURE__ */ i(((e, t) => {
	var n = Kh();
	function r(e, t, r) {
		return (t = n(t)) in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e;
	}
	t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})), Jh = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) !== -1) continue;
			n[r] = e[r];
		}
		return n;
	}
	t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})), Yh = /* @__PURE__ */ i(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? r(e, qh(), Jh(), W()) : typeof define == "function" && define.amd ? define([
			"exports",
			"@babel/runtime/helpers/defineProperty",
			"@babel/runtime/helpers/objectWithoutPropertiesLoose",
			"react"
		], r) : (n = typeof globalThis > "u" ? n || self : globalThis, r(n.Img = {}, n._defineProperty, n._objectWithoutPropertiesLoose, n.React));
	})(e, function(e, t, n, r) {
		function i(e) {
			return e && typeof e == "object" && "default" in e ? e : { default: e };
		}
		function a(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})), n.push.apply(n, r);
			}
			return n;
		}
		function o(e) {
			for (var t, n = 1; n < arguments.length; n++) t = arguments[n] == null ? {} : arguments[n], n % 2 ? a(Object(t), !0).forEach(function(n) {
				u.default(e, n, t[n]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
				Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
			});
			return e;
		}
		function s(e) {
			var t = e.srcList, n = e.imgPromise, i = n === void 0 ? p({ decode: !0 }) : n, a = e.useSuspense, s = a === void 0 || a, c = r.useState(!1)[1], l = m(h(t)), u = l.join("");
			if (g[u] || (g[u] = {
				promise: _(l, i),
				cache: "pending",
				error: null
			}), g[u].cache === "resolved") return {
				src: g[u].src,
				isLoading: !1,
				error: null
			};
			if (g[u].cache === "rejected") {
				if (s) throw g[u].error;
				return {
					isLoading: !1,
					error: g[u].error,
					src: void 0
				};
			}
			if (g[u].promise.then(function(e) {
				g[u] = o(o({}, g[u]), {}, {
					cache: "resolved",
					src: e
				}), s || c(u);
			}).catch(function(e) {
				g[u] = o(o({}, g[u]), {}, {
					cache: "rejected",
					error: e
				}), s || c(u);
			}), s) throw g[u].promise;
			return {
				isLoading: !0,
				src: void 0,
				error: null
			};
		}
		function c(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})), n.push.apply(n, r);
			}
			return n;
		}
		function l(e) {
			for (var t, n = 1; n < arguments.length; n++) t = arguments[n] == null ? {} : arguments[n], n % 2 ? c(Object(t), !0).forEach(function(n) {
				u.default(e, n, t[n]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
				Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
			});
			return e;
		}
		var u = i(t), d = i(n), f = i(r), p = function(e) {
			var t = e.decode, n = e.crossOrigin, r = n === void 0 ? "" : n;
			return function(e) {
				return new Promise(function(n, i) {
					var a = new Image();
					r && (a.crossOrigin = r), a.onload = function() {
						(t === void 0 || t) && a.decode ? a.decode().then(n).catch(i) : n();
					}, a.onerror = i, a.src = e;
				});
			};
		}, m = function(e) {
			return e.filter(function(e) {
				return e;
			});
		}, h = function(e) {
			return Array.isArray(e) ? e : [e];
		}, g = {}, _ = function(e, t) {
			var n = !1;
			return new Promise(function(r, i) {
				var a = function(e) {
					return t(e).then(function() {
						n = !0, r(e);
					});
				};
				e.reduce(function(e, t) {
					return e.catch(function() {
						if (!n) return a(t);
					});
				}, a(e.shift())).catch(i);
			});
		}, v = [
			"decode",
			"src",
			"loader",
			"unloader",
			"container",
			"loaderContainer",
			"unloaderContainer",
			"imgPromise",
			"crossorigin",
			"useSuspense"
		], y = function(e) {
			return e;
		};
		e.Img = function(e) {
			var t = e.decode, n = e.src, r = n === void 0 ? [] : n, i = e.loader, a = i === void 0 ? null : i, o = e.unloader, c = o === void 0 ? null : o, u = e.container, m = u === void 0 ? y : u, h = e.loaderContainer, g = h === void 0 ? y : h, _ = e.unloaderContainer, b = _ === void 0 ? y : _, x = e.imgPromise, S = e.crossorigin, C = e.useSuspense, w = C !== void 0 && C, T = d.default(e, v);
			x ||= p({
				decode: t === void 0 || t,
				crossOrigin: S
			});
			var E = s({
				srcList: r,
				imgPromise: x,
				useSuspense: w
			}), D = E.src, ee = E.isLoading;
			return D ? m(f.default.createElement("img", l({ src: D }, T))) : !w && ee ? g(a) : !w && c ? b(c) : null;
		}, e.useImage = s, Object.defineProperty(e, "__esModule", { value: !0 });
	});
})), Xh = Yh();
function Zh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Qh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, eg(r.key), r);
	}
}
function $h(e, t, n) {
	return t && Qh(e.prototype, t), n && Qh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eg(e) {
	var t = tg(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function tg(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ng(e, t, n) {
	return t = og(t), rg(e, ag() ? Reflect.construct(t, n || [], og(e).constructor) : t.apply(e, n));
}
function rg(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ig(e);
}
function ig(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ag() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ag = function() {
		return !!e;
	})();
}
function og(e) {
	return og = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, og(e);
}
function sg(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cg(e, t);
}
function cg(e, t) {
	return cg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, cg(e, t);
}
var lg = /*#__PURE__*/ function(e) {
	function t() {
		return Zh(this, t), ng(this, t, arguments);
	}
	return sg(t, e), $h(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.manifestLogo, n = e.requiredStatement, r = e.rights, i = e.windowId, a = e.id, o = e.classes, s = e.t;
			return /*#__PURE__*/ X.createElement(wd, {
				title: s("attributionTitle"),
				paperClassName: rr("attribution-panel"),
				windowId: i,
				id: a
			}, /*#__PURE__*/ X.createElement("div", { className: o.section }, n && /*#__PURE__*/ X.createElement(gf, {
				labelValuePairs: n,
				defaultLabel: s("attribution")
			}), r && r.length > 0 && /*#__PURE__*/ X.createElement("dl", { className: rr("label-value-metadata") }, /*#__PURE__*/ X.createElement(Ln, {
				variant: "subtitle2",
				component: "dt"
			}, s("rights")), r.map(function(e) {
				return /*#__PURE__*/ X.createElement(Ln, {
					variant: "body1",
					component: "dd",
					key: e.toString()
				}, /*#__PURE__*/ X.createElement(kc, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: e
				}, e));
			}))), t && /*#__PURE__*/ X.createElement("div", { className: o.section }, /*#__PURE__*/ X.createElement(Xh.Img, {
				src: [t],
				alt: "",
				role: "presentation",
				className: o.logo,
				unloader: /*#__PURE__*/ X.createElement(Wh, {
					className: o.placeholder,
					variant: "rect",
					height: 60,
					width: 60
				})
			})), /*#__PURE__*/ X.createElement(ir, this.props));
		}
	}]);
}(X.Component);
lg.defaultProps = {
	classes: {},
	manifestLogo: null,
	requiredStatement: null,
	rights: null,
	t: function(e) {
		return e;
	}
}, s(), q();
var ug = V(Y(function(e) {
	return {
		logo: { maxWidth: "100%" },
		placeholder: { backgroundColor: e.palette.grey[300] },
		section: {
			borderBottom: `.5px solid ${e.palette.section_divider}`,
			paddingBottom: e.spacing(1),
			paddingLeft: e.spacing(2),
			paddingRight: e.spacing(1),
			paddingTop: e.spacing(2)
		}
	};
}), Ge(), Et(function(e, t) {
	t.id;
	var n = t.windowId;
	return {
		manifestLogo: C(e, { windowId: n }),
		requiredStatement: ge(e, { windowId: n }),
		rights: Ht(e, { windowId: n })
	};
}), R("AttributionPanel"))(lg), dg = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return function(t) {
			return e?.[t];
		};
	}
	t.exports = n;
})), fg = /* @__PURE__ */ i(((e, t) => {
	t.exports = dg()({
		À: "A",
		Á: "A",
		Â: "A",
		Ã: "A",
		Ä: "A",
		Å: "A",
		à: "a",
		á: "a",
		â: "a",
		ã: "a",
		ä: "a",
		å: "a",
		Ç: "C",
		ç: "c",
		Ð: "D",
		ð: "d",
		È: "E",
		É: "E",
		Ê: "E",
		Ë: "E",
		è: "e",
		é: "e",
		ê: "e",
		ë: "e",
		Ì: "I",
		Í: "I",
		Î: "I",
		Ï: "I",
		ì: "i",
		í: "i",
		î: "i",
		ï: "i",
		Ñ: "N",
		ñ: "n",
		Ò: "O",
		Ó: "O",
		Ô: "O",
		Õ: "O",
		Ö: "O",
		Ø: "O",
		ò: "o",
		ó: "o",
		ô: "o",
		õ: "o",
		ö: "o",
		ø: "o",
		Ù: "U",
		Ú: "U",
		Û: "U",
		Ü: "U",
		ù: "u",
		ú: "u",
		û: "u",
		ü: "u",
		Ý: "Y",
		ý: "y",
		ÿ: "y",
		Æ: "Ae",
		æ: "ae",
		Þ: "Th",
		þ: "th",
		ß: "ss",
		Ā: "A",
		Ă: "A",
		Ą: "A",
		ā: "a",
		ă: "a",
		ą: "a",
		Ć: "C",
		Ĉ: "C",
		Ċ: "C",
		Č: "C",
		ć: "c",
		ĉ: "c",
		ċ: "c",
		č: "c",
		Ď: "D",
		Đ: "D",
		ď: "d",
		đ: "d",
		Ē: "E",
		Ĕ: "E",
		Ė: "E",
		Ę: "E",
		Ě: "E",
		ē: "e",
		ĕ: "e",
		ė: "e",
		ę: "e",
		ě: "e",
		Ĝ: "G",
		Ğ: "G",
		Ġ: "G",
		Ģ: "G",
		ĝ: "g",
		ğ: "g",
		ġ: "g",
		ģ: "g",
		Ĥ: "H",
		Ħ: "H",
		ĥ: "h",
		ħ: "h",
		Ĩ: "I",
		Ī: "I",
		Ĭ: "I",
		Į: "I",
		İ: "I",
		ĩ: "i",
		ī: "i",
		ĭ: "i",
		į: "i",
		ı: "i",
		Ĵ: "J",
		ĵ: "j",
		Ķ: "K",
		ķ: "k",
		ĸ: "k",
		Ĺ: "L",
		Ļ: "L",
		Ľ: "L",
		Ŀ: "L",
		Ł: "L",
		ĺ: "l",
		ļ: "l",
		ľ: "l",
		ŀ: "l",
		ł: "l",
		Ń: "N",
		Ņ: "N",
		Ň: "N",
		Ŋ: "N",
		ń: "n",
		ņ: "n",
		ň: "n",
		ŋ: "n",
		Ō: "O",
		Ŏ: "O",
		Ő: "O",
		ō: "o",
		ŏ: "o",
		ő: "o",
		Ŕ: "R",
		Ŗ: "R",
		Ř: "R",
		ŕ: "r",
		ŗ: "r",
		ř: "r",
		Ś: "S",
		Ŝ: "S",
		Ş: "S",
		Š: "S",
		ś: "s",
		ŝ: "s",
		ş: "s",
		š: "s",
		Ţ: "T",
		Ť: "T",
		Ŧ: "T",
		ţ: "t",
		ť: "t",
		ŧ: "t",
		Ũ: "U",
		Ū: "U",
		Ŭ: "U",
		Ů: "U",
		Ű: "U",
		Ų: "U",
		ũ: "u",
		ū: "u",
		ŭ: "u",
		ů: "u",
		ű: "u",
		ų: "u",
		Ŵ: "W",
		ŵ: "w",
		Ŷ: "Y",
		ŷ: "y",
		Ÿ: "Y",
		Ź: "Z",
		Ż: "Z",
		Ž: "Z",
		ź: "z",
		ż: "z",
		ž: "z",
		Ĳ: "IJ",
		ĳ: "ij",
		Œ: "Oe",
		œ: "oe",
		ŉ: "'n",
		ſ: "s"
	});
})), pg = /* @__PURE__ */ i(((e, t) => {
	var n = fg(), r = A(), i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
	function o(e) {
		return e = r(e), e && e.replace(i, n).replace(a, "");
	}
	t.exports = o;
}));
//#endregion
//#region node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js
Zn();
var mg = Wn(/*#__PURE__*/ X.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close");
//#endregion
//#region node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js
Zn();
var hg = Wn(/*#__PURE__*/ X.createElement("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown");
J(), At(), Zn();
function gg(e) {
	return e.normalize === void 0 ? e : e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function _g() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.ignoreAccents, n = t === void 0 ? !0 : t, r = e.ignoreCase, i = r === void 0 ? !0 : r, a = e.limit, o = e.matchFrom, s = o === void 0 ? "any" : o, c = e.stringify, l = e.trim, u = l === void 0 ? !1 : l;
	return function(e, t) {
		var r = t.inputValue, o = t.getOptionLabel, l = u ? r.trim() : r;
		i && (l = l.toLowerCase()), n && (l = gg(l));
		var d = e.filter(function(e) {
			var t = (c || o)(e);
			return i && (t = t.toLowerCase()), n && (t = gg(t)), s === "start" ? t.indexOf(l) === 0 : t.indexOf(l) > -1;
		});
		return typeof a == "number" ? d.slice(0, a) : d;
	};
}
function vg(e, t) {
	for (var n = 0; n < e.length; n += 1) if (t(e[n])) return n;
	return -1;
}
var yg = _g(), bg = 5;
function xg(e) {
	var t = e.autoComplete, n = t === void 0 ? !1 : t, r = e.autoHighlight, i = r === void 0 ? !1 : r, a = e.autoSelect, o = a === void 0 ? !1 : a, s = e.blurOnSelect, c = s === void 0 ? !1 : s, l = e.clearOnBlur, u = l === void 0 ? !e.freeSolo : l, d = e.clearOnEscape, f = d === void 0 ? !1 : d, p = e.componentName, m = p === void 0 ? "useAutocomplete" : p, h = e.debug, g = h === void 0 ? !1 : h, _ = e.defaultValue, v = _ === void 0 ? e.multiple ? [] : null : _, y = e.disableClearable, b = y === void 0 ? !1 : y, x = e.disableCloseOnSelect, S = x === void 0 ? !1 : x, C = e.disabledItemsFocusable, w = C === void 0 ? !1 : C, T = e.disableListWrap, E = T === void 0 ? !1 : T, D = e.filterOptions, ee = D === void 0 ? yg : D, O = e.filterSelectedOptions, k = O === void 0 ? !1 : O, A = e.freeSolo, j = A === void 0 ? !1 : A, M = e.getOptionDisabled, te = e.getOptionLabel, N = te === void 0 ? function(e) {
		return e;
	} : te, P = e.getOptionSelected, F = P === void 0 ? function(e, t) {
		return e === t;
	} : P, ne = e.groupBy, I = e.handleHomeEndKeys, re = I === void 0 ? !e.freeSolo : I, L = e.id, R = e.includeInputInList, ie = R === void 0 ? !1 : R, ae = e.inputValue, oe = e.multiple, z = oe === void 0 ? !1 : oe, se = e.onChange, ce = e.onClose, B = e.onHighlightChange, V = e.onInputChange, le = e.onOpen, ue = e.open, de = e.openOnFocus, fe = de === void 0 ? !1 : de, H = e.options, pe = e.selectOnFocus, me = pe === void 0 ? !e.freeSolo : pe, U = e.value, he = qn(L), ge = N, _e = X.useRef(!1), ve = X.useRef(!0), ye = X.useRef(null), be = X.useRef(null), xe = X.useState(null), Se = xe[0], Ce = xe[1], we = X.useState(-1), Te = we[0], Ee = we[1], De = i ? 0 : -1, Oe = X.useRef(De), ke = gt(zn({
		controlled: U,
		default: v,
		name: m
	}), 2), Ae = ke[0], je = ke[1], Me = gt(zn({
		controlled: ae,
		default: "",
		name: m,
		state: "inputValue"
	}), 2), Ne = Me[0], Pe = Me[1], Fe = X.useState(!1), Ie = Fe[0], Le = Fe[1], Re = Qn(function(e, t) {
		var n;
		if (z) n = "";
		else if (t == null) n = "";
		else {
			var r = ge(t);
			n = typeof r == "string" ? r : "";
		}
		Ne !== n && (Pe(n), V && V(e, n, "reset"));
	});
	X.useEffect(function() {
		Re(null, Ae);
	}, [Ae, Re]);
	var ze = gt(zn({
		controlled: ue,
		default: !1,
		name: m,
		state: "open"
	}), 2), Be = ze[0], Ve = ze[1], He = !z && Ae != null && Ne === ge(Ae), Ue = Be, We = Ue ? ee(H.filter(function(e) {
		return !(k && (z ? Ae : [Ae]).some(function(t) {
			return t !== null && F(e, t);
		}));
	}), {
		inputValue: He ? "" : Ne,
		getOptionLabel: ge
	}) : [], Ge = Qn(function(e) {
		e === -1 ? ye.current.focus() : Se.querySelector(`[data-tag-index="${e}"]`).focus();
	});
	X.useEffect(function() {
		z && Te > Ae.length - 1 && (Ee(-1), Ge(-1));
	}, [
		Ae,
		z,
		Te,
		Ge
	]);
	function Ke(e, t) {
		if (!be.current || e === -1) return -1;
		for (var n = e;;) {
			if (t === "next" && n === We.length || t === "previous" && n === -1) return -1;
			var r = be.current.querySelector(`[data-option-index="${n}"]`), i = w ? !1 : r && (r.disabled || r.getAttribute("aria-disabled") === "true");
			if (r && !r.hasAttribute("tabindex") || i) n += t === "next" ? 1 : -1;
			else return n;
		}
	}
	var qe = Qn(function(e) {
		var t = e.event, n = e.index, r = e.reason, i = r === void 0 ? "auto" : r;
		if (Oe.current = n, n === -1 ? ye.current.removeAttribute("aria-activedescendant") : ye.current.setAttribute("aria-activedescendant", `${he}-option-${n}`), B && B(t, n === -1 ? null : We[n], i), be.current) {
			var a = be.current.querySelector("[data-focus]");
			a && a.removeAttribute("data-focus");
			var o = be.current.parentElement.querySelector("[role=\"listbox\"]");
			if (o) {
				if (n === -1) {
					o.scrollTop = 0;
					return;
				}
				var s = be.current.querySelector(`[data-option-index="${n}"]`);
				if (s && (s.setAttribute("data-focus", "true"), o.scrollHeight > o.clientHeight && i !== "mouse")) {
					var c = s, l = o.clientHeight + o.scrollTop, u = c.offsetTop + c.offsetHeight;
					u > l ? o.scrollTop = u - o.clientHeight : c.offsetTop - c.offsetHeight * (ne ? 1.3 : 0) < o.scrollTop && (o.scrollTop = c.offsetTop - c.offsetHeight * (ne ? 1.3 : 0));
				}
			}
		}
	}), Je = Qn(function(e) {
		var t = e.event, r = e.diff, i = e.direction, a = i === void 0 ? "next" : i, o = e.reason, s = o === void 0 ? "auto" : o;
		if (Ue) {
			var c = Ke(function() {
				var e = We.length - 1;
				if (r === "reset") return De;
				if (r === "start") return 0;
				if (r === "end") return e;
				var t = Oe.current + r;
				return t < 0 ? t === -1 && ie ? -1 : E && Oe.current !== -1 || Math.abs(r) > 1 ? 0 : e : t > e ? t === e + 1 && ie ? -1 : E || Math.abs(r) > 1 ? e : 0 : t;
			}(), a);
			if (qe({
				index: c,
				reason: s,
				event: t
			}), n && r !== "reset") if (c === -1) ye.current.value = Ne;
			else {
				var l = ge(We[c]);
				ye.current.value = l, l.toLowerCase().indexOf(Ne.toLowerCase()) === 0 && Ne.length > 0 && ye.current.setSelectionRange(Ne.length, l.length);
			}
		}
	}), W = X.useCallback(function() {
		if (Ue) {
			var e = z ? Ae[0] : Ae;
			if (We.length === 0 || e == null) {
				Je({ diff: "reset" });
				return;
			}
			if (be.current) {
				if (!k && e != null) {
					var t = We[Oe.current];
					if (z && t && vg(Ae, function(e) {
						return F(t, e);
					}) !== -1) return;
					var n = vg(We, function(t) {
						return F(t, e);
					});
					n === -1 ? Je({ diff: "reset" }) : qe({ index: n });
					return;
				}
				if (Oe.current >= We.length - 1) {
					qe({ index: We.length - 1 });
					return;
				}
				qe({ index: Oe.current });
			}
		}
	}, [
		We.length === 0,
		z ? !1 : Ae,
		k,
		Je,
		qe,
		Ue,
		Ne,
		z
	]), Ye = Qn(function(e) {
		Pn(be, e), e && W();
	});
	X.useEffect(function() {
		W();
	}, [W]);
	var Xe = function(e) {
		Be || (Ve(!0), le && le(e));
	}, Ze = function(e, t) {
		Be && (Ve(!1), ce && ce(e, t));
	}, Qe = function(e, t, n, r) {
		Ae !== t && (se && se(e, t, n, r), je(t));
	}, $e = X.useRef(!1), et = function(e, t) {
		var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "select-option", r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "options", i = n, a = t;
		if (z) {
			a = Array.isArray(Ae) ? Ae.slice() : [];
			var o = vg(a, function(e) {
				return F(t, e);
			});
			o === -1 ? a.push(t) : r !== "freeSolo" && (a.splice(o, 1), i = "remove-option");
		}
		Re(e, a), Qe(e, a, i, { option: t }), S || Ze(e, i), (c === !0 || c === "touch" && $e.current || c === "mouse" && !$e.current) && ye.current.blur();
	};
	function tt(e, t) {
		if (e === -1) return -1;
		for (var n = e;;) {
			if (t === "next" && n === Ae.length || t === "previous" && n === -1) return -1;
			var r = Se.querySelector(`[data-tag-index="${n}"]`);
			if (r && (!r.hasAttribute("tabindex") || r.disabled || r.getAttribute("aria-disabled") === "true")) n += t === "next" ? 1 : -1;
			else return n;
		}
	}
	var nt = function(e, t) {
		if (z) {
			Ze(e, "toggleInput");
			var n = Te;
			Te === -1 ? Ne === "" && t === "previous" && (n = Ae.length - 1) : (n += t === "next" ? 1 : -1, n < 0 && (n = 0), n === Ae.length && (n = -1)), n = tt(n, t), Ee(n), Ge(n);
		}
	}, rt = function(e) {
		_e.current = !0, Pe(""), V && V(e, "", "clear"), Qe(e, z ? [] : null, "clear");
	}, it = function(e) {
		return function(t) {
			switch (Te !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(t.key) === -1 && (Ee(-1), Ge(-1)), t.key) {
				case "Home":
					Ue && re && (t.preventDefault(), Je({
						diff: "start",
						direction: "next",
						reason: "keyboard",
						event: t
					}));
					break;
				case "End":
					Ue && re && (t.preventDefault(), Je({
						diff: "end",
						direction: "previous",
						reason: "keyboard",
						event: t
					}));
					break;
				case "PageUp":
					t.preventDefault(), Je({
						diff: -bg,
						direction: "previous",
						reason: "keyboard",
						event: t
					}), Xe(t);
					break;
				case "PageDown":
					t.preventDefault(), Je({
						diff: bg,
						direction: "next",
						reason: "keyboard",
						event: t
					}), Xe(t);
					break;
				case "ArrowDown":
					t.preventDefault(), Je({
						diff: 1,
						direction: "next",
						reason: "keyboard",
						event: t
					}), Xe(t);
					break;
				case "ArrowUp":
					t.preventDefault(), Je({
						diff: -1,
						direction: "previous",
						reason: "keyboard",
						event: t
					}), Xe(t);
					break;
				case "ArrowLeft":
					nt(t, "previous");
					break;
				case "ArrowRight":
					nt(t, "next");
					break;
				case "Enter":
					if (t.which === 229) break;
					if (Oe.current !== -1 && Ue) {
						var r = We[Oe.current], i = M ? M(r) : !1;
						if (t.preventDefault(), i) return;
						et(t, r, "select-option"), n && ye.current.setSelectionRange(ye.current.value.length, ye.current.value.length);
					} else j && Ne !== "" && He === !1 && (z && t.preventDefault(), et(t, Ne, "create-option", "freeSolo"));
					break;
				case "Escape":
					Ue ? (t.preventDefault(), t.stopPropagation(), Ze(t, "escape")) : f && (Ne !== "" || z && Ae.length > 0) && (t.preventDefault(), t.stopPropagation(), rt(t));
					break;
				case "Backspace":
					if (z && Ne === "" && Ae.length > 0) {
						var a = Te === -1 ? Ae.length - 1 : Te, o = Ae.slice();
						o.splice(a, 1), Qe(t, o, "remove-option", { option: Ae[a] });
					}
					break;
				default:
			}
			e.onKeyDown && e.onKeyDown(t);
		};
	}, at = function(e) {
		Le(!0), fe && !_e.current && Xe(e);
	}, ot = function(e) {
		if (be.current !== null && document.activeElement === be.current.parentElement) {
			ye.current.focus();
			return;
		}
		Le(!1), ve.current = !0, _e.current = !1, !(g && Ne !== "") && (o && Oe.current !== -1 && Ue ? et(e, We[Oe.current], "blur") : o && j && Ne !== "" ? et(e, Ne, "blur", "freeSolo") : u && Re(e, Ae), Ze(e, "blur"));
	}, st = function(e) {
		var t = e.target.value;
		Ne !== t && (Pe(t), V && V(e, t, "input")), t === "" ? !b && !z && Qe(e, null, "clear") : Xe(e);
	}, ct = function(e) {
		qe({
			event: e,
			index: Number(e.currentTarget.getAttribute("data-option-index")),
			reason: "mouse"
		});
	}, lt = function() {
		$e.current = !0;
	}, ut = function(e) {
		et(e, We[Number(e.currentTarget.getAttribute("data-option-index"))], "select-option"), $e.current = !1;
	}, dt = function(e) {
		return function(t) {
			var n = Ae.slice();
			n.splice(e, 1), Qe(t, n, "remove-option", { option: Ae[e] });
		};
	}, ft = function(e) {
		Be ? Ze(e, "toggleInput") : Xe(e);
	}, pt = function(e) {
		e.target.getAttribute("id") !== he && e.preventDefault();
	}, mt = function() {
		ye.current.focus(), me && ve.current && ye.current.selectionEnd - ye.current.selectionStart === 0 && ye.current.select(), ve.current = !1;
	}, ht = function(e) {
		(Ne === "" || !Be) && ft(e);
	}, _t = j && Ne.length > 0;
	_t ||= z ? Ae.length > 0 : Ae !== null;
	var G = We;
	return ne && (G = We.reduce(function(e, t, n) {
		var r = ne(t);
		return e.length > 0 && e[e.length - 1].group === r ? e[e.length - 1].options.push(t) : e.push({
			key: n,
			index: n,
			group: r,
			options: [t]
		}), e;
	}, [])), {
		getRootProps: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return K({
				"aria-owns": Ue ? `${he}-popup` : null,
				role: "combobox",
				"aria-expanded": Ue
			}, e, {
				onKeyDown: it(e),
				onMouseDown: pt,
				onClick: mt
			});
		},
		getInputLabelProps: function() {
			return {
				id: `${he}-label`,
				htmlFor: he
			};
		},
		getInputProps: function() {
			return {
				id: he,
				value: Ne,
				onBlur: ot,
				onFocus: at,
				onChange: st,
				onMouseDown: ht,
				"aria-activedescendant": Ue ? "" : null,
				"aria-autocomplete": n ? "both" : "list",
				"aria-controls": Ue ? `${he}-popup` : null,
				autoComplete: "off",
				ref: ye,
				autoCapitalize: "none",
				spellCheck: "false"
			};
		},
		getClearProps: function() {
			return {
				tabIndex: -1,
				onClick: rt
			};
		},
		getPopupIndicatorProps: function() {
			return {
				tabIndex: -1,
				onClick: ft
			};
		},
		getTagProps: function(e) {
			var t = e.index;
			return {
				key: t,
				"data-tag-index": t,
				tabIndex: -1,
				onDelete: dt(t)
			};
		},
		getListboxProps: function() {
			return {
				role: "listbox",
				id: `${he}-popup`,
				"aria-labelledby": `${he}-label`,
				ref: Ye,
				onMouseDown: function(e) {
					e.preventDefault();
				}
			};
		},
		getOptionProps: function(e) {
			var t = e.index, n = e.option, r = (z ? Ae : [Ae]).some(function(e) {
				return e != null && F(n, e);
			}), i = M ? M(n) : !1;
			return {
				key: t,
				tabIndex: -1,
				role: "option",
				id: `${he}-option-${t}`,
				onMouseOver: ct,
				onClick: ut,
				onTouchStart: lt,
				"data-option-index": t,
				"aria-disabled": i,
				"aria-selected": r
			};
		},
		id: he,
		inputValue: Ne,
		value: Ae,
		dirty: _t,
		popupOpen: Ue,
		focused: Ie || Te !== -1,
		anchorEl: Se,
		setAnchorEl: Ce,
		focusedTag: Te,
		groupedOptions: G
	};
}
Nt(), se(), J(), tt(), q();
var Sg = function(e) {
	var t;
	return {
		root: {
			"&$focused $clearIndicatorDirty": { visibility: "visible" },
			"@media (pointer: fine)": { "&:hover $clearIndicatorDirty": { visibility: "visible" } }
		},
		fullWidth: { width: "100%" },
		focused: {},
		tag: {
			margin: 3,
			maxWidth: "calc(100% - 6px)"
		},
		tagSizeSmall: {
			margin: 2,
			maxWidth: "calc(100% - 4px)"
		},
		hasPopupIcon: {},
		hasClearIcon: {},
		inputRoot: {
			flexWrap: "wrap",
			"$hasPopupIcon &, $hasClearIcon &": { paddingRight: 30 },
			"$hasPopupIcon$hasClearIcon &": { paddingRight: 56 },
			"& $input": {
				width: 0,
				minWidth: 30
			},
			"&[class*=\"MuiInput-root\"]": {
				paddingBottom: 1,
				"& $input": { padding: 4 },
				"& $input:first-child": { padding: "6px 0" }
			},
			"&[class*=\"MuiInput-root\"][class*=\"MuiInput-marginDense\"]": {
				"& $input": { padding: "4px 4px 5px" },
				"& $input:first-child": { padding: "3px 0 6px" }
			},
			"&[class*=\"MuiOutlinedInput-root\"]": {
				padding: 9,
				"$hasPopupIcon &, $hasClearIcon &": { paddingRight: 39 },
				"$hasPopupIcon$hasClearIcon &": { paddingRight: 65 },
				"& $input": { padding: "9.5px 4px" },
				"& $input:first-child": { paddingLeft: 6 },
				"& $endAdornment": { right: 9 }
			},
			"&[class*=\"MuiOutlinedInput-root\"][class*=\"MuiOutlinedInput-marginDense\"]": {
				padding: 6,
				"& $input": { padding: "4.5px 4px" }
			},
			"&[class*=\"MuiFilledInput-root\"]": {
				paddingTop: 19,
				paddingLeft: 8,
				"$hasPopupIcon &, $hasClearIcon &": { paddingRight: 39 },
				"$hasPopupIcon$hasClearIcon &": { paddingRight: 65 },
				"& $input": { padding: "9px 4px" },
				"& $endAdornment": { right: 9 }
			},
			"&[class*=\"MuiFilledInput-root\"][class*=\"MuiFilledInput-marginDense\"]": {
				paddingBottom: 1,
				"& $input": { padding: "4.5px 4px" }
			}
		},
		input: {
			flexGrow: 1,
			textOverflow: "ellipsis",
			opacity: 0
		},
		inputFocused: { opacity: 1 },
		endAdornment: {
			position: "absolute",
			right: 0,
			top: "calc(50% - 14px)"
		},
		clearIndicator: {
			marginRight: -2,
			padding: 4,
			visibility: "hidden"
		},
		clearIndicatorDirty: {},
		popupIndicator: {
			padding: 2,
			marginRight: -2
		},
		popupIndicatorOpen: { transform: "rotate(180deg)" },
		popper: { zIndex: e.zIndex.modal },
		popperDisablePortal: { position: "absolute" },
		paper: K({}, e.typography.body1, {
			overflow: "hidden",
			margin: "4px 0"
		}),
		listbox: {
			listStyle: "none",
			margin: 0,
			padding: "8px 0",
			maxHeight: "40vh",
			overflow: "auto"
		},
		loading: {
			color: e.palette.text.secondary,
			padding: "14px 16px"
		},
		noOptions: {
			color: e.palette.text.secondary,
			padding: "14px 16px"
		},
		option: (t = {
			minHeight: 48,
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			cursor: "pointer",
			paddingTop: 6,
			boxSizing: "border-box",
			outline: "0",
			WebkitTapHighlightColor: "transparent",
			paddingBottom: 6,
			paddingLeft: 16,
			paddingRight: 16
		}, oe(t, e.breakpoints.up("sm"), { minHeight: "auto" }), oe(t, "&[aria-selected=\"true\"]", { backgroundColor: e.palette.action.selected }), oe(t, "&[data-focus=\"true\"]", { backgroundColor: e.palette.action.hover }), oe(t, "&:active", { backgroundColor: e.palette.action.selected }), oe(t, "&[aria-disabled=\"true\"]", {
			opacity: e.palette.action.disabledOpacity,
			pointerEvents: "none"
		}), t),
		groupLabel: {
			backgroundColor: e.palette.background.paper,
			top: -8
		},
		groupUl: {
			padding: 0,
			"& $option": { paddingLeft: 24 }
		}
	};
};
function Cg(e) {
	e.anchorEl, e.open;
	var t = _(e, ["anchorEl", "open"]);
	return /*#__PURE__*/ X.createElement("div", t);
}
var wg = /*#__PURE__*/ X.createElement(mg, { fontSize: "small" }), Tg = /*#__PURE__*/ X.createElement(hg, null), Eg = /*#__PURE__*/ X.forwardRef(function(e, t) {
	e.autoComplete, e.autoHighlight, e.autoSelect, e.blurOnSelect;
	var n = e.ChipProps, r = e.classes, i = e.className;
	e.clearOnBlur === void 0 && e.freeSolo, e.clearOnEscape;
	var a = e.clearText, o = a === void 0 ? "Clear" : a, s = e.closeIcon, c = s === void 0 ? wg : s, l = e.closeText, u = l === void 0 ? "Close" : l;
	e.debug, e.defaultValue === void 0 && e.multiple;
	var d = e.disableClearable, f = d === void 0 ? !1 : d;
	e.disableCloseOnSelect;
	var p = e.disabled, m = p === void 0 ? !1 : p;
	e.disabledItemsFocusable, e.disableListWrap;
	var h = e.disablePortal, g = h === void 0 ? !1 : h;
	e.filterOptions, e.filterSelectedOptions;
	var v = e.forcePopupIcon, y = v === void 0 ? "auto" : v, b = e.freeSolo, x = b === void 0 ? !1 : b, S = e.fullWidth, C = S === void 0 ? !1 : S, w = e.getLimitTagsText, T = w === void 0 ? function(e) {
		return `+${e}`;
	} : w;
	e.getOptionDisabled;
	var E = e.getOptionLabel, D = E === void 0 ? function(e) {
		return e;
	} : E;
	e.getOptionSelected;
	var ee = e.groupBy;
	e.handleHomeEndKeys === void 0 && e.freeSolo, e.id, e.includeInputInList, e.inputValue;
	var O = e.limitTags, k = O === void 0 ? -1 : O, A = e.ListboxComponent, j = A === void 0 ? "ul" : A, M = e.ListboxProps, te = e.loading, N = te === void 0 ? !1 : te, P = e.loadingText, F = P === void 0 ? "Loading…" : P, ne = e.multiple, I = ne === void 0 ? !1 : ne, re = e.noOptionsText, L = re === void 0 ? "No options" : re;
	e.onChange, e.onClose, e.onHighlightChange, e.onInputChange, e.onOpen, e.open, e.openOnFocus;
	var R = e.openText, ie = R === void 0 ? "Open" : R;
	e.options;
	var ae = e.PaperComponent, oe = ae === void 0 ? vn : ae, z = e.PopperComponent, se = z === void 0 ? Jt : z, ce = e.popupIcon, B = ce === void 0 ? Tg : ce, V = e.renderGroup, le = e.renderInput, ue = e.renderOption, de = e.renderTags;
	e.selectOnFocus === void 0 && e.freeSolo;
	var fe = e.size, H = fe === void 0 ? "medium" : fe;
	e.value;
	var pe = _(e, /* @__PURE__ */ "autoComplete.autoHighlight.autoSelect.blurOnSelect.ChipProps.classes.className.clearOnBlur.clearOnEscape.clearText.closeIcon.closeText.debug.defaultValue.disableClearable.disableCloseOnSelect.disabled.disabledItemsFocusable.disableListWrap.disablePortal.filterOptions.filterSelectedOptions.forcePopupIcon.freeSolo.fullWidth.getLimitTagsText.getOptionDisabled.getOptionLabel.getOptionSelected.groupBy.handleHomeEndKeys.id.includeInputInList.inputValue.limitTags.ListboxComponent.ListboxProps.loading.loadingText.multiple.noOptionsText.onChange.onClose.onHighlightChange.onInputChange.onOpen.open.openOnFocus.openText.options.PaperComponent.PopperComponent.popupIcon.renderGroup.renderInput.renderOption.renderTags.selectOnFocus.size.value".split(".")), me = g ? Cg : se, U = xg(K({}, e, { componentName: "Autocomplete" })), he = U.getRootProps, ge = U.getInputProps, _e = U.getInputLabelProps, ve = U.getPopupIndicatorProps, ye = U.getClearProps, be = U.getTagProps, xe = U.getListboxProps, Se = U.getOptionProps, Ce = U.value, we = U.dirty, Te = U.id, Ee = U.popupOpen, De = U.focused, Oe = U.focusedTag, ke = U.anchorEl, Ae = U.setAnchorEl, je = U.inputValue, Me = U.groupedOptions, Ne;
	if (I && Ce.length > 0) {
		var Pe = function(e) {
			return K({
				className: G(r.tag, H === "small" && r.tagSizeSmall),
				disabled: m
			}, be(e));
		};
		Ne = de ? de(Ce, Pe) : Ce.map(function(e, t) {
			return /*#__PURE__*/ X.createElement(bn, K({
				label: D(e),
				size: H
			}, Pe({ index: t }), n));
		});
	}
	if (k > -1 && Array.isArray(Ne)) {
		var Fe = Ne.length - k;
		!De && Fe > 0 && (Ne = Ne.splice(0, k), Ne.push(/*#__PURE__*/ X.createElement("span", {
			className: r.tag,
			key: Ne.length
		}, T(Fe))));
	}
	var Ie = V || function(e) {
		return /*#__PURE__*/ X.createElement("li", { key: e.key }, /*#__PURE__*/ X.createElement(Fc, {
			className: r.groupLabel,
			component: "div"
		}, e.group), /*#__PURE__*/ X.createElement("ul", { className: r.groupUl }, e.children));
	}, Le = ue || D, Re = function(e, t) {
		var n = Se({
			option: e,
			index: t
		});
		return /*#__PURE__*/ X.createElement("li", K({}, n, { className: r.option }), Le(e, {
			selected: n["aria-selected"],
			inputValue: je
		}));
	}, ze = !f && !m, Be = (!x || y === !0) && y !== !1;
	return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("div", K({
		ref: t,
		className: G(r.root, i, De && r.focused, C && r.fullWidth, ze && r.hasClearIcon, Be && r.hasPopupIcon)
	}, he(pe)), le({
		id: Te,
		disabled: m,
		fullWidth: !0,
		size: H === "small" ? "small" : void 0,
		InputLabelProps: _e(),
		InputProps: {
			ref: Ae,
			className: r.inputRoot,
			startAdornment: Ne,
			endAdornment: /*#__PURE__*/ X.createElement("div", { className: r.endAdornment }, ze ? /*#__PURE__*/ X.createElement(Gt, K({}, ye(), {
				"aria-label": o,
				title: o,
				className: G(r.clearIndicator, we && r.clearIndicatorDirty)
			}), c) : null, Be ? /*#__PURE__*/ X.createElement(Gt, K({}, ve(), {
				disabled: m,
				"aria-label": Ee ? u : ie,
				title: Ee ? u : ie,
				className: G(r.popupIndicator, Ee && r.popupIndicatorOpen)
			}), B) : null)
		},
		inputProps: K({
			className: G(r.input, Oe === -1 && r.inputFocused),
			disabled: m
		}, ge())
	})), Ee && ke ? /*#__PURE__*/ X.createElement(me, {
		className: G(r.popper, g && r.popperDisablePortal),
		style: { width: ke ? ke.clientWidth : null },
		role: "presentation",
		anchorEl: ke,
		open: !0
	}, /*#__PURE__*/ X.createElement(oe, { className: r.paper }, N && Me.length === 0 ? /*#__PURE__*/ X.createElement("div", { className: r.loading }, F) : null, Me.length === 0 && !x && !N ? /*#__PURE__*/ X.createElement("div", { className: r.noOptions }, L) : null, Me.length > 0 ? /*#__PURE__*/ X.createElement(j, K({ className: r.listbox }, xe(), M), Me.map(function(e, t) {
		return ee ? Ie({
			key: e.key,
			group: e.group,
			children: e.options.map(function(t, n) {
				return Re(t, e.index + n);
			})
		}) : Re(e, t);
	})) : null)) : null);
}), Dg = Y(Sg, { name: "MuiAutocomplete" })(Eg), Og = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" }), "ChevronLeftSharp");
})), kg = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" }), "ChevronRightSharp");
})), Ag = /* @__PURE__ */ n(xt()), jg = /* @__PURE__ */ n(pg()), Mg = /* @__PURE__ */ n(or()), Ng = /* @__PURE__ */ n(Sn()), Pg = /* @__PURE__ */ n(Og()), Fg = /* @__PURE__ */ n(kg());
function Ig(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Lg(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, zg(r.key), r);
	}
}
function Rg(e, t, n) {
	return t && Lg(e.prototype, t), n && Lg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zg(e) {
	var t = Bg(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Bg(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Vg(e, t, n) {
	return t = Gg(t), Hg(e, Wg() ? Reflect.construct(t, n || [], Gg(e).constructor) : t.apply(e, n));
}
function Hg(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ug(e);
}
function Ug(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Wg() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Wg = function() {
		return !!e;
	})();
}
function Gg(e) {
	return Gg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Gg(e);
}
function Kg(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qg(e, t);
}
function qg(e, t) {
	return qg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, qg(e, t);
}
var Jg = /*#__PURE__*/ function(e) {
	function t() {
		return Ig(this, t), Vg(this, t, arguments);
	}
	return Kg(t, e), Rg(t, [
		{
			key: "nextSearchResult",
			value: function(e) {
				var t = this.props, n = t.searchHits, r = t.selectAnnotation;
				r(n[e + 1].annotations[0]);
			}
		},
		{
			key: "previousSearchResult",
			value: function(e) {
				var t = this.props, n = t.searchHits, r = t.selectAnnotation;
				r(n[e - 1].annotations[0]);
			}
		},
		{
			key: "hasNextResult",
			value: function(e) {
				var t = this.props.searchHits;
				return t.length === 0 ? !1 : e < t.length - 1;
			}
		},
		{
			key: "hasPreviousResult",
			value: function(e) {
				return this.props.searchHits.length === 0 ? !1 : e > 0;
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, n = t.numTotal, r = t.searchHits, i = t.selectedContentSearchAnnotation, a = t.classes, o = t.t, s = t.direction === "rtl" ? { transform: "rotate(180deg)" } : {}, c = r.findIndex(function(e) {
					return e.annotations.includes(i[0]);
				}), l = r.length;
				return r.length < n && (l += "+"), /*#__PURE__*/ X.createElement(X.Fragment, null, r.length > 0 && /*#__PURE__*/ X.createElement(Ln, {
					variant: "body2",
					align: "center",
					classes: a
				}, /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": o("searchPreviousResult"),
					disabled: !this.hasPreviousResult(c),
					onClick: function() {
						return e.previousSearchResult(c);
					}
				}, /*#__PURE__*/ X.createElement(Pg.default, { style: s })), /*#__PURE__*/ X.createElement("span", { style: { unicodeBidi: "plaintext" } }, o("pagination", {
					current: c + 1,
					total: l
				})), /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": o("searchNextResult"),
					disabled: !this.hasNextResult(c),
					onClick: function() {
						return e.nextSearchResult(c);
					}
				}, /*#__PURE__*/ X.createElement(Fg.default, { style: s }))));
			}
		}
	]);
}(X.Component);
Jg.defaultProps = {
	classes: {},
	numTotal: void 0,
	searchHits: [],
	t: function(e) {
		return e;
	}
}, s(), q();
var Yg = V(Et(function(e, t) {
	var n = t.companionWindowId, r = t.windowId;
	return {
		direction: St(e),
		numTotal: o(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchHits: de(e, {
			companionWindowId: n,
			windowId: r
		}),
		selectedContentSearchAnnotation: ae(e, {
			companionWindowId: n,
			windowId: r
		})
	};
}, function(e, t) {
	var n = t.windowId;
	return { selectAnnotation: function() {
		var t = [...arguments];
		return e(on.apply(_n, [n].concat(t)));
	} };
}), Y(function(e) {
	return { body2: {
		marginLeft: "-16px",
		width: "100%"
	} };
}), Ge(), R("SearchPanelNavigation"))(Jg);
//#endregion
//#region node_modules/mirador/dist/es/src/components/SearchPanelControls.js
function Xg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Zg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Xg(Object(n), !0).forEach(function(t) {
			Qg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Qg(e, t, n) {
	return (t = n_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function $g(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function e_(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, n_(r.key), r);
	}
}
function t_(e, t, n) {
	return t && e_(e.prototype, t), n && e_(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n_(e) {
	var t = r_(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function r_(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function i_(e, t, n) {
	return t = c_(t), a_(e, s_() ? Reflect.construct(t, n || [], c_(e).constructor) : t.apply(e, n));
}
function a_(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return o_(e);
}
function o_(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function s_() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (s_ = function() {
		return !!e;
	})();
}
function c_(e) {
	return c_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, c_(e);
}
function l_(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && u_(e, t);
}
function u_(e, t) {
	return u_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, u_(e, t);
}
var d_ = function(e) {
	return (0, Ag.default)(e) ? e.match : e;
}, f_ = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return $g(this, t), n = i_(this, t, [e]), n.state = {
			search: e.query,
			suggestions: []
		}, n.handleChange = n.handleChange.bind(n), n.submitSearch = n.submitSearch.bind(n), n.getSuggestions = n.getSuggestions.bind(n), n.selectItem = n.selectItem.bind(n), n.fetchAutocomplete = (0, Mg.default)(n.fetchAutocomplete.bind(n), 500), n.receiveAutocomplete = n.receiveAutocomplete.bind(n), n;
	}
	return l_(t, e), t_(t, [
		{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this.props.query;
				t !== e.query && this.setState({ search: t });
			}
		},
		{
			key: "handleChange",
			value: function(e, t, n) {
				n === "reset" && !t || (this.setState({
					search: t,
					suggestions: []
				}), t && this.fetchAutocomplete(t));
			}
		},
		{
			key: "getSuggestions",
			value: function(e) {
				var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showEmpty, n = t === void 0 ? !1 : t, r = this.state.suggestions;
				return (0, jg.default)(e.trim()).toLowerCase().length === 0 && !n ? [] : r;
			}
		},
		{
			key: "fetchAutocomplete",
			value: function(e) {
				var t = this.props.autocompleteService;
				t && e && fetch(`${t.id}?q=${e}`).then(function(e) {
					return e.json();
				}).then(this.receiveAutocomplete);
			}
		},
		{
			key: "receiveAutocomplete",
			value: function(e) {
				this.setState({ suggestions: e.terms });
			}
		},
		{
			key: "submitSearch",
			value: function(e) {
				var t = this.props, n = t.companionWindowId, r = t.fetchSearch, i = t.searchService, a = t.windowId, o = this.state.search;
				e && e.preventDefault(), o && r(a, n, `${i.id}?q=${o}`, o);
			}
		},
		{
			key: "selectItem",
			value: function(e, t, n) {
				t && d_(t) && this.setState({ search: d_(t) }, this.submitSearch);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.classes, n = e.companionWindowId, r = e.searchIsFetching, i = e.t, a = e.windowId, o = this.state, s = o.search, c = o.suggestions, l = `search-${n}`;
				return /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement("form", {
					onSubmit: this.submitSearch,
					className: t.form
				}, /*#__PURE__*/ X.createElement(Dg, {
					id: l,
					inputValue: s,
					options: c,
					getOptionLabel: d_,
					getOptionSelected: function(e, t) {
						return (0, jg.default)(d_(e).trim()).toLowerCase() === (0, jg.default)(d_(t).trim()).toLowerCase();
					},
					noOptionsText: "",
					onChange: this.selectItem,
					onInputChange: this.handleChange,
					freeSolo: !0,
					renderInput: function(e) {
						return /*#__PURE__*/ X.createElement(su, Object.assign({}, e, {
							label: i("searchInputLabel"),
							InputProps: Zg(Zg({}, e.InputProps), {}, { endAdornment: /*#__PURE__*/ X.createElement("div", { className: t.endAdornment }, /*#__PURE__*/ X.createElement(Xt, {
								"aria-label": i("searchSubmitAria"),
								type: "submit"
							}, /*#__PURE__*/ X.createElement(Ng.default, null)), !!r && /*#__PURE__*/ X.createElement(vs, {
								className: t.searchProgress,
								size: 50
							})) })
						}));
					}
				})), /*#__PURE__*/ X.createElement(Yg, {
					windowId: a,
					companionWindowId: n
				}));
			}
		}
	]);
}(X.Component);
f_.defaultProps = {
	autocompleteService: void 0,
	classes: {},
	query: "",
	t: function(e) {
		return e;
	}
}, s(), q();
var p_ = V(Et(function(e, t) {
	var n = t.companionWindowId, r = t.windowId;
	return {
		autocompleteService: It(e, { windowId: r }),
		query: ot(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchIsFetching: lt(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchService: ct(e, { windowId: r })
	};
}, { fetchSearch: cn }), Y(function(e) {
	return {
		endAdornment: {
			position: "absolute",
			right: 0
		},
		form: {
			paddingBottom: e.spacing(1),
			paddingRight: e.spacing(1.5),
			width: "100%"
		},
		searchProgress: {
			position: "absolute",
			right: 0
		}
	};
}), Ge(), R("SearchPanelControls"))(f_), m_ = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }), "ArrowBackSharp");
})), h_ = /* @__PURE__ */ n(m_()), g_ = {
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	whiteSpace: "nowrap",
	padding: 0,
	width: "1px",
	position: "absolute"
}, __ = function(e) {
	var t = e.message, n = e["aria-live"];
	return X.createElement("div", {
		style: g_,
		role: "log",
		"aria-live": n
	}, t || "");
};
__.propTypes = {};
//#endregion
//#region node_modules/react-aria-live/es/modules/Announcer.js
function v_(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function y_(e, t) {
	if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function b_(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		enumerable: !1,
		writable: !0,
		configurable: !0
	} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var x_ = function(e) {
	b_(t, e);
	function t() {
		var n, r, i;
		v_(this, t);
		var a = [...arguments];
		return i = (n = (r = y_(this, e.call.apply(e, [this].concat(a))), r), r.state = {
			assertiveMessage1: "",
			assertiveMessage2: "",
			politeMessage1: "",
			politeMessage2: "",
			oldPolitemessage: "",
			oldPoliteMessageId: "",
			oldAssertiveMessage: "",
			oldAssertiveMessageId: "",
			setAlternatePolite: !1,
			setAlternateAssertive: !1
		}, n), y_(r, i);
	}
	return t.getDerivedStateFromProps = function(e, t) {
		var n = t.oldPolitemessage, r = t.oldPoliteMessageId, i = t.oldAssertiveMessage, a = t.oldAssertiveMessageId, o = e.politeMessage, s = e.politeMessageId, c = e.assertiveMessage, l = e.assertiveMessageId;
		return n !== o || r !== s ? {
			politeMessage1: t.setAlternatePolite ? "" : o,
			politeMessage2: t.setAlternatePolite ? o : "",
			oldPolitemessage: o,
			oldPoliteMessageId: s,
			setAlternatePolite: !t.setAlternatePolite
		} : i !== c || a !== l ? {
			assertiveMessage1: t.setAlternateAssertive ? "" : c,
			assertiveMessage2: t.setAlternateAssertive ? c : "",
			oldAssertiveMessage: c,
			oldAssertiveMessageId: l,
			setAlternateAssertive: !t.setAlternateAssertive
		} : null;
	}, t.prototype.render = function() {
		var e = this.state, t = e.assertiveMessage1, n = e.assertiveMessage2, r = e.politeMessage1, i = e.politeMessage2;
		return X.createElement("div", null, X.createElement(__, {
			"aria-live": "assertive",
			message: t
		}), X.createElement(__, {
			"aria-live": "assertive",
			message: n
		}), X.createElement(__, {
			"aria-live": "polite",
			message: r
		}), X.createElement(__, {
			"aria-live": "polite",
			message: i
		}));
	}, t;
}(X.Component);
x_.propTypes = {};
//#endregion
//#region node_modules/react-aria-live/es/modules/AnnouncerContext.js
var S_ = X.createContext({
	announceAssertive: C_,
	announcePolite: C_
});
function C_() {
	console.warn("Announcement failed, LiveAnnouncer context is missing");
}
//#endregion
//#region node_modules/react-aria-live/es/modules/LiveAnnouncer.js
function w_(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function T_(e, t) {
	if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function E_(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		enumerable: !1,
		writable: !0,
		configurable: !0
	} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var D_ = function(e) {
	E_(t, e);
	function t(n) {
		w_(this, t);
		var r = T_(this, e.call(this, n));
		return r.announcePolite = function(e, t) {
			r.setState({
				announcePoliteMessage: e,
				politeMessageId: t || ""
			});
		}, r.announceAssertive = function(e, t) {
			r.setState({
				announceAssertiveMessage: e,
				assertiveMessageId: t || ""
			});
		}, r.state = {
			announcePoliteMessage: "",
			politeMessageId: "",
			announceAssertiveMessage: "",
			assertiveMessageId: "",
			updateFunctions: {
				announcePolite: r.announcePolite,
				announceAssertive: r.announceAssertive
			}
		}, r;
	}
	return t.prototype.render = function() {
		var e = this.state, t = e.announcePoliteMessage, n = e.politeMessageId, r = e.announceAssertiveMessage, i = e.assertiveMessageId, a = e.updateFunctions;
		return X.createElement(S_.Provider, { value: a }, this.props.children, X.createElement(x_, {
			assertiveMessage: r,
			assertiveMessageId: i,
			politeMessage: t,
			politeMessageId: n
		}));
	}, t;
}(X.Component), O_ = /* @__PURE__ */ i(((e, t) => {
	var n = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
	if (n) {
		var r = new Uint8Array(16);
		t.exports = function() {
			return n(r), r;
		};
	} else {
		var i = Array(16);
		t.exports = function() {
			for (var e = 0, t; e < 16; e++) e & 3 || (t = Math.random() * 4294967296), i[e] = t >>> ((e & 3) << 3) & 255;
			return i;
		};
	}
})), k_ = /* @__PURE__ */ i(((e, t) => {
	for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
	function i(e, t) {
		var r = t || 0, i = n;
		return [
			i[e[r++]],
			i[e[r++]],
			i[e[r++]],
			i[e[r++]],
			"-",
			i[e[r++]],
			i[e[r++]],
			"-",
			i[e[r++]],
			i[e[r++]],
			"-",
			i[e[r++]],
			i[e[r++]],
			"-",
			i[e[r++]],
			i[e[r++]],
			i[e[r++]],
			i[e[r++]],
			i[e[r++]],
			i[e[r++]]
		].join("");
	}
	t.exports = i;
})), A_ = /* @__PURE__ */ n((/* @__PURE__ */ i(((e, t) => {
	var n = O_(), r = k_();
	function i(e, t, i) {
		var a = t && i || 0;
		typeof e == "string" && (t = e === "binary" ? Array(16) : null, e = null), e ||= {};
		var o = e.random || (e.rng || n)();
		if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) for (var s = 0; s < 16; ++s) t[a + s] = o[s];
		return t || r(o);
	}
	t.exports = i;
})))());
function j_(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function M_(e, t) {
	if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function N_(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		enumerable: !1,
		writable: !0,
		configurable: !0
	} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var P_ = function(e) {
	N_(t, e);
	function t() {
		var n, r, i;
		j_(this, t);
		var a = [...arguments];
		return i = (n = (r = M_(this, e.call.apply(e, [this].concat(a))), r), r.announce = function() {
			var e = r.props, t = e.message, n = e["aria-live"], i = e.announceAssertive, a = e.announcePolite;
			n === "assertive" && i(t || "", (0, A_.default)()), n === "polite" && a(t || "", (0, A_.default)());
		}, n), M_(r, i);
	}
	return t.prototype.componentDidMount = function() {
		this.announce();
	}, t.prototype.componentDidUpdate = function(e) {
		this.props.message !== e.message && this.announce();
	}, t.prototype.componentWillUnmount = function() {
		var e = this.props, t = e.clearOnUnmount, n = e.announceAssertive, r = e.announcePolite;
		(t === !0 || t === "true") && (n(""), r(""));
	}, t.prototype.render = function() {
		return null;
	}, t;
}(X.Component);
P_.propTypes = {};
//#endregion
//#region node_modules/react-aria-live/es/modules/LiveMessage.js
var F_ = Object.assign || function(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t];
		for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	}
	return e;
}, I_ = function(e) {
	return X.createElement(S_.Consumer, null, function(t) {
		return X.createElement(P_, F_({}, t, e));
	});
};
I_.propTypes = {};
//#endregion
//#region node_modules/react-aria-live/es/modules/LiveMessenger.js
var L_ = function(e) {
	var t = e.children;
	return X.createElement(S_.Consumer, null, function(e) {
		return t(e);
	});
};
L_.propTypes = {};
//#endregion
//#region node_modules/mirador/dist/es/src/lib/TruncatedHit.js
function R_(e) {
	return H_(e) || V_(e) || B_(e) || z_();
}
function z_() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function B_(e, t) {
	if (e) {
		if (typeof e == "string") return U_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U_(e, t) : void 0;
	}
}
function V_(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function H_(e) {
	if (Array.isArray(e)) return U_(e);
}
function U_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function W_(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function G_(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, q_(r.key), r);
	}
}
function K_(e, t, n) {
	return t && G_(e.prototype, t), n && G_(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q_(e) {
	var t = J_(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function J_(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Y_ = /*#__PURE__*/ function() {
	function e(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.maxChars, a = i === void 0 ? 200 : i, o = r.minimum, s = o === void 0 ? 20 : o;
		W_(this, e), this.hit = t, this.annotation = n, this.maxChars = a || 200, this.minimum = s || 20;
	}
	return K_(e, [
		{
			key: "match",
			get: function() {
				return this.hit.match || this.annotation && this.annotation.resource.resource.chars || "-";
			}
		},
		{
			key: "charsOnSide",
			get: function() {
				var e = (this.maxChars - this.match.length) / 2, t = [(this.hit.before || "").length, (this.hit.after || "").length].filter(function(e) {
					return e > 0;
				});
				return Math.max(Math.min.apply(Math, [e].concat(R_(t))), this.minimum);
			}
		},
		{
			key: "before",
			get: function() {
				return this.hit.before ? this.hit.before.substring(this.hit.before.length - this.charsOnSide, this.hit.before.length) : "";
			}
		},
		{
			key: "after",
			get: function() {
				return this.hit.after ? this.hit.after.substring(0, Math.min(this.hit.after.length, this.charsOnSide)) : "";
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/components/SearchHit.js
tt();
function X_(e, t, n) {
	return (t = ev(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Z_(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Q_(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ev(r.key), r);
	}
}
function $_(e, t, n) {
	return t && Q_(e.prototype, t), n && Q_(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ev(e) {
	var t = tv(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function tv(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function nv(e, t, n) {
	return t = ov(t), rv(e, av() ? Reflect.construct(t, n || [], ov(e).constructor) : t.apply(e, n));
}
function rv(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return iv(e);
}
function iv(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function av() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (av = function() {
		return !!e;
	})();
}
function ov(e) {
	return ov = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ov(e);
}
function sv(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cv(e, t);
}
function cv(e, t) {
	return cv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, cv(e, t);
}
var lv = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Z_(this, t), n = nv(this, t, [e]), n.handleClick = n.handleClick.bind(n), n;
	}
	return sv(t, e), $_(t, [
		{
			key: "componentDidMount",
			value: function() {
				this.props.selected && this.announceHit();
			}
		},
		{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this.props.selected;
				t && t !== e.selected && this.announceHit();
			}
		},
		{
			key: "handleClick",
			value: function() {
				var e = this.props, t = e.annotation, n = e.annotationId, r = e.selectAnnotation;
				t && n && r(n);
			}
		},
		{
			key: "announceHit",
			value: function() {
				var e = this.props, t = e.annotation, n = e.annotationLabel, r = e.announcer, i = e.canvasLabel, a = e.hit, o = e.index, s = e.t, c = e.total;
				if (a) {
					var l = new Y_(a, t);
					r([
						s("pagination", {
							current: o + 1,
							total: c
						}),
						i,
						n,
						l.before,
						l.match,
						l.after
					].join(" "));
				}
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.adjacent, n = e.annotation, r = e.annotationLabel, i = e.canvasLabel, a = e.classes, o = e.companionWindowId, s = e.containerRef, c = e.hit, l = e.focused, u = e.index, d = e.showDetails, f = e.selected, p = e.t, m = e.windowSelected;
				if (l && !f) return null;
				var h = l ? c : c && new Y_(c, n), g = c && h.before !== c.before && h.after !== c.after, _ = `${o}-${u}`;
				return /*#__PURE__*/ X.createElement(Ro, {
					containerRef: s,
					offsetTop: 96,
					scrollTo: m && !l
				}, /*#__PURE__*/ X.createElement($i, {
					className: G(a.listItem, X_(X_(X_(X_({}, a.adjacent, t), a.selected, f), a.focused, l), a.windowSelected, m)),
					button: !f,
					component: "li",
					onClick: this.handleClick,
					selected: f
				}, /*#__PURE__*/ X.createElement(aa, { primaryTypographyProps: { variant: "body1" } }, /*#__PURE__*/ X.createElement(Ln, {
					variant: "subtitle2",
					className: a.subtitle
				}, /*#__PURE__*/ X.createElement(bn, {
					component: "span",
					label: u + 1,
					className: a.hitCounter
				}), /*#__PURE__*/ X.createElement("span", { id: _ }, i)), r && /*#__PURE__*/ X.createElement(Ln, { variant: "subtitle2" }, r), c && /*#__PURE__*/ X.createElement(X.Fragment, null, /*#__PURE__*/ X.createElement(To, {
					ruleSet: "iiif",
					htmlString: h.before
				}), " ", /*#__PURE__*/ X.createElement("strong", null, /*#__PURE__*/ X.createElement(To, {
					ruleSet: "iiif",
					htmlString: h.match
				})), " ", /*#__PURE__*/ X.createElement(To, {
					ruleSet: "iiif",
					htmlString: h.after
				}), " ", g && !l && /*#__PURE__*/ X.createElement(ar, {
					className: a.inlineButton,
					onClick: d,
					color: "secondary",
					size: "small",
					"aria-describedby": _
				}, p("more"))), !c && n && /*#__PURE__*/ X.createElement(To, {
					ruleSet: "iiif",
					htmlString: n.chars
				}))));
			}
		}
	]);
}(X.Component);
lv.defaultProps = {
	adjacent: !1,
	annotation: void 0,
	annotationId: void 0,
	annotationLabel: void 0,
	canvasLabel: void 0,
	classes: {},
	companionWindowId: void 0,
	containerRef: void 0,
	focused: !1,
	hit: void 0,
	index: void 0,
	selectAnnotation: function() {},
	selected: !1,
	showDetails: function() {},
	t: function(e) {
		return e;
	},
	total: void 0,
	windowSelected: !1
}, s(), q();
function uv(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function dv(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? uv(Object(n), !0).forEach(function(t) {
			fv(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uv(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function fv(e, t, n) {
	return (t = pv(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pv(e) {
	var t = mv(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mv(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function hv(e) {
	return yv(e) || vv(e) || _v(e) || gv();
}
function gv() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _v(e, t) {
	if (e) {
		if (typeof e == "string") return bv(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bv(e, t) : void 0;
	}
}
function vv(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yv(e) {
	if (Array.isArray(e)) return bv(e);
}
function bv(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var xv = V(Et(function(e, t) {
	var n = t.annotationId, r = t.hit, i = r === void 0 ? { annotations: [] } : r, a = t.companionWindowId, o = t.windowId, s = n || i.annotations[0], c = Mt(e, {
		annotationUri: s,
		companionWindowId: a,
		windowId: o
	}), l = be(e, {
		annotationUri: s,
		companionWindowId: a,
		windowId: o
	}), u = Ne(e, { windowId: o }), d = ae(e, {
		companionWindowId: a,
		windowId: o
	}), f = zt(e, { windowId: o }), p = [n].concat(hv(i.annotations));
	return {
		adjacent: u.includes(c.targetId),
		annotation: c,
		annotationId: s,
		annotationLabel: l[0],
		canvasLabel: c && je(e, {
			canvasId: c.targetId,
			windowId: o
		}),
		selected: d[0] && p.includes(d[0]),
		windowSelected: f && p.includes(f)
	};
}, function(e, t) {
	var n = t.windowId;
	return { selectAnnotation: function() {
		var t = [...arguments];
		return e(on.apply(_n, [n].concat(t)));
	} };
}), Y(function(e) {
	return {
		adjacent: {},
		focused: {},
		hitCounter: dv(dv({}, e.typography.subtitle2), {}, {
			backgroundColor: e.palette.hitCounter.default,
			height: 30,
			marginRight: e.spacing(1),
			verticalAlign: "inherit"
		}),
		inlineButton: {
			"& span": { lineHeight: "1.5em" },
			margin: 0,
			padding: 0,
			textTransform: "none"
		},
		listItem: {
			"&$adjacent": {
				"& $hitCounter": { backgroundColor: e.palette.highlights.secondary },
				"&$windowSelected": { "& $hitCounter": { backgroundColor: e.palette.highlights.primary } }
			},
			"&$windowSelected": {
				"& $hitCounter": { backgroundColor: e.palette.highlights.primary },
				"&$focused": {
					"&:hover": { backgroundColor: "inherit" },
					backgroundColor: "inherit"
				}
			},
			borderBottom: `0.5px solid ${e.palette.divider}`,
			paddingRight: 8
		},
		selected: {},
		subtitle: { marginBottom: e.spacing(1.5) },
		windowSelected: {}
	};
}), Ge(), R("SearchHit"))(lv);
//#endregion
//#region node_modules/mirador/dist/es/src/components/SearchResults.js
function Sv(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Cv(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tv(r.key), r);
	}
}
function wv(e, t, n) {
	return t && Cv(e.prototype, t), n && Cv(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Tv(e) {
	var t = Ev(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ev(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Dv(e, t, n) {
	return t = jv(t), Ov(e, Av() ? Reflect.construct(t, n || [], jv(e).constructor) : t.apply(e, n));
}
function Ov(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return kv(e);
}
function kv(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Av() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Av = function() {
		return !!e;
	})();
}
function jv(e) {
	return jv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, jv(e);
}
function Mv(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nv(e, t);
}
function Nv(e, t) {
	return Nv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Nv(e, t);
}
var Pv = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Sv(this, t), n = Dv(this, t, [e]), n.state = { focused: !1 }, n.toggleFocus = n.toggleFocus.bind(n), n;
	}
	return Mv(t, e), wv(t, [
		{
			key: "toggleFocus",
			value: function() {
				var e = this.state.focused;
				this.setState({ focused: !e });
			}
		},
		{
			key: "renderSearchHitsAndAnnotations",
			value: function(e) {
				var t = this, n = this.props, r = n.companionWindowId, i = n.containerRef, a = n.searchAnnotations, o = n.searchHits, s = n.windowId, c = this.state.focused;
				return o.length === 0 && a.length > 0 ? a.map(function(n, o) {
					return /*#__PURE__*/ X.createElement(xv, {
						announcer: e,
						annotationId: n.id,
						companionWindowId: r,
						containerRef: i,
						key: n.id,
						focused: c,
						index: o,
						total: a.length,
						windowId: s,
						showDetails: t.toggleFocus
					});
				}) : o.map(function(n, a) {
					return /*#__PURE__*/ X.createElement(xv, {
						announcer: e,
						containerRef: i,
						companionWindowId: r,
						key: n.annotations[0],
						focused: c,
						hit: n,
						index: a,
						total: o.length,
						windowId: s,
						showDetails: t.toggleFocus
					});
				});
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, n = t.classes, r = t.companionWindowId, i = t.containerRef, a = t.isFetching, o = t.fetchSearch, s = t.nextSearch, c = t.query, l = t.searchAnnotations, u = t.searchHits, d = t.searchNumTotal, f = t.t, p = t.windowId, m = this.state.focused, h = c && !a && u.length === 0 && l.length === 0;
				return /*#__PURE__*/ X.createElement(X.Fragment, null, m && /*#__PURE__*/ X.createElement(Ro, {
					containerRef: i,
					offsetTop: 96,
					scrollTo: !0
				}, /*#__PURE__*/ X.createElement(ar, {
					onClick: this.toggleFocus,
					className: n.navigation,
					size: "small"
				}, /*#__PURE__*/ X.createElement(h_.default, null), f("backToResults"))), h && /*#__PURE__*/ X.createElement(Ln, { className: n.noResults }, f("searchNoResults")), /*#__PURE__*/ X.createElement(Hi, { disablePadding: !0 }, /*#__PURE__*/ X.createElement(L_, null, function(t) {
					var n = t.announcePolite;
					return e.renderSearchHitsAndAnnotations(n);
				})), s && /*#__PURE__*/ X.createElement(ar, {
					className: n.moreButton,
					color: "secondary",
					onClick: function() {
						return o(p, r, s, c);
					}
				}, f("moreResults"), /*#__PURE__*/ X.createElement("br", null), `(${f("searchResultsRemaining", { numLeft: d - u.length })})`));
			}
		}
	]);
}(X.Component);
Pv.defaultProps = {
	classes: {},
	containerRef: void 0,
	isFetching: !1,
	nextSearch: void 0,
	query: void 0,
	searchAnnotations: [],
	searchHits: [],
	searchNumTotal: void 0,
	t: function(e) {
		return e;
	}
}, s(), q();
function Fv(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Iv(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Fv(Object(n), !0).forEach(function(t) {
			Lv(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fv(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Lv(e, t, n) {
	return (t = Rv(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Rv(e) {
	var t = zv(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function zv(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Bv = V(Et(function(e, t) {
	var n = t.companionWindowId, r = t.windowId;
	return {
		isFetching: lt(e, {
			companionWindowId: n,
			windowId: r
		}),
		nextSearch: g(e, {
			companionWindowId: n,
			windowId: r
		}),
		query: ot(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchAnnotations: z(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchHits: de(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchNumTotal: o(e, {
			companionWindowId: n,
			windowId: r
		})
	};
}, { fetchSearch: cn }), Y(function(e) {
	return {
		moreButton: { width: "100%" },
		navigation: { textTransform: "none" },
		noResults: Iv(Iv({}, e.typography.h6), {}, { padding: e.spacing(2) }),
		toggleFocus: Iv({}, e.typography.subtitle1)
	};
}), Ge(), R("SearchResults"))(Pv);
//#endregion
//#region node_modules/mirador/dist/es/src/components/SearchPanel.js
function Vv(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Hv(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wv(r.key), r);
	}
}
function Uv(e, t, n) {
	return t && Hv(e.prototype, t), n && Hv(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Wv(e) {
	var t = Gv(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Gv(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Kv(e, t, n) {
	return t = Xv(t), qv(e, Yv() ? Reflect.construct(t, n || [], Xv(e).constructor) : t.apply(e, n));
}
function qv(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Jv(e);
}
function Jv(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Yv() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Yv = function() {
		return !!e;
	})();
}
function Xv(e) {
	return Xv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Xv(e);
}
function Zv(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qv(e, t);
}
function Qv(e, t) {
	return Qv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Qv(e, t);
}
var $v = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Vv(this, t), n = Kv(this, t, [e]), n.containerRef = /*#__PURE__*/ X.createRef(), n;
	}
	return Zv(t, e), Uv(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.classes, n = e.fetchSearch, r = e.windowId, i = e.id, a = e.query, o = e.removeSearch, s = e.searchService, c = e.suggestedSearches, l = e.t;
			return /*#__PURE__*/ X.createElement(wd, {
				ariaLabel: l("searchTitle"),
				title: /*#__PURE__*/ X.createElement(X.Fragment, null, l("searchTitle"), a && a !== "" && /*#__PURE__*/ X.createElement(bn, {
					className: t.clearChip,
					color: "secondary",
					label: l("clearSearch"),
					onClick: o,
					onDelete: o,
					size: "small",
					variant: "outlined"
				})),
				windowId: r,
				id: i,
				titleControls: /*#__PURE__*/ X.createElement(p_, {
					companionWindowId: i,
					windowId: r
				}),
				ref: this.containerRef
			}, /*#__PURE__*/ X.createElement(Bv, {
				containerRef: this.containerRef,
				companionWindowId: i,
				windowId: r
			}), n && c && a === "" && c.map(function(e) {
				return /*#__PURE__*/ X.createElement(Ln, {
					component: "p",
					key: e,
					variant: "body1"
				}, /*#__PURE__*/ X.createElement(ar, {
					className: t.inlineButton,
					color: "secondary",
					onClick: function() {
						return n(`${s.id}?q=${e}`, e);
					}
				}, l("suggestSearch", { query: e })));
			}));
		}
	}]);
}(X.Component);
$v.defaultProps = {
	classes: {},
	fetchSearch: void 0,
	query: "",
	suggestedSearches: [],
	t: function(e) {
		return e;
	}
}, s(), q();
var ey = V(Et(function(e, t) {
	var n = t.id, r = t.windowId;
	return {
		query: ot(e, {
			companionWindowId: n,
			windowId: r
		}),
		searchService: ct(e, { windowId: r }),
		suggestedSearches: Ye(e, { windowId: r }).suggestedSearches
	};
}, function(e, t) {
	return {
		fetchSearch: function(n, r) {
			return e(cn(t.windowId, t.id, n, r));
		},
		removeSearch: function() {
			return e(ln(t.windowId, t.id));
		}
	};
}), Y(function(e) {
	return {
		clearChip: { marginLeft: e.spacing(1) },
		inlineButton: {
			"& span": { lineHeight: "1.5em" },
			margin: e.spacing(2),
			padding: 0,
			textAlign: "inherit",
			textTransform: "none"
		}
	};
}), Ge(), R("SearchPanel"))($v), ty = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z" }), "DragHandleSharp");
})), ny = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" }), "VerticalAlignTopSharp");
})), ry = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z" }), "OpacitySharp");
})), iy = /* @__PURE__ */ n(ty()), ay = /* @__PURE__ */ n(ny()), oy = /* @__PURE__ */ n(ry());
function sy(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function cy(e, t) {
	var n = (0, X.useState)(function() {
		return {
			inputs: t,
			result: e()
		};
	})[0], r = (0, X.useRef)(!0), i = (0, X.useRef)(n), a = r.current || t && i.current.inputs && sy(t, i.current.inputs) ? i.current : {
		inputs: t,
		result: e()
	};
	return (0, X.useEffect)(function() {
		r.current = !1, i.current = a;
	}, [a]), a.result;
}
function ly(e, t) {
	return cy(function() {
		return e;
	}, t);
}
var uy = cy, Z = ly, dy = !0, fy = "Invariant failed";
function py(e, t) {
	if (!e) {
		if (dy) throw Error(fy);
		var n = typeof t == "function" ? t() : t, r = n ? `${fy}: ${n}` : fy;
		throw Error(r);
	}
}
//#endregion
//#region node_modules/css-box-model/dist/css-box-model.esm.js
var my = function(e) {
	var t = e.top, n = e.right, r = e.bottom, i = e.left;
	return {
		top: t,
		right: n,
		bottom: r,
		left: i,
		width: n - i,
		height: r - t,
		x: i,
		y: t,
		center: {
			x: (n + i) / 2,
			y: (r + t) / 2
		}
	};
}, hy = function(e, t) {
	return {
		top: e.top - t.top,
		left: e.left - t.left,
		bottom: e.bottom + t.bottom,
		right: e.right + t.right
	};
}, gy = function(e, t) {
	return {
		top: e.top + t.top,
		left: e.left + t.left,
		bottom: e.bottom - t.bottom,
		right: e.right - t.right
	};
}, _y = function(e, t) {
	return {
		top: e.top + t.y,
		left: e.left + t.x,
		bottom: e.bottom + t.y,
		right: e.right + t.x
	};
}, vy = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}, yy = function(e) {
	var t = e.borderBox, n = e.margin, r = n === void 0 ? vy : n, i = e.border, a = i === void 0 ? vy : i, o = e.padding, s = o === void 0 ? vy : o, c = my(hy(t, r)), l = my(gy(t, a)), u = my(gy(l, s));
	return {
		marginBox: c,
		borderBox: my(t),
		paddingBox: l,
		contentBox: u,
		margin: r,
		border: a,
		padding: s
	};
}, by = function(e) {
	var t = e.slice(0, -2);
	if (e.slice(-2) !== "px") return 0;
	var n = Number(t);
	return isNaN(n) && py(!1), n;
}, xy = function() {
	return {
		x: window.pageXOffset,
		y: window.pageYOffset
	};
}, Sy = function(e, t) {
	var n = e.borderBox, r = e.border, i = e.margin, a = e.padding;
	return yy({
		borderBox: _y(n, t),
		border: r,
		margin: i,
		padding: a
	});
}, Cy = function(e, t) {
	return t === void 0 && (t = xy()), Sy(e, t);
}, wy = function(e, t) {
	return yy({
		borderBox: e,
		margin: {
			top: by(t.marginTop),
			right: by(t.marginRight),
			bottom: by(t.marginBottom),
			left: by(t.marginLeft)
		},
		padding: {
			top: by(t.paddingTop),
			right: by(t.paddingRight),
			bottom: by(t.paddingBottom),
			left: by(t.paddingLeft)
		},
		border: {
			top: by(t.borderTopWidth),
			right: by(t.borderRightWidth),
			bottom: by(t.borderBottomWidth),
			left: by(t.borderLeftWidth)
		}
	});
}, Ty = function(e) {
	return wy(e.getBoundingClientRect(), window.getComputedStyle(e));
}, Ey = function(e) {
	var t = [], n = null, r = function() {
		t = [...arguments], !n && (n = requestAnimationFrame(function() {
			n = null, e.apply(void 0, t);
		}));
	};
	return r.cancel = function() {
		n &&= (cancelAnimationFrame(n), null);
	}, r;
};
l(), J(), s();
var Dy = !0, Oy = /[ \t]{2,}/g, ky = /^[ \t]*/gm, Ay = function(e) {
	return e.replace(Oy, " ").replace(ky, "").trim();
}, jy = function(e) {
	return Ay("\n  %creact-beautiful-dnd\n\n  %c" + Ay(e) + "\n\n  %c👷‍ This is a development only message. It will be removed in production builds.\n");
}, My = function(e) {
	return [
		jy(e),
		"color: #00C584; font-size: 1.2em; font-weight: bold;",
		"line-height: 1.5",
		"color: #723874;"
	];
}, Ny = "__react-beautiful-dnd-disable-dev-warnings";
function Py(e, t) {
	var n;
	Dy || typeof window < "u" && window[Ny] || (n = console)[e].apply(n, My(t));
}
Py.bind(null, "warn"), Py.bind(null, "error");
function Fy() {}
function Iy(e, t) {
	return K({}, e, {}, t);
}
function Ly(e, t, n) {
	var r = t.map(function(t) {
		var r = Iy(n, t.options);
		return e.addEventListener(t.eventName, t.fn, r), function() {
			e.removeEventListener(t.eventName, t.fn, r);
		};
	});
	return function() {
		r.forEach(function(e) {
			e();
		});
	};
}
var Ry = !0, zy = "Invariant failed";
function By(e) {
	this.message = e;
}
By.prototype.toString = function() {
	return this.message;
};
function Q(e, t) {
	if (!e) throw Ry ? new By(zy) : new By(zy + ": " + (t || ""));
}
var Vy = function(e) {
	ft(t, e);
	function t() {
		var t, n = [...arguments];
		return t = e.call.apply(e, [this].concat(n)) || this, t.callbacks = null, t.unbind = Fy, t.onWindowError = function(e) {
			var n = t.getCallbacks();
			n.isDragging() && n.tryAbort(), e.error instanceof By && e.preventDefault();
		}, t.getCallbacks = function() {
			if (!t.callbacks) throw Error("Unable to find AppCallbacks in <ErrorBoundary/>");
			return t.callbacks;
		}, t.setCallbacks = function(e) {
			t.callbacks = e;
		}, t;
	}
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.unbind = Ly(window, [{
			eventName: "error",
			fn: this.onWindowError
		}]);
	}, n.componentDidCatch = function(e) {
		if (e instanceof By) {
			this.setState({});
			return;
		}
		throw e;
	}, n.componentWillUnmount = function() {
		this.unbind();
	}, n.render = function() {
		return this.props.children(this.setCallbacks);
	}, t;
}(X.Component), Hy = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n", Uy = function(e) {
	return e + 1;
}, Wy = function(e) {
	return "\n  You have lifted an item in position " + Uy(e.source.index) + "\n";
}, Gy = function(e, t) {
	var n = e.droppableId === t.droppableId, r = Uy(e.index), i = Uy(t.index);
	return n ? "\n      You have moved the item from position " + r + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + r + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + i + "\n  ";
}, Ky = function(e, t, n) {
	return t.droppableId === n.droppableId ? "\n      The item " + e + "\n      has been combined with " + n.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + n.draggableId + "\n      in list " + n.droppableId + "\n    ";
}, qy = function(e) {
	var t = e.destination;
	if (t) return Gy(e.source, t);
	var n = e.combine;
	return n ? Ky(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Jy = function(e) {
	return "\n  The item has returned to its starting position\n  of " + Uy(e.index) + "\n";
}, Yy = {
	dragHandleUsageInstructions: Hy,
	onDragStart: Wy,
	onDragUpdate: qy,
	onDragEnd: function(e) {
		if (e.reason === "CANCEL") return "\n      Movement cancelled.\n      " + Jy(e.source) + "\n    ";
		var t = e.destination, n = e.combine;
		return t ? "\n      You have dropped the item.\n      " + Gy(e.source, t) + "\n    " : n ? "\n      You have dropped the item.\n      " + Ky(e.draggableId, e.source, n) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + Jy(e.source) + "\n  ";
	}
}, Xy = {
	x: 0,
	y: 0
}, Zy = function(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}, Qy = function(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}, $y = function(e, t) {
	return e.x === t.x && e.y === t.y;
}, eb = function(e) {
	return {
		x: e.x === 0 ? 0 : -e.x,
		y: e.y === 0 ? 0 : -e.y
	};
}, tb = function(e, t, n) {
	var r;
	return n === void 0 && (n = 0), r = {}, r[e] = t, r[e === "x" ? "y" : "x"] = n, r;
}, nb = function(e, t) {
	return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}, rb = function(e, t) {
	return Math.min.apply(Math, t.map(function(t) {
		return nb(e, t);
	}));
}, ib = function(e) {
	return function(t) {
		return {
			x: e(t.x),
			y: e(t.y)
		};
	};
}, ab = (function(e, t) {
	var n = my({
		top: Math.max(t.top, e.top),
		right: Math.min(t.right, e.right),
		bottom: Math.min(t.bottom, e.bottom),
		left: Math.max(t.left, e.left)
	});
	return n.width <= 0 || n.height <= 0 ? null : n;
}), ob = function(e, t) {
	return {
		top: e.top + t.y,
		left: e.left + t.x,
		bottom: e.bottom + t.y,
		right: e.right + t.x
	};
}, sb = function(e) {
	return [
		{
			x: e.left,
			y: e.top
		},
		{
			x: e.right,
			y: e.top
		},
		{
			x: e.left,
			y: e.bottom
		},
		{
			x: e.right,
			y: e.bottom
		}
	];
}, cb = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}, lb = function(e, t) {
	return t ? ob(e, t.scroll.diff.displacement) : e;
}, ub = function(e, t, n) {
	if (n && n.increasedBy) {
		var r;
		return K({}, e, (r = {}, r[t.end] = e[t.end] + n.increasedBy[t.line], r));
	}
	return e;
}, db = function(e, t) {
	return t && t.shouldClipSubject ? ab(t.pageMarginBox, e) : my(e);
}, fb = (function(e) {
	var t = e.page, n = e.withPlaceholder, r = e.axis, i = e.frame;
	return {
		page: t,
		withPlaceholder: n,
		active: db(ub(lb(t.marginBox, i), r, n), i)
	};
}), pb = (function(e, t) {
	!e.frame && Q(!1);
	var n = e.frame, r = Qy(t, n.scroll.initial), i = eb(r), a = K({}, n, { scroll: {
		initial: n.scroll.initial,
		current: t,
		diff: {
			value: r,
			displacement: i
		},
		max: n.scroll.max
	} });
	return K({}, e, {
		frame: a,
		subject: fb({
			page: e.subject.page,
			withPlaceholder: e.subject.withPlaceholder,
			axis: e.axis,
			frame: a
		})
	});
});
function mb(e) {
	return Object.values ? Object.values(e) : Object.keys(e).map(function(t) {
		return e[t];
	});
}
function hb(e, t) {
	if (e.findIndex) return e.findIndex(t);
	for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
	return -1;
}
function gb(e, t) {
	if (e.find) return e.find(t);
	var n = hb(e, t);
	if (n !== -1) return e[n];
}
function _b(e) {
	return Array.prototype.slice.call(e);
}
var vb = wr(function(e) {
	return e.reduce(function(e, t) {
		return e[t.descriptor.id] = t, e;
	}, {});
}), yb = wr(function(e) {
	return e.reduce(function(e, t) {
		return e[t.descriptor.id] = t, e;
	}, {});
}), bb = wr(function(e) {
	return mb(e);
}), xb = wr(function(e) {
	return mb(e);
}), Sb = wr(function(e, t) {
	return xb(t).filter(function(t) {
		return e === t.descriptor.droppableId;
	}).sort(function(e, t) {
		return e.descriptor.index - t.descriptor.index;
	});
});
function Cb(e) {
	return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function wb(e) {
	return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Tb = wr(function(e, t) {
	return t.filter(function(t) {
		return t.descriptor.id !== e.descriptor.id;
	});
}), Eb = (function(e) {
	var t = e.isMovingForward, n = e.draggable, r = e.destination, i = e.insideDestination, a = e.previousImpact;
	if (!r.isCombineEnabled || !Cb(a)) return null;
	function o(e) {
		return K({}, a, { at: {
			type: "COMBINE",
			combine: {
				draggableId: e,
				droppableId: r.descriptor.id
			}
		} });
	}
	var s = a.displaced.all, c = s.length ? s[0] : null;
	if (t) return c ? o(c) : null;
	var l = Tb(n, i);
	if (!c) {
		if (!l.length) return null;
		var u = l[l.length - 1];
		return o(u.descriptor.id);
	}
	var d = hb(l, function(e) {
		return e.descriptor.id === c;
	});
	d === -1 && Q(!1);
	var f = d - 1;
	if (f < 0) return null;
	var p = l[f];
	return o(p.descriptor.id);
}), Db = (function(e, t) {
	return e.descriptor.droppableId === t.descriptor.id;
}), Ob = {
	point: Xy,
	value: 0
}, kb = {
	invisible: {},
	visible: {},
	all: []
}, Ab = {
	displaced: kb,
	displacedBy: Ob,
	at: null
}, jb = (function(e, t) {
	return function(n) {
		return e <= n && n <= t;
	};
}), Mb = (function(e) {
	var t = jb(e.top, e.bottom), n = jb(e.left, e.right);
	return function(r) {
		if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
		var i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
		if (i && a) return !0;
		var o = r.top < e.top && r.bottom > e.bottom, s = r.left < e.left && r.right > e.right;
		return o && s ? !0 : o && a || s && i;
	};
}), Nb = (function(e) {
	var t = jb(e.top, e.bottom), n = jb(e.left, e.right);
	return function(e) {
		return t(e.top) && t(e.bottom) && n(e.left) && n(e.right);
	};
}), Pb = {
	direction: "vertical",
	line: "y",
	crossAxisLine: "x",
	start: "top",
	end: "bottom",
	size: "height",
	crossAxisStart: "left",
	crossAxisEnd: "right",
	crossAxisSize: "width"
}, Fb = {
	direction: "horizontal",
	line: "x",
	crossAxisLine: "y",
	start: "left",
	end: "right",
	size: "width",
	crossAxisStart: "top",
	crossAxisEnd: "bottom",
	crossAxisSize: "height"
}, Ib = (function(e) {
	return function(t) {
		var n = jb(t.top, t.bottom), r = jb(t.left, t.right);
		return function(t) {
			return e === Pb ? n(t.top) && n(t.bottom) : r(t.left) && r(t.right);
		};
	};
}), Lb = function(e, t) {
	return ob(e, t.frame ? t.frame.scroll.diff.displacement : Xy);
}, Rb = function(e, t, n) {
	return t.subject.active ? n(t.subject.active)(e) : !1;
}, zb = function(e, t, n) {
	return n(t)(e);
}, Bb = function(e) {
	var t = e.target, n = e.destination, r = e.viewport, i = e.withDroppableDisplacement, a = e.isVisibleThroughFrameFn, o = i ? Lb(t, n) : t;
	return Rb(o, n, a) && zb(o, r, a);
}, Vb = function(e) {
	return Bb(K({}, e, { isVisibleThroughFrameFn: Mb }));
}, Hb = function(e) {
	return Bb(K({}, e, { isVisibleThroughFrameFn: Nb }));
}, Ub = function(e) {
	return Bb(K({}, e, { isVisibleThroughFrameFn: Ib(e.destination.axis) }));
}, Wb = function(e, t, n) {
	if (typeof n == "boolean") return n;
	if (!t) return !0;
	var r = t.invisible, i = t.visible;
	if (r[e]) return !1;
	var a = i[e];
	return a ? a.shouldAnimate : !0;
};
function Gb(e, t) {
	var n = e.page.marginBox;
	return my(hy(n, {
		top: t.point.y,
		right: 0,
		bottom: 0,
		left: t.point.x
	}));
}
function Kb(e) {
	var t = e.afterDragging, n = e.destination, r = e.displacedBy, i = e.viewport, a = e.forceShouldAnimate, o = e.last;
	return t.reduce(function(e, t) {
		var s = Gb(t, r), c = t.descriptor.id;
		if (e.all.push(c), !Vb({
			target: s,
			destination: n,
			viewport: i,
			withDroppableDisplacement: !0
		})) return e.invisible[t.descriptor.id] = !0, e;
		var l = {
			draggableId: c,
			shouldAnimate: Wb(c, o, a)
		};
		return e.visible[c] = l, e;
	}, {
		all: [],
		visible: {},
		invisible: {}
	});
}
function qb(e, t) {
	if (!e.length) return 0;
	var n = e[e.length - 1].descriptor.index;
	return t.inHomeList ? n : n + 1;
}
function Jb(e) {
	var t = e.insideDestination, n = e.inHomeList, r = e.displacedBy, i = e.destination, a = qb(t, { inHomeList: n });
	return {
		displaced: kb,
		displacedBy: r,
		at: {
			type: "REORDER",
			destination: {
				droppableId: i.descriptor.id,
				index: a
			}
		}
	};
}
function Yb(e) {
	var t = e.draggable, n = e.insideDestination, r = e.destination, i = e.viewport, a = e.displacedBy, o = e.last, s = e.index, c = e.forceShouldAnimate, l = Db(t, r);
	if (s == null) return Jb({
		insideDestination: n,
		inHomeList: l,
		displacedBy: a,
		destination: r
	});
	var u = gb(n, function(e) {
		return e.descriptor.index === s;
	});
	if (!u) return Jb({
		insideDestination: n,
		inHomeList: l,
		displacedBy: a,
		destination: r
	});
	var d = Tb(t, n), f = n.indexOf(u);
	return {
		displaced: Kb({
			afterDragging: d.slice(f),
			destination: r,
			displacedBy: a,
			last: o,
			viewport: i.frame,
			forceShouldAnimate: c
		}),
		displacedBy: a,
		at: {
			type: "REORDER",
			destination: {
				droppableId: r.descriptor.id,
				index: s
			}
		}
	};
}
function Xb(e, t) {
	return !!t.effected[e];
}
var Zb = (function(e) {
	var t = e.isMovingForward, n = e.destination, r = e.draggables, i = e.combine, a = e.afterCritical;
	if (!n.isCombineEnabled) return null;
	var o = i.draggableId, s = r[o].descriptor.index;
	return Xb(o, a) ? t ? s : s - 1 : t ? s + 1 : s;
}), Qb = (function(e) {
	var t = e.isMovingForward, n = e.isInHomeList, r = e.insideDestination, i = e.location;
	if (!r.length) return null;
	var a = i.index, o = t ? a + 1 : a - 1, s = r[0].descriptor.index, c = r[r.length - 1].descriptor.index, l = n ? c : c + 1;
	return o < s || o > l ? null : o;
}), $b = (function(e) {
	var t = e.isMovingForward, n = e.isInHomeList, r = e.draggable, i = e.draggables, a = e.destination, o = e.insideDestination, s = e.previousImpact, c = e.viewport, l = e.afterCritical, u = s.at;
	if (!u && Q(!1), u.type === "REORDER") {
		var d = Qb({
			isMovingForward: t,
			isInHomeList: n,
			location: u.destination,
			insideDestination: o
		});
		return d == null ? null : Yb({
			draggable: r,
			insideDestination: o,
			destination: a,
			viewport: c,
			last: s.displaced,
			displacedBy: s.displacedBy,
			index: d
		});
	}
	var f = Zb({
		isMovingForward: t,
		destination: a,
		displaced: s.displaced,
		draggables: i,
		combine: u.combine,
		afterCritical: l
	});
	return f == null ? null : Yb({
		draggable: r,
		insideDestination: o,
		destination: a,
		viewport: c,
		last: s.displaced,
		displacedBy: s.displacedBy,
		index: f
	});
}), ex = (function(e) {
	var t = e.displaced, n = e.afterCritical, r = e.combineWith, i = e.displacedBy, a = !!(t.visible[r] || t.invisible[r]);
	return Xb(r, n) ? a ? Xy : eb(i.point) : a ? i.point : Xy;
}), tx = (function(e) {
	var t = e.afterCritical, n = e.impact, r = e.draggables, i = wb(n);
	!i && Q(!1);
	var a = i.draggableId, o = r[a].page.borderBox.center;
	return Zy(o, ex({
		displaced: n.displaced,
		afterCritical: t,
		combineWith: a,
		displacedBy: n.displacedBy
	}));
}), nx = function(e, t) {
	return t.margin[e.start] + t.borderBox[e.size] / 2;
}, rx = function(e, t) {
	return t.margin[e.end] + t.borderBox[e.size] / 2;
}, ix = function(e, t, n) {
	return t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2;
}, ax = function(e) {
	var t = e.axis, n = e.moveRelativeTo, r = e.isMoving;
	return tb(t.line, n.marginBox[t.end] + nx(t, r), ix(t, n.marginBox, r));
}, ox = function(e) {
	var t = e.axis, n = e.moveRelativeTo, r = e.isMoving;
	return tb(t.line, n.marginBox[t.start] - rx(t, r), ix(t, n.marginBox, r));
}, sx = function(e) {
	var t = e.axis, n = e.moveInto, r = e.isMoving;
	return tb(t.line, n.contentBox[t.start] + nx(t, r), ix(t, n.contentBox, r));
}, cx = (function(e) {
	var t = e.impact, n = e.draggable, r = e.draggables, i = e.droppable, a = e.afterCritical, o = Sb(i.descriptor.id, r), s = n.page, c = i.axis;
	if (!o.length) return sx({
		axis: c,
		moveInto: i.page,
		isMoving: s
	});
	var l = t.displaced, u = t.displacedBy, d = l.all[0];
	if (d) {
		var f = r[d];
		return Xb(d, a) ? ox({
			axis: c,
			moveRelativeTo: f.page,
			isMoving: s
		}) : ox({
			axis: c,
			moveRelativeTo: Sy(f.page, u.point),
			isMoving: s
		});
	}
	var p = o[o.length - 1];
	return p.descriptor.id === n.descriptor.id ? s.borderBox.center : Xb(p.descriptor.id, a) ? ax({
		axis: c,
		moveRelativeTo: Sy(p.page, eb(a.displacedBy.point)),
		isMoving: s
	}) : ax({
		axis: c,
		moveRelativeTo: p.page,
		isMoving: s
	});
}), lx = (function(e, t) {
	var n = e.frame;
	return n ? Zy(t, n.scroll.diff.displacement) : t;
}), ux = function(e) {
	var t = e.impact, n = e.draggable, r = e.droppable, i = e.draggables, a = e.afterCritical, o = n.page.borderBox.center, s = t.at;
	return !r || !s ? o : s.type === "REORDER" ? cx({
		impact: t,
		draggable: n,
		draggables: i,
		droppable: r,
		afterCritical: a
	}) : tx({
		impact: t,
		draggables: i,
		afterCritical: a
	});
}, dx = (function(e) {
	var t = ux(e), n = e.droppable;
	return n ? lx(n, t) : t;
}), fx = (function(e, t) {
	var n = Qy(t, e.scroll.initial), r = eb(n);
	return {
		frame: my({
			top: t.y,
			bottom: t.y + e.frame.height,
			left: t.x,
			right: t.x + e.frame.width
		}),
		scroll: {
			initial: e.scroll.initial,
			max: e.scroll.max,
			current: t,
			diff: {
				value: n,
				displacement: r
			}
		}
	};
});
function px(e, t) {
	return e.map(function(e) {
		return t[e];
	});
}
function mx(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n].visible[e];
		if (r) return r;
	}
	return null;
}
var hx = (function(e) {
	var t = e.impact, n = e.viewport, r = e.destination, i = e.draggables, a = e.maxScrollChange, o = fx(n, Zy(n.scroll.current, a)), s = r.frame ? pb(r, Zy(r.frame.scroll.current, a)) : r, c = t.displaced, l = Kb({
		afterDragging: px(c.all, i),
		destination: r,
		displacedBy: t.displacedBy,
		viewport: o.frame,
		last: c,
		forceShouldAnimate: !1
	}), u = Kb({
		afterDragging: px(c.all, i),
		destination: s,
		displacedBy: t.displacedBy,
		viewport: n.frame,
		last: c,
		forceShouldAnimate: !1
	}), d = {}, f = {}, p = [
		c,
		l,
		u
	];
	return c.all.forEach(function(e) {
		var t = mx(e, p);
		if (t) {
			f[e] = t;
			return;
		}
		d[e] = !0;
	}), K({}, t, { displaced: {
		all: c.all,
		invisible: d,
		visible: f
	} });
}), gx = (function(e, t) {
	return Zy(e.scroll.diff.displacement, t);
}), _x = (function(e) {
	var t = e.pageBorderBoxCenter, n = e.draggable, r = e.viewport, i = Qy(gx(r, t), n.page.borderBox.center);
	return Zy(n.client.borderBox.center, i);
}), vx = (function(e) {
	var t = e.draggable, n = e.destination, r = e.newPageBorderBoxCenter, i = e.viewport, a = e.withDroppableDisplacement, o = e.onlyOnMainAxis, s = o === void 0 ? !1 : o, c = Qy(r, t.page.borderBox.center), l = {
		target: ob(t.page.borderBox, c),
		destination: n,
		withDroppableDisplacement: a,
		viewport: i
	};
	return s ? Ub(l) : Hb(l);
}), yx = (function(e) {
	var t = e.isMovingForward, n = e.draggable, r = e.destination, i = e.draggables, a = e.previousImpact, o = e.viewport, s = e.previousPageBorderBoxCenter, c = e.previousClientSelection, l = e.afterCritical;
	if (!r.isEnabled) return null;
	var u = Sb(r.descriptor.id, i), d = Db(n, r), f = Eb({
		isMovingForward: t,
		draggable: n,
		destination: r,
		insideDestination: u,
		previousImpact: a
	}) || $b({
		isMovingForward: t,
		isInHomeList: d,
		draggable: n,
		draggables: i,
		destination: r,
		insideDestination: u,
		previousImpact: a,
		viewport: o,
		afterCritical: l
	});
	if (!f) return null;
	var p = dx({
		impact: f,
		draggable: n,
		droppable: r,
		draggables: i,
		afterCritical: l
	});
	if (vx({
		draggable: n,
		destination: r,
		newPageBorderBoxCenter: p,
		viewport: o.frame,
		withDroppableDisplacement: !1,
		onlyOnMainAxis: !0
	})) return {
		clientSelection: _x({
			pageBorderBoxCenter: p,
			draggable: n,
			viewport: o
		}),
		impact: f,
		scrollJumpRequest: null
	};
	var m = Qy(p, s);
	return {
		clientSelection: c,
		impact: hx({
			impact: f,
			viewport: o,
			destination: r,
			draggables: i,
			maxScrollChange: m
		}),
		scrollJumpRequest: m
	};
}), bx = function(e) {
	var t = e.subject.active;
	return !t && Q(!1), t;
}, xx = (function(e) {
	var t = e.isMovingForward, n = e.pageBorderBoxCenter, r = e.source, i = e.droppables, a = e.viewport, o = r.subject.active;
	if (!o) return null;
	var s = r.axis, c = jb(o[s.start], o[s.end]), l = bb(i).filter(function(e) {
		return e !== r;
	}).filter(function(e) {
		return e.isEnabled;
	}).filter(function(e) {
		return !!e.subject.active;
	}).filter(function(e) {
		return Mb(a.frame)(bx(e));
	}).filter(function(e) {
		var n = bx(e);
		return t ? o[s.crossAxisEnd] < n[s.crossAxisEnd] : n[s.crossAxisStart] < o[s.crossAxisStart];
	}).filter(function(e) {
		var t = bx(e), n = jb(t[s.start], t[s.end]);
		return c(t[s.start]) || c(t[s.end]) || n(o[s.start]) || n(o[s.end]);
	}).sort(function(e, n) {
		var r = bx(e)[s.crossAxisStart], i = bx(n)[s.crossAxisStart];
		return t ? r - i : i - r;
	}).filter(function(e, t, n) {
		return bx(e)[s.crossAxisStart] === bx(n[0])[s.crossAxisStart];
	});
	if (!l.length) return null;
	if (l.length === 1) return l[0];
	var u = l.filter(function(e) {
		return jb(bx(e)[s.start], bx(e)[s.end])(n[s.line]);
	});
	return u.length === 1 ? u[0] : u.length > 1 ? u.sort(function(e, t) {
		return bx(e)[s.start] - bx(t)[s.start];
	})[0] : l.sort(function(e, t) {
		var r = rb(n, sb(bx(e))), i = rb(n, sb(bx(t)));
		return r === i ? bx(e)[s.start] - bx(t)[s.start] : r - i;
	})[0];
}), Sx = function(e, t) {
	var n = e.page.borderBox.center;
	return Xb(e.descriptor.id, t) ? Qy(n, t.displacedBy.point) : n;
}, Cx = function(e, t) {
	var n = e.page.borderBox;
	return Xb(e.descriptor.id, t) ? ob(n, eb(t.displacedBy.point)) : n;
}, wx = (function(e) {
	var t = e.pageBorderBoxCenter, n = e.viewport, r = e.destination, i = e.insideDestination, a = e.afterCritical;
	return i.filter(function(e) {
		return Hb({
			target: Cx(e, a),
			destination: r,
			viewport: n.frame,
			withDroppableDisplacement: !0
		});
	}).sort(function(e, n) {
		var i = nb(t, lx(r, Sx(e, a))), o = nb(t, lx(r, Sx(n, a)));
		return i < o ? -1 : o < i ? 1 : e.descriptor.index - n.descriptor.index;
	})[0] || null;
}), Tx = wr(function(e, t) {
	var n = t[e.line];
	return {
		value: n,
		point: tb(e.line, n)
	};
}), Ex = function(e, t, n) {
	var r = e.axis;
	if (e.descriptor.mode === "virtual") return tb(r.line, t[r.line]);
	var i = e.subject.page.contentBox[r.size], a = Sb(e.descriptor.id, n).reduce(function(e, t) {
		return e + t.client.marginBox[r.size];
	}, 0) + t[r.line] - i;
	return a <= 0 ? null : tb(r.line, a);
}, Dx = function(e, t) {
	return K({}, e, { scroll: K({}, e.scroll, { max: t }) });
}, Ox = function(e, t, n) {
	var r = e.frame;
	Db(t, e) && Q(!1), e.subject.withPlaceholder && Q(!1);
	var i = Tx(e.axis, t.displaceBy).point, a = Ex(e, i, n), o = {
		placeholderSize: i,
		increasedBy: a,
		oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
	};
	if (!r) return K({}, e, { subject: fb({
		page: e.subject.page,
		withPlaceholder: o,
		axis: e.axis,
		frame: e.frame
	}) });
	var s = Dx(r, a ? Zy(r.scroll.max, a) : r.scroll.max);
	return K({}, e, {
		subject: fb({
			page: e.subject.page,
			withPlaceholder: o,
			axis: e.axis,
			frame: s
		}),
		frame: s
	});
}, kx = function(e) {
	var t = e.subject.withPlaceholder;
	!t && Q(!1);
	var n = e.frame;
	if (!n) return K({}, e, { subject: fb({
		page: e.subject.page,
		axis: e.axis,
		frame: null,
		withPlaceholder: null
	}) });
	var r = t.oldFrameMaxScroll;
	!r && Q(!1);
	var i = Dx(n, r);
	return K({}, e, {
		subject: fb({
			page: e.subject.page,
			axis: e.axis,
			frame: i,
			withPlaceholder: null
		}),
		frame: i
	});
}, Ax = (function(e) {
	var t = e.previousPageBorderBoxCenter, n = e.moveRelativeTo, r = e.insideDestination, i = e.draggable, a = e.draggables, o = e.destination, s = e.viewport, c = e.afterCritical;
	if (!n) {
		if (r.length) return null;
		var l = {
			displaced: kb,
			displacedBy: Ob,
			at: {
				type: "REORDER",
				destination: {
					droppableId: o.descriptor.id,
					index: 0
				}
			}
		}, u = dx({
			impact: l,
			draggable: i,
			droppable: o,
			draggables: a,
			afterCritical: c
		});
		return vx({
			draggable: i,
			destination: Db(i, o) ? o : Ox(o, i, a),
			newPageBorderBoxCenter: u,
			viewport: s.frame,
			withDroppableDisplacement: !1,
			onlyOnMainAxis: !0
		}) ? l : null;
	}
	var d = t[o.axis.line] <= n.page.borderBox.center[o.axis.line], f = function() {
		var e = n.descriptor.index;
		return n.descriptor.id === i.descriptor.id || d ? e : e + 1;
	}();
	return Yb({
		draggable: i,
		insideDestination: r,
		destination: o,
		viewport: s,
		displacedBy: Tx(o.axis, i.displaceBy),
		last: kb,
		index: f
	});
}), jx = (function(e) {
	var t = e.isMovingForward, n = e.previousPageBorderBoxCenter, r = e.draggable, i = e.isOver, a = e.draggables, o = e.droppables, s = e.viewport, c = e.afterCritical, l = xx({
		isMovingForward: t,
		pageBorderBoxCenter: n,
		source: i,
		droppables: o,
		viewport: s
	});
	if (!l) return null;
	var u = Sb(l.descriptor.id, a), d = Ax({
		previousPageBorderBoxCenter: n,
		destination: l,
		draggable: r,
		draggables: a,
		moveRelativeTo: wx({
			pageBorderBoxCenter: n,
			viewport: s,
			destination: l,
			insideDestination: u,
			afterCritical: c
		}),
		insideDestination: u,
		viewport: s,
		afterCritical: c
	});
	return d ? {
		clientSelection: _x({
			pageBorderBoxCenter: dx({
				impact: d,
				draggable: r,
				droppable: l,
				draggables: a,
				afterCritical: c
			}),
			draggable: r,
			viewport: s
		}),
		impact: d,
		scrollJumpRequest: null
	} : null;
}), Mx = (function(e) {
	var t = e.at;
	return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
}), Nx = function(e, t) {
	var n = Mx(e);
	return n ? t[n] : null;
}, Px = (function(e) {
	var t = e.state, n = e.type, r = Nx(t.impact, t.dimensions.droppables), i = !!r, a = t.dimensions.droppables[t.critical.droppable.id], o = r || a, s = o.axis.direction, c = s === "vertical" && (n === "MOVE_UP" || n === "MOVE_DOWN") || s === "horizontal" && (n === "MOVE_LEFT" || n === "MOVE_RIGHT");
	if (c && !i) return null;
	var l = n === "MOVE_DOWN" || n === "MOVE_RIGHT", u = t.dimensions.draggables[t.critical.draggable.id], d = t.current.page.borderBoxCenter, f = t.dimensions, p = f.draggables, m = f.droppables;
	return c ? yx({
		isMovingForward: l,
		previousPageBorderBoxCenter: d,
		draggable: u,
		destination: o,
		draggables: p,
		viewport: t.viewport,
		previousClientSelection: t.current.client.selection,
		previousImpact: t.impact,
		afterCritical: t.afterCritical
	}) : jx({
		isMovingForward: l,
		previousPageBorderBoxCenter: d,
		draggable: u,
		isOver: o,
		draggables: p,
		droppables: m,
		viewport: t.viewport,
		afterCritical: t.afterCritical
	});
});
function Fx(e) {
	return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ix(e) {
	var t = jb(e.top, e.bottom), n = jb(e.left, e.right);
	return function(e) {
		return t(e.y) && n(e.x);
	};
}
function Lx(e, t) {
	return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Rx(e) {
	var t = e.pageBorderBox, n = e.draggable, r = e.candidates, i = n.page.borderBox.center, a = r.map(function(e) {
		var n = e.axis, r = tb(e.axis.line, t.center[n.line], e.page.borderBox.center[n.crossAxisLine]);
		return {
			id: e.descriptor.id,
			distance: nb(i, r)
		};
	}).sort(function(e, t) {
		return t.distance - e.distance;
	});
	return a[0] ? a[0].id : null;
}
function zx(e) {
	var t = e.pageBorderBox, n = e.draggable, r = e.droppables, i = bb(r).filter(function(e) {
		if (!e.isEnabled) return !1;
		var n = e.subject.active;
		if (!n || !Lx(t, n)) return !1;
		if (Ix(n)(t.center)) return !0;
		var r = e.axis, i = n.center[r.crossAxisLine], a = t[r.crossAxisStart], o = t[r.crossAxisEnd], s = jb(n[r.crossAxisStart], n[r.crossAxisEnd]), c = s(a), l = s(o);
		return !c && !l ? !0 : c ? a < i : o > i;
	});
	return i.length ? i.length === 1 ? i[0].descriptor.id : Rx({
		pageBorderBox: t,
		draggable: n,
		candidates: i
	}) : null;
}
var Bx = function(e, t) {
	return my(ob(e, t));
}, Vx = (function(e, t) {
	var n = e.frame;
	return n ? Bx(t, n.scroll.diff.value) : t;
});
function Hx(e) {
	var t = e.displaced, n = e.id;
	return !!(t.visible[n] || t.invisible[n]);
}
function Ux(e) {
	var t = e.draggable, n = e.closest, r = e.inHomeList;
	return n ? r && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null;
}
var Wx = (function(e) {
	var t = e.pageBorderBoxWithDroppableScroll, n = e.draggable, r = e.destination, i = e.insideDestination, a = e.last, o = e.viewport, s = e.afterCritical, c = r.axis, l = Tx(r.axis, n.displaceBy), u = l.value, d = t[c.start], f = t[c.end];
	return Yb({
		draggable: n,
		insideDestination: i,
		destination: r,
		viewport: o,
		last: a,
		displacedBy: l,
		index: Ux({
			draggable: n,
			closest: gb(Tb(n, i), function(e) {
				var t = e.descriptor.id, n = e.page.borderBox.center[c.line], r = Xb(t, s), i = Hx({
					displaced: a,
					id: t
				});
				return r ? i ? f <= n : d < n - u : i ? f <= n + u : d < n;
			}),
			inHomeList: Db(n, r)
		})
	});
}), Gx = 4, Kx = (function(e) {
	var t = e.draggable, n = e.pageBorderBoxWithDroppableScroll, r = e.previousImpact, i = e.destination, a = e.insideDestination, o = e.afterCritical;
	if (!i.isCombineEnabled) return null;
	var s = i.axis, c = Tx(i.axis, t.displaceBy), l = c.value, u = n[s.start], d = n[s.end], f = gb(Tb(t, a), function(e) {
		var t = e.descriptor.id, n = e.page.borderBox, i = n[s.size] / Gx, a = Xb(t, o), c = Hx({
			displaced: r.displaced,
			id: t
		});
		return a ? c ? d > n[s.start] + i && d < n[s.end] - i : u > n[s.start] - l + i && u < n[s.end] - l - i : c ? d > n[s.start] + l + i && d < n[s.end] + l - i : u > n[s.start] + i && u < n[s.end] - i;
	});
	return f ? {
		displacedBy: c,
		displaced: r.displaced,
		at: {
			type: "COMBINE",
			combine: {
				draggableId: f.descriptor.id,
				droppableId: i.descriptor.id
			}
		}
	} : null;
}), qx = (function(e) {
	var t = e.pageOffset, n = e.draggable, r = e.draggables, i = e.droppables, a = e.previousImpact, o = e.viewport, s = e.afterCritical, c = Bx(n.page.borderBox, t), l = zx({
		pageBorderBox: c,
		draggable: n,
		droppables: i
	});
	if (!l) return Ab;
	var u = i[l], d = Sb(u.descriptor.id, r), f = Vx(u, c);
	return Kx({
		pageBorderBoxWithDroppableScroll: f,
		draggable: n,
		previousImpact: a,
		destination: u,
		insideDestination: d,
		afterCritical: s
	}) || Wx({
		pageBorderBoxWithDroppableScroll: f,
		draggable: n,
		destination: u,
		insideDestination: d,
		last: a.displaced,
		viewport: o,
		afterCritical: s
	});
}), Jx = (function(e, t) {
	var n;
	return K({}, e, (n = {}, n[t.descriptor.id] = t, n));
}), Yx = function(e) {
	var t = e.previousImpact, n = e.impact, r = e.droppables, i = Mx(t), a = Mx(n);
	if (!i || i === a) return r;
	var o = r[i];
	return o.subject.withPlaceholder ? Jx(r, kx(o)) : r;
}, Xx = (function(e) {
	var t = e.draggable, n = e.draggables, r = e.droppables, i = e.previousImpact, a = e.impact, o = Yx({
		previousImpact: i,
		impact: a,
		droppables: r
	}), s = Mx(a);
	if (!s) return o;
	var c = r[s];
	return Db(t, c) || c.subject.withPlaceholder ? o : Jx(o, Ox(c, t, n));
}), Zx = (function(e) {
	var t = e.state, n = e.clientSelection, r = e.dimensions, i = e.viewport, a = e.impact, o = e.scrollJumpRequest, s = i || t.viewport, c = r || t.dimensions, l = n || t.current.client.selection, u = Qy(l, t.initial.client.selection), d = {
		offset: u,
		selection: l,
		borderBoxCenter: Zy(t.initial.client.borderBoxCenter, u)
	}, f = {
		selection: Zy(d.selection, s.scroll.current),
		borderBoxCenter: Zy(d.borderBoxCenter, s.scroll.current),
		offset: Zy(d.offset, s.scroll.diff.value)
	}, p = {
		client: d,
		page: f
	};
	if (t.phase === "COLLECTING") return K({ phase: "COLLECTING" }, t, {
		dimensions: c,
		viewport: s,
		current: p
	});
	var m = c.draggables[t.critical.draggable.id], h = a || qx({
		pageOffset: f.offset,
		draggable: m,
		draggables: c.draggables,
		droppables: c.droppables,
		previousImpact: t.impact,
		viewport: s,
		afterCritical: t.afterCritical
	}), g = Xx({
		draggable: m,
		impact: h,
		previousImpact: t.impact,
		draggables: c.draggables,
		droppables: c.droppables
	});
	return K({}, t, {
		current: p,
		dimensions: {
			draggables: c.draggables,
			droppables: g
		},
		impact: h,
		viewport: s,
		scrollJumpRequest: o || null,
		forceShouldAnimate: o ? !1 : null
	});
});
function Qx(e, t) {
	return e.map(function(e) {
		return t[e];
	});
}
var $x = (function(e) {
	var t = e.impact, n = e.viewport, r = e.draggables, i = e.destination, a = e.forceShouldAnimate, o = t.displaced;
	return K({}, t, { displaced: Kb({
		afterDragging: Qx(o.all, r),
		destination: i,
		displacedBy: t.displacedBy,
		viewport: n.frame,
		forceShouldAnimate: a,
		last: o
	}) });
}), eS = (function(e) {
	var t = e.impact, n = e.draggable, r = e.droppable, i = e.draggables, a = e.viewport, o = e.afterCritical;
	return _x({
		pageBorderBoxCenter: dx({
			impact: t,
			draggable: n,
			draggables: i,
			droppable: r,
			afterCritical: o
		}),
		draggable: n,
		viewport: a
	});
}), tS = (function(e) {
	var t = e.state, n = e.dimensions, r = e.viewport;
	t.movementMode !== "SNAP" && Q(!1);
	var i = t.impact, a = r || t.viewport, o = n || t.dimensions, s = o.draggables, c = o.droppables, l = s[t.critical.draggable.id], u = Mx(i);
	!u && Q(!1);
	var d = c[u], f = $x({
		impact: i,
		viewport: a,
		destination: d,
		draggables: s
	});
	return Zx({
		impact: f,
		clientSelection: eS({
			impact: f,
			draggable: l,
			droppable: d,
			draggables: s,
			viewport: a,
			afterCritical: t.afterCritical
		}),
		state: t,
		dimensions: o,
		viewport: a
	});
}), nS = (function(e) {
	return {
		index: e.index,
		droppableId: e.droppableId
	};
}), rS = (function(e) {
	var t = e.draggable, n = e.home, r = e.draggables, i = e.viewport, a = Tx(n.axis, t.displaceBy), o = Sb(n.descriptor.id, r), s = o.indexOf(t);
	s === -1 && Q(!1);
	var c = o.slice(s + 1), l = c.reduce(function(e, t) {
		return e[t.descriptor.id] = !0, e;
	}, {}), u = {
		inVirtualList: n.descriptor.mode === "virtual",
		displacedBy: a,
		effected: l
	};
	return {
		impact: {
			displaced: Kb({
				afterDragging: c,
				destination: n,
				displacedBy: a,
				last: null,
				viewport: i.frame,
				forceShouldAnimate: !1
			}),
			displacedBy: a,
			at: {
				type: "REORDER",
				destination: nS(t.descriptor)
			}
		},
		afterCritical: u
	};
}), iS = (function(e, t) {
	return {
		draggables: e.draggables,
		droppables: Jx(e.droppables, t)
	};
}), aS = (function(e) {
	var t = e.draggable, n = e.offset, r = e.initialWindowScroll, i = Sy(t.client, n), a = Cy(i, r);
	return K({}, t, {
		placeholder: K({}, t.placeholder, { client: i }),
		client: i,
		page: a
	});
}), oS = (function(e) {
	var t = e.frame;
	return !t && Q(!1), t;
}), sS = (function(e) {
	var t = e.additions, n = e.updatedDroppables, r = e.viewport, i = r.scroll.diff.value;
	return t.map(function(e) {
		var t = n[e.descriptor.droppableId], a = oS(t).scroll.diff.value;
		return aS({
			draggable: e,
			offset: Zy(i, a),
			initialWindowScroll: r.scroll.initial
		});
	});
}), cS = (function(e) {
	var t = e.state, n = e.published, r = n.modified.map(function(e) {
		var n = t.dimensions.droppables[e.droppableId];
		return pb(n, e.scroll);
	}), i = K({}, t.dimensions.droppables, {}, vb(r)), a = yb(sS({
		additions: n.additions,
		updatedDroppables: i,
		viewport: t.viewport
	})), o = K({}, t.dimensions.draggables, {}, a);
	n.removals.forEach(function(e) {
		delete o[e];
	});
	var s = {
		droppables: i,
		draggables: o
	}, c = Mx(t.impact), l = c ? s.droppables[c] : null, u = s.draggables[t.critical.draggable.id], d = s.droppables[t.critical.droppable.id], f = rS({
		draggable: u,
		home: d,
		draggables: o,
		viewport: t.viewport
	}), p = f.impact, m = f.afterCritical, h = l && l.isCombineEnabled ? t.impact : p, g = K({ phase: "DRAGGING" }, t, {
		phase: "DRAGGING",
		impact: qx({
			pageOffset: t.current.page.offset,
			draggable: s.draggables[t.critical.draggable.id],
			draggables: s.draggables,
			droppables: s.droppables,
			previousImpact: h,
			viewport: t.viewport,
			afterCritical: m
		}),
		onLiftImpact: p,
		dimensions: s,
		afterCritical: m,
		forceShouldAnimate: !1
	});
	return t.phase === "COLLECTING" ? g : K({ phase: "DROP_PENDING" }, g, {
		phase: "DROP_PENDING",
		reason: t.reason,
		isWaiting: !1
	});
}), lS = function(e) {
	return e.movementMode === "SNAP";
}, uS = function(e, t, n) {
	var r = iS(e.dimensions, t);
	return !lS(e) || n ? Zx({
		state: e,
		dimensions: r
	}) : tS({
		state: e,
		dimensions: r
	});
};
function dS(e) {
	return e.isDragging && e.movementMode === "SNAP" ? K({ phase: "DRAGGING" }, e, { scrollJumpRequest: null }) : e;
}
var fS = {
	phase: "IDLE",
	completed: null,
	shouldFlush: !1
}, pS = (function(e, t) {
	if (e === void 0 && (e = fS), t.type === "FLUSH") return K({}, fS, { shouldFlush: !0 });
	if (t.type === "INITIAL_PUBLISH") {
		e.phase !== "IDLE" && Q(!1);
		var n = t.payload, r = n.critical, i = n.clientSelection, a = n.viewport, o = n.dimensions, s = n.movementMode, c = o.draggables[r.draggable.id], l = o.droppables[r.droppable.id], u = {
			selection: i,
			borderBoxCenter: c.client.borderBox.center,
			offset: Xy
		}, d = {
			client: u,
			page: {
				selection: Zy(u.selection, a.scroll.initial),
				borderBoxCenter: Zy(u.selection, a.scroll.initial),
				offset: Zy(u.selection, a.scroll.diff.value)
			}
		}, f = bb(o.droppables).every(function(e) {
			return !e.isFixedOnPage;
		}), p = rS({
			draggable: c,
			home: l,
			draggables: o.draggables,
			viewport: a
		}), m = p.impact;
		return {
			phase: "DRAGGING",
			isDragging: !0,
			critical: r,
			movementMode: s,
			dimensions: o,
			initial: d,
			current: d,
			isWindowScrollAllowed: f,
			impact: m,
			afterCritical: p.afterCritical,
			onLiftImpact: m,
			viewport: a,
			scrollJumpRequest: null,
			forceShouldAnimate: null
		};
	}
	if (t.type === "COLLECTION_STARTING") return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && Q(!1), K({ phase: "COLLECTING" }, e, { phase: "COLLECTING" }));
	if (t.type === "PUBLISH_WHILE_DRAGGING") return !(e.phase === "COLLECTING" || e.phase === "DROP_PENDING") && Q(!1), cS({
		state: e,
		published: t.payload
	});
	if (t.type === "MOVE") {
		if (e.phase === "DROP_PENDING") return e;
		!Fx(e) && Q(!1);
		var h = t.payload.client;
		return $y(h, e.current.client.selection) ? e : Zx({
			state: e,
			clientSelection: h,
			impact: lS(e) ? e.impact : null
		});
	}
	if (t.type === "UPDATE_DROPPABLE_SCROLL") {
		if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return dS(e);
		!Fx(e) && Q(!1);
		var g = t.payload, _ = g.id, v = g.newScroll, y = e.dimensions.droppables[_];
		if (!y) return e;
		var b = pb(y, v);
		return uS(e, b, !1);
	}
	if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
		if (e.phase === "DROP_PENDING") return e;
		!Fx(e) && Q(!1);
		var x = t.payload, S = x.id, C = x.isEnabled, w = e.dimensions.droppables[S];
		!w && Q(!1), w.isEnabled === C && Q(!1);
		var T = K({}, w, { isEnabled: C });
		return uS(e, T, !0);
	}
	if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
		if (e.phase === "DROP_PENDING") return e;
		!Fx(e) && Q(!1);
		var E = t.payload, D = E.id, ee = E.isCombineEnabled, O = e.dimensions.droppables[D];
		!O && Q(!1), O.isCombineEnabled === ee && Q(!1);
		var k = K({}, O, { isCombineEnabled: ee });
		return uS(e, k, !0);
	}
	if (t.type === "MOVE_BY_WINDOW_SCROLL") {
		if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
		!Fx(e) && Q(!1), !e.isWindowScrollAllowed && Q(!1);
		var A = t.payload.newScroll;
		if ($y(e.viewport.scroll.current, A)) return dS(e);
		var j = fx(e.viewport, A);
		return lS(e) ? tS({
			state: e,
			viewport: j
		}) : Zx({
			state: e,
			viewport: j
		});
	}
	if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
		if (!Fx(e)) return e;
		var M = t.payload.maxScroll;
		if ($y(M, e.viewport.scroll.max)) return e;
		var te = K({}, e.viewport, { scroll: K({}, e.viewport.scroll, { max: M }) });
		return K({ phase: "DRAGGING" }, e, { viewport: te });
	}
	if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
		if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
		e.phase !== "DRAGGING" && Q(!1);
		var N = Px({
			state: e,
			type: t.type
		});
		return N ? Zx({
			state: e,
			impact: N.impact,
			clientSelection: N.clientSelection,
			scrollJumpRequest: N.scrollJumpRequest
		}) : e;
	}
	if (t.type === "DROP_PENDING") {
		var P = t.payload.reason;
		return e.phase !== "COLLECTING" && Q(!1), K({ phase: "DROP_PENDING" }, e, {
			phase: "DROP_PENDING",
			isWaiting: !0,
			reason: P
		});
	}
	if (t.type === "DROP_ANIMATE") {
		var F = t.payload, ne = F.completed, I = F.dropDuration, re = F.newHomeClientOffset;
		return !(e.phase === "DRAGGING" || e.phase === "DROP_PENDING") && Q(!1), {
			phase: "DROP_ANIMATING",
			completed: ne,
			dropDuration: I,
			newHomeClientOffset: re,
			dimensions: e.dimensions
		};
	}
	return t.type === "DROP_COMPLETE" ? {
		phase: "IDLE",
		completed: t.payload.completed,
		shouldFlush: !1
	} : e;
}), mS = function(e) {
	return {
		type: "BEFORE_INITIAL_CAPTURE",
		payload: e
	};
}, hS = function(e) {
	return {
		type: "LIFT",
		payload: e
	};
}, gS = function(e) {
	return {
		type: "INITIAL_PUBLISH",
		payload: e
	};
}, _S = function(e) {
	return {
		type: "PUBLISH_WHILE_DRAGGING",
		payload: e
	};
}, vS = function() {
	return {
		type: "COLLECTION_STARTING",
		payload: null
	};
}, yS = function(e) {
	return {
		type: "UPDATE_DROPPABLE_SCROLL",
		payload: e
	};
}, bS = function(e) {
	return {
		type: "UPDATE_DROPPABLE_IS_ENABLED",
		payload: e
	};
}, xS = function(e) {
	return {
		type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
		payload: e
	};
}, SS = function(e) {
	return {
		type: "MOVE",
		payload: e
	};
}, CS = function(e) {
	return {
		type: "MOVE_BY_WINDOW_SCROLL",
		payload: e
	};
}, wS = function(e) {
	return {
		type: "UPDATE_VIEWPORT_MAX_SCROLL",
		payload: e
	};
}, TS = function() {
	return {
		type: "MOVE_UP",
		payload: null
	};
}, ES = function() {
	return {
		type: "MOVE_DOWN",
		payload: null
	};
}, DS = function() {
	return {
		type: "MOVE_RIGHT",
		payload: null
	};
}, OS = function() {
	return {
		type: "MOVE_LEFT",
		payload: null
	};
}, kS = function() {
	return {
		type: "FLUSH",
		payload: null
	};
}, AS = function(e) {
	return {
		type: "DROP_ANIMATE",
		payload: e
	};
}, jS = function(e) {
	return {
		type: "DROP_COMPLETE",
		payload: e
	};
}, MS = function(e) {
	return {
		type: "DROP",
		payload: e
	};
}, NS = function(e) {
	return {
		type: "DROP_PENDING",
		payload: e
	};
}, PS = function() {
	return {
		type: "DROP_ANIMATION_FINISHED",
		payload: null
	};
}, FS = (function(e) {
	return function(t) {
		var n = t.getState, r = t.dispatch;
		return function(t) {
			return function(i) {
				if (i.type !== "LIFT") {
					t(i);
					return;
				}
				var a = i.payload, o = a.id, s = a.clientSelection, c = a.movementMode, l = n();
				l.phase === "DROP_ANIMATING" && r(jS({ completed: l.completed })), n().phase !== "IDLE" && Q(!1), r(kS()), r(mS({
					draggableId: o,
					movementMode: c
				}));
				var u = {
					draggableId: o,
					scrollOptions: { shouldPublishImmediately: c === "SNAP" }
				}, d = e.startPublishing(u), f = d.critical, p = d.dimensions, m = d.viewport;
				r(gS({
					critical: f,
					dimensions: p,
					clientSelection: s,
					movementMode: c,
					viewport: m
				}));
			};
		};
	};
}), IS = (function(e) {
	return function() {
		return function(t) {
			return function(n) {
				n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
			};
		};
	};
}), LS = {
	outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
	drop: "cubic-bezier(.2,1,.1,1)"
}, RS = {
	opacity: {
		drop: 0,
		combining: .7
	},
	scale: { drop: .75 }
}, zS = {
	outOfTheWay: .2,
	minDropTime: .33,
	maxDropTime: .55
}, BS = zS.outOfTheWay + "s " + LS.outOfTheWay, VS = {
	fluid: "opacity " + BS,
	snap: "transform " + BS + ", opacity " + BS,
	drop: function(e) {
		var t = e + "s " + LS.drop;
		return "transform " + t + ", opacity " + t;
	},
	outOfTheWay: "transform " + BS,
	placeholder: "height " + BS + ", width " + BS + ", margin " + BS
}, HS = function(e) {
	return $y(e, Xy) ? null : "translate(" + e.x + "px, " + e.y + "px)";
}, US = {
	moveTo: HS,
	drop: function(e, t) {
		var n = HS(e);
		return n ? t ? n + " scale(" + RS.scale.drop + ")" : n : null;
	}
}, WS = zS.minDropTime, GS = zS.maxDropTime, KS = GS - WS, qS = 1500, JS = .6, YS = (function(e) {
	var t = e.current, n = e.destination, r = e.reason, i = nb(t, n);
	if (i <= 0) return WS;
	if (i >= qS) return GS;
	var a = WS + i / qS * KS, o = r === "CANCEL" ? a * JS : a;
	return Number(o.toFixed(2));
}), XS = (function(e) {
	var t = e.impact, n = e.draggable, r = e.dimensions, i = e.viewport, a = e.afterCritical, o = r.draggables, s = r.droppables, c = Mx(t), l = c ? s[c] : null, u = s[n.descriptor.droppableId];
	return Qy(eS({
		impact: t,
		draggable: n,
		draggables: o,
		afterCritical: a,
		droppable: l || u,
		viewport: i
	}), n.client.borderBox.center);
}), ZS = (function(e) {
	var t = e.draggables, n = e.reason, r = e.lastImpact, i = e.home, a = e.viewport, o = e.onLiftImpact;
	return !r.at || n !== "DROP" ? {
		impact: $x({
			draggables: t,
			impact: o,
			destination: i,
			viewport: a,
			forceShouldAnimate: !0
		}),
		didDropInsideDroppable: !1
	} : r.at.type === "REORDER" ? {
		impact: r,
		didDropInsideDroppable: !0
	} : {
		impact: K({}, r, { displaced: kb }),
		didDropInsideDroppable: !0
	};
}), QS = (function(e) {
	var t = e.getState, n = e.dispatch;
	return function(e) {
		return function(r) {
			if (r.type !== "DROP") {
				e(r);
				return;
			}
			var i = t(), a = r.payload.reason;
			if (i.phase === "COLLECTING") {
				n(NS({ reason: a }));
				return;
			}
			if (i.phase !== "IDLE") {
				i.phase === "DROP_PENDING" && i.isWaiting && Q(!1), !(i.phase === "DRAGGING" || i.phase === "DROP_PENDING") && Q(!1);
				var o = i.critical, s = i.dimensions, c = s.draggables[i.critical.draggable.id], l = ZS({
					reason: a,
					lastImpact: i.impact,
					afterCritical: i.afterCritical,
					onLiftImpact: i.onLiftImpact,
					home: i.dimensions.droppables[i.critical.droppable.id],
					viewport: i.viewport,
					draggables: i.dimensions.draggables
				}), u = l.impact, d = l.didDropInsideDroppable, f = d ? Cb(u) : null, p = d ? wb(u) : null, m = {
					index: o.draggable.index,
					droppableId: o.droppable.id
				}, h = {
					draggableId: c.descriptor.id,
					type: c.descriptor.type,
					source: m,
					reason: a,
					mode: i.movementMode,
					destination: f,
					combine: p
				}, g = XS({
					impact: u,
					draggable: c,
					dimensions: s,
					viewport: i.viewport,
					afterCritical: i.afterCritical
				}), _ = {
					critical: i.critical,
					afterCritical: i.afterCritical,
					result: h,
					impact: u
				};
				if (!(!$y(i.current.client.offset, g) || h.combine)) {
					n(jS({ completed: _ }));
					return;
				}
				n(AS({
					newHomeClientOffset: g,
					dropDuration: YS({
						current: i.current.client.offset,
						destination: g,
						reason: a
					}),
					completed: _
				}));
			}
		};
	};
}), $S = (function() {
	return {
		x: window.pageXOffset,
		y: window.pageYOffset
	};
});
function eC(e) {
	return {
		eventName: "scroll",
		options: {
			passive: !0,
			capture: !1
		},
		fn: function(t) {
			t.target !== window && t.target !== window.document || e();
		}
	};
}
function tC(e) {
	var t = e.onWindowScroll;
	function n() {
		t($S());
	}
	var r = Ey(n), i = eC(r), a = Fy;
	function o() {
		return a !== Fy;
	}
	function s() {
		o() && Q(!1), a = Ly(window, [i]);
	}
	function c() {
		!o() && Q(!1), r.cancel(), a(), a = Fy;
	}
	return {
		start: s,
		stop: c,
		isActive: o
	};
}
var nC = function(e) {
	return e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
}, rC = (function(e) {
	var t = tC({ onWindowScroll: function(t) {
		e.dispatch(CS({ newScroll: t }));
	} });
	return function(e) {
		return function(n) {
			!t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && nC(n) && t.stop(), e(n);
		};
	};
}), iC = (function(e) {
	var t = !1, n = !1, r = setTimeout(function() {
		n = !0;
	}), i = function(i) {
		t || n || (t = !0, e(i), clearTimeout(r));
	};
	return i.wasCalled = function() {
		return t;
	}, i;
}), aC = (function() {
	var e = [], t = function(t) {
		var n = hb(e, function(e) {
			return e.timerId === t;
		});
		n === -1 && Q(!1), e.splice(n, 1)[0].callback();
	};
	return {
		add: function(n) {
			var r = setTimeout(function() {
				return t(r);
			}), i = {
				timerId: r,
				callback: n
			};
			e.push(i);
		},
		flush: function() {
			if (e.length) {
				var t = [].concat(e);
				e.length = 0, t.forEach(function(e) {
					clearTimeout(e.timerId), e.callback();
				});
			}
		}
	};
}), oC = function(e, t) {
	return e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index;
}, sC = function(e, t) {
	return e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId;
}, cC = function(e, t) {
	if (e === t) return !0;
	var n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
	return n && r;
}, lC = function(e, t) {
	t();
}, uC = function(e, t) {
	return {
		draggableId: e.draggable.id,
		type: e.droppable.type,
		source: {
			droppableId: e.droppable.id,
			index: e.draggable.index
		},
		mode: t
	};
}, dC = function(e, t, n, r) {
	if (!e) {
		n(r(t));
		return;
	}
	var i = iC(n);
	e(t, { announce: i }), i.wasCalled() || n(r(t));
}, fC = (function(e, t) {
	var n = aC(), r = null, i = function(t, n) {
		r && Q(!1), lC("onBeforeCapture", function() {
			var r = e().onBeforeCapture;
			r && r({
				draggableId: t,
				mode: n
			});
		});
	}, a = function(t, n) {
		r && Q(!1), lC("onBeforeDragStart", function() {
			var r = e().onBeforeDragStart;
			r && r(uC(t, n));
		});
	}, o = function(i, a) {
		r && Q(!1);
		var o = uC(i, a);
		r = {
			mode: a,
			lastCritical: i,
			lastLocation: o.source,
			lastCombine: null
		}, n.add(function() {
			lC("onDragStart", function() {
				return dC(e().onDragStart, o, t, Yy.onDragStart);
			});
		});
	}, s = function(i, a) {
		var o = Cb(a), s = wb(a);
		!r && Q(!1);
		var c = !cC(i, r.lastCritical);
		c && (r.lastCritical = i);
		var l = !oC(r.lastLocation, o);
		l && (r.lastLocation = o);
		var u = !sC(r.lastCombine, s);
		if (u && (r.lastCombine = s), !(!c && !l && !u)) {
			var d = K({}, uC(i, r.mode), {
				combine: s,
				destination: o
			});
			n.add(function() {
				lC("onDragUpdate", function() {
					return dC(e().onDragUpdate, d, t, Yy.onDragUpdate);
				});
			});
		}
	}, c = function() {
		!r && Q(!1), n.flush();
	}, l = function(n) {
		!r && Q(!1), r = null, lC("onDragEnd", function() {
			return dC(e().onDragEnd, n, t, Yy.onDragEnd);
		});
	};
	return {
		beforeCapture: i,
		beforeStart: a,
		start: o,
		update: s,
		flush: c,
		drop: l,
		abort: function() {
			r && l(K({}, uC(r.lastCritical, r.mode), {
				combine: null,
				destination: null,
				reason: "CANCEL"
			}));
		}
	};
}), pC = (function(e, t) {
	var n = fC(e, t);
	return function(e) {
		return function(t) {
			return function(r) {
				if (r.type === "BEFORE_INITIAL_CAPTURE") {
					n.beforeCapture(r.payload.draggableId, r.payload.movementMode);
					return;
				}
				if (r.type === "INITIAL_PUBLISH") {
					var i = r.payload.critical;
					n.beforeStart(i, r.payload.movementMode), t(r), n.start(i, r.payload.movementMode);
					return;
				}
				if (r.type === "DROP_COMPLETE") {
					var a = r.payload.completed.result;
					n.flush(), t(r), n.drop(a);
					return;
				}
				if (t(r), r.type === "FLUSH") {
					n.abort();
					return;
				}
				var o = e.getState();
				o.phase === "DRAGGING" && n.update(o.critical, o.impact);
			};
		};
	};
}), mC = (function(e) {
	return function(t) {
		return function(n) {
			if (n.type !== "DROP_ANIMATION_FINISHED") {
				t(n);
				return;
			}
			var r = e.getState();
			r.phase !== "DROP_ANIMATING" && Q(!1), e.dispatch(jS({ completed: r.completed }));
		};
	};
}), hC = (function(e) {
	var t = null, n = null;
	function r() {
		n &&= (cancelAnimationFrame(n), null), t &&= (t(), null);
	}
	return function(i) {
		return function(a) {
			if ((a.type === "FLUSH" || a.type === "DROP_COMPLETE" || a.type === "DROP_ANIMATION_FINISHED") && r(), i(a), a.type === "DROP_ANIMATE") {
				var o = {
					eventName: "scroll",
					options: {
						capture: !0,
						passive: !1,
						once: !0
					},
					fn: function() {
						e.getState().phase === "DROP_ANIMATING" && e.dispatch(PS());
					}
				};
				n = requestAnimationFrame(function() {
					n = null, t = Ly(window, [o]);
				});
			}
		};
	};
}), gC = (function(e) {
	return function() {
		return function(t) {
			return function(n) {
				(n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
			};
		};
	};
}), _C = (function(e) {
	var t = !1;
	return function() {
		return function(n) {
			return function(r) {
				if (r.type === "INITIAL_PUBLISH") {
					t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
					return;
				}
				if (n(r), t) {
					if (r.type === "FLUSH") {
						t = !1, e.tryRestoreFocusRecorded();
						return;
					}
					if (r.type === "DROP_COMPLETE") {
						t = !1;
						var i = r.payload.completed.result;
						i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId), e.tryRestoreFocusRecorded();
					}
				}
			};
		};
	};
}), vC = function(e) {
	return e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
}, yC = (function(e) {
	return function(t) {
		return function(n) {
			return function(r) {
				if (vC(r)) {
					e.stop(), n(r);
					return;
				}
				if (r.type === "INITIAL_PUBLISH") {
					n(r);
					var i = t.getState();
					i.phase !== "DRAGGING" && Q(!1), e.start(i);
					return;
				}
				n(r), e.scroll(t.getState());
			};
		};
	};
}), bC = (function(e) {
	return function(t) {
		return function(n) {
			if (t(n), n.type === "PUBLISH_WHILE_DRAGGING") {
				var r = e.getState();
				r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(MS({ reason: r.reason })));
			}
		};
	};
}), xC = V, SC = (function(e) {
	var t = e.dimensionMarshal, n = e.focusMarshal, r = e.styleMarshal, i = e.getResponders, a = e.announce, o = e.autoScroller;
	return ut(pS, xC(xe(IS(r), gC(t), FS(t), QS, mC, hC, bC, yC(o), rC, _C(n), pC(i, a))));
}), CC = function() {
	return {
		additions: {},
		removals: {},
		modified: {}
	};
};
function wC(e) {
	var t = e.registry, n = e.callbacks, r = CC(), i = null, a = function() {
		i ||= (n.collectionStarting(), requestAnimationFrame(function() {
			i = null;
			var e = r, a = e.additions, o = e.removals, s = e.modified, c = Object.keys(a).map(function(e) {
				return t.draggable.getById(e).getDimension(Xy);
			}).sort(function(e, t) {
				return e.descriptor.index - t.descriptor.index;
			}), l = Object.keys(s).map(function(e) {
				return {
					droppableId: e,
					scroll: t.droppable.getById(e).callbacks.getScrollWhileDragging()
				};
			}), u = {
				additions: c,
				removals: Object.keys(o),
				modified: l
			};
			r = CC(), n.publish(u);
		}));
	};
	return {
		add: function(e) {
			var t = e.descriptor.id;
			r.additions[t] = e, r.modified[e.descriptor.droppableId] = !0, r.removals[t] && delete r.removals[t], a();
		},
		remove: function(e) {
			var t = e.descriptor;
			r.removals[t.id] = !0, r.modified[t.droppableId] = !0, r.additions[t.id] && delete r.additions[t.id], a();
		},
		stop: function() {
			i && (cancelAnimationFrame(i), i = null, r = CC());
		}
	};
}
var TC = (function(e) {
	var t = e.scrollHeight, n = e.scrollWidth, r = e.height, i = e.width, a = Qy({
		x: n,
		y: t
	}, {
		x: i,
		y: r
	});
	return {
		x: Math.max(0, a.x),
		y: Math.max(0, a.y)
	};
}), EC = (function() {
	var e = document.documentElement;
	return !e && Q(!1), e;
}), DC = (function() {
	var e = EC();
	return TC({
		scrollHeight: e.scrollHeight,
		scrollWidth: e.scrollWidth,
		width: e.clientWidth,
		height: e.clientHeight
	});
}), OC = (function() {
	var e = $S(), t = DC(), n = e.y, r = e.x, i = EC(), a = i.clientWidth, o = i.clientHeight;
	return {
		frame: my({
			top: n,
			left: r,
			right: r + a,
			bottom: n + o
		}),
		scroll: {
			initial: e,
			current: e,
			max: t,
			diff: {
				value: Xy,
				displacement: Xy
			}
		}
	};
}), kC = (function(e) {
	var t = e.critical, n = e.scrollOptions, r = e.registry, i = OC(), a = i.scroll.current, o = t.droppable, s = r.droppable.getAllByType(o.type).map(function(e) {
		return e.callbacks.getDimensionAndWatchScroll(a, n);
	});
	return {
		dimensions: {
			draggables: yb(r.draggable.getAllByType(t.draggable.type).map(function(e) {
				return e.getDimension(a);
			})),
			droppables: vb(s)
		},
		critical: t,
		viewport: i
	};
});
function AC(e, t, n) {
	return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var jC = (function(e, t) {
	var n = null, r = wC({
		callbacks: {
			publish: t.publishWhileDragging,
			collectionStarting: t.collectionStarting
		},
		registry: e
	}), i = function(r, i) {
		!e.droppable.exists(r) && Q(!1), n && t.updateDroppableIsEnabled({
			id: r,
			isEnabled: i
		});
	}, a = function(r, i) {
		n && (!e.droppable.exists(r) && Q(!1), t.updateDroppableIsCombineEnabled({
			id: r,
			isCombineEnabled: i
		}));
	}, o = function(r, i) {
		n && (!e.droppable.exists(r) && Q(!1), t.updateDroppableScroll({
			id: r,
			newScroll: i
		}));
	}, s = function(t, r) {
		n && e.droppable.getById(t).callbacks.scroll(r);
	}, c = function() {
		if (n) {
			r.stop();
			var t = n.critical.droppable;
			e.droppable.getAllByType(t.type).forEach(function(e) {
				return e.callbacks.dragStopped();
			}), n.unsubscribe(), n = null;
		}
	}, l = function(t) {
		!n && Q(!1);
		var i = n.critical.draggable;
		t.type === "ADDITION" && AC(e, i, t.value) && r.add(t.value), t.type === "REMOVAL" && AC(e, i, t.value) && r.remove(t.value);
	};
	return {
		updateDroppableIsEnabled: i,
		updateDroppableIsCombineEnabled: a,
		scrollDroppable: s,
		updateDroppableScroll: o,
		startPublishing: function(t) {
			n && Q(!1);
			var r = e.draggable.getById(t.draggableId), i = e.droppable.getById(r.descriptor.droppableId), a = {
				draggable: r.descriptor,
				droppable: i.descriptor
			};
			return n = {
				critical: a,
				unsubscribe: e.subscribe(l)
			}, kC({
				critical: a,
				registry: e,
				scrollOptions: t.scrollOptions
			});
		},
		stopPublishing: c
	};
}), MC = (function(e, t) {
	return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP";
}), NC = (function(e) {
	window.scrollBy(e.x, e.y);
}), PC = wr(function(e) {
	return bb(e).filter(function(e) {
		return !(!e.isEnabled || !e.frame);
	});
}), FC = function(e, t) {
	return gb(PC(t), function(t) {
		return !t.frame && Q(!1), Ix(t.frame.pageMarginBox)(e);
	});
}, IC = (function(e) {
	var t = e.center, n = e.destination, r = e.droppables;
	if (n) {
		var i = r[n];
		return i.frame ? i : null;
	}
	return FC(t, r);
}), LC = {
	startFromPercentage: .25,
	maxScrollAtPercentage: .05,
	maxPixelScroll: 28,
	ease: function(e) {
		return e ** 2;
	},
	durationDampening: {
		stopDampeningAt: 1200,
		accelerateAt: 360
	}
}, RC = (function(e, t) {
	return {
		startScrollingFrom: e[t.size] * LC.startFromPercentage,
		maxScrollValueAt: e[t.size] * LC.maxScrollAtPercentage
	};
}), zC = (function(e) {
	var t = e.startOfRange, n = e.endOfRange, r = e.current, i = n - t;
	return i === 0 ? 0 : (r - t) / i;
}), BC = 1, VC = (function(e, t) {
	if (e > t.startScrollingFrom) return 0;
	if (e <= t.maxScrollValueAt) return LC.maxPixelScroll;
	if (e === t.startScrollingFrom) return BC;
	var n = 1 - zC({
		startOfRange: t.maxScrollValueAt,
		endOfRange: t.startScrollingFrom,
		current: e
	}), r = LC.maxPixelScroll * LC.ease(n);
	return Math.ceil(r);
}), HC = LC.durationDampening.accelerateAt, UC = LC.durationDampening.stopDampeningAt, WC = (function(e, t) {
	var n = t, r = UC, i = Date.now() - n;
	if (i >= UC) return e;
	if (i < HC) return BC;
	var a = zC({
		startOfRange: HC,
		endOfRange: r,
		current: i
	}), o = e * LC.ease(a);
	return Math.ceil(o);
}), GC = (function(e) {
	var t = e.distanceToEdge, n = e.thresholds, r = e.dragStartTime, i = e.shouldUseTimeDampening, a = VC(t, n);
	return a === 0 ? 0 : i ? Math.max(WC(a, r), BC) : a;
}), KC = (function(e) {
	var t = e.container, n = e.distanceToEdges, r = e.dragStartTime, i = e.axis, a = e.shouldUseTimeDampening, o = RC(t, i);
	return n[i.end] < n[i.start] ? GC({
		distanceToEdge: n[i.end],
		thresholds: o,
		dragStartTime: r,
		shouldUseTimeDampening: a
	}) : -1 * GC({
		distanceToEdge: n[i.start],
		thresholds: o,
		dragStartTime: r,
		shouldUseTimeDampening: a
	});
}), qC = (function(e) {
	var t = e.container, n = e.subject, r = e.proposedScroll, i = n.height > t.height, a = n.width > t.width;
	return !a && !i ? r : a && i ? null : {
		x: a ? 0 : r.x,
		y: i ? 0 : r.y
	};
}), JC = ib(function(e) {
	return e === 0 ? 0 : e;
}), YC = (function(e) {
	var t = e.dragStartTime, n = e.container, r = e.subject, i = e.center, a = e.shouldUseTimeDampening, o = {
		top: i.y - n.top,
		right: n.right - i.x,
		bottom: n.bottom - i.y,
		left: i.x - n.left
	}, s = KC({
		container: n,
		distanceToEdges: o,
		dragStartTime: t,
		axis: Pb,
		shouldUseTimeDampening: a
	}), c = JC({
		x: KC({
			container: n,
			distanceToEdges: o,
			dragStartTime: t,
			axis: Fb,
			shouldUseTimeDampening: a
		}),
		y: s
	});
	if ($y(c, Xy)) return null;
	var l = qC({
		container: n,
		subject: r,
		proposedScroll: c
	});
	return l ? $y(l, Xy) ? null : l : null;
}), XC = ib(function(e) {
	return e === 0 ? 0 : e > 0 ? 1 : -1;
}), ZC = function() {
	var e = function(e, t) {
		return e < 0 ? e : e > t ? e - t : 0;
	};
	return function(t) {
		var n = t.current, r = t.max, i = t.change, a = Zy(n, i), o = {
			x: e(a.x, r.x),
			y: e(a.y, r.y)
		};
		return $y(o, Xy) ? null : o;
	};
}(), QC = function(e) {
	var t = e.max, n = e.current, r = e.change, i = {
		x: Math.max(n.x, t.x),
		y: Math.max(n.y, t.y)
	}, a = XC(r), o = ZC({
		max: i,
		current: n,
		change: a
	});
	return !o || a.x !== 0 && o.x === 0 || a.y !== 0 && o.y === 0;
}, $C = function(e, t) {
	return QC({
		current: e.scroll.current,
		max: e.scroll.max,
		change: t
	});
}, ew = function(e, t) {
	if (!$C(e, t)) return null;
	var n = e.scroll.max, r = e.scroll.current;
	return ZC({
		current: r,
		max: n,
		change: t
	});
}, tw = function(e, t) {
	var n = e.frame;
	return n ? QC({
		current: n.scroll.current,
		max: n.scroll.max,
		change: t
	}) : !1;
}, nw = function(e, t) {
	var n = e.frame;
	return !n || !tw(e, t) ? null : ZC({
		current: n.scroll.current,
		max: n.scroll.max,
		change: t
	});
}, rw = (function(e) {
	var t = e.viewport, n = e.subject, r = e.center, i = e.dragStartTime, a = e.shouldUseTimeDampening, o = YC({
		dragStartTime: i,
		container: t.frame,
		subject: n,
		center: r,
		shouldUseTimeDampening: a
	});
	return o && $C(t, o) ? o : null;
}), iw = (function(e) {
	var t = e.droppable, n = e.subject, r = e.center, i = e.dragStartTime, a = e.shouldUseTimeDampening, o = t.frame;
	if (!o) return null;
	var s = YC({
		dragStartTime: i,
		container: o.pageMarginBox,
		subject: n,
		center: r,
		shouldUseTimeDampening: a
	});
	return s && tw(t, s) ? s : null;
}), aw = (function(e) {
	var t = e.state, n = e.dragStartTime, r = e.shouldUseTimeDampening, i = e.scrollWindow, a = e.scrollDroppable, o = t.current.page.borderBoxCenter, s = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
	if (t.isWindowScrollAllowed) {
		var c = t.viewport, l = rw({
			dragStartTime: n,
			viewport: c,
			subject: s,
			center: o,
			shouldUseTimeDampening: r
		});
		if (l) {
			i(l);
			return;
		}
	}
	var u = IC({
		center: o,
		destination: Mx(t.impact),
		droppables: t.dimensions.droppables
	});
	if (u) {
		var d = iw({
			dragStartTime: n,
			droppable: u,
			subject: s,
			center: o,
			shouldUseTimeDampening: r
		});
		d && a(u.descriptor.id, d);
	}
}), ow = (function(e) {
	var t = e.scrollWindow, n = e.scrollDroppable, r = Ey(t), i = Ey(n), a = null, o = function(e) {
		!a && Q(!1);
		var t = a, n = t.shouldUseTimeDampening, o = t.dragStartTime;
		aw({
			state: e,
			scrollWindow: r,
			scrollDroppable: i,
			dragStartTime: o,
			shouldUseTimeDampening: n
		});
	};
	return {
		start: function(e) {
			a && Q(!1);
			var t = Date.now(), n = !1, r = function() {
				n = !0;
			};
			aw({
				state: e,
				dragStartTime: 0,
				shouldUseTimeDampening: !1,
				scrollWindow: r,
				scrollDroppable: r
			}), a = {
				dragStartTime: t,
				shouldUseTimeDampening: n
			}, n && o(e);
		},
		stop: function() {
			a &&= (r.cancel(), i.cancel(), null);
		},
		scroll: o
	};
}), sw = (function(e) {
	var t = e.move, n = e.scrollDroppable, r = e.scrollWindow, i = function(e, n) {
		t({ client: Zy(e.current.client.selection, n) });
	}, a = function(e, t) {
		if (!tw(e, t)) return t;
		var r = nw(e, t);
		if (!r) return n(e.descriptor.id, t), null;
		var i = Qy(t, r);
		return n(e.descriptor.id, i), Qy(t, i);
	}, o = function(e, t, n) {
		if (!e || !$C(t, n)) return n;
		var i = ew(t, n);
		if (!i) return r(n), null;
		var a = Qy(n, i);
		return r(a), Qy(n, a);
	};
	return function(e) {
		var t = e.scrollJumpRequest;
		if (t) {
			var n = Mx(e.impact);
			!n && Q(!1);
			var r = a(e.dimensions.droppables[n], t);
			if (r) {
				var s = e.viewport, c = o(e.isWindowScrollAllowed, s, r);
				c && i(e, c);
			}
		}
	};
}), cw = (function(e) {
	var t = e.scrollDroppable, n = e.scrollWindow, r = e.move, i = ow({
		scrollWindow: n,
		scrollDroppable: t
	}), a = sw({
		move: r,
		scrollWindow: n,
		scrollDroppable: t
	});
	return {
		scroll: function(e) {
			if (e.phase === "DRAGGING") {
				if (e.movementMode === "FLUID") {
					i.scroll(e);
					return;
				}
				e.scrollJumpRequest && a(e);
			}
		},
		start: i.start,
		stop: i.stop
	};
}), lw = "data-rbd", uw = function() {
	var e = lw + "-drag-handle";
	return {
		base: e,
		draggableId: e + "-draggable-id",
		contextId: e + "-context-id"
	};
}(), dw = function() {
	var e = lw + "-draggable";
	return {
		base: e,
		contextId: e + "-context-id",
		id: e + "-id"
	};
}(), fw = function() {
	var e = lw + "-droppable";
	return {
		base: e,
		contextId: e + "-context-id",
		id: e + "-id"
	};
}(), pw = { contextId: lw + "-scroll-container-context-id" }, mw = function(e) {
	return function(t) {
		return "[" + t + "=\"" + e + "\"]";
	};
}, hw = function(e, t) {
	return e.map(function(e) {
		var n = e.styles[t];
		return n ? e.selector + " { " + n + " }" : "";
	}).join(" ");
}, gw = "pointer-events: none;", _w = (function(e) {
	var t = mw(e), n = function() {
		var e = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
		return {
			selector: t(uw.contextId),
			styles: {
				always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
				resting: e,
				dragging: gw,
				dropAnimating: e
			}
		};
	}(), r = [
		function() {
			var e = "\n      transition: " + VS.outOfTheWay + ";\n    ";
			return {
				selector: t(dw.contextId),
				styles: {
					dragging: e,
					dropAnimating: e,
					userCancel: e
				}
			};
		}(),
		n,
		{
			selector: t(fw.contextId),
			styles: { always: "overflow-anchor: none;" }
		},
		{
			selector: "body",
			styles: { dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      " }
		}
	];
	return {
		always: hw(r, "always"),
		resting: hw(r, "resting"),
		dragging: hw(r, "dragging"),
		dropAnimating: hw(r, "dropAnimating"),
		userCancel: hw(r, "userCancel")
	};
}), vw = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? X.useLayoutEffect : X.useEffect, yw = function() {
	var e = document.querySelector("head");
	return !e && Q(!1), e;
}, bw = function(e) {
	var t = document.createElement("style");
	return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function xw(e, t) {
	var n = uy(function() {
		return _w(e);
	}, [e]), r = (0, X.useRef)(null), i = (0, X.useRef)(null), a = Z(wr(function(e) {
		var t = i.current;
		!t && Q(!1), t.textContent = e;
	}), []), o = Z(function(e) {
		var t = r.current;
		!t && Q(!1), t.textContent = e;
	}, []);
	vw(function() {
		!(!r.current && !i.current) && Q(!1);
		var s = bw(t), c = bw(t);
		return r.current = s, i.current = c, s.setAttribute(lw + "-always", e), c.setAttribute(lw + "-dynamic", e), yw().appendChild(s), yw().appendChild(c), o(n.always), a(n.resting), function() {
			var e = function(e) {
				var t = e.current;
				!t && Q(!1), yw().removeChild(t), e.current = null;
			};
			e(r), e(i);
		};
	}, [
		t,
		o,
		a,
		n.always,
		n.resting,
		e
	]);
	var s = Z(function() {
		return a(n.dragging);
	}, [a, n.dragging]), c = Z(function(e) {
		if (e === "DROP") {
			a(n.dropAnimating);
			return;
		}
		a(n.userCancel);
	}, [
		a,
		n.dropAnimating,
		n.userCancel
	]), l = Z(function() {
		i.current && a(n.resting);
	}, [a, n.resting]);
	return uy(function() {
		return {
			dragging: s,
			dropping: c,
			resting: l
		};
	}, [
		s,
		c,
		l
	]);
}
var Sw = (function(e) {
	return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
});
function Cw(e) {
	return e instanceof Sw(e).HTMLElement;
}
function ww(e, t) {
	var n = "[" + uw.contextId + "=\"" + e + "\"]", r = _b(document.querySelectorAll(n));
	if (!r.length) return null;
	var i = gb(r, function(e) {
		return e.getAttribute(uw.draggableId) === t;
	});
	return !i || !Cw(i) ? null : i;
}
function Tw(e) {
	var t = (0, X.useRef)({}), n = (0, X.useRef)(null), r = (0, X.useRef)(null), i = (0, X.useRef)(!1), a = Z(function(e, n) {
		var r = {
			id: e,
			focus: n
		};
		return t.current[e] = r, function() {
			var n = t.current;
			n[e] !== r && delete n[e];
		};
	}, []), o = Z(function(t) {
		var n = ww(e, t);
		n && n !== document.activeElement && n.focus();
	}, [e]), s = Z(function(e, t) {
		n.current === e && (n.current = t);
	}, []), c = Z(function() {
		r.current || i.current && (r.current = requestAnimationFrame(function() {
			r.current = null;
			var e = n.current;
			e && o(e);
		}));
	}, [o]), l = Z(function(e) {
		n.current = null;
		var t = document.activeElement;
		t && t.getAttribute(uw.draggableId) === e && (n.current = e);
	}, []);
	return vw(function() {
		return i.current = !0, function() {
			i.current = !1;
			var e = r.current;
			e && cancelAnimationFrame(e);
		};
	}, []), uy(function() {
		return {
			register: a,
			tryRecordFocus: l,
			tryRestoreFocusRecorded: c,
			tryShiftRecord: s
		};
	}, [
		a,
		l,
		c,
		s
	]);
}
function Ew() {
	var e = {
		draggables: {},
		droppables: {}
	}, t = [];
	function n(e) {
		return t.push(e), function() {
			var n = t.indexOf(e);
			n !== -1 && t.splice(n, 1);
		};
	}
	function r(e) {
		t.length && t.forEach(function(t) {
			return t(e);
		});
	}
	function i(t) {
		return e.draggables[t] || null;
	}
	function a(e) {
		var t = i(e);
		return !t && Q(!1), t;
	}
	var o = {
		register: function(t) {
			e.draggables[t.descriptor.id] = t, r({
				type: "ADDITION",
				value: t
			});
		},
		update: function(t, n) {
			var r = e.draggables[n.descriptor.id];
			r && r.uniqueId === t.uniqueId && (delete e.draggables[n.descriptor.id], e.draggables[t.descriptor.id] = t);
		},
		unregister: function(t) {
			var n = t.descriptor.id, a = i(n);
			a && t.uniqueId === a.uniqueId && (delete e.draggables[n], r({
				type: "REMOVAL",
				value: t
			}));
		},
		getById: a,
		findById: i,
		exists: function(e) {
			return !!i(e);
		},
		getAllByType: function(t) {
			return mb(e.draggables).filter(function(e) {
				return e.descriptor.type === t;
			});
		}
	};
	function s(t) {
		return e.droppables[t] || null;
	}
	function c(e) {
		var t = s(e);
		return !t && Q(!1), t;
	}
	var l = {
		register: function(t) {
			e.droppables[t.descriptor.id] = t;
		},
		unregister: function(t) {
			var n = s(t.descriptor.id);
			n && t.uniqueId === n.uniqueId && delete e.droppables[t.descriptor.id];
		},
		getById: c,
		findById: s,
		exists: function(e) {
			return !!s(e);
		},
		getAllByType: function(t) {
			return mb(e.droppables).filter(function(e) {
				return e.descriptor.type === t;
			});
		}
	};
	function u() {
		e.draggables = {}, e.droppables = {}, t.length = 0;
	}
	return {
		draggable: o,
		droppable: l,
		subscribe: n,
		clean: u
	};
}
function Dw() {
	var e = uy(Ew, []);
	return (0, X.useEffect)(function() {
		return function() {
			requestAnimationFrame(e.clean);
		};
	}, [e]), e;
}
var Ow = X.createContext(null), kw = (function() {
	var e = document.body;
	return !e && Q(!1), e;
}), Aw = {
	position: "absolute",
	width: "1px",
	height: "1px",
	margin: "-1px",
	border: "0",
	padding: "0",
	overflow: "hidden",
	clip: "rect(0 0 0 0)",
	"clip-path": "inset(100%)"
}, jw = function(e) {
	return "rbd-announcement-" + e;
};
function Mw(e) {
	var t = uy(function() {
		return jw(e);
	}, [e]), n = (0, X.useRef)(null);
	return (0, X.useEffect)(function() {
		var e = document.createElement("div");
		return n.current = e, e.id = t, e.setAttribute("aria-live", "assertive"), e.setAttribute("aria-atomic", "true"), K(e.style, Aw), kw().appendChild(e), function() {
			setTimeout(function() {
				var t = kw();
				t.contains(e) && t.removeChild(e), e === n.current && (n.current = null);
			});
		};
	}, [t]), Z(function(e) {
		var t = n.current;
		if (t) {
			t.textContent = e;
			return;
		}
	}, []);
}
var Nw = 0, Pw = { separator: "::" };
function Fw(e, t) {
	return t === void 0 && (t = Pw), uy(function() {
		return "" + e + t.separator + Nw++;
	}, [t.separator, e]);
}
function Iw(e) {
	var t = e.contextId, n = e.uniqueId;
	return "rbd-hidden-text-" + t + "-" + n;
}
function Lw(e) {
	var t = e.contextId, n = e.text, r = Fw("hidden-text", { separator: "-" }), i = uy(function() {
		return Iw({
			contextId: t,
			uniqueId: r
		});
	}, [r, t]);
	return (0, X.useEffect)(function() {
		var e = document.createElement("div");
		return e.id = i, e.textContent = n, e.style.display = "none", kw().appendChild(e), function() {
			var t = kw();
			t.contains(e) && t.removeChild(e);
		};
	}, [i, n]), i;
}
var Rw = X.createContext(null);
function zw(e) {
	var t = (0, X.useRef)(e);
	return (0, X.useEffect)(function() {
		t.current = e;
	}), t;
}
function Bw() {
	var e = null;
	function t() {
		return !!e;
	}
	function n(t) {
		return t === e;
	}
	function r(t) {
		e && Q(!1);
		var n = { abandon: t };
		return e = n, n;
	}
	function i() {
		!e && Q(!1), e = null;
	}
	function a() {
		e && (e.abandon(), i());
	}
	return {
		isClaimed: t,
		isActive: n,
		claim: r,
		release: i,
		tryAbandon: a
	};
}
var Vw = 9, Hw = 13, Uw = 27, Ww = 32, Gw = 33, Kw = 34, qw = 35, Jw = 36, Yw = 37, Xw = 38, Zw = 39, Qw = 40, $w, eT = ($w = {}, $w[Hw] = !0, $w[Vw] = !0, $w), tT = (function(e) {
	eT[e.keyCode] && e.preventDefault();
}), nT = function() {
	var e = "visibilitychange";
	return typeof document > "u" ? e : gb([
		e,
		"ms" + e,
		"webkit" + e,
		"moz" + e,
		"o" + e
	], function(e) {
		return "on" + e in document;
	}) || e;
}(), rT = 0, iT = 5;
function aT(e, t) {
	return Math.abs(t.x - e.x) >= iT || Math.abs(t.y - e.y) >= iT;
}
var oT = { type: "IDLE" };
function sT(e) {
	var t = e.cancel, n = e.completed, r = e.getPhase, i = e.setPhase;
	return [
		{
			eventName: "mousemove",
			fn: function(e) {
				var t = e.button, n = e.clientX, a = e.clientY;
				if (t === rT) {
					var o = {
						x: n,
						y: a
					}, s = r();
					if (s.type === "DRAGGING") {
						e.preventDefault(), s.actions.move(o);
						return;
					}
					s.type !== "PENDING" && Q(!1);
					var c = s.point;
					aT(c, o) && (e.preventDefault(), i({
						type: "DRAGGING",
						actions: s.actions.fluidLift(o)
					}));
				}
			}
		},
		{
			eventName: "mouseup",
			fn: function(e) {
				var i = r();
				if (i.type !== "DRAGGING") {
					t();
					return;
				}
				e.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), n();
			}
		},
		{
			eventName: "mousedown",
			fn: function(e) {
				r().type === "DRAGGING" && e.preventDefault(), t();
			}
		},
		{
			eventName: "keydown",
			fn: function(e) {
				if (r().type === "PENDING") {
					t();
					return;
				}
				if (e.keyCode === Uw) {
					e.preventDefault(), t();
					return;
				}
				tT(e);
			}
		},
		{
			eventName: "resize",
			fn: t
		},
		{
			eventName: "scroll",
			options: {
				passive: !0,
				capture: !1
			},
			fn: function() {
				r().type === "PENDING" && t();
			}
		},
		{
			eventName: "webkitmouseforcedown",
			fn: function(e) {
				var n = r();
				if (n.type === "IDLE" && Q(!1), n.actions.shouldRespectForcePress()) {
					t();
					return;
				}
				e.preventDefault();
			}
		},
		{
			eventName: nT,
			fn: t
		}
	];
}
function cT(e) {
	var t = (0, X.useRef)(oT), n = (0, X.useRef)(Fy), r = uy(function() {
		return {
			eventName: "mousedown",
			fn: function(t) {
				if (!t.defaultPrevented && t.button === rT && !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
					var r = e.findClosestDraggableId(t);
					if (r) {
						var i = e.tryGetLock(r, o, { sourceEvent: t });
						if (i) {
							t.preventDefault();
							var a = {
								x: t.clientX,
								y: t.clientY
							};
							n.current(), l(i, a);
						}
					}
				}
			}
		};
	}, [e]), i = uy(function() {
		return {
			eventName: "webkitmouseforcewillbegin",
			fn: function(t) {
				if (!t.defaultPrevented) {
					var n = e.findClosestDraggableId(t);
					if (n) {
						var r = e.findOptionsForDraggable(n);
						r && (r.shouldRespectForcePress || e.canGetLock(n) && t.preventDefault());
					}
				}
			}
		};
	}, [e]), a = Z(function() {
		n.current = Ly(window, [i, r], {
			passive: !1,
			capture: !0
		});
	}, [i, r]), o = Z(function() {
		t.current.type !== "IDLE" && (t.current = oT, n.current(), a());
	}, [a]), s = Z(function() {
		var e = t.current;
		o(), e.type === "DRAGGING" && e.actions.cancel({ shouldBlockNextClick: !0 }), e.type === "PENDING" && e.actions.abort();
	}, [o]), c = Z(function() {
		var e = {
			capture: !0,
			passive: !1
		}, r = sT({
			cancel: s,
			completed: o,
			getPhase: function() {
				return t.current;
			},
			setPhase: function(e) {
				t.current = e;
			}
		});
		n.current = Ly(window, r, e);
	}, [s, o]), l = Z(function(e, n) {
		t.current.type !== "IDLE" && Q(!1), t.current = {
			type: "PENDING",
			point: n,
			actions: e
		}, c();
	}, [c]);
	vw(function() {
		return a(), function() {
			n.current();
		};
	}, [a]);
}
var lT;
function uT() {}
var dT = (lT = {}, lT[Kw] = !0, lT[Gw] = !0, lT[Jw] = !0, lT[qw] = !0, lT);
function fT(e, t) {
	function n() {
		t(), e.cancel();
	}
	function r() {
		t(), e.drop();
	}
	return [
		{
			eventName: "keydown",
			fn: function(t) {
				if (t.keyCode === Uw) {
					t.preventDefault(), n();
					return;
				}
				if (t.keyCode === Ww) {
					t.preventDefault(), r();
					return;
				}
				if (t.keyCode === Qw) {
					t.preventDefault(), e.moveDown();
					return;
				}
				if (t.keyCode === Xw) {
					t.preventDefault(), e.moveUp();
					return;
				}
				if (t.keyCode === Zw) {
					t.preventDefault(), e.moveRight();
					return;
				}
				if (t.keyCode === Yw) {
					t.preventDefault(), e.moveLeft();
					return;
				}
				if (dT[t.keyCode]) {
					t.preventDefault();
					return;
				}
				tT(t);
			}
		},
		{
			eventName: "mousedown",
			fn: n
		},
		{
			eventName: "mouseup",
			fn: n
		},
		{
			eventName: "click",
			fn: n
		},
		{
			eventName: "touchstart",
			fn: n
		},
		{
			eventName: "resize",
			fn: n
		},
		{
			eventName: "wheel",
			fn: n,
			options: { passive: !0 }
		},
		{
			eventName: nT,
			fn: n
		}
	];
}
function pT(e) {
	var t = (0, X.useRef)(uT), n = uy(function() {
		return {
			eventName: "keydown",
			fn: function(n) {
				if (n.defaultPrevented || n.keyCode !== Ww) return;
				var i = e.findClosestDraggableId(n);
				if (!i) return;
				var a = e.tryGetLock(i, c, { sourceEvent: n });
				if (!a) return;
				n.preventDefault();
				var o = !0, s = a.snapLift();
				t.current();
				function c() {
					!o && Q(!1), o = !1, t.current(), r();
				}
				t.current = Ly(window, fT(s, c), {
					capture: !0,
					passive: !1
				});
			}
		};
	}, [e]), r = Z(function() {
		t.current = Ly(window, [n], {
			passive: !1,
			capture: !0
		});
	}, [n]);
	vw(function() {
		return r(), function() {
			t.current();
		};
	}, [r]);
}
var mT = { type: "IDLE" }, hT = 120, gT = .15;
function _T(e) {
	var t = e.cancel, n = e.getPhase;
	return [
		{
			eventName: "orientationchange",
			fn: t
		},
		{
			eventName: "resize",
			fn: t
		},
		{
			eventName: "contextmenu",
			fn: function(e) {
				e.preventDefault();
			}
		},
		{
			eventName: "keydown",
			fn: function(e) {
				if (n().type !== "DRAGGING") {
					t();
					return;
				}
				e.keyCode === Uw && e.preventDefault(), t();
			}
		},
		{
			eventName: nT,
			fn: t
		}
	];
}
function vT(e) {
	var t = e.cancel, n = e.completed, r = e.getPhase;
	return [
		{
			eventName: "touchmove",
			options: { capture: !1 },
			fn: function(e) {
				var n = r();
				if (n.type !== "DRAGGING") {
					t();
					return;
				}
				n.hasMoved = !0;
				var i = e.touches[0], a = {
					x: i.clientX,
					y: i.clientY
				};
				e.preventDefault(), n.actions.move(a);
			}
		},
		{
			eventName: "touchend",
			fn: function(e) {
				var i = r();
				if (i.type !== "DRAGGING") {
					t();
					return;
				}
				e.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), n();
			}
		},
		{
			eventName: "touchcancel",
			fn: function(e) {
				if (r().type !== "DRAGGING") {
					t();
					return;
				}
				e.preventDefault(), t();
			}
		},
		{
			eventName: "touchforcechange",
			fn: function(e) {
				var n = r();
				n.type === "IDLE" && Q(!1);
				var i = e.touches[0];
				if (i && i.force >= gT) {
					var a = n.actions.shouldRespectForcePress();
					if (n.type === "PENDING") {
						a && t();
						return;
					}
					if (a) {
						if (n.hasMoved) {
							e.preventDefault();
							return;
						}
						t();
						return;
					}
					e.preventDefault();
				}
			}
		},
		{
			eventName: nT,
			fn: t
		}
	];
}
function yT(e) {
	var t = (0, X.useRef)(mT), n = (0, X.useRef)(Fy), r = Z(function() {
		return t.current;
	}, []), i = Z(function(e) {
		t.current = e;
	}, []), a = uy(function() {
		return {
			eventName: "touchstart",
			fn: function(t) {
				if (!t.defaultPrevented) {
					var r = e.findClosestDraggableId(t);
					if (r) {
						var i = e.tryGetLock(r, s, { sourceEvent: t });
						if (i) {
							var a = t.touches[0], o = {
								x: a.clientX,
								y: a.clientY
							};
							n.current(), d(i, o);
						}
					}
				}
			}
		};
	}, [e]), o = Z(function() {
		n.current = Ly(window, [a], {
			capture: !0,
			passive: !1
		});
	}, [a]), s = Z(function() {
		var e = t.current;
		e.type !== "IDLE" && (e.type === "PENDING" && clearTimeout(e.longPressTimerId), i(mT), n.current(), o());
	}, [o, i]), c = Z(function() {
		var e = t.current;
		s(), e.type === "DRAGGING" && e.actions.cancel({ shouldBlockNextClick: !0 }), e.type === "PENDING" && e.actions.abort();
	}, [s]), l = Z(function() {
		var e = {
			capture: !0,
			passive: !1
		}, t = {
			cancel: c,
			completed: s,
			getPhase: r
		}, i = Ly(window, vT(t), e), a = Ly(window, _T(t), e);
		n.current = function() {
			i(), a();
		};
	}, [
		c,
		r,
		s
	]), u = Z(function() {
		var e = r();
		e.type !== "PENDING" && Q(!1), i({
			type: "DRAGGING",
			actions: e.actions.fluidLift(e.point),
			hasMoved: !1
		});
	}, [r, i]), d = Z(function(e, t) {
		r().type !== "IDLE" && Q(!1), i({
			type: "PENDING",
			point: t,
			actions: e,
			longPressTimerId: setTimeout(u, hT)
		}), l();
	}, [
		l,
		r,
		i,
		u
	]);
	vw(function() {
		return o(), function() {
			n.current();
			var e = r();
			e.type === "PENDING" && (clearTimeout(e.longPressTimerId), i(mT));
		};
	}, [
		r,
		o,
		i
	]), vw(function() {
		return Ly(window, [{
			eventName: "touchmove",
			fn: function() {},
			options: {
				capture: !1,
				passive: !1
			}
		}]);
	}, []);
}
var bT = {
	input: !0,
	button: !0,
	textarea: !0,
	select: !0,
	option: !0,
	optgroup: !0,
	video: !0,
	audio: !0
};
function xT(e, t) {
	if (t == null) return !1;
	if (bT[t.tagName.toLowerCase()]) return !0;
	var n = t.getAttribute("contenteditable");
	return n === "true" || n === "" ? !0 : t === e ? !1 : xT(e, t.parentElement);
}
function ST(e, t) {
	var n = t.target;
	return Cw(n) ? xT(e, n) : !1;
}
var CT = (function(e) {
	return my(e.getBoundingClientRect()).center;
});
function wT(e) {
	return e instanceof Sw(e).Element;
}
var TT = function() {
	var e = "matches";
	return typeof document > "u" ? e : gb([
		e,
		"msMatchesSelector",
		"webkitMatchesSelector"
	], function(e) {
		return e in Element.prototype;
	}) || e;
}();
function ET(e, t) {
	return e == null ? null : e[TT](t) ? e : ET(e.parentElement, t);
}
function DT(e, t) {
	return e.closest ? e.closest(t) : ET(e, t);
}
function OT(e) {
	return "[" + uw.contextId + "=\"" + e + "\"]";
}
function kT(e, t) {
	var n = t.target;
	if (!wT(n)) return null;
	var r = DT(n, OT(e));
	return !r || !Cw(r) ? null : r;
}
function AT(e, t) {
	var n = kT(e, t);
	return n ? n.getAttribute(uw.draggableId) : null;
}
function jT(e, t) {
	var n = "[" + dw.contextId + "=\"" + e + "\"]", r = gb(_b(document.querySelectorAll(n)), function(e) {
		return e.getAttribute(dw.id) === t;
	});
	return !r || !Cw(r) ? null : r;
}
function MT(e) {
	e.preventDefault();
}
function NT(e) {
	var t = e.expected, n = e.phase, r = e.isLockActive;
	return e.shouldWarn, !(!r() || t !== n);
}
function PT(e) {
	var t = e.lockAPI, n = e.store, r = e.registry, i = e.draggableId;
	if (t.isClaimed()) return !1;
	var a = r.draggable.findById(i);
	return !(!a || !a.options.isEnabled || !MC(n.getState(), i));
}
function FT(e) {
	var t = e.lockAPI, n = e.contextId, r = e.store, i = e.registry, a = e.draggableId, o = e.forceSensorStop, s = e.sourceEvent;
	if (!PT({
		lockAPI: t,
		store: r,
		registry: i,
		draggableId: a
	})) return null;
	var c = i.draggable.getById(a), l = jT(n, c.descriptor.id);
	if (!l || s && !c.options.canDragInteractiveElements && ST(l, s)) return null;
	var u = t.claim(o || Fy), d = "PRE_DRAG";
	function f() {
		return c.options.shouldRespectForcePress;
	}
	function p() {
		return t.isActive(u);
	}
	function m(e, t) {
		NT({
			expected: e,
			phase: d,
			isLockActive: p,
			shouldWarn: !0
		}) && r.dispatch(t());
	}
	var h = m.bind(null, "DRAGGING");
	function g(e) {
		function n() {
			t.release(), d = "COMPLETED";
		}
		d !== "PRE_DRAG" && (n(), d !== "PRE_DRAG" && Q(!1)), r.dispatch(hS(e.liftActionArgs)), d = "DRAGGING";
		function i(t, i) {
			if (i === void 0 && (i = { shouldBlockNextClick: !1 }), e.cleanup(), i.shouldBlockNextClick) {
				var a = Ly(window, [{
					eventName: "click",
					fn: MT,
					options: {
						once: !0,
						passive: !1,
						capture: !0
					}
				}]);
				setTimeout(a);
			}
			n(), r.dispatch(MS({ reason: t }));
		}
		return K({
			isActive: function() {
				return NT({
					expected: "DRAGGING",
					phase: d,
					isLockActive: p,
					shouldWarn: !1
				});
			},
			shouldRespectForcePress: f,
			drop: function(e) {
				return i("DROP", e);
			},
			cancel: function(e) {
				return i("CANCEL", e);
			}
		}, e.actions);
	}
	function _(e) {
		var t = Ey(function(e) {
			h(function() {
				return SS({ client: e });
			});
		});
		return K({}, g({
			liftActionArgs: {
				id: a,
				clientSelection: e,
				movementMode: "FLUID"
			},
			cleanup: function() {
				return t.cancel();
			},
			actions: { move: t }
		}), { move: t });
	}
	function v() {
		return g({
			liftActionArgs: {
				id: a,
				clientSelection: CT(l),
				movementMode: "SNAP"
			},
			cleanup: Fy,
			actions: {
				moveUp: function() {
					return h(TS);
				},
				moveRight: function() {
					return h(DS);
				},
				moveDown: function() {
					return h(ES);
				},
				moveLeft: function() {
					return h(OS);
				}
			}
		});
	}
	function y() {
		NT({
			expected: "PRE_DRAG",
			phase: d,
			isLockActive: p,
			shouldWarn: !0
		}) && t.release();
	}
	return {
		isActive: function() {
			return NT({
				expected: "PRE_DRAG",
				phase: d,
				isLockActive: p,
				shouldWarn: !1
			});
		},
		shouldRespectForcePress: f,
		fluidLift: _,
		snapLift: v,
		abort: y
	};
}
var IT = [
	cT,
	pT,
	yT
];
function LT(e) {
	var t = e.contextId, n = e.store, r = e.registry, i = e.customSensors, a = e.enableDefaultSensors, o = [].concat(a ? IT : [], i || []), s = (0, X.useState)(function() {
		return Bw();
	})[0], c = Z(function(e, t) {
		e.isDragging && !t.isDragging && s.tryAbandon();
	}, [s]);
	vw(function() {
		var e = n.getState();
		return n.subscribe(function() {
			var t = n.getState();
			c(e, t), e = t;
		});
	}, [
		s,
		n,
		c
	]), vw(function() {
		return s.tryAbandon;
	}, [s.tryAbandon]);
	for (var l = Z(function(e) {
		return PT({
			lockAPI: s,
			registry: r,
			store: n,
			draggableId: e
		});
	}, [
		s,
		r,
		n
	]), u = Z(function(e, i, a) {
		return FT({
			lockAPI: s,
			registry: r,
			contextId: t,
			store: n,
			draggableId: e,
			forceSensorStop: i,
			sourceEvent: a && a.sourceEvent ? a.sourceEvent : null
		});
	}, [
		t,
		s,
		r,
		n
	]), d = Z(function(e) {
		return AT(t, e);
	}, [t]), f = Z(function(e) {
		var t = r.draggable.findById(e);
		return t ? t.options : null;
	}, [r.draggable]), p = Z(function() {
		s.isClaimed() && (s.tryAbandon(), n.getState().phase !== "IDLE" && n.dispatch(kS()));
	}, [s, n]), m = Z(s.isClaimed, [s]), h = uy(function() {
		return {
			canGetLock: l,
			tryGetLock: u,
			findClosestDraggableId: d,
			findOptionsForDraggable: f,
			tryReleaseLock: p,
			isLockClaimed: m
		};
	}, [
		l,
		u,
		d,
		f,
		p,
		m
	]), g = 0; g < o.length; g++) o[g](h);
}
var RT = function(e) {
	return {
		onBeforeCapture: e.onBeforeCapture,
		onBeforeDragStart: e.onBeforeDragStart,
		onDragStart: e.onDragStart,
		onDragEnd: e.onDragEnd,
		onDragUpdate: e.onDragUpdate
	};
};
function zT(e) {
	return !e.current && Q(!1), e.current;
}
function BT(e) {
	var t = e.contextId, n = e.setCallbacks, r = e.sensors, i = e.nonce, a = e.dragHandleUsageInstructions, o = (0, X.useRef)(null), s = zw(e), c = Z(function() {
		return RT(s.current);
	}, [s]), l = Mw(t), u = Lw({
		contextId: t,
		text: a
	}), d = xw(t, i), f = Z(function(e) {
		zT(o).dispatch(e);
	}, []), p = uy(function() {
		return x({
			publishWhileDragging: _S,
			updateDroppableScroll: yS,
			updateDroppableIsEnabled: bS,
			updateDroppableIsCombineEnabled: xS,
			collectionStarting: vS
		}, f);
	}, [f]), m = Dw(), h = uy(function() {
		return jC(m, p);
	}, [m, p]), g = uy(function() {
		return cw(K({
			scrollWindow: NC,
			scrollDroppable: h.scrollDroppable
		}, x({ move: SS }, f)));
	}, [h.scrollDroppable, f]), _ = Tw(t), v = uy(function() {
		return SC({
			announce: l,
			autoScroller: g,
			dimensionMarshal: h,
			focusMarshal: _,
			getResponders: c,
			styleMarshal: d
		});
	}, [
		l,
		g,
		h,
		_,
		c,
		d
	]);
	o.current = v;
	var y = Z(function() {
		var e = zT(o);
		e.getState().phase !== "IDLE" && e.dispatch(kS());
	}, []), b = Z(function() {
		var e = zT(o).getState();
		return e.isDragging || e.phase === "DROP_ANIMATING";
	}, []);
	n(uy(function() {
		return {
			isDragging: b,
			tryAbort: y
		};
	}, [b, y]));
	var S = Z(function(e) {
		return MC(zT(o).getState(), e);
	}, []), C = Z(function() {
		return Fx(zT(o).getState());
	}, []), w = uy(function() {
		return {
			marshal: h,
			focus: _,
			contextId: t,
			canLift: S,
			isMovementAllowed: C,
			dragHandleUsageInstructionsId: u,
			registry: m
		};
	}, [
		t,
		h,
		u,
		_,
		S,
		C,
		m
	]);
	return LT({
		contextId: t,
		store: v,
		registry: m,
		customSensors: r,
		enableDefaultSensors: e.enableDefaultSensors !== !1
	}), (0, X.useEffect)(function() {
		return y;
	}, [y]), X.createElement(Rw.Provider, { value: w }, X.createElement(We, {
		context: Ow,
		store: v
	}, e.children));
}
var VT = 0;
function HT() {
	return uy(function() {
		return "" + VT++;
	}, []);
}
function UT(e) {
	var t = HT(), n = e.dragHandleUsageInstructions || Yy.dragHandleUsageInstructions;
	return X.createElement(Vy, null, function(r) {
		return X.createElement(BT, {
			nonce: e.nonce,
			contextId: t,
			setCallbacks: r,
			dragHandleUsageInstructions: n,
			enableDefaultSensors: e.enableDefaultSensors,
			sensors: e.sensors,
			onBeforeCapture: e.onBeforeCapture,
			onBeforeDragStart: e.onBeforeDragStart,
			onDragStart: e.onDragStart,
			onDragUpdate: e.onDragUpdate,
			onDragEnd: e.onDragEnd
		}, e.children);
	});
}
var WT = function(e) {
	return function(t) {
		return e === t;
	};
}, GT = WT("scroll"), KT = WT("auto"), qT = function(e, t) {
	return t(e.overflowX) || t(e.overflowY);
}, JT = function(e) {
	var t = window.getComputedStyle(e), n = {
		overflowX: t.overflowX,
		overflowY: t.overflowY
	};
	return qT(n, GT) || qT(n, KT);
}, YT = function() {
	return !1;
}, XT = function e(t) {
	return t == null ? null : t === document.body ? YT() ? t : null : t === document.documentElement ? null : JT(t) ? t : e(t.parentElement);
}, ZT = (function(e) {
	return {
		x: e.scrollLeft,
		y: e.scrollTop
	};
}), QT = function e(t) {
	return t ? window.getComputedStyle(t).position === "fixed" ? !0 : e(t.parentElement) : !1;
}, $T = (function(e) {
	return {
		closestScrollable: XT(e),
		isFixedOnPage: QT(e)
	};
}), eE = (function(e) {
	var t = e.descriptor, n = e.isEnabled, r = e.isCombineEnabled, i = e.isFixedOnPage, a = e.direction, o = e.client, s = e.page, c = e.closest, l = function() {
		if (!c) return null;
		var e = c.scrollSize, t = c.client, n = TC({
			scrollHeight: e.scrollHeight,
			scrollWidth: e.scrollWidth,
			height: t.paddingBox.height,
			width: t.paddingBox.width
		});
		return {
			pageMarginBox: c.page.marginBox,
			frameClient: t,
			scrollSize: e,
			shouldClipSubject: c.shouldClipSubject,
			scroll: {
				initial: c.scroll,
				current: c.scroll,
				max: n,
				diff: {
					value: Xy,
					displacement: Xy
				}
			}
		};
	}(), u = a === "vertical" ? Pb : Fb;
	return {
		descriptor: t,
		isCombineEnabled: r,
		isFixedOnPage: i,
		axis: u,
		isEnabled: n,
		client: o,
		page: s,
		frame: l,
		subject: fb({
			page: s,
			withPlaceholder: null,
			axis: u,
			frame: l
		})
	};
}), tE = function(e, t) {
	var n = Ty(e);
	if (!t || e !== t) return n;
	var r = n.paddingBox.top - t.scrollTop, i = n.paddingBox.left - t.scrollLeft, a = r + t.scrollHeight;
	return yy({
		borderBox: hy({
			top: r,
			right: i + t.scrollWidth,
			bottom: a,
			left: i
		}, n.border),
		margin: n.margin,
		border: n.border,
		padding: n.padding
	});
}, nE = (function(e) {
	var t = e.ref, n = e.descriptor, r = e.env, i = e.windowScroll, a = e.direction, o = e.isDropDisabled, s = e.isCombineEnabled, c = e.shouldClipSubject, l = r.closestScrollable, u = tE(t, l), d = Cy(u, i), f = function() {
		if (!l) return null;
		var e = Ty(l), t = {
			scrollHeight: l.scrollHeight,
			scrollWidth: l.scrollWidth
		};
		return {
			client: e,
			page: Cy(e, i),
			scroll: ZT(l),
			scrollSize: t,
			shouldClipSubject: c
		};
	}();
	return eE({
		descriptor: n,
		isEnabled: !o,
		isCombineEnabled: s,
		isFixedOnPage: r.isFixedOnPage,
		direction: a,
		client: u,
		page: d,
		closest: f
	});
}), rE = { passive: !1 }, iE = { passive: !0 }, aE = (function(e) {
	return e.shouldPublishImmediately ? rE : iE;
});
function oE(e) {
	var t = (0, X.useContext)(e);
	return !t && Q(!1), t;
}
var sE = function(e) {
	return e && e.env.closestScrollable || null;
};
function cE(e) {
	var t = (0, X.useRef)(null), n = oE(Rw), r = Fw("droppable"), i = n.registry, a = n.marshal, o = zw(e), s = uy(function() {
		return {
			id: e.droppableId,
			type: e.type,
			mode: e.mode
		};
	}, [
		e.droppableId,
		e.mode,
		e.type
	]), c = (0, X.useRef)(s), l = uy(function() {
		return wr(function(e, n) {
			!t.current && Q(!1);
			var r = {
				x: e,
				y: n
			};
			a.updateDroppableScroll(s.id, r);
		});
	}, [s.id, a]), u = Z(function() {
		var e = t.current;
		return !e || !e.env.closestScrollable ? Xy : ZT(e.env.closestScrollable);
	}, []), d = Z(function() {
		var e = u();
		l(e.x, e.y);
	}, [u, l]), f = uy(function() {
		return Ey(d);
	}, [d]), p = Z(function() {
		var e = t.current, n = sE(e);
		if (!(e && n) && Q(!1), e.scrollOptions.shouldPublishImmediately) {
			d();
			return;
		}
		f();
	}, [f, d]), m = Z(function(e, r) {
		t.current && Q(!1);
		var i = o.current, a = i.getDroppableRef();
		!a && Q(!1);
		var c = $T(a), l = {
			ref: a,
			descriptor: s,
			env: c,
			scrollOptions: r
		};
		t.current = l;
		var u = nE({
			ref: a,
			descriptor: s,
			env: c,
			windowScroll: e,
			direction: i.direction,
			isDropDisabled: i.isDropDisabled,
			isCombineEnabled: i.isCombineEnabled,
			shouldClipSubject: !i.ignoreContainerClipping
		}), d = c.closestScrollable;
		return d && (d.setAttribute(pw.contextId, n.contextId), d.addEventListener("scroll", p, aE(l.scrollOptions))), u;
	}, [
		n.contextId,
		s,
		p,
		o
	]), h = Z(function() {
		var e = t.current, n = sE(e);
		return !(e && n) && Q(!1), ZT(n);
	}, []), g = Z(function() {
		var e = t.current;
		!e && Q(!1);
		var n = sE(e);
		t.current = null, n && (f.cancel(), n.removeAttribute(pw.contextId), n.removeEventListener("scroll", p, aE(e.scrollOptions)));
	}, [p, f]), _ = Z(function(e) {
		var n = t.current;
		!n && Q(!1);
		var r = sE(n);
		!r && Q(!1), r.scrollTop += e.y, r.scrollLeft += e.x;
	}, []), v = uy(function() {
		return {
			getDimensionAndWatchScroll: m,
			getScrollWhileDragging: h,
			dragStopped: g,
			scroll: _
		};
	}, [
		g,
		m,
		h,
		_
	]), y = uy(function() {
		return {
			uniqueId: r,
			descriptor: s,
			callbacks: v
		};
	}, [
		v,
		s,
		r
	]);
	vw(function() {
		return c.current = y.descriptor, i.droppable.register(y), function() {
			t.current && g(), i.droppable.unregister(y);
		};
	}, [
		v,
		s,
		g,
		y,
		a,
		i.droppable
	]), vw(function() {
		t.current && a.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
	}, [e.isDropDisabled, a]), vw(function() {
		t.current && a.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
	}, [e.isCombineEnabled, a]);
}
function lE() {}
var uE = {
	width: 0,
	height: 0,
	margin: cb
}, dE = function(e) {
	var t = e.isAnimatingOpenOnMount, n = e.placeholder, r = e.animate;
	return t || r === "close" ? uE : {
		height: n.client.borderBox.height,
		width: n.client.borderBox.width,
		margin: n.client.margin
	};
}, fE = function(e) {
	var t = e.isAnimatingOpenOnMount, n = e.placeholder, r = e.animate, i = dE({
		isAnimatingOpenOnMount: t,
		placeholder: n,
		animate: r
	});
	return {
		display: n.display,
		boxSizing: "border-box",
		width: i.width,
		height: i.height,
		marginTop: i.margin.top,
		marginRight: i.margin.right,
		marginBottom: i.margin.bottom,
		marginLeft: i.margin.left,
		flexShrink: "0",
		flexGrow: "0",
		pointerEvents: "none",
		transition: r === "none" ? null : VS.placeholder
	};
};
function pE(e) {
	var t = (0, X.useRef)(null), n = Z(function() {
		t.current &&= (clearTimeout(t.current), null);
	}, []), r = e.animate, i = e.onTransitionEnd, a = e.onClose, o = e.contextId, s = (0, X.useState)(e.animate === "open"), c = s[0], l = s[1];
	(0, X.useEffect)(function() {
		return c ? r === "open" ? t.current ? lE : (t.current = setTimeout(function() {
			t.current = null, l(!1);
		}), n) : (n(), l(!1), lE) : lE;
	}, [
		r,
		c,
		n
	]);
	var u = Z(function(e) {
		e.propertyName === "height" && (i(), r === "close" && a());
	}, [
		r,
		a,
		i
	]), d = fE({
		isAnimatingOpenOnMount: c,
		animate: e.animate,
		placeholder: e.placeholder
	});
	return X.createElement(e.placeholder.tagName, {
		style: d,
		"data-rbd-placeholder-context-id": o,
		onTransitionEnd: u,
		ref: e.innerRef
	});
}
var mE = X.memo(pE), hE = X.createContext(null), gE = function(e) {
	ft(t, e);
	function t() {
		var t, n = [...arguments];
		return t = e.call.apply(e, [this].concat(n)) || this, t.state = {
			isVisible: !!t.props.on,
			data: t.props.on,
			animate: t.props.shouldAnimate && t.props.on ? "open" : "none"
		}, t.onClose = function() {
			t.state.animate === "close" && t.setState({ isVisible: !1 });
		}, t;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.shouldAnimate ? e.on ? {
			isVisible: !0,
			data: e.on,
			animate: "open"
		} : t.isVisible ? {
			isVisible: !0,
			data: t.data,
			animate: "close"
		} : {
			isVisible: !1,
			animate: "close",
			data: null
		} : {
			isVisible: !!e.on,
			data: e.on,
			animate: "none"
		};
	};
	var n = t.prototype;
	return n.render = function() {
		if (!this.state.isVisible) return null;
		var e = {
			onClose: this.onClose,
			data: this.state.data,
			animate: this.state.animate
		};
		return this.props.children(e);
	}, t;
}(X.PureComponent), _E = {
	dragging: 5e3,
	dropAnimating: 4500
}, vE = function(e, t) {
	return t ? VS.drop(t.duration) : e ? VS.snap : VS.fluid;
}, yE = function(e, t) {
	return e ? t ? RS.opacity.drop : RS.opacity.combining : null;
}, bE = function(e) {
	return e.forceShouldAnimate == null ? e.mode === "SNAP" : e.forceShouldAnimate;
};
function xE(e) {
	var t = e.dimension.client, n = e.offset, r = e.combineWith, i = e.dropping, a = !!r, o = bE(e), s = !!i, c = s ? US.drop(n, a) : US.moveTo(n);
	return {
		position: "fixed",
		top: t.marginBox.top,
		left: t.marginBox.left,
		boxSizing: "border-box",
		width: t.borderBox.width,
		height: t.borderBox.height,
		transition: vE(o, i),
		transform: c,
		opacity: yE(a, s),
		zIndex: s ? _E.dropAnimating : _E.dragging,
		pointerEvents: "none"
	};
}
function SE(e) {
	return {
		transform: US.moveTo(e.offset),
		transition: e.shouldAnimateDisplacement ? null : "none"
	};
}
function CE(e) {
	return e.type === "DRAGGING" ? xE(e) : SE(e);
}
function wE(e, t, n) {
	n === void 0 && (n = Xy);
	var r = window.getComputedStyle(t), i = wy(t.getBoundingClientRect(), r), a = Cy(i, n);
	return {
		descriptor: e,
		placeholder: {
			client: i,
			tagName: t.tagName.toLowerCase(),
			display: r.display
		},
		displaceBy: {
			x: i.marginBox.width,
			y: i.marginBox.height
		},
		client: i,
		page: a
	};
}
function TE(e) {
	var t = Fw("draggable"), n = e.descriptor, r = e.registry, i = e.getDraggableRef, a = e.canDragInteractiveElements, o = e.shouldRespectForcePress, s = e.isEnabled, c = uy(function() {
		return {
			canDragInteractiveElements: a,
			shouldRespectForcePress: o,
			isEnabled: s
		};
	}, [
		a,
		s,
		o
	]), l = Z(function(e) {
		var t = i();
		return !t && Q(!1), wE(n, t, e);
	}, [n, i]), u = uy(function() {
		return {
			uniqueId: t,
			descriptor: n,
			options: c,
			getDimension: l
		};
	}, [
		n,
		l,
		c,
		t
	]), d = (0, X.useRef)(u), f = (0, X.useRef)(!0);
	vw(function() {
		return r.draggable.register(d.current), function() {
			return r.draggable.unregister(d.current);
		};
	}, [r.draggable]), vw(function() {
		if (f.current) {
			f.current = !1;
			return;
		}
		var e = d.current;
		d.current = u, r.draggable.update(u, e);
	}, [u, r.draggable]);
}
function EE(e) {
	e.preventDefault();
}
function DE(e) {
	var t = (0, X.useRef)(null), n = Z(function(e) {
		t.current = e;
	}, []), r = Z(function() {
		return t.current;
	}, []), i = oE(Rw), a = i.contextId, o = i.dragHandleUsageInstructionsId, s = i.registry, c = oE(hE), l = c.type, u = c.droppableId, d = uy(function() {
		return {
			id: e.draggableId,
			index: e.index,
			type: l,
			droppableId: u
		};
	}, [
		e.draggableId,
		e.index,
		l,
		u
	]), f = e.children, p = e.draggableId, m = e.isEnabled, h = e.shouldRespectForcePress, g = e.canDragInteractiveElements, _ = e.isClone, v = e.mapped, y = e.dropAnimationFinished;
	_ || TE(uy(function() {
		return {
			descriptor: d,
			registry: s,
			getDraggableRef: r,
			canDragInteractiveElements: g,
			shouldRespectForcePress: h,
			isEnabled: m
		};
	}, [
		d,
		s,
		r,
		g,
		h,
		m
	]));
	var b = uy(function() {
		return m ? {
			tabIndex: 0,
			role: "button",
			"aria-describedby": o,
			"data-rbd-drag-handle-draggable-id": p,
			"data-rbd-drag-handle-context-id": a,
			draggable: !1,
			onDragStart: EE
		} : null;
	}, [
		a,
		o,
		p,
		m
	]), x = Z(function(e) {
		v.type === "DRAGGING" && v.dropping && e.propertyName === "transform" && y();
	}, [y, v]), S = uy(function() {
		return {
			innerRef: n,
			draggableProps: {
				"data-rbd-draggable-context-id": a,
				"data-rbd-draggable-id": p,
				style: CE(v),
				onTransitionEnd: v.type === "DRAGGING" && v.dropping ? x : null
			},
			dragHandleProps: b
		};
	}, [
		a,
		b,
		p,
		v,
		x,
		n
	]), C = uy(function() {
		return {
			draggableId: d.id,
			type: d.type,
			source: {
				index: d.index,
				droppableId: d.droppableId
			}
		};
	}, [
		d.droppableId,
		d.id,
		d.index,
		d.type
	]);
	return f(S, v.snapshot, C);
}
var OE = (function(e, t) {
	return e === t;
}), kE = (function(e) {
	var t = e.combine, n = e.destination;
	return n ? n.droppableId : t ? t.droppableId : null;
}), AE = function(e) {
	return e.combine ? e.combine.draggableId : null;
}, jE = function(e) {
	return e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
};
function ME() {
	var e = wr(function(e, t) {
		return {
			x: e,
			y: t
		};
	}), t = wr(function(e, t, n, r, i) {
		return {
			isDragging: !0,
			isClone: t,
			isDropAnimating: !!i,
			dropAnimation: i,
			mode: e,
			draggingOver: n,
			combineWith: r,
			combineTargetFor: null
		};
	}), n = wr(function(e, n, r, i, a, o, s) {
		return { mapped: {
			type: "DRAGGING",
			dropping: null,
			draggingOver: a,
			combineWith: o,
			mode: n,
			offset: e,
			dimension: r,
			forceShouldAnimate: s,
			snapshot: t(n, i, a, o, null)
		} };
	});
	return function(r, i) {
		if (r.isDragging) {
			if (r.critical.draggable.id !== i.draggableId) return null;
			var a = r.current.client.offset, o = r.dimensions.draggables[i.draggableId], s = Mx(r.impact), c = jE(r.impact), l = r.forceShouldAnimate;
			return n(e(a.x, a.y), r.movementMode, o, i.isClone, s, c, l);
		}
		if (r.phase === "DROP_ANIMATING") {
			var u = r.completed;
			if (u.result.draggableId !== i.draggableId) return null;
			var d = i.isClone, f = r.dimensions.draggables[i.draggableId], p = u.result, m = p.mode, h = kE(p), g = AE(p), _ = {
				duration: r.dropDuration,
				curve: LS.drop,
				moveTo: r.newHomeClientOffset,
				opacity: g ? RS.opacity.drop : null,
				scale: g ? RS.scale.drop : null
			};
			return { mapped: {
				type: "DRAGGING",
				offset: r.newHomeClientOffset,
				dimension: f,
				dropping: _,
				draggingOver: h,
				combineWith: g,
				mode: m,
				forceShouldAnimate: null,
				snapshot: t(m, d, h, g, _)
			} };
		}
		return null;
	};
}
function NE(e) {
	return {
		isDragging: !1,
		isDropAnimating: !1,
		isClone: !1,
		dropAnimation: null,
		mode: null,
		draggingOver: null,
		combineTargetFor: e,
		combineWith: null
	};
}
var PE = { mapped: {
	type: "SECONDARY",
	offset: Xy,
	combineTargetFor: null,
	shouldAnimateDisplacement: !0,
	snapshot: NE(null)
} };
function FE() {
	var e = wr(function(e, t) {
		return {
			x: e,
			y: t
		};
	}), t = wr(NE), n = wr(function(e, n, r) {
		return n === void 0 && (n = null), { mapped: {
			type: "SECONDARY",
			offset: e,
			combineTargetFor: n,
			shouldAnimateDisplacement: r,
			snapshot: t(n)
		} };
	}), r = function(e) {
		return e ? n(Xy, e, !0) : null;
	}, i = function(t, i, a, o) {
		var s = a.displaced.visible[t], c = !!(o.inVirtualList && o.effected[t]), l = wb(a), u = l && l.draggableId === t ? i : null;
		if (!s) {
			if (!c) return r(u);
			if (a.displaced.invisible[t]) return null;
			var d = eb(o.displacedBy.point);
			return n(e(d.x, d.y), u, !0);
		}
		if (c) return r(u);
		var f = a.displacedBy.point;
		return n(e(f.x, f.y), u, s.shouldAnimate);
	};
	return function(e, t) {
		if (e.isDragging) return e.critical.draggable.id === t.draggableId ? null : i(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical);
		if (e.phase === "DROP_ANIMATING") {
			var n = e.completed;
			return n.result.draggableId === t.draggableId ? null : i(t.draggableId, n.result.draggableId, n.impact, n.afterCritical);
		}
		return null;
	};
}
var IE = Et(function() {
	var e = ME(), t = FE();
	return function(n, r) {
		return e(n, r) || t(n, r) || PE;
	};
}, { dropAnimationFinished: PS }, null, {
	context: Ow,
	pure: !0,
	areStatePropsEqual: OE
})(DE);
function LE(e) {
	return oE(hE).isUsingCloneFor === e.draggableId && !e.isClone ? null : X.createElement(IE, e);
}
function RE(e) {
	var t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
	return X.createElement(LE, K({}, e, {
		isClone: !1,
		isEnabled: t,
		canDragInteractiveElements: n,
		shouldRespectForcePress: r
	}));
}
function zE(e) {
	var t = (0, X.useContext)(Rw);
	!t && Q(!1);
	var n = t.contextId, r = t.isMovementAllowed, i = (0, X.useRef)(null), a = (0, X.useRef)(null), o = e.children, s = e.droppableId, c = e.type, l = e.mode, u = e.direction, d = e.ignoreContainerClipping, f = e.isDropDisabled, p = e.isCombineEnabled, m = e.snapshot, h = e.useClone, g = e.updateViewportMaxScroll, _ = e.getContainerForClone, v = Z(function() {
		return i.current;
	}, []), y = Z(function(e) {
		i.current = e;
	}, []);
	Z(function() {
		return a.current;
	}, []);
	var b = Z(function(e) {
		a.current = e;
	}, []), x = Z(function() {
		r() && g({ maxScroll: DC() });
	}, [r, g]);
	cE({
		droppableId: s,
		type: c,
		mode: l,
		direction: u,
		isDropDisabled: f,
		isCombineEnabled: p,
		ignoreContainerClipping: d,
		getDroppableRef: v
	});
	var S = X.createElement(gE, {
		on: e.placeholder,
		shouldAnimate: e.shouldAnimatePlaceholder
	}, function(e) {
		var t = e.onClose, r = e.data, i = e.animate;
		return X.createElement(mE, {
			placeholder: r,
			onClose: t,
			innerRef: b,
			animate: i,
			contextId: n,
			onTransitionEnd: x
		});
	}), C = uy(function() {
		return {
			innerRef: y,
			placeholder: S,
			droppableProps: {
				"data-rbd-droppable-id": s,
				"data-rbd-droppable-context-id": n
			}
		};
	}, [
		n,
		s,
		S,
		y
	]), w = h ? h.dragging.draggableId : null, T = uy(function() {
		return {
			droppableId: s,
			type: c,
			isUsingCloneFor: w
		};
	}, [
		s,
		w,
		c
	]);
	function E() {
		if (!h) return null;
		var e = h.dragging, t = h.render, n = X.createElement(LE, {
			draggableId: e.draggableId,
			index: e.source.index,
			isClone: !0,
			isEnabled: !0,
			shouldRespectForcePress: !1,
			canDragInteractiveElements: !0
		}, function(n, r) {
			return t(n, r, e);
		});
		return lr.createPortal(n, _());
	}
	return X.createElement(hE.Provider, { value: T }, o(C, m), E());
}
var BE = function(e, t) {
	return e === t.droppable.type;
}, VE = function(e, t) {
	return t.draggables[e.draggable.id];
}, HE = function() {
	var e = {
		placeholder: null,
		shouldAnimatePlaceholder: !0,
		snapshot: {
			isDraggingOver: !1,
			draggingOverWith: null,
			draggingFromThisWith: null,
			isUsingPlaceholder: !1
		},
		useClone: null
	}, t = K({}, e, { shouldAnimatePlaceholder: !1 }), n = wr(function(e) {
		return {
			draggableId: e.id,
			type: e.type,
			source: {
				index: e.index,
				droppableId: e.droppableId
			}
		};
	}), r = wr(function(r, i, a, o, s, c) {
		var l = s.descriptor.id;
		if (s.descriptor.droppableId === r) {
			var u = c ? {
				render: c,
				dragging: n(s.descriptor)
			} : null, d = {
				isDraggingOver: a,
				draggingOverWith: a ? l : null,
				draggingFromThisWith: l,
				isUsingPlaceholder: !0
			};
			return {
				placeholder: s.placeholder,
				shouldAnimatePlaceholder: !1,
				snapshot: d,
				useClone: u
			};
		}
		if (!i) return t;
		if (!o) return e;
		var f = {
			isDraggingOver: a,
			draggingOverWith: l,
			draggingFromThisWith: null,
			isUsingPlaceholder: !0
		};
		return {
			placeholder: s.placeholder,
			shouldAnimatePlaceholder: !0,
			snapshot: f,
			useClone: null
		};
	});
	return function(n, i) {
		var a = i.droppableId, o = i.type, s = !i.isDropDisabled, c = i.renderClone;
		if (n.isDragging) {
			var l = n.critical;
			if (!BE(o, l)) return t;
			var u = VE(l, n.dimensions), d = Mx(n.impact) === a;
			return r(a, s, d, d, u, c);
		}
		if (n.phase === "DROP_ANIMATING") {
			var f = n.completed;
			if (!BE(o, f.critical)) return t;
			var p = VE(f.critical, n.dimensions);
			return r(a, s, kE(f.result) === a, Mx(f.impact) === a, p, c);
		}
		if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
			var m = n.completed;
			if (!BE(o, m.critical)) return t;
			var h = Mx(m.impact) === a, g = !!(m.impact.at && m.impact.at.type === "COMBINE"), _ = m.critical.droppable.id === a;
			return h ? g ? e : t : _ ? e : t;
		}
		return t;
	};
}, UE = { updateViewportMaxScroll: wS };
function WE() {
	return !document.body && Q(!1), document.body;
}
var GE = {
	mode: "standard",
	type: "DEFAULT",
	direction: "vertical",
	isDropDisabled: !1,
	isCombineEnabled: !1,
	ignoreContainerClipping: !1,
	renderClone: null,
	getContainerForClone: WE
}, KE = Et(HE, UE, null, {
	context: Ow,
	pure: !0,
	areStatePropsEqual: OE
})(zE);
//#endregion
//#region node_modules/mirador/dist/es/src/components/CanvasLayers.js
KE.defaultProps = GE, tt();
function qE(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function JE(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? qE(Object(n), !0).forEach(function(t) {
			YE(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qE(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function YE(e, t, n) {
	return (t = $E(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function XE(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ZE(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, $E(r.key), r);
	}
}
function QE(e, t, n) {
	return t && ZE(e.prototype, t), n && ZE(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $E(e) {
	var t = eD(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function eD(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function tD(e, t, n) {
	return t = aD(t), nD(e, iD() ? Reflect.construct(t, n || [], aD(e).constructor) : t.apply(e, n));
}
function nD(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return rD(e);
}
function rD(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function iD() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (iD = function() {
		return !!e;
	})();
}
function aD(e) {
	return aD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, aD(e);
}
function oD(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sD(e, t);
}
function sD(e, t) {
	return sD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, sD(e, t);
}
function cD(e, t) {
	return pD(e) || fD(e, t) || uD(e, t) || lD();
}
function lD() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function uD(e, t) {
	if (e) {
		if (typeof e == "string") return dD(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dD(e, t) : void 0;
	}
}
function dD(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function fD(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function pD(e) {
	if (Array.isArray(e)) return e;
}
var mD = function(e, t, n) {
	var r = Array.from(e), i = cD(r.splice(t, 1), 1)[0];
	return r.splice(n, 0, i), r;
}, hD = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return XE(this, t), n = tD(this, t, [e]), n.droppableId = N(), n.onDragEnd = n.onDragEnd.bind(n), n.handleOpacityChange = n.handleOpacityChange.bind(n), n.setLayerVisibility = n.setLayerVisibility.bind(n), n.moveToTop = n.moveToTop.bind(n), n;
	}
	return oD(t, e), QE(t, [
		{
			key: "handleOpacityChange",
			value: function(e, t) {
				var n = this.props, r = n.canvasId, i = n.updateLayers, a = n.windowId;
				i(a, r, YE({}, e, { opacity: t / 100 }));
			}
		},
		{
			key: "onDragEnd",
			value: function(e) {
				var t = this.props, n = t.canvasId, r = t.layers, i = t.updateLayers, a = t.windowId;
				if (e.destination && e.destination.droppableId === this.droppableId && e.source.droppableId === this.droppableId) {
					var o = mD(r.map(function(e) {
						return e.id;
					}), e.source.index, e.destination.index);
					i(a, n, r.reduce(function(e, t) {
						return e[t.id] = { index: o.indexOf(t.id) }, e;
					}, {}));
				}
			}
		},
		{
			key: "setLayerVisibility",
			value: function(e, t) {
				var n = this.props, r = n.canvasId, i = n.updateLayers, a = n.windowId;
				i(a, r, YE({}, e, { visibility: t }));
			}
		},
		{
			key: "moveToTop",
			value: function(e) {
				var t = this.props, n = t.canvasId, r = t.layers, i = t.updateLayers, a = t.windowId, o = mD(r.map(function(e) {
					return e.id;
				}), r.findIndex(function(t) {
					return t.id === e;
				}), 0);
				i(a, n, r.reduce(function(e, t) {
					return e[t.id] = { index: o.indexOf(t.id) }, e;
				}, {}));
			}
		},
		{
			key: "renderLayer",
			value: function(e, n) {
				var r = this, i = this.props, a = i.classes, o = i.layerMetadata, s = i.t, c = {
					height: void 0,
					width: 50
				}, l = c.width, u = c.height, d = JE({
					opacity: 1,
					visibility: !0
				}, (o || {})[e.id]);
				return /*#__PURE__*/ X.createElement("div", { style: { flex: 1 } }, /*#__PURE__*/ X.createElement("div", { style: {
					alignItems: "flex-start",
					display: "flex"
				} }, /*#__PURE__*/ X.createElement(xn, {
					maxHeight: u,
					maxWidth: l,
					resource: e,
					classes: {
						image: a.image,
						root: a.thumbnail
					}
				}), /*#__PURE__*/ X.createElement(Ln, {
					className: a.label,
					component: "div",
					variant: "body1"
				}, t.getUseableLabel(e, n), /*#__PURE__*/ X.createElement("div", null, /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": s(d.visibility ? "layer_hide" : "layer_show"),
					edge: "start",
					size: "small",
					onClick: function() {
						r.setLayerVisibility(e.id, !d.visibility);
					}
				}, d.visibility ? /*#__PURE__*/ X.createElement(Ci.default, null) : /*#__PURE__*/ X.createElement(wi.default, null)), d.index !== 0 && /*#__PURE__*/ X.createElement(Xt, {
					"aria-label": s("layer_moveToTop"),
					size: "small",
					onClick: function() {
						r.moveToTop(e.id);
					}
				}, /*#__PURE__*/ X.createElement(ay.default, null))))), /*#__PURE__*/ X.createElement("div", { style: {
					alignItems: "center",
					display: "flex"
				} }, /*#__PURE__*/ X.createElement(Ut, { title: s("layer_opacity") }, /*#__PURE__*/ X.createElement(oy.default, {
					className: a.opacityIcon,
					color: d.visibility ? "inherit" : "disabled",
					fontSize: "small"
				})), /*#__PURE__*/ X.createElement(bc, {
					classes: { input: a.opacityInput },
					disabled: !d.visibility,
					value: Math.round(d.opacity * 100),
					type: "number",
					min: 0,
					max: 100,
					onChange: function(t) {
						return r.handleOpacityChange(e.id, t.target.value);
					},
					endAdornment: /*#__PURE__*/ X.createElement(Cc, {
						disableTypography: !0,
						position: "end"
					}, /*#__PURE__*/ X.createElement(Ln, { variant: "caption" }, "%")),
					inputProps: { "aria-label": s("layer_opacity") }
				}), /*#__PURE__*/ X.createElement(jl, {
					className: a.slider,
					disabled: !d.visibility,
					value: d.opacity * 100,
					onChange: function(t, n) {
						return r.handleOpacityChange(e.id, n);
					}
				})));
			}
		},
		{
			key: "renderDraggableLayer",
			value: function(e, t) {
				var n = this, r = this.props, i = r.classes, a = r.t;
				return /*#__PURE__*/ X.createElement(RE, {
					key: e.id,
					draggableId: e.id,
					index: t
				}, function(r, o) {
					return /*#__PURE__*/ X.createElement($i, Object.assign({ ref: r.innerRef }, r.draggableProps, {
						component: "li",
						className: G(i.listItem, YE({}, i.dragging, o.isDragging)),
						disableGutters: !0,
						key: e.id
					}), /*#__PURE__*/ X.createElement("div", Object.assign({}, r.dragHandleProps, { className: i.dragHandle }), /*#__PURE__*/ X.createElement(Ut, { title: a("layer_move") }, /*#__PURE__*/ X.createElement(iy.default, null))), n.renderLayer(e, t));
				});
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, n = t.classes, r = t.index, i = t.label, a = t.layers, o = t.t, s = t.totalSize;
				return /*#__PURE__*/ X.createElement(X.Fragment, null, s > 1 && /*#__PURE__*/ X.createElement(Ln, {
					className: n.sectionHeading,
					variant: "overline"
				}, o("annotationCanvasLabel", {
					context: `${r + 1}/${s}`,
					label: i
				})), /*#__PURE__*/ X.createElement(UT, { onDragEnd: this.onDragEnd }, /*#__PURE__*/ X.createElement(KE, { droppableId: this.droppableId }, function(t, r) {
					return /*#__PURE__*/ X.createElement(Hi, Object.assign({ className: n.list }, t.droppableProps, { ref: t.innerRef }), a && a.map(function(t, n) {
						return e.renderDraggableLayer(t, n);
					}), t.placeholder);
				})));
			}
		}
	], [{
		key: "getUseableLabel",
		value: function(e, t) {
			return e && e.getLabel && e.getLabel().length > 0 ? e.getLabel().getValue() : String(t + 1);
		}
	}]);
}(X.Component);
hD.defaultProps = {
	classes: {},
	layerMetadata: void 0
}, s(), q();
function gD(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _D(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? gD(Object(n), !0).forEach(function(t) {
			vD(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gD(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function vD(e, t, n) {
	return (t = yD(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yD(e) {
	var t = bD(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function bD(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xD = function(e, t) {
	var n = t.canvasId, r = t.windowId;
	return {
		label: je(e, {
			canvasId: n,
			windowId: r
		}),
		layerMetadata: mt(e, {
			canvasId: n,
			windowId: r
		}),
		layers: Ot(e, {
			canvasId: n,
			windowId: r
		})
	};
}, SD = { updateLayers: pn }, CD = V(Ge(), Y(function(e) {
	return {
		dragging: {},
		dragHandle: {
			alignItems: "center",
			borderRight: `0.5px solid ${e.palette.divider}`,
			display: "flex",
			flex: 1,
			flexDirection: "row",
			marginBottom: -1 * e.spacing(2) + .5,
			marginRight: e.spacing(1),
			marginTop: -1 * e.spacing(2),
			maxWidth: e.spacing(3),
			width: e.spacing(3)
		},
		image: { borderBottom: `1px solid ${e.palette.divider}` },
		label: { paddingLeft: e.spacing(1) },
		list: { paddingTop: 0 },
		listItem: {
			"& $dragHandle": {
				"&:hover": { backgroundColor: e.palette.action.hover },
				backgroundColor: e.palette.shades.light
			},
			"&$dragging": {
				"& $dragHandle, & $dragHandle:hover": { backgroundColor: e.palette.action.selected },
				backgroundColor: e.palette.action.hover
			},
			alignItems: "stretch",
			borderBottom: `0.5px solid ${e.palette.divider}`,
			cursor: "pointer",
			paddingBottom: e.spacing(2),
			paddingRight: e.spacing(1),
			paddingTop: e.spacing(2)
		},
		opacityIcon: { marginRight: e.spacing(.5) },
		opacityInput: _D(_D({}, e.typography.caption), {}, {
			"&::-webkit-outer-spin-button,&::-webkit-inner-spin-button": {
				"-webkit-appearance": "none",
				margin: 0
			},
			"-moz-appearance": "textfield",
			textAlign: "right",
			width: "3ch"
		}),
		sectionHeading: {
			paddingLeft: e.spacing(2),
			paddingRight: e.spacing(1),
			paddingTop: e.spacing(2)
		},
		slider: {
			marginLeft: e.spacing(2),
			marginRight: e.spacing(2),
			maxWidth: 150
		},
		thumbnail: { minWidth: 50 }
	};
}), Et(xD, SD))(hD);
//#endregion
//#region node_modules/mirador/dist/es/src/components/LayersPanel.js
function wD(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function TD(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, DD(r.key), r);
	}
}
function ED(e, t, n) {
	return t && TD(e.prototype, t), n && TD(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function DD(e) {
	var t = OD(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function OD(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function kD(e, t, n) {
	return t = ND(t), AD(e, MD() ? Reflect.construct(t, n || [], ND(e).constructor) : t.apply(e, n));
}
function AD(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return jD(e);
}
function jD(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function MD() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (MD = function() {
		return !!e;
	})();
}
function ND(e) {
	return ND = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ND(e);
}
function PD(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && FD(e, t);
}
function FD(e, t) {
	return FD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, FD(e, t);
}
var ID = /*#__PURE__*/ function(e) {
	function t() {
		return wD(this, t), kD(this, t, arguments);
	}
	return PD(t, e), ED(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.canvasIds, n = e.id, r = e.t, i = e.windowId;
			return /*#__PURE__*/ X.createElement(wd, {
				title: r("layers"),
				id: n,
				windowId: i
			}, t.map(function(e, n) {
				return /*#__PURE__*/ X.createElement(CD, {
					canvasId: e,
					index: n,
					key: e,
					totalSize: t.length,
					windowId: i
				});
			}));
		}
	}]);
}(X.Component);
ID.defaultProps = { canvasIds: [] }, s(), q();
var LD = V(Ge(), Y(function(e) {
	return {};
}), Et(function(e, t) {
	t.id;
	var n = t.windowId;
	return { canvasIds: Ne(e, { windowId: n }) };
}), R("LayersPanel"))(ID);
//#endregion
//#region node_modules/mirador/dist/es/src/components/CustomPanel.js
function RD(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function zD(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, VD(r.key), r);
	}
}
function BD(e, t, n) {
	return t && zD(e.prototype, t), n && zD(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VD(e) {
	var t = HD(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function HD(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function UD(e, t, n) {
	return t = qD(t), WD(e, KD() ? Reflect.construct(t, n || [], qD(e).constructor) : t.apply(e, n));
}
function WD(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return GD(e);
}
function GD(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function KD() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (KD = function() {
		return !!e;
	})();
}
function qD(e) {
	return qD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, qD(e);
}
function JD(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && YD(e, t);
}
function YD(e, t) {
	return YD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, YD(e, t);
}
var XD = /*#__PURE__*/ function(e) {
	function t() {
		return RD(this, t), UD(this, t, arguments);
	}
	return JD(t, e), BD(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.id, n = e.children, r = e.t, i = e.title, a = e.windowId;
			return /*#__PURE__*/ X.createElement(wd, {
				title: r(i),
				id: t,
				windowId: a
			}, n);
		}
	}]);
}(X.Component);
XD.defaultProps = { children: null }, s(), q();
var ZD = V(Ge(), Y(function(e) {
	return {};
}), Et(function(e, t) {
	return t.id, t.windowId, {};
}), R("CustomPanel"))(XD), QD = /* @__PURE__ */ n((/* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }), "ArrowUpwardSharp");
})))()), $D = ["manifest"];
function eO(e) {
	return iO(e) || rO(e) || nO(e) || tO();
}
function tO() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function nO(e, t) {
	if (e) {
		if (typeof e == "string") return aO(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? aO(e, t) : void 0;
	}
}
function rO(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function iO(e) {
	if (Array.isArray(e)) return aO(e);
}
function aO(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function oO(e, t) {
	if (e == null) return {};
	var n, r, i = sO(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function sO(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
function cO(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function lO(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dO(r.key), r);
	}
}
function uO(e, t, n) {
	return t && lO(e.prototype, t), n && lO(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dO(e) {
	var t = fO(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function fO(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function pO(e, t, n) {
	return t = _O(t), mO(e, gO() ? Reflect.construct(t, n || [], _O(e).constructor) : t.apply(e, n));
}
function mO(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return hO(e);
}
function hO(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function gO() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (gO = function() {
		return !!e;
	})();
}
function _O(e) {
	return _O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, _O(e);
}
function vO(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yO(e, t);
}
function yO(e, t) {
	return yO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, yO(e, t);
}
var bO = /*#__PURE__*/ function(e) {
	function t() {
		return cO(this, t), pO(this, t, arguments);
	}
	return vO(t, e), uO(t, [{
		key: "isMultipart",
		value: function() {
			var e = this.props.collection;
			if (!e) return !1;
			var t = e.getProperty("behavior");
			return Array.isArray(t) ? t.includes("multi-part") : t === "multi-part";
		}
	}, {
		key: "render",
		value: function() {
			var e = this.props, n = e.canvasNavigation, r = e.classes, i = e.collectionPath, a = e.collection, o = e.id, s = e.isFetching, c = e.manifestId, l = e.parentCollection, u = e.updateCompanionWindow, d = e.updateWindow, f = e.t, p = e.variant, m = e.windowId, h = function(e) {
				var i = e.manifest, a = oO(e, $D);
				return /*#__PURE__*/ X.createElement(na, Object.assign({
					className: r.menuItem,
					alignItems: "flex-start",
					button: !0,
					component: "li",
					selected: c === i.id
				}, a), p === "thumbnail" && /*#__PURE__*/ X.createElement(Mc, null, /*#__PURE__*/ X.createElement(xn, {
					resource: i,
					maxHeight: n.height,
					maxWidth: n.width
				})), /*#__PURE__*/ X.createElement(aa, null, t.getUseableLabel(i)));
			};
			return /*#__PURE__*/ X.createElement(wd, {
				title: f(this.isMultipart() ? "multipartCollection" : "collection"),
				windowId: m,
				id: o,
				titleControls: /*#__PURE__*/ X.createElement(X.Fragment, null, l && /*#__PURE__*/ X.createElement(Hi, null, /*#__PURE__*/ X.createElement($i, {
					button: !0,
					onClick: function() {
						return u({ collectionPath: i.slice(0, -1) });
					}
				}, /*#__PURE__*/ X.createElement(Mc, null, /*#__PURE__*/ X.createElement(QD.default, null)), /*#__PURE__*/ X.createElement(aa, { primaryTypographyProps: { variant: "body1" } }, t.getUseableLabel(l)))), /*#__PURE__*/ X.createElement(Ln, { variant: "h6" }, a && t.getUseableLabel(a), s && /*#__PURE__*/ X.createElement(Wh, {
					className: r.placeholder,
					variant: "text"
				})))
			}, /*#__PURE__*/ X.createElement(Yi, null, s && /*#__PURE__*/ X.createElement(na, null, /*#__PURE__*/ X.createElement(aa, null, /*#__PURE__*/ X.createElement(Wh, {
				className: r.placeholder,
				variant: "text"
			}), /*#__PURE__*/ X.createElement(Wh, {
				className: r.placeholder,
				variant: "text"
			}), /*#__PURE__*/ X.createElement(Wh, {
				className: r.placeholder,
				variant: "text"
			}))), a && a.getCollections().map(function(e) {
				return /*#__PURE__*/ X.createElement(h, {
					key: e.id,
					onClick: function() {
						u({ collectionPath: [].concat(eO(i), [e.id]) });
					},
					manifest: e
				});
			}), a && a.getManifests().map(function(e) {
				return /*#__PURE__*/ X.createElement(h, {
					key: e.id,
					onClick: function() {
						d({
							canvasId: null,
							collectionPath: i,
							manifestId: e.id
						}), u({ multipart: !1 });
					},
					manifest: e
				});
			})));
		}
	}], [{
		key: "getUseableLabel",
		value: function(e, t) {
			return e && e.getLabel && e.getLabel().length > 0 ? e.getLabel().getValue() : e.id;
		}
	}]);
}(X.Component);
bO.defaultProps = {
	collection: null,
	collectionPath: [],
	error: null,
	isFetching: !1,
	parentCollection: null,
	ready: !1,
	t: function(e) {
		return e;
	},
	variant: null
}, s(), q();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/CompanionWindowRegistry.js
var xO = {
	annotations: Rd,
	attribution: ug,
	canvas: Vh,
	collection: V(Y(function(e) {
		return {
			label: { paddingLeft: e.spacing(1) },
			menuItem: {
				borderBottom: `0.5px solid ${e.palette.divider}`,
				paddingRight: e.spacing(1),
				whiteSpace: "normal"
			}
		};
	}), Ge(), Et(function(e, t) {
		var n = t.id, r = t.windowId, i = Ye(e, { windowId: r }), a = Le(e, { companionWindowId: n }), o = a.collectionPath || i.collectionPath, s = o && o[o.length - 1], c = o && o[o.length - 2], l = s && Ke(e, { manifestId: s }), u = c && Ke(e, { manifestId: c }), d = Ke(e, { windowId: r });
		return {
			canvasNavigation: e.config.canvasNavigation,
			collection: l && P(e, { manifestId: l.id }),
			collectionId: s,
			collectionPath: o,
			error: l && l.error,
			isFetching: l && l.isFetching,
			manifestId: d && d.id,
			parentCollection: u && P(e, { manifestId: u.id }),
			ready: l && !!l.json,
			variant: a.variant || Je(e, { windowId: r })
		};
	}, function(e, t) {
		var n = t.id, r = t.windowId;
		return {
			updateCompanionWindow: function() {
				var t = [...arguments];
				return e(mn.apply(_n, [r, n].concat(t)));
			},
			updateWindow: function() {
				var t = [...arguments];
				return e(dn.apply(_n, [r].concat(t)));
			}
		};
	}), R("WindowSideBarCollectionPanel"))(bO),
	custom: ZD,
	info: Yp,
	layers: LD,
	search: ey,
	thumbnailNavigation: bi
}, SO, CO = t((() => {
	(function(e) {
		e.SOURCE = "SOURCE", e.TARGET = "TARGET";
	})(SO ||= {});
}));
//#endregion
//#region node_modules/@react-dnd/invariant/dist/invariant.esm.js
function $(e, t) {
	var n = [...arguments].slice(2);
	if (!e) {
		var r;
		if (t === void 0) r = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			var i = 0;
			r = Error(t.replace(/%s/g, function() {
				return n[i++];
			})), r.name = "Invariant Violation";
		}
		throw r.framesToPop = 1, r;
	}
}
var wO = t((() => {})), TO, EO, DO, OO, kO, AO, jO = t((() => {
	TO = "dnd-core/INIT_COORDS", EO = "dnd-core/BEGIN_DRAG", DO = "dnd-core/PUBLISH_DRAG_SOURCE", OO = "dnd-core/HOVER", kO = "dnd-core/DROP", AO = "dnd-core/END_DRAG";
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js
function MO(e, t) {
	return {
		type: TO,
		payload: {
			sourceClientOffset: t || null,
			clientOffset: e || null
		}
	};
}
var NO = t((() => {
	jO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/js_utils.js
function PO(e) {
	return PO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, PO(e);
}
function FO(e, t, n) {
	return t.split(".").reduce(function(e, t) {
		return e && e[t] ? e[t] : n || null;
	}, e);
}
function IO(e, t) {
	return e.filter(function(e) {
		return e !== t;
	});
}
function LO(e) {
	return PO(e) === "object";
}
function RO(e, t) {
	var n = /* @__PURE__ */ new Map(), r = function(e) {
		return n.set(e, n.has(e) ? n.get(e) + 1 : 1);
	};
	e.forEach(r), t.forEach(r);
	var i = [];
	return n.forEach(function(e, t) {
		e === 1 && i.push(t);
	}), i;
}
function zO(e, t) {
	return e.filter(function(e) {
		return t.indexOf(e) > -1;
	});
}
var BO = t((() => {}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js
function VO(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { publishSource: !0 }, r = n.publishSource, i = r === void 0 ? !0 : r, a = n.clientOffset, o = n.getSourceClientOffset, s = e.getMonitor(), c = e.getRegistry();
		e.dispatch(MO(a)), HO(t, s, c);
		var l = GO(t, s);
		if (l === null) {
			e.dispatch(KO);
			return;
		}
		var u = null;
		a && (UO(o), u = o(l)), e.dispatch(MO(a, u));
		var d = c.getSource(l).beginDrag(s, l);
		return WO(d), c.pinSource(l), {
			type: EO,
			payload: {
				itemType: c.getSourceType(l),
				item: d,
				sourceId: l,
				clientOffset: a || null,
				sourceClientOffset: u || null,
				isSourcePublic: !!i
			}
		};
	};
}
function HO(e, t, n) {
	$(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
		$(n.getSource(e), "Expected sourceIds to be registered.");
	});
}
function UO(e) {
	$(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function WO(e) {
	$(LO(e), "Item must be an object.");
}
function GO(e, t) {
	for (var n = null, r = e.length - 1; r >= 0; r--) if (t.canDragSource(e[r])) {
		n = e[r];
		break;
	}
	return n;
}
var KO, qO = t((() => {
	wO(), NO(), BO(), jO(), KO = {
		type: TO,
		payload: {
			clientOffset: null,
			sourceClientOffset: null
		}
	};
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js
function JO(e) {
	return function() {
		if (e.getMonitor().isDragging()) return { type: DO };
	};
}
var YO = t((() => {
	jO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/matchesType.js
function XO(e, t) {
	return t === null ? e === null : Array.isArray(e) ? e.some(function(e) {
		return e === t;
	}) : e === t;
}
var ZO = t((() => {}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js
function QO(e) {
	return function(t) {
		var n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).clientOffset;
		$O(t);
		var r = t.slice(0), i = e.getMonitor(), a = e.getRegistry();
		return ek(r, i, a), tk(r, a, i.getItemType()), nk(r, i, a), {
			type: OO,
			payload: {
				targetIds: r,
				clientOffset: n || null
			}
		};
	};
}
function $O(e) {
	$(Array.isArray(e), "Expected targetIds to be an array.");
}
function ek(e, t, n) {
	$(t.isDragging(), "Cannot call hover while not dragging."), $(!t.didDrop(), "Cannot call hover after drop.");
	for (var r = 0; r < e.length; r++) {
		var i = e[r];
		$(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array."), $(n.getTarget(i), "Expected targetIds to be registered.");
	}
}
function tk(e, t, n) {
	for (var r = e.length - 1; r >= 0; r--) {
		var i = e[r];
		XO(t.getTargetType(i), n) || e.splice(r, 1);
	}
}
function nk(e, t, n) {
	e.forEach(function(e) {
		n.getTarget(e).hover(t, e);
	});
}
var rk = t((() => {
	wO(), ZO(), jO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js
function ik(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ak(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ik(Object(n), !0).forEach(function(t) {
			ok(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ik(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ok(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sk(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), r = e.getRegistry();
		ck(n), dk(n).forEach(function(i, a) {
			var o = {
				type: kO,
				payload: { dropResult: ak({}, t, {}, lk(i, a, r, n)) }
			};
			e.dispatch(o);
		});
	};
}
function ck(e) {
	$(e.isDragging(), "Cannot call drop while not dragging."), $(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function lk(e, t, n, r) {
	var i = n.getTarget(e), a = i ? i.drop(r, e) : void 0;
	return uk(a), a === void 0 && (a = t === 0 ? {} : r.getDropResult()), a;
}
function uk(e) {
	$(e === void 0 || LO(e), "Drop result must either be an object or undefined.");
}
function dk(e) {
	var t = e.getTargetIds().filter(e.canDropOnTarget, e);
	return t.reverse(), t;
}
var fk = t((() => {
	wO(), jO(), BO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js
function pk(e) {
	return function() {
		var t = e.getMonitor(), n = e.getRegistry();
		mk(t);
		var r = t.getSourceId();
		return n.getSource(r, !0).endDrag(t, r), n.unpinSource(), { type: AO };
	};
}
function mk(e) {
	$(e.isDragging(), "Cannot call endDrag while not dragging.");
}
var hk = t((() => {
	wO(), jO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/index.js
function gk(e) {
	return {
		beginDrag: VO(e),
		publishDragSource: JO(e),
		hover: QO(e),
		drop: sk(e),
		endDrag: pk(e)
	};
}
var _k = t((() => {
	qO(), YO(), rk(), fk(), hk(), jO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/equality.js
function vk(e, t) {
	return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function yk(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bk;
	if (e.length !== t.length) return !1;
	for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
	return !0;
}
var bk, xk = t((() => {
	bk = function(e, t) {
		return e === t;
	};
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/dragOffset.js
function Sk(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ck(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Sk(Object(n), !0).forEach(function(t) {
			wk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sk(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wk(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Tk() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ek, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
	switch (t.type) {
		case TO:
		case EO: return {
			initialSourceClientOffset: n.sourceClientOffset,
			initialClientOffset: n.clientOffset,
			clientOffset: n.clientOffset
		};
		case OO: return vk(e.clientOffset, n.clientOffset) ? e : Ck({}, e, { clientOffset: n.clientOffset });
		case AO:
		case kO: return Ek;
		default: return e;
	}
}
var Ek, Dk = t((() => {
	_k(), xk(), Ek = {
		initialSourceClientOffset: null,
		initialClientOffset: null,
		clientOffset: null
	};
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/registry.js
function Ok(e) {
	return {
		type: Mk,
		payload: { sourceId: e }
	};
}
function kk(e) {
	return {
		type: Nk,
		payload: { targetId: e }
	};
}
function Ak(e) {
	return {
		type: Pk,
		payload: { sourceId: e }
	};
}
function jk(e) {
	return {
		type: Fk,
		payload: { targetId: e }
	};
}
var Mk, Nk, Pk, Fk, Ik = t((() => {
	Mk = "dnd-core/ADD_SOURCE", Nk = "dnd-core/ADD_TARGET", Pk = "dnd-core/REMOVE_SOURCE", Fk = "dnd-core/REMOVE_TARGET";
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/dragOperation.js
function Lk(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Rk(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Lk(Object(n), !0).forEach(function(t) {
			zk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lk(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function zk(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Bk() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vk, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
	switch (t.type) {
		case EO: return Rk({}, e, {
			itemType: n.itemType,
			item: n.item,
			sourceId: n.sourceId,
			isSourcePublic: n.isSourcePublic,
			dropResult: null,
			didDrop: !1
		});
		case DO: return Rk({}, e, { isSourcePublic: !0 });
		case OO: return Rk({}, e, { targetIds: n.targetIds });
		case Fk: return e.targetIds.indexOf(n.targetId) === -1 ? e : Rk({}, e, { targetIds: IO(e.targetIds, n.targetId) });
		case kO: return Rk({}, e, {
			dropResult: n.dropResult,
			didDrop: !0,
			targetIds: []
		});
		case AO: return Rk({}, e, {
			itemType: null,
			item: null,
			sourceId: null,
			dropResult: null,
			didDrop: !1,
			isSourcePublic: null,
			targetIds: []
		});
		default: return e;
	}
}
var Vk, Hk = t((() => {
	_k(), Ik(), BO(), Vk = {
		itemType: null,
		item: null,
		sourceId: null,
		targetIds: [],
		dropResult: null,
		didDrop: !1,
		isSourcePublic: null
	};
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/refCount.js
function Uk() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
	switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
		case Mk:
		case Nk: return e + 1;
		case Pk:
		case Fk: return e - 1;
		default: return e;
	}
}
var Wk = t((() => {
	Ik();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/dirtiness.js
function Gk(e, t) {
	return e === Kk ? !1 : e === qk || t === void 0 ? !0 : zO(t, e).length > 0;
}
var Kk, qk, Jk = t((() => {
	BO(), Kk = [], qk = [], Kk.__IS_NONE__ = !0, qk.__IS_ALL__ = !0;
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js
function Yk() {
	arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
	var e = arguments.length > 1 ? arguments[1] : void 0;
	switch (e.type) {
		case OO: break;
		case Mk:
		case Nk:
		case Fk:
		case Pk: return Kk;
		case EO:
		case DO:
		case AO:
		case kO:
		default: return qk;
	}
	var t = e.payload, n = t.targetIds, r = n === void 0 ? [] : n, i = t.prevTargetIds, a = i === void 0 ? [] : i, o = RO(r, a);
	if (!(o.length > 0 || !yk(r, a))) return Kk;
	var s = a[a.length - 1], c = r[r.length - 1];
	return s !== c && (s && o.push(s), c && o.push(c)), o;
}
var Xk = t((() => {
	_k(), Ik(), xk(), Jk(), BO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/stateId.js
function Zk() {
	return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0) + 1;
}
var Qk = t((() => {}));
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/index.js
function $k(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function eA(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? $k(Object(n), !0).forEach(function(t) {
			tA(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $k(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function tA(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function nA() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
	return {
		dirtyHandlerIds: Yk(e.dirtyHandlerIds, {
			type: t.type,
			payload: eA({}, t.payload, { prevTargetIds: FO(e, "dragOperation.targetIds", []) })
		}),
		dragOffset: Tk(e.dragOffset, t),
		refCount: Uk(e.refCount, t),
		dragOperation: Bk(e.dragOperation, t),
		stateId: Zk(e.stateId)
	};
}
var rA = t((() => {
	Dk(), Hk(), Wk(), Xk(), Qk(), BO();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/coords.js
function iA(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function aA(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function oA(e) {
	var t = e.clientOffset, n = e.initialClientOffset, r = e.initialSourceClientOffset;
	return !t || !n || !r ? null : aA(iA(t, r), n);
}
function sA(e) {
	var t = e.clientOffset, n = e.initialClientOffset;
	return !t || !n ? null : aA(t, n);
}
var cA = t((() => {}));
//#endregion
//#region node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js
function lA(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function uA(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function dA(e, t, n) {
	return t && uA(e.prototype, t), n && uA(e, n), e;
}
var fA, pA = t((() => {
	wO(), ZO(), cA(), Jk(), fA = /*#__PURE__*/ function() {
		function e(t, n) {
			lA(this, e), this.store = t, this.registry = n;
		}
		return dA(e, [
			{
				key: "subscribeToStateChange",
				value: function(e) {
					var t = this, n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { handlerIds: void 0 }).handlerIds;
					$(typeof e == "function", "listener must be a function."), $(n === void 0 || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
					var r = this.store.getState().stateId;
					return this.store.subscribe(function() {
						var i = t.store.getState(), a = i.stateId;
						try {
							a === r || a === r + 1 && !Gk(i.dirtyHandlerIds, n) || e();
						} finally {
							r = a;
						}
					});
				}
			},
			{
				key: "subscribeToOffsetChange",
				value: function(e) {
					var t = this;
					$(typeof e == "function", "listener must be a function.");
					var n = this.store.getState().dragOffset;
					return this.store.subscribe(function() {
						var r = t.store.getState().dragOffset;
						r !== n && (n = r, e());
					});
				}
			},
			{
				key: "canDragSource",
				value: function(e) {
					if (!e) return !1;
					var t = this.registry.getSource(e);
					return $(t, "Expected to find a valid source."), this.isDragging() ? !1 : t.canDrag(this, e);
				}
			},
			{
				key: "canDropOnTarget",
				value: function(e) {
					if (!e) return !1;
					var t = this.registry.getTarget(e);
					return $(t, "Expected to find a valid target."), !this.isDragging() || this.didDrop() ? !1 : XO(this.registry.getTargetType(e), this.getItemType()) && t.canDrop(this, e);
				}
			},
			{
				key: "isDragging",
				value: function() {
					return !!this.getItemType();
				}
			},
			{
				key: "isDraggingSource",
				value: function(e) {
					if (!e) return !1;
					var t = this.registry.getSource(e, !0);
					return $(t, "Expected to find a valid source."), !this.isDragging() || !this.isSourcePublic() || this.registry.getSourceType(e) !== this.getItemType() ? !1 : t.isDragging(this, e);
				}
			},
			{
				key: "isOverTarget",
				value: function(e) {
					var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { shallow: !1 };
					if (!e) return !1;
					var n = t.shallow;
					if (!this.isDragging()) return !1;
					var r = this.registry.getTargetType(e), i = this.getItemType();
					if (i && !XO(r, i)) return !1;
					var a = this.getTargetIds();
					if (!a.length) return !1;
					var o = a.indexOf(e);
					return n ? o === a.length - 1 : o > -1;
				}
			},
			{
				key: "getItemType",
				value: function() {
					return this.store.getState().dragOperation.itemType;
				}
			},
			{
				key: "getItem",
				value: function() {
					return this.store.getState().dragOperation.item;
				}
			},
			{
				key: "getSourceId",
				value: function() {
					return this.store.getState().dragOperation.sourceId;
				}
			},
			{
				key: "getTargetIds",
				value: function() {
					return this.store.getState().dragOperation.targetIds;
				}
			},
			{
				key: "getDropResult",
				value: function() {
					return this.store.getState().dragOperation.dropResult;
				}
			},
			{
				key: "didDrop",
				value: function() {
					return this.store.getState().dragOperation.didDrop;
				}
			},
			{
				key: "isSourcePublic",
				value: function() {
					return this.store.getState().dragOperation.isSourcePublic;
				}
			},
			{
				key: "getInitialClientOffset",
				value: function() {
					return this.store.getState().dragOffset.initialClientOffset;
				}
			},
			{
				key: "getInitialSourceClientOffset",
				value: function() {
					return this.store.getState().dragOffset.initialSourceClientOffset;
				}
			},
			{
				key: "getClientOffset",
				value: function() {
					return this.store.getState().dragOffset.clientOffset;
				}
			},
			{
				key: "getSourceClientOffset",
				value: function() {
					return oA(this.store.getState().dragOffset);
				}
			},
			{
				key: "getDifferenceFromInitialOffset",
				value: function() {
					return sA(this.store.getState().dragOffset);
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js
function mA() {
	return hA++;
}
var hA, gA = t((() => {
	hA = 0;
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/contracts.js
function _A(e) {
	return _A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _A(e);
}
function vA(e) {
	$(typeof e.canDrag == "function", "Expected canDrag to be a function."), $(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), $(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function yA(e) {
	$(typeof e.canDrop == "function", "Expected canDrop to be a function."), $(typeof e.hover == "function", "Expected hover to be a function."), $(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function bA(e, t) {
	if (t && Array.isArray(e)) {
		e.forEach(function(e) {
			return bA(e, !1);
		});
		return;
	}
	$(typeof e == "string" || _A(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var xA = t((() => {
	wO();
}));
//#endregion
//#region node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs
function SA(e) {
	return function() {
		let t = setTimeout(r, 0), n = setInterval(r, 50);
		function r() {
			clearTimeout(t), clearInterval(n), e();
		}
	};
}
function CA(e) {
	let t = 1, n = new TA(e), r = document.createTextNode("");
	return n.observe(r, { characterData: !0 }), function() {
		t = -t, r.data = t;
	};
}
var wA, TA, EA, DA = t((() => {
	wA = typeof global < "u" ? global : self, TA = wA.MutationObserver || wA.WebKitMutationObserver, EA = typeof TA == "function" ? CA : SA;
})), OA, kA = t((() => {
	DA(), OA = class {
		enqueueTask(e) {
			let { queue: t, requestFlush: n } = this;
			t.length || (n(), this.flushing = !0), t[t.length] = e;
		}
		constructor() {
			this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
				let { queue: e } = this;
				for (; this.index < e.length;) {
					let t = this.index;
					if (this.index++, e[t].call(), this.index > this.capacity) {
						for (let t = 0, n = e.length - this.index; t < n; t++) e[t] = e[t + this.index];
						e.length -= this.index, this.index = 0;
					}
				}
				e.length = 0, this.index = 0, this.flushing = !1;
			}, this.registerPendingError = (e) => {
				this.pendingErrors.push(e), this.requestErrorThrow();
			}, this.requestFlush = EA(this.flush), this.requestErrorThrow = SA(() => {
				if (this.pendingErrors.length) throw this.pendingErrors.shift();
			});
		}
	};
})), AA, jA = t((() => {
	AA = class {
		call() {
			try {
				this.task && this.task();
			} catch (e) {
				this.onError(e);
			} finally {
				this.task = null, this.release(this);
			}
		}
		constructor(e, t) {
			this.onError = e, this.release = t, this.task = null;
		}
	};
})), MA, NA = t((() => {
	jA(), MA = class {
		create(e) {
			let t = this.freeTasks, n = t.length ? t.pop() : new AA(this.onError, (e) => t[t.length] = e);
			return n.task = e, n;
		}
		constructor(e) {
			this.onError = e, this.freeTasks = [];
		}
	};
}));
//#endregion
//#region node_modules/@react-dnd/asap/dist/esm/asap.mjs
function PA(e) {
	FA.enqueueTask(IA.create(e));
}
var FA, IA, LA = t((() => {
	kA(), NA(), FA = new OA(), IA = new MA(FA.registerPendingError);
})), RA = t((() => {})), zA = t((() => {
	LA(), RA(), kA(), NA();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js
function BA(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function VA(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function HA(e, t, n) {
	return t && VA(e.prototype, t), n && VA(e, n), e;
}
function UA(e, t) {
	return KA(e) || GA(e, t) || WA();
}
function WA() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function GA(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function KA(e) {
	if (Array.isArray(e)) return e;
}
function qA(e) {
	var t = mA().toString();
	switch (e) {
		case SO.SOURCE: return `S${t}`;
		case SO.TARGET: return `T${t}`;
		default: throw Error(`Unknown Handler Role: ${e}`);
	}
}
function JA(e) {
	switch (e[0]) {
		case "S": return SO.SOURCE;
		case "T": return SO.TARGET;
		default: $(!1, `Cannot parse handler ID: ${e}`);
	}
}
function YA(e, t) {
	var n = e.entries(), r = !1;
	do {
		var i = n.next(), a = i.done;
		if (UA(i.value, 2)[1] === t) return !0;
		r = !!a;
	} while (!r);
	return !1;
}
var XA, ZA = t((() => {
	wO(), Ik(), gA(), CO(), xA(), zA(), XA = /*#__PURE__*/ function() {
		function e(t) {
			BA(this, e), this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = t;
		}
		return HA(e, [
			{
				key: "addSource",
				value: function(e, t) {
					bA(e), vA(t);
					var n = this.addHandler(SO.SOURCE, e, t);
					return this.store.dispatch(Ok(n)), n;
				}
			},
			{
				key: "addTarget",
				value: function(e, t) {
					bA(e, !0), yA(t);
					var n = this.addHandler(SO.TARGET, e, t);
					return this.store.dispatch(kk(n)), n;
				}
			},
			{
				key: "containsHandler",
				value: function(e) {
					return YA(this.dragSources, e) || YA(this.dropTargets, e);
				}
			},
			{
				key: "getSource",
				value: function(e) {
					var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
					return $(this.isSourceId(e), "Expected a valid source ID."), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
				}
			},
			{
				key: "getTarget",
				value: function(e) {
					return $(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
				}
			},
			{
				key: "getSourceType",
				value: function(e) {
					return $(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
				}
			},
			{
				key: "getTargetType",
				value: function(e) {
					return $(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
				}
			},
			{
				key: "isSourceId",
				value: function(e) {
					return JA(e) === SO.SOURCE;
				}
			},
			{
				key: "isTargetId",
				value: function(e) {
					return JA(e) === SO.TARGET;
				}
			},
			{
				key: "removeSource",
				value: function(e) {
					var t = this;
					$(this.getSource(e), "Expected an existing source."), this.store.dispatch(Ak(e)), PA(function() {
						t.dragSources.delete(e), t.types.delete(e);
					});
				}
			},
			{
				key: "removeTarget",
				value: function(e) {
					$(this.getTarget(e), "Expected an existing target."), this.store.dispatch(jk(e)), this.dropTargets.delete(e), this.types.delete(e);
				}
			},
			{
				key: "pinSource",
				value: function(e) {
					var t = this.getSource(e);
					$(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t;
				}
			},
			{
				key: "unpinSource",
				value: function() {
					$(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
				}
			},
			{
				key: "addHandler",
				value: function(e, t, n) {
					var r = qA(e);
					return this.types.set(r, t), e === SO.SOURCE ? this.dragSources.set(r, n) : e === SO.TARGET && this.dropTargets.set(r, n), r;
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/DragDropManagerImpl.js
function QA(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $A(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function ej(e, t, n) {
	return t && $A(e.prototype, t), n && $A(e, n), e;
}
function tj(e) {
	var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
	return ut(nA, e && t && t({
		name: "dnd-core",
		instanceId: "dnd-core"
	}));
}
var nj, rj = t((() => {
	s(), rA(), _k(), pA(), ZA(), nj = /*#__PURE__*/ function() {
		function e() {
			var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
			QA(this, e), this.isSetUp = !1, this.handleRefCountChange = function() {
				var e = t.store.getState().refCount > 0;
				t.backend && (e && !t.isSetUp ? (t.backend.setup(), t.isSetUp = !0) : !e && t.isSetUp && (t.backend.teardown(), t.isSetUp = !1));
			};
			var r = tj(n);
			this.store = r, this.monitor = new fA(r, new XA(r)), r.subscribe(this.handleRefCountChange);
		}
		return ej(e, [
			{
				key: "receiveBackend",
				value: function(e) {
					this.backend = e;
				}
			},
			{
				key: "getMonitor",
				value: function() {
					return this.monitor;
				}
			},
			{
				key: "getBackend",
				value: function() {
					return this.backend;
				}
			},
			{
				key: "getRegistry",
				value: function() {
					return this.monitor.registry;
				}
			},
			{
				key: "getActions",
				value: function() {
					var e = this, t = this.store.dispatch;
					function n(n) {
						return function() {
							var r = [...arguments], i = n.apply(e, r);
							i !== void 0 && t(i);
						};
					}
					var r = gk(this);
					return Object.keys(r).reduce(function(e, t) {
						var i = r[t];
						return e[t] = n(i), e;
					}, {});
				}
			},
			{
				key: "dispatch",
				value: function(e) {
					this.store.dispatch(e);
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/dnd-core/dist/esm/factories.js
function ij(e, t, n, r) {
	var i = new nj(r), a = e(i, t, n);
	return i.receiveBackend(a), i;
}
var aj = t((() => {
	rj();
})), oj = t((() => {
	CO(), aj();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/DndContext.js
function sj(e, t, n, r) {
	return { dragDropManager: ij(e, t, n, r) };
}
var cj, lj, uj = t((() => {
	cj = /* @__PURE__ */ n(W()), oj(), lj = cj.createContext({ dragDropManager: void 0 });
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/DndProvider.js
function dj(e, t) {
	return mj(e) || pj(e, t) || fj();
}
function fj() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function pj(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function mj(e) {
	if (Array.isArray(e)) return e;
}
function hj(e, t) {
	if (e == null) return {};
	var n = gj(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function gj(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function _j(e) {
	return "manager" in e ? [{ dragDropManager: e.manager }, !1] : [vj(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function vj(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yj(), n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = t;
	return i[wj] || (i[wj] = sj(e, t, n, r)), i[wj];
}
function yj() {
	return typeof global < "u" ? global : window;
}
var bj, xj, Sj, Cj, wj, Tj = t((() => {
	bj = /* @__PURE__ */ n(W()), xj = /* @__PURE__ */ n(W()), uj(), Sj = 0, Cj = (0, xj.memo)(function(e) {
		var t = e.children, n = dj(_j(hj(e, ["children"])), 2), r = n[0], i = n[1];
		return bj.useEffect(function() {
			return i && Sj++, function() {
				if (i && (Sj--, Sj === 0)) {
					var e = yj();
					e[wj] = null;
				}
			};
		}, []), bj.createElement(lj.Provider, { value: r }, t);
	}), Cj.displayName = "DndProvider", wj = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
})), Ej, Dj, Oj = t((() => {
	Ej = /* @__PURE__ */ n(W()), Dj = Ej.memo(function(e) {
		var t = e.connect, n = e.src;
		if (typeof Image < "u") {
			var r = new Image();
			r.src = n, r.onload = function() {
				return t(r);
			};
		}
		return null;
	}), Dj.displayName = "DragPreviewImage";
})), kj = t((() => {
	uj(), Tj(), Oj();
})), Aj, jj, Mj = t((() => {
	Aj = /* @__PURE__ */ n(W()), jj = typeof window < "u" ? Aj.useLayoutEffect : Aj.useEffect;
}));
//#endregion
//#region node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
function Nj(e, t, n, r) {
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
}
var Pj = t((() => {}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js
function Fj(e, t) {
	return Rj(e) || Lj(e, t) || Ij();
}
function Ij() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function Lj(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function Rj(e) {
	if (Array.isArray(e)) return e;
}
function zj(e, t, n) {
	var r = Fj((0, Bj.useState)(function() {
		return t(e);
	}), 2), i = r[0], a = r[1], o = (0, Bj.useCallback)(function() {
		var r = t(e);
		Nj(i, r) || (a(r), n && n());
	}, [
		i,
		e,
		n
	]);
	return jj(o, []), [i, o];
}
var Bj, Vj = t((() => {
	Pj(), Bj = /* @__PURE__ */ n(W()), Mj();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js
function Hj(e, t) {
	return Gj(e) || Wj(e, t) || Uj();
}
function Uj() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function Wj(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function Gj(e) {
	if (Array.isArray(e)) return e;
}
function Kj(e, t, n) {
	var r = Hj(zj(e, t, n), 2), i = r[0], a = r[1];
	return jj(function() {
		var t = e.getHandlerId();
		if (t != null) return e.subscribeToStateChange(a, { handlerIds: [t] });
	}, [e, a]), i;
}
var qj = t((() => {
	Mj(), Vj();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/registration.js
function Jj(e, t, n) {
	var r = n.getRegistry(), i = r.addTarget(e, t);
	return [i, function() {
		return r.removeTarget(i);
	}];
}
function Yj(e, t, n) {
	var r = n.getRegistry(), i = r.addSource(e, t);
	return [i, function() {
		return r.removeSource(i);
	}];
}
var Xj = t((() => {}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js
function Zj() {
	var e = (0, Qj.useContext)(lj).dragDropManager;
	return $(e != null, "Expected drag drop context"), e;
}
var Qj, $j = t((() => {
	Qj = /* @__PURE__ */ n(W()), wO(), uj();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
function eM(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function tM(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function nM(e, t, n) {
	return t && tM(e.prototype, t), n && tM(e, n), e;
}
var rM, iM, aM, oM = t((() => {
	wO(), rM = !1, iM = !1, aM = /*#__PURE__*/ function() {
		function e(t) {
			eM(this, e), this.sourceId = null, this.internalMonitor = t.getMonitor();
		}
		return nM(e, [
			{
				key: "receiveHandlerId",
				value: function(e) {
					this.sourceId = e;
				}
			},
			{
				key: "getHandlerId",
				value: function() {
					return this.sourceId;
				}
			},
			{
				key: "canDrag",
				value: function() {
					$(!rM, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
					try {
						return rM = !0, this.internalMonitor.canDragSource(this.sourceId);
					} finally {
						rM = !1;
					}
				}
			},
			{
				key: "isDragging",
				value: function() {
					if (!this.sourceId) return !1;
					$(!iM, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
					try {
						return iM = !0, this.internalMonitor.isDraggingSource(this.sourceId);
					} finally {
						iM = !1;
					}
				}
			},
			{
				key: "subscribeToStateChange",
				value: function(e, t) {
					return this.internalMonitor.subscribeToStateChange(e, t);
				}
			},
			{
				key: "isDraggingSource",
				value: function(e) {
					return this.internalMonitor.isDraggingSource(e);
				}
			},
			{
				key: "isOverTarget",
				value: function(e, t) {
					return this.internalMonitor.isOverTarget(e, t);
				}
			},
			{
				key: "getTargetIds",
				value: function() {
					return this.internalMonitor.getTargetIds();
				}
			},
			{
				key: "isSourcePublic",
				value: function() {
					return this.internalMonitor.isSourcePublic();
				}
			},
			{
				key: "getSourceId",
				value: function() {
					return this.internalMonitor.getSourceId();
				}
			},
			{
				key: "subscribeToOffsetChange",
				value: function(e) {
					return this.internalMonitor.subscribeToOffsetChange(e);
				}
			},
			{
				key: "canDragSource",
				value: function(e) {
					return this.internalMonitor.canDragSource(e);
				}
			},
			{
				key: "canDropOnTarget",
				value: function(e) {
					return this.internalMonitor.canDropOnTarget(e);
				}
			},
			{
				key: "getItemType",
				value: function() {
					return this.internalMonitor.getItemType();
				}
			},
			{
				key: "getItem",
				value: function() {
					return this.internalMonitor.getItem();
				}
			},
			{
				key: "getDropResult",
				value: function() {
					return this.internalMonitor.getDropResult();
				}
			},
			{
				key: "didDrop",
				value: function() {
					return this.internalMonitor.didDrop();
				}
			},
			{
				key: "getInitialClientOffset",
				value: function() {
					return this.internalMonitor.getInitialClientOffset();
				}
			},
			{
				key: "getInitialSourceClientOffset",
				value: function() {
					return this.internalMonitor.getInitialSourceClientOffset();
				}
			},
			{
				key: "getSourceClientOffset",
				value: function() {
					return this.internalMonitor.getSourceClientOffset();
				}
			},
			{
				key: "getClientOffset",
				value: function() {
					return this.internalMonitor.getClientOffset();
				}
			},
			{
				key: "getDifferenceFromInitialOffset",
				value: function() {
					return this.internalMonitor.getDifferenceFromInitialOffset();
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/utils/cloneWithRef.js
function sM(e, t) {
	typeof e == "function" ? e(t) : e.current = t;
}
function cM(e, t) {
	var n = e.ref;
	return $(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"), n ? (0, lM.cloneElement)(e, { ref: function(e) {
		sM(n, e), sM(t, e);
	} }) : (0, lM.cloneElement)(e, { ref: t });
}
var lM, uM = t((() => {
	lM = /* @__PURE__ */ n(W()), wO();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js
function dM(e) {
	if (typeof e.type != "string") {
		var t = e.type.displayName || e.type.name || "the component";
		throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`);
	}
}
function fM(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (!(0, mM.isValidElement)(t)) {
			var r = t;
			return e(r, n), r;
		}
		var i = t;
		return dM(i), cM(i, n ? function(t) {
			return e(t, n);
		} : e);
	};
}
function pM(e) {
	var t = {};
	return Object.keys(e).forEach(function(n) {
		var r = e[n];
		if (n.endsWith("Ref")) t[n] = e[n];
		else {
			var i = fM(r);
			t[n] = function() {
				return i;
			};
		}
	}), t;
}
var mM, hM = t((() => {
	mM = /* @__PURE__ */ n(W()), uM();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/utils/isRef.js
function gM(e) {
	return gM = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, gM(e);
}
function _M(e) {
	return e !== null && gM(e) === "object" && e.hasOwnProperty("current");
}
var vM = t((() => {}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/SourceConnector.js
function yM(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function bM(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function xM(e, t, n) {
	return t && bM(e.prototype, t), n && bM(e, n), e;
}
var SM, CM = t((() => {
	hM(), vM(), Pj(), SM = /*#__PURE__*/ function() {
		function e(t) {
			var n = this;
			yM(this, e), this.hooks = pM({
				dragSource: function(e, t) {
					n.clearDragSource(), n.dragSourceOptions = t || null, _M(e) ? n.dragSourceRef = e : n.dragSourceNode = e, n.reconnectDragSource();
				},
				dragPreview: function(e, t) {
					n.clearDragPreview(), n.dragPreviewOptions = t || null, _M(e) ? n.dragPreviewRef = e : n.dragPreviewNode = e, n.reconnectDragPreview();
				}
			}), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t;
		}
		return xM(e, [
			{
				key: "receiveHandlerId",
				value: function(e) {
					this.handlerId !== e && (this.handlerId = e, this.reconnect());
				}
			},
			{
				key: "reconnect",
				value: function() {
					this.reconnectDragSource(), this.reconnectDragPreview();
				}
			},
			{
				key: "reconnectDragSource",
				value: function() {
					var e = this.dragSource, t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
					if (t && this.disconnectDragSource(), this.handlerId) {
						if (!e) {
							this.lastConnectedDragSource = e;
							return;
						}
						t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions));
					}
				}
			},
			{
				key: "reconnectDragPreview",
				value: function() {
					var e = this.dragPreview, t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
					this.handlerId ? this.dragPreview && t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = e, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.disconnectDragPreview(), this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, e, this.dragPreviewOptions)) : this.disconnectDragPreview();
				}
			},
			{
				key: "didHandlerIdChange",
				value: function() {
					return this.lastConnectedHandlerId !== this.handlerId;
				}
			},
			{
				key: "didConnectedDragSourceChange",
				value: function() {
					return this.lastConnectedDragSource !== this.dragSource;
				}
			},
			{
				key: "didConnectedDragPreviewChange",
				value: function() {
					return this.lastConnectedDragPreview !== this.dragPreview;
				}
			},
			{
				key: "didDragSourceOptionsChange",
				value: function() {
					return !Nj(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
				}
			},
			{
				key: "didDragPreviewOptionsChange",
				value: function() {
					return !Nj(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
				}
			},
			{
				key: "disconnectDragSource",
				value: function() {
					this.dragSourceUnsubscribe &&= (this.dragSourceUnsubscribe(), void 0);
				}
			},
			{
				key: "disconnectDragPreview",
				value: function() {
					this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
				}
			},
			{
				key: "clearDragSource",
				value: function() {
					this.dragSourceNode = null, this.dragSourceRef = null;
				}
			},
			{
				key: "clearDragPreview",
				value: function() {
					this.dragPreviewNode = null, this.dragPreviewRef = null;
				}
			},
			{
				key: "connectTarget",
				get: function() {
					return this.dragSource;
				}
			},
			{
				key: "dragSourceOptions",
				get: function() {
					return this.dragSourceOptionsInternal;
				},
				set: function(e) {
					this.dragSourceOptionsInternal = e;
				}
			},
			{
				key: "dragPreviewOptions",
				get: function() {
					return this.dragPreviewOptionsInternal;
				},
				set: function(e) {
					this.dragPreviewOptionsInternal = e;
				}
			},
			{
				key: "dragSource",
				get: function() {
					return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
				}
			},
			{
				key: "dragPreview",
				get: function() {
					return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/internal/drag.js
function wM(e, t) {
	return DM(e) || EM(e, t) || TM();
}
function TM() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function EM(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function DM(e) {
	if (Array.isArray(e)) return e;
}
function OM(e) {
	return OM = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, OM(e);
}
function kM() {
	var e = Zj();
	return [(0, jM.useMemo)(function() {
		return new aM(e);
	}, [e]), (0, jM.useMemo)(function() {
		return new SM(e.getBackend());
	}, [e])];
}
function AM(e, t, n) {
	var r = Zj(), i = (0, jM.useMemo)(function() {
		return {
			beginDrag: function() {
				var n = e.current, r = n.begin, i = n.item;
				if (r) {
					var a = r(t);
					return $(a == null || OM(a) === "object", "dragSpec.begin() must either return an object, undefined, or null"), a || i || {};
				}
				return i || {};
			},
			canDrag: function() {
				return typeof e.current.canDrag == "boolean" ? e.current.canDrag : typeof e.current.canDrag == "function" ? e.current.canDrag(t) : !0;
			},
			isDragging: function(n, r) {
				var i = e.current.isDragging;
				return i ? i(t) : r === n.getSourceId();
			},
			endDrag: function() {
				var r = e.current.end;
				r && r(t.getItem(), t), n.reconnect();
			}
		};
	}, []);
	jj(function() {
		var a = wM(Yj(e.current.item.type, i, r), 2), o = a[0], s = a[1];
		return t.receiveHandlerId(o), n.receiveHandlerId(o), s;
	}, []);
}
var jM, MM = t((() => {
	jM = /* @__PURE__ */ n(W()), wO(), Xj(), $j(), oM(), CM(), Mj();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag.js
function NM(e, t) {
	return IM(e) || FM(e, t) || PM();
}
function PM() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function FM(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function IM(e) {
	if (Array.isArray(e)) return e;
}
function LM(e) {
	var t = (0, RM.useRef)(e);
	t.current = e, $(e.item != null, "item must be defined"), $(e.item.type != null, "item type must be defined");
	var n = NM(kM(), 2), r = n[0], i = n[1];
	AM(t, r, i);
	var a = Kj(r, t.current.collect || function() {
		return {};
	}, function() {
		return i.reconnect();
	}), o = (0, RM.useMemo)(function() {
		return i.hooks.dragSource();
	}, [i]), s = (0, RM.useMemo)(function() {
		return i.hooks.dragPreview();
	}, [i]);
	return jj(function() {
		i.dragSourceOptions = t.current.options || null, i.reconnect();
	}, [i]), jj(function() {
		i.dragPreviewOptions = t.current.previewOptions || null, i.reconnect();
	}, [i]), [
		a,
		o,
		s
	];
}
var RM, zM = t((() => {
	RM = /* @__PURE__ */ n(W()), wO(), qj(), Mj(), MM();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/TargetConnector.js
function BM(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function VM(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function HM(e, t, n) {
	return t && VM(e.prototype, t), n && VM(e, n), e;
}
var UM, WM = t((() => {
	Pj(), hM(), vM(), UM = /*#__PURE__*/ function() {
		function e(t) {
			var n = this;
			BM(this, e), this.hooks = pM({ dropTarget: function(e, t) {
				n.clearDropTarget(), n.dropTargetOptions = t, _M(e) ? n.dropTargetRef = e : n.dropTargetNode = e, n.reconnect();
			} }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t;
		}
		return HM(e, [
			{
				key: "reconnect",
				value: function() {
					var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
					e && this.disconnectDropTarget();
					var t = this.dropTarget;
					if (this.handlerId) {
						if (!t) {
							this.lastConnectedDropTarget = t;
							return;
						}
						e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions));
					}
				}
			},
			{
				key: "receiveHandlerId",
				value: function(e) {
					e !== this.handlerId && (this.handlerId = e, this.reconnect());
				}
			},
			{
				key: "didHandlerIdChange",
				value: function() {
					return this.lastConnectedHandlerId !== this.handlerId;
				}
			},
			{
				key: "didDropTargetChange",
				value: function() {
					return this.lastConnectedDropTarget !== this.dropTarget;
				}
			},
			{
				key: "didOptionsChange",
				value: function() {
					return !Nj(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
				}
			},
			{
				key: "disconnectDropTarget",
				value: function() {
					this.unsubscribeDropTarget &&= (this.unsubscribeDropTarget(), void 0);
				}
			},
			{
				key: "clearDropTarget",
				value: function() {
					this.dropTargetRef = null, this.dropTargetNode = null;
				}
			},
			{
				key: "connectTarget",
				get: function() {
					return this.dropTarget;
				}
			},
			{
				key: "dropTargetOptions",
				get: function() {
					return this.dropTargetOptionsInternal;
				},
				set: function(e) {
					this.dropTargetOptionsInternal = e;
				}
			},
			{
				key: "dropTarget",
				get: function() {
					return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
function GM(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function KM(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function qM(e, t, n) {
	return t && KM(e.prototype, t), n && KM(e, n), e;
}
var JM, YM, XM = t((() => {
	wO(), JM = !1, YM = /*#__PURE__*/ function() {
		function e(t) {
			GM(this, e), this.targetId = null, this.internalMonitor = t.getMonitor();
		}
		return qM(e, [
			{
				key: "receiveHandlerId",
				value: function(e) {
					this.targetId = e;
				}
			},
			{
				key: "getHandlerId",
				value: function() {
					return this.targetId;
				}
			},
			{
				key: "subscribeToStateChange",
				value: function(e, t) {
					return this.internalMonitor.subscribeToStateChange(e, t);
				}
			},
			{
				key: "canDrop",
				value: function() {
					if (!this.targetId) return !1;
					$(!JM, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
					try {
						return JM = !0, this.internalMonitor.canDropOnTarget(this.targetId);
					} finally {
						JM = !1;
					}
				}
			},
			{
				key: "isOver",
				value: function(e) {
					return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, e) : !1;
				}
			},
			{
				key: "getItemType",
				value: function() {
					return this.internalMonitor.getItemType();
				}
			},
			{
				key: "getItem",
				value: function() {
					return this.internalMonitor.getItem();
				}
			},
			{
				key: "getDropResult",
				value: function() {
					return this.internalMonitor.getDropResult();
				}
			},
			{
				key: "didDrop",
				value: function() {
					return this.internalMonitor.didDrop();
				}
			},
			{
				key: "getInitialClientOffset",
				value: function() {
					return this.internalMonitor.getInitialClientOffset();
				}
			},
			{
				key: "getInitialSourceClientOffset",
				value: function() {
					return this.internalMonitor.getInitialSourceClientOffset();
				}
			},
			{
				key: "getSourceClientOffset",
				value: function() {
					return this.internalMonitor.getSourceClientOffset();
				}
			},
			{
				key: "getClientOffset",
				value: function() {
					return this.internalMonitor.getClientOffset();
				}
			},
			{
				key: "getDifferenceFromInitialOffset",
				value: function() {
					return this.internalMonitor.getDifferenceFromInitialOffset();
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/internal/drop.js
function ZM(e, t) {
	return eN(e) || $M(e, t) || QM();
}
function QM() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function $M(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function eN(e) {
	if (Array.isArray(e)) return e;
}
function tN() {
	var e = Zj();
	return [(0, rN.useMemo)(function() {
		return new YM(e);
	}, [e]), (0, rN.useMemo)(function() {
		return new UM(e.getBackend());
	}, [e])];
}
function nN(e, t, n) {
	var r = Zj(), i = (0, rN.useMemo)(function() {
		return {
			canDrop: function() {
				var n = e.current.canDrop;
				return n ? n(t.getItem(), t) : !0;
			},
			hover: function() {
				var n = e.current.hover;
				n && n(t.getItem(), t);
			},
			drop: function() {
				var n = e.current.drop;
				if (n) return n(t.getItem(), t);
			}
		};
	}, [t]);
	jj(function() {
		var a = ZM(Jj(e.current.accept, i, r), 2), o = a[0], s = a[1];
		return t.receiveHandlerId(o), n.receiveHandlerId(o), s;
	}, [t, n]);
}
var rN, iN = t((() => {
	rN = /* @__PURE__ */ n(W()), Xj(), $j(), WM(), XM(), Mj();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop.js
function aN(e, t) {
	return cN(e) || sN(e, t) || oN();
}
function oN() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function sN(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function cN(e) {
	if (Array.isArray(e)) return e;
}
function lN(e) {
	var t = (0, uN.useRef)(e);
	t.current = e, $(e.accept != null, "accept must be defined");
	var n = aN(tN(), 2), r = n[0], i = n[1];
	nN(t, r, i);
	var a = Kj(r, t.current.collect || function() {
		return {};
	}, function() {
		return i.reconnect();
	}), o = (0, uN.useMemo)(function() {
		return i.hooks.dropTarget();
	}, [i]);
	return jj(function() {
		i.dropTargetOptions = e.options || null, i.reconnect();
	}, [e.options]), [a, o];
}
var uN, dN = t((() => {
	uN = /* @__PURE__ */ n(W()), wO(), qj(), Mj(), iN();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDragLayer.js
function fN(e, t) {
	return hN(e) || mN(e, t) || pN();
}
function pN() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function mN(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function hN(e) {
	if (Array.isArray(e)) return e;
}
function gN(e) {
	var t = Zj().getMonitor(), n = fN(zj(t, e), 2), r = n[0], i = n[1];
	return (0, _N.useEffect)(function() {
		return t.subscribeToOffsetChange(i);
	}), (0, _N.useEffect)(function() {
		return t.subscribeToStateChange(i);
	}), r;
}
var _N, vN = t((() => {
	_N = /* @__PURE__ */ n(W()), $j(), Vj();
})), yN = t((() => {
	zM(), dN(), vN();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/utils/js_utils.js
function bN(e) {
	return bN = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, bN(e);
}
function xN(e) {
	return typeof e == "function";
}
function SN() {}
function CN(e) {
	return bN(e) === "object" && e !== null;
}
function wN(e) {
	if (!CN(e)) return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
var TN = t((() => {}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/utils.js
function EN(e) {
	var t = e.current;
	return t == null ? null : t.decoratedRef ? t.decoratedRef.current : t;
}
function DN(e) {
	return e && e.prototype && typeof e.prototype.render == "function";
}
function ON(e) {
	return e && e.$$typeof && e.$$typeof.toString() === "Symbol(react.forward_ref)";
}
function kN(e) {
	return DN(e) || ON(e);
}
var AN = t((() => {}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/disposables.js
function jN(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function MN(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function NN(e, t, n) {
	return t && MN(e.prototype, t), n && MN(e, n), e;
}
var PN, FN, IN, LN = t((() => {
	TN(), PN = /*#__PURE__*/ function() {
		function e(t) {
			jN(this, e), this.isDisposed = !1, this.action = xN(t) ? t : SN;
		}
		return NN(e, [{
			key: "dispose",
			value: function() {
				this.isDisposed ||= (this.action(), !0);
			}
		}], [
			{
				key: "isDisposable",
				value: function(e) {
					return e && xN(e.dispose);
				}
			},
			{
				key: "_fixup",
				value: function(t) {
					return e.isDisposable(t) ? t : e.empty;
				}
			},
			{
				key: "create",
				value: function(t) {
					return new e(t);
				}
			}
		]), e;
	}(), PN.empty = { dispose: SN }, FN = /*#__PURE__*/ function() {
		function e() {
			jN(this, e), this.isDisposed = !1;
			var t = [...arguments];
			this.disposables = t;
		}
		return NN(e, [
			{
				key: "add",
				value: function(e) {
					this.isDisposed ? e.dispose() : this.disposables.push(e);
				}
			},
			{
				key: "remove",
				value: function(e) {
					var t = !1;
					if (!this.isDisposed) {
						var n = this.disposables.indexOf(e);
						n !== -1 && (t = !0, this.disposables.splice(n, 1), e.dispose());
					}
					return t;
				}
			},
			{
				key: "clear",
				value: function() {
					if (!this.isDisposed) {
						for (var e = this.disposables.length, t = Array(e), n = 0; n < e; n++) t[n] = this.disposables[n];
						this.disposables = [];
						for (var r = 0; r < e; r++) t[r].dispose();
					}
				}
			},
			{
				key: "dispose",
				value: function() {
					if (!this.isDisposed) {
						this.isDisposed = !0;
						for (var e = this.disposables.length, t = Array(e), n = 0; n < e; n++) t[n] = this.disposables[n];
						this.disposables = [];
						for (var r = 0; r < e; r++) t[r].dispose();
					}
				}
			}
		]), e;
	}(), IN = /*#__PURE__*/ function() {
		function e() {
			jN(this, e), this.isDisposed = !1;
		}
		return NN(e, [
			{
				key: "getDisposable",
				value: function() {
					return this.current;
				}
			},
			{
				key: "setDisposable",
				value: function(e) {
					var t = this.isDisposed;
					if (!t) {
						var n = this.current;
						this.current = e, n && n.dispose();
					}
					t && e && e.dispose();
				}
			},
			{
				key: "dispose",
				value: function() {
					if (!this.isDisposed) {
						this.isDisposed = !0;
						var e = this.current;
						this.current = void 0, e && e.dispose();
					}
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/decorateHandler.js
function RN(e) {
	return RN = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, RN(e);
}
function zN(e, t) {
	return HN(e) || VN(e, t) || BN();
}
function BN() {
	throw TypeError("Invalid attempt to destructure non-iterable instance");
}
function VN(e, t) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function HN(e) {
	if (Array.isArray(e)) return e;
}
function UN(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function WN(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function GN(e, t, n) {
	return t && WN(e.prototype, t), n && WN(e, n), e;
}
function KN(e, t) {
	return t && (RN(t) === "object" || typeof t == "function") ? t : qN(e);
}
function qN(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function JN(e) {
	return JN = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, JN(e);
}
function YN(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), t && XN(e, t);
}
function XN(e, t) {
	return XN = Object.setPrototypeOf || function(e, t) {
		return e.__proto__ = t, e;
	}, XN(e, t);
}
function ZN(e) {
	var t = e.DecoratedComponent, n = e.createHandler, r = e.createMonitor, i = e.createConnector, a = e.registerHandler, o = e.containerDisplayName, s = e.getType, c = e.collect, l = e.options.arePropsEqual, u = l === void 0 ? Nj : l, d = t, f = t.displayName || t.name || "Component", p = /*#__PURE__*/ function(e) {
		YN(t, e);
		function t(e) {
			var n;
			return UN(this, t), n = KN(this, JN(t).call(this, e)), n.decoratedRef = QN.createRef(), n.handleChange = function() {
				var e = n.getCurrentState();
				Nj(e, n.state) || n.setState(e);
			}, n.disposable = new IN(), n.receiveProps(e), n.dispose(), n;
		}
		return GN(t, [
			{
				key: "getHandlerId",
				value: function() {
					return this.handlerId;
				}
			},
			{
				key: "getDecoratedComponentInstance",
				value: function() {
					return $(this.decoratedRef.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"), this.decoratedRef.current;
				}
			},
			{
				key: "shouldComponentUpdate",
				value: function(e, t) {
					return !u(e, this.props) || !Nj(t, this.state);
				}
			},
			{
				key: "componentDidMount",
				value: function() {
					this.disposable = new IN(), this.currentType = void 0, this.receiveProps(this.props), this.handleChange();
				}
			},
			{
				key: "componentDidUpdate",
				value: function(e) {
					u(this.props, e) || (this.receiveProps(this.props), this.handleChange());
				}
			},
			{
				key: "componentWillUnmount",
				value: function() {
					this.dispose();
				}
			},
			{
				key: "receiveProps",
				value: function(e) {
					this.handler && (this.handler.receiveProps(e), this.receiveType(s(e)));
				}
			},
			{
				key: "receiveType",
				value: function(e) {
					if (!(!this.handlerMonitor || !this.manager || !this.handlerConnector) && e !== this.currentType) {
						this.currentType = e;
						var t = zN(a(e, this.handler, this.manager), 2), n = t[0], r = t[1];
						this.handlerId = n, this.handlerMonitor.receiveHandlerId(n), this.handlerConnector.receiveHandlerId(n);
						var i = this.manager.getMonitor().subscribeToStateChange(this.handleChange, { handlerIds: [n] });
						this.disposable.setDisposable(new FN(new PN(i), new PN(r)));
					}
				}
			},
			{
				key: "dispose",
				value: function() {
					this.disposable.dispose(), this.handlerConnector && this.handlerConnector.receiveHandlerId(null);
				}
			},
			{
				key: "getCurrentState",
				value: function() {
					return this.handlerConnector ? c(this.handlerConnector.hooks, this.handlerMonitor, this.props) : {};
				}
			},
			{
				key: "render",
				value: function() {
					var e = this;
					return QN.createElement(lj.Consumer, null, function(t) {
						var n = t.dragDropManager;
						return e.receiveDragDropManager(n), typeof requestAnimationFrame < "u" && requestAnimationFrame(function() {
							return e.handlerConnector.reconnect();
						}), QN.createElement(d, Object.assign({}, e.props, e.getCurrentState(), { ref: kN(d) ? e.decoratedRef : null }));
					});
				}
			},
			{
				key: "receiveDragDropManager",
				value: function(e) {
					this.manager === void 0 && ($(e !== void 0, "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", f, f), e !== void 0 && (this.manager = e, this.handlerMonitor = r(e), this.handlerConnector = i(e.getBackend()), this.handler = n(this.handlerMonitor, this.decoratedRef)));
				}
			}
		]), t;
	}(QN.Component);
	return p.DecoratedComponent = t, p.displayName = `${o}(${f})`, (0, $N.default)(p, t);
}
var QN, $N, eP = t((() => {
	QN = /* @__PURE__ */ n(W()), Pj(), wO(), $N = /* @__PURE__ */ n(wt()), RP(), LN(), AN();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/utils/isValidType.js
function tP(e) {
	return tP = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, tP(e);
}
function nP(e, t) {
	return typeof e == "string" || tP(e) === "symbol" || !!t && Array.isArray(e) && e.every(function(e) {
		return nP(e, !1);
	});
}
var rP = t((() => {}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js
function iP(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function aP(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function oP(e, t, n) {
	return t && aP(e.prototype, t), n && aP(e, n), e;
}
function sP(e) {
	return Object.keys(e).forEach(function(t) {
		$(cP.indexOf(t) > -1, "Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected \"%s\" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", cP.join(", "), t), $(typeof e[t] == "function", "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t]);
	}), lP.forEach(function(t) {
		$(typeof e[t] == "function", "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t]);
	}), function(t, n) {
		return new uP(e, t, n);
	};
}
var cP, lP, uP, dP = t((() => {
	wO(), AN(), cP = [
		"canDrag",
		"beginDrag",
		"isDragging",
		"endDrag"
	], lP = ["beginDrag"], uP = /*#__PURE__*/ function() {
		function e(t, n, r) {
			var i = this;
			iP(this, e), this.props = null, this.beginDrag = function() {
				if (i.props) return i.spec.beginDrag(i.props, i.monitor, i.ref.current);
			}, this.spec = t, this.monitor = n, this.ref = r;
		}
		return oP(e, [
			{
				key: "receiveProps",
				value: function(e) {
					this.props = e;
				}
			},
			{
				key: "canDrag",
				value: function() {
					return this.props ? this.spec.canDrag ? this.spec.canDrag(this.props, this.monitor) : !0 : !1;
				}
			},
			{
				key: "isDragging",
				value: function(e, t) {
					return this.props ? this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId() : !1;
				}
			},
			{
				key: "endDrag",
				value: function() {
					this.props && this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, EN(this.ref));
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/DragSource.js
function fP(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = e;
	typeof e != "function" && ($(nP(e), "Expected \"type\" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", e), i = function() {
		return e;
	}), $(wN(t), "Expected \"spec\" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t);
	var a = sP(t);
	return $(typeof n == "function", "Expected \"collect\" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", n), $(wN(r), "Expected \"options\" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", n), function(e) {
		return ZN({
			containerDisplayName: "DragSource",
			createHandler: a,
			registerHandler: Yj,
			createConnector: function(e) {
				return new SM(e);
			},
			createMonitor: function(e) {
				return new aM(e);
			},
			DecoratedComponent: e,
			getType: i,
			collect: n,
			options: r
		});
	};
}
var pP = t((() => {
	wO(), TN(), AN(), eP(), Xj(), oM(), CM(), rP(), dP();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js
function mP(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function hP(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function gP(e, t, n) {
	return t && hP(e.prototype, t), n && hP(e, n), e;
}
function _P(e) {
	return Object.keys(e).forEach(function(t) {
		$(vP.indexOf(t) > -1, "Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected \"%s\" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", vP.join(", "), t), $(typeof e[t] == "function", "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", t, t, e[t]);
	}), function(t, n) {
		return new yP(e, t, n);
	};
}
var vP, yP, bP = t((() => {
	wO(), AN(), vP = [
		"canDrop",
		"hover",
		"drop"
	], yP = /*#__PURE__*/ function() {
		function e(t, n, r) {
			mP(this, e), this.props = null, this.spec = t, this.monitor = n, this.ref = r;
		}
		return gP(e, [
			{
				key: "receiveProps",
				value: function(e) {
					this.props = e;
				}
			},
			{
				key: "receiveMonitor",
				value: function(e) {
					this.monitor = e;
				}
			},
			{
				key: "canDrop",
				value: function() {
					return this.spec.canDrop ? this.spec.canDrop(this.props, this.monitor) : !0;
				}
			},
			{
				key: "hover",
				value: function() {
					this.spec.hover && this.spec.hover(this.props, this.monitor, EN(this.ref));
				}
			},
			{
				key: "drop",
				value: function() {
					if (this.spec.drop) return this.spec.drop(this.props, this.monitor, this.ref.current);
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/DropTarget.js
function xP(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = e;
	typeof e != "function" && ($(nP(e, !0), "Expected \"type\" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", e), i = function() {
		return e;
	}), $(wN(t), "Expected \"spec\" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", t);
	var a = _P(t);
	return $(typeof n == "function", "Expected \"collect\" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", n), $(wN(r), "Expected \"options\" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", n), function(e) {
		return ZN({
			containerDisplayName: "DropTarget",
			createHandler: a,
			registerHandler: Jj,
			createMonitor: function(e) {
				return new YM(e);
			},
			createConnector: function(e) {
				return new UM(e);
			},
			DecoratedComponent: e,
			getType: i,
			collect: n,
			options: r
		});
	};
}
var SP = t((() => {
	wO(), TN(), Xj(), rP(), WM(), XM(), AN(), eP(), bP();
}));
//#endregion
//#region node_modules/react-dnd/dist/esm/decorators/DragLayer.js
function CP(e) {
	return CP = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, CP(e);
}
function wP(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function TP(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function EP(e, t, n) {
	return t && TP(e.prototype, t), n && TP(e, n), e;
}
function DP(e, t) {
	return t && (CP(t) === "object" || typeof t == "function") ? t : OP(e);
}
function OP(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function kP(e) {
	return kP = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, kP(e);
}
function AP(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), t && jP(e, t);
}
function jP(e, t) {
	return jP = Object.setPrototypeOf || function(e, t) {
		return e.__proto__ = t, e;
	}, jP(e, t);
}
function MP(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return $(typeof e == "function", "Expected \"collect\" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ", "Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer", e), $(wN(t), "Expected \"options\" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer", t), function(n) {
		var r = n, i = t.arePropsEqual, a = i === void 0 ? Nj : i, o = r.displayName || r.name || "Component", s = /*#__PURE__*/ function(t) {
			AP(n, t);
			function n() {
				var e;
				return wP(this, n), e = DP(this, kP(n).apply(this, arguments)), e.isCurrentlyMounted = !1, e.ref = NP.createRef(), e.handleChange = function() {
					if (e.isCurrentlyMounted) {
						var t = e.getCurrentState();
						Nj(t, e.state) || e.setState(t);
					}
				}, e;
			}
			return EP(n, [
				{
					key: "getDecoratedComponentInstance",
					value: function() {
						return $(this.ref.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"), this.ref.current;
					}
				},
				{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						return !a(e, this.props) || !Nj(t, this.state);
					}
				},
				{
					key: "componentDidMount",
					value: function() {
						this.isCurrentlyMounted = !0, this.handleChange();
					}
				},
				{
					key: "componentWillUnmount",
					value: function() {
						this.isCurrentlyMounted = !1, this.unsubscribeFromOffsetChange &&= (this.unsubscribeFromOffsetChange(), void 0), this.unsubscribeFromStateChange &&= (this.unsubscribeFromStateChange(), void 0);
					}
				},
				{
					key: "render",
					value: function() {
						var e = this;
						return NP.createElement(lj.Consumer, null, function(t) {
							var n = t.dragDropManager;
							return n === void 0 || (e.receiveDragDropManager(n), !e.isCurrentlyMounted) ? null : NP.createElement(r, Object.assign({}, e.props, e.state, { ref: kN(r) ? e.ref : null }));
						});
					}
				},
				{
					key: "receiveDragDropManager",
					value: function(e) {
						if (this.manager === void 0) {
							this.manager = e, $(CP(e) === "object", "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", o, o);
							var t = this.manager.getMonitor();
							this.unsubscribeFromOffsetChange = t.subscribeToOffsetChange(this.handleChange), this.unsubscribeFromStateChange = t.subscribeToStateChange(this.handleChange);
						}
					}
				},
				{
					key: "getCurrentState",
					value: function() {
						return this.manager ? e(this.manager.getMonitor(), this.props) : {};
					}
				}
			]), n;
		}(NP.Component);
		return s.displayName = `DragLayer(${o})`, s.DecoratedComponent = n, (0, PP.default)(s, n);
	};
}
var NP, PP, FP = t((() => {
	NP = /* @__PURE__ */ n(W()), Pj(), PP = /* @__PURE__ */ n(wt()), wO(), RP(), TN(), AN();
})), IP = t((() => {
	pP(), SP(), FP();
})), LP = /* @__PURE__ */ r({
	DndContext: () => lj,
	DndProvider: () => Cj,
	DragLayer: () => MP,
	DragPreviewImage: () => Dj,
	DragSource: () => fP,
	DropTarget: () => xP,
	createDndContext: () => sj,
	useDrag: () => LM,
	useDragLayer: () => gN,
	useDrop: () => lN
}), RP = t((() => {
	kj(), yN(), IP();
})), zP, BP = t((() => {
	zP = (function(e, t) {
		return {
			_isMBTransition: !0,
			event: e,
			check: t
		};
	});
})), VP, HP, UP, WP = t((() => {
	BP(), VP = zP("touchstart", function(e) {
		return e.touches != null;
	}), HP = zP("dragstart", function(e) {
		return e.type ? e.type.indexOf("drag") !== -1 || e.type.indexOf("drop") !== -1 : !1;
	}), UP = zP("mousedown", function(e) {
		return e.type ? e.type.indexOf("touch") === -1 && e.type.indexOf("mouse") !== -1 : !1;
	});
}));
//#endregion
//#region node_modules/dnd-multi-backend/dist/esm/objectAssign.js
function GP(e) {
	return [...arguments].slice(1).forEach(function(t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}), e;
}
var KP = t((() => {}));
//#endregion
//#region node_modules/dnd-multi-backend/dist/esm/MultiBackend.js
function qP(e) {
	return XP(e) || YP(e) || QP(e) || JP();
}
function JP() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function YP(e) {
	if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function XP(e) {
	if (Array.isArray(e)) return $P(e);
}
function ZP(e) {
	if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
		if (Array.isArray(e) || (e = QP(e))) {
			var t = 0, n = function() {};
			return {
				s: n,
				n: function() {
					return t >= e.length ? { done: !0 } : {
						done: !1,
						value: e[t++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: n
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var r, i = !0, a = !1, o;
	return {
		s: function() {
			r = e[Symbol.iterator]();
		},
		n: function() {
			var e = r.next();
			return i = e.done, e;
		},
		e: function(e) {
			a = !0, o = e;
		},
		f: function() {
			try {
				!i && r.return != null && r.return();
			} finally {
				if (a) throw o;
			}
		}
	};
}
function QP(e, t) {
	if (e) {
		if (typeof e == "string") return $P(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $P(e, t);
	}
}
function $P(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function eF(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
var tF, nF, rF, iF = t((() => {
	KP(), tF = function e() {
		var t = this;
		eF(this, e), this.register = function(e) {
			t.previews.push(e);
		}, this.unregister = function(e) {
			for (var n; (n = t.previews.indexOf(e)) !== -1;) t.previews.splice(n, 1);
		}, this.backendChanged = function(e) {
			var n = ZP(t.previews), r;
			try {
				for (n.s(); !(r = n.n()).done;) r.value.backendChanged(e);
			} catch (e) {
				n.e(e);
			} finally {
				n.f();
			}
		}, this.previews = [];
	}, nF = new tF(), rF = function e(t, n, r) {
		var i = this;
		eF(this, e), this.setup = function() {
			if (!(typeof window > "u")) {
				if (i.constructor.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
				i.constructor.isSetUp = !0, i.addEventListeners(window), i.backends[i.current].instance.setup();
			}
		}, this.teardown = function() {
			typeof window > "u" || (i.constructor.isSetUp = !1, i.removeEventListeners(window), i.backends[i.current].instance.teardown());
		}, this.connectDragSource = function() {
			var e = [...arguments];
			return i.connectBackend("connectDragSource", e);
		}, this.connectDragPreview = function() {
			var e = [...arguments];
			return i.connectBackend("connectDragPreview", e);
		}, this.connectDropTarget = function() {
			var e = [...arguments];
			return i.connectBackend("connectDropTarget", e);
		}, this.previewEnabled = function() {
			return i.backends[i.current].preview;
		}, this.addEventListeners = function(e) {
			i.backends.forEach(function(t) {
				t.transition && e.addEventListener(t.transition.event, i.backendSwitcher, !0);
			});
		}, this.removeEventListeners = function(e) {
			i.backends.forEach(function(t) {
				t.transition && e.removeEventListener(t.transition.event, i.backendSwitcher, !0);
			});
		}, this.backendSwitcher = function(e) {
			var t = i.current, n = 0;
			if (i.backends.some(function(t) {
				return n !== i.current && t.transition && t.transition.check(e) ? (i.current = n, !0) : (n += 1, !1);
			}), i.current !== t) {
				i.backends[t].instance.teardown(), Object.keys(i.nodes).forEach(function(e) {
					var t = i.nodes[e];
					t.handler(), t.handler = i.callBackend(t.func, t.args);
				}), nF.backendChanged(i);
				var r = i.backends[i.current];
				if (r.instance.setup(), r.skipDispatchOnTransition) return;
				var a = null;
				try {
					a = new e.constructor(e.type, e);
				} catch {
					a = document.createEvent("Event"), a.initEvent(e.type, e.bubbles, e.cancelable);
				}
				e.target.dispatchEvent(a);
			}
		}, this.callBackend = function(e, t) {
			var n;
			return (n = i.backends[i.current].instance)[e].apply(n, qP(t));
		}, this.connectBackend = function(e, t) {
			var n = `${e}_${t[0]}`, r = i.callBackend(e, t);
			return i.nodes[n] = {
				func: e,
				args: t,
				handler: r
			}, function() {
				var e, t = (e = i.nodes[n]).handler.apply(e, arguments);
				return delete i.nodes[n], t;
			};
		};
		var a = GP({ backends: [] }, r || {});
		if (a.backends.length < 1) throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
		this.current = 0, this.backends = [], a.backends.forEach(function(e) {
			if (!e.backend) throw Error(`You must specify a 'backend' property in your Backend entry: ${e}`);
			var r = e.transition;
			if (r && !r._isMBTransition) throw Error(`You must specify a valid 'transition' property (either undefined or the return of 'createTransition') in your Backend entry: ${e}`);
			i.backends.push({
				instance: e.backend(t, n, e.options),
				preview: e.preview || !1,
				transition: r,
				skipDispatchOnTransition: !!e.skipDispatchOnTransition
			});
		}), this.nodes = {};
	};
})), aF = /* @__PURE__ */ r({
	HTML5DragTransition: () => HP,
	MouseTransition: () => UP,
	MultiBackend: () => rF,
	PreviewManager: () => nF,
	TouchTransition: () => VP,
	createTransition: () => zP,
	default: () => oF
}), oF, sF = t((() => {
	WP(), BP(), iF(), oF = (function(e, t, n) {
		return new rF(e, t, n);
	});
})), cF, lF, uF, dF, fF, pF, mF = t((() => {
	cF = /* @__PURE__ */ n(W()), lF = /* @__PURE__ */ n(ht()), RP(), uF = cF.createContext(), dF = function(e) {
		var t = `translate(${e.x}px, ${e.y}px)`;
		return {
			pointerEvents: "none",
			position: "fixed",
			top: 0,
			left: 0,
			transform: t,
			WebkitTransform: t
		};
	}, fF = function(e) {
		var t = gN(function(e) {
			return {
				currentOffset: e.getSourceClientOffset(),
				isDragging: e.isDragging(),
				itemType: e.getItemType(),
				item: e.getItem()
			};
		});
		if (!t.isDragging || t.currentOffset === null) return null;
		var n = {
			itemType: t.itemType,
			item: t.item,
			style: dF(t.currentOffset)
		}, r = e.children && typeof e.children == "function" ? e.children(n) : e.children ? e.children : e.generator(n);
		return /*#__PURE__*/ cF.createElement(uF.Provider, { value: n }, r);
	}, fF.propTypes = {
		generator: lF.default.func,
		children: lF.default.oneOfType([lF.default.node, lF.default.func])
	}, pF = uF;
}));
//#endregion
//#region node_modules/react-dnd-multi-backend/dist/esm/Preview.js
function hF(e, t) {
	return bF(e) || yF(e, t) || _F(e, t) || gF();
}
function gF() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _F(e, t) {
	if (e) {
		if (typeof e == "string") return vF(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vF(e, t);
	}
}
function vF(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function yF(e, t) {
	if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function bF(e) {
	if (Array.isArray(e)) return e;
}
var xF, SF, CF = t((() => {
	xF = /* @__PURE__ */ n(W()), mF(), sF(), SF = function(e) {
		var t = hF((0, xF.useState)(!1), 2), n = t[0], r = t[1];
		return (0, xF.useEffect)(function() {
			var e = { backendChanged: function(e) {
				r(e.previewEnabled());
			} };
			return nF.register(e), function() {
				nF.unregister(e);
			};
		}), n ? /*#__PURE__*/ xF.createElement(fF, e) : null;
	}, SF.Context = pF, SF.propTypes = fF.propTypes;
})), wF = /* @__PURE__ */ r({
	HTML5DragTransition: () => HP,
	MouseTransition: () => UP,
	Preview: () => SF,
	TouchTransition: () => VP,
	createTransition: () => zP,
	default: () => oF
}), TF = t((() => {
	sF(), CF();
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js
function EF(e) {
	var t = null;
	return function() {
		return t ??= e(), t;
	};
}
function DF(e, t) {
	return e.filter(function(e) {
		return e !== t;
	});
}
function OF(e, t) {
	var n = /* @__PURE__ */ new Set(), r = function(e) {
		return n.add(e);
	};
	e.forEach(r), t.forEach(r);
	var i = [];
	return n.forEach(function(e) {
		return i.push(e);
	}), i;
}
var kF = t((() => {}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js
function AF(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function jF(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function MF(e, t, n) {
	return t && jF(e.prototype, t), n && jF(e, n), e;
}
var NF, PF = t((() => {
	kF(), NF = /*#__PURE__*/ function() {
		function e(t) {
			AF(this, e), this.entered = [], this.isNodeInDocument = t;
		}
		return MF(e, [
			{
				key: "enter",
				value: function(e) {
					var t = this, n = this.entered.length, r = function(n) {
						return t.isNodeInDocument(n) && (!n.contains || n.contains(e));
					};
					return this.entered = OF(this.entered.filter(r), [e]), n === 0 && this.entered.length > 0;
				}
			},
			{
				key: "leave",
				value: function(e) {
					var t = this.entered.length;
					return this.entered = DF(this.entered.filter(this.isNodeInDocument), e), t > 0 && this.entered.length === 0;
				}
			},
			{
				key: "reset",
				value: function() {
					this.entered = [];
				}
			}
		]), e;
	}();
})), FF, IF, LF = t((() => {
	kF(), FF = EF(function() {
		return /firefox/i.test(navigator.userAgent);
	}), IF = EF(function() {
		return !!window.safari;
	});
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js
function RF(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function zF(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function BF(e, t, n) {
	return t && zF(e.prototype, t), n && zF(e, n), e;
}
var VF, HF = t((() => {
	VF = /*#__PURE__*/ function() {
		function e(t, n) {
			RF(this, e);
			for (var r = t.length, i = [], a = 0; a < r; a++) i.push(a);
			i.sort(function(e, n) {
				return t[e] < t[n] ? -1 : 1;
			});
			for (var o = [], s = [], c = [], l, u, d = 0; d < r - 1; d++) l = t[d + 1] - t[d], u = n[d + 1] - n[d], s.push(l), o.push(u), c.push(u / l);
			for (var f = [c[0]], p = 0; p < s.length - 1; p++) {
				var m = c[p], h = c[p + 1];
				if (m * h <= 0) f.push(0);
				else {
					l = s[p];
					var g = s[p + 1], _ = l + g;
					f.push(3 * _ / ((_ + g) / m + (_ + l) / h));
				}
			}
			f.push(c[c.length - 1]);
			for (var v = [], y = [], b, x = 0; x < f.length - 1; x++) {
				b = c[x];
				var S = f[x], C = 1 / s[x], w = S + f[x + 1] - b - b;
				v.push((b - S - w) * C), y.push(w * C * C);
			}
			this.xs = t, this.ys = n, this.c1s = f, this.c2s = v, this.c3s = y;
		}
		return BF(e, [{
			key: "interpolate",
			value: function(e) {
				var t = this.xs, n = this.ys, r = this.c1s, i = this.c2s, a = this.c3s, o = t.length - 1;
				if (e === t[o]) return n[o];
				for (var s = 0, c = a.length - 1, l; s <= c;) {
					l = Math.floor(.5 * (s + c));
					var u = t[l];
					if (u < e) s = l + 1;
					else if (u > e) c = l - 1;
					else return n[l];
				}
				o = Math.max(0, c);
				var d = e - t[o], f = d * d;
				return n[o] + r[o] * d + i[o] * f + a[o] * d * f;
			}
		}]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js
function UF(e) {
	var t = e.nodeType === JF ? e : e.parentElement;
	if (!t) return null;
	var n = t.getBoundingClientRect(), r = n.top;
	return {
		x: n.left,
		y: r
	};
}
function WF(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
function GF(e) {
	return e.nodeName === "IMG" && (FF() || !document.documentElement.contains(e));
}
function KF(e, t, n, r) {
	var i = e ? t.width : n, a = e ? t.height : r;
	return IF() && e && (a /= window.devicePixelRatio, i /= window.devicePixelRatio), {
		dragPreviewWidth: i,
		dragPreviewHeight: a
	};
}
function qF(e, t, n, r, i) {
	var a = GF(t), o = UF(a ? e : t), s = {
		x: n.x - o.x,
		y: n.y - o.y
	}, c = e.offsetWidth, l = e.offsetHeight, u = r.anchorX, d = r.anchorY, f = KF(a, t, c, l), p = f.dragPreviewWidth, m = f.dragPreviewHeight, h = function() {
		var e = new VF([
			0,
			.5,
			1
		], [
			s.y,
			s.y / l * m,
			s.y + m - l
		]).interpolate(d);
		return IF() && a && (e += (window.devicePixelRatio - 1) * m), e;
	}, g = function() {
		return new VF([
			0,
			.5,
			1
		], [
			s.x,
			s.x / c * p,
			s.x + p - c
		]).interpolate(u);
	}, _ = i.offsetX, v = i.offsetY, y = _ === 0 || _, b = v === 0 || v;
	return {
		x: y ? _ : g(),
		y: b ? v : h()
	};
}
var JF, YF = t((() => {
	LF(), HF(), JF = 1;
})), XF = /* @__PURE__ */ r({
	FILE: () => ZF,
	TEXT: () => $F,
	URL: () => QF
}), ZF, QF, $F, eI = t((() => {
	ZF = "__NATIVE_FILE__", QF = "__NATIVE_URL__", $F = "__NATIVE_TEXT__";
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js
function tI(e, t, n) {
	return t.reduce(function(t, n) {
		return t || e.getData(n);
	}, "") ?? n;
}
var nI = t((() => {}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js
function rI(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var iI, aI, oI = t((() => {
	eI(), nI(), aI = (iI = {}, rI(iI, ZF, {
		exposeProperties: {
			files: function(e) {
				return Array.prototype.slice.call(e.files);
			},
			items: function(e) {
				return e.items;
			}
		},
		matchesTypes: ["Files"]
	}), rI(iI, QF, {
		exposeProperties: { urls: function(e, t) {
			return tI(e, t, "").split("\n");
		} },
		matchesTypes: ["Url", "text/uri-list"]
	}), rI(iI, $F, {
		exposeProperties: { text: function(e, t) {
			return tI(e, t, "");
		} },
		matchesTypes: ["Text", "text/plain"]
	}), iI);
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js
function sI(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function cI(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function lI(e, t, n) {
	return t && cI(e.prototype, t), n && cI(e, n), e;
}
var uI, dI = t((() => {
	uI = /*#__PURE__*/ function() {
		function e(t) {
			sI(this, e), this.config = t, this.item = {}, this.initializeExposedProperties();
		}
		return lI(e, [
			{
				key: "initializeExposedProperties",
				value: function() {
					var e = this;
					Object.keys(this.config.exposeProperties).forEach(function(t) {
						Object.defineProperty(e.item, t, {
							configurable: !0,
							enumerable: !0,
							get: function() {
								return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`), null;
							}
						});
					});
				}
			},
			{
				key: "loadDataTransfer",
				value: function(e) {
					var t = this;
					if (e) {
						var n = {};
						Object.keys(this.config.exposeProperties).forEach(function(r) {
							n[r] = {
								value: t.config.exposeProperties[r](e, t.config.matchesTypes),
								configurable: !0,
								enumerable: !0
							};
						}), Object.defineProperties(this.item, n);
					}
				}
			},
			{
				key: "canDrag",
				value: function() {
					return !0;
				}
			},
			{
				key: "beginDrag",
				value: function() {
					return this.item;
				}
			},
			{
				key: "isDragging",
				value: function(e, t) {
					return t === e.getSourceId();
				}
			},
			{
				key: "endDrag",
				value: function() {}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js
function fI(e, t) {
	var n = new uI(aI[e]);
	return n.loadDataTransfer(t), n;
}
function pI(e) {
	if (!e) return null;
	var t = Array.prototype.slice.call(e.types || []);
	return Object.keys(aI).filter(function(e) {
		return aI[e].matchesTypes.some(function(e) {
			return t.indexOf(e) > -1;
		});
	})[0] || null;
}
var mI = t((() => {
	oI(), dI();
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js
function hI(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function gI(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function _I(e, t, n) {
	return t && gI(e.prototype, t), n && gI(e, n), e;
}
var vI, yI = t((() => {
	vI = /*#__PURE__*/ function() {
		function e(t) {
			hI(this, e), this.globalContext = t;
		}
		return _I(e, [{
			key: "window",
			get: function() {
				if (this.globalContext) return this.globalContext;
				if (typeof window < "u") return window;
			}
		}, {
			key: "document",
			get: function() {
				if (this.window) return this.window.document;
			}
		}]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js
function bI(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xI(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bI(Object(n), !0).forEach(function(t) {
			SI(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bI(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function SI(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function CI(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function wI(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function TI(e, t, n) {
	return t && wI(e.prototype, t), n && wI(e, n), e;
}
var EI, DI = t((() => {
	PF(), LF(), YF(), mI(), eI(), yI(), EI = /*#__PURE__*/ function() {
		function e(t, n) {
			var r = this;
			CI(this, e), this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.getSourceClientOffset = function(e) {
				return UF(r.sourceNodes.get(e));
			}, this.endDragNativeItem = function() {
				r.isDraggingNativeItem() && (r.actions.endDrag(), r.registry.removeSource(r.currentNativeHandle), r.currentNativeHandle = null, r.currentNativeSource = null);
			}, this.isNodeInDocument = function(e) {
				return r.document && r.document.body && document.body.contains(e);
			}, this.endDragIfSourceWasRemovedFromDOM = function() {
				var e = r.currentDragSourceNode;
				r.isNodeInDocument(e) || r.clearCurrentDragSourceNode() && r.actions.endDrag();
			}, this.handleTopDragStartCapture = function() {
				r.clearCurrentDragSourceNode(), r.dragStartSourceIds = [];
			}, this.handleTopDragStart = function(e) {
				if (!e.defaultPrevented) {
					var t = r.dragStartSourceIds;
					r.dragStartSourceIds = null;
					var n = WF(e);
					r.monitor.isDragging() && r.actions.endDrag(), r.actions.beginDrag(t || [], {
						publishSource: !1,
						getSourceClientOffset: r.getSourceClientOffset,
						clientOffset: n
					});
					var i = e.dataTransfer, a = pI(i);
					if (r.monitor.isDragging()) {
						if (i && typeof i.setDragImage == "function") {
							var o = r.monitor.getSourceId(), s = r.sourceNodes.get(o), c = r.sourcePreviewNodes.get(o) || s;
							if (c) {
								var l = r.getCurrentSourcePreviewNodeOptions(), u = l.anchorX, d = l.anchorY, f = l.offsetX, p = l.offsetY, m = qF(s, c, n, {
									anchorX: u,
									anchorY: d
								}, {
									offsetX: f,
									offsetY: p
								});
								i.setDragImage(c, m.x, m.y);
							}
						}
						try {
							i.setData("application/json", {});
						} catch {}
						r.setCurrentDragSourceNode(e.target), r.getCurrentSourcePreviewNodeOptions().captureDraggingState ? r.actions.publishDragSource() : setTimeout(function() {
							return r.actions.publishDragSource();
						}, 0);
					} else if (a) r.beginDragNativeItem(a);
					else if (i && !i.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
					else e.preventDefault();
				}
			}, this.handleTopDragEndCapture = function() {
				r.clearCurrentDragSourceNode() && r.actions.endDrag();
			}, this.handleTopDragEnterCapture = function(e) {
				if (r.dragEnterTargetIds = [], !(!r.enterLeaveCounter.enter(e.target) || r.monitor.isDragging())) {
					var t = e.dataTransfer, n = pI(t);
					n && r.beginDragNativeItem(n, t);
				}
			}, this.handleTopDragEnter = function(e) {
				var t = r.dragEnterTargetIds;
				r.dragEnterTargetIds = [], r.monitor.isDragging() && (r.altKeyPressed = e.altKey, FF() || r.actions.hover(t, { clientOffset: WF(e) }), t.some(function(e) {
					return r.monitor.canDropOnTarget(e);
				}) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = r.getCurrentDropEffect())));
			}, this.handleTopDragOverCapture = function() {
				r.dragOverTargetIds = [];
			}, this.handleTopDragOver = function(e) {
				var t = r.dragOverTargetIds;
				if (r.dragOverTargetIds = [], !r.monitor.isDragging()) {
					e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
					return;
				}
				r.altKeyPressed = e.altKey, r.actions.hover(t || [], { clientOffset: WF(e) }), (t || []).some(function(e) {
					return r.monitor.canDropOnTarget(e);
				}) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = r.getCurrentDropEffect())) : r.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
			}, this.handleTopDragLeaveCapture = function(e) {
				r.isDraggingNativeItem() && e.preventDefault(), r.enterLeaveCounter.leave(e.target) && r.isDraggingNativeItem() && r.endDragNativeItem();
			}, this.handleTopDropCapture = function(e) {
				r.dropTargetIds = [], e.preventDefault(), r.isDraggingNativeItem() && r.currentNativeSource.loadDataTransfer(e.dataTransfer), r.enterLeaveCounter.reset();
			}, this.handleTopDrop = function(e) {
				var t = r.dropTargetIds;
				r.dropTargetIds = [], r.actions.hover(t, { clientOffset: WF(e) }), r.actions.drop({ dropEffect: r.getCurrentDropEffect() }), r.isDraggingNativeItem() ? r.endDragNativeItem() : r.endDragIfSourceWasRemovedFromDOM();
			}, this.handleSelectStart = function(e) {
				var t = e.target;
				typeof t.dragDrop == "function" && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.isContentEditable || (e.preventDefault(), t.dragDrop()));
			}, this.options = new vI(n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new NF(this.isNodeInDocument);
		}
		return TI(e, [
			{
				key: "setup",
				value: function() {
					if (this.window !== void 0) {
						if (this.window.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
						this.window.__isReactDndBackendSetUp = !0, this.addEventListeners(this.window);
					}
				}
			},
			{
				key: "teardown",
				value: function() {
					this.window !== void 0 && (this.window.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.window), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && this.window.cancelAnimationFrame(this.asyncEndDragFrameId));
				}
			},
			{
				key: "connectDragPreview",
				value: function(e, t, n) {
					var r = this;
					return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), function() {
						r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e);
					};
				}
			},
			{
				key: "connectDragSource",
				value: function(e, t, n) {
					var r = this;
					this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
					var i = function(t) {
						return r.handleDragStart(t, e);
					}, a = function(e) {
						return r.handleSelectStart(e);
					};
					return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", i), t.addEventListener("selectstart", a), function() {
						r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", i), t.removeEventListener("selectstart", a), t.setAttribute("draggable", "false");
					};
				}
			},
			{
				key: "connectDropTarget",
				value: function(e, t) {
					var n = this, r = function(t) {
						return n.handleDragEnter(t, e);
					}, i = function(t) {
						return n.handleDragOver(t, e);
					}, a = function(t) {
						return n.handleDrop(t, e);
					};
					return t.addEventListener("dragenter", r), t.addEventListener("dragover", i), t.addEventListener("drop", a), function() {
						t.removeEventListener("dragenter", r), t.removeEventListener("dragover", i), t.removeEventListener("drop", a);
					};
				}
			},
			{
				key: "addEventListeners",
				value: function(e) {
					e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
				}
			},
			{
				key: "removeEventListeners",
				value: function(e) {
					e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
				}
			},
			{
				key: "getCurrentSourceNodeOptions",
				value: function() {
					var e = this.monitor.getSourceId(), t = this.sourceNodeOptions.get(e);
					return xI({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
				}
			},
			{
				key: "getCurrentDropEffect",
				value: function() {
					return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
				}
			},
			{
				key: "getCurrentSourcePreviewNodeOptions",
				value: function() {
					var e = this.monitor.getSourceId();
					return xI({
						anchorX: .5,
						anchorY: .5,
						captureDraggingState: !1
					}, this.sourcePreviewNodeOptions.get(e) || {});
				}
			},
			{
				key: "isDraggingNativeItem",
				value: function() {
					var e = this.monitor.getItemType();
					return Object.keys(XF).some(function(t) {
						return XF[t] === e;
					});
				}
			},
			{
				key: "beginDragNativeItem",
				value: function(e, t) {
					this.clearCurrentDragSourceNode(), this.currentNativeSource = fI(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
				}
			},
			{
				key: "setCurrentDragSourceNode",
				value: function(e) {
					var t = this;
					this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
					var n = 1e3;
					this.mouseMoveTimeoutTimer = setTimeout(function() {
						return t.window && t.window.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0);
					}, n);
				}
			},
			{
				key: "clearCurrentDragSourceNode",
				value: function() {
					return this.currentDragSourceNode ? (this.currentDragSourceNode = null, this.window && (this.window.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)), this.mouseMoveTimeoutTimer = null, !0) : !1;
				}
			},
			{
				key: "handleDragStart",
				value: function(e, t) {
					e.defaultPrevented || (this.dragStartSourceIds ||= [], this.dragStartSourceIds.unshift(t));
				}
			},
			{
				key: "handleDragEnter",
				value: function(e, t) {
					this.dragEnterTargetIds.unshift(t);
				}
			},
			{
				key: "handleDragOver",
				value: function(e, t) {
					this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
				}
			},
			{
				key: "handleDrop",
				value: function(e, t) {
					this.dropTargetIds.unshift(t);
				}
			},
			{
				key: "window",
				get: function() {
					return this.options.window;
				}
			},
			{
				key: "document",
				get: function() {
					return this.options.document;
				}
			}
		]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js
function OI() {
	return kI || (kI = new Image(), kI.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), kI;
}
var kI, AI = t((() => {})), jI = /* @__PURE__ */ r({
	NativeTypes: () => XF,
	default: () => MI,
	getEmptyImage: () => OI
}), MI, NI = t((() => {
	DI(), eI(), AI(), MI = function(e, t) {
		return new EI(e, t);
	};
})), PI, FI = t((() => {
	(function(e) {
		e.mouse = "mouse", e.touch = "touch", e.keyboard = "keyboard";
	})(PI ||= {});
}));
//#endregion
//#region node_modules/react-dnd-touch-backend/dist/esm/utils/predicates.js
function II(e) {
	return e.button === void 0 || e.button === BI.Left;
}
function LI(e) {
	return e.buttons === void 0 || (e.buttons & zI.Left) === 0;
}
function RI(e) {
	return !!e.targetTouches;
}
var zI, BI, VI = t((() => {
	zI = {
		Left: 1,
		Right: 2,
		Center: 4
	}, BI = {
		Left: 0,
		Center: 1,
		Right: 2
	};
}));
//#endregion
//#region node_modules/react-dnd-touch-backend/dist/esm/utils/offsets.js
function HI(e) {
	var t = e.nodeType === GI ? e : e.parentElement;
	if (t) {
		var n = t.getBoundingClientRect(), r = n.top;
		return {
			x: n.left,
			y: r
		};
	}
}
function UI(e, t) {
	if (e.targetTouches.length === 1) return WI(e.targetTouches[0]);
	if (t && e.touches.length === 1 && e.touches[0].target === t.target) return WI(e.touches[0]);
}
function WI(e, t) {
	return RI(e) ? UI(e, t) : {
		x: e.clientX,
		y: e.clientY
	};
}
var GI, KI = t((() => {
	VI(), GI = 1;
}));
//#endregion
//#region node_modules/react-dnd-touch-backend/dist/esm/utils/math.js
function qI(e, t, n, r) {
	return Math.sqrt(Math.abs(n - e) ** 2 + Math.abs(r - t) ** 2);
}
function JI(e, t, n, r, i) {
	if (!i) return !1;
	for (var a = Math.atan2(r - t, n - e) * 180 / Math.PI + 180, o = 0; o < i.length; ++o) if ((i[o].start == null || a >= i[o].start) && (i[o].end == null || a <= i[o].end)) return !0;
	return !1;
}
var YI = t((() => {})), XI, ZI = t((() => {
	XI = function() {
		var e = !1;
		try {
			addEventListener("test", function() {}, Object.defineProperty({}, "passive", { get: function() {
				return e = !0, !0;
			} }));
		} catch {}
		return e;
	}();
}));
//#endregion
//#region node_modules/react-dnd-touch-backend/dist/esm/OptionsReader.js
function QI(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $I(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function eL(e, t, n) {
	return t && $I(e.prototype, t), n && $I(e, n), e;
}
var tL, nL = t((() => {
	tL = /*#__PURE__*/ function() {
		function e(t, n) {
			var r = this;
			QI(this, e), this.enableTouchEvents = !0, this.enableMouseEvents = !1, this.enableKeyboardEvents = !1, this.ignoreContextMenu = !1, this.enableHoverOutsideTarget = !1, this.touchSlop = 0, this.scrollAngleRanges = void 0, this.context = n, this.delayTouchStart = t.delayTouchStart || t.delay || 0, this.delayMouseStart = t.delayMouseStart || t.delay || 0, Object.keys(t).forEach(function(e) {
				t[e] != null && (r[e] = t[e]);
			});
		}
		return eL(e, [{
			key: "window",
			get: function() {
				if (this.context && this.context.window) return this.context.window;
				if (typeof window < "u") return window;
			}
		}, {
			key: "document",
			get: function() {
				if (this.window) return this.window.document;
			}
		}]), e;
	}();
}));
//#endregion
//#region node_modules/react-dnd-touch-backend/dist/esm/TouchBackend.js
function rL(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function iL(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function aL(e, t, n) {
	return t && iL(e.prototype, t), n && iL(e, n), e;
}
function oL(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var sL, cL, lL, uL = t((() => {
	wO(), FI(), VI(), KI(), YI(), ZI(), nL(), cL = (sL = {}, oL(sL, PI.mouse, {
		start: "mousedown",
		move: "mousemove",
		end: "mouseup",
		contextmenu: "contextmenu"
	}), oL(sL, PI.touch, {
		start: "touchstart",
		move: "touchmove",
		end: "touchend"
	}), oL(sL, PI.keyboard, { keydown: "keydown" }), sL), lL = /*#__PURE__*/ function() {
		function e(t, n, r) {
			var i = this;
			rL(this, e), this.getSourceClientOffset = function(e) {
				return HI(i.sourceNodes[e]);
			}, this.handleTopMoveStartCapture = function(e) {
				II(e) && (i.moveStartSourceIds = []);
			}, this.handleMoveStart = function(e) {
				Array.isArray(i.moveStartSourceIds) && i.moveStartSourceIds.unshift(e);
			}, this.handleTopMoveStart = function(e) {
				if (II(e)) {
					var t = WI(e);
					t && (RI(e) && (i.lastTargetTouchFallback = e.targetTouches[0]), i._mouseClientOffset = t), i.waitingForDelay = !1;
				}
			}, this.handleTopMoveStartDelay = function(e) {
				if (II(e)) {
					var t = e.type === cL.touch.start ? i.options.delayTouchStart : i.options.delayMouseStart;
					i.timeout = setTimeout(i.handleTopMoveStart.bind(i, e), t), i.waitingForDelay = !0;
				}
			}, this.handleTopMoveCapture = function() {
				i.dragOverTargetIds = [];
			}, this.handleMove = function(e, t) {
				i.dragOverTargetIds && i.dragOverTargetIds.unshift(t);
			}, this.handleTopMove = function(e) {
				if (i.timeout && clearTimeout(i.timeout), !(!i.document || i.waitingForDelay)) {
					var t = i.moveStartSourceIds, n = i.dragOverTargetIds, r = i.options.enableHoverOutsideTarget, a = WI(e, i.lastTargetTouchFallback);
					if (a) {
						if (i._isScrolling || !i.monitor.isDragging() && JI(i._mouseClientOffset.x || 0, i._mouseClientOffset.y || 0, a.x, a.y, i.options.scrollAngleRanges)) {
							i._isScrolling = !0;
							return;
						}
						if (!i.monitor.isDragging() && i._mouseClientOffset.hasOwnProperty("x") && t && qI(i._mouseClientOffset.x || 0, i._mouseClientOffset.y || 0, a.x, a.y) > (i.options.touchSlop ? i.options.touchSlop : 0) && (i.moveStartSourceIds = void 0, i.actions.beginDrag(t, {
							clientOffset: i._mouseClientOffset,
							getSourceClientOffset: i.getSourceClientOffset,
							publishSource: !1
						})), i.monitor.isDragging()) {
							var o = i.sourceNodes[i.monitor.getSourceId()];
							i.installSourceNodeRemovalObserver(o), i.actions.publishDragSource(), e.preventDefault();
							var s = (n || []).map(function(e) {
								return i.targetNodes[e];
							}), c = i.options.getDropTargetElementsAtPoint ? i.options.getDropTargetElementsAtPoint(a.x, a.y, s) : i.document.elementsFromPoint(a.x, a.y), l = [];
							for (var u in c) if (c.hasOwnProperty(u)) {
								var d = c[u];
								for (l.push(d); d;) d = d.parentElement, l.indexOf(d) === -1 && l.push(d);
							}
							var f = l.filter(function(e) {
								return s.indexOf(e) > -1;
							}).map(function(e) {
								for (var t in i.targetNodes) if (e === i.targetNodes[t]) return t;
							}).filter(function(e) {
								return !!e;
							}).filter(function(e, t, n) {
								return n.indexOf(e) === t;
							});
							if (r) {
								for (var p in i.targetNodes) if (i.targetNodes[p] && i.targetNodes[p].contains(o) && f.indexOf(p) === -1) {
									f.unshift(p);
									break;
								}
							}
							f.reverse(), i.actions.hover(f, { clientOffset: a });
						}
					}
				}
			}, this.handleTopMoveEndCapture = function(e) {
				if (i._isScrolling = !1, i.lastTargetTouchFallback = void 0, LI(e)) {
					if (!i.monitor.isDragging() || i.monitor.didDrop()) {
						i.moveStartSourceIds = void 0;
						return;
					}
					e.preventDefault(), i._mouseClientOffset = {}, i.uninstallSourceNodeRemovalObserver(), i.actions.drop(), i.actions.endDrag();
				}
			}, this.handleCancelOnEscape = function(e) {
				e.key === "Escape" && i.monitor.isDragging() && (i._mouseClientOffset = {}, i.uninstallSourceNodeRemovalObserver(), i.actions.endDrag());
			}, this.options = new tL(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.sourceNodes = {}, this.sourcePreviewNodes = {}, this.sourcePreviewNodeOptions = {}, this.targetNodes = {}, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(PI.mouse), this.options.enableTouchEvents && this.listenerTypes.push(PI.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(PI.keyboard);
		}
		return aL(e, [
			{
				key: "setup",
				value: function() {
					this.window && ($(!e.isSetUp, "Cannot have two Touch backends at the same time."), e.isSetUp = !0, this.addEventListener(this.window, "start", this.getTopMoveStartHandler()), this.addEventListener(this.window, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(this.window, "move", this.handleTopMove), this.addEventListener(this.window, "move", this.handleTopMoveCapture, !0), this.addEventListener(this.window, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(this.window, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(this.window, "keydown", this.handleCancelOnEscape, !0));
				}
			},
			{
				key: "teardown",
				value: function() {
					this.window && (e.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(this.window, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(this.window, "start", this.handleTopMoveStart), this.removeEventListener(this.window, "move", this.handleTopMoveCapture, !0), this.removeEventListener(this.window, "move", this.handleTopMove), this.removeEventListener(this.window, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(this.window, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(this.window, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver());
				}
			},
			{
				key: "addEventListener",
				value: function(e, t, n, r) {
					var i = XI ? {
						capture: r,
						passive: !1
					} : r;
					this.listenerTypes.forEach(function(r) {
						var a = cL[r][t];
						a && e.addEventListener(a, n, i);
					});
				}
			},
			{
				key: "removeEventListener",
				value: function(e, t, n, r) {
					var i = XI ? {
						capture: r,
						passive: !1
					} : r;
					this.listenerTypes.forEach(function(r) {
						var a = cL[r][t];
						a && e.removeEventListener(a, n, i);
					});
				}
			},
			{
				key: "connectDragSource",
				value: function(e, t) {
					var n = this, r = this.handleMoveStart.bind(this, e);
					return this.sourceNodes[e] = t, this.addEventListener(t, "start", r), function() {
						delete n.sourceNodes[e], n.removeEventListener(t, "start", r);
					};
				}
			},
			{
				key: "connectDragPreview",
				value: function(e, t, n) {
					var r = this;
					return this.sourcePreviewNodeOptions[e] = n, this.sourcePreviewNodes[e] = t, function() {
						delete r.sourcePreviewNodes[e], delete r.sourcePreviewNodeOptions[e];
					};
				}
			},
			{
				key: "connectDropTarget",
				value: function(e, t) {
					var n = this;
					if (!this.document) return function() {
						return null;
					};
					var r = function(r) {
						if (!(!n.document || !n.monitor.isDragging())) {
							var i;
							switch (r.type) {
								case cL.mouse.move:
									i = {
										x: r.clientX,
										y: r.clientY
									};
									break;
								case cL.touch.move:
									i = {
										x: r.touches[0].clientX,
										y: r.touches[0].clientY
									};
									break;
							}
							var a = i == null ? void 0 : n.document.elementFromPoint(i.x, i.y), o = a && t.contains(a);
							if (a === t || o) return n.handleMove(r, e);
						}
					};
					return this.addEventListener(this.document.body, "move", r), this.targetNodes[e] = t, function() {
						n.document && (delete n.targetNodes[e], n.removeEventListener(n.document.body, "move", r));
					};
				}
			},
			{
				key: "getTopMoveStartHandler",
				value: function() {
					return !this.options.delayTouchStart && !this.options.delayMouseStart ? this.handleTopMoveStart : this.handleTopMoveStartDelay;
				}
			},
			{
				key: "installSourceNodeRemovalObserver",
				value: function(e) {
					var t = this;
					this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = e, this.draggedSourceNodeRemovalObserver = new MutationObserver(function() {
						e && !e.parentElement && (t.resurrectSourceNode(), t.uninstallSourceNodeRemovalObserver());
					}), !(!e || !e.parentElement) && this.draggedSourceNodeRemovalObserver.observe(e.parentElement, { childList: !0 });
				}
			},
			{
				key: "resurrectSourceNode",
				value: function() {
					this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode));
				}
			},
			{
				key: "uninstallSourceNodeRemovalObserver",
				value: function() {
					this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0;
				}
			},
			{
				key: "window",
				get: function() {
					return this.options.window;
				}
			},
			{
				key: "document",
				get: function() {
					if (this.window) return this.window.document;
				}
			}
		]), e;
	}();
})), dL = /* @__PURE__ */ r({ default: () => fL }), fL, pL = t((() => {
	uL(), fL = function(e, t) {
		return new lL(e, t, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
	};
})), mL = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
	var n = a((NI(), e(jI))), r = a((pL(), e(dL))), i = (sF(), e(aF));
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	t.default = { backends: [{
		backend: n.default,
		transition: i.MouseTransition
	}, {
		backend: r.default,
		options: { enableMouseEvents: !0 },
		preview: !0,
		transition: i.TouchTransition
	}] };
})), hL = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return e === void 0;
	}
	t.exports = n;
})), gL = /* @__PURE__ */ i(((e, t) => {
	var n = Te();
	function r(e, t) {
		return n(t, function(t) {
			return e[t];
		});
	}
	t.exports = r;
})), _L = /* @__PURE__ */ i(((e, t) => {
	var n = gL(), r = ce();
	function i(e) {
		return e == null ? [] : n(e, r(e));
	}
	t.exports = i;
})), vL = /* @__PURE__ */ i(((e, t) => {
	var n = sr(), r = he();
	function i(e, t, i, a) {
		var o = !i;
		i ||= {};
		for (var s = -1, c = t.length; ++s < c;) {
			var l = t[s], u = a ? a(i[l], e[l], l, i, e) : void 0;
			u === void 0 && (u = e[l]), o ? r(i, l, u) : n(i, l, u);
		}
		return i;
	}
	t.exports = i;
})), yL = /* @__PURE__ */ i(((e, t) => {
	var n = vL(), r = ce();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), bL = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = [];
		if (e != null) for (var n in Object(e)) t.push(n);
		return t;
	}
	t.exports = n;
})), xL = /* @__PURE__ */ i(((e, t) => {
	var n = xt(), r = I(), i = bL(), a = Object.prototype.hasOwnProperty;
	function o(e) {
		if (!n(e)) return i(e);
		var t = r(e), o = [];
		for (var s in e) s == "constructor" && (t || !a.call(e, s)) || o.push(s);
		return o;
	}
	t.exports = o;
})), SL = /* @__PURE__ */ i(((e, t) => {
	var n = H(), r = xL(), i = j();
	function a(e) {
		return i(e) ? n(e, !0) : r(e);
	}
	t.exports = a;
})), CL = /* @__PURE__ */ i(((e, t) => {
	var n = vL(), r = SL();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), wL = /* @__PURE__ */ i(((e, t) => {
	var n = me(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r ? n.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
	function s(e, t) {
		if (t) return e.slice();
		var n = e.length, r = o ? o(n) : new e.constructor(n);
		return e.copy(r), r;
	}
	t.exports = s;
})), TL = /* @__PURE__ */ i(((e, t) => {
	var n = vL(), r = S();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), EL = /* @__PURE__ */ i(((e, t) => {
	t.exports = O()(Object.getPrototypeOf, Object);
})), DL = /* @__PURE__ */ i(((e, t) => {
	var n = dt(), r = EL(), i = S(), a = v();
	t.exports = Object.getOwnPropertySymbols ? function(e) {
		for (var t = []; e;) n(t, i(e)), e = r(e);
		return t;
	} : a;
})), OL = /* @__PURE__ */ i(((e, t) => {
	var n = vL(), r = DL();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), kL = /* @__PURE__ */ i(((e, t) => {
	var n = le(), r = DL(), i = SL();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), AL = /* @__PURE__ */ i(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e) {
		var t = e.length, r = new e.constructor(t);
		return t && typeof e[0] == "string" && n.call(e, "index") && (r.index = e.index, r.input = e.input), r;
	}
	t.exports = r;
})), jL = /* @__PURE__ */ i(((e, t) => {
	var n = c();
	function r(e) {
		var t = new e.constructor(e.byteLength);
		return new n(t).set(new n(e)), t;
	}
	t.exports = r;
})), ML = /* @__PURE__ */ i(((e, t) => {
	var n = jL();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.byteLength);
	}
	t.exports = r;
})), NL = /* @__PURE__ */ i(((e, t) => {
	var n = /\w*$/;
	function r(e) {
		var t = new e.constructor(e.source, n.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	t.exports = r;
})), PL = /* @__PURE__ */ i(((e, t) => {
	var n = Pe(), r = n ? n.prototype : void 0, i = r ? r.valueOf : void 0;
	function a(e) {
		return i ? Object(i.call(e)) : {};
	}
	t.exports = a;
})), FL = /* @__PURE__ */ i(((e, t) => {
	var n = jL();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.length);
	}
	t.exports = r;
})), IL = /* @__PURE__ */ i(((e, t) => {
	var n = jL(), r = ML(), i = NL(), a = PL(), o = FL(), s = "[object Boolean]", c = "[object Date]", l = "[object Map]", u = "[object Number]", d = "[object RegExp]", f = "[object Set]", p = "[object String]", m = "[object Symbol]", h = "[object ArrayBuffer]", g = "[object DataView]", _ = "[object Float32Array]", v = "[object Float64Array]", y = "[object Int8Array]", b = "[object Int16Array]", x = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", w = "[object Uint16Array]", T = "[object Uint32Array]";
	function E(e, t, E) {
		var D = e.constructor;
		switch (t) {
			case h: return n(e);
			case s:
			case c: return new D(+e);
			case g: return r(e, E);
			case _:
			case v:
			case y:
			case b:
			case x:
			case S:
			case C:
			case w:
			case T: return o(e, E);
			case l: return new D();
			case u:
			case p: return new D(e);
			case d: return i(e);
			case f: return new D();
			case m: return a(e);
		}
	}
	t.exports = E;
})), LL = /* @__PURE__ */ i(((e, t) => {
	var n = ze(), r = EL(), i = I();
	function a(e) {
		return typeof e.constructor == "function" && !i(e) ? n(r(e)) : {};
	}
	t.exports = a;
})), RL = /* @__PURE__ */ i(((e, t) => {
	var n = Ee(), r = Me(), i = "[object Map]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), zL = /* @__PURE__ */ i(((e, t) => {
	var n = RL(), r = p(), i = Bt(), a = i && i.isMap;
	t.exports = a ? r(a) : n;
})), BL = /* @__PURE__ */ i(((e, t) => {
	var n = Ee(), r = Me(), i = "[object Set]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), VL = /* @__PURE__ */ i(((e, t) => {
	var n = BL(), r = p(), i = Bt(), a = i && i.isSet;
	t.exports = a ? r(a) : n;
})), HL = /* @__PURE__ */ i(((e, t) => {
	var n = st(), r = Fe(), i = sr(), o = yL(), s = CL(), c = wL(), l = Qe(), u = TL(), d = OL(), f = Se(), p = kL(), m = Ee(), h = AL(), g = IL(), _ = LL(), v = a(), y = ke(), b = zL(), x = xt(), S = VL(), C = ce(), w = SL(), T = 1, E = 2, D = 4, ee = "[object Arguments]", O = "[object Array]", k = "[object Boolean]", A = "[object Date]", j = "[object Error]", M = "[object Function]", te = "[object GeneratorFunction]", N = "[object Map]", P = "[object Number]", F = "[object Object]", ne = "[object RegExp]", I = "[object Set]", re = "[object String]", L = "[object Symbol]", R = "[object WeakMap]", ie = "[object ArrayBuffer]", ae = "[object DataView]", oe = "[object Float32Array]", z = "[object Float64Array]", se = "[object Int8Array]", B = "[object Int16Array]", V = "[object Int32Array]", le = "[object Uint8Array]", ue = "[object Uint8ClampedArray]", de = "[object Uint16Array]", fe = "[object Uint32Array]", H = {};
	H[ee] = H[O] = H[ie] = H[ae] = H[k] = H[A] = H[oe] = H[z] = H[se] = H[B] = H[V] = H[N] = H[P] = H[F] = H[ne] = H[I] = H[re] = H[L] = H[le] = H[ue] = H[de] = H[fe] = !0, H[j] = H[M] = H[R] = !1;
	function pe(e, t, a, O, k, A) {
		var j, N = t & T, P = t & E, ne = t & D;
		if (a && (j = k ? a(e, O, k, A) : a(e)), j !== void 0) return j;
		if (!x(e)) return e;
		var I = v(e);
		if (I) {
			if (j = h(e), !N) return l(e, j);
		} else {
			var re = m(e), L = re == M || re == te;
			if (y(e)) return c(e, N);
			if (re == F || re == ee || L && !k) {
				if (j = P || L ? {} : _(e), !N) return P ? d(e, s(j, e)) : u(e, o(j, e));
			} else {
				if (!H[re]) return k ? e : {};
				j = g(e, re, N);
			}
		}
		A ||= new n();
		var R = A.get(e);
		if (R) return R;
		A.set(e, j), S(e) ? e.forEach(function(n) {
			j.add(pe(n, t, a, n, e, A));
		}) : b(e) && e.forEach(function(n, r) {
			j.set(r, pe(n, t, a, r, e, A));
		});
		var ie = I ? void 0 : (ne ? P ? p : f : P ? w : C)(e);
		return r(ie || e, function(n, r) {
			ie && (r = n, n = e[r]), i(j, r, pe(n, t, a, r, e, A));
		}), j;
	}
	t.exports = pe;
})), UL = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = e == null ? 0 : e.length;
		return t ? e[t - 1] : void 0;
	}
	t.exports = n;
})), WL = /* @__PURE__ */ i(((e, t) => {
	function n(e, t, n) {
		var r = -1, i = e.length;
		t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
		for (var a = Array(i); ++r < i;) a[r] = e[r + t];
		return a;
	}
	t.exports = n;
})), GL = /* @__PURE__ */ i(((e, t) => {
	var n = HL(), r = 4;
	function i(e) {
		return n(e, r);
	}
	t.exports = i;
})), KL = /* @__PURE__ */ i(((e, t) => {
	var n = cr();
	function r(e, t, r) {
		return e == null ? e : n(e, t, r);
	}
	t.exports = r;
})), qL = /* @__PURE__ */ i(((e) => {
	var t = wn(), n = Nn();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(W());
	e.default = (0, t(Kn()).default)(/*#__PURE__*/ r.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close");
}));
//#endregion
export { Mc as $, xO as A, gf as B, RP as C, Tj as D, Cj as E, Jh as F, uu as G, wd as H, qh as I, Ll as J, su as K, Wh as L, m_ as M, mg as N, lj as O, Yh as P, Fc as Q, rh as R, LP as S, lN as T, nd as U, nf as V, Su as W, jl as X, Pl as Y, Jc as Z, eI as _, UL as a, Ps as at, oF as b, EL as c, as as ct, _L as d, na as dt, kc as et, hL as f, $i as ft, QF as g, ZF as h, cr as ht, WL as i, Rs as it, D_ as j, uj as k, yL as l, To as lt, NI as m, Hi as mt, KL as n, Ws as nt, HL as o, ms as ot, mL as p, Yi as pt, ru as q, GL as r, Vs as rt, kL as s, ds as st, qL as t, _c as tt, vL as u, aa as ut, wF as v, dN as w, sF as x, TF as y, ip as z };

//# sourceMappingURL=Close.js.map