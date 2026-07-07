import { o as e } from "./chunk.js";
import { Ci as t, da as n, gr as r, mr as i, oa as a, or as o, sa as s, sr as c, wi as l } from "./selectors.js";
l(), s();
var u = /* @__PURE__ */ e(n());
r(), o();
var d = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
], f = [
	"auto",
	!0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12
];
function p(e, t, n) {
	var r = {};
	f.forEach(function(e) {
		var t = `grid-${n}-${e}`;
		if (e === !0) {
			r[t] = {
				flexBasis: 0,
				flexGrow: 1,
				maxWidth: "100%"
			};
			return;
		}
		if (e === "auto") {
			r[t] = {
				flexBasis: "auto",
				flexGrow: 0,
				maxWidth: "none"
			};
			return;
		}
		var i = `${Math.round(e / 12 * 1e8) / 1e6}%`;
		r[t] = {
			flexBasis: i,
			flexGrow: 0,
			maxWidth: i
		};
	}), n === "xs" ? a(e, r) : e[t.breakpoints.up(n)] = r;
}
function m(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = parseFloat(e);
	return `${n / t}${String(e).replace(String(n), "") || "px"}`;
}
function h(e, t) {
	var n = {};
	return d.forEach(function(r) {
		var i = e.spacing(r);
		i !== 0 && (n[`spacing-${t}-${r}`] = {
			margin: `-${m(i, 2)}`,
			width: `calc(100% + ${m(i)})`,
			"& > $item": { padding: m(i, 2) }
		});
	}), n;
}
var g = function(e) {
	return a({
		root: {},
		container: {
			boxSizing: "border-box",
			display: "flex",
			flexWrap: "wrap",
			width: "100%"
		},
		item: {
			boxSizing: "border-box",
			margin: "0"
		},
		zeroMinWidth: { minWidth: 0 },
		"direction-xs-column": { flexDirection: "column" },
		"direction-xs-column-reverse": { flexDirection: "column-reverse" },
		"direction-xs-row-reverse": { flexDirection: "row-reverse" },
		"wrap-xs-nowrap": { flexWrap: "nowrap" },
		"wrap-xs-wrap-reverse": { flexWrap: "wrap-reverse" },
		"align-items-xs-center": { alignItems: "center" },
		"align-items-xs-flex-start": { alignItems: "flex-start" },
		"align-items-xs-flex-end": { alignItems: "flex-end" },
		"align-items-xs-baseline": { alignItems: "baseline" },
		"align-content-xs-center": { alignContent: "center" },
		"align-content-xs-flex-start": { alignContent: "flex-start" },
		"align-content-xs-flex-end": { alignContent: "flex-end" },
		"align-content-xs-space-between": { alignContent: "space-between" },
		"align-content-xs-space-around": { alignContent: "space-around" },
		"justify-content-xs-center": { justifyContent: "center" },
		"justify-content-xs-flex-end": { justifyContent: "flex-end" },
		"justify-content-xs-space-between": { justifyContent: "space-between" },
		"justify-content-xs-space-around": { justifyContent: "space-around" },
		"justify-content-xs-space-evenly": { justifyContent: "space-evenly" }
	}, h(e, "xs"), e.breakpoints.keys.reduce(function(t, n) {
		return p(t, e, n), t;
	}, {}));
}, _ = /*#__PURE__*/ u.forwardRef(function(e, n) {
	var r = e.alignContent, o = r === void 0 ? "stretch" : r, s = e.alignItems, c = s === void 0 ? "stretch" : s, l = e.classes, d = e.className, f = e.component, p = f === void 0 ? "div" : f, m = e.container, h = m === void 0 ? !1 : m, g = e.direction, _ = g === void 0 ? "row" : g, v = e.item, y = v === void 0 ? !1 : v, b = e.justify, x = e.justifyContent, S = x === void 0 ? "flex-start" : x, C = e.lg, w = C === void 0 ? !1 : C, T = e.md, E = T === void 0 ? !1 : T, D = e.sm, O = D === void 0 ? !1 : D, k = e.spacing, A = k === void 0 ? 0 : k, j = e.wrap, M = j === void 0 ? "wrap" : j, N = e.xl, P = N === void 0 ? !1 : N, F = e.xs, I = F === void 0 ? !1 : F, L = e.zeroMinWidth, R = L === void 0 ? !1 : L, z = t(e, [
		"alignContent",
		"alignItems",
		"classes",
		"className",
		"component",
		"container",
		"direction",
		"item",
		"justify",
		"justifyContent",
		"lg",
		"md",
		"sm",
		"spacing",
		"wrap",
		"xl",
		"xs",
		"zeroMinWidth"
	]), B = i(l.root, d, h && [l.container, A !== 0 && l[`spacing-xs-${String(A)}`]], y && l.item, R && l.zeroMinWidth, _ !== "row" && l[`direction-xs-${String(_)}`], M !== "wrap" && l[`wrap-xs-${String(M)}`], c !== "stretch" && l[`align-items-xs-${String(c)}`], o !== "stretch" && l[`align-content-xs-${String(o)}`], (b || S) !== "flex-start" && l[`justify-content-xs-${String(b || S)}`], I !== !1 && l[`grid-xs-${String(I)}`], O !== !1 && l[`grid-sm-${String(O)}`], E !== !1 && l[`grid-md-${String(E)}`], w !== !1 && l[`grid-lg-${String(w)}`], P !== !1 && l[`grid-xl-${String(P)}`]);
	return /*#__PURE__*/ u.createElement(p, a({
		className: B,
		ref: n
	}, z));
}), v = c(g, { name: "MuiGrid" })(_);
//#endregion
export { v as t };

//# sourceMappingURL=Grid.js.map