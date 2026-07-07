import { o as e } from "./chunk.js";
import { bn as t, da as n, yn as r } from "./selectors.js";
//#region node_modules/mirador/dist/es/src/config/css-ns.js
var i = /* @__PURE__ */ e(t()), a = function(e) {
	return (0, i.default)([e]).map(function(e) {
		return [r.createGenerateClassNameOptions.productionPrefix, e].join("-");
	}).join(" ");
}, o = /* @__PURE__ */ e(n()), s = ["classes"];
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
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? c(Object(n), !0).forEach(function(t) {
			u(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function u(e, t, n) {
	return (t = d(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function d(e) {
	var t = f(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function f(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function p(e, t) {
	if (e == null) return {};
	var n, r, i = m(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function m(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
var h = /*#__PURE__*/ o.forwardRef(function(e, t) {
	var n = e.PluginComponents;
	e.classes;
	var r = p(e, s);
	return n ? n.map(function(e, n) {
		return /*#__PURE__*/ o.isValidElement(e) ? /*#__PURE__*/ o.cloneElement(e, l(l({}, r), {}, { ref: t })) : /*#__PURE__*/ o.createElement(e, Object.assign({ ref: t }, r, { key: n }));
	}) : null;
});
//#endregion
export { a as n, h as t };

//# sourceMappingURL=PluginHook.js.map