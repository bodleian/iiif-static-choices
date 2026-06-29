import { o as e } from "./chunk.js";
import { Ci as t, Zr as n, da as r, ei as i, gr as a, mr as o, oa as s, or as c, sa as l, sr as u, wi as d } from "./selectors.js";
import { H as f, U as p, t as m } from "./ButtonBase.js";
d(), l();
var h = /* @__PURE__ */ e(r());
a(), c(), i(), p();
var g = function(e) {
	return {
		root: s({}, e.typography.button, {
			boxSizing: "border-box",
			minWidth: 64,
			padding: "6px 16px",
			borderRadius: e.shape.borderRadius,
			color: e.palette.text.primary,
			transition: e.transitions.create([
				"background-color",
				"box-shadow",
				"border"
			], { duration: e.transitions.duration.short }),
			"&:hover": {
				textDecoration: "none",
				backgroundColor: n(e.palette.text.primary, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" },
				"&$disabled": { backgroundColor: "transparent" }
			},
			"&$disabled": { color: e.palette.action.disabled }
		}),
		label: {
			width: "100%",
			display: "inherit",
			alignItems: "inherit",
			justifyContent: "inherit"
		},
		text: { padding: "6px 8px" },
		textPrimary: {
			color: e.palette.primary.main,
			"&:hover": {
				backgroundColor: n(e.palette.primary.main, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		textSecondary: {
			color: e.palette.secondary.main,
			"&:hover": {
				backgroundColor: n(e.palette.secondary.main, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		outlined: {
			padding: "5px 15px",
			border: `1px solid ${e.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
			"&$disabled": { border: `1px solid ${e.palette.action.disabledBackground}` }
		},
		outlinedPrimary: {
			color: e.palette.primary.main,
			border: `1px solid ${n(e.palette.primary.main, .5)}`,
			"&:hover": {
				border: `1px solid ${e.palette.primary.main}`,
				backgroundColor: n(e.palette.primary.main, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			}
		},
		outlinedSecondary: {
			color: e.palette.secondary.main,
			border: `1px solid ${n(e.palette.secondary.main, .5)}`,
			"&:hover": {
				border: `1px solid ${e.palette.secondary.main}`,
				backgroundColor: n(e.palette.secondary.main, e.palette.action.hoverOpacity),
				"@media (hover: none)": { backgroundColor: "transparent" }
			},
			"&$disabled": { border: `1px solid ${e.palette.action.disabled}` }
		},
		contained: {
			color: e.palette.getContrastText(e.palette.grey[300]),
			backgroundColor: e.palette.grey[300],
			boxShadow: e.shadows[2],
			"&:hover": {
				backgroundColor: e.palette.grey.A100,
				boxShadow: e.shadows[4],
				"@media (hover: none)": {
					boxShadow: e.shadows[2],
					backgroundColor: e.palette.grey[300]
				},
				"&$disabled": { backgroundColor: e.palette.action.disabledBackground }
			},
			"&$focusVisible": { boxShadow: e.shadows[6] },
			"&:active": { boxShadow: e.shadows[8] },
			"&$disabled": {
				color: e.palette.action.disabled,
				boxShadow: e.shadows[0],
				backgroundColor: e.palette.action.disabledBackground
			}
		},
		containedPrimary: {
			color: e.palette.primary.contrastText,
			backgroundColor: e.palette.primary.main,
			"&:hover": {
				backgroundColor: e.palette.primary.dark,
				"@media (hover: none)": { backgroundColor: e.palette.primary.main }
			}
		},
		containedSecondary: {
			color: e.palette.secondary.contrastText,
			backgroundColor: e.palette.secondary.main,
			"&:hover": {
				backgroundColor: e.palette.secondary.dark,
				"@media (hover: none)": { backgroundColor: e.palette.secondary.main }
			}
		},
		disableElevation: {
			boxShadow: "none",
			"&:hover": { boxShadow: "none" },
			"&$focusVisible": { boxShadow: "none" },
			"&:active": { boxShadow: "none" },
			"&$disabled": { boxShadow: "none" }
		},
		focusVisible: {},
		disabled: {},
		colorInherit: {
			color: "inherit",
			borderColor: "currentColor"
		},
		textSizeSmall: {
			padding: "4px 5px",
			fontSize: e.typography.pxToRem(13)
		},
		textSizeLarge: {
			padding: "8px 11px",
			fontSize: e.typography.pxToRem(15)
		},
		outlinedSizeSmall: {
			padding: "3px 9px",
			fontSize: e.typography.pxToRem(13)
		},
		outlinedSizeLarge: {
			padding: "7px 21px",
			fontSize: e.typography.pxToRem(15)
		},
		containedSizeSmall: {
			padding: "4px 10px",
			fontSize: e.typography.pxToRem(13)
		},
		containedSizeLarge: {
			padding: "8px 22px",
			fontSize: e.typography.pxToRem(15)
		},
		sizeSmall: {},
		sizeLarge: {},
		fullWidth: { width: "100%" },
		startIcon: {
			display: "inherit",
			marginRight: 8,
			marginLeft: -4,
			"&$iconSizeSmall": { marginLeft: -2 }
		},
		endIcon: {
			display: "inherit",
			marginRight: -4,
			marginLeft: 8,
			"&$iconSizeSmall": { marginRight: -2 }
		},
		iconSizeSmall: { "& > *:first-child": { fontSize: 18 } },
		iconSizeMedium: { "& > *:first-child": { fontSize: 20 } },
		iconSizeLarge: { "& > *:first-child": { fontSize: 22 } }
	};
}, _ = /*#__PURE__*/ h.forwardRef(function(e, n) {
	var r = e.children, i = e.classes, a = e.className, c = e.color, l = c === void 0 ? "default" : c, u = e.component, d = u === void 0 ? "button" : u, p = e.disabled, g = p === void 0 ? !1 : p, _ = e.disableElevation, v = _ === void 0 ? !1 : _, y = e.disableFocusRipple, b = y === void 0 ? !1 : y, x = e.endIcon, S = e.focusVisibleClassName, C = e.fullWidth, w = C === void 0 ? !1 : C, T = e.size, E = T === void 0 ? "medium" : T, D = e.startIcon, O = e.type, k = O === void 0 ? "button" : O, A = e.variant, j = A === void 0 ? "text" : A, M = t(e, [
		"children",
		"classes",
		"className",
		"color",
		"component",
		"disabled",
		"disableElevation",
		"disableFocusRipple",
		"endIcon",
		"focusVisibleClassName",
		"fullWidth",
		"size",
		"startIcon",
		"type",
		"variant"
	]), N = D && /*#__PURE__*/ h.createElement("span", { className: o(i.startIcon, i[`iconSize${f(E)}`]) }, D), P = x && /*#__PURE__*/ h.createElement("span", { className: o(i.endIcon, i[`iconSize${f(E)}`]) }, x);
	return /*#__PURE__*/ h.createElement(m, s({
		className: o(i.root, i[j], a, l === "inherit" ? i.colorInherit : l !== "default" && i[`${j}${f(l)}`], E !== "medium" && [i[`${j}Size${f(E)}`], i[`size${f(E)}`]], v && i.disableElevation, g && i.disabled, w && i.fullWidth),
		component: d,
		disabled: g,
		focusRipple: !b,
		focusVisibleClassName: o(i.focusVisible, S),
		ref: n,
		type: k
	}, M), /*#__PURE__*/ h.createElement("span", { className: i.label }, N, r, P));
}), v = u(g, { name: "MuiButton" })(_);
//#endregion
export { v as t };

//# sourceMappingURL=Button.js.map