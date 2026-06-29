import { o as e, t } from "./chunk.js";
import { $i as n, $t as r, Ai as i, Bn as a, Bt as o, D as s, Fn as c, Gi as l, Hn as u, Ii as d, Ji as f, K as p, Kt as m, Li as h, Ln as g, Mn as _, Oi as v, Q as y, R as b, Sn as x, Ui as S, W as C, _ as w, b as T, bn as ee, ci as E, da as D, dn as O, n as k, nt as te, or as A, qi as j, sr as M, ta as N, ua as ne, un as re, v as P, xn as F, y as I, z as L, zi as R } from "./selectors.js";
import { F as z, S as ie, _ as B, g as V } from "./actions.js";
import { t as ae } from "./classnames.js";
import { n as H, t as oe } from "./PluginHook.js";
import { t as U } from "./debounce.js";
import { t as W } from "./WorkspaceArea.js";
//#region node_modules/openseadragon/build/openseadragon/openseadragon.js
var se = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return new n.Viewer(e);
	}
	(function(e) {
		e.version = {
			versionStr: "5.0.1",
			major: 5,
			minor: 0,
			revision: 1
		};
		var t = {
			"[object Boolean]": "boolean",
			"[object Number]": "number",
			"[object String]": "string",
			"[object Function]": "function",
			"[object AsyncFunction]": "function",
			"[object Promise]": "promise",
			"[object Array]": "array",
			"[object Date]": "date",
			"[object RegExp]": "regexp",
			"[object Object]": "object"
		}, r = Object.prototype.toString, i = Object.prototype.hasOwnProperty;
		e.isFunction = function(t) {
			return e.type(t) === "function";
		}, e.isArray = Array.isArray || function(t) {
			return e.type(t) === "array";
		}, e.isWindow = function(e) {
			return e && typeof e == "object" && "setInterval" in e;
		}, e.type = function(e) {
			return e == null ? String(e) : t[r.call(e)] || "object";
		}, e.isPlainObject = function(t) {
			if (!t || n.type(t) !== "object" || t.nodeType || e.isWindow(t) || t.constructor && !i.call(t, "constructor") && !i.call(t.constructor.prototype, "isPrototypeOf")) return !1;
			var r;
			for (var a in t) r = a;
			return r === void 0 || i.call(t, r);
		}, e.isEmptyObject = function(e) {
			for (var t in e) return !1;
			return !0;
		}, e.freezeObject = function(t) {
			return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(e) {
				return e;
			}, e.freezeObject(t);
		}, e.supportsCanvas = function() {
			var t = document.createElement("canvas");
			return !!(e.isFunction(t.getContext) && t.getContext("2d"));
		}(), e.isCanvasTainted = function(e) {
			var t = !1;
			try {
				e.getContext("2d").getImageData(0, 0, 1, 1);
			} catch {
				t = !0;
			}
			return t;
		}, e.supportsAddEventListener = function() {
			return !!(document.documentElement.addEventListener && document.addEventListener);
		}(), e.supportsRemoveEventListener = function() {
			return !!(document.documentElement.removeEventListener && document.removeEventListener);
		}(), e.supportsEventListenerOptions = function() {
			var t = 0;
			if (e.supportsAddEventListener) try {
				var n = {
					get capture() {
						return t++, !1;
					},
					get once() {
						return t++, !1;
					},
					get passive() {
						return t++, !1;
					}
				};
				window.addEventListener("test", null, n), window.removeEventListener("test", null, n);
			} catch {
				t = 0;
			}
			return t >= 3;
		}(), e.getCurrentPixelDensityRatio = function() {
			if (e.supportsCanvas) {
				var t = document.createElement("canvas").getContext("2d"), n = window.devicePixelRatio || 1, r = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
				return Math.max(n, 1) / r;
			} else return 1;
		}, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
	})(n), (function(e) {
		e.extend = function() {
			var t, r, i, a, o, s, c = arguments[0] || {}, l = arguments.length, u = !1, d = 1;
			for (typeof c == "boolean" && (u = c, c = arguments[1] || {}, d = 2), typeof c != "object" && !n.isFunction(c) && (c = {}), l === d && (c = this, --d); d < l; d++) if (t = arguments[d], t !== null || t !== void 0) for (r in t) {
				var f = Object.getOwnPropertyDescriptor(t, r);
				if (f !== void 0) {
					if (f.get || f.set) {
						Object.defineProperty(c, r, f);
						continue;
					}
					a = f.value;
				} else {
					e.console.warn("Could not copy inherited property \"" + r + "\".");
					continue;
				}
				c !== a && (u && a && (n.isPlainObject(a) || (o = n.isArray(a))) ? (i = c[r], o ? (o = !1, s = i && n.isArray(i) ? i : []) : s = i && n.isPlainObject(i) ? i : {}, c[r] = n.extend(u, s, a)) : a !== void 0 && (c[r] = a));
			}
			return c;
		}, e.extend(e, {
			DEFAULT_SETTINGS: {
				xmlPath: null,
				tileSources: null,
				tileHost: null,
				initialPage: 0,
				crossOriginPolicy: !1,
				ajaxWithCredentials: !1,
				loadTilesWithAjax: !1,
				ajaxHeaders: {},
				splitHashDataForPost: !1,
				panHorizontal: !0,
				panVertical: !0,
				constrainDuringPan: !1,
				wrapHorizontal: !1,
				wrapVertical: !1,
				visibilityRatio: .5,
				minPixelRatio: .5,
				defaultZoomLevel: 0,
				minZoomLevel: null,
				maxZoomLevel: null,
				homeFillsViewer: !1,
				clickTimeThreshold: 300,
				clickDistThreshold: 5,
				dblClickTimeThreshold: 300,
				dblClickDistThreshold: 20,
				springStiffness: 6.5,
				animationTime: 1.2,
				gestureSettingsMouse: {
					dragToPan: !0,
					scrollToZoom: !0,
					clickToZoom: !0,
					dblClickToZoom: !1,
					dblClickDragToZoom: !1,
					pinchToZoom: !1,
					zoomToRefPoint: !0,
					flickEnabled: !1,
					flickMinSpeed: 120,
					flickMomentum: .25,
					pinchRotate: !1
				},
				gestureSettingsTouch: {
					dragToPan: !0,
					scrollToZoom: !1,
					clickToZoom: !1,
					dblClickToZoom: !0,
					dblClickDragToZoom: !0,
					pinchToZoom: !0,
					zoomToRefPoint: !0,
					flickEnabled: !0,
					flickMinSpeed: 120,
					flickMomentum: .25,
					pinchRotate: !1
				},
				gestureSettingsPen: {
					dragToPan: !0,
					scrollToZoom: !1,
					clickToZoom: !0,
					dblClickToZoom: !1,
					dblClickDragToZoom: !1,
					pinchToZoom: !1,
					zoomToRefPoint: !0,
					flickEnabled: !1,
					flickMinSpeed: 120,
					flickMomentum: .25,
					pinchRotate: !1
				},
				gestureSettingsUnknown: {
					dragToPan: !0,
					scrollToZoom: !1,
					clickToZoom: !1,
					dblClickToZoom: !0,
					dblClickDragToZoom: !1,
					pinchToZoom: !0,
					zoomToRefPoint: !0,
					flickEnabled: !0,
					flickMinSpeed: 120,
					flickMomentum: .25,
					pinchRotate: !1
				},
				zoomPerClick: 2,
				zoomPerScroll: 1.2,
				zoomPerDblClickDrag: 1.2,
				zoomPerSecond: 1,
				blendTime: 0,
				alwaysBlend: !1,
				autoHideControls: !0,
				immediateRender: !1,
				minZoomImageRatio: .9,
				maxZoomPixelRatio: 1.1,
				smoothTileEdgesMinZoom: 1.1,
				iOSDevice: function() {
					if (typeof navigator != "object") return !1;
					var e = navigator.userAgent;
					return typeof e == "string" ? e.indexOf("iPhone") !== -1 || e.indexOf("iPad") !== -1 || e.indexOf("iPod") !== -1 : !1;
				}(),
				pixelsPerWheelLine: 40,
				pixelsPerArrowPress: 40,
				autoResize: !0,
				preserveImageSizeOnResize: !1,
				minScrollDeltaTime: 50,
				rotationIncrement: 90,
				maxTilesPerFrame: 1,
				showSequenceControl: !0,
				sequenceControlAnchor: null,
				preserveViewport: !1,
				preserveOverlays: !1,
				navPrevNextWrap: !1,
				showNavigationControl: !0,
				navigationControlAnchor: null,
				showZoomControl: !0,
				showHomeControl: !0,
				showFullPageControl: !0,
				showRotationControl: !1,
				showFlipControl: !1,
				controlsFadeDelay: 2e3,
				controlsFadeLength: 1500,
				mouseNavEnabled: !0,
				showNavigator: !1,
				navigatorElement: null,
				navigatorId: null,
				navigatorPosition: null,
				navigatorSizeRatio: .2,
				navigatorMaintainSizeRatio: !1,
				navigatorTop: null,
				navigatorLeft: null,
				navigatorHeight: null,
				navigatorWidth: null,
				navigatorAutoResize: !0,
				navigatorAutoFade: !0,
				navigatorRotate: !0,
				navigatorBackground: "#000",
				navigatorOpacity: .8,
				navigatorBorderColor: "#555",
				navigatorDisplayRegionColor: "#900",
				degrees: 0,
				flipped: !1,
				overlayPreserveContentDirection: !0,
				opacity: 1,
				compositeOperation: null,
				drawer: [
					"webgl",
					"canvas",
					"html"
				],
				drawerOptions: {
					webgl: {},
					canvas: {},
					html: {},
					custom: {}
				},
				preload: !1,
				imageSmoothingEnabled: !0,
				placeholderFillStyle: null,
				subPixelRoundingForTransparency: null,
				showReferenceStrip: !1,
				referenceStripScroll: "horizontal",
				referenceStripElement: null,
				referenceStripHeight: null,
				referenceStripWidth: null,
				referenceStripPosition: "BOTTOM_LEFT",
				referenceStripSizeRatio: .2,
				collectionRows: 3,
				collectionColumns: 0,
				collectionLayout: "horizontal",
				collectionMode: !1,
				collectionTileSize: 800,
				collectionTileMargin: 80,
				imageLoaderLimit: 0,
				maxImageCacheCount: 200,
				timeout: 3e4,
				tileRetryMax: 0,
				tileRetryDelay: 2500,
				prefixUrl: "/images/",
				navImages: {
					zoomIn: {
						REST: "zoomin_rest.png",
						GROUP: "zoomin_grouphover.png",
						HOVER: "zoomin_hover.png",
						DOWN: "zoomin_pressed.png"
					},
					zoomOut: {
						REST: "zoomout_rest.png",
						GROUP: "zoomout_grouphover.png",
						HOVER: "zoomout_hover.png",
						DOWN: "zoomout_pressed.png"
					},
					home: {
						REST: "home_rest.png",
						GROUP: "home_grouphover.png",
						HOVER: "home_hover.png",
						DOWN: "home_pressed.png"
					},
					fullpage: {
						REST: "fullpage_rest.png",
						GROUP: "fullpage_grouphover.png",
						HOVER: "fullpage_hover.png",
						DOWN: "fullpage_pressed.png"
					},
					rotateleft: {
						REST: "rotateleft_rest.png",
						GROUP: "rotateleft_grouphover.png",
						HOVER: "rotateleft_hover.png",
						DOWN: "rotateleft_pressed.png"
					},
					rotateright: {
						REST: "rotateright_rest.png",
						GROUP: "rotateright_grouphover.png",
						HOVER: "rotateright_hover.png",
						DOWN: "rotateright_pressed.png"
					},
					flip: {
						REST: "flip_rest.png",
						GROUP: "flip_grouphover.png",
						HOVER: "flip_hover.png",
						DOWN: "flip_pressed.png"
					},
					previous: {
						REST: "previous_rest.png",
						GROUP: "previous_grouphover.png",
						HOVER: "previous_hover.png",
						DOWN: "previous_pressed.png"
					},
					next: {
						REST: "next_rest.png",
						GROUP: "next_grouphover.png",
						HOVER: "next_hover.png",
						DOWN: "next_pressed.png"
					}
				},
				debugMode: !1,
				debugGridColor: [
					"#437AB2",
					"#1B9E77",
					"#D95F02",
					"#7570B3",
					"#E7298A",
					"#66A61E",
					"#E6AB02",
					"#A6761D",
					"#666666"
				],
				silenceMultiImageWarnings: !1
			},
			delegate: function(e, t) {
				return function() {
					var n = arguments;
					return n === void 0 && (n = []), t.apply(e, n);
				};
			},
			BROWSERS: {
				UNKNOWN: 0,
				IE: 1,
				FIREFOX: 2,
				SAFARI: 3,
				CHROME: 4,
				OPERA: 5,
				EDGE: 6,
				CHROMEEDGE: 7
			},
			SUBPIXEL_ROUNDING_OCCURRENCES: {
				NEVER: 0,
				ONLY_AT_REST: 1,
				ALWAYS: 2
			},
			_viewers: /* @__PURE__ */ new Map(),
			getViewer: function(t) {
				return e._viewers.get(this.getElement(t));
			},
			getElement: function(e) {
				return typeof e == "string" && (e = document.getElementById(e)), e;
			},
			getElementPosition: function(t) {
				var n = new e.Point(), r, i;
				for (t = e.getElement(t), r = e.getElementStyle(t).position === "fixed", i = a(t, r); i;) n.x += t.offsetLeft, n.y += t.offsetTop, r && (n = n.plus(e.getPageScroll())), t = i, r = e.getElementStyle(t).position === "fixed", i = a(t, r);
				return n;
			},
			getElementOffset: function(t) {
				t = e.getElement(t);
				var n = t && t.ownerDocument, r, i, a = {
					top: 0,
					left: 0
				};
				return n ? (r = n.documentElement, t.getBoundingClientRect !== void 0 && (a = t.getBoundingClientRect()), i = n === n.window ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1, new e.Point(a.left + (i.pageXOffset || r.scrollLeft) - (r.clientLeft || 0), a.top + (i.pageYOffset || r.scrollTop) - (r.clientTop || 0))) : new e.Point();
			},
			getElementSize: function(t) {
				return t = e.getElement(t), new e.Point(t.clientWidth, t.clientHeight);
			},
			getElementStyle: document.documentElement.currentStyle ? function(t) {
				return t = e.getElement(t), t.currentStyle;
			} : function(t) {
				return t = e.getElement(t), window.getComputedStyle(t, "");
			},
			getCssPropertyWithVendorPrefix: function(t) {
				var n = {};
				return e.getCssPropertyWithVendorPrefix = function(t) {
					if (n[t] !== void 0) return n[t];
					var r = document.createElement("div").style, i = null;
					if (r[t] !== void 0) i = t;
					else for (var a = [
						"Webkit",
						"Moz",
						"MS",
						"O",
						"webkit",
						"moz",
						"ms",
						"o"
					], o = e.capitalizeFirstLetter(t), s = 0; s < a.length; s++) {
						var c = a[s] + o;
						if (r[c] !== void 0) {
							i = c;
							break;
						}
					}
					return n[t] = i, i;
				}, e.getCssPropertyWithVendorPrefix(t);
			},
			capitalizeFirstLetter: function(e) {
				return e.charAt(0).toUpperCase() + e.slice(1);
			},
			positiveModulo: function(e, t) {
				var n = e % t;
				return n < 0 && (n += t), n;
			},
			pointInElement: function(t, n) {
				t = e.getElement(t);
				var r = e.getElementOffset(t), i = e.getElementSize(t);
				return n.x >= r.x && n.x < r.x + i.x && n.y < r.y + i.y && n.y >= r.y;
			},
			getMousePosition: function(t) {
				if (typeof t.pageX == "number") e.getMousePosition = function(t) {
					var n = new e.Point();
					return n.x = t.pageX, n.y = t.pageY, n;
				};
				else if (typeof t.clientX == "number") e.getMousePosition = function(t) {
					var n = new e.Point();
					return n.x = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n.y = t.clientY + document.body.scrollTop + document.documentElement.scrollTop, n;
				};
				else throw Error("Unknown event mouse position, no known technique.");
				return e.getMousePosition(t);
			},
			getPageScroll: function() {
				var t = document.documentElement || {}, n = document.body || {};
				if (typeof window.pageXOffset == "number") e.getPageScroll = function() {
					return new e.Point(window.pageXOffset, window.pageYOffset);
				};
				else if (n.scrollLeft || n.scrollTop) e.getPageScroll = function() {
					return new e.Point(document.body.scrollLeft, document.body.scrollTop);
				};
				else if (t.scrollLeft || t.scrollTop) e.getPageScroll = function() {
					return new e.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop);
				};
				else return new e.Point(0, 0);
				return e.getPageScroll();
			},
			setPageScroll: function(t) {
				if (window.scrollTo !== void 0) e.setPageScroll = function(e) {
					window.scrollTo(e.x, e.y);
				};
				else {
					var n = e.getPageScroll();
					if (n.x === t.x && n.y === t.y) return;
					document.body.scrollLeft = t.x, document.body.scrollTop = t.y;
					var r = e.getPageScroll();
					if (r.x !== n.x && r.y !== n.y) {
						e.setPageScroll = function(e) {
							document.body.scrollLeft = e.x, document.body.scrollTop = e.y;
						};
						return;
					}
					if (document.documentElement.scrollLeft = t.x, document.documentElement.scrollTop = t.y, r = e.getPageScroll(), r.x !== n.x && r.y !== n.y) {
						e.setPageScroll = function(e) {
							document.documentElement.scrollLeft = e.x, document.documentElement.scrollTop = e.y;
						};
						return;
					}
					e.setPageScroll = function(e) {};
				}
				e.setPageScroll(t);
			},
			getWindowSize: function() {
				var t = document.documentElement || {}, n = document.body || {};
				if (typeof window.innerWidth == "number") e.getWindowSize = function() {
					return new e.Point(window.innerWidth, window.innerHeight);
				};
				else if (t.clientWidth || t.clientHeight) e.getWindowSize = function() {
					return new e.Point(document.documentElement.clientWidth, document.documentElement.clientHeight);
				};
				else if (n.clientWidth || n.clientHeight) e.getWindowSize = function() {
					return new e.Point(document.body.clientWidth, document.body.clientHeight);
				};
				else throw Error("Unknown window size, no known technique.");
				return e.getWindowSize();
			},
			makeCenteredNode: function(t) {
				t = e.getElement(t);
				var n = [
					e.makeNeutralElement("div"),
					e.makeNeutralElement("div"),
					e.makeNeutralElement("div")
				];
				return e.extend(n[0].style, {
					display: "table",
					height: "100%",
					width: "100%"
				}), e.extend(n[1].style, { display: "table-row" }), e.extend(n[2].style, {
					display: "table-cell",
					verticalAlign: "middle",
					textAlign: "center"
				}), n[0].appendChild(n[1]), n[1].appendChild(n[2]), n[2].appendChild(t), n[0];
			},
			makeNeutralElement: function(e) {
				var t = document.createElement(e), n = t.style;
				return n.background = "transparent none", n.border = "none", n.margin = "0px", n.padding = "0px", n.position = "static", t;
			},
			now: function() {
				return Date.now ? e.now = Date.now : e.now = function() {
					return (/* @__PURE__ */ new Date()).getTime();
				}, e.now();
			},
			makeTransparentImage: function(t) {
				var n = e.makeNeutralElement("img");
				return n.src = t, n;
			},
			setElementOpacity: function(t, n, r) {
				var i, a;
				t = e.getElement(t), r && !e.Browser.alpha && (n = Math.round(n)), e.Browser.opacity ? t.style.opacity = n < 1 ? n : "" : n < 1 ? (i = Math.round(100 * n), a = "alpha(opacity=" + i + ")", t.style.filter = a) : t.style.filter = "";
			},
			setElementTouchActionNone: function(t) {
				t = e.getElement(t), t.style.touchAction === void 0 ? t.style.msTouchAction !== void 0 && (t.style.msTouchAction = "none") : t.style.touchAction = "none";
			},
			setElementPointerEvents: function(t, n) {
				t = e.getElement(t), t.style !== void 0 && t.style.pointerEvents !== void 0 && (t.style.pointerEvents = n);
			},
			setElementPointerEventsNone: function(t) {
				e.setElementPointerEvents(t, "none");
			},
			addClass: function(t, n) {
				t = e.getElement(t), t.className ? (" " + t.className + " ").indexOf(" " + n + " ") === -1 && (t.className += " " + n) : t.className = n;
			},
			indexOf: function(e, t, n) {
				return Array.prototype.indexOf ? this.indexOf = function(e, t, n) {
					return e.indexOf(t, n);
				} : this.indexOf = function(e, t, n) {
					var r, i = n || 0, a;
					if (!e) throw TypeError();
					if (a = e.length, a === 0 || i >= a) return -1;
					for (i < 0 && (i = a - Math.abs(i)), r = i; r < a; r++) if (e[r] === t) return r;
					return -1;
				}, this.indexOf(e, t, n);
			},
			removeClass: function(t, n) {
				var r, i = [], a;
				for (t = e.getElement(t), r = t.className.split(/\s+/), a = 0; a < r.length; a++) r[a] && r[a] !== n && i.push(r[a]);
				t.className = i.join(" ");
			},
			normalizeEventListenerOptions: function(t) {
				return t === void 0 ? e.supportsEventListenerOptions ? { capture: !1 } : !1 : typeof t == "boolean" ? e.supportsEventListenerOptions ? { capture: t } : t : e.supportsEventListenerOptions ? t : t.capture === void 0 ? !1 : t.capture;
			},
			addEvent: function() {
				if (e.supportsAddEventListener) return function(t, n, r, i) {
					i = e.normalizeEventListenerOptions(i), t = e.getElement(t), t.addEventListener(n, r, i);
				};
				if (document.documentElement.attachEvent && document.attachEvent) return function(t, n, r) {
					t = e.getElement(t), t.attachEvent("on" + n, r);
				};
				throw Error("No known event model.");
			}(),
			removeEvent: function() {
				if (e.supportsRemoveEventListener) return function(t, n, r, i) {
					i = e.normalizeEventListenerOptions(i), t = e.getElement(t), t.removeEventListener(n, r, i);
				};
				if (document.documentElement.detachEvent && document.detachEvent) return function(t, n, r) {
					t = e.getElement(t), t.detachEvent("on" + n, r);
				};
				throw Error("No known event model.");
			}(),
			cancelEvent: function(e) {
				e.preventDefault();
			},
			eventIsCanceled: function(e) {
				return e.defaultPrevented;
			},
			stopEvent: function(e) {
				e.stopPropagation();
			},
			createCallback: function(e, t) {
				console.error("The createCallback function is deprecated and will be removed in future versions. Please use alternativeFunction instead.");
				var n = [], r;
				for (r = 2; r < arguments.length; r++) n.push(arguments[r]);
				return function() {
					var r = n.concat([]), i;
					for (i = 0; i < arguments.length; i++) r.push(arguments[i]);
					return t.apply(e, r);
				};
			},
			getUrlParameter: function(e) {
				return i[e] || null;
			},
			getUrlProtocol: function(e) {
				var t = e.match(/^([a-z]+:)\/\//i);
				return t === null ? window.location.protocol : t[1].toLowerCase();
			},
			createAjaxRequest: function() {
				if (window.XMLHttpRequest) return e.createAjaxRequest = function() {
					return new XMLHttpRequest();
				}, new XMLHttpRequest();
				throw Error("Browser doesn't support XMLHttpRequest.");
			},
			makeAjaxRequest: function(t, n, r) {
				var i, a, o, s;
				e.isPlainObject(t) && (n = t.success, r = t.error, i = t.withCredentials, a = t.headers, o = t.responseType || null, s = t.postData || null, t = t.url);
				var c = e.getUrlProtocol(t), l = e.createAjaxRequest();
				if (!e.isFunction(n)) throw Error("makeAjaxRequest requires a success callback");
				l.onreadystatechange = function() {
					l.readyState === 4 && (l.onreadystatechange = function() {}, l.status >= 200 && l.status < 300 || l.status === 0 && c !== "http:" && c !== "https:" ? n(l) : e.isFunction(r) ? r(l) : e.console.error("AJAX request returned %d: %s", l.status, t));
				};
				var u = s ? "POST" : "GET";
				try {
					if (l.open(u, t, !0), o && (l.responseType = o), a) for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && a[d] && l.setRequestHeader(d, a[d]);
					i && (l.withCredentials = !0), l.send(s);
				} catch (t) {
					e.console.error("%s while making AJAX request: %s", t.name, t.message), l.onreadystatechange = function() {}, e.isFunction(r) && r(l, t);
				}
				return l;
			},
			jsonp: function(t) {
				var n, r = t.url, i = document.head || document.getElementsByTagName("head")[0] || document.documentElement, a = t.callbackName || "openseadragon" + e.now(), o = window[a], s = "$1" + a + "$2", c = t.param || "callback", l = t.callback;
				r = r.replace(/(=)\?(&|$)|\?\?/i, s), r += (/\?/.test(r) ? "&" : "?") + c + "=" + a, window[a] = function(t) {
					if (o) window[a] = o;
					else try {
						delete window[a];
					} catch {}
					l && e.isFunction(l) && l(t);
				}, n = document.createElement("script"), (t.async !== void 0 || !1 !== t.async) && (n.async = "async"), t.scriptCharset && (n.charset = t.scriptCharset), n.src = r, n.onload = n.onreadystatechange = function(e, t) {
					(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = void 0);
				}, i.insertBefore(n, i.firstChild);
			},
			createFromDZI: function() {
				throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
			},
			parseXml: function(t) {
				if (window.DOMParser) e.parseXml = function(e) {
					var t = null;
					return t = new DOMParser().parseFromString(e, "text/xml"), t;
				};
				else throw Error("Browser doesn't support XML DOM.");
				return e.parseXml(t);
			},
			parseJSON: function(t) {
				return e.parseJSON = window.JSON.parse, e.parseJSON(t);
			},
			imageFormatSupported: function(e) {
				return e ||= "", !!r[e.toLowerCase()];
			},
			setImageFormatsSupported: function(t) {
				e.extend(r, t);
			}
		});
		var t = function(e) {};
		e.console = window.console || {
			log: t,
			debug: t,
			info: t,
			warn: t,
			error: t,
			assert: t
		}, e.Browser = {
			vendor: e.BROWSERS.UNKNOWN,
			version: 0,
			alpha: !0
		};
		var r = {
			avif: !0,
			bmp: !1,
			jpeg: !0,
			jpg: !0,
			png: !0,
			tif: !1,
			wdp: !1,
			webp: !0
		}, i = {};
		(function() {
			var t = navigator.appVersion, n = navigator.userAgent, r;
			switch (navigator.appName) {
				case "Microsoft Internet Explorer":
					window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(n.substring(n.indexOf("MSIE") + 5, n.indexOf(";", n.indexOf("MSIE")))));
					break;
				case "Netscape":
					window.addEventListener && (n.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(n.substring(n.indexOf("Edge") + 5))) : n.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(n.substring(n.indexOf("Edg") + 4))) : n.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(n.substring(n.indexOf("Firefox") + 8))) : n.indexOf("Safari") >= 0 ? (e.Browser.vendor = n.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(n.substring(n.substring(0, n.indexOf("Safari")).lastIndexOf("/") + 1, n.indexOf("Safari")))) : (r = /* @__PURE__ */ RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), r.exec(n) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
					break;
				case "Opera":
					e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(t);
					break;
			}
			var a = window.location.search.substring(1).split("&"), o, s, c;
			for (c = 0; c < a.length; c++) if (o = a[c], s = o.indexOf("="), s > 0) {
				var l = o.substring(0, s), u = o.substring(s + 1);
				try {
					i[l] = decodeURIComponent(u);
				} catch {
					e.console.error("Ignoring malformed URL parameter: %s=%s", l, u);
				}
			}
			e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = !0, e.Browser.vendor === e.BROWSERS.IE && e.console.error("Internet Explorer is not supported by OpenSeadragon");
		})(), (function(t) {
			var n = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame, r = t.cancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelAnimationFrame || t.msCancelAnimationFrame;
			if (n && r) e.requestAnimationFrame = function() {
				return n.apply(t, arguments);
			}, e.cancelAnimationFrame = function() {
				return r.apply(t, arguments);
			};
			else {
				var i = [], a = [], o = 0, s;
				e.requestAnimationFrame = function(t) {
					return i.push([++o, t]), s ||= setInterval(function() {
						if (i.length) {
							var t = e.now(), n = a;
							for (a = i, i = n; a.length;) a.shift()[1](t);
						} else clearInterval(s), s = void 0;
					}, 1e3 / 50), o;
				}, e.cancelAnimationFrame = function(e) {
					var t, n;
					for (t = 0, n = i.length; t < n; t += 1) if (i[t][0] === e) {
						i.splice(t, 1);
						return;
					}
					for (t = 0, n = a.length; t < n; t += 1) if (a[t][0] === e) {
						a.splice(t, 1);
						return;
					}
				};
			}
		})(window);
		function a(e, t) {
			return t && e !== document.body ? document.body : e.offsetParent;
		}
	})(n), (function(e, n) {
		typeof define == "function" && define.amd ? define([], n) : typeof t == "object" && t.exports ? t.exports = n() : e.OpenSeadragon = n();
	})(e, function() {
		return n;
	}), (function(e) {
		class t {
			constructor(e) {
				e ||= [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				], this.values = e;
			}
			static makeIdentity() {
				return new t([
					1,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					1
				]);
			}
			static makeTranslation(e, n) {
				return new t([
					1,
					0,
					0,
					0,
					1,
					0,
					e,
					n,
					1
				]);
			}
			static makeRotation(e) {
				var n = Math.cos(e), r = Math.sin(e);
				return new t([
					n,
					-r,
					0,
					r,
					n,
					0,
					0,
					0,
					1
				]);
			}
			static makeScaling(e, n) {
				return new t([
					e,
					0,
					0,
					0,
					n,
					0,
					0,
					0,
					1
				]);
			}
			multiply(e) {
				let n = this.values, r = e.values;
				var i = n[0], a = n[1], o = n[2], s = n[3], c = n[4], l = n[5], u = n[6], d = n[7], f = n[8], p = r[0], m = r[1], h = r[2], g = r[3], _ = r[4], v = r[5], y = r[6], b = r[7], x = r[8];
				return new t([
					p * i + m * s + h * u,
					p * a + m * c + h * d,
					p * o + m * l + h * f,
					g * i + _ * s + v * u,
					g * a + _ * c + v * d,
					g * o + _ * l + v * f,
					y * i + b * s + x * u,
					y * a + b * c + x * d,
					y * o + b * l + x * f
				]);
			}
		}
		e.Mat3 = t;
	})(n), (function(e) {
		var t = {
			supportsFullScreen: !1,
			isFullScreen: function() {
				return !1;
			},
			getFullScreenElement: function() {
				return null;
			},
			requestFullScreen: function() {},
			exitFullScreen: function() {},
			cancelFullScreen: function() {},
			fullScreenEventName: "",
			fullScreenErrorEventName: ""
		};
		document.exitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
			return document.fullscreenElement;
		}, t.requestFullScreen = function(t) {
			return t.requestFullscreen().catch(function(t) {
				e.console.error("Fullscreen request failed: ", t);
			});
		}, t.exitFullScreen = function() {
			document.exitFullscreen().catch(function(t) {
				e.console.error("Error while exiting fullscreen: ", t);
			});
		}, t.fullScreenEventName = "fullscreenchange", t.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
			return document.msFullscreenElement;
		}, t.requestFullScreen = function(e) {
			return e.msRequestFullscreen();
		}, t.exitFullScreen = function() {
			document.msExitFullscreen();
		}, t.fullScreenEventName = "MSFullscreenChange", t.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
			return document.webkitFullscreenElement;
		}, t.requestFullScreen = function(e) {
			return e.webkitRequestFullscreen();
		}, t.exitFullScreen = function() {
			document.webkitExitFullscreen();
		}, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
			return document.webkitCurrentFullScreenElement;
		}, t.requestFullScreen = function(e) {
			return e.webkitRequestFullScreen();
		}, t.exitFullScreen = function() {
			document.webkitCancelFullScreen();
		}, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
			return document.mozFullScreenElement;
		}, t.requestFullScreen = function(e) {
			return e.mozRequestFullScreen();
		}, t.exitFullScreen = function() {
			document.mozCancelFullScreen();
		}, t.fullScreenEventName = "mozfullscreenchange", t.fullScreenErrorEventName = "mozfullscreenerror"), t.isFullScreen = function() {
			return t.getFullScreenElement() !== null;
		}, t.cancelFullScreen = function() {
			e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), t.exitFullScreen();
		}, e.extend(e, t);
	})(n), (function(e) {
		e.EventSource = function() {
			this.events = {}, this._rejectedEventList = {};
		}, e.EventSource.prototype = {
			addOnceHandler: function(e, t, n, r, i) {
				var a = this;
				r ||= 1;
				var o = 0, s = function(n) {
					return o++, o === r && a.removeHandler(e, s), t(n);
				};
				return this.addHandler(e, s, n, i);
			},
			addHandler: function(t, n, r, i) {
				if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, t)) return e.console.error(`Error adding handler for ${t}. ${this._rejectedEventList[t]}`), !1;
				var a = this.events[t];
				if (a || (this.events[t] = a = []), n && e.isFunction(n)) {
					var o = a.length, s = {
						handler: n,
						userData: r || null,
						priority: i || 0
					};
					for (a[o] = s; o > 0 && a[o - 1].priority < a[o].priority;) a[o] = a[o - 1], a[o - 1] = s, o--;
				}
				return !0;
			},
			removeHandler: function(t, n) {
				var r = this.events[t], i = [], a;
				if (r && e.isArray(r)) {
					for (a = 0; a < r.length; a++) r[a].handler !== n && i.push(r[a]);
					this.events[t] = i;
				}
			},
			numberOfHandlers: function(e) {
				var t = this.events[e];
				return t ? t.length : 0;
			},
			removeAllHandlers: function(e) {
				if (e) this.events[e] = [];
				else for (var t in this.events) this.events[t] = [];
			},
			getHandler: function(e) {
				var t = this.events[e];
				return !t || !t.length ? null : (t = t.length === 1 ? [t[0]] : Array.apply(null, t), function(e, n) {
					var r, i = t.length;
					for (r = 0; r < i; r++) t[r] && (n.eventSource = e, n.userData = t[r].userData, t[r].handler(n));
				});
			},
			raiseEvent: function(t, n) {
				if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, t)) return e.console.error(`Error adding handler for ${t}. ${this._rejectedEventList[t]}`), !1;
				var r = this.getHandler(t);
				return r && r(this, n || {}), !0;
			},
			rejectEventHandler(e, t = "") {
				this._rejectedEventList[e] = t;
			},
			allowEventHandler(e) {
				delete this._rejectedEventList[e];
			}
		};
	})(n), (function(e) {
		var t = [], n = {};
		e.MouseTracker = function(r) {
			t.push(this);
			var i = arguments;
			e.isPlainObject(r) || (r = {
				element: i[0],
				clickTimeThreshold: i[1],
				clickDistThreshold: i[2]
			}), this.hash = Math.random(), this.element = e.getElement(r.element), this.clickTimeThreshold = r.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = r.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = r.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = r.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = r.userData || null, this.stopDelay = r.stopDelay || 50, this.preProcessEventHandler = r.preProcessEventHandler || null, this.contextMenuHandler = r.contextMenuHandler || null, this.enterHandler = r.enterHandler || null, this.leaveHandler = r.leaveHandler || null, this.exitHandler = r.exitHandler || null, this.overHandler = r.overHandler || null, this.outHandler = r.outHandler || null, this.pressHandler = r.pressHandler || null, this.nonPrimaryPressHandler = r.nonPrimaryPressHandler || null, this.releaseHandler = r.releaseHandler || null, this.nonPrimaryReleaseHandler = r.nonPrimaryReleaseHandler || null, this.moveHandler = r.moveHandler || null, this.scrollHandler = r.scrollHandler || null, this.clickHandler = r.clickHandler || null, this.dblClickHandler = r.dblClickHandler || null, this.dragHandler = r.dragHandler || null, this.dragEndHandler = r.dragEndHandler || null, this.pinchHandler = r.pinchHandler || null, this.stopHandler = r.stopHandler || null, this.keyDownHandler = r.keyDownHandler || null, this.keyUpHandler = r.keyUpHandler || null, this.keyHandler = r.keyHandler || null, this.focusHandler = r.focusHandler || null, this.blurHandler = r.blurHandler || null;
			var a = this;
			n[this.hash] = {
				click: function(e) {
					v(a, e);
				},
				dblclick: function(e) {
					y(a, e);
				},
				keydown: function(e) {
					b(a, e);
				},
				keyup: function(e) {
					x(a, e);
				},
				keypress: function(e) {
					S(a, e);
				},
				focus: function(e) {
					C(a, e);
				},
				blur: function(e) {
					w(a, e);
				},
				contextmenu: function(e) {
					T(a, e);
				},
				wheel: function(e) {
					ee(a, e);
				},
				mousewheel: function(e) {
					E(a, e);
				},
				DOMMouseScroll: function(e) {
					E(a, e);
				},
				MozMousePixelScroll: function(e) {
					E(a, e);
				},
				losecapture: function(e) {
					O(a, e);
				},
				mouseenter: function(e) {
					P(a, e);
				},
				mouseleave: function(e) {
					F(a, e);
				},
				mouseover: function(e) {
					I(a, e);
				},
				mouseout: function(e) {
					L(a, e);
				},
				mousedown: function(e) {
					R(a, e);
				},
				mouseup: function(e) {
					z(a, e);
				},
				mousemove: function(e) {
					V(a, e);
				},
				touchstart: function(e) {
					k(a, e);
				},
				touchend: function(e) {
					te(a, e);
				},
				touchmove: function(e) {
					A(a, e);
				},
				touchcancel: function(e) {
					j(a, e);
				},
				gesturestart: function(e) {
					M(a, e);
				},
				gesturechange: function(e) {
					N(a, e);
				},
				gotpointercapture: function(e) {
					ne(a, e);
				},
				lostpointercapture: function(e) {
					re(a, e);
				},
				pointerenter: function(e) {
					P(a, e);
				},
				pointerleave: function(e) {
					F(a, e);
				},
				pointerover: function(e) {
					I(a, e);
				},
				pointerout: function(e) {
					L(a, e);
				},
				pointerdown: function(e) {
					R(a, e);
				},
				pointerup: function(e) {
					z(a, e);
				},
				pointermove: function(e) {
					V(a, e);
				},
				pointercancel: function(e) {
					oe(a, e);
				},
				pointerupcaptured: function(e) {
					ie(a, e);
				},
				pointermovecaptured: function(e) {
					ae(a, e);
				},
				tracking: !1,
				activePointersLists: [],
				lastClickPos: null,
				dblClickTimeOut: null,
				pinchGPoints: [],
				lastPinchDist: 0,
				currentPinchDist: 0,
				lastPinchCenter: null,
				currentPinchCenter: null,
				sentDragEvent: !1
			}, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), r.startDisabled || this.setTracking(!0);
		}, e.MouseTracker.prototype = {
			destroy: function() {
				var e;
				for (s(this), this.element = null, e = 0; e < t.length; e++) if (t[e] === this) {
					t.splice(e, 1);
					break;
				}
				n[this.hash] = null, delete n[this.hash];
			},
			isTracking: function() {
				return n[this.hash].tracking;
			},
			setTracking: function(e) {
				return e ? o(this) : s(this), this;
			},
			getActivePointersListByType: function(t) {
				var r = n[this.hash], i, a = r ? r.activePointersLists.length : 0, o;
				for (i = 0; i < a; i++) if (r.activePointersLists[i].type === t) return r.activePointersLists[i];
				return o = new e.MouseTracker.GesturePointList(t), r && r.activePointersLists.push(o), o;
			},
			getActivePointerCount: function() {
				var e = n[this.hash], t, r = e.activePointersLists.length, i = 0;
				for (t = 0; t < r; t++) i += e.activePointersLists[t].getLength();
				return i;
			},
			preProcessEventHandler: function() {},
			contextMenuHandler: function() {},
			enterHandler: function() {},
			leaveHandler: function() {},
			exitHandler: function() {},
			overHandler: function() {},
			outHandler: function() {},
			pressHandler: function() {},
			nonPrimaryPressHandler: function() {},
			releaseHandler: function() {},
			nonPrimaryReleaseHandler: function() {},
			moveHandler: function() {},
			scrollHandler: function() {},
			clickHandler: function() {},
			dblClickHandler: function() {},
			dragHandler: function() {},
			dragEndHandler: function() {},
			pinchHandler: function() {},
			stopHandler: function() {},
			keyDownHandler: function() {},
			keyUpHandler: function() {},
			keyHandler: function() {},
			focusHandler: function() {},
			blurHandler: function() {}
		};
		var r = (function() {
			try {
				return window.self !== window.top;
			} catch {
				return !0;
			}
		})();
		function i(e) {
			try {
				return e.addEventListener && e.removeEventListener;
			} catch {
				return !1;
			}
		}
		e.MouseTracker.gesturePointVelocityTracker = (function() {
			var t = [], n = 0, r = 0, i = function(e, t) {
				return e.hash.toString() + t.type + t.id.toString();
			}, a = function() {
				var n, i = t.length, a, o, s = e.now(), c = s - r, l, u;
				for (r = s, n = 0; n < i; n++) a = t[n], o = a.gPoint, o.direction = Math.atan2(o.currentPos.y - a.lastPos.y, o.currentPos.x - a.lastPos.x), l = a.lastPos.distanceTo(o.currentPos), a.lastPos = o.currentPos, u = 1e3 * l / (c + 1), o.speed = .75 * u + .25 * o.speed;
			};
			return {
				addPoint: function(o, s) {
					var c = i(o, s);
					t.push({
						guid: c,
						gPoint: s,
						lastPos: s.currentPos
					}), t.length === 1 && (r = e.now(), n = window.setInterval(a, 50));
				},
				removePoint: function(e, r) {
					var a = i(e, r), o, s = t.length;
					for (o = 0; o < s; o++) if (t[o].guid === a) {
						t.splice(o, 1), s--, s === 0 && window.clearInterval(n);
						break;
					}
				}
			};
		})(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel === void 0 ? "DOMMouseScroll" : "mousewheel", e.MouseTracker.subscribeEvents = [
			"click",
			"dblclick",
			"keydown",
			"keyup",
			"keypress",
			"focus",
			"blur",
			"contextmenu",
			e.MouseTracker.wheelEventName
		], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = function() {
			var t = document.createElement("div");
			return e.isFunction(t.setPointerCapture) && e.isFunction(t.releasePointerCapture);
		}(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = !1, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = function() {
			var t = document.createElement("div");
			return e.isFunction(t.setCapture) && e.isFunction(t.releaseCapture);
		}(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(e) {
			this._gPoints = [], this.type = e, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
		}, e.MouseTracker.GesturePointList.prototype = {
			getLength: function() {
				return this._gPoints.length;
			},
			asArray: function() {
				return this._gPoints;
			},
			add: function(e) {
				return this._gPoints.push(e);
			},
			removeById: function(e) {
				var t, n = this._gPoints.length;
				for (t = 0; t < n; t++) if (this._gPoints[t].id === e) {
					this._gPoints.splice(t, 1);
					break;
				}
				return this._gPoints.length;
			},
			getByIndex: function(e) {
				return e < this._gPoints.length ? this._gPoints[e] : null;
			},
			getById: function(e) {
				var t, n = this._gPoints.length;
				for (t = 0; t < n; t++) if (this._gPoints[t].id === e) return this._gPoints[t];
				return null;
			},
			getPrimary: function(e) {
				var t, n = this._gPoints.length;
				for (t = 0; t < n; t++) if (this._gPoints[t].isPrimary) return this._gPoints[t];
				return null;
			},
			addContact: function() {
				++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
			},
			removeContact: function() {
				--this.contacts, this.contacts < 0 && (this.contacts = 0);
			}
		};
		function a(e) {
			var t = n[e.hash], r, i, a, o, s, c = t.activePointersLists.length;
			for (r = 0; r < c; r++) if (a = t.activePointersLists[r], a.getLength() > 0) {
				for (s = [], o = a.asArray(), i = 0; i < o.length; i++) s.push(o[i]);
				for (i = 0; i < s.length; i++) W(e, a, s[i]);
			}
			for (r = 0; r < c; r++) t.activePointersLists.pop();
			t.sentDragEvent = !1;
		}
		function o(t) {
			var r = n[t.hash], i, o;
			if (!r.tracking) {
				for (o = 0; o < e.MouseTracker.subscribeEvents.length; o++) i = e.MouseTracker.subscribeEvents[o], e.addEvent(t.element, i, r[i], i === e.MouseTracker.wheelEventName ? {
					passive: !1,
					capture: !1
				} : !1);
				a(t), r.tracking = !0;
			}
		}
		function s(t) {
			var r = n[t.hash], i, o;
			if (r.tracking) {
				for (o = 0; o < e.MouseTracker.subscribeEvents.length; o++) i = e.MouseTracker.subscribeEvents[o], e.removeEvent(t.element, i, r[i], !1);
				a(t), r.tracking = !1;
			}
		}
		function c(e, t) {
			var r = n[e.hash];
			if (t === "pointerevent" || t === "mouse") return {
				upName: "pointerup",
				upHandler: r.pointerupcaptured,
				moveName: "pointermove",
				moveHandler: r.pointermovecaptured
			};
			if (t === "touch") return {
				upName: "touchend",
				upHandler: r.touchendcaptured,
				moveName: "touchmove",
				moveHandler: r.touchmovecaptured
			};
			throw Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
		}
		function l(t, n) {
			var a;
			if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) try {
				t.element.setPointerCapture(n.id);
			} catch {
				e.console.warn("setPointerCapture() called on invalid pointer ID");
				return;
			}
			else t.element.setCapture(!0);
			else a = c(t, e.MouseTracker.havePointerEvents ? "pointerevent" : n.type), r && i(window.top) && e.addEvent(window.top, a.upName, a.upHandler, !0), e.addEvent(e.MouseTracker.captureElement, a.upName, a.upHandler, !0), e.addEvent(e.MouseTracker.captureElement, a.moveName, a.moveHandler, !0);
			K(t, n, !0);
		}
		function u(t, n) {
			var a, o, s;
			if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) {
				if (o = t.getActivePointersListByType(n.type), s = o.getById(n.id), !s || !s.captured) return;
				try {
					t.element.releasePointerCapture(n.id);
				} catch {}
			} else t.element.releaseCapture();
			else a = c(t, e.MouseTracker.havePointerEvents ? "pointerevent" : n.type), r && i(window.top) && e.removeEvent(window.top, a.upName, a.upHandler, !0), e.removeEvent(e.MouseTracker.captureElement, a.moveName, a.moveHandler, !0), e.removeEvent(e.MouseTracker.captureElement, a.upName, a.upHandler, !0);
			K(t, n, !1);
		}
		function d(t) {
			return e.MouseTracker.havePointerEvents ? t.pointerId : e.MouseTracker.mousePointerId;
		}
		function f(t) {
			return e.MouseTracker.havePointerEvents && t.pointerType ? t.pointerType : "mouse";
		}
		function p(t) {
			return e.MouseTracker.havePointerEvents ? t.isPrimary : !0;
		}
		function m(t) {
			return e.getMousePosition(t);
		}
		function h(e, t) {
			return g(m(e), t);
		}
		function g(t, n) {
			var r = e.getElementOffset(n);
			return t.minus(r);
		}
		function _(t, n) {
			return new e.Point((t.x + n.x) / 2, (t.y + n.y) / 2);
		}
		function v(t, n) {
			var r = {
				originalEvent: n,
				eventType: "click",
				pointerType: "mouse",
				isEmulated: !1
			};
			G(t, r), r.preventDefault && !r.defaultPrevented && e.cancelEvent(n), r.stopPropagation && e.stopEvent(n);
		}
		function y(t, n) {
			var r = {
				originalEvent: n,
				eventType: "dblclick",
				pointerType: "mouse",
				isEmulated: !1
			};
			G(t, r), r.preventDefault && !r.defaultPrevented && e.cancelEvent(n), r.stopPropagation && e.stopEvent(n);
		}
		function b(t, n) {
			var r = null, i = {
				originalEvent: n,
				eventType: "keydown",
				pointerType: "",
				isEmulated: !1
			};
			G(t, i), t.keyDownHandler && !i.preventGesture && !i.defaultPrevented && (r = {
				eventSource: t,
				keyCode: n.keyCode ? n.keyCode : n.charCode,
				ctrl: n.ctrlKey,
				shift: n.shiftKey,
				alt: n.altKey,
				meta: n.metaKey,
				originalEvent: n,
				preventDefault: i.preventDefault || i.defaultPrevented,
				userData: t.userData
			}, t.keyDownHandler(r)), (r && r.preventDefault || i.preventDefault && !i.defaultPrevented) && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function x(t, n) {
			var r = null, i = {
				originalEvent: n,
				eventType: "keyup",
				pointerType: "",
				isEmulated: !1
			};
			G(t, i), t.keyUpHandler && !i.preventGesture && !i.defaultPrevented && (r = {
				eventSource: t,
				keyCode: n.keyCode ? n.keyCode : n.charCode,
				ctrl: n.ctrlKey,
				shift: n.shiftKey,
				alt: n.altKey,
				meta: n.metaKey,
				originalEvent: n,
				preventDefault: i.preventDefault || i.defaultPrevented,
				userData: t.userData
			}, t.keyUpHandler(r)), (r && r.preventDefault || i.preventDefault && !i.defaultPrevented) && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function S(t, n) {
			var r = null, i = {
				originalEvent: n,
				eventType: "keypress",
				pointerType: "",
				isEmulated: !1
			};
			G(t, i), t.keyHandler && !i.preventGesture && !i.defaultPrevented && (r = {
				eventSource: t,
				keyCode: n.keyCode ? n.keyCode : n.charCode,
				ctrl: n.ctrlKey,
				shift: n.shiftKey,
				alt: n.altKey,
				meta: n.metaKey,
				originalEvent: n,
				preventDefault: i.preventDefault || i.defaultPrevented,
				userData: t.userData
			}, t.keyHandler(r)), (r && r.preventDefault || i.preventDefault && !i.defaultPrevented) && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function C(e, t) {
			var n = {
				originalEvent: t,
				eventType: "focus",
				pointerType: "",
				isEmulated: !1
			};
			G(e, n), e.focusHandler && !n.preventGesture && e.focusHandler({
				eventSource: e,
				originalEvent: t,
				userData: e.userData
			});
		}
		function w(e, t) {
			var n = {
				originalEvent: t,
				eventType: "blur",
				pointerType: "",
				isEmulated: !1
			};
			G(e, n), e.blurHandler && !n.preventGesture && e.blurHandler({
				eventSource: e,
				originalEvent: t,
				userData: e.userData
			});
		}
		function T(t, n) {
			var r = null, i = {
				originalEvent: n,
				eventType: "contextmenu",
				pointerType: "mouse",
				isEmulated: !1
			};
			G(t, i), t.contextMenuHandler && !i.preventGesture && !i.defaultPrevented && (r = {
				eventSource: t,
				position: g(m(n), t.element),
				originalEvent: i.originalEvent,
				preventDefault: i.preventDefault || i.defaultPrevented,
				userData: t.userData
			}, t.contextMenuHandler(r)), (r && r.preventDefault || i.preventDefault && !i.defaultPrevented) && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function ee(e, t) {
			D(e, t, t);
		}
		function E(t, n) {
			var r = {
				target: n.target || n.srcElement,
				type: "wheel",
				shiftKey: n.shiftKey || !1,
				clientX: n.clientX,
				clientY: n.clientY,
				pageX: n.pageX ? n.pageX : n.clientX,
				pageY: n.pageY ? n.pageY : n.clientY,
				deltaMode: n.type === "MozMousePixelScroll" ? 0 : 1,
				deltaX: 0,
				deltaZ: 0
			};
			e.MouseTracker.wheelEventName === "mousewheel" ? r.deltaY = -n.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : r.deltaY = n.detail, D(t, r, n);
		}
		function D(t, n, r) {
			var i = 0, a, o = null;
			i = n.deltaY ? n.deltaY < 0 ? 1 : -1 : 0, a = {
				originalEvent: n,
				eventType: "wheel",
				pointerType: "mouse",
				isEmulated: n !== r
			}, G(t, a), t.scrollHandler && !a.preventGesture && !a.defaultPrevented && (o = {
				eventSource: t,
				pointerType: "mouse",
				position: h(n, t.element),
				scroll: i,
				shift: n.shiftKey,
				isTouchEvent: !1,
				originalEvent: r,
				preventDefault: a.preventDefault || a.defaultPrevented,
				userData: t.userData
			}, t.scrollHandler(o)), a.stopPropagation && e.stopEvent(r), (o && o.preventDefault || a.preventDefault && !a.defaultPrevented) && e.cancelEvent(r);
		}
		function O(t, n) {
			var r = {
				id: e.MouseTracker.mousePointerId,
				type: "mouse"
			}, i = {
				originalEvent: n,
				eventType: "lostpointercapture",
				pointerType: "mouse",
				isEmulated: !1
			};
			G(t, i), n.target === t.element && K(t, r, !1), i.stopPropagation && e.stopEvent(n);
		}
		function k(t, n) {
			var r, i, a = n.changedTouches.length, o, s = t.getActivePointersListByType("touch");
			r = e.now(), s.getLength() > n.touches.length - a && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
			var c = {
				originalEvent: n,
				eventType: "pointerdown",
				pointerType: "touch",
				isEmulated: !1
			};
			for (G(t, c), i = 0; i < a; i++) o = {
				id: n.changedTouches[i].identifier,
				type: "touch",
				isPrimary: s.getLength() === 0,
				currentPos: m(n.changedTouches[i]),
				currentTime: r
			}, ce(t, c, o), fe(t, c, o, 0), K(t, o, !0);
			c.preventDefault && !c.defaultPrevented && e.cancelEvent(n), c.stopPropagation && e.stopEvent(n);
		}
		function te(t, n) {
			var r, i, a = n.changedTouches.length, o;
			r = e.now();
			var s = {
				originalEvent: n,
				eventType: "pointerup",
				pointerType: "touch",
				isEmulated: !1
			};
			for (G(t, s), i = 0; i < a; i++) o = {
				id: n.changedTouches[i].identifier,
				type: "touch",
				currentPos: m(n.changedTouches[i]),
				currentTime: r
			}, pe(t, s, o, 0), K(t, o, !1), le(t, s, o);
			s.preventDefault && !s.defaultPrevented && e.cancelEvent(n), s.stopPropagation && e.stopEvent(n);
		}
		function A(t, n) {
			var r, i, a = n.changedTouches.length, o;
			r = e.now();
			var s = {
				originalEvent: n,
				eventType: "pointermove",
				pointerType: "touch",
				isEmulated: !1
			};
			for (G(t, s), i = 0; i < a; i++) o = {
				id: n.changedTouches[i].identifier,
				type: "touch",
				currentPos: m(n.changedTouches[i]),
				currentTime: r
			}, me(t, s, o);
			s.preventDefault && !s.defaultPrevented && e.cancelEvent(n), s.stopPropagation && e.stopEvent(n);
		}
		function j(t, n) {
			var r = n.changedTouches.length, i, a, o = {
				originalEvent: n,
				eventType: "pointercancel",
				pointerType: "touch",
				isEmulated: !1
			};
			for (G(t, o), i = 0; i < r; i++) a = {
				id: n.changedTouches[i].identifier,
				type: "touch"
			}, q(t, o, a);
			o.stopPropagation && e.stopEvent(n);
		}
		function M(t, n) {
			return e.eventIsCanceled(n) || n.preventDefault(), !1;
		}
		function N(t, n) {
			return e.eventIsCanceled(n) || n.preventDefault(), !1;
		}
		function ne(t, n) {
			var r = {
				originalEvent: n,
				eventType: "gotpointercapture",
				pointerType: f(n),
				isEmulated: !1
			};
			G(t, r), n.target === t.element && K(t, {
				id: n.pointerId,
				type: f(n)
			}, !0), r.stopPropagation && e.stopEvent(n);
		}
		function re(t, n) {
			var r = {
				originalEvent: n,
				eventType: "lostpointercapture",
				pointerType: f(n),
				isEmulated: !1
			};
			G(t, r), n.target === t.element && K(t, {
				id: n.pointerId,
				type: f(n)
			}, !1), r.stopPropagation && e.stopEvent(n);
		}
		function P(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = {
				originalEvent: n,
				eventType: "pointerenter",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), ce(t, i, r);
		}
		function F(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = {
				originalEvent: n,
				eventType: "pointerleave",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), le(t, i, r);
		}
		function I(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = {
				originalEvent: n,
				eventType: "pointerover",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), ue(t, i, r), i.preventDefault && !i.defaultPrevented && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function L(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = {
				originalEvent: n,
				eventType: "pointerout",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), de(t, i, r), i.preventDefault && !i.defaultPrevented && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function R(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = e.MouseTracker.havePointerEvents && r.type === "touch", a = {
				originalEvent: n,
				eventType: "pointerdown",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, a), fe(t, a, r, n.button), a.preventDefault && !a.defaultPrevented && e.cancelEvent(n), a.stopPropagation && e.stopEvent(n), a.shouldCapture && (i ? K(t, r, !0) : l(t, r));
		}
		function z(e, t) {
			B(e, t);
		}
		function ie(t, n) {
			t.getActivePointersListByType(f(n)).getById(n.pointerId) && B(t, n), e.stopEvent(n);
		}
		function B(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = {
				originalEvent: n,
				eventType: "pointerup",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), pe(t, i, r, n.button), i.preventDefault && !i.defaultPrevented && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n), i.shouldReleaseCapture && (n.target === t.element ? u(t, r) : K(t, r, !1));
		}
		function V(e, t) {
			H(e, t);
		}
		function ae(t, n) {
			t.getActivePointersListByType(f(n)).getById(n.pointerId) && H(t, n), e.stopEvent(n);
		}
		function H(t, n) {
			var r = {
				id: d(n),
				type: f(n),
				isPrimary: p(n),
				currentPos: m(n),
				currentTime: e.now()
			}, i = {
				originalEvent: n,
				eventType: "pointermove",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), me(t, i, r), i.preventDefault && !i.defaultPrevented && e.cancelEvent(n), i.stopPropagation && e.stopEvent(n);
		}
		function oe(t, n) {
			var r = {
				id: n.pointerId,
				type: f(n)
			}, i = {
				originalEvent: n,
				eventType: "pointercancel",
				pointerType: r.type,
				isEmulated: !1
			};
			G(t, i), q(t, i, r), i.stopPropagation && e.stopEvent(n);
		}
		function U(e, t) {
			return t.speed = 0, t.direction = 0, t.contactPos = t.currentPos, t.contactTime = t.currentTime, t.lastPos = t.currentPos, t.lastTime = t.currentTime, e.add(t);
		}
		function W(t, n, r) {
			var i, a = n.getById(r.id);
			return a ? (a.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), u(t, a)), n.removeContact(), i = n.removeById(r.id)) : i = n.getLength(), i;
		}
		function se(e, t) {
			switch (t.eventType) {
				case "pointermove":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !1, t.preventGesture = !e.hasGestureHandlers, t.stopPropagation = !1;
					break;
				case "pointerover":
				case "pointerout":
				case "contextmenu":
				case "keydown":
				case "keyup":
				case "keypress":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !1, t.preventGesture = !1, t.stopPropagation = !1;
					break;
				case "pointerdown":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !1, t.preventGesture = !e.hasGestureHandlers, t.stopPropagation = !1;
					break;
				case "pointerup":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !1, t.preventGesture = !e.hasGestureHandlers, t.stopPropagation = !1;
					break;
				case "wheel":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !1, t.preventGesture = !e.hasScrollHandler, t.stopPropagation = !1;
					break;
				case "gotpointercapture":
				case "lostpointercapture":
				case "pointercancel":
					t.isStoppable = !0, t.isCancelable = !1, t.preventDefault = !1, t.preventGesture = !1, t.stopPropagation = !1;
					break;
				case "click":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !!e.clickHandler, t.preventGesture = !1, t.stopPropagation = !1;
					break;
				case "dblclick":
					t.isStoppable = !0, t.isCancelable = !0, t.preventDefault = !!e.dblClickHandler, t.preventGesture = !1, t.stopPropagation = !1;
					break;
				default:
					t.isStoppable = !1, t.isCancelable = !1, t.preventDefault = !1, t.preventGesture = !1, t.stopPropagation = !1;
					break;
			}
		}
		function G(t, n) {
			n.eventSource = t, n.eventPhase = n.originalEvent ? n.originalEvent.eventPhase === void 0 ? 0 : n.originalEvent.eventPhase : 0, n.defaultPrevented = e.eventIsCanceled(n.originalEvent), n.shouldCapture = !1, n.shouldReleaseCapture = !1, n.userData = t.userData, se(t, n), t.preProcessEventHandler && t.preProcessEventHandler(n);
		}
		function K(t, n, r) {
			var i = t.getActivePointersListByType(n.type), a = i.getById(n.id);
			a ? r && !a.captured ? (a.captured = !0, i.captureCount++) : !r && a.captured && (a.captured = !1, i.captureCount--, i.captureCount < 0 && (i.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
		}
		function ce(e, t, n) {
			var r = e.getActivePointersListByType(n.type), i = r.getById(n.id);
			i ? (i.insideElement = !0, i.lastPos = i.currentPos, i.lastTime = i.currentTime, i.currentPos = n.currentPos, i.currentTime = n.currentTime, n = i) : (n.captured = !1, n.insideElementPressed = !1, n.insideElement = !0, U(r, n)), e.enterHandler && e.enterHandler({
				eventSource: e,
				pointerType: n.type,
				position: g(n.currentPos, e.element),
				buttons: r.buttons,
				pointers: e.getActivePointerCount(),
				insideElementPressed: n.insideElementPressed,
				buttonDownAny: r.buttons !== 0,
				isTouchEvent: n.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			});
		}
		function le(e, t, n) {
			var r = e.getActivePointersListByType(n.type), i = r.getById(n.id), a;
			i ? (i.captured ? (i.insideElement = !1, i.lastPos = i.currentPos, i.lastTime = i.currentTime, i.currentPos = n.currentPos, i.currentTime = n.currentTime) : W(e, r, i), n = i) : (n.captured = !1, n.insideElementPressed = !1), (e.leaveHandler || e.exitHandler) && (a = {
				eventSource: e,
				pointerType: n.type,
				position: n.currentPos && g(n.currentPos, e.element),
				buttons: r.buttons,
				pointers: e.getActivePointerCount(),
				insideElementPressed: n.insideElementPressed,
				buttonDownAny: r.buttons !== 0,
				isTouchEvent: n.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			}, e.leaveHandler && e.leaveHandler(a), e.exitHandler && e.exitHandler(a));
		}
		function ue(e, t, n) {
			var r = e.getActivePointersListByType(n.type), i = r.getById(n.id);
			i ? n = i : (n.captured = !1, n.insideElementPressed = !1), e.overHandler && e.overHandler({
				eventSource: e,
				pointerType: n.type,
				position: g(n.currentPos, e.element),
				buttons: r.buttons,
				pointers: e.getActivePointerCount(),
				insideElementPressed: n.insideElementPressed,
				buttonDownAny: r.buttons !== 0,
				isTouchEvent: n.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			});
		}
		function de(e, t, n) {
			var r = e.getActivePointersListByType(n.type), i = r.getById(n.id);
			i ? n = i : (n.captured = !1, n.insideElementPressed = !1), e.outHandler && e.outHandler({
				eventSource: e,
				pointerType: n.type,
				position: n.currentPos && g(n.currentPos, e.element),
				buttons: r.buttons,
				pointers: e.getActivePointerCount(),
				insideElementPressed: n.insideElementPressed,
				buttonDownAny: r.buttons !== 0,
				isTouchEvent: n.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			});
		}
		function fe(t, r, i, a) {
			var o = n[t.hash], s = t.getActivePointersListByType(i.type), c;
			if (r.originalEvent.buttons === void 0 ? a === 0 ? s.buttons |= 1 : a === 1 ? s.buttons |= 4 : a === 2 ? s.buttons |= 2 : a === 3 ? s.buttons |= 8 : a === 4 ? s.buttons |= 16 : a === 5 && (s.buttons |= 32) : s.buttons = r.originalEvent.buttons, a !== 0) {
				r.shouldCapture = !1, r.shouldReleaseCapture = !1, t.nonPrimaryPressHandler && !r.preventGesture && !r.defaultPrevented && (r.preventDefault = !0, t.nonPrimaryPressHandler({
					eventSource: t,
					pointerType: i.type,
					position: g(i.currentPos, t.element),
					button: a,
					buttons: s.buttons,
					isTouchEvent: i.type === "touch",
					originalEvent: r.originalEvent,
					userData: t.userData
				}));
				return;
			}
			c = s.getById(i.id), c ? (c.insideElementPressed = !0, c.insideElement = !0, c.originalTarget = r.originalEvent.target, c.contactPos = i.currentPos, c.contactTime = i.currentTime, c.lastPos = c.currentPos, c.lastTime = c.currentTime, c.currentPos = i.currentPos, c.currentTime = i.currentTime, i = c) : (i.captured = !1, i.insideElementPressed = !0, i.insideElement = !0, i.originalTarget = r.originalEvent.target, U(s, i)), s.addContact(), !r.preventGesture && !r.defaultPrevented ? (r.shouldCapture = !0, r.shouldReleaseCapture = !1, r.preventDefault = !0, (t.dragHandler || t.dragEndHandler || t.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(t, i), s.contacts === 1 ? t.pressHandler && !r.preventGesture && t.pressHandler({
				eventSource: t,
				pointerType: i.type,
				position: g(i.contactPos, t.element),
				buttons: s.buttons,
				isTouchEvent: i.type === "touch",
				originalEvent: r.originalEvent,
				userData: t.userData
			}) : s.contacts === 2 && t.pinchHandler && i.type === "touch" && (o.pinchGPoints = s.asArray(), o.lastPinchDist = o.currentPinchDist = o.pinchGPoints[0].currentPos.distanceTo(o.pinchGPoints[1].currentPos), o.lastPinchCenter = o.currentPinchCenter = _(o.pinchGPoints[0].currentPos, o.pinchGPoints[1].currentPos))) : (r.shouldCapture = !1, r.shouldReleaseCapture = !1);
		}
		function pe(t, r, i, a) {
			var o = n[t.hash], s = t.getActivePointersListByType(i.type), c, l, u, d = !1, f;
			if (r.originalEvent.buttons === void 0 ? a === 0 ? s.buttons ^= -2 : a === 1 ? s.buttons ^= -5 : a === 2 ? s.buttons ^= -3 : a === 3 ? s.buttons ^= -9 : a === 4 ? s.buttons ^= -17 : a === 5 && (s.buttons ^= -33) : s.buttons = r.originalEvent.buttons, r.shouldCapture = !1, a !== 0) {
				r.shouldReleaseCapture = !1, t.nonPrimaryReleaseHandler && !r.preventGesture && !r.defaultPrevented && (r.preventDefault = !0, t.nonPrimaryReleaseHandler({
					eventSource: t,
					pointerType: i.type,
					position: g(i.currentPos, t.element),
					button: a,
					buttons: s.buttons,
					isTouchEvent: i.type === "touch",
					originalEvent: r.originalEvent,
					userData: t.userData
				}));
				return;
			}
			u = s.getById(i.id), u ? (s.removeContact(), u.captured && (d = !0), u.lastPos = u.currentPos, u.lastTime = u.currentTime, u.currentPos = i.currentPos, u.currentTime = i.currentTime, u.insideElement || W(t, s, u), c = u.currentPos, l = u.currentTime) : (i.captured = !1, i.insideElementPressed = !1, i.insideElement = !0, U(s, i), u = i), !r.preventGesture && !r.defaultPrevented && (d ? (r.shouldReleaseCapture = !0, r.preventDefault = !0, (t.dragHandler || t.dragEndHandler || t.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(t, u), s.contacts === 0 ? (t.releaseHandler && c && t.releaseHandler({
				eventSource: t,
				pointerType: u.type,
				position: g(c, t.element),
				buttons: s.buttons,
				insideElementPressed: u.insideElementPressed,
				insideElementReleased: u.insideElement,
				isTouchEvent: u.type === "touch",
				originalEvent: r.originalEvent,
				userData: t.userData
			}), t.dragEndHandler && o.sentDragEvent && t.dragEndHandler({
				eventSource: t,
				pointerType: u.type,
				position: g(u.currentPos, t.element),
				speed: u.speed,
				direction: u.direction,
				shift: r.originalEvent.shiftKey,
				isTouchEvent: u.type === "touch",
				originalEvent: r.originalEvent,
				userData: t.userData
			}), o.sentDragEvent = !1, (t.clickHandler || t.dblClickHandler) && u.insideElement && (f = l - u.contactTime <= t.clickTimeThreshold && u.contactPos.distanceTo(c) <= t.clickDistThreshold, t.clickHandler && t.clickHandler({
				eventSource: t,
				pointerType: u.type,
				position: g(u.currentPos, t.element),
				quick: f,
				shift: r.originalEvent.shiftKey,
				isTouchEvent: u.type === "touch",
				originalEvent: r.originalEvent,
				originalTarget: u.originalTarget,
				userData: t.userData
			}), t.dblClickHandler && f && (s.clicks++, s.clicks === 1 ? (o.lastClickPos = c, o.dblClickTimeOut = setTimeout(function() {
				s.clicks = 0;
			}, t.dblClickTimeThreshold)) : s.clicks === 2 && (clearTimeout(o.dblClickTimeOut), s.clicks = 0, o.lastClickPos.distanceTo(c) <= t.dblClickDistThreshold && t.dblClickHandler({
				eventSource: t,
				pointerType: u.type,
				position: g(u.currentPos, t.element),
				shift: r.originalEvent.shiftKey,
				isTouchEvent: u.type === "touch",
				originalEvent: r.originalEvent,
				userData: t.userData
			}), o.lastClickPos = null)))) : s.contacts === 2 && t.pinchHandler && u.type === "touch" && (o.pinchGPoints = s.asArray(), o.lastPinchDist = o.currentPinchDist = o.pinchGPoints[0].currentPos.distanceTo(o.pinchGPoints[1].currentPos), o.lastPinchCenter = o.currentPinchCenter = _(o.pinchGPoints[0].currentPos, o.pinchGPoints[1].currentPos))) : (r.shouldReleaseCapture = !1, t.releaseHandler && c && (t.releaseHandler({
				eventSource: t,
				pointerType: u.type,
				position: g(c, t.element),
				buttons: s.buttons,
				insideElementPressed: u.insideElementPressed,
				insideElementReleased: u.insideElement,
				isTouchEvent: u.type === "touch",
				originalEvent: r.originalEvent,
				userData: t.userData
			}), r.preventDefault = !0)));
		}
		function me(e, t, r) {
			var i = n[e.hash], a = e.getActivePointersListByType(r.type), o, s, c;
			if (t.originalEvent.buttons !== void 0 && (a.buttons = t.originalEvent.buttons), o = a.getById(r.id), o) o.lastPos = o.currentPos, o.lastTime = o.currentTime, o.currentPos = r.currentPos, o.currentTime = r.currentTime;
			else return;
			t.shouldCapture = !1, t.shouldReleaseCapture = !1, e.stopHandler && r.type === "mouse" && (clearTimeout(e.stopTimeOut), e.stopTimeOut = setTimeout(function() {
				he(e, t.originalEvent, r.type);
			}, e.stopDelay)), a.contacts === 0 ? e.moveHandler && e.moveHandler({
				eventSource: e,
				pointerType: r.type,
				position: g(r.currentPos, e.element),
				buttons: a.buttons,
				isTouchEvent: r.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			}) : a.contacts === 1 ? (e.moveHandler && (o = a.asArray()[0], e.moveHandler({
				eventSource: e,
				pointerType: o.type,
				position: g(o.currentPos, e.element),
				buttons: a.buttons,
				isTouchEvent: o.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			})), e.dragHandler && !t.preventGesture && !t.defaultPrevented && (o = a.asArray()[0], c = o.currentPos.minus(o.lastPos), e.dragHandler({
				eventSource: e,
				pointerType: o.type,
				position: g(o.currentPos, e.element),
				buttons: a.buttons,
				delta: c,
				speed: o.speed,
				direction: o.direction,
				shift: t.originalEvent.shiftKey,
				isTouchEvent: o.type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			}), t.preventDefault = !0, i.sentDragEvent = !0)) : a.contacts === 2 && (e.moveHandler && (s = a.asArray(), e.moveHandler({
				eventSource: e,
				pointerType: s[0].type,
				position: g(_(s[0].currentPos, s[1].currentPos), e.element),
				buttons: a.buttons,
				isTouchEvent: s[0].type === "touch",
				originalEvent: t.originalEvent,
				userData: e.userData
			})), e.pinchHandler && r.type === "touch" && !t.preventGesture && !t.defaultPrevented && (c = i.pinchGPoints[0].currentPos.distanceTo(i.pinchGPoints[1].currentPos), c !== i.currentPinchDist && (i.lastPinchDist = i.currentPinchDist, i.currentPinchDist = c, i.lastPinchCenter = i.currentPinchCenter, i.currentPinchCenter = _(i.pinchGPoints[0].currentPos, i.pinchGPoints[1].currentPos), e.pinchHandler({
				eventSource: e,
				pointerType: "touch",
				gesturePoints: i.pinchGPoints,
				lastCenter: g(i.lastPinchCenter, e.element),
				center: g(i.currentPinchCenter, e.element),
				lastDistance: i.lastPinchDist,
				distance: i.currentPinchDist,
				shift: t.originalEvent.shiftKey,
				originalEvent: t.originalEvent,
				userData: e.userData
			}), t.preventDefault = !0)));
		}
		function q(e, t, n) {
			var r = e.getActivePointersListByType(n.type), i = r.getById(n.id);
			i && W(e, r, i);
		}
		function he(e, t, n) {
			e.stopHandler && e.stopHandler({
				eventSource: e,
				pointerType: n,
				position: h(t, e.element),
				buttons: e.getActivePointersListByType(n).buttons,
				isTouchEvent: n === "touch",
				originalEvent: t,
				userData: e.userData
			});
		}
	})(n), (function(e) {
		e.ControlAnchor = {
			NONE: 0,
			TOP_LEFT: 1,
			TOP_RIGHT: 2,
			BOTTOM_RIGHT: 3,
			BOTTOM_LEFT: 4,
			ABSOLUTE: 5
		}, e.Control = function(t, n, r) {
			var i = t.parentNode;
			typeof n == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), n = { anchor: n }), n.attachToViewer = n.attachToViewer === void 0 ? !0 : n.attachToViewer, this.autoFade = n.autoFade === void 0 ? !0 : n.autoFade, this.element = t, this.anchor = n.anchor, this.container = r, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof n.top == "number" ? n.top + "px" : n.top, this.wrapper.style.left = typeof n.left == "number" ? n.left + "px" : n.left, this.wrapper.style.height = typeof n.height == "number" ? n.height + "px" : n.height, this.wrapper.style.width = typeof n.width == "number" ? n.width + "px" : n.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), n.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : i.appendChild(this.wrapper);
		}, e.Control.prototype = {
			destroy: function() {
				this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
			},
			isVisible: function() {
				return this.wrapper.style.display !== "none";
			},
			setVisible: function(t) {
				this.wrapper.style.display = t ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
			},
			setOpacity: function(t) {
				e.setElementOpacity(this.wrapper, t, !0);
			}
		};
	})(n), (function(e) {
		e.ControlDock = function(t) {
			var n = [
				"topleft",
				"topright",
				"bottomright",
				"bottomleft"
			], r, i;
			for (e.extend(!0, this, {
				id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6),
				container: e.makeNeutralElement("div"),
				controls: []
			}, t), this.container.onsubmit = function() {
				return !1;
			}, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), e.getElementStyle(this.element).position === "static" && (this.element.style.position = "relative"), this.container.style.width = "100%", this.container.style.height = "100%"), i = 0; i < n.length; i++) r = n[i], this.controls[r] = e.makeNeutralElement("div"), this.controls[r].style.position = "absolute", r.match("left") && (this.controls[r].style.left = "0px"), r.match("right") && (this.controls[r].style.right = "0px"), r.match("top") && (this.controls[r].style.top = "0px"), r.match("bottom") && (this.controls[r].style.bottom = "0px");
			this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
		}, e.ControlDock.prototype = {
			addControl: function(n, r) {
				n = e.getElement(n);
				var i = null;
				if (!(t(this, n) >= 0)) {
					switch (r.anchor) {
						case e.ControlAnchor.TOP_RIGHT:
							i = this.controls.topright, n.style.position = "relative", n.style.paddingRight = "0px", n.style.paddingTop = "0px";
							break;
						case e.ControlAnchor.BOTTOM_RIGHT:
							i = this.controls.bottomright, n.style.position = "relative", n.style.paddingRight = "0px", n.style.paddingBottom = "0px";
							break;
						case e.ControlAnchor.BOTTOM_LEFT:
							i = this.controls.bottomleft, n.style.position = "relative", n.style.paddingLeft = "0px", n.style.paddingBottom = "0px";
							break;
						case e.ControlAnchor.TOP_LEFT:
							i = this.controls.topleft, n.style.position = "relative", n.style.paddingLeft = "0px", n.style.paddingTop = "0px";
							break;
						case e.ControlAnchor.ABSOLUTE:
							i = this.container, n.style.margin = "0px", n.style.padding = "0px";
							break;
						default:
						case e.ControlAnchor.NONE:
							i = this.container, n.style.margin = "0px", n.style.padding = "0px";
							break;
					}
					this.controls.push(new e.Control(n, r, i)), n.style.display = "inline-block";
				}
			},
			removeControl: function(n) {
				n = e.getElement(n);
				var r = t(this, n);
				return r >= 0 && (this.controls[r].destroy(), this.controls.splice(r, 1)), this;
			},
			clearControls: function() {
				for (; this.controls.length > 0;) this.controls.pop().destroy();
				return this;
			},
			areControlsEnabled: function() {
				var e;
				for (e = this.controls.length - 1; e >= 0; e--) if (this.controls[e].isVisible()) return !0;
				return !1;
			},
			setControlsEnabled: function(e) {
				var t;
				for (t = this.controls.length - 1; t >= 0; t--) this.controls[t].setVisible(e);
				return this;
			}
		};
		function t(e, t) {
			var n = e.controls, r;
			for (r = n.length - 1; r >= 0; r--) if (n[r].element === t) return r;
			return -1;
		}
	})(n), (function(e) {
		e.Placement = e.freezeObject({
			CENTER: 0,
			TOP_LEFT: 1,
			TOP: 2,
			TOP_RIGHT: 3,
			RIGHT: 4,
			BOTTOM_RIGHT: 5,
			BOTTOM: 6,
			BOTTOM_LEFT: 7,
			LEFT: 8,
			properties: {
				0: {
					isLeft: !1,
					isHorizontallyCentered: !0,
					isRight: !1,
					isTop: !1,
					isVerticallyCentered: !0,
					isBottom: !1
				},
				1: {
					isLeft: !0,
					isHorizontallyCentered: !1,
					isRight: !1,
					isTop: !0,
					isVerticallyCentered: !1,
					isBottom: !1
				},
				2: {
					isLeft: !1,
					isHorizontallyCentered: !0,
					isRight: !1,
					isTop: !0,
					isVerticallyCentered: !1,
					isBottom: !1
				},
				3: {
					isLeft: !1,
					isHorizontallyCentered: !1,
					isRight: !0,
					isTop: !0,
					isVerticallyCentered: !1,
					isBottom: !1
				},
				4: {
					isLeft: !1,
					isHorizontallyCentered: !1,
					isRight: !0,
					isTop: !1,
					isVerticallyCentered: !0,
					isBottom: !1
				},
				5: {
					isLeft: !1,
					isHorizontallyCentered: !1,
					isRight: !0,
					isTop: !1,
					isVerticallyCentered: !1,
					isBottom: !0
				},
				6: {
					isLeft: !1,
					isHorizontallyCentered: !0,
					isRight: !1,
					isTop: !1,
					isVerticallyCentered: !1,
					isBottom: !0
				},
				7: {
					isLeft: !0,
					isHorizontallyCentered: !1,
					isRight: !1,
					isTop: !1,
					isVerticallyCentered: !1,
					isBottom: !0
				},
				8: {
					isLeft: !0,
					isHorizontallyCentered: !1,
					isRight: !1,
					isTop: !1,
					isVerticallyCentered: !0,
					isBottom: !1
				}
			}
		});
	})(n), (function(e) {
		var t = {}, r = 1;
		e.Viewer = function(n) {
			var a = arguments, o = this, s;
			if (e.isPlainObject(n) || (n = {
				id: a[0],
				xmlPath: a.length > 1 ? a[1] : void 0,
				prefixUrl: a.length > 2 ? a[2] : void 0,
				controls: a.length > 3 ? a[3] : void 0,
				overlays: a.length > 4 ? a[4] : void 0
			}), n.config && (e.extend(!0, n, n.config), delete n.config), n.drawerOptions = Object.assign({}, ["useCanvas"].reduce((e, t) => (e[t] = n[t], delete n[t], e), {}), n.drawerOptions), e.extend(!0, this, {
				id: n.id,
				hash: n.hash || r++,
				initialPage: 0,
				element: null,
				container: null,
				canvas: null,
				overlays: [],
				overlaysContainer: null,
				previousBody: [],
				customControls: [],
				source: null,
				drawer: null,
				world: null,
				viewport: null,
				navigator: null,
				collectionViewport: null,
				collectionDrawer: null,
				navImages: null,
				buttonGroup: null,
				profiler: null
			}, e.DEFAULT_SETTINGS, n), this.hash === void 0) throw Error("A hash must be defined, either by specifying options.id or options.hash.");
			t[this.hash] !== void 0 && e.console.warn("Hash " + this.hash + " has already been used."), t[this.hash] = {
				fsBoundsDelta: new e.Point(1, 1),
				prevContainerSize: null,
				animating: !1,
				forceRedraw: !1,
				needsResize: !1,
				forceResize: !1,
				mouseInside: !1,
				group: null,
				zooming: !1,
				zoomFactor: null,
				lastZoomTime: null,
				fullPage: !1,
				onfullscreenchange: null,
				lastClickTime: null,
				draggingToZoom: !1
			}, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(t) {
				var n = e.getString("Errors.OpenFailed", t.eventSource, t.message);
				o._showMessage(n);
			}), e.ControlDock.call(this, n), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", (function(e) {
				e.width = "100%", e.height = "100%", e.overflow = "hidden", e.position = "absolute", e.top = "0px", e.left = "0px";
			})(this.canvas.style), e.setElementTouchActionNone(this.canvas), n.tabIndex !== "" && (this.canvas.tabIndex = n.tabIndex === void 0 ? 0 : n.tabIndex), this.container.className = "openseadragon-container", (function(e) {
				e.width = "100%", e.height = "100%", e.position = "relative", e.overflow = "hidden", e.left = "0px", e.top = "0px", e.textAlign = "left";
			})(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({
				userData: "Viewer.innerTracker",
				element: this.canvas,
				startDisabled: !this.mouseNavEnabled,
				clickTimeThreshold: this.clickTimeThreshold,
				clickDistThreshold: this.clickDistThreshold,
				dblClickTimeThreshold: this.dblClickTimeThreshold,
				dblClickDistThreshold: this.dblClickDistThreshold,
				contextMenuHandler: e.delegate(this, h),
				keyDownHandler: e.delegate(this, g),
				keyHandler: e.delegate(this, _),
				clickHandler: e.delegate(this, v),
				dblClickHandler: e.delegate(this, y),
				dragHandler: e.delegate(this, b),
				dragEndHandler: e.delegate(this, x),
				enterHandler: e.delegate(this, S),
				leaveHandler: e.delegate(this, C),
				pressHandler: e.delegate(this, w),
				releaseHandler: e.delegate(this, T),
				nonPrimaryPressHandler: e.delegate(this, ee),
				nonPrimaryReleaseHandler: e.delegate(this, E),
				scrollHandler: e.delegate(this, te),
				pinchHandler: e.delegate(this, D),
				focusHandler: e.delegate(this, O),
				blurHandler: e.delegate(this, k)
			}), this.outerTracker = new e.MouseTracker({
				userData: "Viewer.outerTracker",
				element: this.container,
				startDisabled: !this.mouseNavEnabled,
				clickTimeThreshold: this.clickTimeThreshold,
				clickDistThreshold: this.clickDistThreshold,
				dblClickTimeThreshold: this.dblClickTimeThreshold,
				dblClickDistThreshold: this.dblClickDistThreshold,
				enterHandler: e.delegate(this, A),
				leaveHandler: e.delegate(this, j)
			}), this.toolbar &&= new e.ControlDock({ element: this.toolbar }), this.bindStandardControls(), t[this.hash].prevContainerSize = i(this.container), window.ResizeObserver ? (this._autoResizePolling = !1, this._resizeObserver = new ResizeObserver(function() {
				t[o.hash].needsResize = !0;
			}), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = !0, this.world = new e.World({ viewer: this }), this.world.addHandler("add-item", function(e) {
				o.source = o.world.getItemAt(0).source, t[o.hash].forceRedraw = !0, o._updateRequestId ||= c(o, M);
			}), this.world.addHandler("remove-item", function(e) {
				o.world.getItemCount() ? o.source = o.world.getItemAt(0).source : o.source = null, t[o.hash].forceRedraw = !0;
			}), this.world.addHandler("metrics-change", function(e) {
				o.viewport && o.viewport._setContentBounds(o.world.getHomeBounds(), o.world.getContentFactor());
			}), this.world.addHandler("item-index-change", function(e) {
				o.source = o.world.getItemAt(0).source;
			}), this.viewport = new e.Viewport({
				containerSize: t[this.hash].prevContainerSize,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime,
				minZoomImageRatio: this.minZoomImageRatio,
				maxZoomPixelRatio: this.maxZoomPixelRatio,
				visibilityRatio: this.visibilityRatio,
				wrapHorizontal: this.wrapHorizontal,
				wrapVertical: this.wrapVertical,
				defaultZoomLevel: this.defaultZoomLevel,
				minZoomLevel: this.minZoomLevel,
				maxZoomLevel: this.maxZoomLevel,
				viewer: this,
				degrees: this.degrees,
				flipped: this.flipped,
				overlayPreserveContentDirection: this.overlayPreserveContentDirection,
				navigatorRotate: this.navigatorRotate,
				homeFillsViewer: this.homeFillsViewer,
				margins: this.viewportMargins,
				silenceMultiImageWarnings: this.silenceMultiImageWarnings
			}), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({
				jobLimit: this.imageLoaderLimit,
				timeout: n.timeout,
				tileRetryMax: this.tileRetryMax,
				tileRetryDelay: this.tileRetryDelay
			}), this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }), Object.prototype.hasOwnProperty.call(this.drawerOptions, "useCanvas") && (e.console.error("useCanvas is deprecated, use the \"drawer\" option to indicate preferred drawer(s)"), this.drawerOptions.useCanvas || (this.drawer = e.HTMLDrawer), delete this.drawerOptions.useCanvas);
			let l = Array.isArray(this.drawer) ? this.drawer : [this.drawer];
			l.length === 0 && (l = [e.DEFAULT_SETTINGS.drawer].flat(), e.console.warn("No valid drawers were selected. Using the default value.")), this.drawer = null;
			for (let e of l) if (this.requestDrawer(e, {
				mainDrawer: !0,
				redrawImmediately: !1
			})) break;
			if (!this.drawer) throw e.console.error("No drawer could be created!"), "Error with creating the selected drawer(s)";
			for (this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (s = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(s, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (s = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(s, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({
				element: this.navigatorElement,
				id: this.navigatorId,
				position: this.navigatorPosition,
				sizeRatio: this.navigatorSizeRatio,
				maintainSizeRatio: this.navigatorMaintainSizeRatio,
				top: this.navigatorTop,
				left: this.navigatorLeft,
				width: this.navigatorWidth,
				height: this.navigatorHeight,
				autoResize: this.navigatorAutoResize,
				autoFade: this.navigatorAutoFade,
				prefixUrl: this.prefixUrl,
				viewer: this,
				navigatorRotate: this.navigatorRotate,
				background: this.navigatorBackground,
				opacity: this.navigatorOpacity,
				borderColor: this.navigatorBorderColor,
				displayRegionColor: this.navigatorDisplayRegionColor,
				crossOriginPolicy: this.crossOriginPolicy,
				animationTime: this.animationTime,
				drawer: this.drawer.getType(),
				loadTilesWithAjax: this.loadTilesWithAjax,
				ajaxHeaders: this.ajaxHeaders,
				ajaxWithCredentials: this.ajaxWithCredentials
			})), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), s = 0; s < this.customControls.length; s++) this.addControl(this.customControls[s].id, { anchor: this.customControls[s].anchor });
			e.requestAnimationFrame(function() {
				u(o);
			}), e._viewers.set(this.element, this);
		}, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, {
			isOpen: function() {
				return !!this.world.getItemCount();
			},
			openDzi: function(t) {
				return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(t);
			},
			openTileSource: function(t) {
				return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(t);
			},
			get buttons() {
				return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
			},
			open: function(t, n) {
				var r = this;
				if (this.close(), !t) return this;
				if (this.sequenceMode && e.isArray(t)) return this.referenceStrip &&= (this.referenceStrip.destroy(), null), n !== void 0 && !isNaN(n) && (this.initialPage = n), this.tileSources = t, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
				if (e.isArray(t) || (t = [t]), !t.length) return this;
				this._opening = !0;
				for (var i = t.length, a = 0, s = 0, c, l = function() {
					if (a + s === i) if (a) {
						(r._firstOpen || !r.preserveViewport) && (r.viewport.goHome(!0), r.viewport.update()), r._firstOpen = !1;
						var e = t[0];
						if (e.tileSource && (e = e.tileSource), r.overlays && !r.preserveOverlays) for (var n = 0; n < r.overlays.length; n++) r.currentOverlays[n] = o(r, r.overlays[n]);
						r._drawOverlays(), r._opening = !1, r.raiseEvent("open", { source: e });
					} else r._opening = !1, r.raiseEvent("open-failed", c);
				}, u = function(t) {
					(!e.isPlainObject(t) || !t.tileSource) && (t = { tileSource: t }), t.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete t.index), t.collectionImmediately === void 0 && (t.collectionImmediately = !0);
					var n = t.success;
					t.success = function(e) {
						if (a++, t.tileSource.overlays) for (var i = 0; i < t.tileSource.overlays.length; i++) r.addOverlay(t.tileSource.overlays[i]);
						n && n(e), l();
					};
					var i = t.error;
					t.error = function(e) {
						s++, c ||= e, i && i(e), l();
					}, r.addTiledImage(t);
				}, d = 0; d < t.length; d++) u(t[d]);
				return this;
			},
			close: function() {
				return t[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), t[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
			},
			destroy: function() {
				if (t[this.hash]) {
					if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip &&= (this.referenceStrip.destroy(), null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator &&= (this.navigator.destroy(), t[this.navigator.hash] = null, delete t[this.navigator.hash], null), this.buttonGroup) this.buttonGroup.destroy();
					else if (this.customButtons) for (; this.customButtons.length;) this.customButtons.pop().destroy();
					if (this.paging && this.paging.destroy(), this.element) for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
					this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), t[this.hash] = null, delete t[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
				}
			},
			requestDrawer(t, n) {
				n = e.extend(!0, {
					mainDrawer: !0,
					redrawImmediately: !0,
					drawerOptions: null
				}, n);
				let r = n.mainDrawer, i = n.redrawImmediately, a = n.drawerOptions, o = this.drawer, s = null;
				if (t && t.prototype instanceof e.DrawerBase ? (s = t, t = "custom") : typeof t == "string" && (s = e.determineDrawer(t)), s || e.console.warn("Unsupported drawer! Drawer must be an existing string type, or a class that extends OpenSeadragon.DrawerBase."), s && s.isSupported()) {
					o && r && o.destroy();
					let e = new s({
						viewer: this,
						viewport: this.viewport,
						element: this.canvas,
						debugGridColor: this.debugGridColor,
						options: a || this.drawerOptions[t]
					});
					return r && (this.drawer = e, i && this.forceRedraw()), e;
				}
				return !1;
			},
			isMouseNavEnabled: function() {
				return this.innerTracker.isTracking();
			},
			setMouseNavEnabled: function(e) {
				return this.innerTracker.setTracking(e), this.outerTracker.setTracking(e), this.raiseEvent("mouse-enabled", { enabled: e }), this;
			},
			areControlsEnabled: function() {
				var e = this.controls.length, t;
				for (t = 0; t < this.controls.length; t++) e &&= this.controls[t].isVisible();
				return e;
			},
			setControlsEnabled: function(e) {
				return e ? f(this) : u(this), this.raiseEvent("controls-enabled", { enabled: e }), this;
			},
			setDebugMode: function(e) {
				for (var t = 0; t < this.world.getItemCount(); t++) this.world.getItemAt(t).debugMode = e;
				this.debugMode = e, this.forceRedraw();
			},
			setAjaxHeaders: function(t, n) {
				if (t === null && (t = {}), !e.isPlainObject(t)) {
					console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
					return;
				}
				if (n === void 0 && (n = !0), this.ajaxHeaders = t, n) {
					for (var r = 0; r < this.world.getItemCount(); r++) this.world.getItemAt(r)._updateAjaxHeaders(!0);
					if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, !0), this.referenceStrip && this.referenceStrip.miniViewers) for (var i in this.referenceStrip.miniViewers) this.referenceStrip.miniViewers[i].setAjaxHeaders(this.ajaxHeaders, !0);
				}
			},
			addButton: function(e) {
				this.buttonGroup.addButton(e);
			},
			isFullPage: function() {
				return t[this.hash] && t[this.hash].fullPage;
			},
			setFullPage: function(n) {
				var r = document.body, i = r.style, a = document.documentElement.style, o = this, s, c;
				if (n === this.isFullPage()) return this;
				var l = {
					fullPage: n,
					preventDefaultAction: !1
				};
				if (this.raiseEvent("pre-full-page", l), l.preventDefaultAction) return this;
				if (n && this.element) {
					for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = i.margin, this.docMargin = a.margin, i.margin = "0", a.margin = "0", this.bodyPadding = i.padding, this.docPadding = a.padding, i.padding = "0", a.padding = "0", this.bodyWidth = i.width, this.docWidth = a.width, i.width = "100%", a.width = "100%", this.bodyHeight = i.height, this.docHeight = a.height, i.height = "100%", a.height = "100%", this.bodyDisplay = i.display, i.display = "block", this.previousBody = [], t[this.hash].prevElementParent = this.element.parentNode, t[this.hash].prevNextSibling = this.element.nextSibling, t[this.hash].prevElementWidth = this.element.style.width, t[this.hash].prevElementHeight = this.element.style.height, s = r.childNodes.length, c = 0; c < s; c++) this.previousBody.push(r.childNodes[0]), r.removeChild(r.childNodes[0]);
					this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, r.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), r.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), t[this.hash].fullPage = !0, e.delegate(this, A)({});
				} else {
					for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, i.margin = this.bodyMargin, a.margin = this.docMargin, i.padding = this.bodyPadding, a.padding = this.docPadding, i.width = this.bodyWidth, a.width = this.docWidth, i.height = this.bodyHeight, a.height = this.docHeight, i.display = this.bodyDisplay, r.removeChild(this.element), s = this.previousBody.length, c = 0; c < s; c++) r.appendChild(this.previousBody.shift());
					e.removeClass(this.element, "fullpage"), t[this.hash].prevElementParent.insertBefore(this.element, t[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (r.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = t[this.hash].prevElementWidth, this.element.style.height = t[this.hash].prevElementHeight;
					var u = 0, d = function() {
						e.setPageScroll(o.pageScroll);
						var t = e.getPageScroll();
						u++, u < 10 && (t.x !== o.pageScroll.x || t.y !== o.pageScroll.y) && e.requestAnimationFrame(d);
					};
					e.requestAnimationFrame(d), t[this.hash].fullPage = !1, e.delegate(this, j)({});
				}
				return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: n }), this;
			},
			setFullScreen: function(t) {
				var n = this;
				if (!e.supportsFullScreen) return this.setFullPage(t);
				if (e.isFullScreen() === t) return this;
				var r = {
					fullScreen: t,
					preventDefaultAction: !1
				};
				if (this.raiseEvent("pre-full-screen", r), r.preventDefaultAction) return this;
				if (t) {
					if (this.setFullPage(!0), !this.isFullPage()) return this;
					this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
					var i = function() {
						var t = e.isFullScreen();
						t || (e.removeEvent(document, e.fullScreenEventName, i), e.removeEvent(document, e.fullScreenErrorEventName, i), n.setFullPage(!1), n.isFullPage() && (n.element.style.width = n.fullPageStyleWidth, n.element.style.height = n.fullPageStyleHeight)), n.navigator && n.viewport && setTimeout(function() {
							n.navigator.update(n.viewport);
						}), n.raiseEvent("full-screen", { fullScreen: t });
					};
					e.addEvent(document, e.fullScreenEventName, i), e.addEvent(document, e.fullScreenErrorEventName, i), e.requestFullScreen(document.body);
				} else e.exitFullScreen();
				return this;
			},
			isVisible: function() {
				return this.container.style.visibility !== "hidden";
			},
			isFullScreen: function() {
				return e.isFullScreen() && this.isFullPage();
			},
			setVisible: function(e) {
				return this.container.style.visibility = e ? "" : "hidden", this.raiseEvent("visible", { visible: e }), this;
			},
			addTiledImage: function(t) {
				e.console.assert(t, "[Viewer.addTiledImage] options is required"), e.console.assert(t.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!t.replace || t.index > -1 && t.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
				var n = this;
				t.replace && (t.replaceItem = n.world.getItemAt(t.index)), this._hideMessage(), t.placeholderFillStyle === void 0 && (t.placeholderFillStyle = this.placeholderFillStyle), t.opacity === void 0 && (t.opacity = this.opacity), t.preload === void 0 && (t.preload = this.preload), t.compositeOperation === void 0 && (t.compositeOperation = this.compositeOperation), t.crossOriginPolicy === void 0 && (t.crossOriginPolicy = t.tileSource.crossOriginPolicy === void 0 ? this.crossOriginPolicy : t.tileSource.crossOriginPolicy), t.ajaxWithCredentials === void 0 && (t.ajaxWithCredentials = this.ajaxWithCredentials), t.loadTilesWithAjax === void 0 && (t.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(t.ajaxHeaders) || (t.ajaxHeaders = {});
				var r = { options: t };
				function i(e) {
					for (var i = 0; i < n._loadQueue.length; i++) if (n._loadQueue[i] === r) {
						n._loadQueue.splice(i, 1);
						break;
					}
					n._loadQueue.length === 0 && o(r), n.raiseEvent("add-item-failed", e), t.error && t.error(e);
				}
				function o(e) {
					n.collectionMode && (n.world.arrange({
						immediately: e.options.collectionImmediately,
						rows: n.collectionRows,
						columns: n.collectionColumns,
						layout: n.collectionLayout,
						tileSize: n.collectionTileSize,
						tileMargin: n.collectionTileMargin
					}), n.world.setAutoRefigureSizes(!0));
				}
				if (e.isArray(t.tileSource)) {
					setTimeout(function() {
						i({
							message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
							source: t.tileSource,
							options: t
						});
					});
					return;
				}
				this._loadQueue.push(r);
				function s() {
					for (var t, r, i; n._loadQueue.length && (t = n._loadQueue[0], t.tileSource);) {
						if (n._loadQueue.splice(0, 1), t.options.replace) {
							var a = n.world.getIndexOfItem(t.options.replaceItem);
							a !== -1 && (t.options.index = a), n.world.removeItem(t.options.replaceItem);
						}
						r = new e.TiledImage({
							viewer: n,
							source: t.tileSource,
							viewport: n.viewport,
							drawer: n.drawer,
							tileCache: n.tileCache,
							imageLoader: n.imageLoader,
							x: t.options.x,
							y: t.options.y,
							width: t.options.width,
							height: t.options.height,
							fitBounds: t.options.fitBounds,
							fitBoundsPlacement: t.options.fitBoundsPlacement,
							clip: t.options.clip,
							placeholderFillStyle: t.options.placeholderFillStyle,
							opacity: t.options.opacity,
							preload: t.options.preload,
							degrees: t.options.degrees,
							flipped: t.options.flipped,
							compositeOperation: t.options.compositeOperation,
							springStiffness: n.springStiffness,
							animationTime: n.animationTime,
							minZoomImageRatio: n.minZoomImageRatio,
							wrapHorizontal: n.wrapHorizontal,
							wrapVertical: n.wrapVertical,
							maxTilesPerFrame: n.maxTilesPerFrame,
							immediateRender: n.immediateRender,
							blendTime: n.blendTime,
							alwaysBlend: n.alwaysBlend,
							minPixelRatio: n.minPixelRatio,
							smoothTileEdgesMinZoom: n.smoothTileEdgesMinZoom,
							iOSDevice: n.iOSDevice,
							crossOriginPolicy: t.options.crossOriginPolicy,
							ajaxWithCredentials: t.options.ajaxWithCredentials,
							loadTilesWithAjax: t.options.loadTilesWithAjax,
							ajaxHeaders: t.options.ajaxHeaders,
							debugMode: n.debugMode,
							subPixelRoundingForTransparency: n.subPixelRoundingForTransparency
						}), n.collectionMode && n.world.setAutoRefigureSizes(!1), n.navigator && (i = e.extend({}, t.options, {
							replace: !1,
							originalTiledImage: r,
							tileSource: t.tileSource
						}), n.navigator.addTiledImage(i)), n.world.addItem(r, { index: t.options.index }), n._loadQueue.length === 0 && o(t), n.world.getItemCount() === 1 && !n.preserveViewport && n.viewport.goHome(!0), t.options.success && t.options.success({ item: r });
					}
				}
				a(this, t.tileSource, t, function(e) {
					r.tileSource = e, s();
				}, function(e) {
					e.options = t, i(e), s();
				});
			},
			addSimpleImage: function(t) {
				e.console.assert(t, "[Viewer.addSimpleImage] options is required"), e.console.assert(t.url, "[Viewer.addSimpleImage] options.url is required");
				var n = e.extend({}, t, { tileSource: {
					type: "image",
					url: t.url
				} });
				delete n.url, this.addTiledImage(n);
			},
			addLayer: function(t) {
				var n = this;
				e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
				var r = e.extend({}, t, {
					success: function(e) {
						n.raiseEvent("add-layer", {
							options: t,
							drawer: e.item
						});
					},
					error: function(e) {
						n.raiseEvent("add-layer-failed", e);
					}
				});
				return this.addTiledImage(r), this;
			},
			getLayerAtLevel: function(t) {
				return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(t);
			},
			getLevelOfLayer: function(t) {
				return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(t);
			},
			getLayersCount: function() {
				return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
			},
			setLayerLevel: function(t, n) {
				return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(t, n);
			},
			removeLayer: function(t) {
				return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(t);
			},
			forceRedraw: function() {
				return t[this.hash].forceRedraw = !0, this;
			},
			forceResize: function() {
				t[this.hash].needsResize = !0, t[this.hash].forceResize = !0;
			},
			bindSequenceControls: function() {
				var t = e.delegate(this, p), n = e.delegate(this, m), r = e.delegate(this, this.goToNextPage), i = e.delegate(this, this.goToPreviousPage), a = this.navImages, o = !0;
				return this.showSequenceControl && ((this.previousButton || this.nextButton) && (o = !1), this.previousButton = new e.Button({
					element: this.previousButton ? e.getElement(this.previousButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.PreviousPage"),
					srcRest: P(this.prefixUrl, a.previous.REST),
					srcGroup: P(this.prefixUrl, a.previous.GROUP),
					srcHover: P(this.prefixUrl, a.previous.HOVER),
					srcDown: P(this.prefixUrl, a.previous.DOWN),
					onRelease: i,
					onFocus: t,
					onBlur: n
				}), this.nextButton = new e.Button({
					element: this.nextButton ? e.getElement(this.nextButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.NextPage"),
					srcRest: P(this.prefixUrl, a.next.REST),
					srcGroup: P(this.prefixUrl, a.next.GROUP),
					srcHover: P(this.prefixUrl, a.next.HOVER),
					srcDown: P(this.prefixUrl, a.next.DOWN),
					onRelease: r,
					onFocus: t,
					onBlur: n
				}), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), o && (this.paging = new e.ButtonGroup({
					buttons: [this.previousButton, this.nextButton],
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold
				}), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, { anchor: e.ControlAnchor.BOTTOM_RIGHT }) : this.addControl(this.pagingControl, { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }))), this;
			},
			bindStandardControls: function() {
				var t = e.delegate(this, F), n = e.delegate(this, L), r = e.delegate(this, ie), i = e.delegate(this, I), a = e.delegate(this, B), o = e.delegate(this, ae), s = e.delegate(this, H), c = e.delegate(this, oe), l = e.delegate(this, U), u = e.delegate(this, W), d = e.delegate(this, p), f = e.delegate(this, m), h = this.navImages, g = [], _ = !0;
				return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (_ = !1), this.showZoomControl && (g.push(this.zoomInButton = new e.Button({
					element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.ZoomIn"),
					srcRest: P(this.prefixUrl, h.zoomIn.REST),
					srcGroup: P(this.prefixUrl, h.zoomIn.GROUP),
					srcHover: P(this.prefixUrl, h.zoomIn.HOVER),
					srcDown: P(this.prefixUrl, h.zoomIn.DOWN),
					onPress: t,
					onRelease: n,
					onClick: r,
					onEnter: t,
					onExit: n,
					onFocus: d,
					onBlur: f
				})), g.push(this.zoomOutButton = new e.Button({
					element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.ZoomOut"),
					srcRest: P(this.prefixUrl, h.zoomOut.REST),
					srcGroup: P(this.prefixUrl, h.zoomOut.GROUP),
					srcHover: P(this.prefixUrl, h.zoomOut.HOVER),
					srcDown: P(this.prefixUrl, h.zoomOut.DOWN),
					onPress: i,
					onRelease: n,
					onClick: a,
					onEnter: i,
					onExit: n,
					onFocus: d,
					onBlur: f
				}))), this.showHomeControl && g.push(this.homeButton = new e.Button({
					element: this.homeButton ? e.getElement(this.homeButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.Home"),
					srcRest: P(this.prefixUrl, h.home.REST),
					srcGroup: P(this.prefixUrl, h.home.GROUP),
					srcHover: P(this.prefixUrl, h.home.HOVER),
					srcDown: P(this.prefixUrl, h.home.DOWN),
					onRelease: o,
					onFocus: d,
					onBlur: f
				})), this.showFullPageControl && g.push(this.fullPageButton = new e.Button({
					element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.FullPage"),
					srcRest: P(this.prefixUrl, h.fullpage.REST),
					srcGroup: P(this.prefixUrl, h.fullpage.GROUP),
					srcHover: P(this.prefixUrl, h.fullpage.HOVER),
					srcDown: P(this.prefixUrl, h.fullpage.DOWN),
					onRelease: s,
					onFocus: d,
					onBlur: f
				})), this.showRotationControl && (g.push(this.rotateLeftButton = new e.Button({
					element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.RotateLeft"),
					srcRest: P(this.prefixUrl, h.rotateleft.REST),
					srcGroup: P(this.prefixUrl, h.rotateleft.GROUP),
					srcHover: P(this.prefixUrl, h.rotateleft.HOVER),
					srcDown: P(this.prefixUrl, h.rotateleft.DOWN),
					onRelease: c,
					onFocus: d,
					onBlur: f
				})), g.push(this.rotateRightButton = new e.Button({
					element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.RotateRight"),
					srcRest: P(this.prefixUrl, h.rotateright.REST),
					srcGroup: P(this.prefixUrl, h.rotateright.GROUP),
					srcHover: P(this.prefixUrl, h.rotateright.HOVER),
					srcDown: P(this.prefixUrl, h.rotateright.DOWN),
					onRelease: l,
					onFocus: d,
					onBlur: f
				}))), this.showFlipControl && g.push(this.flipButton = new e.Button({
					element: this.flipButton ? e.getElement(this.flipButton) : null,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold,
					tooltip: e.getString("Tooltips.Flip"),
					srcRest: P(this.prefixUrl, h.flip.REST),
					srcGroup: P(this.prefixUrl, h.flip.GROUP),
					srcHover: P(this.prefixUrl, h.flip.HOVER),
					srcDown: P(this.prefixUrl, h.flip.DOWN),
					onRelease: u,
					onFocus: d,
					onBlur: f
				})), _ ? (this.buttonGroup = new e.ButtonGroup({
					buttons: g,
					clickTimeThreshold: this.clickTimeThreshold,
					clickDistThreshold: this.clickDistThreshold
				}), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, V)), this.toolbar ? this.toolbar.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }) : this.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT })) : this.customButtons = g), this;
			},
			currentPage: function() {
				return this._sequenceIndex;
			},
			goToPage: function(e) {
				return this.tileSources && e >= 0 && e < this.tileSources.length && (this._sequenceIndex = e, this._updateSequenceButtons(e), this.open(this.tileSources[e]), this.referenceStrip && this.referenceStrip.setFocus(e), this.raiseEvent("page", { page: e })), this;
			},
			addOverlay: function(t, n, r, i) {
				var a = e.isPlainObject(t) ? t : {
					element: t,
					location: n,
					placement: r,
					onDraw: i
				};
				if (t = e.getElement(a.element), s(this.currentOverlays, t) >= 0) return this;
				var c = o(this, a);
				return this.currentOverlays.push(c), c.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", {
					element: t,
					location: a.location,
					placement: a.placement
				}), this;
			},
			updateOverlay: function(n, r, i) {
				var a;
				return n = e.getElement(n), a = s(this.currentOverlays, n), a >= 0 && (this.currentOverlays[a].update(r, i), t[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", {
					element: n,
					location: r,
					placement: i
				})), this;
			},
			removeOverlay: function(n) {
				var r;
				return n = e.getElement(n), r = s(this.currentOverlays, n), r >= 0 && (this.currentOverlays[r].destroy(), this.currentOverlays.splice(r, 1), t[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", { element: n })), this;
			},
			clearOverlays: function() {
				for (; this.currentOverlays.length > 0;) this.currentOverlays.pop().destroy();
				return t[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this;
			},
			getOverlayById: function(t) {
				var n;
				return t = e.getElement(t), n = s(this.currentOverlays, t), n >= 0 ? this.currentOverlays[n] : null;
			},
			_updateSequenceButtons: function(e) {
				this.nextButton && (!this.tileSources || this.tileSources.length - 1 === e ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (e > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
			},
			_showMessage: function(t) {
				this._hideMessage();
				var n = e.makeNeutralElement("div");
				n.appendChild(document.createTextNode(t)), this.messageDiv = e.makeCenteredNode(n), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
			},
			_hideMessage: function() {
				var e = this.messageDiv;
				e && (e.parentNode.removeChild(e), delete this.messageDiv);
			},
			gestureSettingsByDeviceType: function(e) {
				switch (e) {
					case "mouse": return this.gestureSettingsMouse;
					case "touch": return this.gestureSettingsTouch;
					case "pen": return this.gestureSettingsPen;
					default: return this.gestureSettingsUnknown;
				}
			},
			_drawOverlays: function() {
				var e, t = this.currentOverlays.length;
				for (e = 0; e < t; e++) this.currentOverlays[e].drawHTML(this.overlaysContainer, this.viewport);
			},
			_cancelPendingImages: function() {
				this._loadQueue = [];
			},
			removeReferenceStrip: function() {
				this.showReferenceStrip = !1, this.referenceStrip &&= (this.referenceStrip.destroy(), null);
			},
			addReferenceStrip: function() {
				if (this.showReferenceStrip = !0, this.sequenceMode) {
					if (this.referenceStrip) return;
					this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({
						id: this.referenceStripElement,
						position: this.referenceStripPosition,
						sizeRatio: this.referenceStripSizeRatio,
						scroll: this.referenceStripScroll,
						height: this.referenceStripHeight,
						width: this.referenceStripWidth,
						tileSources: this.tileSources,
						prefixUrl: this.prefixUrl,
						viewer: this
					}), this.referenceStrip.setFocus(this._sequenceIndex));
				} else e.console.warn("Attempting to display a reference strip while \"sequenceMode\" is off.");
			},
			_addUpdatePixelDensityRatioEvent: function() {
				this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
			},
			_removeUpdatePixelDensityRatioEvent: function() {
				e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
			},
			_updatePixelDensityRatio: function() {
				var t = e.pixelDensityRatio, n = e.getCurrentPixelDensityRatio();
				t !== n && (e.pixelDensityRatio = n, this.forceResize());
			},
			goToPreviousPage: function() {
				var e = this._sequenceIndex - 1;
				this.navPrevNextWrap && e < 0 && (e += this.tileSources.length), this.goToPage(e);
			},
			goToNextPage: function() {
				var e = this._sequenceIndex + 1;
				this.navPrevNextWrap && e >= this.tileSources.length && (e = 0), this.goToPage(e);
			},
			isAnimating: function() {
				return t[this.hash].animating;
			}
		});
		function i(t) {
			return t = e.getElement(t), new e.Point(t.clientWidth === 0 ? 1 : t.clientWidth, t.clientHeight === 0 ? 1 : t.clientHeight);
		}
		function a(t, n, r, i, a) {
			var o = t;
			if (e.type(n) === "string") {
				if (n.match(/^\s*<.*>\s*$/)) n = e.parseXml(n);
				else if (n.match(/^\s*[{[].*[}\]]\s*$/)) try {
					n = e.parseJSON(n);
				} catch {}
			}
			function s(e, t) {
				e.ready ? i(e) : (e.addHandler("ready", function() {
					i(e);
				}), e.addHandler("open-failed", function(e) {
					a({
						message: e.message,
						source: t
					});
				}));
			}
			setTimeout(function() {
				if (e.type(n) === "string") n = new e.TileSource({
					url: n,
					crossOriginPolicy: r.crossOriginPolicy === void 0 ? t.crossOriginPolicy : r.crossOriginPolicy,
					ajaxWithCredentials: t.ajaxWithCredentials,
					ajaxHeaders: r.ajaxHeaders ? r.ajaxHeaders : t.ajaxHeaders,
					splitHashDataForPost: t.splitHashDataForPost,
					success: function(e) {
						i(e.tileSource);
					}
				}), n.addHandler("open-failed", function(e) {
					a(e);
				});
				else if (e.isPlainObject(n) || n.nodeType) if (n.crossOriginPolicy === void 0 && (r.crossOriginPolicy !== void 0 || t.crossOriginPolicy !== void 0) && (n.crossOriginPolicy = r.crossOriginPolicy === void 0 ? t.crossOriginPolicy : r.crossOriginPolicy), n.ajaxWithCredentials === void 0 && (n.ajaxWithCredentials = t.ajaxWithCredentials), e.isFunction(n.getTileUrl)) {
					var c = new e.TileSource(n);
					c.getTileUrl = n.getTileUrl, i(c);
				} else {
					var l = e.TileSource.determineType(o, n);
					if (!l) {
						a({
							message: "Unable to load TileSource",
							source: n
						});
						return;
					}
					s(new l(l.prototype.configure.apply(o, [n])), n);
				}
				else s(n, n);
			});
		}
		function o(t, n) {
			if (n instanceof e.Overlay) return n;
			var r = null;
			if (n.element) r = e.getElement(n.element);
			else {
				var i = n.id ? n.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
				r = e.getElement(n.id), r || (r = document.createElement("a"), r.href = "#/overlay/" + i), r.id = i, e.addClass(r, n.className ? n.className : "openseadragon-overlay");
			}
			var a = n.location, o = n.width, s = n.height;
			if (!a) {
				var c = n.x, l = n.y;
				if (n.px !== void 0) {
					var u = t.viewport.imageToViewportRectangle(new e.Rect(n.px, n.py, o || 0, s || 0));
					c = u.x, l = u.y, o = o === void 0 ? void 0 : u.width, s = s === void 0 ? void 0 : u.height;
				}
				a = new e.Point(c, l);
			}
			var d = n.placement;
			return d && e.type(d) === "string" && (d = e.Placement[n.placement.toUpperCase()]), new e.Overlay({
				element: r,
				location: a,
				placement: d,
				onDraw: n.onDraw,
				checkResize: n.checkResize,
				width: o,
				height: s,
				rotationMode: n.rotationMode
			});
		}
		function s(e, t) {
			var n;
			for (n = e.length - 1; n >= 0; n--) if (e[n].element === t) return n;
			return -1;
		}
		function c(t, n) {
			return e.requestAnimationFrame(function() {
				n(t);
			});
		}
		function l(t) {
			e.requestAnimationFrame(function() {
				d(t);
			});
		}
		function u(t) {
			t.autoHideControls && (t.controlsShouldFade = !0, t.controlsFadeBeginTime = e.now() + t.controlsFadeDelay, window.setTimeout(function() {
				l(t);
			}, t.controlsFadeDelay));
		}
		function d(t) {
			var n, r, i, a;
			if (t.controlsShouldFade) {
				for (n = e.now(), r = n - t.controlsFadeBeginTime, i = 1 - r / t.controlsFadeLength, i = Math.min(1, i), i = Math.max(0, i), a = t.controls.length - 1; a >= 0; a--) t.controls[a].autoFade && t.controls[a].setOpacity(i);
				i > 0 && l(t);
			}
		}
		function f(e) {
			var t;
			for (e.controlsShouldFade = !1, t = e.controls.length - 1; t >= 0; t--) e.controls[t].setOpacity(1);
		}
		function p() {
			f(this);
		}
		function m() {
			u(this);
		}
		function h(e) {
			var t = {
				tracker: e.eventSource,
				position: e.position,
				originalEvent: e.originalEvent,
				preventDefault: e.preventDefault
			};
			this.raiseEvent("canvas-contextmenu", t), e.preventDefault = t.preventDefault;
		}
		function g(t) {
			var n = {
				originalEvent: t.originalEvent,
				preventDefaultAction: !1,
				preventVerticalPan: t.preventVerticalPan || !this.panVertical,
				preventHorizontalPan: t.preventHorizontalPan || !this.panHorizontal
			};
			if (this.raiseEvent("canvas-key", n), !n.preventDefaultAction && !t.ctrl && !t.alt && !t.meta) switch (t.keyCode) {
				case 38:
					n.preventVerticalPan || (t.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 40:
					n.preventVerticalPan || (t.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 37:
					n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 39:
					n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 187:
					this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), t.preventDefault = !0;
					break;
				case 189:
					this.viewport.zoomBy(.9), this.viewport.applyConstraints(), t.preventDefault = !0;
					break;
				case 48:
					this.viewport.goHome(), this.viewport.applyConstraints(), t.preventDefault = !0;
					break;
				case 87:
					n.preventVerticalPan || (t.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 83:
					n.preventVerticalPan || (t.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 65:
					n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 68:
					n.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), t.preventDefault = !0;
					break;
				case 82:
					t.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), t.preventDefault = !0;
					break;
				case 70:
					this.viewport.toggleFlip(), t.preventDefault = !0;
					break;
				case 74:
					this.goToPreviousPage();
					break;
				case 75:
					this.goToNextPage();
					break;
				default:
					t.preventDefault = !1;
					break;
			}
			else t.preventDefault = !1;
		}
		function _(e) {
			var t = { originalEvent: e.originalEvent };
			this.raiseEvent("canvas-key-press", t);
		}
		function v(n) {
			var r;
			document.activeElement !== this.canvas && this.canvas.focus(), this.viewport.flipped && (n.position.x = this.viewport.getContainerSize().x - n.position.x);
			var i = {
				tracker: n.eventSource,
				position: n.position,
				quick: n.quick,
				shift: n.shift,
				originalEvent: n.originalEvent,
				originalTarget: n.originalTarget,
				preventDefaultAction: !1
			};
			this.raiseEvent("canvas-click", i), !i.preventDefaultAction && this.viewport && n.quick && (r = this.gestureSettingsByDeviceType(n.pointerType), r.clickToZoom === !0 && (this.viewport.zoomBy(n.shift ? 1 / this.zoomPerClick : this.zoomPerClick, r.zoomToRefPoint ? this.viewport.pointFromPixel(n.position, !0) : null), this.viewport.applyConstraints()), r.dblClickDragToZoom && (t[this.hash].draggingToZoom === !0 ? (t[this.hash].lastClickTime = null, t[this.hash].draggingToZoom = !1) : t[this.hash].lastClickTime = e.now()));
		}
		function y(e) {
			var t, n = {
				tracker: e.eventSource,
				position: e.position,
				shift: e.shift,
				originalEvent: e.originalEvent,
				preventDefaultAction: !1
			};
			this.raiseEvent("canvas-double-click", n), !n.preventDefaultAction && this.viewport && (t = this.gestureSettingsByDeviceType(e.pointerType), t.dblClickToZoom && (this.viewport.zoomBy(e.shift ? 1 / this.zoomPerClick : this.zoomPerClick, t.zoomToRefPoint ? this.viewport.pointFromPixel(e.position, !0) : null), this.viewport.applyConstraints()));
		}
		function b(e) {
			var n, r = {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				position: e.position,
				delta: e.delta,
				speed: e.speed,
				direction: e.direction,
				shift: e.shift,
				originalEvent: e.originalEvent,
				preventDefaultAction: !1
			};
			if (this.raiseEvent("canvas-drag", r), n = this.gestureSettingsByDeviceType(e.pointerType), !r.preventDefaultAction && this.viewport) {
				if (n.dblClickDragToZoom && t[this.hash].draggingToZoom) {
					var i = this.zoomPerDblClickDrag ** (e.delta.y / 50);
					this.viewport.zoomBy(i);
				} else if (n.dragToPan && !t[this.hash].draggingToZoom) {
					if (this.panHorizontal || (e.delta.x = 0), this.panVertical || (e.delta.y = 0), this.viewport.flipped && (e.delta.x = -e.delta.x), this.constrainDuringPan) {
						var a = this.viewport.deltaPointsFromPixels(e.delta.negate());
						this.viewport.centerSpringX.target.value += a.x, this.viewport.centerSpringY.target.value += a.y;
						var o = this.viewport.getConstrainedBounds();
						this.viewport.centerSpringX.target.value -= a.x, this.viewport.centerSpringY.target.value -= a.y, o.xConstrained && (e.delta.x = 0), o.yConstrained && (e.delta.y = 0);
					}
					this.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta.negate()), n.flickEnabled && !this.constrainDuringPan);
				}
			}
		}
		function x(n) {
			var r, i = {
				tracker: n.eventSource,
				pointerType: n.pointerType,
				position: n.position,
				speed: n.speed,
				direction: n.direction,
				shift: n.shift,
				originalEvent: n.originalEvent,
				preventDefaultAction: !1
			};
			if (this.raiseEvent("canvas-drag-end", i), r = this.gestureSettingsByDeviceType(n.pointerType), !i.preventDefaultAction && this.viewport) {
				if (!t[this.hash].draggingToZoom && r.dragToPan && r.flickEnabled && n.speed >= r.flickMinSpeed) {
					var a = 0;
					this.panHorizontal && (a = r.flickMomentum * n.speed * Math.cos(n.direction));
					var o = 0;
					this.panVertical && (o = r.flickMomentum * n.speed * Math.sin(n.direction));
					var s = this.viewport.pixelFromPoint(this.viewport.getCenter(!0)), c = this.viewport.pointFromPixel(new e.Point(s.x - a, s.y - o));
					this.viewport.panTo(c, !1);
				}
				this.viewport.applyConstraints();
			}
			r.dblClickDragToZoom && t[this.hash].draggingToZoom === !0 && (t[this.hash].draggingToZoom = !1);
		}
		function S(e) {
			this.raiseEvent("canvas-enter", {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				position: e.position,
				buttons: e.buttons,
				pointers: e.pointers,
				insideElementPressed: e.insideElementPressed,
				buttonDownAny: e.buttonDownAny,
				originalEvent: e.originalEvent
			});
		}
		function C(e) {
			this.raiseEvent("canvas-exit", {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				position: e.position,
				buttons: e.buttons,
				pointers: e.pointers,
				insideElementPressed: e.insideElementPressed,
				buttonDownAny: e.buttonDownAny,
				originalEvent: e.originalEvent
			});
		}
		function w(n) {
			var r;
			if (this.raiseEvent("canvas-press", {
				tracker: n.eventSource,
				pointerType: n.pointerType,
				position: n.position,
				insideElementPressed: n.insideElementPressed,
				insideElementReleased: n.insideElementReleased,
				originalEvent: n.originalEvent
			}), r = this.gestureSettingsByDeviceType(n.pointerType), r.dblClickDragToZoom) {
				var i = t[this.hash].lastClickTime, a = e.now();
				if (i === null) return;
				a - i < this.dblClickTimeThreshold && (t[this.hash].draggingToZoom = !0), t[this.hash].lastClickTime = null;
			}
		}
		function T(e) {
			this.raiseEvent("canvas-release", {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				position: e.position,
				insideElementPressed: e.insideElementPressed,
				insideElementReleased: e.insideElementReleased,
				originalEvent: e.originalEvent
			});
		}
		function ee(e) {
			this.raiseEvent("canvas-nonprimary-press", {
				tracker: e.eventSource,
				position: e.position,
				pointerType: e.pointerType,
				button: e.button,
				buttons: e.buttons,
				originalEvent: e.originalEvent
			});
		}
		function E(e) {
			this.raiseEvent("canvas-nonprimary-release", {
				tracker: e.eventSource,
				position: e.position,
				pointerType: e.pointerType,
				button: e.button,
				buttons: e.buttons,
				originalEvent: e.originalEvent
			});
		}
		function D(e) {
			var t, n, r, i, a = {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				gesturePoints: e.gesturePoints,
				lastCenter: e.lastCenter,
				center: e.center,
				lastDistance: e.lastDistance,
				distance: e.distance,
				shift: e.shift,
				originalEvent: e.originalEvent,
				preventDefaultPanAction: !1,
				preventDefaultZoomAction: !1,
				preventDefaultRotateAction: !1
			};
			if (this.raiseEvent("canvas-pinch", a), this.viewport && (t = this.gestureSettingsByDeviceType(e.pointerType), t.pinchToZoom && (!a.preventDefaultPanAction || !a.preventDefaultZoomAction) && (n = this.viewport.pointFromPixel(e.center, !0), t.zoomToRefPoint && !a.preventDefaultPanAction && (r = this.viewport.pointFromPixel(e.lastCenter, !0), i = r.minus(n), this.panHorizontal || (i.x = 0), this.panVertical || (i.y = 0), this.viewport.panBy(i, !0)), a.preventDefaultZoomAction || this.viewport.zoomBy(e.distance / e.lastDistance, n, !0), this.viewport.applyConstraints()), t.pinchRotate && !a.preventDefaultRotateAction)) {
				var o = Math.atan2(e.gesturePoints[0].currentPos.y - e.gesturePoints[1].currentPos.y, e.gesturePoints[0].currentPos.x - e.gesturePoints[1].currentPos.x), s = Math.atan2(e.gesturePoints[0].lastPos.y - e.gesturePoints[1].lastPos.y, e.gesturePoints[0].lastPos.x - e.gesturePoints[1].lastPos.x);
				n = this.viewport.pointFromPixel(e.center, !0), this.viewport.rotateTo(this.viewport.getRotation(!0) + (o - s) * (180 / Math.PI), n, !0);
			}
		}
		function O(e) {
			this.raiseEvent("canvas-focus", {
				tracker: e.eventSource,
				originalEvent: e.originalEvent
			});
		}
		function k(e) {
			this.raiseEvent("canvas-blur", {
				tracker: e.eventSource,
				originalEvent: e.originalEvent
			});
		}
		function te(t) {
			var n, r, i, a = e.now();
			a - this._lastScrollTime > this.minScrollDeltaTime ? (this._lastScrollTime = a, n = {
				tracker: t.eventSource,
				position: t.position,
				scroll: t.scroll,
				shift: t.shift,
				originalEvent: t.originalEvent,
				preventDefaultAction: !1,
				preventDefault: !0
			}, this.raiseEvent("canvas-scroll", n), !n.preventDefaultAction && this.viewport && (this.viewport.flipped && (t.position.x = this.viewport.getContainerSize().x - t.position.x), r = this.gestureSettingsByDeviceType(t.pointerType), r.scrollToZoom && (i = this.zoomPerScroll ** +t.scroll, this.viewport.zoomBy(i, r.zoomToRefPoint ? this.viewport.pointFromPixel(t.position, !0) : null), this.viewport.applyConstraints())), t.preventDefault = n.preventDefault) : t.preventDefault = !0;
		}
		function A(e) {
			t[this.hash].mouseInside = !0, f(this), this.raiseEvent("container-enter", {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				position: e.position,
				buttons: e.buttons,
				pointers: e.pointers,
				insideElementPressed: e.insideElementPressed,
				buttonDownAny: e.buttonDownAny,
				originalEvent: e.originalEvent
			});
		}
		function j(e) {
			e.pointers < 1 && (t[this.hash].mouseInside = !1, t[this.hash].animating || u(this)), this.raiseEvent("container-exit", {
				tracker: e.eventSource,
				pointerType: e.pointerType,
				position: e.position,
				buttons: e.buttons,
				pointers: e.pointers,
				insideElementPressed: e.insideElementPressed,
				buttonDownAny: e.buttonDownAny,
				originalEvent: e.originalEvent
			});
		}
		function M(e) {
			ne(e), e.isOpen() ? e._updateRequestId = c(e, M) : e._updateRequestId = !1;
		}
		function N(n, r) {
			var i = n.viewport, a = i.getZoom(), o = i.getCenter();
			i.resize(r, n.preserveImageSizeOnResize), i.panTo(o, !0);
			var s;
			if (n.preserveImageSizeOnResize) s = t[n.hash].prevContainerSize.x / r.x;
			else {
				var c = new e.Point(0, 0), l = new e.Point(t[n.hash].prevContainerSize.x, t[n.hash].prevContainerSize.y).distanceTo(c);
				s = new e.Point(r.x, r.y).distanceTo(c) / l * t[n.hash].prevContainerSize.x / r.x;
			}
			i.zoomTo(a * s, null, !0), t[n.hash].prevContainerSize = r, t[n.hash].forceRedraw = !0, t[n.hash].needsResize = !1, t[n.hash].forceResize = !1;
		}
		function ne(e) {
			if (!(e._opening || !t[e.hash])) {
				if (e.autoResize || t[e.hash].forceResize) {
					var n;
					if (e._autoResizePolling) {
						n = i(e.container);
						var r = t[e.hash].prevContainerSize;
						n.equals(r) || (t[e.hash].needsResize = !0);
					}
					t[e.hash].needsResize && N(e, n || i(e.container));
				}
				var a = e.viewport.update(), o = e.world.update(a) || a;
				a && e.raiseEvent("viewport-change"), e.referenceStrip && (o = e.referenceStrip.update(e.viewport) || o);
				var s = t[e.hash].animating;
				!s && o && (e.raiseEvent("animation-start"), f(e));
				var c = s && !o;
				c && (t[e.hash].animating = !1), (o || c || t[e.hash].forceRedraw || e.world.needsDraw()) && (re(e), e._drawOverlays(), e.navigator && e.navigator.update(e.viewport), t[e.hash].forceRedraw = !1, o && e.raiseEvent("animation")), c && (e.raiseEvent("animation-finish"), t[e.hash].mouseInside || u(e)), t[e.hash].animating = o;
			}
		}
		function re(e) {
			e.imageLoader.clear(), e.world.draw(), e.raiseEvent("update-viewport", {});
		}
		function P(e, t) {
			return e ? e + t : t;
		}
		function F() {
			t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = this.zoomPerSecond, t[this.hash].zooming = !0, R(this);
		}
		function I() {
			t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = 1 / this.zoomPerSecond, t[this.hash].zooming = !0, R(this);
		}
		function L() {
			t[this.hash].zooming = !1;
		}
		function R(t) {
			e.requestAnimationFrame(e.delegate(t, z));
		}
		function z() {
			var n, r, i;
			t[this.hash].zooming && this.viewport && (n = e.now(), r = n - t[this.hash].lastZoomTime, i = t[this.hash].zoomFactor ** (r / 1e3), this.viewport.zoomBy(i), this.viewport.applyConstraints(), t[this.hash].lastZoomTime = n, R(this));
		}
		function ie() {
			this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints());
		}
		function B() {
			this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints());
		}
		function V() {
			this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
		}
		function ae() {
			this.viewport && this.viewport.goHome();
		}
		function H() {
			this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
		}
		function oe() {
			if (this.viewport) {
				var e = this.viewport.getRotation();
				this.viewport.flipped ? e += this.rotationIncrement : e -= this.rotationIncrement, this.viewport.setRotation(e);
			}
		}
		function U() {
			if (this.viewport) {
				var e = this.viewport.getRotation();
				this.viewport.flipped ? e -= this.rotationIncrement : e += this.rotationIncrement, this.viewport.setRotation(e);
			}
		}
		function W() {
			this.viewport.toggleFlip();
		}
		e.determineDrawer = function(t) {
			for (let r in n) {
				let i = n[r], a = i.prototype;
				if (a && a instanceof n.DrawerBase && e.isFunction(a.getType) && a.getType.call(i) === t) return i;
			}
			return null;
		};
	})(n), (function(e) {
		e.Navigator = function(o) {
			var s = o.viewer, c = this, l, u;
			o.element || o.id ? (o.element ? (o.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), o.element.id ? o.id = o.element.id : o.id = "navigator-" + e.now(), this.element = o.element) : this.element = document.getElementById(o.id), o.controlOptions = {
				anchor: e.ControlAnchor.NONE,
				attachToViewer: !1,
				autoFade: !1
			}) : (o.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), o.controlOptions = {
				anchor: e.ControlAnchor.TOP_RIGHT,
				attachToViewer: !0,
				autoFade: o.autoFade
			}, o.position && (o.position === "BOTTOM_RIGHT" ? o.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : o.position === "BOTTOM_LEFT" ? o.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : o.position === "TOP_RIGHT" ? o.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : o.position === "TOP_LEFT" ? o.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : o.position === "ABSOLUTE" && (o.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, o.controlOptions.top = o.top, o.controlOptions.left = o.left, o.controlOptions.height = o.height, o.controlOptions.width = o.width))), this.element.id = o.id, this.element.className += " navigator", o = e.extend(!0, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, o, {
				element: this.element,
				tabIndex: -1,
				showNavigator: !1,
				mouseNavEnabled: !1,
				showNavigationControl: !1,
				showSequenceControl: !1,
				immediateRender: !0,
				blendTime: 0,
				animationTime: o.animationTime,
				autoResize: !1,
				minZoomImageRatio: 1,
				background: o.background,
				opacity: o.opacity,
				borderColor: o.borderColor,
				displayRegionColor: o.displayRegionColor
			}), o.minPixelRatio = this.minPixelRatio = s.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), o.controlOptions.anchor !== e.ControlAnchor.NONE && (function(e, t) {
				e.margin = "0px", e.border = t + "px solid " + o.borderColor, e.padding = "0px", e.background = o.background, e.opacity = o.opacity, e.overflow = "hidden";
			})(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", (function(e, t) {
				e.position = "relative", e.top = "0px", e.left = "0px", e.fontSize = "0px", e.overflow = "hidden", e.border = t + "px solid " + o.displayRegionColor, e.margin = "0px", e.padding = "0px", e.background = "transparent", e.float = "left", e.cssFloat = "left", e.zIndex = 999999999, e.cursor = "default", e.boxSizing = "content-box";
			})(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), s.addControl(this.element, o.controlOptions), this._resizeWithViewer = o.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && o.controlOptions.anchor !== e.ControlAnchor.NONE, o.width && o.height ? (this.setWidth(o.width), this.setHeight(o.height)) : this._resizeWithViewer && (l = e.getElementSize(s.element), this.element.style.height = Math.round(l.y * o.sizeRatio) + "px", this.element.style.width = Math.round(l.x * o.sizeRatio) + "px", this.oldViewerSize = l, u = e.getElementSize(this.element), this.elementArea = u.x * u.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [o]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
			function d(e, t) {
				a(c.displayRegionContainer, e), a(c.displayRegion, -e), c.viewport.setRotation(e, t);
			}
			o.navigatorRotate && (d(o.viewer.viewport ? o.viewer.viewport.getRotation() : o.viewer.degrees || 0, !0), o.viewer.addHandler("rotate", function(e) {
				d(e.degrees, e.immediately);
			})), this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({
				userData: "Navigator.innerTracker",
				element: this.element,
				dragHandler: e.delegate(this, n),
				clickHandler: e.delegate(this, t),
				releaseHandler: e.delegate(this, r),
				scrollHandler: e.delegate(this, i),
				preProcessEventHandler: function(e) {
					e.eventType === "wheel" && (e.preventDefault = !0);
				}
			}), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
				c.viewport && c.viewport.goHome(!0);
			}), s.world.addHandler("item-index-change", function(e) {
				window.setTimeout(function() {
					var t = c.world.getItemAt(e.previousIndex);
					c.world.setItemIndex(t, e.newIndex);
				}, 1);
			}), s.world.addHandler("remove-item", function(e) {
				var t = e.item, n = c._getMatchingItem(t);
				n && c.world.removeItem(n);
			}), this.update(s.viewport);
		}, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, {
			updateSize: function() {
				if (this.viewport) {
					var t = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth, this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
					t.equals(this.oldContainerSize) || (this.viewport.resize(t, !0), this.viewport.goHome(!0), this.oldContainerSize = t, this.world.update(), this.world.draw(), this.update(this.viewer.viewport));
				}
			},
			setWidth: function(e) {
				this.width = e, this.element.style.width = typeof e == "number" ? e + "px" : e, this._resizeWithViewer = !1, this.updateSize();
			},
			setHeight: function(e) {
				this.height = e, this.element.style.height = typeof e == "number" ? e + "px" : e, this._resizeWithViewer = !1, this.updateSize();
			},
			setFlip: function(e) {
				return this.viewport.setFlip(e), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
			},
			setDisplayTransform: function(e) {
				o(this.canvas, e), o(this.element, e);
			},
			update: function(t) {
				var n, r, i, o, s, c;
				if (t ||= this.viewer.viewport, n = e.getElementSize(this.viewer.element), this._resizeWithViewer && n.x && n.y && !n.equals(this.oldViewerSize) && (this.oldViewerSize = n, this.maintainSizeRatio || !this.elementArea ? (r = n.x * this.sizeRatio, i = n.y * this.sizeRatio) : (r = Math.sqrt(this.elementArea * (n.x / n.y)), i = this.elementArea / r), this.element.style.width = Math.round(r) + "px", this.element.style.height = Math.round(i) + "px", this.elementArea ||= r * i, this.updateSize()), t && this.viewport) {
					if (o = t.getBoundsNoRotate(!0), s = this.viewport.pixelFromPointNoRotate(o.getTopLeft(), !1), c = this.viewport.pixelFromPointNoRotate(o.getBottomRight(), !1).minus(this.totalBorderWidths), !this.navigatorRotate) {
						var l = t.getRotation(!0);
						a(this.displayRegion, -l);
					}
					var u = this.displayRegion.style;
					u.display = this.world.getItemCount() ? "block" : "none", u.top = s.y.toFixed(2) + "px", u.left = s.x.toFixed(2) + "px";
					var d = c.x - s.x, f = c.y - s.y;
					u.width = Math.round(Math.max(d, 0)) + "px", u.height = Math.round(Math.max(f, 0)) + "px";
				}
			},
			addTiledImage: function(t) {
				var n = this, r = t.originalTiledImage;
				delete t.original;
				var i = e.extend({}, t, { success: function(e) {
					var t = e.item;
					t._originalForNavigator = r, n._matchBounds(t, r, !0), n._matchOpacity(t, r), n._matchCompositeOperation(t, r);
					function i() {
						n._matchBounds(t, r);
					}
					function a() {
						n._matchOpacity(t, r);
					}
					function o() {
						n._matchCompositeOperation(t, r);
					}
					r.addHandler("bounds-change", i), r.addHandler("clip-change", i), r.addHandler("opacity-change", a), r.addHandler("composite-operation-change", o);
				} });
				return e.Viewer.prototype.addTiledImage.apply(this, [i]);
			},
			destroy: function() {
				return e.Viewer.prototype.destroy.apply(this);
			},
			_getMatchingItem: function(e) {
				for (var t = this.world.getItemCount(), n, r = 0; r < t; r++) if (n = this.world.getItemAt(r), n._originalForNavigator === e) return n;
				return null;
			},
			_matchBounds: function(e, t, n) {
				var r = t.getBoundsNoRotate();
				e.setPosition(r.getTopLeft(), n), e.setWidth(r.width, n), e.setRotation(t.getRotation(), n), e.setClip(t.getClip()), e.setFlip(t.getFlip());
			},
			_matchOpacity: function(e, t) {
				e.setOpacity(t.opacity);
			},
			_matchCompositeOperation: function(e, t) {
				e.setCompositeOperation(t.compositeOperation);
			}
		});
		function t(e) {
			var t = {
				tracker: e.eventSource,
				position: e.position,
				quick: e.quick,
				shift: e.shift,
				originalEvent: e.originalEvent,
				preventDefaultAction: !1
			};
			if (this.viewer.raiseEvent("navigator-click", t), !t.preventDefaultAction && e.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
				this.viewer.viewport.flipped && (e.position.x = this.viewport.getContainerSize().x - e.position.x);
				var n = this.viewport.pointFromPixel(e.position);
				this.panVertical ? this.panHorizontal || (n.x = this.viewer.viewport.getCenter(!0).x) : n.y = this.viewer.viewport.getCenter(!0).y, this.viewer.viewport.panTo(n), this.viewer.viewport.applyConstraints();
			}
		}
		function n(e) {
			var t = {
				tracker: e.eventSource,
				position: e.position,
				delta: e.delta,
				speed: e.speed,
				direction: e.direction,
				shift: e.shift,
				originalEvent: e.originalEvent,
				preventDefaultAction: !1
			};
			this.viewer.raiseEvent("navigator-drag", t), !t.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (e.delta.x = 0), this.panVertical || (e.delta.y = 0), this.viewer.viewport.flipped && (e.delta.x = -e.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
		}
		function r(e) {
			e.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
		}
		function i(e) {
			var t = {
				tracker: e.eventSource,
				position: e.position,
				scroll: e.scroll,
				shift: e.shift,
				originalEvent: e.originalEvent,
				preventDefault: e.preventDefault
			};
			this.viewer.raiseEvent("navigator-scroll", t), e.preventDefault = t.preventDefault;
		}
		function a(e, t) {
			o(e, "rotate(" + t + "deg)");
		}
		function o(e, t) {
			e.style.webkitTransform = t, e.style.mozTransform = t, e.style.msTransform = t, e.style.oTransform = t, e.style.transform = t;
		}
	})(n), (function(e) {
		var t = {
			Errors: {
				Dzc: "Sorry, we don't support Deep Zoom Collections!",
				Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
				Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
				ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
				Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
				Status: "This space unintentionally left blank ({0} {1}).",
				OpenFailed: "Unable to open {0}: {1}"
			},
			Tooltips: {
				FullPage: "Toggle full page",
				Home: "Go home",
				ZoomIn: "Zoom in",
				ZoomOut: "Zoom out",
				NextPage: "Next page",
				PreviousPage: "Previous page",
				RotateLeft: "Rotate left",
				RotateRight: "Rotate right",
				Flip: "Flip Horizontally"
			}
		};
		e.extend(e, {
			getString: function(n) {
				var r = n.split("."), i = null, a = arguments, o = t, s;
				for (s = 0; s < r.length - 1; s++) o = o[r[s]] || {};
				return i = o[r[s]], typeof i != "string" && (e.console.error("Untranslated source string:", n), i = ""), i.replace(/\{\d+\}/g, function(e) {
					var t = parseInt(e.match(/\d+/), 10) + 1;
					return t < a.length ? a[t] : "";
				});
			},
			setString: function(e, n) {
				var r = e.split("."), i = t, a;
				for (a = 0; a < r.length - 1; a++) i[r[a]] || (i[r[a]] = {}), i = i[r[a]];
				i[r[a]] = n;
			}
		});
	})(n), (function(e) {
		e.Point = function(e, t) {
			this.x = typeof e == "number" ? e : 0, this.y = typeof t == "number" ? t : 0;
		}, e.Point.prototype = {
			clone: function() {
				return new e.Point(this.x, this.y);
			},
			plus: function(t) {
				return new e.Point(this.x + t.x, this.y + t.y);
			},
			minus: function(t) {
				return new e.Point(this.x - t.x, this.y - t.y);
			},
			times: function(t) {
				return new e.Point(this.x * t, this.y * t);
			},
			divide: function(t) {
				return new e.Point(this.x / t, this.y / t);
			},
			negate: function() {
				return new e.Point(-this.x, -this.y);
			},
			distanceTo: function(e) {
				return Math.sqrt((this.x - e.x) ** 2 + (this.y - e.y) ** 2);
			},
			squaredDistanceTo: function(e) {
				return (this.x - e.x) ** 2 + (this.y - e.y) ** 2;
			},
			apply: function(t) {
				return new e.Point(t(this.x), t(this.y));
			},
			equals: function(t) {
				return t instanceof e.Point && this.x === t.x && this.y === t.y;
			},
			rotate: function(t, n) {
				n ||= new e.Point(0, 0);
				var r, i;
				if (t % 90 == 0) switch (e.positiveModulo(t, 360)) {
					case 0:
						r = 1, i = 0;
						break;
					case 90:
						r = 0, i = 1;
						break;
					case 180:
						r = -1, i = 0;
						break;
					case 270:
						r = 0, i = -1;
						break;
				}
				else {
					var a = t * Math.PI / 180;
					r = Math.cos(a), i = Math.sin(a);
				}
				var o = r * (this.x - n.x) - i * (this.y - n.y) + n.x, s = i * (this.x - n.x) + r * (this.y - n.y) + n.y;
				return new e.Point(o, s);
			},
			toString: function() {
				return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
			}
		};
	})(n), (function(e) {
		e.TileSource = function(t, n, r, i, a, o) {
			var s = this, c = arguments, l = e.isPlainObject(t) ? t : {
				width: c[0],
				height: c[1],
				tileSize: c[2],
				tileOverlap: c[3],
				minLevel: c[4],
				maxLevel: c[5]
			}, u;
			if (e.EventSource.call(this), e.extend(!0, this, l), !this.success) {
				for (u = 0; u < arguments.length; u++) if (e.isFunction(arguments[u])) {
					this.success = arguments[u];
					break;
				}
			}
			this.success && this.addHandler("ready", function(e) {
				s.success(e);
			}), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = l.width && l.height ? l.width / l.height : 1, this.dimensions = new e.Point(l.width, l.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = l.tileOverlap ? l.tileOverlap : 0, this.minLevel = l.minLevel ? l.minLevel : 0, this.maxLevel = l.maxLevel !== void 0 && l.maxLevel !== null ? l.maxLevel : l.width && l.height ? Math.ceil(Math.log(Math.max(l.width, l.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this));
		}, e.TileSource.prototype = {
			getTileSize: function(t) {
				return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth;
			},
			getTileWidth: function(e) {
				return this._tileWidth ? this._tileWidth : this.getTileSize(e);
			},
			getTileHeight: function(e) {
				return this._tileHeight ? this._tileHeight : this.getTileSize(e);
			},
			setMaxLevel: function(e) {
				this.maxLevel = e, this._memoizeLevelScale();
			},
			getLevelScale: function(e) {
				return this._memoizeLevelScale(), this.getLevelScale(e);
			},
			_memoizeLevelScale: function() {
				var e = {}, t;
				for (t = 0; t <= this.maxLevel; t++) e[t] = 1 / 2 ** (this.maxLevel - t);
				this.getLevelScale = function(t) {
					return e[t];
				};
			},
			getNumTiles: function(t) {
				var n = this.getLevelScale(t), r = Math.ceil(n * this.dimensions.x / this.getTileWidth(t)), i = Math.ceil(n * this.dimensions.y / this.getTileHeight(t));
				return new e.Point(r, i);
			},
			getPixelRatio: function(t) {
				var n = this.dimensions.times(this.getLevelScale(t)), r = 1 / n.x * e.pixelDensityRatio, i = 1 / n.y * e.pixelDensityRatio;
				return new e.Point(r, i);
			},
			getClosestLevel: function() {
				var e, t;
				for (e = this.minLevel + 1; e <= this.maxLevel && (t = this.getNumTiles(e), !(t.x > 1 || t.y > 1)); e++);
				return e - 1;
			},
			getTileAtPoint: function(t, n) {
				var r = n.x >= 0 && n.x <= 1 && n.y >= 0 && n.y <= 1 / this.aspectRatio;
				e.console.assert(r, "[TileSource.getTileAtPoint] must be called with a valid point.");
				var i = this.dimensions.x * this.getLevelScale(t), a = n.x * i, o = n.y * i, s = Math.floor(a / this.getTileWidth(t)), c = Math.floor(o / this.getTileHeight(t));
				return n.x >= 1 && (s = this.getNumTiles(t).x - 1), n.y >= 1 / this.aspectRatio - 1e-15 && (c = this.getNumTiles(t).y - 1), new e.Point(s, c);
			},
			getTileBounds: function(t, n, r, i) {
				var a = this.dimensions.times(this.getLevelScale(t)), o = this.getTileWidth(t), s = this.getTileHeight(t), c = n === 0 ? 0 : o * n - this.tileOverlap, l = r === 0 ? 0 : s * r - this.tileOverlap, u = o + (n === 0 ? 1 : 2) * this.tileOverlap, d = s + (r === 0 ? 1 : 2) * this.tileOverlap, f = 1 / a.x;
				return u = Math.min(u, a.x - c), d = Math.min(d, a.y - l), i ? new e.Rect(0, 0, u, d) : new e.Rect(c * f, l * f, u * f, d * f);
			},
			getImageInfo: function(n) {
				var r = this, i, a, o, s, c, l, u;
				n && (c = n.split("/"), l = c[c.length - 1], u = l.lastIndexOf("."), u > -1 && (c[c.length - 1] = l.slice(0, u)));
				var d = null;
				if (this.splitHashDataForPost) {
					var f = n.indexOf("#");
					f !== -1 && (d = n.substring(f + 1), n = n.substr(0, f));
				}
				a = function(t) {
					typeof t == "string" && (t = e.parseXml(t));
					var i = e.TileSource.determineType(r, t, n);
					if (!i) {
						r.raiseEvent("open-failed", {
							message: "Unable to load TileSource",
							source: n
						});
						return;
					}
					s = i.prototype.configure.apply(r, [
						t,
						n,
						d
					]), s.ajaxWithCredentials === void 0 && (s.ajaxWithCredentials = r.ajaxWithCredentials), o = new i(s), r.ready = !0, r.raiseEvent("ready", { tileSource: o });
				}, n.match(/\.js$/) ? (i = n.split("/").pop().replace(".js", ""), e.jsonp({
					url: n,
					async: !1,
					callbackName: i,
					callback: a
				})) : e.makeAjaxRequest({
					url: n,
					postData: d,
					withCredentials: this.ajaxWithCredentials,
					headers: this.ajaxHeaders,
					success: function(e) {
						var n = t(e);
						a(n);
					},
					error: function(t, i) {
						var a;
						try {
							a = "HTTP " + t.status + " attempting to load TileSource: " + n;
						} catch {
							a = (i === void 0 || !i.toString ? "Unknown error" : i.toString()) + " attempting to load TileSource: " + n;
						}
						e.console.error(a), r.raiseEvent("open-failed", {
							message: a,
							source: n,
							postData: d
						});
					}
				});
			},
			supports: function(e, t) {
				return !1;
			},
			configure: function(e, t, n) {
				throw Error("Method not implemented.");
			},
			getTileUrl: function(e, t, n) {
				throw Error("Method not implemented.");
			},
			getTilePostData: function(e, t, n) {
				return null;
			},
			getTileAjaxHeaders: function(e, t, n) {
				return {};
			},
			getTileHashKey: function(e, t, n, r, i, a) {
				function o(e) {
					return i ? e + "+" + JSON.stringify(i) : e;
				}
				return o(typeof r == "string" ? r : e + "/" + t + "_" + n);
			},
			tileExists: function(e, t, n) {
				var r = this.getNumTiles(e);
				return e >= this.minLevel && e <= this.maxLevel && t >= 0 && n >= 0 && t < r.x && n < r.y;
			},
			hasTransparency: function(e, t, n, r) {
				return !!e || t.match(".png");
			},
			downloadTileStart: function(t) {
				var n = t.userData, r = new Image();
				n.image = r, n.request = null;
				var i = function(e) {
					if (!r) {
						t.finish(null, n.request, "Image load failed: undefined Image instance.");
						return;
					}
					r.onload = r.onerror = r.onabort = null, t.finish(e ? null : r, n.request, e);
				};
				r.onload = function() {
					i();
				}, r.onabort = r.onerror = function() {
					i("Image load aborted.");
				}, t.loadWithAjax ? n.request = e.makeAjaxRequest({
					url: t.src,
					withCredentials: t.ajaxWithCredentials,
					headers: t.ajaxHeaders,
					responseType: "arraybuffer",
					postData: t.postData,
					success: function(e) {
						var t;
						try {
							t = new window.Blob([e.response]);
						} catch (r) {
							var n = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
							if (r.name === "TypeError" && n) {
								var a = new n();
								a.append(e.response), t = a.getBlob();
							}
						}
						t.size === 0 ? i("Empty image response.") : r.src = (window.URL || window.webkitURL).createObjectURL(t);
					},
					error: function(e) {
						i("Image load aborted - XHR error");
					}
				}) : (t.crossOriginPolicy !== !1 && (r.crossOrigin = t.crossOriginPolicy), r.src = t.src);
			},
			downloadTileAbort: function(e) {
				e.userData.request && e.userData.request.abort();
				var t = e.userData.image;
				e.userData.image && (t.onload = t.onerror = t.onabort = null);
			},
			createTileCache: function(e, t, n) {
				e._data = t;
			},
			destroyTileCache: function(e) {
				e._data = null, e._renderedContext = null;
			},
			getTileCacheData: function(e) {
				return e._data;
			},
			getTileCacheDataAsImage: function(e) {
				return e._data;
			},
			getTileCacheDataAsContext2D: function(e) {
				if (!e._renderedContext) {
					var t = document.createElement("canvas");
					t.width = e._data.width, t.height = e._data.height, e._renderedContext = t.getContext("2d"), e._renderedContext.drawImage(e._data, 0, 0), e._data = null;
				}
				return e._renderedContext;
			}
		}, e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
		function t(t) {
			var n = t.responseText, r = t.status, i, a;
			if (!t) throw Error(e.getString("Errors.Security"));
			if (t.status !== 200 && t.status !== 0) throw r = t.status, i = r === 404 ? "Not Found" : t.statusText, Error(e.getString("Errors.Status", r, i));
			if (n.match(/^\s*<.*/)) try {
				a = t.responseXML && t.responseXML.documentElement ? t.responseXML : e.parseXml(n);
			} catch {
				a = t.responseText;
			}
			else if (n.match(/\s*[{[].*/)) try {
				a = e.parseJSON(n);
			} catch {
				a = n;
			}
			else a = n;
			return a;
		}
		e.TileSource.determineType = function(t, r, i) {
			for (var a in n) if (a.match(/.+TileSource$/) && e.isFunction(n[a]) && e.isFunction(n[a].prototype.supports) && n[a].prototype.supports.call(t, r, i)) return n[a];
			return e.console.error("No TileSource was able to open %s %s", i, r), null;
		};
	})(n), (function(e) {
		e.DziTileSource = function(t, n, r, i, a, o, s, c, l) {
			var u, d, f, p = e.isPlainObject(t) ? t : {
				width: arguments[0],
				height: arguments[1],
				tileSize: arguments[2],
				tileOverlap: arguments[3],
				tilesUrl: arguments[4],
				fileFormat: arguments[5],
				displayRects: arguments[6],
				minLevel: arguments[7],
				maxLevel: arguments[8]
			};
			if (this._levelRects = {}, this.tilesUrl = p.tilesUrl, this.fileFormat = p.fileFormat, this.displayRects = p.displayRects, this.displayRects) for (u = this.displayRects.length - 1; u >= 0; u--) for (d = this.displayRects[u], f = d.minLevel; f <= d.maxLevel; f++) this._levelRects[f] || (this._levelRects[f] = []), this._levelRects[f].push(d);
			e.TileSource.apply(this, [p]);
		}, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, {
			supports: function(e, t) {
				var n;
				return e.Image ? n = e.Image.xmlns : e.documentElement && (e.documentElement.localName === "Image" || e.documentElement.tagName === "Image") && (n = e.documentElement.namespaceURI), n = (n || "").toLowerCase(), n.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || n.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
			},
			configure: function(r, i, a) {
				var o = e.isPlainObject(r) ? n(this, r) : t(this, r);
				return i && !o.tilesUrl && (o.tilesUrl = i.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"), i.search(/\.(dzi|xml|js)\?/) === -1 ? o.queryParams = "" : o.queryParams = i.match(/\?.*/)), o;
			},
			getTileUrl: function(e, t, n) {
				return [
					this.tilesUrl,
					e,
					"/",
					t,
					"_",
					n,
					".",
					this.fileFormat,
					this.queryParams
				].join("");
			},
			tileExists: function(e, t, n) {
				var r = this._levelRects[e], i, a, o, s, c, l, u;
				if (this.minLevel && e < this.minLevel || this.maxLevel && e > this.maxLevel) return !1;
				if (!r || !r.length) return !0;
				for (u = r.length - 1; u >= 0; u--) if (i = r[u], !(e < i.minLevel || e > i.maxLevel) && (a = this.getLevelScale(e), o = i.x * a, s = i.y * a, c = o + i.width * a, l = s + i.height * a, o = Math.floor(o / this._tileWidth), s = Math.floor(s / this._tileWidth), c = Math.ceil(c / this._tileWidth), l = Math.ceil(l / this._tileWidth), o <= t && t < c && s <= n && n < l)) return !0;
				return !1;
			}
		});
		function t(t, r) {
			if (!r || !r.documentElement) throw Error(e.getString("Errors.Xml"));
			var i = r.documentElement, a = i.localName || i.tagName, o = r.documentElement.namespaceURI, s = null, c = [], l, u, d, f, p;
			if (a === "Image") try {
				if (f = i.getElementsByTagName("Size")[0], f === void 0 && (f = i.getElementsByTagNameNS(o, "Size")[0]), s = { Image: {
					xmlns: "http://schemas.microsoft.com/deepzoom/2008",
					Url: i.getAttribute("Url"),
					Format: i.getAttribute("Format"),
					DisplayRect: null,
					Overlap: parseInt(i.getAttribute("Overlap"), 10),
					TileSize: parseInt(i.getAttribute("TileSize"), 10),
					Size: {
						Height: parseInt(f.getAttribute("Height"), 10),
						Width: parseInt(f.getAttribute("Width"), 10)
					}
				} }, !e.imageFormatSupported(s.Image.Format)) throw Error(e.getString("Errors.ImageFormat", s.Image.Format.toUpperCase()));
				for (l = i.getElementsByTagName("DisplayRect"), l === void 0 && (l = i.getElementsByTagNameNS(o, "DisplayRect")[0]), p = 0; p < l.length; p++) u = l[p], d = u.getElementsByTagName("Rect")[0], d === void 0 && (d = u.getElementsByTagNameNS(o, "Rect")[0]), c.push({ Rect: {
					X: parseInt(d.getAttribute("X"), 10),
					Y: parseInt(d.getAttribute("Y"), 10),
					Width: parseInt(d.getAttribute("Width"), 10),
					Height: parseInt(d.getAttribute("Height"), 10),
					MinLevel: parseInt(u.getAttribute("MinLevel"), 10),
					MaxLevel: parseInt(u.getAttribute("MaxLevel"), 10)
				} });
				return c.length && (s.Image.DisplayRect = c), n(t, s);
			} catch (t) {
				throw t instanceof Error ? t : Error(e.getString("Errors.Dzi"));
			}
			else if (a === "Collection") throw Error(e.getString("Errors.Dzc"));
			else if (a === "Error") {
				var m = i.getElementsByTagName("Message")[0].firstChild.nodeValue;
				throw Error(m);
			}
			throw Error(e.getString("Errors.Dzi"));
		}
		function n(t, n) {
			var r = n.Image, i = r.Url, a = r.Format, o = r.Size, s = r.DisplayRect || [], c = parseInt(o.Width, 10), l = parseInt(o.Height, 10), u = parseInt(r.TileSize, 10), d = parseInt(r.Overlap, 10), f = [], p, m;
			for (m = 0; m < s.length; m++) p = s[m].Rect, f.push(new e.DisplayRect(parseInt(p.X, 10), parseInt(p.Y, 10), parseInt(p.Width, 10), parseInt(p.Height, 10), parseInt(p.MinLevel, 10), parseInt(p.MaxLevel, 10)));
			return e.extend(!0, {
				width: c,
				height: l,
				tileSize: u,
				tileOverlap: d,
				minLevel: null,
				maxLevel: null,
				tilesUrl: i,
				fileFormat: a,
				displayRects: f
			}, n);
		}
	})(n), (function(e) {
		e.IIIFTileSource = function(n) {
			if (e.extend(!0, this, n), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id)) throw Error("IIIF required parameters (width, height, or id) not provided.");
			if (n.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = n.version, this.tile_width && this.tile_height) n.tileWidth = this.tile_width, n.tileHeight = this.tile_height;
			else if (this.tile_width) n.tileSize = this.tile_width;
			else if (this.tile_height) n.tileSize = this.tile_height;
			else if (this.tiles) if (this.tiles.length === 1) n.tileWidth = this.tiles[0].width, n.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
			else {
				this.scale_factors = [];
				for (var i = 0; i < this.tiles.length; i++) for (var a = 0; a < this.tiles[i].scaleFactors.length; a++) {
					var o = this.tiles[i].scaleFactors[a];
					this.scale_factors.push(o), n.tileSizePerScaleFactor[o] = {
						width: this.tiles[i].width,
						height: this.tiles[i].height || this.tiles[i].width
					};
				}
			}
			else if (t(n)) {
				for (var s = Math.min(this.height, this.width), c = [
					256,
					512,
					1024
				], l = [], u = 0; u < c.length; u++) c[u] <= s && l.push(c[u]);
				l.length > 0 ? n.tileSize = Math.max.apply(null, l) : n.tileSize = s;
			} else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, n.levels = r(this), e.extend(!0, n, {
				width: n.levels[n.levels.length - 1].width,
				height: n.levels[n.levels.length - 1].height,
				tileSize: Math.max(n.height, n.width),
				tileOverlap: 0,
				minLevel: 0,
				maxLevel: n.levels.length - 1
			}), this.levels = n.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
			if (!n.maxLevel && !this.emulateLegacyImagePyramid) if (!this.scale_factors) n.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
			else {
				var d = Math.max.apply(null, this.scale_factors);
				n.maxLevel = Math.round(Math.log(d) * Math.LOG2E);
			}
			if (this.sizes) {
				var f = this.sizes.length;
				(f === n.maxLevel || f === n.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort((e, t) => e.width - t.width), f === n.maxLevel && this.levelSizes.push({
					width: this.width,
					height: this.height
				}));
			}
			e.TileSource.apply(this, [n]);
		}, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, {
			supports: function(e, t) {
				return e.protocol && e.protocol === "http://iiif.io/api/image" || e["@context"] && (e["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || e["@context"] === "http://iiif.io/api/image/1/context.json") || e.profile && e.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || e.identifier && e.width && e.height ? !0 : !!(e.documentElement && e.documentElement.tagName === "info" && e.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
			},
			configure: function(t, r, a) {
				if (e.isPlainObject(t)) {
					if (!t["@context"]) t["@context"] = "http://iiif.io/api/image/1.0/context.json", t["@id"] = r.replace("/info.json", ""), t.version = 1;
					else {
						var o = t["@context"];
						if (Array.isArray(o)) {
							for (var s = 0; s < o.length; s++) if (typeof o[s] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(o[s]) || o[s] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
								o = o[s];
								break;
							}
						}
						switch (o) {
							case "http://iiif.io/api/image/1/context.json":
							case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
								t.version = 1;
								break;
							case "http://iiif.io/api/image/2/context.json":
								t.version = 2;
								break;
							case "http://iiif.io/api/image/3/context.json":
								t.version = 3;
								break;
							default: e.console.error("Data has a @context property which contains no known IIIF context URI.");
						}
					}
					if (t.preferredFormats) {
						for (var c = 0; c < t.preferredFormats.length; c++) if (n.imageFormatSupported(t.preferredFormats[c])) {
							t.tileFormat = t.preferredFormats[c];
							break;
						}
					}
					return t;
				} else {
					var l = i(t);
					return l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = r.replace("/info.xml", ""), l.version = 1, l;
				}
			},
			getTileWidth: function(t) {
				if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileWidth.call(this, t);
				var n = 2 ** (this.maxLevel - t);
				return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[n] ? this.tileSizePerScaleFactor[n].width : this._tileWidth;
			},
			getTileHeight: function(t) {
				if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileHeight.call(this, t);
				var n = 2 ** (this.maxLevel - t);
				return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[n] ? this.tileSizePerScaleFactor[n].height : this._tileHeight;
			},
			getLevelScale: function(t) {
				if (this.emulateLegacyImagePyramid) {
					var n = NaN;
					return this.levels.length > 0 && t >= this.minLevel && t <= this.maxLevel && (n = this.levels[t].width / this.levels[this.maxLevel].width), n;
				}
				return e.TileSource.prototype.getLevelScale.call(this, t);
			},
			getNumTiles: function(t) {
				if (this.emulateLegacyImagePyramid) return this.getLevelScale(t) ? new e.Point(1, 1) : new e.Point(0, 0);
				if (this.levelSizes) {
					var n = this.levelSizes[t], r = Math.ceil(n.width / this.getTileWidth(t)), i = Math.ceil(n.height / this.getTileHeight(t));
					return new e.Point(r, i);
				} else return e.TileSource.prototype.getNumTiles.call(this, t);
			},
			getTileAtPoint: function(t, n) {
				if (this.emulateLegacyImagePyramid) return new e.Point(0, 0);
				if (this.levelSizes) {
					var r = n.x >= 0 && n.x <= 1 && n.y >= 0 && n.y <= 1 / this.aspectRatio;
					e.console.assert(r, "[TileSource.getTileAtPoint] must be called with a valid point.");
					var i = this.levelSizes[t].width, a = n.x * i, o = n.y * i, s = Math.floor(a / this.getTileWidth(t)), c = Math.floor(o / this.getTileHeight(t));
					return n.x >= 1 && (s = this.getNumTiles(t).x - 1), n.y >= 1 / this.aspectRatio - 1e-15 && (c = this.getNumTiles(t).y - 1), new e.Point(s, c);
				}
				return e.TileSource.prototype.getTileAtPoint.call(this, t, n);
			},
			getTileUrl: function(e, t, n) {
				if (this.emulateLegacyImagePyramid) {
					var r = null;
					return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (r = this.levels[e].url), r;
				}
				var i = "0", a = .5 ** (this.maxLevel - e), o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x;
				return this.levelSizes ? (o = this.levelSizes[e].width, s = this.levelSizes[e].height) : (o = Math.ceil(this.width * a), s = Math.ceil(this.height * a)), c = this.getTileWidth(e), l = this.getTileHeight(e), u = Math.round(c / a), d = Math.round(l / a), b = this.version === 1 ? "native." + this.tileFormat : "default." + this.tileFormat, o < c && s < l ? (_ = this.version === 2 && o === this.width ? "full" : this.version === 3 && o === this.width && s === this.height ? "max" : this.version === 3 ? o + "," + s : o + ",", f = "full") : (p = t * u, m = n * d, h = Math.min(u, this.width - p), g = Math.min(d, this.height - m), f = t === 0 && n === 0 && h === this.width && g === this.height ? "full" : [
					p,
					m,
					h,
					g
				].join(","), v = Math.min(c, o - t * c), y = Math.min(l, s - n * l), _ = this.version === 2 && v === this.width ? "full" : this.version === 3 && v === this.width && y === this.height ? "max" : this.version === 3 ? v + "," + y : v + ","), x = [
					this._id,
					f,
					_,
					i,
					b
				].join("/"), x;
			},
			__testonly__: {
				canBeTiled: t,
				constructLevels: r
			}
		});
		function t(e) {
			var t = [
				"http://library.stanford.edu/iiif/image-api/compliance.html#level0",
				"http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
				"http://iiif.io/api/image/2/level0.json",
				"level0",
				"https://iiif.io/api/image/3/level0.json"
			], n = Array.isArray(e.profile) ? e.profile[0] : e.profile, r = t.indexOf(n) !== -1, i = !1;
			return e.version === 2 && e.profile.length > 1 && e.profile[1].supports && (i = e.profile[1].supports.indexOf("sizeByW") !== -1), e.version === 3 && e.extraFeatures && (i = e.extraFeatures.indexOf("sizeByWh") !== -1), !r || i;
		}
		function r(e) {
			for (var t = [], n = 0; n < e.sizes.length; n++) t.push({
				url: e._id + "/full/" + e.sizes[n].width + "," + (e.version === 3 ? e.sizes[n].height : "") + "/0/default." + e.tileFormat,
				width: e.sizes[n].width,
				height: e.sizes[n].height
			});
			return t.sort(function(e, t) {
				return e.width - t.width;
			});
		}
		function i(t) {
			if (!t || !t.documentElement) throw Error(e.getString("Errors.Xml"));
			var n = t.documentElement, r = n.tagName, i = null;
			if (r === "info") try {
				return i = {}, a(n, i), i;
			} catch (t) {
				throw t instanceof Error ? t : Error(e.getString("Errors.IIIF"));
			}
			throw Error(e.getString("Errors.IIIF"));
		}
		function a(t, n, r) {
			var i, o;
			if (t.nodeType === 3 && r) o = t.nodeValue.trim(), o.match(/^\d*$/) && (o = Number(o)), n[r] ? (e.isArray(n[r]) || (n[r] = [n[r]]), n[r].push(o)) : n[r] = o;
			else if (t.nodeType === 1) for (i = 0; i < t.childNodes.length; i++) a(t.childNodes[i], n, t.nodeName);
		}
	})(n), (function(e) {
		e.OsmTileSource = function(t, n, r, i, a) {
			var o = e.isPlainObject(t) ? t : {
				width: arguments[0],
				height: arguments[1],
				tileSize: arguments[2],
				tileOverlap: arguments[3],
				tilesUrl: arguments[4]
			};
			(!o.width || !o.height) && (o.width = 65572864, o.height = 65572864), o.tileSize || (o.tileSize = 256, o.tileOverlap = 0), o.tilesUrl ||= "http://tile.openstreetmap.org/", o.minLevel = 8, e.TileSource.apply(this, [o]);
		}, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, {
			supports: function(e, t) {
				return e.type && e.type === "openstreetmaps";
			},
			configure: function(e, t, n) {
				return e;
			},
			getTileUrl: function(e, t, n) {
				return this.tilesUrl + (e - 8) + "/" + t + "/" + n + ".png";
			}
		});
	})(n), (function(e) {
		e.TmsTileSource = function(t, n, r, i, a) {
			var o = e.isPlainObject(t) ? t : {
				width: arguments[0],
				height: arguments[1],
				tileSize: arguments[2],
				tileOverlap: arguments[3],
				tilesUrl: arguments[4]
			}, s = Math.ceil(o.width / 256) * 256, c = Math.ceil(o.height / 256) * 256, l = s > c ? s / 256 : c / 256;
			o.maxLevel = Math.ceil(Math.log(l) / Math.log(2)) - 1, o.tileSize = 256, o.width = s, o.height = c, e.TileSource.apply(this, [o]);
		}, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, {
			supports: function(e, t) {
				return e.type && e.type === "tiledmapservice";
			},
			configure: function(e, t, n) {
				return e;
			},
			getTileUrl: function(e, t, n) {
				var r = this.getNumTiles(e).y - 1;
				return this.tilesUrl + e + "/" + t + "/" + (r - n) + ".png";
			}
		});
	})(n), (function(e) {
		e.ZoomifyTileSource = function(e) {
			e.tileSize === void 0 && (e.tileSize = 256), e.fileFormat === void 0 && (e.fileFormat = "jpg", this.fileFormat = e.fileFormat);
			var t = {
				x: e.width,
				y: e.height
			};
			for (e.imageSizes = [{
				x: e.width,
				y: e.height
			}], e.gridSize = [this._getGridSize(e.width, e.height, e.tileSize)]; parseInt(t.x, 10) > e.tileSize || parseInt(t.y, 10) > e.tileSize;) t.x = Math.floor(t.x / 2), t.y = Math.floor(t.y / 2), e.imageSizes.push({
				x: t.x,
				y: t.y
			}), e.gridSize.push(this._getGridSize(t.x, t.y, e.tileSize));
			e.imageSizes.reverse(), e.gridSize.reverse(), e.minLevel = 0, e.maxLevel = e.gridSize.length - 1, n.TileSource.apply(this, [e]);
		}, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, {
			_getGridSize: function(e, t, n) {
				return {
					x: Math.ceil(e / n),
					y: Math.ceil(t / n)
				};
			},
			_calculateAbsoluteTileNumber: function(e, t, n) {
				for (var r = 0, i = {}, a = 0; a < e; a++) i = this.gridSize[a], r += i.x * i.y;
				return i = this.gridSize[e], r += i.x * n + t, r;
			},
			supports: function(e, t) {
				return e.type && e.type === "zoomifytileservice";
			},
			configure: function(e, t, n) {
				return e;
			},
			getTileUrl: function(e, t, n) {
				var r = 0, i = this._calculateAbsoluteTileNumber(e, t, n);
				return r = Math.floor(i / 256), this.tilesUrl + "TileGroup" + r + "/" + e + "-" + t + "-" + n + "." + this.fileFormat;
			}
		});
	})(n), (function(e) {
		e.LegacyTileSource = function(n) {
			var r, i, a;
			e.isArray(n) && (r = {
				type: "legacy-image-pyramid",
				levels: n
			}), r.levels = t(r.levels), r.levels.length > 0 ? (i = r.levels[r.levels.length - 1].width, a = r.levels[r.levels.length - 1].height) : (i = 0, a = 0, e.console.error("No supported image formats found")), e.extend(!0, r, {
				width: i,
				height: a,
				tileSize: Math.max(a, i),
				tileOverlap: 0,
				minLevel: 0,
				maxLevel: r.levels.length > 0 ? r.levels.length - 1 : 0
			}), e.TileSource.apply(this, [r]), this.levels = r.levels;
		}, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, {
			supports: function(e, t) {
				return e.type && e.type === "legacy-image-pyramid" || e.documentElement && e.documentElement.getAttribute("type") === "legacy-image-pyramid";
			},
			configure: function(t, i, a) {
				return e.isPlainObject(t) ? r(this, t) : n(this, t);
			},
			getLevelScale: function(e) {
				var t = NaN;
				return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (t = this.levels[e].width / this.levels[this.maxLevel].width), t;
			},
			getNumTiles: function(t) {
				return this.getLevelScale(t) ? new e.Point(1, 1) : new e.Point(0, 0);
			},
			getTileUrl: function(e, t, n) {
				var r = null;
				return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (r = this.levels[e].url), r;
			}
		});
		function t(t) {
			var n = [], r, i;
			for (i = 0; i < t.length; i++) r = t[i], r.height && r.width && r.url ? n.push({
				url: r.url,
				width: Number(r.width),
				height: Number(r.height)
			}) : e.console.error("Unsupported image format: %s", r.url ? r.url : "<no URL>");
			return n.sort(function(e, t) {
				return e.height - t.height;
			});
		}
		function n(t, n) {
			if (!n || !n.documentElement) throw Error(e.getString("Errors.Xml"));
			var i = n.documentElement, a = i.tagName, o = null, s = [], c, l;
			if (a === "image") try {
				for (o = {
					type: i.getAttribute("type"),
					levels: []
				}, s = i.getElementsByTagName("level"), l = 0; l < s.length; l++) c = s[l], o.levels.push({
					url: c.getAttribute("url"),
					width: parseInt(c.getAttribute("width"), 10),
					height: parseInt(c.getAttribute("height"), 10)
				});
				return r(t, o);
			} catch (e) {
				throw e instanceof Error ? e : /* @__PURE__ */ Error("Unknown error parsing Legacy Image Pyramid XML.");
			}
			else if (a === "collection") throw Error("Legacy Image Pyramid Collections not yet supported.");
			else if (a === "error") throw Error("Error: " + n);
			throw Error("Unknown element " + a);
		}
		function r(e, t) {
			return t.levels;
		}
	})(n), (function(e) {
		e.ImageTileSource = function(t) {
			t = e.extend({
				buildPyramid: !0,
				crossOriginPolicy: !1,
				ajaxWithCredentials: !1
			}, t), e.TileSource.apply(this, [t]);
		}, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, {
			supports: function(e, t) {
				return e.type && e.type === "image";
			},
			configure: function(e, t, n) {
				return e;
			},
			getImageInfo: function(t) {
				var n = this._image = new Image(), r = this;
				this.crossOriginPolicy && (n.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (n.useCredentials = this.ajaxWithCredentials), e.addEvent(n, "load", function() {
					r.width = n.naturalWidth, r.height = n.naturalHeight, r.aspectRatio = r.width / r.height, r.dimensions = new e.Point(r.width, r.height), r._tileWidth = r.width, r._tileHeight = r.height, r.tileOverlap = 0, r.minLevel = 0, r.levels = r._buildLevels(), r.maxLevel = r.levels.length - 1, r.ready = !0, r.raiseEvent("ready", { tileSource: r });
				}), e.addEvent(n, "error", function() {
					r.raiseEvent("open-failed", {
						message: "Error loading image at " + t,
						source: t
					});
				}), n.src = t;
			},
			getLevelScale: function(e) {
				var t = NaN;
				return e >= this.minLevel && e <= this.maxLevel && (t = this.levels[e].width / this.levels[this.maxLevel].width), t;
			},
			getNumTiles: function(t) {
				return this.getLevelScale(t) ? new e.Point(1, 1) : new e.Point(0, 0);
			},
			getTileUrl: function(e, t, n) {
				var r = null;
				return e >= this.minLevel && e <= this.maxLevel && (r = this.levels[e].url), r;
			},
			getContext2D: function(e, t, n) {
				var r = null;
				return e >= this.minLevel && e <= this.maxLevel && (r = this.levels[e].context2D), r;
			},
			destroy: function(e) {
				this._freeupCanvasMemory(e);
			},
			_buildLevels: function() {
				var t = [{
					url: this._image.src,
					width: this._image.naturalWidth,
					height: this._image.naturalHeight
				}];
				if (!this.buildPyramid || !e.supportsCanvas) return delete this._image, t;
				var n = this._image.naturalWidth, r = this._image.naturalHeight, i = document.createElement("canvas"), a = i.getContext("2d");
				if (i.width = n, i.height = r, a.drawImage(this._image, 0, 0, n, r), t[0].context2D = a, delete this._image, e.isCanvasTainted(i)) return t;
				for (; n >= 2 && r >= 2;) {
					n = Math.floor(n / 2), r = Math.floor(r / 2);
					var o = document.createElement("canvas"), s = o.getContext("2d");
					o.width = n, o.height = r, s.drawImage(i, 0, 0, n, r), t.splice(0, 0, {
						context2D: s,
						width: n,
						height: r
					}), i = o, a = s;
				}
				return t;
			},
			_freeupCanvasMemory: function(e) {
				for (var t = 0; t < this.levels.length; t++) this.levels[t].context2D && (this.levels[t].context2D.canvas.height = 0, this.levels[t].context2D.canvas.width = 0, e && e.raiseEvent("image-unloaded", { context2D: this.levels[t].context2D }));
			}
		});
	})(n), (function(e) {
		e.TileSourceCollection = function(t, n, r, i) {
			e.console.error("TileSourceCollection is deprecated; use World instead");
		};
	})(n), (function(e) {
		e.ButtonState = {
			REST: 0,
			GROUP: 1,
			HOVER: 2,
			DOWN: 3
		}, e.Button = function(t) {
			var n = this;
			e.EventSource.call(this), e.extend(!0, this, {
				tooltip: null,
				srcRest: null,
				srcGroup: null,
				srcHover: null,
				srcDown: null,
				clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
				clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
				fadeDelay: 0,
				fadeLength: 2e3,
				onPress: null,
				onRelease: null,
				onClick: null,
				onEnter: null,
				onExit: null,
				onFocus: null,
				onBlur: null,
				userData: null
			}, t), this.element = t.element || e.makeNeutralElement("div"), t.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = !1, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({
				userData: "Button.tracker",
				element: this.element,
				clickTimeThreshold: this.clickTimeThreshold,
				clickDistThreshold: this.clickDistThreshold,
				enterHandler: function(t) {
					t.insideElementPressed ? (a(n, e.ButtonState.DOWN), n.raiseEvent("enter", { originalEvent: t.originalEvent })) : t.buttonDownAny || a(n, e.ButtonState.HOVER);
				},
				focusHandler: function(e) {
					n.tracker.enterHandler(e), n.raiseEvent("focus", { originalEvent: e.originalEvent });
				},
				leaveHandler: function(t) {
					o(n, e.ButtonState.GROUP), t.insideElementPressed && n.raiseEvent("exit", { originalEvent: t.originalEvent });
				},
				blurHandler: function(e) {
					n.tracker.leaveHandler(e), n.raiseEvent("blur", { originalEvent: e.originalEvent });
				},
				pressHandler: function(t) {
					a(n, e.ButtonState.DOWN), n.raiseEvent("press", { originalEvent: t.originalEvent });
				},
				releaseHandler: function(t) {
					t.insideElementPressed && t.insideElementReleased ? (o(n, e.ButtonState.HOVER), n.raiseEvent("release", { originalEvent: t.originalEvent })) : t.insideElementPressed ? o(n, e.ButtonState.GROUP) : a(n, e.ButtonState.HOVER);
				},
				clickHandler: function(e) {
					e.quick && n.raiseEvent("click", { originalEvent: e.originalEvent });
				},
				keyHandler: function(e) {
					e.keyCode === 13 ? (n.raiseEvent("click", { originalEvent: e.originalEvent }), n.raiseEvent("release", { originalEvent: e.originalEvent }), e.preventDefault = !0) : e.preventDefault = !1;
				}
			}), o(this, e.ButtonState.REST);
		}, e.extend(e.Button.prototype, e.EventSource.prototype, {
			notifyGroupEnter: function() {
				a(this, e.ButtonState.GROUP);
			},
			notifyGroupExit: function() {
				o(this, e.ButtonState.REST);
			},
			disable: function() {
				this.notifyGroupExit(), this.element.disabled = !0, this.tracker.setTracking(!1), e.setElementOpacity(this.element, .2, !0);
			},
			enable: function() {
				this.element.disabled = !1, this.tracker.setTracking(!0), e.setElementOpacity(this.element, 1, !0), this.notifyGroupEnter();
			},
			destroy: function() {
				this.imgRest &&= (this.element.removeChild(this.imgRest), null), this.imgGroup &&= (this.element.removeChild(this.imgGroup), null), this.imgHover &&= (this.element.removeChild(this.imgHover), null), this.imgDown &&= (this.element.removeChild(this.imgDown), null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
			}
		});
		function t(t) {
			e.requestAnimationFrame(function() {
				n(t);
			});
		}
		function n(n) {
			var r, i, a;
			n.shouldFade && (r = e.now(), i = r - n.fadeBeginTime, a = 1 - i / n.fadeLength, a = Math.min(1, a), a = Math.max(0, a), n.imgGroup && e.setElementOpacity(n.imgGroup, a, !0), a > 0 && t(n));
		}
		function r(n) {
			n.shouldFade = !0, n.fadeBeginTime = e.now() + n.fadeDelay, window.setTimeout(function() {
				t(n);
			}, n.fadeDelay);
		}
		function i(t) {
			t.shouldFade = !1, t.imgGroup && e.setElementOpacity(t.imgGroup, 1, !0);
		}
		function a(t, n) {
			t.element.disabled || (n >= e.ButtonState.GROUP && t.currentState === e.ButtonState.REST && (i(t), t.currentState = e.ButtonState.GROUP), n >= e.ButtonState.HOVER && t.currentState === e.ButtonState.GROUP && (t.imgHover && (t.imgHover.style.visibility = ""), t.currentState = e.ButtonState.HOVER), n >= e.ButtonState.DOWN && t.currentState === e.ButtonState.HOVER && (t.imgDown && (t.imgDown.style.visibility = ""), t.currentState = e.ButtonState.DOWN));
		}
		function o(t, n) {
			t.element.disabled || (n <= e.ButtonState.HOVER && t.currentState === e.ButtonState.DOWN && (t.imgDown && (t.imgDown.style.visibility = "hidden"), t.currentState = e.ButtonState.HOVER), n <= e.ButtonState.GROUP && t.currentState === e.ButtonState.HOVER && (t.imgHover && (t.imgHover.style.visibility = "hidden"), t.currentState = e.ButtonState.GROUP), n <= e.ButtonState.REST && t.currentState === e.ButtonState.GROUP && (r(t), t.currentState = e.ButtonState.REST));
		}
	})(n), (function(e) {
		e.ButtonGroup = function(t) {
			e.extend(!0, this, {
				buttons: [],
				clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
				clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
				labelText: ""
			}, t);
			var n = this.buttons.concat([]), r = this, i;
			if (this.element = t.element || e.makeNeutralElement("div"), !t.group) for (this.element.style.display = "inline-block", i = 0; i < n.length; i++) this.element.appendChild(n[i].element);
			e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({
				userData: "ButtonGroup.tracker",
				element: this.element,
				clickTimeThreshold: this.clickTimeThreshold,
				clickDistThreshold: this.clickDistThreshold,
				enterHandler: function(e) {
					var t;
					for (t = 0; t < r.buttons.length; t++) r.buttons[t].notifyGroupEnter();
				},
				leaveHandler: function(e) {
					var t;
					if (!e.insideElementPressed) for (t = 0; t < r.buttons.length; t++) r.buttons[t].notifyGroupExit();
				}
			});
		}, e.ButtonGroup.prototype = {
			addButton: function(e) {
				this.buttons.push(e), this.element.appendChild(e.element);
			},
			emulateEnter: function() {
				this.tracker.enterHandler({ eventSource: this.tracker });
			},
			emulateLeave: function() {
				this.tracker.leaveHandler({ eventSource: this.tracker });
			},
			destroy: function() {
				for (; this.buttons.length;) {
					var e = this.buttons.pop();
					this.element.removeChild(e.element), e.destroy();
				}
				this.tracker.destroy(), this.element = null;
			}
		};
	})(n), (function(e) {
		e.Rect = function(t, n, r, i, a) {
			this.x = typeof t == "number" ? t : 0, this.y = typeof n == "number" ? n : 0, this.width = typeof r == "number" ? r : 0, this.height = typeof i == "number" ? i : 0, this.degrees = typeof a == "number" ? a : 0, this.degrees = e.positiveModulo(this.degrees, 360);
			var o, s;
			this.degrees >= 270 ? (o = this.getTopRight(), this.x = o.x, this.y = o.y, s = this.height, this.height = this.width, this.width = s, this.degrees -= 270) : this.degrees >= 180 ? (o = this.getBottomRight(), this.x = o.x, this.y = o.y, this.degrees -= 180) : this.degrees >= 90 && (o = this.getBottomLeft(), this.x = o.x, this.y = o.y, s = this.height, this.height = this.width, this.width = s, this.degrees -= 90);
		}, e.Rect.fromSummits = function(t, n, r) {
			var i = t.distanceTo(n), a = t.distanceTo(r), o = n.minus(t), s = Math.atan(o.y / o.x);
			return o.x < 0 ? s += Math.PI : o.y < 0 && (s += 2 * Math.PI), new e.Rect(t.x, t.y, i, a, s / Math.PI * 180);
		}, e.Rect.prototype = {
			clone: function() {
				return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
			},
			getAspectRatio: function() {
				return this.width / this.height;
			},
			getTopLeft: function() {
				return new e.Point(this.x, this.y);
			},
			getBottomRight: function() {
				return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
			},
			getTopRight: function() {
				return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
			},
			getBottomLeft: function() {
				return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
			},
			getCenter: function() {
				return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft());
			},
			getSize: function() {
				return new e.Point(this.width, this.height);
			},
			equals: function(t) {
				return t instanceof e.Rect && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.degrees === t.degrees;
			},
			times: function(t) {
				return new e.Rect(this.x * t, this.y * t, this.width * t, this.height * t, this.degrees);
			},
			translate: function(t) {
				return new e.Rect(this.x + t.x, this.y + t.y, this.width, this.height, this.degrees);
			},
			union: function(t) {
				var n = this.getBoundingBox(), r = t.getBoundingBox(), i = Math.min(n.x, r.x), a = Math.min(n.y, r.y), o = Math.max(n.x + n.width, r.x + r.width), s = Math.max(n.y + n.height, r.y + r.height);
				return new e.Rect(i, a, o - i, s - a);
			},
			intersection: function(t) {
				var n = 1e-10, r = [], i = this.getTopLeft();
				t.containsPoint(i, n) && r.push(i);
				var a = this.getTopRight();
				t.containsPoint(a, n) && r.push(a);
				var o = this.getBottomLeft();
				t.containsPoint(o, n) && r.push(o);
				var s = this.getBottomRight();
				t.containsPoint(s, n) && r.push(s);
				var c = t.getTopLeft();
				this.containsPoint(c, n) && r.push(c);
				var l = t.getTopRight();
				this.containsPoint(l, n) && r.push(l);
				var u = t.getBottomLeft();
				this.containsPoint(u, n) && r.push(u);
				var d = t.getBottomRight();
				this.containsPoint(d, n) && r.push(d);
				for (var f = this._getSegments(), p = t._getSegments(), m = 0; m < f.length; m++) for (var h = f[m], g = 0; g < p.length; g++) {
					var _ = p[g], v = y(h[0], h[1], _[0], _[1]);
					v && r.push(v);
				}
				function y(t, r, i, a) {
					var o = r.minus(t), s = a.minus(i), c = -s.x * o.y + o.x * s.y;
					if (c === 0) return null;
					var l = (o.x * (t.y - i.y) - o.y * (t.x - i.x)) / c, u = (s.x * (t.y - i.y) - s.y * (t.x - i.x)) / c;
					return -n <= l && l <= 1 - n && -n <= u && u <= 1 - n ? new e.Point(t.x + u * o.x, t.y + u * o.y) : null;
				}
				if (r.length === 0) return null;
				for (var b = r[0].x, x = r[0].x, S = r[0].y, C = r[0].y, w = 1; w < r.length; w++) {
					var T = r[w];
					T.x < b && (b = T.x), T.x > x && (x = T.x), T.y < S && (S = T.y), T.y > C && (C = T.y);
				}
				return new e.Rect(b, S, x - b, C - S);
			},
			_getSegments: function() {
				var e = this.getTopLeft(), t = this.getTopRight(), n = this.getBottomLeft(), r = this.getBottomRight();
				return [
					[e, t],
					[t, r],
					[r, n],
					[n, e]
				];
			},
			rotate: function(t, n) {
				if (t = e.positiveModulo(t, 360), t === 0) return this.clone();
				n ||= this.getCenter();
				var r = this.getTopLeft().rotate(t, n), i = this.getTopRight().rotate(t, n).minus(r);
				i = i.apply(function(e) {
					return Math.abs(e) < 1e-15 ? 0 : e;
				});
				var a = Math.atan(i.y / i.x);
				return i.x < 0 ? a += Math.PI : i.y < 0 && (a += 2 * Math.PI), new e.Rect(r.x, r.y, this.width, this.height, a / Math.PI * 180);
			},
			getBoundingBox: function() {
				if (this.degrees === 0) return this.clone();
				var t = this.getTopLeft(), n = this.getTopRight(), r = this.getBottomLeft(), i = this.getBottomRight(), a = Math.min(t.x, n.x, r.x, i.x), o = Math.max(t.x, n.x, r.x, i.x), s = Math.min(t.y, n.y, r.y, i.y), c = Math.max(t.y, n.y, r.y, i.y);
				return new e.Rect(a, s, o - a, c - s);
			},
			getIntegerBoundingBox: function() {
				var t = this.getBoundingBox(), n = Math.floor(t.x), r = Math.floor(t.y), i = Math.ceil(t.width + t.x - n), a = Math.ceil(t.height + t.y - r);
				return new e.Rect(n, r, i, a);
			},
			containsPoint: function(e, t) {
				t ||= 0;
				var n = this.getTopLeft(), r = this.getTopRight(), i = this.getBottomLeft(), a = r.minus(n), o = i.minus(n);
				return (e.x - n.x) * a.x + (e.y - n.y) * a.y >= -t && (e.x - r.x) * a.x + (e.y - r.y) * a.y <= t && (e.x - n.x) * o.x + (e.y - n.y) * o.y >= -t && (e.x - i.x) * o.x + (e.y - i.y) * o.y <= t;
			},
			toString: function() {
				return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
			}
		};
	})(n), (function(e) {
		var t = {};
		e.ReferenceStrip = function(u) {
			var d = this, f = u.viewer, p = e.getElementSize(f.element), m, h, g;
			for (u.id || (u.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = u.id, this.element.className = "referencestrip"), u = e.extend(!0, {
				sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
				position: e.DEFAULT_SETTINGS.referenceStripPosition,
				scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
				clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
			}, u, { element: this.element }), e.extend(this, u), t[this.id] = { animating: !1 }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, h = this.element.style, h.marginTop = "0px", h.marginRight = "0px", h.marginBottom = "0px", h.marginLeft = "0px", h.left = "0px", h.bottom = "0px", h.border = "0px", h.background = "#000", h.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, .8), this.viewer = f, this.tracker = new e.MouseTracker({
				userData: "ReferenceStrip.tracker",
				element: this.element,
				clickHandler: e.delegate(this, n),
				dragHandler: e.delegate(this, r),
				scrollHandler: e.delegate(this, i),
				enterHandler: e.delegate(this, o),
				leaveHandler: e.delegate(this, s),
				keyDownHandler: e.delegate(this, c),
				keyHandler: e.delegate(this, l),
				preProcessEventHandler: function(e) {
					e.eventType === "wheel" && (e.preventDefault = !0);
				}
			}), u.width && u.height ? (this.element.style.width = u.width + "px", this.element.style.height = u.height + "px", f.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : u.scroll === "horizontal" ? (this.element.style.width = p.x * u.sizeRatio * f.tileSources.length + 12 * f.tileSources.length + "px", this.element.style.height = p.y * u.sizeRatio + "px", f.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : (this.element.style.height = p.y * u.sizeRatio * f.tileSources.length + 12 * f.tileSources.length + "px", this.element.style.width = p.x * u.sizeRatio + "px", f.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })), this.panelWidth = p.x * this.sizeRatio + 8, this.panelHeight = p.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, g = 0; g < f.tileSources.length; g++) m = e.makeNeutralElement("div"), m.id = this.element.id + "-" + g, m.style.width = d.panelWidth + "px", m.style.height = d.panelHeight + "px", m.style.display = "inline", m.style.float = "left", m.style.cssFloat = "left", m.style.padding = "2px", e.setElementTouchActionNone(m), e.setElementPointerEventsNone(m), this.element.appendChild(m), m.activePanel = !1, this.panels.push(m);
			a(this, this.scroll === "vertical" ? p.y : p.x, 0), this.setFocus(0);
		}, e.ReferenceStrip.prototype = {
			setFocus: function(t) {
				var n = this.element.querySelector("#" + this.element.id + "-" + t), r = e.getElementSize(this.viewer.canvas), i = Number(this.element.style.width.replace("px", "")), s = Number(this.element.style.height.replace("px", "")), c = -Number(this.element.style.marginLeft.replace("px", "")), l = -Number(this.element.style.marginTop.replace("px", "")), u;
				this.currentSelected !== n && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = n, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (u = Number(t) * (this.panelWidth + 3), u > c + r.x - this.panelWidth ? (u = Math.min(u, i - r.x), this.element.style.marginLeft = -u + "px", a(this, r.x, -u)) : u < c && (u = Math.max(0, u - r.x / 2), this.element.style.marginLeft = -u + "px", a(this, r.x, -u))) : (u = Number(t) * (this.panelHeight + 3), u > l + r.y - this.panelHeight ? (u = Math.min(u, s - r.y), this.element.style.marginTop = -u + "px", a(this, r.y, -u)) : u < l && (u = Math.max(0, u - r.y / 2), this.element.style.marginTop = -u + "px", a(this, r.y, -u))), this.currentPage = t, o.call(this, { eventSource: this.tracker }));
			},
			update: function() {
				return !!t[this.id].animating;
			},
			destroy: function() {
				if (this.miniViewers) for (var e in this.miniViewers) this.miniViewers[e].destroy();
				this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
			}
		};
		function n(e) {
			if (e.quick) {
				var t = this.scroll === "horizontal" ? Math.floor(e.position.x / (this.panelWidth + 4)) : Math.floor(e.position.y / this.panelHeight);
				this.viewer.goToPage(t);
			}
			this.element.focus();
		}
		function r(t) {
			if (this.dragging = !0, this.element) {
				var n = Number(this.element.style.marginLeft.replace("px", "")), r = Number(this.element.style.marginTop.replace("px", "")), i = Number(this.element.style.width.replace("px", "")), o = Number(this.element.style.height.replace("px", "")), s = e.getElementSize(this.viewer.canvas);
				this.scroll === "horizontal" ? -t.delta.x > 0 ? n > -(i - s.x) && (this.element.style.marginLeft = n + t.delta.x * 2 + "px", a(this, s.x, n + t.delta.x * 2)) : -t.delta.x < 0 && n < 0 && (this.element.style.marginLeft = n + t.delta.x * 2 + "px", a(this, s.x, n + t.delta.x * 2)) : -t.delta.y > 0 ? r > -(o - s.y) && (this.element.style.marginTop = r + t.delta.y * 2 + "px", a(this, s.y, r + t.delta.y * 2)) : -t.delta.y < 0 && r < 0 && (this.element.style.marginTop = r + t.delta.y * 2 + "px", a(this, s.y, r + t.delta.y * 2));
			}
		}
		function i(t) {
			if (this.element) {
				var n = Number(this.element.style.marginLeft.replace("px", "")), r = Number(this.element.style.marginTop.replace("px", "")), i = Number(this.element.style.width.replace("px", "")), o = Number(this.element.style.height.replace("px", "")), s = e.getElementSize(this.viewer.canvas);
				this.scroll === "horizontal" ? t.scroll > 0 ? n > -(i - s.x) && (this.element.style.marginLeft = n - t.scroll * 60 + "px", a(this, s.x, n - t.scroll * 60)) : t.scroll < 0 && n < 0 && (this.element.style.marginLeft = n - t.scroll * 60 + "px", a(this, s.x, n - t.scroll * 60)) : t.scroll < 0 ? r > s.y - o && (this.element.style.marginTop = r + t.scroll * 60 + "px", a(this, s.y, r + t.scroll * 60)) : t.scroll > 0 && r < 0 && (this.element.style.marginTop = r + t.scroll * 60 + "px", a(this, s.y, r + t.scroll * 60)), t.preventDefault = !0;
			}
		}
		function a(t, n, r) {
			var i = t.scroll === "horizontal" ? t.panelWidth : t.panelHeight, a = Math.ceil(n / i) + 5, o = Math.ceil((Math.abs(r) + n) / i) + 1, s, c, l;
			for (a = o - a, a = a < 0 ? 0 : a, c = a; c < o && c < t.panels.length; c++) if (l = t.panels[c], !l.activePanel) {
				var u, d = t.viewer.tileSources[c];
				u = d.referenceStripThumbnailUrl ? {
					type: "image",
					url: d.referenceStripThumbnailUrl
				} : d, s = new e.Viewer({
					id: l.id,
					tileSources: [u],
					element: l,
					navigatorSizeRatio: t.sizeRatio,
					showNavigator: !1,
					mouseNavEnabled: !1,
					showNavigationControl: !1,
					showSequenceControl: !1,
					immediateRender: !0,
					blendTime: 0,
					animationTime: 0,
					loadTilesWithAjax: t.viewer.loadTilesWithAjax,
					ajaxHeaders: t.viewer.ajaxHeaders,
					drawer: "canvas"
				}), e.setElementPointerEventsNone(s.canvas), e.setElementPointerEventsNone(s.container), s.innerTracker.setTracking(!1), s.outerTracker.setTracking(!1), t.miniViewers[l.id] = s, l.activePanel = !0;
			}
		}
		function o(e) {
			var t = e.eventSource.element;
			this.scroll === "horizontal" ? t.style.marginBottom = "0px" : t.style.marginLeft = "0px";
		}
		function s(t) {
			var n = t.eventSource.element;
			this.scroll === "horizontal" ? n.style.marginBottom = "-" + e.getElementSize(n).y / 2 + "px" : n.style.marginLeft = "-" + e.getElementSize(n).x / 2 + "px";
		}
		function c(e) {
			if (!e.ctrl && !e.alt && !e.meta) switch (e.keyCode) {
				case 38:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: 1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 40:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: -1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 37:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: -1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 39:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: 1,
						shift: null
					}), e.preventDefault = !0;
					break;
				default:
					e.preventDefault = !1;
					break;
			}
			else e.preventDefault = !1;
		}
		function l(e) {
			if (!e.ctrl && !e.alt && !e.meta) switch (e.keyCode) {
				case 61:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: 1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 45:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: -1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 48:
				case 119:
				case 87:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: 1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 115:
				case 83:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: -1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 97:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: -1,
						shift: null
					}), e.preventDefault = !0;
					break;
				case 100:
					i.call(this, {
						eventSource: this.tracker,
						position: null,
						scroll: 1,
						shift: null
					}), e.preventDefault = !0;
					break;
				default:
					e.preventDefault = !1;
					break;
			}
			else e.preventDefault = !1;
		}
	})(n), (function(e) {
		e.DisplayRect = function(t, n, r, i, a, o) {
			e.Rect.apply(this, [
				t,
				n,
				r,
				i
			]), this.minLevel = a, this.maxLevel = o;
		}, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
	})(n), (function(e) {
		e.Spring = function(t) {
			var n = arguments;
			typeof t != "object" && (t = {
				initial: n.length && typeof n[0] == "number" ? n[0] : void 0,
				springStiffness: n.length > 1 ? n[1].springStiffness : 5,
				animationTime: n.length > 1 ? n[1].animationTime : 1.5
			}), e.console.assert(typeof t.springStiffness == "number" && t.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert(typeof t.animationTime == "number" && t.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), t.exponential && (this._exponential = !0, delete t.exponential), e.extend(!0, this, t), this.current = {
				value: typeof this.initial == "number" ? this.initial : +!this._exponential,
				time: e.now()
			}, e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = {
				value: this.current.value,
				time: this.current.time
			}, this.target = {
				value: this.current.value,
				time: this.current.time
			}, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
		}, e.Spring.prototype = {
			resetTo: function(t) {
				e.console.assert(!this._exponential || t !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = t, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
			},
			springTo: function(t) {
				e.console.assert(!this._exponential || t !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = t, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
			},
			shiftBy: function(t) {
				this.start.value += t, this.target.value += t, this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
			},
			setExponential: function(t) {
				this._exponential = t, this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
			},
			update: function() {
				this.current.time = e.now();
				let n, r;
				if (this._exponential ? (n = this.start._logValue, r = this.target._logValue) : (n = this.start.value, r = this.target.value), this.current.time >= this.target.time) this.current.value = this.target.value;
				else {
					let e = n + (r - n) * t(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time));
					this._exponential ? this.current.value = Math.exp(e) : this.current.value = e;
				}
				return this.current.value !== this.target.value;
			},
			isAtTargetValue: function() {
				return this.current.value === this.target.value;
			}
		};
		function t(e, t) {
			return (1 - Math.exp(e * -t)) / (1 - Math.exp(-e));
		}
	})(n), (function(e) {
		e.ImageJob = function(t) {
			e.extend(!0, this, {
				timeout: e.DEFAULT_SETTINGS.timeout,
				jobId: null,
				tries: 0
			}, t), this.data = null, this.userData = {}, this.errorMsg = null;
		}, e.ImageJob.prototype = {
			start: function() {
				this.tries++;
				var e = this, t = this.abort;
				this.jobId = window.setTimeout(function() {
					e.finish(null, null, "Image load exceeded timeout (" + e.timeout + " ms)");
				}, this.timeout), this.abort = function() {
					e.source.downloadTileAbort(e), typeof t == "function" && t();
				}, this.source.downloadTileStart(this);
			},
			finish: function(e, t, n) {
				this.data = e, this.request = t, this.errorMsg = n, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
			}
		}, e.ImageLoader = function(t) {
			e.extend(!0, this, {
				jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
				timeout: e.DEFAULT_SETTINGS.timeout,
				jobQueue: [],
				failedTiles: [],
				jobsInProgress: 0
			}, t);
		}, e.ImageLoader.prototype = {
			addJob: function(n) {
				if (!n.source) {
					e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
					var r = e.TileSource.prototype;
					n.source = {
						downloadTileStart: r.downloadTileStart,
						downloadTileAbort: r.downloadTileAbort
					};
				}
				var i = this, a = {
					src: n.src,
					tile: n.tile || {},
					source: n.source,
					loadWithAjax: n.loadWithAjax,
					ajaxHeaders: n.loadWithAjax ? n.ajaxHeaders : null,
					crossOriginPolicy: n.crossOriginPolicy,
					ajaxWithCredentials: n.ajaxWithCredentials,
					postData: n.postData,
					callback: function(e) {
						t(i, e, n.callback);
					},
					abort: n.abort,
					timeout: this.timeout
				}, o = new e.ImageJob(a);
				!this.jobLimit || this.jobsInProgress < this.jobLimit ? (o.start(), this.jobsInProgress++) : this.jobQueue.push(o);
			},
			clear: function() {
				for (var e = 0; e < this.jobQueue.length; e++) {
					var t = this.jobQueue[e];
					typeof t.abort == "function" && t.abort();
				}
				this.jobQueue = [];
			}
		};
		function t(e, t, n) {
			t.errorMsg !== "" && (t.data === null || t.data === void 0) && t.tries < 1 + e.tileRetryMax && e.failedTiles.push(t);
			var r;
			e.jobsInProgress--, (!e.jobLimit || e.jobsInProgress < e.jobLimit) && e.jobQueue.length > 0 && (r = e.jobQueue.shift(), r.start(), e.jobsInProgress++), e.tileRetryMax > 0 && e.jobQueue.length === 0 && (!e.jobLimit || e.jobsInProgress < e.jobLimit) && e.failedTiles.length > 0 && (r = e.failedTiles.shift(), setTimeout(function() {
				r.start();
			}, e.tileRetryDelay), e.jobsInProgress++), n(t.data, t.errorMsg, t.request);
		}
	})(n), (function(e) {
		e.Tile = function(t, r, i, a, o, s, c, l, u, d, f, p) {
			this.level = t, this.x = r, this.y = i, this.bounds = a, this.positionedBounds = new n.Rect(a.x, a.y, a.width, a.height), this.sourceBounds = d, this.exists = o, this._url = s, this.postData = f, this.context2D = c, this.loadWithAjax = l, this.ajaxHeaders = u, p === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), p = e.TileSource.prototype.getTileHashKey(t, r, i, s, u, f)), this.cacheKey = p, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = !1, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = !1, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1;
		}, e.Tile.prototype = {
			toString: function() {
				return this.level + "/" + this.x + "_" + this.y;
			},
			_hasTransparencyChannel: function() {
				return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
			},
			get image() {
				return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
			},
			get url() {
				return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
			},
			getImage: function() {
				return this.cacheImageRecord.getImage();
			},
			getUrl: function() {
				return typeof this._url == "function" ? this._url() : this._url;
			},
			getCanvasContext: function() {
				return this.context2D || this.cacheImageRecord && this.cacheImageRecord.getRenderedContext();
			},
			getScaleForEdgeSmoothing: function() {
				var t;
				if (this.cacheImageRecord) t = this.cacheImageRecord.getRenderedContext();
				else if (this.context2D) t = this.context2D;
				else return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
				return t.canvas.width / (this.size.x * e.pixelDensityRatio);
			},
			getTranslationForEdgeSmoothing: function(t, n, r) {
				var i = Math.max(1, Math.ceil((r.x - n.x) / 2)), a = Math.max(1, Math.ceil((r.y - n.y) / 2));
				return new e.Point(i, a).minus(this.position.times(e.pixelDensityRatio).times(t || 1).apply(function(e) {
					return e % 1;
				}));
			},
			unload: function() {
				this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1;
			}
		};
	})(n), (function(e) {
		e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({
			NO_ROTATION: 1,
			EXACT: 2,
			BOUNDING_BOX: 3
		}), e.Overlay = function(t, n, r) {
			var i = e.isPlainObject(t) ? t : {
				element: t,
				location: n,
				placement: r
			};
			this.elementWrapper = document.createElement("div"), this.element = i.element, this.elementWrapper.appendChild(this.element), this.element.id ? this.elementWrapper.id = "overlay-wrapper-" + this.element.id : this.elementWrapper.id = "overlay-wrapper", this.style = this.elementWrapper.style, this._init(i);
		}, e.Overlay.prototype = {
			_init: function(t) {
				this.location = t.location, this.placement = t.placement === void 0 ? e.Placement.TOP_LEFT : t.placement, this.onDraw = t.onDraw, this.checkResize = t.checkResize === void 0 ? !0 : t.checkResize, this.width = t.width === void 0 ? null : t.width, this.height = t.height === void 0 ? null : t.height, this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location;
			},
			adjust: function(t, n) {
				var r = e.Placement.properties[this.placement];
				r && (r.isHorizontallyCentered ? t.x -= n.x / 2 : r.isRight && (t.x -= n.x), r.isVerticallyCentered ? t.y -= n.y / 2 : r.isBottom && (t.y -= n.y));
			},
			destroy: function() {
				var t = this.elementWrapper, n = this.style;
				t.parentNode && (t.parentNode.removeChild(t), t.prevElementParent && (n.display = "none", document.body.appendChild(t))), this.onDraw = null, n.top = "", n.left = "", n.position = "", this.width !== null && (n.width = ""), this.height !== null && (n.height = "");
				var r = e.getCssPropertyWithVendorPrefix("transformOrigin"), i = e.getCssPropertyWithVendorPrefix("transform");
				r && i && (n[r] = "", n[i] = "");
			},
			drawHTML: function(t, n) {
				var r = this.elementWrapper;
				r.parentNode !== t && (r.prevElementParent = r.parentNode, r.prevNextSibling = r.nextSibling, t.appendChild(r), this.style.position = "absolute", this.size = e.getElementSize(this.elementWrapper));
				var i = this._getOverlayPositionAndSize(n), a = i.position, o = this.size = i.size, s = "";
				n.overlayPreserveContentDirection && (s = n.flipped ? " scaleX(-1)" : " scaleX(1)");
				var c = n.flipped ? -i.rotate : i.rotate, l = n.flipped ? " scaleX(-1)" : "";
				if (this.onDraw) this.onDraw(a, o, this.element);
				else {
					var u = this.style, d = this.element.style;
					d.display = "block", u.left = a.x + "px", u.top = a.y + "px", this.width !== null && (d.width = o.x + "px"), this.height !== null && (d.height = o.y + "px");
					var f = e.getCssPropertyWithVendorPrefix("transformOrigin"), p = e.getCssPropertyWithVendorPrefix("transform");
					f && p && (c && !n.flipped ? (d[p] = "", u[f] = this._getTransformOrigin(), u[p] = "rotate(" + c + "deg)") : !c && n.flipped ? (d[p] = s, u[f] = this._getTransformOrigin(), u[p] = l) : c && n.flipped ? (d[p] = s, u[f] = this._getTransformOrigin(), u[p] = "rotate(" + c + "deg)" + l) : (d[p] = "", u[f] = "", u[p] = "")), u.display = "flex";
				}
			},
			_getOverlayPositionAndSize: function(t) {
				var n = t.pixelFromPoint(this.location, !0), r = this._getSizeInPixels(t);
				this.adjust(n, r);
				var i = 0;
				if (t.getRotation(!0) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION) if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
					var a = new e.Rect(n.x, n.y, r.x, r.y), o = this._getBoundingBox(a, t.getRotation(!0));
					n = o.getTopLeft(), r = o.getSize();
				} else i = t.getRotation(!0);
				return t.flipped && (n.x = t.getContainerSize().x - n.x), {
					position: n,
					size: r,
					rotate: i
				};
			},
			_getSizeInPixels: function(t) {
				var n = this.size.x, r = this.size.y;
				if (this.width !== null || this.height !== null) {
					var i = t.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), !0);
					this.width !== null && (n = i.x), this.height !== null && (r = i.y);
				}
				if (this.checkResize && (this.width === null || this.height === null)) {
					var a = this.size = e.getElementSize(this.elementWrapper);
					this.width === null && (n = a.x), this.height === null && (r = a.y);
				}
				return new e.Point(n, r);
			},
			_getBoundingBox: function(e, t) {
				var n = this._getPlacementPoint(e);
				return e.rotate(t, n).getBoundingBox();
			},
			_getPlacementPoint: function(t) {
				var n = new e.Point(t.x, t.y), r = e.Placement.properties[this.placement];
				return r && (r.isHorizontallyCentered ? n.x += t.width / 2 : r.isRight && (n.x += t.width), r.isVerticallyCentered ? n.y += t.height / 2 : r.isBottom && (n.y += t.height)), n;
			},
			_getTransformOrigin: function() {
				var t = "", n = e.Placement.properties[this.placement];
				return n ? (n.isLeft ? t = "left" : n.isRight && (t = "right"), n.isTop ? t += " top" : n.isBottom && (t += " bottom"), t) : t;
			},
			update: function(t, n) {
				var r = e.isPlainObject(t) ? t : {
					location: t,
					placement: n
				};
				this._init({
					location: r.location || this.location,
					placement: r.placement === void 0 ? this.placement : r.placement,
					onDraw: r.onDraw || this.onDraw,
					checkResize: r.checkResize || this.checkResize,
					width: r.width === void 0 ? this.width : r.width,
					height: r.height === void 0 ? this.height : r.height,
					rotationMode: r.rotationMode || this.rotationMode
				});
			},
			getBounds: function(t) {
				e.console.assert(t, "A viewport must now be passed to Overlay.getBounds.");
				var n = this.width, r = this.height;
				if (n === null || r === null) {
					var i = t.deltaPointsFromPixelsNoRotate(this.size, !0);
					n === null && (n = i.x), r === null && (r = i.y);
				}
				var a = this.location.clone();
				return this.adjust(a, new e.Point(n, r)), this._adjustBoundsForRotation(t, new e.Rect(a.x, a.y, n, r));
			},
			_adjustBoundsForRotation: function(t, n) {
				if (!t || t.getRotation(!0) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT) return n;
				if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
					if (this.width === null || this.height === null) return n;
					var r = this._getOverlayPositionAndSize(t);
					return t.viewerElementToViewportRectangle(new e.Rect(r.position.x, r.position.y, r.size.x, r.size.y));
				}
				return n.rotate(-t.getRotation(!0), this._getPlacementPoint(n));
			}
		};
	})(n), (function(e) {
		let t = e;
		t.DrawerBase = class {
			constructor(t) {
				e.console.assert(t.viewer, "[Drawer] options.viewer is required"), e.console.assert(t.viewport, "[Drawer] options.viewport is required"), e.console.assert(t.element, "[Drawer] options.element is required"), this.viewer = t.viewer, this.viewport = t.viewport, this.debugGridColor = typeof t.debugGridColor == "string" ? [t.debugGridColor] : t.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, this.options = t.options || {}, this.container = e.getElement(t.element), this._renderingTarget = this._createDrawingElement(), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", this.canvas.style.left = "0", e.setElementOpacity(this.canvas, this.viewer.opacity, !0), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._checkForAPIOverrides();
			}
			get canvas() {
				return this._renderingTarget;
			}
			get element() {
				return e.console.error("Drawer.element is deprecated. Use Drawer.container instead."), this.container;
			}
			getType() {
				e.console.error("Drawer.getType must be implemented by child class");
			}
			static isSupported() {
				e.console.error("Drawer.isSupported must be implemented by child class");
			}
			_createDrawingElement() {
				return e.console.error("Drawer._createDrawingElement must be implemented by child class"), null;
			}
			draw(t) {
				e.console.error("Drawer.draw must be implemented by child class");
			}
			canRotate() {
				e.console.error("Drawer.canRotate must be implemented by child class");
			}
			destroy() {
				e.console.error("Drawer.destroy must be implemented by child class");
			}
			minimumOverlapRequired(e) {
				return !1;
			}
			setImageSmoothingEnabled(t) {
				e.console.error("Drawer.setImageSmoothingEnabled must be implemented by child class");
			}
			drawDebuggingRect(t) {
				e.console.warn("[drawer].drawDebuggingRect is not implemented by this drawer");
			}
			clear() {
				e.console.warn("[drawer].clear() is deprecated. The drawer is responsible for clearing itself as needed before drawing tiles.");
			}
			_checkForAPIOverrides() {
				if (this._createDrawingElement === e.DrawerBase.prototype._createDrawingElement) throw /* @__PURE__ */ Error("[drawer]._createDrawingElement must be implemented by child class");
				if (this.draw === e.DrawerBase.prototype.draw) throw /* @__PURE__ */ Error("[drawer].draw must be implemented by child class");
				if (this.canRotate === e.DrawerBase.prototype.canRotate) throw /* @__PURE__ */ Error("[drawer].canRotate must be implemented by child class");
				if (this.destroy === e.DrawerBase.prototype.destroy) throw /* @__PURE__ */ Error("[drawer].destroy must be implemented by child class");
				if (this.setImageSmoothingEnabled === e.DrawerBase.prototype.setImageSmoothingEnabled) throw /* @__PURE__ */ Error("[drawer].setImageSmoothingEnabled must be implemented by child class");
			}
			viewportToDrawerRectangle(t) {
				var n = this.viewport.pixelFromPointNoRotate(t.getTopLeft(), !0), r = this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(), !0);
				return new e.Rect(n.x * e.pixelDensityRatio, n.y * e.pixelDensityRatio, r.x * e.pixelDensityRatio, r.y * e.pixelDensityRatio);
			}
			viewportCoordToDrawerCoord(t) {
				var n = this.viewport.pixelFromPointNoRotate(t, !0);
				return new e.Point(n.x * e.pixelDensityRatio, n.y * e.pixelDensityRatio);
			}
			_calculateCanvasSize() {
				var n = e.pixelDensityRatio, r = this.viewport.getContainerSize();
				return new t.Point(Math.round(r.x * n), Math.round(r.y * n));
			}
			_raiseTiledImageDrawnEvent(e, t) {
				this.viewer && this.viewer.raiseEvent("tiled-image-drawn", {
					tiledImage: e,
					tiles: t
				});
			}
			_raiseDrawerErrorEvent(e, t) {
				this.viewer && this.viewer.raiseEvent("drawer-error", {
					tiledImage: e,
					drawer: this,
					error: t
				});
			}
		};
	})(n), (function(e) {
		let t = e;
		class n extends t.DrawerBase {
			constructor(e) {
				super(e), this.viewer.rejectEventHandler("tile-drawing", "The HTMLDrawer does not raise the tile-drawing event"), this.viewer.allowEventHandler("tile-drawn");
			}
			static isSupported() {
				return !0;
			}
			getType() {
				return "html";
			}
			minimumOverlapRequired(e) {
				return !0;
			}
			_createDrawingElement() {
				return e.makeNeutralElement("div");
			}
			draw(e) {
				var t = this;
				this._prepareNewFrame(), e.forEach(function(e) {
					e.opacity !== 0 && t._drawTiles(e);
				});
			}
			canRotate() {
				return !1;
			}
			destroy() {
				this.container.removeChild(this.canvas);
			}
			setImageSmoothingEnabled() {}
			_prepareNewFrame() {
				this.canvas.innerHTML = "";
			}
			_drawTiles(e) {
				var t = e.getTilesToDraw().map((e) => e.tile);
				if (!(e.opacity === 0 || t.length === 0 && !e.placeholderFillStyle)) for (var n = t.length - 1; n >= 0; n--) {
					var r = t[n];
					this._drawTile(r), this.viewer && this.viewer.raiseEvent("tile-drawn", {
						tiledImage: e,
						tile: r
					});
				}
			}
			_drawTile(t) {
				e.console.assert(t, "[Drawer._drawTile] tile is required");
				let n = this.canvas;
				if (!t.cacheImageRecord) {
					e.console.warn("[Drawer._drawTileToHTML] attempting to draw tile %s when it's not cached", t.toString());
					return;
				}
				if (!t.loaded) {
					e.console.warn("Attempting to draw tile %s when it's not yet loaded.", t.toString());
					return;
				}
				if (!t.element) {
					var r = t.getImage();
					if (!r) return;
					t.element = e.makeNeutralElement("div"), t.imgElement = r.cloneNode(), t.imgElement.style.msInterpolationMode = "nearest-neighbor", t.imgElement.style.width = "100%", t.imgElement.style.height = "100%", t.style = t.element.style, t.style.position = "absolute";
				}
				t.element.parentNode !== n && n.appendChild(t.element), t.imgElement.parentNode !== t.element && t.element.appendChild(t.imgElement), t.style.top = t.position.y + "px", t.style.left = t.position.x + "px", t.style.height = t.size.y + "px", t.style.width = t.size.x + "px", t.flipped && (t.style.transform = "scaleX(-1)"), e.setElementOpacity(t.element, t.opacity);
			}
		}
		e.HTMLDrawer = n;
	})(n), (function(e) {
		let t = e;
		class n extends t.DrawerBase {
			constructor(e) {
				super(e), this.context = this.canvas.getContext("2d"), this.sketchCanvas = null, this.sketchContext = null, this._imageSmoothingEnabled = !0, this.viewer.allowEventHandler("tile-drawn"), this.viewer.allowEventHandler("tile-drawing");
			}
			static isSupported() {
				return e.supportsCanvas;
			}
			getType() {
				return "canvas";
			}
			_createDrawingElement() {
				let t = e.makeNeutralElement("canvas"), n = this._calculateCanvasSize();
				return t.width = n.x, t.height = n.y, t;
			}
			draw(e) {
				this._prepareNewFrame(), this.viewer.viewport.getFlip() !== this._viewportFlipped && this._flip();
				for (let t of e) t.opacity !== 0 && this._drawTiles(t);
			}
			canRotate() {
				return !0;
			}
			destroy() {
				this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null, this.container.removeChild(this.canvas);
			}
			minimumOverlapRequired(e) {
				return !0;
			}
			setImageSmoothingEnabled(e) {
				this._imageSmoothingEnabled = !!e, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw();
			}
			drawDebuggingRect(t) {
				var n = this.context;
				n.save(), n.lineWidth = 2 * e.pixelDensityRatio, n.strokeStyle = this.debugGridColor[0], n.fillStyle = this.debugGridColor[0], n.strokeRect(t.x * e.pixelDensityRatio, t.y * e.pixelDensityRatio, t.width * e.pixelDensityRatio, t.height * e.pixelDensityRatio), n.restore();
			}
			get _viewportFlipped() {
				return this.context.getTransform().a < 0;
			}
			_raiseTileDrawingEvent(e, t, n, r) {
				this.viewer.raiseEvent("tile-drawing", {
					tiledImage: e,
					context: t,
					tile: n,
					rendered: r
				});
			}
			_prepareNewFrame() {
				var e = this._calculateCanvasSize();
				if ((this.canvas.width !== e.x || this.canvas.height !== e.y) && (this.canvas.width = e.x, this.canvas.height = e.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
					var t = this._calculateSketchCanvasSize();
					this.sketchCanvas.width = t.x, this.sketchCanvas.height = t.y, this._updateImageSmoothingEnabled(this.sketchContext);
				}
				this._clear();
			}
			_clear(e, t) {
				var n = this._getContext(e);
				if (t) n.clearRect(t.x, t.y, t.width, t.height);
				else {
					var r = n.canvas;
					n.clearRect(0, 0, r.width, r.height);
				}
			}
			_drawTiles(t) {
				var n = t.getTilesToDraw().map((e) => e.tile);
				if (!(t.opacity === 0 || n.length === 0 && !t.placeholderFillStyle)) {
					var r = n[0], i;
					r && (i = t.opacity < 1 || t.compositeOperation && t.compositeOperation !== "source-over" || !t._isBottomItem() && t.source.hasTransparency(r.context2D, r.getUrl(), r.ajaxHeaders, r.postData));
					var a, s, c = this.viewport.getZoom(!0), l = t.viewportToImageZoom(c);
					n.length > 1 && l > t.smoothTileEdgesMinZoom && !t.iOSDevice && t.getRotation(!0) % 360 == 0 && (i = !0, a = r.getScaleForEdgeSmoothing(), s = r.getTranslationForEdgeSmoothing(a, this._getCanvasSize(!1), this._getCanvasSize(!0)));
					var u;
					i && (a || (u = this.viewport.viewportToViewerElementRectangle(t.getClippedBounds(!0)).getIntegerBoundingBox(), u = u.times(e.pixelDensityRatio)), this._clear(!0, u)), a || this._setRotations(t, i);
					var d = !1;
					if (t._clip) {
						this._saveContext(i);
						var f = t.imageToViewportRectangle(t._clip, !0);
						f = f.rotate(-t.getRotation(!0), t._getRotationPoint(!0));
						var p = this.viewportToDrawerRectangle(f);
						a && (p = p.times(a)), s && (p = p.translate(s)), this._setClip(p, i), d = !0;
					}
					if (t._croppingPolygons) {
						var m = this;
						d || this._saveContext(i);
						try {
							var h = t._croppingPolygons.map(function(e) {
								return e.map(function(e) {
									var n = t.imageToViewportCoordinates(e.x, e.y, !0).rotate(-t.getRotation(!0), t._getRotationPoint(!0)), r = m.viewportCoordToDrawerCoord(n);
									return a && (r = r.times(a)), s && (r = r.plus(s)), r;
								});
							});
							this._clipWithPolygons(h, i);
						} catch (t) {
							e.console.error(t);
						}
						d = !0;
					}
					if (t._hasOpaqueTile = !1, t.placeholderFillStyle && t._hasOpaqueTile === !1) {
						let e = this.viewportToDrawerRectangle(t.getBoundsNoRotate(!0));
						a && (e = e.times(a)), s && (e = e.translate(s));
						let n = null;
						n = typeof t.placeholderFillStyle == "function" ? t.placeholderFillStyle(t, this.context) : t.placeholderFillStyle, this._drawRectangle(e, n, i);
					}
					var g = o(t.subPixelRoundingForTransparency), _ = !1;
					g === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS ? _ = !0 : g === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && (_ = !(this.viewer && this.viewer.isAnimating()));
					for (var v = 0; v < n.length; v++) r = n[v], this._drawTile(r, t, i, a, s, _, t.source), this.viewer && this.viewer.raiseEvent("tile-drawn", {
						tiledImage: t,
						tile: r
					});
					d && this._restoreContext(i), a || (t.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(i), this.viewport.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(i)), i && (a && this._setRotations(t), this.blendSketch({
						opacity: t.opacity,
						scale: a,
						translate: s,
						compositeOperation: t.compositeOperation,
						bounds: u
					}), a && (t.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(!1), this.viewport.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(!1))), this._drawDebugInfo(t, n), this._raiseTiledImageDrawnEvent(t, n);
				}
			}
			_drawDebugInfo(t, n) {
				if (t.debugMode) for (var r = n.length - 1; r >= 0; r--) {
					var i = n[r];
					try {
						this._drawDebugInfoOnTile(i, n.length, r, t);
					} catch (t) {
						e.console.error(t);
					}
				}
			}
			_clipWithPolygons(e, t) {
				var n = this._getContext(t);
				n.beginPath();
				for (let t of e) for (let [e, r] of t.entries()) n[e === 0 ? "moveTo" : "lineTo"](r.x, r.y);
				n.clip();
			}
			_drawTile(t, n, r, i, a, o, s) {
				e.console.assert(t, "[Drawer._drawTile] tile is required"), e.console.assert(n, "[Drawer._drawTile] drawingHandler is required");
				var c = this._getContext(r);
				i ||= 1, this._drawTileToCanvas(t, c, n, i, a, o, s);
			}
			_drawTileToCanvas(t, n, r, i, a, o, s) {
				var c = t.position.times(e.pixelDensityRatio), l = t.size.times(e.pixelDensityRatio), u;
				if (!t.context2D && !t.cacheImageRecord) {
					e.console.warn("[Drawer._drawTileToCanvas] attempting to draw tile %s when it's not cached", t.toString());
					return;
				}
				if (u = t.getCanvasContext(), !t.loaded || !u) {
					e.console.warn("Attempting to draw tile %s when it's not yet loaded.", t.toString());
					return;
				}
				n.save(), typeof i == "number" && i !== 1 && (c = c.times(i), l = l.times(i)), a instanceof e.Point && (c = c.plus(a)), n.globalAlpha === 1 && t.hasTransparency && (o && (c.x = Math.round(c.x), c.y = Math.round(c.y), l.x = Math.round(l.x), l.y = Math.round(l.y)), n.clearRect(c.x, c.y, l.x, l.y)), this._raiseTileDrawingEvent(r, n, t, u);
				var d, f;
				t.sourceBounds ? (d = Math.min(t.sourceBounds.width, u.canvas.width), f = Math.min(t.sourceBounds.height, u.canvas.height)) : (d = u.canvas.width, f = u.canvas.height), n.translate(c.x + l.x / 2, 0), t.flipped && n.scale(-1, 1), n.drawImage(u.canvas, 0, 0, d, f, -l.x / 2, c.y, l.x, l.y), n.restore();
			}
			_getContext(e) {
				var t = this.context;
				if (e) {
					if (this.sketchCanvas === null) {
						this.sketchCanvas = document.createElement("canvas");
						var n = this._calculateSketchCanvasSize();
						if (this.sketchCanvas.width = n.x, this.sketchCanvas.height = n.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
							var r = this;
							this.viewer.addHandler("rotate", function e() {
								if (r.viewport.getRotation() !== 0) {
									r.viewer.removeHandler("rotate", e);
									var t = r._calculateSketchCanvasSize();
									r.sketchCanvas.width = t.x, r.sketchCanvas.height = t.y;
								}
							});
						}
						this._updateImageSmoothingEnabled(this.sketchContext);
					}
					t = this.sketchContext;
				}
				return t;
			}
			_saveContext(e) {
				this._getContext(e).save();
			}
			_restoreContext(e) {
				this._getContext(e).restore();
			}
			_setClip(e, t) {
				var n = this._getContext(t);
				n.beginPath(), n.rect(e.x, e.y, e.width, e.height), n.clip();
			}
			_drawRectangle(e, t, n) {
				var r = this._getContext(n);
				r.save(), r.fillStyle = t, r.fillRect(e.x, e.y, e.width, e.height), r.restore();
			}
			blendSketch(t, n, r, i) {
				var a = t;
				e.isPlainObject(a) || (a = {
					opacity: t,
					scale: n,
					translate: r,
					compositeOperation: i
				}), t = a.opacity, i = a.compositeOperation;
				var o = a.bounds;
				if (this.context.save(), this.context.globalAlpha = t, i && (this.context.globalCompositeOperation = i), o) o.x < 0 && (o.width += o.x, o.x = 0), o.x + o.width > this.canvas.width && (o.width = this.canvas.width - o.x), o.y < 0 && (o.height += o.y, o.y = 0), o.y + o.height > this.canvas.height && (o.height = this.canvas.height - o.y), this.context.drawImage(this.sketchCanvas, o.x, o.y, o.width, o.height, o.x, o.y, o.width, o.height);
				else {
					n = a.scale || 1, r = a.translate;
					var s = r instanceof e.Point ? r : new e.Point(0, 0), c = 0, l = 0;
					if (r) {
						var u = this.sketchCanvas.width - this.canvas.width, d = this.sketchCanvas.height - this.canvas.height;
						c = Math.round(u / 2), l = Math.round(d / 2);
					}
					this.context.drawImage(this.sketchCanvas, s.x - c * n, s.y - l * n, (this.canvas.width + 2 * c) * n, (this.canvas.height + 2 * l) * n, -c, -l, this.canvas.width + 2 * c, this.canvas.height + 2 * l);
				}
				this.context.restore();
			}
			_drawDebugInfoOnTile(t, n, r, i) {
				var a = this.viewer.world.getIndexOfItem(i) % this.debugGridColor.length, o = this.context;
				o.save(), o.lineWidth = 2 * e.pixelDensityRatio, o.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", o.strokeStyle = this.debugGridColor[a], o.fillStyle = this.debugGridColor[a], this._setRotations(i), this._viewportFlipped && this._flip({ point: t.position.plus(t.size.divide(2)) }), o.strokeRect(t.position.x * e.pixelDensityRatio, t.position.y * e.pixelDensityRatio, t.size.x * e.pixelDensityRatio, t.size.y * e.pixelDensityRatio);
				var s = (t.position.x + t.size.x / 2) * e.pixelDensityRatio, c = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
				o.translate(s, c);
				let l = this.viewport.getRotation(!0);
				o.rotate(Math.PI / 180 * -l), o.translate(-s, -c), t.x === 0 && t.y === 0 && (o.fillText("Zoom: " + this.viewport.getZoom(), t.position.x * e.pixelDensityRatio, (t.position.y - 30) * e.pixelDensityRatio), o.fillText("Pan: " + this.viewport.getBounds().toString(), t.position.x * e.pixelDensityRatio, (t.position.y - 20) * e.pixelDensityRatio)), o.fillText("Level: " + t.level, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 20) * e.pixelDensityRatio), o.fillText("Column: " + t.x, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 30) * e.pixelDensityRatio), o.fillText("Row: " + t.y, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 40) * e.pixelDensityRatio), o.fillText("Order: " + r + " of " + n, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 50) * e.pixelDensityRatio), o.fillText("Size: " + t.size.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 60) * e.pixelDensityRatio), o.fillText("Position: " + t.position.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(), i.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(), o.restore();
			}
			_updateImageSmoothingEnabled(e) {
				e.msImageSmoothingEnabled = this._imageSmoothingEnabled, e.imageSmoothingEnabled = this._imageSmoothingEnabled;
			}
			_getCanvasSize(t) {
				var n = this._getContext(t).canvas;
				return new e.Point(n.width, n.height);
			}
			_getCanvasCenter() {
				return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
			}
			_setRotations(e, t = !1) {
				var n = !1;
				this.viewport.getRotation(!0) % 360 != 0 && (this._offsetForRotation({
					degrees: this.viewport.getRotation(!0),
					useSketch: t,
					saveContext: n
				}), n = !1), e.getRotation(!0) % 360 != 0 && this._offsetForRotation({
					degrees: e.getRotation(!0),
					point: this.viewport.pixelFromPointNoRotate(e._getRotationPoint(!0), !0),
					useSketch: t,
					saveContext: n
				});
			}
			_offsetForRotation(t) {
				var n = t.point ? t.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), r = this._getContext(t.useSketch);
				r.save(), r.translate(n.x, n.y), r.rotate(Math.PI / 180 * t.degrees), r.translate(-n.x, -n.y);
			}
			_flip(t) {
				t ||= {};
				var n = t.point ? t.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), r = this._getContext(t.useSketch);
				r.translate(n.x, 0), r.scale(-1, 1), r.translate(-n.x, 0);
			}
			_restoreRotationChanges(e) {
				this._getContext(e).restore();
			}
			_calculateCanvasSize() {
				var t = e.pixelDensityRatio, n = this.viewport.getContainerSize();
				return {
					x: Math.round(n.x * t),
					y: Math.round(n.y * t)
				};
			}
			_calculateSketchCanvasSize() {
				var e = this._calculateCanvasSize();
				if (this.viewport.getRotation() === 0) return e;
				var t = Math.ceil(Math.sqrt(e.x * e.x + e.y * e.y));
				return {
					x: t,
					y: t
				};
			}
		}
		e.CanvasDrawer = n;
		var r = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
		function i(t) {
			return t !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && t !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && t !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
		}
		function a(e) {
			return i(e) ? r : e;
		}
		function o(t) {
			if (typeof t == "number") return a(t);
			if (!t || !e.Browser) return r;
			var n = t[e.Browser.vendor];
			return i(n) && (n = t["*"]), a(n);
		}
	})(n), (function(e) {
		let t = e;
		t.WebGLDrawer = class extends t.DrawerBase {
			constructor(e) {
				super(e), this._destroyed = !1, this._TextureMap = /* @__PURE__ */ new Map(), this._TileMap = /* @__PURE__ */ new Map(), this._gl = null, this._firstPass = null, this._secondPass = null, this._glFrameBuffer = null, this._renderToTexture = null, this._glFramebufferToCanvasTransform = null, this._outputCanvas = null, this._outputContext = null, this._clippingCanvas = null, this._clippingContext = null, this._renderingCanvas = null, this._backupCanvasDrawer = null, this._imageSmoothingEnabled = !0, this._boundToTileReady = (e) => this._tileReadyHandler(e), this._boundToImageUnloaded = (e) => this._imageUnloadedHandler(e), this.viewer.addHandler("tile-ready", this._boundToTileReady), this.viewer.addHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.rejectEventHandler("tile-drawn", "The WebGLDrawer does not raise the tile-drawn event"), this.viewer.rejectEventHandler("tile-drawing", "The WebGLDrawer does not raise the tile-drawing event"), this._setupCanvases(), this._setupRenderer(), this.context = this._outputContext;
			}
			destroy() {
				if (this._destroyed) return;
				let e = this._gl;
				var t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
				for (let n = 0; n < t; ++n) e.activeTexture(e.TEXTURE0 + n), e.bindTexture(e.TEXTURE_2D, null), e.bindTexture(e.TEXTURE_CUBE_MAP, null);
				e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.bindRenderbuffer(e.RENDERBUFFER, null), e.bindFramebuffer(e.FRAMEBUFFER, null), this._unloadTextures(), e.deleteBuffer(this._secondPass.bufferOutputPosition), e.deleteFramebuffer(this._glFrameBuffer), this._renderingCanvas.width = this._renderingCanvas.height = 1, this._clippingCanvas.width = this._clippingCanvas.height = 1, this._outputCanvas.width = this._outputCanvas.height = 1, this._renderingCanvas = null, this._clippingCanvas = this._clippingContext = null, this._outputCanvas = this._outputContext = null;
				let n = e.getExtension("WEBGL_lose_context");
				n && n.loseContext(), this.viewer.removeHandler("tile-ready", this._boundToTileReady), this.viewer.removeHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.removeHandler("resize", this._resizeHandler), this._gl = null, this._backupCanvasDrawer &&= (this._backupCanvasDrawer.destroy(), null), this.container.removeChild(this.canvas), this.viewer.drawer === this && (this.viewer.drawer = null), this._destroyed = !0;
			}
			canRotate() {
				return !0;
			}
			static isSupported() {
				let t = document.createElement("canvas"), n = e.isFunction(t.getContext) && t.getContext("webgl"), r = n && n.getExtension("WEBGL_lose_context");
				return r && r.loseContext(), !!n;
			}
			getType() {
				return "webgl";
			}
			minimumOverlapRequired(e) {
				return e.isTainted();
			}
			_createDrawingElement() {
				let t = e.makeNeutralElement("canvas"), n = this._calculateCanvasSize();
				return t.width = n.x, t.height = n.y, t;
			}
			_getBackupCanvasDrawer() {
				return this._backupCanvasDrawer || (this._backupCanvasDrawer = this.viewer.requestDrawer("canvas", { mainDrawer: !1 }), this._backupCanvasDrawer.canvas.style.setProperty("visibility", "hidden")), this._backupCanvasDrawer;
			}
			draw(n) {
				let r = this._gl, i = this.viewport.getBoundsNoRotateWithMargins(!0), a = {
					bounds: i,
					center: new t.Point(i.x + i.width / 2, i.y + i.height / 2),
					rotation: this.viewport.getRotation(!0) * Math.PI / 180
				}, o = this.viewport.flipped ? -1 : 1, s = e.Mat3.makeTranslation(-a.center.x, -a.center.y), c = e.Mat3.makeScaling(2 / a.bounds.width * o, -2 / a.bounds.height), l = e.Mat3.makeRotation(-a.rotation), u = c.multiply(l).multiply(s);
				r.bindFramebuffer(r.FRAMEBUFFER, null), r.clear(r.COLOR_BUFFER_BIT), this._outputContext.clearRect(0, 0, this._outputCanvas.width, this._outputCanvas.height);
				let d = !1;
				n.forEach((t, n) => {
					if (t.isTainted()) {
						d &&= (this._outputContext.drawImage(this._renderingCanvas, 0, 0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.clear(r.COLOR_BUFFER_BIT), !1);
						let e = this._getBackupCanvasDrawer();
						e.draw([t]), this._outputContext.drawImage(e.canvas, 0, 0);
					} else {
						let i = t.getTilesToDraw();
						if (t.placeholderFillStyle && t._hasOpaqueTile === !1 && this._drawPlaceholder(t), i.length === 0 || t.getOpacity() === 0) return;
						let a = i[0], o = t.compositeOperation || this.viewer.compositeOperation || t._clip || t._croppingPolygons || t.debugMode, s = o || t.opacity < 1 || a.hasTransparency;
						o && (d && this._outputContext.drawImage(this._renderingCanvas, 0, 0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.clear(r.COLOR_BUFFER_BIT)), r.useProgram(this._firstPass.shaderProgram), s ? (r.bindFramebuffer(r.FRAMEBUFFER, this._glFrameBuffer), r.clear(r.COLOR_BUFFER_BIT)) : r.bindFramebuffer(r.FRAMEBUFFER, null);
						let c = u, l = t.getRotation(!0);
						if (l % 360 != 0) {
							let n = e.Mat3.makeRotation(-l * Math.PI / 180), r = t.getBoundsNoRotate(!0).getCenter(), i = e.Mat3.makeTranslation(r.x, r.y), a = e.Mat3.makeTranslation(-r.x, -r.y), o = i.multiply(n).multiply(a);
							c = u.multiply(o);
						}
						let f = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
						if (f <= 0) throw /* @__PURE__ */ Error(`WegGL error: bad value for gl parameter MAX_TEXTURE_IMAGE_UNITS (${f}). This could happen
                        if too many contexts have been created and not released, or there is another problem with the graphics card.`);
						let p = new Float32Array(f * 12), m = Array(f), h = Array(f), g = Array(f);
						for (let e = 0; e < i.length; e++) {
							let n = i[e].tile, a = e % f, o = a + 1, s = n.getCanvasContext(), l = s ? this._TextureMap.get(s.canvas) : null;
							if (l ||= (this._tileReadyHandler({
								tile: n,
								tiledImage: t
							}), s ? this._TextureMap.get(s.canvas) : null), l && this._getTileData(n, t, l, c, a, p, m, h, g), o === f || e === i.length - 1) {
								for (let e = 0; e <= o; e++) r.activeTexture(r.TEXTURE0 + e), r.bindTexture(r.TEXTURE_2D, m[e]);
								r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), r.bufferData(r.ARRAY_BUFFER, p, r.DYNAMIC_DRAW), h.forEach((e, t) => {
									r.uniformMatrix3fv(this._firstPass.uTransformMatrices[t], !1, e);
								}), r.uniform1fv(this._firstPass.uOpacities, new Float32Array(g)), r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), r.vertexAttribPointer(this._firstPass.aOutputPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), r.vertexAttribPointer(this._firstPass.aTexturePosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferIndex), r.vertexAttribPointer(this._firstPass.aIndex, 1, r.FLOAT, !1, 0, 0), r.drawArrays(r.TRIANGLES, 0, 6 * o);
							}
						}
						s && (r.useProgram(this._secondPass.shaderProgram), r.bindFramebuffer(r.FRAMEBUFFER, null), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, this._renderToTexture), this._gl.uniform1f(this._secondPass.uOpacityMultiplier, t.opacity), r.bindBuffer(r.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), r.vertexAttribPointer(this._secondPass.aTexturePosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), r.vertexAttribPointer(this._secondPass.aOutputPosition, 2, r.FLOAT, !1, 0, 0), r.drawArrays(r.TRIANGLES, 0, 6)), d = !0, o && (this._applyContext2dPipeline(t, i, n), d = !1, r.bindFramebuffer(r.FRAMEBUFFER, null), r.clear(r.COLOR_BUFFER_BIT)), n === 0 && this._raiseTiledImageDrawnEvent(t, i.map((e) => e.tile));
					}
				}), d && this._outputContext.drawImage(this._renderingCanvas, 0, 0);
			}
			setImageSmoothingEnabled(e) {
				this._imageSmoothingEnabled !== e && (this._imageSmoothingEnabled = e, this._unloadTextures(), this.viewer.world.draw());
			}
			drawDebuggingRect(t) {
				let n = this._outputContext;
				n.save(), n.lineWidth = 2 * e.pixelDensityRatio, n.strokeStyle = this.debugGridColor[0], n.fillStyle = this.debugGridColor[0], n.strokeRect(t.x * e.pixelDensityRatio, t.y * e.pixelDensityRatio, t.width * e.pixelDensityRatio, t.height * e.pixelDensityRatio), n.restore();
			}
			_getTextureDataFromTile(e) {
				return e.getCanvasContext().canvas;
			}
			_applyContext2dPipeline(e, t, n) {
				if (this._outputContext.save(), this._outputContext.globalCompositeOperation = n === 0 ? null : e.compositeOperation || this.viewer.compositeOperation, e._croppingPolygons || e._clip ? (this._renderToClippingCanvas(e), this._outputContext.drawImage(this._clippingCanvas, 0, 0)) : this._outputContext.drawImage(this._renderingCanvas, 0, 0), this._outputContext.restore(), e.debugMode) {
					let n = this.viewer.viewport.getFlip();
					n && this._flip(), this._drawDebugInfo(t, e, n), n && this._flip();
				}
			}
			_getTileData(t, n, r, i, a, o, s, c, l) {
				let u = r.texture, d = r.position;
				o.set(d, a * 12);
				let f = this._calculateOverlapFraction(t, n), p = t.positionedBounds.width * f.x, m = t.positionedBounds.height * f.y, h = t.positionedBounds.x + (t.x === 0 ? 0 : p), g = t.positionedBounds.y + (t.y === 0 ? 0 : m), _ = t.positionedBounds.x + t.positionedBounds.width - (t.isRightMost ? 0 : p), v = t.positionedBounds.y + t.positionedBounds.height - (t.isBottomMost ? 0 : m), y = _ - h, b = v - g, x = new e.Mat3([
					y,
					0,
					0,
					0,
					b,
					0,
					h,
					g,
					1
				]);
				if (t.flipped) {
					let t = e.Mat3.makeTranslation(.5, 0), n = e.Mat3.makeTranslation(-.5, 0), r = t.multiply(e.Mat3.makeScaling(-1, 1)).multiply(n);
					x = x.multiply(r);
				}
				let S = i.multiply(x);
				l[a] = t.opacity, s[a] = u, c[a] = S.values;
			}
			_textureFilter() {
				return this._imageSmoothingEnabled ? this._gl.LINEAR : this._gl.NEAREST;
			}
			_setupRenderer() {
				let t = this._gl;
				t || e.console.error("_setupCanvases must be called before _setupRenderer"), this._unitQuad = this._makeQuadVertexBuffer(0, 1, 0, 1), this._makeFirstPassShaderProgram(), this._makeSecondPassShaderProgram(), this._renderToTexture = t.createTexture(), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this._renderToTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this._renderingCanvas.width, this._renderingCanvas.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, this._textureFilter()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this._glFrameBuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this._glFrameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this._renderToTexture, 0), t.enable(t.BLEND), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA);
			}
			_makeFirstPassShaderProgram() {
				let e = this._glNumTextures = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), t = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;
            attribute float a_index;

            ${[...Array(e).keys()].map((e) => `uniform mat3 u_matrix_${e};`).join("\n")} // create a uniform mat3 for each potential tile to draw

            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {

                mat3 transform_matrix; // value will be set by the if/elses in makeConditional()

                ${[...Array(e).keys()].map((e) => `${e > 0 ? "else " : ""}if(int(a_index) == ${e}) { transform_matrix = u_matrix_${e}; }`).join("\n")}

                gl_Position = vec4(transform_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
                v_image_index = a_index;
            }
            `, n = `
            precision mediump float;

            // our textures
            uniform sampler2D u_images[${e}];
            // our opacities
            uniform float u_opacities[${e}];

            // the varyings passed in from the vertex shader.
            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {
                // can't index directly with a variable, need to use a loop iterator hack
                for(int i = 0; i < ${e}; ++i){
                    if(i == int(v_image_index)){
                        gl_FragColor = texture2D(u_images[i], v_texture_position) * u_opacities[i];
                    }
                }
            }
            `, r = this._gl, i = this.constructor.initShaderProgram(r, t, n);
				r.useProgram(i), this._firstPass = {
					shaderProgram: i,
					aOutputPosition: r.getAttribLocation(i, "a_output_position"),
					aTexturePosition: r.getAttribLocation(i, "a_texture_position"),
					aIndex: r.getAttribLocation(i, "a_index"),
					uTransformMatrices: [...Array(this._glNumTextures).keys()].map((e) => r.getUniformLocation(i, `u_matrix_${e}`)),
					uImages: r.getUniformLocation(i, "u_images"),
					uOpacities: r.getUniformLocation(i, "u_opacities"),
					bufferOutputPosition: r.createBuffer(),
					bufferTexturePosition: r.createBuffer(),
					bufferIndex: r.createBuffer()
				}, r.uniform1iv(this._firstPass.uImages, [...Array(e).keys()]);
				let a = new Float32Array(e * 12);
				for (let t = 0; t < e; ++t) a.set(Float32Array.from(this._unitQuad), t * 12);
				r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), r.bufferData(r.ARRAY_BUFFER, a, r.STATIC_DRAW), r.enableVertexAttribArray(this._firstPass.aOutputPosition), r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), r.enableVertexAttribArray(this._firstPass.aTexturePosition), r.bindBuffer(r.ARRAY_BUFFER, this._firstPass.bufferIndex);
				let o = [...Array(this._glNumTextures).keys()].map((e) => [
					,
					,
					,
					,
					,
					,
				].fill(e)).flat();
				r.bufferData(r.ARRAY_BUFFER, new Float32Array(o), r.STATIC_DRAW), r.enableVertexAttribArray(this._firstPass.aIndex);
			}
			_makeSecondPassShaderProgram() {
				let t = this._gl, n = this.constructor.initShaderProgram(t, "\n            attribute vec2 a_output_position;\n            attribute vec2 a_texture_position;\n\n            uniform mat3 u_matrix;\n\n            varying vec2 v_texture_position;\n\n            void main() {\n                gl_Position = vec4(u_matrix * vec3(a_output_position, 1), 1);\n\n                v_texture_position = a_texture_position;\n            }\n            ", "\n            precision mediump float;\n\n            // our texture\n            uniform sampler2D u_image;\n\n            // the texCoords passed in from the vertex shader.\n            varying vec2 v_texture_position;\n\n            // the opacity multiplier for the image\n            uniform float u_opacity_multiplier;\n\n            void main() {\n                gl_FragColor = texture2D(u_image, v_texture_position);\n                gl_FragColor *= u_opacity_multiplier;\n            }\n            ");
				t.useProgram(n), this._secondPass = {
					shaderProgram: n,
					aOutputPosition: t.getAttribLocation(n, "a_output_position"),
					aTexturePosition: t.getAttribLocation(n, "a_texture_position"),
					uMatrix: t.getUniformLocation(n, "u_matrix"),
					uImage: t.getUniformLocation(n, "u_image"),
					uOpacityMultiplier: t.getUniformLocation(n, "u_opacity_multiplier"),
					bufferOutputPosition: t.createBuffer(),
					bufferTexturePosition: t.createBuffer()
				}, t.bindBuffer(t.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), t.bufferData(t.ARRAY_BUFFER, this._unitQuad, t.STATIC_DRAW), t.enableVertexAttribArray(this._secondPass.aOutputPosition), t.bindBuffer(t.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), t.bufferData(t.ARRAY_BUFFER, this._unitQuad, t.DYNAMIC_DRAW), t.enableVertexAttribArray(this._secondPass.aTexturePosition);
				let r = e.Mat3.makeScaling(2, 2).multiply(e.Mat3.makeTranslation(-.5, -.5));
				t.uniformMatrix3fv(this._secondPass.uMatrix, !1, r.values);
			}
			_resizeRenderer() {
				let e = this._gl, t = this._renderingCanvas.width, n = this._renderingCanvas.height;
				e.viewport(0, 0, t, n), e.deleteTexture(this._renderToTexture), this._renderToTexture = e.createTexture(), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this._renderToTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, n, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, this._textureFilter()), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindFramebuffer(e.FRAMEBUFFER, this._glFrameBuffer), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this._renderToTexture, 0);
			}
			_setupCanvases() {
				let e = this;
				this._outputCanvas = this.canvas, this._outputContext = this._outputCanvas.getContext("2d"), this._renderingCanvas = document.createElement("canvas"), this._clippingCanvas = document.createElement("canvas"), this._clippingContext = this._clippingCanvas.getContext("2d"), this._renderingCanvas.width = this._clippingCanvas.width = this._outputCanvas.width, this._renderingCanvas.height = this._clippingCanvas.height = this._outputCanvas.height, this._gl = this._renderingCanvas.getContext("webgl"), this._resizeHandler = function() {
					e._outputCanvas !== e.viewer.drawer.canvas && (e._outputCanvas.style.width = e.viewer.drawer.canvas.clientWidth + "px", e._outputCanvas.style.height = e.viewer.drawer.canvas.clientHeight + "px");
					let t = e._calculateCanvasSize();
					(e._outputCanvas.width !== t.x || e._outputCanvas.height !== t.y) && (e._outputCanvas.width = t.x, e._outputCanvas.height = t.y), e._renderingCanvas.style.width = e._outputCanvas.clientWidth + "px", e._renderingCanvas.style.height = e._outputCanvas.clientHeight + "px", e._renderingCanvas.width = e._clippingCanvas.width = e._outputCanvas.width, e._renderingCanvas.height = e._clippingCanvas.height = e._outputCanvas.height, e._resizeRenderer();
				}, this.viewer.addHandler("resize", this._resizeHandler);
			}
			_makeQuadVertexBuffer(e, t, n, r) {
				return new Float32Array([
					e,
					r,
					t,
					r,
					e,
					n,
					e,
					n,
					t,
					r,
					t,
					n
				]);
			}
			_tileReadyHandler(t) {
				let n = t.tile, r = t.tiledImage;
				if (r.isTainted()) return;
				let i = n.getCanvasContext(), a = i && i.canvas;
				if (!a || e.isCanvasTainted(a)) {
					r.isTainted() || (r.setTainted(!0), e.console.warn("WebGL cannot be used to draw this TiledImage because it has tainted data. Does crossOriginPolicy need to be set?"), this._raiseDrawerErrorEvent(r, "Tainted data cannot be used by the WebGLDrawer. Falling back to CanvasDrawer for this TiledImage."));
					return;
				}
				if (!this._TextureMap.get(a)) {
					let e = this._gl, t = e.createTexture(), o, s = r.source.tileOverlap, c, l;
					if (n.sourceBounds ? (c = Math.min(n.sourceBounds.width, a.width) / a.width, l = Math.min(n.sourceBounds.height, a.height) / a.height) : (c = 1, l = 1), s > 0) {
						let e = this._calculateOverlapFraction(n, r), t = (n.x === 0 ? 0 : e.x) * c, i = (n.y === 0 ? 0 : e.y) * l, a = (n.isRightMost ? 1 : 1 - e.x) * c, s = (n.isBottomMost ? 1 : 1 - e.y) * l;
						o = this._makeQuadVertexBuffer(t, a, i, s);
					} else o = c === 1 && l === 1 ? this._unitQuad : this._makeQuadVertexBuffer(0, c, 0, l);
					let u = {
						texture: t,
						position: o
					};
					this._TextureMap.set(a, u), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, this._textureFilter()), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, this._textureFilter()), this._uploadImageData(i);
				}
			}
			_calculateOverlapFraction(e, t) {
				let n = t.source.tileOverlap, r = e.sourceBounds.width, i = e.sourceBounds.height, a = (e.x === 0 ? 0 : n) + (e.isRightMost ? 0 : n), o = (e.y === 0 ? 0 : n) + (e.isBottomMost ? 0 : n);
				return {
					x: n / (r + a),
					y: n / (i + o)
				};
			}
			_unloadTextures() {
				Array.from(this._TextureMap.keys()).forEach((e) => {
					this._cleanupImageData(e);
				});
			}
			_uploadImageData(t) {
				let n = this._gl, r = t.canvas;
				try {
					if (!r) throw t;
					n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r);
				} catch (t) {
					e.console.error("Error uploading image data to WebGL", t);
				}
			}
			_imageUnloadedHandler(e) {
				let t = e.context2D.canvas;
				this._cleanupImageData(t);
			}
			_cleanupImageData(e) {
				let t = this._TextureMap.get(e);
				this._TextureMap.delete(e), t && this._gl.deleteTexture(t.texture);
			}
			_setClip() {}
			_renderToClippingCanvas(t) {
				if (this._clippingContext.clearRect(0, 0, this._clippingCanvas.width, this._clippingCanvas.height), this._clippingContext.save(), this.viewer.viewport.getFlip()) {
					let t = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
					this._clippingContext.translate(t.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-t.x, 0);
				}
				if (t._clip) {
					let e = [
						{
							x: t._clip.x,
							y: t._clip.y
						},
						{
							x: t._clip.x + t._clip.width,
							y: t._clip.y
						},
						{
							x: t._clip.x + t._clip.width,
							y: t._clip.y + t._clip.height
						},
						{
							x: t._clip.x,
							y: t._clip.y + t._clip.height
						}
					].map((e) => {
						let n = t.imageToViewportCoordinates(e.x, e.y, !0).rotate(this.viewer.viewport.getRotation(!0), this.viewer.viewport.getCenter(!0));
						return this.viewportCoordToDrawerCoord(n);
					});
					this._clippingContext.beginPath(), e.forEach((e, t) => {
						this._clippingContext[t === 0 ? "moveTo" : "lineTo"](e.x, e.y);
					}), this._clippingContext.clip(), this._setClip();
				}
				if (t._croppingPolygons) {
					let e = t._croppingPolygons.map((e) => e.map((e) => {
						let n = t.imageToViewportCoordinates(e.x, e.y, !0).rotate(this.viewer.viewport.getRotation(!0), this.viewer.viewport.getCenter(!0));
						return this.viewportCoordToDrawerCoord(n);
					}));
					this._clippingContext.beginPath(), e.forEach((e) => {
						e.forEach((e, t) => {
							this._clippingContext[t === 0 ? "moveTo" : "lineTo"](e.x, e.y);
						});
					}), this._clippingContext.clip();
				}
				if (this.viewer.viewport.getFlip()) {
					let t = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
					this._clippingContext.translate(t.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-t.x, 0);
				}
				this._clippingContext.drawImage(this._renderingCanvas, 0, 0), this._clippingContext.restore();
			}
			_setRotations(e) {
				var t = !1;
				this.viewport.getRotation(!0) % 360 != 0 && (this._offsetForRotation({
					degrees: this.viewport.getRotation(!0),
					saveContext: t
				}), t = !1), e.getRotation(!0) % 360 != 0 && this._offsetForRotation({
					degrees: e.getRotation(!0),
					point: this.viewport.pixelFromPointNoRotate(e._getRotationPoint(!0), !0),
					saveContext: t
				});
			}
			_offsetForRotation(t) {
				var n = t.point ? t.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), r = this._outputContext;
				r.save(), r.translate(n.x, n.y), r.rotate(Math.PI / 180 * t.degrees), r.translate(-n.x, -n.y);
			}
			_flip(t) {
				t ||= {};
				var n = t.point ? t.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), r = this._outputContext;
				r.translate(n.x, 0), r.scale(-1, 1), r.translate(-n.x, 0);
			}
			_drawDebugInfo(t, n, r) {
				for (var i = t.length - 1; i >= 0; i--) {
					var a = t[i].tile;
					try {
						this._drawDebugInfoOnTile(a, t.length, i, n, r);
					} catch (t) {
						e.console.error(t);
					}
				}
			}
			_drawDebugInfoOnTile(t, n, r, i, a) {
				var o = this.viewer.world.getIndexOfItem(i) % this.debugGridColor.length, s = this.context;
				s.save(), s.lineWidth = 2 * e.pixelDensityRatio, s.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", s.strokeStyle = this.debugGridColor[o], s.fillStyle = this.debugGridColor[o], this._setRotations(i), a && this._flip({ point: t.position.plus(t.size.divide(2)) }), s.strokeRect(t.position.x * e.pixelDensityRatio, t.position.y * e.pixelDensityRatio, t.size.x * e.pixelDensityRatio, t.size.y * e.pixelDensityRatio);
				var c = (t.position.x + t.size.x / 2) * e.pixelDensityRatio, l = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
				s.translate(c, l);
				let u = this.viewport.getRotation(!0);
				s.rotate(Math.PI / 180 * -u), s.translate(-c, -l), t.x === 0 && t.y === 0 && (s.fillText("Zoom: " + this.viewport.getZoom(), t.position.x * e.pixelDensityRatio, (t.position.y - 30) * e.pixelDensityRatio), s.fillText("Pan: " + this.viewport.getBounds().toString(), t.position.x * e.pixelDensityRatio, (t.position.y - 20) * e.pixelDensityRatio)), s.fillText("Level: " + t.level, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 20) * e.pixelDensityRatio), s.fillText("Column: " + t.x, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 30) * e.pixelDensityRatio), s.fillText("Row: " + t.y, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 40) * e.pixelDensityRatio), s.fillText("Order: " + r + " of " + n, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 50) * e.pixelDensityRatio), s.fillText("Size: " + t.size.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 60) * e.pixelDensityRatio), s.fillText("Position: " + t.position.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(), i.getRotation(!0) % 360 != 0 && this._restoreRotationChanges(), s.restore();
			}
			_drawPlaceholder(e) {
				let t = e.getBounds(!0), n = this.viewportToDrawerRectangle(e.getBounds(!0)), r = this._outputContext, i;
				i = typeof e.placeholderFillStyle == "function" ? e.placeholderFillStyle(e, r) : e.placeholderFillStyle, this._offsetForRotation({ degrees: this.viewer.viewport.getRotation(!0) }), r.fillStyle = i, r.translate(n.x, n.y), r.rotate(Math.PI / 180 * t.degrees), r.translate(-n.x, -n.y), r.fillRect(n.x, n.y, n.width, n.height), this._restoreRotationChanges();
			}
			_getCanvasCenter() {
				return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
			}
			_restoreRotationChanges() {
				this._outputContext.restore();
			}
			static initShaderProgram(t, n, r) {
				function i(t, n, r) {
					let i = t.createShader(n);
					return t.shaderSource(i, r), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) ? i : (e.console.error(`An error occurred compiling the shaders: ${t.getShaderInfoLog(i)}`), t.deleteShader(i), null);
				}
				let a = i(t, t.VERTEX_SHADER, n), o = i(t, t.FRAGMENT_SHADER, r), s = t.createProgram();
				return t.attachShader(s, a), t.attachShader(s, o), t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) ? s : (e.console.error(`Unable to initialize the shader program: ${t.getProgramInfoLog(s)}`), null);
			}
		};
	})(n), (function(e) {
		e.Viewport = function(t) {
			var n = arguments;
			n.length && n[0] instanceof e.Point && (t = {
				containerSize: n[0],
				contentSize: n[1],
				config: n[2]
			}), t.config && (e.extend(!0, t, t.config), delete t.config), this._margins = e.extend({
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			}, t.margins || {}), delete t.margins, t.initialDegrees = t.degrees, delete t.degrees, e.extend(!0, this, {
				containerSize: null,
				contentSize: null,
				zoomPoint: null,
				rotationPivot: null,
				viewer: null,
				springStiffness: e.DEFAULT_SETTINGS.springStiffness,
				animationTime: e.DEFAULT_SETTINGS.animationTime,
				minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
				maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio,
				visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio,
				wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
				wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
				defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel,
				minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel,
				maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel,
				initialDegrees: e.DEFAULT_SETTINGS.degrees,
				flipped: e.DEFAULT_SETTINGS.flipped,
				homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer,
				silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings
			}, t), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({
				initial: 0,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this.centerSpringY = new e.Spring({
				initial: 0,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this.zoomSpring = new e.Spring({
				exponential: !0,
				initial: 1,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this.degreesSpring = new e.Spring({
				initial: t.initialDegrees,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(!0), this.update();
		}, e.Viewport.prototype = {
			get degrees() {
				return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
			},
			set degrees(t) {
				e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(t);
			},
			resetContentSize: function(t) {
				return e.console.assert(t, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(t instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(t.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(t.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, t.y / t.x), t.x), this;
			},
			setHomeBounds: function(t, n) {
				e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(t, n);
			},
			_setContentBounds: function(t, n) {
				e.console.assert(t, "[Viewport._setContentBounds] bounds is required"), e.console.assert(t instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(t.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(t.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = t.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(n), this._contentBounds = t.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(n), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", {
					contentSize: this._contentSizeNoRotate.clone(),
					contentFactor: n,
					homeBounds: this._contentBoundsNoRotate.clone(),
					contentBounds: this._contentBounds.clone()
				});
			},
			getHomeZoom: function() {
				if (this.defaultZoomLevel) return this.defaultZoomLevel;
				var e = this._contentAspectRatio / this.getAspectRatio();
				return (this.homeFillsViewer ? e >= 1 ? e : 1 : e >= 1 ? 1 : e) / this._contentBounds.width;
			},
			getHomeBounds: function() {
				return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
			},
			getHomeBoundsNoRotate: function() {
				var t = this._contentBounds.getCenter(), n = 1 / this.getHomeZoom(), r = n / this.getAspectRatio();
				return new e.Rect(t.x - n / 2, t.y - r / 2, n, r);
			},
			goHome: function(e) {
				return this.viewer && this.viewer.raiseEvent("home", { immediately: e }), this.fitBounds(this.getHomeBounds(), e);
			},
			getMinZoom: function() {
				var e = this.getHomeZoom();
				return this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * e;
			},
			getMaxZoom: function() {
				var e = this.maxZoomLevel;
				return e || (e = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, e /= this._contentBounds.width), Math.max(e, this.getHomeZoom());
			},
			getAspectRatio: function() {
				return this._containerInnerSize.x / this._containerInnerSize.y;
			},
			getContainerSize: function() {
				return new e.Point(this.containerSize.x, this.containerSize.y);
			},
			getMargins: function() {
				return e.extend({}, this._margins);
			},
			setMargins: function(t) {
				e.console.assert(e.type(t) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				}, t), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
			},
			getBounds: function(e) {
				return this.getBoundsNoRotate(e).rotate(-this.getRotation(e));
			},
			getBoundsNoRotate: function(t) {
				var n = this.getCenter(t), r = 1 / this.getZoom(t), i = r / this.getAspectRatio();
				return new e.Rect(n.x - r / 2, n.y - i / 2, r, i);
			},
			getBoundsWithMargins: function(e) {
				return this.getBoundsNoRotateWithMargins(e).rotate(-this.getRotation(e), this.getCenter(e));
			},
			getBoundsNoRotateWithMargins: function(e) {
				var t = this.getBoundsNoRotate(e), n = this._containerInnerSize.x * this.getZoom(e);
				return t.x -= this._margins.left / n, t.y -= this._margins.top / n, t.width += (this._margins.left + this._margins.right) / n, t.height += (this._margins.top + this._margins.bottom) / n, t;
			},
			getCenter: function(t) {
				var n = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value), r = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value), i, a, o, s, c, l, u, d;
				return t ? n : this.zoomPoint ? (i = this.pixelFromPoint(this.zoomPoint, !0), a = this.getZoom(), o = 1 / a, s = o / this.getAspectRatio(), c = new e.Rect(n.x - o / 2, n.y - s / 2, o, s), l = this._pixelFromPoint(this.zoomPoint, c), u = l.minus(i).rotate(-this.getRotation(!0)), d = u.divide(this._containerInnerSize.x * a), r.plus(d)) : r;
			},
			getZoom: function(e) {
				return e ? this.zoomSpring.current.value : this.zoomSpring.target.value;
			},
			_applyZoomConstraints: function(e) {
				return Math.max(Math.min(e, this.getMaxZoom()), this.getMinZoom());
			},
			_applyBoundaryConstraints: function(e) {
				var t = this.viewportToViewerElementRectangle(e).getBoundingBox(), n = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), r = !1, i = !1;
				if (!this.wrapHorizontal) {
					var a = t.x + t.width, o = n.x + n.width, s = t.width > n.width ? this.visibilityRatio * n.width : this.visibilityRatio * t.width, c = n.x - a + s, l = o - t.x - s;
					s > n.width ? (t.x += (c + l) / 2, r = !0) : l < 0 ? (t.x += l, r = !0) : c > 0 && (t.x += c, r = !0);
				}
				if (!this.wrapVertical) {
					var u = t.y + t.height, d = n.y + n.height, f = t.height > n.height ? this.visibilityRatio * n.height : this.visibilityRatio * t.height, p = n.y - u + f, m = d - t.y - f;
					f > n.height ? (t.y += (p + m) / 2, i = !0) : m < 0 ? (t.y += m, i = !0) : p > 0 && (t.y += p, i = !0);
				}
				var h = r || i, g = h ? this.viewerElementToViewportRectangle(t) : e.clone();
				return g.xConstrained = r, g.yConstrained = i, g.constraintApplied = h, g;
			},
			_raiseConstraintsEvent: function(e) {
				this.viewer && this.viewer.raiseEvent("constrain", { immediately: e });
			},
			applyConstraints: function(e) {
				var t = this.getZoom(), n = this._applyZoomConstraints(t);
				t !== n && this.zoomTo(n, this.zoomPoint, e);
				var r = this.getConstrainedBounds(!1);
				return r.constraintApplied && (this.fitBounds(r, e), this._raiseConstraintsEvent(e)), this;
			},
			ensureVisible: function(e) {
				return this.applyConstraints(e);
			},
			_fitBounds: function(t, n) {
				n ||= {};
				var r = n.immediately || !1, i = n.constraints || !1, a = this.getAspectRatio(), o = t.getCenter(), s = new e.Rect(t.x, t.y, t.width, t.height, t.degrees + this.getRotation()).getBoundingBox();
				s.getAspectRatio() >= a ? s.height = s.width / a : s.width = s.height * a, s.x = o.x - s.width / 2, s.y = o.y - s.height / 2;
				var c = 1 / s.width;
				if (r) return this.panTo(o, !0), this.zoomTo(c, null, !0), i && this.applyConstraints(!0), this;
				var l = this.getCenter(!0), u = this.getZoom(!0);
				this.panTo(l, !0), this.zoomTo(u, null, !0);
				var d = this.getBounds(), f = this.getZoom();
				if (f === 0 || Math.abs(c / f - 1) < 1e-8) return this.zoomTo(c, null, !0), this.panTo(o, r), i && this.applyConstraints(!1), this;
				if (i) {
					this.panTo(o, !1), c = this._applyZoomConstraints(c), this.zoomTo(c, null, !1);
					var p = this.getConstrainedBounds();
					this.panTo(l, !0), this.zoomTo(u, null, !0), this.fitBounds(p);
				} else {
					var m = s.rotate(-this.getRotation()).getTopLeft().times(c).minus(d.getTopLeft().times(f)).divide(c - f);
					this.zoomTo(c, m, r);
				}
				return this;
			},
			fitBounds: function(e, t) {
				return this._fitBounds(e, {
					immediately: t,
					constraints: !1
				});
			},
			fitBoundsWithConstraints: function(e, t) {
				return this._fitBounds(e, {
					immediately: t,
					constraints: !0
				});
			},
			fitVertically: function(t) {
				var n = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
				return this.fitBounds(n, t);
			},
			fitHorizontally: function(t) {
				var n = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
				return this.fitBounds(n, t);
			},
			getConstrainedBounds: function(e) {
				var t = this.getBounds(e);
				return this._applyBoundaryConstraints(t);
			},
			panBy: function(t, n) {
				var r = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
				return this.panTo(r.plus(t), n);
			},
			panTo: function(e, t) {
				return t ? (this.centerSpringX.resetTo(e.x), this.centerSpringY.resetTo(e.y)) : (this.centerSpringX.springTo(e.x), this.centerSpringY.springTo(e.y)), this.viewer && this.viewer.raiseEvent("pan", {
					center: e,
					immediately: t
				}), this;
			},
			zoomBy: function(e, t, n) {
				return this.zoomTo(this.zoomSpring.target.value * e, t, n);
			},
			zoomTo: function(t, n, r) {
				var i = this;
				return this.zoomPoint = n instanceof e.Point && !isNaN(n.x) && !isNaN(n.y) ? n : null, r ? this._adjustCenterSpringsForZoomPoint(function() {
					i.zoomSpring.resetTo(t);
				}) : this.zoomSpring.springTo(t), this.viewer && this.viewer.raiseEvent("zoom", {
					zoom: t,
					refPoint: n,
					immediately: r
				}), this;
			},
			setRotation: function(e, t) {
				return this.rotateTo(e, null, t);
			},
			getRotation: function(e) {
				return e ? this.degreesSpring.current.value : this.degreesSpring.target.value;
			},
			setRotationWithPivot: function(e, t, n) {
				return this.rotateTo(e, t, n);
			},
			rotateTo: function(t, n, r) {
				if (!this.viewer || !this.viewer.drawer.canRotate() || this.degreesSpring.target.value === t && this.degreesSpring.isAtTargetValue()) return this;
				if (this.rotationPivot = n instanceof e.Point && !isNaN(n.x) && !isNaN(n.y) ? n : null, r) if (this.rotationPivot) {
					if (!(t - this._oldDegrees)) return this.rotationPivot = null, this;
					this._rotateAboutPivot(t);
				} else this.degreesSpring.resetTo(t);
				else {
					var i = e.positiveModulo(this.degreesSpring.current.value, 360), a = e.positiveModulo(t, 360), o = a - i;
					o > 180 ? a -= 360 : o < -180 && (a += 360);
					var s = i - a;
					this.degreesSpring.resetTo(t + s), this.degreesSpring.springTo(t);
				}
				return this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", {
					degrees: t,
					immediately: !!r,
					pivot: this.rotationPivot || this.getCenter()
				}), this;
			},
			rotateBy: function(e, t, n) {
				return this.rotateTo(this.degreesSpring.target.value + e, t, n);
			},
			resize: function(e, t) {
				var n = this.getBoundsNoRotate(), r = n, i;
				this.containerSize.x = e.x, this.containerSize.y = e.y, this._updateContainerInnerSize(), t && (i = e.x / this.containerSize.x, r.width = n.width * i, r.height = r.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", {
					newContainerSize: e,
					maintain: t
				});
				var a = this.fitBounds(r, !0);
				return this.viewer && this.viewer.raiseEvent("after-resize", {
					newContainerSize: e,
					maintain: t
				}), a;
			},
			_updateContainerInnerSize: function() {
				this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)));
			},
			update: function() {
				var e = this;
				this._adjustCenterSpringsForZoomPoint(function() {
					e.zoomSpring.update();
				}), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(!0) : this.degreesSpring.update();
				var t = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
				return this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, t || !this.zoomSpring.isAtTargetValue() || !this.centerSpringX.isAtTargetValue() || !this.centerSpringY.isAtTargetValue() || !this.degreesSpring.isAtTargetValue();
			},
			_rotateAboutPivot: function(e) {
				var t = e === !0, n = this.rotationPivot.minus(this.getCenter());
				this.centerSpringX.shiftBy(n.x), this.centerSpringY.shiftBy(n.y), t ? this.degreesSpring.update() : this.degreesSpring.resetTo(e);
				var r = this.degreesSpring.current.value - this._oldDegrees, i = n.rotate(r * -1).times(-1);
				this.centerSpringX.shiftBy(i.x), this.centerSpringY.shiftBy(i.y);
			},
			_adjustCenterSpringsForZoomPoint: function(e) {
				if (this.zoomPoint) {
					var t = this.pixelFromPoint(this.zoomPoint, !0);
					e();
					var n = this.pixelFromPoint(this.zoomPoint, !0).minus(t), r = this.deltaPointsFromPixels(n, !0);
					this.centerSpringX.shiftBy(r.x), this.centerSpringY.shiftBy(r.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
				} else e();
			},
			deltaPixelsFromPointsNoRotate: function(e, t) {
				return e.times(this._containerInnerSize.x * this.getZoom(t));
			},
			deltaPixelsFromPoints: function(e, t) {
				return this.deltaPixelsFromPointsNoRotate(e.rotate(this.getRotation(t)), t);
			},
			deltaPointsFromPixelsNoRotate: function(e, t) {
				return e.divide(this._containerInnerSize.x * this.getZoom(t));
			},
			deltaPointsFromPixels: function(e, t) {
				return this.deltaPointsFromPixelsNoRotate(e, t).rotate(-this.getRotation(t));
			},
			pixelFromPointNoRotate: function(e, t) {
				return this._pixelFromPointNoRotate(e, this.getBoundsNoRotate(t));
			},
			pixelFromPoint: function(e, t) {
				return this._pixelFromPoint(e, this.getBoundsNoRotate(t));
			},
			_pixelFromPointNoRotate: function(t, n) {
				return t.minus(n.getTopLeft()).times(this._containerInnerSize.x / n.width).plus(new e.Point(this._margins.left, this._margins.top));
			},
			_pixelFromPoint: function(e, t) {
				return this._pixelFromPointNoRotate(e.rotate(this.getRotation(!0), this.getCenter(!0)), t);
			},
			pointFromPixelNoRotate: function(t, n) {
				var r = this.getBoundsNoRotate(n);
				return t.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / r.width).plus(r.getTopLeft());
			},
			pointFromPixel: function(e, t) {
				return this.pointFromPixelNoRotate(e, t).rotate(-this.getRotation(t), this.getCenter(t));
			},
			_viewportToImageDelta: function(t, n) {
				var r = this._contentBoundsNoRotate.width;
				return new e.Point(t * this._contentSizeNoRotate.x / r, n * this._contentSizeNoRotate.x / r);
			},
			viewportToImageCoordinates: function(t, n) {
				if (t instanceof e.Point) return this.viewportToImageCoordinates(t.x, t.y);
				if (this.viewer) {
					var r = this.viewer.world.getItemCount();
					if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
					else if (r === 1) return this.viewer.world.getItemAt(0).viewportToImageCoordinates(t, n, !0);
				}
				return this._viewportToImageDelta(t - this._contentBoundsNoRotate.x, n - this._contentBoundsNoRotate.y);
			},
			_imageToViewportDelta: function(t, n) {
				var r = this._contentBoundsNoRotate.width;
				return new e.Point(t / this._contentSizeNoRotate.x * r, n / this._contentSizeNoRotate.x * r);
			},
			imageToViewportCoordinates: function(t, n) {
				if (t instanceof e.Point) return this.imageToViewportCoordinates(t.x, t.y);
				if (this.viewer) {
					var r = this.viewer.world.getItemCount();
					if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
					else if (r === 1) return this.viewer.world.getItemAt(0).imageToViewportCoordinates(t, n, !0);
				}
				var i = this._imageToViewportDelta(t, n);
				return i.x += this._contentBoundsNoRotate.x, i.y += this._contentBoundsNoRotate.y, i;
			},
			imageToViewportRectangle: function(t, n, r, i) {
				var a = t;
				if (a instanceof e.Rect || (a = new e.Rect(t, n, r, i)), this.viewer) {
					var o = this.viewer.world.getItemCount();
					if (o > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
					else if (o === 1) return this.viewer.world.getItemAt(0).imageToViewportRectangle(t, n, r, i, !0);
				}
				var s = this.imageToViewportCoordinates(a.x, a.y), c = this._imageToViewportDelta(a.width, a.height);
				return new e.Rect(s.x, s.y, c.x, c.y, a.degrees);
			},
			viewportToImageRectangle: function(t, n, r, i) {
				var a = t;
				if (a instanceof e.Rect || (a = new e.Rect(t, n, r, i)), this.viewer) {
					var o = this.viewer.world.getItemCount();
					if (o > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
					else if (o === 1) return this.viewer.world.getItemAt(0).viewportToImageRectangle(t, n, r, i, !0);
				}
				var s = this.viewportToImageCoordinates(a.x, a.y), c = this._viewportToImageDelta(a.width, a.height);
				return new e.Rect(s.x, s.y, c.x, c.y, a.degrees);
			},
			viewerElementToImageCoordinates: function(e) {
				var t = this.pointFromPixel(e, !0);
				return this.viewportToImageCoordinates(t);
			},
			imageToViewerElementCoordinates: function(e) {
				var t = this.imageToViewportCoordinates(e);
				return this.pixelFromPoint(t, !0);
			},
			windowToImageCoordinates: function(t) {
				e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
				var n = t.minus(e.getElementPosition(this.viewer.element));
				return this.viewerElementToImageCoordinates(n);
			},
			imageToWindowCoordinates: function(t) {
				return e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer."), this.imageToViewerElementCoordinates(t).plus(e.getElementPosition(this.viewer.element));
			},
			viewerElementToViewportCoordinates: function(e) {
				return this.pointFromPixel(e, !0);
			},
			viewportToViewerElementCoordinates: function(e) {
				return this.pixelFromPoint(e, !0);
			},
			viewerElementToViewportRectangle: function(t) {
				return e.Rect.fromSummits(this.pointFromPixel(t.getTopLeft(), !0), this.pointFromPixel(t.getTopRight(), !0), this.pointFromPixel(t.getBottomLeft(), !0));
			},
			viewportToViewerElementRectangle: function(t) {
				return e.Rect.fromSummits(this.pixelFromPoint(t.getTopLeft(), !0), this.pixelFromPoint(t.getTopRight(), !0), this.pixelFromPoint(t.getBottomLeft(), !0));
			},
			windowToViewportCoordinates: function(t) {
				e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
				var n = t.minus(e.getElementPosition(this.viewer.element));
				return this.viewerElementToViewportCoordinates(n);
			},
			viewportToWindowCoordinates: function(t) {
				return e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer."), this.viewportToViewerElementCoordinates(t).plus(e.getElementPosition(this.viewer.element));
			},
			viewportToImageZoom: function(t) {
				if (this.viewer) {
					var n = this.viewer.world.getItemCount();
					if (n > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
					else if (n === 1) return this.viewer.world.getItemAt(0).viewportToImageZoom(t);
				}
				var r = this._contentSizeNoRotate.x, i = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width;
				return t * (i / r * a);
			},
			imageToViewportZoom: function(t) {
				if (this.viewer) {
					var n = this.viewer.world.getItemCount();
					if (n > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image. Instead, use [TiledImage.imageToViewportZoom] for the specific image of interest");
					else if (n === 1) return this.viewer.world.getItemAt(0).imageToViewportZoom(t);
				}
				var r = this._contentSizeNoRotate.x, i = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width;
				return t * (r / i / a);
			},
			toggleFlip: function() {
				return this.setFlip(!this.getFlip()), this;
			},
			getFlip: function() {
				return this.flipped;
			},
			setFlip: function(e) {
				return this.flipped === e ? this : (this.flipped = e, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: e }), this);
			},
			getMaxZoomPixelRatio: function() {
				return this.maxZoomPixelRatio;
			},
			setMaxZoomPixelRatio: function(t, n = !0, r = !1) {
				e.console.assert(!isNaN(t), "[Viewport.setMaxZoomPixelRatio] ratio must be a number"), !isNaN(t) && (this.maxZoomPixelRatio = t, n && this.getZoom() > this.getMaxZoom() && this.applyConstraints(r));
			}
		};
	})(n), (function(e) {
		e.TiledImage = function(t) {
			this._initialized = !1, e.console.assert(t.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(t.drawer, "[TiledImage] options.drawer is required"), e.console.assert(t.viewer, "[TiledImage] options.viewer is required"), e.console.assert(t.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(t.source, "[TiledImage] options.source is required"), e.console.assert(!t.clip || t.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = t.tileCache, delete t.tileCache, this._drawer = t.drawer, delete t.drawer, this._imageLoader = t.imageLoader, delete t.imageLoader, t.clip instanceof e.Rect && (this._clip = t.clip.clone()), delete t.clip;
			var r = t.x || 0;
			delete t.x;
			var i = t.y || 0;
			delete t.y, this.normHeight = t.source.dimensions.y / t.source.dimensions.x, this.contentAspectX = t.source.dimensions.x / t.source.dimensions.y;
			var a = 1;
			t.width ? (a = t.width, delete t.width, t.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete t.height)) : t.height && (a = t.height / this.normHeight, delete t.height);
			var o = t.fitBounds;
			delete t.fitBounds;
			var s = t.fitBoundsPlacement || n.Placement.CENTER;
			delete t.fitBoundsPlacement;
			var c = t.degrees || 0;
			delete t.degrees;
			var l = t.ajaxHeaders;
			delete t.ajaxHeaders, e.extend(!0, this, {
				viewer: null,
				tilesMatrix: {},
				coverage: {},
				loadingCoverage: {},
				lastDrawn: [],
				lastResetTime: 0,
				_needsDraw: !0,
				_needsUpdate: !0,
				_hasOpaqueTile: !1,
				_tilesLoading: 0,
				_tilesToDraw: [],
				_lastDrawn: [],
				_isBlending: !1,
				_wasBlending: !1,
				_isTainted: !1,
				springStiffness: e.DEFAULT_SETTINGS.springStiffness,
				animationTime: e.DEFAULT_SETTINGS.animationTime,
				minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
				wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
				wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
				immediateRender: e.DEFAULT_SETTINGS.immediateRender,
				blendTime: e.DEFAULT_SETTINGS.blendTime,
				alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend,
				minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio,
				smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
				iOSDevice: e.DEFAULT_SETTINGS.iOSDevice,
				debugMode: e.DEFAULT_SETTINGS.debugMode,
				crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy,
				ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials,
				placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle,
				opacity: e.DEFAULT_SETTINGS.opacity,
				preload: e.DEFAULT_SETTINGS.preload,
				compositeOperation: e.DEFAULT_SETTINGS.compositeOperation,
				subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency,
				maxTilesPerFrame: e.DEFAULT_SETTINGS.maxTilesPerFrame
			}, t), this._preload = this.preload, delete this.preload, this._fullyLoaded = !1, this._xSpring = new e.Spring({
				initial: r,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this._ySpring = new e.Spring({
				initial: i,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this._scaleSpring = new e.Spring({
				initial: a,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this._degreesSpring = new e.Spring({
				initial: c,
				springStiffness: this.springStiffness,
				animationTime: this.animationTime
			}), this._updateForScale(), o && this.fitBounds(o, s, !0), this._ownAjaxHeaders = {}, this.setAjaxHeaders(l, !1), this._initialized = !0;
		}, e.extend(e.TiledImage.prototype, e.EventSource.prototype, {
			needsDraw: function() {
				return this._needsDraw;
			},
			redraw: function() {
				this._needsDraw = !0;
			},
			getFullyLoaded: function() {
				return this._fullyLoaded;
			},
			_setFullyLoaded: function(e) {
				e !== this._fullyLoaded && (this._fullyLoaded = e, this.raiseEvent("fully-loaded-change", { fullyLoaded: this._fullyLoaded }));
			},
			reset: function() {
				this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = !0;
			},
			update: function(e) {
				let t = this._xSpring.update(), n = this._ySpring.update(), r = this._scaleSpring.update(), i = this._degreesSpring.update(), a = t || n || r || i || this._needsUpdate;
				if (a || e || !this._fullyLoaded) {
					let e = this._updateLevelsForViewport();
					this._setFullyLoaded(e);
				}
				return this._needsUpdate = !1, a ? (this._updateForScale(), this._raiseBoundsChange(), this._needsDraw = !0, !0) : !1;
			},
			setDrawn: function() {
				return this._needsDraw = this._isBlending || this._wasBlending, this._needsDraw;
			},
			setTainted(e) {
				this._isTainted = e;
			},
			isTainted() {
				return this._isTainted;
			},
			destroy: function() {
				this.reset(), this.source.destroy && this.source.destroy(this.viewer);
			},
			getBounds: function(e) {
				return this.getBoundsNoRotate(e).rotate(this.getRotation(e), this._getRotationPoint(e));
			},
			getBoundsNoRotate: function(t) {
				return t ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget);
			},
			getWorldBounds: function() {
				return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
			},
			getClippedBounds: function(t) {
				var n = this.getBoundsNoRotate(t);
				if (this._clip) {
					var r = (t ? this._worldWidthCurrent : this._worldWidthTarget) / this.source.dimensions.x, i = this._clip.times(r);
					n = new e.Rect(n.x + i.x, n.y + i.y, i.width, i.height);
				}
				return n.rotate(this.getRotation(t), this._getRotationPoint(t));
			},
			getTileBounds: function(e, t, n) {
				var r = this.source.getNumTiles(e), i = (r.x + t % r.x) % r.x, a = (r.y + n % r.y) % r.y, o = this.source.getTileBounds(e, i, a);
				return this.getFlip() && (o.x = Math.max(0, 1 - o.x - o.width)), o.x += (t - i) / r.x, o.y += this._worldHeightCurrent / this._worldWidthCurrent * ((n - a) / r.y), o;
			},
			getContentSize: function() {
				return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
			},
			getSizeInWindowCoordinates: function() {
				var t = this.imageToWindowCoordinates(new e.Point(0, 0)), n = this.imageToWindowCoordinates(this.getContentSize());
				return new e.Point(n.x - t.x, n.y - t.y);
			},
			_viewportToImageDelta: function(t, n, r) {
				var i = r ? this._scaleSpring.current.value : this._scaleSpring.target.value;
				return new e.Point(t * (this.source.dimensions.x / i), n * (this.source.dimensions.y * this.contentAspectX / i));
			},
			viewportToImageCoordinates: function(t, n, r) {
				var i;
				return t instanceof e.Point ? (r = n, i = t) : i = new e.Point(t, n), i = i.rotate(-this.getRotation(r), this._getRotationPoint(r)), r ? this._viewportToImageDelta(i.x - this._xSpring.current.value, i.y - this._ySpring.current.value) : this._viewportToImageDelta(i.x - this._xSpring.target.value, i.y - this._ySpring.target.value);
			},
			_imageToViewportDelta: function(t, n, r) {
				var i = r ? this._scaleSpring.current.value : this._scaleSpring.target.value;
				return new e.Point(t / this.source.dimensions.x * i, n / this.source.dimensions.y / this.contentAspectX * i);
			},
			imageToViewportCoordinates: function(t, n, r) {
				t instanceof e.Point && (r = n, n = t.y, t = t.x);
				var i = this._imageToViewportDelta(t, n, r);
				return r ? (i.x += this._xSpring.current.value, i.y += this._ySpring.current.value) : (i.x += this._xSpring.target.value, i.y += this._ySpring.target.value), i.rotate(this.getRotation(r), this._getRotationPoint(r));
			},
			imageToViewportRectangle: function(t, n, r, i, a) {
				var o = t;
				o instanceof e.Rect ? a = n : o = new e.Rect(t, n, r, i);
				var s = this.imageToViewportCoordinates(o.getTopLeft(), a), c = this._imageToViewportDelta(o.width, o.height, a);
				return new e.Rect(s.x, s.y, c.x, c.y, o.degrees + this.getRotation(a));
			},
			viewportToImageRectangle: function(t, n, r, i, a) {
				var o = t;
				t instanceof e.Rect ? a = n : o = new e.Rect(t, n, r, i);
				var s = this.viewportToImageCoordinates(o.getTopLeft(), a), c = this._viewportToImageDelta(o.width, o.height, a);
				return new e.Rect(s.x, s.y, c.x, c.y, o.degrees - this.getRotation(a));
			},
			viewerElementToImageCoordinates: function(e) {
				var t = this.viewport.pointFromPixel(e, !0);
				return this.viewportToImageCoordinates(t);
			},
			imageToViewerElementCoordinates: function(e) {
				var t = this.imageToViewportCoordinates(e);
				return this.viewport.pixelFromPoint(t, !0);
			},
			windowToImageCoordinates: function(e) {
				var t = e.minus(n.getElementPosition(this.viewer.element));
				return this.viewerElementToImageCoordinates(t);
			},
			imageToWindowCoordinates: function(e) {
				return this.imageToViewerElementCoordinates(e).plus(n.getElementPosition(this.viewer.element));
			},
			_viewportToTiledImageRectangle: function(t) {
				var n = this._scaleSpring.current.value;
				return t = t.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new e.Rect((t.x - this._xSpring.current.value) / n, (t.y - this._ySpring.current.value) / n, t.width / n, t.height / n, t.degrees);
			},
			viewportToImageZoom: function(e) {
				return this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x * e;
			},
			imageToViewportZoom: function(e) {
				return e / (this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x);
			},
			setPosition: function(e, t) {
				var n = this._xSpring.target.value === e.x && this._ySpring.target.value === e.y;
				if (t) {
					if (n && this._xSpring.current.value === e.x && this._ySpring.current.value === e.y) return;
					this._xSpring.resetTo(e.x), this._ySpring.resetTo(e.y), this._needsDraw = !0, this._needsUpdate = !0;
				} else {
					if (n) return;
					this._xSpring.springTo(e.x), this._ySpring.springTo(e.y), this._needsDraw = !0, this._needsUpdate = !0;
				}
				n || this._raiseBoundsChange();
			},
			setWidth: function(e, t) {
				this._setScale(e, t);
			},
			setHeight: function(e, t) {
				this._setScale(e / this.normHeight, t);
			},
			setCroppingPolygons: function(t) {
				var n = function(t) {
					return t instanceof e.Point || typeof t.x == "number" && typeof t.y == "number";
				}, r = function(e) {
					return e.map(function(e) {
						try {
							if (n(e)) return {
								x: e.x,
								y: e.y
							};
							throw Error();
						} catch {
							throw Error("A Provided cropping polygon point is not supported");
						}
					});
				};
				try {
					if (!e.isArray(t)) throw Error("Provided cropping polygon is not an array");
					this._croppingPolygons = t.map(function(e) {
						return r(e);
					}), this._needsDraw = !0;
				} catch (t) {
					e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(t), this.resetCroppingPolygons();
				}
			},
			resetCroppingPolygons: function() {
				this._croppingPolygons = null, this._needsDraw = !0;
			},
			fitBounds: function(t, n, r) {
				n ||= e.Placement.CENTER;
				var i = e.Placement.properties[n], a = this.contentAspectX, o = 0, s = 0, c = 1, l = 1;
				if (this._clip && (a = this._clip.getAspectRatio(), c = this._clip.width / this.source.dimensions.x, l = this._clip.height / this.source.dimensions.y, t.getAspectRatio() > a ? (o = this._clip.x / this._clip.height * t.height, s = this._clip.y / this._clip.height * t.height) : (o = this._clip.x / this._clip.width * t.width, s = this._clip.y / this._clip.width * t.width)), t.getAspectRatio() > a) {
					var u = t.height / l, d = 0;
					i.isHorizontallyCentered ? d = (t.width - t.height * a) / 2 : i.isRight && (d = t.width - t.height * a), this.setPosition(new e.Point(t.x - o + d, t.y - s), r), this.setHeight(u, r);
				} else {
					var f = t.width / c, p = 0;
					i.isVerticallyCentered ? p = (t.height - t.width / a) / 2 : i.isBottom && (p = t.height - t.width / a), this.setPosition(new e.Point(t.x - o, t.y - s + p), r), this.setWidth(f, r);
				}
			},
			getClip: function() {
				return this._clip ? this._clip.clone() : null;
			},
			setClip: function(t) {
				e.console.assert(!t || t instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), t instanceof e.Rect ? this._clip = t.clone() : this._clip = null, this._needsUpdate = !0, this._needsDraw = !0, this.raiseEvent("clip-change");
			},
			getFlip: function() {
				return this.flipped;
			},
			setFlip: function(e) {
				this.flipped = e;
			},
			get flipped() {
				return this._flipped;
			},
			set flipped(e) {
				let t = this._flipped !== !!e;
				this._flipped = !!e, t && (this.update(!0), this._needsDraw = !0, this._raiseBoundsChange());
			},
			get wrapHorizontal() {
				return this._wrapHorizontal;
			},
			set wrapHorizontal(e) {
				let t = this._wrapHorizontal !== !!e;
				this._wrapHorizontal = !!e, this._initialized && t && (this.update(!0), this._needsDraw = !0);
			},
			get wrapVertical() {
				return this._wrapVertical;
			},
			set wrapVertical(e) {
				let t = this._wrapVertical !== !!e;
				this._wrapVertical = !!e, this._initialized && t && (this.update(!0), this._needsDraw = !0);
			},
			get debugMode() {
				return this._debugMode;
			},
			set debugMode(e) {
				this._debugMode = !!e, this._needsDraw = !0;
			},
			getOpacity: function() {
				return this.opacity;
			},
			setOpacity: function(e) {
				this.opacity = e;
			},
			get opacity() {
				return this._opacity;
			},
			set opacity(e) {
				e !== this.opacity && (this._opacity = e, this._needsDraw = !0, this.raiseEvent("opacity-change", { opacity: this.opacity }));
			},
			getPreload: function() {
				return this._preload;
			},
			setPreload: function(e) {
				this._preload = !!e, this._needsDraw = !0;
			},
			getRotation: function(e) {
				return e ? this._degreesSpring.current.value : this._degreesSpring.target.value;
			},
			setRotation: function(e, t) {
				this._degreesSpring.target.value === e && this._degreesSpring.isAtTargetValue() || (t ? this._degreesSpring.resetTo(e) : this._degreesSpring.springTo(e), this._needsDraw = !0, this._needsUpdate = !0, this._raiseBoundsChange());
			},
			getDrawArea: function() {
				if (this._opacity === 0 && !this._preload) return !1;
				var e = this._viewportToTiledImageRectangle(this.viewport.getBoundsWithMargins(!0));
				if (!this.wrapHorizontal && !this.wrapVertical) {
					var t = this._viewportToTiledImageRectangle(this.getClippedBounds(!0));
					e = e.intersection(t);
				}
				return e;
			},
			getTilesToDraw: function() {
				let e = this._tilesToDraw.flat();
				return this._updateTilesInViewport(e), e = this._tilesToDraw.flat(), e.forEach((e) => {
					e.tile.beingDrawn = !0;
				}), this._lastDrawn = e, e;
			},
			_getRotationPoint: function(e) {
				return this.getBoundsNoRotate(e).getCenter();
			},
			get compositeOperation() {
				return this._compositeOperation;
			},
			set compositeOperation(e) {
				e !== this._compositeOperation && (this._compositeOperation = e, this._needsDraw = !0, this.raiseEvent("composite-operation-change", { compositeOperation: this._compositeOperation }));
			},
			getCompositeOperation: function() {
				return this._compositeOperation;
			},
			setCompositeOperation: function(e) {
				this.compositeOperation = e;
			},
			setAjaxHeaders: function(t, n) {
				if (t === null && (t = {}), !e.isPlainObject(t)) {
					console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
					return;
				}
				this._ownAjaxHeaders = t, this._updateAjaxHeaders(n);
			},
			_updateAjaxHeaders: function(t) {
				if (t === void 0 && (t = !0), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, t) {
					var n, r, i, a;
					for (var o in this.tilesMatrix) for (var s in n = this.source.getNumTiles(o), this.tilesMatrix[o]) for (var c in r = (n.x + s % n.x) % n.x, this.tilesMatrix[o][s]) if (i = (n.y + c % n.y) % n.y, a = this.tilesMatrix[o][s][c], a.loadWithAjax = this.loadTilesWithAjax, a.loadWithAjax) {
						var l = this.source.getTileAjaxHeaders(o, r, i);
						a.ajaxHeaders = e.extend({}, this.ajaxHeaders, l);
					} else a.ajaxHeaders = null;
					for (var u = 0; u < this._imageLoader.jobQueue.length; u++) {
						var d = this._imageLoader.jobQueue[u];
						d.loadWithAjax = d.tile.loadWithAjax, d.ajaxHeaders = d.tile.loadWithAjax ? d.tile.ajaxHeaders : null;
					}
				}
			},
			_setScale: function(e, t) {
				var n = this._scaleSpring.target.value === e;
				if (t) {
					if (n && this._scaleSpring.current.value === e) return;
					this._scaleSpring.resetTo(e), this._updateForScale(), this._needsDraw = !0, this._needsUpdate = !0;
				} else {
					if (n) return;
					this._scaleSpring.springTo(e), this._updateForScale(), this._needsDraw = !0, this._needsUpdate = !0;
				}
				n || this._raiseBoundsChange();
			},
			_updateForScale: function() {
				this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
			},
			_raiseBoundsChange: function() {
				this.raiseEvent("bounds-change");
			},
			_isBottomItem: function() {
				return this.viewer.world.getItemAt(0) === this;
			},
			_getLevelsInterval: function() {
				var e = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))), t = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), !0).x * this._scaleSpring.current.value, n = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(t / this.minPixelRatio) / Math.log(2))));
				return n = Math.max(n, this.source.minLevel || 0), e = Math.min(e, n), {
					lowestLevel: e,
					highestLevel: n
				};
			},
			_updateLevelsForViewport: function() {
				var t = this._getLevelsInterval(), n = t.lowestLevel, r = t.highestLevel, i = [], a = this.getDrawArea(), o = e.now();
				if (this._lastDrawn.forEach((e) => {
					e.tile.beingDrawn = !1;
				}), this._tilesToDraw = [], this._tilesLoading = 0, this.loadingCoverage = {}, !a) return this._needsDraw = !1, this._fullyLoaded;
				var s = Array(r - n + 1);
				for (let e = 0, t = r; t >= n; t--, e++) s[e] = t;
				for (let e = r + 1; e <= this.source.maxLevel; e++) {
					var c = this.tilesMatrix[e] && this.tilesMatrix[e][0] && this.tilesMatrix[e][0][0];
					if (c && c.isBottomMost && c.isRightMost && c.loaded) {
						s.push(e);
						break;
					}
				}
				let l = !1;
				for (let e = 0; e < s.length; e++) {
					let t = s[e];
					var u = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(t), !0).x * this._scaleSpring.current.value;
					if (e === s.length - 1 || u >= this.minPixelRatio) l = !0;
					else if (!l) continue;
					var d = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(t), !1).x * this._scaleSpring.current.value, f = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), !1).x * this._scaleSpring.current.value, p = this.immediateRender ? 1 : f, m = Math.min(1, (u - .5) / .5), h = p / Math.abs(p - d), g = this._updateLevel(t, m, h, a, o, i);
					i = g.bestTiles;
					var _ = g.updatedTiles.filter((e) => e.loaded), v = (function(e, t, n) {
						return function(r) {
							return {
								tile: r,
								level: e,
								levelOpacity: t,
								currentTime: n
							};
						};
					})(t, m, o);
					if (this._tilesToDraw[t] = _.map(v), this._providesCoverage(this.coverage, t)) break;
				}
				return i && i.length > 0 ? (i.forEach(function(e) {
					e && !e.context2D && this._loadTile(e, o);
				}, this), this._needsDraw = !0, !1) : this._tilesLoading === 0;
			},
			_updateTilesInViewport: function(t) {
				let n = e.now(), r = this;
				this._tilesLoading = 0, this._wasBlending = this._isBlending, this._isBlending = !1, this.loadingCoverage = {};
				let i = t.length ? t[0].level : 0;
				if (!this.getDrawArea()) return;
				function a(e) {
					let t = e.tile;
					if (t && t.loaded) {
						let a = r._blendTile(t, t.x, t.y, e.level, e.levelOpacity, n, i);
						r._isBlending = r._isBlending || a, r._needsDraw = r._needsDraw || a || r._wasBlending;
					}
				}
				let o = 0;
				for (let e = 0; e < t.length; e++) {
					let n = t[e];
					a(n), this._providesCoverage(this.coverage, n.level) && (o = Math.max(o, n.level));
				}
				if (o > 0) for (let e in this._tilesToDraw) e < o && delete this._tilesToDraw[e];
			},
			_blendTile: function(e, t, n, r, i, a, o) {
				let s = 1e3 * this.blendTime, c, l;
				return e.blendStart ||= a, c = a - e.blendStart, l = s ? Math.min(1, c / s) : 1, r === o && (l = 1, c = s), this.alwaysBlend && (l *= i), e.opacity = l, l === 1 && (this._setCoverage(this.coverage, r, t, n, !0), this._hasOpaqueTile = !0), c < s;
			},
			_updateLevel: function(e, t, n, r, i, a) {
				var o = r.getBoundingBox().getTopLeft(), s = r.getBoundingBox().getBottomRight();
				this.viewer && this.viewer.raiseEvent("update-level", {
					tiledImage: this,
					havedrawn: !0,
					level: e,
					opacity: t,
					visibility: n,
					drawArea: r,
					topleft: o,
					bottomright: s,
					currenttime: i,
					best: a
				}), this._resetCoverage(this.coverage, e), this._resetCoverage(this.loadingCoverage, e);
				var c = this._getCornerTiles(e, o, s), l = c.topLeft, u = c.bottomRight, d = this.source.getNumTiles(e), f = this.viewport.pixelFromPoint(this.viewport.getCenter());
				this.getFlip() && (u.x += 1, this.wrapHorizontal || (u.x = Math.min(u.x, d.x - 1)));
				for (var p = Math.max(0, (u.x - l.x) * (u.y - l.y)), m = Array(p), h = 0, g = l.x; g <= u.x; g++) for (var _ = l.y; _ <= u.y; _++) {
					var v;
					if (this.getFlip()) {
						var y = (d.x + g % d.x) % d.x;
						v = g + d.x - y - y - 1;
					} else v = g;
					if (r.intersection(this.getTileBounds(e, v, _)) !== null) {
						var b = this._updateTile(v, _, e, n, f, d, i, a);
						a = b.bestTiles, m[h] = b.tile, h += 1;
					}
				}
				return {
					bestTiles: a,
					updatedTiles: m
				};
			},
			_positionTile: function(t, n, r, i, a) {
				var o = t.bounds.getTopLeft();
				o.x *= this._scaleSpring.current.value, o.y *= this._scaleSpring.current.value, o.x += this._xSpring.current.value, o.y += this._ySpring.current.value;
				var s = t.bounds.getSize();
				s.x *= this._scaleSpring.current.value, s.y *= this._scaleSpring.current.value, t.positionedBounds.x = o.x, t.positionedBounds.y = o.y, t.positionedBounds.width = s.x, t.positionedBounds.height = s.y;
				var c = r.pixelFromPointNoRotate(o, !0), l = r.pixelFromPointNoRotate(o, !1), u = r.deltaPixelsFromPointsNoRotate(s, !0), d = r.deltaPixelsFromPointsNoRotate(s, !1), f = l.plus(d.divide(2)), p = i.squaredDistanceTo(f);
				this.viewer.drawer.minimumOverlapRequired(this) && (n || (u = u.plus(new e.Point(1, 1))), t.isRightMost && this.wrapHorizontal && (u.x += .75), t.isBottomMost && this.wrapVertical && (u.y += .75)), t.position = c, t.size = u, t.squaredDistance = p, t.visibility = a;
			},
			_updateTile: function(e, t, n, r, i, a, o, s) {
				var c = this._getTile(e, t, n, o, a);
				this.viewer && this.viewer.raiseEvent("update-tile", {
					tiledImage: this,
					tile: c
				}), this._setCoverage(this.coverage, n, e, t, !1);
				var l = c.loaded || c.loading || this._isCovered(this.loadingCoverage, n, e, t);
				if (this._setCoverage(this.loadingCoverage, n, e, t, l), !c.exists) return {
					bestTiles: s,
					tile: c
				};
				if (c.loaded && c.opacity === 1 && this._setCoverage(this.coverage, n, e, t, !0), this._positionTile(c, this.source.tileOverlap, this.viewport, i, r), !c.loaded) if (c.context2D) this._setTileLoaded(c);
				else {
					var u = this._tileCache.getImageRecord(c.cacheKey);
					u && this._setTileLoaded(c, u.getData());
				}
				return c.loading ? this._tilesLoading++ : l || (s = this._compareTiles(s, c, this.maxTilesPerFrame)), {
					bestTiles: s,
					tile: c
				};
			},
			_getCornerTiles: function(t, n, r) {
				var i, a;
				this.wrapHorizontal ? (i = e.positiveModulo(n.x, 1), a = e.positiveModulo(r.x, 1)) : (i = Math.max(0, n.x), a = Math.min(1, r.x));
				var o, s, c = 1 / this.source.aspectRatio;
				this.wrapVertical ? (o = e.positiveModulo(n.y, c), s = e.positiveModulo(r.y, c)) : (o = Math.max(0, n.y), s = Math.min(c, r.y));
				var l = this.source.getTileAtPoint(t, new e.Point(i, o)), u = this.source.getTileAtPoint(t, new e.Point(a, s)), d = this.source.getNumTiles(t);
				return this.wrapHorizontal && (l.x += d.x * Math.floor(n.x), u.x += d.x * Math.floor(r.x)), this.wrapVertical && (l.y += d.y * Math.floor(n.y / c), u.y += d.y * Math.floor(r.y / c)), {
					topLeft: l,
					bottomRight: u
				};
			},
			_getTile: function(t, n, r, i, a) {
				var o, s, c, l, u, d, f, p, m, h, g = this.tilesMatrix, _ = this.source;
				return g[r] || (g[r] = {}), g[r][t] || (g[r][t] = {}), (!g[r][t][n] || !g[r][t][n].flipped != !this.flipped) && (o = (a.x + t % a.x) % a.x, s = (a.y + n % a.y) % a.y, c = this.getTileBounds(r, t, n), l = _.getTileBounds(r, o, s, !0), u = _.tileExists(r, o, s), d = _.getTileUrl(r, o, s), f = _.getTilePostData(r, o, s), this.loadTilesWithAjax ? (p = _.getTileAjaxHeaders(r, o, s), e.isPlainObject(this.ajaxHeaders) && (p = e.extend({}, this.ajaxHeaders, p))) : p = null, m = _.getContext2D ? _.getContext2D(r, o, s) : void 0, h = new e.Tile(r, t, n, c, u, d, m, this.loadTilesWithAjax, p, l, f, _.getTileHashKey(r, o, s, d, p, f)), this.getFlip() ? o === 0 && (h.isRightMost = !0) : o === a.x - 1 && (h.isRightMost = !0), s === a.y - 1 && (h.isBottomMost = !0), h.flipped = this.flipped, g[r][t][n] = h), h = g[r][t][n], h.lastTouchTime = i, h;
			},
			_loadTile: function(e, t) {
				var n = this;
				e.loading = !0, this._imageLoader.addJob({
					src: e.getUrl(),
					tile: e,
					source: this.source,
					postData: e.postData,
					loadWithAjax: e.loadWithAjax,
					ajaxHeaders: e.ajaxHeaders,
					crossOriginPolicy: this.crossOriginPolicy,
					ajaxWithCredentials: this.ajaxWithCredentials,
					callback: function(r, i, a) {
						n._onTileLoad(e, t, r, i, a);
					},
					abort: function() {
						e.loading = !1;
					}
				});
			},
			_onTileLoad: function(t, n, r, i, a) {
				if (r) t.exists = !0;
				else {
					e.console.error("Tile %s failed to load: %s - error: %s", t, t.getUrl(), i), this.viewer.raiseEvent("tile-load-failed", {
						tile: t,
						tiledImage: this,
						time: n,
						message: i,
						tileRequest: a
					}), t.loading = !1, t.exists = !1;
					return;
				}
				if (n < this.lastResetTime) {
					e.console.warn("Ignoring tile %s loaded before reset: %s", t, t.getUrl()), t.loading = !1;
					return;
				}
				var o = this;
				(function() {
					var e = o.source.getClosestLevel();
					o._setTileLoaded(t, r, e, a);
				})();
			},
			_setTileLoaded: function(t, n, r, i) {
				var a = 0, o = !1, s = this;
				function c() {
					return o && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), a++, l;
				}
				function l() {
					a--, a === 0 && (t.loading = !1, t.loaded = !0, t.hasTransparency = s.source.hasTransparency(t.context2D, t.getUrl(), t.ajaxHeaders, t.postData), t.context2D || s._tileCache.cacheTile({
						data: n,
						tile: t,
						cutoff: r,
						tiledImage: s
					}), s.viewer.raiseEvent("tile-ready", {
						tile: t,
						tiledImage: s,
						tileRequest: i
					}), s._needsDraw = !0);
				}
				var u = c();
				this.viewer.raiseEvent("tile-loaded", {
					tile: t,
					tiledImage: this,
					tileRequest: i,
					get image() {
						return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), n;
					},
					data: n,
					getCompletionCallback: c
				}), o = !0, u();
			},
			_compareTiles: function(e, t, n) {
				return e ? (e.push(t), this._sortTiles(e), e.length > n && e.pop(), e) : [t];
			},
			_sortTiles: function(e) {
				e.sort(function(e, t) {
					return e === null ? 1 : t === null ? -1 : e.visibility === t.visibility ? e.squaredDistance - t.squaredDistance : t.visibility - e.visibility;
				});
			},
			_providesCoverage: function(e, t, n, r) {
				var i, a, o, s;
				if (!e[t]) return !1;
				if (n === void 0 || r === void 0) {
					for (o in i = e[t], i) if (Object.prototype.hasOwnProperty.call(i, o)) {
						for (s in a = i[o], a) if (Object.prototype.hasOwnProperty.call(a, s) && !a[s]) return !1;
					}
					return !0;
				}
				return e[t][n] === void 0 || e[t][n][r] === void 0 || e[t][n][r] === !0;
			},
			_isCovered: function(e, t, n, r) {
				return n === void 0 || r === void 0 ? this._providesCoverage(e, t + 1) : this._providesCoverage(e, t + 1, 2 * n, 2 * r) && this._providesCoverage(e, t + 1, 2 * n, 2 * r + 1) && this._providesCoverage(e, t + 1, 2 * n + 1, 2 * r) && this._providesCoverage(e, t + 1, 2 * n + 1, 2 * r + 1);
			},
			_setCoverage: function(t, n, r, i, a) {
				if (!t[n]) {
					e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", n);
					return;
				}
				t[n][r] || (t[n][r] = {}), t[n][r][i] = a;
			},
			_resetCoverage: function(e, t) {
				e[t] = {};
			}
		});
	})(n), (function(e) {
		var t = function(t) {
			e.console.assert(t, "[TileCache.cacheTile] options is required"), e.console.assert(t.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(t.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = t.tile, this.tiledImage = t.tiledImage;
		}, n = function(t) {
			e.console.assert(t, "[ImageRecord] options is required"), e.console.assert(t.data, "[ImageRecord] options.data is required"), this._tiles = [], t.create.apply(null, [
				this,
				t.data,
				t.ownerTile
			]), this._destroyImplementation = t.destroy.bind(null, this), this.getImage = t.getImage.bind(null, this), this.getData = t.getData.bind(null, this), this.getRenderedContext = t.getRenderedContext.bind(null, this);
		};
		n.prototype = {
			destroy: function() {
				this._destroyImplementation(), this._tiles = null;
			},
			addTile: function(t) {
				e.console.assert(t, "[ImageRecord.addTile] tile is required"), this._tiles.push(t);
			},
			removeTile: function(t) {
				for (var n = 0; n < this._tiles.length; n++) if (this._tiles[n] === t) {
					this._tiles.splice(n, 1);
					return;
				}
				e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", t);
			},
			getTileCount: function() {
				return this._tiles.length;
			}
		}, e.TileCache = function(t) {
			t ||= {}, this._maxImageCacheCount = t.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
		}, e.TileCache.prototype = {
			numTilesLoaded: function() {
				return this._tilesLoaded.length;
			},
			cacheTile: function(r) {
				e.console.assert(r, "[TileCache.cacheTile] options is required"), e.console.assert(r.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(r.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(r.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
				var i = r.cutoff || 0, a = this._tilesLoaded.length, o = this._imagesLoaded[r.tile.cacheKey];
				if (o || (r.data ||= (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), r.image), e.console.assert(r.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), o = this._imagesLoaded[r.tile.cacheKey] = new n({
					data: r.data,
					ownerTile: r.tile,
					create: r.tiledImage.source.createTileCache,
					destroy: r.tiledImage.source.destroyTileCache,
					getImage: r.tiledImage.source.getTileCacheDataAsImage,
					getData: r.tiledImage.source.getTileCacheData,
					getRenderedContext: r.tiledImage.source.getTileCacheDataAsContext2D
				}), this._imagesLoadedCount++), o.addTile(r.tile), r.tile.cacheImageRecord = o, this._imagesLoadedCount > this._maxImageCacheCount) {
					for (var s = null, c = -1, l = null, u, d, f, p, m, h, g = this._tilesLoaded.length - 1; g >= 0; g--) if (h = this._tilesLoaded[g], u = h.tile, !(u.level <= i || u.beingDrawn)) {
						if (!s) {
							s = u, c = g, l = h;
							continue;
						}
						p = u.lastTouchTime, d = s.lastTouchTime, m = u.level, f = s.level, (p < d || p === d && m > f) && (s = u, c = g, l = h);
					}
					s && c >= 0 && (this._unloadTile(l), a = c);
				}
				this._tilesLoaded[a] = new t({
					tile: r.tile,
					tiledImage: r.tiledImage
				});
			},
			clearTilesFor: function(t) {
				e.console.assert(t, "[TileCache.clearTilesFor] tiledImage is required");
				for (var n, r = 0; r < this._tilesLoaded.length; ++r) n = this._tilesLoaded[r], n.tiledImage === t && (this._unloadTile(n), this._tilesLoaded.splice(r, 1), r--);
			},
			getImageRecord: function(t) {
				return e.console.assert(t, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[t];
			},
			_unloadTile: function(t) {
				e.console.assert(t, "[TileCache._unloadTile] tileRecord is required");
				var n = t.tile, r = t.tiledImage;
				let i = n.getCanvasContext && n.getCanvasContext();
				n.unload(), n.cacheImageRecord = null;
				var a = this._imagesLoaded[n.cacheKey];
				a && (a.removeTile(n), a.getTileCount() || (a.destroy(), delete this._imagesLoaded[n.cacheKey], this._imagesLoadedCount--, i && (i.canvas.width = 0, i.canvas.height = 0, r.viewer.raiseEvent("image-unloaded", {
					context2D: i,
					tile: n
				}))), r.viewer.raiseEvent("tile-unloaded", {
					tile: n,
					tiledImage: r
				}));
			}
		};
	})(n), (function(e) {
		e.World = function(t) {
			var n = this;
			e.console.assert(t.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = t.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function(e) {
				n._autoRefigureSizes ? n._figureSizes() : n._needsSizesFigured = !0;
			}, this._figureSizes();
		}, e.extend(e.World.prototype, e.EventSource.prototype, {
			addItem: function(t, n) {
				if (e.console.assert(t, "[World.addItem] item is required"), e.console.assert(t instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), n ||= {}, n.index !== void 0) {
					var r = Math.max(0, Math.min(this._items.length, n.index));
					this._items.splice(r, 0, t);
				} else this._items.push(t);
				this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, t.addHandler("bounds-change", this._delegatedFigureSizes), t.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", { item: t });
			},
			getItemAt: function(t) {
				return e.console.assert(t !== void 0, "[World.getItemAt] index is required"), this._items[t];
			},
			getIndexOfItem: function(t) {
				return e.console.assert(t, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, t);
			},
			getItemCount: function() {
				return this._items.length;
			},
			setItemIndex: function(t, n) {
				e.console.assert(t, "[World.setItemIndex] item is required"), e.console.assert(n !== void 0, "[World.setItemIndex] index is required");
				var r = this.getIndexOfItem(t);
				if (n >= this._items.length) throw Error("Index bigger than number of layers.");
				n === r || r === -1 || (this._items.splice(r, 1), this._items.splice(n, 0, t), this._needsDraw = !0, this.raiseEvent("item-index-change", {
					item: t,
					previousIndex: r,
					newIndex: n
				}));
			},
			removeItem: function(t) {
				e.console.assert(t, "[World.removeItem] item is required");
				var n = e.indexOf(this._items, t);
				n !== -1 && (t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy(), this._items.splice(n, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(t));
			},
			removeAll: function() {
				this.viewer._cancelPendingImages();
				var e, t;
				for (t = 0; t < this._items.length; t++) e = this._items[t], e.removeHandler("bounds-change", this._delegatedFigureSizes), e.removeHandler("clip-change", this._delegatedFigureSizes), e.destroy();
				var n = this._items;
				for (this._items = [], this._figureSizes(), this._needsDraw = !0, t = 0; t < n.length; t++) e = n[t], this._raiseRemoveItem(e);
			},
			resetItems: function() {
				for (var e = 0; e < this._items.length; e++) this._items[e].reset();
			},
			update: function(e) {
				for (var t = !1, n = 0; n < this._items.length; n++) t = this._items[n].update(e) || t;
				return t;
			},
			draw: function() {
				this.viewer.drawer.draw(this._items), this._needsDraw = !1, this._items.forEach((e) => {
					this._needsDraw = e.setDrawn() || this._needsDraw;
				});
			},
			needsDraw: function() {
				for (var e = 0; e < this._items.length; e++) if (this._items[e].needsDraw()) return !0;
				return this._needsDraw;
			},
			getHomeBounds: function() {
				return this._homeBounds.clone();
			},
			getContentFactor: function() {
				return this._contentFactor;
			},
			setAutoRefigureSizes: function(e) {
				this._autoRefigureSizes = e, e & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1);
			},
			arrange: function(t) {
				t ||= {};
				var n = t.immediately || !1, r = t.layout || e.DEFAULT_SETTINGS.collectionLayout, i = t.rows || e.DEFAULT_SETTINGS.collectionRows, a = t.columns || e.DEFAULT_SETTINGS.collectionColumns, o = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, s = o + (t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin), c = !t.rows && a ? a : Math.ceil(this._items.length / i), l = 0, u = 0, d, f, p, m, h;
				this.setAutoRefigureSizes(!1);
				for (var g = 0; g < this._items.length; g++) g && g % c === 0 && (r === "horizontal" ? (u += s, l = 0) : (l += s, u = 0)), d = this._items[g], f = d.getBounds(), p = f.width > f.height ? o : o * (f.width / f.height), m = p * (f.height / f.width), h = new e.Point(l + (o - p) / 2, u + (o - m) / 2), d.setPosition(h, n), d.setWidth(p, n), r === "horizontal" ? l += s : u += s;
				this.setAutoRefigureSizes(!0);
			},
			_figureSizes: function() {
				var t = this._homeBounds ? this._homeBounds.clone() : null, n = this._contentSize ? this._contentSize.clone() : null, r = this._contentFactor || 0;
				if (!this._items.length) this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
				else {
					var i = this._items[0], a = i.getBounds();
					this._contentFactor = i.getContentSize().x / a.width;
					for (var o = i.getClippedBounds().getBoundingBox(), s = o.x, c = o.y, l = o.x + o.width, u = o.y + o.height, d = 1; d < this._items.length; d++) i = this._items[d], a = i.getBounds(), this._contentFactor = Math.max(this._contentFactor, i.getContentSize().x / a.width), o = i.getClippedBounds().getBoundingBox(), s = Math.min(s, o.x), c = Math.min(c, o.y), l = Math.max(l, o.x + o.width), u = Math.max(u, o.y + o.height);
					this._homeBounds = new e.Rect(s, c, l - s, u - c), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor);
				}
				(this._contentFactor !== r || !this._homeBounds.equals(t) || !this._contentSize.equals(n)) && this.raiseEvent("metrics-change", {});
			},
			_raiseRemoveItem: function(e) {
				this.raiseEvent("remove-item", { item: e });
			}
		});
	})(n);
})), G = /* @__PURE__ */ t(((e, t) => {
	var n = _(), r = u();
	function i(e, t) {
		var i = -1, a = r(e) ? Array(e.length) : [];
		return n(e, function(e, n, r) {
			a[++i] = t(e, n, r);
		}), a;
	}
	t.exports = i;
})), K = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		var n = e.length;
		for (e.sort(t); n--;) e[n] = e[n].value;
		return e;
	}
	t.exports = n;
})), ce = /* @__PURE__ */ t(((e, t) => {
	var n = f();
	function r(e, t) {
		if (e !== t) {
			var r = e !== void 0, i = e === null, a = e === e, o = n(e), s = t !== void 0, c = t === null, l = t === t, u = n(t);
			if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !r && l || !a) return 1;
			if (!i && !o && !u && e < t || u && r && a && !i && !o || c && r && a || !s && a || !l) return -1;
		}
		return 0;
	}
	t.exports = r;
})), le = /* @__PURE__ */ t(((e, t) => {
	var n = ce();
	function r(e, t, r) {
		for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = r.length; ++i < s;) {
			var l = n(a[i], o[i]);
			if (l) return i >= c ? l : l * (r[i] == "desc" ? -1 : 1);
		}
		return e.index - t.index;
	}
	t.exports = r;
})), ue = /* @__PURE__ */ t(((e, t) => {
	var r = S(), i = R(), o = x(), s = G(), c = K(), l = a(), u = le(), f = d(), p = n();
	function m(e, t, n) {
		t = t.length ? r(t, function(e) {
			return p(e) ? function(t) {
				return i(t, e.length === 1 ? e[0] : e);
			} : e;
		}) : [f];
		var a = -1;
		return t = r(t, l(o)), c(s(e, function(e, n, i) {
			return {
				criteria: r(t, function(t) {
					return t(e);
				}),
				index: ++a,
				value: e
			};
		}), function(e, t) {
			return u(e, t, n);
		});
	}
	t.exports = m;
})), de = /* @__PURE__ */ t(((e, t) => {
	var n = l(), r = u(), i = h(), a = j();
	function o(e, t, o) {
		if (!a(o)) return !1;
		var s = typeof t;
		return (s == "number" ? r(o) && i(t, o.length) : s == "string" && t in o) ? n(o[t], e) : !1;
	}
	t.exports = o;
})), fe = /* @__PURE__ */ t(((e, t) => {
	var n = F(), r = ue(), i = T(), a = de();
	t.exports = i(function(e, t) {
		if (e == null) return [];
		var i = t.length;
		return i > 1 && a(e, t[0], t[1]) ? t = [] : i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]), r(e, n(t, 1), []);
	});
})), pe = /* @__PURE__ */ t(((e, t) => {
	var n = w(), r = F(), i = I();
	function a(e, t, a) {
		var o = e.length;
		if (o < 2) return o ? i(e[0]) : [];
		for (var s = -1, c = Array(o); ++s < o;) for (var l = e[s], u = -1; ++u < o;) u != s && (c[s] = n(c[s] || l, e[u], t, a));
		return i(r(c, 1), t, a);
	}
	t.exports = a;
})), me = /* @__PURE__ */ t(((e, t) => {
	var n = c(), r = T(), i = pe(), a = P();
	t.exports = r(function(e) {
		return i(n(e, a));
	});
})), q = /* @__PURE__ */ e(D()), he = /* @__PURE__ */ e(ne());
i();
var ge = /* @__PURE__ */ e(ee()), _e = /* @__PURE__ */ e(ae()), ve = /* @__PURE__ */ e(U()), ye = /* @__PURE__ */ e(W()), be = /* @__PURE__ */ e(fe()), xe = /* @__PURE__ */ e(me()), J = /* @__PURE__ */ e(se());
function Se(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ce(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Te(r.key), r);
	}
}
function we(e, t, n) {
	return t && Ce(e.prototype, t), n && Ce(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Te(e) {
	var t = Ee(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ee(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var De = /*#__PURE__*/ function() {
	function e(t, n) {
		Se(this, e), this.viewer = t, this.ref = n, this.containerWidth = 0, this.containerHeight = 0, this.imgAspectRatio = 1;
	}
	return we(e, [
		{
			key: "canvas",
			get: function() {
				return this.canvasDiv.firstElementChild;
			}
		},
		{
			key: "canvasDiv",
			get: function() {
				return this.ref.current;
			}
		},
		{
			key: "context2d",
			get: function() {
				return this.canvas.getContext("2d");
			}
		},
		{
			key: "clear",
			value: function() {
				this.context2d.clearRect(0, 0, this.containerWidth, this.containerHeight);
			}
		},
		{
			key: "resize",
			value: function() {
				this.containerWidth !== this.viewer.container.clientWidth && (this.containerWidth = this.viewer.container.clientWidth, this.canvasDiv.setAttribute("width", this.containerWidth), this.canvas.setAttribute("width", this.containerWidth)), this.containerHeight !== this.viewer.container.clientHeight && (this.containerHeight = this.viewer.container.clientHeight, this.canvasDiv.setAttribute("height", this.containerHeight), this.canvas.setAttribute("height", this.containerHeight)), this.viewportOrigin = new J.default.Point(0, 0);
				var e = this.viewer.viewport.getBoundsNoRotateWithMargins(!0);
				this.viewportOrigin.x = e.x, this.viewportOrigin.y = e.y * this.imgAspectRatio, this.viewportWidth = e.width, this.viewportHeight = e.height * this.imgAspectRatio;
				var t = this.viewer.world.getItemAt(0);
				t && (this.imgWidth = t.source.dimensions.x, this.imgHeight = t.source.dimensions.y, this.imgAspectRatio = this.imgWidth / this.imgHeight);
			}
		},
		{
			key: "canvasUpdate",
			value: function(e) {
				var t = this.viewer.viewport.getZoom(!0), n = this.viewer.world.getItemAt(0);
				if (n) {
					var r = n.viewportToImageZoom(t), i = (this.viewportOrigin.x / this.imgWidth - this.viewportOrigin.x) / this.viewportWidth * this.containerWidth, a = (this.viewportOrigin.y / this.imgHeight - this.viewportOrigin.y) / this.viewportHeight * this.containerHeight;
					this.clearBeforeRedraw && this.clear(), this.context2d.translate(i, a), this.context2d.scale(r, r);
					var o = this.viewer.viewport.getCenter();
					this.viewer.viewport.getFlip() && (this.context2d.translate(o.x * 2, 0), this.context2d.scale(-1, 1));
					var s = this.viewer.viewport.getRotation();
					s !== 0 && (this.context2d.translate(o.x, o.y), this.context2d.rotate(s * Math.PI / 180), this.context2d.translate(-1 * o.x, -1 * o.y)), e(), this.context2d.setTransform(1, 0, 0, 1, 0, 0);
				}
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/lib/CanvasAnnotationDisplay.js
function Oe(e) {
	return Me(e) || je(e) || Ae(e) || ke();
}
function ke() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ae(e, t) {
	if (e) {
		if (typeof e == "string") return Ne(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ne(e, t) : void 0;
	}
}
function je(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Me(e) {
	if (Array.isArray(e)) return Ne(e);
}
function Ne(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Pe(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Fe(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Le(r.key), r);
	}
}
function Ie(e, t, n) {
	return t && Fe(e.prototype, t), n && Fe(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Le(e) {
	var t = Re(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Re(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ze = /*#__PURE__*/ function() {
	function e(t) {
		var n = t.resource, r = t.palette, i = t.zoomRatio, a = t.offset, o = t.selected, s = t.hovered;
		Pe(this, e), this.resource = n, this.palette = r, this.zoomRatio = i, this.offset = a, this.selected = o, this.hovered = s;
	}
	return Ie(e, [
		{
			key: "toContext",
			value: function(e) {
				this.context = e, this.resource.svgSelector ? this.svgContext() : this.resource.fragmentSelector && this.fragmentContext();
			}
		},
		{
			key: "svgString",
			get: function() {
				return this.resource.svgSelector.value;
			}
		},
		{
			key: "svgContext",
			value: function() {
				var e = this, t = this.hovered ? this.palette.hovered : this.selected ? this.palette.selected : this.palette.default;
				t.globalAlpha !== 0 && Oe(this.svgPaths).forEach(function(n) {
					e.context.save(), e.context.translate(e.offset.x, e.offset.y);
					var r = new Path2D(n.attributes.d.nodeValue);
					e.context.strokeStyle = e.color, n.attributes["stroke-dasharray"] && e.context.setLineDash(n.attributes["stroke-dasharray"].nodeValue.split(","));
					var i = {
						fill: "fillStyle",
						stroke: "strokeStyle",
						"stroke-dashoffset": "lineDashOffset",
						"stroke-linecap": "lineCap",
						"stroke-linejoin": "lineJoin",
						"stroke-miterlimit": "miterlimit",
						"stroke-width": "lineWidth"
					};
					Object.keys(i).forEach(function(t) {
						n.attributes[t] && (e.context[i[t]] = n.attributes[t].nodeValue);
					}), e.context.lineWidth /= e.zoomRatio, (e.selected || e.hovered) && (e.context.strokeStyle = t.strokeStyle || t.fillStyle), n.attributes["stroke-opacity"] ? e.context.globalAlpha = t.globalAlpha * n.attributes["stroke-opacity"].nodeValue : e.context.globalAlpha = t.globalAlpha, e.context.stroke(r), n.attributes.fill && n.attributes.fill.nodeValue !== "none" && (n.attributes["fill-opacity"] ? e.context.globalAlpha = t.globalAlpha * n.attributes["fill-opacity"].nodeValue : e.context.globalAlpha = t.globalAlpha, e.context.fill(r)), e.context.restore();
				});
			}
		},
		{
			key: "fragmentContext",
			value: function() {
				var e = this, t = this.resource.fragmentSelector;
				t[0] += this.offset.x, t[1] += this.offset.y;
				var n = this.selected ? this.palette.selected : this.hovered ? this.palette.hovered : this.palette.default;
				if (this.context.save(), Object.keys(n).forEach(function(t) {
					e.context[t] = n[t];
				}), n.globalAlpha !== 0) {
					if (n.fillStyle) {
						var r;
						(r = this.context).fillRect.apply(r, Oe(t));
					} else {
						var i;
						this.context.lineWidth = 1 / this.zoomRatio, (i = this.context).strokeRect.apply(i, Oe(t));
					}
					this.context.restore();
				}
			}
		},
		{
			key: "svgPaths",
			get: function() {
				return new DOMParser().parseFromString(this.svgString, "text/xml").getElementsByTagName("path");
			}
		}
	]);
}();
//#endregion
//#region node_modules/mirador/dist/es/src/components/AnnotationsOverlay.js
function Be(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Y(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Be(Object(n), !0).forEach(function(t) {
			Ve(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ve(e, t, n) {
	return (t = tt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function He(e) {
	return Ge(e) || We(e) || Je(e) || Ue();
}
function Ue() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function We(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ge(e) {
	if (Array.isArray(e)) return Ye(e);
}
function Ke(e, t) {
	return Ze(e) || Xe(e, t) || Je(e, t) || qe();
}
function qe() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Je(e, t) {
	if (e) {
		if (typeof e == "string") return Ye(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ye(e, t) : void 0;
	}
}
function Ye(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Xe(e, t) {
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
function Ze(e) {
	if (Array.isArray(e)) return e;
}
function Qe(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $e(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, tt(r.key), r);
	}
}
function et(e, t, n) {
	return t && $e(e.prototype, t), n && $e(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tt(e) {
	var t = nt(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function nt(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function rt(e, t, n) {
	return t = X(t), it(e, ot() ? Reflect.construct(t, n || [], X(e).constructor) : t.apply(e, n));
}
function it(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return at(e);
}
function at(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ot() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (ot = function() {
		return !!e;
	})();
}
function X(e) {
	return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, X(e);
}
function st(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ct(e, t);
}
function ct(e, t) {
	return ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ct(e, t);
}
var lt = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Qe(this, t), n = rt(this, t, [e]), n.ref = /*#__PURE__*/ q.createRef(), n.osdCanvasOverlay = null, n.updateCanvas = function() {}, n.onUpdateViewport = n.onUpdateViewport.bind(n), n.onCanvasClick = n.onCanvasClick.bind(n), n.onCanvasMouseMove = (0, ve.default)(n.onCanvasMouseMove.bind(n), 10), n.onCanvasExit = n.onCanvasExit.bind(n), n;
	}
	return st(t, e), et(t, [
		{
			key: "componentDidMount",
			value: function() {
				this.initializeViewer();
			}
		},
		{
			key: "componentDidUpdate",
			value: function(e) {
				var n = this.props, r = n.drawAnnotations, i = n.drawSearchAnnotations, a = n.annotations, o = n.searchAnnotations, s = n.hoveredAnnotationIds, c = n.selectedAnnotationId, l = n.highlightAllAnnotations, u = n.viewer;
				this.initializeViewer();
				var d = !t.annotationsMatch(a, e.annotations), f = !t.annotationsMatch(o, e.searchAnnotations), p = (0, xe.default)(s, e.hoveredAnnotationIds).length > 0;
				this.osdCanvasOverlay && p && (s.length > 0 ? this.osdCanvasOverlay.canvasDiv.style.cursor = "pointer" : this.osdCanvasOverlay.canvasDiv.style.cursor = "");
				var m = c !== e.selectedAnnotationId, h = r !== e.drawAnnotations || i !== e.drawSearchAnnotations || l !== e.highlightAllAnnotations;
				(f || d || m || p || h) && (this.updateCanvas = this.canvasUpdateCallback(), u.forceRedraw());
			}
		},
		{
			key: "componentWillUnmount",
			value: function() {
				var e = this.props.viewer;
				e.removeHandler("canvas-click", this.onCanvasClick), e.removeHandler("canvas-exit", this.onCanvasExit), e.removeHandler("update-viewport", this.onUpdateViewport), e.removeHandler("mouse-move", this.onCanvasMouseMove);
			}
		},
		{
			key: "onCanvasClick",
			value: function(e) {
				var t = this, n = this.props.canvasWorld, r = e.position, i = e.eventSource.viewport.pointFromPixel(r), a = n.canvasAtPoint(i);
				if (a) {
					var o = Ke(n.canvasToWorldCoordinates(a.id), 4);
					o[0], o[1];
					var s = o[2], c = o[3], l = this.annotationsAtPoint(a, i);
					if (l.length > 0 && (e.preventDefaultAction = !0), l.length === 1) this.toggleAnnotation(l[0].id);
					else if (l.length > 0) {
						var u = function(e) {
							var n = Math.PI / 180;
							return function(r) {
								for (var o = 0, s = 0; s < 360; s += 1) {
									var c = Math.cos(s * n) * e + i.x, l = Math.sin(s * n) * e + i.y;
									t.isAnnotationAtPoint(r, a, {
										x: c,
										y: l
									}) && (o += 1);
								}
								return {
									anno: r,
									score: o
								};
							};
						}, d = [], f = 1;
						for (d = (0, be.default)(l.map(u(f)), "score"); f < Math.max(s, c) && d[0].score === d[1].score;) f *= 2, d = (0, be.default)(l.map(u(f)), "score");
						this.toggleAnnotation(d[0].anno.id);
					}
				}
			}
		},
		{
			key: "onCanvasMouseMove",
			value: function(e) {
				var t = this.props, n = t.annotations, r = t.canvasWorld, i = t.hoverAnnotation, a = t.hoveredAnnotationIds, o = t.searchAnnotations, s = t.viewer, c = t.windowId;
				if (!(n.length === 0 && o.length === 0)) {
					var l = e.position, u = s.viewport.pointFromPixel(l), d = r.canvasAtPoint(u);
					if (!d) {
						i(c, []);
						return;
					}
					var f = this.annotationsAtPoint(d, u);
					(0, xe.default)(a, f.map(function(e) {
						return e.id;
					})).length > 0 && i(c, f.map(function(e) {
						return e.id;
					}));
				}
			}
		},
		{
			key: "onCanvasExit",
			value: function(e) {
				var t = this.props, n = t.hoverAnnotation, r = t.windowId;
				this.onCanvasMouseMove.cancel(), n(r, []);
			}
		},
		{
			key: "onUpdateViewport",
			value: function(e) {
				this.updateCanvas();
			}
		},
		{
			key: "initializeViewer",
			value: function() {
				var e = this.props.viewer;
				e && (this.osdCanvasOverlay || (this.osdCanvasOverlay = new De(e, this.ref), e.addHandler("canvas-click", this.onCanvasClick), e.addHandler("canvas-exit", this.onCanvasExit), e.addHandler("update-viewport", this.onUpdateViewport), e.addHandler("mouse-move", this.onCanvasMouseMove), this.updateCanvas = this.canvasUpdateCallback()));
			}
		},
		{
			key: "canvasUpdateCallback",
			value: function() {
				var e = this;
				return function() {
					e.osdCanvasOverlay.clear(), e.osdCanvasOverlay.resize(), e.osdCanvasOverlay.canvasUpdate(e.renderAnnotations.bind(e));
				};
			}
		},
		{
			key: "isAnnotationAtPoint",
			value: function(e, t, n) {
				var r = Ke(this.props.canvasWorld.canvasToWorldCoordinates(t.id), 2), i = r[0], a = r[1], o = n.x - i, s = n.y - a;
				if (e.svgSelector) {
					var c = this.osdCanvasOverlay.context2d, l = new ze({ resource: e }).svgPaths;
					return He(l).some(function(e) {
						return c.isPointInPath(new Path2D(e.attributes.d.nodeValue), o, s);
					});
				}
				if (e.fragmentSelector) {
					var u = Ke(e.fragmentSelector, 4), d = u[0], f = u[1], p = u[2], m = u[3];
					return d <= o && o <= d + p && f <= s && s <= f + m;
				}
				return !1;
			}
		},
		{
			key: "annotationsAtPoint",
			value: function(e, t) {
				var n = this, r = this.props, i = r.annotations, a = r.searchAnnotations;
				return (0, ge.default)([].concat(He(i), He(a)).map(function(e) {
					return e.resources;
				})).filter(function(r) {
					return e.id === r.targetId ? n.isAnnotationAtPoint(r, e, t) : !1;
				});
			}
		},
		{
			key: "toggleAnnotation",
			value: function(e) {
				var t = this.props, n = t.selectedAnnotationId, r = t.selectAnnotation, i = t.deselectAnnotation, a = t.windowId;
				n === e ? i(a, e) : r(a, e);
			}
		},
		{
			key: "annotationsToContext",
			value: function(e, t) {
				var n = this.props, r = n.highlightAllAnnotations, i = n.hoveredAnnotationIds, a = n.selectedAnnotationId, o = n.canvasWorld, s = n.viewer, c = this.osdCanvasOverlay.context2d, l = s.viewport.getZoom(!0) / s.viewport.getMaxZoom();
				e.forEach(function(e) {
					e.resources.forEach(function(e) {
						if (o.canvasIds.includes(e.targetId)) {
							var n = o.offsetByCanvas(e.targetId);
							new ze({
								hovered: i.includes(e.id),
								offset: n,
								palette: Y(Y({}, t), {}, { default: Y(Y({}, t.default), !r && t.hidden) }),
								resource: e,
								selected: a === e.id,
								zoomRatio: l
							}).toContext(c);
						}
					});
				});
			}
		},
		{
			key: "renderAnnotations",
			value: function() {
				var e = this.props, t = e.annotations, n = e.drawAnnotations, r = e.drawSearchAnnotations, i = e.searchAnnotations, a = e.palette;
				r && this.annotationsToContext(i, a.search), n && this.annotationsToContext(t, a.annotations);
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.props.viewer;
				return e ? /*#__PURE__*/ he.createPortal(/*#__PURE__*/ q.createElement("div", {
					ref: this.ref,
					style: {
						height: "100%",
						left: 0,
						position: "absolute",
						top: 0,
						width: "100%"
					}
				}, /*#__PURE__*/ q.createElement("canvas", null)), e.canvas) : /*#__PURE__*/ q.createElement(q.Fragment, null);
			}
		}
	], [{
		key: "annotationsMatch",
		value: function(e, t) {
			return !e && !t ? !0 : e && !t || !e && t ? !1 : e.length === 0 && t.length === 0 ? !0 : e.length === t.length ? e.every(function(e, n) {
				var r = e.resources.map(function(e) {
					return e.id;
				}), i = t[n].resources.map(function(e) {
					return e.id;
				});
				return r.length === 0 && i.length === 0 ? !0 : r.length === i.length ? !!(e.id === t[n].id && (0, ye.default)(r, i)) : !1;
			}) : !1;
		}
	}]);
}(q.Component);
lt.defaultProps = {
	annotations: [],
	deselectAnnotation: function() {},
	drawAnnotations: !0,
	drawSearchAnnotations: !0,
	highlightAllAnnotations: !1,
	hoverAnnotation: function() {},
	hoveredAnnotationIds: [],
	palette: {},
	searchAnnotations: [],
	selectAnnotation: function() {},
	selectedAnnotationId: void 0,
	viewer: null
};
//#endregion
//#region node_modules/mirador/dist/es/src/containers/AnnotationsOverlay.js
var ut = function(e, t) {
	var n = t.windowId;
	return {
		annotations: b(e, { windowId: n }),
		canvasWorld: k(e, { windowId: n }),
		drawAnnotations: o(e).window.forceDrawAnnotations || r(e, {
			content: "annotations",
			windowId: n
		}).length > 0,
		drawSearchAnnotations: o(e).window.forceDrawAnnotations || r(e, {
			content: "search",
			windowId: n
		}).length > 0,
		highlightAllAnnotations: O(e, { windowId: n }).highlightAllAnnotations,
		hoveredAnnotationIds: O(e, { windowId: n }).hoveredAnnotationIds,
		palette: m(e).palette,
		searchAnnotations: s(e, { windowId: n }),
		selectedAnnotationId: L(e, { windowId: n })
	};
}, dt = {
	deselectAnnotation: V,
	hoverAnnotation: B,
	selectAnnotation: ie
}, ft = v(E(), N(ut, dt), g("AnnotationsOverlay"))(lt), pt = {
	get: function(e) {
		return this.refs[e];
	},
	refs: {},
	set: function(e, t) {
		this.refs[e] = t;
	}
};
//#endregion
//#region node_modules/mirador/dist/es/src/components/OpenSeadragonViewer.js
function mt(e, t, n) {
	if (jt()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && $(i, n.prototype), i;
}
function ht(e) {
	return yt(e) || vt(e) || _t(e) || gt();
}
function gt() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _t(e, t) {
	if (e) {
		if (typeof e == "string") return bt(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bt(e, t) : void 0;
	}
}
function vt(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yt(e) {
	if (Array.isArray(e)) return bt(e);
}
function bt(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function xt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? xt(Object(n), !0).forEach(function(t) {
			St(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function St(e, t, n) {
	return (t = Et(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ct(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function wt(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Et(r.key), r);
	}
}
function Tt(e, t, n) {
	return t && wt(e.prototype, t), n && wt(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Et(e) {
	var t = Dt(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Dt(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ot(e, t, n) {
	return t = Q(t), kt(e, jt() ? Reflect.construct(t, n || [], Q(e).constructor) : t.apply(e, n));
}
function kt(e, t) {
	if (t && (typeof t == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return At(e);
}
function At(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function jt() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (jt = function() {
		return !!e;
	})();
}
function Q(e) {
	return Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Q(e);
}
function Mt(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $(e, t);
}
function $(e, t) {
	return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, $(e, t);
}
var Nt = /*#__PURE__*/ function(e) {
	function t(e) {
		var n;
		return Ct(this, t), n = Ot(this, t, [e]), n.state = { viewer: void 0 }, n.ref = /*#__PURE__*/ q.createRef(), n.apiRef = /*#__PURE__*/ q.createRef(), pt.set(e.windowId, n.apiRef), n.onCanvasMouseMove = (0, ve.default)(n.onCanvasMouseMove.bind(n), 10), n.onViewportChange = n.onViewportChange.bind(n), n.zoomToWorld = n.zoomToWorld.bind(n), n;
	}
	return Mt(t, e), Tt(t, [
		{
			key: "componentDidMount",
			value: function() {
				var e = this.props, t = e.osdConfig, n = e.t, r = e.windowId;
				if (this.ref.current) {
					var i = new J.default(Z({ id: this.ref.current.id }, t)), a = i.canvas && i.canvas.firstElementChild;
					a && (a.setAttribute("role", "img"), a.setAttribute("aria-label", n("digitizedView")), a.setAttribute("aria-describedby", `${r}-osd`)), this.apiRef.current = i, this.setState({ viewer: i }), i.addHandler("animation-finish", this.onViewportChange), i.innerTracker && (i.innerTracker.moveHandler = this.onCanvasMouseMove);
				}
			}
		},
		{
			key: "componentDidUpdate",
			value: function(e, t) {
				var n = this.props, r = n.viewerConfig, i = n.canvasWorld, a = this.state.viewer;
				if (this.apiRef.current = a, t.viewer === void 0) {
					r && (r.zoom = r.zoom || a.viewport.imageToViewportZoom(1), a.viewport.panTo(r, !0), a.viewport.zoomTo(r.zoom, r, !0), r.degrees !== void 0 && a.viewport.setRotation(r.degrees), r.flip !== void 0 && a.viewport.setFlip(r.flip)), this.addAllImageSources(!r);
					return;
				}
				if (!this.infoResponsesMatch(e.infoResponses) || !this.nonTiledImagedMatch(e.nonTiledImages)) {
					a.close();
					var o = !(0, ye.default)(i.canvasIds, e.canvasWorld.canvasIds);
					o && a.preserveViewport ? this.addAllImageSources(!1) : this.addAllImageSources(o || !r);
				} else if (!(0, ye.default)(i.layers, e.canvasWorld.layers)) this.refreshTileProperties();
				else if (r && r !== e.viewerConfig) {
					var s = a.viewport;
					(r.x !== s.centerSpringX.target.value || r.y !== s.centerSpringY.target.value) && s.panTo(r, !1), r.zoom !== s.zoomSpring.target.value && s.zoomTo(r.zoom, r, !1), r.rotation !== s.getRotation() && s.setRotation(r.rotation), r.flip !== s.getFlip() && s.setFlip(r.flip);
				}
			}
		},
		{
			key: "componentWillUnmount",
			value: function() {
				var e = this.state.viewer;
				e.innerTracker && e.innerTracker.moveHandler === this.onCanvasMouseMove && (e.innerTracker.moveHandler = null), e.removeAllHandlers(), this.apiRef.current = void 0;
			}
		},
		{
			key: "onCanvasMouseMove",
			value: function(e) {
				this.state.viewer.raiseEvent("mouse-move", e);
			}
		},
		{
			key: "onViewportChange",
			value: function(e) {
				var t = this.props, n = t.updateViewport, r = t.windowId, i = e.eventSource.viewport;
				n(r, {
					flip: i.getFlip(),
					rotation: i.getRotation(),
					x: Math.round(i.centerSpringX.target.value),
					y: Math.round(i.centerSpringY.target.value),
					zoom: i.zoomSpring.target.value
				});
			}
		},
		{
			key: "addAllImageSources",
			value: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, n = this.props, r = n.nonTiledImages, i = n.infoResponses;
				Promise.all(i.map(function(t) {
					return e.addTileSource(t);
				}), r.map(function(t) {
					return e.addNonTiledImage(t);
				})).then(function() {
					(i[0] || r[0]) && (t && e.zoomToWorld(), e.refreshTileProperties());
				});
			}
		},
		{
			key: "addNonTiledImage",
			value: function(e) {
				var t = this.props.canvasWorld, n = this.state.viewer, r = e.getProperty("type"), i = e.getProperty("format") || "";
				return r === "Image" || r === "dctypes:Image" || i.startsWith("image/") ? new Promise(function(r, i) {
					n || i(), n.addSimpleImage({
						error: function(e) {
							return i(e);
						},
						fitBounds: mt(J.default.Rect, ht(t.contentResourceToWorldCoordinates(e))),
						index: t.layerIndexOfImageResource(e),
						opacity: t.layerOpacityOfImageResource(e),
						success: function(e) {
							return r(e);
						},
						url: e.id
					});
				}) : Promise.resolve();
			}
		},
		{
			key: "addTileSource",
			value: function(e) {
				var t = this.props.canvasWorld, n = this.state.viewer;
				return new Promise(function(r, i) {
					n || i();
					var a = Z({}, e.json), o = t.contentResource(e.id);
					o && n.addTiledImage({
						error: function(e) {
							return i(e);
						},
						fitBounds: mt(J.default.Rect, ht(t.contentResourceToWorldCoordinates(o))),
						index: t.layerIndexOfImageResource(o),
						opacity: t.layerOpacityOfImageResource(o),
						success: function(e) {
							return r(e);
						},
						tileSource: a
					});
				});
			}
		},
		{
			key: "refreshTileProperties",
			value: function() {
				for (var e = this.props.canvasWorld, t = this.state.viewer.world, n = [], r = 0; r < t.getItemCount(); r += 1) n.push(t.getItemAt(r));
				n.forEach(function(n, r) {
					var i = e.contentResource(n.source["@id"] || n.source.id);
					if (i) {
						var a = e.layerIndexOfImageResource(i);
						r !== a && t.setItemIndex(n, a), n.setOpacity(e.layerOpacityOfImageResource(i));
					}
				});
			}
		},
		{
			key: "fitBounds",
			value: function(e, t, n, r) {
				var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
				this.state.viewer.viewport.fitBounds(new J.default.Rect(e, t, n, r), i);
			}
		},
		{
			key: "infoResponsesMatch",
			value: function(e) {
				var t = this.props.infoResponses;
				return t.length === 0 && e.length === 0 ? !0 : t.length === e.length ? t.every(function(t, n) {
					return !e[n] || !t.json || !e[n].json || t.tokenServiceId !== e[n].tokenServiceId ? !1 : !!(t.json["@id"] && t.json["@id"] === e[n].json["@id"] || t.json.id && t.json.id === e[n].json.id);
				}) : !1;
			}
		},
		{
			key: "nonTiledImagedMatch",
			value: function(e) {
				var t = this.props.nonTiledImages;
				return t.length === 0 && e.length === 0 ? !0 : t.some(function(t, n) {
					return e[n] ? t.id === e[n].id : !1;
				});
			}
		},
		{
			key: "zoomToWorld",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = this.props.canvasWorld;
				this.fitBounds.apply(this, ht(t.worldBounds()).concat([e]));
			}
		},
		{
			key: "render",
			value: function() {
				var e = this, t = this.props, n = t.children, r = t.classes, i = t.label, a = t.t, o = t.windowId, s = t.drawAnnotations, c = this.state.viewer, l = q.Children.map(n, function(t) {
					return /*#__PURE__*/ q.cloneElement(t, { zoomToWorld: e.zoomToWorld });
				});
				return /*#__PURE__*/ q.createElement(q.Fragment, null, /*#__PURE__*/ q.createElement("section", {
					className: (0, _e.default)(H("osd-container"), r.osdContainer),
					id: `${o}-osd`,
					ref: this.ref,
					"aria-label": a("item", { label: i }),
					"aria-live": "polite"
				}, s && /*#__PURE__*/ q.createElement(ft, {
					viewer: c,
					windowId: o
				}), l, /*#__PURE__*/ q.createElement(oe, Object.assign({ viewer: c }, Z(Z({}, this.props), {}, { children: null })))));
			}
		}
	]);
}(q.Component);
Nt.defaultProps = {
	children: null,
	drawAnnotations: !1,
	infoResponses: [],
	label: null,
	nonTiledImages: [],
	osdConfig: {},
	viewerConfig: null
}, i(), A();
var Pt = function(e, t) {
	var n = t.windowId, i = k(e, { windowId: n }), a = te(e), s = (0, ge.default)(i.canvases.map(function(e) {
		return e.imageServiceIds;
	}));
	return {
		canvasWorld: i,
		drawAnnotations: o(e).window.forceDrawAnnotations || r(e, {
			content: "annotations",
			windowId: n
		}).length > 0 || r(e, {
			content: "search",
			windowId: n
		}).length > 0,
		infoResponses: s.map(function(e) {
			return a[e];
		}).filter(function(e) {
			return e !== void 0 && e.isFetching === !1 && e.error === void 0;
		}),
		label: C(e, {
			canvasId: (p(e, { windowId: n }) || {}).id,
			windowId: n
		}),
		nonTiledImages: y(e, { windowId: n }),
		osdConfig: o(e).osdConfig,
		viewerConfig: re(e, { windowId: n })
	};
}, Ft = { updateViewport: z }, It = v(M({ osdContainer: {
	flex: 1,
	position: "relative"
} }), E(), N(Pt, Ft), g("OpenSeadragonViewer"))(Nt);
//#endregion
export { It as default };

//# sourceMappingURL=OpenSeadragonViewer.js.map