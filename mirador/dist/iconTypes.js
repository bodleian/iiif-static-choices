import { n as e } from "./chunk.js";
import { s as t, t as n } from "./tslib.es6.js";
//#region node_modules/lower-case/dist.es2015/index.js
function r(e) {
	return e.toLowerCase();
}
var i = e((() => {}));
//#endregion
//#region node_modules/no-case/dist.es2015/index.js
function a(e, t) {
	t === void 0 && (t = {});
	for (var n = t.splitRegexp, i = n === void 0 ? s : n, a = t.stripRegexp, l = a === void 0 ? c : a, u = t.transform, d = u === void 0 ? r : u, f = t.delimiter, p = f === void 0 ? " " : f, m = o(o(e, i, "$1\0$2"), l, "\0"), h = 0, g = m.length; m.charAt(h) === "\0";) h++;
	for (; m.charAt(g - 1) === "\0";) g--;
	return m.slice(h, g).split("\0").map(d).join(p);
}
function o(e, t, n) {
	return t instanceof RegExp ? e.replace(t, n) : t.reduce(function(e, t) {
		return e.replace(t, n);
	}, e);
}
var s, c, l = e((() => {
	i(), s = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], c = /[^A-Z0-9]+/gi;
}));
//#endregion
//#region node_modules/pascal-case/dist.es2015/index.js
function u(e, t) {
	var n = e.charAt(0), r = e.substr(1).toLowerCase();
	return t > 0 && n >= "0" && n <= "9" ? "_" + n + r : "" + n.toUpperCase() + r;
}
function d(e, t) {
	return t === void 0 && (t = {}), a(e, n({
		delimiter: "",
		transform: u
	}, t));
}
var f = e((() => {
	t(), l();
})), p = e((() => {})), m = e((() => {})), h = e((() => {}));
//#endregion
//#region node_modules/dot-case/dist.es2015/index.js
function g(e, t) {
	return t === void 0 && (t = {}), a(e, n({ delimiter: "." }, t));
}
var _ = e((() => {
	t(), l();
})), v = e((() => {})), y = e((() => {})), b = e((() => {})), x = e((() => {}));
//#endregion
//#region node_modules/snake-case/dist.es2015/index.js
function S(e, t) {
	return t === void 0 && (t = {}), g(e, n({ delimiter: "_" }, t));
}
var C = e((() => {
	t(), _();
})), w = e((() => {
	p(), m(), h(), _(), v(), l(), y(), f(), b(), x(), C();
})), T, E = e((() => {
	(function(e) {
		e[e.STANDARD = 16] = "STANDARD", e[e.LARGE = 20] = "LARGE";
	})(T ||= {});
}));
//#endregion
export { S as a, C as i, E as n, f as o, w as r, d as s, T as t };

//# sourceMappingURL=iconTypes.js.map