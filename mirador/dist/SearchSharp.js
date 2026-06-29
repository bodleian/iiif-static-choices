import { o as e, t } from "./chunk.js";
import { $r as n, Ai as r, Bt as i, Ci as a, Ln as o, Oi as s, Zr as c, ci as l, da as u, ei as d, gr as f, in as p, mr as m, oa as h, or as g, sa as _, sr as v, ta as y, ua as b, wi as x } from "./selectors.js";
import { t as S } from "./classnames.js";
import { B as C, H as w, M as T, R as E, U as D, V as O, g as ee, h as k, j as A, l as j, t as M } from "./ButtonBase.js";
//#region node_modules/intersection-observer/intersection-observer.js
var N = /* @__PURE__ */ e(u());
r(), (function() {
	if (typeof window != "object") return;
	if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
		"isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", { get: function() {
			return this.intersectionRatio > 0;
		} });
		return;
	}
	var e = window.document, t = [], n = null, r = null;
	function i(e) {
		this.time = e.time, this.target = e.target, this.rootBounds = p(e.rootBounds), this.boundingClientRect = p(e.boundingClientRect), this.intersectionRect = p(e.intersectionRect || f()), this.isIntersecting = !!e.intersectionRect;
		var t = this.boundingClientRect, n = t.width * t.height, r = this.intersectionRect, i = r.width * r.height;
		n ? this.intersectionRatio = Number((i / n).toFixed(4)) : this.intersectionRatio = +!!this.isIntersecting;
	}
	function a(e, t) {
		var n = t || {};
		if (typeof e != "function") throw Error("callback must be a function");
		if (n.root && n.root.nodeType != 1) throw Error("root must be an Element");
		this._checkForIntersections = s(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
			return e.value + e.unit;
		}).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = [];
	}
	a.prototype.THROTTLE_TIMEOUT = 100, a.prototype.POLL_INTERVAL = null, a.prototype.USE_MUTATION_OBSERVER = !0, a._setupCrossOriginUpdater = function() {
		return n ||= function(e, n) {
			r = !e || !n ? f() : m(e, n), t.forEach(function(e) {
				e._checkForIntersections();
			});
		}, n;
	}, a._resetCrossOriginUpdater = function() {
		n = null, r = null;
	}, a.prototype.observe = function(e) {
		if (!this._observationTargets.some(function(t) {
			return t.element == e;
		})) {
			if (!(e && e.nodeType == 1)) throw Error("target must be an Element");
			this._registerInstance(), this._observationTargets.push({
				element: e,
				entry: null
			}), this._monitorIntersections(e.ownerDocument), this._checkForIntersections();
		}
	}, a.prototype.unobserve = function(e) {
		this._observationTargets = this._observationTargets.filter(function(t) {
			return t.element != e;
		}), this._unmonitorIntersections(e.ownerDocument), this._observationTargets.length == 0 && this._unregisterInstance();
	}, a.prototype.disconnect = function() {
		this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance();
	}, a.prototype.takeRecords = function() {
		var e = this._queuedEntries.slice();
		return this._queuedEntries = [], e;
	}, a.prototype._initThresholds = function(e) {
		var t = e || [0];
		return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
			if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) throw Error("threshold must be a number between 0 and 1 inclusively");
			return e !== n[t - 1];
		});
	}, a.prototype._parseRootMargin = function(e) {
		var t = (e || "0px").split(/\s+/).map(function(e) {
			var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
			if (!t) throw Error("rootMargin must be specified in pixels or percent");
			return {
				value: parseFloat(t[1]),
				unit: t[2]
			};
		});
		return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t;
	}, a.prototype._monitorIntersections = function(t) {
		var n = t.defaultView;
		if (n && this._monitoringDocuments.indexOf(t) == -1) {
			var r = this._checkForIntersections, i = null, a = null;
			if (this.POLL_INTERVAL ? i = n.setInterval(r, this.POLL_INTERVAL) : (c(n, "resize", r, !0), c(t, "scroll", r, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (a = new n.MutationObserver(r), a.observe(t, {
				attributes: !0,
				childList: !0,
				characterData: !0,
				subtree: !0
			}))), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push(function() {
				var e = t.defaultView;
				e && (i && e.clearInterval(i), l(e, "resize", r, !0)), l(t, "scroll", r, !0), a && a.disconnect();
			}), t != (this.root && this.root.ownerDocument || e)) {
				var o = _(t);
				o && this._monitorIntersections(o.ownerDocument);
			}
		}
	}, a.prototype._unmonitorIntersections = function(t) {
		var n = this._monitoringDocuments.indexOf(t);
		if (n != -1) {
			var r = this.root && this.root.ownerDocument || e;
			if (!this._observationTargets.some(function(e) {
				var n = e.element.ownerDocument;
				if (n == t) return !0;
				for (; n && n != r;) {
					var i = _(n);
					if (n = i && i.ownerDocument, n == t) return !0;
				}
				return !1;
			})) {
				var i = this._monitoringUnsubscribes[n];
				if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), i(), t != r) {
					var a = _(t);
					a && this._unmonitorIntersections(a.ownerDocument);
				}
			}
		}
	}, a.prototype._unmonitorAllIntersections = function() {
		var e = this._monitoringUnsubscribes.slice(0);
		this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
		for (var t = 0; t < e.length; t++) e[t]();
	}, a.prototype._checkForIntersections = function() {
		if (!(!this.root && n && !r)) {
			var e = this._rootIsInDom(), t = e ? this._getRootRect() : f();
			this._observationTargets.forEach(function(r) {
				var a = r.element, s = d(a), c = this._rootContainsTarget(a), l = r.entry, u = e && c && this._computeTargetAndRootIntersection(a, s, t), f = r.entry = new i({
					time: o(),
					target: a,
					boundingClientRect: s,
					rootBounds: n && !this.root ? null : t,
					intersectionRect: u
				});
				l ? e && c ? this._hasCrossedThreshold(l, f) && this._queuedEntries.push(f) : l && l.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f);
			}, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
		}
	}, a.prototype._computeTargetAndRootIntersection = function(t, i, a) {
		if (window.getComputedStyle(t).display != "none") {
			for (var o = i, s = g(t), c = !1; !c && s;) {
				var l = null, f = s.nodeType == 1 ? window.getComputedStyle(s) : {};
				if (f.display == "none") return null;
				if (s == this.root || s.nodeType == 9) if (c = !0, s == this.root || s == e) n && !this.root ? !r || r.width == 0 && r.height == 0 ? (s = null, l = null, o = null) : l = r : l = a;
				else {
					var p = g(s), h = p && d(p), _ = p && this._computeTargetAndRootIntersection(p, h, a);
					h && _ ? (s = p, l = m(h, _)) : (s = null, o = null);
				}
				else {
					var v = s.ownerDocument;
					s != v.body && s != v.documentElement && f.overflow != "visible" && (l = d(s));
				}
				if (l && (o = u(l, o)), !o) break;
				s &&= g(s);
			}
			return o;
		}
	}, a.prototype._getRootRect = function() {
		var t;
		if (this.root) t = d(this.root);
		else {
			var n = e.documentElement, r = e.body;
			t = {
				top: 0,
				left: 0,
				right: n.clientWidth || r.clientWidth,
				width: n.clientWidth || r.clientWidth,
				bottom: n.clientHeight || r.clientHeight,
				height: n.clientHeight || r.clientHeight
			};
		}
		return this._expandRectByRootMargin(t);
	}, a.prototype._expandRectByRootMargin = function(e) {
		var t = this._rootMarginValues.map(function(t, n) {
			return t.unit == "px" ? t.value : t.value * (n % 2 ? e.width : e.height) / 100;
		}), n = {
			top: e.top - t[0],
			right: e.right + t[1],
			bottom: e.bottom + t[2],
			left: e.left - t[3]
		};
		return n.width = n.right - n.left, n.height = n.bottom - n.top, n;
	}, a.prototype._hasCrossedThreshold = function(e, t) {
		var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1, r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
		if (n !== r) for (var i = 0; i < this.thresholds.length; i++) {
			var a = this.thresholds[i];
			if (a == n || a == r || a < n != a < r) return !0;
		}
	}, a.prototype._rootIsInDom = function() {
		return !this.root || h(e, this.root);
	}, a.prototype._rootContainsTarget = function(t) {
		return h(this.root || e, t) && (!this.root || this.root.ownerDocument == t.ownerDocument);
	}, a.prototype._registerInstance = function() {
		t.indexOf(this) < 0 && t.push(this);
	}, a.prototype._unregisterInstance = function() {
		var e = t.indexOf(this);
		e != -1 && t.splice(e, 1);
	};
	function o() {
		return window.performance && performance.now && performance.now();
	}
	function s(e, t) {
		var n = null;
		return function() {
			n ||= setTimeout(function() {
				e(), n = null;
			}, t);
		};
	}
	function c(e, t, n, r) {
		typeof e.addEventListener == "function" ? e.addEventListener(t, n, r || !1) : typeof e.attachEvent == "function" && e.attachEvent("on" + t, n);
	}
	function l(e, t, n, r) {
		typeof e.removeEventListener == "function" ? e.removeEventListener(t, n, r || !1) : typeof e.detatchEvent == "function" && e.detatchEvent("on" + t, n);
	}
	function u(e, t) {
		var n = Math.max(e.top, t.top), r = Math.min(e.bottom, t.bottom), i = Math.max(e.left, t.left), a = Math.min(e.right, t.right), o = a - i, s = r - n;
		return o >= 0 && s >= 0 && {
			top: n,
			bottom: r,
			left: i,
			right: a,
			width: o,
			height: s
		} || null;
	}
	function d(e) {
		var t;
		try {
			t = e.getBoundingClientRect();
		} catch {}
		return t ? (t.width && t.height || (t = {
			top: t.top,
			right: t.right,
			bottom: t.bottom,
			left: t.left,
			width: t.right - t.left,
			height: t.bottom - t.top
		}), t) : f();
	}
	function f() {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			width: 0,
			height: 0
		};
	}
	function p(e) {
		return !e || "x" in e ? e : {
			top: e.top,
			y: e.top,
			bottom: e.bottom,
			left: e.left,
			x: e.left,
			right: e.right,
			width: e.width,
			height: e.height
		};
	}
	function m(e, t) {
		var n = t.top - e.top, r = t.left - e.left;
		return {
			top: n,
			left: r,
			height: t.height,
			width: t.width,
			bottom: n + t.height,
			right: r + t.width
		};
	}
	function h(e, t) {
		for (var n = t; n;) {
			if (n == e) return !0;
			n = g(n);
		}
		return !1;
	}
	function g(t) {
		var n = t.parentNode;
		return t.nodeType == 9 && t != e ? _(t) : n && n.nodeType == 11 && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n;
	}
	function _(e) {
		try {
			return e.defaultView && e.defaultView.frameElement || null;
		} catch {
			return null;
		}
	}
	window.IntersectionObserver = a, window.IntersectionObserverEntry = i;
})();
//#endregion
//#region node_modules/@researchgate/react-intersection-observer/lib/es/utils.js
var P = /* @__PURE__ */ e(b()), F, I = /^-?\d*\.?\d+(px|%)$/;
function L(e) {
	var t = (e ? e.trim() : "0px").split(/\s+/).map(function(e) {
		if (!I.test(e)) throw Error("rootMargin must be a string literal containing pixels and/or percent values");
		return e;
	}), n = t.shift(), r = t[0], i = r === void 0 ? n : r, a = t[1], o = a === void 0 ? n : a, s = t[2], c = s === void 0 ? i : s;
	return n + " " + i + " " + o + " " + c;
}
function R(e, t) {
	return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some(function(n, r) {
		return R(e[r], t[r]);
	}) : e !== t;
}
var z = (F = Object.prototype, F.hasOwnProperty), B = F.toString;
function V(e) {
	return e && z.call(e, "ref");
}
//#endregion
//#region node_modules/@researchgate/react-intersection-observer/lib/es/observer.js
var H = /* @__PURE__ */ new Map();
function te(e) {
	e === void 0 && (e = {});
	for (var t = e.root || null, n = L(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [e.threshold == null ? 0 : e.threshold], i = H.keys(), a; a = i.next().value;) if (!(t !== a.root || n !== a.rootMargin || R(r, a.thresholds))) return a;
	return null;
}
function ne(e, t) {
	var n = H.get(e);
	if (n) {
		for (var r = n.values(), i = void 0; i = r.next().value;) if (i.target === t.target) return i;
	}
	return null;
}
function re(e, t) {
	for (var n = 0; n < e.length; n++) {
		var r = ne(t, e[n]);
		/* istanbul ignore next line */
		r && r.handleChange(e[n]);
	}
}
function ie(e) {
	var t = te(e);
	if (t) return t;
	var n = new IntersectionObserver(re, e);
	return H.set(n, /* @__PURE__ */ new Set()), n;
}
function ae(e) {
	var t;
	e.observer && !H.has(e.observer) && H.set(e.observer, /* @__PURE__ */ new Set()), (t = H.get(e.observer)) == null || t.add(e), e.observer.observe(e.target);
}
function oe(e, t) {
	if (H.has(e.observer)) {
		var n = H.get(e.observer);
		n?.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), H.delete(e.observer)));
	}
}
//#endregion
//#region node_modules/@researchgate/react-intersection-observer/lib/es/IntersectionObserver.js
var se = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ce = [
	"root",
	"rootMargin",
	"threshold"
], le = [
	"root",
	"rootMargin",
	"threshold",
	"disabled"
], ue = function(e) {
	return ce.reduce(function(t, n) {
		var r, i = n === "root" && B.call(e.root) === "[object String]";
		return Object.assign(t, (r = {}, r[n] = i ? document.querySelector(e[n]) : e[n], r));
	}, {});
}, U = function(e) {
	se(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.handleChange = function(e) {
			t.props.onChange(e, t.externalUnobserve);
		}, t.handleNode = function(e) {
			var n = t.props.children;
			if (V(n)) {
				var r = n.ref;
				typeof r == "function" ? r(e) : r && z.call(r, "current") && (r.current = e);
			}
			if (t.targetNode = void 0, e) {
				var i = (0, P.findDOMNode)(e);
				i && i.nodeType === 1 && (t.targetNode = i);
			}
		}, t.observe = function() {
			if (t.props.children == null || t.props.disabled) return !1;
			if (!t.targetNode) throw Error("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree.");
			return t.observer = ie(ue(t.props)), t.target = t.targetNode, ae(t), !0;
		}, t.unobserve = function(e) {
			oe(t, e);
		}, t.externalUnobserve = function() {
			t.targetNode && t.unobserve(t.targetNode);
		}, t;
	}
	return t.prototype.getSnapshotBeforeUpdate = function(e) {
		var t = this;
		this.prevTargetNode = this.targetNode;
		var n = le.some(function(n) {
			return R(t.props[n], e[n]);
		});
		return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n;
	}, t.prototype.componentDidUpdate = function(e, t, n) {
		var r = !1;
		n || (r = this.prevTargetNode !== this.targetNode, r && this.prevTargetNode != null && this.unobserve(this.prevTargetNode)), (n || r) && this.observe();
	}, t.prototype.componentDidMount = function() {
		this.observe();
	}, t.prototype.componentWillUnmount = function() {
		this.targetNode && this.unobserve(this.targetNode);
	}, t.prototype.render = function() {
		var e = this.props.children;
		return e == null ? null : N.cloneElement(N.Children.only(e), { ref: this.handleNode });
	}, t.displayName = "IntersectionObserver", t;
}(N.Component), W = /* @__PURE__ */ e(S());
function G(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function K(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? G(Object(n), !0).forEach(function(t) {
			q(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function q(e, t, n) {
	return (t = Y(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function de(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function J(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Y(r.key), r);
	}
}
function fe(e, t, n) {
	return t && J(e.prototype, t), n && J(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y(e) {
	var t = pe(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function pe(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function me(e, t, n) {
	return t = Z(t), he(e, X() ? Reflect.construct(t, n || [], Z(e).constructor) : t.apply(e, n));
}
function he(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return ge(e);
}
function ge(e) {
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
function _e(e, t) {
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
	function t(e) {
		var n;
		return de(this, t), n = me(this, t, [e]), n.state = { loaded: !1 }, n.handleIntersection = n.handleIntersection.bind(n), n;
	}
	return _e(t, e), fe(t, [
		{
			key: "componentDidMount",
			value: function() {
				var e = this;
				this.setState(function(t) {
					return K(K({}, t), {}, { image: e.image() });
				});
			}
		},
		{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this, n = this.props, r = n.maxHeight, i = n.maxWidth, a = n.resource;
				(e.maxHeight !== r || e.maxWidth !== i || e.resource !== a) && this.setState(function(e) {
					return K(K({}, e), {}, { image: t.image() });
				});
			}
		},
		{
			key: "handleIntersection",
			value: function(e) {
				this.state.loaded || !e.isIntersecting || this.setState(function(e) {
					return K(K({}, e), {}, { loaded: !0 });
				});
			}
		},
		{
			key: "imageStyles",
			value: function() {
				var e = this.props, t = e.maxHeight, n = e.maxWidth, r = e.style, i = this.image(), a = {
					height: "auto",
					width: "auto"
				};
				if (!i) return K(K({}, r), {}, {
					height: t || "auto",
					width: n || "auto"
				});
				var o = i.height, s = i.width;
				if (o && s) if (t && o > t || n && s > n) {
					var c = s / o;
					t && n ? n / t < c ? (a.height = Math.round(n / c), a.width = n) : (a.height = t, a.width = Math.round(t * c)) : t ? (a.height = t, a.maxWidth = Math.round(t * c)) : n && (a.width = n, a.maxHeight = Math.round(n / c));
				} else a.width = s, a.height = o;
				else o && !s ? a.height = t : !o && s ? a.width = n : (a.width = n, a.height = t);
				return K(K({}, a), r);
			}
		},
		{
			key: "image",
			value: function() {
				var e = this.props, t = e.thumbnail, n = e.resource, r = e.maxHeight, i = e.maxWidth, a = e.thumbnailsConfig;
				if (t) return t;
				var o = p(n, K(K({}, a), {}, {
					maxHeight: r,
					maxWidth: i
				}));
				if (o && o.url) return o;
			}
		},
		{
			key: "label",
			value: function() {
				var e = this.props, n = e.label, r = e.resource;
				return n || t.getUseableLabel(r);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props, t = e.children, n = e.classes, r = e.imagePlaceholder, i = e.labelled, a = e.thumbnail, o = e.variant, s = this.state, c = s.image, l = (s.loaded && (a || c) || {}).url, u = l === void 0 ? r : l;
				return /*#__PURE__*/ N.createElement("div", { className: (0, W.default)(n.root, q({}, n[`${o}Root`], o)) }, /*#__PURE__*/ N.createElement(U, { onChange: this.handleIntersection }, /*#__PURE__*/ N.createElement("img", {
					alt: "",
					role: "presentation",
					src: u,
					style: this.imageStyles(),
					className: n.image
				})), i && /*#__PURE__*/ N.createElement("div", { className: (0, W.default)(n.label, q({}, n[`${o}Label`], o)) }, /*#__PURE__*/ N.createElement(O, {
					variant: "caption",
					classes: { root: (0, W.default)(n.caption, q({}, n[`${o}Caption`], o)) }
				}, this.label())), t);
			}
		}
	], [{
		key: "getUseableLabel",
		value: function(e, t) {
			return e && e.getLabel && e.getLabel().length > 0 ? e.getLabel().getValue() : String(t + 1);
		}
	}]);
}(N.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/IIIFThumbnail.js
$.defaultProps = {
	children: null,
	classes: {},
	imagePlaceholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDQmtBwADgwF/Op8FmAAAAABJRU5ErkJggg==",
	label: void 0,
	labelled: !1,
	maxHeight: null,
	maxWidth: null,
	style: {},
	thumbnail: null,
	thumbnailsConfig: {},
	variant: null
}, g();
var ve = s(v(function(e) {
	return {
		caption: {
			lineHeight: "1.5em",
			wordBreak: "break-word"
		},
		image: {},
		insideCaption: {
			color: "#ffffff",
			lineClamp: "1",
			whiteSpace: "nowrap"
		},
		insideLabel: {
			background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
			bottom: "5px",
			boxSizing: "border-box",
			left: "0px",
			padding: "4px",
			position: "absolute",
			width: "100%"
		},
		insideRoot: {
			display: "inline-block",
			height: "inherit",
			position: "relative"
		},
		label: {
			overflow: "hidden",
			textOverflow: "ellipsis"
		},
		outsideCaption: {
			boxOrient: "vertical",
			display: "-webkit-box",
			lineClamp: "2",
			maxHeight: "3em"
		},
		outsideLabel: {},
		outsideRoot: {},
		root: {}
	};
}), l(), y(function(e) {
	return { thumbnailsConfig: i(e).thumbnails };
}), o("IIIFThumbnail"))($);
_(), x(), f(), T();
var ye = A(/*#__PURE__*/ N.createElement("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), "Cancel");
g(), d(), k(), D();
var be = function(e) {
	var t = e.palette.type === "light" ? e.palette.grey[300] : e.palette.grey[700], r = c(e.palette.text.primary, .26);
	return {
		root: {
			fontFamily: e.typography.fontFamily,
			fontSize: e.typography.pxToRem(13),
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			height: 32,
			color: e.palette.getContrastText(t),
			backgroundColor: t,
			borderRadius: 32 / 2,
			whiteSpace: "nowrap",
			transition: e.transitions.create(["background-color", "box-shadow"]),
			cursor: "default",
			outline: 0,
			textDecoration: "none",
			border: "none",
			padding: 0,
			verticalAlign: "middle",
			boxSizing: "border-box",
			"&$disabled": {
				opacity: .5,
				pointerEvents: "none"
			},
			"& $avatar": {
				marginLeft: 5,
				marginRight: -6,
				width: 24,
				height: 24,
				color: e.palette.type === "light" ? e.palette.grey[700] : e.palette.grey[300],
				fontSize: e.typography.pxToRem(12)
			},
			"& $avatarColorPrimary": {
				color: e.palette.primary.contrastText,
				backgroundColor: e.palette.primary.dark
			},
			"& $avatarColorSecondary": {
				color: e.palette.secondary.contrastText,
				backgroundColor: e.palette.secondary.dark
			},
			"& $avatarSmall": {
				marginLeft: 4,
				marginRight: -4,
				width: 18,
				height: 18,
				fontSize: e.typography.pxToRem(10)
			}
		},
		sizeSmall: { height: 24 },
		colorPrimary: {
			backgroundColor: e.palette.primary.main,
			color: e.palette.primary.contrastText
		},
		colorSecondary: {
			backgroundColor: e.palette.secondary.main,
			color: e.palette.secondary.contrastText
		},
		disabled: {},
		clickable: {
			userSelect: "none",
			WebkitTapHighlightColor: "transparent",
			cursor: "pointer",
			"&:hover, &:focus": { backgroundColor: n(t, .08) },
			"&:active": { boxShadow: e.shadows[1] }
		},
		clickableColorPrimary: { "&:hover, &:focus": { backgroundColor: n(e.palette.primary.main, .08) } },
		clickableColorSecondary: { "&:hover, &:focus": { backgroundColor: n(e.palette.secondary.main, .08) } },
		deletable: { "&:focus": { backgroundColor: n(t, .08) } },
		deletableColorPrimary: { "&:focus": { backgroundColor: n(e.palette.primary.main, .2) } },
		deletableColorSecondary: { "&:focus": { backgroundColor: n(e.palette.secondary.main, .2) } },
		outlined: {
			backgroundColor: "transparent",
			border: `1px solid ${e.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
			"$clickable&:hover, $clickable&:focus, $deletable&:focus": { backgroundColor: c(e.palette.text.primary, e.palette.action.hoverOpacity) },
			"& $avatar": { marginLeft: 4 },
			"& $avatarSmall": { marginLeft: 2 },
			"& $icon": { marginLeft: 4 },
			"& $iconSmall": { marginLeft: 2 },
			"& $deleteIcon": { marginRight: 5 },
			"& $deleteIconSmall": { marginRight: 3 }
		},
		outlinedPrimary: {
			color: e.palette.primary.main,
			border: `1px solid ${e.palette.primary.main}`,
			"$clickable&:hover, $clickable&:focus, $deletable&:focus": { backgroundColor: c(e.palette.primary.main, e.palette.action.hoverOpacity) }
		},
		outlinedSecondary: {
			color: e.palette.secondary.main,
			border: `1px solid ${e.palette.secondary.main}`,
			"$clickable&:hover, $clickable&:focus, $deletable&:focus": { backgroundColor: c(e.palette.secondary.main, e.palette.action.hoverOpacity) }
		},
		avatar: {},
		avatarSmall: {},
		avatarColorPrimary: {},
		avatarColorSecondary: {},
		icon: {
			color: e.palette.type === "light" ? e.palette.grey[700] : e.palette.grey[300],
			marginLeft: 5,
			marginRight: -6
		},
		iconSmall: {
			width: 18,
			height: 18,
			marginLeft: 4,
			marginRight: -4
		},
		iconColorPrimary: { color: "inherit" },
		iconColorSecondary: { color: "inherit" },
		label: {
			overflow: "hidden",
			textOverflow: "ellipsis",
			paddingLeft: 12,
			paddingRight: 12,
			whiteSpace: "nowrap"
		},
		labelSmall: {
			paddingLeft: 8,
			paddingRight: 8
		},
		deleteIcon: {
			WebkitTapHighlightColor: "transparent",
			color: r,
			height: 22,
			width: 22,
			cursor: "pointer",
			margin: "0 5px 0 -6px",
			"&:hover": { color: c(r, .4) }
		},
		deleteIconSmall: {
			height: 16,
			width: 16,
			marginRight: 4,
			marginLeft: -4
		},
		deleteIconColorPrimary: {
			color: c(e.palette.primary.contrastText, .7),
			"&:hover, &:active": { color: e.palette.primary.contrastText }
		},
		deleteIconColorSecondary: {
			color: c(e.palette.secondary.contrastText, .7),
			"&:hover, &:active": { color: e.palette.secondary.contrastText }
		},
		deleteIconOutlinedColorPrimary: {
			color: c(e.palette.primary.main, .7),
			"&:hover, &:active": { color: e.palette.primary.main }
		},
		deleteIconOutlinedColorSecondary: {
			color: c(e.palette.secondary.main, .7),
			"&:hover, &:active": { color: e.palette.secondary.main }
		}
	};
};
function xe(e) {
	return e.key === "Backspace" || e.key === "Delete";
}
var Se = /*#__PURE__*/ N.forwardRef(function(e, t) {
	var n = e.avatar, r = e.classes, i = e.className, o = e.clickable, s = e.color, c = s === void 0 ? "default" : s, l = e.component, u = e.deleteIcon, d = e.disabled, f = d === void 0 ? !1 : d, p = e.icon, g = e.label, _ = e.onClick, v = e.onDelete, y = e.onKeyDown, b = e.onKeyUp, x = e.size, S = x === void 0 ? "medium" : x, C = e.variant, T = C === void 0 ? "default" : C, E = a(e, [
		"avatar",
		"classes",
		"className",
		"clickable",
		"color",
		"component",
		"deleteIcon",
		"disabled",
		"icon",
		"label",
		"onClick",
		"onDelete",
		"onKeyDown",
		"onKeyUp",
		"size",
		"variant"
	]), D = N.useRef(null), O = ee(D, t), k = function(e) {
		e.stopPropagation(), v && v(e);
	}, A = function(e) {
		e.currentTarget === e.target && xe(e) && e.preventDefault(), y && y(e);
	}, j = function(e) {
		e.currentTarget === e.target && (v && xe(e) ? v(e) : e.key === "Escape" && D.current && D.current.blur()), b && b(e);
	}, P = o !== !1 && _ ? !0 : o, F = S === "small", I = l || (P ? M : "div"), L = I === M ? { component: "div" } : {}, R = null;
	if (v) {
		var z = m(c !== "default" && (T === "default" ? r[`deleteIconColor${w(c)}`] : r[`deleteIconOutlinedColor${w(c)}`]), F && r.deleteIconSmall);
		R = u && /*#__PURE__*/ N.isValidElement(u) ? /*#__PURE__*/ N.cloneElement(u, {
			className: m(u.props.className, r.deleteIcon, z),
			onClick: k
		}) : /*#__PURE__*/ N.createElement(ye, {
			className: m(r.deleteIcon, z),
			onClick: k
		});
	}
	var B = null;
	n && /*#__PURE__*/ N.isValidElement(n) && (B = /*#__PURE__*/ N.cloneElement(n, { className: m(r.avatar, n.props.className, F && r.avatarSmall, c !== "default" && r[`avatarColor${w(c)}`]) }));
	var V = null;
	return p && /*#__PURE__*/ N.isValidElement(p) && (V = /*#__PURE__*/ N.cloneElement(p, { className: m(r.icon, p.props.className, F && r.iconSmall, c !== "default" && r[`iconColor${w(c)}`]) })), /*#__PURE__*/ N.createElement(I, h({
		role: P || v ? "button" : void 0,
		className: m(r.root, i, c !== "default" && [
			r[`color${w(c)}`],
			P && r[`clickableColor${w(c)}`],
			v && r[`deletableColor${w(c)}`]
		], T !== "default" && [r.outlined, {
			primary: r.outlinedPrimary,
			secondary: r.outlinedSecondary
		}[c]], f && r.disabled, F && r.sizeSmall, P && r.clickable, v && r.deletable),
		"aria-disabled": f ? !0 : void 0,
		tabIndex: P || v ? 0 : void 0,
		onClick: _,
		onKeyDown: A,
		onKeyUp: j,
		ref: O
	}, L, E), B || V, /*#__PURE__*/ N.createElement("span", { className: m(r.label, F && r.labelSmall) }, g), R);
}), Ce = v(be, { name: "MuiChip" })(Se), we = /* @__PURE__ */ t(((e) => {
	var t = C(), n = E();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(u());
	e.default = (0, t(j()).default)(/*#__PURE__*/ r.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), "SearchSharp");
}));
//#endregion
export { U as i, Ce as n, ve as r, we as t };

//# sourceMappingURL=SearchSharp.js.map