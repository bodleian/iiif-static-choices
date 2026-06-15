import { o as e } from "./chunk.js";
import { Ai as t, Bt as n, Ln as r, Oi as i, X as a, Y as o, ci as s, da as c, or as l, sr as u, ta as d } from "./selectors.js";
//#region node_modules/mirador/dist/es/src/components/AudioViewer.js
t();
var f = /* @__PURE__ */ e(c());
function p(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function m(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, g(r.key), r);
	}
}
function h(e, t, n) {
	return t && m(e.prototype, t), n && m(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g(e) {
	var t = _(e, "string");
	return typeof t == "symbol" ? t : t + "";
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
function v(e, t, n) {
	return t = S(t), y(e, x() ? Reflect.construct(t, n || [], S(e).constructor) : t.apply(e, n));
}
function y(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return b(e);
}
function b(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function x() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (x = function() {
		return !!e;
	})();
}
function S(e) {
	return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, S(e);
}
function C(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && w(e, t);
}
function w(e, t) {
	return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, w(e, t);
}
var T = /*#__PURE__*/ function(e) {
	function t() {
		return p(this, t), v(this, t, arguments);
	}
	return C(t, e), h(t, [{
		key: "render",
		value: function() {
			var e = this.props, t = e.captions, n = e.classes, r = e.audioOptions, i = e.audioResources;
			return /*#__PURE__*/ f.createElement("div", { className: n.container }, /*#__PURE__*/ f.createElement("audio", Object.assign({ className: n.audio }, r), i.map(function(e) {
				return /*#__PURE__*/ f.createElement(f.Fragment, { key: e.id }, /*#__PURE__*/ f.createElement("source", {
					src: e.id,
					type: e.getFormat()
				}));
			}), t.map(function(e) {
				return /*#__PURE__*/ f.createElement(f.Fragment, { key: e.id }, /*#__PURE__*/ f.createElement("track", {
					src: e.id,
					label: e.getDefaultLabel(),
					srcLang: e.getProperty("language")
				}));
			})));
		}
	}]);
}(f.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/AudioViewer.js
T.defaultProps = {
	audioOptions: {},
	audioResources: [],
	captions: []
}, l();
var E = i(s(), u(function() {
	return {
		audio: { width: "100%" },
		container: {
			alignItems: "center",
			display: "flex",
			width: "100%"
		}
	};
}), d(function(e, t) {
	var r = t.windowId;
	return {
		audioOptions: n(e).audioOptions,
		audioResources: o(e, { windowId: r }) || [],
		captions: a(e, { windowId: r }) || []
	};
}, null), r("AudioViewer"))(T);
//#endregion
export { E as default };

//# sourceMappingURL=AudioViewer.js.map