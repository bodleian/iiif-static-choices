import { o as e } from "./chunk.js";
import { Ci as t, da as n, gr as r, mr as i, oa as a, or as o, sa as s, sr as c, wi as l } from "./selectors.js";
l(), s();
var u = /* @__PURE__ */ e(n());
r(), o();
var d = function(e) {
	var t = {};
	return e.shadows.forEach(function(e, n) {
		t[`elevation${n}`] = { boxShadow: e };
	}), a({
		root: {
			backgroundColor: e.palette.background.paper,
			color: e.palette.text.primary,
			transition: e.transitions.create("box-shadow")
		},
		rounded: { borderRadius: e.shape.borderRadius },
		outlined: { border: `1px solid ${e.palette.divider}` }
	}, t);
}, f = /*#__PURE__*/ u.forwardRef(function(e, n) {
	var r = e.classes, o = e.className, s = e.component, c = s === void 0 ? "div" : s, l = e.square, d = l === void 0 ? !1 : l, f = e.elevation, p = f === void 0 ? 1 : f, m = e.variant, h = m === void 0 ? "elevation" : m, g = t(e, [
		"classes",
		"className",
		"component",
		"square",
		"elevation",
		"variant"
	]);
	return /*#__PURE__*/ u.createElement(c, a({
		className: i(r.root, o, h === "outlined" ? r.outlined : r[`elevation${p}`], !d && r.rounded),
		ref: n
	}, g));
}), p = c(d, { name: "MuiPaper" })(f);
//#endregion
export { p as t };

//# sourceMappingURL=Paper.js.map