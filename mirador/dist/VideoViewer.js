import { o as e } from "./chunk.js";
import { $ as t, Ai as n, Bt as r, Ln as i, Oi as a, X as o, ci as s, da as c, or as l, sr as u, ta as d } from "./selectors.js";
//#region node_modules/mirador/dist/es/src/components/VideoViewer.js
n();
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
			var e = this.props, t = e.captions, n = e.classes, r = e.videoOptions, i = e.videoResources;
			return /*#__PURE__*/ f.createElement("div", { className: n.container }, /*#__PURE__*/ f.createElement("video", Object.assign({ className: n.video }, r), i.map(function(e) {
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
//#region node_modules/mirador/dist/es/src/containers/VideoViewer.js
T.defaultProps = {
	captions: [],
	videoOptions: {},
	videoResources: []
}, l();
var E = a(s(), u(function() {
	return {
		container: {
			alignItems: "center",
			display: "flex",
			width: "100%"
		},
		video: {
			maxHeight: "100%",
			width: "100%"
		}
	};
}), d(function(e, n) {
	var i = n.windowId;
	return {
		captions: o(e, { windowId: i }) || [],
		videoOptions: r(e).videoOptions,
		videoResources: t(e, { windowId: i }) || []
	};
}, null), i("VideoViewer"))(T);
//#endregion
export { E as default };

//# sourceMappingURL=VideoViewer.js.map