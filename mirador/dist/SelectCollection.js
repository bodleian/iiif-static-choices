import { o as e, t } from "./chunk.js";
import { Ai as n, Ln as r, Oi as i, ci as a, da as o, dn as s, or as c, sr as l, ta as u } from "./selectors.js";
import { Q as d } from "./actions.js";
import { B as f, R as p, V as m, l as h } from "./ButtonBase.js";
import { t as g } from "./Button.js";
import { t as _ } from "./Grid.js";
//#region node_modules/@material-ui/icons/ListSharp.js
var v = /* @__PURE__ */ t(((e) => {
	var t = f(), n = p();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var r = n(o());
	e.default = (0, t(h()).default)(/*#__PURE__*/ r.createElement("path", { d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" }), "ListSharp");
}));
//#endregion
//#region node_modules/mirador/dist/es/src/components/SelectCollection.js
n();
var y = /* @__PURE__ */ e(o()), b = /* @__PURE__ */ e(v());
function x(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function S(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, w(r.key), r);
	}
}
function C(e, t, n) {
	return t && S(e.prototype, t), n && S(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function w(e) {
	var t = T(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function T(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function E(e, t, n) {
	return t = A(t), D(e, k() ? Reflect.construct(t, n || [], A(e).constructor) : t.apply(e, n));
}
function D(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return O(e);
}
function O(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function k() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (k = function() {
		return !!e;
	})();
}
function A(e) {
	return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, A(e);
}
function j(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && M(e, t);
}
function M(e, t) {
	return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, M(e, t);
}
var N = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return x(this, t), n = E(this, t, [e]), n.openCollectionDialog = n.openCollectionDialog.bind(n), n;
	}
	return j(t, e), C(t, [{
		key: "openCollectionDialog",
		value: function() {
			var e = this.props, t = e.collectionPath, n = e.manifestId, r = e.showCollectionDialog, i = e.windowId;
			r(n, t.slice(0, -1), i);
		}
	}, {
		key: "render",
		value: function() {
			var e = this.props.t;
			return /*#__PURE__*/ y.createElement(_, {
				container: !0,
				justifyContent: "center",
				alignItems: "center"
			}, /*#__PURE__*/ y.createElement(_, {
				container: !0,
				direction: "column",
				alignItems: "center"
			}, /*#__PURE__*/ y.createElement(m, {
				variant: "h4",
				paragraph: !0
			}, /*#__PURE__*/ y.createElement("em", null, e("noItemSelected"))), /*#__PURE__*/ y.createElement(g, {
				color: "primary",
				variant: "contained",
				onClick: this.openCollectionDialog,
				startIcon: /*#__PURE__*/ y.createElement(b.default, null)
			}, e("showCollection"))));
		}
	}]);
}(y.Component);
//#endregion
//#region node_modules/mirador/dist/es/src/containers/SelectCollection.js
N.defaultProps = {
	collectionPath: [],
	manifestId: null,
	t: function() {},
	windowId: null
}, c();
var P = function(e, t) {
	var n = t.windowId, r = s(e, { windowId: n }) || {};
	return {
		collectionPath: r.collectionPath,
		manifestId: r.manifestId
	};
}, F = { showCollectionDialog: d }, I = i(a(), l(function(e) {
	return {};
}), u(P, F), r("SelectCollection"))(N);
//#endregion
export { I as default };

//# sourceMappingURL=SelectCollection.js.map