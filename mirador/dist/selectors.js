import { a as e, n as t, o as n, r, t as i } from "./chunk.js";
//#region node_modules/object-assign/index.js
var a = /* @__PURE__ */ i(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), o = /* @__PURE__ */ i(((e) => {
	var t = a(), n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, l = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, p = n ? Symbol.for("react.memo") : 60115, m = n ? Symbol.for("react.lazy") : 60116, h = typeof Symbol == "function" && Symbol.iterator;
	function g(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var _ = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || _;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error(g(85));
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || _;
	}
	var S = x.prototype = new b();
	S.constructor = x, t(S, y.prototype), S.isPureReactComponent = !0;
	var C = { current: null }, w = Object.prototype.hasOwnProperty, T = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function E(e, t, n) {
		var i, a = {}, o = null, s = null;
		if (t != null) for (i in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) w.call(t, i) && !T.hasOwnProperty(i) && (a[i] = t[i]);
		var c = arguments.length - 2;
		if (c === 1) a.children = n;
		else if (1 < c) {
			for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
			a.children = l;
		}
		if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
		return {
			$$typeof: r,
			type: e,
			key: o,
			ref: s,
			props: a,
			_owner: C.current
		};
	}
	function D(e, t) {
		return {
			$$typeof: r,
			type: e.type,
			key: t,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function O(e) {
		return typeof e == "object" && !!e && e.$$typeof === r;
	}
	function k(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + ("" + e).replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var A = /\/+/g, j = [];
	function M(e, t, n, r) {
		if (j.length) {
			var i = j.pop();
			return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i;
		}
		return {
			result: e,
			keyPrefix: t,
			func: n,
			context: r,
			count: 0
		};
	}
	function ee(e) {
		e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > j.length && j.push(e);
	}
	function te(e, t, n, a) {
		var o = typeof e;
		(o === "undefined" || o === "boolean") && (e = null);
		var s = !1;
		if (e === null) s = !0;
		else switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object": switch (e.$$typeof) {
				case r:
				case i: s = !0;
			}
		}
		if (s) return n(a, e, t === "" ? "." + re(e, 0) : t), 1;
		if (s = 0, t = t === "" ? "." : t + ":", Array.isArray(e)) for (var c = 0; c < e.length; c++) {
			o = e[c];
			var l = t + re(o, c);
			s += te(o, l, n, a);
		}
		else if (typeof e != "object" || !e ? l = null : (l = h && e[h] || e["@@iterator"], l = typeof l == "function" ? l : null), typeof l == "function") for (e = l.call(e), c = 0; !(o = e.next()).done;) o = o.value, l = t + re(o, c++), s += te(o, l, n, a);
		else if (o === "object") throw n = "" + e, Error(g(31, n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
		return s;
	}
	function ne(e, t, n) {
		return e == null ? 0 : te(e, "", t, n);
	}
	function re(e, t) {
		return typeof e == "object" && e && e.key != null ? k(e.key) : t.toString(36);
	}
	function ie(e, t) {
		e.func.call(e.context, t, e.count++);
	}
	function ae(e, t, n) {
		var r = e.result, i = e.keyPrefix;
		e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? oe(e, r, n, function(e) {
			return e;
		}) : e != null && (O(e) && (e = D(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(A, "$&/") + "/") + n)), r.push(e));
	}
	function oe(e, t, n, r, i) {
		var a = "";
		n != null && (a = ("" + n).replace(A, "$&/") + "/"), t = M(t, a, r, i), ne(e, ae, t), ee(t);
	}
	var se = { current: null };
	function ce() {
		var e = se.current;
		if (e === null) throw Error(g(321));
		return e;
	}
	var le = {
		ReactCurrentDispatcher: se,
		ReactCurrentBatchConfig: { suspense: null },
		ReactCurrentOwner: C,
		IsSomeRendererActing: { current: !1 },
		assign: t
	};
	e.Children = {
		map: function(e, t, n) {
			if (e == null) return e;
			var r = [];
			return oe(e, r, null, t, n), r;
		},
		forEach: function(e, t, n) {
			if (e == null) return e;
			t = M(null, null, t, n), ne(e, ie, t), ee(t);
		},
		count: function(e) {
			return ne(e, function() {
				return null;
			}, null);
		},
		toArray: function(e) {
			var t = [];
			return oe(e, t, null, function(e) {
				return e;
			}), t;
		},
		only: function(e) {
			if (!O(e)) throw Error(g(143));
			return e;
		}
	}, e.Component = y, e.Fragment = o, e.Profiler = c, e.PureComponent = x, e.StrictMode = s, e.Suspense = f, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, e.cloneElement = function(e, n, i) {
		if (e == null) throw Error(g(267, e));
		var a = t({}, e.props), o = e.key, s = e.ref, c = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (s = n.ref, c = C.current), n.key !== void 0 && (o = "" + n.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
			for (u in n) w.call(n, u) && !T.hasOwnProperty(u) && (a[u] = n[u] === void 0 && l !== void 0 ? l[u] : n[u]);
		}
		var u = arguments.length - 2;
		if (u === 1) a.children = i;
		else if (1 < u) {
			l = Array(u);
			for (var d = 0; d < u; d++) l[d] = arguments[d + 2];
			a.children = l;
		}
		return {
			$$typeof: r,
			type: e.type,
			key: o,
			ref: s,
			props: a,
			_owner: c
		};
	}, e.createContext = function(e, t) {
		return t === void 0 && (t = null), e = {
			$$typeof: u,
			_calculateChangedBits: t,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = {
			$$typeof: l,
			_context: e
		}, e.Consumer = e;
	}, e.createElement = E, e.createFactory = function(e) {
		var t = E.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: d,
			render: e
		};
	}, e.isValidElement = O, e.lazy = function(e) {
		return {
			$$typeof: m,
			_ctor: e,
			_status: -1,
			_result: null
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: p,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.useCallback = function(e, t) {
		return ce().useCallback(e, t);
	}, e.useContext = function(e, t) {
		return ce().useContext(e, t);
	}, e.useDebugValue = function() {}, e.useEffect = function(e, t) {
		return ce().useEffect(e, t);
	}, e.useImperativeHandle = function(e, t, n) {
		return ce().useImperativeHandle(e, t, n);
	}, e.useLayoutEffect = function(e, t) {
		return ce().useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return ce().useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return ce().useReducer(e, t, n);
	}, e.useRef = function(e) {
		return ce().useRef(e);
	}, e.useState = function(e) {
		return ce().useState(e);
	}, e.version = "16.14.0";
})), s = /* @__PURE__ */ i(((e, t) => {
	t.exports = o();
})), c = /* @__PURE__ */ i(((e) => {
	var t, n, r, i, a;
	if (typeof window > "u" || typeof MessageChannel != "function") {
		var o = null, s = null, c = function() {
			if (o !== null) try {
				var t = e.unstable_now();
				o(!0, t), o = null;
			} catch (e) {
				throw setTimeout(c, 0), e;
			}
		}, l = Date.now();
		e.unstable_now = function() {
			return Date.now() - l;
		}, t = function(e) {
			o === null ? (o = e, setTimeout(c, 0)) : setTimeout(t, 0, e);
		}, n = function(e, t) {
			s = setTimeout(e, t);
		}, r = function() {
			clearTimeout(s);
		}, i = function() {
			return !1;
		}, a = e.unstable_forceFrameRate = function() {};
	} else {
		var u = window.performance, d = window.Date, f = window.setTimeout, p = window.clearTimeout;
		if (typeof console < "u") {
			var m = window.cancelAnimationFrame;
			typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof m != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
		}
		if (typeof u == "object" && typeof u.now == "function") e.unstable_now = function() {
			return u.now();
		};
		else {
			var h = d.now();
			e.unstable_now = function() {
				return d.now() - h;
			};
		}
		var g = !1, _ = null, v = -1, y = 5, b = 0;
		i = function() {
			return e.unstable_now() >= b;
		}, a = function() {}, e.unstable_forceFrameRate = function(e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : y = 0 < e ? Math.floor(1e3 / e) : 5;
		};
		var x = new MessageChannel(), S = x.port2;
		x.port1.onmessage = function() {
			if (_ !== null) {
				var t = e.unstable_now();
				b = t + y;
				try {
					_(!0, t) ? S.postMessage(null) : (g = !1, _ = null);
				} catch (e) {
					throw S.postMessage(null), e;
				}
			} else g = !1;
		}, t = function(e) {
			_ = e, g || (g = !0, S.postMessage(null));
		}, n = function(t, n) {
			v = f(function() {
				t(e.unstable_now());
			}, n);
		}, r = function() {
			p(v), v = -1;
		};
	}
	function C(e, t) {
		var n = e.length;
		e.push(t);
		a: for (;;) {
			var r = n - 1 >>> 1, i = e[r];
			if (i !== void 0 && 0 < E(i, t)) e[r] = t, e[n] = i, n = r;
			else break a;
		}
	}
	function w(e) {
		return e = e[0], e === void 0 ? null : e;
	}
	function T(e) {
		var t = e[0];
		if (t !== void 0) {
			var n = e.pop();
			if (n !== t) {
				e[0] = n;
				a: for (var r = 0, i = e.length; r < i;) {
					var a = 2 * (r + 1) - 1, o = e[a], s = a + 1, c = e[s];
					if (o !== void 0 && 0 > E(o, n)) c !== void 0 && 0 > E(c, o) ? (e[r] = c, e[s] = n, r = s) : (e[r] = o, e[a] = n, r = a);
					else if (c !== void 0 && 0 > E(c, n)) e[r] = c, e[s] = n, r = s;
					else break a;
				}
			}
			return t;
		}
		return null;
	}
	function E(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	var D = [], O = [], k = 1, A = null, j = 3, M = !1, ee = !1, te = !1;
	function ne(e) {
		for (var t = w(O); t !== null;) {
			if (t.callback === null) T(O);
			else if (t.startTime <= e) T(O), t.sortIndex = t.expirationTime, C(D, t);
			else break;
			t = w(O);
		}
	}
	function re(e) {
		if (te = !1, ne(e), !ee) if (w(D) !== null) ee = !0, t(ie);
		else {
			var r = w(O);
			r !== null && n(re, r.startTime - e);
		}
	}
	function ie(t, a) {
		ee = !1, te && (te = !1, r()), M = !0;
		var o = j;
		try {
			for (ne(a), A = w(D); A !== null && (!(A.expirationTime > a) || t && !i());) {
				var s = A.callback;
				if (s !== null) {
					A.callback = null, j = A.priorityLevel;
					var c = s(A.expirationTime <= a);
					a = e.unstable_now(), typeof c == "function" ? A.callback = c : A === w(D) && T(D), ne(a);
				} else T(D);
				A = w(D);
			}
			if (A !== null) var l = !0;
			else {
				var u = w(O);
				u !== null && n(re, u.startTime - a), l = !1;
			}
			return l;
		} finally {
			A = null, j = o, M = !1;
		}
	}
	function ae(e) {
		switch (e) {
			case 1: return -1;
			case 2: return 250;
			case 5: return 1073741823;
			case 4: return 1e4;
			default: return 5e3;
		}
	}
	var oe = a;
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		ee || M || (ee = !0, t(ie));
	}, e.unstable_getCurrentPriorityLevel = function() {
		return j;
	}, e.unstable_getFirstCallbackNode = function() {
		return w(D);
	}, e.unstable_next = function(e) {
		switch (j) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = j;
		}
		var n = j;
		j = t;
		try {
			return e();
		} finally {
			j = n;
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = oe, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = j;
		j = e;
		try {
			return t();
		} finally {
			j = n;
		}
	}, e.unstable_scheduleCallback = function(i, a, o) {
		var s = e.unstable_now();
		if (typeof o == "object" && o) {
			var c = o.delay;
			c = typeof c == "number" && 0 < c ? s + c : s, o = typeof o.timeout == "number" ? o.timeout : ae(i);
		} else o = ae(i), c = s;
		return o = c + o, i = {
			id: k++,
			callback: a,
			priorityLevel: i,
			startTime: c,
			expirationTime: o,
			sortIndex: -1
		}, c > s ? (i.sortIndex = c, C(O, i), w(D) === null && i === w(O) && (te ? r() : te = !0, n(re, c - s))) : (i.sortIndex = o, C(D, i), ee || M || (ee = !0, t(ie))), i;
	}, e.unstable_shouldYield = function() {
		var t = e.unstable_now();
		ne(t);
		var n = w(D);
		return n !== A && A !== null && n !== null && n.callback !== null && n.startTime <= t && n.expirationTime < A.expirationTime || i();
	}, e.unstable_wrapCallback = function(e) {
		var t = j;
		return function() {
			var n = j;
			j = t;
			try {
				return e.apply(this, arguments);
			} finally {
				j = n;
			}
		};
	};
})), l = /* @__PURE__ */ i(((e, t) => {
	t.exports = c();
})), u = /* @__PURE__ */ i(((e) => {
	var t = s(), n = a(), r = l();
	function i(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	if (!t) throw Error(i(227));
	function o(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var c = !1, u = null, d = !1, f = null, p = { onError: function(e) {
		c = !0, u = e;
	} };
	function m(e, t, n, r, i, a, s, l, d) {
		c = !1, u = null, o.apply(p, arguments);
	}
	function h(e, t, n, r, a, o, s, l, p) {
		if (m.apply(this, arguments), c) {
			if (c) {
				var h = u;
				c = !1, u = null;
			} else throw Error(i(198));
			d || (d = !0, f = h);
		}
	}
	var g = null, _ = null, v = null;
	function y(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = v(n), h(r, t, void 0, e), e.currentTarget = null;
	}
	var b = null, x = {};
	function S() {
		if (b) for (var e in x) {
			var t = x[e], n = b.indexOf(e);
			if (!(-1 < n)) throw Error(i(96, e));
			if (!w[n]) {
				if (!t.extractEvents) throw Error(i(97, e));
				for (var r in w[n] = t, n = t.eventTypes, n) {
					var a = void 0, o = n[r], s = t, c = r;
					if (T.hasOwnProperty(c)) throw Error(i(99, c));
					T[c] = o;
					var l = o.phasedRegistrationNames;
					if (l) {
						for (a in l) l.hasOwnProperty(a) && C(l[a], s, c);
						a = !0;
					} else o.registrationName ? (C(o.registrationName, s, c), a = !0) : a = !1;
					if (!a) throw Error(i(98, r, e));
				}
			}
		}
	}
	function C(e, t, n) {
		if (E[e]) throw Error(i(100, e));
		E[e] = t, D[e] = t.eventTypes[n].dependencies;
	}
	var w = [], T = {}, E = {}, D = {};
	function O(e) {
		var t = !1, n;
		for (n in e) if (e.hasOwnProperty(n)) {
			var r = e[n];
			if (!x.hasOwnProperty(n) || x[n] !== r) {
				if (x[n]) throw Error(i(102, n));
				x[n] = r, t = !0;
			}
		}
		t && S();
	}
	var k = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), A = null, j = null, M = null;
	function ee(e) {
		if (e = _(e)) {
			if (typeof A != "function") throw Error(i(280));
			var t = e.stateNode;
			t && (t = g(t), A(e.stateNode, e.type, t));
		}
	}
	function te(e) {
		j ? M ? M.push(e) : M = [e] : j = e;
	}
	function ne() {
		if (j) {
			var e = j, t = M;
			if (M = j = null, ee(e), t) for (e = 0; e < t.length; e++) ee(t[e]);
		}
	}
	function re(e, t) {
		return e(t);
	}
	function ie(e, t, n, r, i) {
		return e(t, n, r, i);
	}
	function ae() {}
	var oe = re, se = !1, ce = !1;
	function le() {
		(j !== null || M !== null) && (ae(), ne());
	}
	function ue(e, t, n) {
		if (ce) return e(t, n);
		ce = !0;
		try {
			return oe(e, t, n);
		} finally {
			ce = !1, le();
		}
	}
	var de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = Object.prototype.hasOwnProperty, pe = {}, me = {};
	function he(e) {
		return fe.call(me, e) ? !0 : fe.call(pe, e) ? !1 : de.test(e) ? me[e] = !0 : (pe[e] = !0, !1);
	}
	function ge(e, t, n, r) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case "function":
			case "symbol": return !0;
			case "boolean": return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-") : !n.acceptsBooleans;
			default: return !1;
		}
	}
	function _e(e, t, n, r) {
		if (t == null || ge(e, t, n, r)) return !0;
		if (r) return !1;
		if (n !== null) switch (n.type) {
			case 3: return !t;
			case 4: return !1 === t;
			case 5: return isNaN(t);
			case 6: return isNaN(t) || 1 > t;
		}
		return !1;
	}
	function ve(e, t, n, r, i, a) {
		this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a;
	}
	var N = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
		N[e] = new ve(e, 0, !1, e, null, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(e) {
		var t = e[0];
		N[t] = new ve(t, 1, !1, e[1], null, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(e) {
		N[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(e) {
		N[e] = new ve(e, 2, !1, e, null, !1);
	}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
		N[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(e) {
		N[e] = new ve(e, 3, !0, e, null, !1);
	}), ["capture", "download"].forEach(function(e) {
		N[e] = new ve(e, 4, !1, e, null, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(e) {
		N[e] = new ve(e, 6, !1, e, null, !1);
	}), ["rowSpan", "start"].forEach(function(e) {
		N[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1);
	});
	var ye = /[\-:]([a-z])/g;
	function be(e) {
		return e[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
		var t = e.replace(ye, be);
		N[t] = new ve(t, 1, !1, e, null, !1);
	}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
		var t = e.replace(ye, be);
		N[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(e) {
		var t = e.replace(ye, be);
		N[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
	}), ["tabIndex", "crossOrigin"].forEach(function(e) {
		N[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1);
	}), N.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(e) {
		N[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0);
	});
	var xe = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	xe.hasOwnProperty("ReactCurrentDispatcher") || (xe.ReactCurrentDispatcher = { current: null }), xe.hasOwnProperty("ReactCurrentBatchConfig") || (xe.ReactCurrentBatchConfig = { suspense: null });
	function Se(e, t, n, r) {
		var i = N.hasOwnProperty(t) ? N[t] : null;
		(i === null ? !r && !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") : i.type === 0) || (_e(t, n, i, r) && (n = null), r || i === null ? he(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var Ce = /^(.*)[\\\/]/, we = typeof Symbol == "function" && Symbol.for, Te = we ? Symbol.for("react.element") : 60103, Ee = we ? Symbol.for("react.portal") : 60106, De = we ? Symbol.for("react.fragment") : 60107, Oe = we ? Symbol.for("react.strict_mode") : 60108, ke = we ? Symbol.for("react.profiler") : 60114, Ae = we ? Symbol.for("react.provider") : 60109, je = we ? Symbol.for("react.context") : 60110, Me = we ? Symbol.for("react.concurrent_mode") : 60111, Ne = we ? Symbol.for("react.forward_ref") : 60112, Pe = we ? Symbol.for("react.suspense") : 60113, Fe = we ? Symbol.for("react.suspense_list") : 60120, Ie = we ? Symbol.for("react.memo") : 60115, Le = we ? Symbol.for("react.lazy") : 60116, Re = we ? Symbol.for("react.block") : 60121, ze = typeof Symbol == "function" && Symbol.iterator;
	function Be(e) {
		return typeof e != "object" || !e ? null : (e = ze && e[ze] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	function Ve(e) {
		if (e._status === -1) {
			e._status = 0;
			var t = e._ctor;
			t = t(), e._result = t, t.then(function(t) {
				e._status === 0 && (t = t.default, e._status = 1, e._result = t);
			}, function(t) {
				e._status === 0 && (e._status = 2, e._result = t);
			});
		}
	}
	function He(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case De: return "Fragment";
			case Ee: return "Portal";
			case ke: return "Profiler";
			case Oe: return "StrictMode";
			case Pe: return "Suspense";
			case Fe: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case je: return "Context.Consumer";
			case Ae: return "Context.Provider";
			case Ne:
				var t = e.render;
				return t = t.displayName || t.name || "", e.displayName || (t === "" ? "ForwardRef" : "ForwardRef(" + t + ")");
			case Ie: return He(e.type);
			case Re: return He(e.render);
			case Le: if (e = e._status === 1 ? e._result : null) return He(e);
		}
		return null;
	}
	function Ue(e) {
		var t = "";
		do {
			a: switch (e.tag) {
				case 3:
				case 4:
				case 6:
				case 7:
				case 10:
				case 9:
					var n = "";
					break a;
				default:
					var r = e._debugOwner, i = e._debugSource, a = He(e.type);
					n = null, r && (n = He(r.type)), r = a, a = "", i ? a = " (at " + i.fileName.replace(Ce, "") + ":" + i.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + a;
			}
			t += n, e = e.return;
		} while (e);
		return t;
	}
	function We(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "object":
			case "string":
			case "undefined": return e;
			default: return "";
		}
	}
	function Ge(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Ke(e) {
		var t = Ge(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
		if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == "function" && typeof n.set == "function") {
			var i = n.get, a = n.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					r = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
				getValue: function() {
					return r;
				},
				setValue: function(e) {
					r = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function qe(e) {
		e._valueTracker ||= Ke(e);
	}
	function Je(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Ge(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Ye(e, t) {
		var r = t.checked;
		return n({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: r ?? e._wrapperState.initialChecked
		});
	}
	function Xe(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = We(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function Ze(e, t) {
		t = t.checked, t != null && Se(e, "checked", t, !1);
	}
	function Qe(e, t) {
		Ze(e, t);
		var n = We(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? et(e, t.type, n) : t.hasOwnProperty("defaultValue") && et(e, t.type, We(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function $e(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function et(e, t, n) {
		(t !== "number" || e.ownerDocument.activeElement !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	function tt(e) {
		var n = "";
		return t.Children.forEach(e, function(e) {
			e != null && (n += e);
		}), n;
	}
	function nt(e, t) {
		return e = n({ children: void 0 }, t), (t = tt(t.children)) && (e.children = t), e;
	}
	function rt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + We(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function it(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
		return n({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function at(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(i(92));
				if (Array.isArray(n)) {
					if (!(1 >= n.length)) throw Error(i(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: We(n) };
	}
	function ot(e, t) {
		var n = We(t.value), r = We(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function st(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	var ct = {
		html: "http://www.w3.org/1999/xhtml",
		mathml: "http://www.w3.org/1998/Math/MathML",
		svg: "http://www.w3.org/2000/svg"
	};
	function lt(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function ut(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? lt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
	}
	var dt, ft = function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, i);
			});
		} : e;
	}(function(e, t) {
		if (e.namespaceURI !== ct.svg || "innerHTML" in e) e.innerHTML = t;
		else {
			for (dt ||= document.createElement("div"), dt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dt.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild);
		}
	});
	function pt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	function mt(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ht = {
		animationend: mt("Animation", "AnimationEnd"),
		animationiteration: mt("Animation", "AnimationIteration"),
		animationstart: mt("Animation", "AnimationStart"),
		transitionend: mt("Transition", "TransitionEnd")
	}, gt = {}, _t = {};
	k && (_t = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
	function vt(e) {
		if (gt[e]) return gt[e];
		if (!ht[e]) return e;
		var t = ht[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in _t) return gt[e] = t[n];
		return e;
	}
	var yt = vt("animationend"), bt = vt("animationiteration"), xt = vt("animationstart"), St = vt("transitionend"), Ct = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wt = new (typeof WeakMap == "function" ? WeakMap : Map)();
	function Tt(e) {
		var t = wt.get(e);
		return t === void 0 && (t = /* @__PURE__ */ new Map(), wt.set(e, t)), t;
	}
	function Et(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.effectTag & 1026 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function Dt(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function Ot(e) {
		if (Et(e) !== e) throw Error(i(188));
	}
	function kt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = Et(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var o = a.alternate;
			if (o === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === o.child) {
				for (o = a.child; o;) {
					if (o === n) return Ot(a), e;
					if (o === r) return Ot(a), t;
					o = o.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = o;
			else {
				for (var s = !1, c = a.child; c;) {
					if (c === n) {
						s = !0, n = a, r = o;
						break;
					}
					if (c === r) {
						s = !0, r = a, n = o;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = o.child; c;) {
						if (c === n) {
							s = !0, n = o, r = a;
							break;
						}
						if (c === r) {
							s = !0, r = o, n = a;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function At(e) {
		if (e = kt(e), !e) return null;
		for (var t = e;;) {
			if (t.tag === 5 || t.tag === 6) return t;
			if (t.child) t.child.return = t, t = t.child;
			else {
				if (t === e) break;
				for (; !t.sibling;) {
					if (!t.return || t.return === e) return null;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return null;
	}
	function jt(e, t) {
		if (t == null) throw Error(i(30));
		return e == null ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
	}
	function Mt(e, t, n) {
		Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
	}
	var Nt = null;
	function Pt(e) {
		if (e) {
			var t = e._dispatchListeners, n = e._dispatchInstances;
			if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) y(e, t[r], n[r]);
			else t && y(e, t, n);
			e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e);
		}
	}
	function Ft(e) {
		if (e !== null && (Nt = jt(Nt, e)), e = Nt, Nt = null, e) {
			if (Mt(e, Pt), Nt) throw Error(i(95));
			if (d) throw e = f, d = !1, f = null, e;
		}
	}
	function It(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	function Lt(e) {
		if (!k) return !1;
		e = "on" + e;
		var t = e in document;
		return t ||= (t = document.createElement("div"), t.setAttribute(e, "return;"), typeof t[e] == "function"), t;
	}
	var Rt = [];
	function zt(e) {
		e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > Rt.length && Rt.push(e);
	}
	function Bt(e, t, n, r) {
		if (Rt.length) {
			var i = Rt.pop();
			return i.topLevelType = e, i.eventSystemFlags = r, i.nativeEvent = t, i.targetInst = n, i;
		}
		return {
			topLevelType: e,
			eventSystemFlags: r,
			nativeEvent: t,
			targetInst: n,
			ancestors: []
		};
	}
	function Vt(e) {
		var t = e.targetInst, n = t;
		do {
			if (!n) {
				e.ancestors.push(n);
				break;
			}
			var r = n;
			if (r.tag === 3) r = r.stateNode.containerInfo;
			else {
				for (; r.return;) r = r.return;
				r = r.tag === 3 ? r.stateNode.containerInfo : null;
			}
			if (!r) break;
			t = n.tag, t !== 5 && t !== 6 || e.ancestors.push(n), n = or(r);
		} while (n);
		for (n = 0; n < e.ancestors.length; n++) {
			t = e.ancestors[n];
			var i = It(e.nativeEvent);
			r = e.topLevelType;
			var a = e.nativeEvent, o = e.eventSystemFlags;
			n === 0 && (o |= 64);
			for (var s = null, c = 0; c < w.length; c++) {
				var l = w[c];
				(l &&= l.extractEvents(r, t, a, i, o)) && (s = jt(s, l));
			}
			Ft(s);
		}
	}
	function Ht(e, t, n) {
		if (!n.has(e)) {
			switch (e) {
				case "scroll":
					Cn(t, "scroll", !0);
					break;
				case "focus":
				case "blur":
					Cn(t, "focus", !0), Cn(t, "blur", !0), n.set("blur", null), n.set("focus", null);
					break;
				case "cancel":
				case "close":
					Lt(e) && Cn(t, e, !0);
					break;
				case "invalid":
				case "submit":
				case "reset": break;
				default: Ct.indexOf(e) === -1 && F(e, t);
			}
			n.set(e, null);
		}
	}
	var Ut, Wt, Gt, Kt = !1, qt = [], Jt = null, Yt = null, Xt = null, Zt = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), $t = [], P = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), en = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
	function tn(e, t) {
		var n = Tt(t);
		P.forEach(function(e) {
			Ht(e, t, n);
		}), en.forEach(function(e) {
			Ht(e, t, n);
		});
	}
	function nn(e, t, n, r, i) {
		return {
			blockedOn: e,
			topLevelType: t,
			eventSystemFlags: n | 32,
			nativeEvent: i,
			container: r
		};
	}
	function rn(e, t) {
		switch (e) {
			case "focus":
			case "blur":
				Jt = null;
				break;
			case "dragenter":
			case "dragleave":
				Yt = null;
				break;
			case "mouseover":
			case "mouseout":
				Xt = null;
				break;
			case "pointerover":
			case "pointerout":
				Zt.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Qt.delete(t.pointerId);
		}
	}
	function an(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = nn(t, n, r, i, a), t !== null && (t = sr(t), t !== null && Wt(t)), e) : (e.eventSystemFlags |= r, e);
	}
	function on(e, t, n, r, i) {
		switch (t) {
			case "focus": return Jt = an(Jt, e, t, n, r, i), !0;
			case "dragenter": return Yt = an(Yt, e, t, n, r, i), !0;
			case "mouseover": return Xt = an(Xt, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Zt.set(a, an(Zt.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, Qt.set(a, an(Qt.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function sn(e) {
		var t = or(e.target);
		if (t !== null) {
			var n = Et(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = Dt(n), t !== null) {
						e.blockedOn = t, r.unstable_runWithPriority(e.priority, function() {
							Gt(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.hydrate) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function cn(e) {
		if (e.blockedOn !== null) return !1;
		var t = Dn(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
		if (t !== null) {
			var n = sr(t);
			return n !== null && Wt(n), e.blockedOn = t, !1;
		}
		return !0;
	}
	function ln(e, t, n) {
		cn(e) && n.delete(t);
	}
	function un() {
		for (Kt = !1; 0 < qt.length;) {
			var e = qt[0];
			if (e.blockedOn !== null) {
				e = sr(e.blockedOn), e !== null && Ut(e);
				break;
			}
			var t = Dn(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
			t === null ? qt.shift() : e.blockedOn = t;
		}
		Jt !== null && cn(Jt) && (Jt = null), Yt !== null && cn(Yt) && (Yt = null), Xt !== null && cn(Xt) && (Xt = null), Zt.forEach(ln), Qt.forEach(ln);
	}
	function dn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Kt || (Kt = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, un)));
	}
	function fn(e) {
		function t(t) {
			return dn(t, e);
		}
		if (0 < qt.length) {
			dn(qt[0], e);
			for (var n = 1; n < qt.length; n++) {
				var r = qt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (Jt !== null && dn(Jt, e), Yt !== null && dn(Yt, e), Xt !== null && dn(Xt, e), Zt.forEach(t), Qt.forEach(t), n = 0; n < $t.length; n++) r = $t[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < $t.length && (n = $t[0], n.blockedOn === null);) sn(n), n.blockedOn === null && $t.shift();
	}
	var pn = {}, mn = /* @__PURE__ */ new Map(), hn = /* @__PURE__ */ new Map(), gn = [
		"abort",
		"abort",
		yt,
		"animationEnd",
		bt,
		"animationIteration",
		xt,
		"animationStart",
		"canplay",
		"canPlay",
		"canplaythrough",
		"canPlayThrough",
		"durationchange",
		"durationChange",
		"emptied",
		"emptied",
		"encrypted",
		"encrypted",
		"ended",
		"ended",
		"error",
		"error",
		"gotpointercapture",
		"gotPointerCapture",
		"load",
		"load",
		"loadeddata",
		"loadedData",
		"loadedmetadata",
		"loadedMetadata",
		"loadstart",
		"loadStart",
		"lostpointercapture",
		"lostPointerCapture",
		"playing",
		"playing",
		"progress",
		"progress",
		"seeking",
		"seeking",
		"stalled",
		"stalled",
		"suspend",
		"suspend",
		"timeupdate",
		"timeUpdate",
		St,
		"transitionEnd",
		"waiting",
		"waiting"
	];
	function _n(e, t) {
		for (var n = 0; n < e.length; n += 2) {
			var r = e[n], i = e[n + 1], a = "on" + (i[0].toUpperCase() + i.slice(1));
			a = {
				phasedRegistrationNames: {
					bubbled: a,
					captured: a + "Capture"
				},
				dependencies: [r],
				eventPriority: t
			}, hn.set(r, t), mn.set(r, a), pn[i] = a;
		}
	}
	_n("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), _n("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), _n(gn, 2);
	for (var vn = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), yn = 0; yn < vn.length; yn++) hn.set(vn[yn], 0);
	var bn = r.unstable_UserBlockingPriority, xn = r.unstable_runWithPriority, Sn = !0;
	function F(e, t) {
		Cn(t, e, !1);
	}
	function Cn(e, t, n) {
		var r = hn.get(t);
		switch (r === void 0 ? 2 : r) {
			case 0:
				r = wn.bind(null, t, 1, e);
				break;
			case 1:
				r = Tn.bind(null, t, 1, e);
				break;
			default: r = En.bind(null, t, 1, e);
		}
		n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
	}
	function wn(e, t, n, r) {
		se || ae();
		var i = En, a = se;
		se = !0;
		try {
			ie(i, e, t, n, r);
		} finally {
			(se = a) || le();
		}
	}
	function Tn(e, t, n, r) {
		xn(bn, En.bind(null, e, t, n, r));
	}
	function En(e, t, n, r) {
		if (Sn) if (0 < qt.length && -1 < P.indexOf(e)) e = nn(null, e, t, n, r), qt.push(e);
		else {
			var i = Dn(e, t, n, r);
			if (i === null) rn(e, r);
			else if (-1 < P.indexOf(e)) e = nn(i, e, t, n, r), qt.push(e);
			else if (!on(i, e, t, n, r)) {
				rn(e, r), e = Bt(e, r, null, t);
				try {
					ue(Vt, e);
				} finally {
					zt(e);
				}
			}
		}
	}
	function Dn(e, t, n, r) {
		if (n = It(r), n = or(n), n !== null) {
			var i = Et(n);
			if (i === null) n = null;
			else {
				var a = i.tag;
				if (a === 13) {
					if (n = Dt(i), n !== null) return n;
					n = null;
				} else if (a === 3) {
					if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
					n = null;
				} else i !== n && (n = null);
			}
		}
		e = Bt(e, r, n, t);
		try {
			ue(Vt, e);
		} finally {
			zt(e);
		}
		return null;
	}
	var On = {
		animationIterationCount: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, kn = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(On).forEach(function(e) {
		kn.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
		});
	});
	function An(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
	}
	function jn(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = An(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Mn = n({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function Nn(e, t) {
		if (t) {
			if (Mn[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e, ""));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(i(60));
				if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(i(62, ""));
		}
	}
	function Pn(e, t) {
		if (e.indexOf("-") === -1) return typeof t.is == "string";
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var Fn = ct.html;
	function In(e, t) {
		e = e.nodeType === 9 || e.nodeType === 11 ? e : e.ownerDocument;
		var n = Tt(e);
		t = D[t];
		for (var r = 0; r < t.length; r++) Ht(t[r], e, n);
	}
	function Ln() {}
	function Rn(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function zn(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Bn(e, t) {
		var n = zn(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = zn(n);
		}
	}
	function Vn(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vn(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Hn() {
		for (var e = window, t = Rn(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Rn(e.document);
		}
		return t;
	}
	function Un(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Wn = "$", Gn = "/$", Kn = "$?", qn = "$!", Jn = null, Yn = null;
	function Xn(e, t) {
		switch (e) {
			case "button":
			case "input":
			case "select":
			case "textarea": return !!t.autoFocus;
		}
		return !1;
	}
	function Zn(e, t) {
		return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Qn = typeof setTimeout == "function" ? setTimeout : void 0, $n = typeof clearTimeout == "function" ? clearTimeout : void 0;
	function er(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
		}
		return e;
	}
	function tr(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === Wn || n === qn || n === Kn) {
					if (t === 0) return e;
					t--;
				} else n === Gn && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var nr = Math.random().toString(36).slice(2), rr = "__reactInternalInstance$" + nr, ir = "__reactEventHandlers$" + nr, ar = "__reactContainere$" + nr;
	function or(e) {
		var t = e[rr];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[ar] || n[rr]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = tr(e); e !== null;) {
					if (n = e[rr]) return n;
					e = tr(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function sr(e) {
		return e = e[rr] || e[ar], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function cr(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(i(33));
	}
	function lr(e) {
		return e[ir] || null;
	}
	function ur(e) {
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function dr(e, t) {
		var n = e.stateNode;
		if (!n) return null;
		var r = g(n);
		if (!r) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	function fr(e, t, n) {
		(t = dr(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = jt(n._dispatchListeners, t), n._dispatchInstances = jt(n._dispatchInstances, e));
	}
	function pr(e) {
		if (e && e.dispatchConfig.phasedRegistrationNames) {
			for (var t = e._targetInst, n = []; t;) n.push(t), t = ur(t);
			for (t = n.length; 0 < t--;) fr(n[t], "captured", e);
			for (t = 0; t < n.length; t++) fr(n[t], "bubbled", e);
		}
	}
	function mr(e, t, n) {
		e && n && n.dispatchConfig.registrationName && (t = dr(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = jt(n._dispatchListeners, t), n._dispatchInstances = jt(n._dispatchInstances, e));
	}
	function hr(e) {
		e && e.dispatchConfig.registrationName && mr(e._targetInst, null, e);
	}
	function gr(e) {
		Mt(e, pr);
	}
	var _r = null, vr = null, yr = null;
	function br() {
		if (yr) return yr;
		var e, t = vr, n = t.length, r, i = "value" in _r ? _r.value : _r.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return yr = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function xr() {
		return !0;
	}
	function Sr() {
		return !1;
	}
	function Cr(e, t, n, r) {
		for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface, e) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : i === "target" ? this.target = r : this[i] = n[i]);
		return this.isDefaultPrevented = (n.defaultPrevented == null ? !1 === n.returnValue : n.defaultPrevented) ? xr : Sr, this.isPropagationStopped = Sr, this;
	}
	n(Cr.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var e = this.nativeEvent;
			e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = xr);
		},
		stopPropagation: function() {
			var e = this.nativeEvent;
			e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = xr);
		},
		persist: function() {
			this.isPersistent = xr;
		},
		isPersistent: Sr,
		destructor: function() {
			var e = this.constructor.Interface, t;
			for (t in e) this[t] = null;
			this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Sr, this._dispatchInstances = this._dispatchListeners = null;
		}
	}), Cr.Interface = {
		type: null,
		target: null,
		currentTarget: function() {
			return null;
		},
		eventPhase: null,
		bubbles: null,
		cancelable: null,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: null,
		isTrusted: null
	}, Cr.extend = function(e) {
		function t() {}
		function r() {
			return i.apply(this, arguments);
		}
		var i = this;
		t.prototype = i.prototype;
		var a = new t();
		return n(a, r.prototype), r.prototype = a, r.prototype.constructor = r, r.Interface = n({}, i.Interface, e), r.extend = i.extend, Er(r), r;
	}, Er(Cr);
	function wr(e, t, n, r) {
		if (this.eventPool.length) {
			var i = this.eventPool.pop();
			return this.call(i, e, t, n, r), i;
		}
		return new this(e, t, n, r);
	}
	function Tr(e) {
		if (!(e instanceof this)) throw Error(i(279));
		e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
	}
	function Er(e) {
		e.eventPool = [], e.getPooled = wr, e.release = Tr;
	}
	var Dr = Cr.extend({ data: null }), Or = Cr.extend({ data: null }), kr = [
		9,
		13,
		27,
		32
	], Ar = k && "CompositionEvent" in window, jr = null;
	k && "documentMode" in document && (jr = document.documentMode);
	var Mr = k && "TextEvent" in window && !jr, Nr = k && (!Ar || jr && 8 < jr && 11 >= jr), Pr = " ", Fr = {
		beforeInput: {
			phasedRegistrationNames: {
				bubbled: "onBeforeInput",
				captured: "onBeforeInputCapture"
			},
			dependencies: [
				"compositionend",
				"keypress",
				"textInput",
				"paste"
			]
		},
		compositionEnd: {
			phasedRegistrationNames: {
				bubbled: "onCompositionEnd",
				captured: "onCompositionEndCapture"
			},
			dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
		},
		compositionStart: {
			phasedRegistrationNames: {
				bubbled: "onCompositionStart",
				captured: "onCompositionStartCapture"
			},
			dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
		},
		compositionUpdate: {
			phasedRegistrationNames: {
				bubbled: "onCompositionUpdate",
				captured: "onCompositionUpdateCapture"
			},
			dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
		}
	}, Ir = !1;
	function Lr(e, t) {
		switch (e) {
			case "keyup": return kr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "blur": return !0;
			default: return !1;
		}
	}
	function Rr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var zr = !1;
	function Br(e, t) {
		switch (e) {
			case "compositionend": return Rr(t);
			case "keypress": return t.which === 32 ? (Ir = !0, Pr) : null;
			case "textInput": return e = t.data, e === Pr && Ir ? null : e;
			default: return null;
		}
	}
	function Vr(e, t) {
		if (zr) return e === "compositionend" || !Ar && Lr(e, t) ? (e = br(), yr = vr = _r = null, zr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return Nr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Hr = {
		eventTypes: Fr,
		extractEvents: function(e, t, n, r) {
			var i;
			if (Ar) b: {
				switch (e) {
					case "compositionstart":
						var a = Fr.compositionStart;
						break b;
					case "compositionend":
						a = Fr.compositionEnd;
						break b;
					case "compositionupdate":
						a = Fr.compositionUpdate;
						break b;
				}
				a = void 0;
			}
			else zr ? Lr(e, n) && (a = Fr.compositionEnd) : e === "keydown" && n.keyCode === 229 && (a = Fr.compositionStart);
			return a ? (Nr && n.locale !== "ko" && (zr || a !== Fr.compositionStart ? a === Fr.compositionEnd && zr && (i = br()) : (_r = r, vr = "value" in _r ? _r.value : _r.textContent, zr = !0)), a = Dr.getPooled(a, t, n, r), i ? a.data = i : (i = Rr(n), i !== null && (a.data = i)), gr(a), i = a) : i = null, (e = Mr ? Br(e, n) : Vr(e, n)) ? (t = Or.getPooled(Fr.beforeInput, t, n, r), t.data = e, gr(t)) : t = null, i === null ? t : t === null ? i : [i, t];
		}
	}, Ur = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function Wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Ur[e.type] : t === "textarea";
	}
	var Gr = { change: {
		phasedRegistrationNames: {
			bubbled: "onChange",
			captured: "onChangeCapture"
		},
		dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
	} };
	function Kr(e, t, n) {
		return e = Cr.getPooled(Gr.change, e, t, n), e.type = "change", te(n), gr(e), e;
	}
	var qr = null, Jr = null;
	function Yr(e) {
		Ft(e);
	}
	function Xr(e) {
		if (Je(cr(e))) return e;
	}
	function Zr(e, t) {
		if (e === "change") return t;
	}
	var Qr = !1;
	k && (Qr = Lt("input") && (!document.documentMode || 9 < document.documentMode));
	function $r() {
		qr && (qr.detachEvent("onpropertychange", ei), Jr = qr = null);
	}
	function ei(e) {
		if (e.propertyName === "value" && Xr(Jr)) if (e = Kr(Jr, e, It(e)), se) Ft(e);
		else {
			se = !0;
			try {
				re(Yr, e);
			} finally {
				se = !1, le();
			}
		}
	}
	function ti(e, t, n) {
		e === "focus" ? ($r(), qr = t, Jr = n, qr.attachEvent("onpropertychange", ei)) : e === "blur" && $r();
	}
	function ni(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xr(Jr);
	}
	function ri(e, t) {
		if (e === "click") return Xr(t);
	}
	function ii(e, t) {
		if (e === "input" || e === "change") return Xr(t);
	}
	var ai = {
		eventTypes: Gr,
		_isInputEventSupported: Qr,
		extractEvents: function(e, t, n, r) {
			var i = t ? cr(t) : window, a = i.nodeName && i.nodeName.toLowerCase();
			if (a === "select" || a === "input" && i.type === "file") var o = Zr;
			else if (Wr(i)) if (Qr) o = ii;
			else {
				o = ni;
				var s = ti;
			}
			else (a = i.nodeName) && a.toLowerCase() === "input" && (i.type === "checkbox" || i.type === "radio") && (o = ri);
			if (o &&= o(e, t)) return Kr(o, n, r);
			s && s(e, i, t), e === "blur" && (e = i._wrapperState) && e.controlled && i.type === "number" && et(i, "number", i.value);
		}
	}, oi = Cr.extend({
		view: null,
		detail: null
	}), si = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function ci(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = si[e]) ? !!t[e] : !1;
	}
	function li() {
		return ci;
	}
	var ui = 0, di = 0, fi = !1, pi = !1, mi = oi.extend({
		screenX: null,
		screenY: null,
		clientX: null,
		clientY: null,
		pageX: null,
		pageY: null,
		ctrlKey: null,
		shiftKey: null,
		altKey: null,
		metaKey: null,
		getModifierState: li,
		button: null,
		buttons: null,
		relatedTarget: function(e) {
			return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
		},
		movementX: function(e) {
			if ("movementX" in e) return e.movementX;
			var t = ui;
			return ui = e.screenX, fi ? e.type === "mousemove" ? e.screenX - t : 0 : (fi = !0, 0);
		},
		movementY: function(e) {
			if ("movementY" in e) return e.movementY;
			var t = di;
			return di = e.screenY, pi ? e.type === "mousemove" ? e.screenY - t : 0 : (pi = !0, 0);
		}
	}), hi = mi.extend({
		pointerId: null,
		width: null,
		height: null,
		pressure: null,
		tangentialPressure: null,
		tiltX: null,
		tiltY: null,
		twist: null,
		pointerType: null,
		isPrimary: null
	}), gi = {
		mouseEnter: {
			registrationName: "onMouseEnter",
			dependencies: ["mouseout", "mouseover"]
		},
		mouseLeave: {
			registrationName: "onMouseLeave",
			dependencies: ["mouseout", "mouseover"]
		},
		pointerEnter: {
			registrationName: "onPointerEnter",
			dependencies: ["pointerout", "pointerover"]
		},
		pointerLeave: {
			registrationName: "onPointerLeave",
			dependencies: ["pointerout", "pointerover"]
		}
	}, _i = {
		eventTypes: gi,
		extractEvents: function(e, t, n, r, i) {
			var a = e === "mouseover" || e === "pointerover", o = e === "mouseout" || e === "pointerout";
			if (a && !(i & 32) && (n.relatedTarget || n.fromElement) || !o && !a) return null;
			if (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, o) {
				if (o = t, t = (t = n.relatedTarget || n.toElement) ? or(t) : null, t !== null) {
					var s = Et(t);
					(t !== s || t.tag !== 5 && t.tag !== 6) && (t = null);
				}
			} else o = null;
			if (o === t) return null;
			if (e === "mouseout" || e === "mouseover") var c = mi, l = gi.mouseLeave, u = gi.mouseEnter, d = "mouse";
			else (e === "pointerout" || e === "pointerover") && (c = hi, l = gi.pointerLeave, u = gi.pointerEnter, d = "pointer");
			if (e = o == null ? a : cr(o), a = t == null ? a : cr(t), l = c.getPooled(l, o, n, r), l.type = d + "leave", l.target = e, l.relatedTarget = a, n = c.getPooled(u, t, n, r), n.type = d + "enter", n.target = a, n.relatedTarget = e, r = o, d = t, r && d) a: {
				for (c = r, u = d, o = 0, e = c; e; e = ur(e)) o++;
				for (e = 0, t = u; t; t = ur(t)) e++;
				for (; 0 < o - e;) c = ur(c), o--;
				for (; 0 < e - o;) u = ur(u), e--;
				for (; o--;) {
					if (c === u || c === u.alternate) break a;
					c = ur(c), u = ur(u);
				}
				c = null;
			}
			else c = null;
			for (u = c, c = []; r && r !== u && (o = r.alternate, !(o !== null && o === u));) c.push(r), r = ur(r);
			for (r = []; d && d !== u && (o = d.alternate, !(o !== null && o === u));) r.push(d), d = ur(d);
			for (d = 0; d < c.length; d++) mr(c[d], "bubbled", l);
			for (d = r.length; 0 < d--;) mr(r[d], "captured", n);
			return i & 64 ? [l, n] : [l];
		}
	};
	function vi(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var yi = typeof Object.is == "function" ? Object.is : vi, bi = Object.prototype.hasOwnProperty;
	function xi(e, t) {
		if (yi(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) if (!bi.call(t, n[r]) || !yi(e[n[r]], t[n[r]])) return !1;
		return !0;
	}
	var Si = k && "documentMode" in document && 11 >= document.documentMode, Ci = { select: {
		phasedRegistrationNames: {
			bubbled: "onSelect",
			captured: "onSelectCapture"
		},
		dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
	} }, wi = null, Ti = null, Ei = null, Di = !1;
	function Oi(e, t) {
		var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
		return Di || wi == null || wi !== Rn(n) ? null : (n = wi, "selectionStart" in n && Un(n) ? n = {
			start: n.selectionStart,
			end: n.selectionEnd
		} : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
			anchorNode: n.anchorNode,
			anchorOffset: n.anchorOffset,
			focusNode: n.focusNode,
			focusOffset: n.focusOffset
		}), Ei && xi(Ei, n) ? null : (Ei = n, e = Cr.getPooled(Ci.select, Ti, e, t), e.type = "select", e.target = wi, gr(e), e));
	}
	var ki = {
		eventTypes: Ci,
		extractEvents: function(e, t, n, r, i, a) {
			if (i = a || (r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument), !(a = !i)) {
				a: {
					i = Tt(i), a = D.onSelect;
					for (var o = 0; o < a.length; o++) if (!i.has(a[o])) {
						i = !1;
						break a;
					}
					i = !0;
				}
				a = !i;
			}
			if (a) return null;
			switch (i = t ? cr(t) : window, e) {
				case "focus":
					(Wr(i) || i.contentEditable === "true") && (wi = i, Ti = t, Ei = null);
					break;
				case "blur":
					Ei = Ti = wi = null;
					break;
				case "mousedown":
					Di = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend": return Di = !1, Oi(n, r);
				case "selectionchange": if (Si) break;
				case "keydown":
				case "keyup": return Oi(n, r);
			}
			return null;
		}
	}, Ai = Cr.extend({
		animationName: null,
		elapsedTime: null,
		pseudoElement: null
	}), ji = Cr.extend({ clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} }), Mi = oi.extend({ relatedTarget: null });
	function I(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	var Ni = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Pi = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Fi = oi.extend({
		key: function(e) {
			if (e.key) {
				var t = Ni[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = I(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pi[e.keyCode] || "Unidentified" : "";
		},
		location: null,
		ctrlKey: null,
		shiftKey: null,
		altKey: null,
		metaKey: null,
		repeat: null,
		locale: null,
		getModifierState: li,
		charCode: function(e) {
			return e.type === "keypress" ? I(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? I(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	}), Ii = mi.extend({ dataTransfer: null }), Li = oi.extend({
		touches: null,
		targetTouches: null,
		changedTouches: null,
		altKey: null,
		metaKey: null,
		ctrlKey: null,
		shiftKey: null,
		getModifierState: li
	}), Ri = Cr.extend({
		propertyName: null,
		elapsedTime: null,
		pseudoElement: null
	}), zi = mi.extend({
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: null,
		deltaMode: null
	}), Bi = {
		eventTypes: pn,
		extractEvents: function(e, t, n, r) {
			var i = mn.get(e);
			if (!i) return null;
			switch (e) {
				case "keypress": if (I(n) === 0) return null;
				case "keydown":
				case "keyup":
					e = Fi;
					break;
				case "blur":
				case "focus":
					e = Mi;
					break;
				case "click": if (n.button === 2) return null;
				case "auxclick":
				case "dblclick":
				case "mousedown":
				case "mousemove":
				case "mouseup":
				case "mouseout":
				case "mouseover":
				case "contextmenu":
					e = mi;
					break;
				case "drag":
				case "dragend":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "dragstart":
				case "drop":
					e = Ii;
					break;
				case "touchcancel":
				case "touchend":
				case "touchmove":
				case "touchstart":
					e = Li;
					break;
				case yt:
				case bt:
				case xt:
					e = Ai;
					break;
				case St:
					e = Ri;
					break;
				case "scroll":
					e = oi;
					break;
				case "wheel":
					e = zi;
					break;
				case "copy":
				case "cut":
				case "paste":
					e = ji;
					break;
				case "gotpointercapture":
				case "lostpointercapture":
				case "pointercancel":
				case "pointerdown":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "pointerup":
					e = hi;
					break;
				default: e = Cr;
			}
			return t = e.getPooled(i, t, n, r), gr(t), t;
		}
	};
	if (b) throw Error(i(101));
	b = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), S();
	var Vi = sr;
	g = lr, _ = Vi, v = cr, O({
		SimpleEventPlugin: Bi,
		EnterLeaveEventPlugin: _i,
		ChangeEventPlugin: ai,
		SelectEventPlugin: ki,
		BeforeInputEventPlugin: Hr
	});
	var Hi = [], Ui = -1;
	function L(e) {
		0 > Ui || (e.current = Hi[Ui], Hi[Ui] = null, Ui--);
	}
	function R(e, t) {
		Ui++, Hi[Ui] = e.current, e.current = t;
	}
	var Wi = {}, z = { current: Wi }, B = { current: !1 }, Gi = Wi;
	function Ki(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Wi;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function qi(e) {
		return e = e.childContextTypes, e != null;
	}
	function Ji() {
		L(B), L(z);
	}
	function Yi(e, t, n) {
		if (z.current !== Wi) throw Error(i(168));
		R(z, t), R(B, n);
	}
	function Xi(e, t, r) {
		var a = e.stateNode;
		if (e = t.childContextTypes, typeof a.getChildContext != "function") return r;
		for (var o in a = a.getChildContext(), a) if (!(o in e)) throw Error(i(108, He(t) || "Unknown", o));
		return n({}, r, {}, a);
	}
	function Zi(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wi, Gi = z.current, R(z, e), R(B, B.current), !0;
	}
	function V(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(i(169));
		n ? (e = Xi(e, t, Gi), r.__reactInternalMemoizedMergedChildContext = e, L(B), L(z), R(z, e)) : L(B), R(B, n);
	}
	var Qi = r.unstable_runWithPriority, $i = r.unstable_scheduleCallback, ea = r.unstable_cancelCallback, ta = r.unstable_requestPaint, na = r.unstable_now, ra = r.unstable_getCurrentPriorityLevel, ia = r.unstable_ImmediatePriority, aa = r.unstable_UserBlockingPriority, oa = r.unstable_NormalPriority, sa = r.unstable_LowPriority, ca = r.unstable_IdlePriority, la = {}, ua = r.unstable_shouldYield, da = ta === void 0 ? function() {} : ta, fa = null, pa = null, ma = !1, ha = na(), ga = 1e4 > ha ? na : function() {
		return na() - ha;
	};
	function _a() {
		switch (ra()) {
			case ia: return 99;
			case aa: return 98;
			case oa: return 97;
			case sa: return 96;
			case ca: return 95;
			default: throw Error(i(332));
		}
	}
	function va(e) {
		switch (e) {
			case 99: return ia;
			case 98: return aa;
			case 97: return oa;
			case 96: return sa;
			case 95: return ca;
			default: throw Error(i(332));
		}
	}
	function ya(e, t) {
		return e = va(e), Qi(e, t);
	}
	function ba(e, t, n) {
		return e = va(e), $i(e, t, n);
	}
	function xa(e) {
		return fa === null ? (fa = [e], pa = $i(ia, Ca)) : fa.push(e), la;
	}
	function Sa() {
		if (pa !== null) {
			var e = pa;
			pa = null, ea(e);
		}
		Ca();
	}
	function Ca() {
		if (!ma && fa !== null) {
			ma = !0;
			var e = 0;
			try {
				var t = fa;
				ya(99, function() {
					for (; e < t.length; e++) {
						var n = t[e];
						do
							n = n(!0);
						while (n !== null);
					}
				}), fa = null;
			} catch (t) {
				throw fa !== null && (fa = fa.slice(e + 1)), $i(ia, Sa), t;
			} finally {
				ma = !1;
			}
		}
	}
	function wa(e, t, n) {
		return n /= 10, 1073741821 - (((1073741821 - e + t / 10) / n | 0) + 1) * n;
	}
	function Ta(e, t) {
		if (e && e.defaultProps) for (var r in t = n({}, t), e = e.defaultProps, e) t[r] === void 0 && (t[r] = e[r]);
		return t;
	}
	var Ea = { current: null }, Da = null, Oa = null, ka = null;
	function Aa() {
		ka = Oa = Da = null;
	}
	function ja(e) {
		var t = Ea.current;
		L(Ea), e.type._context._currentValue = t;
	}
	function Ma(e, t) {
		for (; e !== null;) {
			var n = e.alternate;
			if (e.childExpirationTime < t) e.childExpirationTime = t, n !== null && n.childExpirationTime < t && (n.childExpirationTime = t);
			else if (n !== null && n.childExpirationTime < t) n.childExpirationTime = t;
			else break;
			e = e.return;
		}
	}
	function Na(e, t) {
		Da = e, ka = Oa = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.expirationTime >= t && (as = !0), e.firstContext = null);
	}
	function Pa(e, t) {
		if (ka !== e && !1 !== t && t !== 0) if ((typeof t != "number" || t === 1073741823) && (ka = e, t = 1073741823), t = {
			context: e,
			observedBits: t,
			next: null
		}, Oa === null) {
			if (Da === null) throw Error(i(308));
			Oa = t, Da.dependencies = {
				expirationTime: 0,
				firstContext: t,
				responders: null
			};
		} else Oa = Oa.next = t;
		return e._currentValue;
	}
	var Fa = !1;
	function Ia(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			baseQueue: null,
			shared: { pending: null },
			effects: null
		};
	}
	function La(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			baseQueue: e.baseQueue,
			shared: e.shared,
			effects: e.effects
		});
	}
	function Ra(e, t) {
		return e = {
			expirationTime: e,
			suspenseConfig: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}, e.next = e;
	}
	function za(e, t) {
		if (e = e.updateQueue, e !== null) {
			e = e.shared;
			var n = e.pending;
			n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
		}
	}
	function Ba(e, t) {
		var n = e.alternate;
		n !== null && La(n, e), e = e.updateQueue, n = e.baseQueue, n === null ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t);
	}
	function Va(e, t, r, i) {
		var a = e.updateQueue;
		Fa = !1;
		var o = a.baseQueue, s = a.shared.pending;
		if (s !== null) {
			if (o !== null) {
				var c = o.next;
				o.next = s.next, s.next = c;
			}
			o = s, a.shared.pending = null, c = e.alternate, c !== null && (c = c.updateQueue, c !== null && (c.baseQueue = s));
		}
		if (o !== null) {
			c = o.next;
			var l = a.baseState, u = 0, d = null, f = null, p = null;
			if (c !== null) {
				var m = c;
				do {
					if (s = m.expirationTime, s < i) {
						var h = {
							expirationTime: m.expirationTime,
							suspenseConfig: m.suspenseConfig,
							tag: m.tag,
							payload: m.payload,
							callback: m.callback,
							next: null
						};
						p === null ? (f = p = h, d = l) : p = p.next = h, s > u && (u = s);
					} else {
						p !== null && (p = p.next = {
							expirationTime: 1073741823,
							suspenseConfig: m.suspenseConfig,
							tag: m.tag,
							payload: m.payload,
							callback: m.callback,
							next: null
						}), Bc(s, m.suspenseConfig);
						a: {
							var g = e, _ = m;
							switch (s = t, h = r, _.tag) {
								case 1:
									if (g = _.payload, typeof g == "function") {
										l = g.call(h, l, s);
										break a;
									}
									l = g;
									break a;
								case 3: g.effectTag = g.effectTag & -4097 | 64;
								case 0:
									if (g = _.payload, s = typeof g == "function" ? g.call(h, l, s) : g, s == null) break a;
									l = n({}, l, s);
									break a;
								case 2: Fa = !0;
							}
						}
						m.callback !== null && (e.effectTag |= 32, s = a.effects, s === null ? a.effects = [m] : s.push(m));
					}
					if (m = m.next, m === null || m === c) {
						if (s = a.shared.pending, s === null) break;
						m = o.next = s.next, s.next = c, a.baseQueue = o = s, a.shared.pending = null;
					}
				} while (1);
			}
			p === null ? d = l : p.next = f, a.baseState = d, a.baseQueue = p, Vc(u), e.expirationTime = u, e.memoizedState = l;
		}
	}
	function Ha(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var r = e[t], a = r.callback;
			if (a !== null) {
				if (r.callback = null, r = a, a = n, typeof r != "function") throw Error(i(191, r));
				r.call(a);
			}
		}
	}
	var Ua = xe.ReactCurrentBatchConfig, Wa = new t.Component().refs;
	function Ga(e, t, r, i) {
		t = e.memoizedState, r = r(i, t), r = r == null ? t : n({}, t, r), e.memoizedState = r, e.expirationTime === 0 && (e.updateQueue.baseState = r);
	}
	var Ka = {
		isMounted: function(e) {
			return (e = e._reactInternalFiber) ? Et(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternalFiber;
			var r = Ec(), i = Ua.suspense;
			r = Dc(r, e, i), i = Ra(r, i), i.payload = t, n != null && (i.callback = n), za(e, i), Oc(e, r);
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternalFiber;
			var r = Ec(), i = Ua.suspense;
			r = Dc(r, e, i), i = Ra(r, i), i.tag = 1, i.payload = t, n != null && (i.callback = n), za(e, i), Oc(e, r);
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternalFiber;
			var n = Ec(), r = Ua.suspense;
			n = Dc(n, e, r), r = Ra(n, r), r.tag = 2, t != null && (r.callback = t), za(e, r), Oc(e, n);
		}
	};
	function qa(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !xi(n, r) || !xi(i, a) : !0;
	}
	function Ja(e, t, n) {
		var r = !1, i = Wi, a = t.contextType;
		return typeof a == "object" && a ? a = Pa(a) : (i = qi(t) ? Gi : z.current, r = t.contextTypes, a = (r = r != null) ? Ki(e, i) : Wi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ka, e.stateNode = t, t._reactInternalFiber = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ya(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ka.enqueueReplaceState(t, t.state, null);
	}
	function Xa(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = Wa, Ia(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Pa(a) : (a = qi(t) ? Gi : z.current, i.context = Ki(e, a)), Va(e, n, i, r), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ga(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ka.enqueueReplaceState(i, i.state, null), Va(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.effectTag |= 4);
	}
	var Za = Array.isArray;
	function Qa(e, t, n) {
		if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
			if (n._owner) {
				if (n = n._owner, n) {
					if (n.tag !== 1) throw Error(i(309));
					var r = n.stateNode;
				}
				if (!r) throw Error(i(147, e));
				var a = "" + e;
				return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(e) {
					var t = r.refs;
					t === Wa && (t = r.refs = {}), e === null ? delete t[a] : t[a] = e;
				}, t._stringRef = a, t);
			}
			if (typeof e != "string") throw Error(i(284));
			if (!n._owner) throw Error(i(290, e));
		}
		return e;
	}
	function $a(e, t) {
		if (e.type !== "textarea") throw Error(i(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
	}
	function eo(e) {
		function t(t, n) {
			if (e) {
				var r = t.lastEffect;
				r === null ? t.firstEffect = t.lastEffect = n : (r.nextEffect = n, t.lastEffect = n), n.nextEffect = null, n.effectTag = 8;
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e, t) {
			for (e = /* @__PURE__ */ new Map(); t !== null;) t.key === null ? e.set(t.index, t) : e.set(t.key, t), t = t.sibling;
			return e;
		}
		function a(e, t) {
			return e = ul(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.effectTag = 2, n) : (r = r.index, r < n ? (t.effectTag = 2, n) : r)) : n;
		}
		function s(t) {
			return e && t.alternate === null && (t.effectTag = 2), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = pl(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			return t !== null && t.elementType === n.type ? (r = a(t, n.props), r.ref = Qa(e, t, n), r.return = e, r) : (r = dl(n.type, n.key, n.props, null, e.mode, r), r.ref = Qa(e, t, n), r.return = e, r);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Y(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = fl(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" || typeof t == "number") return t = pl("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case Te: return n = dl(t.type, t.key, t.props, null, e.mode, n), n.ref = Qa(e, null, t), n.return = e, n;
					case Ee: return t = Y(t, e.mode, n), t.return = e, t;
				}
				if (Za(t) || Be(t)) return t = fl(t, e.mode, n, null), t.return = e, t;
				$a(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" || typeof n == "number") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case Te: return n.key === i ? n.type === De ? d(e, t, n.props.children, r, i) : l(e, t, n, r) : null;
					case Ee: return n.key === i ? u(e, t, n, r) : null;
				}
				if (Za(n) || Be(n)) return i === null ? d(e, t, n, r, null) : null;
				$a(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case Te: return e = e.get(r.key === null ? n : r.key) || null, r.type === De ? d(t, e, r.props.children, i, r.key) : l(t, e, r, i);
					case Ee: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
				}
				if (Za(r) || Be(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				$a(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return l;
			}
			for (d = r(i, d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), l;
		}
		function g(a, s, c, l) {
			var u = Be(c);
			if (typeof u != "function") throw Error(i(150));
			if (c = u.call(c), c == null) throw Error(i(151));
			for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return u;
			}
			for (h = r(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), u;
		}
		return function(e, r, o, c) {
			var l = typeof o == "object" && !!o && o.type === De && o.key === null;
			l && (o = o.props.children);
			var u = typeof o == "object" && !!o;
			if (u) switch (o.$$typeof) {
				case Te:
					a: {
						for (u = o.key, l = r; l !== null;) {
							if (l.key === u) {
								switch (l.tag) {
									case 7:
										if (o.type === De) {
											n(e, l.sibling), r = a(l, o.props.children), r.return = e, e = r;
											break a;
										}
										break;
									default: if (l.elementType === o.type) {
										n(e, l.sibling), r = a(l, o.props), r.ref = Qa(e, l, o), r.return = e, e = r;
										break a;
									}
								}
								n(e, l);
								break;
							} else t(e, l);
							l = l.sibling;
						}
						o.type === De ? (r = fl(o.props.children, e.mode, c, o.key), r.return = e, e = r) : (c = dl(o.type, o.key, o.props, null, e.mode, c), c.ref = Qa(e, r, o), c.return = e, e = c);
					}
					return s(e);
				case Ee:
					a: {
						for (l = o.key; r !== null;) {
							if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
								n(e, r.sibling), r = a(r, o.children || []), r.return = e, e = r;
								break a;
							} else {
								n(e, r);
								break;
							}
							else t(e, r);
							r = r.sibling;
						}
						r = Y(o, e.mode, c), r.return = e, e = r;
					}
					return s(e);
			}
			if (typeof o == "string" || typeof o == "number") return o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, o), r.return = e, e = r) : (n(e, r), r = pl(o, e.mode, c), r.return = e, e = r), s(e);
			if (Za(o)) return h(e, r, o, c);
			if (Be(o)) return g(e, r, o, c);
			if (u && $a(e, o), o === void 0 && !l) switch (e.tag) {
				case 1:
				case 0: throw e = e.type, Error(i(152, e.displayName || e.name || "Component"));
			}
			return n(e, r);
		};
	}
	var to = eo(!0), no = eo(!1), ro = {}, io = { current: ro }, ao = { current: ro }, oo = { current: ro };
	function so(e) {
		if (e === ro) throw Error(i(174));
		return e;
	}
	function co(e, t) {
		switch (R(oo, t), R(ao, e), R(io, ro), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : ut(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ut(t, e);
		}
		L(io), R(io, t);
	}
	function lo() {
		L(io), L(ao), L(oo);
	}
	function uo(e) {
		so(oo.current);
		var t = so(io.current), n = ut(t, e.type);
		t !== n && (R(ao, e), R(io, n));
	}
	function fo(e) {
		ao.current === e && (L(io), L(ao));
	}
	var H = { current: 0 };
	function po(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || n.data === Kn || n.data === qn)) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if (t.effectTag & 64) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	function mo(e, t) {
		return {
			responder: e,
			props: t
		};
	}
	var ho = xe.ReactCurrentDispatcher, go = xe.ReactCurrentBatchConfig, _o = 0, U = null, vo = null, yo = null, bo = !1;
	function xo() {
		throw Error(i(321));
	}
	function So(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!yi(e[n], t[n])) return !1;
		return !0;
	}
	function Co(e, t, n, r, a, o) {
		if (_o = o, U = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, ho.current = e === null || e.memoizedState === null ? Ko : qo, e = n(r, a), t.expirationTime === _o) {
			o = 0;
			do {
				if (t.expirationTime = 0, !(25 > o)) throw Error(i(301));
				o += 1, yo = vo = null, t.updateQueue = null, ho.current = Jo, e = n(r, a);
			} while (t.expirationTime === _o);
		}
		if (ho.current = Go, t = vo !== null && vo.next !== null, _o = 0, yo = vo = U = null, bo = !1, t) throw Error(i(300));
		return e;
	}
	function wo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return yo === null ? U.memoizedState = yo = e : yo = yo.next = e, yo;
	}
	function To() {
		if (vo === null) {
			var e = U.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = vo.next;
		var t = yo === null ? U.memoizedState : yo.next;
		if (t !== null) yo = t, vo = e;
		else {
			if (e === null) throw Error(i(310));
			vo = e, e = {
				memoizedState: vo.memoizedState,
				baseState: vo.baseState,
				baseQueue: vo.baseQueue,
				queue: vo.queue,
				next: null
			}, yo === null ? U.memoizedState = yo = e : yo = yo.next = e;
		}
		return yo;
	}
	function Eo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Do(e) {
		var t = To(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = vo, a = r.baseQueue, o = n.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			r.baseQueue = a = o, n.pending = null;
		}
		if (a !== null) {
			a = a.next, r = r.baseState;
			var c = s = o = null, l = a;
			do {
				var u = l.expirationTime;
				if (u < _o) {
					var d = {
						expirationTime: l.expirationTime,
						suspenseConfig: l.suspenseConfig,
						action: l.action,
						eagerReducer: l.eagerReducer,
						eagerState: l.eagerState,
						next: null
					};
					c === null ? (s = c = d, o = r) : c = c.next = d, u > U.expirationTime && (U.expirationTime = u, Vc(u));
				} else c !== null && (c = c.next = {
					expirationTime: 1073741823,
					suspenseConfig: l.suspenseConfig,
					action: l.action,
					eagerReducer: l.eagerReducer,
					eagerState: l.eagerState,
					next: null
				}), Bc(u, l.suspenseConfig), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
				l = l.next;
			} while (l !== null && l !== a);
			c === null ? o = r : c.next = s, yi(r, t.memoizedState) || (as = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
		}
		return [t.memoizedState, n.dispatch];
	}
	function Oo(e) {
		var t = To(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			yi(o, t.memoizedState) || (as = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ko(e) {
		var t = wo();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = {
			pending: null,
			dispatch: null,
			lastRenderedReducer: Eo,
			lastRenderedState: e
		}, e = e.dispatch = Wo.bind(null, U, e), [t.memoizedState, e];
	}
	function Ao(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = U.updateQueue, t === null ? (t = { lastEffect: null }, U.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function jo() {
		return To().memoizedState;
	}
	function Mo(e, t, n, r) {
		var i = wo();
		U.effectTag |= e, i.memoizedState = Ao(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function No(e, t, n, r) {
		var i = To();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (vo !== null) {
			var o = vo.memoizedState;
			if (a = o.destroy, r !== null && So(r, o.deps)) {
				Ao(t, n, a, r);
				return;
			}
		}
		U.effectTag |= e, i.memoizedState = Ao(1 | t, n, a, r);
	}
	function Po(e, t) {
		return Mo(516, 4, e, t);
	}
	function Fo(e, t) {
		return No(516, 4, e, t);
	}
	function Io(e, t) {
		return No(4, 2, e, t);
	}
	function Lo(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Ro(e, t, n) {
		return n = n == null ? null : n.concat([e]), No(4, 2, Lo.bind(null, t, e), n);
	}
	function zo() {}
	function Bo(e, t) {
		return wo().memoizedState = [e, t === void 0 ? null : t], e;
	}
	function Vo(e, t) {
		var n = To();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && So(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ho(e, t) {
		var n = To();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && So(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function Uo(e, t, n) {
		var r = _a();
		ya(98 > r ? 98 : r, function() {
			e(!0);
		}), ya(97 < r ? 97 : r, function() {
			var r = go.suspense;
			go.suspense = t === void 0 ? null : t;
			try {
				e(!1), n();
			} finally {
				go.suspense = r;
			}
		});
	}
	function Wo(e, t, n) {
		var r = Ec(), i = Ua.suspense;
		r = Dc(r, e, i), i = {
			expirationTime: r,
			suspenseConfig: i,
			action: n,
			eagerReducer: null,
			eagerState: null,
			next: null
		};
		var a = t.pending;
		if (a === null ? i.next = i : (i.next = a.next, a.next = i), t.pending = i, a = e.alternate, e === U || a !== null && a === U) bo = !0, i.expirationTime = _o, U.expirationTime = _o;
		else {
			if (e.expirationTime === 0 && (a === null || a.expirationTime === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.eagerReducer = a, i.eagerState = s, yi(s, o)) return;
			} catch {}
			Oc(e, r);
		}
	}
	var Go = {
		readContext: Pa,
		useCallback: xo,
		useContext: xo,
		useEffect: xo,
		useImperativeHandle: xo,
		useLayoutEffect: xo,
		useMemo: xo,
		useReducer: xo,
		useRef: xo,
		useState: xo,
		useDebugValue: xo,
		useResponder: xo,
		useDeferredValue: xo,
		useTransition: xo
	}, Ko = {
		readContext: Pa,
		useCallback: Bo,
		useContext: Pa,
		useEffect: Po,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), Mo(4, 2, Lo.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Mo(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = wo();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = wo();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = r.queue = {
				pending: null,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, e = e.dispatch = Wo.bind(null, U, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = wo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: ko,
		useDebugValue: zo,
		useResponder: mo,
		useDeferredValue: function(e, t) {
			var n = ko(e), r = n[0], i = n[1];
			return Po(function() {
				var n = go.suspense;
				go.suspense = t === void 0 ? null : t;
				try {
					i(e);
				} finally {
					go.suspense = n;
				}
			}, [e, t]), r;
		},
		useTransition: function(e) {
			var t = ko(!1), n = t[0];
			return t = t[1], [Bo(Uo.bind(null, t, e), [t, e]), n];
		}
	}, qo = {
		readContext: Pa,
		useCallback: Vo,
		useContext: Pa,
		useEffect: Fo,
		useImperativeHandle: Ro,
		useLayoutEffect: Io,
		useMemo: Ho,
		useReducer: Do,
		useRef: jo,
		useState: function() {
			return Do(Eo);
		},
		useDebugValue: zo,
		useResponder: mo,
		useDeferredValue: function(e, t) {
			var n = Do(Eo), r = n[0], i = n[1];
			return Fo(function() {
				var n = go.suspense;
				go.suspense = t === void 0 ? null : t;
				try {
					i(e);
				} finally {
					go.suspense = n;
				}
			}, [e, t]), r;
		},
		useTransition: function(e) {
			var t = Do(Eo), n = t[0];
			return t = t[1], [Vo(Uo.bind(null, t, e), [t, e]), n];
		}
	}, Jo = {
		readContext: Pa,
		useCallback: Vo,
		useContext: Pa,
		useEffect: Fo,
		useImperativeHandle: Ro,
		useLayoutEffect: Io,
		useMemo: Ho,
		useReducer: Oo,
		useRef: jo,
		useState: function() {
			return Oo(Eo);
		},
		useDebugValue: zo,
		useResponder: mo,
		useDeferredValue: function(e, t) {
			var n = Oo(Eo), r = n[0], i = n[1];
			return Fo(function() {
				var n = go.suspense;
				go.suspense = t === void 0 ? null : t;
				try {
					i(e);
				} finally {
					go.suspense = n;
				}
			}, [e, t]), r;
		},
		useTransition: function(e) {
			var t = Oo(Eo), n = t[0];
			return t = t[1], [Vo(Uo.bind(null, t, e), [t, e]), n];
		}
	}, Yo = null, Xo = null, Zo = !1;
	function Qo(e, t) {
		var n = sl(5, null, null, 0);
		n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, e.lastEffect === null ? e.firstEffect = e.lastEffect = n : (e.lastEffect.nextEffect = n, e.lastEffect = n);
	}
	function $o(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, !0);
			case 13: return !1;
			default: return !1;
		}
	}
	function es(e) {
		if (Zo) {
			var t = Xo;
			if (t) {
				var n = t;
				if (!$o(e, t)) {
					if (t = er(n.nextSibling), !t || !$o(e, t)) {
						e.effectTag = e.effectTag & -1025 | 2, Zo = !1, Yo = e;
						return;
					}
					Qo(Yo, n);
				}
				Yo = e, Xo = er(t.firstChild);
			} else e.effectTag = e.effectTag & -1025 | 2, Zo = !1, Yo = e;
		}
	}
	function ts(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		Yo = e;
	}
	function ns(e) {
		if (e !== Yo) return !1;
		if (!Zo) return ts(e), Zo = !0, !1;
		var t = e.type;
		if (e.tag !== 5 || t !== "head" && t !== "body" && !Zn(t, e.memoizedProps)) for (t = Xo; t;) Qo(e, t), t = er(t.nextSibling);
		if (ts(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === Gn) {
							if (t === 0) {
								Xo = er(e.nextSibling);
								break a;
							}
							t--;
						} else n !== Wn && n !== qn && n !== Kn || t++;
					}
					e = e.nextSibling;
				}
				Xo = null;
			}
		} else Xo = Yo ? er(e.stateNode.nextSibling) : null;
		return !0;
	}
	function rs() {
		Xo = Yo = null, Zo = !1;
	}
	var is = xe.ReactCurrentOwner, as = !1;
	function os(e, t, n, r) {
		t.child = e === null ? no(t, null, n, r) : to(t, e.child, n, r);
	}
	function ss(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Na(t, i), r = Co(e, t, n, r, a, i), e !== null && !as ? (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), bs(e, t, i)) : (t.effectTag |= 1, os(e, t, r, i), t.child);
	}
	function cs(e, t, n, r, i, a) {
		if (e === null) {
			var o = n.type;
			return typeof o == "function" && !cl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ls(e, t, o, r, i, a)) : (e = dl(n.type, null, r, null, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
		}
		return o = e.child, i < a && (i = o.memoizedProps, n = n.compare, n = n === null ? xi : n, n(i, r) && e.ref === t.ref) ? bs(e, t, a) : (t.effectTag |= 1, e = ul(o, r), e.ref = t.ref, e.return = t, t.child = e);
	}
	function ls(e, t, n, r, i, a) {
		return e !== null && xi(e.memoizedProps, r) && e.ref === t.ref && (as = !1, i < a) ? (t.expirationTime = e.expirationTime, bs(e, t, a)) : ds(e, t, n, r, a);
	}
	function us(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.effectTag |= 128);
	}
	function ds(e, t, n, r, i) {
		var a = qi(n) ? Gi : z.current;
		return a = Ki(t, a), Na(t, i), n = Co(e, t, n, r, a, i), e !== null && !as ? (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), bs(e, t, i)) : (t.effectTag |= 1, os(e, t, n, i), t.child);
	}
	function fs(e, t, n, r, i) {
		if (qi(n)) {
			var a = !0;
			Zi(t);
		} else a = !1;
		if (Na(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Ja(t, n, r), Xa(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Pa(l) : (l = qi(n) ? Gi : z.current, l = Ki(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ya(t, o, r, l), Fa = !1;
			var f = t.memoizedState;
			o.state = f, Va(t, r, o, i), c = t.memoizedState, s !== r || f !== c || B.current || Fa ? (typeof u == "function" && (Ga(t, n, u, r), c = t.memoizedState), (s = Fa || qa(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.effectTag |= 4)) : (typeof o.componentDidMount == "function" && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.effectTag |= 4), r = !1);
		} else o = t.stateNode, La(e, t), s = t.memoizedProps, o.props = t.type === t.elementType ? s : Ta(t.type, s), c = o.context, l = n.contextType, typeof l == "object" && l ? l = Pa(l) : (l = qi(n) ? Gi : z.current, l = Ki(t, l)), u = n.getDerivedStateFromProps, (d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ya(t, o, r, l), Fa = !1, c = t.memoizedState, o.state = c, Va(t, r, o, i), f = t.memoizedState, s !== r || c !== f || B.current || Fa ? (typeof u == "function" && (Ga(t, n, u, r), f = t.memoizedState), (u = Fa || qa(t, n, s, r, c, f, l)) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, f, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, f, l)), typeof o.componentDidUpdate == "function" && (t.effectTag |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.effectTag |= 256)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.effectTag |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = f), o.props = r, o.state = f, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.effectTag |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.effectTag |= 256), r = !1);
		return ps(e, t, n, r, a, i);
	}
	function ps(e, t, n, r, i, a) {
		us(e, t);
		var o = (t.effectTag & 64) != 0;
		if (!r && !o) return i && V(t, n, !1), bs(e, t, a);
		r = t.stateNode, is.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.effectTag |= 1, e !== null && o ? (t.child = to(t, e.child, null, a), t.child = to(t, null, s, a)) : os(e, t, s, a), t.memoizedState = r.state, i && V(t, n, !0), t.child;
	}
	function ms(e) {
		var t = e.stateNode;
		t.pendingContext ? Yi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yi(e, t.context, !1), co(e, t.containerInfo);
	}
	var hs = {
		dehydrated: null,
		retryTime: 0
	};
	function gs(e, t, n) {
		var r = t.mode, i = t.pendingProps, a = H.current, o = !1, s;
		if ((s = (t.effectTag & 64) != 0) || (s = (a & 2) != 0 && (e === null || e.memoizedState !== null)), s ? (o = !0, t.effectTag &= -65) : e !== null && e.memoizedState === null || i.fallback === void 0 || !0 === i.unstable_avoidThisFallback || (a |= 1), R(H, a & 1), e === null) {
			if (i.fallback !== void 0 && es(t), o) {
				if (o = i.fallback, i = fl(null, r, 0, null), i.return = t, !(t.mode & 2)) for (e = t.memoizedState === null ? t.child : t.child.child, i.child = e; e !== null;) e.return = i, e = e.sibling;
				return n = fl(o, r, n, null), n.return = t, i.sibling = n, t.memoizedState = hs, t.child = i, n;
			}
			return r = i.children, t.memoizedState = null, t.child = no(t, null, r, n);
		}
		if (e.memoizedState !== null) {
			if (e = e.child, r = e.sibling, o) {
				if (i = i.fallback, n = ul(e, e.pendingProps), n.return = t, !(t.mode & 2) && (o = t.memoizedState === null ? t.child : t.child.child, o !== e.child)) for (n.child = o; o !== null;) o.return = n, o = o.sibling;
				return r = ul(r, i), r.return = t, n.sibling = r, n.childExpirationTime = 0, t.memoizedState = hs, t.child = n, r;
			}
			return n = to(t, e.child, i.children, n), t.memoizedState = null, t.child = n;
		}
		if (e = e.child, o) {
			if (o = i.fallback, i = fl(null, r, 0, null), i.return = t, i.child = e, e !== null && (e.return = i), !(t.mode & 2)) for (e = t.memoizedState === null ? t.child : t.child.child, i.child = e; e !== null;) e.return = i, e = e.sibling;
			return n = fl(o, r, n, null), n.return = t, i.sibling = n, n.effectTag |= 2, i.childExpirationTime = 0, t.memoizedState = hs, t.child = i, n;
		}
		return t.memoizedState = null, t.child = to(t, e, i.children, n);
	}
	function _s(e, t) {
		e.expirationTime < t && (e.expirationTime = t);
		var n = e.alternate;
		n !== null && n.expirationTime < t && (n.expirationTime = t), Ma(e.return, t);
	}
	function vs(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailExpiration: 0,
			tailMode: i,
			lastEffect: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailExpiration = 0, o.tailMode = i, o.lastEffect = a);
	}
	function ys(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (os(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.effectTag |= 64;
		else {
			if (e !== null && e.effectTag & 64) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && _s(e, n);
				else if (e.tag === 19) _s(e, n);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			r &= 1;
		}
		if (R(H, r), !(t.mode & 2)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && po(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), vs(t, !1, i, n, a, t.lastEffect);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && po(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				vs(t, !0, n, null, a, t.lastEffect);
				break;
			case "together":
				vs(t, !1, null, null, void 0, t.lastEffect);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function bs(e, t, n) {
		e !== null && (t.dependencies = e.dependencies);
		var r = t.expirationTime;
		if (r !== 0 && Vc(r), t.childExpirationTime < n) return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ul(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ul(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	var xs = function(e, t) {
		for (var n = t.child; n !== null;) {
			if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				n.child.return = n, n = n.child;
				continue;
			}
			if (n === t) break;
			for (; n.sibling === null;) {
				if (n.return === null || n.return === t) return;
				n = n.return;
			}
			n.sibling.return = n.return, n = n.sibling;
		}
	}, Ss = function(e, t, r, i, a) {
		var o = e.memoizedProps;
		if (o !== i) {
			var s = t.stateNode;
			switch (so(io.current), e = null, r) {
				case "input":
					o = Ye(s, o), i = Ye(s, i), e = [];
					break;
				case "option":
					o = nt(s, o), i = nt(s, i), e = [];
					break;
				case "select":
					o = n({}, o, { value: void 0 }), i = n({}, i, { value: void 0 }), e = [];
					break;
				case "textarea":
					o = it(s, o), i = it(s, i), e = [];
					break;
				default: typeof o.onClick != "function" && typeof i.onClick == "function" && (s.onclick = Ln);
			}
			Nn(r, i);
			var c, l;
			for (c in r = null, o) if (!i.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") for (l in s = o[c], s) s.hasOwnProperty(l) && (r ||= {}, r[l] = "");
			else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (E.hasOwnProperty(c) ? e ||= [] : (e ||= []).push(c, null));
			for (c in i) {
				var u = i[c];
				if (s = o?.[c], i.hasOwnProperty(c) && u !== s && (u != null || s != null)) if (c === "style") if (s) {
					for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r ||= {}, r[l] = "");
					for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (r ||= {}, r[l] = u[l]);
				} else r || (e ||= [], e.push(c, r)), r = u;
				else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (e ||= []).push(c, u)) : c === "children" ? s === u || typeof u != "string" && typeof u != "number" || (e ||= []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (E.hasOwnProperty(c) ? (u != null && In(a, c), e || s === u || (e = [])) : (e ||= []).push(c, u));
			}
			r && (e ||= []).push("style", r), a = e, (t.updateQueue = a) && (t.effectTag |= 4);
		}
	}, Cs = function(e, t, n, r) {
		n !== r && (t.effectTag |= 4);
	};
	function ws(e, t) {
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function Ts(e, t, r) {
		var a = t.pendingProps;
		switch (t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return null;
			case 1: return qi(t.type) && Ji(), null;
			case 3: return lo(), L(B), L(z), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), e !== null && e.child !== null || !ns(t) || (t.effectTag |= 4), null;
			case 5:
				fo(t), r = so(oo.current);
				var o = t.type;
				if (e !== null && t.stateNode != null) Ss(e, t, o, a, r), e.ref !== t.ref && (t.effectTag |= 128);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(i(166));
						return null;
					}
					if (e = so(io.current), ns(t)) {
						a = t.stateNode, o = t.type;
						var s = t.memoizedProps;
						switch (a[rr] = t, a[ir] = s, o) {
							case "iframe":
							case "object":
							case "embed":
								F("load", a);
								break;
							case "video":
							case "audio":
								for (e = 0; e < Ct.length; e++) F(Ct[e], a);
								break;
							case "source":
								F("error", a);
								break;
							case "img":
							case "image":
							case "link":
								F("error", a), F("load", a);
								break;
							case "form":
								F("reset", a), F("submit", a);
								break;
							case "details":
								F("toggle", a);
								break;
							case "input":
								Xe(a, s), F("invalid", a), In(r, "onChange");
								break;
							case "select":
								a._wrapperState = { wasMultiple: !!s.multiple }, F("invalid", a), In(r, "onChange");
								break;
							case "textarea": at(a, s), F("invalid", a), In(r, "onChange");
						}
						for (var c in Nn(o, s), e = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? a.textContent !== l && (e = ["children", l]) : typeof l == "number" && a.textContent !== "" + l && (e = ["children", "" + l]) : E.hasOwnProperty(c) && l != null && In(r, c);
						}
						switch (o) {
							case "input":
								qe(a), $e(a, s, !0);
								break;
							case "textarea":
								qe(a), st(a);
								break;
							case "select":
							case "option": break;
							default: typeof s.onClick == "function" && (a.onclick = Ln);
						}
						r = e, t.updateQueue = r, r !== null && (t.effectTag |= 4);
					} else {
						switch (c = r.nodeType === 9 ? r : r.ownerDocument, e === Fn && (e = lt(o)), e === Fn ? o === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = c.createElement(o, { is: a.is }) : (e = c.createElement(o), o === "select" && (c = e, a.multiple ? c.multiple = !0 : a.size && (c.size = a.size))) : e = c.createElementNS(e, o), e[rr] = t, e[ir] = a, xs(e, t, !1, !1), t.stateNode = e, c = Pn(o, a), o) {
							case "iframe":
							case "object":
							case "embed":
								F("load", e), l = a;
								break;
							case "video":
							case "audio":
								for (l = 0; l < Ct.length; l++) F(Ct[l], e);
								l = a;
								break;
							case "source":
								F("error", e), l = a;
								break;
							case "img":
							case "image":
							case "link":
								F("error", e), F("load", e), l = a;
								break;
							case "form":
								F("reset", e), F("submit", e), l = a;
								break;
							case "details":
								F("toggle", e), l = a;
								break;
							case "input":
								Xe(e, a), l = Ye(e, a), F("invalid", e), In(r, "onChange");
								break;
							case "option":
								l = nt(e, a);
								break;
							case "select":
								e._wrapperState = { wasMultiple: !!a.multiple }, l = n({}, a, { value: void 0 }), F("invalid", e), In(r, "onChange");
								break;
							case "textarea":
								at(e, a), l = it(e, a), F("invalid", e), In(r, "onChange");
								break;
							default: l = a;
						}
						Nn(o, l);
						var u = l;
						for (s in u) if (u.hasOwnProperty(s)) {
							var d = u[s];
							s === "style" ? jn(e, d) : s === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && ft(e, d)) : s === "children" ? typeof d == "string" ? (o !== "textarea" || d !== "") && pt(e, d) : typeof d == "number" && pt(e, "" + d) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (E.hasOwnProperty(s) ? d != null && In(r, s) : d != null && Se(e, s, d, c));
						}
						switch (o) {
							case "input":
								qe(e), $e(e, a, !1);
								break;
							case "textarea":
								qe(e), st(e);
								break;
							case "option":
								a.value != null && e.setAttribute("value", "" + We(a.value));
								break;
							case "select":
								e.multiple = !!a.multiple, r = a.value, r == null ? a.defaultValue != null && rt(e, !!a.multiple, a.defaultValue, !0) : rt(e, !!a.multiple, r, !1);
								break;
							default: typeof l.onClick == "function" && (e.onclick = Ln);
						}
						Xn(o, a) && (t.effectTag |= 4);
					}
					t.ref !== null && (t.effectTag |= 128);
				}
				return null;
			case 6:
				if (e && t.stateNode != null) Cs(e, t, e.memoizedProps, a);
				else {
					if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
					r = so(oo.current), so(io.current), ns(t) ? (r = t.stateNode, a = t.memoizedProps, r[rr] = t, r.nodeValue !== a && (t.effectTag |= 4)) : (r = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(a), r[rr] = t, t.stateNode = r);
				}
				return null;
			case 13: return L(H), a = t.memoizedState, t.effectTag & 64 ? (t.expirationTime = r, t) : (r = a !== null, a = !1, e === null ? t.memoizedProps.fallback !== void 0 && ns(t) : (o = e.memoizedState, a = o !== null, r || o === null || (o = e.child.sibling, o !== null && (s = t.firstEffect, s === null ? (t.firstEffect = t.lastEffect = o, o.nextEffect = null) : (t.firstEffect = o, o.nextEffect = s), o.effectTag = 8))), r && !a && t.mode & 2 && (e === null && !0 !== t.memoizedProps.unstable_avoidThisFallback || H.current & 1 ? q === ec && (q = rc) : ((q === ec || q === rc) && (q = ic), fc !== 0 && oc !== null && (gl(oc, sc), _l(oc, fc)))), (r || a) && (t.effectTag |= 4), null);
			case 4: return lo(), null;
			case 10: return ja(t), null;
			case 17: return qi(t.type) && Ji(), null;
			case 19:
				if (L(H), a = t.memoizedState, a === null) return null;
				if (o = (t.effectTag & 64) != 0, s = a.rendering, s === null) {
					if (o) ws(a, !1);
					else if (q !== ec || e !== null && e.effectTag & 64) for (s = t.child; s !== null;) {
						if (e = po(s), e !== null) {
							for (t.effectTag |= 64, ws(a, !1), o = e.updateQueue, o !== null && (t.updateQueue = o, t.effectTag |= 4), a.lastEffect === null && (t.firstEffect = null), t.lastEffect = a.lastEffect, a = t.child; a !== null;) o = a, s = r, o.effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, e = o.alternate, e === null ? (o.childExpirationTime = 0, o.expirationTime = s, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = e.childExpirationTime, o.expirationTime = e.expirationTime, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, s = e.dependencies, o.dependencies = s === null ? null : {
								expirationTime: s.expirationTime,
								firstContext: s.firstContext,
								responders: s.responders
							}), a = a.sibling;
							return R(H, H.current & 1 | 2), t.child;
						}
						s = s.sibling;
					}
				} else {
					if (!o) if (e = po(s), e !== null) {
						if (t.effectTag |= 64, o = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.effectTag |= 4), ws(a, !0), a.tail === null && a.tailMode === "hidden" && !s.alternate) return t = t.lastEffect = a.lastEffect, t !== null && (t.nextEffect = null), null;
					} else 2 * ga() - a.renderingStartTime > a.tailExpiration && 1 < r && (t.effectTag |= 64, o = !0, ws(a, !1), t.expirationTime = t.childExpirationTime = r - 1);
					a.isBackwards ? (s.sibling = t.child, t.child = s) : (r = a.last, r === null ? t.child = s : r.sibling = s, a.last = s);
				}
				return a.tail === null ? null : (a.tailExpiration === 0 && (a.tailExpiration = ga() + 500), r = a.tail, a.rendering = r, a.tail = r.sibling, a.lastEffect = t.lastEffect, a.renderingStartTime = ga(), r.sibling = null, t = H.current, R(H, o ? t & 1 | 2 : t & 1), r);
		}
		throw Error(i(156, t.tag));
	}
	function Es(e) {
		switch (e.tag) {
			case 1:
				qi(e.type) && Ji();
				var t = e.effectTag;
				return t & 4096 ? (e.effectTag = t & -4097 | 64, e) : null;
			case 3:
				if (lo(), L(B), L(z), t = e.effectTag, t & 64) throw Error(i(285));
				return e.effectTag = t & -4097 | 64, e;
			case 5: return fo(e), null;
			case 13: return L(H), t = e.effectTag, t & 4096 ? (e.effectTag = t & -4097 | 64, e) : null;
			case 19: return L(H), null;
			case 4: return lo(), null;
			case 10: return ja(e), null;
			default: return null;
		}
	}
	function Ds(e, t) {
		return {
			value: e,
			source: t,
			stack: Ue(t)
		};
	}
	var Os = typeof WeakSet == "function" ? WeakSet : Set;
	function ks(e, t) {
		var n = t.source, r = t.stack;
		r === null && n !== null && (r = Ue(n)), n !== null && He(n.type), t = t.value, e !== null && e.tag === 1 && He(e.type);
		try {
			console.error(t);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function As(e, t) {
		try {
			t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
		} catch (t) {
			$c(e, t);
		}
	}
	function js(e) {
		var t = e.ref;
		if (t !== null) if (typeof t == "function") try {
			t(null);
		} catch (t) {
			$c(e, t);
		}
		else t.current = null;
	}
	function Ms(e, t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
			case 22: return;
			case 1:
				if (t.effectTag & 256 && e !== null) {
					var n = e.memoizedProps, r = e.memoizedState;
					e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ta(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
				}
				return;
			case 3:
			case 5:
			case 6:
			case 4:
			case 17: return;
		}
		throw Error(i(163));
	}
	function Ns(e, t) {
		if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
			var n = t = t.next;
			do {
				if ((n.tag & e) === e) {
					var r = n.destroy;
					n.destroy = void 0, r !== void 0 && r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function Ps(e, t) {
		if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
			var n = t = t.next;
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function Fs(e, t, n) {
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
			case 22:
				Ps(3, n);
				return;
			case 1:
				if (e = n.stateNode, n.effectTag & 4) if (t === null) e.componentDidMount();
				else {
					var r = n.elementType === n.type ? t.memoizedProps : Ta(n.type, t.memoizedProps);
					e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
				}
				t = n.updateQueue, t !== null && Ha(n, t, e);
				return;
			case 3:
				if (t = n.updateQueue, t !== null) {
					if (e = null, n.child !== null) switch (n.child.tag) {
						case 5:
							e = n.child.stateNode;
							break;
						case 1: e = n.child.stateNode;
					}
					Ha(n, t, e);
				}
				return;
			case 5:
				e = n.stateNode, t === null && n.effectTag & 4 && Xn(n.type, n.memoizedProps) && e.focus();
				return;
			case 6: return;
			case 4: return;
			case 12: return;
			case 13:
				n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && fn(n))));
				return;
			case 19:
			case 17:
			case 20:
			case 21: return;
		}
		throw Error(i(163));
	}
	function Is(e, t, n) {
		switch (typeof il == "function" && il(t), t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 22:
				if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
					var r = e.next;
					ya(97 < n ? 97 : n, function() {
						var e = r;
						do {
							var n = e.destroy;
							if (n !== void 0) {
								var i = t;
								try {
									n();
								} catch (e) {
									$c(i, e);
								}
							}
							e = e.next;
						} while (e !== r);
					});
				}
				break;
			case 1:
				js(t), n = t.stateNode, typeof n.componentWillUnmount == "function" && As(t, n);
				break;
			case 5:
				js(t);
				break;
			case 4: Hs(e, t, n);
		}
	}
	function Ls(e) {
		var t = e.alternate;
		e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, t !== null && Ls(t);
	}
	function Rs(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function zs(e) {
		a: {
			for (var t = e.return; t !== null;) {
				if (Rs(t)) {
					var n = t;
					break a;
				}
				t = t.return;
			}
			throw Error(i(160));
		}
		switch (t = n.stateNode, n.tag) {
			case 5:
				var r = !1;
				break;
			case 3:
				t = t.containerInfo, r = !0;
				break;
			case 4:
				t = t.containerInfo, r = !0;
				break;
			default: throw Error(i(161));
		}
		n.effectTag & 16 && (pt(t, ""), n.effectTag &= -17);
		a: b: for (n = e;;) {
			for (; n.sibling === null;) {
				if (n.return === null || Rs(n.return)) {
					n = null;
					break a;
				}
				n = n.return;
			}
			for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
				if (n.effectTag & 2 || n.child === null || n.tag === 4) continue b;
				n.child.return = n, n = n.child;
			}
			if (!(n.effectTag & 2)) {
				n = n.stateNode;
				break a;
			}
		}
		r ? Bs(e, n, t) : Vs(e, n, t);
	}
	function Bs(e, t, n) {
		var r = e.tag, i = r === 5 || r === 6;
		if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ln));
		else if (r !== 4 && (e = e.child, e !== null)) for (Bs(e, t, n), e = e.sibling; e !== null;) Bs(e, t, n), e = e.sibling;
	}
	function Vs(e, t, n) {
		var r = e.tag, i = r === 5 || r === 6;
		if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Vs(e, t, n), e = e.sibling; e !== null;) Vs(e, t, n), e = e.sibling;
	}
	function Hs(e, t, n) {
		for (var r = t, a = !1, o, s;;) {
			if (!a) {
				a = r.return;
				a: for (;;) {
					if (a === null) throw Error(i(160));
					switch (o = a.stateNode, a.tag) {
						case 5:
							s = !1;
							break a;
						case 3:
							o = o.containerInfo, s = !0;
							break a;
						case 4:
							o = o.containerInfo, s = !0;
							break a;
					}
					a = a.return;
				}
				a = !0;
			}
			if (r.tag === 5 || r.tag === 6) {
				a: for (var c = e, l = r, u = n, d = l;;) if (Is(c, d, u), d.child !== null && d.tag !== 4) d.child.return = d, d = d.child;
				else {
					if (d === l) break a;
					for (; d.sibling === null;) {
						if (d.return === null || d.return === l) break a;
						d = d.return;
					}
					d.sibling.return = d.return, d = d.sibling;
				}
				s ? (c = o, l = r.stateNode, c.nodeType === 8 ? c.parentNode.removeChild(l) : c.removeChild(l)) : o.removeChild(r.stateNode);
			} else if (r.tag === 4) {
				if (r.child !== null) {
					o = r.stateNode.containerInfo, s = !0, r.child.return = r, r = r.child;
					continue;
				}
			} else if (Is(e, r, n), r.child !== null) {
				r.child.return = r, r = r.child;
				continue;
			}
			if (r === t) break;
			for (; r.sibling === null;) {
				if (r.return === null || r.return === t) return;
				r = r.return, r.tag === 4 && (a = !1);
			}
			r.sibling.return = r.return, r = r.sibling;
		}
	}
	function Us(e, t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 22:
				Ns(3, t);
				return;
			case 1: return;
			case 5:
				var n = t.stateNode;
				if (n != null) {
					var r = t.memoizedProps, a = e === null ? r : e.memoizedProps;
					e = t.type;
					var o = t.updateQueue;
					if (t.updateQueue = null, o !== null) {
						for (n[ir] = r, e === "input" && r.type === "radio" && r.name != null && Ze(n, r), Pn(e, a), t = Pn(e, r), a = 0; a < o.length; a += 2) {
							var s = o[a], c = o[a + 1];
							s === "style" ? jn(n, c) : s === "dangerouslySetInnerHTML" ? ft(n, c) : s === "children" ? pt(n, c) : Se(n, s, c, t);
						}
						switch (e) {
							case "input":
								Qe(n, r);
								break;
							case "textarea":
								ot(n, r);
								break;
							case "select": t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, e = r.value, e == null ? t !== !!r.multiple && (r.defaultValue == null ? rt(n, !!r.multiple, r.multiple ? [] : "", !1) : rt(n, !!r.multiple, r.defaultValue, !0)) : rt(n, !!r.multiple, e, !1);
						}
					}
				}
				return;
			case 6:
				if (t.stateNode === null) throw Error(i(162));
				t.stateNode.nodeValue = t.memoizedProps;
				return;
			case 3:
				t = t.stateNode, t.hydrate && (t.hydrate = !1, fn(t.containerInfo));
				return;
			case 12: return;
			case 13:
				if (n = t, t.memoizedState === null ? r = !1 : (r = !0, n = t.child, mc = ga()), n !== null) a: for (e = n;;) {
					if (e.tag === 5) o = e.stateNode, r ? (o = o.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (o = e.stateNode, a = e.memoizedProps.style, a = a != null && a.hasOwnProperty("display") ? a.display : null, o.style.display = An("display", a));
					else if (e.tag === 6) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
					else if (e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null) {
						o = e.child.sibling, o.return = e, e = o;
						continue;
					} else if (e.child !== null) {
						e.child.return = e, e = e.child;
						continue;
					}
					if (e === n) break;
					for (; e.sibling === null;) {
						if (e.return === null || e.return === n) break a;
						e = e.return;
					}
					e.sibling.return = e.return, e = e.sibling;
				}
				Ws(t);
				return;
			case 19:
				Ws(t);
				return;
			case 17: return;
		}
		throw Error(i(163));
	}
	function Ws(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new Os()), t.forEach(function(t) {
				var r = tl.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	var Gs = typeof WeakMap == "function" ? WeakMap : Map;
	function Ks(e, t, n) {
		n = Ra(n, null), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			gc || (gc = !0, _c = r), ks(e, t);
		}, n;
	}
	function qs(e, t, n) {
		n = Ra(n, null), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return ks(e, t), r(i);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			typeof r != "function" && (vc === null ? vc = new Set([this]) : vc.add(this), ks(e, t));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	var Js = Math.ceil, Ys = xe.ReactCurrentDispatcher, Xs = xe.ReactCurrentOwner, W = 0, Zs = 8, Qs = 16, $s = 32, ec = 0, tc = 1, nc = 2, rc = 3, ic = 4, ac = 5, G = W, oc = null, K = null, sc = 0, q = ec, cc = null, lc = 1073741823, uc = 1073741823, dc = null, fc = 0, pc = !1, mc = 0, hc = 500, J = null, gc = !1, _c = null, vc = null, yc = !1, bc = null, xc = 90, Sc = null, Cc = 0, wc = null, Tc = 0;
	function Ec() {
		return (G & (Qs | $s)) === W ? Tc === 0 ? Tc = 1073741821 - (ga() / 10 | 0) : Tc : 1073741821 - (ga() / 10 | 0);
	}
	function Dc(e, t, n) {
		if (t = t.mode, !(t & 2)) return 1073741823;
		var r = _a();
		if (!(t & 4)) return r === 99 ? 1073741823 : 1073741822;
		if ((G & Qs) !== W) return sc;
		if (n !== null) e = wa(e, n.timeoutMs | 0 || 5e3, 250);
		else switch (r) {
			case 99:
				e = 1073741823;
				break;
			case 98:
				e = wa(e, 150, 100);
				break;
			case 97:
			case 96:
				e = wa(e, 5e3, 250);
				break;
			case 95:
				e = 2;
				break;
			default: throw Error(i(326));
		}
		return oc !== null && e === sc && --e, e;
	}
	function Oc(e, t) {
		if (50 < Cc) throw Cc = 0, wc = null, Error(i(185));
		if (e = kc(e, t), e !== null) {
			var n = _a();
			t === 1073741823 ? (G & Zs) !== W && (G & (Qs | $s)) === W ? Nc(e) : (jc(e), G === W && Sa()) : jc(e), (G & 4) === W || n !== 98 && n !== 99 || (Sc === null ? Sc = new Map([[e, t]]) : (n = Sc.get(e), (n === void 0 || n > t) && Sc.set(e, t)));
		}
	}
	function kc(e, t) {
		e.expirationTime < t && (e.expirationTime = t);
		var n = e.alternate;
		n !== null && n.expirationTime < t && (n.expirationTime = t);
		var r = e.return, i = null;
		if (r === null && e.tag === 3) i = e.stateNode;
		else for (; r !== null;) {
			if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), n !== null && n.childExpirationTime < t && (n.childExpirationTime = t), r.return === null && r.tag === 3) {
				i = r.stateNode;
				break;
			}
			r = r.return;
		}
		return i !== null && (oc === i && (Vc(t), q === ic && gl(i, sc)), _l(i, t)), i;
	}
	function Ac(e) {
		var t = e.lastExpiredTime;
		if (t !== 0 || (t = e.firstPendingTime, !hl(e, t))) return t;
		var n = e.lastPingedTime;
		return e = e.nextKnownPendingLevel, e = n > e ? n : e, 2 >= e && t !== e ? 0 : e;
	}
	function jc(e) {
		if (e.lastExpiredTime !== 0) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = xa(Nc.bind(null, e));
		else {
			var t = Ac(e), n = e.callbackNode;
			if (t === 0) n !== null && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
			else {
				var r = Ec();
				if (t === 1073741823 ? r = 99 : t === 1 || t === 2 ? r = 95 : (r = 10 * (1073741821 - t) - 10 * (1073741821 - r), r = 0 >= r ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95), n !== null) {
					var i = e.callbackPriority;
					if (e.callbackExpirationTime === t && i >= r) return;
					n !== la && ea(n);
				}
				e.callbackExpirationTime = t, e.callbackPriority = r, t = t === 1073741823 ? xa(Nc.bind(null, e)) : ba(r, Mc.bind(null, e), { timeout: 10 * (1073741821 - t) - ga() }), e.callbackNode = t;
			}
		}
	}
	function Mc(e, t) {
		if (Tc = 0, t) return t = Ec(), vl(e, t), jc(e), null;
		var n = Ac(e);
		if (n !== 0) {
			if (t = e.callbackNode, (G & (Qs | $s)) !== W) throw Error(i(327));
			if (Xc(), e === oc && n === sc || Lc(e, n), K !== null) {
				var r = G;
				G |= Qs;
				var a = zc();
				do
					try {
						Uc();
						break;
					} catch (t) {
						Rc(e, t);
					}
				while (1);
				if (Aa(), G = r, Ys.current = a, q === tc) throw t = cc, Lc(e, n), gl(e, n), jc(e), t;
				if (K === null) switch (a = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = q, oc = null, r) {
					case ec:
					case tc: throw Error(i(345));
					case nc:
						vl(e, 2 < n ? 2 : n);
						break;
					case rc:
						if (gl(e, n), r = e.lastSuspendedTime, n === r && (e.nextKnownPendingLevel = Kc(a)), lc === 1073741823 && (a = mc + hc - ga(), 10 < a)) {
							if (pc) {
								var o = e.lastPingedTime;
								if (o === 0 || o >= n) {
									e.lastPingedTime = n, Lc(e, n);
									break;
								}
							}
							if (o = Ac(e), o !== 0 && o !== n) break;
							if (r !== 0 && r !== n) {
								e.lastPingedTime = r;
								break;
							}
							e.timeoutHandle = Qn(qc.bind(null, e), a);
							break;
						}
						qc(e);
						break;
					case ic:
						if (gl(e, n), r = e.lastSuspendedTime, n === r && (e.nextKnownPendingLevel = Kc(a)), pc && (a = e.lastPingedTime, a === 0 || a >= n)) {
							e.lastPingedTime = n, Lc(e, n);
							break;
						}
						if (a = Ac(e), a !== 0 && a !== n) break;
						if (r !== 0 && r !== n) {
							e.lastPingedTime = r;
							break;
						}
						if (uc === 1073741823 ? lc === 1073741823 ? r = 0 : (r = 10 * (1073741821 - lc) - 5e3, a = ga(), n = 10 * (1073741821 - n) - a, r = a - r, 0 > r && (r = 0), r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Js(r / 1960)) - r, n < r && (r = n)) : r = 10 * (1073741821 - uc) - ga(), 10 < r) {
							e.timeoutHandle = Qn(qc.bind(null, e), r);
							break;
						}
						qc(e);
						break;
					case ac:
						if (lc !== 1073741823 && dc !== null) {
							o = lc;
							var s = dc;
							if (r = s.busyMinDurationMs | 0, 0 >= r ? r = 0 : (a = s.busyDelayMs | 0, o = ga() - (10 * (1073741821 - o) - (s.timeoutMs | 0 || 5e3)), r = o <= a ? 0 : a + r - o), 10 < r) {
								gl(e, n), e.timeoutHandle = Qn(qc.bind(null, e), r);
								break;
							}
						}
						qc(e);
						break;
					default: throw Error(i(329));
				}
				if (jc(e), e.callbackNode === t) return Mc.bind(null, e);
			}
		}
		return null;
	}
	function Nc(e) {
		var t = e.lastExpiredTime;
		if (t = t === 0 ? 1073741823 : t, (G & (Qs | $s)) !== W) throw Error(i(327));
		if (Xc(), e === oc && t === sc || Lc(e, t), K !== null) {
			var n = G;
			G |= Qs;
			var r = zc();
			do
				try {
					Hc();
					break;
				} catch (t) {
					Rc(e, t);
				}
			while (1);
			if (Aa(), G = n, Ys.current = r, q === tc) throw n = cc, Lc(e, t), gl(e, t), jc(e), n;
			if (K !== null) throw Error(i(261));
			e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, oc = null, qc(e), jc(e);
		}
		return null;
	}
	function Pc() {
		if (Sc !== null) {
			var e = Sc;
			Sc = null, e.forEach(function(e, t) {
				vl(t, e), jc(t);
			}), Sa();
		}
	}
	function Fc(e, t) {
		var n = G;
		G |= 1;
		try {
			return e(t);
		} finally {
			G = n, G === W && Sa();
		}
	}
	function Ic(e, t) {
		var n = G;
		G &= -2, G |= Zs;
		try {
			return e(t);
		} finally {
			G = n, G === W && Sa();
		}
	}
	function Lc(e, t) {
		e.finishedWork = null, e.finishedExpirationTime = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, $n(n)), K !== null) for (n = K.return; n !== null;) {
			var r = n;
			switch (r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Ji();
					break;
				case 3:
					lo(), L(B), L(z);
					break;
				case 5:
					fo(r);
					break;
				case 4:
					lo();
					break;
				case 13:
					L(H);
					break;
				case 19:
					L(H);
					break;
				case 10: ja(r);
			}
			n = n.return;
		}
		oc = e, K = ul(e.current, null), sc = t, q = ec, cc = null, uc = lc = 1073741823, dc = null, fc = 0, pc = !1;
	}
	function Rc(e, t) {
		do {
			try {
				if (Aa(), ho.current = Go, bo) for (var n = U.memoizedState; n !== null;) {
					var r = n.queue;
					r !== null && (r.pending = null), n = n.next;
				}
				if (_o = 0, yo = vo = U = null, bo = !1, K === null || K.return === null) return q = tc, cc = t, K = null;
				a: {
					var i = e, a = K.return, o = K, s = t;
					if (t = sc, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, typeof s == "object" && s && typeof s.then == "function") {
						var c = s;
						if (!(o.mode & 2)) {
							var l = o.alternate;
							l ? (o.updateQueue = l.updateQueue, o.memoizedState = l.memoizedState, o.expirationTime = l.expirationTime) : (o.updateQueue = null, o.memoizedState = null);
						}
						var u = (H.current & 1) != 0, d = a;
						do {
							var f;
							if (f = d.tag === 13) {
								var p = d.memoizedState;
								if (p !== null) f = p.dehydrated !== null;
								else {
									var m = d.memoizedProps;
									f = m.fallback === void 0 ? !1 : !0 === m.unstable_avoidThisFallback ? !u : !0;
								}
							}
							if (f) {
								var h = d.updateQueue;
								if (h === null) {
									var g = /* @__PURE__ */ new Set();
									g.add(c), d.updateQueue = g;
								} else h.add(c);
								if (!(d.mode & 2)) {
									if (d.effectTag |= 64, o.effectTag &= -2981, o.tag === 1) if (o.alternate === null) o.tag = 17;
									else {
										var _ = Ra(1073741823, null);
										_.tag = 2, za(o, _);
									}
									o.expirationTime = 1073741823;
									break a;
								}
								s = void 0, o = t;
								var v = i.pingCache;
								if (v === null ? (v = i.pingCache = new Gs(), s = /* @__PURE__ */ new Set(), v.set(c, s)) : (s = v.get(c), s === void 0 && (s = /* @__PURE__ */ new Set(), v.set(c, s))), !s.has(o)) {
									s.add(o);
									var y = el.bind(null, i, c, o);
									c.then(y, y);
								}
								d.effectTag |= 4096, d.expirationTime = t;
								break a;
							}
							d = d.return;
						} while (d !== null);
						s = Error((He(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Ue(o));
					}
					q !== ac && (q = nc), s = Ds(s, o), d = a;
					do {
						switch (d.tag) {
							case 3:
								c = s, d.effectTag |= 4096, d.expirationTime = t;
								var b = Ks(d, c, t);
								Ba(d, b);
								break a;
							case 1:
								c = s;
								var x = d.type, S = d.stateNode;
								if (!(d.effectTag & 64) && (typeof x.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (vc === null || !vc.has(S)))) {
									d.effectTag |= 4096, d.expirationTime = t;
									var C = qs(d, c, t);
									Ba(d, C);
									break a;
								}
						}
						d = d.return;
					} while (d !== null);
				}
				K = Gc(K);
			} catch (e) {
				t = e;
				continue;
			}
			break;
		} while (1);
	}
	function zc() {
		var e = Ys.current;
		return Ys.current = Go, e === null ? Go : e;
	}
	function Bc(e, t) {
		e < lc && 2 < e && (lc = e), t !== null && e < uc && 2 < e && (uc = e, dc = t);
	}
	function Vc(e) {
		e > fc && (fc = e);
	}
	function Hc() {
		for (; K !== null;) K = Wc(K);
	}
	function Uc() {
		for (; K !== null && !ua();) K = Wc(K);
	}
	function Wc(e) {
		var t = nl(e.alternate, e, sc);
		return e.memoizedProps = e.pendingProps, t === null && (t = Gc(e)), Xs.current = null, t;
	}
	function Gc(e) {
		K = e;
		do {
			var t = K.alternate;
			if (e = K.return, K.effectTag & 2048) {
				if (t = Es(K), t !== null) return t.effectTag &= 2047, t;
				e !== null && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048);
			} else {
				if (t = Ts(t, K, sc), sc === 1 || K.childExpirationTime !== 1) {
					for (var n = 0, r = K.child; r !== null;) {
						var i = r.expirationTime, a = r.childExpirationTime;
						i > n && (n = i), a > n && (n = a), r = r.sibling;
					}
					K.childExpirationTime = n;
				}
				if (t !== null) return t;
				e !== null && !(e.effectTag & 2048) && (e.firstEffect === null && (e.firstEffect = K.firstEffect), K.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = K.firstEffect), e.lastEffect = K.lastEffect), 1 < K.effectTag && (e.lastEffect === null ? e.firstEffect = K : e.lastEffect.nextEffect = K, e.lastEffect = K));
			}
			if (t = K.sibling, t !== null) return t;
			K = e;
		} while (K !== null);
		return q === ec && (q = ac), null;
	}
	function Kc(e) {
		var t = e.expirationTime;
		return e = e.childExpirationTime, t > e ? t : e;
	}
	function qc(e) {
		var t = _a();
		return ya(99, Jc.bind(null, e, t)), null;
	}
	function Jc(e, t) {
		do
			Xc();
		while (bc !== null);
		if ((G & (Qs | $s)) !== W) throw Error(i(327));
		var n = e.finishedWork, r = e.finishedExpirationTime;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(i(177));
		e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
		var a = Kc(n);
		if (e.firstPendingTime = a, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === oc && (K = oc = null, sc = 0), 1 < n.effectTag ? n.lastEffect === null ? a = n : (n.lastEffect.nextEffect = n, a = n.firstEffect) : a = n.firstEffect, a !== null) {
			var o = G;
			G |= $s, Xs.current = null, Jn = Sn;
			var s = Hn();
			if (Un(s)) {
				if ("selectionStart" in s) var c = {
					start: s.selectionStart,
					end: s.selectionEnd
				};
				else a: {
					c = (c = s.ownerDocument) && c.defaultView || window;
					var l = c.getSelection && c.getSelection();
					if (l && l.rangeCount !== 0) {
						c = l.anchorNode;
						var u = l.anchorOffset, d = l.focusNode;
						l = l.focusOffset;
						try {
							c.nodeType, d.nodeType;
						} catch {
							c = null;
							break a;
						}
						var f = 0, p = -1, m = -1, h = 0, g = 0, _ = s, v = null;
						b: for (;;) {
							for (var y; _ !== c || u !== 0 && _.nodeType !== 3 || (p = f + u), _ !== d || l !== 0 && _.nodeType !== 3 || (m = f + l), _.nodeType === 3 && (f += _.nodeValue.length), (y = _.firstChild) !== null;) v = _, _ = y;
							for (;;) {
								if (_ === s) break b;
								if (v === c && ++h === u && (p = f), v === d && ++g === l && (m = f), (y = _.nextSibling) !== null) break;
								_ = v, v = _.parentNode;
							}
							_ = y;
						}
						c = p === -1 || m === -1 ? null : {
							start: p,
							end: m
						};
					} else c = null;
				}
				c ||= {
					start: 0,
					end: 0
				};
			} else c = null;
			Yn = {
				activeElementDetached: null,
				focusedElem: s,
				selectionRange: c
			}, Sn = !1, J = a;
			do
				try {
					Yc();
				} catch (e) {
					if (J === null) throw Error(i(330));
					$c(J, e), J = J.nextEffect;
				}
			while (J !== null);
			J = a;
			do
				try {
					for (s = e, c = t; J !== null;) {
						var b = J.effectTag;
						if (b & 16 && pt(J.stateNode, ""), b & 128) {
							var x = J.alternate;
							if (x !== null) {
								var S = x.ref;
								S !== null && (typeof S == "function" ? S(null) : S.current = null);
							}
						}
						switch (b & 1038) {
							case 2:
								zs(J), J.effectTag &= -3;
								break;
							case 6:
								zs(J), J.effectTag &= -3, Us(J.alternate, J);
								break;
							case 1024:
								J.effectTag &= -1025;
								break;
							case 1028:
								J.effectTag &= -1025, Us(J.alternate, J);
								break;
							case 4:
								Us(J.alternate, J);
								break;
							case 8: u = J, Hs(s, u, c), Ls(u);
						}
						J = J.nextEffect;
					}
				} catch (e) {
					if (J === null) throw Error(i(330));
					$c(J, e), J = J.nextEffect;
				}
			while (J !== null);
			if (S = Yn, x = Hn(), b = S.focusedElem, c = S.selectionRange, x !== b && b && b.ownerDocument && Vn(b.ownerDocument.documentElement, b)) {
				for (c !== null && Un(b) && (x = c.start, S = c.end, S === void 0 && (S = x), ("selectionStart" in b) ? (b.selectionStart = x, b.selectionEnd = Math.min(S, b.value.length)) : (S = (x = b.ownerDocument || document) && x.defaultView || window, S.getSelection && (S = S.getSelection(), u = b.textContent.length, s = Math.min(c.start, u), c = c.end === void 0 ? s : Math.min(c.end, u), !S.extend && s > c && (u = c, c = s, s = u), u = Bn(b, s), d = Bn(b, c), u && d && (S.rangeCount !== 1 || S.anchorNode !== u.node || S.anchorOffset !== u.offset || S.focusNode !== d.node || S.focusOffset !== d.offset) && (x = x.createRange(), x.setStart(u.node, u.offset), S.removeAllRanges(), s > c ? (S.addRange(x), S.extend(d.node, d.offset)) : (x.setEnd(d.node, d.offset), S.addRange(x)))))), x = [], S = b; S = S.parentNode;) S.nodeType === 1 && x.push({
					element: S,
					left: S.scrollLeft,
					top: S.scrollTop
				});
				for (typeof b.focus == "function" && b.focus(), b = 0; b < x.length; b++) S = x[b], S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
			}
			Sn = !!Jn, Yn = Jn = null, e.current = n, J = a;
			do
				try {
					for (b = e; J !== null;) {
						var C = J.effectTag;
						if (C & 36 && Fs(b, J.alternate, J), C & 128) {
							x = void 0;
							var w = J.ref;
							if (w !== null) {
								var T = J.stateNode;
								switch (J.tag) {
									case 5:
										x = T;
										break;
									default: x = T;
								}
								typeof w == "function" ? w(x) : w.current = x;
							}
						}
						J = J.nextEffect;
					}
				} catch (e) {
					if (J === null) throw Error(i(330));
					$c(J, e), J = J.nextEffect;
				}
			while (J !== null);
			J = null, da(), G = o;
		} else e.current = n;
		if (yc) yc = !1, bc = e, xc = t;
		else for (J = a; J !== null;) t = J.nextEffect, J.nextEffect = null, J = t;
		if (t = e.firstPendingTime, t === 0 && (vc = null), t === 1073741823 ? e === wc ? Cc++ : (Cc = 0, wc = e) : Cc = 0, typeof rl == "function" && rl(n.stateNode, r), jc(e), gc) throw gc = !1, e = _c, _c = null, e;
		return (G & Zs) === W && Sa(), null;
	}
	function Yc() {
		for (; J !== null;) {
			var e = J.effectTag;
			e & 256 && Ms(J.alternate, J), !(e & 512) || yc || (yc = !0, ba(97, function() {
				return Xc(), null;
			})), J = J.nextEffect;
		}
	}
	function Xc() {
		if (xc !== 90) {
			var e = 97 < xc ? 97 : xc;
			return xc = 90, ya(e, Zc);
		}
	}
	function Zc() {
		if (bc === null) return !1;
		var e = bc;
		if (bc = null, (G & (Qs | $s)) !== W) throw Error(i(331));
		var t = G;
		for (G |= $s, e = e.current.firstEffect; e !== null;) {
			try {
				var n = e;
				if (n.effectTag & 512) switch (n.tag) {
					case 0:
					case 11:
					case 15:
					case 22: Ns(5, n), Ps(5, n);
				}
			} catch (t) {
				if (e === null) throw Error(i(330));
				$c(e, t);
			}
			n = e.nextEffect, e.nextEffect = null, e = n;
		}
		return G = t, Sa(), !0;
	}
	function Qc(e, t, n) {
		t = Ds(n, t), t = Ks(e, t, 1073741823), za(e, t), e = kc(e, 1073741823), e !== null && jc(e);
	}
	function $c(e, t) {
		if (e.tag === 3) Qc(e, e, t);
		else for (var n = e.return; n !== null;) {
			if (n.tag === 3) {
				Qc(n, e, t);
				break;
			} else if (n.tag === 1) {
				var r = n.stateNode;
				if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vc === null || !vc.has(r))) {
					e = Ds(t, e), e = qs(n, e, 1073741823), za(n, e), n = kc(n, 1073741823), n !== null && jc(n);
					break;
				}
			}
			n = n.return;
		}
	}
	function el(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), oc === e && sc === n ? q === ic || q === rc && lc === 1073741823 && ga() - mc < hc ? Lc(e, sc) : pc = !0 : hl(e, n) && (t = e.lastPingedTime, t !== 0 && t < n || (e.lastPingedTime = n, jc(e)));
	}
	function tl(e, t) {
		var n = e.stateNode;
		n !== null && n.delete(t), t = 0, t === 0 && (t = Ec(), t = Dc(t, e, null)), e = kc(e, t), e !== null && jc(e);
	}
	var nl = function(e, t, n) {
		var r = t.expirationTime;
		if (e !== null) {
			var a = t.pendingProps;
			if (e.memoizedProps !== a || B.current) as = !0;
			else {
				if (r < n) {
					switch (as = !1, t.tag) {
						case 3:
							ms(t), rs();
							break;
						case 5:
							if (uo(t), t.mode & 4 && n !== 1 && a.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
							break;
						case 1:
							qi(t.type) && Zi(t);
							break;
						case 4:
							co(t, t.stateNode.containerInfo);
							break;
						case 10:
							r = t.memoizedProps.value, a = t.type._context, R(Ea, a._currentValue), a._currentValue = r;
							break;
						case 13:
							if (t.memoizedState !== null) return r = t.child.childExpirationTime, r !== 0 && r >= n ? gs(e, t, n) : (R(H, H.current & 1), t = bs(e, t, n), t === null ? null : t.sibling);
							R(H, H.current & 1);
							break;
						case 19:
							if (r = t.childExpirationTime >= n, e.effectTag & 64) {
								if (r) return ys(e, t, n);
								t.effectTag |= 64;
							}
							if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null), R(H, H.current), !r) return null;
					}
					return bs(e, t, n);
				}
				as = !1;
			}
		} else as = !1;
		switch (t.expirationTime = 0, t.tag) {
			case 2:
				if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, a = Ki(t, z.current), Na(t, n), a = Co(null, t, r, e, a, n), t.effectTag |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0) {
					if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qi(r)) {
						var o = !0;
						Zi(t);
					} else o = !1;
					t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ia(t);
					var s = r.getDerivedStateFromProps;
					typeof s == "function" && Ga(t, r, s, e), a.updater = Ka, t.stateNode = a, a._reactInternalFiber = t, Xa(t, r, e, n), t = ps(null, t, r, !0, o, n);
				} else t.tag = 0, os(null, t, a, n), t = t.child;
				return t;
			case 16:
				a: {
					if (a = t.elementType, e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, Ve(a), a._status !== 1) throw a._result;
					switch (a = a._result, t.type = a, o = t.tag = ll(a), e = Ta(a, e), o) {
						case 0:
							t = ds(null, t, a, e, n);
							break a;
						case 1:
							t = fs(null, t, a, e, n);
							break a;
						case 11:
							t = ss(null, t, a, e, n);
							break a;
						case 14:
							t = cs(null, t, a, Ta(a.type, e), r, n);
							break a;
					}
					throw Error(i(306, a, ""));
				}
				return t;
			case 0: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ta(r, a), ds(e, t, r, a, n);
			case 1: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ta(r, a), fs(e, t, r, a, n);
			case 3:
				if (ms(t), r = t.updateQueue, e === null || r === null) throw Error(i(282));
				if (r = t.pendingProps, a = t.memoizedState, a = a === null ? null : a.element, La(e, t), Va(t, r, null, n), r = t.memoizedState.element, r === a) rs(), t = bs(e, t, n);
				else {
					if ((a = t.stateNode.hydrate) && (Xo = er(t.stateNode.containerInfo.firstChild), Yo = t, a = Zo = !0), a) for (n = no(t, null, r, n), t.child = n; n;) n.effectTag = n.effectTag & -3 | 1024, n = n.sibling;
					else os(e, t, r, n), rs();
					t = t.child;
				}
				return t;
			case 5: return uo(t), e === null && es(t), r = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Zn(r, a) ? s = null : o !== null && Zn(r, o) && (t.effectTag |= 16), us(e, t), t.mode & 4 && n !== 1 && a.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (os(e, t, s, n), t = t.child), t;
			case 6: return e === null && es(t), null;
			case 13: return gs(e, t, n);
			case 4: return co(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = to(t, null, r, n) : os(e, t, r, n), t.child;
			case 11: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ta(r, a), ss(e, t, r, a, n);
			case 7: return os(e, t, t.pendingProps, n), t.child;
			case 8: return os(e, t, t.pendingProps.children, n), t.child;
			case 12: return os(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					r = t.type._context, a = t.pendingProps, s = t.memoizedProps, o = a.value;
					var c = t.type._context;
					if (R(Ea, c._currentValue), c._currentValue = o, s !== null) if (c = s.value, o = yi(c, o) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(c, o) : 1073741823) | 0, o === 0) {
						if (s.children === a.children && !B.current) {
							t = bs(e, t, n);
							break a;
						}
					} else for (c = t.child, c !== null && (c.return = t); c !== null;) {
						var l = c.dependencies;
						if (l !== null) {
							s = c.child;
							for (var u = l.firstContext; u !== null;) {
								if (u.context === r && (u.observedBits & o) !== 0) {
									c.tag === 1 && (u = Ra(n, null), u.tag = 2, za(c, u)), c.expirationTime < n && (c.expirationTime = n), u = c.alternate, u !== null && u.expirationTime < n && (u.expirationTime = n), Ma(c.return, n), l.expirationTime < n && (l.expirationTime = n);
									break;
								}
								u = u.next;
							}
						} else s = c.tag === 10 && c.type === t.type ? null : c.child;
						if (s !== null) s.return = c;
						else for (s = c; s !== null;) {
							if (s === t) {
								s = null;
								break;
							}
							if (c = s.sibling, c !== null) {
								c.return = s.return, s = c;
								break;
							}
							s = s.return;
						}
						c = s;
					}
					os(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, o = t.pendingProps, r = o.children, Na(t, n), a = Pa(a, o.unstable_observedBits), r = r(a), t.effectTag |= 1, os(e, t, r, n), t.child;
			case 14: return a = t.type, o = Ta(a, t.pendingProps), o = Ta(a.type, o), cs(e, t, a, o, r, n);
			case 15: return ls(e, t, t.type, t.pendingProps, r, n);
			case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ta(r, a), e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, qi(r) ? (e = !0, Zi(t)) : e = !1, Na(t, n), Ja(t, r, a), Xa(t, r, a, n), ps(null, t, r, !0, e, n);
			case 19: return ys(e, t, n);
		}
		throw Error(i(156, t.tag));
	}, rl = null, il = null;
	function al(e) {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
		var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (t.isDisabled || !t.supportsFiber) return !0;
		try {
			var n = t.inject(e);
			rl = function(e) {
				try {
					t.onCommitFiberRoot(n, e, void 0, (e.current.effectTag & 64) == 64);
				} catch {}
			}, il = function(e) {
				try {
					t.onCommitFiberUnmount(n, e);
				} catch {}
			};
		} catch {}
		return !0;
	}
	function ol(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null;
	}
	function sl(e, t, n, r) {
		return new ol(e, t, n, r);
	}
	function cl(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ll(e) {
		if (typeof e == "function") return +!!cl(e);
		if (e != null) {
			if (e = e.$$typeof, e === Ne) return 11;
			if (e === Ie) return 14;
		}
		return 2;
	}
	function ul(e, t) {
		var n = e.alternate;
		return n === null ? (n = sl(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			expirationTime: t.expirationTime,
			firstContext: t.firstContext,
			responders: t.responders
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
	}
	function dl(e, t, n, r, a, o) {
		var s = 2;
		if (r = e, typeof e == "function") cl(e) && (s = 1);
		else if (typeof e == "string") s = 5;
		else a: switch (e) {
			case De: return fl(n.children, a, o, t);
			case Me:
				s = 8, a |= 7;
				break;
			case Oe:
				s = 8, a |= 1;
				break;
			case ke: return e = sl(12, n, t, a | 8), e.elementType = ke, e.type = ke, e.expirationTime = o, e;
			case Pe: return e = sl(13, n, t, a), e.type = Pe, e.elementType = Pe, e.expirationTime = o, e;
			case Fe: return e = sl(19, n, t, a), e.elementType = Fe, e.expirationTime = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case Ae:
						s = 10;
						break a;
					case je:
						s = 9;
						break a;
					case Ne:
						s = 11;
						break a;
					case Ie:
						s = 14;
						break a;
					case Le:
						s = 16, r = null;
						break a;
					case Re:
						s = 22;
						break a;
				}
				throw Error(i(130, e == null ? e : typeof e, ""));
		}
		return t = sl(s, n, t, a), t.elementType = e, t.type = r, t.expirationTime = o, t;
	}
	function fl(e, t, n, r) {
		return e = sl(7, e, r, t), e.expirationTime = n, e;
	}
	function pl(e, t, n) {
		return e = sl(6, e, null, t), e.expirationTime = n, e;
	}
	function Y(e, t, n) {
		return t = sl(4, e.children === null ? [] : e.children, e.key, t), t.expirationTime = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	function ml(e, t, n) {
		this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
	}
	function hl(e, t) {
		var n = e.firstSuspendedTime;
		return e = e.lastSuspendedTime, n !== 0 && n >= t && e <= t;
	}
	function gl(e, t) {
		var n = e.firstSuspendedTime, r = e.lastSuspendedTime;
		n < t && (e.firstSuspendedTime = t), (r > t || n === 0) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
	}
	function _l(e, t) {
		t > e.firstPendingTime && (e.firstPendingTime = t);
		var n = e.firstSuspendedTime;
		n !== 0 && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
	}
	function vl(e, t) {
		var n = e.lastExpiredTime;
		(n === 0 || n > t) && (e.lastExpiredTime = t);
	}
	function yl(e, t, n, r) {
		var a = t.current, o = Ec(), s = Ua.suspense;
		o = Dc(o, a, s);
		a: if (n) {
			n = n._reactInternalFiber;
			b: {
				if (Et(n) !== n || n.tag !== 1) throw Error(i(170));
				var c = n;
				do {
					switch (c.tag) {
						case 3:
							c = c.stateNode.context;
							break b;
						case 1: if (qi(c.type)) {
							c = c.stateNode.__reactInternalMemoizedMergedChildContext;
							break b;
						}
					}
					c = c.return;
				} while (c !== null);
				throw Error(i(171));
			}
			if (n.tag === 1) {
				var l = n.type;
				if (qi(l)) {
					n = Xi(n, l, c);
					break a;
				}
			}
			n = c;
		} else n = Wi;
		return t.context === null ? t.context = n : t.pendingContext = n, t = Ra(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), za(a, t), Oc(a, o), o;
	}
	function bl(e) {
		if (e = e.current, !e.child) return null;
		switch (e.child.tag) {
			case 5: return e.child.stateNode;
			default: return e.child.stateNode;
		}
	}
	function xl(e, t) {
		e = e.memoizedState, e !== null && e.dehydrated !== null && e.retryTime < t && (e.retryTime = t);
	}
	function Sl(e, t) {
		xl(e, t), (e = e.alternate) && xl(e, t);
	}
	function Cl(e, t, n) {
		n = n != null && !0 === n.hydrate;
		var r = new ml(e, t, n), i = sl(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0);
		r.current = i, i.stateNode = r, Ia(i), e[ar] = r.current, n && t !== 0 && tn(e, e.nodeType === 9 ? e : e.ownerDocument), this._internalRoot = r;
	}
	Cl.prototype.render = function(e) {
		yl(e, this._internalRoot, null, null);
	}, Cl.prototype.unmount = function() {
		var e = this._internalRoot, t = e.containerInfo;
		yl(null, e, null, function() {
			t[ar] = null;
		});
	};
	function wl(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
	}
	function Tl(e, t) {
		if (t ||= (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
		return new Cl(e, 0, t ? { hydrate: !0 } : void 0);
	}
	function El(e, t, n, r, i) {
		var a = n._reactRootContainer;
		if (a) {
			var o = a._internalRoot;
			if (typeof i == "function") {
				var s = i;
				i = function() {
					var e = bl(o);
					s.call(e);
				};
			}
			yl(t, o, e, i);
		} else {
			if (a = n._reactRootContainer = Tl(n, r), o = a._internalRoot, typeof i == "function") {
				var c = i;
				i = function() {
					var e = bl(o);
					c.call(e);
				};
			}
			Ic(function() {
				yl(t, o, e, i);
			});
		}
		return bl(o);
	}
	function Dl(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: Ee,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	Ut = function(e) {
		if (e.tag === 13) {
			var t = wa(Ec(), 150, 100);
			Oc(e, t), Sl(e, t);
		}
	}, Wt = function(e) {
		e.tag === 13 && (Oc(e, 3), Sl(e, 3));
	}, Gt = function(e) {
		if (e.tag === 13) {
			var t = Ec();
			t = Dc(t, e, null), Oc(e, t), Sl(e, t);
		}
	}, A = function(e, t, n) {
		switch (t) {
			case "input":
				if (Qe(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var r = n[t];
						if (r !== e && r.form === e.form) {
							var a = lr(r);
							if (!a) throw Error(i(90));
							Je(r), Qe(r, a);
						}
					}
				}
				break;
			case "textarea":
				ot(e, n);
				break;
			case "select": t = n.value, t != null && rt(e, !!n.multiple, t, !1);
		}
	}, re = Fc, ie = function(e, t, n, r, i) {
		var a = G;
		G |= 4;
		try {
			return ya(98, e.bind(null, t, n, r, i));
		} finally {
			G = a, G === W && Sa();
		}
	}, ae = function() {
		(G & (1 | Qs | $s)) === W && (Pc(), Xc());
	}, oe = function(e, t) {
		var n = G;
		G |= 2;
		try {
			return e(t);
		} finally {
			G = n, G === W && Sa();
		}
	};
	function Ol(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!wl(t)) throw Error(i(200));
		return Dl(e, t, null, n);
	}
	var kl = { Events: [
		sr,
		cr,
		lr,
		O,
		T,
		gr,
		function(e) {
			Mt(e, hr);
		},
		te,
		ne,
		En,
		Ft,
		Xc,
		{ current: !1 }
	] };
	(function(e) {
		var t = e.findFiberByHostInstance;
		return al(n({}, e, {
			overrideHookState: null,
			overrideProps: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: xe.ReactCurrentDispatcher,
			findHostInstanceByFiber: function(e) {
				return e = At(e), e === null ? null : e.stateNode;
			},
			findFiberByHostInstance: function(e) {
				return t ? t(e) : null;
			},
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null
		}));
	})({
		findFiberByHostInstance: or,
		bundleType: 0,
		version: "16.14.0",
		rendererPackageName: "react-dom"
	}), e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kl, e.createPortal = Ol, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternalFiber;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : Error(i(268, Object.keys(e)));
		return e = At(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e, t) {
		if ((G & (Qs | $s)) !== W) throw Error(i(187));
		var n = G;
		G |= 1;
		try {
			return ya(99, e.bind(null, t));
		} finally {
			G = n, Sa();
		}
	}, e.hydrate = function(e, t, n) {
		if (!wl(t)) throw Error(i(200));
		return El(null, e, t, !0, n);
	}, e.render = function(e, t, n) {
		if (!wl(t)) throw Error(i(200));
		return El(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!wl(e)) throw Error(i(40));
		return e._reactRootContainer ? (Ic(function() {
			El(null, null, e, !1, function() {
				e._reactRootContainer = null, e[ar] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = Fc, e.unstable_createPortal = function(e, t) {
		return Ol(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
	}, e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
		if (!wl(n)) throw Error(i(200));
		if (e == null || e._reactInternalFiber === void 0) throw Error(i(38));
		return El(e, t, n, !1, r);
	}, e.version = "16.14.0";
})), d = /* @__PURE__ */ i(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = u();
})), f = /* @__PURE__ */ i(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), p = /* @__PURE__ */ i(((e, t) => {
	var n = f();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), m = /* @__PURE__ */ i(((e, t) => {
	t.exports = p()();
})), h = /* @__PURE__ */ n(s()), g = /*#__PURE__*/ h.createContext(null);
//#endregion
//#region node_modules/react-redux/es/utils/batch.js
function _(e) {
	e();
}
var v = _, y = function(e) {
	return v = e;
}, b = function() {
	return v;
};
//#endregion
//#region node_modules/react-redux/es/utils/Subscription.js
function x() {
	var e = b(), t = null, n = null;
	return {
		clear: function() {
			t = null, n = null;
		},
		notify: function() {
			e(function() {
				for (var e = t; e;) e.callback(), e = e.next;
			});
		},
		get: function() {
			for (var e = [], n = t; n;) e.push(n), n = n.next;
			return e;
		},
		subscribe: function(e) {
			var r = !0, i = n = {
				callback: e,
				next: null,
				prev: n
			};
			return i.prev ? i.prev.next = i : t = i, function() {
				!r || t === null || (r = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
			};
		}
	};
}
var S = {
	notify: function() {},
	get: function() {
		return [];
	}
};
function C(e, t) {
	var n, r = S;
	function i(e) {
		return c(), r.subscribe(e);
	}
	function a() {
		r.notify();
	}
	function o() {
		u.onStateChange && u.onStateChange();
	}
	function s() {
		return !!n;
	}
	function c() {
		n || (n = t ? t.addNestedSub(o) : e.subscribe(o), r = x());
	}
	function l() {
		n && (n(), n = void 0, r.clear(), r = S);
	}
	var u = {
		addNestedSub: i,
		notifyNestedSubs: a,
		handleChangeWrapper: o,
		isSubscribed: s,
		trySubscribe: c,
		tryUnsubscribe: l,
		getListeners: function() {
			return r;
		}
	};
	return u;
}
//#endregion
//#region node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
var w = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? h.useLayoutEffect : h.useEffect;
//#endregion
//#region node_modules/react-redux/es/components/Provider.js
function T(e) {
	var t = e.store, n = e.context, r = e.children, i = (0, h.useMemo)(function() {
		return {
			store: t,
			subscription: C(t)
		};
	}, [t]), a = (0, h.useMemo)(function() {
		return t.getState();
	}, [t]);
	w(function() {
		var e = i.subscription;
		return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), a !== t.getState() && e.notifyNestedSubs(), function() {
			e.tryUnsubscribe(), e.onStateChange = null;
		};
	}, [i, a]);
	var o = n || g;
	return /*#__PURE__*/ h.createElement(o.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function E() {
	return E = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, E.apply(null, arguments);
}
var D = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function O(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var k = t((() => {})), A = /* @__PURE__ */ i(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), j = /* @__PURE__ */ i(((e, t) => {
	t.exports = A();
})), M = /* @__PURE__ */ i(((e, t) => {
	var n = j(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})), ee = /* @__PURE__ */ i(((e) => {
	var t = 60103, n = 60106, r = 60107, i = 60108, a = 60114, o = 60109, s = 60110, c = 60112, l = 60113, u = 60120, d = 60115, f = 60116;
	if (typeof Symbol == "function" && Symbol.for) {
		var p = Symbol.for;
		t = p("react.element"), n = p("react.portal"), r = p("react.fragment"), i = p("react.strict_mode"), a = p("react.profiler"), o = p("react.provider"), s = p("react.context"), c = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), d = p("react.memo"), f = p("react.lazy"), p("react.block"), p("react.server.block"), p("react.fundamental"), p("react.debug_trace_mode"), p("react.legacy_hidden");
	}
	function m(e) {
		if (typeof e == "object" && e) {
			var p = e.$$typeof;
			switch (p) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d:
						case o: return e;
						default: return p;
					}
				}
				case n: return p;
			}
		}
	}
	var h = c, g = d;
	e.ForwardRef = h, e.Memo = g, e.isContextConsumer = function(e) {
		return m(e) === s;
	};
})), te = /* @__PURE__ */ i(((e, t) => {
	t.exports = ee();
}));
D(), k();
var ne = /* @__PURE__ */ n(M()), re = te(), ie = [
	"getDisplayName",
	"methodName",
	"renderCountProp",
	"shouldHandleStateChanges",
	"storeKey",
	"withRef",
	"forwardRef",
	"context"
], ae = ["reactReduxForwardedRef"], oe = [], se = [null, null];
function ce(e, t) {
	var n = e[1];
	return [t.payload, n + 1];
}
function le(e, t, n) {
	w(function() {
		return e.apply(void 0, t);
	}, n);
}
function ue(e, t, n, r, i, a, o) {
	e.current = r, t.current = i, n.current = !1, a.current && (a.current = null, o());
}
function de(e, t, n, r, i, a, o, s, c, l) {
	if (e) {
		var u = !1, d = null, f = function() {
			if (!u) {
				var e = t.getState(), n, f;
				try {
					n = r(e, i.current);
				} catch (e) {
					f = e, d = e;
				}
				f || (d = null), n === a.current ? o.current || c() : (a.current = n, s.current = n, o.current = !0, l({
					type: "STORE_UPDATED",
					payload: { error: f }
				}));
			}
		};
		return n.onStateChange = f, n.trySubscribe(), f(), function() {
			if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, d) throw d;
		};
	}
}
var fe = function() {
	return [null, 0];
};
function pe(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.getDisplayName, i = r === void 0 ? function(e) {
		return "ConnectAdvanced(" + e + ")";
	} : r, a = n.methodName, o = a === void 0 ? "connectAdvanced" : a, s = n.renderCountProp, c = s === void 0 ? void 0 : s, l = n.shouldHandleStateChanges, u = l === void 0 ? !0 : l, d = n.storeKey, f = d === void 0 ? "store" : d;
	n.withRef;
	var p = n.forwardRef, m = p === void 0 ? !1 : p, _ = n.context, v = _ === void 0 ? g : _, y = O(n, ie), b = v;
	return function(t) {
		var n = t.displayName || t.name || "Component", r = i(n), a = E({}, y, {
			getDisplayName: i,
			methodName: o,
			renderCountProp: c,
			shouldHandleStateChanges: u,
			storeKey: f,
			displayName: r,
			wrappedComponentName: n,
			WrappedComponent: t
		}), s = y.pure;
		function l(t) {
			return e(t.dispatch, a);
		}
		var d = s ? h.useMemo : function(e) {
			return e();
		};
		function p(e) {
			var n = (0, h.useMemo)(function() {
				var t = e.reactReduxForwardedRef, n = O(e, ae);
				return [
					e.context,
					t,
					n
				];
			}, [e]), r = n[0], i = n[1], a = n[2], o = (0, h.useMemo)(function() {
				return r && r.Consumer && (0, re.isContextConsumer)(/*#__PURE__*/ h.createElement(r.Consumer, null)) ? r : b;
			}, [r, b]), s = (0, h.useContext)(o), c = !!e.store && !!e.store.getState && !!e.store.dispatch;
			s && s.store;
			var f = c ? e.store : s.store, p = (0, h.useMemo)(function() {
				return l(f);
			}, [f]), m = (0, h.useMemo)(function() {
				if (!u) return se;
				var e = C(f, c ? null : s.subscription);
				return [e, e.notifyNestedSubs.bind(e)];
			}, [
				f,
				c,
				s
			]), g = m[0], _ = m[1], v = (0, h.useMemo)(function() {
				return c ? s : E({}, s, { subscription: g });
			}, [
				c,
				s,
				g
			]), y = (0, h.useReducer)(ce, oe, fe), x = y[0][0], S = y[1];
			if (x && x.error) throw x.error;
			var w = (0, h.useRef)(), T = (0, h.useRef)(a), D = (0, h.useRef)(), k = (0, h.useRef)(!1), A = d(function() {
				return D.current && a === T.current ? D.current : p(f.getState(), a);
			}, [
				f,
				x,
				a
			]);
			le(ue, [
				T,
				w,
				k,
				a,
				A,
				D,
				_
			]), le(de, [
				u,
				f,
				g,
				p,
				T,
				w,
				k,
				D,
				_,
				S
			], [
				f,
				g,
				p
			]);
			var j = (0, h.useMemo)(function() {
				return /*#__PURE__*/ h.createElement(t, E({}, A, { ref: i }));
			}, [
				i,
				t,
				A
			]);
			return (0, h.useMemo)(function() {
				return u ? /*#__PURE__*/ h.createElement(o.Provider, { value: v }, j) : j;
			}, [
				o,
				j,
				v
			]);
		}
		var g = s ? h.memo(p) : p;
		if (g.WrappedComponent = t, g.displayName = p.displayName = r, m) {
			var _ = h.forwardRef(function(e, t) {
				return /*#__PURE__*/ h.createElement(g, E({}, e, { reactReduxForwardedRef: t }));
			});
			return _.displayName = r, _.WrappedComponent = t, (0, ne.default)(_, t);
		}
		return (0, ne.default)(g, t);
	};
}
//#endregion
//#region node_modules/react-redux/es/utils/shallowEqual.js
function me(e, t) {
	return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function he(e, t) {
	if (me(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	var n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (var i = 0; i < n.length; i++) if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !me(e[n[i]], t[n[i]])) return !1;
	return !0;
}
//#endregion
//#region node_modules/react-redux/es/utils/bindActionCreators.js
function ge(e, t) {
	var n = {}, r = function(r) {
		var i = e[r];
		typeof i == "function" && (n[r] = function() {
			return t(i.apply(void 0, arguments));
		});
	};
	for (var i in e) r(i);
	return n;
}
//#endregion
//#region node_modules/react-redux/es/connect/wrapMapToProps.js
function _e(e) {
	return function(t, n) {
		var r = e(t, n);
		function i() {
			return r;
		}
		return i.dependsOnOwnProps = !1, i;
	};
}
function ve(e) {
	return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1;
}
function N(e, t) {
	return function(t, n) {
		n.displayName;
		var r = function(e, t) {
			return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
		};
		return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
			r.mapToProps = e, r.dependsOnOwnProps = ve(e);
			var i = r(t, n);
			return typeof i == "function" && (r.mapToProps = i, r.dependsOnOwnProps = ve(i), i = r(t, n)), i;
		}, r;
	};
}
//#endregion
//#region node_modules/react-redux/es/connect/mapDispatchToProps.js
function ye(e) {
	return typeof e == "function" ? N(e, "mapDispatchToProps") : void 0;
}
function be(e) {
	return e ? void 0 : _e(function(e) {
		return { dispatch: e };
	});
}
function xe(e) {
	return e && typeof e == "object" ? _e(function(t) {
		return ge(e, t);
	}) : void 0;
}
var Se = [
	ye,
	be,
	xe
];
//#endregion
//#region node_modules/react-redux/es/connect/mapStateToProps.js
function Ce(e) {
	return typeof e == "function" ? N(e, "mapStateToProps") : void 0;
}
function we(e) {
	return e ? void 0 : _e(function() {
		return {};
	});
}
var Te = [Ce, we];
//#endregion
//#region node_modules/react-redux/es/connect/mergeProps.js
D();
function Ee(e, t, n) {
	return E({}, n, e, t);
}
function De(e) {
	return function(t, n) {
		n.displayName;
		var r = n.pure, i = n.areMergedPropsEqual, a = !1, o;
		return function(t, n, s) {
			var c = e(t, n, s);
			return a ? (!r || !i(c, o)) && (o = c) : (a = !0, o = c), o;
		};
	};
}
function Oe(e) {
	return typeof e == "function" ? De(e) : void 0;
}
function ke(e) {
	return e ? void 0 : function() {
		return Ee;
	};
}
var Ae = [Oe, ke];
//#endregion
//#region node_modules/react-redux/es/connect/selectorFactory.js
k();
var je = [
	"initMapStateToProps",
	"initMapDispatchToProps",
	"initMergeProps"
];
function Me(e, t, n, r) {
	return function(i, a) {
		return n(e(i, a), t(r, a), a);
	};
}
function Ne(e, t, n, r, i) {
	var a = i.areStatesEqual, o = i.areOwnPropsEqual, s = i.areStatePropsEqual, c = !1, l, u, d, f, p;
	function m(i, a) {
		return l = i, u = a, d = e(l, u), f = t(r, u), p = n(d, f, u), c = !0, p;
	}
	function h() {
		return d = e(l, u), t.dependsOnOwnProps && (f = t(r, u)), p = n(d, f, u), p;
	}
	function g() {
		return e.dependsOnOwnProps && (d = e(l, u)), t.dependsOnOwnProps && (f = t(r, u)), p = n(d, f, u), p;
	}
	function _() {
		var t = e(l, u), r = !s(t, d);
		return d = t, r && (p = n(d, f, u)), p;
	}
	function v(e, t) {
		var n = !o(t, u), r = !a(e, l, t, u);
		return l = e, u = t, n && r ? h() : n ? g() : r ? _() : p;
	}
	return function(e, t) {
		return c ? v(e, t) : m(e, t);
	};
}
function Pe(e, t) {
	var n = t.initMapStateToProps, r = t.initMapDispatchToProps, i = t.initMergeProps, a = O(t, je), o = n(e, a), s = r(e, a), c = i(e, a);
	return (a.pure ? Ne : Me)(o, s, c, e, a);
}
D(), k();
var Fe = [
	"pure",
	"areStatesEqual",
	"areOwnPropsEqual",
	"areStatePropsEqual",
	"areMergedPropsEqual"
];
function Ie(e, t, n) {
	for (var r = t.length - 1; r >= 0; r--) {
		var i = t[r](e);
		if (i) return i;
	}
	return function(t, r) {
		throw Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".");
	};
}
function Le(e, t) {
	return e === t;
}
function Re(e) {
	var t = e === void 0 ? {} : e, n = t.connectHOC, r = n === void 0 ? pe : n, i = t.mapStateToPropsFactories, a = i === void 0 ? Te : i, o = t.mapDispatchToPropsFactories, s = o === void 0 ? Se : o, c = t.mergePropsFactories, l = c === void 0 ? Ae : c, u = t.selectorFactory, d = u === void 0 ? Pe : u;
	return function(e, t, n, i) {
		i === void 0 && (i = {});
		var o = i, c = o.pure, u = c === void 0 ? !0 : c, f = o.areStatesEqual, p = f === void 0 ? Le : f, m = o.areOwnPropsEqual, h = m === void 0 ? he : m, g = o.areStatePropsEqual, _ = g === void 0 ? he : g, v = o.areMergedPropsEqual, y = v === void 0 ? he : v, b = O(o, Fe), x = Ie(e, a, "mapStateToProps"), S = Ie(t, s, "mapDispatchToProps"), C = Ie(n, l, "mergeProps");
		return r(d, E({
			methodName: "connect",
			getDisplayName: function(e) {
				return "Connect(" + e + ")";
			},
			shouldHandleStateChanges: !!e,
			initMapStateToProps: x,
			initMapDispatchToProps: S,
			initMergeProps: C,
			pure: u,
			areStatesEqual: p,
			areOwnPropsEqual: h,
			areStatePropsEqual: _,
			areMergedPropsEqual: y
		}, b));
	};
}
var ze = /*#__PURE__*/ Re();
//#endregion
//#region node_modules/react-redux/es/index.js
y((/* @__PURE__ */ n(d())).unstable_batchedUpdates);
//#endregion
//#region node_modules/mirador/dist/es/src/extend/PluginContext.js
var Be = /*#__PURE__*/ h.createContext(), Ve = /* @__PURE__ */ i(((e, t) => {
	t.exports = Array.isArray;
})), He = /* @__PURE__ */ i(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), Ue = /* @__PURE__ */ i(((e, t) => {
	var n = He(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), We = /* @__PURE__ */ i(((e, t) => {
	t.exports = Ue().Symbol;
})), Ge = /* @__PURE__ */ i(((e, t) => {
	var n = We(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), Ke = /* @__PURE__ */ i(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), qe = /* @__PURE__ */ i(((e, t) => {
	var n = We(), r = Ge(), i = Ke(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), Je = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), Ye = /* @__PURE__ */ i(((e, t) => {
	var n = qe(), r = Je(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), Xe = /* @__PURE__ */ i(((e, t) => {
	var n = Ve(), r = Ye(), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
	function o(e, t) {
		if (n(e)) return !1;
		var o = typeof e;
		return o == "number" || o == "symbol" || o == "boolean" || e == null || r(e) ? !0 : a.test(e) || !i.test(e) || t != null && e in Object(t);
	}
	t.exports = o;
})), Ze = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), Qe = /* @__PURE__ */ i(((e, t) => {
	var n = qe(), r = Ze(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), $e = /* @__PURE__ */ i(((e, t) => {
	t.exports = Ue()["__core-js_shared__"];
})), et = /* @__PURE__ */ i(((e, t) => {
	var n = $e(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), tt = /* @__PURE__ */ i(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), nt = /* @__PURE__ */ i(((e, t) => {
	var n = Qe(), r = et(), i = Ze(), a = tt(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), rt = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), it = /* @__PURE__ */ i(((e, t) => {
	var n = nt(), r = rt();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), at = /* @__PURE__ */ i(((e, t) => {
	t.exports = it()(Object, "create");
})), ot = /* @__PURE__ */ i(((e, t) => {
	var n = at();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), st = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), ct = /* @__PURE__ */ i(((e, t) => {
	var n = at(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), lt = /* @__PURE__ */ i(((e, t) => {
	var n = at(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), ut = /* @__PURE__ */ i(((e, t) => {
	var n = at(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), dt = /* @__PURE__ */ i(((e, t) => {
	var n = ot(), r = st(), i = ct(), a = lt(), o = ut();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), ft = /* @__PURE__ */ i(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), pt = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), mt = /* @__PURE__ */ i(((e, t) => {
	var n = pt();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), ht = /* @__PURE__ */ i(((e, t) => {
	var n = mt(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), gt = /* @__PURE__ */ i(((e, t) => {
	var n = mt();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), _t = /* @__PURE__ */ i(((e, t) => {
	var n = mt();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), vt = /* @__PURE__ */ i(((e, t) => {
	var n = mt();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), yt = /* @__PURE__ */ i(((e, t) => {
	var n = ft(), r = ht(), i = gt(), a = _t(), o = vt();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), bt = /* @__PURE__ */ i(((e, t) => {
	t.exports = it()(Ue(), "Map");
})), xt = /* @__PURE__ */ i(((e, t) => {
	var n = dt(), r = yt(), i = bt();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), St = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), Ct = /* @__PURE__ */ i(((e, t) => {
	var n = St();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), wt = /* @__PURE__ */ i(((e, t) => {
	var n = Ct();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), Tt = /* @__PURE__ */ i(((e, t) => {
	var n = Ct();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), Et = /* @__PURE__ */ i(((e, t) => {
	var n = Ct();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Dt = /* @__PURE__ */ i(((e, t) => {
	var n = Ct();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), Ot = /* @__PURE__ */ i(((e, t) => {
	var n = xt(), r = wt(), i = Tt(), a = Et(), o = Dt();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), kt = /* @__PURE__ */ i(((e, t) => {
	var n = Ot(), r = "Expected a function";
	function i(e, t) {
		if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(r);
		var a = function() {
			var n = arguments, r = t ? t.apply(this, n) : n[0], i = a.cache;
			if (i.has(r)) return i.get(r);
			var o = e.apply(this, n);
			return a.cache = i.set(r, o) || i, o;
		};
		return a.cache = new (i.Cache || n)(), a;
	}
	i.Cache = n, t.exports = i;
})), At = /* @__PURE__ */ i(((e, t) => {
	var n = kt(), r = 500;
	function i(e) {
		var t = n(e, function(e) {
			return i.size === r && i.clear(), e;
		}), i = t.cache;
		return t;
	}
	t.exports = i;
})), jt = /* @__PURE__ */ i(((e, t) => {
	var n = At(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g;
	t.exports = n(function(e) {
		var t = [];
		return e.charCodeAt(0) === 46 && t.push(""), e.replace(r, function(e, n, r, a) {
			t.push(r ? a.replace(i, "$1") : n || e);
		}), t;
	});
})), Mt = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
		return i;
	}
	t.exports = n;
})), Nt = /* @__PURE__ */ i(((e, t) => {
	var n = We(), r = Mt(), i = Ve(), a = Ye(), o = Infinity, s = n ? n.prototype : void 0, c = s ? s.toString : void 0;
	function l(e) {
		if (typeof e == "string") return e;
		if (i(e)) return r(e, l) + "";
		if (a(e)) return c ? c.call(e) : "";
		var t = e + "";
		return t == "0" && 1 / e == -o ? "-0" : t;
	}
	t.exports = l;
})), Pt = /* @__PURE__ */ i(((e, t) => {
	var n = Nt();
	function r(e) {
		return e == null ? "" : n(e);
	}
	t.exports = r;
})), Ft = /* @__PURE__ */ i(((e, t) => {
	var n = Ve(), r = Xe(), i = jt(), a = Pt();
	function o(e, t) {
		return n(e) ? e : r(e, t) ? [e] : i(a(e));
	}
	t.exports = o;
})), It = /* @__PURE__ */ i(((e, t) => {
	var n = Ye(), r = Infinity;
	function i(e) {
		if (typeof e == "string" || n(e)) return e;
		var t = e + "";
		return t == "0" && 1 / e == -r ? "-0" : t;
	}
	t.exports = i;
})), Lt = /* @__PURE__ */ i(((e, t) => {
	var n = Ft(), r = It();
	function i(e, t) {
		t = n(t, e);
		for (var i = 0, a = t.length; e != null && i < a;) e = e[r(t[i++])];
		return i && i == a ? e : void 0;
	}
	t.exports = i;
})), Rt = /* @__PURE__ */ i(((e, t) => {
	var n = it();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), zt = /* @__PURE__ */ i(((e, t) => {
	var n = Rt();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), Bt = /* @__PURE__ */ i(((e, t) => {
	var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
	function i(e, t) {
		var i = typeof e;
		return t ??= n, !!t && (i == "number" || i != "symbol" && r.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = i;
})), Vt = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
function Ht(e) {
	"@babel/helpers - typeof";
	return Ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ht(e);
}
var Ut = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Wt(e, t) {
	if (Ht(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ht(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Gt = t((() => {
	Ut();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Kt(e) {
	var t = Wt(e, "string");
	return Ht(t) == "symbol" ? t : t + "";
}
var qt = t((() => {
	Ut(), Gt();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Jt(e, t, n) {
	return (t = Kt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Yt = t((() => {
	qt();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function Xt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Zt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Xt(Object(n), !0).forEach(function(t) {
			Jt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Qt = t((() => {
	Yt();
})), $t = /* @__PURE__ */ r({
	__DO_NOT_USE__ActionTypes: () => dn,
	applyMiddleware: () => cn,
	bindActionCreators: () => on,
	combineReducers: () => rn,
	compose: () => sn,
	createStore: () => tn,
	legacy_createStore: () => fn
});
function P(e) {
	return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
function en(e) {
	if (typeof e != "object" || !e) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function tn(e, t, n) {
	var r;
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(P(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(P(1));
		return n(tn)(e, t);
	}
	if (typeof e != "function") throw Error(P(2));
	var i = e, a = t, o = [], s = o, c = !1;
	function l() {
		s === o && (s = o.slice());
	}
	function u() {
		if (c) throw Error(P(3));
		return a;
	}
	function d(e) {
		if (typeof e != "function") throw Error(P(4));
		if (c) throw Error(P(5));
		var t = !0;
		return l(), s.push(e), function() {
			if (t) {
				if (c) throw Error(P(6));
				t = !1, l();
				var n = s.indexOf(e);
				s.splice(n, 1), o = null;
			}
		};
	}
	function f(e) {
		if (!en(e)) throw Error(P(7));
		if (e.type === void 0) throw Error(P(8));
		if (c) throw Error(P(9));
		try {
			c = !0, a = i(a, e);
		} finally {
			c = !1;
		}
		for (var t = o = s, n = 0; n < t.length; n++) {
			var r = t[n];
			r();
		}
		return e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(P(10));
		i = e, f({ type: dn.REPLACE });
	}
	function m() {
		var e, t = d;
		return e = { subscribe: function(e) {
			if (typeof e != "object" || !e) throw Error(P(11));
			function n() {
				e.next && e.next(u());
			}
			return n(), { unsubscribe: t(n) };
		} }, e[ln] = function() {
			return this;
		}, e;
	}
	return f({ type: dn.INIT }), r = {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p
	}, r[ln] = m, r;
}
function nn(e) {
	Object.keys(e).forEach(function(t) {
		var n = e[t];
		if (n(void 0, { type: dn.INIT }) === void 0) throw Error(P(12));
		if (n(void 0, { type: dn.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(P(13));
	});
}
function rn(e) {
	for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
		var i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	var a = Object.keys(n), o;
	try {
		nn(n);
	} catch (e) {
		o = e;
	}
	return function(e, t) {
		if (e === void 0 && (e = {}), o) throw o;
		for (var r = !1, i = {}, s = 0; s < a.length; s++) {
			var c = a[s], l = n[c], u = e[c], d = l(u, t);
			if (d === void 0) throw t && t.type, Error(P(14));
			i[c] = d, r ||= d !== u;
		}
		return r ||= a.length !== Object.keys(e).length, r ? i : e;
	};
}
function an(e, t) {
	return function() {
		return t(e.apply(this, arguments));
	};
}
function on(e, t) {
	if (typeof e == "function") return an(e, t);
	if (typeof e != "object" || !e) throw Error(P(16));
	var n = {};
	for (var r in e) {
		var i = e[r];
		typeof i == "function" && (n[r] = an(i, t));
	}
	return n;
}
function sn() {
	var e = [...arguments];
	return e.length === 0 ? function(e) {
		return e;
	} : e.length === 1 ? e[0] : e.reduce(function(e, t) {
		return function() {
			return e(t.apply(void 0, arguments));
		};
	});
}
function cn() {
	var e = [...arguments];
	return function(t) {
		return function() {
			var n = t.apply(void 0, arguments), r = function() {
				throw Error(P(15));
			}, i = {
				getState: n.getState,
				dispatch: function() {
					return r.apply(void 0, arguments);
				}
			}, a = e.map(function(e) {
				return e(i);
			});
			return r = sn.apply(void 0, a)(n.dispatch), Zt(Zt({}, n), {}, { dispatch: r });
		};
	};
}
var ln, un, dn, fn, pn = t((() => {
	Qt(), ln = (function() {
		return typeof Symbol == "function" && Symbol.observable || "@@observable";
	})(), un = function() {
		return Math.random().toString(36).substring(7).split("").join(".");
	}, dn = {
		INIT: "@@redux/INIT" + un(),
		REPLACE: "@@redux/REPLACE" + un(),
		PROBE_UNKNOWN_ACTION: function() {
			return "@@redux/PROBE_UNKNOWN_ACTION" + un();
		}
	}, fn = tn;
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function mn(e, t) {
	if (e == null) return {};
	var n, r, i = O(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
var hn = t((() => {
	k();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function gn(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
var _n = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
function vn(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Kt(r.key), r);
	}
}
function yn(e, t, n) {
	return t && vn(e.prototype, t), n && vn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var bn = t((() => {
	qt();
}));
hn(), _n(), bn();
var xn = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Sn = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
}, F = function(e) {
	return Sn[e];
}, Cn = function(e) {
	return e.replace(xn, F);
};
//#endregion
//#region node_modules/mirador/node_modules/react-i18next/dist/es/context.js
Yt();
function wn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Tn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? wn(Object(n), !0).forEach(function(t) {
			Jt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var En = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: !0,
	unescape: Cn
}, Dn, On = (0, h.createContext)();
function kn() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	En = Tn(Tn({}, En), e);
}
function An() {
	return En;
}
var jn = function() {
	function e() {
		gn(this, e), this.usedNamespaces = {};
	}
	return yn(e, [{
		key: "addUsedNamespaces",
		value: function(e) {
			var t = this;
			e.forEach(function(e) {
				t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
			});
		}
	}, {
		key: "getUsedNamespaces",
		value: function() {
			return Object.keys(this.usedNamespaces);
		}
	}]), e;
}();
function Mn(e) {
	Dn = e;
}
function Nn() {
	return Dn;
}
var Pn = {
	type: "3rdParty",
	init: function(e) {
		kn(e.options.react), Mn(e);
	}
};
//#endregion
//#region node_modules/mirador/node_modules/react-i18next/dist/es/utils.js
function Fn() {
	if (console && console.warn) {
		var e, t = [...arguments];
		typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), (e = console).warn.apply(e, t);
	}
}
var In = {};
function Ln() {
	var e = [...arguments];
	typeof e[0] == "string" && In[e[0]] || (typeof e[0] == "string" && (In[e[0]] = /* @__PURE__ */ new Date()), Fn.apply(void 0, e));
}
function Rn(e, t, n) {
	e.loadNamespaces(t, function() {
		e.isInitialized ? n() : e.on("initialized", function t() {
			setTimeout(function() {
				e.off("initialized", t);
			}, 0), n();
		});
	});
}
function zn(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, a = t.languages[t.languages.length - 1];
	if (r.toLowerCase() === "cimode") return !0;
	var o = function(e, n) {
		var r = t.services.backendConnector.state[`${e}|${n}`];
		return r === -1 || r === 2;
	};
	return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !o(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || o(r, e) && (!i || o(a, e)));
}
function Bn(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return !t.languages || !t.languages.length ? (Ln("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure === void 0 ? zn(e, t, n) : t.hasLoadedNamespace(e, { precheck: function(t, r) {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	} });
}
function Vn(e) {
	return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown");
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function Hn(e) {
	if (Array.isArray(e)) return e;
}
var Un = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function Wn(e, t) {
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
var Gn = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function Kn(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var qn = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function Jn(e, t) {
	if (e) {
		if (typeof e == "string") return Kn(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kn(e, t) : void 0;
	}
}
var Yn = t((() => {
	qn();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function Xn() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var Zn = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function Qn(e, t) {
	return Hn(e) || Wn(e, t) || Jn(e, t) || Xn();
}
var $n = t((() => {
	Un(), Gn(), Yn(), Zn();
}));
$n(), Yt();
function er(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function tr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? er(Object(n), !0).forEach(function(t) {
			Jt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var nr = function(e, t) {
	var n = (0, h.useRef)();
	return (0, h.useEffect)(function() {
		n.current = t ? n.current : e;
	}, [e, t]), n.current;
};
function rr(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.i18n, r = (0, h.useContext)(On) || {}, i = r.i18n, a = r.defaultNS, o = n || i || Nn();
	if (o && !o.reportNamespaces && (o.reportNamespaces = new jn()), !o) {
		Ln("You will need to pass in an i18next instance by using initReactI18next");
		var s = function(e) {
			return Array.isArray(e) ? e[e.length - 1] : e;
		}, c = [
			s,
			{},
			!1
		];
		return c.t = s, c.i18n = {}, c.ready = !1, c;
	}
	o.options.react && o.options.react.wait !== void 0 && Ln("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
	var l = tr(tr(tr({}, An()), o.options.react), t), u = l.useSuspense, d = l.keyPrefix, f = e || a || o.options && o.options.defaultNS;
	f = typeof f == "string" ? [f] : f || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(f);
	var p = (o.isInitialized || o.initializedStoreOnce) && f.every(function(e) {
		return Bn(e, o, l);
	});
	function m() {
		return o.getFixedT(null, l.nsMode === "fallback" ? f : f[0], d);
	}
	var g = Qn((0, h.useState)(m), 2), _ = g[0], v = g[1], y = f.join(), b = nr(y), x = (0, h.useRef)(!0);
	(0, h.useEffect)(function() {
		var e = l.bindI18n, t = l.bindI18nStore;
		x.current = !0, !p && !u && Rn(o, f, function() {
			x.current && v(m);
		}), p && b && b !== y && x.current && v(m);
		function n() {
			x.current && v(m);
		}
		return e && o && o.on(e, n), t && o && o.store.on(t, n), function() {
			x.current = !1, e && o && e.split(" ").forEach(function(e) {
				return o.off(e, n);
			}), t && o && t.split(" ").forEach(function(e) {
				return o.store.off(e, n);
			});
		};
	}, [o, y]);
	var S = (0, h.useRef)(!0);
	(0, h.useEffect)(function() {
		x.current && !S.current && v(m), S.current = !1;
	}, [o, d]);
	var C = [
		_,
		o,
		p
	];
	if (C.t = _, C.i18n = o, C.ready = p, p || !p && !u) return C;
	throw new Promise(function(e) {
		Rn(o, f, function() {
			e();
		});
	});
}
Yt(), $n();
var ir = ["forwardedRef"];
function ar(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function or(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ar(Object(n), !0).forEach(function(t) {
			Jt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function sr(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return function(n) {
		function r(r) {
			var i = r.forwardedRef, a = mn(r, ir), o = Qn(rr(e, or(or({}, a), {}, { keyPrefix: t.keyPrefix })), 3), s = o[0], c = o[1], l = o[2], u = or(or({}, a), {}, {
				t: s,
				i18n: c,
				tReady: l
			});
			return t.withRef && i ? u.ref = i : !t.withRef && i && (u.forwardedRef = i), (0, h.createElement)(n, u);
		}
		return r.displayName = `withI18nextTranslation(${Vn(n)})`, r.WrappedComponent = n, t.withRef ? (0, h.forwardRef)(function(e, t) {
			return (0, h.createElement)(r, Object.assign({}, e, { forwardedRef: t }));
		}) : r;
	};
}
//#endregion
//#region node_modules/@material-ui/utils/esm/chainPropTypes.js
function cr(e, t) {
	return function() {
		return null;
	};
}
var lr = t((() => {}));
//#endregion
//#region node_modules/@material-ui/utils/esm/deepmerge.js
function ur(e) {
	return e && Ht(e) === "object" && e.constructor === Object;
}
function dr(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { clone: !0 }, r = n.clone ? E({}, e) : e;
	return ur(e) && ur(t) && Object.keys(t).forEach(function(i) {
		i !== "__proto__" && (ur(t[i]) && i in e ? r[i] = dr(e[i], t[i], n) : r[i] = t[i]);
	}), r;
}
var fr = t((() => {
	D(), Ut();
}));
//#endregion
//#region node_modules/@material-ui/utils/esm/elementAcceptingRef.js
function pr(e) {
	var t = e.prototype;
	return !!(t === void 0 ? {} : t).isReactComponent;
}
function mr(e, t, n, r, i) {
	var a = e[t], o = i || t;
	if (a == null) return null;
	var s, c = a.type;
	return typeof c == "function" && !pr(c) && (s = "Did you accidentally use a plain function component for an element instead?"), s === void 0 ? null : /* @__PURE__ */ Error(`Invalid ${r} \`${o}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`);
}
var hr, gr, _r = t((() => {
	hr = /* @__PURE__ */ n(m()), lr(), gr = cr(hr.default.element, mr), gr.isRequired = cr(hr.default.element.isRequired, mr);
}));
//#endregion
//#region node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js
function vr(e) {
	var t = e.prototype;
	return !!(t === void 0 ? {} : t).isReactComponent;
}
function yr(e, t, n, r, i) {
	var a = e[t], o = i || t;
	if (a == null) return null;
	var s;
	return typeof a == "function" && !vr(a) && (s = "Did you accidentally provide a plain function component instead?"), s === void 0 ? null : /* @__PURE__ */ Error(`Invalid ${r} \`${o}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`);
}
var br, xr, Sr = t((() => {
	br = /* @__PURE__ */ n(m()), lr(), xr = cr(br.elementType, yr);
}));
//#endregion
//#region node_modules/@material-ui/utils/esm/exactProp.js
function Cr(e) {
	return e;
}
var wr = t((() => {}));
//#endregion
//#region node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js
function Tr(e) {
	for (var t = "https://mui.com/production-error/?code=" + e, n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified Material-UI error #" + e + "; visit " + t + " for the full message.";
}
var Er = t((() => {}));
//#endregion
//#region node_modules/@material-ui/utils/esm/getDisplayName.js
function Dr(e) {
	var t = `${e}`.match(Mr);
	return t && t[1] || "";
}
function Or(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
	return e.displayName || e.name || Dr(e) || t;
}
function kr(e, t, n) {
	var r = Or(t);
	return e.displayName || (r === "" ? n : `${n}(${r})`);
}
function Ar(e) {
	if (e != null) {
		if (typeof e == "string") return e;
		if (typeof e == "function") return Or(e, "Component");
		if (Ht(e) === "object") switch (e.$$typeof) {
			case jr.ForwardRef: return kr(e, e.render, "ForwardRef");
			case jr.Memo: return kr(e, e.type, "memo");
			default: return;
		}
	}
}
var jr, Mr, Nr = t((() => {
	Ut(), jr = te(), Mr = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
}));
//#endregion
//#region node_modules/@material-ui/utils/esm/HTMLElementType.js
function Pr(e, t, n, r, i) {
	return null;
}
var Fr = t((() => {})), Ir, Lr = t((() => {
	Ir = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
})), Rr, zr, Br = t((() => {
	Rr = /* @__PURE__ */ n(m()), zr = Rr.default.oneOfType([Rr.default.func, Rr.default.object]);
})), Vr = /* @__PURE__ */ r({
	HTMLElementType: () => Pr,
	chainPropTypes: () => cr,
	deepmerge: () => dr,
	elementAcceptingRef: () => gr,
	elementTypeAcceptingRef: () => xr,
	exactProp: () => Cr,
	formatMuiErrorMessage: () => Tr,
	getDisplayName: () => Ar,
	ponyfillGlobal: () => Ir,
	refType: () => zr
}), Hr = t((() => {
	lr(), fr(), _r(), Sr(), wr(), Er(), Nr(), Fr(), Lr(), Br();
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/colorManipulator.js
function Ur(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
	return Math.min(Math.max(t, e), n);
}
function Wr(e) {
	e = e.substr(1);
	var t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
	return n && n[0].length === 1 && (n = n.map(function(e) {
		return e + e;
	})), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map(function(e, t) {
		return t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3;
	}).join(", ")})` : "";
}
function Gr(e) {
	e = Kr(e);
	var t = e.values, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), o = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (e + n / 30) % 12;
		return i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
	}, s = "rgb", c = [
		Math.round(o(0) * 255),
		Math.round(o(8) * 255),
		Math.round(o(4) * 255)
	];
	return e.type === "hsla" && (s += "a", c.push(t[3])), qr({
		type: s,
		values: c
	});
}
function Kr(e) {
	if (e.type) return e;
	if (e.charAt(0) === "#") return Kr(Wr(e));
	var t = e.indexOf("("), n = e.substring(0, t);
	if ([
		"rgb",
		"rgba",
		"hsl",
		"hsla"
	].indexOf(n) === -1) throw Error(Tr(3, e));
	var r = e.substring(t + 1, e.length - 1).split(",");
	return r = r.map(function(e) {
		return parseFloat(e);
	}), {
		type: n,
		values: r
	};
}
function qr(e) {
	var t = e.type, n = e.values;
	return t.indexOf("rgb") === -1 ? t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`) : n = n.map(function(e, t) {
		return t < 3 ? parseInt(e, 10) : e;
	}), `${t}(${n.join(", ")})`;
}
function Jr(e, t) {
	var n = Yr(e), r = Yr(t);
	return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function Yr(e) {
	e = Kr(e);
	var t = e.type === "hsl" ? Kr(Gr(e)).values : e.values;
	return t = t.map(function(e) {
		return e /= 255, e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
	}), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function Xr(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : .15;
	return Yr(e) > .5 ? Qr(e, t) : $r(e, t);
}
function Zr(e, t) {
	return e = Kr(e), t = Ur(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.values[3] = t, qr(e);
}
function Qr(e, t) {
	if (e = Kr(e), t = Ur(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
	else if (e.type.indexOf("rgb") !== -1) for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
	return qr(e);
}
function $r(e, t) {
	if (e = Kr(e), t = Ur(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t;
	else if (e.type.indexOf("rgb") !== -1) for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
	return qr(e);
}
var ei = t((() => {
	Hr();
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/createBreakpoints.js
function ti(e) {
	var t = e.values, n = t === void 0 ? {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920
	} : t, r = e.unit, i = r === void 0 ? "px" : r, a = e.step, o = a === void 0 ? 5 : a, s = mn(e, [
		"values",
		"unit",
		"step"
	]);
	function c(e) {
		return `@media (min-width:${typeof n[e] == "number" ? n[e] : e}${i})`;
	}
	function l(e) {
		var t = ni.indexOf(e) + 1, r = n[ni[t]];
		return t === ni.length ? c("xs") : `@media (max-width:${(typeof r == "number" && t > 0 ? r : e) - o / 100}${i})`;
	}
	function u(e, t) {
		var r = ni.indexOf(t);
		return r === ni.length - 1 ? c(e) : `@media (min-width:${typeof n[e] == "number" ? n[e] : e}${i}) and (max-width:${(r !== -1 && typeof n[ni[r + 1]] == "number" ? n[ni[r + 1]] : t) - o / 100}${i})`;
	}
	function d(e) {
		return u(e, e);
	}
	function f(e) {
		return n[e];
	}
	return E({
		keys: ni,
		values: n,
		up: c,
		down: l,
		between: u,
		only: d,
		width: f
	}, s);
}
var ni, ri = t((() => {
	D(), hn(), ni = [
		"xs",
		"sm",
		"md",
		"lg",
		"xl"
	];
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/createMixins.js
function ii(e, t, n) {
	var r;
	return E({
		gutters: function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return console.warn([
				"Material-UI: theme.mixins.gutters() is deprecated.",
				"You can use the source of the mixin directly:",
				"\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "
			].join("\n")), E({
				paddingLeft: t(2),
				paddingRight: t(2)
			}, n, Jt({}, e.up("sm"), E({
				paddingLeft: t(3),
				paddingRight: t(3)
			}, n[e.up("sm")])));
		},
		toolbar: (r = { minHeight: 56 }, Jt(r, `${e.up("xs")} and (orientation: landscape)`, { minHeight: 48 }), Jt(r, e.up("sm"), { minHeight: 64 }), r)
	}, n);
}
var ai = t((() => {
	Yt(), D();
})), oi, si = t((() => {
	oi = {
		black: "#000",
		white: "#fff"
	};
})), ci, li = t((() => {
	ci = {
		50: "#fafafa",
		100: "#f5f5f5",
		200: "#eeeeee",
		300: "#e0e0e0",
		400: "#bdbdbd",
		500: "#9e9e9e",
		600: "#757575",
		700: "#616161",
		800: "#424242",
		900: "#212121",
		A100: "#d5d5d5",
		A200: "#aaaaaa",
		A400: "#303030",
		A700: "#616161"
	};
})), ui, di = t((() => {
	ui = {
		50: "#e8eaf6",
		100: "#c5cae9",
		200: "#9fa8da",
		300: "#7986cb",
		400: "#5c6bc0",
		500: "#3f51b5",
		600: "#3949ab",
		700: "#303f9f",
		800: "#283593",
		900: "#1a237e",
		A100: "#8c9eff",
		A200: "#536dfe",
		A400: "#3d5afe",
		A700: "#304ffe"
	};
})), fi, pi = t((() => {
	fi = {
		50: "#fce4ec",
		100: "#f8bbd0",
		200: "#f48fb1",
		300: "#f06292",
		400: "#ec407a",
		500: "#e91e63",
		600: "#d81b60",
		700: "#c2185b",
		800: "#ad1457",
		900: "#880e4f",
		A100: "#ff80ab",
		A200: "#ff4081",
		A400: "#f50057",
		A700: "#c51162"
	};
})), mi, hi = t((() => {
	mi = {
		50: "#ffebee",
		100: "#ffcdd2",
		200: "#ef9a9a",
		300: "#e57373",
		400: "#ef5350",
		500: "#f44336",
		600: "#e53935",
		700: "#d32f2f",
		800: "#c62828",
		900: "#b71c1c",
		A100: "#ff8a80",
		A200: "#ff5252",
		A400: "#ff1744",
		A700: "#d50000"
	};
})), gi, _i = t((() => {
	gi = {
		50: "#fff3e0",
		100: "#ffe0b2",
		200: "#ffcc80",
		300: "#ffb74d",
		400: "#ffa726",
		500: "#ff9800",
		600: "#fb8c00",
		700: "#f57c00",
		800: "#ef6c00",
		900: "#e65100",
		A100: "#ffd180",
		A200: "#ffab40",
		A400: "#ff9100",
		A700: "#ff6d00"
	};
})), vi, yi = t((() => {
	vi = {
		50: "#e3f2fd",
		100: "#bbdefb",
		200: "#90caf9",
		300: "#64b5f6",
		400: "#42a5f5",
		500: "#2196f3",
		600: "#1e88e5",
		700: "#1976d2",
		800: "#1565c0",
		900: "#0d47a1",
		A100: "#82b1ff",
		A200: "#448aff",
		A400: "#2979ff",
		A700: "#2962ff"
	};
})), bi, xi = t((() => {
	bi = {
		50: "#e8f5e9",
		100: "#c8e6c9",
		200: "#a5d6a7",
		300: "#81c784",
		400: "#66bb6a",
		500: "#4caf50",
		600: "#43a047",
		700: "#388e3c",
		800: "#2e7d32",
		900: "#1b5e20",
		A100: "#b9f6ca",
		A200: "#69f0ae",
		A400: "#00e676",
		A700: "#00c853"
	};
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/createPalette.js
function Si(e, t, n, r) {
	var i = r.light || r, a = r.dark || r * 1.5;
	e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = $r(e.main, i) : t === "dark" && (e.dark = Qr(e.main, a)));
}
function Ci(e) {
	var t = e.primary, n = t === void 0 ? {
		light: ui[300],
		main: ui[500],
		dark: ui[700]
	} : t, r = e.secondary, i = r === void 0 ? {
		light: fi.A200,
		main: fi.A400,
		dark: fi.A700
	} : r, a = e.error, o = a === void 0 ? {
		light: mi[300],
		main: mi[500],
		dark: mi[700]
	} : a, s = e.warning, c = s === void 0 ? {
		light: gi[300],
		main: gi[500],
		dark: gi[700]
	} : s, l = e.info, u = l === void 0 ? {
		light: vi[300],
		main: vi[500],
		dark: vi[700]
	} : l, d = e.success, f = d === void 0 ? {
		light: bi[300],
		main: bi[500],
		dark: bi[700]
	} : d, p = e.type, m = p === void 0 ? "light" : p, h = e.contrastThreshold, g = h === void 0 ? 3 : h, _ = e.tonalOffset, v = _ === void 0 ? .2 : _, y = mn(e, [
		"primary",
		"secondary",
		"error",
		"warning",
		"info",
		"success",
		"type",
		"contrastThreshold",
		"tonalOffset"
	]);
	function b(e) {
		return Jr(e, Ti.text.primary) >= g ? Ti.text.primary : wi.text.primary;
	}
	var x = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
		if (e = E({}, e), !e.main && e[t] && (e.main = e[t]), !e.main) throw Error(Tr(4, t));
		if (typeof e.main != "string") throw Error(Tr(5, JSON.stringify(e.main)));
		return Si(e, "light", n, v), Si(e, "dark", r, v), e.contrastText ||= b(e.main), e;
	}, S = {
		dark: Ti,
		light: wi
	};
	return dr(E({
		common: oi,
		type: m,
		primary: x(n),
		secondary: x(i, "A400", "A200", "A700"),
		error: x(o),
		warning: x(c),
		info: x(u),
		success: x(f),
		grey: ci,
		contrastThreshold: g,
		getContrastText: b,
		augmentColor: x,
		tonalOffset: v
	}, S[m]), y);
}
var wi, Ti, Ei = t((() => {
	D(), hn(), Hr(), si(), li(), di(), pi(), hi(), _i(), yi(), xi(), ei(), wi = {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.54)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: oi.white,
			default: ci[50]
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	}, Ti = {
		text: {
			primary: oi.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			hint: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: ci[800],
			default: "#303030"
		},
		action: {
			active: oi.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/createTypography.js
function Di(e) {
	return Math.round(e * 1e5) / 1e5;
}
function Oi(e) {
	return Di(e);
}
function ki(e, t) {
	var n = typeof t == "function" ? t(e) : t, r = n.fontFamily, i = r === void 0 ? ji : r, a = n.fontSize, o = a === void 0 ? 14 : a, s = n.fontWeightLight, c = s === void 0 ? 300 : s, l = n.fontWeightRegular, u = l === void 0 ? 400 : l, d = n.fontWeightMedium, f = d === void 0 ? 500 : d, p = n.fontWeightBold, m = p === void 0 ? 700 : p, h = n.htmlFontSize, g = h === void 0 ? 16 : h, _ = n.allVariants, v = n.pxToRem, y = mn(n, [
		"fontFamily",
		"fontSize",
		"fontWeightLight",
		"fontWeightRegular",
		"fontWeightMedium",
		"fontWeightBold",
		"htmlFontSize",
		"allVariants",
		"pxToRem"
	]), b = o / 14, x = v || function(e) {
		return `${e / g * b}rem`;
	}, S = function(e, t, n, r, a) {
		return E({
			fontFamily: i,
			fontWeight: e,
			fontSize: x(t),
			lineHeight: n
		}, i === ji ? { letterSpacing: `${Di(r / t)}em` } : {}, a, _);
	}, C = {
		h1: S(c, 96, 1.167, -1.5),
		h2: S(c, 60, 1.2, -.5),
		h3: S(u, 48, 1.167, 0),
		h4: S(u, 34, 1.235, .25),
		h5: S(u, 24, 1.334, 0),
		h6: S(f, 20, 1.6, .15),
		subtitle1: S(u, 16, 1.75, .15),
		subtitle2: S(f, 14, 1.57, .1),
		body1: S(u, 16, 1.5, .15),
		body2: S(u, 14, 1.43, .15),
		button: S(f, 14, 1.75, .4, Ai),
		caption: S(u, 12, 1.66, .4),
		overline: S(u, 12, 2.66, 1, Ai)
	};
	return dr(E({
		htmlFontSize: g,
		pxToRem: x,
		round: Oi,
		fontFamily: i,
		fontSize: o,
		fontWeightLight: c,
		fontWeightRegular: u,
		fontWeightMedium: f,
		fontWeightBold: m
	}, C), y, { clone: !1 });
}
var Ai, ji, Mi = t((() => {
	D(), hn(), Hr(), Ai = { textTransform: "uppercase" }, ji = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/shadows.js
function I() {
	return [
		`${arguments.length <= 0 ? void 0 : arguments[0]}px ${arguments.length <= 1 ? void 0 : arguments[1]}px ${arguments.length <= 2 ? void 0 : arguments[2]}px ${arguments.length <= 3 ? void 0 : arguments[3]}px rgba(0,0,0,${Ni})`,
		`${arguments.length <= 4 ? void 0 : arguments[4]}px ${arguments.length <= 5 ? void 0 : arguments[5]}px ${arguments.length <= 6 ? void 0 : arguments[6]}px ${arguments.length <= 7 ? void 0 : arguments[7]}px rgba(0,0,0,${Pi})`,
		`${arguments.length <= 8 ? void 0 : arguments[8]}px ${arguments.length <= 9 ? void 0 : arguments[9]}px ${arguments.length <= 10 ? void 0 : arguments[10]}px ${arguments.length <= 11 ? void 0 : arguments[11]}px rgba(0,0,0,${Fi})`
	].join(",");
}
var Ni, Pi, Fi, Ii, Li = t((() => {
	Ni = .2, Pi = .14, Fi = .12, Ii = [
		"none",
		I(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
		I(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
		I(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
		I(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
		I(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
		I(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
		I(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
		I(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
		I(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
		I(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
		I(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
		I(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
		I(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
		I(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
		I(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
		I(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
		I(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
		I(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
		I(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
		I(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
		I(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
		I(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
		I(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
		I(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
	];
})), Ri, zi = t((() => {
	Ri = { borderRadius: 4 };
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function Bi(e) {
	if (Array.isArray(e)) return Kn(e);
}
var Vi = t((() => {
	qn();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function Hi(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
var Ui = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function L() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var R = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function Wi(e) {
	return Bi(e) || Hi(e) || Jn(e) || L();
}
var z = t((() => {
	Vi(), Ui(), Yn(), R();
}));
//#endregion
//#region node_modules/@material-ui/system/esm/merge.js
function B(e, t) {
	return t ? dr(e, t, { clone: !1 }) : e;
}
var Gi = t((() => {
	Hr();
}));
//#endregion
//#region node_modules/@material-ui/system/esm/breakpoints.js
function Ki(e, t, n) {
	if (Array.isArray(t)) {
		var r = e.theme.breakpoints || Yi;
		return t.reduce(function(e, i, a) {
			return e[r.up(r.keys[a])] = n(t[a]), e;
		}, {});
	}
	if (Ht(t) === "object") {
		var i = e.theme.breakpoints || Yi;
		return Object.keys(t).reduce(function(e, r) {
			return e[i.up(r)] = n(t[r]), e;
		}, {});
	}
	return n(t);
}
function qi(e) {
	var t = function(t) {
		var n = e(t), r = t.theme.breakpoints || Yi;
		return B(n, r.keys.reduce(function(n, i) {
			return t[i] && (n ||= {}, n[r.up(i)] = e(E({ theme: t.theme }, t[i]))), n;
		}, null));
	};
	return t.propTypes = {}, t.filterProps = [
		"xs",
		"sm",
		"md",
		"lg",
		"xl"
	].concat(Wi(e.filterProps)), t;
}
var Ji, Yi, Xi = t((() => {
	z(), D(), Ut(), Gi(), Ji = {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920
	}, Yi = {
		keys: [
			"xs",
			"sm",
			"md",
			"lg",
			"xl"
		],
		up: function(e) {
			return `@media (min-width:${Ji[e]}px)`;
		}
	};
}));
//#endregion
//#region node_modules/@material-ui/system/esm/style.js
function Zi(e, t) {
	return !t || typeof t != "string" ? null : t.split(".").reduce(function(e, t) {
		return e && e[t] ? e[t] : null;
	}, e);
}
function V(e) {
	var t = e.prop, n = e.cssProperty, r = n === void 0 ? e.prop : n, i = e.themeKey, a = e.transform, o = function(e) {
		if (e[t] == null) return null;
		var n = e[t], o = e.theme, s = Zi(o, i) || {};
		return Ki(e, n, function(e) {
			var t;
			return typeof s == "function" ? t = s(e) : Array.isArray(s) ? t = s[e] || e : (t = Zi(s, e) || e, a && (t = a(t))), r === !1 ? t : Jt({}, r, t);
		});
	};
	return o.propTypes = {}, o.filterProps = [t], o;
}
var Qi = t((() => {
	Yt(), Xi();
}));
//#endregion
//#region node_modules/@material-ui/system/esm/compose.js
function $i() {
	var e = [...arguments], t = function(t) {
		return e.reduce(function(e, n) {
			var r = n(t);
			return r ? B(e, r) : e;
		}, {});
	};
	return t.propTypes = {}, t.filterProps = e.reduce(function(e, t) {
		return e.concat(t.filterProps);
	}, []), t;
}
var ea = t((() => {
	Gi();
}));
//#endregion
//#region node_modules/@material-ui/system/esm/borders.js
function ta(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
var na, ra, ia, aa, oa, sa, ca, la, ua = t((() => {
	Qi(), ea(), na = V({
		prop: "border",
		themeKey: "borders",
		transform: ta
	}), ra = V({
		prop: "borderTop",
		themeKey: "borders",
		transform: ta
	}), ia = V({
		prop: "borderRight",
		themeKey: "borders",
		transform: ta
	}), aa = V({
		prop: "borderBottom",
		themeKey: "borders",
		transform: ta
	}), oa = V({
		prop: "borderLeft",
		themeKey: "borders",
		transform: ta
	}), sa = V({
		prop: "borderColor",
		themeKey: "palette"
	}), ca = V({
		prop: "borderRadius",
		themeKey: "shape"
	}), la = $i(na, ra, ia, aa, oa, sa, ca);
}));
//#endregion
//#region node_modules/@material-ui/system/esm/styleFunctionSx.js
function da(e, t) {
	var n = {};
	return Object.keys(e).forEach(function(r) {
		t.indexOf(r) === -1 && (n[r] = e[r]);
	}), n;
}
function fa(e) {
	var t = function(t) {
		var n = e(t);
		return t.css ? E({}, B(n, e(E({ theme: t.theme }, t.css))), da(t.css, [e.filterProps])) : t.sx ? E({}, B(n, e(E({ theme: t.theme }, t.sx))), da(t.sx, [e.filterProps])) : n;
	};
	return t.propTypes = {}, t.filterProps = ["css", "sx"].concat(Wi(e.filterProps)), t;
}
function pa(e) {
	return fa(e);
}
var ma = t((() => {
	z(), D(), Gi();
})), ha, ga, _a, va, ya, ba, xa, Sa = t((() => {
	Qi(), ea(), ha = V({
		prop: "displayPrint",
		cssProperty: !1,
		transform: function(e) {
			return { "@media print": { display: e } };
		}
	}), ga = V({ prop: "display" }), _a = V({ prop: "overflow" }), va = V({ prop: "textOverflow" }), ya = V({ prop: "visibility" }), ba = V({ prop: "whiteSpace" }), xa = $i(ha, ga, _a, va, ya, ba);
})), Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La = t((() => {
	Qi(), ea(), Ca = V({ prop: "flexBasis" }), wa = V({ prop: "flexDirection" }), Ta = V({ prop: "flexWrap" }), Ea = V({ prop: "justifyContent" }), Da = V({ prop: "alignItems" }), Oa = V({ prop: "alignContent" }), ka = V({ prop: "order" }), Aa = V({ prop: "flex" }), ja = V({ prop: "flexGrow" }), Ma = V({ prop: "flexShrink" }), Na = V({ prop: "alignSelf" }), Pa = V({ prop: "justifyItems" }), Fa = V({ prop: "justifySelf" }), Ia = $i(Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa);
})), Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za = t((() => {
	Qi(), ea(), Ra = V({ prop: "gridGap" }), za = V({ prop: "gridColumnGap" }), Ba = V({ prop: "gridRowGap" }), Va = V({ prop: "gridColumn" }), Ha = V({ prop: "gridRow" }), Ua = V({ prop: "gridAutoFlow" }), Wa = V({ prop: "gridAutoColumns" }), Ga = V({ prop: "gridAutoRows" }), Ka = V({ prop: "gridTemplateColumns" }), qa = V({ prop: "gridTemplateRows" }), Ja = V({ prop: "gridTemplateAreas" }), Ya = V({ prop: "gridArea" }), Xa = $i(Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya);
})), Qa, $a, eo, to = t((() => {
	Qi(), ea(), Qa = V({
		prop: "color",
		themeKey: "palette"
	}), $a = V({
		prop: "bgcolor",
		cssProperty: "backgroundColor",
		themeKey: "palette"
	}), eo = $i(Qa, $a);
})), no, ro, io, ao, oo, so, co, lo = t((() => {
	Qi(), ea(), no = V({ prop: "position" }), ro = V({
		prop: "zIndex",
		themeKey: "zIndex"
	}), io = V({ prop: "top" }), ao = V({ prop: "right" }), oo = V({ prop: "bottom" }), so = V({ prop: "left" }), co = $i(no, ro, io, ao, oo, so);
})), uo, fo = t((() => {
	Qi(), uo = V({
		prop: "boxShadow",
		themeKey: "shadows"
	});
}));
//#endregion
//#region node_modules/@material-ui/system/esm/sizing.js
function H(e) {
	return e <= 1 ? `${e * 100}%` : e;
}
var po, mo, ho, go, _o, U, vo, yo, bo, xo, So = t((() => {
	Qi(), ea(), po = V({
		prop: "width",
		transform: H
	}), mo = V({
		prop: "maxWidth",
		transform: H
	}), ho = V({
		prop: "minWidth",
		transform: H
	}), go = V({
		prop: "height",
		transform: H
	}), _o = V({
		prop: "maxHeight",
		transform: H
	}), U = V({
		prop: "minHeight",
		transform: H
	}), vo = V({
		prop: "size",
		cssProperty: "width",
		transform: H
	}), yo = V({
		prop: "size",
		cssProperty: "height",
		transform: H
	}), bo = V({ prop: "boxSizing" }), xo = $i(po, mo, ho, go, _o, U, bo);
}));
//#endregion
//#region node_modules/@material-ui/system/esm/memoize.js
function Co(e) {
	var t = {};
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var wo = t((() => {}));
//#endregion
//#region node_modules/@material-ui/system/esm/spacing.js
function To(e) {
	var t = e.spacing || 8;
	return typeof t == "number" ? function(e) {
		return t * e;
	} : Array.isArray(t) ? function(e) {
		return t[e];
	} : typeof t == "function" ? t : function() {};
}
function Eo(e, t) {
	if (typeof t == "string" || t == null) return t;
	var n = e(Math.abs(t));
	return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Do(e, t) {
	return function(n) {
		return e.reduce(function(e, r) {
			return e[r] = Eo(t, n), e;
		}, {});
	};
}
function Oo(e) {
	var t = e.theme, n = To(t);
	return Object.keys(e).map(function(t) {
		if (No.indexOf(t) === -1) return null;
		var r = Do(Mo(t), n), i = e[t];
		return Ki(e, i, r);
	}).reduce(B, {});
}
var ko, Ao, jo, Mo, No, Po = t((() => {
	$n(), Xi(), Gi(), wo(), ko = {
		m: "margin",
		p: "padding"
	}, Ao = {
		t: "Top",
		r: "Right",
		b: "Bottom",
		l: "Left",
		x: ["Left", "Right"],
		y: ["Top", "Bottom"]
	}, jo = {
		marginX: "mx",
		marginY: "my",
		paddingX: "px",
		paddingY: "py"
	}, Mo = Co(function(e) {
		if (e.length > 2) if (jo[e]) e = jo[e];
		else return [e];
		var t = Qn(e.split(""), 2), n = t[0], r = t[1], i = ko[n], a = Ao[r] || "";
		return Array.isArray(a) ? a.map(function(e) {
			return i + e;
		}) : [i + a];
	}), No = /* @__PURE__ */ "m.mt.mr.mb.ml.mx.my.p.pt.pr.pb.pl.px.py.margin.marginTop.marginRight.marginBottom.marginLeft.marginX.marginY.padding.paddingTop.paddingRight.paddingBottom.paddingLeft.paddingX.paddingY".split("."), Oo.propTypes = {}, Oo.filterProps = No;
})), Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo = t((() => {
	Qi(), ea(), Fo = V({
		prop: "fontFamily",
		themeKey: "typography"
	}), Io = V({
		prop: "fontSize",
		themeKey: "typography"
	}), Lo = V({
		prop: "fontStyle",
		themeKey: "typography"
	}), Ro = V({
		prop: "fontWeight",
		themeKey: "typography"
	}), zo = V({ prop: "letterSpacing" }), Bo = V({ prop: "lineHeight" }), Vo = V({ prop: "textAlign" }), Ho = $i(Fo, Io, Lo, Ro, zo, Bo, Vo);
})), Wo = /* @__PURE__ */ r({
	alignContent: () => Oa,
	alignItems: () => Da,
	alignSelf: () => Na,
	bgcolor: () => $a,
	border: () => na,
	borderBottom: () => aa,
	borderColor: () => sa,
	borderLeft: () => oa,
	borderRadius: () => ca,
	borderRight: () => ia,
	borderTop: () => ra,
	borders: () => la,
	bottom: () => oo,
	boxSizing: () => bo,
	breakpoints: () => qi,
	color: () => Qa,
	compose: () => $i,
	createUnarySpacing: () => To,
	css: () => pa,
	display: () => xa,
	flex: () => Aa,
	flexBasis: () => Ca,
	flexDirection: () => wa,
	flexGrow: () => ja,
	flexShrink: () => Ma,
	flexWrap: () => Ta,
	flexbox: () => Ia,
	fontFamily: () => Fo,
	fontSize: () => Io,
	fontStyle: () => Lo,
	fontWeight: () => Ro,
	grid: () => Xa,
	gridArea: () => Ya,
	gridAutoColumns: () => Wa,
	gridAutoFlow: () => Ua,
	gridAutoRows: () => Ga,
	gridColumn: () => Va,
	gridColumnGap: () => za,
	gridGap: () => Ra,
	gridRow: () => Ha,
	gridRowGap: () => Ba,
	gridTemplateAreas: () => Ja,
	gridTemplateColumns: () => Ka,
	gridTemplateRows: () => qa,
	height: () => go,
	justifyContent: () => Ea,
	justifyItems: () => Pa,
	justifySelf: () => Fa,
	left: () => so,
	letterSpacing: () => zo,
	lineHeight: () => Bo,
	maxHeight: () => _o,
	maxWidth: () => mo,
	minHeight: () => U,
	minWidth: () => ho,
	order: () => ka,
	palette: () => eo,
	position: () => no,
	positions: () => co,
	right: () => ao,
	shadows: () => uo,
	sizeHeight: () => yo,
	sizeWidth: () => vo,
	sizing: () => xo,
	spacing: () => Oo,
	style: () => V,
	styleFunctionSx: () => fa,
	textAlign: () => Vo,
	top: () => io,
	typography: () => Ho,
	width: () => po,
	zIndex: () => ro
}), Go = t((() => {
	ua(), ua(), Xi(), ea(), ma(), ma(), Sa(), La(), La(), Za(), Za(), to(), to(), lo(), lo(), fo(), So(), So(), Po(), Po(), Qi(), Uo(), Uo();
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/createSpacing.js
function Ko() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
	if (e.mui) return e;
	var t = To({ spacing: e }), n = function() {
		var e = [...arguments];
		return e.length === 0 ? t(1) : e.length === 1 ? t(e[0]) : e.map(function(e) {
			if (typeof e == "string") return e;
			var n = t(e);
			return typeof n == "number" ? `${n}px` : n;
		}).join(" ");
	};
	return Object.defineProperty(n, "unit", { get: function() {
		return e;
	} }), n.mui = !0, n;
}
var qo = t((() => {
	Go();
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/transitions.js
function Jo(e) {
	return `${Math.round(e)}ms`;
}
var Yo, Xo, Zo, Qo = t((() => {
	hn(), Yo = {
		easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
		easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
		easeIn: "cubic-bezier(0.4, 0, 1, 1)",
		sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
	}, Xo = {
		shortest: 150,
		shorter: 200,
		short: 250,
		standard: 300,
		complex: 375,
		enteringScreen: 225,
		leavingScreen: 195
	}, Zo = {
		easing: Yo,
		duration: Xo,
		create: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["all"], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.duration, r = n === void 0 ? Xo.standard : n, i = t.easing, a = i === void 0 ? Yo.easeInOut : i, o = t.delay, s = o === void 0 ? 0 : o;
			return mn(t, [
				"duration",
				"easing",
				"delay"
			]), (Array.isArray(e) ? e : [e]).map(function(e) {
				return `${e} ${typeof r == "string" ? r : Jo(r)} ${a} ${typeof s == "string" ? s : Jo(s)}`;
			}).join(",");
		},
		getAutoHeightDuration: function(e) {
			if (!e) return 0;
			var t = e / 36;
			return Math.round((4 + 15 * t ** .25 + t / 5) * 10);
		}
	};
})), $o, es = t((() => {
	$o = {
		mobileStepper: 1e3,
		speedDial: 1050,
		appBar: 1100,
		drawer: 1200,
		modal: 1300,
		snackbar: 1400,
		tooltip: 1500
	};
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/createTheme.js
function ts() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.breakpoints, n = t === void 0 ? {} : t, r = e.mixins, i = r === void 0 ? {} : r, a = e.palette, o = a === void 0 ? {} : a, s = e.spacing, c = e.typography, l = c === void 0 ? {} : c, u = mn(e, [
		"breakpoints",
		"mixins",
		"palette",
		"spacing",
		"typography"
	]), d = Ci(o), f = ti(n), p = Ko(s), m = dr({
		breakpoints: f,
		direction: "ltr",
		mixins: ii(f, p, i),
		overrides: {},
		palette: d,
		props: {},
		shadows: Ii,
		typography: ki(d, l),
		spacing: p,
		shape: Ri,
		transitions: Zo,
		zIndex: $o
	}, u);
	return m = [...arguments].slice(1).reduce(function(e, t) {
		return dr(e, t);
	}, m), m;
}
var ns = t((() => {
	hn(), Hr(), ri(), ai(), Ei(), Mi(), Li(), zi(), qo(), Qo(), es();
})), rs, is, as = t((() => {
	rs = typeof Symbol == "function" && Symbol.for, is = rs ? Symbol.for("mui.nested") : "__THEME_NESTED__";
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js
function os() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.disableGlobal, n = t === void 0 ? !1 : t, r = e.productionPrefix, i = r === void 0 ? "jss" : r, a = e.seed, o = a === void 0 ? "" : a, s = o === "" ? "" : `${o}-`, c = 0, l = function() {
		return c += 1, c;
	};
	return function(e, t) {
		var r = t.options.name;
		if (r && r.indexOf("Mui") === 0 && !t.options.link && !n) {
			if (ss.indexOf(e.key) !== -1) return `Mui-${e.key}`;
			var a = `${s}${r}-${e.key}`;
			return !t.options.theme[is] || o !== "" ? a : `${a}-${l()}`;
		}
		return `${s}${i}${l()}`;
	};
}
var ss, cs = t((() => {
	as(), ss = [
		"checked",
		"disabled",
		"error",
		"focused",
		"focusVisible",
		"required",
		"expanded",
		"selected"
	];
})), ls = t((() => {
	cs();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/createStyles/createStyles.js
function us(e) {
	return e;
}
var ds = t((() => {})), fs = t((() => {
	ds();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
function ps(e) {
	var t = e.theme, n = e.name, r = e.props;
	if (!t || !t.props || !t.props[n]) return r;
	var i = t.props[n], a;
	for (a in i) r[a] === void 0 && (r[a] = i[a]);
	return r;
}
var ms = t((() => {})), hs = t((() => {
	ms();
})), gs, _s, vs = t((() => {
	gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _s = (typeof window > "u" ? "undefined" : gs(window)) === "object" && (typeof document > "u" ? "undefined" : gs(document)) === "object" && document.nodeType === 9;
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function ys(e, t) {
	return ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ys(e, t);
}
var bs = t((() => {}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function xs(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ys(e, t);
}
var Ss = t((() => {
	bs();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Cs(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var ws = t((() => {}));
//#endregion
//#region node_modules/jss/dist/jss.esm.js
function Ts(e) {
	if (typeof e != "object" || !e) return e;
	if (Array.isArray(e)) return e.map(Ts);
	if (e.constructor !== Is) return e;
	var t = {};
	for (var n in e) t[n] = Ts(e[n]);
	return t;
}
function Es(e, t, n) {
	e === void 0 && (e = "unnamed");
	var r = n.jss, i = Ts(t);
	return r.plugins.onCreateRule(e, i, n) || (e[0], null);
}
function Ds(e) {
	return e && e.format === !1 ? {
		linebreak: "",
		space: ""
	} : {
		linebreak: "\n",
		space: " "
	};
}
function Os(e, t) {
	for (var n = "", r = 0; r < t; r++) n += "  ";
	return n + e;
}
function ks(e, t, n) {
	n === void 0 && (n = {});
	var r = "";
	if (!t) return r;
	var i = n.indent, a = i === void 0 ? 0 : i, o = t.fallbacks;
	n.format === !1 && (a = -Infinity);
	var s = Ds(n), c = s.linebreak, l = s.space;
	if (e && a++, o) if (Array.isArray(o)) for (var u = 0; u < o.length; u++) {
		var d = o[u];
		for (var f in d) {
			var p = d[f];
			p != null && (r && (r += c), r += Os(f + ":" + l + Rs(p) + ";", a));
		}
	}
	else for (var m in o) {
		var h = o[m];
		h != null && (r && (r += c), r += Os(m + ":" + l + Rs(h) + ";", a));
	}
	for (var g in t) {
		var _ = t[g];
		_ != null && g !== "fallbacks" && (r && (r += c), r += Os(g + ":" + l + Rs(_) + ";", a));
	}
	return !r && !n.allowEmpty || !e ? r : (a--, r &&= "" + c + r + c, Os("" + e + l + "{" + r, a) + Os("}", a));
}
function As(e, t) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		if (r.attached && r.options.index > t.index && r.options.insertionPoint === t.insertionPoint) return r;
	}
	return null;
}
function js(e, t) {
	for (var n = e.length - 1; n >= 0; n--) {
		var r = e[n];
		if (r.attached && r.options.insertionPoint === t.insertionPoint) return r;
	}
	return null;
}
function Ms(e) {
	for (var t = Tc(), n = 0; n < t.childNodes.length; n++) {
		var r = t.childNodes[n];
		if (r.nodeType === 8 && r.nodeValue.trim() === e) return r;
	}
	return null;
}
function Ns(e) {
	var t = J.registry;
	if (t.length > 0) {
		var n = As(t, e);
		if (n && n.renderer) return {
			parent: n.renderer.element.parentNode,
			node: n.renderer.element
		};
		if (n = js(t, e), n && n.renderer) return {
			parent: n.renderer.element.parentNode,
			node: n.renderer.element.nextSibling
		};
	}
	var r = e.insertionPoint;
	if (r && typeof r == "string") {
		var i = Ms(r);
		if (i) return {
			parent: i.parentNode,
			node: i.nextSibling
		};
	}
	return !1;
}
function Ps(e, t) {
	var n = t.insertionPoint, r = Ns(t);
	if (r !== !1 && r.parent) {
		r.parent.insertBefore(e, r.node);
		return;
	}
	if (n && typeof n.nodeType == "number") {
		var i = n, a = i.parentNode;
		a && a.insertBefore(e, i.nextSibling);
		return;
	}
	Tc().appendChild(e);
}
function Fs(e) {
	var t = null;
	for (var n in e) {
		var r = e[n], i = typeof r;
		if (i === "function") t ||= {}, t[n] = r;
		else if (i === "object" && r !== null && !Array.isArray(r)) {
			var a = Fs(r);
			a && (t ||= {}, t[n] = a);
		}
	}
	return t;
}
var Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, W, Zs, Qs, $s, ec, tc, nc, rc, ic, ac, G, oc, K, sc, q, cc, lc, uc, dc, fc, pc, mc, hc, J, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc = t((() => {
	D(), vs(), bn(), Ss(), ws(), k(), Is = {}.constructor, Ls = function(e, t) {
		for (var n = "", r = 0; r < e.length && e[r] !== "!important"; r++) n && (n += t), n += e[r];
		return n;
	}, Rs = function(e) {
		if (!Array.isArray(e)) return e;
		var t = "";
		if (Array.isArray(e[0])) for (var n = 0; n < e.length && e[n] !== "!important"; n++) t && (t += ", "), t += Ls(e[n], " ");
		else t = Ls(e, ", ");
		return e[e.length - 1] === "!important" && (t += " !important"), t;
	}, zs = /([[\].#*$><+~=|^:(),"'`\s])/g, Bs = typeof CSS < "u" && CSS.escape, Vs = (function(e) {
		return Bs ? Bs(e) : e.replace(zs, "\\$1");
	}), Hs = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "style", this.isProcessed = !1;
			var r = n.sheet, i = n.Renderer;
			this.key = e, this.options = n, this.style = t, r ? this.renderer = r.renderer : i && (this.renderer = new i());
		}
		var t = e.prototype;
		return t.prop = function(e, t, n) {
			if (t === void 0) return this.style[e];
			var r = n ? n.force : !1;
			if (!r && this.style[e] === t) return this;
			var i = t;
			(!n || n.process !== !1) && (i = this.options.jss.plugins.onChangeValue(t, e, this));
			var a = i == null || i === !1, o = e in this.style;
			if (a && !o && !r) return this;
			var s = a && o;
			if (s ? delete this.style[e] : this.style[e] = i, this.renderable && this.renderer) return s ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, i), this;
			var c = this.options.sheet;
			return c && c.attached, this;
		}, e;
	}(), Us = /*#__PURE__*/ function(e) {
		xs(t, e);
		function t(t, n, r) {
			var i = e.call(this, t, n, r) || this, a = r.selector, o = r.scoped, s = r.sheet, c = r.generateId;
			return a ? i.selectorText = a : o !== !1 && (i.id = c(Cs(Cs(i)), s), i.selectorText = "." + Vs(i.id)), i;
		}
		var n = t.prototype;
		return n.applyTo = function(e) {
			var t = this.renderer;
			if (t) {
				var n = this.toJSON();
				for (var r in n) t.setProperty(e, r, n[r]);
			}
			return this;
		}, n.toJSON = function() {
			var e = {};
			for (var t in this.style) {
				var n = this.style[t];
				typeof n == "object" ? Array.isArray(n) && (e[t] = Rs(n)) : e[t] = n;
			}
			return e;
		}, n.toString = function(e) {
			var t = this.options.sheet, n = t && t.options.link ? E({}, e, { allowEmpty: !0 }) : e;
			return ks(this.selectorText, this.style, n);
		}, yn(t, [{
			key: "selector",
			set: function(e) {
				if (e !== this.selectorText) {
					this.selectorText = e;
					var t = this.renderer, n = this.renderable;
					!n || !t || t.setSelector(n, e) || t.replaceRule(n, this);
				}
			},
			get: function() {
				return this.selectorText;
			}
		}]), t;
	}(Hs), Ws = { onCreateRule: function(e, t, n) {
		return e[0] === "@" || n.parent && n.parent.type === "keyframes" ? null : new Us(e, t, n);
	} }, Gs = {
		indent: 1,
		children: !0
	}, Ks = /@([\w-]+)/, qs = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "conditional", this.isProcessed = !1, this.key = e;
			var r = e.match(Ks);
			for (var i in this.at = r ? r[1] : "unknown", this.query = n.name || "@" + this.at, this.options = n, this.rules = new fc(E({}, n, { parent: this })), t) this.rules.add(i, t[i]);
			this.rules.process();
		}
		var t = e.prototype;
		return t.getRule = function(e) {
			return this.rules.get(e);
		}, t.indexOf = function(e) {
			return this.rules.indexOf(e);
		}, t.addRule = function(e, t, n) {
			var r = this.rules.add(e, t, n);
			return r ? (this.options.jss.plugins.onProcessRule(r), r) : null;
		}, t.replaceRule = function(e, t, n) {
			var r = this.rules.replace(e, t, n);
			return r && this.options.jss.plugins.onProcessRule(r), r;
		}, t.toString = function(e) {
			e === void 0 && (e = Gs);
			var t = Ds(e).linebreak;
			if (e.indent ??= Gs.indent, e.children ??= Gs.children, e.children === !1) return this.query + " {}";
			var n = this.rules.toString(e);
			return n ? this.query + " {" + t + n + t + "}" : "";
		}, e;
	}(), Js = /@container|@media|@supports\s+/, Ys = { onCreateRule: function(e, t, n) {
		return Js.test(e) ? new qs(e, t, n) : null;
	} }, Xs = {
		indent: 1,
		children: !0
	}, W = /@keyframes\s+([\w-]+)/, Zs = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
			var r = e.match(W);
			r && r[1] ? this.name = r[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = n;
			var i = n.scoped, a = n.sheet, o = n.generateId;
			for (var s in this.id = i === !1 ? this.name : Vs(o(this, a)), this.rules = new fc(E({}, n, { parent: this })), t) this.rules.add(s, t[s], E({}, n, { parent: this }));
			this.rules.process();
		}
		var t = e.prototype;
		return t.toString = function(e) {
			e === void 0 && (e = Xs);
			var t = Ds(e).linebreak;
			if (e.indent ??= Xs.indent, e.children ??= Xs.children, e.children === !1) return this.at + " " + this.id + " {}";
			var n = this.rules.toString(e);
			return n &&= "" + t + n + t, this.at + " " + this.id + " {" + n + "}";
		}, e;
	}(), Qs = /@keyframes\s+/, $s = /\$([\w-]+)/g, ec = function(e, t) {
		return typeof e == "string" ? e.replace($s, function(e, n) {
			return n in t ? t[n] : e;
		}) : e;
	}, tc = function(e, t, n) {
		var r = e[t], i = ec(r, n);
		i !== r && (e[t] = i);
	}, nc = {
		onCreateRule: function(e, t, n) {
			return typeof e == "string" && Qs.test(e) ? new Zs(e, t, n) : null;
		},
		onProcessStyle: function(e, t, n) {
			return t.type !== "style" || !n ? e : ("animation-name" in e && tc(e, "animation-name", n.keyframes), "animation" in e && tc(e, "animation", n.keyframes), e);
		},
		onChangeValue: function(e, t, n) {
			var r = n.options.sheet;
			if (!r) return e;
			switch (t) {
				case "animation": return ec(e, r.keyframes);
				case "animation-name": return ec(e, r.keyframes);
				default: return e;
			}
		}
	}, rc = /*#__PURE__*/ function(e) {
		xs(t, e);
		function t() {
			return e.apply(this, arguments) || this;
		}
		var n = t.prototype;
		return n.toString = function(e) {
			var t = this.options.sheet, n = t && t.options.link ? E({}, e, { allowEmpty: !0 }) : e;
			return ks(this.key, this.style, n);
		}, t;
	}(Hs), ic = { onCreateRule: function(e, t, n) {
		return n.parent && n.parent.type === "keyframes" ? new rc(e, t, n) : null;
	} }, ac = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = e, this.style = t, this.options = n;
		}
		var t = e.prototype;
		return t.toString = function(e) {
			var t = Ds(e).linebreak;
			if (Array.isArray(this.style)) {
				for (var n = "", r = 0; r < this.style.length; r++) n += ks(this.at, this.style[r]), this.style[r + 1] && (n += t);
				return n;
			}
			return ks(this.at, this.style, e);
		}, e;
	}(), G = /@font-face/, oc = { onCreateRule: function(e, t, n) {
		return G.test(e) ? new ac(e, t, n) : null;
	} }, K = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = e, this.style = t, this.options = n;
		}
		var t = e.prototype;
		return t.toString = function(e) {
			return ks(this.key, this.style, e);
		}, e;
	}(), sc = { onCreateRule: function(e, t, n) {
		return e === "@viewport" || e === "@-ms-viewport" ? new K(e, t, n) : null;
	} }, q = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "simple", this.isProcessed = !1, this.key = e, this.value = t, this.options = n;
		}
		var t = e.prototype;
		return t.toString = function(e) {
			if (Array.isArray(this.value)) {
				for (var t = "", n = 0; n < this.value.length; n++) t += this.key + " " + this.value[n] + ";", this.value[n + 1] && (t += "\n");
				return t;
			}
			return this.key + " " + this.value + ";";
		}, e;
	}(), cc = {
		"@charset": !0,
		"@import": !0,
		"@namespace": !0
	}, lc = [
		Ws,
		Ys,
		nc,
		ic,
		oc,
		sc,
		{ onCreateRule: function(e, t, n) {
			return e in cc ? new q(e, t, n) : null;
		} }
	], uc = { process: !0 }, dc = {
		force: !0,
		process: !0
	}, fc = /*#__PURE__*/ function() {
		function e(e) {
			this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = e, this.classes = e.classes, this.keyframes = e.keyframes;
		}
		var t = e.prototype;
		return t.add = function(e, t, n) {
			var r = this.options, i = r.parent, a = r.sheet, o = r.jss, s = r.Renderer, c = r.generateId, l = r.scoped, u = E({
				classes: this.classes,
				parent: i,
				sheet: a,
				jss: o,
				Renderer: s,
				generateId: c,
				scoped: l,
				name: e,
				keyframes: this.keyframes,
				selector: void 0
			}, n), d = e;
			e in this.raw && (d = e + "-d" + this.counter++), this.raw[d] = t, d in this.classes && (u.selector = "." + Vs(this.classes[d]));
			var f = Es(d, t, u);
			if (!f) return null;
			this.register(f);
			var p = u.index === void 0 ? this.index.length : u.index;
			return this.index.splice(p, 0, f), f;
		}, t.replace = function(e, t, n) {
			var r = this.get(e), i = this.index.indexOf(r);
			r && this.remove(r);
			var a = n;
			return i !== -1 && (a = E({}, n, { index: i })), this.add(e, t, a);
		}, t.get = function(e) {
			return this.map[e];
		}, t.remove = function(e) {
			this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
		}, t.indexOf = function(e) {
			return this.index.indexOf(e);
		}, t.process = function() {
			var e = this.options.jss.plugins;
			this.index.slice(0).forEach(e.onProcessRule, e);
		}, t.register = function(e) {
			this.map[e.key] = e, e instanceof Us ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof Zs && this.keyframes && (this.keyframes[e.name] = e.id);
		}, t.unregister = function(e) {
			delete this.map[e.key], e instanceof Us ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof Zs && delete this.keyframes[e.name];
		}, t.update = function() {
			var e, t, n;
			if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], n = arguments.length <= 2 ? void 0 : arguments[2]) : (t = arguments.length <= 0 ? void 0 : arguments[0], n = arguments.length <= 1 ? void 0 : arguments[1], e = null), e) this.updateOne(this.get(e), t, n);
			else for (var r = 0; r < this.index.length; r++) this.updateOne(this.index[r], t, n);
		}, t.updateOne = function(t, n, r) {
			r === void 0 && (r = uc);
			var i = this.options, a = i.jss.plugins, o = i.sheet;
			if (t.rules instanceof e) {
				t.rules.update(n, r);
				return;
			}
			var s = t.style;
			if (a.onUpdate(n, t, o, r), r.process && s && s !== t.style) {
				for (var c in a.onProcessStyle(t.style, t, o), t.style) {
					var l = t.style[c];
					l !== s[c] && t.prop(c, l, dc);
				}
				for (var u in s) {
					var d = t.style[u], f = s[u];
					d == null && d !== f && t.prop(u, null, dc);
				}
			}
		}, t.toString = function(e) {
			for (var t = "", n = this.options.sheet, r = n ? n.options.link : !1, i = Ds(e).linebreak, a = 0; a < this.index.length; a++) {
				var o = this.index[a].toString(e);
				!o && !r || (t && (t += i), t += o);
			}
			return t;
		}, e;
	}(), pc = /*#__PURE__*/ function() {
		function e(e, t) {
			for (var n in this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = E({}, t, {
				sheet: this,
				parent: this,
				classes: this.classes,
				keyframes: this.keyframes
			}), t.Renderer && (this.renderer = new t.Renderer(this)), this.rules = new fc(this.options), e) this.rules.add(n, e[n]);
			this.rules.process();
		}
		var t = e.prototype;
		return t.attach = function() {
			return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
		}, t.detach = function() {
			return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
		}, t.addRule = function(e, t, n) {
			var r = this.queue;
			this.attached && !r && (this.queue = []);
			var i = this.rules.add(e, t, n);
			return i ? (this.options.jss.plugins.onProcessRule(i), this.attached ? (this.deployed && (r ? r.push(i) : (this.insertRule(i), this.queue &&= (this.queue.forEach(this.insertRule, this), void 0))), i) : (this.deployed = !1, i)) : null;
		}, t.replaceRule = function(e, t, n) {
			var r = this.rules.get(e);
			if (!r) return this.addRule(e, t, n);
			var i = this.rules.replace(e, t, n);
			return i && this.options.jss.plugins.onProcessRule(i), this.attached ? (this.deployed && this.renderer && (i ? r.renderable && this.renderer.replaceRule(r.renderable, i) : this.renderer.deleteRule(r)), i) : (this.deployed = !1, i);
		}, t.insertRule = function(e) {
			this.renderer && this.renderer.insertRule(e);
		}, t.addRules = function(e, t) {
			var n = [];
			for (var r in e) {
				var i = this.addRule(r, e[r], t);
				i && n.push(i);
			}
			return n;
		}, t.getRule = function(e) {
			return this.rules.get(e);
		}, t.deleteRule = function(e) {
			var t = typeof e == "object" ? e : this.rules.get(e);
			return !t || this.attached && !t.renderable ? !1 : (this.rules.remove(t), this.attached && t.renderable && this.renderer ? this.renderer.deleteRule(t.renderable) : !0);
		}, t.indexOf = function(e) {
			return this.rules.indexOf(e);
		}, t.deploy = function() {
			return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
		}, t.update = function() {
			var e;
			return (e = this.rules).update.apply(e, arguments), this;
		}, t.updateOne = function(e, t, n) {
			return this.rules.updateOne(e, t, n), this;
		}, t.toString = function(e) {
			return this.rules.toString(e);
		}, e;
	}(), mc = /*#__PURE__*/ function() {
		function e() {
			this.plugins = {
				internal: [],
				external: []
			}, this.registry = {};
		}
		var t = e.prototype;
		return t.onCreateRule = function(e, t, n) {
			for (var r = 0; r < this.registry.onCreateRule.length; r++) {
				var i = this.registry.onCreateRule[r](e, t, n);
				if (i) return i;
			}
			return null;
		}, t.onProcessRule = function(e) {
			if (!e.isProcessed) {
				for (var t = e.options.sheet, n = 0; n < this.registry.onProcessRule.length; n++) this.registry.onProcessRule[n](e, t);
				e.style && this.onProcessStyle(e.style, e, t), e.isProcessed = !0;
			}
		}, t.onProcessStyle = function(e, t, n) {
			for (var r = 0; r < this.registry.onProcessStyle.length; r++) t.style = this.registry.onProcessStyle[r](t.style, t, n);
		}, t.onProcessSheet = function(e) {
			for (var t = 0; t < this.registry.onProcessSheet.length; t++) this.registry.onProcessSheet[t](e);
		}, t.onUpdate = function(e, t, n, r) {
			for (var i = 0; i < this.registry.onUpdate.length; i++) this.registry.onUpdate[i](e, t, n, r);
		}, t.onChangeValue = function(e, t, n) {
			for (var r = e, i = 0; i < this.registry.onChangeValue.length; i++) r = this.registry.onChangeValue[i](r, t, n);
			return r;
		}, t.use = function(e, t) {
			t === void 0 && (t = { queue: "external" });
			var n = this.plugins[t.queue];
			n.indexOf(e) === -1 && (n.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(e, t) {
				for (var n in t) n in e && e[n].push(t[n]);
				return e;
			}, {
				onCreateRule: [],
				onProcessRule: [],
				onProcessStyle: [],
				onProcessSheet: [],
				onChangeValue: [],
				onUpdate: []
			}));
		}, e;
	}(), hc = /*#__PURE__*/ function() {
		function e() {
			this.registry = [];
		}
		var t = e.prototype;
		return t.add = function(e) {
			var t = this.registry, n = e.options.index;
			if (t.indexOf(e) === -1) {
				if (t.length === 0 || n >= this.index) {
					t.push(e);
					return;
				}
				for (var r = 0; r < t.length; r++) if (t[r].options.index > n) {
					t.splice(r, 0, e);
					return;
				}
			}
		}, t.reset = function() {
			this.registry = [];
		}, t.remove = function(e) {
			var t = this.registry.indexOf(e);
			this.registry.splice(t, 1);
		}, t.toString = function(e) {
			for (var t = e === void 0 ? {} : e, n = t.attached, r = O(t, ["attached"]), i = Ds(r).linebreak, a = "", o = 0; o < this.registry.length; o++) {
				var s = this.registry[o];
				n != null && s.attached !== n || (a && (a += i), a += s.toString(r));
			}
			return a;
		}, yn(e, [{
			key: "index",
			get: function() {
				return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
			}
		}]), e;
	}(), J = new hc(), gc = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), _c = "2f1acc6c3a606b082e5eef5e54414ffb", gc[_c] ?? (gc[_c] = 0), vc = gc[_c]++, yc = function(e) {
		e === void 0 && (e = {});
		var t = 0;
		return function(n, r) {
			t += 1;
			var i = "", a = "";
			return r && (r.options.classNamePrefix && (a = r.options.classNamePrefix), r.options.jss.id != null && (i = String(r.options.jss.id))), e.minify ? "" + (a || "c") + vc + i + t : a + n.key + "-" + vc + (i ? "-" + i : "") + "-" + t;
		};
	}, bc = function(e) {
		var t;
		return function() {
			return t ||= e(), t;
		};
	}, xc = function(e, t) {
		try {
			return e.attributeStyleMap ? e.attributeStyleMap.get(t) : e.style.getPropertyValue(t);
		} catch {
			return "";
		}
	}, Sc = function(e, t, n) {
		try {
			var r = n;
			if (Array.isArray(n) && (r = Rs(n)), e.attributeStyleMap) e.attributeStyleMap.set(t, r);
			else {
				var i = r ? r.indexOf("!important") : -1, a = i > -1 ? r.substr(0, i - 1) : r;
				e.style.setProperty(t, a, i > -1 ? "important" : "");
			}
		} catch {
			return !1;
		}
		return !0;
	}, Cc = function(e, t) {
		try {
			e.attributeStyleMap ? e.attributeStyleMap.delete(t) : e.style.removeProperty(t);
		} catch {}
	}, wc = function(e, t) {
		return e.selectorText = t, e.selectorText === t;
	}, Tc = bc(function() {
		return document.querySelector("head");
	}), Ec = bc(function() {
		var e = document.querySelector("meta[property=\"csp-nonce\"]");
		return e ? e.getAttribute("content") : null;
	}), Dc = function(e, t, n) {
		try {
			"insertRule" in e ? e.insertRule(t, n) : "appendRule" in e && e.appendRule(t);
		} catch {
			return !1;
		}
		return e.cssRules[n];
	}, Oc = function(e, t) {
		var n = e.cssRules.length;
		return t === void 0 || t > n ? n : t;
	}, kc = function() {
		var e = document.createElement("style");
		return e.textContent = "\n", e;
	}, Ac = /*#__PURE__*/ function() {
		function e(e) {
			this.getPropertyValue = xc, this.setProperty = Sc, this.removeProperty = Cc, this.setSelector = wc, this.hasInsertedRules = !1, this.cssRules = [], e && J.add(e), this.sheet = e;
			var t = this.sheet ? this.sheet.options : {}, n = t.media, r = t.meta, i = t.element;
			this.element = i || kc(), this.element.setAttribute("data-jss", ""), n && this.element.setAttribute("media", n), r && this.element.setAttribute("data-meta", r);
			var a = Ec();
			a && this.element.setAttribute("nonce", a);
		}
		var t = e.prototype;
		return t.attach = function() {
			if (!(this.element.parentNode || !this.sheet)) {
				Ps(this.element, this.sheet.options);
				var e = !!(this.sheet && this.sheet.deployed);
				this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy());
			}
		}, t.detach = function() {
			if (this.sheet) {
				var e = this.element.parentNode;
				e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = "\n");
			}
		}, t.deploy = function() {
			var e = this.sheet;
			if (e) {
				if (e.options.link) {
					this.insertRules(e.rules);
					return;
				}
				this.element.textContent = "\n" + e.toString() + "\n";
			}
		}, t.insertRules = function(e, t) {
			for (var n = 0; n < e.index.length; n++) this.insertRule(e.index[n], n, t);
		}, t.insertRule = function(e, t, n) {
			if (n === void 0 && (n = this.element.sheet), e.rules) {
				var r = e, i = n;
				if (e.type === "conditional" || e.type === "keyframes") {
					var a = Oc(n, t);
					if (i = Dc(n, r.toString({ children: !1 }), a), i === !1) return !1;
					this.refCssRule(e, a, i);
				}
				return this.insertRules(r.rules, i), i;
			}
			var o = e.toString();
			if (!o) return !1;
			var s = Oc(n, t), c = Dc(n, o, s);
			return c === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(e, s, c), c);
		}, t.refCssRule = function(e, t, n) {
			e.renderable = n, e.options.parent instanceof pc && this.cssRules.splice(t, 0, n);
		}, t.deleteRule = function(e) {
			var t = this.element.sheet, n = this.indexOf(e);
			return n === -1 ? !1 : (t.deleteRule(n), this.cssRules.splice(n, 1), !0);
		}, t.indexOf = function(e) {
			return this.cssRules.indexOf(e);
		}, t.replaceRule = function(e, t) {
			var n = this.indexOf(e);
			return n === -1 ? !1 : (this.element.sheet.deleteRule(n), this.cssRules.splice(n, 1), this.insertRule(t, n));
		}, t.getRules = function() {
			return this.element.sheet.cssRules;
		}, e;
	}(), jc = 0, Mc = /*#__PURE__*/ function() {
		function e(e) {
			this.id = jc++, this.version = "10.10.0", this.plugins = new mc(), this.options = {
				id: { minify: !1 },
				createGenerateId: yc,
				Renderer: _s ? Ac : null,
				plugins: []
			}, this.generateId = yc({ minify: !1 });
			for (var t = 0; t < lc.length; t++) this.plugins.use(lc[t], { queue: "internal" });
			this.setup(e);
		}
		var t = e.prototype;
		return t.setup = function(e) {
			return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = E({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
		}, t.createStyleSheet = function(e, t) {
			t === void 0 && (t = {});
			var n = t.index;
			typeof n != "number" && (n = J.index === 0 ? 0 : J.index + 1);
			var r = new pc(e, E({}, t, {
				jss: this,
				generateId: t.generateId || this.generateId,
				insertionPoint: this.options.insertionPoint,
				Renderer: this.options.Renderer,
				index: n
			}));
			return this.plugins.onProcessSheet(r), r;
		}, t.removeStyleSheet = function(e) {
			return e.detach(), J.remove(e), this;
		}, t.createRule = function(e, t, n) {
			if (t === void 0 && (t = {}), n === void 0 && (n = {}), typeof e == "object") return this.createRule(void 0, e, t);
			var r = E({}, n, {
				name: e,
				jss: this,
				Renderer: this.options.Renderer
			});
			r.generateId ||= this.generateId, r.classes ||= {}, r.keyframes ||= {};
			var i = Es(e, t, r);
			return i && this.plugins.onProcessRule(i), i;
		}, t.use = function() {
			var e = this;
			return [...arguments].forEach(function(t) {
				e.plugins.use(t);
			}), this;
		}, e;
	}(), Nc = function(e) {
		return new Mc(e);
	}, Pc = typeof CSS == "object" && CSS != null && "number" in CSS, Nc();
})), Ic, Lc, Rc, zc, Bc = t((() => {
	Fc(), Ic = Date.now(), Lc = "fnValues" + Ic, Rc = "fnStyle" + ++Ic, zc = function() {
		return {
			onCreateRule: function(e, t, n) {
				if (typeof t != "function") return null;
				var r = Es(e, {}, n);
				return r[Rc] = t, r;
			},
			onProcessStyle: function(e, t) {
				if (Lc in t || Rc in t) return e;
				var n = {};
				for (var r in e) {
					var i = e[r];
					typeof i == "function" && (delete e[r], n[r] = i);
				}
				return t[Lc] = n, e;
			},
			onUpdate: function(e, t, n, r) {
				var i = t, a = i[Rc];
				a && (i.style = a(e) || {});
				var o = i[Lc];
				if (o) for (var s in o) i.prop(s, o[s](e), r);
			}
		};
	};
}));
//#endregion
//#region node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
function Vc(e, t) {
	for (var n = e.split(Yc), r = "", i = 0; i < n.length; i++) r += t + " " + n[i].trim(), n[i + 1] && (r += ", ");
	return r;
}
function Hc(e, t) {
	var n = e.options, r = e.style, i = r ? r[Gc] : null;
	if (i) {
		for (var a in i) t.addRule(a, i[a], E({}, n, { selector: Vc(a, e.selector) }));
		delete r[Gc];
	}
}
function Uc(e, t) {
	var n = e.options, r = e.style;
	for (var i in r) if (!(i[0] !== "@" || i.substr(0, Gc.length) !== Gc)) {
		var a = Vc(i.substr(Gc.length), e.selector);
		t.addRule(a, r[i], E({}, n, { selector: a })), delete r[i];
	}
}
function Wc() {
	function e(e, t, n) {
		if (!e) return null;
		if (e === Gc) return new qc(e, t, n);
		if (e[0] === "@" && e.substr(0, Kc.length) === Kc) return new Jc(e, t, n);
		var r = n.parent;
		return r && (r.type === "global" || r.options.parent && r.options.parent.type === "global") && (n.scoped = !1), !n.selector && n.scoped === !1 && (n.selector = e), null;
	}
	function t(e, t) {
		e.type !== "style" || !t || (Hc(e, t), Uc(e, t));
	}
	return {
		onCreateRule: e,
		onProcessRule: t
	};
}
var Gc, Kc, qc, Jc, Yc, Xc = t((() => {
	D(), Fc(), Gc = "@global", Kc = "@global ", qc = /*#__PURE__*/ function() {
		function e(e, t, n) {
			for (var r in this.type = "global", this.at = Gc, this.isProcessed = !1, this.key = e, this.options = n, this.rules = new fc(E({}, n, { parent: this })), t) this.rules.add(r, t[r]);
			this.rules.process();
		}
		var t = e.prototype;
		return t.getRule = function(e) {
			return this.rules.get(e);
		}, t.addRule = function(e, t, n) {
			var r = this.rules.add(e, t, n);
			return r && this.options.jss.plugins.onProcessRule(r), r;
		}, t.replaceRule = function(e, t, n) {
			var r = this.rules.replace(e, t, n);
			return r && this.options.jss.plugins.onProcessRule(r), r;
		}, t.indexOf = function(e) {
			return this.rules.indexOf(e);
		}, t.toString = function(e) {
			return this.rules.toString(e);
		}, e;
	}(), Jc = /*#__PURE__*/ function() {
		function e(e, t, n) {
			this.type = "global", this.at = Gc, this.isProcessed = !1, this.key = e, this.options = n;
			var r = e.substr(Kc.length);
			this.rule = n.jss.createRule(r, t, E({}, n, { parent: this }));
		}
		var t = e.prototype;
		return t.toString = function(e) {
			return this.rule ? this.rule.toString(e) : "";
		}, e;
	}(), Yc = /\s*,\s*/g;
}));
//#endregion
//#region node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
function Zc() {
	function e(e, t) {
		return function(n, r) {
			var i = e.getRule(r) || t && t.getRule(r);
			return i ? i.selector : r;
		};
	}
	function t(e, t) {
		for (var n = t.split(Qc), r = e.split(Qc), i = "", a = 0; a < n.length; a++) for (var o = n[a], s = 0; s < r.length; s++) {
			var c = r[s];
			i && (i += ", "), i += c.indexOf("&") === -1 ? o + " " + c : c.replace($c, o);
		}
		return i;
	}
	function n(e, t, n) {
		if (n) return E({}, n, { index: n.index + 1 });
		var r = e.options.nestingLevel;
		r = r === void 0 ? 1 : r + 1;
		var i = E({}, e.options, {
			nestingLevel: r,
			index: t.indexOf(e) + 1
		});
		return delete i.name, i;
	}
	function r(r, i, a) {
		if (i.type !== "style") return r;
		var o = i, s = o.options.parent, c, l;
		for (var u in r) {
			var d = u.indexOf("&") !== -1, f = u[0] === "@";
			if (!(!d && !f)) {
				if (c = n(o, s, c), d) {
					var p = t(u, o.selector);
					l ||= e(s, a), p = p.replace(el, l);
					var m = o.key + "-" + u;
					"replaceRule" in s ? s.replaceRule(m, r[u], E({}, c, { selector: p })) : s.addRule(m, r[u], E({}, c, { selector: p }));
				} else f && s.addRule(u, {}, c).addRule(o.key, r[u], { selector: o.selector });
				delete r[u];
			}
		}
		return r;
	}
	return { onProcessStyle: r };
}
var Qc, $c, el, tl = t((() => {
	D(), Qc = /\s*,\s*/g, $c = /&/g, el = /\$([\w-]+)/g;
}));
//#endregion
//#region node_modules/hyphenate-style-name/index.js
function nl(e) {
	return "-" + e.toLowerCase();
}
function rl(e) {
	if (ol.hasOwnProperty(e)) return ol[e];
	var t = e.replace(il, nl);
	return ol[e] = al.test(t) ? "-" + t : t;
}
var il, al, ol, sl = t((() => {
	il = /[A-Z]/g, al = /^ms-/, ol = {};
}));
//#endregion
//#region node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js
function cl(e) {
	var t = {};
	for (var n in e) {
		var r = n.indexOf("--") === 0 ? n : rl(n);
		t[r] = e[n];
	}
	return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(cl) : t.fallbacks = cl(e.fallbacks)), t;
}
function ll() {
	function e(e) {
		if (Array.isArray(e)) {
			for (var t = 0; t < e.length; t++) e[t] = cl(e[t]);
			return e;
		}
		return cl(e);
	}
	function t(e, t, n) {
		if (t.indexOf("--") === 0) return e;
		var r = rl(t);
		return t === r ? e : (n.prop(r, e), null);
	}
	return {
		onProcessStyle: e,
		onChangeValue: t
	};
}
var ul = t((() => {
	sl();
}));
//#endregion
//#region node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js
function dl(e) {
	var t = /(-[a-z])/g, n = function(e) {
		return e[1].toUpperCase();
	}, r = {};
	for (var i in e) r[i] = e[i], r[i.replace(t, n)] = e[i];
	return r;
}
function fl(e, t, n) {
	if (t == null) return t;
	if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] = fl(e, t[r], n);
	else if (typeof t == "object") if (e === "fallbacks") for (var i in t) t[i] = fl(i, t[i], n);
	else for (var a in t) t[a] = fl(e + "-" + a, t[a], n);
	else if (typeof t == "number" && isNaN(t) === !1) {
		var o = n[e] || _l[e];
		return o && !(t === 0 && o === Y) ? typeof o == "function" ? o(t).toString() : "" + t + o : t.toString();
	}
	return t;
}
function pl(e) {
	e === void 0 && (e = {});
	var t = dl(e);
	function n(e, n) {
		if (n.type !== "style") return e;
		for (var r in e) e[r] = fl(r, e[r], t);
		return e;
	}
	function r(e, n) {
		return fl(n, e, t);
	}
	return {
		onProcessStyle: n,
		onChangeValue: r
	};
}
var Y, ml, hl, gl, _l, vl = t((() => {
	Fc(), Y = Pc && CSS ? CSS.px : "px", ml = Pc && CSS ? CSS.ms : "ms", hl = Pc && CSS ? CSS.percent : "%", gl = {
		"animation-delay": ml,
		"animation-duration": ml,
		"background-position": Y,
		"background-position-x": Y,
		"background-position-y": Y,
		"background-size": Y,
		border: Y,
		"border-bottom": Y,
		"border-bottom-left-radius": Y,
		"border-bottom-right-radius": Y,
		"border-bottom-width": Y,
		"border-left": Y,
		"border-left-width": Y,
		"border-radius": Y,
		"border-right": Y,
		"border-right-width": Y,
		"border-top": Y,
		"border-top-left-radius": Y,
		"border-top-right-radius": Y,
		"border-top-width": Y,
		"border-width": Y,
		"border-block": Y,
		"border-block-end": Y,
		"border-block-end-width": Y,
		"border-block-start": Y,
		"border-block-start-width": Y,
		"border-block-width": Y,
		"border-inline": Y,
		"border-inline-end": Y,
		"border-inline-end-width": Y,
		"border-inline-start": Y,
		"border-inline-start-width": Y,
		"border-inline-width": Y,
		"border-start-start-radius": Y,
		"border-start-end-radius": Y,
		"border-end-start-radius": Y,
		"border-end-end-radius": Y,
		margin: Y,
		"margin-bottom": Y,
		"margin-left": Y,
		"margin-right": Y,
		"margin-top": Y,
		"margin-block": Y,
		"margin-block-end": Y,
		"margin-block-start": Y,
		"margin-inline": Y,
		"margin-inline-end": Y,
		"margin-inline-start": Y,
		padding: Y,
		"padding-bottom": Y,
		"padding-left": Y,
		"padding-right": Y,
		"padding-top": Y,
		"padding-block": Y,
		"padding-block-end": Y,
		"padding-block-start": Y,
		"padding-inline": Y,
		"padding-inline-end": Y,
		"padding-inline-start": Y,
		"mask-position-x": Y,
		"mask-position-y": Y,
		"mask-size": Y,
		height: Y,
		width: Y,
		"min-height": Y,
		"max-height": Y,
		"min-width": Y,
		"max-width": Y,
		bottom: Y,
		left: Y,
		top: Y,
		right: Y,
		inset: Y,
		"inset-block": Y,
		"inset-block-end": Y,
		"inset-block-start": Y,
		"inset-inline": Y,
		"inset-inline-end": Y,
		"inset-inline-start": Y,
		"box-shadow": Y,
		"text-shadow": Y,
		"column-gap": Y,
		"column-rule": Y,
		"column-rule-width": Y,
		"column-width": Y,
		"font-size": Y,
		"font-size-delta": Y,
		"letter-spacing": Y,
		"text-decoration-thickness": Y,
		"text-indent": Y,
		"text-stroke": Y,
		"text-stroke-width": Y,
		"word-spacing": Y,
		motion: Y,
		"motion-offset": Y,
		outline: Y,
		"outline-offset": Y,
		"outline-width": Y,
		perspective: Y,
		"perspective-origin-x": hl,
		"perspective-origin-y": hl,
		"transform-origin": hl,
		"transform-origin-x": hl,
		"transform-origin-y": hl,
		"transform-origin-z": hl,
		"transition-delay": ml,
		"transition-duration": ml,
		"vertical-align": Y,
		"flex-basis": Y,
		"shape-margin": Y,
		size: Y,
		gap: Y,
		grid: Y,
		"grid-gap": Y,
		"row-gap": Y,
		"grid-row-gap": Y,
		"grid-column-gap": Y,
		"grid-template-rows": Y,
		"grid-template-columns": Y,
		"grid-auto-rows": Y,
		"grid-auto-columns": Y,
		"box-shadow-x": Y,
		"box-shadow-y": Y,
		"box-shadow-blur": Y,
		"box-shadow-spread": Y,
		"font-line-height": Y,
		"text-shadow-x": Y,
		"text-shadow-y": Y,
		"text-shadow-blur": Y
	}, _l = dl(gl);
}));
//#endregion
//#region node_modules/css-vendor/dist/css-vendor.esm.js
function yl(e) {
	return e[1] === "-" || X.js === "ms" ? e : "@" + X.css + "keyframes" + e.substr(10);
}
function bl(e, t) {
	return t ? t.toUpperCase() : "";
}
function xl(e) {
	return e.replace(Il, bl);
}
function Sl(e) {
	return xl("-" + e);
}
function Cl(e, t) {
	if (t === void 0 && (t = {}), !ru) return e;
	if (iu[e] != null) return iu[e];
	(e === "transition" || e === "transform") && (t[e] = e in ru.style);
	for (var n = 0; n < tu.length && (iu[e] = tu[n](e, ru.style, t), !iu[e]); n++);
	try {
		ru.style[e] = "";
	} catch {
		return !1;
	}
	return iu[e];
}
function wl(e, t, n) {
	return t === "var" ? "var" : t === "all" ? "all" : n === "all" ? ", all" : (t ? Cl(t) : ", " + Cl(n)) || t || n;
}
function Tl(e, t) {
	var n = t;
	if (!lu || e === "content") return t;
	if (typeof n != "string" || !isNaN(parseInt(n, 10))) return n;
	var r = e + n;
	if (ou[r] != null) return ou[r];
	try {
		lu.style[e] = n;
	} catch {
		return ou[r] = !1, !1;
	}
	if (su[e]) n = n.replace(cu, wl);
	else if (lu.style[e] === "" && (n = X.css + n, n === "-ms-flex" && (lu.style[e] = "-ms-flexbox"), lu.style[e] = n, lu.style[e] === "")) return ou[r] = !1, !1;
	return lu.style[e] = "", ou[r] = n, ou[r];
}
var El, Dl, Ol, kl, Al, jl, Ml, Nl, X, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru, iu, au, ou, su, cu, lu, uu = t((() => {
	if (vs(), z(), El = "", Dl = "", Ol = "", kl = "", Al = _s && "ontouchstart" in document.documentElement, _s) {
		for (var e in jl = {
			Moz: "-moz-",
			ms: "-ms-",
			O: "-o-",
			Webkit: "-webkit-"
		}, Ml = document.createElement("p").style, Nl = "Transform", jl) if (e + Nl in Ml) {
			El = e, Dl = jl[e];
			break;
		}
		El === "Webkit" && "msHyphens" in Ml && (El = "ms", Dl = jl.ms, kl = "edge"), El === "Webkit" && "-apple-trailing-word" in Ml && (Ol = "apple");
	}
	if (X = {
		js: El,
		css: Dl,
		vendor: Ol,
		browser: kl,
		isTouch: Al
	}, Pl = {
		noPrefill: ["appearance"],
		supportedProperty: function(e) {
			return e === "appearance" ? X.js === "ms" ? "-webkit-" + e : X.css + e : !1;
		}
	}, Fl = {
		noPrefill: ["color-adjust"],
		supportedProperty: function(e) {
			return e === "color-adjust" ? X.js === "Webkit" ? X.css + "print-" + e : e : !1;
		}
	}, Il = /[-\s]+(.)?/g, Ll = {
		noPrefill: ["mask"],
		supportedProperty: function(e, t) {
			if (!/^mask/.test(e)) return !1;
			if (X.js === "Webkit") {
				var n = "mask-image";
				if (xl(n) in t) return e;
				if (X.js + Sl(n) in t) return X.css + e;
			}
			return e;
		}
	}, Rl = {
		noPrefill: ["text-orientation"],
		supportedProperty: function(e) {
			return e === "text-orientation" ? X.vendor === "apple" && !X.isTouch ? X.css + e : e : !1;
		}
	}, zl = {
		noPrefill: ["transform"],
		supportedProperty: function(e, t, n) {
			return e === "transform" ? n.transform ? e : X.css + e : !1;
		}
	}, Bl = {
		noPrefill: ["transition"],
		supportedProperty: function(e, t, n) {
			return e === "transition" ? n.transition ? e : X.css + e : !1;
		}
	}, Vl = {
		noPrefill: ["writing-mode"],
		supportedProperty: function(e) {
			return e === "writing-mode" ? X.js === "Webkit" || X.js === "ms" && X.browser !== "edge" ? X.css + e : e : !1;
		}
	}, Hl = {
		noPrefill: ["user-select"],
		supportedProperty: function(e) {
			return e === "user-select" ? X.js === "Moz" || X.js === "ms" || X.vendor === "apple" ? X.css + e : e : !1;
		}
	}, Ul = { supportedProperty: function(e, t) {
		return /^break-/.test(e) ? X.js === "Webkit" ? "WebkitColumn" + Sl(e) in t ? X.css + "column-" + e : !1 : X.js === "Moz" && "page" + Sl(e) in t ? "page-" + e : !1 : !1;
	} }, Wl = { supportedProperty: function(e, t) {
		if (!/^(border|margin|padding)-inline/.test(e)) return !1;
		if (X.js === "Moz") return e;
		var n = e.replace("-inline", "");
		return X.js + Sl(n) in t ? X.css + n : !1;
	} }, Gl = { supportedProperty: function(e, t) {
		return xl(e) in t ? e : !1;
	} }, Kl = { supportedProperty: function(e, t) {
		var n = Sl(e);
		return e[0] === "-" || e[0] === "-" && e[1] === "-" ? e : X.js + n in t ? X.css + e : X.js !== "Webkit" && "Webkit" + n in t ? "-webkit-" + e : !1;
	} }, ql = { supportedProperty: function(e) {
		return e.substring(0, 11) === "scroll-snap" ? X.js === "ms" ? "" + X.css + e : e : !1;
	} }, Jl = { supportedProperty: function(e) {
		return e === "overscroll-behavior" ? X.js === "ms" ? X.css + "scroll-chaining" : e : !1;
	} }, Yl = {
		"flex-grow": "flex-positive",
		"flex-shrink": "flex-negative",
		"flex-basis": "flex-preferred-size",
		"justify-content": "flex-pack",
		order: "flex-order",
		"align-items": "flex-align",
		"align-content": "flex-line-pack"
	}, Xl = { supportedProperty: function(e, t) {
		var n = Yl[e];
		return n && X.js + Sl(n) in t ? X.css + n : !1;
	} }, Zl = {
		flex: "box-flex",
		"flex-grow": "box-flex",
		"flex-direction": ["box-orient", "box-direction"],
		order: "box-ordinal-group",
		"align-items": "box-align",
		"flex-flow": ["box-orient", "box-direction"],
		"justify-content": "box-pack"
	}, Ql = Object.keys(Zl), $l = function(e) {
		return X.css + e;
	}, eu = [
		Pl,
		Fl,
		Ll,
		Rl,
		zl,
		Bl,
		Vl,
		Hl,
		Ul,
		Wl,
		Gl,
		Kl,
		ql,
		Jl,
		Xl,
		{ supportedProperty: function(e, t, n) {
			var r = n.multiple;
			if (Ql.indexOf(e) > -1) {
				var i = Zl[e];
				if (!Array.isArray(i)) return X.js + Sl(i) in t ? X.css + i : !1;
				if (!r) return !1;
				for (var a = 0; a < i.length; a++) if (!(X.js + Sl(i[0]) in t)) return !1;
				return i.map($l);
			}
			return !1;
		} }
	], tu = eu.filter(function(e) {
		return e.supportedProperty;
	}).map(function(e) {
		return e.supportedProperty;
	}), nu = eu.filter(function(e) {
		return e.noPrefill;
	}).reduce(function(e, t) {
		return e.push.apply(e, Wi(t.noPrefill)), e;
	}, []), iu = {}, _s) {
		for (var t in ru = document.createElement("p"), au = window.getComputedStyle(document.documentElement, ""), au) isNaN(t) || (iu[au[t]] = au[t]);
		nu.forEach(function(e) {
			return delete iu[e];
		});
	}
	ou = {}, su = {
		transition: 1,
		"transition-property": 1,
		"-webkit-transition": 1,
		"-webkit-transition-property": 1
	}, cu = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g, _s && (lu = document.createElement("p"));
}));
//#endregion
//#region node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js
function du() {
	function e(e) {
		if (e.type === "keyframes") {
			var t = e;
			t.at = yl(t.at);
		}
	}
	function t(e) {
		for (var n in e) {
			var r = e[n];
			if (n === "fallbacks" && Array.isArray(r)) {
				e[n] = r.map(t);
				continue;
			}
			var i = !1, a = Cl(n);
			a && a !== n && (i = !0);
			var o = !1, s = Tl(a, Rs(r));
			s && s !== r && (o = !0), (i || o) && (i && delete e[n], e[a || n] = s || r);
		}
		return e;
	}
	function n(e, n) {
		return n.type === "style" ? t(e) : e;
	}
	function r(e, t) {
		return Tl(t, Rs(e)) || e;
	}
	return {
		onProcessRule: e,
		onProcessStyle: n,
		onChangeValue: r
	};
}
var fu = t((() => {
	uu(), Fc();
}));
//#endregion
//#region node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
function pu() {
	var e = function(e, t) {
		return e.length === t.length ? e > t ? 1 : -1 : e.length - t.length;
	};
	return { onProcessStyle: function(t, n) {
		if (n.type !== "style") return t;
		for (var r = {}, i = Object.keys(t).sort(e), a = 0; a < i.length; a++) r[i[a]] = t[i[a]];
		return r;
	} };
}
var mu = t((() => {}));
//#endregion
//#region node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js
function hu() {
	return { plugins: [
		zc(),
		Wc(),
		Zc(),
		ll(),
		pl(),
		typeof window > "u" ? null : du(),
		pu()
	] };
}
var gu = t((() => {
	Bc(), Xc(), tl(), ul(), vl(), fu(), mu();
})), _u = t((() => {
	gu();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js
function vu() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.baseClasses, n = e.newClasses;
	if (e.Component, !n) return t;
	var r = E({}, t);
	return Object.keys(n).forEach(function(e) {
		n[e] && (r[e] = `${t[e]} ${n[e]}`);
	}), r;
}
var yu = t((() => {
	D();
})), bu = t((() => {
	yu();
})), xu, Su = t((() => {
	xu = {
		set: function(e, t, n, r) {
			var i = e.get(t);
			i || (i = /* @__PURE__ */ new Map(), e.set(t, i)), i.set(n, r);
		},
		get: function(e, t, n) {
			var r = e.get(t);
			return r ? r.get(n) : void 0;
		},
		delete: function(e, t, n) {
			e.get(t).delete(n);
		}
	};
})), Cu, wu, Tu = t((() => {
	Cu = /* @__PURE__ */ n(s()), wu = Cu.createContext(null);
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/useTheme/useTheme.js
function Eu() {
	return Du.useContext(wu);
}
var Du, Ou = t((() => {
	Du = /* @__PURE__ */ n(s()), Tu();
})), ku = t((() => {
	Ou();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js
function Au(e) {
	var t = e.children, n = e.injectFirst, r = n === void 0 ? !1 : n, i = e.disableGeneration, a = i === void 0 ? !1 : i, o = mn(e, [
		"children",
		"injectFirst",
		"disableGeneration"
	]), s = E({}, ju.useContext(Iu), { disableGeneration: a }, o);
	if (!s.jss.options.insertionPoint && r && typeof window < "u") {
		if (!Lu) {
			var c = document.head;
			Lu = document.createComment("mui-inject-first"), c.insertBefore(Lu, c.firstChild);
		}
		s.jss = Nc({
			plugins: hu().plugins,
			insertionPoint: Lu
		});
	}
	return /*#__PURE__*/ ju.createElement(Iu.Provider, { value: s }, t);
}
var ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru = t((() => {
	D(), hn(), ju = /* @__PURE__ */ n(s()), ls(), Fc(), _u(), Mu = Nc(hu()), Nu = os(), Pu = /* @__PURE__ */ new Map(), Fu = {
		disableGeneration: !1,
		generateClassName: Nu,
		jss: Mu,
		sheetsCache: null,
		sheetsManager: Pu,
		sheetsRegistry: null
	}, Iu = ju.createContext(Fu);
})), zu = t((() => {
	Ru(), Ru();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js
function Bu() {
	return Vu += 1, Vu;
}
var Vu, Hu = t((() => {
	Vu = -1e9;
})), Uu, Wu = t((() => {
	Uu = {};
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js
function Gu(e) {
	var t = typeof e == "function";
	return {
		create: function(n, r) {
			var i;
			try {
				i = t ? e(n) : e;
			} catch (e) {
				throw e;
			}
			if (!r || !n.overrides || !n.overrides[r]) return i;
			var a = n.overrides[r], o = E({}, i);
			return Object.keys(a).forEach(function(e) {
				o[e] = dr(o[e], a[e]);
			}), o;
		},
		options: {}
	};
}
var Ku = t((() => {
	D(), Hr();
})), qu = t((() => {
	Ku();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js
function Ju(e, t, n) {
	var r = e.state;
	if (e.stylesOptions.disableGeneration) return t || {};
	r.cacheClasses ||= {
		value: null,
		lastProp: null,
		lastJSS: {}
	};
	var i = !1;
	return r.classes !== r.cacheClasses.lastJSS && (r.cacheClasses.lastJSS = r.classes, i = !0), t !== r.cacheClasses.lastProp && (r.cacheClasses.lastProp = t, i = !0), i && (r.cacheClasses.value = vu({
		baseClasses: r.cacheClasses.lastJSS,
		newClasses: t,
		Component: n
	})), r.cacheClasses.value;
}
function Yu(e, t) {
	var n = e.state, r = e.theme, i = e.stylesOptions, a = e.stylesCreator, o = e.name;
	if (!i.disableGeneration) {
		var s = xu.get(i.sheetsManager, a, r);
		s || (s = {
			refs: 0,
			staticSheet: null,
			dynamicStyles: null
		}, xu.set(i.sheetsManager, a, r, s));
		var c = E({}, a.options, i, {
			theme: r,
			flip: typeof i.flip == "boolean" ? i.flip : r.direction === "rtl"
		});
		c.generateId = c.serverGenerateClassName || c.generateClassName;
		var l = i.sheetsRegistry;
		if (s.refs === 0) {
			var u;
			i.sheetsCache && (u = xu.get(i.sheetsCache, a, r));
			var d = a.create(r, o);
			u || (u = i.jss.createStyleSheet(d, E({ link: !1 }, c)), u.attach(), i.sheetsCache && xu.set(i.sheetsCache, a, r, u)), l && l.add(u), s.staticSheet = u, s.dynamicStyles = Fs(d);
		}
		if (s.dynamicStyles) {
			var f = i.jss.createStyleSheet(s.dynamicStyles, E({ link: !0 }, c));
			f.update(t), f.attach(), n.dynamicSheet = f, n.classes = vu({
				baseClasses: s.staticSheet.classes,
				newClasses: f.classes
			}), l && l.add(f);
		} else n.classes = s.staticSheet.classes;
		s.refs += 1;
	}
}
function Xu(e, t) {
	var n = e.state;
	n.dynamicSheet && n.dynamicSheet.update(t);
}
function Zu(e) {
	var t = e.state, n = e.theme, r = e.stylesOptions, i = e.stylesCreator;
	if (!r.disableGeneration) {
		var a = xu.get(r.sheetsManager, i, n);
		--a.refs;
		var o = r.sheetsRegistry;
		a.refs === 0 && (xu.delete(r.sheetsManager, i, n), r.jss.removeStyleSheet(a.staticSheet), o && o.remove(a.staticSheet)), t.dynamicSheet && (r.jss.removeStyleSheet(t.dynamicSheet), o && o.remove(t.dynamicSheet));
	}
}
function Qu(e, t) {
	var n = ed.useRef([]), r, i = ed.useMemo(function() {
		return {};
	}, t);
	n.current !== i && (n.current = i, r = e()), ed.useEffect(function() {
		return function() {
			r && r();
		};
	}, [i]);
}
function $u(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.name, r = t.classNamePrefix, i = t.Component, a = t.defaultTheme, o = a === void 0 ? Uu : a, s = mn(t, [
		"name",
		"classNamePrefix",
		"Component",
		"defaultTheme"
	]), c = Gu(e), l = n || r || "makeStyles";
	return c.options = {
		index: Bu(),
		name: n,
		meta: l,
		classNamePrefix: l
	}, function() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Eu() || o, r = E({}, ed.useContext(Iu), s), a = ed.useRef(), l = ed.useRef();
		return Qu(function() {
			var i = {
				name: n,
				state: {},
				stylesCreator: c,
				stylesOptions: r,
				theme: t
			};
			return Yu(i, e), l.current = !1, a.current = i, function() {
				Zu(i);
			};
		}, [t, c]), ed.useEffect(function() {
			l.current && Xu(a.current, e), l.current = !0;
		}), Ju(a.current, e.classes, i);
	};
}
var ed, td = t((() => {
	hn(), D(), ed = /* @__PURE__ */ n(s()), Fc(), bu(), Su(), ku(), zu(), Hu(), qu(), Wu();
})), nd = t((() => {
	td();
})), rd, id, ad = t((() => {
	D(), _n(), bn(), rd = /* @__PURE__ */ n(s()), Fc(), zu(), ls(), id = /*#__PURE__*/ function() {
		function e() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			gn(this, e), this.options = t;
		}
		return yn(e, [
			{
				key: "collect",
				value: function(e) {
					var t = /* @__PURE__ */ new Map();
					this.sheetsRegistry = new hc();
					var n = os();
					return /*#__PURE__*/ rd.createElement(Au, E({
						sheetsManager: t,
						serverGenerateClassName: n,
						sheetsRegistry: this.sheetsRegistry
					}, this.options), e);
				}
			},
			{
				key: "toString",
				value: function() {
					return this.sheetsRegistry ? this.sheetsRegistry.toString() : "";
				}
			},
			{
				key: "getStyleElement",
				value: function(e) {
					return /*#__PURE__*/ rd.createElement("style", E({
						id: "jss-server-side",
						key: "jss-server-side",
						dangerouslySetInnerHTML: { __html: this.toString() }
					}, e));
				}
			}
		]), e;
	}();
})), od = t((() => {
	ad();
})), sd = /* @__PURE__ */ r({
	clsx: () => ld,
	default: () => ld
});
function cd(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = cd(e[t])) && (r && (r += " "), r += n);
	else for (t in e) e[t] && (r && (r += " "), r += t);
	return r;
}
function ld() {
	for (var e, t, n = 0, r = ""; n < arguments.length;) (e = arguments[n++]) && (t = cd(e)) && (r && (r += " "), r += t);
	return r;
}
var ud = t((() => {}));
//#endregion
//#region node_modules/@material-ui/styles/esm/styled/styled.js
function dd(e, t) {
	var n = {};
	return Object.keys(e).forEach(function(r) {
		t.indexOf(r) === -1 && (n[r] = e[r]);
	}), n;
}
function fd(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.name, i = mn(n, ["name"]), a = r, o = $u(typeof t == "function" ? function(e) {
			return { root: function(n) {
				return t(E({ theme: e }, n));
			} };
		} : { root: t }, E({
			Component: e,
			name: r || e.displayName,
			classNamePrefix: a
		}, i)), s;
		t.filterProps && (s = t.filterProps, delete t.filterProps), t.propTypes && (t.propTypes, delete t.propTypes);
		var c = /*#__PURE__*/ pd.forwardRef(function(t, n) {
			var r = t.children, i = t.className, a = t.clone, c = t.component, l = mn(t, [
				"children",
				"className",
				"clone",
				"component"
			]), u = ld(o(t).root, i), d = l;
			if (s && (d = dd(d, s)), a) return /*#__PURE__*/ pd.cloneElement(r, E({ className: ld(r.props.className, u) }, d));
			if (typeof r == "function") return r(E({ className: u }, d));
			var f = c || e;
			return /*#__PURE__*/ pd.createElement(f, E({
				ref: n,
				className: u
			}, d), r);
		});
		return (0, md.default)(c, e), c;
	};
}
var pd, md, hd = t((() => {
	D(), hn(), pd = /* @__PURE__ */ n(s()), ud(), md = /* @__PURE__ */ n(M()), nd();
})), gd = t((() => {
	hd();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
function _d(e, t) {
	return typeof t == "function" ? t(e) : E({}, e, t);
}
function vd(e) {
	var t = e.children, n = e.theme, r = Eu(), i = yd.useMemo(function() {
		var e = r === null ? n : _d(r, n);
		return e != null && (e[is] = r !== null), e;
	}, [n, r]);
	return /*#__PURE__*/ yd.createElement(wu.Provider, { value: i }, t);
}
var yd, bd = t((() => {
	D(), yd = /* @__PURE__ */ n(s()), Tu(), ku(), as();
})), xd = t((() => {
	bd();
})), Sd, Cd, wd, Td = t((() => {
	D(), hn(), Sd = /* @__PURE__ */ n(s()), Cd = /* @__PURE__ */ n(M()), nd(), hs(), ku(), wd = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return function(n) {
			var r = t.defaultTheme, i = t.withTheme, a = i === void 0 ? !1 : i, o = t.name, s = mn(t, [
				"defaultTheme",
				"withTheme",
				"name"
			]), c = o, l = $u(e, E({
				defaultTheme: r,
				Component: n,
				name: o || n.displayName,
				classNamePrefix: c
			}, s)), u = /*#__PURE__*/ Sd.forwardRef(function(e, t) {
				e.classes;
				var i = e.innerRef, s = mn(e, ["classes", "innerRef"]), c = l(E({}, n.defaultProps, e)), u, d = s;
				return (typeof o == "string" || a) && (u = Eu() || r, o && (d = ps({
					theme: u,
					name: o,
					props: s
				})), a && !d.theme && (d.theme = u)), /*#__PURE__*/ Sd.createElement(n, E({
					ref: i || t,
					classes: c
				}, d));
			});
			return (0, Cd.default)(u, n), u;
		};
	};
})), Ed = t((() => {
	Td();
}));
//#endregion
//#region node_modules/@material-ui/styles/esm/withTheme/withTheme.js
function Dd() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).defaultTheme;
	return function(t) {
		var n = /*#__PURE__*/ Od.forwardRef(function(n, r) {
			var i = n.innerRef, a = mn(n, ["innerRef"]), o = Eu() || e;
			return /*#__PURE__*/ Od.createElement(t, E({
				theme: o,
				ref: i || r
			}, a));
		});
		return (0, kd.default)(n, t), n;
	};
}
var Od, kd, Ad, jd = t((() => {
	D(), hn(), Od = /* @__PURE__ */ n(s()), kd = /* @__PURE__ */ n(M()), ku(), Ad = Dd();
})), Md = t((() => {
	jd(), jd();
})), Nd = /* @__PURE__ */ r({
	ServerStyleSheets: () => id,
	StylesContext: () => Iu,
	StylesProvider: () => Au,
	ThemeProvider: () => vd,
	createGenerateClassName: () => os,
	createStyles: () => us,
	getThemeProps: () => ps,
	jssPreset: () => hu,
	makeStyles: () => $u,
	mergeClasses: () => vu,
	sheetsManager: () => Pu,
	styled: () => fd,
	useTheme: () => Eu,
	withStyles: () => wd,
	withTheme: () => Ad,
	withThemeCreator: () => Dd
}), Pd = t((() => {
	ls(), ls(), fs(), fs(), hs(), hs(), _u(), _u(), nd(), nd(), bu(), bu(), od(), od(), gd(), gd(), zu(), zu(), xd(), xd(), ku(), ku(), Ed(), Ed(), Md(), Md();
})), Fd, Id = t((() => {
	ns(), Fd = ts();
}));
//#endregion
//#region node_modules/@material-ui/core/esm/styles/withStyles.js
function Ld(e, t) {
	return wd(e, E({ defaultTheme: Fd }, t));
}
var Rd = t((() => {
	D(), Pd(), Id();
})), zd = /* @__PURE__ */ i(((e, t) => {
	t.exports = it()(Ue(), "WeakMap");
})), Bd = /* @__PURE__ */ i(((e, t) => {
	var n = zd();
	t.exports = n && new n();
})), Vd = /* @__PURE__ */ i(((e, t) => {
	var n = Vt(), r = Bd();
	t.exports = r ? function(e, t) {
		return r.set(e, t), e;
	} : n;
})), Hd = /* @__PURE__ */ i(((e, t) => {
	var n = Ze(), r = Object.create;
	t.exports = function() {
		function e() {}
		return function(t) {
			if (!n(t)) return {};
			if (r) return r(t);
			e.prototype = t;
			var i = new e();
			return e.prototype = void 0, i;
		};
	}();
})), Ud = /* @__PURE__ */ i(((e, t) => {
	var n = Hd(), r = Ze();
	function i(e) {
		return function() {
			var t = arguments;
			switch (t.length) {
				case 0: return new e();
				case 1: return new e(t[0]);
				case 2: return new e(t[0], t[1]);
				case 3: return new e(t[0], t[1], t[2]);
				case 4: return new e(t[0], t[1], t[2], t[3]);
				case 5: return new e(t[0], t[1], t[2], t[3], t[4]);
				case 6: return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
				case 7: return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
			}
			var i = n(e.prototype), a = e.apply(i, t);
			return r(a) ? a : i;
		};
	}
	t.exports = i;
})), Wd = /* @__PURE__ */ i(((e, t) => {
	var n = Ud(), r = Ue(), i = 1;
	function a(e, t, a) {
		var o = t & i, s = n(e);
		function c() {
			return (this && this !== r && this instanceof c ? s : e).apply(o ? a : this, arguments);
		}
		return c;
	}
	t.exports = a;
})), Gd = /* @__PURE__ */ i(((e, t) => {
	function n(e, t, n) {
		switch (n.length) {
			case 0: return e.call(t);
			case 1: return e.call(t, n[0]);
			case 2: return e.call(t, n[0], n[1]);
			case 3: return e.call(t, n[0], n[1], n[2]);
		}
		return e.apply(t, n);
	}
	t.exports = n;
})), Kd = /* @__PURE__ */ i(((e, t) => {
	var n = Math.max;
	function r(e, t, r, i) {
		for (var a = -1, o = e.length, s = r.length, c = -1, l = t.length, u = n(o - s, 0), d = Array(l + u), f = !i; ++c < l;) d[c] = t[c];
		for (; ++a < s;) (f || a < o) && (d[r[a]] = e[a]);
		for (; u--;) d[c++] = e[a++];
		return d;
	}
	t.exports = r;
})), qd = /* @__PURE__ */ i(((e, t) => {
	var n = Math.max;
	function r(e, t, r, i) {
		for (var a = -1, o = e.length, s = -1, c = r.length, l = -1, u = t.length, d = n(o - c, 0), f = Array(d + u), p = !i; ++a < d;) f[a] = e[a];
		for (var m = a; ++l < u;) f[m + l] = t[l];
		for (; ++s < c;) (p || a < o) && (f[m + r[s]] = e[a++]);
		return f;
	}
	t.exports = r;
})), Jd = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
		return r;
	}
	t.exports = n;
})), Yd = /* @__PURE__ */ i(((e, t) => {
	function n() {}
	t.exports = n;
})), Xd = /* @__PURE__ */ i(((e, t) => {
	var n = Hd(), r = Yd(), i = 4294967295;
	function a(e) {
		this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = i, this.__views__ = [];
	}
	a.prototype = n(r.prototype), a.prototype.constructor = a, t.exports = a;
})), Zd = /* @__PURE__ */ i(((e, t) => {
	function n() {}
	t.exports = n;
})), Qd = /* @__PURE__ */ i(((e, t) => {
	var n = Bd(), r = Zd();
	t.exports = n ? function(e) {
		return n.get(e);
	} : r;
})), $d = /* @__PURE__ */ i(((e, t) => {
	t.exports = {};
})), ef = /* @__PURE__ */ i(((e, t) => {
	var n = $d(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		for (var t = e.name + "", i = n[t], a = r.call(n, t) ? i.length : 0; a--;) {
			var o = i[a], s = o.func;
			if (s == null || s == e) return o.name;
		}
		return t;
	}
	t.exports = i;
})), tf = /* @__PURE__ */ i(((e, t) => {
	var n = Hd(), r = Yd();
	function i(e, t) {
		this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0;
	}
	i.prototype = n(r.prototype), i.prototype.constructor = i, t.exports = i;
})), nf = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	t.exports = n;
})), rf = /* @__PURE__ */ i(((e, t) => {
	var n = Xd(), r = tf(), i = nf();
	function a(e) {
		if (e instanceof n) return e.clone();
		var t = new r(e.__wrapped__, e.__chain__);
		return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
	}
	t.exports = a;
})), af = /* @__PURE__ */ i(((e, t) => {
	var n = Xd(), r = tf(), i = Yd(), a = Ve(), o = Je(), s = rf(), c = Object.prototype.hasOwnProperty;
	function l(e) {
		if (o(e) && !a(e) && !(e instanceof n)) {
			if (e instanceof r) return e;
			if (c.call(e, "__wrapped__")) return s(e);
		}
		return new r(e);
	}
	l.prototype = i.prototype, l.prototype.constructor = l, t.exports = l;
})), of = /* @__PURE__ */ i(((e, t) => {
	var n = Xd(), r = Qd(), i = ef(), a = af();
	function o(e) {
		var t = i(e), o = a[t];
		if (typeof o != "function" || !(t in n.prototype)) return !1;
		if (e === o) return !0;
		var s = r(o);
		return !!s && e === s[0];
	}
	t.exports = o;
})), sf = /* @__PURE__ */ i(((e, t) => {
	var n = 800, r = 16, i = Date.now;
	function a(e) {
		var t = 0, a = 0;
		return function() {
			var o = i(), s = r - (o - a);
			if (a = o, s > 0) {
				if (++t >= n) return arguments[0];
			} else t = 0;
			return e.apply(void 0, arguments);
		};
	}
	t.exports = a;
})), cf = /* @__PURE__ */ i(((e, t) => {
	var n = Vd();
	t.exports = sf()(n);
})), lf = /* @__PURE__ */ i(((e, t) => {
	var n = /\{\n\/\* \[wrapped with (.+)\] \*/, r = /,? & /;
	function i(e) {
		var t = e.match(n);
		return t ? t[1].split(r) : [];
	}
	t.exports = i;
})), uf = /* @__PURE__ */ i(((e, t) => {
	var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	function r(e, t) {
		var r = t.length;
		if (!r) return e;
		var i = r - 1;
		return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + t + "] */\n");
	}
	t.exports = r;
})), df = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return function() {
			return e;
		};
	}
	t.exports = n;
})), ff = /* @__PURE__ */ i(((e, t) => {
	var n = df(), r = Rt(), i = Vt();
	t.exports = r ? function(e, t) {
		return r(e, "toString", {
			configurable: !0,
			enumerable: !1,
			value: n(t),
			writable: !0
		});
	} : i;
})), pf = /* @__PURE__ */ i(((e, t) => {
	var n = ff();
	t.exports = sf()(n);
})), mf = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	t.exports = n;
})), hf = /* @__PURE__ */ i(((e, t) => {
	function n(e, t, n, r) {
		for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
		return -1;
	}
	t.exports = n;
})), gf = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return e !== e;
	}
	t.exports = n;
})), _f = /* @__PURE__ */ i(((e, t) => {
	function n(e, t, n) {
		for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
		return -1;
	}
	t.exports = n;
})), vf = /* @__PURE__ */ i(((e, t) => {
	var n = hf(), r = gf(), i = _f();
	function a(e, t, a) {
		return t === t ? i(e, t, a) : n(e, r, a);
	}
	t.exports = a;
})), yf = /* @__PURE__ */ i(((e, t) => {
	var n = vf();
	function r(e, t) {
		return !!(e != null && e.length) && n(e, t, 0) > -1;
	}
	t.exports = r;
})), bf = /* @__PURE__ */ i(((e, t) => {
	var n = mf(), r = yf(), i = [
		["ary", 128],
		["bind", 1],
		["bindKey", 2],
		["curry", 8],
		["curryRight", 16],
		["flip", 512],
		["partial", 32],
		["partialRight", 64],
		["rearg", 256]
	];
	function a(e, t) {
		return n(i, function(n) {
			var i = "_." + n[0];
			t & n[1] && !r(e, i) && e.push(i);
		}), e.sort();
	}
	t.exports = a;
})), xf = /* @__PURE__ */ i(((e, t) => {
	var n = lf(), r = uf(), i = pf(), a = bf();
	function o(e, t, o) {
		var s = t + "";
		return i(e, r(s, a(n(s), o)));
	}
	t.exports = o;
})), Sf = /* @__PURE__ */ i(((e, t) => {
	var n = of(), r = cf(), i = xf(), a = 1, o = 2, s = 4, c = 8, l = 32, u = 64;
	function d(e, t, d, f, p, m, h, g, _, v) {
		var y = t & c, b = y ? h : void 0, x = y ? void 0 : h, S = y ? m : void 0, C = y ? void 0 : m;
		t |= y ? l : u, t &= ~(y ? u : l), t & s || (t &= ~(a | o));
		var w = [
			e,
			t,
			p,
			S,
			b,
			C,
			x,
			g,
			_,
			v
		], T = d.apply(void 0, w);
		return n(e) && r(T, w), T.placeholder = f, i(T, e, t);
	}
	t.exports = d;
})), Cf = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return e.placeholder;
	}
	t.exports = n;
})), wf = /* @__PURE__ */ i(((e, t) => {
	var n = nf(), r = Bt(), i = Math.min;
	function a(e, t) {
		for (var a = e.length, o = i(t.length, a), s = n(e); o--;) {
			var c = t[o];
			e[o] = r(c, a) ? s[c] : void 0;
		}
		return e;
	}
	t.exports = a;
})), Tf = /* @__PURE__ */ i(((e, t) => {
	var n = "__lodash_placeholder__";
	function r(e, t) {
		for (var r = -1, i = e.length, a = 0, o = []; ++r < i;) {
			var s = e[r];
			(s === t || s === n) && (e[r] = n, o[a++] = r);
		}
		return o;
	}
	t.exports = r;
})), Ef = /* @__PURE__ */ i(((e, t) => {
	var n = Kd(), r = qd(), i = Jd(), a = Ud(), o = Sf(), s = Cf(), c = wf(), l = Tf(), u = Ue(), d = 1, f = 2, p = 8, m = 16, h = 128, g = 512;
	function _(e, t, v, y, b, x, S, C, w, T) {
		var E = t & h, D = t & d, O = t & f, k = t & (p | m), A = t & g, j = O ? void 0 : a(e);
		function M() {
			for (var d = arguments.length, f = Array(d), p = d; p--;) f[p] = arguments[p];
			if (k) var m = s(M), h = i(f, m);
			if (y && (f = n(f, y, b, k)), x && (f = r(f, x, S, k)), d -= h, k && d < T) {
				var g = l(f, m);
				return o(e, t, _, M.placeholder, v, f, g, C, w, T - d);
			}
			var ee = D ? v : this, te = O ? ee[e] : e;
			return d = f.length, C ? f = c(f, C) : A && d > 1 && f.reverse(), E && w < d && (f.length = w), this && this !== u && this instanceof M && (te = j || a(te)), te.apply(ee, f);
		}
		return M;
	}
	t.exports = _;
})), Df = /* @__PURE__ */ i(((e, t) => {
	var n = Gd(), r = Ud(), i = Ef(), a = Sf(), o = Cf(), s = Tf(), c = Ue();
	function l(e, t, l) {
		var u = r(e);
		function d() {
			for (var r = arguments.length, f = Array(r), p = r, m = o(d); p--;) f[p] = arguments[p];
			var h = r < 3 && f[0] !== m && f[r - 1] !== m ? [] : s(f, m);
			return r -= h.length, r < l ? a(e, t, i, d.placeholder, void 0, f, h, void 0, void 0, l - r) : n(this && this !== c && this instanceof d ? u : e, this, f);
		}
		return d;
	}
	t.exports = l;
})), Of = /* @__PURE__ */ i(((e, t) => {
	var n = Gd(), r = Ud(), i = Ue(), a = 1;
	function o(e, t, o, s) {
		var c = t & a, l = r(e);
		function u() {
			for (var t = -1, r = arguments.length, a = -1, d = s.length, f = Array(d + r), p = this && this !== i && this instanceof u ? l : e; ++a < d;) f[a] = s[a];
			for (; r--;) f[a++] = arguments[++t];
			return n(p, c ? o : this, f);
		}
		return u;
	}
	t.exports = o;
})), kf = /* @__PURE__ */ i(((e, t) => {
	var n = Kd(), r = qd(), i = Tf(), a = "__lodash_placeholder__", o = 1, s = 2, c = 4, l = 8, u = 128, d = 256, f = Math.min;
	function p(e, t) {
		var p = e[1], m = t[1], h = p | m, g = h < (o | s | u), _ = m == u && p == l || m == u && p == d && e[7].length <= t[8] || m == (u | d) && t[7].length <= t[8] && p == l;
		if (!(g || _)) return e;
		m & o && (e[2] = t[2], h |= p & o ? 0 : c);
		var v = t[3];
		if (v) {
			var y = e[3];
			e[3] = y ? n(y, v, t[4]) : v, e[4] = y ? i(e[3], a) : t[4];
		}
		return v = t[5], v && (y = e[5], e[5] = y ? r(y, v, t[6]) : v, e[6] = y ? i(e[5], a) : t[6]), v = t[7], v && (e[7] = v), m & u && (e[8] = e[8] == null ? t[8] : f(e[8], t[8])), e[9] ??= t[9], e[0] = t[0], e[1] = h, e;
	}
	t.exports = p;
})), Af = /* @__PURE__ */ i(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), jf = /* @__PURE__ */ i(((e, t) => {
	var n = Af(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), Mf = /* @__PURE__ */ i(((e, t) => {
	var n = jf(), r = Ze(), i = Ye(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
	function u(e) {
		if (typeof e == "number") return e;
		if (i(e)) return a;
		if (r(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = r(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = n(e);
		var u = s.test(e);
		return u || c.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? a : +e;
	}
	t.exports = u;
})), Nf = /* @__PURE__ */ i(((e, t) => {
	var n = Mf(), r = Infinity, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), Pf = /* @__PURE__ */ i(((e, t) => {
	var n = Nf();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), Ff = /* @__PURE__ */ i(((e, t) => {
	var n = Vd(), r = Wd(), i = Df(), a = Ef(), o = Of(), s = Qd(), c = kf(), l = cf(), u = xf(), d = Pf(), f = "Expected a function", p = 1, m = 2, h = 8, g = 16, _ = 32, v = 64, y = Math.max;
	function b(e, t, b, x, S, C, w, T) {
		var E = t & m;
		if (!E && typeof e != "function") throw TypeError(f);
		var D = x ? x.length : 0;
		if (D || (t &= ~(_ | v), x = S = void 0), w = w === void 0 ? w : y(d(w), 0), T = T === void 0 ? T : d(T), D -= S ? S.length : 0, t & v) {
			var O = x, k = S;
			x = S = void 0;
		}
		var A = E ? void 0 : s(e), j = [
			e,
			t,
			b,
			x,
			S,
			O,
			k,
			C,
			w,
			T
		];
		if (A && c(j, A), e = j[0], t = j[1], b = j[2], x = j[3], S = j[4], T = j[9] = j[9] === void 0 ? E ? 0 : e.length : y(j[9] - D, 0), !T && t & (h | g) && (t &= ~(h | g)), !t || t == p) var M = r(e, t, b);
		else M = t == h || t == g ? i(e, t, T) : (t == _ || t == (p | _)) && !S.length ? o(e, t, b, x) : a.apply(void 0, j);
		return u((A ? n : l)(M, j), e, t);
	}
	t.exports = b;
})), If = /* @__PURE__ */ i(((e, t) => {
	var n = Ff(), r = 8;
	function i(e, t, a) {
		t = a ? void 0 : t;
		var o = n(e, r, void 0, void 0, void 0, void 0, void 0, t);
		return o.placeholder = i.placeholder, o;
	}
	i.placeholder = {}, t.exports = i;
})), Lf = /* @__PURE__ */ i(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), Rf = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), zf = /* @__PURE__ */ i(((e, t) => {
	t.exports = Rf()(Object.keys, Object);
})), Bf = /* @__PURE__ */ i(((e, t) => {
	var n = Lf(), r = zf(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), Vf = /* @__PURE__ */ i(((e, t) => {
	t.exports = it()(Ue(), "DataView");
})), Hf = /* @__PURE__ */ i(((e, t) => {
	t.exports = it()(Ue(), "Promise");
})), Uf = /* @__PURE__ */ i(((e, t) => {
	t.exports = it()(Ue(), "Set");
})), Wf = /* @__PURE__ */ i(((e, t) => {
	var n = Vf(), r = bt(), i = Hf(), a = Uf(), o = zd(), s = qe(), c = tt(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
	(n && b(new n(/* @__PURE__ */ new ArrayBuffer(1))) != m || r && b(new r()) != l || i && b(i.resolve()) != d || a && b(new a()) != f || o && b(new o()) != p) && (b = function(e) {
		var t = s(e), n = t == u ? e.constructor : void 0, r = n ? c(n) : "";
		if (r) switch (r) {
			case h: return m;
			case g: return l;
			case _: return d;
			case v: return f;
			case y: return p;
		}
		return t;
	}), t.exports = b;
})), Gf = /* @__PURE__ */ i(((e, t) => {
	var n = qe(), r = Je(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), Kf = /* @__PURE__ */ i(((e, t) => {
	var n = Gf(), r = Je(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), qf = /* @__PURE__ */ i(((e, t) => {
	var n = 9007199254740991;
	function r(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= n;
	}
	t.exports = r;
})), Jf = /* @__PURE__ */ i(((e, t) => {
	var n = Qe(), r = qf();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), Yf = /* @__PURE__ */ i(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), Xf = /* @__PURE__ */ i(((e, t) => {
	var n = Ue(), r = Yf(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), Zf = /* @__PURE__ */ i(((e, t) => {
	var n = qe(), r = qf(), i = Je(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), Qf = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), $f = /* @__PURE__ */ i(((e, t) => {
	var n = He(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), ep = /* @__PURE__ */ i(((e, t) => {
	var n = Zf(), r = Qf(), i = $f(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), tp = /* @__PURE__ */ i(((e, t) => {
	var n = Bf(), r = Wf(), i = Kf(), a = Ve(), o = Jf(), s = Xf(), c = Lf(), l = ep(), u = "[object Map]", d = "[object Set]", f = Object.prototype.hasOwnProperty;
	function p(e) {
		if (e == null) return !0;
		if (o(e) && (a(e) || typeof e == "string" || typeof e.splice == "function" || s(e) || l(e) || i(e))) return !e.length;
		var t = r(e);
		if (t == u || t == d) return !e.size;
		if (c(e)) return !n(e).length;
		for (var p in e) if (f.call(e, p)) return !1;
		return !0;
	}
	t.exports = p;
})), np = /* @__PURE__ */ n(If()), rp = /* @__PURE__ */ n(tp());
function ip(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ap(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ip(Object(n), !0).forEach(function(t) {
			op(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ip(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function op(e, t, n) {
	return (t = sp(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sp(e) {
	var t = cp(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function cp(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function lp(e, t) {
	function n(n, r) {
		var i = (0, h.useContext)(Be), a = ap(ap({}, n), r ? { ref: r } : {}), o = (i || {})[e];
		if ((0, rp.default)(o) || (0, rp.default)(o.wrap) && (0, rp.default)(o.add)) return /*#__PURE__*/ h.createElement(t, a);
		var s = (o.add || []).map(function(e) {
			return e.component;
		}), c = /*#__PURE__*/ h.createElement(t, Object.assign({}, a, { PluginComponents: s }));
		return (0, rp.default)(o.wrap) ? c : o.wrap.slice().reverse().reduce(function(e, n) {
			var r = n.component;
			return /*#__PURE__*/ h.createElement(r, Object.assign({ targetProps: a }, a, {
				PluginComponents: s,
				TargetComponent: t
			}), e);
		}, /*#__PURE__*/ h.createElement(t, a));
	}
	var r = /*#__PURE__*/ h.forwardRef(n);
	return r.displayName = `WithPlugins(${e})`, r;
}
var up = (0, np.default)(lp), dp, fp = new Uint8Array(16);
function pp() {
	if (!dp && (dp = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !dp)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return dp(fp);
}
//#endregion
//#region node_modules/mirador/node_modules/uuid/dist/esm-browser/regex.js
var mp = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
//#endregion
//#region node_modules/mirador/node_modules/uuid/dist/esm-browser/validate.js
function hp(e) {
	return typeof e == "string" && mp.test(e);
}
for (var gp = [], _p = 0; _p < 256; ++_p) gp.push((_p + 256).toString(16).substr(1));
function vp(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (gp[e[t + 0]] + gp[e[t + 1]] + gp[e[t + 2]] + gp[e[t + 3]] + "-" + gp[e[t + 4]] + gp[e[t + 5]] + "-" + gp[e[t + 6]] + gp[e[t + 7]] + "-" + gp[e[t + 8]] + gp[e[t + 9]] + "-" + gp[e[t + 10]] + gp[e[t + 11]] + gp[e[t + 12]] + gp[e[t + 13]] + gp[e[t + 14]] + gp[e[t + 15]]).toLowerCase();
	if (!hp(n)) throw TypeError("Stringified UUID is invalid");
	return n;
}
//#endregion
//#region node_modules/mirador/node_modules/uuid/dist/esm-browser/v4.js
function yp(e, t, n) {
	e ||= {};
	var r = e.random || (e.rng || pp)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (var i = 0; i < 16; ++i) t[n + i] = r[i];
		return t;
	}
	return vp(r);
}
//#endregion
//#region node_modules/reselect/es/defaultMemoize.js
function bp(e) {
	var t;
	return {
		get: function(n) {
			return t && e(t.key, n) ? t.value : wp;
		},
		put: function(e, n) {
			t = {
				key: e,
				value: n
			};
		},
		getEntries: function() {
			return t ? [t] : [];
		},
		clear: function() {
			t = void 0;
		}
	};
}
function xp(e, t) {
	var n = [];
	function r(e) {
		var r = n.findIndex(function(n) {
			return t(e, n.key);
		});
		if (r > -1) {
			var i = n[r];
			return r > 0 && (n.splice(r, 1), n.unshift(i)), i.value;
		}
		return wp;
	}
	function i(t, i) {
		r(t) === wp && (n.unshift({
			key: t,
			value: i
		}), n.length > e && n.pop());
	}
	function a() {
		return n;
	}
	function o() {
		n = [];
	}
	return {
		get: r,
		put: i,
		getEntries: a,
		clear: o
	};
}
function Sp(e) {
	return function(t, n) {
		if (t === null || n === null || t.length !== n.length) return !1;
		for (var r = t.length, i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
		return !0;
	};
}
function Cp(e, t) {
	var n = typeof t == "object" ? t : { equalityCheck: t }, r = n.equalityCheck, i = r === void 0 ? Tp : r, a = n.maxSize, o = a === void 0 ? 1 : a, s = n.resultEqualityCheck, c = Sp(i), l = o === 1 ? bp(c) : xp(o, c);
	function u() {
		var t = l.get(arguments);
		if (t === wp) {
			if (t = e.apply(null, arguments), s) {
				var n = l.getEntries().find(function(e) {
					return s(e.value, t);
				});
				n && (t = n.value);
			}
			l.put(arguments, t);
		}
		return t;
	}
	return u.clearCache = function() {
		return l.clear();
	}, u;
}
var wp, Tp, Ep = t((() => {
	wp = "NOT_FOUND", Tp = function(e, t) {
		return e === t;
	};
})), Dp = /* @__PURE__ */ r({
	createSelector: () => Z,
	createSelectorCreator: () => kp,
	createStructuredSelector: () => Ap,
	defaultEqualityCheck: () => Tp,
	defaultMemoize: () => Cp
});
function Op(e) {
	var t = Array.isArray(e[0]) ? e[0] : e;
	if (!t.every(function(e) {
		return typeof e == "function";
	})) {
		var n = t.map(function(e) {
			return typeof e == "function" ? "function " + (e.name || "unnamed") + "()" : typeof e;
		}).join(", ");
		throw Error("createSelector expects all input-selectors to be functions, but received the following types: [" + n + "]");
	}
	return t;
}
function kp(e) {
	var t = [...arguments].slice(1);
	return function() {
		var n = [...arguments], r = 0, i, a = { memoizeOptions: void 0 }, o = n.pop();
		if (typeof o == "object" && (a = o, o = n.pop()), typeof o != "function") throw Error("createSelector expects an output function after the inputs, but received: [" + typeof o + "]");
		var s = a.memoizeOptions, c = s === void 0 ? t : s, l = Array.isArray(c) ? c : [c], u = Op(n), d = e.apply(void 0, [function() {
			return r++, o.apply(null, arguments);
		}].concat(l)), f = e(function() {
			for (var e = [], t = u.length, n = 0; n < t; n++) e.push(u[n].apply(null, arguments));
			return i = d.apply(null, e), i;
		});
		return Object.assign(f, {
			resultFunc: o,
			memoizedResultFunc: d,
			dependencies: u,
			lastResult: function() {
				return i;
			},
			recomputations: function() {
				return r;
			},
			resetRecomputations: function() {
				return r = 0;
			}
		}), f;
	};
}
var Z, Ap, jp = t((() => {
	Ep(), Z = /* #__PURE__ */ kp(Cp), Ap = function(e, t) {
		if (t === void 0 && (t = Z), typeof e != "object") throw Error("createStructuredSelector expects first argument to be an object " + ("where each property is a selector, instead received a " + typeof e));
		var n = Object.keys(e);
		return t(n.map(function(t) {
			return e[t];
		}), function() {
			return [...arguments].reduce(function(e, t, r) {
				return e[n[r]] = t, e;
			}, {});
		});
	};
})), Mp = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), Np = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return function(t, n, r) {
			for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
				var c = o[e ? s : ++i];
				if (n(a[c], c, a) === !1) break;
			}
			return t;
		};
	}
	t.exports = n;
})), Pp = /* @__PURE__ */ i(((e, t) => {
	t.exports = Np()();
})), Fp = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), Ip = /* @__PURE__ */ i(((e, t) => {
	var n = Fp(), r = Kf(), i = Ve(), a = Xf(), o = Bt(), s = ep(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), Lp = /* @__PURE__ */ i(((e, t) => {
	var n = Ip(), r = Bf(), i = Jf();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), Rp = /* @__PURE__ */ i(((e, t) => {
	var n = Pp(), r = Lp();
	function i(e, t) {
		return e && n(e, t, r);
	}
	t.exports = i;
})), zp = /* @__PURE__ */ i(((e, t) => {
	var n = Jf();
	function r(e, t) {
		return function(r, i) {
			if (r == null) return r;
			if (!n(r)) return e(r, i);
			for (var a = r.length, o = t ? a : -1, s = Object(r); (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;);
			return r;
		};
	}
	t.exports = r;
})), Bp = /* @__PURE__ */ i(((e, t) => {
	var n = Rp();
	t.exports = zp()(n);
})), Vp = /* @__PURE__ */ i(((e, t) => {
	var n = Bp();
	function r(e, t) {
		var r = [];
		return n(e, function(e, n, i) {
			t(e, n, i) && r.push(e);
		}), r;
	}
	t.exports = r;
})), Hp = /* @__PURE__ */ i(((e, t) => {
	var n = yt();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), Up = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), Wp = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), Gp = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Kp = /* @__PURE__ */ i(((e, t) => {
	var n = yt(), r = bt(), i = Ot(), a = 200;
	function o(e, t) {
		var o = this.__data__;
		if (o instanceof n) {
			var s = o.__data__;
			if (!r || s.length < a - 1) return s.push([e, t]), this.size = ++o.size, this;
			o = this.__data__ = new i(s);
		}
		return o.set(e, t), this.size = o.size, this;
	}
	t.exports = o;
})), qp = /* @__PURE__ */ i(((e, t) => {
	var n = yt(), r = Hp(), i = Up(), a = Wp(), o = Gp(), s = Kp();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Jp = /* @__PURE__ */ i(((e, t) => {
	var n = "__lodash_hash_undefined__";
	function r(e) {
		return this.__data__.set(e, n), this;
	}
	t.exports = r;
})), Yp = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Xp = /* @__PURE__ */ i(((e, t) => {
	var n = Ot(), r = Jp(), i = Yp();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), Zp = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), Qp = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), $p = /* @__PURE__ */ i(((e, t) => {
	var n = Xp(), r = Zp(), i = Qp(), a = 1, o = 2;
	function s(e, t, s, c, l, u) {
		var d = s & a, f = e.length, p = t.length;
		if (f != p && !(d && p > f)) return !1;
		var m = u.get(e), h = u.get(t);
		if (m && h) return m == t && h == e;
		var g = -1, _ = !0, v = s & o ? new n() : void 0;
		for (u.set(e, t), u.set(t, e); ++g < f;) {
			var y = e[g], b = t[g];
			if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
			if (x !== void 0) {
				if (x) continue;
				_ = !1;
				break;
			}
			if (v) {
				if (!r(t, function(e, t) {
					if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
				})) {
					_ = !1;
					break;
				}
			} else if (!(y === b || l(y, b, s, c, u))) {
				_ = !1;
				break;
			}
		}
		return u.delete(e), u.delete(t), _;
	}
	t.exports = s;
})), em = /* @__PURE__ */ i(((e, t) => {
	t.exports = Ue().Uint8Array;
})), tm = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), nm = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), rm = /* @__PURE__ */ i(((e, t) => {
	var n = We(), r = em(), i = pt(), a = $p(), o = tm(), s = nm(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
	function C(e, t, n, x, C, w, T) {
		switch (n) {
			case b:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case y: return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
			case u:
			case d:
			case m: return i(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case h:
			case _: return e == t + "";
			case p: var E = o;
			case g:
				var D = x & c;
				if (E ||= s, e.size != t.size && !D) return !1;
				var O = T.get(e);
				if (O) return O == t;
				x |= l, T.set(e, t);
				var k = a(E(e), E(t), x, C, w, T);
				return T.delete(e), k;
			case v: if (S) return S.call(e) == S.call(t);
		}
		return !1;
	}
	t.exports = C;
})), im = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), am = /* @__PURE__ */ i(((e, t) => {
	var n = im(), r = Ve();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), om = /* @__PURE__ */ i(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), sm = /* @__PURE__ */ i(((e, t) => {
	var n = Mp(), r = om(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), cm = /* @__PURE__ */ i(((e, t) => {
	var n = am(), r = sm(), i = Lp();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), lm = /* @__PURE__ */ i(((e, t) => {
	var n = cm(), r = 1, i = Object.prototype.hasOwnProperty;
	function a(e, t, a, o, s, c) {
		var l = a & r, u = n(e), d = u.length;
		if (d != n(t).length && !l) return !1;
		for (var f = d; f--;) {
			var p = u[f];
			if (!(l ? p in t : i.call(t, p))) return !1;
		}
		var m = c.get(e), h = c.get(t);
		if (m && h) return m == t && h == e;
		var g = !0;
		c.set(e, t), c.set(t, e);
		for (var _ = l; ++f < d;) {
			p = u[f];
			var v = e[p], y = t[p];
			if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
			if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
				g = !1;
				break;
			}
			_ ||= p == "constructor";
		}
		if (g && !_) {
			var x = e.constructor, S = t.constructor;
			x != S && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (g = !1);
		}
		return c.delete(e), c.delete(t), g;
	}
	t.exports = a;
})), um = /* @__PURE__ */ i(((e, t) => {
	var n = qp(), r = $p(), i = rm(), a = lm(), o = Wf(), s = Ve(), c = Xf(), l = ep(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
	function h(e, t, h, g, _, v) {
		var y = s(e), b = s(t), x = y ? f : o(e), S = b ? f : o(t);
		x = x == d ? p : x, S = S == d ? p : S;
		var C = x == p, w = S == p, T = x == S;
		if (T && c(e)) {
			if (!c(t)) return !1;
			y = !0, C = !1;
		}
		if (T && !C) return v ||= new n(), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v);
		if (!(h & u)) {
			var E = C && m.call(e, "__wrapped__"), D = w && m.call(t, "__wrapped__");
			if (E || D) {
				var O = E ? e.value() : e, k = D ? t.value() : t;
				return v ||= new n(), _(O, k, h, g, v);
			}
		}
		return T ? (v ||= new n(), a(e, t, h, g, _, v)) : !1;
	}
	t.exports = h;
})), dm = /* @__PURE__ */ i(((e, t) => {
	var n = um(), r = Je();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), fm = /* @__PURE__ */ i(((e, t) => {
	var n = qp(), r = dm(), i = 1, a = 2;
	function o(e, t, o, s) {
		var c = o.length, l = c, u = !s;
		if (e == null) return !l;
		for (e = Object(e); c--;) {
			var d = o[c];
			if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
		}
		for (; ++c < l;) {
			d = o[c];
			var f = d[0], p = e[f], m = d[1];
			if (u && d[2]) {
				if (p === void 0 && !(f in e)) return !1;
			} else {
				var h = new n();
				if (s) var g = s(p, m, f, e, t, h);
				if (!(g === void 0 ? r(m, p, i | a, s, h) : g)) return !1;
			}
		}
		return !0;
	}
	t.exports = o;
})), pm = /* @__PURE__ */ i(((e, t) => {
	var n = Ze();
	function r(e) {
		return e === e && !n(e);
	}
	t.exports = r;
})), mm = /* @__PURE__ */ i(((e, t) => {
	var n = pm(), r = Lp();
	function i(e) {
		for (var t = r(e), i = t.length; i--;) {
			var a = t[i], o = e[a];
			t[i] = [
				a,
				o,
				n(o)
			];
		}
		return t;
	}
	t.exports = i;
})), hm = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		return function(n) {
			return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
		};
	}
	t.exports = n;
})), gm = /* @__PURE__ */ i(((e, t) => {
	var n = fm(), r = mm(), i = hm();
	function a(e) {
		var t = r(e);
		return t.length == 1 && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
			return r === e || n(r, e, t);
		};
	}
	t.exports = a;
})), _m = /* @__PURE__ */ i(((e, t) => {
	var n = Lt();
	function r(e, t, r) {
		var i = e == null ? void 0 : n(e, t);
		return i === void 0 ? r : i;
	}
	t.exports = r;
})), vm = /* @__PURE__ */ i(((e, t) => {
	function n(e, t) {
		return e != null && t in Object(e);
	}
	t.exports = n;
})), ym = /* @__PURE__ */ i(((e, t) => {
	var n = Ft(), r = Kf(), i = Ve(), a = Bt(), o = qf(), s = It();
	function c(e, t, c) {
		t = n(t, e);
		for (var l = -1, u = t.length, d = !1; ++l < u;) {
			var f = s(t[l]);
			if (!(d = e != null && c(e, f))) break;
			e = e[f];
		}
		return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && o(u) && a(f, u) && (i(e) || r(e)));
	}
	t.exports = c;
})), bm = /* @__PURE__ */ i(((e, t) => {
	var n = vm(), r = ym();
	function i(e, t) {
		return e != null && r(e, t, n);
	}
	t.exports = i;
})), xm = /* @__PURE__ */ i(((e, t) => {
	var n = dm(), r = _m(), i = bm(), a = Xe(), o = pm(), s = hm(), c = It(), l = 1, u = 2;
	function d(e, t) {
		return a(e) && o(t) ? s(c(e), t) : function(a) {
			var o = r(a, e);
			return o === void 0 && o === t ? i(a, e) : n(t, o, l | u);
		};
	}
	t.exports = d;
})), Sm = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		return function(t) {
			return t?.[e];
		};
	}
	t.exports = n;
})), Cm = /* @__PURE__ */ i(((e, t) => {
	var n = Lt();
	function r(e) {
		return function(t) {
			return n(t, e);
		};
	}
	t.exports = r;
})), wm = /* @__PURE__ */ i(((e, t) => {
	var n = Sm(), r = Cm(), i = Xe(), a = It();
	function o(e) {
		return i(e) ? n(a(e)) : r(e);
	}
	t.exports = o;
})), Tm = /* @__PURE__ */ i(((e, t) => {
	var n = gm(), r = xm(), i = Vt(), a = Ve(), o = wm();
	function s(e) {
		return typeof e == "function" ? e : e == null ? i : typeof e == "object" ? a(e) ? r(e[0], e[1]) : n(e) : o(e);
	}
	t.exports = s;
})), Em = /* @__PURE__ */ i(((e, t) => {
	var n = Mp(), r = Vp(), i = Tm(), a = Ve();
	function o(e, t) {
		return (a(e) ? n : r)(e, i(t, 3));
	}
	t.exports = o;
})), Dm = /* @__PURE__ */ i(((e, t) => {
	var n = We(), r = Kf(), i = Ve(), a = n ? n.isConcatSpreadable : void 0;
	function o(e) {
		return i(e) || r(e) || !!(a && e && e[a]);
	}
	t.exports = o;
})), Om = /* @__PURE__ */ i(((e, t) => {
	var n = im(), r = Dm();
	function i(e, t, a, o, s) {
		var c = -1, l = e.length;
		for (a ||= r, s ||= []; ++c < l;) {
			var u = e[c];
			t > 0 && a(u) ? t > 1 ? i(u, t - 1, a, o, s) : n(s, u) : o || (s[s.length] = u);
		}
		return s;
	}
	t.exports = i;
})), km = /* @__PURE__ */ i(((e, t) => {
	var n = Om();
	function r(e) {
		return e != null && e.length ? n(e, 1) : [];
	}
	t.exports = r;
})), Am = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
			var a = e[t];
			a && (i[r++] = a);
		}
		return i;
	}
	t.exports = n;
}));
//#endregion
//#region node_modules/mirador/dist/es/src/lib/AnnotationResource.js
jp();
var jm = /* @__PURE__ */ n(Em()), Mm = /* @__PURE__ */ n(Am()), Q = /* @__PURE__ */ n(km());
function Nm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Pm(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Im(r.key), r);
	}
}
function Fm(e, t, n) {
	return t && Pm(e.prototype, t), n && Pm(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Im(e) {
	var t = Lm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Lm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Rm = /*#__PURE__*/ function() {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Nm(this, e), this.resource = t;
	}
	return Fm(e, [
		{
			key: "isOnlyTag",
			value: function() {
				return this.motivations.length === 1 && this.motivations[0] === "oa:tagging";
			}
		},
		{
			key: "id",
			get: function() {
				return this._id = this._id || this.resource["@id"] || this.resources[0] && this.resources[0]["@id"] || yp(), this._id;
			}
		},
		{
			key: "targetId",
			get: function() {
				var e = this.on[0];
				switch (typeof e) {
					case "string": return e.replace(/#?xywh=(.*)$/, "");
					case "object": return e.full.replace(/#?xywh=(.*)$/, "");
					default: return null;
				}
			}
		},
		{
			key: "motivations",
			get: function() {
				return (0, Q.default)((0, Mm.default)(Array(this.resource.motivation)));
			}
		},
		{
			key: "resources",
			get: function() {
				return (0, Q.default)((0, Mm.default)(Array(this.resource.resource)));
			}
		},
		{
			key: "on",
			get: function() {
				return (0, Q.default)((0, Mm.default)(Array(this.resource.on)));
			}
		},
		{
			key: "tags",
			get: function() {
				return this.isOnlyTag() ? this.resources.map(function(e) {
					return e.chars;
				}) : this.resources.filter(function(e) {
					return e["@type"] === "oa:Tag";
				}).map(function(e) {
					return e.chars;
				});
			}
		},
		{
			key: "chars",
			get: function() {
				return this.resources.filter(function(e) {
					return e["@type"] !== "oa:Tag";
				}).map(function(e) {
					return e.chars;
				}).join(" ");
			}
		},
		{
			key: "selector",
			get: function() {
				var e = this.on[0];
				switch (typeof e) {
					case "string": return e;
					case "object": return e.selector["@type"] === "oa:Choice" ? e.selector.default : e.selector;
					default: return null;
				}
			}
		},
		{
			key: "svgSelector",
			get: function() {
				var e = this.on[0];
				switch (typeof e) {
					case "string": return null;
					case "object": return e.selector && e.selector.item && e.selector.item["@type"] === "oa:SvgSelector" ? e.selector.item : null;
					default: return null;
				}
			}
		},
		{
			key: "fragmentSelector",
			get: function() {
				var e = this.selector, t;
				switch (typeof e) {
					case "string":
						t = e.match(/xywh=(.*)$/);
						break;
					case "object":
						t = e.value.match(/xywh=(.*)$/);
						break;
					default: return null;
				}
				return t && t[1].split(",").map(function(e) {
					return parseInt(e, 10);
				});
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/AnnotationList.js
function zm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Bm(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hm(r.key), r);
	}
}
function Vm(e, t, n) {
	return t && Bm(e.prototype, t), n && Bm(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Hm(e) {
	var t = Um(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Um(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Wm = /*#__PURE__*/ function() {
	function e(t, n) {
		zm(this, e), this.json = t, this.target = n;
	}
	return Vm(e, [
		{
			key: "id",
			get: function() {
				return this.json["@id"];
			}
		},
		{
			key: "present",
			value: function() {
				return this.resources && this.resources.length > 0;
			}
		},
		{
			key: "resources",
			get: function() {
				var e = this;
				return this._resources = this._resources || function() {
					return !e.json || !e.json.resources ? [] : (0, Q.default)([e.json.resources]).map(function(e) {
						return new Rm(e);
					});
				}(), this._resources;
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/AnnotationItem.js
function Gm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Km(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Jm(r.key), r);
	}
}
function qm(e, t, n) {
	return t && Km(e.prototype, t), n && Km(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jm(e) {
	var t = Ym(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ym(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Xm = /*#__PURE__*/ function() {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Gm(this, e), this.resource = t;
	}
	return qm(e, [
		{
			key: "isOnlyTag",
			value: function() {
				return this.motivations.length === 1 && this.motivations[0] === "tagging";
			}
		},
		{
			key: "id",
			get: function() {
				return this._id = this._id || this.resource.id || yp(), this._id;
			}
		},
		{
			key: "targetId",
			get: function() {
				var e = this.target[0];
				switch (typeof e) {
					case "string": return e.replace(/#?xywh=(.*)$/, "");
					case "object": return e.source && e.source.id || e.source || e.id;
					default: return null;
				}
			}
		},
		{
			key: "motivations",
			get: function() {
				return (0, Q.default)((0, Mm.default)(Array(this.resource.motivation)));
			}
		},
		{
			key: "body",
			get: function() {
				return (0, Q.default)((0, Mm.default)(Array(this.resource.body)));
			}
		},
		{
			key: "resources",
			get: function() {
				return this.body;
			}
		},
		{
			key: "tags",
			get: function() {
				return this.isOnlyTag() ? this.body.map(function(e) {
					return e.value;
				}) : this.body.filter(function(e) {
					return e.purpose === "tagging";
				}).map(function(e) {
					return e.value;
				});
			}
		},
		{
			key: "target",
			get: function() {
				return (0, Q.default)((0, Mm.default)(Array(this.resource.target)));
			}
		},
		{
			key: "chars",
			get: function() {
				return this.isOnlyTag() ? null : this.body.filter(function(e) {
					return e.purpose !== "tagging";
				}).map(function(e) {
					return e.value;
				}).join(" ");
			}
		},
		{
			key: "selector",
			get: function() {
				var e = this.target[0];
				switch (typeof e) {
					case "string": return e;
					case "object": return (0, Q.default)((0, Mm.default)(Array(e.selector)));
					default: return null;
				}
			}
		},
		{
			key: "svgSelector",
			get: function() {
				var e = this.selector;
				switch (typeof e) {
					case "string": return null;
					case "object": return e.find(function(e) {
						return e.type && e.type === "SvgSelector";
					});
					default: return null;
				}
			}
		},
		{
			key: "fragmentSelector",
			get: function() {
				var e = this.selector, t, n;
				switch (typeof e) {
					case "string":
						t = e.match(/xywh=(.*)$/);
						break;
					case "object":
						n = e.find(function(e) {
							return e.type && e.type === "FragmentSelector";
						}), t = n && n.value.match(/xywh=(.*)$/);
						break;
					default: return null;
				}
				return t && t[1].split(",").map(function(e) {
					return parseInt(e, 10);
				});
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/AnnotationPage.js
function Zm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Qm(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, eh(r.key), r);
	}
}
function $m(e, t, n) {
	return t && Qm(e.prototype, t), n && Qm(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eh(e) {
	var t = th(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function th(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var nh = /*#__PURE__*/ function() {
	function e(t, n) {
		Zm(this, e), this.json = t, this.target = n;
	}
	return $m(e, [
		{
			key: "id",
			get: function() {
				return this.json.id;
			}
		},
		{
			key: "present",
			value: function() {
				return this.items && this.items.length > 0;
			}
		},
		{
			key: "items",
			get: function() {
				var e = this;
				return this._items = this._items || function() {
					return !e.json || !e.json.items ? [] : (0, Q.default)([e.json.items]).map(function(e) {
						return new Xm(e);
					});
				}(), this._items;
			}
		},
		{
			key: "resources",
			get: function() {
				return this.items;
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/AnnotationFactory.js
function rh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function ih(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, oh(r.key), r);
	}
}
function ah(e, t, n) {
	return t && ih(e.prototype, t), n && ih(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function oh(e) {
	var t = sh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function sh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ch = /*#__PURE__*/ function() {
	function e() {
		rh(this, e);
	}
	return ah(e, null, [{
		key: "determineAnnotation",
		value: function(e, t) {
			return e ? e.type === "AnnotationPage" ? new nh(e, t) : new Wm(e, t) : null;
		}
	}]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/config/settings.js
function lh(e, t) {
	return mh(e) || ph(e, t) || dh(e, t) || uh();
}
function uh() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function dh(e, t) {
	if (e) {
		if (typeof e == "string") return fh(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fh(e, t) : void 0;
	}
}
function fh(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ph(e, t) {
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
function mh(e) {
	if (Array.isArray(e)) return e;
}
function hh(e, t, n) {
	return (t = gh(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
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
var vh = {
	state: {},
	canvasNavigation: {
		height: 50,
		width: 50
	},
	selectedTheme: "light",
	themes: {
		dark: { palette: {
			type: "dark",
			primary: { main: "#4db6ac" },
			secondary: { main: "#4db6ac" },
			shades: {
				dark: "#000000",
				main: "#424242",
				light: "#616161"
			}
		} },
		light: { palette: { type: "light" } }
	},
	theme: {
		palette: {
			type: "light",
			primary: { main: "#1967d2" },
			secondary: { main: "#1967d2" },
			shades: {
				dark: "#eeeeee",
				main: "#ffffff",
				light: "#f5f5f5"
			},
			error: { main: "#b00020" },
			notification: { main: "#ffa224" },
			hitCounter: { default: "#bdbdbd" },
			highlights: {
				primary: "#ffff00",
				secondary: "#00BFFF"
			},
			section_divider: "rgba(0, 0, 0, 0.25)",
			annotations: {
				hidden: { globalAlpha: 0 },
				default: {
					strokeStyle: "#00BFFF",
					globalAlpha: 1
				},
				hovered: {
					strokeStyle: "#BF00FF",
					globalAlpha: 1
				},
				selected: {
					strokeStyle: "#ffff00",
					globalAlpha: 1
				}
			},
			search: {
				default: {
					fillStyle: "#00BFFF",
					globalAlpha: .3
				},
				hovered: {
					fillStyle: "#00FFFF",
					globalAlpha: .3
				},
				selected: {
					fillStyle: "#ffff00",
					globalAlpha: .3
				}
			}
		},
		typography: {
			body1: {
				fontSize: "1rem",
				letterSpacing: "0em",
				lineHeight: "1.6em"
			},
			body2: {
				fontSize: "0.878rem",
				letterSpacing: "0.015em",
				lineHeight: "1.6em"
			},
			button: {
				fontSize: "0.878rem",
				letterSpacing: "0.09em",
				lineHeight: "2.25rem",
				textTransform: "uppercase"
			},
			caption: {
				fontSize: "0.772rem",
				letterSpacing: "0.033em",
				lineHeight: "1.6rem"
			},
			body1Next: {
				fontSize: "1rem",
				letterSpacing: "0em",
				lineHeight: "1.6em"
			},
			body2Next: {
				fontSize: "0.878rem",
				letterSpacing: "0.015em",
				lineHeight: "1.6em"
			},
			buttonNext: {
				fontSize: "0.878rem",
				letterSpacing: "0.09em",
				lineHeight: "2.25rem"
			},
			captionNext: {
				fontSize: "0.772rem",
				letterSpacing: "0.33em",
				lineHeight: "1.6rem"
			},
			overline: {
				fontSize: "0.678rem",
				fontWeight: 500,
				letterSpacing: "0.166em",
				lineHeight: "2em",
				textTransform: "uppercase"
			},
			h1: {
				fontSize: "2.822rem",
				letterSpacing: "-0.015em",
				lineHeight: "1.2em"
			},
			h2: {
				fontSize: "1.575rem",
				letterSpacing: "0em",
				lineHeight: "1.33em"
			},
			h3: {
				fontSize: "1.383rem",
				fontWeight: 300,
				letterSpacing: "0em",
				lineHeight: "1.33em"
			},
			h4: {
				fontSize: "1.215rem",
				letterSpacing: "0.007em",
				lineHeight: "1.45em"
			},
			h5: {
				fontSize: "1.138rem",
				letterSpacing: "0.005em",
				lineHeight: "1.55em"
			},
			h6: {
				fontSize: "1.067rem",
				fontWeight: 400,
				letterSpacing: "0.01em",
				lineHeight: "1.6em"
			},
			subtitle1: {
				fontSize: "0.937rem",
				letterSpacing: "0.015em",
				lineHeight: "1.6em",
				fontWeight: 300
			},
			subtitle2: {
				fontSize: "0.878rem",
				fontWeight: 500,
				letterSpacing: "0.02em",
				lineHeight: "1.75em"
			},
			useNextVariants: !0
		},
		overrides: {
			MuiListSubheader: { root: { "&[role=\"presentation\"]:focus": { outline: 0 } } },
			MuiTooltip: {
				tooltipPlacementLeft: hh({}, "@media (min-width:600px)", { margin: 0 }),
				tooltipPlacementRight: hh({}, "@media (min-width:600px)", { margin: 0 }),
				tooltipPlacementTop: hh({}, "@media (min-width:600px)", { margin: 0 }),
				tooltipPlacementBottom: hh({}, "@media (min-width:600px)", { margin: 0 })
			},
			MuiTouchRipple: {
				childPulsate: { animation: "none" },
				rippleVisible: { animation: "none" }
			}
		},
		props: {
			MuiButtonBase: { disableTouchRipple: !0 },
			MuiLink: { underline: "always" }
		}
	},
	language: "en",
	availableLanguages: {
		ar: "العربية",
		de: "Deutsch",
		en: "English",
		et: "Eesti",
		fa: "فارسی",
		fr: "Français",
		ja: "日本語",
		kr: "한국어",
		lt: "Lietuvių",
		nl: "Nederlands",
		"nb-NO": "Norwegian Bokmål",
		pl: "Polski",
		"pt-BR": "Português do Brasil",
		vi: "Tiếng Việt",
		"zh-CN": "中文(简体)",
		"zh-TW": "中文(繁體)",
		it: "Italiano",
		sr: "Српски",
		sv: "Svenska",
		bg: "Български"
	},
	annotations: {
		htmlSanitizationRuleSet: "iiif",
		filteredMotivations: [
			"oa:commenting",
			"oa:tagging",
			"sc:painting",
			"commenting",
			"tagging"
		]
	},
	createGenerateClassNameOptions: { productionPrefix: "mirador" },
	requests: {
		preprocessors: [],
		postprocessors: []
	},
	translations: {},
	window: {
		allowClose: !0,
		allowFullscreen: !1,
		allowMaximize: !0,
		allowTopMenuButton: !0,
		allowWindowSideBar: !0,
		authNewWindowCenter: "parent",
		sideBarPanel: "info",
		defaultSidebarPanelHeight: 201,
		defaultSidebarPanelWidth: 235,
		defaultView: "single",
		forceDrawAnnotations: !1,
		hideWindowTitle: !1,
		highlightAllAnnotations: !1,
		showLocalePicker: !1,
		sideBarOpen: !1,
		switchCanvasOnSearch: !0,
		panels: {
			info: !0,
			attribution: !0,
			canvas: !0,
			annotations: !0,
			search: !0,
			layers: !0
		},
		views: [
			{
				key: "single",
				behaviors: ["individuals"]
			},
			{
				key: "book",
				behaviors: ["paged"]
			},
			{
				key: "scroll",
				behaviors: ["continuous"]
			},
			{ key: "gallery" }
		],
		elastic: {
			height: 400,
			width: 480
		}
	},
	windows: [],
	thumbnails: { preferredFormats: [
		"jpg",
		"png",
		"webp",
		"tif"
	] },
	thumbnailNavigation: {
		defaultPosition: "off",
		displaySettings: !0,
		height: 130,
		width: 100
	},
	workspace: {
		draggingEnabled: !0,
		allowNewWindows: !0,
		id: yp(),
		isWorkspaceAddVisible: !1,
		exposeModeOn: !1,
		height: 5e3,
		showZoomControls: !1,
		type: "mosaic",
		viewportPosition: {
			x: 0,
			y: 0
		},
		width: 5e3
	},
	workspaceControlPanel: { enabled: !0 },
	galleryView: {
		height: 120,
		width: null
	},
	osdConfig: {
		alwaysBlend: !1,
		blendTime: .1,
		preserveImageSizeOnResize: !0,
		preserveViewport: !0,
		showNavigationControl: !1
	},
	export: {
		catalog: !0,
		companionWindows: !0,
		config: !0,
		elasticLayout: !0,
		layers: !0,
		manifests: { filter: function(e) {
			var t = lh(e, 2), n = t[0];
			return t[1], !n.startsWith("http");
		} },
		viewers: !0,
		windows: !0,
		workspace: !0
	},
	audioOptions: {
		controls: !0,
		crossOrigin: "anonymous"
	},
	videoOptions: {
		controls: !0,
		crossOrigin: "anonymous"
	},
	auth: { serviceProfiles: [
		{
			profile: "http://iiif.io/api/auth/1/external",
			external: !0
		},
		{
			profile: "http://iiif.io/api/auth/1/kiosk",
			kiosk: !0
		},
		{ profile: "http://iiif.io/api/auth/1/clickthrough" },
		{ profile: "http://iiif.io/api/auth/1/login" },
		{
			profile: "http://iiif.io/api/auth/0/external",
			external: !0
		},
		{
			profile: "http://iiif.io/api/auth/0/kiosk",
			kiosk: !0
		},
		{ profile: "http://iiif.io/api/auth/0/clickthrough" },
		{ profile: "http://iiif.io/api/auth/0/login" }
	] }
};
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/utils.js
function $(e) {
	return vh.state.slice ? e[vh.state.slice] : e;
}
//#endregion
//#region node_modules/mirador/dist/es/src/lib/CanvasGroupings.js
function yh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function bh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Sh(r.key), r);
	}
}
function xh(e, t, n) {
	return t && bh(e.prototype, t), n && bh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Sh(e) {
	var t = Ch(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ch(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var wh = /*#__PURE__*/ function() {
	function e(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "single";
		yh(this, e), this.canvases = t, this.viewType = n, this._groupings = null;
	}
	return xh(e, [{
		key: "getCanvases",
		value: function(e) {
			switch (this.viewType) {
				case "book": return this.groupings()[Math.ceil(e / 2)];
				default: return this.groupings()[e];
			}
		}
	}, {
		key: "groupings",
		value: function() {
			if (this._groupings) return this._groupings;
			if (this.viewType === "scroll") return [this.canvases];
			if (this.viewType !== "book") return this.canvases.map(function(e) {
				return [e];
			});
			var e = [];
			return this.canvases.forEach(function(t, n) {
				if (n === 0) {
					e.push([t]);
					return;
				}
				n % 2 == 0 ? e[Math.ceil(n / 2)].push(t) : e.push([t]);
			}), this._groupings = e, e;
		}
	}]);
}(), Th = /* @__PURE__ */ i(((e, t) => {
	var n = Om(), r = Infinity;
	function i(e) {
		return e != null && e.length ? n(e, r) : [];
	}
	t.exports = i;
})), Eh = /* @__PURE__ */ i(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define("manifesto", [], r) : typeof e == "object" ? e.manifesto = r() : n.manifesto = r();
	})(typeof self < "u" ? self : e, (function() {
		return function(e) {
			var t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
			}
			return n.m = e, n.c = t, n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: r
				});
			}, n.r = function(e) {
				typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
			}, n.t = function(e, t) {
				if (1 & t && (e = n(e)), 8 & t || 4 & t && typeof e == "object" && e && e.__esModule) return e;
				var r = Object.create(null);
				if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && typeof e != "string") for (var i in e) n.d(r, i, function(t) {
					return e[t];
				}.bind(null, i));
				return r;
			}, n.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return n.d(t, "a", t), t;
			}, n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n.p = "", n(n.s = 7);
		}([
			function(e, t, n) {
				var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
					r === void 0 && (r = n);
					var i = Object.getOwnPropertyDescriptor(t, n);
					i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
						enumerable: !0,
						get: function() {
							return t[n];
						}
					}), Object.defineProperty(e, r, i);
				} : function(e, t, n, r) {
					r === void 0 && (r = n), e[r] = t[n];
				}), i = this && this.__exportStar || function(e, t) {
					for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), i(n(9), t), i(n(10), t), i(n(11), t), i(n(12), t), i(n(13), t), i(n(14), t), i(n(15), t), i(n(16), t), i(n(17), t), i(n(31), t), i(n(32), t), i(n(33), t), i(n(34), t), i(n(35), t), i(n(36), t), i(n(37), t), i(n(38), t), i(n(39), t), i(n(40), t), i(n(41), t), i(n(42), t), i(n(45), t), i(n(46), t), i(n(47), t), i(n(48), t), i(n(49), t), i(n(50), t), i(n(51), t), i(n(52), t), i(n(53), t), i(n(54), t), i(n(55), t), i(n(56), t), i(n(57), t), i(n(3), t);
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
					e.BOOKMARKING = "oa:bookmarking", e.CLASSIFYING = "oa:classifying", e.COMMENTING = "oa:commenting", e.DESCRIBING = "oa:describing", e.EDITING = "oa:editing", e.HIGHLIGHTING = "oa:highlighting", e.IDENTIFYING = "oa:identifying", e.LINKING = "oa:linking", e.MODERATING = "oa:moderating", e.PAINTING = "sc:painting", e.QUESTIONING = "oa:questioning", e.REPLYING = "oa:replying", e.TAGGING = "oa:tagging", e.TRANSCRIBING = "oad:transcribing";
				}(t.AnnotationMotivation ||= {}), function(e) {
					e.AUTO_ADVANCE = "auto-advance", e.CONTINUOUS = "continuous", e.FACING_PAGES = "facing-pages", e.HIDDEN = "hidden", e.INDIVIDUALS = "individuals", e.MULTI_PART = "multi-part", e.NO_NAV = "no-nav", e.NON_PAGED = "non-paged", e.PAGED = "paged", e.REPEAT = "repeat", e.SEQUENCE = "sequence", e.THUMBNAIL_NAV = "thumbnail-nav", e.TOGETHER = "together", e.UNORDERED = "unordered";
				}(t.Behavior ||= {}), function(e) {
					e.CANVAS = "canvas", e.CHOICE = "choice", e.OA_CHOICE = "oa:choice", e.CONTENT_AS_TEXT = "contentastext", e.DATASET = "dataset", e.DOCUMENT = "document", e.IMAGE = "image", e.MODEL = "model", e.MOVING_IMAGE = "movingimage", e.PDF = "pdf", e.PHYSICAL_OBJECT = "physicalobject", e.SOUND = "sound", e.TEXT = "text", e.TEXTUALBODY = "textualbody", e.VIDEO = "video";
				}(t.ExternalResourceType ||= {}), function(e) {
					e.ANNOTATION = "annotation", e.CANVAS = "canvas", e.COLLECTION = "collection", e.MANIFEST = "manifest", e.RANGE = "range", e.SEQUENCE = "sequence";
				}(t.IIIFResourceType ||= {}), function(e) {
					e.AUDIO_MP4 = "audio/mp4", e.CORTO = "application/corto", e.DICOM = "application/dicom", e.DRACO = "application/draco", e.EPUB = "application/epub+zip", e.GIRDER = "image/vnd.kitware.girder", e.GLB = "model/gltf-binary", e.GLTF = "model/gltf+json", e.IIIF_PRESENTATION_2 = "application/ld+json;profile=\"http://iiif.io/api/presentation/2/context.json\"", e.IIIF_PRESENTATION_3 = "application/ld+json;profile=\"http://iiif.io/api/presentation/3/context.json\"", e.JPG = "image/jpeg", e.M3U8 = "application/vnd.apple.mpegurl", e.MP3 = "audio/mp3", e.MPEG_DASH = "application/dash+xml", e.OBJ = "text/plain", e.OPF = "application/oebps-package+xml", e.PDF = "application/pdf", e.PLY = "application/ply", e.THREEJS = "application/vnd.threejs+json", e.USDZ = "model/vnd.usd+zip", e.VIDEO_MP4 = "video/mp4", e.WAV = "audio/wav", e.WEBM = "video/webm";
				}(t.MediaType ||= {}), function(e) {
					e.DOC = "application/msword", e.DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", e.PDF = "application/pdf";
				}(t.RenderingFormat ||= {}), function(e) {
					e.IMAGE_0_COMPLIANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/compliance.html#level0", e.IMAGE_0_COMPLIANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/compliance.html#level1", e.IMAGE_0_COMPLIANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/compliance.html#level2", e.IMAGE_0_CONFORMANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/conformance.html#level0", e.IMAGE_0_CONFORMANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/conformance.html#level1", e.IMAGE_0_CONFORMANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/conformance.html#level2", e.IMAGE_1_COMPLIANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", e.IMAGE_1_COMPLIANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1", e.IMAGE_1_COMPLIANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2", e.IMAGE_1_CONFORMANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0", e.IMAGE_1_CONFORMANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1", e.IMAGE_1_CONFORMANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2", e.IMAGE_1_LEVEL_0 = "http://iiif.io/api/image/1/level0.json", e.IMAGE_1_PROFILE_LEVEL_0 = "http://iiif.io/api/image/1/profiles/level0.json", e.IMAGE_1_LEVEL_1 = "http://iiif.io/api/image/1/level1.json", e.IMAGE_1_PROFILE_LEVEL_1 = "http://iiif.io/api/image/1/profiles/level1.json", e.IMAGE_1_LEVEL_2 = "http://iiif.io/api/image/1/level2.json", e.IMAGE_1_PROFILE_LEVEL_2 = "http://iiif.io/api/image/1/profiles/level2.json", e.IMAGE_2_LEVEL_0 = "http://iiif.io/api/image/2/level0.json", e.IMAGE_2_PROFILE_LEVEL_0 = "http://iiif.io/api/image/2/profiles/level0.json", e.IMAGE_2_LEVEL_1 = "http://iiif.io/api/image/2/level1.json", e.IMAGE_2_PROFILE_LEVEL_1 = "http://iiif.io/api/image/2/profiles/level1.json", e.IMAGE_2_LEVEL_2 = "http://iiif.io/api/image/2/level2.json", e.IMAGE_2_PROFILE_LEVEL_2 = "http://iiif.io/api/image/2/profiles/level2.json", e.AUTH_0_CLICK_THROUGH = "http://iiif.io/api/auth/0/login/clickthrough", e.AUTH_0_LOGIN = "http://iiif.io/api/auth/0/login", e.AUTH_0_LOGOUT = "http://iiif.io/api/auth/0/logout", e.AUTH_0_RESTRICTED = "http://iiif.io/api/auth/0/login/restricted", e.AUTH_0_TOKEN = "http://iiif.io/api/auth/0/token", e.AUTH_1_CLICK_THROUGH = "http://iiif.io/api/auth/1/clickthrough", e.AUTH_1_EXTERNAL = "http://iiif.io/api/auth/1/external", e.AUTH_1_KIOSK = "http://iiif.io/api/auth/1/kiosk", e.AUTH_1_LOGIN = "http://iiif.io/api/auth/1/login", e.AUTH_1_LOGOUT = "http://iiif.io/api/auth/1/logout", e.AUTH_1_PROBE = "http://iiif.io/api/auth/1/probe", e.AUTH_1_TOKEN = "http://iiif.io/api/auth/1/token", e.SEARCH_0 = "http://iiif.io/api/search/0/search", e.SEARCH_0_AUTO_COMPLETE = "http://iiif.io/api/search/0/autocomplete", e.SEARCH_1 = "http://iiif.io/api/search/1/search", e.SEARCH_1_AUTO_COMPLETE = "http://iiif.io/api/search/1/autocomplete", e.TRACKING_EXTENSIONS = "http://universalviewer.io/tracking-extensions-profile", e.UI_EXTENSIONS = "http://universalviewer.io/ui-extensions-profile", e.PRINT_EXTENSIONS = "http://universalviewer.io/print-extensions-profile", e.SHARE_EXTENSIONS = "http://universalviewer.io/share-extensions-profile", e.DOWNLOAD_EXTENSIONS = "http://universalviewer.io/download-extensions-profile", e.OTHER_MANIFESTATIONS = "http://iiif.io/api/otherManifestations.json", e.IXIF = "http://wellcomelibrary.org/ld/ixif/0/alpha.json";
				}(t.ServiceProfile ||= {}), function(e) {
					e.IMAGE_SERVICE_2 = "ImageService2", e.IMAGE_SERVICE_3 = "ImageService3";
				}(t.ServiceType ||= {}), function(e) {
					e.BOTTOM_TO_TOP = "bottom-to-top", e.LEFT_TO_RIGHT = "left-to-right", e.RIGHT_TO_LEFT = "right-to-left", e.TOP_TO_BOTTOM = "top-to-bottom";
				}(t.ViewingDirection ||= {}), function(e) {
					e.CONTINUOUS = "continuous", e.INDIVIDUALS = "individuals", e.NON_PAGED = "non-paged", e.PAGED = "paged", e.TOP = "top";
				}(t.ViewingHint ||= {});
			},
			function(e, t, n) {
				e.exports = n(21).Symbol;
			},
			function(e, t, n) {
				var r = this && this.__awaiter || function(e, t, n, r) {
					return new (n ||= Promise)((function(i, a) {
						function o(e) {
							try {
								c(r.next(e));
							} catch (e) {
								a(e);
							}
						}
						function s(e) {
							try {
								c(r.throw(e));
							} catch (e) {
								a(e);
							}
						}
						function c(e) {
							var t;
							e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t);
							}))).then(o, s);
						}
						c((r = r.apply(e, t || [])).next());
					}));
				}, i = this && this.__generator || function(e, t) {
					var n, r, i, a = {
						label: 0,
						sent: function() {
							if (1 & i[0]) throw i[1];
							return i[1];
						},
						trys: [],
						ops: []
					}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
					return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
						return this;
					}), o;
					function s(s) {
						return function(c) {
							return function(s) {
								if (n) throw TypeError("Generator is already executing.");
								for (; o && (o = 0, s[0] && (a = 0)), a;) try {
									if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
									switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
										case 0:
										case 1:
											i = s;
											break;
										case 4: return a.label++, {
											value: s[1],
											done: !1
										};
										case 5:
											a.label++, r = s[1], s = [0];
											continue;
										case 7:
											s = a.ops.pop(), a.trys.pop();
											continue;
										default:
											if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
												a = 0;
												continue;
											}
											if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
												a.label = s[1];
												break;
											}
											if (s[0] === 6 && a.label < i[1]) {
												a.label = i[1], i = s;
												break;
											}
											if (i && a.label < i[2]) {
												a.label = i[2], a.ops.push(s);
												break;
											}
											i[2] && a.ops.pop(), a.trys.pop();
											continue;
									}
									s = t.call(e, a);
								} catch (e) {
									s = [6, e], r = 0;
								} finally {
									n = i = 0;
								}
								if (5 & s[0]) throw s[1];
								return {
									value: s[0] ? s[1] : void 0,
									done: !0
								};
							}([s, c]);
						};
					}
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Utils = void 0;
				var a = n(0), o = n(1), s = n(43);
				n(44), t.Utils = function() {
					function e() {}
					return e.getMediaType = function(e) {
						return (e = (e = e.toLowerCase()).split(";")[0]).trim();
					}, e.getImageQuality = function(e) {
						return e === o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1 || e === o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2 || e === o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1 || e === o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2 || e === o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1 || e === o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2 || e === o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1 || e === o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2 || e === o.ServiceProfile.IMAGE_1_LEVEL_1 || e === o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1 || e === o.ServiceProfile.IMAGE_1_LEVEL_2 || e === o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2 ? "native" : "default";
					}, e.getInexactLocale = function(e) {
						return e.indexOf("-") === -1 ? e : e.substr(0, e.indexOf("-"));
					}, e.getLocalisedValue = function(e, t) {
						if (!Array.isArray(e)) return e;
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							if (t === r["@language"]) return r["@value"];
						}
						var i = t.substr(0, t.indexOf("-"));
						for (n = 0; n < e.length; n++) {
							var a = e[n];
							if (a["@language"] === i) return a["@value"];
						}
						return null;
					}, e.generateTreeNodeIds = function(t, n) {
						var r;
						n === void 0 && (n = 0), r = t.parentNode ? t.parentNode.id + "-" + n : "0", t.id = r;
						for (var i = 0; i < t.nodes.length; i++) {
							var a = t.nodes[i];
							e.generateTreeNodeIds(a, i);
						}
					}, e.normaliseType = function(e) {
						return (e = (e || "").toLowerCase()).indexOf(":") === -1 ? e : e.split(":")[1];
					}, e.normaliseUrl = function(e) {
						return (e = e.substr(e.indexOf("://"))).indexOf("#") !== -1 && (e = e.split("#")[0]), e;
					}, e.normalisedUrlsMatch = function(t, n) {
						return e.normaliseUrl(t) === e.normaliseUrl(n);
					}, e.isImageProfile = function(t) {
						return !!(e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2));
					}, e.isImageServiceType = function(e) {
						return e !== null && e.toLowerCase() === o.ServiceType.IMAGE_SERVICE_2.toLowerCase() || e === o.ServiceType.IMAGE_SERVICE_3.toLowerCase();
					}, e.isLevel0ImageProfile = function(t) {
						return !!(e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_LEVEL_0) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0));
					}, e.isLevel1ImageProfile = function(t) {
						return !!(e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_LEVEL_1) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1));
					}, e.isLevel2ImageProfile = function(t) {
						return !!(e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_LEVEL_2) || e.normalisedUrlsMatch(t, o.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2));
					}, e.parseManifest = function(e, t) {
						return a.Deserialiser.parse(e, t);
					}, e.checkStatus = function(e) {
						if (e.ok) return e;
						var t = Error(e.statusText);
						return t.response = e, Promise.reject(t);
					}, e.loadManifest = function(t) {
						return new Promise((function(n, r) {
							fetch(t).then(e.checkStatus).then((function(e) {
								return e.json();
							})).then((function(e) {
								n(e);
							})).catch((function(e) {
								r();
							}));
						}));
					}, e.loadExternalResourcesAuth1 = function(t, n, r, i, a, o, s, c) {
						return new Promise((function(l, u) {
							var d = t.map((function(t) {
								return e.loadExternalResourceAuth1(t, n, r, i, a, o, s, c);
							}));
							Promise.all(d).then((function() {
								l(t);
							})).catch((function(e) {
								u(e);
							}));
						}));
					}, e.loadExternalResourceAuth1 = function(t, n, a, o, c, l, u, d) {
						return r(this, void 0, void 0, (function() {
							var r;
							return i(this, (function(i) {
								switch (i.label) {
									case 0: return [4, o(t)];
									case 1: return (r = i.sent()) ? [4, t.getData(r)] : [3, 6];
									case 2: return i.sent(), t.status === s.OK ? [2, t] : [3, 3];
									case 3: return [4, e.doAuthChain(t, n, a, c, l, u, d)];
									case 4: i.sent(), i.label = 5;
									case 5:
										if (t.status === s.OK || t.status === s.MOVED_TEMPORARILY) return [2, t];
										throw e.createAuthorizationFailedError();
									case 6: return [4, t.getData()];
									case 7: return i.sent(), t.status !== s.MOVED_TEMPORARILY && t.status !== s.UNAUTHORIZED ? [3, 9] : [4, e.doAuthChain(t, n, a, c, l, u, d)];
									case 8: i.sent(), i.label = 9;
									case 9:
										if (t.status === s.OK || t.status === s.MOVED_TEMPORARILY) return [2, t];
										throw e.createAuthorizationFailedError();
								}
							}));
						}));
					}, e.doAuthChain = function(t, n, a, o, c, l, u) {
						return r(this, void 0, void 0, (function() {
							var r, d, f, p, m, h, g, _;
							return i(this, (function(i) {
								switch (i.label) {
									case 0: return t.isAccessControlled() ? ((r = t.externalService) && (r.options = t.options), (d = t.kioskService) && (d.options = t.options), (f = t.clickThroughService) && (f.options = t.options), (p = t.loginService) && (p.options = t.options), t.isResponseHandled || t.status !== s.MOVED_TEMPORARILY ? [3, 2] : [4, l(t)]) : [2, t];
									case 1: return i.sent(), [2, t];
									case 2: return m = null, h = null, (m = r) ? (h = m, [4, e.attemptResourceWithToken(t, a, m)]) : [3, 4];
									case 3: return i.sent(), [2, t];
									case 4: return (m = d) ? (h = m, (g = n(m)) ? [4, o(g)] : [3, 7]) : [3, 7];
									case 5: return i.sent(), [4, e.attemptResourceWithToken(t, a, m)];
									case 6: return i.sent(), [2, t];
									case 7: return (m = f) ? (h = m, [4, c(t, m)]) : [3, 11];
									case 8: return (_ = i.sent()) ? [4, o(_)] : [3, 11];
									case 9: return i.sent(), [4, e.attemptResourceWithToken(t, a, m)];
									case 10: return i.sent(), [2, t];
									case 11: return (m = p) ? (h = m, [4, c(t, m)]) : [3, 15];
									case 12: return (_ = i.sent()) ? [4, o(_)] : [3, 15];
									case 13: return i.sent(), [4, e.attemptResourceWithToken(t, a, m)];
									case 14: return i.sent(), [2, t];
									case 15: return h && u(t, h), [2];
								}
							}));
						}));
					}, e.attemptResourceWithToken = function(e, t, n) {
						return r(this, void 0, void 0, (function() {
							var r, a;
							return i(this, (function(i) {
								switch (i.label) {
									case 0: return (r = n.getService(o.ServiceProfile.AUTH_1_TOKEN)) ? [4, t(e, r)] : [3, 3];
									case 1: return (a = i.sent()) && a.accessToken ? [4, e.getData(a)] : [3, 3];
									case 2: return i.sent(), [2, e];
									case 3: return [2];
								}
							}));
						}));
					}, e.loadExternalResourcesAuth09 = function(t, n, r, i, a, o, s, c, l, u) {
						return new Promise((function(d, f) {
							var p = t.map((function(t) {
								return e.loadExternalResourceAuth09(t, n, r, i, a, o, s, c, l, u);
							}));
							Promise.all(p).then((function() {
								d(t);
							})).catch((function(e) {
								f(e);
							}));
						}));
					}, e.loadExternalResourceAuth09 = function(t, n, r, i, a, o, c, l, u, d) {
						return new Promise((function(f, p) {
							d && d.pessimisticAccessControl ? t.getData().then((function() {
								t.isAccessControlled() ? t.clickThroughService ? (f(r(t)), f(i(t))) : a(t).then((function() {
									o(t, !0).then((function(n) {
										t.getData(n).then((function() {
											f(u(t));
										})).catch((function(t) {
											p(e.createInternalServerError(t));
										}));
									})).catch((function(t) {
										p(e.createInternalServerError(t));
									}));
								})).catch((function(t) {
									p(e.createInternalServerError(t));
								})) : f(t);
							})).catch((function(t) {
								p(e.createInternalServerError(t));
							})) : l(t, n).then((function(d) {
								d ? t.getData(d).then((function() {
									t.status === s.OK ? f(u(t)) : e.authorize(t, n, r, i, a, o, c, l).then((function() {
										f(u(t));
									})).catch((function(t) {
										p(e.createAuthorizationFailedError());
									}));
								})).catch((function(t) {
									p(e.createAuthorizationFailedError());
								})) : e.authorize(t, n, r, i, a, o, c, l).then((function() {
									f(u(t));
								})).catch((function(t) {
									p(e.createAuthorizationFailedError());
								}));
							})).catch((function(t) {
								p(e.createAuthorizationFailedError());
							}));
						}));
					}, e.createError = function(e, t) {
						var n = /* @__PURE__ */ Error();
						return n.message = t, n.name = String(e), n;
					}, e.createAuthorizationFailedError = function() {
						return e.createError(a.StatusCode.AUTHORIZATION_FAILED, "Authorization failed");
					}, e.createRestrictedError = function() {
						return e.createError(a.StatusCode.RESTRICTED, "Restricted");
					}, e.createInternalServerError = function(t) {
						return e.createError(a.StatusCode.INTERNAL_SERVER_ERROR, t);
					}, e.authorize = function(t, n, r, i, a, o, c, l) {
						return new Promise((function(u, d) {
							t.getData().then((function() {
								t.isAccessControlled() ? l(t, n).then((function(l) {
									l ? t.getData(l).then((function() {
										t.status === s.OK ? u(t) : e.showAuthInteraction(t, n, r, i, a, o, c, u, d);
									})).catch((function(t) {
										d(e.createInternalServerError(t));
									})) : o(t, !1).then((function(l) {
										l ? c(t, l, n).then((function() {
											t.getData(l).then((function() {
												t.status === s.OK ? u(t) : e.showAuthInteraction(t, n, r, i, a, o, c, u, d);
											})).catch((function(t) {
												d(e.createInternalServerError(t));
											}));
										})).catch((function(t) {
											d(e.createInternalServerError(t));
										})) : e.showAuthInteraction(t, n, r, i, a, o, c, u, d);
									}));
								})).catch((function(t) {
									d(e.createInternalServerError(t));
								})) : u(t);
							}));
						}));
					}, e.showAuthInteraction = function(t, n, r, i, a, o, c, l, u) {
						t.status !== s.MOVED_TEMPORARILY || t.isResponseHandled ? t.clickThroughService && !t.isResponseHandled ? r(t).then((function() {
							o(t, !0).then((function(r) {
								c(t, r, n).then((function() {
									t.getData(r).then((function() {
										l(t);
									})).catch((function(t) {
										u(e.createInternalServerError(t));
									}));
								})).catch((function(t) {
									u(e.createInternalServerError(t));
								}));
							})).catch((function(t) {
								u(e.createInternalServerError(t));
							}));
						})) : a(t).then((function() {
							o(t, !0).then((function(r) {
								c(t, r, n).then((function() {
									t.getData(r).then((function() {
										l(t);
									})).catch((function(t) {
										u(e.createInternalServerError(t));
									}));
								})).catch((function(t) {
									u(e.createInternalServerError(t));
								}));
							})).catch((function(t) {
								u(e.createInternalServerError(t));
							}));
						})) : l(t);
					}, e.getService = function(e, t) {
						for (var n = this.getServices(e), r = 0; r < n.length; r++) {
							var i = n[r];
							if (i.getProfile() === t) return i;
						}
						return null;
					}, e.getResourceById = function(t, n) {
						return e.traverseAndFind(t.__jsonld, "@id", n);
					}, e.traverseAndFind = function(t, n, r) {
						if (t.hasOwnProperty(n) && t[n] === r) return t;
						for (var i = 0; i < Object.keys(t).length; i++) if (typeof t[Object.keys(t)[i]] == "object") {
							var a = e.traverseAndFind(t[Object.keys(t)[i]], n, r);
							if (a != null) return a;
						}
					}, e.getServices = function(t, n) {
						var r = n === void 0 ? {} : n, i = r.onlyService, o = i !== void 0 && i, s = r.onlyServices, c = s !== void 0 && s, l = r.skipParentResources, u = [];
						!(l !== void 0 && l) && t && t.options && t.options.resource && t.options.resource !== t && u.push.apply(u, e.getServices(t.options.resource, { onlyServices: !0 }));
						var d = c ? [] : (t.__jsonld || t).service || [];
						if (Array.isArray(d) || (d = [d]), o || d.push.apply(d, (t.__jsonld || t).services || []), d.length === 0) return u;
						for (var f = 0; f < d.length; f++) {
							var p = d[f];
							if (typeof p == "string") {
								var m = this.getResourceById(t.options.resource, p);
								m && u.push(new a.Service(m.__jsonld || m, t.options));
							} else u.push(new a.Service(p, t.options));
						}
						return u;
					}, e.getTemporalComponent = function(e) {
						var t = /t=([^&]+)/g.exec(e), n = null;
						return t && t[1] && (n = t[1].split(",")), n;
					}, e;
				}();
			},
			function(e, t, n) {
				var r = n(19), i = n(20);
				e.exports = function e(t, n, a, o, s) {
					var c = -1, l = t.length;
					for (a ||= i, s ||= []; ++c < l;) {
						var u = t[c];
						n > 0 && a(u) ? n > 1 ? e(u, n - 1, a, o, s) : r(s, u) : o || (s[s.length] = u);
					}
					return s;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return typeof e == "object" && !!e;
				};
			},
			function(e, t, n) {
				n.r(t), t.default = function(e, t) {
					return t ||= {}, new Promise((function(n, r) {
						var i = new XMLHttpRequest(), a = [], o = [], s = {}, c = function() {
							return {
								ok: (i.status / 100 | 0) == 2,
								statusText: i.statusText,
								status: i.status,
								url: i.responseURL,
								text: function() {
									return Promise.resolve(i.responseText);
								},
								json: function() {
									return Promise.resolve(JSON.parse(i.responseText));
								},
								blob: function() {
									return Promise.resolve(new Blob([i.response]));
								},
								clone: c,
								headers: {
									keys: function() {
										return a;
									},
									entries: function() {
										return o;
									},
									get: function(e) {
										return s[e.toLowerCase()];
									},
									has: function(e) {
										return e.toLowerCase() in s;
									}
								}
							};
						};
						for (var l in i.open(t.method || "get", e, !0), i.onload = function() {
							i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
								a.push(t = t.toLowerCase()), o.push([t, n]), s[t] = s[t] ? s[t] + "," + n : n;
							})), n(c());
						}, i.onerror = r, i.withCredentials = t.credentials == "include", t.headers) i.setRequestHeader(l, t.headers[l]);
						i.send(t.body || null);
					}));
				};
			},
			function(e, t, n) {
				e.exports = n(8);
			},
			function(e, t, n) {
				var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
					r === void 0 && (r = n);
					var i = Object.getOwnPropertyDescriptor(t, n);
					i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
						enumerable: !0,
						get: function() {
							return t[n];
						}
					}), Object.defineProperty(e, r, i);
				} : function(e, t, n, r) {
					r === void 0 && (r = n), e[r] = t[n];
				}), i = this && this.__exportStar || function(e, t) {
					for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.parseManifest = t.loadManifest = void 0, i(n(0), t);
				var a = n(3);
				t.loadManifest = function(e) {
					return a.Utils.loadManifest(e);
				}, t.parseManifest = function(e, t) {
					return a.Utils.parseManifest(e, t);
				};
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.JSONLDResource = void 0, t.JSONLDResource = function() {
					function e(e) {
						this.__jsonld = e, this.context = this.getProperty("context"), this.id = this.getProperty("id");
					}
					return e.prototype.getProperty = function(e) {
						var t = null;
						return this.__jsonld && ((t = this.__jsonld[e]) || (t = this.__jsonld["@" + e])), t;
					}, e;
				}();
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.ManifestResource = void 0;
				var a = n(0), o = n(1);
				t.ManifestResource = function(e) {
					function t(t, n) {
						var r = e.call(this, t) || this;
						return r.options = n, r;
					}
					return i(t, e), t.prototype.getIIIFResourceType = function() {
						return a.Utils.normaliseType(this.getProperty("type"));
					}, t.prototype.getLabel = function() {
						var e = this.getProperty("label");
						return e ? a.PropertyValue.parse(e, this.options.locale) : new a.PropertyValue([], this.options.locale);
					}, t.prototype.getDefaultLabel = function() {
						return this.getLabel().getValue(this.options.locale);
					}, t.prototype.getMetadata = function() {
						var e = this.getProperty("metadata"), t = [];
						if (!e) return t;
						for (var n = 0; n < e.length; n++) {
							var r = e[n], i = new a.LabelValuePair(this.options.locale);
							i.parse(r), t.push(i);
						}
						return t;
					}, t.prototype.getRendering = function(e) {
						for (var t = this.getRenderings(), n = 0; n < t.length; n++) {
							var r = t[n];
							if (r.getFormat() === e) return r;
						}
						return null;
					}, t.prototype.getRenderings = function() {
						var e, t = [];
						if (!(e = this.__jsonld ? this.__jsonld.rendering : this.rendering)) return t;
						Array.isArray(e) || (e = [e]);
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							t.push(new a.Rendering(r, this.options));
						}
						return t;
					}, t.prototype.getRequiredStatement = function() {
						var e = null, t = this.getProperty("requiredStatement");
						return t && (e = new a.LabelValuePair(this.options.locale)).parse(t), e;
					}, t.prototype.getService = function(e) {
						return a.Utils.getService(this, e);
					}, t.prototype.getServices = function() {
						return a.Utils.getServices(this);
					}, t.prototype.getThumbnail = function() {
						var e = this.getProperty("thumbnail");
						return Array.isArray(e) && (e = e[0]), e ? new a.Thumbnail(e, this.options) : null;
					}, t.prototype.isAnnotation = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.ANNOTATION;
					}, t.prototype.isCanvas = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.CANVAS;
					}, t.prototype.isCollection = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.COLLECTION;
					}, t.prototype.isManifest = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.MANIFEST;
					}, t.prototype.isRange = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.RANGE;
					}, t.prototype.isSequence = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.SEQUENCE;
					}, t;
				}(a.JSONLDResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Resource = void 0;
				var a = n(0);
				t.Resource = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getFormat = function() {
						var e = this.getProperty("format");
						return e ? e.toLowerCase() : null;
					}, t.prototype.getResources = function() {
						var e = [];
						if (!this.__jsonld.resources) return e;
						for (var t = 0; t < this.__jsonld.resources.length; t++) {
							var n = this.__jsonld.resources[t], r = new a.Annotation(n, this.options);
							e.push(r);
						}
						return e;
					}, t.prototype.getType = function() {
						var e = this.getProperty("type");
						return e ? a.Utils.normaliseType(e) : null;
					}, t.prototype.getWidth = function() {
						return this.getProperty("width");
					}, t.prototype.getHeight = function() {
						return this.getProperty("height");
					}, t.prototype.getMaxWidth = function() {
						return this.getProperty("maxWidth");
					}, t.prototype.getMaxHeight = function() {
						return this.getProperty("maxHeight") ? null : this.getMaxWidth();
					}, t;
				}(a.ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.IIIFResource = void 0;
				var a = n(0), o = n(1);
				t.IIIFResource = function(e) {
					function t(t, n) {
						var r = e.call(this, t, n) || this;
						return r.index = -1, r.isLoaded = !1, r.options = Object.assign({
							defaultLabel: "-",
							locale: "en-GB",
							resource: r,
							pessimisticAccessControl: !1
						}, n), r;
					}
					return i(t, e), t.prototype.getAttribution = function() {
						var e = this.getProperty("attribution");
						return e ? a.PropertyValue.parse(e, this.options.locale) : new a.PropertyValue([], this.options.locale);
					}, t.prototype.getDescription = function() {
						var e = this.getProperty("description");
						return e ? a.PropertyValue.parse(e, this.options.locale) : new a.PropertyValue([], this.options.locale);
					}, t.prototype.getHomepage = function() {
						var e = this.getProperty("homepage");
						return e ? typeof e == "string" ? e : (Array.isArray(e) && e.length && (e = e[0]), e["@id"] || e.id) : null;
					}, t.prototype.getIIIFResourceType = function() {
						return a.Utils.normaliseType(this.getProperty("type"));
					}, t.prototype.getLogo = function() {
						var e = this.getProperty("logo");
						if (!e) {
							var t = this.getProperty("provider");
							if (!t) return null;
							var n = t.find((function(e) {
								return e.logo !== void 0;
							}));
							e = n && n.logo !== void 0 ? n.logo : null;
						}
						return e ? typeof e == "string" ? e : (Array.isArray(e) && e.length && (e = e[0]), e["@id"] || e?.id) : null;
					}, t.prototype.getLicense = function() {
						return a.Utils.getLocalisedValue(this.getProperty("license"), this.options.locale);
					}, t.prototype.getRights = function() {
						var e = this.getProperty("rights");
						return e ? typeof e == "string" ? e : (Array.isArray(e) && e.length && (e = e[0]), e["@id"] || e.id) : null;
					}, t.prototype.getNavDate = function() {
						return new Date(this.getProperty("navDate"));
					}, t.prototype.getRelated = function() {
						return this.getProperty("related");
					}, t.prototype.getSeeAlso = function() {
						return this.getProperty("seeAlso");
					}, t.prototype.getTrackingLabel = function() {
						var e = this.getService(o.ServiceProfile.TRACKING_EXTENSIONS);
						return e ? e.getProperty("trackingLabel") : "";
					}, t.prototype.getDefaultTree = function() {
						return this.defaultTree = new a.TreeNode("root"), this.defaultTree.data = this, this.defaultTree;
					}, t.prototype.getRequiredStatement = function() {
						var e = null, t = this.getProperty("requiredStatement");
						if (t) (e = new a.LabelValuePair(this.options.locale)).parse(t);
						else {
							var n = this.getAttribution();
							n && n.length && ((e = new a.LabelValuePair(this.options.locale)).value = n);
						}
						return e;
					}, t.prototype.isCollection = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.COLLECTION;
					}, t.prototype.isManifest = function() {
						return this.getIIIFResourceType() === o.IIIFResourceType.MANIFEST;
					}, t.prototype.load = function() {
						var e = this;
						return new Promise((function(t) {
							if (e.isLoaded) t(e);
							else {
								var n = e.options;
								n.navDate = e.getNavDate();
								var r = e.__jsonld.id;
								r ||= e.__jsonld["@id"], a.Utils.loadManifest(r).then((function(r) {
									e.parentLabel = e.getLabel().getValue(n.locale);
									var i = a.Deserialiser.parse(r, n);
									(e = Object.assign(e, i)).index = n.index, t(e);
								}));
							}
						}));
					}, t;
				}(a.ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Annotation = void 0;
				var a = n(0);
				t.Annotation = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getBody = function() {
						var e = [], t = this.getProperty("body");
						if (t) if (Array.isArray(t)) for (var n = 0; n < t.length; n++) if ((o = t[n]).items) for (var r = 0; r < o.items.length; r++) {
							var i = o.items[r];
							e.push(new a.AnnotationBody(i, this.options));
						}
						else e.push(new a.AnnotationBody(o, this.options));
						else if (t.items) for (n = 0; n < t.items.length; n++) {
							var o = t.items[n];
							e.push(new a.AnnotationBody(o, this.options));
						}
						else e.push(new a.AnnotationBody(t, this.options));
						return e;
					}, t.prototype.getMotivation = function() {
						return this.getProperty("motivation") || null;
					}, t.prototype.getOn = function() {
						return this.getProperty("on");
					}, t.prototype.getTarget = function() {
						return this.getProperty("target");
					}, t.prototype.getResource = function() {
						return new a.Resource(this.getProperty("resource"), this.options);
					}, t;
				}(a.ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.AnnotationBody = void 0;
				var a = n(0);
				t.AnnotationBody = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getFormat = function() {
						var e = this.getProperty("format");
						return e ? a.Utils.getMediaType(e) : null;
					}, t.prototype.getType = function() {
						return this.getProperty("type") ? a.Utils.normaliseType(this.getProperty("type")) : null;
					}, t.prototype.getWidth = function() {
						return this.getProperty("width");
					}, t.prototype.getHeight = function() {
						return this.getProperty("height");
					}, t;
				}(a.ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.AnnotationList = void 0;
				var a = n(0);
				t.AnnotationList = function(e) {
					function t(t, n, r) {
						var i = e.call(this, n) || this;
						return i.label = t, i.options = r, i;
					}
					return i(t, e), t.prototype.getIIIFResourceType = function() {
						return a.Utils.normaliseType(this.getProperty("type"));
					}, t.prototype.getLabel = function() {
						return this.label;
					}, t.prototype.getResources = function() {
						var e = this;
						return this.getProperty("resources").map((function(t) {
							return new a.Annotation(t, e.options);
						}));
					}, t.prototype.load = function() {
						var e = this;
						return new Promise((function(t, n) {
							if (e.isLoaded) t(e);
							else {
								var r = e.__jsonld.id;
								r ||= e.__jsonld["@id"], a.Utils.loadManifest(r).then((function(n) {
									e.__jsonld = n, e.context = e.getProperty("context"), e.id = e.getProperty("id"), e.isLoaded = !0, t(e);
								})).catch(n);
							}
						}));
					}, t;
				}(a.JSONLDResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.AnnotationPage = void 0, t.AnnotationPage = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getItems = function() {
						return this.getProperty("items");
					}, t;
				}(n(0).ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				}), a = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Canvas = void 0;
				var o = n(1), s = n(0), c = a(n(18)), l = a(n(30));
				t.Canvas = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getCanonicalImageUri = function(e) {
						var t, n = null, r = "default", i = e;
						if (this.externalResource && this.externalResource.data && this.externalResource.data["@id"]) n = this.externalResource.data["@id"], i ||= this.externalResource.data.width, this.externalResource.data["@context"] && (this.externalResource.data["@context"].indexOf("/1.0/context.json") > -1 || this.externalResource.data["@context"].indexOf("/1.1/context.json") > -1 || this.externalResource.data["@context"].indexOf("/1/context.json") > -1) && (r = "native");
						else {
							var a = void 0;
							if ((a = this.getImages()) && a.length) {
								var o = a[0].getResource(), c = o.getServices();
								if (i ||= o.getWidth(), l = c ? c.find((function(e) {
									return s.Utils.isImageProfile(e.getProfile()) || s.Utils.isImageServiceType(e.getIIIFResourceType());
								})) : null) n = l.id, r = s.Utils.getImageQuality(l.getProfile());
								else if (i === o.getWidth()) return o.id;
							}
							if ((a = this.getContent()) && a.length) {
								var l, u = a[0].getBody()[0];
								if (c = u.getServices(), i ||= u.getWidth(), l = c ? c.find((function(e) {
									return s.Utils.isImageServiceType(e.getIIIFResourceType());
								})) : null) n = l.id, r = s.Utils.getImageQuality(l.getProfile());
								else if (i === u.getWidth()) return u.id;
							}
							if (!n) {
								var d = this.getProperty("thumbnail");
								if (d) {
									if (typeof d == "string") return d;
									if (d["@id"]) return d["@id"];
									if (d.length) return d[0].id;
								}
							}
						}
						return t = i + ",", n && n.endsWith("/") && (n = n.substr(0, n.length - 1)), [
							n,
							"full",
							t,
							0,
							r + ".jpg"
						].join("/");
					}, t.prototype.getMaxDimensions = function() {
						var e, t = null;
						return this.externalResource && this.externalResource.data && this.externalResource.data.profile && (e = this.externalResource.data.profile, Array.isArray(e) && (e = e.filter((function(e) {
							return e.maxWidth ?? e.maxwidth;
						}))[0]) && (t = new s.Size(e.maxWidth, e.maxHeight ? e.maxHeight : e.maxWidth))), t;
					}, t.prototype.getContent = function() {
						var e = [], t = this.__jsonld.items || this.__jsonld.content;
						if (!t) return e;
						var n = null;
						if (t.length && (n = new s.AnnotationPage(t[0], this.options)), !n) return e;
						for (var r = n.getItems(), i = 0; i < r.length; i++) {
							var a = r[i], o = new s.Annotation(a, this.options);
							e.push(o);
						}
						return e;
					}, t.prototype.getDuration = function() {
						return this.getProperty("duration");
					}, t.prototype.getImages = function() {
						var e = [];
						if (!this.__jsonld.images) return e;
						for (var t = 0; t < this.__jsonld.images.length; t++) {
							var n = this.__jsonld.images[t], r = new s.Annotation(n, this.options);
							e.push(r);
						}
						return e;
					}, t.prototype.getIndex = function() {
						return this.getProperty("index");
					}, t.prototype.getOtherContent = function() {
						var e = this, t = (Array.isArray(this.getProperty("otherContent")) ? this.getProperty("otherContent") : [this.getProperty("otherContent")]).filter((function(e) {
							return e && (t = e["@type"], n = "sc:AnnotationList", typeof t == "string" && typeof n == "string" && t.toLowerCase() == t.toLowerCase());
							var t, n;
						})).map((function(t, n) {
							return new s.AnnotationList(t.label || `Annotation list ${n}`, t, e.options);
						})).map((function(e) {
							return e.load();
						}));
						return Promise.all(t);
					}, t.prototype.getWidth = function() {
						return this.getProperty("width");
					}, t.prototype.getHeight = function() {
						return this.getProperty("height");
					}, t.prototype.getViewingHint = function() {
						return this.getProperty("viewingHint");
					}, Object.defineProperty(t.prototype, "imageResources", {
						get: function() {
							var e = this, n = (0, l.default)([this.getImages().map((function(e) {
								return e.getResource();
							})), this.getContent().map((function(e) {
								return e.getBody();
							}))]);
							return (0, c.default)(n.map((function(n) {
								switch (n.getProperty("type").toLowerCase()) {
									case o.ExternalResourceType.CHOICE:
									case o.ExternalResourceType.OA_CHOICE: return new t({ images: (0, c.default)([n.getProperty("default"), n.getProperty("item")]).map((function(e) {
										return { resource: e };
									})) }, e.options).getImages().map((function(e) {
										return e.getResource();
									}));
									default: return n;
								}
							})));
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "resourceAnnotations", {
						get: function() {
							return (0, l.default)([this.getImages(), this.getContent()]);
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.resourceAnnotation = function(e) {
						return this.resourceAnnotations.find((function(t) {
							return t.getResource().id === e || (0, c.default)(Array(t.getBody())).some((function(t) {
								return t.id === e;
							}));
						}));
					}, t.prototype.onFragment = function(e) {
						var t = this.resourceAnnotation(e);
						if (t) {
							var n = t.getProperty("on"), r = t.getProperty("target");
							if (n && r) {
								var i = (n || r).match(/xywh=(.*)$/);
								if (i) return i[1].split(",").map((function(e) {
									return parseInt(e, 10);
								}));
							}
						}
					}, Object.defineProperty(t.prototype, "iiifImageResources", {
						get: function() {
							return this.imageResources.filter((function(e) {
								return e && e.getServices()[0] && e.getServices()[0].id;
							}));
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "imageServiceIds", {
						get: function() {
							return this.iiifImageResources.map((function(e) {
								return e.getServices()[0].id;
							}));
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "aspectRatio", {
						get: function() {
							return this.getWidth() / this.getHeight();
						},
						enumerable: !1,
						configurable: !0
					}), t;
				}(s.Resource);
			},
			function(e, t, n) {
				var r = n(4);
				e.exports = function(e) {
					return e != null && e.length ? r(e, 1) : [];
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
					return e;
				};
			},
			function(e, t, n) {
				var r = n(2), i = n(24), a = n(29), o = r ? r.isConcatSpreadable : void 0;
				e.exports = function(e) {
					return a(e) || i(e) || !!(o && e && e[o]);
				};
			},
			function(e, t, n) {
				var r = n(22), i = typeof self == "object" && self && self.Object === Object && self;
				e.exports = r || i || Function("return this")();
			},
			function(e, t, n) {
				(function(t) {
					e.exports = typeof t == "object" && t && t.Object === Object && t;
				}).call(this, n(23));
			},
			function(e, t) {
				var n = function() {
					return this;
				}();
				try {
					n ||= Function("return this")();
				} catch {
					typeof window == "object" && (n = window);
				}
				e.exports = n;
			},
			function(e, t, n) {
				var r = n(25), i = n(5), a = Object.prototype, o = a.hasOwnProperty, s = a.propertyIsEnumerable;
				e.exports = r(function() {
					return arguments;
				}()) ? r : function(e) {
					return i(e) && o.call(e, "callee") && !s.call(e, "callee");
				};
			},
			function(e, t, n) {
				var r = n(26), i = n(5);
				e.exports = function(e) {
					return i(e) && r(e) == "[object Arguments]";
				};
			},
			function(e, t, n) {
				var r = n(2), i = n(27), a = n(28), o = r ? r.toStringTag : void 0;
				e.exports = function(e) {
					return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e);
				};
			},
			function(e, t, n) {
				var r = n(2), i = Object.prototype, a = i.hasOwnProperty, o = i.toString, s = r ? r.toStringTag : void 0;
				e.exports = function(e) {
					var t = a.call(e, s), n = e[s];
					try {
						e[s] = void 0;
						var r = !0;
					} catch {}
					var i = o.call(e);
					return r && (t ? e[s] = n : delete e[s]), i;
				};
			},
			function(e, t) {
				var n = Object.prototype.toString;
				e.exports = function(e) {
					return n.call(e);
				};
			},
			function(e, t) {
				e.exports = Array.isArray;
			},
			function(e, t, n) {
				var r = n(4);
				e.exports = function(e) {
					return e != null && e.length ? r(e, Infinity) : [];
				};
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Collection = void 0;
				var a = n(1), o = n(0);
				t.Collection = function(e) {
					function t(t, n) {
						var r = e.call(this, t, n) || this;
						return r.items = [], r._collections = null, r._manifests = null, t.__collection = r, r;
					}
					return i(t, e), t.prototype.getCollections = function() {
						return this._collections ? this._collections : this._collections = this.items.filter((function(e) {
							return e.isCollection();
						}));
					}, t.prototype.getManifests = function() {
						return this._manifests ? this._manifests : this._manifests = this.items.filter((function(e) {
							return e.isManifest();
						}));
					}, t.prototype.getCollectionByIndex = function(e) {
						for (var t, n = this.getCollections(), r = 0; r < n.length; r++) {
							var i = n[r];
							i.index === e && (t = i);
						}
						if (t) return t.options.index = e, t.load();
						throw Error("Collection index not found");
					}, t.prototype.getManifestByIndex = function(e) {
						for (var t, n = this.getManifests(), r = 0; r < n.length; r++) {
							var i = n[r];
							i.index === e && (t = i);
						}
						if (t) return t.options.index = e, t.load();
						throw Error("Manifest index not found");
					}, t.prototype.getTotalCollections = function() {
						return this.getCollections().length;
					}, t.prototype.getTotalManifests = function() {
						return this.getManifests().length;
					}, t.prototype.getTotalItems = function() {
						return this.items.length;
					}, t.prototype.getViewingDirection = function() {
						return this.getProperty("viewingDirection") ? this.getProperty("viewingDirection") : a.ViewingDirection.LEFT_TO_RIGHT;
					}, t.prototype.getBehavior = function() {
						var e = this.getProperty("behavior");
						return Array.isArray(e) && (e = e[0]), e || null;
					}, t.prototype.getViewingHint = function() {
						return this.getProperty("viewingHint");
					}, t.prototype.getDefaultTree = function() {
						return e.prototype.getDefaultTree.call(this), this.defaultTree.data.type = o.Utils.normaliseType(o.TreeNodeType.COLLECTION), this._parseManifests(this), this._parseCollections(this), o.Utils.generateTreeNodeIds(this.defaultTree), this.defaultTree;
					}, t.prototype._parseManifests = function(e) {
						if (e.getManifests() && e.getManifests().length) for (var t = 0; t < e.getManifests().length; t++) {
							var n = e.getManifests()[t], r = n.getDefaultTree();
							r.label = n.parentLabel || n.getLabel().getValue(this.options.locale) || "manifest " + (t + 1), r.navDate = n.getNavDate(), r.data.id = n.id, r.data.type = o.Utils.normaliseType(o.TreeNodeType.MANIFEST), e.defaultTree.addNode(r);
						}
					}, t.prototype._parseCollections = function(e) {
						if (e.getCollections() && e.getCollections().length) for (var t = 0; t < e.getCollections().length; t++) {
							var n = e.getCollections()[t], r = n.getDefaultTree();
							r.label = n.parentLabel || n.getLabel().getValue(this.options.locale) || "collection " + (t + 1), r.navDate = n.getNavDate(), r.data.id = n.id, r.data.type = o.Utils.normaliseType(o.TreeNodeType.COLLECTION), e.defaultTree.addNode(r);
						}
					}, t;
				}(o.IIIFResource);
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Duration = void 0, t.Duration = function() {
					function e(e, t) {
						this.start = e, this.end = t;
					}
					return e.prototype.getLength = function() {
						return this.end - this.start;
					}, e;
				}();
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.LabelValuePair = void 0;
				var r = n(0);
				t.LabelValuePair = function() {
					function e(e) {
						this.defaultLocale = e;
					}
					return e.prototype.parse = function(e) {
						this.resource = e, this.label = r.PropertyValue.parse(this.resource.label, this.defaultLocale), this.value = r.PropertyValue.parse(this.resource.value, this.defaultLocale);
					}, e.prototype.getLabel = function(e) {
						return this.label === null ? null : (Array.isArray(e) && !e.length && (e = void 0), this.label.getValue(e || this.defaultLocale));
					}, e.prototype.setLabel = function(e) {
						this.label === null && (this.label = new r.PropertyValue([])), this.label.setValue(e, this.defaultLocale);
					}, e.prototype.getValue = function(e, t) {
						return t === void 0 && (t = "<br/>"), this.value === null ? null : (Array.isArray(e) && !e.length && (e = void 0), this.value.getValue(e || this.defaultLocale, t));
					}, e.prototype.getValues = function(e) {
						return this.value === null ? [] : (Array.isArray(e) && !e.length && (e = void 0), this.value.getValues(e || this.defaultLocale));
					}, e.prototype.setValue = function(e) {
						this.value === null && (this.value = new r.PropertyValue([])), this.value.setValue(e, this.defaultLocale);
					}, e;
				}();
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 });
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.LanguageMap = void 0, t.LanguageMap = function(e) {
					function t() {
						return e !== null && e.apply(this, arguments) || this;
					}
					return i(t, e), t.getValue = function(e, t) {
						return e.getValue(t, "<br/>");
					}, t.getValues = function(e, t) {
						return e.getValues(t);
					}, t;
				}(Array);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.PropertyValue = t.LocalizedValue = void 0;
				var a = n(3), o = function() {
					function e(e, t, n) {
						n === void 0 && (n = "none"), Array.isArray(e) && e.length === 1 ? this._value = e[0] : this._value = e, t !== "none" && t !== "@none" || (t = void 0), this._locale = t, this._defaultLocale = n;
					}
					return e.parseV2Value = function(t, n) {
						return typeof t == "string" ? new e(t, void 0, n) : t["@value"] ? new e(t["@value"], t["@language"], n) : null;
					}, Object.defineProperty(e.prototype, "value", {
						get: function() {
							return Array.isArray(this._value) ? this._value.join("<br/>") : this._value;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "locale", {
						get: function() {
							return this._locale === void 0 ? this._defaultLocale : this._locale;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.addValue = function(e) {
						Array.isArray(this._value) || (this._value = [this._value]), Array.isArray(e) ? this._value = this._value.concat(e) : this._value.push(e);
					}, e;
				}();
				t.LocalizedValue = o, t.PropertyValue = function(e) {
					function t(n, r) {
						n === void 0 && (n = []);
						var i = e.apply(this, n) || this;
						return i.__proto__ = t.prototype, i._defaultLocale = r, i;
					}
					return i(t, e), t.parse = function(e, n) {
						if (!e) return new t([], n);
						if (Array.isArray(e)) {
							var r = (i = e.map((function(e) {
								return o.parseV2Value(e, n);
							})).filter((function(e) {
								return e !== null;
							}))).reduce((function(e, t) {
								var n = t._locale;
								return n ||= "none", e[n] ? e[n].addValue(t._value) : e[n] = t, e;
							}), {});
							return new t(Object.values(r), n);
						}
						return typeof e == "string" ? new t([new o(e, void 0, n)], n) : e["@language"] || e["@value"] ? new t((i = o.parseV2Value(e)) === null ? [] : [i], n) : new t(Object.keys(e).map((function(t) {
							var r = e[t];
							if (!Array.isArray(r)) throw Error("A IIIF v3 localized property value must have an array as the value for a given language.");
							return new o(r, t, n);
						})), n);
						var i;
					}, t.prototype.getSuitableLocale = function(e) {
						for (var t = Array.from(this.values()).map((function(e) {
							return e._locale;
						})).filter((function(e) {
							return e !== void 0;
						})), n = function(e) {
							var n = t.find((function(t) {
								return t === e;
							}));
							if (n) return { value: n };
						}, r = 0, i = e; r < i.length; r++) {
							var o = n(i[r]);
							if (typeof o == "object") return o.value;
						}
						for (var s = function(e) {
							var n = t.find((function(t) {
								return a.Utils.getInexactLocale(t) === a.Utils.getInexactLocale(e);
							}));
							if (n) return { value: n };
						}, c = 0, l = e; c < l.length; c++) {
							var u = s(l[c]);
							if (typeof u == "object") return u.value;
						}
					}, t.prototype.setValue = function(e, t) {
						var n = void 0;
						if (t) {
							var r = this.getSuitableLocale([t]);
							r && (n = this.find((function(e) {
								return e._locale === r;
							})));
						} else n = this.find((function(e) {
							return e._locale === void 0;
						}));
						n ? n._value = e : this.push(new o(e, t, this._defaultLocale));
					}, t.prototype.getValue = function(e, t) {
						var n = this.getValues(e);
						return n.length === 0 ? null : t ? n.join(t) : n[0];
					}, t.prototype.getValues = function(e) {
						if (!this.length) return [];
						var t;
						if (t = e ? Array.isArray(e) ? e : [e] : [], this.length === 1 && this[0]._locale === void 0) {
							var n = this[0]._value;
							return Array.isArray(n) ? n : [n];
						}
						var r = this.getSuitableLocale(t);
						if (r) return n = this.find((function(e) {
							return e._locale === r;
						}))._value, Array.isArray(n) ? n : [n];
						if (!this.find((function(e) {
							return e._locale === void 0;
						}))) return n = this[0]._value, Array.isArray(n) ? n : [n];
						var i = this.find((function(e) {
							return e._locale === void 0;
						}));
						return i ? Array.isArray(i._value) ? i._value : [i._value] : [];
					}, t;
				}(Array);
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.CONTINUE = 100, t.SWITCHING_PROTOCOLS = 101, t.PROCESSING = 102, t.OK = 200, t.CREATED = 201, t.ACCEPTED = 202, t.NON_AUTHORITATIVE_INFORMATION = 203, t.NO_CONTENT = 204, t.RESET_CONTENT = 205, t.PARTIAL_CONTENT = 206, t.MULTI_STATUS = 207, t.MULTIPLE_CHOICES = 300, t.MOVED_PERMANENTLY = 301, t.MOVED_TEMPORARILY = 302, t.SEE_OTHER = 303, t.NOT_MODIFIED = 304, t.USE_PROXY = 305, t.TEMPORARY_REDIRECT = 307, t.BAD_REQUEST = 400, t.UNAUTHORIZED = 401, t.PAYMENT_REQUIRED = 402, t.FORBIDDEN = 403, t.NOT_FOUND = 404, t.METHOD_NOT_ALLOWED = 405, t.NOT_ACCEPTABLE = 406, t.PROXY_AUTHENTICATION_REQUIRED = 407, t.REQUEST_TIME_OUT = 408, t.CONFLICT = 409, t.GONE = 410, t.LENGTH_REQUIRED = 411, t.PRECONDITION_FAILED = 412, t.REQUEST_ENTITY_TOO_LARGE = 413, t.REQUEST_URI_TOO_LARGE = 414, t.UNSUPPORTED_MEDIA_TYPE = 415, t.REQUESTED_RANGE_NOT_SATISFIABLE = 416, t.EXPECTATION_FAILED = 417, t.IM_A_TEAPOT = 418, t.UNPROCESSABLE_ENTITY = 422, t.LOCKED = 423, t.FAILED_DEPENDENCY = 424, t.UNORDERED_COLLECTION = 425, t.UPGRADE_REQUIRED = 426, t.PRECONDITION_REQUIRED = 428, t.TOO_MANY_REQUESTS = 429, t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431, t.INTERNAL_SERVER_ERROR = 500, t.NOT_IMPLEMENTED = 501, t.BAD_GATEWAY = 502, t.SERVICE_UNAVAILABLE = 503, t.GATEWAY_TIME_OUT = 504, t.HTTP_VERSION_NOT_SUPPORTED = 505, t.VARIANT_ALSO_NEGOTIATES = 506, t.INSUFFICIENT_STORAGE = 507, t.BANDWIDTH_LIMIT_EXCEEDED = 509, t.NOT_EXTENDED = 510, t.NETWORK_AUTHENTICATION_REQUIRED = 511;
			},
			function(e, t, n) {
				e.exports = window.fetch || (window.fetch = n(6).default || n(6));
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Manifest = void 0;
				var a = n(1), o = n(0);
				t.Manifest = function(e) {
					function t(t, n) {
						var r = e.call(this, t, n) || this;
						if (r.index = 0, r._allRanges = null, r.items = [], r._topRanges = [], r.__jsonld.structures && r.__jsonld.structures.length) for (var i = r._getTopRanges(), a = 0; a < i.length; a++) {
							var o = i[a];
							r._parseRanges(o, String(a));
						}
						return r;
					}
					return i(t, e), t.prototype.getPosterCanvas = function() {
						var e = this.getProperty("posterCanvas");
						return e &&= new o.Canvas(e, this.options), e;
					}, t.prototype.getAccompanyingCanvas = function() {
						var e = this.getProperty("accompanyingCanvas");
						return e &&= new o.Canvas(e, this.options), e;
					}, t.prototype.getBehavior = function() {
						var e = this.getProperty("behavior");
						return Array.isArray(e) && (e = e[0]), e || null;
					}, t.prototype.getDefaultTree = function() {
						if (e.prototype.getDefaultTree.call(this), this.defaultTree.data.type = o.Utils.normaliseType(o.TreeNodeType.MANIFEST), !this.isLoaded) return this.defaultTree;
						var t = this.getTopRanges();
						return t.length && t[0].getTree(this.defaultTree), o.Utils.generateTreeNodeIds(this.defaultTree), this.defaultTree;
					}, t.prototype._getTopRanges = function() {
						var e = [];
						if (this.__jsonld.structures && this.__jsonld.structures.length) {
							for (var t = 0; t < this.__jsonld.structures.length; t++) {
								var n = this.__jsonld.structures[t];
								n.viewingHint === a.ViewingHint.TOP && e.push(n);
							}
							if (!e.length) {
								var r = {};
								r.ranges = this.__jsonld.structures, e.push(r);
							}
						}
						return e;
					}, t.prototype.getTopRanges = function() {
						return this._topRanges;
					}, t.prototype._getRangeById = function(e) {
						if (this.__jsonld.structures && this.__jsonld.structures.length) for (var t = 0; t < this.__jsonld.structures.length; t++) {
							var n = this.__jsonld.structures[t];
							if (n["@id"] === e || n.id === e) return n;
						}
						return null;
					}, t.prototype._parseRanges = function(e, t, n) {
						var r, i = null;
						if (typeof e == "string" && (i = e, e = this._getRangeById(i)), e) {
							(r = new o.Range(e, this.options)).parentRange = n, r.path = t, n ? n.items.push(r) : this._topRanges.push(r);
							var a = e.items || e.members;
							if (a) for (var s = 0; s < a.length; s++) {
								var c = a[s];
								if (c["@type"] && c["@type"].toLowerCase() === "sc:range" || c.type && c.type.toLowerCase() === "range") this._parseRanges(c, t + "/" + s, r);
								else if (c["@type"] && c["@type"].toLowerCase() === "sc:canvas" || c.type && c.type.toLowerCase() === "canvas") {
									r.canvases ||= [];
									var l = c.id || c["@id"];
									r.canvases.push(l);
								}
							}
							else if (e.ranges) for (s = 0; s < e.ranges.length; s++) this._parseRanges(e.ranges[s], t + "/" + s, r);
						} else console.warn("Range:", i, "does not exist");
					}, t.prototype.getAllRanges = function() {
						if (this._allRanges != null) return this._allRanges;
						this._allRanges = [];
						for (var e = this.getTopRanges(), t = function(t) {
							var r = e[t];
							r.id && n._allRanges.push(r);
							var i = function(e, t) {
								e.add(t);
								var n = t.getRanges();
								return n.length ? n.reduce(i, e) : e;
							}, a = Array.from(r.getRanges().reduce(i, /* @__PURE__ */ new Set()));
							n._allRanges = n._allRanges.concat(a);
						}, n = this, r = 0; r < e.length; r++) t(r);
						return this._allRanges;
					}, t.prototype.getRangeById = function(e) {
						for (var t = this.getAllRanges(), n = 0; n < t.length; n++) {
							var r = t[n];
							if (r.id === e) return r;
						}
						return null;
					}, t.prototype.getRangeByPath = function(e) {
						for (var t = this.getAllRanges(), n = 0; n < t.length; n++) {
							var r = t[n];
							if (r.path === e) return r;
						}
						return null;
					}, t.prototype.getSequences = function() {
						if (this.items.length) return this.items;
						var e = this.__jsonld.mediaSequences || this.__jsonld.sequences;
						if (e) for (var t = 0; t < e.length; t++) {
							var n = e[t], r = new o.Sequence(n, this.options);
							this.items.push(r);
						}
						else this.__jsonld.items && (r = new o.Sequence(this.__jsonld.items, this.options), this.items.push(r));
						return this.items;
					}, t.prototype.getSequenceByIndex = function(e) {
						return this.getSequences()[e];
					}, t.prototype.getTotalSequences = function() {
						return this.getSequences().length;
					}, t.prototype.getManifestType = function() {
						var e = this.getService(a.ServiceProfile.UI_EXTENSIONS);
						return e ? e.getProperty("manifestType") : o.ManifestType.EMPTY;
					}, t.prototype.isMultiSequence = function() {
						return this.getTotalSequences() > 1;
					}, t.prototype.isPagingEnabled = function() {
						var e = this.getViewingHint();
						if (e) return e === a.ViewingHint.PAGED;
						var t = this.getBehavior();
						return !!t && t === a.Behavior.PAGED;
					}, t.prototype.getViewingDirection = function() {
						return this.getProperty("viewingDirection");
					}, t.prototype.getViewingHint = function() {
						return this.getProperty("viewingHint");
					}, t;
				}(o.IIIFResource);
			},
			function(e, t, n) {
				var r;
				Object.defineProperty(t, "__esModule", { value: !0 }), t.ManifestType = void 0, function(e) {
					e.EMPTY = "", e.MANUSCRIPT = "manuscript", e.MONOGRAPH = "monograph";
				}(r || (t.ManifestType = r = {}));
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Range = void 0;
				var a = n(0), o = n(1);
				t.Range = function(e) {
					function t(t, n) {
						var r = e.call(this, t, n) || this;
						return r._ranges = null, r.canvases = null, r.items = [], r;
					}
					return i(t, e), t.prototype.getCanvasIds = function() {
						return this.__jsonld.canvases ? this.__jsonld.canvases : this.canvases ? this.canvases : [];
					}, t.prototype.getDuration = function() {
						if (this.canvases && this.canvases.length) {
							for (var e = [], t = [], n = 0, r = this.canvases; n < r.length; n++) if (m = r[n]) {
								var i = m.match(/(.*)#t=([0-9.]+),?([0-9.]+)?/) || [void 0, m], o = i[1], s = i[2], c = i[3];
								o && (e.push(parseFloat(s)), t.push(parseFloat(c)));
							}
							if (e.length && t.length) return new a.Duration(Math.min.apply(Math, e), Math.max.apply(Math, t));
						} else {
							e = [], t = [];
							for (var l = 0, u = g = this.getRanges(); l < u.length; l++) (_ = u[l].getDuration()) && (e.push(_.start), t.push(_.end));
							if (e.length && t.length) return new a.Duration(Math.min.apply(Math, e), Math.max.apply(Math, t));
						}
						var d, f;
						if (this.canvases && this.canvases.length) for (var p = 0; p < this.canvases.length; p++) {
							var m = this.canvases[p], h = a.Utils.getTemporalComponent(m);
							h && h.length > 1 && (p === 0 && (d = Number(h[0])), p === this.canvases.length - 1 && (f = Number(h[1])));
						}
						else {
							var g = this.getRanges();
							for (p = 0; p < g.length; p++) {
								var _;
								(_ = g[p].getDuration()) && (p === 0 && (d = _.start), p === g.length - 1 && (f = _.end));
							}
						}
						if (d !== void 0 && f !== void 0) return new a.Duration(d, f);
					}, t.prototype.getRanges = function() {
						return this._ranges ? this._ranges : this._ranges = this.items.filter((function(e) {
							return e.isRange();
						}));
					}, t.prototype.getBehavior = function() {
						var e = this.getProperty("behavior");
						return Array.isArray(e) && (e = e[0]), e || null;
					}, t.prototype.getViewingDirection = function() {
						return this.getProperty("viewingDirection");
					}, t.prototype.getViewingHint = function() {
						return this.getProperty("viewingHint");
					}, t.prototype.getTree = function(e) {
						e.data = this, this.treeNode = e;
						var t = this.getRanges();
						if (t && t.length) for (var n = 0; n < t.length; n++) {
							var r = t[n], i = new a.TreeNode();
							e.addNode(i), this._parseTreeNode(i, r);
						}
						return a.Utils.generateTreeNodeIds(e), e;
					}, t.prototype.spansTime = function(e) {
						var t = this.getDuration();
						return !!(t && e >= t.start && e <= t.end);
					}, t.prototype._parseTreeNode = function(e, t) {
						e.label = t.getLabel().getValue(this.options.locale), e.data = t, e.data.type = a.Utils.normaliseType(a.TreeNodeType.RANGE), t.treeNode = e;
						var n = t.getRanges();
						if (n && n.length) for (var r = 0; r < n.length; r++) {
							var i = n[r];
							if (i.getBehavior() !== o.Behavior.NO_NAV) {
								var s = new a.TreeNode();
								e.addNode(s), this._parseTreeNode(s, i);
							}
						}
					}, t;
				}(a.ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Rendering = void 0, t.Rendering = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getFormat = function() {
						return this.getProperty("format");
					}, t;
				}(n(0).ManifestResource);
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Sequence = void 0;
				var a = n(1), o = n(0);
				t.Sequence = function(e) {
					function t(t, n) {
						var r = e.call(this, t, n) || this;
						return r.items = [], r._thumbnails = null, r;
					}
					return i(t, e), t.prototype.getCanvases = function() {
						if (this.items.length) return this.items;
						var e = this.__jsonld.canvases || this.__jsonld.elements;
						if (e) for (var t = 0; t < e.length; t++) {
							var n = e[t];
							(r = new o.Canvas(n, this.options)).index = t, this.items.push(r);
						}
						else if (this.__jsonld) for (t = 0; t < this.__jsonld.length; t++) {
							var r;
							n = this.__jsonld[t], (r = new o.Canvas(n, this.options)).index = t, this.items.push(r);
						}
						return this.items;
					}, t.prototype.getCanvasById = function(e) {
						for (var t = 0; t < this.getTotalCanvases(); t++) {
							var n = this.getCanvasByIndex(t), r = o.Utils.normaliseUrl(n.id);
							if (o.Utils.normaliseUrl(e) === r) return n;
						}
						return null;
					}, t.prototype.getCanvasByIndex = function(e) {
						return this.getCanvases()[e];
					}, t.prototype.getCanvasIndexById = function(e) {
						for (var t = 0; t < this.getTotalCanvases(); t++) if (this.getCanvasByIndex(t).id === e) return t;
						return null;
					}, t.prototype.getCanvasIndexByLabel = function(e, t) {
						e = e.trim(), isNaN(e) || (e = parseInt(e, 10).toString(), t && (e += "r"));
						for (var n, r, i, a = /(\d*)\D+(\d*)/, o = 0; o < this.getTotalCanvases(); o++) {
							var s = this.getCanvasByIndex(o);
							if (s.getLabel().getValue(this.options.locale) === e || (n = a.exec(e)) && (r = n[1], (i = n[2]) && RegExp("^" + r + "\\D+" + i + "$").test(s.getLabel().toString()))) return o;
						}
						return -1;
					}, t.prototype.getLastCanvasLabel = function(e) {
						for (var t = this.getTotalCanvases() - 1; t >= 0; t--) {
							var n = this.getCanvasByIndex(t).getLabel().getValue(this.options.locale);
							if (e) {
								if (/^[a-zA-Z0-9]*$/.test(n)) return n;
							} else if (n) return n;
						}
						return this.options.defaultLabel;
					}, t.prototype.getLastPageIndex = function() {
						return this.getTotalCanvases() - 1;
					}, t.prototype.getNextPageIndex = function(e, t) {
						var n;
						if (t) {
							var r = this.getPagedIndices(e), i = this.getViewingDirection();
							n = i && i === a.ViewingDirection.RIGHT_TO_LEFT ? r[0] + 1 : r[r.length - 1] + 1;
						} else n = e + 1;
						return n > this.getLastPageIndex() ? -1 : n;
					}, t.prototype.getPagedIndices = function(e, t) {
						var n = [];
						if (t) {
							n = this.isFirstCanvas(e) || this.isLastCanvas(e) ? [e] : e % 2 ? [e, e + 1] : [e - 1, e];
							var r = this.getViewingDirection();
							r && r === a.ViewingDirection.RIGHT_TO_LEFT && (n = n.reverse());
						} else n.push(e);
						return n;
					}, t.prototype.getPrevPageIndex = function(e, t) {
						var n;
						if (t) {
							var r = this.getPagedIndices(e), i = this.getViewingDirection();
							n = i && i === a.ViewingDirection.RIGHT_TO_LEFT ? r[r.length - 1] - 1 : r[0] - 1;
						} else n = e - 1;
						return n;
					}, t.prototype.getStartCanvasIndex = function() {
						var e = this.getStartCanvas();
						if (e) {
							for (var t = 0; t < this.getTotalCanvases(); t++) if (this.getCanvasByIndex(t).id === e) return t;
						}
						return 0;
					}, t.prototype.getThumbs = function(e, t) {
						for (var n = [], r = this.getTotalCanvases(), i = 0; i < r; i++) {
							var a = this.getCanvasByIndex(i), s = new o.Thumb(e, a);
							n.push(s);
						}
						return n;
					}, t.prototype.getThumbnails = function() {
						if (this._thumbnails != null) return this._thumbnails;
						this._thumbnails = [];
						for (var e = this.getCanvases(), t = 0; t < e.length; t++) {
							var n = e[t].getThumbnail();
							n && this._thumbnails.push(n);
						}
						return this._thumbnails;
					}, t.prototype.getStartCanvas = function() {
						return this.getProperty("startCanvas");
					}, t.prototype.getTotalCanvases = function() {
						return this.getCanvases().length;
					}, t.prototype.getViewingDirection = function() {
						return this.getProperty("viewingDirection") ? this.getProperty("viewingDirection") : this.options.resource.getViewingDirection ? this.options.resource.getViewingDirection() : null;
					}, t.prototype.getViewingHint = function() {
						return this.getProperty("viewingHint");
					}, t.prototype.isCanvasIndexOutOfRange = function(e) {
						return e > this.getTotalCanvases() - 1;
					}, t.prototype.isFirstCanvas = function(e) {
						return e === 0;
					}, t.prototype.isLastCanvas = function(e) {
						return e === this.getTotalCanvases() - 1;
					}, t.prototype.isMultiCanvas = function() {
						return this.getTotalCanvases() > 1;
					}, t.prototype.isPagingEnabled = function() {
						var e = this.getViewingHint();
						return !!e && e === a.ViewingHint.PAGED;
					}, t.prototype.isTotalCanvasesEven = function() {
						return this.getTotalCanvases() % 2 == 0;
					}, t;
				}(o.ManifestResource);
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Deserialiser = void 0;
				var r = n(0);
				t.Deserialiser = function() {
					function e() {}
					return e.parse = function(e, t) {
						return typeof e == "string" && (e = JSON.parse(e)), this.parseJson(e, t);
					}, e.parseJson = function(e, t) {
						var n;
						if (t && t.navDate && !isNaN(t.navDate.getTime()) && (e.navDate = t.navDate.toString()), e["@type"]) switch (e["@type"]) {
							case "sc:Collection":
								n = this.parseCollection(e, t);
								break;
							case "sc:Manifest":
								n = this.parseManifest(e, t);
								break;
							default: return null;
						}
						else switch (e.type) {
							case "Collection":
								n = this.parseCollection(e, t);
								break;
							case "Manifest":
								n = this.parseManifest(e, t);
								break;
							default: return null;
						}
						return n.isLoaded = !0, n;
					}, e.parseCollection = function(e, t) {
						var n = new r.Collection(e, t);
						return t ? (n.index = t.index || 0, t.resource && (n.parentCollection = t.resource.parentCollection)) : n.index = 0, this.parseCollections(n, t), this.parseManifests(n, t), this.parseItems(n, t), n;
					}, e.parseCollections = function(e, t) {
						var n;
						if (e.__jsonld.collections ? n = e.__jsonld.collections : e.__jsonld.items && (n = e.__jsonld.items.filter((function(e) {
							return e.type.toLowerCase() === "collection";
						}))), n) for (var r = 0; r < n.length; r++) {
							t && (t.index = r);
							var i = this.parseCollection(n[r], t);
							i.index = r, i.parentCollection = e, e.items.push(i);
						}
					}, e.parseManifest = function(e, t) {
						return new r.Manifest(e, t);
					}, e.parseManifests = function(e, t) {
						var n;
						if (e.__jsonld.manifests ? n = e.__jsonld.manifests : e.__jsonld.items && (n = e.__jsonld.items.filter((function(e) {
							return e.type.toLowerCase() === "manifest";
						}))), n) for (var r = 0; r < n.length; r++) {
							var i = this.parseManifest(n[r], t);
							i.index = r, i.parentCollection = e, e.items.push(i);
						}
					}, e.parseItem = function(e, t) {
						if (e["@type"]) {
							if (e["@type"].toLowerCase() === "sc:manifest") return this.parseManifest(e, t);
							if (e["@type"].toLowerCase() === "sc:collection") return this.parseCollection(e, t);
						} else if (e.type) {
							if (e.type.toLowerCase() === "manifest") return this.parseManifest(e, t);
							if (e.type.toLowerCase() === "collection") return this.parseCollection(e, t);
						}
						return null;
					}, e.parseItems = function(e, t) {
						var n = e.__jsonld.members || e.__jsonld.items;
						if (n) for (var r = function(r) {
							t && (t.index = r);
							var a = i.parseItem(n[r], t);
							return a ? e.items.filter((function(e) {
								return e.id === a.id;
							}))[0] ? "continue" : (a.index = r, a.parentCollection = e, void e.items.push(a)) : { value: void 0 };
						}, i = this, a = 0; a < n.length; a++) {
							var o = r(a);
							if (typeof o == "object") return o.value;
						}
					}, e;
				}();
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Service = void 0;
				var a = n(0);
				t.Service = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t.prototype.getProfile = function() {
						var e = this.getProperty("profile");
						return e ||= this.getProperty("dcterms:conformsTo"), Array.isArray(e) ? e[0] : e;
					}, t.prototype.getConfirmLabel = function() {
						return a.Utils.getLocalisedValue(this.getProperty("confirmLabel"), this.options.locale);
					}, t.prototype.getDescription = function() {
						return a.Utils.getLocalisedValue(this.getProperty("description"), this.options.locale);
					}, t.prototype.getFailureDescription = function() {
						return a.Utils.getLocalisedValue(this.getProperty("failureDescription"), this.options.locale);
					}, t.prototype.getFailureHeader = function() {
						return a.Utils.getLocalisedValue(this.getProperty("failureHeader"), this.options.locale);
					}, t.prototype.getHeader = function() {
						return a.Utils.getLocalisedValue(this.getProperty("header"), this.options.locale);
					}, t.prototype.getServiceLabel = function() {
						return a.Utils.getLocalisedValue(this.getProperty("label"), this.options.locale);
					}, t.prototype.getInfoUri = function() {
						var e = this.id;
						return e.endsWith("/") || (e += "/"), e += "info.json";
					}, t;
				}(a.ManifestResource);
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Size = void 0, t.Size = function(e, t) {
					this.width = e, this.height = t;
				};
			},
			function(e, t, n) {
				var r;
				Object.defineProperty(t, "__esModule", { value: !0 }), t.StatusCode = void 0, function(e) {
					e[e.AUTHORIZATION_FAILED = 1] = "AUTHORIZATION_FAILED", e[e.FORBIDDEN = 2] = "FORBIDDEN", e[e.INTERNAL_SERVER_ERROR = 3] = "INTERNAL_SERVER_ERROR", e[e.RESTRICTED = 4] = "RESTRICTED";
				}(r || (t.StatusCode = r = {}));
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Thumb = void 0, t.Thumb = function(e, t) {
					this.data = t, this.index = t.index, this.width = e;
					var n = t.getHeight() / t.getWidth();
					this.height = n ? Math.floor(this.width * n) : e, this.uri = t.getCanonicalImageUri(e), this.label = t.getLabel().getValue(), this.viewingHint = t.getViewingHint();
				};
			},
			function(e, t, n) {
				var r, i = this && this.__extends || (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Thumbnail = void 0, t.Thumbnail = function(e) {
					function t(t, n) {
						return e.call(this, t, n) || this;
					}
					return i(t, e), t;
				}(n(0).Resource);
			},
			function(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.TreeNode = void 0;
				var r = n(0);
				t.TreeNode = function() {
					function e(e, t) {
						this.label = e, this.data = t || {}, this.nodes = [];
					}
					return e.prototype.addNode = function(e) {
						this.nodes.push(e), e.parentNode = this;
					}, e.prototype.isCollection = function() {
						return this.data.type === r.Utils.normaliseType(r.TreeNodeType.COLLECTION);
					}, e.prototype.isManifest = function() {
						return this.data.type === r.Utils.normaliseType(r.TreeNodeType.MANIFEST);
					}, e.prototype.isRange = function() {
						return this.data.type === r.Utils.normaliseType(r.TreeNodeType.RANGE);
					}, e;
				}();
			},
			function(e, t, n) {
				var r;
				Object.defineProperty(t, "__esModule", { value: !0 }), t.TreeNodeType = void 0, function(e) {
					e.COLLECTION = "collection", e.MANIFEST = "manifest", e.RANGE = "range";
				}(r || (t.TreeNodeType = r = {}));
			}
		]);
	}));
})), Dh = /* @__PURE__ */ n(Th()), Oh = Eh();
function kh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ah(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Mh(r.key), r);
	}
}
function jh(e, t, n) {
	return t && Ah(e.prototype, t), n && Ah(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mh(e) {
	var t = Nh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Nh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Ph = /*#__PURE__*/ function() {
	function e(t) {
		kh(this, e), this.canvas = t;
	}
	return jh(e, [
		{
			key: "id",
			get: function() {
				return this.canvas.id;
			}
		},
		{
			key: "getWidth",
			value: function() {
				return this.canvas.getWidth();
			}
		},
		{
			key: "getHeight",
			value: function() {
				return this.canvas.getHeight();
			}
		},
		{
			key: "aspectRatio",
			get: function() {
				return this.canvas.getWidth() / this.canvas.getHeight();
			}
		},
		{
			key: "annotationListUris",
			get: function() {
				return (0, Q.default)(Array(this.canvas.__jsonld.otherContent)).filter(function(e) {
					return e && (typeof e == "string" || e["@type"] === "sc:AnnotationList");
				}).map(function(e) {
					return typeof e == "string" ? e : e["@id"];
				});
			}
		},
		{
			key: "canvasAnnotationPages",
			get: function() {
				return (0, Q.default)(Array(this.canvas.__jsonld.annotations)).filter(function(e) {
					return e && e.type === "AnnotationPage";
				});
			}
		},
		{
			key: "imageResource",
			get: function() {
				return this.imageResources[0];
			}
		},
		{
			key: "imageResources",
			get: function() {
				var e = this;
				return (0, Q.default)((0, Dh.default)([this.canvas.getImages().map(function(e) {
					return e.getResource();
				}), this.canvas.getContent().map(function(e) {
					return e.getBody();
				})]).map(function(t) {
					switch (t.getProperty("type")) {
						case "oa:Choice": return new Oh.Canvas({ images: (0, Q.default)([t.getProperty("default"), t.getProperty("item")]).map(function(e) {
							return { resource: e };
						}) }, e.canvas.options).getImages().map(function(e) {
							return e.getResource();
						});
						default: return t;
					}
				}));
			}
		},
		{
			key: "videoResources",
			get: function() {
				return (0, Q.default)((0, Dh.default)([this.canvas.getContent().map(function(e) {
					return e.getBody();
				})]).filter(function(e) {
					return e.getProperty("type") === "Video";
				}));
			}
		},
		{
			key: "audioResources",
			get: function() {
				return (0, Q.default)((0, Dh.default)([this.canvas.getContent().map(function(e) {
					return e.getBody();
				})]).filter(function(e) {
					return e.getProperty("type") === "Sound";
				}));
			}
		},
		{
			key: "vttContent",
			get: function() {
				return (0, Q.default)((0, Dh.default)([this.canvas.getContent().map(function(e) {
					return e.getBody();
				})]).filter(function(e) {
					return e.getProperty("format") === "text/vtt";
				}));
			}
		},
		{
			key: "resourceAnnotations",
			get: function() {
				return (0, Dh.default)([this.canvas.getImages(), this.canvas.getContent()]);
			}
		},
		{
			key: "resourceAnnotation",
			value: function(e) {
				return this.resourceAnnotations.find(function(t) {
					return t.getResource().id === e || (0, Q.default)(Array(t.getBody())).some(function(t) {
						return t.id === e;
					});
				});
			}
		},
		{
			key: "onFragment",
			value: function(e) {
				var t = this.resourceAnnotation(e);
				if (t) {
					var n = t.getProperty("on"), r = t.getProperty("target"), i = (n || r).match(/xywh=(.*)$/);
					if (i) return i[1].split(",").map(function(e) {
						return parseInt(e, 10);
					});
				}
			}
		},
		{
			key: "iiifImageResources",
			get: function() {
				return this.imageResources.filter(function(e) {
					return e && e.getServices()[0] && e.getServices()[0].id;
				});
			}
		},
		{
			key: "imageServiceIds",
			get: function() {
				return this.iiifImageResources.map(function(e) {
					return e.getServices()[0].id;
				});
			}
		},
		{
			key: "service",
			get: function() {
				return this.canvas.__jsonld.service;
			}
		},
		{
			key: "getLabel",
			value: function() {
				return this.canvas.getLabel().length > 0 ? this.canvas.getLabel().getValue() : String(this.canvas.index + 1);
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/getters.js
function Fh(e) {
	return Object.values($(e).windows).map(function(e) {
		return e.manifestId;
	});
}
function Ih(e) {
	return $(e).windows || {};
}
function Lh(e, t) {
	var n = t.windowId;
	return Ih(e)[n];
}
var Rh = Z([function(e) {
	return $(e).viewers;
}, function(e, t) {
	return t.windowId;
}], function(e, t) {
	return e[t];
});
function zh(e) {
	return $(e).workspace;
}
var Bh = Z([zh], function(e) {
	return e.windowIds || [];
});
function Vh(e) {
	return $(e).manifests || {};
}
function Hh(e, t) {
	var n = t.manifestId, r = t.windowId, i = Vh(e);
	return i && i[n || r && (Lh(e, { windowId: r }) || {}).manifestId];
}
function Uh(e) {
	return $(e).catalog || {};
}
//#endregion
//#region node_modules/mirador/dist/es/src/lib/MiradorManifest.js
var Wh = /* @__PURE__ */ n((/* @__PURE__ */ i(((t, n) => {
	(function(r, i) {
		typeof t == "object" && n !== void 0 ? i(t, (jp(), e(Dp))) : typeof define == "function" && define.amd ? define(["exports", "reselect"], i) : (r = typeof globalThis < "u" ? globalThis : r || self, i(r["Re-reselect"] = {}, r.Reselect));
	})(t, (function(e, t) {
		function n(e) {
			return typeof e == "string" || typeof e == "number";
		}
		var r = /*#__PURE__*/ function() {
			function e() {
				this._cache = {};
			}
			var t = e.prototype;
			return t.set = function(e, t) {
				this._cache[e] = t;
			}, t.get = function(e) {
				return this._cache[e];
			}, t.remove = function(e) {
				delete this._cache[e];
			}, t.clear = function() {
				this._cache = {};
			}, t.isValidCacheKey = function(e) {
				return n(e);
			}, e;
		}(), i = r, a = function() {
			return !0;
		};
		function o() {
			var e = [...arguments];
			return function(n, r) {
				if (r) throw Error("[re-reselect] \"options\" as second argument is not supported anymore. Please provide an option object as single argument.");
				var o = typeof n == "function" ? { keySelector: n } : Object.assign({}, n), s = 0, c = e.pop(), l = Array.isArray(e[0]) ? e[0] : [].concat(e);
				e.push(function() {
					return s++, c.apply(void 0, arguments);
				});
				var u = o.cacheObject || new i(), d = o.selectorCreator || t.createSelector, f = u.isValidCacheKey || a;
				o.keySelectorCreator && (o.keySelector = o.keySelectorCreator({
					keySelector: o.keySelector,
					inputSelectors: l,
					resultFunc: c
				}));
				var p = function() {
					var t = o.keySelector.apply(o, arguments);
					if (f(t)) {
						var n = u.get(t);
						return n === void 0 && (n = d.apply(void 0, e), u.set(t, n)), n.apply(void 0, arguments);
					}
					console.warn("[re-reselect] Invalid cache key \"" + t + "\" has been returned by keySelector function.");
				};
				return p.getMatchingSelector = function() {
					var e = o.keySelector.apply(o, arguments);
					return u.get(e);
				}, p.removeMatchingSelector = function() {
					var e = o.keySelector.apply(o, arguments);
					u.remove(e);
				}, p.clearCache = function() {
					u.clear();
				}, p.resultFunc = c, p.dependencies = l, p.cache = u, p.recomputations = function() {
					return s;
				}, p.resetRecomputations = function() {
					return s = 0;
				}, p.keySelector = o.keySelector, p;
			};
		}
		function s(e) {
			return t.createStructuredSelector(e, o);
		}
		function c(e) {
			if (e === void 0) throw Error("Missing the required property \"cacheSize\".");
			if (!Number.isInteger(e) || e <= 0) throw Error("The \"cacheSize\" property must be a positive integer value.");
		}
		var l = /*#__PURE__*/ function() {
			function e(e) {
				var t = (e === void 0 ? {} : e).cacheSize;
				c(t), this._cache = {}, this._cacheOrdering = [], this._cacheSize = t;
			}
			var t = e.prototype;
			return t.set = function(e, t) {
				if (this._cache[e] = t, this._cacheOrdering.push(e), this._cacheOrdering.length > this._cacheSize) {
					var n = this._cacheOrdering[0];
					this.remove(n);
				}
			}, t.get = function(e) {
				return this._cache[e];
			}, t.remove = function(e) {
				var t = this._cacheOrdering.indexOf(e);
				t > -1 && this._cacheOrdering.splice(t, 1), delete this._cache[e];
			}, t.clear = function() {
				this._cache = {}, this._cacheOrdering = [];
			}, t.isValidCacheKey = function(e) {
				return n(e);
			}, e;
		}(), u = /*#__PURE__*/ function() {
			function e(e) {
				var t = (e === void 0 ? {} : e).cacheSize;
				c(t), this._cache = {}, this._cacheOrdering = [], this._cacheSize = t;
			}
			var t = e.prototype;
			return t.set = function(e, t) {
				if (this._cache[e] = t, this._registerCacheHit(e), this._cacheOrdering.length > this._cacheSize) {
					var n = this._cacheOrdering[0];
					this.remove(n);
				}
			}, t.get = function(e) {
				return this._registerCacheHit(e), this._cache[e];
			}, t.remove = function(e) {
				this._deleteCacheHit(e), delete this._cache[e];
			}, t.clear = function() {
				this._cache = {}, this._cacheOrdering = [];
			}, t._registerCacheHit = function(e) {
				this._deleteCacheHit(e), this._cacheOrdering.push(e);
			}, t._deleteCacheHit = function(e) {
				var t = this._cacheOrdering.indexOf(e);
				t > -1 && this._cacheOrdering.splice(t, 1);
			}, t.isValidCacheKey = function(e) {
				return n(e);
			}, e;
		}(), d = /*#__PURE__*/ function() {
			function e() {
				this._cache = /* @__PURE__ */ new Map();
			}
			var t = e.prototype;
			return t.set = function(e, t) {
				this._cache.set(e, t);
			}, t.get = function(e) {
				return this._cache.get(e);
			}, t.remove = function(e) {
				this._cache.delete(e);
			}, t.clear = function() {
				this._cache.clear();
			}, e;
		}(), f = /*#__PURE__*/ function() {
			function e(e) {
				var t = (e === void 0 ? {} : e).cacheSize;
				c(t), this._cache = /* @__PURE__ */ new Map(), this._cacheSize = t;
			}
			var t = e.prototype;
			return t.set = function(e, t) {
				if (this._cache.set(e, t), this._cache.size > this._cacheSize) {
					var n = this._cache.keys().next().value;
					this.remove(n);
				}
			}, t.get = function(e) {
				return this._cache.get(e);
			}, t.remove = function(e) {
				this._cache.delete(e);
			}, t.clear = function() {
				this._cache.clear();
			}, e;
		}(), p = /*#__PURE__*/ function() {
			function e(e) {
				var t = (e === void 0 ? {} : e).cacheSize;
				c(t), this._cache = /* @__PURE__ */ new Map(), this._cacheSize = t;
			}
			var t = e.prototype;
			return t.set = function(e, t) {
				if (this._cache.set(e, t), this._cache.size > this._cacheSize) {
					var n = this._cache.keys().next().value;
					this.remove(n);
				}
			}, t.get = function(e) {
				var t = this._cache.get(e);
				return this._cache.has(e) && (this.remove(e), this._cache.set(e, t)), t;
			}, t.remove = function(e) {
				this._cache.delete(e);
			}, t.clear = function() {
				this._cache.clear();
			}, e;
		}();
		e.FifoMapCache = f, e.FifoObjectCache = l, e.FlatMapCache = d, e.FlatObjectCache = r, e.LruMapCache = p, e.LruObjectCache = u, e.createCachedSelector = o, e.createStructuredCachedSelector = s, e.default = o, Object.defineProperty(e, "__esModule", { value: !0 });
	}));
})))());
function Gh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Kh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Jh(r.key), r);
	}
}
function qh(e, t, n) {
	return t && Kh(e.prototype, t), n && Kh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jh(e) {
	var t = Yh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Yh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Xh = /*#__PURE__*/ function() {
	function e(t) {
		Gh(this, e), this.manifest = t;
	}
	return qh(e, [{
		key: "startCanvas",
		get: function() {
			var e, t = this.manifest.getSequences()[0];
			if (t) {
				if (e = t.getProperty("startCanvas"), !e) {
					var n = this.manifest.getProperty("start") || t.getProperty("start");
					e = n && (n.id || n.source);
				}
				return e && t.getCanvasById(e) || void 0;
			}
		}
	}, {
		key: "canvasAt",
		value: function(e) {
			var t = this.manifest.getSequences()[0], n = t && t.getCanvases();
			return n && n[e];
		}
	}]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/asArray.js
function Zh(e) {
	return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
//#endregion
//#region node_modules/mirador/dist/es/src/lib/ThumbnailFactory.js
function Qh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $h(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, tg(r.key), r);
	}
}
function eg(e, t, n) {
	return t && $h(e.prototype, t), n && $h(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tg(e) {
	var t = ng(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ng(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function rg(e) {
	var t = e.getProfile();
	return t.endsWith("#level1") || t.endsWith("#level2") ? !1 : t === "level0" ? !0 : Oh.Utils.isLevel0ImageProfile(t);
}
function ig(e) {
	var t = e.getProfile();
	return t.endsWith("#level0") || t.endsWith("#level1") ? !1 : t === "level2" ? !0 : Oh.Utils.isLevel2ImageProfile(t);
}
function ag(e) {
	return Zh(e.getProperty("type") || []).some(function(e) {
		return e.startsWith("ImageService");
	});
}
function og(e) {
	var t = e && e.getServices().find(function(e) {
		return ag(e) || Oh.Utils.isImageProfile(e.getProfile());
	});
	if (t) return t;
}
var sg = /*#__PURE__*/ function() {
	function e(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		Qh(this, e), this.resource = t, this.iiifOpts = n;
	}
	return eg(e, [
		{
			key: "iiifThumbnailUrl",
			value: function(t) {
				var n, r, i, a = 120, o = a, s = a, c = this.iiifOpts, l = c.maxHeight, u = c.maxWidth;
				l && (o = Math.max(l, a)), u && (s = Math.max(u, a));
				var d = og(t);
				if (!d) return e.staticImageUrl(t);
				var f = t.getWidth() && t.getHeight() && t.getWidth() / t.getHeight(), p = u && l ? u * l : o * s, m = e.selectBestImageSize(d, p);
				if (m) r = m.width, i = m.height, n = `${r},${i}`;
				else if (rg(d)) {
					if (!d.getProperty("height") && !d.getProperty("width")) return e.staticImageUrl(t);
				} else l && u ? ig(d) ? (n = `!${s},${o}`, r = s, i = o, f && f > 1 && (i = Math.round(s / f)), f && f < 1 && (r = Math.round(o * f))) : s / o < f ? (n = `${s},`, r = s, f && (i = Math.round(s / f))) : (n = `,${o}`, i = o, f && (r = Math.round(o * f))) : l && !u ? (n = `,${o}`, i = o, f && (r = Math.round(o * f))) : !l && u ? (n = `${s},`, r = s, f && (i = Math.round(s / f))) : (n = `,${a}`, i = a, f && (r = Math.round(i * f)));
				var h = "full", g = Oh.Utils.getImageQuality(d.getProfile()), _ = d.id.replace(/\/+$/, ""), v = this.getFormat(d);
				return {
					height: i,
					url: [
						_,
						h,
						n,
						0,
						`${g}.${v}`
					].join("/"),
					width: r
				};
			}
		},
		{
			key: "getFormat",
			value: function(e) {
				var t = this.iiifOpts.preferredFormats, n = t === void 0 ? [] : t, r = e.getProperty("preferredFormats");
				if (!r) return "jpg";
				var i = r.filter(function(e) {
					return n.includes(e);
				});
				return i[0] ? i[0] : !r.includes("jpg") && n.includes("jpg") ? "jpg" : r[0] ? r[0] : "jpg";
			}
		},
		{
			key: "getSourceContentResource",
			value: function(t) {
				var n = t.getThumbnail();
				if (n) return typeof n.__jsonld == "string" ? n.__jsonld : !t.isCollection() && !t.isManifest() && !t.isCanvas() && t.getType() === "image" && og(t) && !og(n) ? t : n;
				if (t.isCollection()) {
					var r = t.getManifests()[0];
					return r ? this.getSourceContentResource(r) : void 0;
				}
				if (t.isManifest()) {
					var i = new Xh(t), a = i.startCanvas || i.canvasAt(0);
					return a ? this.getSourceContentResource(a) : void 0;
				}
				if (t.isCanvas()) {
					var o = e.getPreferredImage(t);
					return o ? this.getSourceContentResource(o) : void 0;
				}
				if (t.getType() === "image") return t;
			}
		},
		{
			key: "get",
			value: function() {
				if (this.resource) {
					var e = this.getSourceContentResource(this.resource);
					if (e) return typeof e == "string" ? { url: e } : this.iiifThumbnailUrl(e);
				}
			}
		}
	], [
		{
			key: "staticImageUrl",
			value: function(e) {
				return {
					height: e.getProperty("height"),
					url: e.id,
					width: e.getProperty("width")
				};
			}
		},
		{
			key: "getPreferredImage",
			value: function(e) {
				var t = new Ph(e);
				return t.iiifImageResources[0] || t.imageResource;
			}
		},
		{
			key: "selectBestImageSize",
			value: function(e, t) {
				var n = Zh(e.getProperty("sizes")), r = {
					default: !0,
					height: e.getProperty("height") || 2 ** 53 - 1,
					width: e.getProperty("width") || 2 ** 53 - 1
				}, i = function(e) {
					return e.width * e.height - t;
				};
				if (r = n.reduce(function(e, t) {
					var n = i(t);
					return n < 0 ? e : Math.abs(n) < Math.abs(i(e)) ? t : e;
				}, r), r.width * r.height > t * 6 && (r = n.reduce(function(e, t) {
					return Math.abs(i(t)) < Math.abs(i(e)) ? t : e;
				}, r)), !r.default) return r;
			}
		}
	]);
}();
function cg(e, t) {
	return new sg(e, t).get();
}
//#endregion
//#region node_modules/lodash/_arrayAggregator.js
var lg = /* @__PURE__ */ i(((e, t) => {
	function n(e, t, n, r) {
		for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
			var o = e[i];
			t(r, o, n(o), e);
		}
		return r;
	}
	t.exports = n;
})), ug = /* @__PURE__ */ i(((e, t) => {
	var n = Bp();
	function r(e, t, r, i) {
		return n(e, function(e, n, a) {
			t(i, e, r(e), a);
		}), i;
	}
	t.exports = r;
})), dg = /* @__PURE__ */ i(((e, t) => {
	var n = lg(), r = ug(), i = Tm(), a = Ve();
	function o(e, t) {
		return function(o, s) {
			var c = a(o) ? n : r, l = t ? t() : {};
			return c(o, e, i(s, 2), l);
		};
	}
	t.exports = o;
})), fg = /* @__PURE__ */ i(((e, t) => {
	var n = zt(), r = dg(), i = Object.prototype.hasOwnProperty;
	t.exports = r(function(e, t, r) {
		i.call(e, r) ? e[r].push(t) : n(e, r, [t]);
	});
}));
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/companionWindows.js
jp();
var pg = /* @__PURE__ */ n(fg());
function mg(e) {
	return vg(e) || _g(e) || gg(e) || hg();
}
function hg() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function gg(e, t) {
	if (e) {
		if (typeof e == "string") return yg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yg(e, t) : void 0;
	}
}
function _g(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vg(e) {
	if (Array.isArray(e)) return yg(e);
}
function yg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function bg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bg(Object(n), !0).forEach(function(t) {
			Sg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Sg(e, t, n) {
	return (t = Cg(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Cg(e) {
	var t = wg(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function wg(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Tg(e) {
	return $(e).companionWindows || {};
}
var Eg = Z([Tg, function(e, t) {
	return t.companionWindowId;
}], function(e, t) {
	return t && e[t];
}), Dg = Z([Lh, Tg], function(e, t) {
	return e && t[e.thumbnailNavigationId] && t[e.thumbnailNavigationId].position;
}), Og = Z([Ih, Tg], function(e, t) {
	return (Object.keys(e) || []).reduce(function(n, r) {
		return xg(xg({}, n), {}, Sg({}, r, (0, pg.default)(e[r].companionWindowIds, function(e) {
			return t[e] && t[e].position;
		})));
	}, {});
}), kg = Z([function(e, t) {
	return t.windowId;
}, Z([Ih, Tg], function(e, t) {
	return (Object.keys(e) || []).reduce(function(n, r) {
		return xg(xg({}, n), {}, Sg({}, r, (0, pg.default)(e[r].companionWindowIds.map(function(e) {
			return t[e];
		}), function(e) {
			return e.position;
		})));
	}, {});
})], function(e, t) {
	return t[e] || {};
}), Ag = Z([function(e, t) {
	return t.windowId;
}, Og], function(e, t) {
	return t[e] || {};
}), jg = Z([kg, function(e, t) {
	return { position: t.position };
}], function(e, t) {
	return e[t.position] || Ng;
}), Mg = Z([kg, function(e, t) {
	return { content: t.content };
}], function(e, t) {
	var n, r = t.content;
	return (n = []).concat.apply(n, mg(Object.values(e))).filter(function(e) {
		return e.content === r;
	});
}), Ng = [], Pg = Z([Ag, function(e, t) {
	return { position: t.position };
}], function(e, t) {
	return e[t.position] || Ng;
}), Fg = Z([function(e, t) {
	return t.position;
}, Lh], function(e, t) {
	if (!t) return !1;
	var n = t.companionAreaOpen, r = t.sideBarOpen;
	return e === "left" ? !!(n && r) : !0;
}), Ig = Z([kg], function(e) {
	var t, n = 0, r = 0;
	return (t = []).concat.apply(t, mg(Object.values(e))).forEach(function(e) {
		e.position.match(/right/) && (n += 235), e.position.match(/bottom/) && (r += 201);
	}), {
		height: r,
		width: n
	};
}), Lg = /* @__PURE__ */ i(((e, t) => {
	var n = function(e) {
		return r(e) && !i(e);
	};
	function r(e) {
		return !!e && typeof e == "object";
	}
	function i(e) {
		var t = Object.prototype.toString.call(e);
		return t === "[object RegExp]" || t === "[object Date]" || o(e);
	}
	var a = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	function o(e) {
		return e.$$typeof === a;
	}
	function s(e) {
		return Array.isArray(e) ? [] : {};
	}
	function c(e, t) {
		return t.clone !== !1 && t.isMergeableObject(e) ? g(s(e), e, t) : e;
	}
	function l(e, t, n) {
		return e.concat(t).map(function(e) {
			return c(e, n);
		});
	}
	function u(e, t) {
		if (!t.customMerge) return g;
		var n = t.customMerge(e);
		return typeof n == "function" ? n : g;
	}
	function d(e) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
			return Object.propertyIsEnumerable.call(e, t);
		}) : [];
	}
	function f(e) {
		return Object.keys(e).concat(d(e));
	}
	function p(e, t) {
		try {
			return t in e;
		} catch {
			return !1;
		}
	}
	function m(e, t) {
		return p(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
	}
	function h(e, t, n) {
		var r = {};
		return n.isMergeableObject(e) && f(e).forEach(function(t) {
			r[t] = c(e[t], n);
		}), f(t).forEach(function(i) {
			m(e, i) || (p(e, i) && n.isMergeableObject(t[i]) ? r[i] = u(i, n)(e[i], t[i], n) : r[i] = c(t[i], n));
		}), r;
	}
	function g(e, t, r) {
		r ||= {}, r.arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || n, r.cloneUnlessOtherwiseSpecified = c;
		var i = Array.isArray(t);
		return i === Array.isArray(e) ? i ? r.arrayMerge(e, t, r) : h(e, t, r) : c(t, r);
	}
	g.all = function(e, t) {
		if (!Array.isArray(e)) throw Error("first argument should be an array");
		return e.reduce(function(e, n) {
			return g(e, n, t);
		}, {});
	}, t.exports = g;
}));
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/config.js
jp();
var Rg = /* @__PURE__ */ n(Lg());
function zg(e, t) {
	return Wg(e) || Ug(e, t) || Vg(e, t) || Bg();
}
function Bg() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Vg(e, t) {
	if (e) {
		if (typeof e == "string") return Hg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hg(e, t) : void 0;
	}
}
function Hg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Ug(e, t) {
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
function Wg(e) {
	if (Array.isArray(e)) return e;
}
function Gg(e) {
	return $(e || {}).config || {};
}
function Kg(e) {
	var t = Gg(e).export;
	return Object.entries(t).reduce(function(t, n) {
		var r = zg(n, 2), i = r[0], a = r[1];
		return a === !0 ? t[i] = e[i] : a.filter && (t[i] = Object.entries(e[i]).filter(a.filter).reduce(function(e, t) {
			var n = zg(t, 2), r = n[0];
			return e[r] = n[1], e;
		}, {})), t;
	}, {});
}
var qg = Z([Gg], function(e) {
	var t = e.availableLanguages, n = e.language;
	return Object.keys(t).map(function(e) {
		return {
			current: e === n,
			label: t[e],
			locale: e
		};
	});
}), Jg = Z([zh, Gg], function(e, t) {
	return e.showZoomControls === void 0 ? t.workspace.showZoomControls : e.showZoomControls;
}), Yg = Z([Gg], function(e) {
	var t = e.theme, n = e.themes, r = e.selectedTheme;
	return (0, Rg.default)(t, n[r] || {});
}), Xg = Z([Gg], function(e) {
	var t = e.themes;
	return Object.keys(t);
}), Zg = Z([Gg], function(e) {
	return e.id;
}), Qg = Z([Gg], function(e) {
	return e.theme.direction || "ltr";
}), $g = Z([Gg], function(e) {
	return e.requests || {};
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/manifests.js
jp();
function e_(e) {
	return i_(e) || r_(e) || n_(e) || t_();
}
function t_() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n_(e, t) {
	if (e) {
		if (typeof e == "string") return a_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a_(e, t) : void 0;
	}
}
function r_(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function i_(e) {
	if (Array.isArray(e)) return a_(e);
}
function a_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function o_(e, t) {
	if (e) {
		var n = Oh.Utils.parseManifest(e, t ? { locale: t } : void 0);
		return typeof n.getSequences != "function" && (n.getSequences = function() {
			return [];
		}), n;
	}
}
var s_ = Z([Eg, Gg], function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return e.locale || t.language;
}), c_ = Z([Hh], function(e) {
	return e || { missing: !0 };
}), l_ = Z([Hh], function(e) {
	return e && e.error;
}), u_ = (0, Wh.default)(Hh, s_, function(e, t) {
	return e && o_(e.json, t);
})(function(e, t) {
	var n = t.companionWindowId;
	return [
		t.manifestId,
		t.windowId,
		s_(e, { companionWindowId: n })
	].join(" - ");
}), d_ = Z(u_, function(e, t) {
	return t.json;
}, s_, function(e, t, n) {
	return t && o_(t, n) || e;
}), f_ = Z([d_], function(e) {
	return e && e.options && e.options.locale && e.options.locale.replace(/-.*$/, "");
});
function p_(e) {
	return Z([d_], function(t) {
		return t && t.getProperty(e);
	});
}
var m_ = Z([d_], function(e) {
	return e && e.getLogo();
}), h_ = Z([p_("provider"), f_], function(e, t) {
	return e && e[0].label && Oh.PropertyValue.parse(e[0].label, t).getValue();
}), g_ = Z([p_("homepage"), f_], function(e, t) {
	return e && Zh(e).map(function(e) {
		return {
			label: Oh.PropertyValue.parse(e.label, t).getValue(),
			value: e.id || e["@id"]
		};
	});
}), __ = Z([d_], function(e) {
	return e && e.getRenderings().map(function(e) {
		return {
			label: e.getLabel().getValue(),
			value: e.id
		};
	});
}), v_ = Z([p_("seeAlso"), f_], function(e, t) {
	return e && Zh(e).map(function(e) {
		return {
			format: e.format,
			label: Oh.PropertyValue.parse(e.label, t).getValue(),
			value: e.id || e["@id"]
		};
	});
}), y_ = Z([d_], function(e) {
	return e && Zh(e.getRequiredStatement()).filter(function(e) {
		return e.getValues().some(function(e) {
			return e;
		});
	}).map(function(e) {
		return {
			label: e.label && e.label.getValue() || null,
			values: e.getValues()
		};
	});
}), b_ = Z([
	p_("rights"),
	p_("license"),
	f_
], function(e, t, n) {
	var r = e || t;
	return Zh(Oh.PropertyValue.parse(r, n).getValues());
});
function x_(e, t) {
	var n = d_(e, t), r = Gg(e).thumbnails, i = r === void 0 ? {} : r;
	if (n) {
		var a = cg(n, {
			maxHeight: 80,
			maxWidth: 120,
			preferredFormats: i.preferredFormats
		});
		return a && a.url;
	}
}
var S_ = Z([d_], function(e) {
	return e && e.getLabel().getValue();
}), C_ = Z([d_], function(e) {
	return e && e.getDescription().getValue();
}), w_ = Z([d_], function(e) {
	return e && e.id;
});
function T_(e) {
	return e && e.getMetadata().map(function(e) {
		return {
			label: e.getLabel(),
			values: e.getValues()
		};
	});
}
var E_ = Z([d_], function(e) {
	return e && T_(e);
});
function D_(e) {
	var t = [];
	return Array.isArray(e) ? t.push.apply(t, e_(e.filter(function(e) {
		return typeof e == "object" && e["@language"];
	}).map(function(e) {
		return e["@language"];
	}))) : e && typeof e == "object" && e["@language"] && t.push(e["@language"]), t;
}
function O_(e) {
	if (!e) return [];
	for (var t = e.getProperty("metadata") || [], n = {}, r = 0; r < t.length; r += 1) {
		var i = t[r];
		D_(i.label).forEach(function(e) {
			n[e] = !0;
		}), D_(i.value).forEach(function(e) {
			n[e] = !0;
		});
	}
	return Object.keys(n);
}
var k_ = Z([d_], function(e) {
	return O_(e);
}), A_ = Z([d_], function(e) {
	return e && (e.getService("http://iiif.io/api/search/0/search") || e.getService("http://iiif.io/api/search/1/search")) || null;
}), j_ = Z([A_], function(e) {
	var t = e && (e.getService("http://iiif.io/api/search/0/autocomplete") || e.getService("http://iiif.io/api/search/1/autocomplete"));
	return t && t;
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/sequences.js
jp();
var M_ = Z([d_], function(e) {
	if (!e || !e.getTopRanges) return null;
	var t = e.getTopRanges(), n = t.filter(function(e) {
		return e.getProperty("viewingHint") === "top";
	}), r = [];
	return n.length === 0 && t.length === 1 && (r = t[0].getRanges().filter(function(e) {
		return e.getBehavior() === "sequence";
	})), [].concat(e.getSequences(), r);
}), N_ = Z([
	M_,
	Lh,
	function(e, t) {
		return t.sequenceId;
	}
], function(e, t, n) {
	if (!e) return null;
	if (n || t && t.sequenceId) {
		var r = e.find(function(e) {
			return e.id === (n || t.sequenceId);
		});
		if (r) return r;
	}
	return e[0];
}), P_ = Z([Lh, N_], function(e, t) {
	return (t && e && e.canvasId && t.getCanvasById(e.canvasId) || {}).index || 0;
}), F_ = Z([N_, d_], function(e, t) {
	return t && (e && e.getViewingHint() || t.getViewingHint()) || null;
}), I_ = Z([
	Lh,
	N_,
	d_
], function(e, t, n) {
	return e && e.viewingDirection || t && t.getViewingDirection() || n && n.getViewingDirection() || null;
}), L_ = Z([N_, d_], function(e, t) {
	if (!t || !e) return [];
	var n = e && e.getProperty("behavior");
	if (n) return Array.isArray(n) ? n : [n];
	var r = t.getProperty("behavior");
	return r ? Array.isArray(r) ? r : [r] : [];
}), R_ = Z([N_, d_], function(e, t) {
	return e && e.getProperty("type") && e.isRange() ? e.getTree(new Oh.TreeNode("root")) : t && t.getDefaultTree();
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/workspace.js
jp();
function z_(e, t) {
	return W_(e) || U_(e, t) || V_(e, t) || B_();
}
function B_() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function V_(e, t) {
	if (e) {
		if (typeof e == "string") return H_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? H_(e, t) : void 0;
	}
}
function H_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function U_(e, t) {
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
function W_(e) {
	if (Array.isArray(e)) return e;
}
function G_(e) {
	return $(e).elasticLayout;
}
var K_ = Z([zh], function(e) {
	return e.isFullscreenEnabled;
});
function q_(e) {
	var t = z_($(e).errors.items, 1)[0];
	return $(e).errors[t];
}
var J_ = Z([zh], function(e) {
	return e.type;
}), Y_ = Z([zh], function(e) {
	return e.focusedWindowId;
}), X_ = function(e, t) {
	var n = t.windowId;
	return Y_(e) === n;
};
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/windows.js
jp();
function Z_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Z_(Object(n), !0).forEach(function(t) {
			$_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $_(e, t, n) {
	return (t = ev(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
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
var nv = Z([Gg, Lh], function(e) {
	var t = e.window, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return Q_(Q_({}, t), n);
});
function rv(e) {
	var t = {};
	return Object.keys(Ih(e)).forEach(function(n) {
		t[n] = S_(e, { windowId: n });
	}), t;
}
var iv = Z([Ih], function(e) {
	return Object.values(e).filter(function(e) {
		return e.maximized === !0;
	}).map(function(e) {
		return e.id;
	});
}), av = Z([
	Lh,
	nv,
	F_,
	L_
], function(e, t, n, r) {
	var i = t.views, a = i === void 0 ? [] : i, o = t.defaultView;
	if (e && e.view) return e.view;
	var s = (a || []).find(function(e) {
		return e.behaviors && e.behaviors.some(function(e) {
			return n === e || r.includes(e);
		});
	});
	return s && s.key || o;
}), ov = Z([
	F_,
	L_,
	nv
], function(e, t, n) {
	var r = n.views, i = r === void 0 ? [] : r, a = n.defaultView;
	return (i || []).reduce(function(n, r) {
		return (r.key === a || !r.behaviors || r.behaviors.some(function(n) {
			return e === n || t.includes(n);
		})) && n.push(r.key), n;
	}, []);
}), sv = Z([
	J_,
	Lh,
	function(e) {
		return Bh(e).length > 1;
	}
], function(e, t, n) {
	return e === "elastic" ? !0 : n && t && t.maximized === !1;
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/canvases.js
jp();
var cv = function(e) {
	return $(e).infoResponses;
}, lv = Z([N_], function(e) {
	return e && e.getCanvases() || [];
}), uv = Z([N_, function(e, t) {
	return t.canvasId;
}], function(e, t) {
	if (!(!e || !t)) return e.getCanvasById(t);
}), dv = Z([N_, Lh], function(e, t) {
	if (!(!e || !t)) return t.canvasId ? e.getCanvasById(t.canvasId) : e.getCanvasByIndex(0);
}), fv = Z([Lh], function(e) {
	return e && (e.visibleCanvases || e.canvasId && [e.canvasId]) || [];
}), pv = Z([fv, lv], function(e, t) {
	return (t || []).filter(function(t) {
		return e.includes(t.id);
	});
}), mv = Z([lv, av], function(e, t) {
	return e && new wh(e, t).groupings();
}), hv = Z([mv, function(e, t) {
	return t.canvasId;
}], function(e, t) {
	return e && e.find(function(e) {
		return e.some(function(e) {
			return e.id === t;
		});
	}) || [];
}), gv = Z([mv, dv], function(e, t, n) {
	if (!(!e || !t)) {
		var r = e.findIndex(function(e) {
			return e.some(function(e) {
				return e.id === t.id;
			});
		});
		if (!(r < 0 || r + 1 >= e.length)) return e[r + 1];
	}
}), _v = Z([mv, dv], function(e, t, n) {
	if (!(!e || !t)) {
		var r = e.findIndex(function(e) {
			return e.some(function(e) {
				return e.id === t.id;
			});
		});
		if (!(r < 1)) return e[r - 1];
	}
}), vv = Z([uv], function(e) {
	return e && (e.getLabel().length > 0 ? e.getLabel().getValue() : String(e.index + 1));
}), yv = Z([uv], function(e) {
	return e && e.getProperty("description");
}), bv = Z([pv], function(e) {
	return (0, Q.default)(e.map(function(e) {
		return new Ph(e).imageResources;
	})).filter(function(e) {
		return e.getServices().length < 1;
	});
}), xv = Z([pv], function(e) {
	return (0, Q.default)(e.map(function(e) {
		return new Ph(e).videoResources;
	}));
}), Sv = Z([pv], function(e) {
	return (0, Q.default)(e.map(function(e) {
		return new Ph(e).vttContent;
	}));
}), Cv = Z([pv], function(e) {
	return (0, Q.default)(e.map(function(e) {
		return new Ph(e).audioResources;
	}));
}), wv = Z([
	function(e, t) {
		return t.infoId;
	},
	uv,
	cv
], function(e, t, n) {
	var r = e;
	if (!e) {
		if (!t) return;
		var i = new Ph(t).iiifImageResources[0];
		r = i && i.getServices()[0].id;
	}
	return r && n[r] && !n[r].isFetching && n[r];
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/annotations.js
jp();
var Tv = ["canvasId"];
function Ev(e, t) {
	if (e == null) return {};
	var n, r, i = Dv(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Dv(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
var Ov = function(e) {
	return $(e).annotations;
}, kv = Z([Gg, function(e, t) {
	return t.motivations;
}], function(e, t) {
	return t || e.annotations.filteredMotivations;
}), Av = Z([Z([uv, Ov], function(e, t) {
	return !t || !e || !t[e.id] ? [] : (0, Q.default)(Object.values(t[e.id]));
})], function(e) {
	return (0, jm.default)(Object.values(e).map(function(e) {
		return e && ch.determineAnnotation(e.json);
	}), function(e) {
		return e && e.present();
	});
}), jv = Z([function(e, t) {
	var n = t.canvasId, r = Ev(t, Tv);
	return n ? [n] : fv(e, r);
}, Ov], function(e, t) {
	return !t || e.length === 0 ? [] : (0, Q.default)(e.map(function(e) {
		return t[e] && Object.values(t[e]);
	}));
}), Mv = Z([jv], function(e) {
	return (0, jm.default)(Object.values(e).map(function(e) {
		return e && ch.determineAnnotation(e.json);
	}), function(e) {
		return e && e.present();
	});
}), Nv = Z([Av, kv], function(e, t) {
	return (0, jm.default)((0, Q.default)(e.map(function(e) {
		return e.resources;
	})), function(e) {
		return e.motivations.some(function(e) {
			return t.includes(e);
		});
	});
}), Pv = Z([Mv, kv], function(e, t) {
	return (0, jm.default)((0, Q.default)(e.map(function(e) {
		return e.resources;
	})), function(e) {
		return e.motivations.some(function(e) {
			return t.includes(e);
		});
	});
}), Fv = Z([Lh], function(e) {
	return e.selectedAnnotationId;
}), Iv = Z([Mv, Fv], function(e, t) {
	return e.map(function(e) {
		return {
			id: e["@id"] || e.id,
			resources: e.resources.filter(function(e) {
				return t === e.id;
			})
		};
	}).filter(function(e) {
		return e.resources.length > 0;
	});
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/searches.js
jp();
var Lv = Z([function(e, t) {
	return t.windowId;
}, function(e) {
	return $(e).searches;
}], function(e, t) {
	return !e || !t ? {} : t[e];
}), Rv = Z([Lv, function(e, t) {
	return t.companionWindowId;
}], function(e, t) {
	if (!(!e || !t)) return e[t];
}), zv = Z([Rv], function(e) {
	return e ? Object.values(e.data) : [];
}), Bv = Z([Rv], function(e) {
	return e && e.query;
}), Vv = Z([zv], function(e) {
	return e.some(function(e) {
		return e.isFetching;
	});
}), Hv = Z([Rv], function(e) {
	var t;
	if (!(!e || !e.data)) {
		var n = Object.values(e.data).find(function(e) {
			return !e.isFetching && e.json && e.json.within;
		});
		return n == null || (t = n.json) == null || (t = t.within) == null ? void 0 : t.total;
	}
}), Uv = Z([Rv], function(e) {
	if (!(!e || !e.data)) {
		var t = Object.values(e.data).find(function(t) {
			return !t.isFetching && t.json && t.json.next && !e.data[t.json.next];
		});
		return t && t.json && t.json.next;
	}
}), Wv = Z([zv], function(e) {
	return (0, Q.default)(e.map(function(e) {
		return !e || !e.json || e.isFetching || !e.json.hits ? [] : e.json.hits;
	}));
}), Gv = Z([
	Wv,
	lv,
	function(e, t) {
		var n = t.companionWindowId, r = t.windowId;
		return function(t) {
			return Qv(e, {
				annotationUri: t,
				companionWindowId: n,
				windowId: r
			});
		};
	}
], function(e, t, n) {
	if (!t || t.length === 0 || !e || e.length === 0) return [];
	var r = t.map(function(e) {
		return e.id;
	});
	return [].concat(e).sort(function(e, t) {
		var i = n(e.annotations[0]), a = n(t.annotations[0]);
		return r.indexOf(i.targetId) - r.indexOf(a.targetId);
	});
}), Kv = function(e) {
	var t = e.map(function(e) {
		if (!(!e || !e.json || e.isFetching || !e.json.resources)) {
			var t = new Wm(e.json);
			return {
				id: t.id,
				resources: t.resources
			};
		}
	}).filter(Boolean);
	return {
		id: (t.find(function(e) {
			return e.id;
		}) || {}).id,
		resources: (0, Q.default)(t.map(function(e) {
			return e.resources;
		}))
	};
}, qv = Z([zv], function(e) {
	return e && Kv(e);
});
function Jv(e, t) {
	if (!e || !e.resources || e.length === 0 || !t || t.length === 0) return [];
	var n = t.map(function(e) {
		return e.id;
	});
	return [].concat(e.resources).sort(function(e, t) {
		return n.indexOf(e.targetId) - n.indexOf(t.targetId);
	});
}
var Yv = Z([qv, lv], function(e, t) {
	return Jv(e, t);
}), Xv = Z([Lv], function(e) {
	return e ? Object.values(e).map(function(e) {
		return Object.values(e.data);
	}).map(function(e) {
		return Kv(e);
	}).filter(function(e) {
		return e.resources.length > 0;
	}) : [];
}), Zv = Z([Lh, Rv], function(e, t) {
	return t && t.selectedContentSearchAnnotationIds || [];
}), Qv = Z([qv, function(e, t) {
	return t.annotationUri;
}], function(e, t) {
	return e.resources.find(function(e) {
		return e.id === t;
	});
}), $v = Z([Qv, f_], function(e, t) {
	return e && e.resource && e.resource.label ? Oh.PropertyValue.parse(e.resource.label, t).getValues() : [];
}), ey = Z([Xv, function(e, t) {
	return t.annotationId;
}], function(e, t) {
	return (0, Q.default)(e.map(function(e) {
		return e.resources;
	})).find(function(e) {
		return e.id === t;
	});
}), ty = Z([ey, function(e, t) {
	var n = t.windowId;
	return function(t) {
		return uv(e, {
			canvasId: t,
			windowId: n
		});
	};
}], function(e, t) {
	var n = e && e.targetId;
	return n && t(n);
}), ny = /* @__PURE__ */ i(((e, t) => {
	var n = Gd(), r = Math.max;
	function i(e, t, i) {
		return t = r(t === void 0 ? e.length - 1 : t, 0), function() {
			for (var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s); ++o < s;) c[o] = a[t + o];
			o = -1;
			for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
			return l[t] = i(c), n(e, this, l);
		};
	}
	t.exports = i;
})), ry = /* @__PURE__ */ i(((e, t) => {
	var n = Vt(), r = ny(), i = pf();
	function a(e, t) {
		return i(r(e, t, n), e + "");
	}
	t.exports = a;
})), iy = /* @__PURE__ */ i(((e, t) => {
	function n(e, t, n) {
		for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
		return !1;
	}
	t.exports = n;
})), ay = /* @__PURE__ */ i(((e, t) => {
	var n = Uf(), r = Zd(), i = nm();
	t.exports = n && 1 / i(new n([, -0]))[1] == Infinity ? function(e) {
		return new n(e);
	} : r;
})), oy = /* @__PURE__ */ i(((e, t) => {
	var n = Xp(), r = yf(), i = iy(), a = Qp(), o = ay(), s = nm(), c = 200;
	function l(e, t, l) {
		var u = -1, d = r, f = e.length, p = !0, m = [], h = m;
		if (l) p = !1, d = i;
		else if (f >= c) {
			var g = t ? null : o(e);
			if (g) return s(g);
			p = !1, d = a, h = new n();
		} else h = t ? [] : m;
		outer: for (; ++u < f;) {
			var _ = e[u], v = t ? t(_) : _;
			if (_ = l || _ !== 0 ? _ : 0, p && v === v) {
				for (var y = h.length; y--;) if (h[y] === v) continue outer;
				t && h.push(v), m.push(_);
			} else d(h, v, l) || (h !== m && h.push(v), m.push(_));
		}
		return m;
	}
	t.exports = l;
})), sy = /* @__PURE__ */ i(((e, t) => {
	var n = Jf(), r = Je();
	function i(e) {
		return r(e) && n(e);
	}
	t.exports = i;
})), cy = /* @__PURE__ */ i(((e, t) => {
	var n = Om(), r = ry(), i = oy(), a = sy();
	t.exports = r(function(e) {
		return i(n(e, 1, a, !0));
	});
})), ly = /* @__PURE__ */ i(((e, t) => {
	var n = Xp(), r = yf(), i = iy(), a = Mt(), o = Qf(), s = Qp(), c = 200;
	function l(e, t, l, u) {
		var d = -1, f = r, p = !0, m = e.length, h = [], g = t.length;
		if (!m) return h;
		l && (t = a(t, o(l))), u ? (f = i, p = !1) : t.length >= c && (f = s, p = !1, t = new n(t));
		outer: for (; ++d < m;) {
			var _ = e[d], v = l == null ? _ : l(_);
			if (_ = u || _ !== 0 ? _ : 0, p && v === v) {
				for (var y = g; y--;) if (t[y] === v) continue outer;
				h.push(_);
			} else f(t, v, u) || h.push(_);
		}
		return h;
	}
	t.exports = l;
})), uy = /* @__PURE__ */ i(((e, t) => {
	var n = ly(), r = ry(), i = sy();
	t.exports = r(function(e, t) {
		return i(e) ? n(e, t) : [];
	});
}));
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/ranges.js
jp();
var dy = /* @__PURE__ */ n(cy()), fy = /* @__PURE__ */ n(uy());
function py(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function my(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? py(Object(n), !0).forEach(function(t) {
			hy(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : py(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function hy(e, t, n) {
	return (t = gy(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function gy(e) {
	var t = _y(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _y(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function vy(e) {
	if (e == null) throw TypeError("Cannot destructure " + e);
}
function yy() {
	return yy = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, yy.apply(null, arguments);
}
function by(e) {
	return wy(e) || Cy(e) || Sy(e) || xy();
}
function xy() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Sy(e, t) {
	if (e) {
		if (typeof e == "string") return Ty(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ty(e, t) : void 0;
	}
}
function Cy(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wy(e) {
	if (Array.isArray(e)) return Ty(e);
}
function Ty(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Ey(e, t) {
	for (var n = e.getCanvasIds(), r = 0; r < n.length; r += 1) if (Oh.Utils.normalisedUrlsMatch(n[r], t)) return !0;
	return !1;
}
function Dy(e) {
	return e.parentNode === void 0 ? [] : e.parentNode.parentNode === void 0 ? [e.parentNode.id] : [].concat(by(Dy(e.parentNode)), [e.parentNode.id]);
}
function Oy(e, t) {
	return e.reduce(function(e, n) {
		var r = [];
		r.push.apply(r, by(e));
		var i = t.reduce(function(e, t) {
			return e || Ey(n.data, t);
		}, !1), a = n.nodes.length > 0 ? Oy(n.nodes, t) : [];
		return r.push.apply(r, by(a)), (i || a.length > 0) && r.push({
			containsVisibleCanvas: i,
			descendantsContainVisibleCanvas: a.length > 0,
			id: n.id,
			leaf: n.nodes.length === 0,
			parentIds: Dy(n)
		}), r;
	}, []);
}
var ky = Z([R_, fv], function(e, t) {
	return t.length === 0 || !e ? [] : Oy(e.nodes, t);
}), Ay = Z([ky], function(e) {
	return e.map(function(e) {
		return e.id;
	});
}), jy = Z([ky], function(e) {
	return e.reduce(function(e, t) {
		return t.leaf || !t.descendantsContainVisibleCanvas ? e : [].concat(by(e), [t.id]);
	}, []);
}), My = Z([ky], function(e) {
	return e.reduce(function(e, t) {
		return t.containsVisibleCanvas ? [].concat(by(e), [t]) : e;
	}, []);
});
function Ny(e, t, n) {
	var r = t.companionWindowId, i = Eg(e, { companionWindowId: r });
	return i.tocNodes ? Object.keys(i.tocNodes).reduce(function(e, t) {
		return i.tocNodes[t].expanded === n ? [].concat(by(e), [t]) : e;
	}, []) : [];
}
function Py(e, t) {
	var n = t.companionWindowId, r = t.windowId, i = jy(e, {
		companionWindowId: n,
		windowId: r
	}), a = Ny(e, { companionWindowId: n }, !0), o = Ny(e, { companionWindowId: n }, !1);
	return fy.default.apply(void 0, [(0, dy.default)(a, i)].concat(by(o)));
}
function Fy(e, t) {
	var n = yy({}, (vy(t), t)), r = My(e, my({}, n)), i = Ny(e, n, !1);
	if (r && r.length > 0) {
		for (var a = 0; a < r[0].parentIds.length; a += 1) if (i.indexOf(r[0].parentIds[a]) !== -1) return r[0].parentIds[a];
		return r[0].id;
	}
	return null;
}
var Iy = Z([R_], function(e) {
	return e && e.nodes && e.nodes.length > 0 ? "tableOfContents" : "item";
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/layers.js
jp();
var Ly = Z([uv], function(e) {
	return e ? new Ph(e).imageResources : [];
}), Ry = Z([
	function(e) {
		return $(e).layers || {};
	},
	function(e, t) {
		return t.windowId;
	},
	function(e, t) {
		return t.canvasId;
	}
], function(e, t, n) {
	return (e[t] || {})[n];
}), zy = Z([Ly, Ry], function(e, t) {
	return t ? e.sort(function(e, n) {
		return t[e.id] && t[e.id].index !== void 0 && t[n.id] && t[n.id].index !== void 0 ? t[e.id].index - t[n.id].index : t[e.id] && t[e.id].index !== void 0 ? -1 : t[n.id] && t[n.id].index !== void 0 ? 1 : 0;
	}) : e;
}), By = Z([fv, function(e, t) {
	var n = t.windowId;
	return function(t) {
		return Ry(e, {
			canvasId: t,
			windowId: n
		});
	};
}], function(e, t) {
	return e.reduce(function(e, n) {
		return e[n] = t(n), e;
	}, {});
});
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/auth.js
jp();
function Vy(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Hy(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
}
function Hy(e, t) {
	if (e) {
		if (typeof e == "string") return Uy(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uy(e, t) : void 0;
	}
}
function Uy(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Wy(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Gy(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wy(Object(n), !0).forEach(function(t) {
			Ky(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wy(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ky(e, t, n) {
	return (t = qy(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qy(e) {
	var t = Jy(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Jy(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Yy = Z([Gg], function(e) {
	var t = e.auth, n = (t === void 0 ? {} : t).serviceProfiles;
	return n === void 0 ? [] : n;
}), Xy = function(e) {
	return $(e).accessTokens || {};
}, Zy = function(e) {
	return $(e).auth || {};
}, Qy = Z([
	pv,
	cv,
	Yy,
	Zy,
	function(e, t) {
		return t.iiifResources;
	}
], function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
	if (!i && e && (i = (0, Q.default)(e.map(function(e) {
		return new Ph(e).iiifImageResources.map(function(e) {
			var n = e.getServices()[0], r = t[n.id];
			return r && r.json ? Gy(Gy({}, r.json), {}, { options: {} }) : n;
		});
	}))), !i || i.length === 0) return [];
	var a = i.map(function(e) {
		var t, i = Oh.Utils.getServices(e), a = Vy(n), o;
		try {
			var s = function() {
				var e = o.value, n = Vy(i.filter(function(t) {
					return e.profile === t.getProfile();
				})), a;
				try {
					for (n.s(); !(a = n.n()).done;) {
						var s = a.value;
						if (t = s, !r[s.id] || r[s.id].isFetching || r[s.id].ok) return { v: s };
					}
				} catch (e) {
					n.e(e);
				} finally {
					n.f();
				}
			}, c;
			for (a.s(); !(o = a.n()).done;) if (c = s(), c) return c.v;
		} catch (e) {
			a.e(e);
		} finally {
			a.f();
		}
		return t;
	});
	return Object.values(a.reduce(function(e, t) {
		return t && !e[t.id] && (e[t.id] = t), e;
	}, {}));
}), $y = /* @__PURE__ */ i(((e, t) => {
	t.exports = {};
})), eb = /* @__PURE__ */ i(((e, t) => {
	var n = typeof URL > "u" ? $y().URL : URL, r = "text/plain", i = "us-ascii", a = (e, t) => t.some((t) => t instanceof RegExp ? t.test(e) : t === e), o = (e, { stripHash: t }) => {
		let n = e.match(/^data:([^,]*?),([^#]*?)(?:#(.*))?$/);
		if (!n) throw Error(`Invalid URL: ${e}`);
		let a = n[1].split(";"), o = n[2], s = t ? "" : n[3], c = !1;
		a[a.length - 1] === "base64" && (a.pop(), c = !0);
		let l = (a.shift() || "").toLowerCase(), u = [...a.map((e) => {
			let [t, n = ""] = e.split("=").map((e) => e.trim());
			return t === "charset" && (n = n.toLowerCase(), n === i) ? "" : `${t}${n ? `=${n}` : ""}`;
		}).filter(Boolean)];
		return c && u.push("base64"), (u.length !== 0 || l && l !== r) && u.unshift(l), `data:${u.join(";")},${c ? o.trim() : o}${s ? `#${s}` : ""}`;
	}, s = (e, t) => {
		if (t = {
			defaultProtocol: "http:",
			normalizeProtocol: !0,
			forceHttp: !1,
			forceHttps: !1,
			stripAuthentication: !0,
			stripHash: !1,
			stripWWW: !0,
			removeQueryParameters: [/^utm_\w+/i],
			removeTrailingSlash: !0,
			removeDirectoryIndex: !1,
			sortQueryParameters: !0,
			...t
		}, Reflect.has(t, "normalizeHttps")) throw Error("options.normalizeHttps is renamed to options.forceHttp");
		if (Reflect.has(t, "normalizeHttp")) throw Error("options.normalizeHttp is renamed to options.forceHttps");
		if (Reflect.has(t, "stripFragment")) throw Error("options.stripFragment is renamed to options.stripHash");
		if (e = e.trim(), /^data:/i.test(e)) return o(e, t);
		let r = e.startsWith("//");
		!r && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
		let i = new n(e);
		if (t.forceHttp && t.forceHttps) throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
		if (t.forceHttp && i.protocol === "https:" && (i.protocol = "http:"), t.forceHttps && i.protocol === "http:" && (i.protocol = "https:"), t.stripAuthentication && (i.username = "", i.password = ""), t.stripHash && (i.hash = ""), i.pathname &&= i.pathname.replace(/((?!:).|^)\/{2,}/g, (e, t) => /^(?!\/)/g.test(t) ? `${t}/` : "/"), i.pathname &&= decodeURI(i.pathname), t.removeDirectoryIndex === !0 && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
			let e = i.pathname.split("/"), n = e[e.length - 1];
			a(n, t.removeDirectoryIndex) && (e = e.slice(0, e.length - 1), i.pathname = e.slice(1).join("/") + "/");
		}
		if (i.hostname && (i.hostname = i.hostname.replace(/\.$/, ""), t.stripWWW && /^www\.([a-z\-\d]{2,63})\.([a-z.]{2,5})$/.test(i.hostname) && (i.hostname = i.hostname.replace(/^www\./, ""))), Array.isArray(t.removeQueryParameters)) for (let e of [...i.searchParams.keys()]) a(e, t.removeQueryParameters) && i.searchParams.delete(e);
		return t.sortQueryParameters && i.searchParams.sort(), t.removeTrailingSlash && (i.pathname = i.pathname.replace(/\/$/, "")), e = i.toString(), (t.removeTrailingSlash || i.pathname === "/") && i.hash === "" && (e = e.replace(/\/$/, "")), r && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")), e;
	};
	t.exports = s, t.exports.default = s;
})), tb = /* @__PURE__ */ n(eb());
function nb(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rb(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nb(Object(n), !0).forEach(function(t) {
			ib(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nb(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ib(e, t, n) {
	return (t = vb(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ab(e) {
	return cb(e) || sb(e) || db(e) || ob();
}
function ob() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sb(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function cb(e) {
	if (Array.isArray(e)) return fb(e);
}
function lb(e, t) {
	return mb(e) || pb(e, t) || db(e, t) || ub();
}
function ub() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function db(e, t) {
	if (e) {
		if (typeof e == "string") return fb(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fb(e, t) : void 0;
	}
}
function fb(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function pb(e, t) {
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
function mb(e) {
	if (Array.isArray(e)) return e;
}
function hb(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function gb(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, vb(r.key), r);
	}
}
function _b(e, t, n) {
	return t && gb(e.prototype, t), n && gb(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vb(e) {
	var t = yb(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function yb(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var bb = /*#__PURE__*/ function() {
	function e(t, n) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left-to-right";
		hb(this, e), this.canvases = t.map(function(e) {
			return new Ph(e);
		}), this.layers = n, this.viewingDirection = r, this._canvasDimensions = null;
	}
	return _b(e, [
		{
			key: "canvasIds",
			get: function() {
				return this.canvases.map(function(e) {
					return e.id;
				});
			}
		},
		{
			key: "canvasDimensions",
			get: function() {
				if (this._canvasDimensions) return this._canvasDimensions;
				var e = lb(this.canvasDirection, 2), t = e[0], n = e[1], r = n === 0 ? Math.min.apply(Math, ab(this.canvases.map(function(e) {
					return e.getHeight();
				}))) : Math.min.apply(Math, ab(this.canvases.map(function(e) {
					return e.getWidth();
				}))), i = 0, a = 0, o = this.canvases.reduce(function(e, o) {
					var s = 0, c = 0;
					return isNaN(o.aspectRatio) || (n === 0 ? (s = r, c = Math.floor(r * o.aspectRatio)) : (c = r, s = Math.floor(r * (1 / o.aspectRatio)))), e.push({
						canvas: o,
						height: s,
						width: c,
						x: i,
						y: a
					}), i += t * c, a += n * s, e;
				}, []), s = n === 0 ? r : Math.abs(a), c = t === 0 ? r : Math.abs(i);
				return this._canvasDimensions = o.reduce(function(e, r) {
					return e.push(rb(rb({}, r), {}, {
						x: t === -1 ? r.x + c - r.width : r.x,
						y: n === -1 ? r.y + s - r.height : r.y
					})), e;
				}, []), this._canvasDimensions;
			}
		},
		{
			key: "contentResourceToWorldCoordinates",
			value: function(e) {
				var t = this.canvases.findIndex(function(t) {
					return t.imageResources.find(function(t) {
						return t.id === e.id;
					});
				}), n = this.canvases[t];
				if (!n) return [];
				var r = lb(this.canvasToWorldCoordinates(n.id), 4), i = r[0], a = r[1], o = r[2], s = r[3], c = n.onFragment(e.id);
				return c ? [
					i + c[0],
					a + c[1],
					c[2],
					c[3]
				] : [
					i,
					a,
					o,
					s
				];
			}
		},
		{
			key: "canvasToWorldCoordinates",
			value: function(e) {
				var t = this.canvasDimensions.find(function(t) {
					return t.canvas.id === e;
				});
				return [
					t.x,
					t.y,
					t.width,
					t.height
				];
			}
		},
		{
			key: "canvasDirection",
			get: function() {
				switch (this.viewingDirection) {
					case "left-to-right": return [1, 0];
					case "right-to-left": return [-1, 0];
					case "top-to-bottom": return [0, 1];
					case "bottom-to-top": return [0, -1];
					default: return [1, 0];
				}
			}
		},
		{
			key: "contentResource",
			value: function(e) {
				var t = this.canvases.find(function(t) {
					return t.imageServiceIds.some(function(t) {
						return (0, tb.default)(t, { stripAuthentication: !1 }) === (0, tb.default)(e, { stripAuthentication: !1 });
					});
				});
				if (t) return t.imageResources.find(function(t) {
					return (0, tb.default)(t.getServices()[0].id, { stripAuthentication: !1 }) === (0, tb.default)(e, { stripAuthentication: !1 });
				});
			}
		},
		{
			key: "getLayerMetadata",
			value: function(e) {
				if (this.layers) {
					var t = this.canvases.find(function(t) {
						return t.imageResources.find(function(t) {
							return t.id === e.id;
						});
					});
					if (t) {
						var n = t.imageResources.findIndex(function(t) {
							return t.id === e.id;
						}), r = this.layers[t.canvas.id], i = r && r[e.id];
						return rb({
							index: n,
							opacity: 1,
							total: t.imageResources.length,
							visibility: !0
						}, i);
					}
				}
			}
		},
		{
			key: "layerOpacityOfImageResource",
			value: function(e) {
				var t = this.getLayerMetadata(e);
				return t ? t.visibility ? t.opacity : 0 : 1;
			}
		},
		{
			key: "layerIndexOfImageResource",
			value: function(e) {
				var t = this.getLayerMetadata(e);
				if (t) return t.total - t.index - 1;
			}
		},
		{
			key: "offsetByCanvas",
			value: function(e) {
				var t = this.canvasToWorldCoordinates(e);
				return {
					x: t[0],
					y: t[1]
				};
			}
		},
		{
			key: "worldBounds",
			value: function() {
				return [
					0,
					0,
					Math.max.apply(Math, ab(this.canvasDimensions.map(function(e) {
						return e.x + e.width;
					}))),
					Math.max.apply(Math, ab(this.canvasDimensions.map(function(e) {
						return e.y + e.height;
					})))
				];
			}
		},
		{
			key: "canvasAtPoint",
			value: function(e) {
				var t = this.canvasDimensions.find(function(t) {
					return t.x <= e.x && e.x <= t.x + t.width && t.y <= e.y && e.y <= t.y + t.height;
				});
				return t && t.canvas;
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/state/selectors/viewer.js
jp();
var xb = Z(pv, By, I_, function(e, t, n) {
	return new bb(e, t, n);
}), Sb = /* @__PURE__ */ r({
	getAccessTokens: () => Xy,
	getAllowedWindowViewTypes: () => ov,
	getAnnotationResourcesByMotivation: () => Pv,
	getAnnotationResourcesByMotivationForCanvas: () => Nv,
	getAnnotations: () => Ov,
	getAuth: () => Zy,
	getAuthProfiles: () => Yy,
	getCanvas: () => uv,
	getCanvasDescription: () => yv,
	getCanvasForAnnotation: () => ty,
	getCanvasGrouping: () => hv,
	getCanvasGroupings: () => mv,
	getCanvasIndex: () => P_,
	getCanvasLabel: () => vv,
	getCanvasLayers: () => Ly,
	getCanvases: () => lv,
	getCatalog: () => Uh,
	getCompanionAreaVisibility: () => Fg,
	getCompanionWindow: () => Eg,
	getCompanionWindowIdsForPosition: () => Pg,
	getCompanionWindows: () => Tg,
	getCompanionWindowsForContent: () => Mg,
	getCompanionWindowsForPosition: () => jg,
	getConfig: () => Gg,
	getContainerId: () => Zg,
	getCurrentCanvas: () => dv,
	getCurrentCanvasWorld: () => xb,
	getDefaultSidebarVariant: () => Iy,
	getDestructuredMetadata: () => T_,
	getElasticLayout: () => G_,
	getExpandedNodeIds: () => Py,
	getExportableState: () => Kg,
	getFullScreenEnabled: () => K_,
	getLanguagesFromConfigWithCurrent: () => qg,
	getLatestError: () => q_,
	getLayers: () => Ry,
	getLayersForVisibleCanvases: () => By,
	getManifest: () => Hh,
	getManifestAutocompleteService: () => j_,
	getManifestDescription: () => C_,
	getManifestError: () => l_,
	getManifestHomepage: () => g_,
	getManifestLocale: () => f_,
	getManifestLogo: () => m_,
	getManifestMetadata: () => E_,
	getManifestProvider: () => h_,
	getManifestRelatedContent: () => v_,
	getManifestRenderings: () => __,
	getManifestSearchService: () => A_,
	getManifestStatus: () => c_,
	getManifestThumbnail: () => x_,
	getManifestTitle: () => S_,
	getManifestUrl: () => w_,
	getManifestoInstance: () => d_,
	getManifests: () => Vh,
	getManuallyExpandedNodeIds: () => Ny,
	getMaximizedWindowsIds: () => iv,
	getMetadataLocales: () => k_,
	getNextCanvasGrouping: () => gv,
	getNextSearchId: () => Uv,
	getNodeIdToScrollTo: () => Fy,
	getPresentAnnotationsOnSelectedCanvases: () => Mv,
	getPreviousCanvasGrouping: () => _v,
	getRequestsConfig: () => $g,
	getRequiredStatement: () => y_,
	getResourceAnnotationForSearchHit: () => Qv,
	getResourceAnnotationLabel: () => $v,
	getRights: () => b_,
	getSearchAnnotationsForCompanionWindow: () => qv,
	getSearchAnnotationsForWindow: () => Xv,
	getSearchForWindow: () => Lv,
	getSearchIsFetching: () => Vv,
	getSearchNumTotal: () => Hv,
	getSearchQuery: () => Bv,
	getSelectedAnnotationId: () => Fv,
	getSelectedAnnotationsOnCanvases: () => Iv,
	getSelectedContentSearchAnnotationIds: () => Zv,
	getSequence: () => N_,
	getSequenceBehaviors: () => L_,
	getSequenceTreeStructure: () => R_,
	getSequenceViewingDirection: () => I_,
	getSequenceViewingHint: () => F_,
	getSequences: () => M_,
	getShowZoomControlsConfig: () => Jg,
	getSortedLayers: () => zy,
	getSortedSearchAnnotationsForCompanionWindow: () => Yv,
	getSortedSearchHitsForCompanionWindow: () => Gv,
	getTheme: () => Yg,
	getThemeDirection: () => Qg,
	getThemeIds: () => Xg,
	getThumbnailNavigationPosition: () => Dg,
	getViewer: () => Rh,
	getVisibleCanvasAudioResources: () => Cv,
	getVisibleCanvasCaptions: () => Sv,
	getVisibleCanvasIds: () => fv,
	getVisibleCanvasNonTiledResources: () => bv,
	getVisibleCanvasVideoResources: () => xv,
	getVisibleCanvases: () => pv,
	getVisibleNodeIds: () => Ay,
	getWindow: () => Lh,
	getWindowConfig: () => nv,
	getWindowDraggability: () => sv,
	getWindowIds: () => Bh,
	getWindowManifests: () => Fh,
	getWindowTitles: () => rv,
	getWindowViewType: () => av,
	getWindows: () => Ih,
	getWorkspace: () => zh,
	getWorkspaceType: () => J_,
	isFocused: () => X_,
	miradorSlice: () => $,
	selectCompanionWindowDimensions: () => Ig,
	selectCurrentAuthServices: () => Qy,
	selectInfoResponse: () => wv,
	selectInfoResponses: () => cv,
	sortSearchAnnotationsByCanvasOrder: () => Jv
});
//#endregion
export { xv as $, Ve as $i, of as $n, Xr as $r, Mg as $t, Hv as A, pn as Ai, em as An, Ss as Ar, __ as At, uv as B, It as Bi, Qf as Bn, $o as Br, Gg as Bt, Uv as C, mn as Ci, _m as Cn, gu as Cr, l_ as Ct, Xv as D, rn as Di, om as Dn, Cs as Dr, E_ as Dt, qv as E, on as Ei, sm as En, Fc as Er, m_ as Et, Pv as F, Ut as Fi, Mp as Fn, os as Fr, w_ as Ft, lv as G, pt as Gi, Rf as Gn, Wi as Gr, Jg as Gt, hv as H, Pt as Hi, Jf as Hn, Qo as Hr, Kg as Ht, Nv as I, Vt as Ii, yp as In, cs as Ir, d_ as It, _v as J, Ye as Ji, Ff as Jn, Ui as Jr, Xg as Jt, dv as K, Qe as Ki, Lf as Kn, z as Kr, Yg as Kt, Ov as L, Bt as Li, up as Ln, ts as Lr, k_ as Lt, Zv as M, Jt as Mi, Bp as Mn, bs as Mr, c_ as Mt, Yv as N, Yt as Ni, Lp as Nn, ps as Nr, x_ as Nt, Lv as O, sn as Oi, am as On, ws as Or, h_ as Ot, Gv as P, Ht as Pi, Ip as Pn, ms as Pr, S_ as Pt, bv as Q, Ue as Qi, pf as Qn, Qr, Pg as Qt, Mv as R, zt as Ri, tp as Rn, ns as Rr, y_ as Rt, ty as S, _n as Si, Tm as Sn, vu as Sr, C_ as St, $v as T, cn as Ti, cm as Tn, Nc as Tr, f_ as Tt, mv as U, Mt as Ui, Wf as Un, Wo as Ur, qg as Ut, yv as V, Ft as Vi, Xf as Vn, Xo as Vr, Zg as Vt, vv as W, jt as Wi, Bf as Wn, Go as Wr, $g as Wt, Sv as X, qe as Xi, Mf as Xn, li as Xr, Fg as Xt, Cv as Y, Je as Yi, Pf as Yn, ci as Yr, Lg as Yt, fv as Z, We as Zi, mf as Zn, Zr, Eg as Zt, ly as _, On as _i, Eh as _n, Au as _r, R_ as _t, Xy as a, k as aa, Er as ai, Zh as an, Hd as ar, nv as at, ry as b, bn as bi, km as bn, Eu as br, T_ as bt, Qy as c, T as ca, sr as ci, Hh as cn, Fd as cr, av as ct, Iy as d, s as da, Xn as di, Lh as dn, Pd as dr, q_ as dt, Be as ea, ei, jg as en, nf as er, pv as et, Py as f, Zn as fi, Bh as fn, vd as fr, J_ as ft, uy as g, Un as gi, Ph as gn, ud as gr, L_ as gt, Ay as h, Hn as hi, zh as hn, sd as hr, N_ as ht, eb as i, O as ia, Tr as ii, cg as in, Zd as ir, iv as it, Bv as j, $t as ji, qp as jn, ys as jr, A_ as jt, Vv as k, tn as ki, im as kn, xs as kr, v_ as kt, Ry as l, m as la, Qn as li, Vh as ln, Id as lr, G_ as lt, Fy as m, Yn as mi, Ih as mn, ld as mr, P_ as mt, xb as n, te as na, Vr as ni, Ig as nn, ef as nr, cv as nt, Zy as o, E as oa, dr as oi, Xh as on, Rd as or, sv as ot, Ny as p, Jn as pi, Fh as pn, bd as pr, X_ as pt, gv as q, Ze as qi, If as qn, Hi as qr, Qg as qt, bb as r, M as ra, Hr as ri, dg as rn, Qd as rr, ov as rt, Yy as s, D as sa, fr as si, Uh as sn, Ld as sr, rv as st, Sb as t, ze as ta, $r as ti, Dg as tn, tf as tr, wv as tt, zy as u, d as ua, $n as ui, Rh as un, Nd as ur, K_ as ut, sy as v, Pn as vi, $ as vn, Ru as vr, I_ as vt, Qv as w, hn as wi, dm as wn, hu as wr, g_ as wt, ny as x, gn as xi, Om as xn, yu as xr, j_ as xt, oy as y, yn as yi, vh as yn, Ou as yr, M_ as yt, Fv as z, Lt as zi, $f as zn, es as zr, b_ as zt };

//# sourceMappingURL=selectors.js.map