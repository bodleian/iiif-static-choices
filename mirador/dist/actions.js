import { r as e } from "./chunk.js";
import { Bt as t, H as n, In as r, J as i, Qt as a, h as o, p as s, q as c, vn as l } from "./selectors.js";
//#region node_modules/mirador/dist/es/src/state/actions/action-types.js
var u = {
	ADD_COMPANION_WINDOW: "mirador/ADD_COMPANION_WINDOW",
	UPDATE_COMPANION_WINDOW: "mirador/UPDATE_COMPANION_WINDOW",
	REMOVE_COMPANION_WINDOW: "mirador/REMOVE_COMPANION_WINDOW",
	TOGGLE_TOC_NODE: "mirador/TOGGLE_TOC_NODE",
	UPDATE_WINDOW: "mirador/UPDATE_WINDOW",
	REQUEST_CANVAS_ANNOTATIONS: "mirador/REQUEST_CANVAS_ANNOTATIONS",
	HOVER_ANNOTATION: "mirador/HOVER_ANNOTATION",
	REQUEST_ANNOTATION: "mirador/REQUEST_ANNOTATION",
	RECEIVE_ANNOTATION: "mirador/RECEIVE_ANNOTATION",
	RECEIVE_ANNOTATION_FAILURE: "mirador/RECEIVE_ANNOTATION_FAILURE",
	DESELECT_ANNOTATION: "mirador/DESELECT_ANNOTATION",
	SELECT_ANNOTATION: "mirador/SELECT_ANNOTATION",
	TOGGLE_ANNOTATION_DISPLAY: "mirador/TOGGLE_ANNOTATION_DISPLAY",
	FOCUS_WINDOW: "mirador/FOCUS_WINDOW",
	SET_WORKSPACE_FULLSCREEN: "mirador/SET_WORKSPACE_FULLSCREEN",
	SET_WORKSPACE_VIEWPORT_POSITION: "mirador/SET_WORKSPACE_VIEWPORT_POSITION",
	ADD_MANIFEST: "mirador/ADD_MANIFEST",
	ADD_WINDOW: "mirador/ADD_WINDOW",
	ADD_ERROR: "mirador/ADD_ERROR",
	IMPORT_CONFIG: "mirador/IMPORT_CONFIG",
	IMPORT_MIRADOR_STATE: "mirador/IMPORT_MIRADOR_STATE",
	SET_CANVAS: "mirador/SET_CANVAS",
	MAXIMIZE_WINDOW: "mirador/MAXIMIZE_WINDOW",
	MINIMIZE_WINDOW: "mirador/MINIMIZE_WINDOW",
	UPDATE_WINDOW_POSITION: "mirador/UPDATE_WINDOW_POSITION",
	SET_WINDOW_SIZE: "mirador/SET_WINDOW_SIZE",
	REMOVE_WINDOW: "mirador/REMOVE_WINDOW",
	PICK_WINDOWING_SYSTEM: "mirador/PICK_WINDOWING_SYSTEM",
	REQUEST_MANIFEST: "mirador/REQUEST_MANIFEST",
	RECEIVE_MANIFEST: "mirador/RECEIVE_MANIFEST",
	RECEIVE_MANIFEST_FAILURE: "mirador/RECEIVE_MANIFEST_FAILURE",
	REMOVE_ERROR: "mirador/REMOVE_ERROR",
	SET_CONFIG: "mirador/SET_CONFIG",
	UPDATE_WORKSPACE: "mirador/UPDATE_WORKSPACE",
	SET_WINDOW_THUMBNAIL_POSITION: "mirador/SET_WINDOW_THUMBNAIL_POSITION",
	SET_WINDOW_VIEW_TYPE: "mirador/SET_WINDOW_VIEW_TYPE",
	SET_WORKSPACE_ADD_VISIBILITY: "mirador/SET_WORKSPACE_ADD_VISIBILITY",
	TOGGLE_WINDOW_SIDE_BAR: "mirador/TOGGLE_WINDOW_SIDE_BAR",
	TOGGLE_DRAGGING: "mirador/TOGGLE_DRAGGING",
	TOGGLE_ZOOM_CONTROLS: "mirador/TOGGLE_ZOOM_CONTROLS",
	UPDATE_CONFIG: "mirador/UPDATE_CONFIG",
	REMOVE_MANIFEST: "mirador/REMOVE_MANIFEST",
	REQUEST_INFO_RESPONSE: "mirador/REQUEST_INFO_RESPONSE",
	RECEIVE_INFO_RESPONSE: "mirador/RECEIVE_INFO_RESPONSE",
	RECEIVE_DEGRADED_INFO_RESPONSE: "mirador/RECEIVE_DEGRADED_INFO_RESPONSE",
	RECEIVE_INFO_RESPONSE_FAILURE: "mirador/RECEIVE_INFO_RESPONSE_FAILURE",
	REMOVE_INFO_RESPONSE: "mirador/REMOVE_INFO_RESPONSE",
	UPDATE_WORKSPACE_MOSAIC_LAYOUT: "mirador/UPDATE_WORKSPACE_MOSAIC_LAYOUT",
	UPDATE_VIEWPORT: "mirador/UPDATE_VIEWPORT",
	UPDATE_ELASTIC_WINDOW_LAYOUT: "mirador/UPDATE_ELASTIC_WINDOW_LAYOUT",
	ADD_AUTHENTICATION_REQUEST: "mirador/ADD_AUTHENTICATION_REQUEST",
	RESOLVE_AUTHENTICATION_REQUEST: "mirador/RESOLVE_AUTHENTICATION_REQUEST",
	REQUEST_ACCESS_TOKEN: "mirador/REQUEST_ACCESS_TOKEN",
	RECEIVE_ACCESS_TOKEN: "mirador/RECEIVE_ACCESS_TOKEN",
	RECEIVE_ACCESS_TOKEN_FAILURE: "mirador/RECEIVE_ACCESS_TOKEN_FAILURE",
	RESET_AUTHENTICATION_STATE: "mirador/RESET_AUTHENTICATION_STATE",
	CLEAR_ACCESS_TOKEN_QUEUE: "mirador/CLEAR_ACCESS_TOKEN_QUEUE",
	REQUEST_SEARCH: "mirador/REQUEST_SEARCH",
	RECEIVE_SEARCH: "mirador/RECEIVE_SEARCH",
	RECEIVE_SEARCH_FAILURE: "mirador/RECEIVE_SEARCH_FAILURE",
	REMOVE_SEARCH: "mirador/REMOVE_SEARCH",
	SET_CONTENT_SEARCH_CURRENT_ANNOTATIONS: "mirador/SET_CONTENT_SEARCH_CURRENT_ANNOTATIONS",
	UPDATE_LAYERS: "mirador/UPDATE_LAYERS",
	ADD_RESOURCE: "mirador/ADD_RESOURCE",
	REMOVE_RESOURCE: "mirador/REMOVE_RESOURCE",
	SHOW_COLLECTION_DIALOG: "mirador/SHOW_COLLECTION_DIALOG",
	HIDE_COLLECTION_DIALOG: "mirador/HIDE_COLLECTION_DIALOG"
};
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/companionWindow.js
function d(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function f(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? d(Object(n), !0).forEach(function(t) {
			p(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function p(e, t, n) {
	return (t = m(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function m(e) {
	var t = ee(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ee(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var h = {
	content: null,
	position: null
};
function g(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : h, i = `cw-${r()}`;
	return {
		id: i,
		payload: f(f(f({}, n), t), {}, {
			id: i,
			windowId: e
		}),
		type: u.ADD_COMPANION_WINDOW,
		windowId: e
	};
}
function _(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : h;
	return function(r, i) {
		var o = i(), s = t.position, c = s === "left" && a(o, {
			position: s,
			windowId: e
		})[0];
		r(c ? v(e, c, t) : g(e, t, n));
	};
}
function v(e, t, n) {
	return {
		id: t,
		payload: n,
		type: u.UPDATE_COMPANION_WINDOW,
		windowId: e
	};
}
function te(e, t) {
	return {
		id: t,
		type: u.REMOVE_COMPANION_WINDOW,
		windowId: e
	};
}
function y(e, t, n) {
	return function(r, i) {
		var a = i(), c = s(a, { companionWindowId: t }, !1), l = s(a, { companionWindowId: t }, !0), d = o(a, {
			id: t,
			windowId: e
		});
		return r({
			id: t,
			payload: p({}, n, { expanded: c.indexOf(n) !== -1 || l.indexOf(n) === -1 && d.indexOf(n) === -1 }),
			type: u.TOGGLE_TOC_NODE,
			windowId: e
		});
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/config.js
function b(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function x(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? b(Object(n), !0).forEach(function(t) {
			ne(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ne(e, t, n) {
	return (t = re(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function re(e) {
	var t = ie(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ie(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function S(e) {
	return {
		config: e,
		type: u.IMPORT_CONFIG
	};
}
function ae(e) {
	return {
		config: e,
		type: u.SET_CONFIG
	};
}
function C(e) {
	return {
		config: e,
		type: u.UPDATE_CONFIG
	};
}
function w(e) {
	return {
		state: x(x({}, e), {}, { workspace: x(x({}, e.workspace), {}, { id: r() }) }),
		type: u.IMPORT_MIRADOR_STATE
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/errors.js
function T(e) {
	return {
		id: `error-${r()}`,
		message: e,
		type: u.ADD_ERROR
	};
}
function E(e) {
	return {
		id: e,
		type: u.REMOVE_ERROR
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/window.js
var oe = ["companionWindows", "manifest"];
function D(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function O(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? D(Object(n), !0).forEach(function(t) {
			se(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function se(e, t, n) {
	return (t = ce(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ce(e) {
	var t = le(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function le(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ue(e) {
	return me(e) || pe(e) || fe(e) || de();
}
function de() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function fe(e, t) {
	if (e) {
		if (typeof e == "string") return k(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0;
	}
}
function pe(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function me(e) {
	if (Array.isArray(e)) return k(e);
}
function k(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function he(e, t) {
	if (e == null) return {};
	var n, r, i = ge(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ge(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
function A(e) {
	return {
		pan: arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		type: u.FOCUS_WINDOW,
		windowId: e
	};
}
function j(e) {
	var t = e.companionWindows, n = e.manifest, i = he(e, oe);
	return function(e, a) {
		var o = l(a()), s = o.config, c = o.workspace.windowIds, d = (c === void 0 ? [] : c).length, f = i.id || `window-${r()}`, p = `cw-${r()}`, m = [{
			content: "thumbnailNavigation",
			default: !0,
			id: p,
			position: i.thumbnailNavigationPosition || s.thumbnailNavigation.defaultPosition,
			windowId: f
		}].concat(ue((t || []).map(function(e, t) {
			return O(O({}, e), {}, { id: `cw-${r()}` });
		})));
		(i.sideBarPanel || s.window.defaultSideBarPanel || s.window.sideBarPanel) && m.unshift({
			content: i.sideBarPanel || i.defaultSearchQuery && "search" || s.window.defaultSideBarPanel || s.window.sideBarPanel,
			default: !0,
			id: `cw-${r()}`,
			position: "left",
			windowId: f
		});
		var ee = {
			canvasId: void 0,
			collectionIndex: 0,
			companionAreaOpen: !0,
			companionWindowIds: m.map(function(e) {
				return e.id;
			}),
			draggingEnabled: !0,
			highlightAllAnnotations: s.window.highlightAllAnnotations || !1,
			id: f,
			manifestId: null,
			maximized: !1,
			rangeId: null,
			rotation: null,
			selectedAnnotations: {},
			sideBarOpen: s.window.sideBarOpenByDefault === void 0 ? s.window.sideBarOpen || !!i.defaultSearchQuery : s.window.sideBarOpenByDefault || !!i.defaultSearchQuery,
			sideBarPanel: i.sideBarPanel || s.window.defaultSideBarPanel || s.window.sideBarPanel,
			thumbnailNavigationId: p
		};
		e({
			companionWindows: m,
			elasticLayout: O(O({}, s.window.elastic || {
				height: 400,
				width: 480
			}), {}, {
				x: 200 + (Math.floor(d / 10) * 50 + d * 30 % 300),
				y: 200 + d * 50 % 300
			}),
			manifest: n,
			type: u.ADD_WINDOW,
			window: O(O({}, ee), i)
		});
	};
}
function M(e, t) {
	return {
		id: e,
		payload: t,
		type: u.UPDATE_WINDOW
	};
}
function N(e, t) {
	return {
		type: u.MAXIMIZE_WINDOW,
		windowId: e
	};
}
function P(e) {
	return {
		type: u.MINIMIZE_WINDOW,
		windowId: e
	};
}
function F(e, t) {
	return {
		id: e,
		payload: { companionAreaOpen: t },
		type: u.UPDATE_WINDOW
	};
}
function I(e) {
	return {
		type: u.REMOVE_WINDOW,
		windowId: e
	};
}
function L(e) {
	return {
		type: u.TOGGLE_WINDOW_SIDE_BAR,
		windowId: e
	};
}
function R(e, t) {
	return function(n, r) {
		var i = r().windows[e].thumbnailNavigationId;
		n({
			id: i,
			payload: { position: t },
			type: u.UPDATE_COMPANION_WINDOW
		});
	};
}
function z(e, t) {
	return {
		type: u.SET_WINDOW_VIEW_TYPE,
		viewType: t,
		windowId: e
	};
}
function B(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
	return {
		collectionPath: t,
		manifestId: e,
		type: u.SHOW_COLLECTION_DIALOG,
		windowId: n
	};
}
function V(e) {
	return {
		type: u.HIDE_COLLECTION_DIALOG,
		windowId: e
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/manifest.js
function H(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? H(Object(n), !0).forEach(function(t) {
			_e(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function _e(e, t, n) {
	return (t = ve(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ve(e) {
	var t = ye(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ye(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function W(e, t) {
	return {
		manifestId: e,
		properties: t,
		type: u.REQUEST_MANIFEST
	};
}
function G(e, t) {
	return {
		manifestId: e,
		manifestJson: t,
		type: u.RECEIVE_MANIFEST
	};
}
function K(e, t) {
	return {
		error: t,
		manifestId: e,
		type: u.RECEIVE_MANIFEST_FAILURE
	};
}
function q(e, t) {
	return W(e, U(U({}, t), {}, { isFetching: !0 }));
}
function be(e) {
	return {
		manifestId: e,
		type: u.REMOVE_MANIFEST
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/infoResponse.js
function J(e, t, n) {
	return {
		imageResource: t,
		infoId: e,
		type: u.REQUEST_INFO_RESPONSE,
		windowId: n
	};
}
function Y(e, t, n, r) {
	return {
		infoId: e,
		infoJson: t,
		ok: n,
		tokenServiceId: r,
		type: u.RECEIVE_INFO_RESPONSE
	};
}
function X(e, t, n, r, i) {
	return {
		infoId: e,
		infoJson: t,
		ok: n,
		tokenServiceId: r,
		type: u.RECEIVE_DEGRADED_INFO_RESPONSE,
		windowId: i
	};
}
function Z(e, t, n) {
	return {
		error: t,
		infoId: e,
		tokenServiceId: n,
		type: u.RECEIVE_INFO_RESPONSE_FAILURE
	};
}
function xe(e) {
	var t = e.imageId, n = e.imageResource, r = e.windowId, i = n && n.getServices()[0];
	return J(t || i.id, i, r);
}
function Se(e) {
	return {
		infoId: e,
		type: u.REMOVE_INFO_RESPONSE
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/canvas.js
function Ce(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function we(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ce(Object(n), !0).forEach(function(t) {
			Te(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Te(e, t, n) {
	return (t = Ee(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ee(e) {
	var t = De(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function De(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Q(e, r) {
	var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	return function(o, s) {
		var c = s(), l = t(c).osdConfig.preserveViewport, d = i;
		d ||= (n(c, {
			canvasId: r,
			windowId: e
		}) || []).map(function(e) {
			return e.id;
		}), o(we(we({}, a), {}, {
			canvasId: r,
			preserveViewport: l,
			type: u.SET_CANVAS,
			visibleCanvases: d,
			windowId: e
		}));
	};
}
function Oe(e) {
	return function(t, n) {
		var r = c(n(), { windowId: e }), i = (r || []).map(function(e) {
			return e.id;
		});
		r && t(Q(e, i[0], i));
	};
}
function ke(e) {
	return function(t, n) {
		var r = i(n(), { windowId: e }), a = (r || []).map(function(e) {
			return e.id;
		});
		r && t(Q(e, a[0], a));
	};
}
function Ae(e, t) {
	return {
		payload: t,
		type: u.UPDATE_VIEWPORT,
		windowId: e
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/workspace.js
function je(e) {
	return {
		config: e,
		type: u.UPDATE_WORKSPACE
	};
}
function Me(e) {
	return {
		isFullscreenEnabled: e,
		type: u.SET_WORKSPACE_FULLSCREEN
	};
}
function Ne(e) {
	return {
		showZoomControls: e,
		type: u.TOGGLE_ZOOM_CONTROLS
	};
}
function Pe(e) {
	return {
		layout: e,
		type: u.UPDATE_WORKSPACE_MOSAIC_LAYOUT
	};
}
function Fe(e) {
	return {
		isWorkspaceAddVisible: e,
		type: u.SET_WORKSPACE_ADD_VISIBILITY
	};
}
function Ie(e) {
	return {
		payload: { position: {
			x: e.x,
			y: e.y
		} },
		type: u.SET_WORKSPACE_VIEWPORT_POSITION
	};
}
function Le(e) {
	var t = e.width;
	return {
		payload: { position: {
			height: e.height,
			width: t
		} },
		type: u.SET_WORKSPACE_VIEWPORT_POSITION
	};
}
function Re() {
	return { type: u.TOGGLE_DRAGGING };
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/annotation.js
function ze(e, t) {
	return {
		canvasId: t,
		type: u.REQUEST_CANVAS_ANNOTATIONS,
		windowId: e
	};
}
function Be(e, t) {
	return {
		annotationId: t,
		targetId: e,
		type: u.REQUEST_ANNOTATION
	};
}
function Ve(e, t, n) {
	return {
		annotationId: t,
		annotationJson: n,
		targetId: e,
		type: u.RECEIVE_ANNOTATION
	};
}
function He(e, t, n) {
	return {
		annotationId: t,
		error: n,
		targetId: e,
		type: u.RECEIVE_ANNOTATION_FAILURE
	};
}
function Ue(e, t) {
	return {
		annotationId: t,
		type: u.SELECT_ANNOTATION,
		windowId: e
	};
}
function We(e, t) {
	return {
		annotationId: t,
		type: u.DESELECT_ANNOTATION,
		windowId: e
	};
}
function Ge(e) {
	return {
		type: u.TOGGLE_ANNOTATION_DISPLAY,
		windowId: e
	};
}
function Ke(e, t) {
	return {
		annotationIds: t,
		type: u.HOVER_ANNOTATION,
		windowId: e
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/auth.js
function qe(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Je(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? qe(Object(n), !0).forEach(function(t) {
			Ye(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ye(e, t, n) {
	return (t = Xe(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Xe(e) {
	var t = Ze(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ze(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Qe(e, t) {
	return {
		id: t,
		profile: arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
		type: u.ADD_AUTHENTICATION_REQUEST,
		windowId: e
	};
}
function $e(e, t, n) {
	return Je({
		id: e,
		tokenServiceId: t,
		type: u.RESOLVE_AUTHENTICATION_REQUEST
	}, n);
}
function et(e, t) {
	return {
		authId: t,
		serviceId: e,
		type: u.REQUEST_ACCESS_TOKEN
	};
}
function tt(e, t, n) {
	return {
		authId: e,
		json: n,
		serviceId: t,
		type: u.RECEIVE_ACCESS_TOKEN
	};
}
function $(e, t, n) {
	return {
		authId: e,
		error: n,
		serviceId: t,
		type: u.RECEIVE_ACCESS_TOKEN_FAILURE
	};
}
function nt(e, t, n) {
	return n.accessToken ? tt(e, t, n) : $(e, t, n);
}
function rt(e) {
	return {
		id: e.authServiceId,
		tokenServiceId: e.tokenServiceId,
		type: u.RESET_AUTHENTICATION_STATE
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/elasticLayout.js
function it(e, t) {
	return {
		payload: t,
		type: u.UPDATE_ELASTIC_WINDOW_LAYOUT,
		windowId: e
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/search.js
function at(e, t, n, r) {
	return {
		companionWindowId: t,
		query: r,
		searchId: n,
		type: u.REQUEST_SEARCH,
		windowId: e
	};
}
function ot(e, t, n, r) {
	return {
		companionWindowId: t,
		searchId: n,
		searchJson: r,
		type: u.RECEIVE_SEARCH,
		windowId: e
	};
}
function st(e, t, n, r) {
	return {
		companionWindowId: t,
		error: r,
		searchId: n,
		type: u.RECEIVE_SEARCH_FAILURE,
		windowId: e
	};
}
function ct(e, t) {
	return {
		companionWindowId: t,
		type: u.REMOVE_SEARCH,
		windowId: e
	};
}
function lt(e, t, n, r) {
	return at(e, t, n, r);
}
function ut(e, t, n) {
	return {
		annotationIds: n,
		companionWindowId: t,
		type: u.SET_CONTENT_SEARCH_CURRENT_ANNOTATIONS,
		windowId: e
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/layers.js
function dt(e, t, n) {
	return {
		canvasId: t,
		payload: n,
		type: u.UPDATE_LAYERS,
		windowId: e
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/catalog.js
function ft(e) {
	return {
		manifestId: e,
		manifestJson: arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
		payload: arguments.length > 2 ? arguments[2] : void 0,
		type: u.ADD_RESOURCE
	};
}
function pt(e) {
	return {
		manifestId: e,
		type: u.REMOVE_RESOURCE
	};
}
//#endregion
//#region node_modules/mirador/dist/es/src/state/actions/index.js
var mt = /* @__PURE__ */ e({
	addAuthenticationRequest: () => Qe,
	addCompanionWindow: () => g,
	addError: () => T,
	addOrUpdateCompanionWindow: () => _,
	addResource: () => ft,
	addWindow: () => j,
	deselectAnnotation: () => We,
	fetchInfoResponse: () => xe,
	fetchManifest: () => q,
	fetchSearch: () => lt,
	focusWindow: () => A,
	hideCollectionDialog: () => V,
	hoverAnnotation: () => Ke,
	importConfig: () => S,
	importMiradorState: () => w,
	maximizeWindow: () => N,
	minimizeWindow: () => P,
	receiveAccessToken: () => tt,
	receiveAccessTokenFailure: () => $,
	receiveAnnotation: () => Ve,
	receiveAnnotationFailure: () => He,
	receiveDegradedInfoResponse: () => X,
	receiveInfoResponse: () => Y,
	receiveInfoResponseFailure: () => Z,
	receiveManifest: () => G,
	receiveManifestFailure: () => K,
	receiveSearch: () => ot,
	receiveSearchFailure: () => st,
	removeCompanionWindow: () => te,
	removeError: () => E,
	removeInfoResponse: () => Se,
	removeManifest: () => be,
	removeResource: () => pt,
	removeSearch: () => ct,
	removeWindow: () => I,
	requestAccessToken: () => et,
	requestAnnotation: () => Be,
	requestCanvasAnnotations: () => ze,
	requestInfoResponse: () => J,
	requestManifest: () => W,
	requestSearch: () => at,
	resetAuthenticationState: () => rt,
	resolveAccessTokenRequest: () => nt,
	resolveAuthenticationRequest: () => $e,
	selectAnnotation: () => Ue,
	setCanvas: () => Q,
	setCompanionAreaOpen: () => F,
	setConfig: () => ae,
	setContentSearchCurrentAnnotation: () => ut,
	setNextCanvas: () => Oe,
	setPreviousCanvas: () => ke,
	setWindowThumbnailPosition: () => R,
	setWindowViewType: () => z,
	setWorkspaceAddVisibility: () => Fe,
	setWorkspaceFullscreen: () => Me,
	setWorkspaceViewportDimensions: () => Le,
	setWorkspaceViewportPosition: () => Ie,
	showCollectionDialog: () => B,
	toggleAnnotationDisplay: () => Ge,
	toggleDraggingEnabled: () => Re,
	toggleNode: () => y,
	toggleWindowSideBar: () => L,
	toggleZoomControls: () => Ne,
	updateCompanionWindow: () => v,
	updateConfig: () => C,
	updateElasticWindowLayout: () => it,
	updateLayers: () => dt,
	updateViewport: () => Ae,
	updateWindow: () => M,
	updateWorkspace: () => je,
	updateWorkspaceMosaicLayout: () => Pe
});
//#endregion
export { L as $, je as A, q as B, Ge as C, Ie as D, Le as E, Ae as F, V as G, K as H, xe as I, I as J, N as K, X as L, Q as M, Oe as N, Re as O, ke as P, B as Q, Y as R, Ue as S, Me as T, j as U, G as V, A as W, R as X, F as Y, z as Z, Ke as _, lt as a, C as at, Be as b, ct as c, y as ct, Qe as d, M as et, et as f, We as g, $e as h, dt as i, w as it, Pe as j, Ne as k, ut as l, v as lt, nt as m, ft as n, E as nt, ot as o, _ as ot, rt as p, P as q, pt as r, S as rt, st as s, te as st, mt as t, T as tt, it as u, u as ut, Ve as v, Fe as w, ze as x, He as y, Z as z };

//# sourceMappingURL=actions.js.map