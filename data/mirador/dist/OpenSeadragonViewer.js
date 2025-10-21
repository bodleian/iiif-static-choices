import { ab as Qe, d0 as Lt, d1 as Tt, d2 as zt, bX as kt, bU as Nt, bY as Ut, d3 as Wt, d4 as Vt, d5 as jt, d6 as Gt, d7 as qt, c1 as Zt, cj as xt, cg as _t, ci as Xt, d8 as Yt, d9 as Kt, ck as Qt, cN as Et, R as ne, da as Jt, r as St, db as Pt, a1 as bt, a2 as Ct, a3 as Rt, dc as $t, dd as ei, de as ti, a5 as Dt, df as ii, cM as ri, dg as ni, b5 as it, av as Ee, dh as At, cP as si, cO as Se, aC as oi, aw as ai, ay as li, cU as hi, w as ui, di as ci, bh as di, dj as fi, cW as pi, cL as gi } from "./index.js";
import { i as Ge } from "./WorkspaceArea.js";
var _e = { exports: {} }, mi = _e.exports, rt;
function vi() {
  return rt || (rt = 1, function(x) {
    //! openseadragon 5.0.1
    //! Built on 2024-12-09
    //! Git commit: v5.0.1-0-480de92d
    //! http://openseadragon.github.io
    //! License: http://openseadragon.github.io/license/
    function g(e) {
      return new g.Viewer(e);
    }
    (function(e) {
      e.version = {
        versionStr: "5.0.1",
        major: parseInt("5", 10),
        minor: parseInt("0", 10),
        revision: parseInt("1", 10)
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
      e.isFunction = function(n) {
        return e.type(n) === "function";
      }, e.isArray = Array.isArray || function(n) {
        return e.type(n) === "array";
      }, e.isWindow = function(n) {
        return n && typeof n == "object" && "setInterval" in n;
      }, e.type = function(n) {
        return n == null ? String(n) : t[r.call(n)] || "object";
      }, e.isPlainObject = function(n) {
        if (!n || g.type(n) !== "object" || n.nodeType || e.isWindow(n) || n.constructor && !i.call(n, "constructor") && !i.call(n.constructor.prototype, "isPrototypeOf"))
          return !1;
        var o;
        for (var s in n)
          o = s;
        return o === void 0 || i.call(n, o);
      }, e.isEmptyObject = function(n) {
        for (var o in n)
          return !1;
        return !0;
      }, e.freezeObject = function(n) {
        return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(o) {
          return o;
        }, e.freezeObject(n);
      }, e.supportsCanvas = function() {
        var n = document.createElement("canvas");
        return !!(e.isFunction(n.getContext) && n.getContext("2d"));
      }(), e.isCanvasTainted = function(n) {
        var o = !1;
        try {
          n.getContext("2d").getImageData(0, 0, 1, 1);
        } catch {
          o = !0;
        }
        return o;
      }, e.supportsAddEventListener = function() {
        return !!(document.documentElement.addEventListener && document.addEventListener);
      }(), e.supportsRemoveEventListener = function() {
        return !!(document.documentElement.removeEventListener && document.removeEventListener);
      }(), e.supportsEventListenerOptions = function() {
        var n = 0;
        if (e.supportsAddEventListener)
          try {
            var o = {
              get capture() {
                return n++, !1;
              },
              get once() {
                return n++, !1;
              },
              get passive() {
                return n++, !1;
              }
            };
            window.addEventListener("test", null, o), window.removeEventListener("test", null, o);
          } catch {
            n = 0;
          }
        return n >= 3;
      }(), e.getCurrentPixelDensityRatio = function() {
        if (e.supportsCanvas) {
          var n = document.createElement("canvas").getContext("2d"), o = window.devicePixelRatio || 1, s = n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || n.backingStorePixelRatio || 1;
          return Math.max(o, 1) / s;
        } else
          return 1;
      }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
    })(g), function(e) {
      e.extend = function() {
        var s, a, l, h, d, p, w = arguments[0] || {}, y = arguments.length, _ = !1, E = 1;
        for (typeof w == "boolean" && (_ = w, w = arguments[1] || {}, E = 2), typeof w != "object" && !g.isFunction(w) && (w = {}), y === E && (w = this, --E); E < y; E++)
          if (s = arguments[E], s !== null || s !== void 0)
            for (a in s) {
              var P = Object.getOwnPropertyDescriptor(s, a);
              if (P !== void 0) {
                if (P.get || P.set) {
                  Object.defineProperty(w, a, P);
                  continue;
                }
                h = P.value;
              } else {
                e.console.warn('Could not copy inherited property "' + a + '".');
                continue;
              }
              w !== h && (_ && h && (g.isPlainObject(h) || (d = g.isArray(h))) ? (l = w[a], d ? (d = !1, p = l && g.isArray(l) ? l : []) : p = l && g.isPlainObject(l) ? l : {}, w[a] = g.extend(_, p, h)) : h !== void 0 && (w[a] = h));
            }
        return w;
      };
      var t = function() {
        if (typeof navigator != "object")
          return !1;
        var s = navigator.userAgent;
        return typeof s != "string" ? !1 : s.indexOf("iPhone") !== -1 || s.indexOf("iPad") !== -1 || s.indexOf("iPod") !== -1;
      };
      e.extend(
        e,
        /** @lends OpenSeadragon */
        {
          /**
           * The default values for the optional settings documented at {@link OpenSeadragon.Options}.
           * @static
           * @type {Object}
           */
          DEFAULT_SETTINGS: {
            //DATA SOURCE DETAILS
            xmlPath: null,
            tileSources: null,
            tileHost: null,
            initialPage: 0,
            crossOriginPolicy: !1,
            ajaxWithCredentials: !1,
            loadTilesWithAjax: !1,
            ajaxHeaders: {},
            splitHashDataForPost: !1,
            //PAN AND ZOOM SETTINGS AND CONSTRAINTS
            panHorizontal: !0,
            panVertical: !0,
            constrainDuringPan: !1,
            wrapHorizontal: !1,
            wrapVertical: !1,
            visibilityRatio: 0.5,
            //-> how much of the viewer can be negative space
            minPixelRatio: 0.5,
            //->closer to 0 draws tiles meant for a higher zoom at this zoom
            defaultZoomLevel: 0,
            minZoomLevel: null,
            maxZoomLevel: null,
            homeFillsViewer: !1,
            //UI RESPONSIVENESS AND FEEL
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
              flickMomentum: 0.25,
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
              flickMomentum: 0.25,
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
              flickMomentum: 0.25,
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
              flickMomentum: 0.25,
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
            minZoomImageRatio: 0.9,
            //-> closer to 0 allows zoom out to infinity
            maxZoomPixelRatio: 1.1,
            //-> higher allows 'over zoom' into pixels
            smoothTileEdgesMinZoom: 1.1,
            //-> higher than maxZoomPixelRatio disables it
            iOSDevice: t(),
            pixelsPerWheelLine: 40,
            pixelsPerArrowPress: 40,
            autoResize: !0,
            preserveImageSizeOnResize: !1,
            // requires autoResize=true
            minScrollDeltaTime: 50,
            rotationIncrement: 90,
            maxTilesPerFrame: 1,
            //DEFAULT CONTROL SETTINGS
            showSequenceControl: !0,
            //SEQUENCE
            sequenceControlAnchor: null,
            //SEQUENCE
            preserveViewport: !1,
            //SEQUENCE
            preserveOverlays: !1,
            //SEQUENCE
            navPrevNextWrap: !1,
            //SEQUENCE
            showNavigationControl: !0,
            //ZOOM/HOME/FULL/ROTATION
            navigationControlAnchor: null,
            //ZOOM/HOME/FULL/ROTATION
            showZoomControl: !0,
            //ZOOM
            showHomeControl: !0,
            //HOME
            showFullPageControl: !0,
            //FULL
            showRotationControl: !1,
            //ROTATION
            showFlipControl: !1,
            //FLIP
            controlsFadeDelay: 2e3,
            //ZOOM/HOME/FULL/SEQUENCE
            controlsFadeLength: 1500,
            //ZOOM/HOME/FULL/SEQUENCE
            mouseNavEnabled: !0,
            //GENERAL MOUSE INTERACTIVITY
            //VIEWPORT NAVIGATOR SETTINGS
            showNavigator: !1,
            navigatorElement: null,
            navigatorId: null,
            navigatorPosition: null,
            navigatorSizeRatio: 0.2,
            navigatorMaintainSizeRatio: !1,
            navigatorTop: null,
            navigatorLeft: null,
            navigatorHeight: null,
            navigatorWidth: null,
            navigatorAutoResize: !0,
            navigatorAutoFade: !0,
            navigatorRotate: !0,
            navigatorBackground: "#000",
            navigatorOpacity: 0.8,
            navigatorBorderColor: "#555",
            navigatorDisplayRegionColor: "#900",
            // INITIAL ROTATION
            degrees: 0,
            // INITIAL FLIP STATE
            flipped: !1,
            overlayPreserveContentDirection: !0,
            // APPEARANCE
            opacity: 1,
            // to be passed into each TiledImage
            compositeOperation: null,
            // to be passed into each TiledImage
            // DRAWER SETTINGS
            drawer: ["webgl", "canvas", "html"],
            // prefer using webgl, then canvas (i.e. context2d), then fallback to html
            drawerOptions: {
              webgl: {},
              canvas: {},
              html: {},
              custom: {}
            },
            // TILED IMAGE SETTINGS
            preload: !1,
            // to be passed into each TiledImage
            imageSmoothingEnabled: !0,
            // to be passed into each TiledImage
            placeholderFillStyle: null,
            // to be passed into each TiledImage
            subPixelRoundingForTransparency: null,
            // to be passed into each TiledImage
            //REFERENCE STRIP SETTINGS
            showReferenceStrip: !1,
            referenceStripScroll: "horizontal",
            referenceStripElement: null,
            referenceStripHeight: null,
            referenceStripWidth: null,
            referenceStripPosition: "BOTTOM_LEFT",
            referenceStripSizeRatio: 0.2,
            //COLLECTION VISUALIZATION SETTINGS
            collectionRows: 3,
            //or columns depending on layout
            collectionColumns: 0,
            //columns in horizontal layout, rows in vertical layout
            collectionLayout: "horizontal",
            //vertical
            collectionMode: !1,
            collectionTileSize: 800,
            collectionTileMargin: 80,
            //PERFORMANCE SETTINGS
            imageLoaderLimit: 0,
            maxImageCacheCount: 200,
            timeout: 3e4,
            tileRetryMax: 0,
            tileRetryDelay: 2500,
            //INTERFACE RESOURCE SETTINGS
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
                // Flip icon designed by Yaroslav Samoylov from the Noun Project and modified by Nelson Campos ncampos@criteriamarathon.com, https://thenounproject.com/term/flip/136289/
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
            //DEVELOPER SETTINGS
            debugMode: !1,
            debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"],
            silenceMultiImageWarnings: !1
          },
          /**
           * Returns a function which invokes the method as if it were a method belonging to the object.
           * @function
           * @param {Object} object
           * @param {Function} method
           * @returns {Function}
           */
          delegate: function(s, a) {
            return function() {
              var l = arguments;
              return l === void 0 && (l = []), a.apply(s, l);
            };
          },
          /**
           * An enumeration of Browser vendors.
           * @static
           * @type {Object}
           * @property {Number} UNKNOWN
           * @property {Number} IE
           * @property {Number} FIREFOX
           * @property {Number} SAFARI
           * @property {Number} CHROME
           * @property {Number} OPERA
           * @property {Number} EDGE
           * @property {Number} CHROMEEDGE
           */
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
          /**
           * An enumeration of when subpixel rounding should occur.
           * @static
           * @type {Object}
           * @property {Number} NEVER Never apply subpixel rounding for transparency.
           * @property {Number} ONLY_AT_REST Do not apply subpixel rounding for transparency during animation (panning, zoom, rotation) and apply it once animation is over.
           * @property {Number} ALWAYS Apply subpixel rounding for transparency during animation and when animation is over.
           */
          SUBPIXEL_ROUNDING_OCCURRENCES: {
            NEVER: 0,
            ONLY_AT_REST: 1,
            ALWAYS: 2
          },
          /**
           * Keep track of which {@link Viewer}s have been created.
           * - Key: {@link Element} to which a Viewer is attached.
           * - Value: {@link Viewer} of the element defined by the key.
           * @private
           * @static
           * @type {Object}
           */
          _viewers: /* @__PURE__ */ new Map(),
          /**
            * Returns the {@link Viewer} attached to a given DOM element. If there is
            * no viewer attached to the provided element, undefined is returned.
            * @function
            * @param {String|Element} element Accepts an id or element.
            * @returns {Viewer} The viewer attached to the given element, or undefined.
            */
          getViewer: function(s) {
            return e._viewers.get(this.getElement(s));
          },
          /**
           * Returns a DOM Element for the given id or element.
           * @function
           * @param {String|Element} element Accepts an id or element.
           * @returns {Element} The element with the given id, null, or the element itself.
           */
          getElement: function(s) {
            return typeof s == "string" && (s = document.getElementById(s)), s;
          },
          /**
           * Determines the position of the upper-left corner of the element.
           * @function
           * @param {Element|String} element - the element we want the position for.
           * @returns {OpenSeadragon.Point} - the position of the upper left corner of the element.
           */
          getElementPosition: function(s) {
            var a = new e.Point(), l, h;
            for (s = e.getElement(s), l = e.getElementStyle(s).position === "fixed", h = o(s, l); h; )
              a.x += s.offsetLeft, a.y += s.offsetTop, l && (a = a.plus(e.getPageScroll())), s = h, l = e.getElementStyle(s).position === "fixed", h = o(s, l);
            return a;
          },
          /**
           * Determines the position of the upper-left corner of the element adjusted for current page and/or element scroll.
           * @function
           * @param {Element|String} element - the element we want the position for.
           * @returns {OpenSeadragon.Point} - the position of the upper left corner of the element adjusted for current page and/or element scroll.
           */
          getElementOffset: function(s) {
            s = e.getElement(s);
            var a = s && s.ownerDocument, l, h, d = { top: 0, left: 0 };
            return a ? (l = a.documentElement, typeof s.getBoundingClientRect < "u" && (d = s.getBoundingClientRect()), h = a === a.window ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1, new e.Point(
              d.left + (h.pageXOffset || l.scrollLeft) - (l.clientLeft || 0),
              d.top + (h.pageYOffset || l.scrollTop) - (l.clientTop || 0)
            )) : new e.Point();
          },
          /**
           * Determines the height and width of the given element.
           * @function
           * @param {Element|String} element
           * @returns {OpenSeadragon.Point}
           */
          getElementSize: function(s) {
            return s = e.getElement(s), new e.Point(
              s.clientWidth,
              s.clientHeight
            );
          },
          /**
           * Returns the CSSStyle object for the given element.
           * @function
           * @param {Element|String} element
           * @returns {CSSStyle}
           */
          getElementStyle: document.documentElement.currentStyle ? function(s) {
            return s = e.getElement(s), s.currentStyle;
          } : function(s) {
            return s = e.getElement(s), window.getComputedStyle(s, "");
          },
          /**
           * Returns the property with the correct vendor prefix appended.
           * @param {String} property the property name
           * @returns {String} the property with the correct prefix or null if not
           * supported.
           */
          getCssPropertyWithVendorPrefix: function(s) {
            var a = {};
            return e.getCssPropertyWithVendorPrefix = function(l) {
              if (a[l] !== void 0)
                return a[l];
              var h = document.createElement("div").style, d = null;
              if (h[l] !== void 0)
                d = l;
              else
                for (var p = [
                  "Webkit",
                  "Moz",
                  "MS",
                  "O",
                  "webkit",
                  "moz",
                  "ms",
                  "o"
                ], w = e.capitalizeFirstLetter(l), y = 0; y < p.length; y++) {
                  var _ = p[y] + w;
                  if (h[_] !== void 0) {
                    d = _;
                    break;
                  }
                }
              return a[l] = d, d;
            }, e.getCssPropertyWithVendorPrefix(s);
          },
          /**
           * Capitalizes the first letter of a string
           * @param {String} string
           * @returns {String} The string with the first letter capitalized
           */
          capitalizeFirstLetter: function(s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
          },
          /**
           * Compute the modulo of a number but makes sure to always return
           * a positive value (also known as Euclidean modulo).
           * @param {Number} number the number to compute the modulo of
           * @param {Number} modulo the modulo
           * @returns {Number} the result of the modulo of number
           */
          positiveModulo: function(s, a) {
            var l = s % a;
            return l < 0 && (l += a), l;
          },
          /**
           * Determines if a point is within the bounding rectangle of the given element (hit-test).
           * @function
           * @param {Element|String} element
           * @param {OpenSeadragon.Point} point
           * @returns {Boolean}
           */
          pointInElement: function(s, a) {
            s = e.getElement(s);
            var l = e.getElementOffset(s), h = e.getElementSize(s);
            return a.x >= l.x && a.x < l.x + h.x && a.y < l.y + h.y && a.y >= l.y;
          },
          /**
           * Gets the position of the mouse on the screen for a given event.
           * @function
           * @param {Event} [event]
           * @returns {OpenSeadragon.Point}
           */
          getMousePosition: function(s) {
            if (typeof s.pageX == "number")
              e.getMousePosition = function(a) {
                var l = new e.Point();
                return l.x = a.pageX, l.y = a.pageY, l;
              };
            else if (typeof s.clientX == "number")
              e.getMousePosition = function(a) {
                var l = new e.Point();
                return l.x = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, l.y = a.clientY + document.body.scrollTop + document.documentElement.scrollTop, l;
              };
            else
              throw new Error(
                "Unknown event mouse position, no known technique."
              );
            return e.getMousePosition(s);
          },
          /**
           * Determines the page's current scroll position.
           * @function
           * @returns {OpenSeadragon.Point}
           */
          getPageScroll: function() {
            var s = document.documentElement || {}, a = document.body || {};
            if (typeof window.pageXOffset == "number")
              e.getPageScroll = function() {
                return new e.Point(
                  window.pageXOffset,
                  window.pageYOffset
                );
              };
            else if (a.scrollLeft || a.scrollTop)
              e.getPageScroll = function() {
                return new e.Point(
                  document.body.scrollLeft,
                  document.body.scrollTop
                );
              };
            else if (s.scrollLeft || s.scrollTop)
              e.getPageScroll = function() {
                return new e.Point(
                  document.documentElement.scrollLeft,
                  document.documentElement.scrollTop
                );
              };
            else
              return new e.Point(0, 0);
            return e.getPageScroll();
          },
          /**
           * Set the page scroll position.
           * @function
           * @returns {OpenSeadragon.Point}
           */
          setPageScroll: function(s) {
            if (typeof window.scrollTo < "u")
              e.setPageScroll = function(h) {
                window.scrollTo(h.x, h.y);
              };
            else {
              var a = e.getPageScroll();
              if (a.x === s.x && a.y === s.y)
                return;
              document.body.scrollLeft = s.x, document.body.scrollTop = s.y;
              var l = e.getPageScroll();
              if (l.x !== a.x && l.y !== a.y) {
                e.setPageScroll = function(h) {
                  document.body.scrollLeft = h.x, document.body.scrollTop = h.y;
                };
                return;
              }
              if (document.documentElement.scrollLeft = s.x, document.documentElement.scrollTop = s.y, l = e.getPageScroll(), l.x !== a.x && l.y !== a.y) {
                e.setPageScroll = function(h) {
                  document.documentElement.scrollLeft = h.x, document.documentElement.scrollTop = h.y;
                };
                return;
              }
              e.setPageScroll = function(h) {
              };
            }
            e.setPageScroll(s);
          },
          /**
           * Determines the size of the browsers window.
           * @function
           * @returns {OpenSeadragon.Point}
           */
          getWindowSize: function() {
            var s = document.documentElement || {}, a = document.body || {};
            if (typeof window.innerWidth == "number")
              e.getWindowSize = function() {
                return new e.Point(
                  window.innerWidth,
                  window.innerHeight
                );
              };
            else if (s.clientWidth || s.clientHeight)
              e.getWindowSize = function() {
                return new e.Point(
                  document.documentElement.clientWidth,
                  document.documentElement.clientHeight
                );
              };
            else if (a.clientWidth || a.clientHeight)
              e.getWindowSize = function() {
                return new e.Point(
                  document.body.clientWidth,
                  document.body.clientHeight
                );
              };
            else
              throw new Error("Unknown window size, no known technique.");
            return e.getWindowSize();
          },
          /**
           * Wraps the given element in a nest of divs so that the element can
           * be easily centered using CSS tables
           * @function
           * @param {Element|String} element
           * @returns {Element} outermost wrapper element
           */
          makeCenteredNode: function(s) {
            s = e.getElement(s);
            var a = [
              e.makeNeutralElement("div"),
              e.makeNeutralElement("div"),
              e.makeNeutralElement("div")
            ];
            return e.extend(a[0].style, {
              display: "table",
              height: "100%",
              width: "100%"
            }), e.extend(a[1].style, {
              display: "table-row"
            }), e.extend(a[2].style, {
              display: "table-cell",
              verticalAlign: "middle",
              textAlign: "center"
            }), a[0].appendChild(a[1]), a[1].appendChild(a[2]), a[2].appendChild(s), a[0];
          },
          /**
           * Creates an easily positionable element of the given type that therefor
           * serves as an excellent container element.
           * @function
           * @param {String} tagName
           * @returns {Element}
           */
          makeNeutralElement: function(s) {
            var a = document.createElement(s), l = a.style;
            return l.background = "transparent none", l.border = "none", l.margin = "0px", l.padding = "0px", l.position = "static", a;
          },
          /**
           * Returns the current milliseconds, using Date.now() if available
           * @function
           */
          now: function() {
            return Date.now ? e.now = Date.now : e.now = function() {
              return (/* @__PURE__ */ new Date()).getTime();
            }, e.now();
          },
          /**
           * Ensures an image is loaded correctly to support alpha transparency.
           * @function
           * @param {String} src
           * @returns {Element}
           */
          makeTransparentImage: function(s) {
            var a = e.makeNeutralElement("img");
            return a.src = s, a;
          },
          /**
           * Sets the opacity of the specified element.
           * @function
           * @param {Element|String} element
           * @param {Number} opacity
           * @param {Boolean} [usesAlpha]
           */
          setElementOpacity: function(s, a, l) {
            var h, d;
            s = e.getElement(s), l && !e.Browser.alpha && (a = Math.round(a)), e.Browser.opacity ? s.style.opacity = a < 1 ? a : "" : a < 1 ? (h = Math.round(100 * a), d = "alpha(opacity=" + h + ")", s.style.filter = d) : s.style.filter = "";
          },
          /**
           * Sets the specified element's touch-action style attribute to 'none'.
           * @function
           * @param {Element|String} element
           */
          setElementTouchActionNone: function(s) {
            s = e.getElement(s), typeof s.style.touchAction < "u" ? s.style.touchAction = "none" : typeof s.style.msTouchAction < "u" && (s.style.msTouchAction = "none");
          },
          /**
           * Sets the specified element's pointer-events style attribute to the passed value.
           * @function
           * @param {Element|String} element
           * @param {String} value
           */
          setElementPointerEvents: function(s, a) {
            s = e.getElement(s), typeof s.style < "u" && typeof s.style.pointerEvents < "u" && (s.style.pointerEvents = a);
          },
          /**
           * Sets the specified element's pointer-events style attribute to 'none'.
           * @function
           * @param {Element|String} element
           */
          setElementPointerEventsNone: function(s) {
            e.setElementPointerEvents(s, "none");
          },
          /**
           * Add the specified CSS class to the element if not present.
           * @function
           * @param {Element|String} element
           * @param {String} className
           */
          addClass: function(s, a) {
            s = e.getElement(s), s.className ? (" " + s.className + " ").indexOf(" " + a + " ") === -1 && (s.className += " " + a) : s.className = a;
          },
          /**
           * Find the first index at which an element is found in an array or -1
           * if not present.
           *
           * Code taken and adapted from
           * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
           *
           * @function
           * @param {Array} array The array from which to find the element
           * @param {Object} searchElement The element to find
           * @param {Number} [fromIndex=0] Index to start research.
           * @returns {Number} The index of the element in the array.
           */
          indexOf: function(s, a, l) {
            return Array.prototype.indexOf ? this.indexOf = function(h, d, p) {
              return h.indexOf(d, p);
            } : this.indexOf = function(h, d, p) {
              var w, y = p || 0, _;
              if (!h)
                throw new TypeError();
              if (_ = h.length, _ === 0 || y >= _)
                return -1;
              for (y < 0 && (y = _ - Math.abs(y)), w = y; w < _; w++)
                if (h[w] === d)
                  return w;
              return -1;
            }, this.indexOf(s, a, l);
          },
          /**
           * Remove the specified CSS class from the element.
           * @function
           * @param {Element|String} element
           * @param {String} className
           */
          removeClass: function(s, a) {
            var l, h = [], d;
            for (s = e.getElement(s), l = s.className.split(/\s+/), d = 0; d < l.length; d++)
              l[d] && l[d] !== a && h.push(l[d]);
            s.className = h.join(" ");
          },
          /**
           * Convert passed addEventListener() options to boolean or options object,
           * depending on browser support.
           * @function
           * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
           * @param {Boolean} [options.capture]
           * @param {Boolean} [options.passive]
           * @param {Boolean} [options.once]
           * @returns {String} The protocol (http:, https:, file:, ftp: ...)
           */
          normalizeEventListenerOptions: function(s) {
            var a;
            return typeof s < "u" ? typeof s == "boolean" ? a = e.supportsEventListenerOptions ? { capture: s } : s : a = e.supportsEventListenerOptions ? s : typeof s.capture < "u" ? s.capture : !1 : a = e.supportsEventListenerOptions ? { capture: !1 } : !1, a;
          },
          /**
           * Adds an event listener for the given element, eventName and handler.
           * @function
           * @param {Element|String} element
           * @param {String} eventName
           * @param {Function} handler
           * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
           * @param {Boolean} [options.capture]
           * @param {Boolean} [options.passive]
           * @param {Boolean} [options.once]
           */
          addEvent: function() {
            if (e.supportsAddEventListener)
              return function(s, a, l, h) {
                h = e.normalizeEventListenerOptions(h), s = e.getElement(s), s.addEventListener(a, l, h);
              };
            if (document.documentElement.attachEvent && document.attachEvent)
              return function(s, a, l) {
                s = e.getElement(s), s.attachEvent("on" + a, l);
              };
            throw new Error("No known event model.");
          }(),
          /**
           * Remove a given event listener for the given element, event type and
           * handler.
           * @function
           * @param {Element|String} element
           * @param {String} eventName
           * @param {Function} handler
           * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
           * @param {Boolean} [options.capture]
           */
          removeEvent: function() {
            if (e.supportsRemoveEventListener)
              return function(s, a, l, h) {
                h = e.normalizeEventListenerOptions(h), s = e.getElement(s), s.removeEventListener(a, l, h);
              };
            if (document.documentElement.detachEvent && document.detachEvent)
              return function(s, a, l) {
                s = e.getElement(s), s.detachEvent("on" + a, l);
              };
            throw new Error("No known event model.");
          }(),
          /**
           * Cancels the default browser behavior had the event propagated all
           * the way up the DOM to the window object.
           * @function
           * @param {Event} [event]
           */
          cancelEvent: function(s) {
            s.preventDefault();
          },
          /**
           * Returns true if {@link OpenSeadragon.cancelEvent|cancelEvent} has been called on
           * the event, otherwise returns false.
           * @function
           * @param {Event} [event]
           */
          eventIsCanceled: function(s) {
            return s.defaultPrevented;
          },
          /**
           * Stops the propagation of the event through the DOM in the capturing and bubbling phases.
           * @function
           * @param {Event} [event]
           */
          stopEvent: function(s) {
            s.stopPropagation();
          },
          // Deprecated
          createCallback: function(s, a) {
            console.error("The createCallback function is deprecated and will be removed in future versions. Please use alternativeFunction instead.");
            var l = [], h;
            for (h = 2; h < arguments.length; h++)
              l.push(arguments[h]);
            return function() {
              var d = l.concat([]), p;
              for (p = 0; p < arguments.length; p++)
                d.push(arguments[p]);
              return a.apply(s, d);
            };
          },
          /**
           * Retrieves the value of a url parameter from the window.location string.
           * @function
           * @param {String} key
           * @returns {String} The value of the url parameter or null if no param matches.
           */
          getUrlParameter: function(s) {
            var a = n[s];
            return a || null;
          },
          /**
           * Retrieves the protocol used by the url. The url can either be absolute
           * or relative.
           * @function
           * @private
           * @param {String} url The url to retrieve the protocol from.
           * @returns {String} The protocol (http:, https:, file:, ftp: ...)
           */
          getUrlProtocol: function(s) {
            var a = s.match(/^([a-z]+:)\/\//i);
            return a === null ? window.location.protocol : a[1].toLowerCase();
          },
          /**
           * Create an XHR object
           * @private
           * @param {type} [local] Deprecated. Ignored (IE/ActiveXObject file protocol no longer supported).
           * @returns {XMLHttpRequest}
           */
          createAjaxRequest: function() {
            if (window.XMLHttpRequest)
              return e.createAjaxRequest = function() {
                return new XMLHttpRequest();
              }, new XMLHttpRequest();
            throw new Error("Browser doesn't support XMLHttpRequest.");
          },
          /**
           * Makes an AJAX request.
           * @param {Object} options
           * @param {String} options.url - the url to request
           * @param {Function} options.success - a function to call on a successful response
           * @param {Function} options.error - a function to call on when an error occurs
           * @param {Object} options.headers - headers to add to the AJAX request
           * @param {String} options.responseType - the response type of the AJAX request
           * @param {String} options.postData - HTTP POST data (usually but not necessarily in k=v&k2=v2... form,
           *      see TileSource::getPostData), GET method used if null
           * @param {Boolean} [options.withCredentials=false] - whether to set the XHR's withCredentials
           * @throws {Error}
           * @returns {XMLHttpRequest}
           */
          makeAjaxRequest: function(s, a, l) {
            var h, d, p, w;
            e.isPlainObject(s) && (a = s.success, l = s.error, h = s.withCredentials, d = s.headers, p = s.responseType || null, w = s.postData || null, s = s.url);
            var y = e.getUrlProtocol(s), _ = e.createAjaxRequest();
            if (!e.isFunction(a))
              throw new Error("makeAjaxRequest requires a success callback");
            _.onreadystatechange = function() {
              _.readyState === 4 && (_.onreadystatechange = function() {
              }, _.status >= 200 && _.status < 300 || _.status === 0 && y !== "http:" && y !== "https:" ? a(_) : e.isFunction(l) ? l(_) : e.console.error("AJAX request returned %d: %s", _.status, s));
            };
            var E = w ? "POST" : "GET";
            try {
              if (_.open(E, s, !0), p && (_.responseType = p), d)
                for (var P in d)
                  Object.prototype.hasOwnProperty.call(d, P) && d[P] && _.setRequestHeader(P, d[P]);
              h && (_.withCredentials = !0), _.send(w);
            } catch (C) {
              e.console.error("%s while making AJAX request: %s", C.name, C.message), _.onreadystatechange = function() {
              }, e.isFunction(l) && l(_, C);
            }
            return _;
          },
          /**
           * Taken from jQuery 1.6.1
           * @function
           * @param {Object} options
           * @param {String} options.url
           * @param {Function} options.callback
           * @param {String} [options.param='callback'] The name of the url parameter
           *      to request the jsonp provider with.
           * @param {String} [options.callbackName=] The name of the callback to
           *      request the jsonp provider with.
           */
          jsonp: function(s) {
            var a, l = s.url, h = document.head || document.getElementsByTagName("head")[0] || document.documentElement, d = s.callbackName || "openseadragon" + e.now(), p = window[d], w = "$1" + d + "$2", y = s.param || "callback", _ = s.callback;
            l = l.replace(/(=)\?(&|$)|\?\?/i, w), l += (/\?/.test(l) ? "&" : "?") + y + "=" + d, window[d] = function(E) {
              if (p)
                window[d] = p;
              else
                try {
                  delete window[d];
                } catch {
                }
              _ && e.isFunction(_) && _(E);
            }, a = document.createElement("script"), (s.async !== void 0 || s.async !== !1) && (a.async = "async"), s.scriptCharset && (a.charset = s.scriptCharset), a.src = l, a.onload = a.onreadystatechange = function(E, P) {
              (P || !a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, h && a.parentNode && h.removeChild(a), a = void 0);
            }, h.insertBefore(a, h.firstChild);
          },
          /**
           * Fully deprecated. Will throw an error.
           * @function
           * @deprecated use {@link OpenSeadragon.Viewer#open}
           */
          createFromDZI: function() {
            throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
          },
          /**
           * Parses an XML string into a DOM Document.
           * @function
           * @param {String} string
           * @returns {Document}
           */
          parseXml: function(s) {
            if (window.DOMParser)
              e.parseXml = function(a) {
                var l = null, h;
                return h = new DOMParser(), l = h.parseFromString(a, "text/xml"), l;
              };
            else
              throw new Error("Browser doesn't support XML DOM.");
            return e.parseXml(s);
          },
          /**
           * Parses a JSON string into a Javascript object.
           * @function
           * @param {String} string
           * @returns {Object}
           */
          parseJSON: function(s) {
            return e.parseJSON = window.JSON.parse, e.parseJSON(s);
          },
          /**
           * Reports whether the image format is supported for tiling in this
           * version.
           * @function
           * @param {String} [extension]
           * @returns {Boolean}
           */
          imageFormatSupported: function(s) {
            return s = s || "", !!i[s.toLowerCase()];
          },
          /**
           * Updates supported image formats with user-specified values.
           * Preexisting formats that are not being updated are left unchanged.
           * By default, the defined formats are
           * <pre><code>{
           *      avif: true,
           *      bmp:  false,
           *      jpeg: true,
           *      jpg:  true,
           *      png:  true,
           *      tif:  false,
           *      wdp:  false,
           *      webp: true
           * }
           * </code></pre>
           * @function
           * @example
           * // sets bmp as supported and png as unsupported
           * setImageFormatsSupported({bmp: true, png: false});
           * @param {Object} formats An object containing format extensions as
           * keys and booleans as values.
           */
          setImageFormatsSupported: function(s) {
            e.extend(i, s);
          }
        }
      );
      var r = function(s) {
      };
      e.console = window.console || {
        log: r,
        debug: r,
        info: r,
        warn: r,
        error: r,
        assert: r
      }, e.Browser = {
        vendor: e.BROWSERS.UNKNOWN,
        version: 0,
        alpha: !0
      };
      var i = {
        avif: !0,
        bmp: !1,
        jpeg: !0,
        jpg: !0,
        png: !0,
        tif: !1,
        wdp: !1,
        webp: !0
      }, n = {};
      (function() {
        var s = navigator.appVersion, a = navigator.userAgent, l;
        switch (navigator.appName) {
          case "Microsoft Internet Explorer":
            window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(
              a.substring(
                a.indexOf("MSIE") + 5,
                a.indexOf(";", a.indexOf("MSIE"))
              )
            ));
            break;
          case "Netscape":
            window.addEventListener && (a.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(
              a.substring(a.indexOf("Edge") + 5)
            )) : a.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(
              a.substring(a.indexOf("Edg") + 4)
            )) : a.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(
              a.substring(a.indexOf("Firefox") + 8)
            )) : a.indexOf("Safari") >= 0 ? (e.Browser.vendor = a.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(
              a.substring(
                a.substring(0, a.indexOf("Safari")).lastIndexOf("/") + 1,
                a.indexOf("Safari")
              )
            )) : (l = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), l.exec(a) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
            break;
          case "Opera":
            e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(s);
            break;
        }
        var h = window.location.search.substring(1), d = h.split("&"), p, w, y;
        for (y = 0; y < d.length; y++)
          if (p = d[y], w = p.indexOf("="), w > 0) {
            var _ = p.substring(0, w), E = p.substring(w + 1);
            try {
              n[_] = decodeURIComponent(E);
            } catch {
              e.console.error("Ignoring malformed URL parameter: %s=%s", _, E);
            }
          }
        e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = !0, e.Browser.vendor === e.BROWSERS.IE && e.console.error("Internet Explorer is not supported by OpenSeadragon");
      })(), function(s) {
        var a = s.requestAnimationFrame || s.mozRequestAnimationFrame || s.webkitRequestAnimationFrame || s.msRequestAnimationFrame, l = s.cancelAnimationFrame || s.mozCancelAnimationFrame || s.webkitCancelAnimationFrame || s.msCancelAnimationFrame;
        if (a && l)
          e.requestAnimationFrame = function() {
            return a.apply(s, arguments);
          }, e.cancelAnimationFrame = function() {
            return l.apply(s, arguments);
          };
        else {
          var h = [], d = [], p = 0, w;
          e.requestAnimationFrame = function(y) {
            return h.push([++p, y]), w || (w = setInterval(function() {
              if (h.length) {
                var _ = e.now(), E = d;
                for (d = h, h = E; d.length; )
                  d.shift()[1](_);
              } else
                clearInterval(w), w = void 0;
            }, 1e3 / 50)), p;
          }, e.cancelAnimationFrame = function(y) {
            var _, E;
            for (_ = 0, E = h.length; _ < E; _ += 1)
              if (h[_][0] === y) {
                h.splice(_, 1);
                return;
              }
            for (_ = 0, E = d.length; _ < E; _ += 1)
              if (d[_][0] === y) {
                d.splice(_, 1);
                return;
              }
          };
        }
      }(window);
      function o(s, a) {
        return a && s !== document.body ? document.body : s.offsetParent;
      }
    }(g), function(e, t) {
      x.exports ? x.exports = t() : e.OpenSeadragon = t();
    }(mi, function() {
      return g;
    }), function(e) {
      class t {
        constructor(i) {
          i || (i = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]), this.values = i;
        }
        /**
         * @function makeIdentity
         * @memberof OpenSeadragon.Mat3
         * @static
         * @returns {OpenSeadragon.Mat3} an identity matrix
         */
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
        /**
         * @function makeTranslation
         * @memberof OpenSeadragon.Mat3
         * @static
         * @param {Number} tx The x value of the translation
         * @param {Number} ty The y value of the translation
         * @returns {OpenSeadragon.Mat3} A translation matrix
         */
        static makeTranslation(i, n) {
          return new t([
            1,
            0,
            0,
            0,
            1,
            0,
            i,
            n,
            1
          ]);
        }
        /**
         * @function makeRotation
         * @memberof OpenSeadragon.Mat3
         * @static
         * @param {Number} angleInRadians The desired rotation angle, in radians
         * @returns {OpenSeadragon.Mat3} A rotation matrix
         */
        static makeRotation(i) {
          var n = Math.cos(i), o = Math.sin(i);
          return new t([
            n,
            -o,
            0,
            o,
            n,
            0,
            0,
            0,
            1
          ]);
        }
        /**
         * @function makeScaling
         * @memberof OpenSeadragon.Mat3
         * @static
         * @param {Number} sx The x value of the scaling
         * @param {Number} sy The y value of the scaling
         * @returns {OpenSeadragon.Mat3} A scaling matrix
         */
        static makeScaling(i, n) {
          return new t([
            i,
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
        /**
         * @alias multiply
         * @memberof! OpenSeadragon.Mat3
         * @param {OpenSeadragon.Mat3} other the matrix to multiply with
         * @returns {OpenSeadragon.Mat3} The result of matrix multiplication
         */
        multiply(i) {
          let n = this.values, o = i.values;
          var s = n[0 * 3 + 0], a = n[0 * 3 + 1], l = n[0 * 3 + 2], h = n[1 * 3 + 0], d = n[1 * 3 + 1], p = n[1 * 3 + 2], w = n[2 * 3 + 0], y = n[2 * 3 + 1], _ = n[2 * 3 + 2], E = o[0 * 3 + 0], P = o[0 * 3 + 1], C = o[0 * 3 + 2], M = o[1 * 3 + 0], F = o[1 * 3 + 1], L = o[1 * 3 + 2], N = o[2 * 3 + 0], V = o[2 * 3 + 1], j = o[2 * 3 + 2];
          return new t([
            E * s + P * h + C * w,
            E * a + P * d + C * y,
            E * l + P * p + C * _,
            M * s + F * h + L * w,
            M * a + F * d + L * y,
            M * l + F * p + L * _,
            N * s + V * h + j * w,
            N * a + V * d + j * y,
            N * l + V * p + j * _
          ]);
        }
      }
      e.Mat3 = t;
    }(g), function(e) {
      var t = {
        supportsFullScreen: !1,
        isFullScreen: function() {
          return !1;
        },
        getFullScreenElement: function() {
          return null;
        },
        requestFullScreen: function() {
        },
        exitFullScreen: function() {
        },
        cancelFullScreen: function() {
        },
        fullScreenEventName: "",
        fullScreenErrorEventName: ""
      };
      document.exitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
        return document.fullscreenElement;
      }, t.requestFullScreen = function(r) {
        return r.requestFullscreen().catch(function(i) {
          e.console.error("Fullscreen request failed: ", i);
        });
      }, t.exitFullScreen = function() {
        document.exitFullscreen().catch(function(r) {
          e.console.error("Error while exiting fullscreen: ", r);
        });
      }, t.fullScreenEventName = "fullscreenchange", t.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
        return document.msFullscreenElement;
      }, t.requestFullScreen = function(r) {
        return r.msRequestFullscreen();
      }, t.exitFullScreen = function() {
        document.msExitFullscreen();
      }, t.fullScreenEventName = "MSFullscreenChange", t.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
        return document.webkitFullscreenElement;
      }, t.requestFullScreen = function(r) {
        return r.webkitRequestFullscreen();
      }, t.exitFullScreen = function() {
        document.webkitExitFullscreen();
      }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
        return document.webkitCurrentFullScreenElement;
      }, t.requestFullScreen = function(r) {
        return r.webkitRequestFullScreen();
      }, t.exitFullScreen = function() {
        document.webkitCancelFullScreen();
      }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
        return document.mozFullScreenElement;
      }, t.requestFullScreen = function(r) {
        return r.mozRequestFullScreen();
      }, t.exitFullScreen = function() {
        document.mozCancelFullScreen();
      }, t.fullScreenEventName = "mozfullscreenchange", t.fullScreenErrorEventName = "mozfullscreenerror"), t.isFullScreen = function() {
        return t.getFullScreenElement() !== null;
      }, t.cancelFullScreen = function() {
        e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), t.exitFullScreen();
      }, e.extend(e, t);
    }(g), function(e) {
      e.EventSource = function() {
        this.events = {}, this._rejectedEventList = {};
      }, e.EventSource.prototype = {
        /**
         * Add an event handler to be triggered only once (or a given number of times)
         * for a given event. It is not removable with removeHandler().
         * @function
         * @param {String} eventName - Name of event to register.
         * @param {OpenSeadragon.EventHandler} handler - Function to call when event
         * is triggered.
         * @param {Object} [userData=null] - Arbitrary object to be passed unchanged
         * to the handler.
         * @param {Number} [times=1] - The number of times to handle the event
         * before removing it.
         * @param {Number} [priority=0] - Handler priority. By default, all priorities are 0. Higher number = priority.
         * @returns {Boolean} - True if the handler was added, false if it was rejected
         */
        addOnceHandler: function(t, r, i, n, o) {
          var s = this;
          n = n || 1;
          var a = 0, l = function(h) {
            return a++, a === n && s.removeHandler(t, l), r(h);
          };
          return this.addHandler(t, l, i, o);
        },
        /**
         * Add an event handler for a given event.
         * @function
         * @param {String} eventName - Name of event to register.
         * @param {OpenSeadragon.EventHandler} handler - Function to call when event is triggered.
         * @param {Object} [userData=null] - Arbitrary object to be passed unchanged to the handler.
         * @param {Number} [priority=0] - Handler priority. By default, all priorities are 0. Higher number = priority.
         * @returns {Boolean} - True if the handler was added, false if it was rejected
         */
        addHandler: function(t, r, i, n) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, t))
            return e.console.error(`Error adding handler for ${t}. ${this._rejectedEventList[t]}`), !1;
          var o = this.events[t];
          if (o || (this.events[t] = o = []), r && e.isFunction(r)) {
            var s = o.length, a = { handler: r, userData: i || null, priority: n || 0 };
            for (o[s] = a; s > 0 && o[s - 1].priority < o[s].priority; )
              o[s] = o[s - 1], o[s - 1] = a, s--;
          }
          return !0;
        },
        /**
         * Remove a specific event handler for a given event.
         * @function
         * @param {String} eventName - Name of event for which the handler is to be removed.
         * @param {OpenSeadragon.EventHandler} handler - Function to be removed.
         */
        removeHandler: function(t, r) {
          var i = this.events[t], n = [], o;
          if (i && e.isArray(i)) {
            for (o = 0; o < i.length; o++)
              i[o].handler !== r && n.push(i[o]);
            this.events[t] = n;
          }
        },
        /**
         * Get the amount of handlers registered for a given event.
         * @param {String} eventName - Name of event to inspect.
         * @returns {number} amount of events
         */
        numberOfHandlers: function(t) {
          var r = this.events[t];
          return r ? r.length : 0;
        },
        /**
         * Remove all event handlers for a given event type. If no type is given all
         * event handlers for every event type are removed.
         * @function
         * @param {String} eventName - Name of event for which all handlers are to be removed.
         */
        removeAllHandlers: function(t) {
          if (t)
            this.events[t] = [];
          else
            for (var r in this.events)
              this.events[r] = [];
        },
        /**
         * Get a function which iterates the list of all handlers registered for a given event, calling the handler for each.
         * @function
         * @param {String} eventName - Name of event to get handlers for.
         */
        getHandler: function(t) {
          var r = this.events[t];
          return !r || !r.length ? null : (r = r.length === 1 ? [r[0]] : Array.apply(null, r), function(i, n) {
            var o, s = r.length;
            for (o = 0; o < s; o++)
              r[o] && (n.eventSource = i, n.userData = r[o].userData, r[o].handler(n));
          });
        },
        /**
         * Trigger an event, optionally passing additional information.
         * @function
         * @param {String} eventName - Name of event to register.
         * @param {Object} eventArgs - Event-specific data.
         * @returns {Boolean} True if the event was fired, false if it was rejected because of rejectEventHandler(eventName)
         */
        raiseEvent: function(t, r) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, t))
            return e.console.error(`Error adding handler for ${t}. ${this._rejectedEventList[t]}`), !1;
          var i = this.getHandler(t);
          return i && i(this, r || {}), !0;
        },
        /**
         * Set an event name as being disabled, and provide an optional error message
         * to be printed to the console
         * @param {String} eventName - Name of the event
         * @param {String} [errorMessage] - Optional string to print to the console
         * @private
         */
        rejectEventHandler(t, r = "") {
          this._rejectedEventList[t] = r;
        },
        /**
         * Explicitly allow an event handler to be added for this event type, undoing
         * the effects of rejectEventHandler
         * @param {String} eventName - Name of the event
         * @private
         */
        allowEventHandler(t) {
          delete this._rejectedEventList[t];
        }
      };
    }(g), function(e) {
      var t = {};
      e.MouseTracker = function(f) {
        var c = arguments;
        e.isPlainObject(f) || (f = {
          element: c[0],
          clickTimeThreshold: c[1],
          clickDistThreshold: c[2]
        }), this.hash = Math.random(), this.element = e.getElement(f.element), this.clickTimeThreshold = f.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = f.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = f.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = f.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = f.userData || null, this.stopDelay = f.stopDelay || 50, this.preProcessEventHandler = f.preProcessEventHandler || null, this.contextMenuHandler = f.contextMenuHandler || null, this.enterHandler = f.enterHandler || null, this.leaveHandler = f.leaveHandler || null, this.exitHandler = f.exitHandler || null, this.overHandler = f.overHandler || null, this.outHandler = f.outHandler || null, this.pressHandler = f.pressHandler || null, this.nonPrimaryPressHandler = f.nonPrimaryPressHandler || null, this.releaseHandler = f.releaseHandler || null, this.nonPrimaryReleaseHandler = f.nonPrimaryReleaseHandler || null, this.moveHandler = f.moveHandler || null, this.scrollHandler = f.scrollHandler || null, this.clickHandler = f.clickHandler || null, this.dblClickHandler = f.dblClickHandler || null, this.dragHandler = f.dragHandler || null, this.dragEndHandler = f.dragEndHandler || null, this.pinchHandler = f.pinchHandler || null, this.stopHandler = f.stopHandler || null, this.keyDownHandler = f.keyDownHandler || null, this.keyUpHandler = f.keyUpHandler || null, this.keyHandler = f.keyHandler || null, this.focusHandler = f.focusHandler || null, this.blurHandler = f.blurHandler || null;
        var m = this;
        t[this.hash] = {
          click: function(T) {
            C(m, T);
          },
          dblclick: function(T) {
            M(m, T);
          },
          keydown: function(T) {
            F(m, T);
          },
          keyup: function(T) {
            L(m, T);
          },
          keypress: function(T) {
            N(m, T);
          },
          focus: function(T) {
            V(m, T);
          },
          blur: function(T) {
            j(m, T);
          },
          contextmenu: function(T) {
            Q(m, T);
          },
          wheel: function(T) {
            Z(m, T);
          },
          mousewheel: function(T) {
            U(m, T);
          },
          DOMMouseScroll: function(T) {
            U(m, T);
          },
          MozMousePixelScroll: function(T) {
            U(m, T);
          },
          losecapture: function(T) {
            te(m, T);
          },
          mouseenter: function(T) {
            W(m, T);
          },
          mouseleave: function(T) {
            fe(m, T);
          },
          mouseover: function(T) {
            pe(m, T);
          },
          mouseout: function(T) {
            ge(m, T);
          },
          mousedown: function(T) {
            le(m, T);
          },
          mouseup: function(T) {
            me(m, T);
          },
          mousemove: function(T) {
            ye(m, T);
          },
          touchstart: function(T) {
            $(m, T);
          },
          touchend: function(T) {
            ee(m, T);
          },
          touchmove: function(T) {
            re(m, T);
          },
          touchcancel: function(T) {
            ie(m, T);
          },
          gesturestart: function(T) {
            oe(m, T);
          },
          // Safari/Safari iOS
          gesturechange: function(T) {
            ae(m, T);
          },
          // Safari/Safari iOS
          gotpointercapture: function(T) {
            Ce(m, T);
          },
          lostpointercapture: function(T) {
            Re(m, T);
          },
          pointerenter: function(T) {
            W(m, T);
          },
          pointerleave: function(T) {
            fe(m, T);
          },
          pointerover: function(T) {
            pe(m, T);
          },
          pointerout: function(T) {
            ge(m, T);
          },
          pointerdown: function(T) {
            le(m, T);
          },
          pointerup: function(T) {
            me(m, T);
          },
          pointermove: function(T) {
            ye(m, T);
          },
          pointercancel: function(T) {
            Oe(m, T);
          },
          pointerupcaptured: function(T) {
            De(m, T);
          },
          pointermovecaptured: function(T) {
            Ae(m, T);
          },
          tracking: !1,
          // Active pointers lists. Array of GesturePointList objects, one for each pointer device type.
          // GesturePointList objects are added each time a pointer is tracked by a new pointer device type (see getActivePointersListByType()).
          // Active pointers are any pointer being tracked for this element which are in the hit-test area
          //     of the element (for hover-capable devices) and/or have contact or a button press initiated in the element.
          activePointersLists: [],
          // Tracking for double-click gesture
          lastClickPos: null,
          dblClickTimeOut: null,
          // Tracking for pinch gesture
          pinchGPoints: [],
          lastPinchDist: 0,
          currentPinchDist: 0,
          lastPinchCenter: null,
          currentPinchCenter: null,
          // Tracking for drag
          sentDragEvent: !1
        }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), f.startDisabled || this.setTracking(!0);
      }, e.MouseTracker.prototype = {
        /**
         * Clean up any events or objects created by the tracker.
         * @function
         */
        destroy: function() {
          s(this), this.element = null, t[this.hash] = null, delete t[this.hash];
        },
        /**
         * Are we currently tracking events on this element.
         * @deprecated Just use this.tracking
         * @function
         * @returns {Boolean} Are we currently tracking events on this element.
         */
        isTracking: function() {
          return t[this.hash].tracking;
        },
        /**
         * Enable or disable whether or not we are tracking events on this element.
         * @function
         * @param {Boolean} track True to start tracking, false to stop tracking.
         * @returns {OpenSeadragon.MouseTracker} Chainable.
         */
        setTracking: function(f) {
          return f ? o(this) : s(this), this;
        },
        /**
         * Returns the {@link OpenSeadragon.MouseTracker.GesturePointList|GesturePointList} for the given pointer device type,
         * creating and caching a new {@link OpenSeadragon.MouseTracker.GesturePointList|GesturePointList} if one doesn't already exist for the type.
         * @function
         * @param {String} type - The pointer device type: "mouse", "touch", "pen", etc.
         * @returns {OpenSeadragon.MouseTracker.GesturePointList}
         */
        getActivePointersListByType: function(f) {
          var c = t[this.hash], m, T = c ? c.activePointersLists.length : 0, b;
          for (m = 0; m < T; m++)
            if (c.activePointersLists[m].type === f)
              return c.activePointersLists[m];
          return b = new e.MouseTracker.GesturePointList(f), c && c.activePointersLists.push(b), b;
        },
        /**
         * Returns the total number of pointers currently active on the tracked element.
         * @function
         * @returns {Number}
         */
        getActivePointerCount: function() {
          var f = t[this.hash], c, m = f.activePointersLists.length, T = 0;
          for (c = 0; c < m; c++)
            T += f.activePointersLists[c].getLength();
          return T;
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {OpenSeadragon.MouseTracker.EventProcessInfo} eventInfo
         */
        preProcessEventHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Boolean} event.preventDefault
         *      Set to true to prevent the default user-agent's handling of the contextmenu event.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        contextMenuHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Number} event.pointers
         *      Number of pointers (all types) active in the tracked element.
         * @param {Boolean} event.insideElementPressed
         *      True if the left mouse button is currently being pressed and was
         *      initiated inside the tracked element, otherwise false.
         * @param {Boolean} event.buttonDownAny
         *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        enterHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @since v2.5.0
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Number} event.pointers
         *      Number of pointers (all types) active in the tracked element.
         * @param {Boolean} event.insideElementPressed
         *      True if the left mouse button is currently being pressed and was
         *      initiated inside the tracked element, otherwise false.
         * @param {Boolean} event.buttonDownAny
         *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        leaveHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @deprecated v2.5.0 Use leaveHandler instead
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Number} event.pointers
         *      Number of pointers (all types) active in the tracked element.
         * @param {Boolean} event.insideElementPressed
         *      True if the left mouse button is currently being pressed and was
         *      initiated inside the tracked element, otherwise false.
         * @param {Boolean} event.buttonDownAny
         *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        exitHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @since v2.5.0
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Number} event.pointers
         *      Number of pointers (all types) active in the tracked element.
         * @param {Boolean} event.insideElementPressed
         *      True if the left mouse button is currently being pressed and was
         *      initiated inside the tracked element, otherwise false.
         * @param {Boolean} event.buttonDownAny
         *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        overHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @since v2.5.0
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Number} event.pointers
         *      Number of pointers (all types) active in the tracked element.
         * @param {Boolean} event.insideElementPressed
         *      True if the left mouse button is currently being pressed and was
         *      initiated inside the tracked element, otherwise false.
         * @param {Boolean} event.buttonDownAny
         *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        outHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        pressHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.button
         *      Button which caused the event.
         *      -1: none, 0: primary/left, 1: aux/middle, 2: secondary/right, 3: X1/back, 4: X2/forward, 5: pen eraser.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        nonPrimaryPressHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Boolean} event.insideElementPressed
         *      True if the left mouse button is currently being pressed and was
         *      initiated inside the tracked element, otherwise false.
         * @param {Boolean} event.insideElementReleased
         *      True if the cursor inside the tracked element when the button was released.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        releaseHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.button
         *      Button which caused the event.
         *      -1: none, 0: primary/left, 1: aux/middle, 2: secondary/right, 3: X1/back, 4: X2/forward, 5: pen eraser.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        nonPrimaryReleaseHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        moveHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.scroll
         *      The scroll delta for the event.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead. Touch devices no longer generate scroll event.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Boolean} event.preventDefault
         *      Set to true to prevent the default user-agent's handling of the wheel event.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        scrollHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Boolean} event.quick
         *      True only if the clickDistThreshold and clickTimeThreshold are both passed. Useful for ignoring drag events.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Element} event.originalTarget
         *      The DOM element clicked on.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        clickHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        dblClickHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {OpenSeadragon.Point} event.delta
         *      The x,y components of the difference between the current position and the last drag event position.  Useful for ignoring or weighting the events.
         * @param {Number} event.speed
         *     Current computed speed, in pixels per second.
         * @param {Number} event.direction
         *     Current computed direction, expressed as an angle counterclockwise relative to the positive X axis (-pi to pi, in radians). Only valid if speed > 0.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        dragHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.speed
         *     Speed at the end of a drag gesture, in pixels per second.
         * @param {Number} event.direction
         *     Direction at the end of a drag gesture, expressed as an angle counterclockwise relative to the positive X axis (-pi to pi, in radians). Only valid if speed > 0.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        dragEndHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {Array.<OpenSeadragon.MouseTracker.GesturePoint>} event.gesturePoints
         *      Gesture points associated with the gesture. Velocity data can be found here.
         * @param {OpenSeadragon.Point} event.lastCenter
         *      The previous center point of the two pinch contact points relative to the tracked element.
         * @param {OpenSeadragon.Point} event.center
         *      The center point of the two pinch contact points relative to the tracked element.
         * @param {Number} event.lastDistance
         *      The previous distance between the two pinch contact points in CSS pixels.
         * @param {Number} event.distance
         *      The distance between the two pinch contact points in CSS pixels.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        pinchHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {String} event.pointerType
         *     "mouse", "touch", "pen", etc.
         * @param {OpenSeadragon.Point} event.position
         *      The position of the event relative to the tracked element.
         * @param {Number} event.buttons
         *      Current buttons pressed.
         *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
         * @param {Boolean} event.isTouchEvent
         *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        stopHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {Number} event.keyCode
         *      The key code that was pressed.
         * @param {Boolean} event.ctrl
         *      True if the ctrl key was pressed during this event.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.alt
         *      True if the alt key was pressed during this event.
         * @param {Boolean} event.meta
         *      True if the meta key was pressed during this event.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Boolean} event.preventDefault
         *      Set to true to prevent the default user-agent's handling of the keydown event.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        keyDownHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {Number} event.keyCode
         *      The key code that was pressed.
         * @param {Boolean} event.ctrl
         *      True if the ctrl key was pressed during this event.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.alt
         *      True if the alt key was pressed during this event.
         * @param {Boolean} event.meta
         *      True if the meta key was pressed during this event.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Boolean} event.preventDefault
         *      Set to true to prevent the default user-agent's handling of the keyup event.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        keyUpHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {Number} event.keyCode
         *      The key code that was pressed.
         * @param {Boolean} event.ctrl
         *      True if the ctrl key was pressed during this event.
         * @param {Boolean} event.shift
         *      True if the shift key was pressed during this event.
         * @param {Boolean} event.alt
         *      True if the alt key was pressed during this event.
         * @param {Boolean} event.meta
         *      True if the meta key was pressed during this event.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Boolean} event.preventDefault
         *      Set to true to prevent the default user-agent's handling of the keypress event.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        keyHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        focusHandler: function() {
        },
        /**
         * Implement or assign implementation to these handlers during or after
         * calling the constructor.
         * @function
         * @param {Object} event
         * @param {OpenSeadragon.MouseTracker} event.eventSource
         *      A reference to the tracker instance.
         * @param {Object} event.originalEvent
         *      The original event object.
         * @param {Object} event.userData
         *      Arbitrary user-defined object.
         */
        blurHandler: function() {
        }
      };
      var r = function() {
        try {
          return window.self !== window.top;
        } catch {
          return !0;
        }
      }();
      function i(f) {
        try {
          return f.addEventListener && f.removeEventListener;
        } catch {
          return !1;
        }
      }
      e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ function() {
        var f = [], c = 0, m = 0, T = function(q, H) {
          return q.hash.toString() + H.type + H.id.toString();
        }, b = function() {
          var q, H = f.length, se, J, ue = e.now(), $e, et, tt;
          for ($e = ue - m, m = ue, q = 0; q < H; q++)
            se = f[q], J = se.gPoint, J.direction = Math.atan2(J.currentPos.y - se.lastPos.y, J.currentPos.x - se.lastPos.x), et = se.lastPos.distanceTo(J.currentPos), se.lastPos = J.currentPos, tt = 1e3 * et / ($e + 1), J.speed = 0.75 * tt + 0.25 * J.speed;
        }, A = function(q, H) {
          var se = T(q, H);
          f.push(
            {
              guid: se,
              gPoint: H,
              lastPos: H.currentPos
            }
          ), f.length === 1 && (m = e.now(), c = window.setInterval(b, 50));
        }, I = function(q, H) {
          var se = T(q, H), J, ue = f.length;
          for (J = 0; J < ue; J++)
            if (f[J].guid === se) {
              f.splice(J, 1), ue--, ue === 0 && window.clearInterval(c);
              break;
            }
        };
        return {
          addPoint: A,
          removePoint: I
        };
      }(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : (
        // Modern browsers support 'wheel'
        document.onmousewheel !== void 0 ? "mousewheel" : (
          // Webkit (and unsupported IE) support at least 'mousewheel'
          "DOMMouseScroll"
        )
      ), e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = function() {
        var f = document.createElement("div");
        return e.isFunction(f.setPointerCapture) && e.isFunction(f.releasePointerCapture);
      }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = !1, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = function() {
        var f = document.createElement("div");
        return e.isFunction(f.setCapture) && e.isFunction(f.releaseCapture);
      }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(f) {
        this._gPoints = [], this.type = f, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
      }, e.MouseTracker.GesturePointList.prototype = {
        /**
         * @function
         * @returns {Number} Number of gesture points in the list.
         */
        getLength: function() {
          return this._gPoints.length;
        },
        /**
         * @function
         * @returns {Array.<OpenSeadragon.MouseTracker.GesturePoint>} The list of gesture points in the list as an array (read-only).
         */
        asArray: function() {
          return this._gPoints;
        },
        /**
         * @function
         * @param {OpenSeadragon.MouseTracker.GesturePoint} gesturePoint - A gesture point to add to the list.
         * @returns {Number} Number of gesture points in the list.
         */
        add: function(f) {
          return this._gPoints.push(f);
        },
        /**
         * @function
         * @param {Number} id - The id of the gesture point to remove from the list.
         * @returns {Number} Number of gesture points in the list.
         */
        removeById: function(f) {
          var c, m = this._gPoints.length;
          for (c = 0; c < m; c++)
            if (this._gPoints[c].id === f) {
              this._gPoints.splice(c, 1);
              break;
            }
          return this._gPoints.length;
        },
        /**
         * @function
         * @param {Number} index - The index of the gesture point to retrieve from the list.
         * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The gesture point at the given index, or null if not found.
         */
        getByIndex: function(f) {
          return f < this._gPoints.length ? this._gPoints[f] : null;
        },
        /**
         * @function
         * @param {Number} id - The id of the gesture point to retrieve from the list.
         * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The gesture point with the given id, or null if not found.
         */
        getById: function(f) {
          var c, m = this._gPoints.length;
          for (c = 0; c < m; c++)
            if (this._gPoints[c].id === f)
              return this._gPoints[c];
          return null;
        },
        /**
         * @function
         * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The primary gesture point in the list, or null if not found.
         */
        getPrimary: function(f) {
          var c, m = this._gPoints.length;
          for (c = 0; c < m; c++)
            if (this._gPoints[c].isPrimary)
              return this._gPoints[c];
          return null;
        },
        /**
         * Increment this pointer list's contact count.
         * It will evaluate whether this pointer type is allowed to have multiple contacts.
         * @function
         */
        addContact: function() {
          ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
        },
        /**
         * Decrement this pointer list's contact count.
         * It will make sure the count does not go below 0.
         * @function
         */
        removeContact: function() {
          --this.contacts, this.contacts < 0 && (this.contacts = 0);
        }
      };
      function n(f) {
        var c = t[f.hash], m, T, b, A, I, q = c.activePointersLists.length;
        for (m = 0; m < q; m++)
          if (b = c.activePointersLists[m], b.getLength() > 0) {
            for (I = [], A = b.asArray(), T = 0; T < A.length; T++)
              I.push(A[T]);
            for (T = 0; T < I.length; T++)
              he(f, b, I[T]);
          }
        for (m = 0; m < q; m++)
          c.activePointersLists.pop();
        c.sentDragEvent = !1;
      }
      function o(f) {
        var c = t[f.hash], m, T;
        if (!c.tracking) {
          for (T = 0; T < e.MouseTracker.subscribeEvents.length; T++)
            m = e.MouseTracker.subscribeEvents[T], e.addEvent(
              f.element,
              m,
              c[m],
              m === e.MouseTracker.wheelEventName ? { passive: !1, capture: !1 } : !1
            );
          n(f), c.tracking = !0;
        }
      }
      function s(f) {
        var c = t[f.hash], m, T;
        if (c.tracking) {
          for (T = 0; T < e.MouseTracker.subscribeEvents.length; T++)
            m = e.MouseTracker.subscribeEvents[T], e.removeEvent(
              f.element,
              m,
              c[m],
              !1
            );
          n(f), c.tracking = !1;
        }
      }
      function a(f, c) {
        var m = t[f.hash];
        if (c === "pointerevent")
          return {
            upName: "pointerup",
            upHandler: m.pointerupcaptured,
            moveName: "pointermove",
            moveHandler: m.pointermovecaptured
          };
        if (c === "mouse")
          return {
            upName: "pointerup",
            upHandler: m.pointerupcaptured,
            moveName: "pointermove",
            moveHandler: m.pointermovecaptured
          };
        if (c === "touch")
          return {
            upName: "touchend",
            upHandler: m.touchendcaptured,
            moveName: "touchmove",
            moveHandler: m.touchmovecaptured
          };
        throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
      }
      function l(f, c) {
        var m;
        if (e.MouseTracker.havePointerCapture)
          if (e.MouseTracker.havePointerEvents)
            try {
              f.element.setPointerCapture(c.id);
            } catch {
              e.console.warn("setPointerCapture() called on invalid pointer ID");
              return;
            }
          else
            f.element.setCapture(!0);
        else
          m = a(f, e.MouseTracker.havePointerEvents ? "pointerevent" : c.type), r && i(window.top) && e.addEvent(
            window.top,
            m.upName,
            m.upHandler,
            !0
          ), e.addEvent(
            e.MouseTracker.captureElement,
            m.upName,
            m.upHandler,
            !0
          ), e.addEvent(
            e.MouseTracker.captureElement,
            m.moveName,
            m.moveHandler,
            !0
          );
        S(f, c, !0);
      }
      function h(f, c) {
        var m, T, b;
        if (e.MouseTracker.havePointerCapture)
          if (e.MouseTracker.havePointerEvents) {
            if (T = f.getActivePointersListByType(c.type), b = T.getById(c.id), !b || !b.captured)
              return;
            try {
              f.element.releasePointerCapture(c.id);
            } catch {
            }
          } else
            f.element.releaseCapture();
        else
          m = a(f, e.MouseTracker.havePointerEvents ? "pointerevent" : c.type), r && i(window.top) && e.removeEvent(
            window.top,
            m.upName,
            m.upHandler,
            !0
          ), e.removeEvent(
            e.MouseTracker.captureElement,
            m.moveName,
            m.moveHandler,
            !0
          ), e.removeEvent(
            e.MouseTracker.captureElement,
            m.upName,
            m.upHandler,
            !0
          );
        S(f, c, !1);
      }
      function d(f) {
        return e.MouseTracker.havePointerEvents ? f.pointerId : e.MouseTracker.mousePointerId;
      }
      function p(f) {
        return e.MouseTracker.havePointerEvents && f.pointerType ? f.pointerType : "mouse";
      }
      function w(f) {
        return e.MouseTracker.havePointerEvents ? f.isPrimary : !0;
      }
      function y(f) {
        return e.getMousePosition(f);
      }
      function _(f, c) {
        return E(y(f), c);
      }
      function E(f, c) {
        var m = e.getElementOffset(c);
        return f.minus(m);
      }
      function P(f, c) {
        return new e.Point((f.x + c.x) / 2, (f.y + c.y) / 2);
      }
      function C(f, c) {
        var m = {
          originalEvent: c,
          eventType: "click",
          pointerType: "mouse",
          isEmulated: !1
        };
        v(f, m), m.preventDefault && !m.defaultPrevented && e.cancelEvent(c), m.stopPropagation && e.stopEvent(c);
      }
      function M(f, c) {
        var m = {
          originalEvent: c,
          eventType: "dblclick",
          pointerType: "mouse",
          isEmulated: !1
        };
        v(f, m), m.preventDefault && !m.defaultPrevented && e.cancelEvent(c), m.stopPropagation && e.stopEvent(c);
      }
      function F(f, c) {
        var m = null, T = {
          originalEvent: c,
          eventType: "keydown",
          pointerType: "",
          isEmulated: !1
        };
        v(f, T), f.keyDownHandler && !T.preventGesture && !T.defaultPrevented && (m = {
          eventSource: f,
          keyCode: c.keyCode ? c.keyCode : c.charCode,
          ctrl: c.ctrlKey,
          shift: c.shiftKey,
          alt: c.altKey,
          meta: c.metaKey,
          originalEvent: c,
          preventDefault: T.preventDefault || T.defaultPrevented,
          userData: f.userData
        }, f.keyDownHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function L(f, c) {
        var m = null, T = {
          originalEvent: c,
          eventType: "keyup",
          pointerType: "",
          isEmulated: !1
        };
        v(f, T), f.keyUpHandler && !T.preventGesture && !T.defaultPrevented && (m = {
          eventSource: f,
          keyCode: c.keyCode ? c.keyCode : c.charCode,
          ctrl: c.ctrlKey,
          shift: c.shiftKey,
          alt: c.altKey,
          meta: c.metaKey,
          originalEvent: c,
          preventDefault: T.preventDefault || T.defaultPrevented,
          userData: f.userData
        }, f.keyUpHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function N(f, c) {
        var m = null, T = {
          originalEvent: c,
          eventType: "keypress",
          pointerType: "",
          isEmulated: !1
        };
        v(f, T), f.keyHandler && !T.preventGesture && !T.defaultPrevented && (m = {
          eventSource: f,
          keyCode: c.keyCode ? c.keyCode : c.charCode,
          ctrl: c.ctrlKey,
          shift: c.shiftKey,
          alt: c.altKey,
          meta: c.metaKey,
          originalEvent: c,
          preventDefault: T.preventDefault || T.defaultPrevented,
          userData: f.userData
        }, f.keyHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function V(f, c) {
        var m = {
          originalEvent: c,
          eventType: "focus",
          pointerType: "",
          isEmulated: !1
        };
        v(f, m), f.focusHandler && !m.preventGesture && f.focusHandler(
          {
            eventSource: f,
            originalEvent: c,
            userData: f.userData
          }
        );
      }
      function j(f, c) {
        var m = {
          originalEvent: c,
          eventType: "blur",
          pointerType: "",
          isEmulated: !1
        };
        v(f, m), f.blurHandler && !m.preventGesture && f.blurHandler(
          {
            eventSource: f,
            originalEvent: c,
            userData: f.userData
          }
        );
      }
      function Q(f, c) {
        var m = null, T = {
          originalEvent: c,
          eventType: "contextmenu",
          pointerType: "mouse",
          isEmulated: !1
        };
        v(f, T), f.contextMenuHandler && !T.preventGesture && !T.defaultPrevented && (m = {
          eventSource: f,
          position: E(y(c), f.element),
          originalEvent: T.originalEvent,
          preventDefault: T.preventDefault || T.defaultPrevented,
          userData: f.userData
        }, f.contextMenuHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function Z(f, c) {
        Y(f, c, c);
      }
      function U(f, c) {
        var m = {
          target: c.target || c.srcElement,
          type: "wheel",
          shiftKey: c.shiftKey || !1,
          clientX: c.clientX,
          clientY: c.clientY,
          pageX: c.pageX ? c.pageX : c.clientX,
          pageY: c.pageY ? c.pageY : c.clientY,
          deltaMode: c.type === "MozMousePixelScroll" ? 0 : 1,
          // 0=pixel, 1=line, 2=page
          deltaX: 0,
          deltaZ: 0
        };
        e.MouseTracker.wheelEventName === "mousewheel" ? m.deltaY = -c.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : m.deltaY = c.detail, Y(f, m, c);
      }
      function Y(f, c, m) {
        var T = 0, b, A = null;
        T = c.deltaY ? c.deltaY < 0 ? 1 : -1 : 0, b = {
          originalEvent: c,
          eventType: "wheel",
          pointerType: "mouse",
          isEmulated: c !== m
        }, v(f, b), f.scrollHandler && !b.preventGesture && !b.defaultPrevented && (A = {
          eventSource: f,
          pointerType: "mouse",
          position: _(c, f.element),
          scroll: T,
          shift: c.shiftKey,
          isTouchEvent: !1,
          originalEvent: m,
          preventDefault: b.preventDefault || b.defaultPrevented,
          userData: f.userData
        }, f.scrollHandler(A)), b.stopPropagation && e.stopEvent(m), (A && A.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(m);
      }
      function te(f, c) {
        var m = {
          id: e.MouseTracker.mousePointerId,
          type: "mouse"
        }, T = {
          originalEvent: c,
          eventType: "lostpointercapture",
          pointerType: "mouse",
          isEmulated: !1
        };
        v(f, T), c.target === f.element && S(f, m, !1), T.stopPropagation && e.stopEvent(c);
      }
      function $(f, c) {
        var m, T, b = c.changedTouches.length, A, I = f.getActivePointersListByType("touch");
        m = e.now(), I.getLength() > c.touches.length - b && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
        var q = {
          originalEvent: c,
          eventType: "pointerdown",
          pointerType: "touch",
          isEmulated: !1
        };
        for (v(f, q), T = 0; T < b; T++)
          A = {
            id: c.changedTouches[T].identifier,
            type: "touch",
            // Simulate isPrimary
            isPrimary: I.getLength() === 0,
            currentPos: y(c.changedTouches[T]),
            currentTime: m
          }, D(f, q, A), z(f, q, A, 0), S(f, A, !0);
        q.preventDefault && !q.defaultPrevented && e.cancelEvent(c), q.stopPropagation && e.stopEvent(c);
      }
      function ee(f, c) {
        var m, T, b = c.changedTouches.length, A;
        m = e.now();
        var I = {
          originalEvent: c,
          eventType: "pointerup",
          pointerType: "touch",
          isEmulated: !1
        };
        for (v(f, I), T = 0; T < b; T++)
          A = {
            id: c.changedTouches[T].identifier,
            type: "touch",
            currentPos: y(c.changedTouches[T]),
            currentTime: m
          }, G(f, I, A, 0), S(f, A, !1), O(f, I, A);
        I.preventDefault && !I.defaultPrevented && e.cancelEvent(c), I.stopPropagation && e.stopEvent(c);
      }
      function re(f, c) {
        var m, T, b = c.changedTouches.length, A;
        m = e.now();
        var I = {
          originalEvent: c,
          eventType: "pointermove",
          pointerType: "touch",
          isEmulated: !1
        };
        for (v(f, I), T = 0; T < b; T++)
          A = {
            id: c.changedTouches[T].identifier,
            type: "touch",
            currentPos: y(c.changedTouches[T]),
            currentTime: m
          }, X(f, I, A);
        I.preventDefault && !I.defaultPrevented && e.cancelEvent(c), I.stopPropagation && e.stopEvent(c);
      }
      function ie(f, c) {
        var m = c.changedTouches.length, T, b, A = {
          originalEvent: c,
          eventType: "pointercancel",
          pointerType: "touch",
          isEmulated: !1
        };
        for (v(f, A), T = 0; T < m; T++)
          b = {
            id: c.changedTouches[T].identifier,
            type: "touch"
          }, k(f, A, b);
        A.stopPropagation && e.stopEvent(c);
      }
      function oe(f, c) {
        return e.eventIsCanceled(c) || c.preventDefault(), !1;
      }
      function ae(f, c) {
        return e.eventIsCanceled(c) || c.preventDefault(), !1;
      }
      function Ce(f, c) {
        var m = {
          originalEvent: c,
          eventType: "gotpointercapture",
          pointerType: p(c),
          isEmulated: !1
        };
        v(f, m), c.target === f.element && S(f, {
          id: c.pointerId,
          type: p(c)
        }, !0), m.stopPropagation && e.stopEvent(c);
      }
      function Re(f, c) {
        var m = {
          originalEvent: c,
          eventType: "lostpointercapture",
          pointerType: p(c),
          isEmulated: !1
        };
        v(f, m), c.target === f.element && S(f, {
          id: c.pointerId,
          type: p(c)
        }, !1), m.stopPropagation && e.stopEvent(c);
      }
      function W(f, c) {
        var m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        }, T = {
          originalEvent: c,
          eventType: "pointerenter",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), D(f, T, m);
      }
      function fe(f, c) {
        var m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        }, T = {
          originalEvent: c,
          eventType: "pointerleave",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), O(f, T, m);
      }
      function pe(f, c) {
        var m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        }, T = {
          originalEvent: c,
          eventType: "pointerover",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), B(f, T, m), T.preventDefault && !T.defaultPrevented && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function ge(f, c) {
        var m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        }, T = {
          originalEvent: c,
          eventType: "pointerout",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), R(f, T, m), T.preventDefault && !T.defaultPrevented && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function le(f, c) {
        var m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        }, T = e.MouseTracker.havePointerEvents && m.type === "touch", b = {
          originalEvent: c,
          eventType: "pointerdown",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, b), z(f, b, m, c.button), b.preventDefault && !b.defaultPrevented && e.cancelEvent(c), b.stopPropagation && e.stopEvent(c), b.shouldCapture && (T ? S(f, m, !0) : l(f, m));
      }
      function me(f, c) {
        ve(f, c);
      }
      function De(f, c) {
        var m = f.getActivePointersListByType(p(c));
        m.getById(c.pointerId) && ve(f, c), e.stopEvent(c);
      }
      function ve(f, c) {
        var m;
        m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        };
        var T = {
          originalEvent: c,
          eventType: "pointerup",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), G(f, T, m, c.button), T.preventDefault && !T.defaultPrevented && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c), T.shouldReleaseCapture && (c.target === f.element ? h(f, m) : S(f, m, !1));
      }
      function ye(f, c) {
        we(f, c);
      }
      function Ae(f, c) {
        var m = f.getActivePointersListByType(p(c));
        m.getById(c.pointerId) && we(f, c), e.stopEvent(c);
      }
      function we(f, c) {
        var m = {
          id: d(c),
          type: p(c),
          isPrimary: w(c),
          currentPos: y(c),
          currentTime: e.now()
        }, T = {
          originalEvent: c,
          eventType: "pointermove",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), X(f, T, m), T.preventDefault && !T.defaultPrevented && e.cancelEvent(c), T.stopPropagation && e.stopEvent(c);
      }
      function Oe(f, c) {
        var m = {
          id: c.pointerId,
          type: p(c)
        }, T = {
          originalEvent: c,
          eventType: "pointercancel",
          pointerType: m.type,
          isEmulated: !1
        };
        v(f, T), k(f, T, m), T.stopPropagation && e.stopEvent(c);
      }
      function ce(f, c) {
        return c.speed = 0, c.direction = 0, c.contactPos = c.currentPos, c.contactTime = c.currentTime, c.lastPos = c.currentPos, c.lastTime = c.currentTime, f.add(c);
      }
      function he(f, c, m) {
        var T, b = c.getById(m.id);
        return b ? (b.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), h(f, b)), c.removeContact(), T = c.removeById(m.id)) : T = c.getLength(), T;
      }
      function u(f, c) {
        switch (c.eventType) {
          case "pointermove":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !1, c.preventGesture = !f.hasGestureHandlers, c.stopPropagation = !1;
            break;
          case "pointerover":
          case "pointerout":
          case "contextmenu":
          case "keydown":
          case "keyup":
          case "keypress":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !1, c.preventGesture = !1, c.stopPropagation = !1;
            break;
          case "pointerdown":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !1, c.preventGesture = !f.hasGestureHandlers, c.stopPropagation = !1;
            break;
          case "pointerup":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !1, c.preventGesture = !f.hasGestureHandlers, c.stopPropagation = !1;
            break;
          case "wheel":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !1, c.preventGesture = !f.hasScrollHandler, c.stopPropagation = !1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
            c.isStoppable = !0, c.isCancelable = !1, c.preventDefault = !1, c.preventGesture = !1, c.stopPropagation = !1;
            break;
          case "click":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !!f.clickHandler, c.preventGesture = !1, c.stopPropagation = !1;
            break;
          case "dblclick":
            c.isStoppable = !0, c.isCancelable = !0, c.preventDefault = !!f.dblClickHandler, c.preventGesture = !1, c.stopPropagation = !1;
            break;
          case "focus":
          case "blur":
          case "pointerenter":
          case "pointerleave":
          default:
            c.isStoppable = !1, c.isCancelable = !1, c.preventDefault = !1, c.preventGesture = !1, c.stopPropagation = !1;
            break;
        }
      }
      function v(f, c) {
        c.eventSource = f, c.eventPhase = c.originalEvent && typeof c.originalEvent.eventPhase < "u" ? c.originalEvent.eventPhase : 0, c.defaultPrevented = e.eventIsCanceled(c.originalEvent), c.shouldCapture = !1, c.shouldReleaseCapture = !1, c.userData = f.userData, u(f, c), f.preProcessEventHandler && f.preProcessEventHandler(c);
      }
      function S(f, c, m) {
        var T = f.getActivePointersListByType(c.type), b = T.getById(c.id);
        b ? m && !b.captured ? (b.captured = !0, T.captureCount++) : !m && b.captured && (b.captured = !1, T.captureCount--, T.captureCount < 0 && (T.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
      }
      function D(f, c, m) {
        var T = f.getActivePointersListByType(m.type), b;
        b = T.getById(m.id), b ? (b.insideElement = !0, b.lastPos = b.currentPos, b.lastTime = b.currentTime, b.currentPos = m.currentPos, b.currentTime = m.currentTime, m = b) : (m.captured = !1, m.insideElementPressed = !1, m.insideElement = !0, ce(T, m)), f.enterHandler && f.enterHandler(
          {
            eventSource: f,
            pointerType: m.type,
            position: E(m.currentPos, f.element),
            buttons: T.buttons,
            pointers: f.getActivePointerCount(),
            insideElementPressed: m.insideElementPressed,
            buttonDownAny: T.buttons !== 0,
            isTouchEvent: m.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        );
      }
      function O(f, c, m) {
        var T = f.getActivePointersListByType(m.type), b, A;
        b = T.getById(m.id), b ? (b.captured ? (b.insideElement = !1, b.lastPos = b.currentPos, b.lastTime = b.currentTime, b.currentPos = m.currentPos, b.currentTime = m.currentTime) : he(f, T, b), m = b) : (m.captured = !1, m.insideElementPressed = !1), (f.leaveHandler || f.exitHandler) && (A = {
          eventSource: f,
          pointerType: m.type,
          // GitHub PR: https://github.com/openseadragon/openseadragon/pull/1754 (gPoint.currentPos && )
          position: m.currentPos && E(m.currentPos, f.element),
          buttons: T.buttons,
          pointers: f.getActivePointerCount(),
          insideElementPressed: m.insideElementPressed,
          buttonDownAny: T.buttons !== 0,
          isTouchEvent: m.type === "touch",
          originalEvent: c.originalEvent,
          userData: f.userData
        }, f.leaveHandler && f.leaveHandler(A), f.exitHandler && f.exitHandler(A));
      }
      function B(f, c, m) {
        var T, b;
        T = f.getActivePointersListByType(m.type), b = T.getById(m.id), b ? m = b : (m.captured = !1, m.insideElementPressed = !1), f.overHandler && f.overHandler(
          {
            eventSource: f,
            pointerType: m.type,
            position: E(m.currentPos, f.element),
            buttons: T.buttons,
            pointers: f.getActivePointerCount(),
            insideElementPressed: m.insideElementPressed,
            buttonDownAny: T.buttons !== 0,
            isTouchEvent: m.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        );
      }
      function R(f, c, m) {
        var T, b;
        T = f.getActivePointersListByType(m.type), b = T.getById(m.id), b ? m = b : (m.captured = !1, m.insideElementPressed = !1), f.outHandler && f.outHandler({
          eventSource: f,
          pointerType: m.type,
          position: m.currentPos && E(m.currentPos, f.element),
          buttons: T.buttons,
          pointers: f.getActivePointerCount(),
          insideElementPressed: m.insideElementPressed,
          buttonDownAny: T.buttons !== 0,
          isTouchEvent: m.type === "touch",
          originalEvent: c.originalEvent,
          userData: f.userData
        });
      }
      function z(f, c, m, T) {
        var b = t[f.hash], A = f.getActivePointersListByType(m.type), I;
        if (typeof c.originalEvent.buttons < "u" ? A.buttons = c.originalEvent.buttons : T === 0 ? A.buttons |= 1 : T === 1 ? A.buttons |= 4 : T === 2 ? A.buttons |= 2 : T === 3 ? A.buttons |= 8 : T === 4 ? A.buttons |= 16 : T === 5 && (A.buttons |= 32), T !== 0) {
          c.shouldCapture = !1, c.shouldReleaseCapture = !1, f.nonPrimaryPressHandler && !c.preventGesture && !c.defaultPrevented && (c.preventDefault = !0, f.nonPrimaryPressHandler(
            {
              eventSource: f,
              pointerType: m.type,
              position: E(m.currentPos, f.element),
              button: T,
              buttons: A.buttons,
              isTouchEvent: m.type === "touch",
              originalEvent: c.originalEvent,
              userData: f.userData
            }
          ));
          return;
        }
        I = A.getById(m.id), I ? (I.insideElementPressed = !0, I.insideElement = !0, I.originalTarget = c.originalEvent.target, I.contactPos = m.currentPos, I.contactTime = m.currentTime, I.lastPos = I.currentPos, I.lastTime = I.currentTime, I.currentPos = m.currentPos, I.currentTime = m.currentTime, m = I) : (m.captured = !1, m.insideElementPressed = !0, m.insideElement = !0, m.originalTarget = c.originalEvent.target, ce(A, m)), A.addContact(), !c.preventGesture && !c.defaultPrevented ? (c.shouldCapture = !0, c.shouldReleaseCapture = !1, c.preventDefault = !0, (f.dragHandler || f.dragEndHandler || f.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(f, m), A.contacts === 1 ? f.pressHandler && !c.preventGesture && f.pressHandler(
          {
            eventSource: f,
            pointerType: m.type,
            position: E(m.contactPos, f.element),
            buttons: A.buttons,
            isTouchEvent: m.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ) : A.contacts === 2 && f.pinchHandler && m.type === "touch" && (b.pinchGPoints = A.asArray(), b.lastPinchDist = b.currentPinchDist = b.pinchGPoints[0].currentPos.distanceTo(b.pinchGPoints[1].currentPos), b.lastPinchCenter = b.currentPinchCenter = P(b.pinchGPoints[0].currentPos, b.pinchGPoints[1].currentPos))) : (c.shouldCapture = !1, c.shouldReleaseCapture = !1);
      }
      function G(f, c, m, T) {
        var b = t[f.hash], A = f.getActivePointersListByType(m.type), I, q, H, se = !1, J;
        if (typeof c.originalEvent.buttons < "u" ? A.buttons = c.originalEvent.buttons : T === 0 ? A.buttons ^= -2 : T === 1 ? A.buttons ^= -5 : T === 2 ? A.buttons ^= -3 : T === 3 ? A.buttons ^= -9 : T === 4 ? A.buttons ^= -17 : T === 5 && (A.buttons ^= -33), c.shouldCapture = !1, T !== 0) {
          c.shouldReleaseCapture = !1, f.nonPrimaryReleaseHandler && !c.preventGesture && !c.defaultPrevented && (c.preventDefault = !0, f.nonPrimaryReleaseHandler(
            {
              eventSource: f,
              pointerType: m.type,
              position: E(m.currentPos, f.element),
              button: T,
              buttons: A.buttons,
              isTouchEvent: m.type === "touch",
              originalEvent: c.originalEvent,
              userData: f.userData
            }
          ));
          return;
        }
        H = A.getById(m.id), H ? (A.removeContact(), H.captured && (se = !0), H.lastPos = H.currentPos, H.lastTime = H.currentTime, H.currentPos = m.currentPos, H.currentTime = m.currentTime, H.insideElement || he(f, A, H), I = H.currentPos, q = H.currentTime) : (m.captured = !1, m.insideElementPressed = !1, m.insideElement = !0, ce(A, m), H = m), !c.preventGesture && !c.defaultPrevented && (se ? (c.shouldReleaseCapture = !0, c.preventDefault = !0, (f.dragHandler || f.dragEndHandler || f.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(f, H), A.contacts === 0 ? (f.releaseHandler && I && f.releaseHandler(
          {
            eventSource: f,
            pointerType: H.type,
            position: E(I, f.element),
            buttons: A.buttons,
            insideElementPressed: H.insideElementPressed,
            insideElementReleased: H.insideElement,
            isTouchEvent: H.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ), f.dragEndHandler && b.sentDragEvent && f.dragEndHandler(
          {
            eventSource: f,
            pointerType: H.type,
            position: E(H.currentPos, f.element),
            speed: H.speed,
            direction: H.direction,
            shift: c.originalEvent.shiftKey,
            isTouchEvent: H.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ), b.sentDragEvent = !1, (f.clickHandler || f.dblClickHandler) && H.insideElement && (J = q - H.contactTime <= f.clickTimeThreshold && H.contactPos.distanceTo(I) <= f.clickDistThreshold, f.clickHandler && f.clickHandler(
          {
            eventSource: f,
            pointerType: H.type,
            position: E(H.currentPos, f.element),
            quick: J,
            shift: c.originalEvent.shiftKey,
            isTouchEvent: H.type === "touch",
            originalEvent: c.originalEvent,
            originalTarget: H.originalTarget,
            userData: f.userData
          }
        ), f.dblClickHandler && J && (A.clicks++, A.clicks === 1 ? (b.lastClickPos = I, b.dblClickTimeOut = setTimeout(function() {
          A.clicks = 0;
        }, f.dblClickTimeThreshold)) : A.clicks === 2 && (clearTimeout(b.dblClickTimeOut), A.clicks = 0, b.lastClickPos.distanceTo(I) <= f.dblClickDistThreshold && f.dblClickHandler(
          {
            eventSource: f,
            pointerType: H.type,
            position: E(H.currentPos, f.element),
            shift: c.originalEvent.shiftKey,
            isTouchEvent: H.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ), b.lastClickPos = null)))) : A.contacts === 2 && f.pinchHandler && H.type === "touch" && (b.pinchGPoints = A.asArray(), b.lastPinchDist = b.currentPinchDist = b.pinchGPoints[0].currentPos.distanceTo(b.pinchGPoints[1].currentPos), b.lastPinchCenter = b.currentPinchCenter = P(b.pinchGPoints[0].currentPos, b.pinchGPoints[1].currentPos))) : (c.shouldReleaseCapture = !1, f.releaseHandler && I && (f.releaseHandler(
          {
            eventSource: f,
            pointerType: H.type,
            position: E(I, f.element),
            buttons: A.buttons,
            insideElementPressed: H.insideElementPressed,
            insideElementReleased: H.insideElement,
            isTouchEvent: H.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ), c.preventDefault = !0)));
      }
      function X(f, c, m) {
        var T = t[f.hash], b = f.getActivePointersListByType(m.type), A, I, q;
        if (typeof c.originalEvent.buttons < "u" && (b.buttons = c.originalEvent.buttons), A = b.getById(m.id), A)
          A.lastPos = A.currentPos, A.lastTime = A.currentTime, A.currentPos = m.currentPos, A.currentTime = m.currentTime;
        else
          return;
        c.shouldCapture = !1, c.shouldReleaseCapture = !1, f.stopHandler && m.type === "mouse" && (clearTimeout(f.stopTimeOut), f.stopTimeOut = setTimeout(function() {
          K(f, c.originalEvent, m.type);
        }, f.stopDelay)), b.contacts === 0 ? f.moveHandler && f.moveHandler(
          {
            eventSource: f,
            pointerType: m.type,
            position: E(m.currentPos, f.element),
            buttons: b.buttons,
            isTouchEvent: m.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ) : b.contacts === 1 ? (f.moveHandler && (A = b.asArray()[0], f.moveHandler(
          {
            eventSource: f,
            pointerType: A.type,
            position: E(A.currentPos, f.element),
            buttons: b.buttons,
            isTouchEvent: A.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        )), f.dragHandler && !c.preventGesture && !c.defaultPrevented && (A = b.asArray()[0], q = A.currentPos.minus(A.lastPos), f.dragHandler(
          {
            eventSource: f,
            pointerType: A.type,
            position: E(A.currentPos, f.element),
            buttons: b.buttons,
            delta: q,
            speed: A.speed,
            direction: A.direction,
            shift: c.originalEvent.shiftKey,
            isTouchEvent: A.type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ), c.preventDefault = !0, T.sentDragEvent = !0)) : b.contacts === 2 && (f.moveHandler && (I = b.asArray(), f.moveHandler(
          {
            eventSource: f,
            pointerType: I[0].type,
            position: E(P(I[0].currentPos, I[1].currentPos), f.element),
            buttons: b.buttons,
            isTouchEvent: I[0].type === "touch",
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        )), f.pinchHandler && m.type === "touch" && !c.preventGesture && !c.defaultPrevented && (q = T.pinchGPoints[0].currentPos.distanceTo(T.pinchGPoints[1].currentPos), q !== T.currentPinchDist && (T.lastPinchDist = T.currentPinchDist, T.currentPinchDist = q, T.lastPinchCenter = T.currentPinchCenter, T.currentPinchCenter = P(T.pinchGPoints[0].currentPos, T.pinchGPoints[1].currentPos), f.pinchHandler(
          {
            eventSource: f,
            pointerType: "touch",
            gesturePoints: T.pinchGPoints,
            lastCenter: E(T.lastPinchCenter, f.element),
            center: E(T.currentPinchCenter, f.element),
            lastDistance: T.lastPinchDist,
            distance: T.currentPinchDist,
            shift: c.originalEvent.shiftKey,
            originalEvent: c.originalEvent,
            userData: f.userData
          }
        ), c.preventDefault = !0)));
      }
      function k(f, c, m) {
        var T = f.getActivePointersListByType(m.type), b;
        b = T.getById(m.id), b && he(f, T, b);
      }
      function K(f, c, m) {
        f.stopHandler && f.stopHandler({
          eventSource: f,
          pointerType: m,
          position: _(c, f.element),
          buttons: f.getActivePointersListByType(m).buttons,
          isTouchEvent: m === "touch",
          originalEvent: c,
          userData: f.userData
        });
      }
    }(g), function(e) {
      e.ControlAnchor = {
        NONE: 0,
        TOP_LEFT: 1,
        TOP_RIGHT: 2,
        BOTTOM_RIGHT: 3,
        BOTTOM_LEFT: 4,
        ABSOLUTE: 5
      }, e.Control = function(t, r, i) {
        var n = t.parentNode;
        typeof r == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), r = { anchor: r }), r.attachToViewer = typeof r.attachToViewer > "u" ? !0 : r.attachToViewer, this.autoFade = typeof r.autoFade > "u" ? !0 : r.autoFade, this.element = t, this.anchor = r.anchor, this.container = i, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof r.top == "number" ? r.top + "px" : r.top, this.wrapper.style.left = typeof r.left == "number" ? r.left + "px" : r.left, this.wrapper.style.height = typeof r.height == "number" ? r.height + "px" : r.height, this.wrapper.style.width = typeof r.width == "number" ? r.width + "px" : r.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), r.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(
          this.wrapper,
          this.container.firstChild
        ) : this.container.appendChild(this.wrapper) : n.appendChild(this.wrapper);
      }, e.Control.prototype = {
        /**
         * Removes the control from the container.
         * @function
         */
        destroy: function() {
          this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
        },
        /**
         * Determines if the control is currently visible.
         * @function
         * @returns {Boolean} true if currently visible, false otherwise.
         */
        isVisible: function() {
          return this.wrapper.style.display !== "none";
        },
        /**
         * Toggles the visibility of the control.
         * @function
         * @param {Boolean} visible - true to make visible, false to hide.
         */
        setVisible: function(t) {
          this.wrapper.style.display = t ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
        },
        /**
         * Sets the opacity level for the control.
         * @function
         * @param {Number} opactiy - a value between 1 and 0 inclusively.
         */
        setOpacity: function(t) {
          e.setElementOpacity(this.wrapper, t, !0);
        }
      };
    }(g), function(e) {
      e.ControlDock = function(r) {
        var i = ["topleft", "topright", "bottomright", "bottomleft"], n, o;
        for (e.extend(!0, this, {
          id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6),
          container: e.makeNeutralElement("div"),
          controls: []
        }, r), this.container.onsubmit = function() {
          return !1;
        }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), e.getElementStyle(this.element).position === "static" && (this.element.style.position = "relative"), this.container.style.width = "100%", this.container.style.height = "100%"), o = 0; o < i.length; o++)
          n = i[o], this.controls[n] = e.makeNeutralElement("div"), this.controls[n].style.position = "absolute", n.match("left") && (this.controls[n].style.left = "0px"), n.match("right") && (this.controls[n].style.right = "0px"), n.match("top") && (this.controls[n].style.top = "0px"), n.match("bottom") && (this.controls[n].style.bottom = "0px");
        this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
      }, e.ControlDock.prototype = {
        /**
         * @function
         */
        addControl: function(r, i) {
          r = e.getElement(r);
          var n = null;
          if (!(t(this, r) >= 0)) {
            switch (i.anchor) {
              case e.ControlAnchor.TOP_RIGHT:
                n = this.controls.topright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.BOTTOM_RIGHT:
                n = this.controls.bottomright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.BOTTOM_LEFT:
                n = this.controls.bottomleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.TOP_LEFT:
                n = this.controls.topleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.ABSOLUTE:
                n = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
              default:
              case e.ControlAnchor.NONE:
                n = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
            }
            this.controls.push(
              new e.Control(r, i, n)
            ), r.style.display = "inline-block";
          }
        },
        /**
         * @function
         * @returns {OpenSeadragon.ControlDock} Chainable.
         */
        removeControl: function(r) {
          r = e.getElement(r);
          var i = t(this, r);
          return i >= 0 && (this.controls[i].destroy(), this.controls.splice(i, 1)), this;
        },
        /**
         * @function
         * @returns {OpenSeadragon.ControlDock} Chainable.
         */
        clearControls: function() {
          for (; this.controls.length > 0; )
            this.controls.pop().destroy();
          return this;
        },
        /**
         * @function
         * @returns {Boolean}
         */
        areControlsEnabled: function() {
          var r;
          for (r = this.controls.length - 1; r >= 0; r--)
            if (this.controls[r].isVisible())
              return !0;
          return !1;
        },
        /**
         * @function
         * @returns {OpenSeadragon.ControlDock} Chainable.
         */
        setControlsEnabled: function(r) {
          var i;
          for (i = this.controls.length - 1; i >= 0; i--)
            this.controls[i].setVisible(r);
          return this;
        }
      };
      function t(r, i) {
        var n = r.controls, o;
        for (o = n.length - 1; o >= 0; o--)
          if (n[o].element === i)
            return o;
        return -1;
      }
    }(g), function(e) {
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
    }(g), function(e) {
      var t = {}, r = 1;
      e.Viewer = function(u) {
        var v = arguments, S = this, D;
        e.isPlainObject(u) || (u = {
          id: v[0],
          xmlPath: v.length > 1 ? v[1] : void 0,
          prefixUrl: v.length > 2 ? v[2] : void 0,
          controls: v.length > 3 ? v[3] : void 0,
          overlays: v.length > 4 ? v[4] : void 0
        }), u.config && (e.extend(!0, u, u.config), delete u.config);
        let O = [
          "useCanvas"
          // deprecated
        ];
        if (u.drawerOptions = Object.assign(
          {},
          O.reduce((R, z) => (R[z] = u[z], delete u[z], R), {}),
          u.drawerOptions
        ), e.extend(!0, this, {
          //internal state and dom identifiers
          id: u.id,
          hash: u.hash || r++,
          /**
           * Index for page to be shown first next time open() is called (only used in sequenceMode).
           * @member {Number} initialPage
           * @memberof OpenSeadragon.Viewer#
           */
          initialPage: 0,
          //dom nodes
          /**
           * The parent element of this Viewer instance, passed in when the Viewer was created.
           * @member {Element} element
           * @memberof OpenSeadragon.Viewer#
           */
          element: null,
          /**
           * A &lt;div&gt; element (provided by {@link OpenSeadragon.ControlDock}), the base element of this Viewer instance.<br><br>
           * Child element of {@link OpenSeadragon.Viewer#element}.
           * @member {Element} container
           * @memberof OpenSeadragon.Viewer#
           */
          container: null,
          /**
           * A &lt;div&gt; element, the element where user-input events are handled for panning and zooming.<br><br>
           * Child element of {@link OpenSeadragon.Viewer#container},
           * positioned on top of {@link OpenSeadragon.Viewer#keyboardCommandArea}.<br><br>
           * The parent of {@link OpenSeadragon.Drawer#canvas} instances.
           * @member {Element} canvas
           * @memberof OpenSeadragon.Viewer#
           */
          canvas: null,
          // Overlays list. An overlay allows to add html on top of the viewer.
          overlays: [],
          // Container inside the canvas where overlays are drawn.
          overlaysContainer: null,
          //private state properties
          previousBody: [],
          //This was originally initialized in the constructor and so could never
          //have anything in it.  now it can because we allow it to be specified
          //in the options and is only empty by default if not specified. Also
          //this array was returned from get_controls which I find confusing
          //since this object has a controls property which is treated in other
          //functions like clearControls.  I'm removing the accessors.
          customControls: [],
          //These are originally not part options but declared as members
          //in initialize.  It's still considered idiomatic to put them here
          //source is here for backwards compatibility. It is not an official
          //part of the API and should not be relied upon.
          source: null,
          /**
           * Handles rendering of tiles in the viewer. Created for each TileSource opened.
           * @member {OpenSeadragon.Drawer} drawer
           * @memberof OpenSeadragon.Viewer#
           */
          drawer: null,
          /**
           * Keeps track of all of the tiled images in the scene.
           * @member {OpenSeadragon.World} world
           * @memberof OpenSeadragon.Viewer#
           */
          world: null,
          /**
           * Handles coordinate-related functionality - zoom, pan, rotation, etc. Created for each TileSource opened.
           * @member {OpenSeadragon.Viewport} viewport
           * @memberof OpenSeadragon.Viewer#
           */
          viewport: null,
          /**
           * @member {OpenSeadragon.Navigator} navigator
           * @memberof OpenSeadragon.Viewer#
           */
          navigator: null,
          //A collection viewport is a separate viewport used to provide
          //simultaneous rendering of sets of tiles
          collectionViewport: null,
          collectionDrawer: null,
          //UI image resources
          //TODO: rename navImages to uiImages
          navImages: null,
          //interface button controls
          buttonGroup: null,
          //TODO: this is defunct so safely remove it
          profiler: null
        }, e.DEFAULT_SETTINGS, u), typeof this.hash > "u")
          throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
        typeof t[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), t[this.hash] = {
          fsBoundsDelta: new e.Point(1, 1),
          prevContainerSize: null,
          animating: !1,
          forceRedraw: !1,
          needsResize: !1,
          forceResize: !1,
          mouseInside: !1,
          group: null,
          // whether we should be continuously zooming
          zooming: !1,
          // how much we should be continuously zooming by
          zoomFactor: null,
          lastZoomTime: null,
          fullPage: !1,
          onfullscreenchange: null,
          lastClickTime: null,
          draggingToZoom: !1
        }, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(R) {
          var z = e.getString("Errors.OpenFailed", R.eventSource, R.message);
          S._showMessage(z);
        }), e.ControlDock.call(this, u), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", function(R) {
          R.width = "100%", R.height = "100%", R.overflow = "hidden", R.position = "absolute", R.top = "0px", R.left = "0px";
        }(this.canvas.style), e.setElementTouchActionNone(this.canvas), u.tabIndex !== "" && (this.canvas.tabIndex = u.tabIndex === void 0 ? 0 : u.tabIndex), this.container.className = "openseadragon-container", function(R) {
          R.width = "100%", R.height = "100%", R.position = "relative", R.overflow = "hidden", R.left = "0px", R.top = "0px", R.textAlign = "left";
        }(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({
          userData: "Viewer.innerTracker",
          element: this.canvas,
          startDisabled: !this.mouseNavEnabled,
          clickTimeThreshold: this.clickTimeThreshold,
          clickDistThreshold: this.clickDistThreshold,
          dblClickTimeThreshold: this.dblClickTimeThreshold,
          dblClickDistThreshold: this.dblClickDistThreshold,
          contextMenuHandler: e.delegate(this, _),
          keyDownHandler: e.delegate(this, E),
          keyHandler: e.delegate(this, P),
          clickHandler: e.delegate(this, C),
          dblClickHandler: e.delegate(this, M),
          dragHandler: e.delegate(this, F),
          dragEndHandler: e.delegate(this, L),
          enterHandler: e.delegate(this, N),
          leaveHandler: e.delegate(this, V),
          pressHandler: e.delegate(this, j),
          releaseHandler: e.delegate(this, Q),
          nonPrimaryPressHandler: e.delegate(this, Z),
          nonPrimaryReleaseHandler: e.delegate(this, U),
          scrollHandler: e.delegate(this, ee),
          pinchHandler: e.delegate(this, Y),
          focusHandler: e.delegate(this, te),
          blurHandler: e.delegate(this, $)
        }), this.outerTracker = new e.MouseTracker({
          userData: "Viewer.outerTracker",
          element: this.container,
          startDisabled: !this.mouseNavEnabled,
          clickTimeThreshold: this.clickTimeThreshold,
          clickDistThreshold: this.clickDistThreshold,
          dblClickTimeThreshold: this.dblClickTimeThreshold,
          dblClickDistThreshold: this.dblClickDistThreshold,
          enterHandler: e.delegate(this, re),
          leaveHandler: e.delegate(this, ie)
        }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), t[this.hash].prevContainerSize = i(this.container), window.ResizeObserver ? (this._autoResizePolling = !1, this._resizeObserver = new ResizeObserver(function() {
          t[S.hash].needsResize = !0;
        }), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = !0, this.world = new e.World({
          viewer: this
        }), this.world.addHandler("add-item", function(R) {
          S.source = S.world.getItemAt(0).source, t[S.hash].forceRedraw = !0, S._updateRequestId || (S._updateRequestId = a(S, oe));
        }), this.world.addHandler("remove-item", function(R) {
          S.world.getItemCount() ? S.source = S.world.getItemAt(0).source : S.source = null, t[S.hash].forceRedraw = !0;
        }), this.world.addHandler("metrics-change", function(R) {
          S.viewport && S.viewport._setContentBounds(S.world.getHomeBounds(), S.world.getContentFactor());
        }), this.world.addHandler("item-index-change", function(R) {
          S.source = S.world.getItemAt(0).source;
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
          timeout: u.timeout,
          tileRetryMax: this.tileRetryMax,
          tileRetryDelay: this.tileRetryDelay
        }), this.tileCache = new e.TileCache({
          maxImageCacheCount: this.maxImageCacheCount
        }), Object.prototype.hasOwnProperty.call(this.drawerOptions, "useCanvas") && (e.console.error('useCanvas is deprecated, use the "drawer" option to indicate preferred drawer(s)'), this.drawerOptions.useCanvas || (this.drawer = e.HTMLDrawer), delete this.drawerOptions.useCanvas);
        let B = Array.isArray(this.drawer) ? this.drawer : [this.drawer];
        B.length === 0 && (B = [e.DEFAULT_SETTINGS.drawer].flat(), e.console.warn("No valid drawers were selected. Using the default value.")), this.drawer = null;
        for (const R of B)
          if (this.requestDrawer(R, { mainDrawer: !0, redrawImmediately: !1 }))
            break;
        if (!this.drawer)
          throw e.console.error("No drawer could be created!"), "Error with creating the selected drawer(s)";
        for (this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (D = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(D, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (D = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(D, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({
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
        })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), D = 0; D < this.customControls.length; D++)
          this.addControl(
            this.customControls[D].id,
            { anchor: this.customControls[D].anchor }
          );
        e.requestAnimationFrame(function() {
          h(S);
        }), e._viewers.set(this.element, this);
      }, e.extend(
        e.Viewer.prototype,
        e.EventSource.prototype,
        e.ControlDock.prototype,
        /** @lends OpenSeadragon.Viewer.prototype */
        {
          /**
           * @function
           * @returns {Boolean}
           */
          isOpen: function() {
            return !!this.world.getItemCount();
          },
          // deprecated
          openDzi: function(u) {
            return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(u);
          },
          // deprecated
          openTileSource: function(u) {
            return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(u);
          },
          //deprecated
          get buttons() {
            return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
          },
          /**
           * Open tiled images into the viewer, closing any others.
           * To get the TiledImage instance created by open, add an event listener for
           * {@link OpenSeadragon.Viewer.html#.event:open}, which when fired can be used to get access
           * to the instance, i.e., viewer.world.getItemAt(0).
           * @function
           * @param {Array|String|Object|Function} tileSources - This can be a TiledImage
           * specifier, a TileSource specifier, or an array of either. A TiledImage specifier
           * is the same as the options parameter for {@link OpenSeadragon.Viewer#addTiledImage},
           * except for the index property; images are added in sequence.
           * A TileSource specifier is anything you could pass as the tileSource property
           * of the options parameter for {@link OpenSeadragon.Viewer#addTiledImage}.
           * @param {Number} initialPage - If sequenceMode is true, display this page initially
           * for the given tileSources. If specified, will overwrite the Viewer's existing initialPage property.
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:open
           * @fires OpenSeadragon.Viewer.event:open-failed
           */
          open: function(u, v) {
            var S = this;
            if (this.close(), !u)
              return this;
            if (this.sequenceMode && e.isArray(u))
              return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof v < "u" && !isNaN(v) && (this.initialPage = v), this.tileSources = u, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
            if (e.isArray(u) || (u = [u]), !u.length)
              return this;
            this._opening = !0;
            for (var D = u.length, O = 0, B = 0, R, z = function() {
              if (O + B === D)
                if (O) {
                  (S._firstOpen || !S.preserveViewport) && (S.viewport.goHome(!0), S.viewport.update()), S._firstOpen = !1;
                  var k = u[0];
                  if (k.tileSource && (k = k.tileSource), S.overlays && !S.preserveOverlays)
                    for (var K = 0; K < S.overlays.length; K++)
                      S.currentOverlays[K] = o(S, S.overlays[K]);
                  S._drawOverlays(), S._opening = !1, S.raiseEvent("open", { source: k });
                } else
                  S._opening = !1, S.raiseEvent("open-failed", R);
            }, G = function(k) {
              (!e.isPlainObject(k) || !k.tileSource) && (k = {
                tileSource: k
              }), k.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete k.index), k.collectionImmediately === void 0 && (k.collectionImmediately = !0);
              var K = k.success;
              k.success = function(c) {
                if (O++, k.tileSource.overlays)
                  for (var m = 0; m < k.tileSource.overlays.length; m++)
                    S.addOverlay(k.tileSource.overlays[m]);
                K && K(c), z();
              };
              var f = k.error;
              k.error = function(c) {
                B++, R || (R = c), f && f(c), z();
              }, S.addTiledImage(k);
            }, X = 0; X < u.length; X++)
              G(u[X]);
            return this;
          },
          /**
           * @function
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:close
           */
          close: function() {
            return t[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), t[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
          },
          /**
           * Function to destroy the viewer and clean up everything created by OpenSeadragon.
           *
           * Example:
           * var viewer = OpenSeadragon({
           *   [...]
           * });
           *
           * //when you are done with the viewer:
           * viewer.destroy();
           * viewer = null; //important
           *
           * @function
           * @fires OpenSeadragon.Viewer.event:before-destroy
           * @fires OpenSeadragon.Viewer.event:destroy
           */
          destroy: function() {
            if (t[this.hash]) {
              if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), t[this.navigator.hash] = null, delete t[this.navigator.hash], this.navigator = null), this.buttonGroup)
                this.buttonGroup.destroy();
              else if (this.customButtons)
                for (; this.customButtons.length; )
                  this.customButtons.pop().destroy();
              if (this.paging && this.paging.destroy(), this.element)
                for (; this.element.firstChild; )
                  this.element.removeChild(this.element.firstChild);
              this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), t[this.hash] = null, delete t[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
            }
          },
          /**
           * Request a drawer for this viewer, as a supported string or drawer constructor.
           * @param {String | OpenSeadragon.DrawerBase} drawerCandidate The type of drawer to try to construct.
           * @param { Object } options
           * @param { Boolean } [options.mainDrawer] Whether to use this as the viewer's main drawer. Default = true.
           * @param { Boolean } [options.redrawImmediately] Whether to immediately draw a new frame. Only used if options.mainDrawer = true. Default = true.
           * @param { Object } [options.drawerOptions] Options for this drawer. Defaults to viewer.drawerOptions.
           * for this viewer type. See {@link OpenSeadragon.Options}.
           * @returns {Object | Boolean} The drawer that was created, or false if the requested drawer is not supported
           */
          requestDrawer(u, v) {
            const S = {
              mainDrawer: !0,
              redrawImmediately: !0,
              drawerOptions: null
            };
            v = e.extend(!0, S, v);
            const D = v.mainDrawer, O = v.redrawImmediately, B = v.drawerOptions, R = this.drawer;
            let z = null;
            if (u && u.prototype instanceof e.DrawerBase ? (z = u, u = "custom") : typeof u == "string" && (z = e.determineDrawer(u)), z || e.console.warn("Unsupported drawer! Drawer must be an existing string type, or a class that extends OpenSeadragon.DrawerBase."), z && z.isSupported()) {
              R && D && R.destroy();
              const G = new z({
                viewer: this,
                viewport: this.viewport,
                element: this.canvas,
                debugGridColor: this.debugGridColor,
                options: B || this.drawerOptions[u]
              });
              return D && (this.drawer = G, O && this.forceRedraw()), G;
            }
            return !1;
          },
          /**
           * @function
           * @returns {Boolean}
           */
          isMouseNavEnabled: function() {
            return this.innerTracker.isTracking();
          },
          /**
           * @function
           * @param {Boolean} enabled - true to enable, false to disable
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:mouse-enabled
           */
          setMouseNavEnabled: function(u) {
            return this.innerTracker.setTracking(u), this.outerTracker.setTracking(u), this.raiseEvent("mouse-enabled", { enabled: u }), this;
          },
          /**
           * @function
           * @returns {Boolean}
           */
          areControlsEnabled: function() {
            var u = this.controls.length, v;
            for (v = 0; v < this.controls.length; v++)
              u = u && this.controls[v].isVisible();
            return u;
          },
          /**
           * Shows or hides the controls (e.g. the default navigation buttons).
           *
           * @function
           * @param {Boolean} true to show, false to hide.
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:controls-enabled
           */
          setControlsEnabled: function(u) {
            return u ? p(this) : h(this), this.raiseEvent("controls-enabled", { enabled: u }), this;
          },
          /**
           * Turns debugging mode on or off for this viewer.
           *
           * @function
           * @param {Boolean} debugMode true to turn debug on, false to turn debug off.
           */
          setDebugMode: function(u) {
            for (var v = 0; v < this.world.getItemCount(); v++)
              this.world.getItemAt(v).debugMode = u;
            this.debugMode = u, this.forceRedraw();
          },
          /**
           * Update headers to include when making AJAX requests.
           *
           * Unless `propagate` is set to false (which is likely only useful in rare circumstances),
           * the updated headers are propagated to all tiled images, each of which will subsequently
           * propagate the changed headers to all their tiles.
           * If applicable, the headers of the viewer's navigator and reference strip will also be updated.
           *
           * Note that the rules for merging headers still apply, i.e. headers returned by
           * {@link OpenSeadragon.TileSource#getTileAjaxHeaders} take precedence over
           * `TiledImage.ajaxHeaders`, which take precedence over the headers here in the viewer.
           *
           * @function
           * @param {Object} ajaxHeaders Updated AJAX headers.
           * @param {Boolean} [propagate=true] Whether to propagate updated headers to tiled images, etc.
           */
          setAjaxHeaders: function(u, v) {
            if (u === null && (u = {}), !e.isPlainObject(u)) {
              console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
              return;
            }
            if (v === void 0 && (v = !0), this.ajaxHeaders = u, v) {
              for (var S = 0; S < this.world.getItemCount(); S++)
                this.world.getItemAt(S)._updateAjaxHeaders(!0);
              if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, !0), this.referenceStrip && this.referenceStrip.miniViewers)
                for (var D in this.referenceStrip.miniViewers)
                  this.referenceStrip.miniViewers[D].setAjaxHeaders(this.ajaxHeaders, !0);
            }
          },
          /**
           * Adds the given button to this viewer.
           *
           * @function
           * @param {OpenSeadragon.Button} button
           */
          addButton: function(u) {
            this.buttonGroup.addButton(u);
          },
          /**
           * @function
           * @returns {Boolean}
           */
          isFullPage: function() {
            return t[this.hash] && t[this.hash].fullPage;
          },
          /**
           * Toggle full page mode.
           * @function
           * @param {Boolean} fullPage
           *      If true, enter full page mode.  If false, exit full page mode.
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:pre-full-page
           * @fires OpenSeadragon.Viewer.event:full-page
           */
          setFullPage: function(u) {
            var v = document.body, S = v.style, D = document.documentElement.style, O = this, B, R;
            if (u === this.isFullPage())
              return this;
            var z = {
              fullPage: u,
              preventDefaultAction: !1
            };
            if (this.raiseEvent("pre-full-page", z), z.preventDefaultAction)
              return this;
            if (u && this.element) {
              for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = S.margin, this.docMargin = D.margin, S.margin = "0", D.margin = "0", this.bodyPadding = S.padding, this.docPadding = D.padding, S.padding = "0", D.padding = "0", this.bodyWidth = S.width, this.docWidth = D.width, S.width = "100%", D.width = "100%", this.bodyHeight = S.height, this.docHeight = D.height, S.height = "100%", D.height = "100%", this.bodyDisplay = S.display, S.display = "block", this.previousBody = [], t[this.hash].prevElementParent = this.element.parentNode, t[this.hash].prevNextSibling = this.element.nextSibling, t[this.hash].prevElementWidth = this.element.style.width, t[this.hash].prevElementHeight = this.element.style.height, B = v.childNodes.length, R = 0; R < B; R++)
                this.previousBody.push(v.childNodes[0]), v.removeChild(v.childNodes[0]);
              this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, v.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), v.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), t[this.hash].fullPage = !0, e.delegate(this, re)({});
            } else {
              for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, S.margin = this.bodyMargin, D.margin = this.docMargin, S.padding = this.bodyPadding, D.padding = this.docPadding, S.width = this.bodyWidth, D.width = this.docWidth, S.height = this.bodyHeight, D.height = this.docHeight, S.display = this.bodyDisplay, v.removeChild(this.element), B = this.previousBody.length, R = 0; R < B; R++)
                v.appendChild(this.previousBody.shift());
              e.removeClass(this.element, "fullpage"), t[this.hash].prevElementParent.insertBefore(
                this.element,
                t[this.hash].prevNextSibling
              ), this.toolbar && this.toolbar.element && (v.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(
                this.toolbar.element,
                this.toolbar.nextSibling
              ), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = t[this.hash].prevElementWidth, this.element.style.height = t[this.hash].prevElementHeight;
              var G = 0, X = function() {
                e.setPageScroll(O.pageScroll);
                var k = e.getPageScroll();
                G++, G < 10 && (k.x !== O.pageScroll.x || k.y !== O.pageScroll.y) && e.requestAnimationFrame(X);
              };
              e.requestAnimationFrame(X), t[this.hash].fullPage = !1, e.delegate(this, ie)({});
            }
            return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: u }), this;
          },
          /**
           * Toggle full screen mode if supported. Toggle full page mode otherwise.
           * @function
           * @param {Boolean} fullScreen
           *      If true, enter full screen mode.  If false, exit full screen mode.
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:pre-full-screen
           * @fires OpenSeadragon.Viewer.event:full-screen
           */
          setFullScreen: function(u) {
            var v = this;
            if (!e.supportsFullScreen)
              return this.setFullPage(u);
            if (e.isFullScreen() === u)
              return this;
            var S = {
              fullScreen: u,
              preventDefaultAction: !1
            };
            if (this.raiseEvent("pre-full-screen", S), S.preventDefaultAction)
              return this;
            if (u) {
              if (this.setFullPage(!0), !this.isFullPage())
                return this;
              this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
              var D = function() {
                var O = e.isFullScreen();
                O || (e.removeEvent(document, e.fullScreenEventName, D), e.removeEvent(document, e.fullScreenErrorEventName, D), v.setFullPage(!1), v.isFullPage() && (v.element.style.width = v.fullPageStyleWidth, v.element.style.height = v.fullPageStyleHeight)), v.navigator && v.viewport && setTimeout(function() {
                  v.navigator.update(v.viewport);
                }), v.raiseEvent("full-screen", { fullScreen: O });
              };
              e.addEvent(document, e.fullScreenEventName, D), e.addEvent(document, e.fullScreenErrorEventName, D), e.requestFullScreen(document.body);
            } else
              e.exitFullScreen();
            return this;
          },
          /**
           * @function
           * @returns {Boolean}
           */
          isVisible: function() {
            return this.container.style.visibility !== "hidden";
          },
          //
          /**
           * @function
           * @returns {Boolean} returns true if the viewer is in fullscreen
           */
          isFullScreen: function() {
            return e.isFullScreen() && this.isFullPage();
          },
          /**
           * @function
           * @param {Boolean} visible
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:visible
           */
          setVisible: function(u) {
            return this.container.style.visibility = u ? "" : "hidden", this.raiseEvent("visible", { visible: u }), this;
          },
          /**
           * Add a tiled image to the viewer.
           * options.tileSource can be anything that {@link OpenSeadragon.Viewer#open}
           *  supports except arrays of images.
           * Note that you can specify options.width or options.height, but not both.
           * The other dimension will be calculated according to the item's aspect ratio.
           * If collectionMode is on (see {@link OpenSeadragon.Options}), the new image is
           * automatically arranged with the others.
           * @function
           * @param {Object} options
           * @param {String|Object|Function} options.tileSource - The TileSource specifier.
           * A String implies a url used to determine the tileSource implementation
           *      based on the file extension of url. JSONP is implied by *.js,
           *      otherwise the url is retrieved as text and the resulting text is
           *      introspected to determine if its json, xml, or text and parsed.
           * An Object implies an inline configuration which has a single
           *      property sufficient for being able to determine tileSource
           *      implementation. If the object has a property which is a function
           *      named 'getTileUrl', it is treated as a custom TileSource.
           * @param {Number} [options.index] The index of the item. Added on top of
           * all other items if not specified.
           * @param {Boolean} [options.replace=false] If true, the item at options.index will be
           * removed and the new item is added in its place. options.tileSource will be
           * interpreted and fetched if necessary before the old item is removed to avoid leaving
           * a gap in the world.
           * @param {Number} [options.x=0] The X position for the image in viewport coordinates.
           * @param {Number} [options.y=0] The Y position for the image in viewport coordinates.
           * @param {Number} [options.width=1] The width for the image in viewport coordinates.
           * @param {Number} [options.height] The height for the image in viewport coordinates.
           * @param {OpenSeadragon.Rect} [options.fitBounds] The bounds in viewport coordinates
           * to fit the image into. If specified, x, y, width and height get ignored.
           * @param {OpenSeadragon.Placement} [options.fitBoundsPlacement=OpenSeadragon.Placement.CENTER]
           * How to anchor the image in the bounds if options.fitBounds is set.
           * @param {OpenSeadragon.Rect} [options.clip] - An area, in image pixels, to clip to
           * (portions of the image outside of this area will not be visible). Only works on
           * browsers that support the HTML5 canvas.
           * @param {Number} [options.opacity=1] Proportional opacity of the tiled images (1=opaque, 0=hidden)
           * @param {Boolean} [options.preload=false]  Default switch for loading hidden images (true loads, false blocks)
           * @param {Number} [options.degrees=0] Initial rotation of the tiled image around
           * its top left corner in degrees.
           * @param {Boolean} [options.flipped=false] Whether to horizontally flip the image.
           * @param {String} [options.compositeOperation] How the image is composited onto other images.
           * @param {String} [options.crossOriginPolicy] The crossOriginPolicy for this specific image,
           * overriding viewer.crossOriginPolicy.
           * @param {Boolean} [options.ajaxWithCredentials] Whether to set withCredentials on tile AJAX
           * @param {Boolean} [options.loadTilesWithAjax]
           *      Whether to load tile data using AJAX requests.
           *      Defaults to the setting in {@link OpenSeadragon.Options}.
           * @param {Object} [options.ajaxHeaders]
           *      A set of headers to include when making tile AJAX requests.
           *      Note that these headers will be merged over any headers specified in {@link OpenSeadragon.Options}.
           *      Specifying a falsy value for a header will clear its existing value set at the Viewer level (if any).
           * @param {Function} [options.success] A function that gets called when the image is
           * successfully added. It's passed the event object which contains a single property:
           * "item", which is the resulting instance of TiledImage.
           * @param {Function} [options.error] A function that gets called if the image is
           * unable to be added. It's passed the error event object, which contains "message"
           * and "source" properties.
           * @param {Boolean} [options.collectionImmediately=false] If collectionMode is on,
           * specifies whether to snap to the new arrangement immediately or to animate to it.
           * @param {String|CanvasGradient|CanvasPattern|Function} [options.placeholderFillStyle] - See {@link OpenSeadragon.Options}.
           * @fires OpenSeadragon.World.event:add-item
           * @fires OpenSeadragon.Viewer.event:add-item-failed
           */
          addTiledImage: function(u) {
            e.console.assert(u, "[Viewer.addTiledImage] options is required"), e.console.assert(u.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(
              !u.replace || u.index > -1 && u.index < this.world.getItemCount(),
              "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world"
            );
            var v = this;
            u.replace && (u.replaceItem = v.world.getItemAt(u.index)), this._hideMessage(), u.placeholderFillStyle === void 0 && (u.placeholderFillStyle = this.placeholderFillStyle), u.opacity === void 0 && (u.opacity = this.opacity), u.preload === void 0 && (u.preload = this.preload), u.compositeOperation === void 0 && (u.compositeOperation = this.compositeOperation), u.crossOriginPolicy === void 0 && (u.crossOriginPolicy = u.tileSource.crossOriginPolicy !== void 0 ? u.tileSource.crossOriginPolicy : this.crossOriginPolicy), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = this.ajaxWithCredentials), u.loadTilesWithAjax === void 0 && (u.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(u.ajaxHeaders) || (u.ajaxHeaders = {});
            var S = {
              options: u
            };
            function D(R) {
              for (var z = 0; z < v._loadQueue.length; z++)
                if (v._loadQueue[z] === S) {
                  v._loadQueue.splice(z, 1);
                  break;
                }
              v._loadQueue.length === 0 && O(S), v.raiseEvent("add-item-failed", R), u.error && u.error(R);
            }
            function O(R) {
              v.collectionMode && (v.world.arrange({
                immediately: R.options.collectionImmediately,
                rows: v.collectionRows,
                columns: v.collectionColumns,
                layout: v.collectionLayout,
                tileSize: v.collectionTileSize,
                tileMargin: v.collectionTileMargin
              }), v.world.setAutoRefigureSizes(!0));
            }
            if (e.isArray(u.tileSource)) {
              setTimeout(function() {
                D({
                  message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
                  source: u.tileSource,
                  options: u
                });
              });
              return;
            }
            this._loadQueue.push(S);
            function B() {
              for (var R, z, G; v._loadQueue.length && (R = v._loadQueue[0], !!R.tileSource); ) {
                if (v._loadQueue.splice(0, 1), R.options.replace) {
                  var X = v.world.getIndexOfItem(R.options.replaceItem);
                  X !== -1 && (R.options.index = X), v.world.removeItem(R.options.replaceItem);
                }
                z = new e.TiledImage({
                  viewer: v,
                  source: R.tileSource,
                  viewport: v.viewport,
                  drawer: v.drawer,
                  tileCache: v.tileCache,
                  imageLoader: v.imageLoader,
                  x: R.options.x,
                  y: R.options.y,
                  width: R.options.width,
                  height: R.options.height,
                  fitBounds: R.options.fitBounds,
                  fitBoundsPlacement: R.options.fitBoundsPlacement,
                  clip: R.options.clip,
                  placeholderFillStyle: R.options.placeholderFillStyle,
                  opacity: R.options.opacity,
                  preload: R.options.preload,
                  degrees: R.options.degrees,
                  flipped: R.options.flipped,
                  compositeOperation: R.options.compositeOperation,
                  springStiffness: v.springStiffness,
                  animationTime: v.animationTime,
                  minZoomImageRatio: v.minZoomImageRatio,
                  wrapHorizontal: v.wrapHorizontal,
                  wrapVertical: v.wrapVertical,
                  maxTilesPerFrame: v.maxTilesPerFrame,
                  immediateRender: v.immediateRender,
                  blendTime: v.blendTime,
                  alwaysBlend: v.alwaysBlend,
                  minPixelRatio: v.minPixelRatio,
                  smoothTileEdgesMinZoom: v.smoothTileEdgesMinZoom,
                  iOSDevice: v.iOSDevice,
                  crossOriginPolicy: R.options.crossOriginPolicy,
                  ajaxWithCredentials: R.options.ajaxWithCredentials,
                  loadTilesWithAjax: R.options.loadTilesWithAjax,
                  ajaxHeaders: R.options.ajaxHeaders,
                  debugMode: v.debugMode,
                  subPixelRoundingForTransparency: v.subPixelRoundingForTransparency
                }), v.collectionMode && v.world.setAutoRefigureSizes(!1), v.navigator && (G = e.extend({}, R.options, {
                  replace: !1,
                  // navigator already removed the layer, nothing to replace
                  originalTiledImage: z,
                  tileSource: R.tileSource
                }), v.navigator.addTiledImage(G)), v.world.addItem(z, {
                  index: R.options.index
                }), v._loadQueue.length === 0 && O(R), v.world.getItemCount() === 1 && !v.preserveViewport && v.viewport.goHome(!0), R.options.success && R.options.success({
                  item: z
                });
              }
            }
            n(this, u.tileSource, u, function(R) {
              S.tileSource = R, B();
            }, function(R) {
              R.options = u, D(R), B();
            });
          },
          /**
           * Add a simple image to the viewer.
           * The options are the same as the ones in {@link OpenSeadragon.Viewer#addTiledImage}
           * except for options.tileSource which is replaced by options.url.
           * @function
           * @param {Object} options - See {@link OpenSeadragon.Viewer#addTiledImage}
           * for all the options
           * @param {String} options.url - The URL of the image to add.
           * @fires OpenSeadragon.World.event:add-item
           * @fires OpenSeadragon.Viewer.event:add-item-failed
           */
          addSimpleImage: function(u) {
            e.console.assert(u, "[Viewer.addSimpleImage] options is required"), e.console.assert(u.url, "[Viewer.addSimpleImage] options.url is required");
            var v = e.extend({}, u, {
              tileSource: {
                type: "image",
                url: u.url
              }
            });
            delete v.url, this.addTiledImage(v);
          },
          // deprecated
          addLayer: function(u) {
            var v = this;
            e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
            var S = e.extend({}, u, {
              success: function(D) {
                v.raiseEvent("add-layer", {
                  options: u,
                  drawer: D.item
                });
              },
              error: function(D) {
                v.raiseEvent("add-layer-failed", D);
              }
            });
            return this.addTiledImage(S), this;
          },
          // deprecated
          getLayerAtLevel: function(u) {
            return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(u);
          },
          // deprecated
          getLevelOfLayer: function(u) {
            return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(u);
          },
          // deprecated
          getLayersCount: function() {
            return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
          },
          // deprecated
          setLayerLevel: function(u, v) {
            return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(u, v);
          },
          // deprecated
          removeLayer: function(u) {
            return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(u);
          },
          /**
           * Force the viewer to redraw its contents.
           * @returns {OpenSeadragon.Viewer} Chainable.
           */
          forceRedraw: function() {
            return t[this.hash].forceRedraw = !0, this;
          },
          /**
           * Force the viewer to reset its size to match its container.
           */
          forceResize: function() {
            t[this.hash].needsResize = !0, t[this.hash].forceResize = !0;
          },
          /**
           * @function
           * @returns {OpenSeadragon.Viewer} Chainable.
           */
          bindSequenceControls: function() {
            var u = e.delegate(this, w), v = e.delegate(this, y), S = e.delegate(this, this.goToNextPage), D = e.delegate(this, this.goToPreviousPage), O = this.navImages, B = !0;
            return this.showSequenceControl && ((this.previousButton || this.nextButton) && (B = !1), this.previousButton = new e.Button({
              element: this.previousButton ? e.getElement(this.previousButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.PreviousPage"),
              srcRest: W(this.prefixUrl, O.previous.REST),
              srcGroup: W(this.prefixUrl, O.previous.GROUP),
              srcHover: W(this.prefixUrl, O.previous.HOVER),
              srcDown: W(this.prefixUrl, O.previous.DOWN),
              onRelease: D,
              onFocus: u,
              onBlur: v
            }), this.nextButton = new e.Button({
              element: this.nextButton ? e.getElement(this.nextButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.NextPage"),
              srcRest: W(this.prefixUrl, O.next.REST),
              srcGroup: W(this.prefixUrl, O.next.GROUP),
              srcHover: W(this.prefixUrl, O.next.HOVER),
              srcDown: W(this.prefixUrl, O.next.DOWN),
              onRelease: S,
              onFocus: u,
              onBlur: v
            }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), B && (this.paging = new e.ButtonGroup({
              buttons: [
                this.previousButton,
                this.nextButton
              ],
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold
            }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(
              this.pagingControl,
              { anchor: e.ControlAnchor.BOTTOM_RIGHT }
            ) : this.addControl(
              this.pagingControl,
              { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }
            ))), this;
          },
          /**
           * @function
           * @returns {OpenSeadragon.Viewer} Chainable.
           */
          bindStandardControls: function() {
            var u = e.delegate(this, fe), v = e.delegate(this, ge), S = e.delegate(this, De), D = e.delegate(this, pe), O = e.delegate(this, ve), B = e.delegate(this, Ae), R = e.delegate(this, we), z = e.delegate(this, Oe), G = e.delegate(this, ce), X = e.delegate(this, he), k = e.delegate(this, w), K = e.delegate(this, y), f = this.navImages, c = [], m = !0;
            return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (m = !1), this.showZoomControl && (c.push(this.zoomInButton = new e.Button({
              element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.ZoomIn"),
              srcRest: W(this.prefixUrl, f.zoomIn.REST),
              srcGroup: W(this.prefixUrl, f.zoomIn.GROUP),
              srcHover: W(this.prefixUrl, f.zoomIn.HOVER),
              srcDown: W(this.prefixUrl, f.zoomIn.DOWN),
              onPress: u,
              onRelease: v,
              onClick: S,
              onEnter: u,
              onExit: v,
              onFocus: k,
              onBlur: K
            })), c.push(this.zoomOutButton = new e.Button({
              element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.ZoomOut"),
              srcRest: W(this.prefixUrl, f.zoomOut.REST),
              srcGroup: W(this.prefixUrl, f.zoomOut.GROUP),
              srcHover: W(this.prefixUrl, f.zoomOut.HOVER),
              srcDown: W(this.prefixUrl, f.zoomOut.DOWN),
              onPress: D,
              onRelease: v,
              onClick: O,
              onEnter: D,
              onExit: v,
              onFocus: k,
              onBlur: K
            }))), this.showHomeControl && c.push(this.homeButton = new e.Button({
              element: this.homeButton ? e.getElement(this.homeButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.Home"),
              srcRest: W(this.prefixUrl, f.home.REST),
              srcGroup: W(this.prefixUrl, f.home.GROUP),
              srcHover: W(this.prefixUrl, f.home.HOVER),
              srcDown: W(this.prefixUrl, f.home.DOWN),
              onRelease: B,
              onFocus: k,
              onBlur: K
            })), this.showFullPageControl && c.push(this.fullPageButton = new e.Button({
              element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.FullPage"),
              srcRest: W(this.prefixUrl, f.fullpage.REST),
              srcGroup: W(this.prefixUrl, f.fullpage.GROUP),
              srcHover: W(this.prefixUrl, f.fullpage.HOVER),
              srcDown: W(this.prefixUrl, f.fullpage.DOWN),
              onRelease: R,
              onFocus: k,
              onBlur: K
            })), this.showRotationControl && (c.push(this.rotateLeftButton = new e.Button({
              element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.RotateLeft"),
              srcRest: W(this.prefixUrl, f.rotateleft.REST),
              srcGroup: W(this.prefixUrl, f.rotateleft.GROUP),
              srcHover: W(this.prefixUrl, f.rotateleft.HOVER),
              srcDown: W(this.prefixUrl, f.rotateleft.DOWN),
              onRelease: z,
              onFocus: k,
              onBlur: K
            })), c.push(this.rotateRightButton = new e.Button({
              element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.RotateRight"),
              srcRest: W(this.prefixUrl, f.rotateright.REST),
              srcGroup: W(this.prefixUrl, f.rotateright.GROUP),
              srcHover: W(this.prefixUrl, f.rotateright.HOVER),
              srcDown: W(this.prefixUrl, f.rotateright.DOWN),
              onRelease: G,
              onFocus: k,
              onBlur: K
            }))), this.showFlipControl && c.push(this.flipButton = new e.Button({
              element: this.flipButton ? e.getElement(this.flipButton) : null,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold,
              tooltip: e.getString("Tooltips.Flip"),
              srcRest: W(this.prefixUrl, f.flip.REST),
              srcGroup: W(this.prefixUrl, f.flip.GROUP),
              srcHover: W(this.prefixUrl, f.flip.HOVER),
              srcDown: W(this.prefixUrl, f.flip.DOWN),
              onRelease: X,
              onFocus: k,
              onBlur: K
            })), m ? (this.buttonGroup = new e.ButtonGroup({
              buttons: c,
              clickTimeThreshold: this.clickTimeThreshold,
              clickDistThreshold: this.clickDistThreshold
            }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, ye)), this.toolbar ? this.toolbar.addControl(
              this.navControl,
              { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }
            ) : this.addControl(
              this.navControl,
              { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }
            )) : this.customButtons = c), this;
          },
          /**
           * Gets the active page of a sequence
           * @function
           * @returns {Number}
           */
          currentPage: function() {
            return this._sequenceIndex;
          },
          /**
           * @function
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:page
           */
          goToPage: function(u) {
            return this.tileSources && u >= 0 && u < this.tileSources.length && (this._sequenceIndex = u, this._updateSequenceButtons(u), this.open(this.tileSources[u]), this.referenceStrip && this.referenceStrip.setFocus(u), this.raiseEvent("page", { page: u })), this;
          },
          /**
            * Adds an html element as an overlay to the current viewport.  Useful for
            * highlighting words or areas of interest on an image or other zoomable
            * interface. The overlays added via this method are removed when the viewport
            * is closed which include when changing page.
            * @method
            * @param {Element|String|Object} element - A reference to an element or an id for
            *      the element which will be overlaid. Or an Object specifying the configuration for the overlay.
            *      If using an object, see {@link OpenSeadragon.Overlay} for a list of
            *      all available options.
            * @param {OpenSeadragon.Point|OpenSeadragon.Rect} location - The point or
            *      rectangle which will be overlaid. This is a viewport relative location.
            * @param {OpenSeadragon.Placement} [placement=OpenSeadragon.Placement.TOP_LEFT] - The position of the
            *      viewport which the location coordinates will be treated as relative
            *      to.
            * @param {function} [onDraw] - If supplied the callback is called when the overlay
            *      needs to be drawn. It is the responsibility of the callback to do any drawing/positioning.
            *      It is passed position, size and element.
            * @returns {OpenSeadragon.Viewer} Chainable.
            * @fires OpenSeadragon.Viewer.event:add-overlay
            */
          addOverlay: function(u, v, S, D) {
            var O;
            if (e.isPlainObject(u) ? O = u : O = {
              element: u,
              location: v,
              placement: S,
              onDraw: D
            }, u = e.getElement(O.element), s(this.currentOverlays, u) >= 0)
              return this;
            var B = o(this, O);
            return this.currentOverlays.push(B), B.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", {
              element: u,
              location: O.location,
              placement: O.placement
            }), this;
          },
          /**
           * Updates the overlay represented by the reference to the element or
           * element id moving it to the new location, relative to the new placement.
           * @method
           * @param {Element|String} element - A reference to an element or an id for
           *      the element which is overlaid.
           * @param {OpenSeadragon.Point|OpenSeadragon.Rect} location - The point or
           *      rectangle which will be overlaid. This is a viewport relative location.
           * @param {OpenSeadragon.Placement} [placement=OpenSeadragon.Placement.TOP_LEFT] - The position of the
           *      viewport which the location coordinates will be treated as relative
           *      to.
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:update-overlay
           */
          updateOverlay: function(u, v, S) {
            var D;
            return u = e.getElement(u), D = s(this.currentOverlays, u), D >= 0 && (this.currentOverlays[D].update(v, S), t[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", {
              element: u,
              location: v,
              placement: S
            })), this;
          },
          /**
           * Removes an overlay identified by the reference element or element id
           * and schedules an update.
           * @method
           * @param {Element|String} element - A reference to the element or an
           *      element id which represent the ovelay content to be removed.
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:remove-overlay
           */
          removeOverlay: function(u) {
            var v;
            return u = e.getElement(u), v = s(this.currentOverlays, u), v >= 0 && (this.currentOverlays[v].destroy(), this.currentOverlays.splice(v, 1), t[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", {
              element: u
            })), this;
          },
          /**
           * Removes all currently configured Overlays from this Viewer and schedules
           * an update.
           * @method
           * @returns {OpenSeadragon.Viewer} Chainable.
           * @fires OpenSeadragon.Viewer.event:clear-overlay
           */
          clearOverlays: function() {
            for (; this.currentOverlays.length > 0; )
              this.currentOverlays.pop().destroy();
            return t[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this;
          },
          /**
          * Finds an overlay identified by the reference element or element id
          * and returns it as an object, return null if not found.
          * @method
          * @param {Element|String} element - A reference to the element or an
          *      element id which represents the overlay content.
          * @returns {OpenSeadragon.Overlay} the matching overlay or null if none found.
          */
          getOverlayById: function(u) {
            var v;
            return u = e.getElement(u), v = s(this.currentOverlays, u), v >= 0 ? this.currentOverlays[v] : null;
          },
          /**
           * Updates the sequence buttons.
           * @function OpenSeadragon.Viewer.prototype._updateSequenceButtons
           * @private
           * @param {Number} Sequence Value
           */
          _updateSequenceButtons: function(u) {
            this.nextButton && (!this.tileSources || this.tileSources.length - 1 === u ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (u > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
          },
          /**
           * Display a message in the viewport
           * @function OpenSeadragon.Viewer.prototype._showMessage
           * @private
           * @param {String} text message
           */
          _showMessage: function(u) {
            this._hideMessage();
            var v = e.makeNeutralElement("div");
            v.appendChild(document.createTextNode(u)), this.messageDiv = e.makeCenteredNode(v), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
          },
          /**
           * Hide any currently displayed viewport message
           * @function OpenSeadragon.Viewer.prototype._hideMessage
           * @private
           */
          _hideMessage: function() {
            var u = this.messageDiv;
            u && (u.parentNode.removeChild(u), delete this.messageDiv);
          },
          /**
           * Gets this viewer's gesture settings for the given pointer device type.
           * @method
           * @param {String} type - The pointer device type to get the gesture settings for ("mouse", "touch", "pen", etc.).
           * @returns {OpenSeadragon.GestureSettings}
           */
          gestureSettingsByDeviceType: function(u) {
            switch (u) {
              case "mouse":
                return this.gestureSettingsMouse;
              case "touch":
                return this.gestureSettingsTouch;
              case "pen":
                return this.gestureSettingsPen;
              default:
                return this.gestureSettingsUnknown;
            }
          },
          // private
          _drawOverlays: function() {
            var u, v = this.currentOverlays.length;
            for (u = 0; u < v; u++)
              this.currentOverlays[u].drawHTML(this.overlaysContainer, this.viewport);
          },
          /**
           * Cancel the "in flight" images.
           */
          _cancelPendingImages: function() {
            this._loadQueue = [];
          },
          /**
           * Removes the reference strip and disables displaying it.
           * @function
           */
          removeReferenceStrip: function() {
            this.showReferenceStrip = !1, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
          },
          /**
           * Enables and displays the reference strip based on the currently set tileSources.
           * Works only when the Viewer has sequenceMode set to true.
           * @function
           */
          addReferenceStrip: function() {
            if (this.showReferenceStrip = !0, this.sequenceMode) {
              if (this.referenceStrip)
                return;
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
            } else
              e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
          },
          /**
           * Adds _updatePixelDensityRatio to the window resize event.
           * @private
           */
          _addUpdatePixelDensityRatioEvent: function() {
            this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
          },
          /**
           * Removes _updatePixelDensityRatio from the window resize event.
           * @private
           */
          _removeUpdatePixelDensityRatioEvent: function() {
            e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
          },
          /**
           * Update pixel density ratio and forces a resize operation.
           * @private
           */
          _updatePixelDensityRatio: function() {
            var u = e.pixelDensityRatio, v = e.getCurrentPixelDensityRatio();
            u !== v && (e.pixelDensityRatio = v, this.forceResize());
          },
          /**
           * Sets the image source to the source with index equal to
           * currentIndex - 1. Changes current image in sequence mode.
           * If specified, wraps around (see navPrevNextWrap in
           * {@link OpenSeadragon.Options})
           *
           * @method
           */
          goToPreviousPage: function() {
            var u = this._sequenceIndex - 1;
            this.navPrevNextWrap && u < 0 && (u += this.tileSources.length), this.goToPage(u);
          },
          /**
           * Sets the image source to the source with index equal to
           * currentIndex + 1. Changes current image in sequence mode.
           * If specified, wraps around (see navPrevNextWrap in
           * {@link OpenSeadragon.Options})
           *
           * @method
           */
          goToNextPage: function() {
            var u = this._sequenceIndex + 1;
            this.navPrevNextWrap && u >= this.tileSources.length && (u = 0), this.goToPage(u);
          },
          isAnimating: function() {
            return t[this.hash].animating;
          }
        }
      );
      function i(u) {
        return u = e.getElement(u), new e.Point(
          u.clientWidth === 0 ? 1 : u.clientWidth,
          u.clientHeight === 0 ? 1 : u.clientHeight
        );
      }
      function n(u, v, S, D, O) {
        var B = u;
        if (e.type(v) === "string") {
          if (v.match(/^\s*<.*>\s*$/))
            v = e.parseXml(v);
          else if (v.match(/^\s*[{[].*[}\]]\s*$/))
            try {
              var R = e.parseJSON(v);
              v = R;
            } catch {
            }
        }
        function z(G, X) {
          G.ready ? D(G) : (G.addHandler("ready", function() {
            D(G);
          }), G.addHandler("open-failed", function(k) {
            O({
              message: k.message,
              source: X
            });
          }));
        }
        setTimeout(function() {
          if (e.type(v) === "string")
            v = new e.TileSource({
              url: v,
              crossOriginPolicy: S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : u.crossOriginPolicy,
              ajaxWithCredentials: u.ajaxWithCredentials,
              ajaxHeaders: S.ajaxHeaders ? S.ajaxHeaders : u.ajaxHeaders,
              splitHashDataForPost: u.splitHashDataForPost,
              success: function(K) {
                D(K.tileSource);
              }
            }), v.addHandler("open-failed", function(K) {
              O(K);
            });
          else if (e.isPlainObject(v) || v.nodeType)
            if (v.crossOriginPolicy === void 0 && (S.crossOriginPolicy !== void 0 || u.crossOriginPolicy !== void 0) && (v.crossOriginPolicy = S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : u.crossOriginPolicy), v.ajaxWithCredentials === void 0 && (v.ajaxWithCredentials = u.ajaxWithCredentials), e.isFunction(v.getTileUrl)) {
              var G = new e.TileSource(v);
              G.getTileUrl = v.getTileUrl, D(G);
            } else {
              var X = e.TileSource.determineType(B, v);
              if (!X) {
                O({
                  message: "Unable to load TileSource",
                  source: v
                });
                return;
              }
              var k = X.prototype.configure.apply(B, [v]);
              z(new X(k), v);
            }
          else
            z(v, v);
        });
      }
      function o(u, v) {
        if (v instanceof e.Overlay)
          return v;
        var S = null;
        if (v.element)
          S = e.getElement(v.element);
        else {
          var D = v.id ? v.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
          S = e.getElement(v.id), S || (S = document.createElement("a"), S.href = "#/overlay/" + D), S.id = D, e.addClass(
            S,
            v.className ? v.className : "openseadragon-overlay"
          );
        }
        var O = v.location, B = v.width, R = v.height;
        if (!O) {
          var z = v.x, G = v.y;
          if (v.px !== void 0) {
            var X = u.viewport.imageToViewportRectangle(new e.Rect(
              v.px,
              v.py,
              B || 0,
              R || 0
            ));
            z = X.x, G = X.y, B = B !== void 0 ? X.width : void 0, R = R !== void 0 ? X.height : void 0;
          }
          O = new e.Point(z, G);
        }
        var k = v.placement;
        return k && e.type(k) === "string" && (k = e.Placement[v.placement.toUpperCase()]), new e.Overlay({
          element: S,
          location: O,
          placement: k,
          onDraw: v.onDraw,
          checkResize: v.checkResize,
          width: B,
          height: R,
          rotationMode: v.rotationMode
        });
      }
      function s(u, v) {
        var S;
        for (S = u.length - 1; S >= 0; S--)
          if (u[S].element === v)
            return S;
        return -1;
      }
      function a(u, v) {
        return e.requestAnimationFrame(function() {
          v(u);
        });
      }
      function l(u) {
        e.requestAnimationFrame(function() {
          d(u);
        });
      }
      function h(u) {
        u.autoHideControls && (u.controlsShouldFade = !0, u.controlsFadeBeginTime = e.now() + u.controlsFadeDelay, window.setTimeout(function() {
          l(u);
        }, u.controlsFadeDelay));
      }
      function d(u) {
        var v, S, D, O;
        if (u.controlsShouldFade) {
          for (v = e.now(), S = v - u.controlsFadeBeginTime, D = 1 - S / u.controlsFadeLength, D = Math.min(1, D), D = Math.max(0, D), O = u.controls.length - 1; O >= 0; O--)
            u.controls[O].autoFade && u.controls[O].setOpacity(D);
          D > 0 && l(u);
        }
      }
      function p(u) {
        var v;
        for (u.controlsShouldFade = !1, v = u.controls.length - 1; v >= 0; v--)
          u.controls[v].setOpacity(1);
      }
      function w() {
        p(this);
      }
      function y() {
        h(this);
      }
      function _(u) {
        var v = {
          tracker: u.eventSource,
          position: u.position,
          originalEvent: u.originalEvent,
          preventDefault: u.preventDefault
        };
        this.raiseEvent("canvas-contextmenu", v), u.preventDefault = v.preventDefault;
      }
      function E(u) {
        var v = {
          originalEvent: u.originalEvent,
          preventDefaultAction: !1,
          preventVerticalPan: u.preventVerticalPan || !this.panVertical,
          preventHorizontalPan: u.preventHorizontalPan || !this.panHorizontal
        };
        if (this.raiseEvent("canvas-key", v), !v.preventDefaultAction && !u.ctrl && !u.alt && !u.meta)
          switch (u.keyCode) {
            case 38:
              v.preventVerticalPan || (u.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 40:
              v.preventVerticalPan || (u.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 37:
              v.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 39:
              v.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 187:
              this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), u.preventDefault = !0;
              break;
            case 189:
              this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), u.preventDefault = !0;
              break;
            case 48:
              this.viewport.goHome(), this.viewport.applyConstraints(), u.preventDefault = !0;
              break;
            case 87:
              v.preventVerticalPan || (u.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 83:
              v.preventVerticalPan || (u.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 65:
              v.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 68:
              v.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
              break;
            case 82:
              u.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), u.preventDefault = !0;
              break;
            case 70:
              this.viewport.toggleFlip(), u.preventDefault = !0;
              break;
            case 74:
              this.goToPreviousPage();
              break;
            case 75:
              this.goToNextPage();
              break;
            default:
              u.preventDefault = !1;
              break;
          }
        else
          u.preventDefault = !1;
      }
      function P(u) {
        var v = {
          originalEvent: u.originalEvent
        };
        this.raiseEvent("canvas-key-press", v);
      }
      function C(u) {
        var v, S = document.activeElement === this.canvas;
        S || this.canvas.focus(), this.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
        var D = {
          tracker: u.eventSource,
          position: u.position,
          quick: u.quick,
          shift: u.shift,
          originalEvent: u.originalEvent,
          originalTarget: u.originalTarget,
          preventDefaultAction: !1
        };
        this.raiseEvent("canvas-click", D), !D.preventDefaultAction && this.viewport && u.quick && (v = this.gestureSettingsByDeviceType(u.pointerType), v.clickToZoom === !0 && (this.viewport.zoomBy(
          u.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
          v.zoomToRefPoint ? this.viewport.pointFromPixel(u.position, !0) : null
        ), this.viewport.applyConstraints()), v.dblClickDragToZoom && (t[this.hash].draggingToZoom === !0 ? (t[this.hash].lastClickTime = null, t[this.hash].draggingToZoom = !1) : t[this.hash].lastClickTime = e.now()));
      }
      function M(u) {
        var v, S = {
          tracker: u.eventSource,
          position: u.position,
          shift: u.shift,
          originalEvent: u.originalEvent,
          preventDefaultAction: !1
        };
        this.raiseEvent("canvas-double-click", S), !S.preventDefaultAction && this.viewport && (v = this.gestureSettingsByDeviceType(u.pointerType), v.dblClickToZoom && (this.viewport.zoomBy(
          u.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
          v.zoomToRefPoint ? this.viewport.pointFromPixel(u.position, !0) : null
        ), this.viewport.applyConstraints()));
      }
      function F(u) {
        var v, S = {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          delta: u.delta,
          speed: u.speed,
          direction: u.direction,
          shift: u.shift,
          originalEvent: u.originalEvent,
          preventDefaultAction: !1
        };
        if (this.raiseEvent("canvas-drag", S), v = this.gestureSettingsByDeviceType(u.pointerType), !S.preventDefaultAction && this.viewport) {
          if (v.dblClickDragToZoom && t[this.hash].draggingToZoom) {
            var D = Math.pow(this.zoomPerDblClickDrag, u.delta.y / 50);
            this.viewport.zoomBy(D);
          } else if (v.dragToPan && !t[this.hash].draggingToZoom) {
            if (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewport.flipped && (u.delta.x = -u.delta.x), this.constrainDuringPan) {
              var O = this.viewport.deltaPointsFromPixels(u.delta.negate());
              this.viewport.centerSpringX.target.value += O.x, this.viewport.centerSpringY.target.value += O.y;
              var B = this.viewport.getConstrainedBounds();
              this.viewport.centerSpringX.target.value -= O.x, this.viewport.centerSpringY.target.value -= O.y, B.xConstrained && (u.delta.x = 0), B.yConstrained && (u.delta.y = 0);
            }
            this.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta.negate()), v.flickEnabled && !this.constrainDuringPan);
          }
        }
      }
      function L(u) {
        var v, S = {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          speed: u.speed,
          direction: u.direction,
          shift: u.shift,
          originalEvent: u.originalEvent,
          preventDefaultAction: !1
        };
        if (this.raiseEvent("canvas-drag-end", S), v = this.gestureSettingsByDeviceType(u.pointerType), !S.preventDefaultAction && this.viewport) {
          if (!t[this.hash].draggingToZoom && v.dragToPan && v.flickEnabled && u.speed >= v.flickMinSpeed) {
            var D = 0;
            this.panHorizontal && (D = v.flickMomentum * u.speed * Math.cos(u.direction));
            var O = 0;
            this.panVertical && (O = v.flickMomentum * u.speed * Math.sin(u.direction));
            var B = this.viewport.pixelFromPoint(
              this.viewport.getCenter(!0)
            ), R = this.viewport.pointFromPixel(
              new e.Point(B.x - D, B.y - O)
            );
            this.viewport.panTo(R, !1);
          }
          this.viewport.applyConstraints();
        }
        v.dblClickDragToZoom && t[this.hash].draggingToZoom === !0 && (t[this.hash].draggingToZoom = !1);
      }
      function N(u) {
        this.raiseEvent("canvas-enter", {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          buttons: u.buttons,
          pointers: u.pointers,
          insideElementPressed: u.insideElementPressed,
          buttonDownAny: u.buttonDownAny,
          originalEvent: u.originalEvent
        });
      }
      function V(u) {
        this.raiseEvent("canvas-exit", {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          buttons: u.buttons,
          pointers: u.pointers,
          insideElementPressed: u.insideElementPressed,
          buttonDownAny: u.buttonDownAny,
          originalEvent: u.originalEvent
        });
      }
      function j(u) {
        var v;
        if (this.raiseEvent("canvas-press", {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          insideElementPressed: u.insideElementPressed,
          insideElementReleased: u.insideElementReleased,
          originalEvent: u.originalEvent
        }), v = this.gestureSettingsByDeviceType(u.pointerType), v.dblClickDragToZoom) {
          var S = t[this.hash].lastClickTime, D = e.now();
          if (S === null)
            return;
          D - S < this.dblClickTimeThreshold && (t[this.hash].draggingToZoom = !0), t[this.hash].lastClickTime = null;
        }
      }
      function Q(u) {
        this.raiseEvent("canvas-release", {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          insideElementPressed: u.insideElementPressed,
          insideElementReleased: u.insideElementReleased,
          originalEvent: u.originalEvent
        });
      }
      function Z(u) {
        this.raiseEvent("canvas-nonprimary-press", {
          tracker: u.eventSource,
          position: u.position,
          pointerType: u.pointerType,
          button: u.button,
          buttons: u.buttons,
          originalEvent: u.originalEvent
        });
      }
      function U(u) {
        this.raiseEvent("canvas-nonprimary-release", {
          tracker: u.eventSource,
          position: u.position,
          pointerType: u.pointerType,
          button: u.button,
          buttons: u.buttons,
          originalEvent: u.originalEvent
        });
      }
      function Y(u) {
        var v, S, D, O, B = {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          gesturePoints: u.gesturePoints,
          lastCenter: u.lastCenter,
          center: u.center,
          lastDistance: u.lastDistance,
          distance: u.distance,
          shift: u.shift,
          originalEvent: u.originalEvent,
          preventDefaultPanAction: !1,
          preventDefaultZoomAction: !1,
          preventDefaultRotateAction: !1
        };
        if (this.raiseEvent("canvas-pinch", B), this.viewport && (v = this.gestureSettingsByDeviceType(u.pointerType), v.pinchToZoom && (!B.preventDefaultPanAction || !B.preventDefaultZoomAction) && (S = this.viewport.pointFromPixel(u.center, !0), v.zoomToRefPoint && !B.preventDefaultPanAction && (D = this.viewport.pointFromPixel(u.lastCenter, !0), O = D.minus(S), this.panHorizontal || (O.x = 0), this.panVertical || (O.y = 0), this.viewport.panBy(O, !0)), B.preventDefaultZoomAction || this.viewport.zoomBy(u.distance / u.lastDistance, S, !0), this.viewport.applyConstraints()), v.pinchRotate && !B.preventDefaultRotateAction)) {
          var R = Math.atan2(
            u.gesturePoints[0].currentPos.y - u.gesturePoints[1].currentPos.y,
            u.gesturePoints[0].currentPos.x - u.gesturePoints[1].currentPos.x
          ), z = Math.atan2(
            u.gesturePoints[0].lastPos.y - u.gesturePoints[1].lastPos.y,
            u.gesturePoints[0].lastPos.x - u.gesturePoints[1].lastPos.x
          );
          S = this.viewport.pointFromPixel(u.center, !0), this.viewport.rotateTo(this.viewport.getRotation(!0) + (R - z) * (180 / Math.PI), S, !0);
        }
      }
      function te(u) {
        this.raiseEvent("canvas-focus", {
          tracker: u.eventSource,
          originalEvent: u.originalEvent
        });
      }
      function $(u) {
        this.raiseEvent("canvas-blur", {
          tracker: u.eventSource,
          originalEvent: u.originalEvent
        });
      }
      function ee(u) {
        var v, S, D, O, B;
        O = e.now(), B = O - this._lastScrollTime, B > this.minScrollDeltaTime ? (this._lastScrollTime = O, v = {
          tracker: u.eventSource,
          position: u.position,
          scroll: u.scroll,
          shift: u.shift,
          originalEvent: u.originalEvent,
          preventDefaultAction: !1,
          preventDefault: !0
        }, this.raiseEvent("canvas-scroll", v), !v.preventDefaultAction && this.viewport && (this.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x), S = this.gestureSettingsByDeviceType(u.pointerType), S.scrollToZoom && (D = Math.pow(this.zoomPerScroll, u.scroll), this.viewport.zoomBy(
          D,
          S.zoomToRefPoint ? this.viewport.pointFromPixel(u.position, !0) : null
        ), this.viewport.applyConstraints())), u.preventDefault = v.preventDefault) : u.preventDefault = !0;
      }
      function re(u) {
        t[this.hash].mouseInside = !0, p(this), this.raiseEvent("container-enter", {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          buttons: u.buttons,
          pointers: u.pointers,
          insideElementPressed: u.insideElementPressed,
          buttonDownAny: u.buttonDownAny,
          originalEvent: u.originalEvent
        });
      }
      function ie(u) {
        u.pointers < 1 && (t[this.hash].mouseInside = !1, t[this.hash].animating || h(this)), this.raiseEvent("container-exit", {
          tracker: u.eventSource,
          pointerType: u.pointerType,
          position: u.position,
          buttons: u.buttons,
          pointers: u.pointers,
          insideElementPressed: u.insideElementPressed,
          buttonDownAny: u.buttonDownAny,
          originalEvent: u.originalEvent
        });
      }
      function oe(u) {
        Ce(u), u.isOpen() ? u._updateRequestId = a(u, oe) : u._updateRequestId = !1;
      }
      function ae(u, v) {
        var S = u.viewport, D = S.getZoom(), O = S.getCenter();
        S.resize(v, u.preserveImageSizeOnResize), S.panTo(O, !0);
        var B;
        if (u.preserveImageSizeOnResize)
          B = t[u.hash].prevContainerSize.x / v.x;
        else {
          var R = new e.Point(0, 0), z = new e.Point(t[u.hash].prevContainerSize.x, t[u.hash].prevContainerSize.y).distanceTo(R), G = new e.Point(v.x, v.y).distanceTo(R);
          B = G / z * t[u.hash].prevContainerSize.x / v.x;
        }
        S.zoomTo(D * B, null, !0), t[u.hash].prevContainerSize = v, t[u.hash].forceRedraw = !0, t[u.hash].needsResize = !1, t[u.hash].forceResize = !1;
      }
      function Ce(u) {
        if (!(u._opening || !t[u.hash])) {
          if (u.autoResize || t[u.hash].forceResize) {
            var v;
            if (u._autoResizePolling) {
              v = i(u.container);
              var S = t[u.hash].prevContainerSize;
              v.equals(S) || (t[u.hash].needsResize = !0);
            }
            t[u.hash].needsResize && ae(u, v || i(u.container));
          }
          var D = u.viewport.update(), O = u.world.update(D) || D;
          D && u.raiseEvent("viewport-change"), u.referenceStrip && (O = u.referenceStrip.update(u.viewport) || O);
          var B = t[u.hash].animating;
          !B && O && (u.raiseEvent("animation-start"), p(u));
          var R = B && !O;
          R && (t[u.hash].animating = !1), (O || R || t[u.hash].forceRedraw || u.world.needsDraw()) && (Re(u), u._drawOverlays(), u.navigator && u.navigator.update(u.viewport), t[u.hash].forceRedraw = !1, O && u.raiseEvent("animation")), R && (u.raiseEvent("animation-finish"), t[u.hash].mouseInside || h(u)), t[u.hash].animating = O;
        }
      }
      function Re(u) {
        u.imageLoader.clear(), u.world.draw(), u.raiseEvent("update-viewport", {});
      }
      function W(u, v) {
        return u ? u + v : v;
      }
      function fe() {
        t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = this.zoomPerSecond, t[this.hash].zooming = !0, le(this);
      }
      function pe() {
        t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = 1 / this.zoomPerSecond, t[this.hash].zooming = !0, le(this);
      }
      function ge() {
        t[this.hash].zooming = !1;
      }
      function le(u) {
        e.requestAnimationFrame(e.delegate(u, me));
      }
      function me() {
        var u, v, S;
        t[this.hash].zooming && this.viewport && (u = e.now(), v = u - t[this.hash].lastZoomTime, S = Math.pow(t[this.hash].zoomFactor, v / 1e3), this.viewport.zoomBy(S), this.viewport.applyConstraints(), t[this.hash].lastZoomTime = u, le(this));
      }
      function De() {
        this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(
          this.zoomPerClick / 1
        ), this.viewport.applyConstraints());
      }
      function ve() {
        this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(
          1 / this.zoomPerClick
        ), this.viewport.applyConstraints());
      }
      function ye() {
        this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
      }
      function Ae() {
        this.viewport && this.viewport.goHome();
      }
      function we() {
        this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
      }
      function Oe() {
        if (this.viewport) {
          var u = this.viewport.getRotation();
          this.viewport.flipped ? u += this.rotationIncrement : u -= this.rotationIncrement, this.viewport.setRotation(u);
        }
      }
      function ce() {
        if (this.viewport) {
          var u = this.viewport.getRotation();
          this.viewport.flipped ? u -= this.rotationIncrement : u += this.rotationIncrement, this.viewport.setRotation(u);
        }
      }
      function he() {
        this.viewport.toggleFlip();
      }
      e.determineDrawer = function(u) {
        for (let v in g) {
          const S = g[v], D = S.prototype;
          if (D && D instanceof g.DrawerBase && e.isFunction(D.getType) && D.getType.call(S) === u)
            return S;
        }
        return null;
      };
    }(g), function(e) {
      e.Navigator = function(a) {
        var l = a.viewer, h = this, d, p;
        a.element || a.id ? (a.element ? (a.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), a.element.id ? a.id = a.element.id : a.id = "navigator-" + e.now(), this.element = a.element) : this.element = document.getElementById(a.id), a.controlOptions = {
          anchor: e.ControlAnchor.NONE,
          attachToViewer: !1,
          autoFade: !1
        }) : (a.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), a.controlOptions = {
          anchor: e.ControlAnchor.TOP_RIGHT,
          attachToViewer: !0,
          autoFade: a.autoFade
        }, a.position && (a.position === "BOTTOM_RIGHT" ? a.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : a.position === "BOTTOM_LEFT" ? a.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : a.position === "TOP_RIGHT" ? a.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : a.position === "TOP_LEFT" ? a.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : a.position === "ABSOLUTE" && (a.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, a.controlOptions.top = a.top, a.controlOptions.left = a.left, a.controlOptions.height = a.height, a.controlOptions.width = a.width))), this.element.id = a.id, this.element.className += " navigator", a = e.extend(!0, {
          sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio
        }, a, {
          element: this.element,
          tabIndex: -1,
          // No keyboard navigation, omit from tab order
          //These need to be overridden to prevent recursion since
          //the navigator is a viewer and a viewer has a navigator
          showNavigator: !1,
          mouseNavEnabled: !1,
          showNavigationControl: !1,
          showSequenceControl: !1,
          immediateRender: !0,
          blendTime: 0,
          animationTime: a.animationTime,
          // disable autoResize since resize behavior is implemented differently by the navigator
          autoResize: !1,
          // prevent resizing the navigator from adding unwanted space around the image
          minZoomImageRatio: 1,
          background: a.background,
          opacity: a.opacity,
          borderColor: a.borderColor,
          displayRegionColor: a.displayRegionColor
        }), a.minPixelRatio = this.minPixelRatio = l.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), a.controlOptions.anchor !== e.ControlAnchor.NONE && function(_, E) {
          _.margin = "0px", _.border = E + "px solid " + a.borderColor, _.padding = "0px", _.background = a.background, _.opacity = a.opacity, _.overflow = "hidden";
        }(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", function(_, E) {
          _.position = "relative", _.top = "0px", _.left = "0px", _.fontSize = "0px", _.overflow = "hidden", _.border = E + "px solid " + a.displayRegionColor, _.margin = "0px", _.padding = "0px", _.background = "transparent", _.float = "left", _.cssFloat = "left", _.zIndex = 999999999, _.cursor = "default", _.boxSizing = "content-box";
        }(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), l.addControl(
          this.element,
          a.controlOptions
        ), this._resizeWithViewer = a.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && a.controlOptions.anchor !== e.ControlAnchor.NONE, a.width && a.height ? (this.setWidth(a.width), this.setHeight(a.height)) : this._resizeWithViewer && (d = e.getElementSize(l.element), this.element.style.height = Math.round(d.y * a.sizeRatio) + "px", this.element.style.width = Math.round(d.x * a.sizeRatio) + "px", this.oldViewerSize = d, p = e.getElementSize(this.element), this.elementArea = p.x * p.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [a]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
        function w(_, E) {
          o(h.displayRegionContainer, _), o(h.displayRegion, -_), h.viewport.setRotation(_, E);
        }
        if (a.navigatorRotate) {
          var y = a.viewer.viewport ? a.viewer.viewport.getRotation() : a.viewer.degrees || 0;
          w(y, !0), a.viewer.addHandler("rotate", function(_) {
            w(_.degrees, _.immediately);
          });
        }
        this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({
          userData: "Navigator.innerTracker",
          element: this.element,
          //this.canvas,
          dragHandler: e.delegate(this, r),
          clickHandler: e.delegate(this, t),
          releaseHandler: e.delegate(this, i),
          scrollHandler: e.delegate(this, n),
          preProcessEventHandler: function(_) {
            _.eventType === "wheel" && (_.preventDefault = !0);
          }
        }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
          h.viewport && h.viewport.goHome(!0);
        }), l.world.addHandler("item-index-change", function(_) {
          window.setTimeout(function() {
            var E = h.world.getItemAt(_.previousIndex);
            h.world.setItemIndex(E, _.newIndex);
          }, 1);
        }), l.world.addHandler("remove-item", function(_) {
          var E = _.item, P = h._getMatchingItem(E);
          P && h.world.removeItem(P);
        }), this.update(l.viewport);
      }, e.extend(
        e.Navigator.prototype,
        e.EventSource.prototype,
        e.Viewer.prototype,
        /** @lends OpenSeadragon.Navigator.prototype */
        {
          /**
           * Used to notify the navigator when its size has changed.
           * Especially useful when {@link OpenSeadragon.Options}.navigatorAutoResize is set to false and the navigator is resizable.
           * @function
           */
          updateSize: function() {
            if (this.viewport) {
              var a = new e.Point(
                this.container.clientWidth === 0 ? 1 : this.container.clientWidth,
                this.container.clientHeight === 0 ? 1 : this.container.clientHeight
              );
              a.equals(this.oldContainerSize) || (this.viewport.resize(a, !0), this.viewport.goHome(!0), this.oldContainerSize = a, this.world.update(), this.world.draw(), this.update(this.viewer.viewport));
            }
          },
          /**
           * Explicitly sets the width of the navigator, in web coordinates. Disables automatic resizing.
           * @param {Number|String} width - the new width, either a number of pixels or a CSS string, such as "100%"
           */
          setWidth: function(a) {
            this.width = a, this.element.style.width = typeof a == "number" ? a + "px" : a, this._resizeWithViewer = !1, this.updateSize();
          },
          /**
           * Explicitly sets the height of the navigator, in web coordinates. Disables automatic resizing.
           * @param {Number|String} height - the new height, either a number of pixels or a CSS string, such as "100%"
           */
          setHeight: function(a) {
            this.height = a, this.element.style.height = typeof a == "number" ? a + "px" : a, this._resizeWithViewer = !1, this.updateSize();
          },
          /**
            * Flip navigator element
            * @param {Boolean} state - Flip state to set.
            */
          setFlip: function(a) {
            return this.viewport.setFlip(a), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
          },
          setDisplayTransform: function(a) {
            s(this.canvas, a), s(this.element, a);
          },
          /**
           * Used to update the navigator minimap's viewport rectangle when a change in the viewer's viewport occurs.
           * @function
           * @param {OpenSeadragon.Viewport} [viewport] The viewport to display. Default: the viewport this navigator is tracking.
           */
          update: function(a) {
            var l, h, d, p, w, y;
            if (a || (a = this.viewer.viewport), l = e.getElementSize(this.viewer.element), this._resizeWithViewer && l.x && l.y && !l.equals(this.oldViewerSize) && (this.oldViewerSize = l, this.maintainSizeRatio || !this.elementArea ? (h = l.x * this.sizeRatio, d = l.y * this.sizeRatio) : (h = Math.sqrt(this.elementArea * (l.x / l.y)), d = this.elementArea / h), this.element.style.width = Math.round(h) + "px", this.element.style.height = Math.round(d) + "px", this.elementArea || (this.elementArea = h * d), this.updateSize()), a && this.viewport) {
              if (p = a.getBoundsNoRotate(!0), w = this.viewport.pixelFromPointNoRotate(p.getTopLeft(), !1), y = this.viewport.pixelFromPointNoRotate(p.getBottomRight(), !1).minus(this.totalBorderWidths), !this.navigatorRotate) {
                var _ = a.getRotation(!0);
                o(this.displayRegion, -_);
              }
              var E = this.displayRegion.style;
              E.display = this.world.getItemCount() ? "block" : "none", E.top = w.y.toFixed(2) + "px", E.left = w.x.toFixed(2) + "px";
              var P = y.x - w.x, C = y.y - w.y;
              E.width = Math.round(Math.max(P, 0)) + "px", E.height = Math.round(Math.max(C, 0)) + "px";
            }
          },
          // overrides Viewer.addTiledImage
          addTiledImage: function(a) {
            var l = this, h = a.originalTiledImage;
            delete a.original;
            var d = e.extend({}, a, {
              success: function(p) {
                var w = p.item;
                w._originalForNavigator = h, l._matchBounds(w, h, !0), l._matchOpacity(w, h), l._matchCompositeOperation(w, h);
                function y() {
                  l._matchBounds(w, h);
                }
                function _() {
                  l._matchOpacity(w, h);
                }
                function E() {
                  l._matchCompositeOperation(w, h);
                }
                h.addHandler("bounds-change", y), h.addHandler("clip-change", y), h.addHandler("opacity-change", _), h.addHandler("composite-operation-change", E);
              }
            });
            return e.Viewer.prototype.addTiledImage.apply(this, [d]);
          },
          destroy: function() {
            return e.Viewer.prototype.destroy.apply(this);
          },
          // private
          _getMatchingItem: function(a) {
            for (var l = this.world.getItemCount(), h, d = 0; d < l; d++)
              if (h = this.world.getItemAt(d), h._originalForNavigator === a)
                return h;
            return null;
          },
          // private
          _matchBounds: function(a, l, h) {
            var d = l.getBoundsNoRotate();
            a.setPosition(d.getTopLeft(), h), a.setWidth(d.width, h), a.setRotation(l.getRotation(), h), a.setClip(l.getClip()), a.setFlip(l.getFlip());
          },
          // private
          _matchOpacity: function(a, l) {
            a.setOpacity(l.opacity);
          },
          // private
          _matchCompositeOperation: function(a, l) {
            a.setCompositeOperation(l.compositeOperation);
          }
        }
      );
      function t(a) {
        var l = {
          tracker: a.eventSource,
          position: a.position,
          quick: a.quick,
          shift: a.shift,
          originalEvent: a.originalEvent,
          preventDefaultAction: !1
        };
        if (this.viewer.raiseEvent("navigator-click", l), !l.preventDefaultAction && a.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
          this.viewer.viewport.flipped && (a.position.x = this.viewport.getContainerSize().x - a.position.x);
          var h = this.viewport.pointFromPixel(a.position);
          this.panVertical ? this.panHorizontal || (h.x = this.viewer.viewport.getCenter(!0).x) : h.y = this.viewer.viewport.getCenter(!0).y, this.viewer.viewport.panTo(h), this.viewer.viewport.applyConstraints();
        }
      }
      function r(a) {
        var l = {
          tracker: a.eventSource,
          position: a.position,
          delta: a.delta,
          speed: a.speed,
          direction: a.direction,
          shift: a.shift,
          originalEvent: a.originalEvent,
          preventDefaultAction: !1
        };
        this.viewer.raiseEvent("navigator-drag", l), !l.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (a.delta.x = 0), this.panVertical || (a.delta.y = 0), this.viewer.viewport.flipped && (a.delta.x = -a.delta.x), this.viewer.viewport.panBy(
          this.viewport.deltaPointsFromPixels(
            a.delta
          )
        ), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
      }
      function i(a) {
        a.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
      }
      function n(a) {
        var l = {
          tracker: a.eventSource,
          position: a.position,
          scroll: a.scroll,
          shift: a.shift,
          originalEvent: a.originalEvent,
          preventDefault: a.preventDefault
        };
        this.viewer.raiseEvent("navigator-scroll", l), a.preventDefault = l.preventDefault;
      }
      function o(a, l) {
        s(a, "rotate(" + l + "deg)");
      }
      function s(a, l) {
        a.style.webkitTransform = l, a.style.mozTransform = l, a.style.msTransform = l, a.style.oTransform = l, a.style.transform = l;
      }
    }(g), function(e) {
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
      e.extend(
        e,
        /** @lends OpenSeadragon */
        {
          /**
           * @function
           * @param {String} property
           */
          getString: function(r) {
            var i = r.split("."), n = null, o = arguments, s = t, a;
            for (a = 0; a < i.length - 1; a++)
              s = s[i[a]] || {};
            return n = s[i[a]], typeof n != "string" && (e.console.error("Untranslated source string:", r), n = ""), n.replace(/\{\d+\}/g, function(l) {
              var h = parseInt(l.match(/\d+/), 10) + 1;
              return h < o.length ? o[h] : "";
            });
          },
          /**
           * @function
           * @param {String} property
           * @param {*} value
           */
          setString: function(r, i) {
            var n = r.split("."), o = t, s;
            for (s = 0; s < n.length - 1; s++)
              o[n[s]] || (o[n[s]] = {}), o = o[n[s]];
            o[n[s]] = i;
          }
        }
      );
    }(g), function(e) {
      e.Point = function(t, r) {
        this.x = typeof t == "number" ? t : 0, this.y = typeof r == "number" ? r : 0;
      }, e.Point.prototype = {
        /**
         * @function
         * @returns {OpenSeadragon.Point} a duplicate of this Point
         */
        clone: function() {
          return new e.Point(this.x, this.y);
        },
        /**
         * Add another Point to this point and return a new Point.
         * @function
         * @param {OpenSeadragon.Point} point The point to add vector components.
         * @returns {OpenSeadragon.Point} A new point representing the sum of the
         *  vector components
         */
        plus: function(t) {
          return new e.Point(
            this.x + t.x,
            this.y + t.y
          );
        },
        /**
         * Subtract another Point to this point and return a new Point.
         * @function
         * @param {OpenSeadragon.Point} point The point to subtract vector components.
         * @returns {OpenSeadragon.Point} A new point representing the subtraction of the
         *  vector components
         */
        minus: function(t) {
          return new e.Point(
            this.x - t.x,
            this.y - t.y
          );
        },
        /**
         * Multiply this point by a factor and return a new Point.
         * @function
         * @param {Number} factor The factor to multiply vector components.
         * @returns {OpenSeadragon.Point} A new point representing the multiplication
         *  of the vector components by the factor
         */
        times: function(t) {
          return new e.Point(
            this.x * t,
            this.y * t
          );
        },
        /**
         * Divide this point by a factor and return a new Point.
         * @function
         * @param {Number} factor The factor to divide vector components.
         * @returns {OpenSeadragon.Point} A new point representing the division of the
         *  vector components by the factor
         */
        divide: function(t) {
          return new e.Point(
            this.x / t,
            this.y / t
          );
        },
        /**
         * Compute the opposite of this point and return a new Point.
         * @function
         * @returns {OpenSeadragon.Point} A new point representing the opposite of the
         *  vector components
         */
        negate: function() {
          return new e.Point(-this.x, -this.y);
        },
        /**
         * Compute the distance between this point and another point.
         * @function
         * @param {OpenSeadragon.Point} point The point to compute the distance with.
         * @returns {Number} The distance between the 2 points
         */
        distanceTo: function(t) {
          return Math.sqrt(
            Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
          );
        },
        /**
         * Compute the squared distance between this point and another point.
         * Useful for optimizing things like comparing distances.
         * @function
         * @param {OpenSeadragon.Point} point The point to compute the squared distance with.
         * @returns {Number} The squared distance between the 2 points
         */
        squaredDistanceTo: function(t) {
          return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2);
        },
        /**
         * Apply a function to each coordinate of this point and return a new point.
         * @function
         * @param {function} func The function to apply to each coordinate.
         * @returns {OpenSeadragon.Point} A new point with the coordinates computed
         * by the specified function
         */
        apply: function(t) {
          return new e.Point(t(this.x), t(this.y));
        },
        /**
         * Check if this point is equal to another one.
         * @function
         * @param {OpenSeadragon.Point} point The point to compare this point with.
         * @returns {Boolean} true if they are equal, false otherwise.
         */
        equals: function(t) {
          return t instanceof e.Point && this.x === t.x && this.y === t.y;
        },
        /**
         * Rotates the point around the specified pivot
         * From http://stackoverflow.com/questions/4465931/rotate-rectangle-around-a-point
         * @function
         * @param {Number} degress to rotate around the pivot.
         * @param {OpenSeadragon.Point} [pivot=(0,0)] Point around which to rotate.
         * Defaults to the origin.
         * @returns {OpenSeadragon.Point}. A new point representing the point rotated around the specified pivot
         */
        rotate: function(t, r) {
          r = r || new e.Point(0, 0);
          var i, n;
          if (t % 90 === 0) {
            var o = e.positiveModulo(t, 360);
            switch (o) {
              case 0:
                i = 1, n = 0;
                break;
              case 90:
                i = 0, n = 1;
                break;
              case 180:
                i = -1, n = 0;
                break;
              case 270:
                i = 0, n = -1;
                break;
            }
          } else {
            var s = t * Math.PI / 180;
            i = Math.cos(s), n = Math.sin(s);
          }
          var a = i * (this.x - r.x) - n * (this.y - r.y) + r.x, l = n * (this.x - r.x) + i * (this.y - r.y) + r.y;
          return new e.Point(a, l);
        },
        /**
         * Convert this point to a string in the format (x,y) where x and y are
         * rounded to the nearest integer.
         * @function
         * @returns {String} A string representation of this point.
         */
        toString: function() {
          return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
        }
      };
    }(g), function(e) {
      e.TileSource = function(r, i, n, o, s, a) {
        var l = this, h = arguments, d, p;
        if (e.isPlainObject(r) ? d = r : d = {
          width: h[0],
          height: h[1],
          tileSize: h[2],
          tileOverlap: h[3],
          minLevel: h[4],
          maxLevel: h[5]
        }, e.EventSource.call(this), e.extend(!0, this, d), !this.success) {
          for (p = 0; p < arguments.length; p++)
            if (e.isFunction(arguments[p])) {
              this.success = arguments[p];
              break;
            }
        }
        this.success && this.addHandler("ready", function(w) {
          l.success(w);
        }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = d.width && d.height ? d.width / d.height : 1, this.dimensions = new e.Point(d.width, d.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = d.tileOverlap ? d.tileOverlap : 0, this.minLevel = d.minLevel ? d.minLevel : 0, this.maxLevel = d.maxLevel !== void 0 && d.maxLevel !== null ? d.maxLevel : d.width && d.height ? Math.ceil(
          Math.log(Math.max(d.width, d.height)) / Math.log(2)
        ) : 0, this.success && e.isFunction(this.success) && this.success(this));
      }, e.TileSource.prototype = {
        getTileSize: function(r) {
          return e.console.error(
            "[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"
          ), this._tileWidth;
        },
        /**
         * Return the tileWidth for a given level.
         * Subclasses should override this if tileWidth can be different at different levels
         *   such as in IIIFTileSource.  Code should use this function rather than reading
         *   from ._tileWidth directly.
         * @function
         * @param {Number} level
         */
        getTileWidth: function(r) {
          return this._tileWidth ? this._tileWidth : this.getTileSize(r);
        },
        /**
         * Return the tileHeight for a given level.
         * Subclasses should override this if tileHeight can be different at different levels
         *   such as in IIIFTileSource.  Code should use this function rather than reading
         *   from ._tileHeight directly.
         * @function
         * @param {Number} level
         */
        getTileHeight: function(r) {
          return this._tileHeight ? this._tileHeight : this.getTileSize(r);
        },
        /**
         * Set the maxLevel to the given level, and perform the memoization of
         * getLevelScale with the new maxLevel. This function can be useful if the
         * memoization is required before the first call of getLevelScale, or both
         * memoized getLevelScale and maxLevel should be changed accordingly.
         * @function
         * @param {Number} level
         */
        setMaxLevel: function(r) {
          this.maxLevel = r, this._memoizeLevelScale();
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(r) {
          return this._memoizeLevelScale(), this.getLevelScale(r);
        },
        // private
        _memoizeLevelScale: function() {
          var r = {}, i;
          for (i = 0; i <= this.maxLevel; i++)
            r[i] = 1 / Math.pow(2, this.maxLevel - i);
          this.getLevelScale = function(n) {
            return r[n];
          };
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(r) {
          var i = this.getLevelScale(r), n = Math.ceil(i * this.dimensions.x / this.getTileWidth(r)), o = Math.ceil(i * this.dimensions.y / this.getTileHeight(r));
          return new e.Point(n, o);
        },
        /**
         * @function
         * @param {Number} level
         */
        getPixelRatio: function(r) {
          var i = this.dimensions.times(this.getLevelScale(r)), n = 1 / i.x * e.pixelDensityRatio, o = 1 / i.y * e.pixelDensityRatio;
          return new e.Point(n, o);
        },
        /**
         * @function
         * @returns {Number} The highest level in this tile source that can be contained in a single tile.
         */
        getClosestLevel: function() {
          var r, i;
          for (r = this.minLevel + 1; r <= this.maxLevel && (i = this.getNumTiles(r), !(i.x > 1 || i.y > 1)); r++)
            ;
          return r - 1;
        },
        /**
         * @function
         * @param {Number} level
         * @param {OpenSeadragon.Point} point
         */
        getTileAtPoint: function(r, i) {
          var n = i.x >= 0 && i.x <= 1 && i.y >= 0 && i.y <= 1 / this.aspectRatio;
          e.console.assert(n, "[TileSource.getTileAtPoint] must be called with a valid point.");
          var o = this.dimensions.x * this.getLevelScale(r), s = i.x * o, a = i.y * o, l = Math.floor(s / this.getTileWidth(r)), h = Math.floor(a / this.getTileHeight(r));
          i.x >= 1 && (l = this.getNumTiles(r).x - 1);
          var d = 1e-15;
          return i.y >= 1 / this.aspectRatio - d && (h = this.getNumTiles(r).y - 1), new e.Point(l, h);
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @param {Boolean} [isSource=false] Whether to return the source bounds of the tile.
         * @returns {OpenSeadragon.Rect} Either where this tile fits (in normalized coordinates) or the
         * portion of the tile to use as the source of the drawing operation (in pixels), depending on
         * the isSource parameter.
         */
        getTileBounds: function(r, i, n, o) {
          var s = this.dimensions.times(this.getLevelScale(r)), a = this.getTileWidth(r), l = this.getTileHeight(r), h = i === 0 ? 0 : a * i - this.tileOverlap, d = n === 0 ? 0 : l * n - this.tileOverlap, p = a + (i === 0 ? 1 : 2) * this.tileOverlap, w = l + (n === 0 ? 1 : 2) * this.tileOverlap, y = 1 / s.x;
          return p = Math.min(p, s.x - h), w = Math.min(w, s.y - d), o ? new e.Rect(0, 0, p, w) : new e.Rect(h * y, d * y, p * y, w * y);
        },
        /**
         * Responsible for retrieving, and caching the
         * image metadata pertinent to this TileSources implementation.
         * @function
         * @param {String} url
         * @throws {Error}
         */
        getImageInfo: function(r) {
          var i = this, n, o, s, a, l, h, d;
          r && (l = r.split("/"), h = l[l.length - 1], d = h.lastIndexOf("."), d > -1 && (l[l.length - 1] = h.slice(0, d)));
          var p = null;
          if (this.splitHashDataForPost) {
            var w = r.indexOf("#");
            w !== -1 && (p = r.substring(w + 1), r = r.substr(0, w));
          }
          o = function(y) {
            typeof y == "string" && (y = e.parseXml(y));
            var _ = e.TileSource.determineType(i, y, r);
            if (!_) {
              i.raiseEvent("open-failed", { message: "Unable to load TileSource", source: r });
              return;
            }
            a = _.prototype.configure.apply(i, [y, r, p]), a.ajaxWithCredentials === void 0 && (a.ajaxWithCredentials = i.ajaxWithCredentials), s = new _(a), i.ready = !0, i.raiseEvent("ready", { tileSource: s });
          }, r.match(/\.js$/) ? (n = r.split("/").pop().replace(".js", ""), e.jsonp({
            url: r,
            async: !1,
            callbackName: n,
            callback: o
          })) : e.makeAjaxRequest({
            url: r,
            postData: p,
            withCredentials: this.ajaxWithCredentials,
            headers: this.ajaxHeaders,
            success: function(y) {
              var _ = t(y);
              o(_);
            },
            error: function(y, _) {
              var E;
              try {
                E = "HTTP " + y.status + " attempting to load TileSource: " + r;
              } catch {
                var P;
                typeof _ > "u" || !_.toString ? P = "Unknown error" : P = _.toString(), E = P + " attempting to load TileSource: " + r;
              }
              e.console.error(E), i.raiseEvent("open-failed", {
                message: E,
                source: r,
                postData: p
              });
            }
          });
        },
        /**
         * Responsible for determining if the particular TileSource supports the
         * data format ( and allowed to apply logic against the url the data was
         * loaded from, if any ). Overriding implementations are expected to do
         * something smart with data and / or url to determine support.  Also
         * understand that iteration order of TileSources is not guaranteed so
         * please make sure your data or url is expressive enough to ensure a simple
         * and sufficient mechanism for clear determination.
         * @function
         * @param {String|Object|Array|Document} data
         * @param {String} url - the url the data was loaded
         *      from if any.
         * @returns {Boolean}
         */
        supports: function(r, i) {
          return !1;
        },
        /**
         * Responsible for parsing and configuring the
         * image metadata pertinent to this TileSources implementation.
         * This method is not implemented by this class other than to throw an Error
         * announcing you have to implement it.  Because of the variety of tile
         * server technologies, and various specifications for building image
         * pyramids, this method is here to allow easy integration.
         * @function
         * @param {String|Object|Array|Document} data
         * @param {String} url - the url the data was loaded
         *      from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null value obtained from
         *      the protocol URL after '#' sign if flag splitHashDataForPost set to 'true'
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure the tile source constructor (include all values you want to
         *      instantiate the TileSource subclass with - what _options_ object should contain).
         * @throws {Error}
         */
        configure: function(r, i, n) {
          throw new Error("Method not implemented.");
        },
        /**
         * Responsible for retrieving the url which will return an image for the
         * region specified by the given x, y, and level components.
         * This method is not implemented by this class other than to throw an Error
         * announcing you have to implement it.  Because of the variety of tile
         * server technologies, and various specifications for building image
         * pyramids, this method is here to allow easy integration.
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @returns {String|Function} url - A string for the url or a function that returns a url string.
         * @throws {Error}
         */
        getTileUrl: function(r, i, n) {
          throw new Error("Method not implemented.");
        },
        /**
         * Must use AJAX in order to work, i.e. loadTilesWithAjax = true is set.
         * If a value is returned, ajax issues POST request to the tile url.
         * If null is returned, ajax issues GET request.
         * The return value must comply to the header 'content type'.
         *
         * Examples (USED HEADER --> getTilePostData CODE):
         * 'Content-type': 'application/x-www-form-urlencoded' -->
         *   return "key1=value=1&key2=value2";
         *
         * 'Content-type': 'application/x-www-form-urlencoded' -->
         *   return JSON.stringify({key: "value", number: 5});
         *
         * 'Content-type': 'multipart/form-data' -->
         *   let result = new FormData();
         *   result.append("data", myData);
         *   return result;
         *
         * IMPORTANT: in case you move all the logic on image fetching
         * to post data, you must re-define 'getTileHashKey(...)' to
         * stay unique for different tile images.
         *
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @returns {*|null} post data to send with tile configuration request
         */
        getTilePostData: function(r, i, n) {
          return null;
        },
        /**
         * Responsible for retrieving the headers which will be attached to the image request for the
         * region specified by the given x, y, and level components.
         * This option is only relevant if {@link OpenSeadragon.Options}.loadTilesWithAjax is set to true.
         * The headers returned here will override headers specified at the Viewer or TiledImage level.
         * Specifying a falsy value for a header will clear its existing value set at the Viewer or
         * TiledImage level (if any).
         *
         * Note that the headers of existing tiles don't automatically change when this function
         * returns updated headers. To do that, you need to call {@link OpenSeadragon.Viewer#setAjaxHeaders}
         * and propagate the changes.
         *
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @returns {Object}
         */
        getTileAjaxHeaders: function(r, i, n) {
          return {};
        },
        /**
         * The tile cache object is uniquely determined by this key and used to lookup
         * the image data in cache: keys should be different if images are different.
         *
         * In case a tile has context2D property defined (TileSource.prototype.getContext2D)
         * or its context2D is set manually; the cache is not used and this function
         * is irrelevant.
         * Note: default behaviour does not take into account post data.
         * @param {Number} level tile level it was fetched with
         * @param {Number} x x-coordinate in the pyramid level
         * @param {Number} y y-coordinate in the pyramid level
         * @param {String} url the tile was fetched with
         * @param {Object} ajaxHeaders the tile was fetched with
         * @param {*} postData data the tile was fetched with (type depends on getTilePostData(..) return type)
         */
        getTileHashKey: function(r, i, n, o, s, a) {
          function l(h) {
            return s ? h + "+" + JSON.stringify(s) : h;
          }
          return l(typeof o != "string" ? r + "/" + i + "_" + n : o);
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        tileExists: function(r, i, n) {
          var o = this.getNumTiles(r);
          return r >= this.minLevel && r <= this.maxLevel && i >= 0 && n >= 0 && i < o.x && n < o.y;
        },
        /**
         * Decide whether tiles have transparency: this is crucial for correct images blending.
         * @returns {boolean} true if the image has transparency
         */
        hasTransparency: function(r, i, n, o) {
          return !!r || i.match(".png");
        },
        /**
         * Download tile data.
         * Note that if you override this function, you should override also downloadTileAbort().
         * @param {ImageJob} context job context that you have to call finish(...) on.
         * @param {String} [context.src] - URL of image to download.
         * @param {String} [context.loadWithAjax] - Whether to load this image with AJAX.
         * @param {String} [context.ajaxHeaders] - Headers to add to the image request if using AJAX.
         * @param {Boolean} [context.ajaxWithCredentials] - Whether to set withCredentials on AJAX requests.
         * @param {String} [context.crossOriginPolicy] - CORS policy to use for downloads
         * @param {String} [context.postData] - HTTP POST data (usually but not necessarily in k=v&k2=v2... form,
         *   see TileSource::getPostData) or null
         * @param {*} [context.userData] - Empty object to attach your own data and helper variables to.
         * @param {Function} [context.finish] - Should be called unless abort() was executed, e.g. on all occasions,
         *   be it successful or unsuccessful request.
         *   Usage: context.finish(data, request, errMessage). Pass the downloaded data object or null upon failure.
         *   Add also reference to an ajax request if used. Provide error message in case of failure.
         * @param {Function} [context.abort] - Called automatically when the job times out.
         *   Usage: context.abort().
         * @param {Function} [context.callback] @private - Called automatically once image has been downloaded
         *   (triggered by finish).
         * @param {Number} [context.timeout] @private - The max number of milliseconds that
         *   this image job may take to complete.
         * @param {string} [context.errorMsg] @private - The final error message, default null (set by finish).
         */
        downloadTileStart: function(r) {
          var i = r.userData, n = new Image();
          i.image = n, i.request = null;
          var o = function(s) {
            if (!n) {
              r.finish(null, i.request, "Image load failed: undefined Image instance.");
              return;
            }
            n.onload = n.onerror = n.onabort = null, r.finish(s ? null : n, i.request, s);
          };
          n.onload = function() {
            o();
          }, n.onabort = n.onerror = function() {
            o("Image load aborted.");
          }, r.loadWithAjax ? i.request = e.makeAjaxRequest({
            url: r.src,
            withCredentials: r.ajaxWithCredentials,
            headers: r.ajaxHeaders,
            responseType: "arraybuffer",
            postData: r.postData,
            success: function(s) {
              var a;
              try {
                a = new window.Blob([s.response]);
              } catch (d) {
                var l = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                if (d.name === "TypeError" && l) {
                  var h = new l();
                  h.append(s.response), a = h.getBlob();
                }
              }
              a.size === 0 ? o("Empty image response.") : n.src = (window.URL || window.webkitURL).createObjectURL(a);
            },
            error: function(s) {
              o("Image load aborted - XHR error");
            }
          }) : (r.crossOriginPolicy !== !1 && (n.crossOrigin = r.crossOriginPolicy), n.src = r.src);
        },
        /**
         * Provide means of aborting the execution.
         * Note that if you override this function, you should override also downloadTileStart().
         * @param {ImageJob} context job, the same object as with downloadTileStart(..)
         * @param {*} [context.userData] - Empty object to attach (and mainly read) your own data.
         */
        downloadTileAbort: function(r) {
          r.userData.request && r.userData.request.abort();
          var i = r.userData.image;
          r.userData.image && (i.onload = i.onerror = i.onabort = null);
        },
        /**
         * Create cache object from the result of the download process. The
         * cacheObject parameter should be used to attach the data to, there are no
         * conventions on how it should be stored - all the logic is implemented within *TileCache() functions.
         *
         * Note that if you override any of *TileCache() functions, you should override all of them.
         * @param {object} cacheObject context cache object
         * @param {*} data image data, the data sent to ImageJob.prototype.finish(), by default an Image object
         * @param {Tile} tile instance the cache was created with
         */
        createTileCache: function(r, i, n) {
          r._data = i;
        },
        /**
         * Cache object destructor, unset all properties you created to allow GC collection.
         * Note that if you override any of *TileCache() functions, you should override all of them.
         * @param {object} cacheObject context cache object
         */
        destroyTileCache: function(r) {
          r._data = null, r._renderedContext = null;
        },
        /**
         * Raw data getter
         * Note that if you override any of *TileCache() functions, you should override all of them.
         * @param {object} cacheObject context cache object
         * @returns {*} cache data
         */
        getTileCacheData: function(r) {
          return r._data;
        },
        /**
         * Compatibility image element getter
         *  - plugins might need image representation of the data
         *  - div HTML rendering relies on image element presence
         * Note that if you override any of *TileCache() functions, you should override all of them.
         *  @param {object} cacheObject context cache object
         *  @returns {Image} cache data as an Image
         */
        getTileCacheDataAsImage: function(r) {
          return r._data;
        },
        /**
         * Compatibility context 2D getter
         *  - most heavily used rendering method is a canvas-based approach,
         *    convert the data to a canvas and return it's 2D context
         * Note that if you override any of *TileCache() functions, you should override all of them.
         * @param {object} cacheObject context cache object
         * @returns {CanvasRenderingContext2D} context of the canvas representation of the cache data
         */
        getTileCacheDataAsContext2D: function(r) {
          if (!r._renderedContext) {
            var i = document.createElement("canvas");
            i.width = r._data.width, i.height = r._data.height, r._renderedContext = i.getContext("2d"), r._renderedContext.drawImage(r._data, 0, 0), r._data = null;
          }
          return r._renderedContext;
        }
      }, e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
      function t(r) {
        var i = r.responseText, n = r.status, o, s;
        if (r) {
          if (r.status !== 200 && r.status !== 0)
            throw n = r.status, o = n === 404 ? "Not Found" : r.statusText, new Error(e.getString("Errors.Status", n, o));
        } else throw new Error(e.getString("Errors.Security"));
        if (i.match(/^\s*<.*/))
          try {
            s = r.responseXML && r.responseXML.documentElement ? r.responseXML : e.parseXml(i);
          } catch {
            s = r.responseText;
          }
        else if (i.match(/\s*[{[].*/))
          try {
            s = e.parseJSON(i);
          } catch {
            s = i;
          }
        else
          s = i;
        return s;
      }
      e.TileSource.determineType = function(r, i, n) {
        var o;
        for (o in g)
          if (o.match(/.+TileSource$/) && e.isFunction(g[o]) && e.isFunction(g[o].prototype.supports) && g[o].prototype.supports.call(r, i, n))
            return g[o];
        return e.console.error("No TileSource was able to open %s %s", n, i), null;
      };
    }(g), function(e) {
      e.DziTileSource = function(i, n, o, s, a, l, h, d, p) {
        var w, y, _, E;
        if (e.isPlainObject(i) ? E = i : E = {
          width: arguments[0],
          height: arguments[1],
          tileSize: arguments[2],
          tileOverlap: arguments[3],
          tilesUrl: arguments[4],
          fileFormat: arguments[5],
          displayRects: arguments[6],
          minLevel: arguments[7],
          maxLevel: arguments[8]
        }, this._levelRects = {}, this.tilesUrl = E.tilesUrl, this.fileFormat = E.fileFormat, this.displayRects = E.displayRects, this.displayRects)
          for (w = this.displayRects.length - 1; w >= 0; w--)
            for (y = this.displayRects[w], _ = y.minLevel; _ <= y.maxLevel; _++)
              this._levelRects[_] || (this._levelRects[_] = []), this._levelRects[_].push(y);
        e.TileSource.apply(this, [E]);
      }, e.extend(
        e.DziTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.DziTileSource.prototype */
        {
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} optional - url
           */
          supports: function(i, n) {
            var o;
            return i.Image ? o = i.Image.xmlns : i.documentElement && (i.documentElement.localName === "Image" || i.documentElement.tagName === "Image") && (o = i.documentElement.namespaceURI), o = (o || "").toLowerCase(), o.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || o.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
          },
          /**
           *
           * @function
           * @param {Object|XMLDocument} data - the raw configuration
           * @param {String} url - the url the data was retrieved from if any.
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} options - A dictionary of keyword arguments sufficient
           *      to configure this tile sources constructor.
           */
          configure: function(i, n, o) {
            var s;
            return e.isPlainObject(i) ? s = r(this, i) : s = t(this, i), n && !s.tilesUrl && (s.tilesUrl = n.replace(
              /([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/,
              "$1_files/"
            ), n.search(/\.(dzi|xml|js)\?/) !== -1 ? s.queryParams = n.match(/\?.*/) : s.queryParams = ""), s;
          },
          /**
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           */
          getTileUrl: function(i, n, o) {
            return [this.tilesUrl, i, "/", n, "_", o, ".", this.fileFormat, this.queryParams].join("");
          },
          /**
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           */
          tileExists: function(i, n, o) {
            var s = this._levelRects[i], a, l, h, d, p, w, y;
            if (this.minLevel && i < this.minLevel || this.maxLevel && i > this.maxLevel)
              return !1;
            if (!s || !s.length)
              return !0;
            for (y = s.length - 1; y >= 0; y--)
              if (a = s[y], !(i < a.minLevel || i > a.maxLevel) && (l = this.getLevelScale(i), h = a.x * l, d = a.y * l, p = h + a.width * l, w = d + a.height * l, h = Math.floor(h / this._tileWidth), d = Math.floor(d / this._tileWidth), p = Math.ceil(p / this._tileWidth), w = Math.ceil(w / this._tileWidth), h <= n && n < p && d <= o && o < w))
                return !0;
            return !1;
          }
        }
      );
      function t(i, n) {
        if (!n || !n.documentElement)
          throw new Error(e.getString("Errors.Xml"));
        var o = n.documentElement, s = o.localName || o.tagName, a = n.documentElement.namespaceURI, l = null, h = [], d, p, w, y, _;
        if (s === "Image")
          try {
            if (y = o.getElementsByTagName("Size")[0], y === void 0 && (y = o.getElementsByTagNameNS(a, "Size")[0]), l = {
              Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: o.getAttribute("Url"),
                Format: o.getAttribute("Format"),
                DisplayRect: null,
                Overlap: parseInt(o.getAttribute("Overlap"), 10),
                TileSize: parseInt(o.getAttribute("TileSize"), 10),
                Size: {
                  Height: parseInt(y.getAttribute("Height"), 10),
                  Width: parseInt(y.getAttribute("Width"), 10)
                }
              }
            }, !e.imageFormatSupported(l.Image.Format))
              throw new Error(
                e.getString("Errors.ImageFormat", l.Image.Format.toUpperCase())
              );
            for (d = o.getElementsByTagName("DisplayRect"), d === void 0 && (d = o.getElementsByTagNameNS(a, "DisplayRect")[0]), _ = 0; _ < d.length; _++)
              p = d[_], w = p.getElementsByTagName("Rect")[0], w === void 0 && (w = p.getElementsByTagNameNS(a, "Rect")[0]), h.push({
                Rect: {
                  X: parseInt(w.getAttribute("X"), 10),
                  Y: parseInt(w.getAttribute("Y"), 10),
                  Width: parseInt(w.getAttribute("Width"), 10),
                  Height: parseInt(w.getAttribute("Height"), 10),
                  MinLevel: parseInt(p.getAttribute("MinLevel"), 10),
                  MaxLevel: parseInt(p.getAttribute("MaxLevel"), 10)
                }
              });
            return h.length && (l.Image.DisplayRect = h), r(i, l);
          } catch (C) {
            throw C instanceof Error ? C : new Error(e.getString("Errors.Dzi"));
          }
        else {
          if (s === "Collection")
            throw new Error(e.getString("Errors.Dzc"));
          if (s === "Error") {
            var E = o.getElementsByTagName("Message")[0], P = E.firstChild.nodeValue;
            throw new Error(P);
          }
        }
        throw new Error(e.getString("Errors.Dzi"));
      }
      function r(i, n) {
        var o = n.Image, s = o.Url, a = o.Format, l = o.Size, h = o.DisplayRect || [], d = parseInt(l.Width, 10), p = parseInt(l.Height, 10), w = parseInt(o.TileSize, 10), y = parseInt(o.Overlap, 10), _ = [], E, P;
        for (P = 0; P < h.length; P++)
          E = h[P].Rect, _.push(new e.DisplayRect(
            parseInt(E.X, 10),
            parseInt(E.Y, 10),
            parseInt(E.Width, 10),
            parseInt(E.Height, 10),
            parseInt(E.MinLevel, 10),
            parseInt(E.MaxLevel, 10)
          ));
        return e.extend(!0, {
          width: d,
          /* width *required */
          height: p,
          /* height *required */
          tileSize: w,
          /* tileSize *required */
          tileOverlap: y,
          /* tileOverlap *required */
          minLevel: null,
          /* minLevel */
          maxLevel: null,
          /* maxLevel */
          tilesUrl: s,
          /* tilesUrl */
          fileFormat: a,
          /* fileFormat */
          displayRects: _
          /* displayRects */
        }, n);
      }
    }(g), function(e) {
      e.IIIFTileSource = function(o) {
        if (e.extend(!0, this, o), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id))
          throw new Error("IIIF required parameters (width, height, or id) not provided.");
        if (o.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = o.version, this.tile_width && this.tile_height)
          o.tileWidth = this.tile_width, o.tileHeight = this.tile_height;
        else if (this.tile_width)
          o.tileSize = this.tile_width;
        else if (this.tile_height)
          o.tileSize = this.tile_height;
        else if (this.tiles)
          if (this.tiles.length === 1)
            o.tileWidth = this.tiles[0].width, o.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
          else {
            this.scale_factors = [];
            for (var s = 0; s < this.tiles.length; s++)
              for (var a = 0; a < this.tiles[s].scaleFactors.length; a++) {
                var l = this.tiles[s].scaleFactors[a];
                this.scale_factors.push(l), o.tileSizePerScaleFactor[l] = {
                  width: this.tiles[s].width,
                  height: this.tiles[s].height || this.tiles[s].width
                };
              }
          }
        else if (t(o)) {
          for (var h = Math.min(this.height, this.width), d = [256, 512, 1024], p = [], w = 0; w < d.length; w++)
            d[w] <= h && p.push(d[w]);
          p.length > 0 ? o.tileSize = Math.max.apply(null, p) : o.tileSize = h;
        } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, o.levels = r(this), e.extend(!0, o, {
          width: o.levels[o.levels.length - 1].width,
          height: o.levels[o.levels.length - 1].height,
          tileSize: Math.max(o.height, o.width),
          tileOverlap: 0,
          minLevel: 0,
          maxLevel: o.levels.length - 1
        }), this.levels = o.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
        if (!o.maxLevel && !this.emulateLegacyImagePyramid)
          if (!this.scale_factors)
            o.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
          else {
            var y = Math.max.apply(null, this.scale_factors);
            o.maxLevel = Math.round(Math.log(y) * Math.LOG2E);
          }
        if (this.sizes) {
          var _ = this.sizes.length;
          (_ === o.maxLevel || _ === o.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort((E, P) => E.width - P.width), _ === o.maxLevel && this.levelSizes.push({ width: this.width, height: this.height }));
        }
        e.TileSource.apply(this, [o]);
      }, e.extend(
        e.IIIFTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.IIIFTileSource.prototype */
        {
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} [url] - url
           */
          supports: function(o, s) {
            return o.protocol && o.protocol === "http://iiif.io/api/image" || o["@context"] && (o["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || o["@context"] === "http://iiif.io/api/image/1/context.json") || o.profile && o.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || o.identifier && o.width && o.height ? !0 : !!(o.documentElement && o.documentElement.tagName === "info" && o.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
          },
          /**
           * A static function used to prepare an incoming IIIF Image API info.json
           * response for processing by the tile handler. Normalizes data for all
           * versions of IIIF (1.0, 1.1, 2.x, 3.x) and returns a data object that
           * may be passed to the IIIFTileSource.
           *
           * @function
           * @static
           * @param {Object} data - the raw configuration
           * @param {String} url - the url configuration was retrieved from
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} A normalized IIIF data object
           * @example <caption>IIIF 2.x Info Looks like this</caption>
           * {
           * "@context": "http://iiif.io/api/image/2/context.json",
           * "@id": "http://iiif.example.com/prefix/1E34750D-38DB-4825-A38A-B60A345E591C",
           * "protocol": "http://iiif.io/api/image",
           * "height": 1024,
           * "width": 775,
           * "tiles" : [{"width":256, "scaleFactors":[1,2,4,8]}],
           *  "profile": ["http://iiif.io/api/image/2/level1.json", {
           *    "qualities": [ "native", "bitonal", "grey", "color" ],
           *    "formats": [ "jpg", "png", "gif" ]
           *   }]
           * }
           */
          configure: function(o, s, a) {
            if (e.isPlainObject(o)) {
              if (!o["@context"])
                o["@context"] = "http://iiif.io/api/image/1.0/context.json", o["@id"] = s.replace("/info.json", ""), o.version = 1;
              else {
                var h = o["@context"];
                if (Array.isArray(h)) {
                  for (var d = 0; d < h.length; d++)
                    if (typeof h[d] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(h[d]) || h[d] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                      h = h[d];
                      break;
                    }
                }
                switch (h) {
                  case "http://iiif.io/api/image/1/context.json":
                  case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                    o.version = 1;
                    break;
                  case "http://iiif.io/api/image/2/context.json":
                    o.version = 2;
                    break;
                  case "http://iiif.io/api/image/3/context.json":
                    o.version = 3;
                    break;
                  default:
                    e.console.error("Data has a @context property which contains no known IIIF context URI.");
                }
              }
              if (o.preferredFormats) {
                for (var p = 0; p < o.preferredFormats.length; p++)
                  if (g.imageFormatSupported(o.preferredFormats[p])) {
                    o.tileFormat = o.preferredFormats[p];
                    break;
                  }
              }
              return o;
            } else {
              var l = i(o);
              return l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = s.replace("/info.xml", ""), l.version = 1, l;
            }
          },
          /**
           * Return the tileWidth for the given level.
           * @function
           * @param {Number} level
           */
          getTileWidth: function(o) {
            if (this.emulateLegacyImagePyramid)
              return e.TileSource.prototype.getTileWidth.call(this, o);
            var s = Math.pow(2, this.maxLevel - o);
            return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[s] ? this.tileSizePerScaleFactor[s].width : this._tileWidth;
          },
          /**
           * Return the tileHeight for the given level.
           * @function
           * @param {Number} level
           */
          getTileHeight: function(o) {
            if (this.emulateLegacyImagePyramid)
              return e.TileSource.prototype.getTileHeight.call(this, o);
            var s = Math.pow(2, this.maxLevel - o);
            return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[s] ? this.tileSizePerScaleFactor[s].height : this._tileHeight;
          },
          /**
           * @function
           * @param {Number} level
           */
          getLevelScale: function(o) {
            if (this.emulateLegacyImagePyramid) {
              var s = NaN;
              return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (s = this.levels[o].width / this.levels[this.maxLevel].width), s;
            }
            return e.TileSource.prototype.getLevelScale.call(this, o);
          },
          /**
           * @function
           * @param {Number} level
           */
          getNumTiles: function(o) {
            if (this.emulateLegacyImagePyramid) {
              var s = this.getLevelScale(o);
              return s ? new e.Point(1, 1) : new e.Point(0, 0);
            }
            if (this.levelSizes) {
              var a = this.levelSizes[o], l = Math.ceil(a.width / this.getTileWidth(o)), h = Math.ceil(a.height / this.getTileHeight(o));
              return new e.Point(l, h);
            } else
              return e.TileSource.prototype.getNumTiles.call(this, o);
          },
          /**
           * @function
           * @param {Number} level
           * @param {OpenSeadragon.Point} point
           */
          getTileAtPoint: function(o, s) {
            if (this.emulateLegacyImagePyramid)
              return new e.Point(0, 0);
            if (this.levelSizes) {
              var a = s.x >= 0 && s.x <= 1 && s.y >= 0 && s.y <= 1 / this.aspectRatio;
              e.console.assert(a, "[TileSource.getTileAtPoint] must be called with a valid point.");
              var l = this.levelSizes[o].width, h = s.x * l, d = s.y * l, p = Math.floor(h / this.getTileWidth(o)), w = Math.floor(d / this.getTileHeight(o));
              s.x >= 1 && (p = this.getNumTiles(o).x - 1);
              var y = 1e-15;
              return s.y >= 1 / this.aspectRatio - y && (w = this.getNumTiles(o).y - 1), new e.Point(p, w);
            }
            return e.TileSource.prototype.getTileAtPoint.call(this, o, s);
          },
          /**
           * Responsible for retrieving the url which will return an image for the
           * region specified by the given x, y, and level components.
           * @function
           * @param {Number} level - z index
           * @param {Number} x
           * @param {Number} y
           * @throws {Error}
           */
          getTileUrl: function(o, s, a) {
            if (this.emulateLegacyImagePyramid) {
              var l = null;
              return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (l = this.levels[o].url), l;
            }
            var h = "0", d = Math.pow(0.5, this.maxLevel - o), p, w, y, _, E, P, C, M, F, L, N, V, j, Q, Z, U;
            return this.levelSizes ? (p = this.levelSizes[o].width, w = this.levelSizes[o].height) : (p = Math.ceil(this.width * d), w = Math.ceil(this.height * d)), y = this.getTileWidth(o), _ = this.getTileHeight(o), E = Math.round(y / d), P = Math.round(_ / d), this.version === 1 ? Z = "native." + this.tileFormat : Z = "default." + this.tileFormat, p < y && w < _ ? (this.version === 2 && p === this.width ? V = "full" : this.version === 3 && p === this.width && w === this.height ? V = "max" : this.version === 3 ? V = p + "," + w : V = p + ",", C = "full") : (M = s * E, F = a * P, L = Math.min(E, this.width - M), N = Math.min(P, this.height - F), s === 0 && a === 0 && L === this.width && N === this.height ? C = "full" : C = [M, F, L, N].join(","), j = Math.min(y, p - s * y), Q = Math.min(_, w - a * _), this.version === 2 && j === this.width ? V = "full" : this.version === 3 && j === this.width && Q === this.height ? V = "max" : this.version === 3 ? V = j + "," + Q : V = j + ","), U = [this._id, C, V, h, Z].join("/"), U;
          },
          __testonly__: {
            canBeTiled: t,
            constructLevels: r
          }
        }
      );
      function t(o) {
        var s = [
          "http://library.stanford.edu/iiif/image-api/compliance.html#level0",
          "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
          "http://iiif.io/api/image/2/level0.json",
          "level0",
          "https://iiif.io/api/image/3/level0.json"
        ], a = Array.isArray(o.profile) ? o.profile[0] : o.profile, l = s.indexOf(a) !== -1, h = !1;
        return o.version === 2 && o.profile.length > 1 && o.profile[1].supports && (h = o.profile[1].supports.indexOf("sizeByW") !== -1), o.version === 3 && o.extraFeatures && (h = o.extraFeatures.indexOf("sizeByWh") !== -1), !l || h;
      }
      function r(o) {
        for (var s = [], a = 0; a < o.sizes.length; a++)
          s.push({
            url: o._id + "/full/" + o.sizes[a].width + "," + (o.version === 3 ? o.sizes[a].height : "") + "/0/default." + o.tileFormat,
            width: o.sizes[a].width,
            height: o.sizes[a].height
          });
        return s.sort(function(l, h) {
          return l.width - h.width;
        });
      }
      function i(o) {
        if (!o || !o.documentElement)
          throw new Error(e.getString("Errors.Xml"));
        var s = o.documentElement, a = s.tagName, l = null;
        if (a === "info")
          try {
            return l = {}, n(s, l), l;
          } catch (h) {
            throw h instanceof Error ? h : new Error(e.getString("Errors.IIIF"));
          }
        throw new Error(e.getString("Errors.IIIF"));
      }
      function n(o, s, a) {
        var l, h;
        if (o.nodeType === 3 && a)
          h = o.nodeValue.trim(), h.match(/^\d*$/) && (h = Number(h)), s[a] ? (e.isArray(s[a]) || (s[a] = [s[a]]), s[a].push(h)) : s[a] = h;
        else if (o.nodeType === 1)
          for (l = 0; l < o.childNodes.length; l++)
            n(o.childNodes[l], s, o.nodeName);
      }
    }(g), function(e) {
      e.OsmTileSource = function(t, r, i, n, o) {
        var s;
        e.isPlainObject(t) ? s = t : s = {
          width: arguments[0],
          height: arguments[1],
          tileSize: arguments[2],
          tileOverlap: arguments[3],
          tilesUrl: arguments[4]
        }, (!s.width || !s.height) && (s.width = 65572864, s.height = 65572864), s.tileSize || (s.tileSize = 256, s.tileOverlap = 0), s.tilesUrl || (s.tilesUrl = "http://tile.openstreetmap.org/"), s.minLevel = 8, e.TileSource.apply(this, [s]);
      }, e.extend(
        e.OsmTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.OsmTileSource.prototype */
        {
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} optional - url
           */
          supports: function(t, r) {
            return t.type && t.type === "openstreetmaps";
          },
          /**
           *
           * @function
           * @param {Object} data - the raw configuration
           * @param {String} url - the url the data was retrieved from if any.
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} options - A dictionary of keyword arguments sufficient
           *      to configure this tile sources constructor.
           */
          configure: function(t, r, i) {
            return t;
          },
          /**
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           */
          getTileUrl: function(t, r, i) {
            return this.tilesUrl + (t - 8) + "/" + r + "/" + i + ".png";
          }
        }
      );
    }(g), function(e) {
      e.TmsTileSource = function(t, r, i, n, o) {
        var s;
        e.isPlainObject(t) ? s = t : s = {
          width: arguments[0],
          height: arguments[1],
          tileSize: arguments[2],
          tileOverlap: arguments[3],
          tilesUrl: arguments[4]
        };
        var a = Math.ceil(s.width / 256) * 256, l = Math.ceil(s.height / 256) * 256, h;
        a > l ? h = a / 256 : h = l / 256, s.maxLevel = Math.ceil(Math.log(h) / Math.log(2)) - 1, s.tileSize = 256, s.width = a, s.height = l, e.TileSource.apply(this, [s]);
      }, e.extend(
        e.TmsTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.TmsTileSource.prototype */
        {
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} optional - url
           */
          supports: function(t, r) {
            return t.type && t.type === "tiledmapservice";
          },
          /**
           *
           * @function
           * @param {Object} data - the raw configuration
           * @param {String} url - the url the data was retrieved from if any.
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} options - A dictionary of keyword arguments sufficient
           *      to configure this tile sources constructor.
           */
          configure: function(t, r, i) {
            return t;
          },
          /**
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           */
          getTileUrl: function(t, r, i) {
            var n = this.getNumTiles(t).y - 1;
            return this.tilesUrl + t + "/" + r + "/" + (n - i) + ".png";
          }
        }
      );
    }(g), function(e) {
      e.ZoomifyTileSource = function(t) {
        typeof t.tileSize > "u" && (t.tileSize = 256), typeof t.fileFormat > "u" && (t.fileFormat = "jpg", this.fileFormat = t.fileFormat);
        var r = {
          x: t.width,
          y: t.height
        };
        for (t.imageSizes = [{
          x: t.width,
          y: t.height
        }], t.gridSize = [this._getGridSize(t.width, t.height, t.tileSize)]; parseInt(r.x, 10) > t.tileSize || parseInt(r.y, 10) > t.tileSize; )
          r.x = Math.floor(r.x / 2), r.y = Math.floor(r.y / 2), t.imageSizes.push({
            x: r.x,
            y: r.y
          }), t.gridSize.push(this._getGridSize(r.x, r.y, t.tileSize));
        t.imageSizes.reverse(), t.gridSize.reverse(), t.minLevel = 0, t.maxLevel = t.gridSize.length - 1, g.TileSource.apply(this, [t]);
      }, e.extend(
        e.ZoomifyTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.ZoomifyTileSource.prototype */
        {
          //private
          _getGridSize: function(t, r, i) {
            return {
              x: Math.ceil(t / i),
              y: Math.ceil(r / i)
            };
          },
          //private
          _calculateAbsoluteTileNumber: function(t, r, i) {
            for (var n = 0, o = {}, s = 0; s < t; s++)
              o = this.gridSize[s], n += o.x * o.y;
            return o = this.gridSize[t], n += o.x * i + r, n;
          },
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} optional - url
           */
          supports: function(t, r) {
            return t.type && t.type === "zoomifytileservice";
          },
          /**
           *
           * @function
           * @param {Object} data - the raw configuration
           * @param {String} url - the url the data was retrieved from if any.
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} options - A dictionary of keyword arguments sufficient
           *      to configure this tile sources constructor.
           */
          configure: function(t, r, i) {
            return t;
          },
          /**
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           */
          getTileUrl: function(t, r, i) {
            var n = 0, o = this._calculateAbsoluteTileNumber(t, r, i);
            return n = Math.floor(o / 256), this.tilesUrl + "TileGroup" + n + "/" + t + "-" + r + "-" + i + "." + this.fileFormat;
          }
        }
      );
    }(g), function(e) {
      e.LegacyTileSource = function(n) {
        var o, s, a;
        e.isArray(n) && (o = {
          type: "legacy-image-pyramid",
          levels: n
        }), o.levels = t(o.levels), o.levels.length > 0 ? (s = o.levels[o.levels.length - 1].width, a = o.levels[o.levels.length - 1].height) : (s = 0, a = 0, e.console.error("No supported image formats found")), e.extend(!0, o, {
          width: s,
          height: a,
          tileSize: Math.max(a, s),
          tileOverlap: 0,
          minLevel: 0,
          maxLevel: o.levels.length > 0 ? o.levels.length - 1 : 0
        }), e.TileSource.apply(this, [o]), this.levels = o.levels;
      }, e.extend(
        e.LegacyTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.LegacyTileSource.prototype */
        {
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} optional - url
           */
          supports: function(n, o) {
            return n.type && n.type === "legacy-image-pyramid" || n.documentElement && n.documentElement.getAttribute("type") === "legacy-image-pyramid";
          },
          /**
           *
           * @function
           * @param {Object|XMLDocument} configuration - the raw configuration
           * @param {String} dataUrl - the url the data was retrieved from if any.
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} options - A dictionary of keyword arguments sufficient
           *      to configure this tile sources constructor.
           */
          configure: function(n, o, s) {
            var a;
            return e.isPlainObject(n) ? a = i(this, n) : a = r(this, n), a;
          },
          /**
           * @function
           * @param {Number} level
           */
          getLevelScale: function(n) {
            var o = NaN;
            return this.levels.length > 0 && n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].width / this.levels[this.maxLevel].width), o;
          },
          /**
           * @function
           * @param {Number} level
           */
          getNumTiles: function(n) {
            var o = this.getLevelScale(n);
            return o ? new e.Point(1, 1) : new e.Point(0, 0);
          },
          /**
           * This method is not implemented by this class other than to throw an Error
           * announcing you have to implement it.  Because of the variety of tile
           * server technologies, and various specifications for building image
           * pyramids, this method is here to allow easy integration.
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           * @throws {Error}
           */
          getTileUrl: function(n, o, s) {
            var a = null;
            return this.levels.length > 0 && n >= this.minLevel && n <= this.maxLevel && (a = this.levels[n].url), a;
          }
        }
      );
      function t(n) {
        var o = [], s, a;
        for (a = 0; a < n.length; a++)
          s = n[a], s.height && s.width && s.url ? o.push({
            url: s.url,
            width: Number(s.width),
            height: Number(s.height)
          }) : e.console.error("Unsupported image format: %s", s.url ? s.url : "<no URL>");
        return o.sort(function(l, h) {
          return l.height - h.height;
        });
      }
      function r(n, o) {
        if (!o || !o.documentElement)
          throw new Error(e.getString("Errors.Xml"));
        var s = o.documentElement, a = s.tagName, l = null, h = [], d, p;
        if (a === "image")
          try {
            for (l = {
              type: s.getAttribute("type"),
              levels: []
            }, h = s.getElementsByTagName("level"), p = 0; p < h.length; p++)
              d = h[p], l.levels.push({
                url: d.getAttribute("url"),
                width: parseInt(d.getAttribute("width"), 10),
                height: parseInt(d.getAttribute("height"), 10)
              });
            return i(n, l);
          } catch (w) {
            throw w instanceof Error ? w : new Error("Unknown error parsing Legacy Image Pyramid XML.");
          }
        else {
          if (a === "collection")
            throw new Error("Legacy Image Pyramid Collections not yet supported.");
          if (a === "error")
            throw new Error("Error: " + o);
        }
        throw new Error("Unknown element " + a);
      }
      function i(n, o) {
        return o.levels;
      }
    }(g), function(e) {
      e.ImageTileSource = function(t) {
        t = e.extend({
          buildPyramid: !0,
          crossOriginPolicy: !1,
          ajaxWithCredentials: !1
        }, t), e.TileSource.apply(this, [t]);
      }, e.extend(
        e.ImageTileSource.prototype,
        e.TileSource.prototype,
        /** @lends OpenSeadragon.ImageTileSource.prototype */
        {
          /**
           * Determine if the data and/or url imply the image service is supported by
           * this tile source.
           * @function
           * @param {Object|Array} data
           * @param {String} optional - url
           */
          supports: function(t, r) {
            return t.type && t.type === "image";
          },
          /**
           *
           * @function
           * @param {Object} options - the options
           * @param {String} dataUrl - the url the image was retrieved from, if any.
           * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
           * @returns {Object} options - A dictionary of keyword arguments sufficient
           *      to configure this tile sources constructor.
           */
          configure: function(t, r, i) {
            return t;
          },
          /**
           * Responsible for retrieving, and caching the
           * image metadata pertinent to this TileSources implementation.
           * @function
           * @param {String} url
           * @throws {Error}
           */
          getImageInfo: function(t) {
            var r = this._image = new Image(), i = this;
            this.crossOriginPolicy && (r.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (r.useCredentials = this.ajaxWithCredentials), e.addEvent(r, "load", function() {
              i.width = r.naturalWidth, i.height = r.naturalHeight, i.aspectRatio = i.width / i.height, i.dimensions = new e.Point(i.width, i.height), i._tileWidth = i.width, i._tileHeight = i.height, i.tileOverlap = 0, i.minLevel = 0, i.levels = i._buildLevels(), i.maxLevel = i.levels.length - 1, i.ready = !0, i.raiseEvent("ready", { tileSource: i });
            }), e.addEvent(r, "error", function() {
              i.raiseEvent("open-failed", {
                message: "Error loading image at " + t,
                source: t
              });
            }), r.src = t;
          },
          /**
           * @function
           * @param {Number} level
           */
          getLevelScale: function(t) {
            var r = NaN;
            return t >= this.minLevel && t <= this.maxLevel && (r = this.levels[t].width / this.levels[this.maxLevel].width), r;
          },
          /**
           * @function
           * @param {Number} level
           */
          getNumTiles: function(t) {
            var r = this.getLevelScale(t);
            return r ? new e.Point(1, 1) : new e.Point(0, 0);
          },
          /**
           * Retrieves a tile url
           * @function
           * @param {Number} level Level of the tile
           * @param {Number} x x coordinate of the tile
           * @param {Number} y y coordinate of the tile
           */
          getTileUrl: function(t, r, i) {
            var n = null;
            return t >= this.minLevel && t <= this.maxLevel && (n = this.levels[t].url), n;
          },
          /**
           * Retrieves a tile context 2D
           * @function
           * @param {Number} level Level of the tile
           * @param {Number} x x coordinate of the tile
           * @param {Number} y y coordinate of the tile
           */
          getContext2D: function(t, r, i) {
            var n = null;
            return t >= this.minLevel && t <= this.maxLevel && (n = this.levels[t].context2D), n;
          },
          /**
           * Destroys ImageTileSource
           * @function
           * @param {OpenSeadragon.Viewer} viewer the viewer that is calling
           * destroy on the ImageTileSource
           */
          destroy: function(t) {
            this._freeupCanvasMemory(t);
          },
          // private
          //
          // Builds the different levels of the pyramid if possible
          // (i.e. if canvas API enabled and no canvas tainting issue).
          _buildLevels: function() {
            var t = [{
              url: this._image.src,
              width: this._image.naturalWidth,
              height: this._image.naturalHeight
            }];
            if (!this.buildPyramid || !e.supportsCanvas)
              return delete this._image, t;
            var r = this._image.naturalWidth, i = this._image.naturalHeight, n = document.createElement("canvas"), o = n.getContext("2d");
            if (n.width = r, n.height = i, o.drawImage(this._image, 0, 0, r, i), t[0].context2D = o, delete this._image, e.isCanvasTainted(n))
              return t;
            for (; r >= 2 && i >= 2; ) {
              r = Math.floor(r / 2), i = Math.floor(i / 2);
              var s = document.createElement("canvas"), a = s.getContext("2d");
              s.width = r, s.height = i, a.drawImage(n, 0, 0, r, i), t.splice(0, 0, {
                context2D: a,
                width: r,
                height: i
              }), n = s, o = a;
            }
            return t;
          },
          /**
           * Free up canvas memory
           * (iOS 12 or higher on 2GB RAM device has only 224MB canvas memory,
           * and Safari keeps canvas until its height and width will be set to 0).
           * @function
           */
          _freeupCanvasMemory: function(t) {
            for (var r = 0; r < this.levels.length; r++)
              this.levels[r].context2D && (this.levels[r].context2D.canvas.height = 0, this.levels[r].context2D.canvas.width = 0, t && t.raiseEvent("image-unloaded", {
                context2D: this.levels[r].context2D
              }));
          }
        }
      );
    }(g), function(e) {
      e.TileSourceCollection = function(t, r, i, n) {
        e.console.error("TileSourceCollection is deprecated; use World instead");
      };
    }(g), function(e) {
      e.ButtonState = {
        REST: 0,
        GROUP: 1,
        HOVER: 2,
        DOWN: 3
      }, e.Button = function(a) {
        var l = this;
        e.EventSource.call(this), e.extend(!0, this, {
          tooltip: null,
          srcRest: null,
          srcGroup: null,
          srcHover: null,
          srcDown: null,
          clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
          clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
          /**
           * How long to wait before fading.
           * @member {Number} fadeDelay
           * @memberof OpenSeadragon.Button#
           */
          fadeDelay: 0,
          /**
           * How long should it take to fade the button.
           * @member {Number} fadeLength
           * @memberof OpenSeadragon.Button#
           */
          fadeLength: 2e3,
          onPress: null,
          onRelease: null,
          onClick: null,
          onEnter: null,
          onExit: null,
          onFocus: null,
          onBlur: null,
          userData: null
        }, a), this.element = a.element || e.makeNeutralElement("div"), a.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = !1, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({
          userData: "Button.tracker",
          element: this.element,
          clickTimeThreshold: this.clickTimeThreshold,
          clickDistThreshold: this.clickDistThreshold,
          enterHandler: function(h) {
            h.insideElementPressed ? (o(l, e.ButtonState.DOWN), l.raiseEvent("enter", { originalEvent: h.originalEvent })) : h.buttonDownAny || o(l, e.ButtonState.HOVER);
          },
          focusHandler: function(h) {
            l.tracker.enterHandler(h), l.raiseEvent("focus", { originalEvent: h.originalEvent });
          },
          leaveHandler: function(h) {
            s(l, e.ButtonState.GROUP), h.insideElementPressed && l.raiseEvent("exit", { originalEvent: h.originalEvent });
          },
          blurHandler: function(h) {
            l.tracker.leaveHandler(h), l.raiseEvent("blur", { originalEvent: h.originalEvent });
          },
          pressHandler: function(h) {
            o(l, e.ButtonState.DOWN), l.raiseEvent("press", { originalEvent: h.originalEvent });
          },
          releaseHandler: function(h) {
            h.insideElementPressed && h.insideElementReleased ? (s(l, e.ButtonState.HOVER), l.raiseEvent("release", { originalEvent: h.originalEvent })) : h.insideElementPressed ? s(l, e.ButtonState.GROUP) : o(l, e.ButtonState.HOVER);
          },
          clickHandler: function(h) {
            h.quick && l.raiseEvent("click", { originalEvent: h.originalEvent });
          },
          keyHandler: function(h) {
            h.keyCode === 13 ? (l.raiseEvent("click", { originalEvent: h.originalEvent }), l.raiseEvent("release", { originalEvent: h.originalEvent }), h.preventDefault = !0) : h.preventDefault = !1;
          }
        }), s(this, e.ButtonState.REST);
      }, e.extend(
        e.Button.prototype,
        e.EventSource.prototype,
        /** @lends OpenSeadragon.Button.prototype */
        {
          /**
           * Used by a button container element (e.g. a ButtonGroup) to transition the button state
           * to ButtonState.GROUP.
           * @function
           */
          notifyGroupEnter: function() {
            o(this, e.ButtonState.GROUP);
          },
          /**
           * Used by a button container element (e.g. a ButtonGroup) to transition the button state
           * to ButtonState.REST.
           * @function
           */
          notifyGroupExit: function() {
            s(this, e.ButtonState.REST);
          },
          /**
           * @function
           */
          disable: function() {
            this.notifyGroupExit(), this.element.disabled = !0, this.tracker.setTracking(!1), e.setElementOpacity(this.element, 0.2, !0);
          },
          /**
           * @function
           */
          enable: function() {
            this.element.disabled = !1, this.tracker.setTracking(!0), e.setElementOpacity(this.element, 1, !0), this.notifyGroupEnter();
          },
          destroy: function() {
            this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
          }
        }
      );
      function t(a) {
        e.requestAnimationFrame(function() {
          r(a);
        });
      }
      function r(a) {
        var l, h, d;
        a.shouldFade && (l = e.now(), h = l - a.fadeBeginTime, d = 1 - h / a.fadeLength, d = Math.min(1, d), d = Math.max(0, d), a.imgGroup && e.setElementOpacity(a.imgGroup, d, !0), d > 0 && t(a));
      }
      function i(a) {
        a.shouldFade = !0, a.fadeBeginTime = e.now() + a.fadeDelay, window.setTimeout(function() {
          t(a);
        }, a.fadeDelay);
      }
      function n(a) {
        a.shouldFade = !1, a.imgGroup && e.setElementOpacity(a.imgGroup, 1, !0);
      }
      function o(a, l) {
        a.element.disabled || (l >= e.ButtonState.GROUP && a.currentState === e.ButtonState.REST && (n(a), a.currentState = e.ButtonState.GROUP), l >= e.ButtonState.HOVER && a.currentState === e.ButtonState.GROUP && (a.imgHover && (a.imgHover.style.visibility = ""), a.currentState = e.ButtonState.HOVER), l >= e.ButtonState.DOWN && a.currentState === e.ButtonState.HOVER && (a.imgDown && (a.imgDown.style.visibility = ""), a.currentState = e.ButtonState.DOWN));
      }
      function s(a, l) {
        a.element.disabled || (l <= e.ButtonState.HOVER && a.currentState === e.ButtonState.DOWN && (a.imgDown && (a.imgDown.style.visibility = "hidden"), a.currentState = e.ButtonState.HOVER), l <= e.ButtonState.GROUP && a.currentState === e.ButtonState.HOVER && (a.imgHover && (a.imgHover.style.visibility = "hidden"), a.currentState = e.ButtonState.GROUP), l <= e.ButtonState.REST && a.currentState === e.ButtonState.GROUP && (i(a), a.currentState = e.ButtonState.REST));
      }
    }(g), function(e) {
      e.ButtonGroup = function(t) {
        e.extend(!0, this, {
          /**
           * An array containing the buttons themselves.
           * @member {Array} buttons
           * @memberof OpenSeadragon.ButtonGroup#
           */
          buttons: [],
          clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
          clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
          labelText: ""
        }, t);
        var r = this.buttons.concat([]), i = this, n;
        if (this.element = t.element || e.makeNeutralElement("div"), !t.group)
          for (this.element.style.display = "inline-block", n = 0; n < r.length; n++)
            this.element.appendChild(r[n].element);
        e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({
          userData: "ButtonGroup.tracker",
          element: this.element,
          clickTimeThreshold: this.clickTimeThreshold,
          clickDistThreshold: this.clickDistThreshold,
          enterHandler: function(o) {
            var s;
            for (s = 0; s < i.buttons.length; s++)
              i.buttons[s].notifyGroupEnter();
          },
          leaveHandler: function(o) {
            var s;
            if (!o.insideElementPressed)
              for (s = 0; s < i.buttons.length; s++)
                i.buttons[s].notifyGroupExit();
          }
        });
      }, e.ButtonGroup.prototype = {
        /**
         * Adds the given button to this button group.
         *
         * @function
         * @param {OpenSeadragon.Button} button
         */
        addButton: function(t) {
          this.buttons.push(t), this.element.appendChild(t.element);
        },
        /**
         * TODO: Figure out why this is used on the public API and if a more useful
         * api can be created.
         * @function
         * @private
         */
        emulateEnter: function() {
          this.tracker.enterHandler({ eventSource: this.tracker });
        },
        /**
         * TODO: Figure out why this is used on the public API and if a more useful
         * api can be created.
         * @function
         * @private
         */
        emulateLeave: function() {
          this.tracker.leaveHandler({ eventSource: this.tracker });
        },
        destroy: function() {
          for (; this.buttons.length; ) {
            var t = this.buttons.pop();
            this.element.removeChild(t.element), t.destroy();
          }
          this.tracker.destroy(), this.element = null;
        }
      };
    }(g), function(e) {
      e.Rect = function(t, r, i, n, o) {
        this.x = typeof t == "number" ? t : 0, this.y = typeof r == "number" ? r : 0, this.width = typeof i == "number" ? i : 0, this.height = typeof n == "number" ? n : 0, this.degrees = typeof o == "number" ? o : 0, this.degrees = e.positiveModulo(this.degrees, 360);
        var s, a;
        this.degrees >= 270 ? (s = this.getTopRight(), this.x = s.x, this.y = s.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 270) : this.degrees >= 180 ? (s = this.getBottomRight(), this.x = s.x, this.y = s.y, this.degrees -= 180) : this.degrees >= 90 && (s = this.getBottomLeft(), this.x = s.x, this.y = s.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 90);
      }, e.Rect.fromSummits = function(t, r, i) {
        var n = t.distanceTo(r), o = t.distanceTo(i), s = r.minus(t), a = Math.atan(s.y / s.x);
        return s.x < 0 ? a += Math.PI : s.y < 0 && (a += 2 * Math.PI), new e.Rect(
          t.x,
          t.y,
          n,
          o,
          a / Math.PI * 180
        );
      }, e.Rect.prototype = {
        /**
         * @function
         * @returns {OpenSeadragon.Rect} a duplicate of this Rect
         */
        clone: function() {
          return new e.Rect(
            this.x,
            this.y,
            this.width,
            this.height,
            this.degrees
          );
        },
        /**
         * The aspect ratio is simply the ratio of width to height.
         * @function
         * @returns {Number} The ratio of width to height.
         */
        getAspectRatio: function() {
          return this.width / this.height;
        },
        /**
         * Provides the coordinates of the upper-left corner of the rectangle as a
         * point.
         * @function
         * @returns {OpenSeadragon.Point} The coordinate of the upper-left corner of
         *  the rectangle.
         */
        getTopLeft: function() {
          return new e.Point(
            this.x,
            this.y
          );
        },
        /**
         * Provides the coordinates of the bottom-right corner of the rectangle as a
         * point.
         * @function
         * @returns {OpenSeadragon.Point} The coordinate of the bottom-right corner of
         *  the rectangle.
         */
        getBottomRight: function() {
          return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        },
        /**
         * Provides the coordinates of the top-right corner of the rectangle as a
         * point.
         * @function
         * @returns {OpenSeadragon.Point} The coordinate of the top-right corner of
         *  the rectangle.
         */
        getTopRight: function() {
          return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
        },
        /**
         * Provides the coordinates of the bottom-left corner of the rectangle as a
         * point.
         * @function
         * @returns {OpenSeadragon.Point} The coordinate of the bottom-left corner of
         *  the rectangle.
         */
        getBottomLeft: function() {
          return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        },
        /**
         * Computes the center of the rectangle.
         * @function
         * @returns {OpenSeadragon.Point} The center of the rectangle as represented
         *  as represented by a 2-dimensional vector (x,y)
         */
        getCenter: function() {
          return new e.Point(
            this.x + this.width / 2,
            this.y + this.height / 2
          ).rotate(this.degrees, this.getTopLeft());
        },
        /**
         * Returns the width and height component as a vector OpenSeadragon.Point
         * @function
         * @returns {OpenSeadragon.Point} The 2 dimensional vector representing the
         *  width and height of the rectangle.
         */
        getSize: function() {
          return new e.Point(this.width, this.height);
        },
        /**
         * Determines if two Rectangles have equivalent components.
         * @function
         * @param {OpenSeadragon.Rect} rectangle The Rectangle to compare to.
         * @returns {Boolean} 'true' if all components are equal, otherwise 'false'.
         */
        equals: function(t) {
          return t instanceof e.Rect && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.degrees === t.degrees;
        },
        /**
        * Multiply all dimensions (except degrees) in this Rect by a factor and
        * return a new Rect.
        * @function
        * @param {Number} factor The factor to multiply vector components.
        * @returns {OpenSeadragon.Rect} A new rect representing the multiplication
        *  of the vector components by the factor
        */
        times: function(t) {
          return new e.Rect(
            this.x * t,
            this.y * t,
            this.width * t,
            this.height * t,
            this.degrees
          );
        },
        /**
        * Translate/move this Rect by a vector and return new Rect.
        * @function
        * @param {OpenSeadragon.Point} delta The translation vector.
        * @returns {OpenSeadragon.Rect} A new rect with altered position
        */
        translate: function(t) {
          return new e.Rect(
            this.x + t.x,
            this.y + t.y,
            this.width,
            this.height,
            this.degrees
          );
        },
        /**
         * Returns the smallest rectangle that will contain this and the given
         * rectangle bounding boxes.
         * @param {OpenSeadragon.Rect} rect
         * @returns {OpenSeadragon.Rect} The new rectangle.
         */
        union: function(t) {
          var r = this.getBoundingBox(), i = t.getBoundingBox(), n = Math.min(r.x, i.x), o = Math.min(r.y, i.y), s = Math.max(
            r.x + r.width,
            i.x + i.width
          ), a = Math.max(
            r.y + r.height,
            i.y + i.height
          );
          return new e.Rect(
            n,
            o,
            s - n,
            a - o
          );
        },
        /**
         * Returns the bounding box of the intersection of this rectangle with the
         * given rectangle.
         * @param {OpenSeadragon.Rect} rect
         * @returns {OpenSeadragon.Rect} the bounding box of the intersection
         * or null if the rectangles don't intersect.
         */
        intersection: function(t) {
          var r = 1e-10, i = [], n = this.getTopLeft();
          t.containsPoint(n, r) && i.push(n);
          var o = this.getTopRight();
          t.containsPoint(o, r) && i.push(o);
          var s = this.getBottomLeft();
          t.containsPoint(s, r) && i.push(s);
          var a = this.getBottomRight();
          t.containsPoint(a, r) && i.push(a);
          var l = t.getTopLeft();
          this.containsPoint(l, r) && i.push(l);
          var h = t.getTopRight();
          this.containsPoint(h, r) && i.push(h);
          var d = t.getBottomLeft();
          this.containsPoint(d, r) && i.push(d);
          var p = t.getBottomRight();
          this.containsPoint(p, r) && i.push(p);
          for (var w = this._getSegments(), y = t._getSegments(), _ = 0; _ < w.length; _++)
            for (var E = w[_], P = 0; P < y.length; P++) {
              var C = y[P], M = F(
                E[0],
                E[1],
                C[0],
                C[1]
              );
              M && i.push(M);
            }
          function F(U, Y, te, $) {
            var ee = Y.minus(U), re = $.minus(te), ie = -re.x * ee.y + ee.x * re.y;
            if (ie === 0)
              return null;
            var oe = (ee.x * (U.y - te.y) - ee.y * (U.x - te.x)) / ie, ae = (re.x * (U.y - te.y) - re.y * (U.x - te.x)) / ie;
            return -1e-10 <= oe && oe <= 1 - r && -1e-10 <= ae && ae <= 1 - r ? new e.Point(U.x + ae * ee.x, U.y + ae * ee.y) : null;
          }
          if (i.length === 0)
            return null;
          for (var L = i[0].x, N = i[0].x, V = i[0].y, j = i[0].y, Q = 1; Q < i.length; Q++) {
            var Z = i[Q];
            Z.x < L && (L = Z.x), Z.x > N && (N = Z.x), Z.y < V && (V = Z.y), Z.y > j && (j = Z.y);
          }
          return new e.Rect(L, V, N - L, j - V);
        },
        // private
        _getSegments: function() {
          var t = this.getTopLeft(), r = this.getTopRight(), i = this.getBottomLeft(), n = this.getBottomRight();
          return [
            [t, r],
            [r, n],
            [n, i],
            [i, t]
          ];
        },
        /**
         * Rotates a rectangle around a point.
         * @function
         * @param {Number} degrees The angle in degrees to rotate.
         * @param {OpenSeadragon.Point} [pivot] The point about which to rotate.
         * Defaults to the center of the rectangle.
         * @returns {OpenSeadragon.Rect}
         */
        rotate: function(t, r) {
          if (t = e.positiveModulo(t, 360), t === 0)
            return this.clone();
          r = r || this.getCenter();
          var i = this.getTopLeft().rotate(t, r), n = this.getTopRight().rotate(t, r), o = n.minus(i);
          o = o.apply(function(a) {
            var l = 1e-15;
            return Math.abs(a) < l ? 0 : a;
          });
          var s = Math.atan(o.y / o.x);
          return o.x < 0 ? s += Math.PI : o.y < 0 && (s += 2 * Math.PI), new e.Rect(
            i.x,
            i.y,
            this.width,
            this.height,
            s / Math.PI * 180
          );
        },
        /**
         * Retrieves the smallest horizontal (degrees=0) rectangle which contains
         * this rectangle.
         * @returns {OpenSeadragon.Rect}
         */
        getBoundingBox: function() {
          if (this.degrees === 0)
            return this.clone();
          var t = this.getTopLeft(), r = this.getTopRight(), i = this.getBottomLeft(), n = this.getBottomRight(), o = Math.min(t.x, r.x, i.x, n.x), s = Math.max(t.x, r.x, i.x, n.x), a = Math.min(t.y, r.y, i.y, n.y), l = Math.max(t.y, r.y, i.y, n.y);
          return new e.Rect(
            o,
            a,
            s - o,
            l - a
          );
        },
        /**
         * Retrieves the smallest horizontal (degrees=0) rectangle which contains
         * this rectangle and has integers x, y, width and height
         * @returns {OpenSeadragon.Rect}
         */
        getIntegerBoundingBox: function() {
          var t = this.getBoundingBox(), r = Math.floor(t.x), i = Math.floor(t.y), n = Math.ceil(t.width + t.x - r), o = Math.ceil(t.height + t.y - i);
          return new e.Rect(r, i, n, o);
        },
        /**
         * Determines whether a point is inside this rectangle (edge included).
         * @function
         * @param {OpenSeadragon.Point} point
         * @param {Number} [epsilon=0] the margin of error allowed
         * @returns {Boolean} true if the point is inside this rectangle, false
         * otherwise.
         */
        containsPoint: function(t, r) {
          r = r || 0;
          var i = this.getTopLeft(), n = this.getTopRight(), o = this.getBottomLeft(), s = n.minus(i), a = o.minus(i);
          return (t.x - i.x) * s.x + (t.y - i.y) * s.y >= -r && (t.x - n.x) * s.x + (t.y - n.y) * s.y <= r && (t.x - i.x) * a.x + (t.y - i.y) * a.y >= -r && (t.x - o.x) * a.x + (t.y - o.y) * a.y <= r;
        },
        /**
         * Provides a string representation of the rectangle which is useful for
         * debugging.
         * @function
         * @returns {String} A string representation of the rectangle.
         */
        toString: function() {
          return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
        }
      };
    }(g), function(e) {
      var t = {};
      e.ReferenceStrip = function(d) {
        var p = this, w = d.viewer, y = e.getElementSize(w.element), _, E, P;
        for (d.id || (d.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = d.id, this.element.className = "referencestrip"), d = e.extend(!0, {
          sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
          position: e.DEFAULT_SETTINGS.referenceStripPosition,
          scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
          clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
        }, d, {
          element: this.element
        }), e.extend(this, d), t[this.id] = {
          animating: !1
        }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, E = this.element.style, E.marginTop = "0px", E.marginRight = "0px", E.marginBottom = "0px", E.marginLeft = "0px", E.left = "0px", E.bottom = "0px", E.border = "0px", E.background = "#000", E.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = w, this.tracker = new e.MouseTracker({
          userData: "ReferenceStrip.tracker",
          element: this.element,
          clickHandler: e.delegate(this, r),
          dragHandler: e.delegate(this, i),
          scrollHandler: e.delegate(this, n),
          enterHandler: e.delegate(this, s),
          leaveHandler: e.delegate(this, a),
          keyDownHandler: e.delegate(this, l),
          keyHandler: e.delegate(this, h),
          preProcessEventHandler: function(C) {
            C.eventType === "wheel" && (C.preventDefault = !0);
          }
        }), d.width && d.height ? (this.element.style.width = d.width + "px", this.element.style.height = d.height + "px", w.addControl(
          this.element,
          { anchor: e.ControlAnchor.BOTTOM_LEFT }
        )) : d.scroll === "horizontal" ? (this.element.style.width = y.x * d.sizeRatio * w.tileSources.length + 12 * w.tileSources.length + "px", this.element.style.height = y.y * d.sizeRatio + "px", w.addControl(
          this.element,
          { anchor: e.ControlAnchor.BOTTOM_LEFT }
        )) : (this.element.style.height = y.y * d.sizeRatio * w.tileSources.length + 12 * w.tileSources.length + "px", this.element.style.width = y.x * d.sizeRatio + "px", w.addControl(
          this.element,
          { anchor: e.ControlAnchor.TOP_LEFT }
        )), this.panelWidth = y.x * this.sizeRatio + 8, this.panelHeight = y.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, P = 0; P < w.tileSources.length; P++)
          _ = e.makeNeutralElement("div"), _.id = this.element.id + "-" + P, _.style.width = p.panelWidth + "px", _.style.height = p.panelHeight + "px", _.style.display = "inline", _.style.float = "left", _.style.cssFloat = "left", _.style.padding = "2px", e.setElementTouchActionNone(_), e.setElementPointerEventsNone(_), this.element.appendChild(_), _.activePanel = !1, this.panels.push(_);
        o(this, this.scroll === "vertical" ? y.y : y.x, 0), this.setFocus(0);
      }, e.ReferenceStrip.prototype = {
        /**
         * @function
         */
        setFocus: function(d) {
          var p = this.element.querySelector("#" + this.element.id + "-" + d), w = e.getElementSize(this.viewer.canvas), y = Number(this.element.style.width.replace("px", "")), _ = Number(this.element.style.height.replace("px", "")), E = -Number(this.element.style.marginLeft.replace("px", "")), P = -Number(this.element.style.marginTop.replace("px", "")), C;
          this.currentSelected !== p && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = p, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (C = Number(d) * (this.panelWidth + 3), C > E + w.x - this.panelWidth ? (C = Math.min(C, y - w.x), this.element.style.marginLeft = -C + "px", o(this, w.x, -C)) : C < E && (C = Math.max(0, C - w.x / 2), this.element.style.marginLeft = -C + "px", o(this, w.x, -C))) : (C = Number(d) * (this.panelHeight + 3), C > P + w.y - this.panelHeight ? (C = Math.min(C, _ - w.y), this.element.style.marginTop = -C + "px", o(this, w.y, -C)) : C < P && (C = Math.max(0, C - w.y / 2), this.element.style.marginTop = -C + "px", o(this, w.y, -C))), this.currentPage = d, s.call(this, { eventSource: this.tracker }));
        },
        /**
         * @function
         */
        update: function() {
          return !!t[this.id].animating;
        },
        destroy: function() {
          if (this.miniViewers)
            for (var d in this.miniViewers)
              this.miniViewers[d].destroy();
          this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
        }
      };
      function r(d) {
        if (d.quick) {
          var p;
          this.scroll === "horizontal" ? p = Math.floor(d.position.x / (this.panelWidth + 4)) : p = Math.floor(d.position.y / this.panelHeight), this.viewer.goToPage(p);
        }
        this.element.focus();
      }
      function i(d) {
        if (this.dragging = !0, this.element) {
          var p = Number(this.element.style.marginLeft.replace("px", "")), w = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), _ = Number(this.element.style.height.replace("px", "")), E = e.getElementSize(this.viewer.canvas);
          this.scroll === "horizontal" ? -d.delta.x > 0 ? p > -(y - E.x) && (this.element.style.marginLeft = p + d.delta.x * 2 + "px", o(this, E.x, p + d.delta.x * 2)) : -d.delta.x < 0 && p < 0 && (this.element.style.marginLeft = p + d.delta.x * 2 + "px", o(this, E.x, p + d.delta.x * 2)) : -d.delta.y > 0 ? w > -(_ - E.y) && (this.element.style.marginTop = w + d.delta.y * 2 + "px", o(this, E.y, w + d.delta.y * 2)) : -d.delta.y < 0 && w < 0 && (this.element.style.marginTop = w + d.delta.y * 2 + "px", o(this, E.y, w + d.delta.y * 2));
        }
      }
      function n(d) {
        if (this.element) {
          var p = Number(this.element.style.marginLeft.replace("px", "")), w = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), _ = Number(this.element.style.height.replace("px", "")), E = e.getElementSize(this.viewer.canvas);
          this.scroll === "horizontal" ? d.scroll > 0 ? p > -(y - E.x) && (this.element.style.marginLeft = p - d.scroll * 60 + "px", o(this, E.x, p - d.scroll * 60)) : d.scroll < 0 && p < 0 && (this.element.style.marginLeft = p - d.scroll * 60 + "px", o(this, E.x, p - d.scroll * 60)) : d.scroll < 0 ? w > E.y - _ && (this.element.style.marginTop = w + d.scroll * 60 + "px", o(this, E.y, w + d.scroll * 60)) : d.scroll > 0 && w < 0 && (this.element.style.marginTop = w + d.scroll * 60 + "px", o(this, E.y, w + d.scroll * 60)), d.preventDefault = !0;
        }
      }
      function o(d, p, w) {
        var y, _, E, P, C, M;
        for (d.scroll === "horizontal" ? y = d.panelWidth : y = d.panelHeight, _ = Math.ceil(p / y) + 5, E = Math.ceil((Math.abs(w) + p) / y) + 1, _ = E - _, _ = _ < 0 ? 0 : _, C = _; C < E && C < d.panels.length; C++)
          if (M = d.panels[C], !M.activePanel) {
            var F, L = d.viewer.tileSources[C];
            L.referenceStripThumbnailUrl ? F = {
              type: "image",
              url: L.referenceStripThumbnailUrl
            } : F = L, P = new e.Viewer({
              id: M.id,
              tileSources: [F],
              element: M,
              navigatorSizeRatio: d.sizeRatio,
              showNavigator: !1,
              mouseNavEnabled: !1,
              showNavigationControl: !1,
              showSequenceControl: !1,
              immediateRender: !0,
              blendTime: 0,
              animationTime: 0,
              loadTilesWithAjax: d.viewer.loadTilesWithAjax,
              ajaxHeaders: d.viewer.ajaxHeaders,
              drawer: "canvas"
              //always use canvas for the reference strip
            }), e.setElementPointerEventsNone(P.canvas), e.setElementPointerEventsNone(P.container), P.innerTracker.setTracking(!1), P.outerTracker.setTracking(!1), d.miniViewers[M.id] = P, M.activePanel = !0;
          }
      }
      function s(d) {
        var p = d.eventSource.element;
        this.scroll === "horizontal" ? p.style.marginBottom = "0px" : p.style.marginLeft = "0px";
      }
      function a(d) {
        var p = d.eventSource.element;
        this.scroll === "horizontal" ? p.style.marginBottom = "-" + e.getElementSize(p).y / 2 + "px" : p.style.marginLeft = "-" + e.getElementSize(p).x / 2 + "px";
      }
      function l(d) {
        if (!d.ctrl && !d.alt && !d.meta)
          switch (d.keyCode) {
            case 38:
              n.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
              break;
            case 40:
              n.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
              break;
            case 37:
              n.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
              break;
            case 39:
              n.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
              break;
            default:
              d.preventDefault = !1;
              break;
          }
        else
          d.preventDefault = !1;
      }
      function h(d) {
        if (!d.ctrl && !d.alt && !d.meta)
          switch (d.keyCode) {
            case 61:
              n.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
              break;
            case 45:
              n.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
              break;
            case 48:
            //0|)
            case 119:
            //w
            case 87:
              n.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
              break;
            case 115:
            //s
            case 83:
              n.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
              break;
            case 97:
              n.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), d.preventDefault = !0;
              break;
            case 100:
              n.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), d.preventDefault = !0;
              break;
            default:
              d.preventDefault = !1;
              break;
          }
        else
          d.preventDefault = !1;
      }
    }(g), function(e) {
      e.DisplayRect = function(t, r, i, n, o, s) {
        e.Rect.apply(this, [t, r, i, n]), this.minLevel = o, this.maxLevel = s;
      }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
    }(g), function(e) {
      e.Spring = function(r) {
        var i = arguments;
        typeof r != "object" && (r = {
          initial: i.length && typeof i[0] == "number" ? i[0] : void 0,
          /**
           * Spring stiffness.
           * @member {Number} springStiffness
           * @memberof OpenSeadragon.Spring#
           */
          springStiffness: i.length > 1 ? i[1].springStiffness : 5,
          /**
           * Animation duration per spring.
           * @member {Number} animationTime
           * @memberof OpenSeadragon.Spring#
           */
          animationTime: i.length > 1 ? i[1].animationTime : 1.5
        }), e.console.assert(
          typeof r.springStiffness == "number" && r.springStiffness !== 0,
          "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"
        ), e.console.assert(
          typeof r.animationTime == "number" && r.animationTime >= 0,
          "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"
        ), r.exponential && (this._exponential = !0, delete r.exponential), e.extend(!0, this, r), this.current = {
          value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1,
          time: e.now()
          // always work in milliseconds
        }, e.console.assert(
          !this._exponential || this.current.value !== 0,
          "[OpenSeadragon.Spring] value must be non-zero for exponential springs"
        ), this.start = {
          value: this.current.value,
          time: this.current.time
        }, this.target = {
          value: this.current.value,
          time: this.current.time
        }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
      }, e.Spring.prototype = {
        /**
         * @function
         * @param {Number} target
         */
        resetTo: function(r) {
          e.console.assert(
            !this._exponential || r !== 0,
            "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"
          ), this.start.value = this.target.value = this.current.value = r, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        },
        /**
         * @function
         * @param {Number} target
         */
        springTo: function(r) {
          e.console.assert(
            !this._exponential || r !== 0,
            "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"
          ), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = r, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        },
        /**
         * @function
         * @param {Number} delta
         */
        shiftBy: function(r) {
          this.start.value += r, this.target.value += r, this._exponential && (e.console.assert(
            this.target.value !== 0 && this.start.value !== 0,
            "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"
          ), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        },
        setExponential: function(r) {
          this._exponential = r, this._exponential && (e.console.assert(
            this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0,
            "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"
          ), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        },
        /**
         * @function
         * @returns true if the spring is still updating its value, false if it is
         * already at the target value.
         */
        update: function() {
          this.current.time = e.now();
          let r, i;
          if (this._exponential ? (r = this.start._logValue, i = this.target._logValue) : (r = this.start.value, i = this.target.value), this.current.time >= this.target.time)
            this.current.value = this.target.value;
          else {
            let n = r + (i - r) * t(
              this.springStiffness,
              (this.current.time - this.start.time) / (this.target.time - this.start.time)
            );
            this._exponential ? this.current.value = Math.exp(n) : this.current.value = n;
          }
          return this.current.value !== this.target.value;
        },
        /**
         * Returns whether the spring is at the target value
         * @function
         * @returns {Boolean} True if at target value, false otherwise
         */
        isAtTargetValue: function() {
          return this.current.value === this.target.value;
        }
      };
      function t(r, i) {
        return (1 - Math.exp(r * -i)) / (1 - Math.exp(-r));
      }
    }(g), function(e) {
      e.ImageJob = function(r) {
        e.extend(!0, this, {
          timeout: e.DEFAULT_SETTINGS.timeout,
          jobId: null,
          tries: 0
        }, r), this.data = null, this.userData = {}, this.errorMsg = null;
      }, e.ImageJob.prototype = {
        /**
         * Starts the image job.
         * @method
         * @memberof OpenSeadragon.ImageJob#
         */
        start: function() {
          this.tries++;
          var r = this, i = this.abort;
          this.jobId = window.setTimeout(function() {
            r.finish(null, null, "Image load exceeded timeout (" + r.timeout + " ms)");
          }, this.timeout), this.abort = function() {
            r.source.downloadTileAbort(r), typeof i == "function" && i();
          }, this.source.downloadTileStart(this);
        },
        /**
         * Finish this job.
         * @param {*} data data that has been downloaded
         * @param {XMLHttpRequest} request reference to the request if used
         * @param {string} errorMessage description upon failure
         * @memberof OpenSeadragon.ImageJob#
         */
        finish: function(r, i, n) {
          this.data = r, this.request = i, this.errorMsg = n, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
        }
      }, e.ImageLoader = function(r) {
        e.extend(!0, this, {
          jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
          timeout: e.DEFAULT_SETTINGS.timeout,
          jobQueue: [],
          failedTiles: [],
          jobsInProgress: 0
        }, r);
      }, e.ImageLoader.prototype = {
        /**
         * Add an unloaded image to the loader queue.
         * @method
         * @param {Object} options - Options for this job.
         * @param {String} [options.src] - URL of image to download.
         * @param {Tile} [options.tile] - Tile that belongs the data to. The tile instance
         *      is not internally used and serves for custom TileSources implementations.
         * @param {TileSource} [options.source] - Image loading strategy
         * @param {String} [options.loadWithAjax] - Whether to load this image with AJAX.
         * @param {String} [options.ajaxHeaders] - Headers to add to the image request if using AJAX.
         * @param {String|Boolean} [options.crossOriginPolicy] - CORS policy to use for downloads
         * @param {String} [options.postData] - POST parameters (usually but not necessarily in k=v&k2=v2... form,
         *      see TileSource::getPostData) or null
         * @param {Boolean} [options.ajaxWithCredentials] - Whether to set withCredentials on AJAX
         *      requests.
         * @param {Function} [options.callback] - Called once image has been downloaded.
         * @param {Function} [options.abort] - Called when this image job is aborted.
         */
        addJob: function(r) {
          if (!r.source) {
            e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
            var i = e.TileSource.prototype;
            r.source = {
              downloadTileStart: i.downloadTileStart,
              downloadTileAbort: i.downloadTileAbort
            };
          }
          var n = this, o = function(l) {
            t(n, l, r.callback);
          }, s = {
            src: r.src,
            tile: r.tile || {},
            source: r.source,
            loadWithAjax: r.loadWithAjax,
            ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null,
            crossOriginPolicy: r.crossOriginPolicy,
            ajaxWithCredentials: r.ajaxWithCredentials,
            postData: r.postData,
            callback: o,
            abort: r.abort,
            timeout: this.timeout
          }, a = new e.ImageJob(s);
          !this.jobLimit || this.jobsInProgress < this.jobLimit ? (a.start(), this.jobsInProgress++) : this.jobQueue.push(a);
        },
        /**
         * Clear any unstarted image loading jobs from the queue.
         * @method
         */
        clear: function() {
          for (var r = 0; r < this.jobQueue.length; r++) {
            var i = this.jobQueue[r];
            typeof i.abort == "function" && i.abort();
          }
          this.jobQueue = [];
        }
      };
      function t(r, i, n) {
        i.errorMsg !== "" && (i.data === null || i.data === void 0) && i.tries < 1 + r.tileRetryMax && r.failedTiles.push(i);
        var o;
        r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (o = r.jobQueue.shift(), o.start(), r.jobsInProgress++), r.tileRetryMax > 0 && r.jobQueue.length === 0 && (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.failedTiles.length > 0 && (o = r.failedTiles.shift(), setTimeout(function() {
          o.start();
        }, r.tileRetryDelay), r.jobsInProgress++), n(i.data, i.errorMsg, i.request);
      }
    }(g), function(e) {
      e.Tile = function(t, r, i, n, o, s, a, l, h, d, p, w) {
        this.level = t, this.x = r, this.y = i, this.bounds = n, this.positionedBounds = new g.Rect(n.x, n.y, n.width, n.height), this.sourceBounds = d, this.exists = o, this._url = s, this.postData = p, this.context2D = a, this.loadWithAjax = l, this.ajaxHeaders = h, w === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), w = e.TileSource.prototype.getTileHashKey(t, r, i, s, h, p)), this.cacheKey = w, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = !1, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = !1, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1;
      }, e.Tile.prototype = {
        /**
         * Provides a string representation of this tiles level and (x,y)
         * components.
         * @function
         * @returns {String}
         */
        toString: function() {
          return this.level + "/" + this.x + "_" + this.y;
        },
        // private
        _hasTransparencyChannel: function() {
          return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
        },
        /**
         * The Image object for this tile.
         * @member {Object} image
         * @memberof OpenSeadragon.Tile#
         * @deprecated
         * @returns {Image}
         */
        get image() {
          return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
        },
        /**
         * The URL of this tile's image.
         * @member {String} url
         * @memberof OpenSeadragon.Tile#
         * @deprecated
         * @returns {String}
         */
        get url() {
          return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
        },
        /**
         * Get the Image object for this tile.
         * @returns {Image}
         */
        getImage: function() {
          return this.cacheImageRecord.getImage();
        },
        /**
         * Get the url string for this tile.
         * @returns {String}
         */
        getUrl: function() {
          return typeof this._url == "function" ? this._url() : this._url;
        },
        /**
         * Get the CanvasRenderingContext2D instance for tile image data drawn
         * onto Canvas if enabled and available
         * @returns {CanvasRenderingContext2D}
         */
        getCanvasContext: function() {
          return this.context2D || this.cacheImageRecord && this.cacheImageRecord.getRenderedContext();
        },
        /**
         * Get the ratio between current and original size.
         * @function
         * @returns {Float}
         */
        getScaleForEdgeSmoothing: function() {
          var t;
          if (this.cacheImageRecord)
            t = this.cacheImageRecord.getRenderedContext();
          else if (this.context2D)
            t = this.context2D;
          else
            return e.console.warn(
              "[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached",
              this.toString()
            ), 1;
          return t.canvas.width / (this.size.x * e.pixelDensityRatio);
        },
        /**
         * Get a translation vector that when applied to the tile position produces integer coordinates.
         * Needed to avoid swimming and twitching.
         * @function
         * @param {Number} [scale=1] - Scale to be applied to position.
         * @returns {OpenSeadragon.Point}
         */
        getTranslationForEdgeSmoothing: function(t, r, i) {
          var n = Math.max(1, Math.ceil((i.x - r.x) / 2)), o = Math.max(1, Math.ceil((i.y - r.y) / 2));
          return new e.Point(n, o).minus(
            this.position.times(e.pixelDensityRatio).times(t || 1).apply(function(s) {
              return s % 1;
            })
          );
        },
        /**
         * Removes tile from its container.
         * @function
         */
        unload: function() {
          this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1;
        }
      };
    }(g), function(e) {
      e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({
        NO_ROTATION: 1,
        EXACT: 2,
        BOUNDING_BOX: 3
      }), e.Overlay = function(t, r, i) {
        var n;
        e.isPlainObject(t) ? n = t : n = {
          element: t,
          location: r,
          placement: i
        }, this.elementWrapper = document.createElement("div"), this.element = n.element, this.elementWrapper.appendChild(this.element), this.element.id ? this.elementWrapper.id = "overlay-wrapper-" + this.element.id : this.elementWrapper.id = "overlay-wrapper", this.style = this.elementWrapper.style, this._init(n);
      }, e.Overlay.prototype = {
        // private
        _init: function(t) {
          this.location = t.location, this.placement = t.placement === void 0 ? e.Placement.TOP_LEFT : t.placement, this.onDraw = t.onDraw, this.checkResize = t.checkResize === void 0 ? !0 : t.checkResize, this.width = t.width === void 0 ? null : t.width, this.height = t.height === void 0 ? null : t.height, this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(
            this.location.x,
            this.location.y,
            this.width,
            this.height
          ), this.position = this.location;
        },
        /**
         * Internal function to adjust the position of an overlay
         * depending on it size and placement.
         * @function
         * @param {OpenSeadragon.Point} position
         * @param {OpenSeadragon.Point} size
         */
        adjust: function(t, r) {
          var i = e.Placement.properties[this.placement];
          i && (i.isHorizontallyCentered ? t.x -= r.x / 2 : i.isRight && (t.x -= r.x), i.isVerticallyCentered ? t.y -= r.y / 2 : i.isBottom && (t.y -= r.y));
        },
        /**
         * @function
         */
        destroy: function() {
          var t = this.elementWrapper, r = this.style;
          t.parentNode && (t.parentNode.removeChild(t), t.prevElementParent && (r.display = "none", document.body.appendChild(t))), this.onDraw = null, r.top = "", r.left = "", r.position = "", this.width !== null && (r.width = ""), this.height !== null && (r.height = "");
          var i = e.getCssPropertyWithVendorPrefix(
            "transformOrigin"
          ), n = e.getCssPropertyWithVendorPrefix(
            "transform"
          );
          i && n && (r[i] = "", r[n] = "");
        },
        /**
         * @function
         * @param {Element} container
         */
        drawHTML: function(t, r) {
          var i = this.elementWrapper;
          i.parentNode !== t && (i.prevElementParent = i.parentNode, i.prevNextSibling = i.nextSibling, t.appendChild(i), this.style.position = "absolute", this.size = e.getElementSize(this.elementWrapper));
          var n = this._getOverlayPositionAndSize(r), o = n.position, s = this.size = n.size, a = "";
          r.overlayPreserveContentDirection && (a = r.flipped ? " scaleX(-1)" : " scaleX(1)");
          var l = r.flipped ? -n.rotate : n.rotate, h = r.flipped ? " scaleX(-1)" : "";
          if (this.onDraw)
            this.onDraw(o, s, this.element);
          else {
            var d = this.style, p = this.element.style;
            p.display = "block", d.left = o.x + "px", d.top = o.y + "px", this.width !== null && (p.width = s.x + "px"), this.height !== null && (p.height = s.y + "px");
            var w = e.getCssPropertyWithVendorPrefix(
              "transformOrigin"
            ), y = e.getCssPropertyWithVendorPrefix(
              "transform"
            );
            w && y && (l && !r.flipped ? (p[y] = "", d[w] = this._getTransformOrigin(), d[y] = "rotate(" + l + "deg)") : !l && r.flipped ? (p[y] = a, d[w] = this._getTransformOrigin(), d[y] = h) : l && r.flipped ? (p[y] = a, d[w] = this._getTransformOrigin(), d[y] = "rotate(" + l + "deg)" + h) : (p[y] = "", d[w] = "", d[y] = "")), d.display = "flex";
          }
        },
        // private
        _getOverlayPositionAndSize: function(t) {
          var r = t.pixelFromPoint(this.location, !0), i = this._getSizeInPixels(t);
          this.adjust(r, i);
          var n = 0;
          if (t.getRotation(!0) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
            if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
              var o = new e.Rect(r.x, r.y, i.x, i.y), s = this._getBoundingBox(o, t.getRotation(!0));
              r = s.getTopLeft(), i = s.getSize();
            } else
              n = t.getRotation(!0);
          return t.flipped && (r.x = t.getContainerSize().x - r.x), {
            position: r,
            size: i,
            rotate: n
          };
        },
        // private
        _getSizeInPixels: function(t) {
          var r = this.size.x, i = this.size.y;
          if (this.width !== null || this.height !== null) {
            var n = t.deltaPixelsFromPointsNoRotate(
              new e.Point(this.width || 0, this.height || 0),
              !0
            );
            this.width !== null && (r = n.x), this.height !== null && (i = n.y);
          }
          if (this.checkResize && (this.width === null || this.height === null)) {
            var o = this.size = e.getElementSize(this.elementWrapper);
            this.width === null && (r = o.x), this.height === null && (i = o.y);
          }
          return new e.Point(r, i);
        },
        // private
        _getBoundingBox: function(t, r) {
          var i = this._getPlacementPoint(t);
          return t.rotate(r, i).getBoundingBox();
        },
        // private
        _getPlacementPoint: function(t) {
          var r = new e.Point(t.x, t.y), i = e.Placement.properties[this.placement];
          return i && (i.isHorizontallyCentered ? r.x += t.width / 2 : i.isRight && (r.x += t.width), i.isVerticallyCentered ? r.y += t.height / 2 : i.isBottom && (r.y += t.height)), r;
        },
        // private
        _getTransformOrigin: function() {
          var t = "", r = e.Placement.properties[this.placement];
          return r && (r.isLeft ? t = "left" : r.isRight && (t = "right"), r.isTop ? t += " top" : r.isBottom && (t += " bottom")), t;
        },
        /**
         * Changes the overlay settings.
         * @function
         * @param {OpenSeadragon.Point|OpenSeadragon.Rect|Object} location
         * If an object is specified, the options are the same than the constructor
         * except for the element which can not be changed.
         * @param {OpenSeadragon.Placement} placement
         */
        update: function(t, r) {
          var i = e.isPlainObject(t) ? t : {
            location: t,
            placement: r
          };
          this._init({
            location: i.location || this.location,
            placement: i.placement !== void 0 ? i.placement : this.placement,
            onDraw: i.onDraw || this.onDraw,
            checkResize: i.checkResize || this.checkResize,
            width: i.width !== void 0 ? i.width : this.width,
            height: i.height !== void 0 ? i.height : this.height,
            rotationMode: i.rotationMode || this.rotationMode
          });
        },
        /**
         * Returns the current bounds of the overlay in viewport coordinates
         * @function
         * @param {OpenSeadragon.Viewport} viewport the viewport
         * @returns {OpenSeadragon.Rect} overlay bounds
         */
        getBounds: function(t) {
          e.console.assert(
            t,
            "A viewport must now be passed to Overlay.getBounds."
          );
          var r = this.width, i = this.height;
          if (r === null || i === null) {
            var n = t.deltaPointsFromPixelsNoRotate(this.size, !0);
            r === null && (r = n.x), i === null && (i = n.y);
          }
          var o = this.location.clone();
          return this.adjust(o, new e.Point(r, i)), this._adjustBoundsForRotation(
            t,
            new e.Rect(o.x, o.y, r, i)
          );
        },
        // private
        _adjustBoundsForRotation: function(t, r) {
          if (!t || t.getRotation(!0) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT)
            return r;
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
            if (this.width === null || this.height === null)
              return r;
            var i = this._getOverlayPositionAndSize(t);
            return t.viewerElementToViewportRectangle(new e.Rect(
              i.position.x,
              i.position.y,
              i.size.x,
              i.size.y
            ));
          }
          return r.rotate(
            -t.getRotation(!0),
            this._getPlacementPoint(r)
          );
        }
      };
    }(g), function(e) {
      const t = e;
      t.DrawerBase = class {
        constructor(i) {
          e.console.assert(i.viewer, "[Drawer] options.viewer is required"), e.console.assert(i.viewport, "[Drawer] options.viewport is required"), e.console.assert(i.element, "[Drawer] options.element is required"), this.viewer = i.viewer, this.viewport = i.viewport, this.debugGridColor = typeof i.debugGridColor == "string" ? [i.debugGridColor] : i.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, this.options = i.options || {}, this.container = e.getElement(i.element), this._renderingTarget = this._createDrawingElement(), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", this.canvas.style.left = "0", e.setElementOpacity(this.canvas, this.viewer.opacity, !0), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._checkForAPIOverrides();
        }
        // protect the canvas member with a getter
        get canvas() {
          return this._renderingTarget;
        }
        get element() {
          return e.console.error("Drawer.element is deprecated. Use Drawer.container instead."), this.container;
        }
        /**
         * @abstract
         * @returns {String | undefined} What type of drawer this is. Must be overridden by extending classes.
         */
        getType() {
          e.console.error("Drawer.getType must be implemented by child class");
        }
        /**
         * @abstract
         * @returns {Boolean} Whether the drawer implementation is supported by the browser. Must be overridden by extending classes.
         */
        static isSupported() {
          e.console.error("Drawer.isSupported must be implemented by child class");
        }
        /**
         * @abstract
         * @returns {Element} the element to draw into
         * @private
         */
        _createDrawingElement() {
          return e.console.error("Drawer._createDrawingElement must be implemented by child class"), null;
        }
        /**
         * @abstract
         * @param {Array} tiledImages - An array of TiledImages that are ready to be drawn.
         * @private
         */
        draw(i) {
          e.console.error("Drawer.draw must be implemented by child class");
        }
        /**
         * @abstract
         * @returns {Boolean} True if rotation is supported.
         */
        canRotate() {
          e.console.error("Drawer.canRotate must be implemented by child class");
        }
        /**
         * @abstract
         */
        destroy() {
          e.console.error("Drawer.destroy must be implemented by child class");
        }
        /**
         * @param {TiledImage} tiledImage the tiled image that is calling the function
         * @returns {Boolean} Whether this drawer requires enforcing minimum tile overlap to avoid showing seams.
         * @private
         */
        minimumOverlapRequired(i) {
          return !1;
        }
        /**
         * @abstract
         * @param {Boolean} [imageSmoothingEnabled] - Whether or not the image is
         * drawn smoothly on the canvas; see imageSmoothingEnabled in
         * {@link OpenSeadragon.Options} for more explanation.
         */
        setImageSmoothingEnabled(i) {
          e.console.error("Drawer.setImageSmoothingEnabled must be implemented by child class");
        }
        /**
         * Optional public API to draw a rectangle (e.g. for debugging purposes)
         * Child classes can override this method if they wish to support this
         * @param {OpenSeadragon.Rect} rect
         */
        drawDebuggingRect(i) {
          e.console.warn("[drawer].drawDebuggingRect is not implemented by this drawer");
        }
        // Deprecated functions
        clear() {
          e.console.warn("[drawer].clear() is deprecated. The drawer is responsible for clearing itself as needed before drawing tiles.");
        }
        // Private functions
        /**
         * Ensures that child classes have provided implementations for public API methods
         * draw, canRotate, destroy, and setImageSmoothinEnabled. Throws an exception if the original
         * placeholder methods are still in place.
         * @private
         *
         */
        _checkForAPIOverrides() {
          if (this._createDrawingElement === e.DrawerBase.prototype._createDrawingElement)
            throw new Error("[drawer]._createDrawingElement must be implemented by child class");
          if (this.draw === e.DrawerBase.prototype.draw)
            throw new Error("[drawer].draw must be implemented by child class");
          if (this.canRotate === e.DrawerBase.prototype.canRotate)
            throw new Error("[drawer].canRotate must be implemented by child class");
          if (this.destroy === e.DrawerBase.prototype.destroy)
            throw new Error("[drawer].destroy must be implemented by child class");
          if (this.setImageSmoothingEnabled === e.DrawerBase.prototype.setImageSmoothingEnabled)
            throw new Error("[drawer].setImageSmoothingEnabled must be implemented by child class");
        }
        // Utility functions
        /**
         * Scale from OpenSeadragon viewer rectangle to drawer rectangle
         * (ignoring rotation)
         * @param {OpenSeadragon.Rect} rectangle - The rectangle in viewport coordinate system.
         * @returns {OpenSeadragon.Rect} Rectangle in drawer coordinate system.
         */
        viewportToDrawerRectangle(i) {
          var n = this.viewport.pixelFromPointNoRotate(i.getTopLeft(), !0), o = this.viewport.deltaPixelsFromPointsNoRotate(i.getSize(), !0);
          return new e.Rect(
            n.x * e.pixelDensityRatio,
            n.y * e.pixelDensityRatio,
            o.x * e.pixelDensityRatio,
            o.y * e.pixelDensityRatio
          );
        }
        /**
         * This function converts the given point from to the drawer coordinate by
         * multiplying it with the pixel density.
         * This function does not take rotation into account, thus assuming provided
         * point is at 0 degree.
         * @param {OpenSeadragon.Point} point - the pixel point to convert
         * @returns {OpenSeadragon.Point} Point in drawer coordinate system.
         */
        viewportCoordToDrawerCoord(i) {
          var n = this.viewport.pixelFromPointNoRotate(i, !0);
          return new e.Point(
            n.x * e.pixelDensityRatio,
            n.y * e.pixelDensityRatio
          );
        }
        // Internal utility functions
        /**
         * Calculate width and height of the canvas based on viewport dimensions
         * and pixelDensityRatio
         * @private
         * @returns {OpenSeadragon.Point} {x, y} size of the canvas
         */
        _calculateCanvasSize() {
          var i = e.pixelDensityRatio, n = this.viewport.getContainerSize();
          return new t.Point(Math.round(n.x * i), Math.round(n.y * i));
        }
        /**
         * Called by implementations to fire the tiled-image-drawn event (used by tests)
         * @private
         */
        _raiseTiledImageDrawnEvent(i, n) {
          this.viewer && this.viewer.raiseEvent("tiled-image-drawn", {
            tiledImage: i,
            tiles: n
          });
        }
        /**
         * Called by implementations to fire the drawer-error event
         * @private
         */
        _raiseDrawerErrorEvent(i, n) {
          this.viewer && this.viewer.raiseEvent("drawer-error", {
            tiledImage: i,
            drawer: this,
            error: n
          });
        }
      };
    }(g), function(e) {
      const t = e;
      class r extends t.DrawerBase {
        constructor(n) {
          super(n), this.viewer.rejectEventHandler("tile-drawing", "The HTMLDrawer does not raise the tile-drawing event"), this.viewer.allowEventHandler("tile-drawn");
        }
        /**
         * @returns {Boolean} always true
         */
        static isSupported() {
          return !0;
        }
        /**
         *
         * @returns 'html'
         */
        getType() {
          return "html";
        }
        /**
         * @param {TiledImage} tiledImage the tiled image that is calling the function
         * @returns {Boolean} Whether this drawer requires enforcing minimum tile overlap to avoid showing seams.
         * @private
         */
        minimumOverlapRequired(n) {
          return !0;
        }
        /**
         * create the HTML element (e.g. canvas, div) that the image will be drawn into
         * @returns {Element} the div to draw into
         */
        _createDrawingElement() {
          return e.makeNeutralElement("div");
        }
        /**
         * Draws the TiledImages
         */
        draw(n) {
          var o = this;
          this._prepareNewFrame(), n.forEach(function(s) {
            s.opacity !== 0 && o._drawTiles(s);
          });
        }
        /**
         * @returns {Boolean} False - rotation is not supported.
         */
        canRotate() {
          return !1;
        }
        /**
         * Destroy the drawer (unload current loaded tiles)
         */
        destroy() {
          this.container.removeChild(this.canvas);
        }
        /**
         * This function is ignored by the HTML Drawer. Implementing it is required by DrawerBase.
         * @param {Boolean} [imageSmoothingEnabled] - Whether or not the image is
         * drawn smoothly on the canvas; see imageSmoothingEnabled in
         * {@link OpenSeadragon.Options} for more explanation.
         */
        setImageSmoothingEnabled() {
        }
        /**
         * Clears the Drawer so it's ready to draw another frame.
         * @private
         *
         */
        _prepareNewFrame() {
          this.canvas.innerHTML = "";
        }
        /**
         * Draws a TiledImage.
         * @private
         *
         */
        _drawTiles(n) {
          var o = n.getTilesToDraw().map((l) => l.tile);
          if (!(n.opacity === 0 || o.length === 0 && !n.placeholderFillStyle))
            for (var s = o.length - 1; s >= 0; s--) {
              var a = o[s];
              this._drawTile(a), this.viewer && this.viewer.raiseEvent("tile-drawn", {
                tiledImage: n,
                tile: a
              });
            }
        }
        /**
         * Draws the given tile.
         * @private
         * @param {OpenSeadragon.Tile} tile - The tile to draw.
         * @param {Function} drawingHandler - Method for firing the drawing event if using canvas.
         * drawingHandler({context, tile, rendered})
         */
        _drawTile(n) {
          e.console.assert(n, "[Drawer._drawTile] tile is required");
          let o = this.canvas;
          if (!n.cacheImageRecord) {
            e.console.warn(
              "[Drawer._drawTileToHTML] attempting to draw tile %s when it's not cached",
              n.toString()
            );
            return;
          }
          if (!n.loaded) {
            e.console.warn(
              "Attempting to draw tile %s when it's not yet loaded.",
              n.toString()
            );
            return;
          }
          if (!n.element) {
            var s = n.getImage();
            if (!s)
              return;
            n.element = e.makeNeutralElement("div"), n.imgElement = s.cloneNode(), n.imgElement.style.msInterpolationMode = "nearest-neighbor", n.imgElement.style.width = "100%", n.imgElement.style.height = "100%", n.style = n.element.style, n.style.position = "absolute";
          }
          n.element.parentNode !== o && o.appendChild(n.element), n.imgElement.parentNode !== n.element && n.element.appendChild(n.imgElement), n.style.top = n.position.y + "px", n.style.left = n.position.x + "px", n.style.height = n.size.y + "px", n.style.width = n.size.x + "px", n.flipped && (n.style.transform = "scaleX(-1)"), e.setElementOpacity(n.element, n.opacity);
        }
      }
      e.HTMLDrawer = r;
    }(g), function(e) {
      const t = e;
      class r extends t.DrawerBase {
        constructor(l) {
          super(l), this.context = this.canvas.getContext("2d"), this.sketchCanvas = null, this.sketchContext = null, this._imageSmoothingEnabled = !0, this.viewer.allowEventHandler("tile-drawn"), this.viewer.allowEventHandler("tile-drawing");
        }
        /**
         * @returns {Boolean} true if canvas is supported by the browser, otherwise false
         */
        static isSupported() {
          return e.supportsCanvas;
        }
        getType() {
          return "canvas";
        }
        /**
         * create the HTML element (e.g. canvas, div) that the image will be drawn into
         * @returns {Element} the canvas to draw into
         */
        _createDrawingElement() {
          let l = e.makeNeutralElement("canvas"), h = this._calculateCanvasSize();
          return l.width = h.x, l.height = h.y, l;
        }
        /**
         * Draws the TiledImages
         */
        draw(l) {
          this._prepareNewFrame(), this.viewer.viewport.getFlip() !== this._viewportFlipped && this._flip();
          for (const h of l)
            h.opacity !== 0 && this._drawTiles(h);
        }
        /**
         * @returns {Boolean} True - rotation is supported.
         */
        canRotate() {
          return !0;
        }
        /**
         * Destroy the drawer (unload current loaded tiles)
         */
        destroy() {
          this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null, this.container.removeChild(this.canvas);
        }
        /**
         * @param {TiledImage} tiledImage the tiled image that is calling the function
         * @returns {Boolean} Whether this drawer requires enforcing minimum tile overlap to avoid showing seams.
         * @private
         */
        minimumOverlapRequired(l) {
          return !0;
        }
        /**
         * Turns image smoothing on or off for this viewer. Note: Ignored in some (especially older) browsers that do not support this property.
         *
         * @function
         * @param {Boolean} [imageSmoothingEnabled] - Whether or not the image is
         * drawn smoothly on the canvas; see imageSmoothingEnabled in
         * {@link OpenSeadragon.Options} for more explanation.
         */
        setImageSmoothingEnabled(l) {
          this._imageSmoothingEnabled = !!l, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw();
        }
        /**
         * Draw a rectangle onto the canvas
         * @param {OpenSeadragon.Rect} rect
         */
        drawDebuggingRect(l) {
          var h = this.context;
          h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.strokeStyle = this.debugGridColor[0], h.fillStyle = this.debugGridColor[0], h.strokeRect(
            l.x * e.pixelDensityRatio,
            l.y * e.pixelDensityRatio,
            l.width * e.pixelDensityRatio,
            l.height * e.pixelDensityRatio
          ), h.restore();
        }
        /**
         * Test whether the current context is flipped or not
         * @private
         */
        get _viewportFlipped() {
          return this.context.getTransform().a < 0;
        }
        /**
         * Fires the tile-drawing event.
         * @private
         */
        _raiseTileDrawingEvent(l, h, d, p) {
          this.viewer.raiseEvent("tile-drawing", {
            tiledImage: l,
            context: h,
            tile: d,
            rendered: p
          });
        }
        /**
         * Clears the Drawer so it's ready to draw another frame.
         * @private
         *
         */
        _prepareNewFrame() {
          var l = this._calculateCanvasSize();
          if ((this.canvas.width !== l.x || this.canvas.height !== l.y) && (this.canvas.width = l.x, this.canvas.height = l.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
            var h = this._calculateSketchCanvasSize();
            this.sketchCanvas.width = h.x, this.sketchCanvas.height = h.y, this._updateImageSmoothingEnabled(this.sketchContext);
          }
          this._clear();
        }
        /**
         * @private
         * @param {Boolean} useSketch Whether to clear sketch canvas or main canvas
         * @param {OpenSeadragon.Rect} [bounds] The rectangle to clear
         */
        _clear(l, h) {
          var d = this._getContext(l);
          if (h)
            d.clearRect(h.x, h.y, h.width, h.height);
          else {
            var p = d.canvas;
            d.clearRect(0, 0, p.width, p.height);
          }
        }
        /**
         * Draws a TiledImage.
         * @private
         *
         */
        _drawTiles(l) {
          var h = l.getTilesToDraw().map((U) => U.tile);
          if (!(l.opacity === 0 || h.length === 0 && !l.placeholderFillStyle)) {
            var d = h[0], p;
            d && (p = l.opacity < 1 || l.compositeOperation && l.compositeOperation !== "source-over" || !l._isBottomItem() && l.source.hasTransparency(d.context2D, d.getUrl(), d.ajaxHeaders, d.postData));
            var w, y, _ = this.viewport.getZoom(!0), E = l.viewportToImageZoom(_);
            h.length > 1 && E > l.smoothTileEdgesMinZoom && !l.iOSDevice && l.getRotation(!0) % 360 === 0 && (p = !0, w = d.getScaleForEdgeSmoothing(), y = d.getTranslationForEdgeSmoothing(
              w,
              this._getCanvasSize(!1),
              this._getCanvasSize(!0)
            ));
            var P;
            p && (w || (P = this.viewport.viewportToViewerElementRectangle(
              l.getClippedBounds(!0)
            ).getIntegerBoundingBox(), P = P.times(e.pixelDensityRatio)), this._clear(!0, P)), w || this._setRotations(l, p);
            var C = !1;
            if (l._clip) {
              this._saveContext(p);
              var M = l.imageToViewportRectangle(l._clip, !0);
              M = M.rotate(-l.getRotation(!0), l._getRotationPoint(!0));
              var F = this.viewportToDrawerRectangle(M);
              w && (F = F.times(w)), y && (F = F.translate(y)), this._setClip(F, p), C = !0;
            }
            if (l._croppingPolygons) {
              var L = this;
              C || this._saveContext(p);
              try {
                var N = l._croppingPolygons.map(function(U) {
                  return U.map(function(Y) {
                    var te = l.imageToViewportCoordinates(Y.x, Y.y, !0).rotate(-l.getRotation(!0), l._getRotationPoint(!0)), $ = L.viewportCoordToDrawerCoord(te);
                    return w && ($ = $.times(w)), y && ($ = $.plus(y)), $;
                  });
                });
                this._clipWithPolygons(N, p);
              } catch (U) {
                e.console.error(U);
              }
              C = !0;
            }
            if (l._hasOpaqueTile = !1, l.placeholderFillStyle && l._hasOpaqueTile === !1) {
              let U = this.viewportToDrawerRectangle(l.getBoundsNoRotate(!0));
              w && (U = U.times(w)), y && (U = U.translate(y));
              let Y = null;
              typeof l.placeholderFillStyle == "function" ? Y = l.placeholderFillStyle(l, this.context) : Y = l.placeholderFillStyle, this._drawRectangle(U, Y, p);
            }
            var V = s(l.subPixelRoundingForTransparency), j = !1;
            if (V === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS)
              j = !0;
            else if (V === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
              var Q = this.viewer && this.viewer.isAnimating();
              j = !Q;
            }
            for (var Z = 0; Z < h.length; Z++)
              d = h[Z], this._drawTile(
                d,
                l,
                p,
                w,
                y,
                j,
                l.source
              ), this.viewer && this.viewer.raiseEvent("tile-drawn", {
                tiledImage: l,
                tile: d
              });
            C && this._restoreContext(p), w || (l.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(p), this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(p)), p && (w && this._setRotations(l), this.blendSketch({
              opacity: l.opacity,
              scale: w,
              translate: y,
              compositeOperation: l.compositeOperation,
              bounds: P
            }), w && (l.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(!1), this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(!1))), this._drawDebugInfo(l, h), this._raiseTiledImageDrawnEvent(l, h);
          }
        }
        /**
         * Draws special debug information for a TiledImage if in debug mode.
         * @private
         * @param {OpenSeadragon.Tile[]} lastDrawn - An unordered list of Tiles drawn last frame.
         */
        _drawDebugInfo(l, h) {
          if (l.debugMode)
            for (var d = h.length - 1; d >= 0; d--) {
              var p = h[d];
              try {
                this._drawDebugInfoOnTile(p, h.length, d, l);
              } catch (w) {
                e.console.error(w);
              }
            }
        }
        /**
         * This function will create multiple polygon paths on the drawing context by provided polygons,
         * then clip the context to the paths.
         * @private
         * @param {OpenSeadragon.Point[][]} polygons - an array of polygons. A polygon is an array of OpenSeadragon.Point
         * @param {Boolean} useSketch - Whether to use the sketch canvas or not.
         */
        _clipWithPolygons(l, h) {
          var d = this._getContext(h);
          d.beginPath();
          for (const p of l)
            for (const [w, y] of p.entries())
              d[w === 0 ? "moveTo" : "lineTo"](y.x, y.y);
          d.clip();
        }
        /**
         * Draws the given tile.
         * @private
         * @param {OpenSeadragon.Tile} tile - The tile to draw.
         * @param {OpenSeadragon.TiledImage} tiledImage - The tiled image being drawn.
         * @param {Boolean} useSketch - Whether to use the sketch canvas or not.
         * where <code>rendered</code> is the context with the pre-drawn image.
         * @param {Float} [scale=1] - Apply a scale to tile position and size. Defaults to 1.
         * @param {OpenSeadragon.Point} [translate] A translation vector to offset tile position
         * @param {Boolean} [shouldRoundPositionAndSize] - Tells whether to round
         * position and size of tiles supporting alpha channel in non-transparency
         * context.
         * @param {OpenSeadragon.TileSource} source - The source specification of the tile.
         */
        _drawTile(l, h, d, p, w, y, _) {
          e.console.assert(l, "[Drawer._drawTile] tile is required"), e.console.assert(h, "[Drawer._drawTile] drawingHandler is required");
          var E = this._getContext(d);
          p = p || 1, this._drawTileToCanvas(l, E, h, p, w, y, _);
        }
        /**
         * Renders the tile in a canvas-based context.
         * @private
         * @function
         * @param {OpenSeadragon.Tile} tile - the tile to draw to the canvas
         * @param {Canvas} context
         * @param {OpenSeadragon.TiledImage} tiledImage - Method for firing the drawing event.
         * drawingHandler({context, tile, rendered})
         * where <code>rendered</code> is the context with the pre-drawn image.
         * @param {Number} [scale=1] - Apply a scale to position and size
         * @param {OpenSeadragon.Point} [translate] - A translation vector
         * @param {Boolean} [shouldRoundPositionAndSize] - Tells whether to round
         * position and size of tiles supporting alpha channel in non-transparency
         * context.
         * @param {OpenSeadragon.TileSource} source - The source specification of the tile.
         */
        _drawTileToCanvas(l, h, d, p, w, y, _) {
          var E = l.position.times(e.pixelDensityRatio), P = l.size.times(e.pixelDensityRatio), C;
          if (!l.context2D && !l.cacheImageRecord) {
            e.console.warn(
              "[Drawer._drawTileToCanvas] attempting to draw tile %s when it's not cached",
              l.toString()
            );
            return;
          }
          if (C = l.getCanvasContext(), !l.loaded || !C) {
            e.console.warn(
              "Attempting to draw tile %s when it's not yet loaded.",
              l.toString()
            );
            return;
          }
          h.save(), typeof p == "number" && p !== 1 && (E = E.times(p), P = P.times(p)), w instanceof e.Point && (E = E.plus(w)), h.globalAlpha === 1 && l.hasTransparency && (y && (E.x = Math.round(E.x), E.y = Math.round(E.y), P.x = Math.round(P.x), P.y = Math.round(P.y)), h.clearRect(
            E.x,
            E.y,
            P.x,
            P.y
          )), this._raiseTileDrawingEvent(d, h, l, C);
          var M, F;
          l.sourceBounds ? (M = Math.min(l.sourceBounds.width, C.canvas.width), F = Math.min(l.sourceBounds.height, C.canvas.height)) : (M = C.canvas.width, F = C.canvas.height), h.translate(E.x + P.x / 2, 0), l.flipped && h.scale(-1, 1), h.drawImage(
            C.canvas,
            0,
            0,
            M,
            F,
            -P.x / 2,
            E.y,
            P.x,
            P.y
          ), h.restore();
        }
        /**
         * Get the context of the main or sketch canvas
         * @private
         * @param {Boolean} useSketch
         * @returns {CanvasRenderingContext2D}
         */
        _getContext(l) {
          var h = this.context;
          if (l) {
            if (this.sketchCanvas === null) {
              this.sketchCanvas = document.createElement("canvas");
              var d = this._calculateSketchCanvasSize();
              if (this.sketchCanvas.width = d.x, this.sketchCanvas.height = d.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
                var p = this;
                this.viewer.addHandler("rotate", function w() {
                  if (p.viewport.getRotation() !== 0) {
                    p.viewer.removeHandler("rotate", w);
                    var y = p._calculateSketchCanvasSize();
                    p.sketchCanvas.width = y.x, p.sketchCanvas.height = y.y;
                  }
                });
              }
              this._updateImageSmoothingEnabled(this.sketchContext);
            }
            h = this.sketchContext;
          }
          return h;
        }
        /**
         * Save the context of the main or sketch canvas
         * @private
         * @param {Boolean} useSketch
         */
        _saveContext(l) {
          this._getContext(l).save();
        }
        /**
         * Restore the context of the main or sketch canvas
         * @private
         * @param {Boolean} useSketch
         */
        _restoreContext(l) {
          this._getContext(l).restore();
        }
        // private
        _setClip(l, h) {
          var d = this._getContext(h);
          d.beginPath(), d.rect(l.x, l.y, l.width, l.height), d.clip();
        }
        // private
        // used to draw a placeholder rectangle
        _drawRectangle(l, h, d) {
          var p = this._getContext(d);
          p.save(), p.fillStyle = h, p.fillRect(l.x, l.y, l.width, l.height), p.restore();
        }
        /**
         * Blends the sketch canvas in the main canvas.
         * @param {Object} options The options
         * @param {Float} options.opacity The opacity of the blending.
         * @param {Float} [options.scale=1] The scale at which tiles were drawn on
         * the sketch. Default is 1.
         * Use scale to draw at a lower scale and then enlarge onto the main canvas.
         * @param {OpenSeadragon.Point} [options.translate] A translation vector
         * that was used to draw the tiles
         * @param {String} [options.compositeOperation] - How the image is
         * composited onto other images; see compositeOperation in
         * {@link OpenSeadragon.Options} for possible values.
         * @param {OpenSeadragon.Rect} [options.bounds] The part of the sketch
         * canvas to blend in the main canvas. If specified, options.scale and
         * options.translate get ignored.
         */
        blendSketch(l, h, d, p) {
          var w = l;
          e.isPlainObject(w) || (w = {
            opacity: l,
            scale: h,
            translate: d,
            compositeOperation: p
          }), l = w.opacity, p = w.compositeOperation;
          var y = w.bounds;
          if (this.context.save(), this.context.globalAlpha = l, p && (this.context.globalCompositeOperation = p), y)
            y.x < 0 && (y.width += y.x, y.x = 0), y.x + y.width > this.canvas.width && (y.width = this.canvas.width - y.x), y.y < 0 && (y.height += y.y, y.y = 0), y.y + y.height > this.canvas.height && (y.height = this.canvas.height - y.y), this.context.drawImage(
              this.sketchCanvas,
              y.x,
              y.y,
              y.width,
              y.height,
              y.x,
              y.y,
              y.width,
              y.height
            );
          else {
            h = w.scale || 1, d = w.translate;
            var _ = d instanceof e.Point ? d : new e.Point(0, 0), E = 0, P = 0;
            if (d) {
              var C = this.sketchCanvas.width - this.canvas.width, M = this.sketchCanvas.height - this.canvas.height;
              E = Math.round(C / 2), P = Math.round(M / 2);
            }
            this.context.drawImage(
              this.sketchCanvas,
              _.x - E * h,
              _.y - P * h,
              (this.canvas.width + 2 * E) * h,
              (this.canvas.height + 2 * P) * h,
              -E,
              -P,
              this.canvas.width + 2 * E,
              this.canvas.height + 2 * P
            );
          }
          this.context.restore();
        }
        // private
        _drawDebugInfoOnTile(l, h, d, p) {
          var w = this.viewer.world.getIndexOfItem(p) % this.debugGridColor.length, y = this.context;
          y.save(), y.lineWidth = 2 * e.pixelDensityRatio, y.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", y.strokeStyle = this.debugGridColor[w], y.fillStyle = this.debugGridColor[w], this._setRotations(p), this._viewportFlipped && this._flip({ point: l.position.plus(l.size.divide(2)) }), y.strokeRect(
            l.position.x * e.pixelDensityRatio,
            l.position.y * e.pixelDensityRatio,
            l.size.x * e.pixelDensityRatio,
            l.size.y * e.pixelDensityRatio
          );
          var _ = (l.position.x + l.size.x / 2) * e.pixelDensityRatio, E = (l.position.y + l.size.y / 2) * e.pixelDensityRatio;
          y.translate(_, E);
          const P = this.viewport.getRotation(!0);
          y.rotate(Math.PI / 180 * -P), y.translate(-_, -E), l.x === 0 && l.y === 0 && (y.fillText(
            "Zoom: " + this.viewport.getZoom(),
            l.position.x * e.pixelDensityRatio,
            (l.position.y - 30) * e.pixelDensityRatio
          ), y.fillText(
            "Pan: " + this.viewport.getBounds().toString(),
            l.position.x * e.pixelDensityRatio,
            (l.position.y - 20) * e.pixelDensityRatio
          )), y.fillText(
            "Level: " + l.level,
            (l.position.x + 10) * e.pixelDensityRatio,
            (l.position.y + 20) * e.pixelDensityRatio
          ), y.fillText(
            "Column: " + l.x,
            (l.position.x + 10) * e.pixelDensityRatio,
            (l.position.y + 30) * e.pixelDensityRatio
          ), y.fillText(
            "Row: " + l.y,
            (l.position.x + 10) * e.pixelDensityRatio,
            (l.position.y + 40) * e.pixelDensityRatio
          ), y.fillText(
            "Order: " + d + " of " + h,
            (l.position.x + 10) * e.pixelDensityRatio,
            (l.position.y + 50) * e.pixelDensityRatio
          ), y.fillText(
            "Size: " + l.size.toString(),
            (l.position.x + 10) * e.pixelDensityRatio,
            (l.position.y + 60) * e.pixelDensityRatio
          ), y.fillText(
            "Position: " + l.position.toString(),
            (l.position.x + 10) * e.pixelDensityRatio,
            (l.position.y + 70) * e.pixelDensityRatio
          ), this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), p.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), y.restore();
        }
        // private
        _updateImageSmoothingEnabled(l) {
          l.msImageSmoothingEnabled = this._imageSmoothingEnabled, l.imageSmoothingEnabled = this._imageSmoothingEnabled;
        }
        /**
         * Get the canvas size
         * @private
         * @param {Boolean} sketch If set to true return the size of the sketch canvas
         * @returns {OpenSeadragon.Point} The size of the canvas
         */
        _getCanvasSize(l) {
          var h = this._getContext(l).canvas;
          return new e.Point(h.width, h.height);
        }
        /**
         * Get the canvas center
         * @private
         * @param {Boolean} sketch If set to true return the center point of the sketch canvas
         * @returns {OpenSeadragon.Point} The center point of the canvas
         */
        _getCanvasCenter() {
          return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
        }
        /**
         * Set rotations for viewport & tiledImage
         * @private
         * @param {OpenSeadragon.TiledImage} tiledImage
         * @param {Boolean} [useSketch=false]
         */
        _setRotations(l, h = !1) {
          var d = !1;
          this.viewport.getRotation(!0) % 360 !== 0 && (this._offsetForRotation({
            degrees: this.viewport.getRotation(!0),
            useSketch: h,
            saveContext: d
          }), d = !1), l.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
            degrees: l.getRotation(!0),
            point: this.viewport.pixelFromPointNoRotate(
              l._getRotationPoint(!0),
              !0
            ),
            useSketch: h,
            saveContext: d
          });
        }
        // private
        _offsetForRotation(l) {
          var h = l.point ? l.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), d = this._getContext(l.useSketch);
          d.save(), d.translate(h.x, h.y), d.rotate(Math.PI / 180 * l.degrees), d.translate(-h.x, -h.y);
        }
        // private
        _flip(l) {
          l = l || {};
          var h = l.point ? l.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), d = this._getContext(l.useSketch);
          d.translate(h.x, 0), d.scale(-1, 1), d.translate(-h.x, 0);
        }
        // private
        _restoreRotationChanges(l) {
          var h = this._getContext(l);
          h.restore();
        }
        // private
        _calculateCanvasSize() {
          var l = e.pixelDensityRatio, h = this.viewport.getContainerSize();
          return {
            // canvas width and height are integers
            x: Math.round(h.x * l),
            y: Math.round(h.y * l)
          };
        }
        // private
        _calculateSketchCanvasSize() {
          var l = this._calculateCanvasSize();
          if (this.viewport.getRotation() === 0)
            return l;
          var h = Math.ceil(Math.sqrt(
            l.x * l.x + l.y * l.y
          ));
          return {
            x: h,
            y: h
          };
        }
      }
      e.CanvasDrawer = r;
      var i = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
      function n(a) {
        return a !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && a !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && a !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
      }
      function o(a) {
        return n(a) ? i : a;
      }
      function s(a) {
        if (typeof a == "number")
          return o(a);
        if (!a || !e.Browser)
          return i;
        var l = a[e.Browser.vendor];
        return n(l) && (l = a["*"]), o(l);
      }
    }(g), function(e) {
      const t = e;
      t.WebGLDrawer = class extends t.DrawerBase {
        constructor(i) {
          super(i), this._destroyed = !1, this._TextureMap = /* @__PURE__ */ new Map(), this._TileMap = /* @__PURE__ */ new Map(), this._gl = null, this._firstPass = null, this._secondPass = null, this._glFrameBuffer = null, this._renderToTexture = null, this._glFramebufferToCanvasTransform = null, this._outputCanvas = null, this._outputContext = null, this._clippingCanvas = null, this._clippingContext = null, this._renderingCanvas = null, this._backupCanvasDrawer = null, this._imageSmoothingEnabled = !0, this._boundToTileReady = (n) => this._tileReadyHandler(n), this._boundToImageUnloaded = (n) => this._imageUnloadedHandler(n), this.viewer.addHandler("tile-ready", this._boundToTileReady), this.viewer.addHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.rejectEventHandler("tile-drawn", "The WebGLDrawer does not raise the tile-drawn event"), this.viewer.rejectEventHandler("tile-drawing", "The WebGLDrawer does not raise the tile-drawing event"), this._setupCanvases(), this._setupRenderer(), this.context = this._outputContext;
        }
        // Public API required by all Drawer implementations
        /**
        * Clean up the renderer, removing all resources
        */
        destroy() {
          if (this._destroyed)
            return;
          let i = this._gl;
          var n = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS);
          for (let s = 0; s < n; ++s)
            i.activeTexture(i.TEXTURE0 + s), i.bindTexture(i.TEXTURE_2D, null), i.bindTexture(i.TEXTURE_CUBE_MAP, null);
          i.bindBuffer(i.ARRAY_BUFFER, null), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null), i.bindRenderbuffer(i.RENDERBUFFER, null), i.bindFramebuffer(i.FRAMEBUFFER, null), this._unloadTextures(), i.deleteBuffer(this._secondPass.bufferOutputPosition), i.deleteFramebuffer(this._glFrameBuffer), this._renderingCanvas.width = this._renderingCanvas.height = 1, this._clippingCanvas.width = this._clippingCanvas.height = 1, this._outputCanvas.width = this._outputCanvas.height = 1, this._renderingCanvas = null, this._clippingCanvas = this._clippingContext = null, this._outputCanvas = this._outputContext = null;
          let o = i.getExtension("WEBGL_lose_context");
          o && o.loseContext(), this.viewer.removeHandler("tile-ready", this._boundToTileReady), this.viewer.removeHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.removeHandler("resize", this._resizeHandler), this._gl = null, this._backupCanvasDrawer && (this._backupCanvasDrawer.destroy(), this._backupCanvasDrawer = null), this.container.removeChild(this.canvas), this.viewer.drawer === this && (this.viewer.drawer = null), this._destroyed = !0;
        }
        // Public API required by all Drawer implementations
        /**
        *
        * @returns {Boolean} true
        */
        canRotate() {
          return !0;
        }
        // Public API required by all Drawer implementations
        /**
        * @returns {Boolean} true if canvas and webgl are supported
        */
        static isSupported() {
          let i = document.createElement("canvas"), n = e.isFunction(i.getContext) && i.getContext("webgl"), o = n && n.getExtension("WEBGL_lose_context");
          return o && o.loseContext(), !!n;
        }
        /**
         *
         * @returns 'webgl'
         */
        getType() {
          return "webgl";
        }
        /**
         * @param {TiledImage} tiledImage the tiled image that is calling the function
         * @returns {Boolean} Whether this drawer requires enforcing minimum tile overlap to avoid showing seams.
         * @private
         */
        minimumOverlapRequired(i) {
          return i.isTainted();
        }
        /**
        * create the HTML element (canvas in this case) that the image will be drawn into
        * @private
        * @returns {Element} the canvas to draw into
        */
        _createDrawingElement() {
          let i = e.makeNeutralElement("canvas"), n = this._calculateCanvasSize();
          return i.width = n.x, i.height = n.y, i;
        }
        /**
         * Get the backup renderer (CanvasDrawer) to use if data cannot be used by webgl
         * Lazy loaded
         * @private
         * @returns {CanvasDrawer}
         */
        _getBackupCanvasDrawer() {
          return this._backupCanvasDrawer || (this._backupCanvasDrawer = this.viewer.requestDrawer("canvas", { mainDrawer: !1 }), this._backupCanvasDrawer.canvas.style.setProperty("visibility", "hidden")), this._backupCanvasDrawer;
        }
        /**
        *
        * @param {Array} tiledImages Array of TiledImage objects to draw
        */
        draw(i) {
          let n = this._gl;
          const o = this.viewport.getBoundsNoRotateWithMargins(!0);
          let s = {
            bounds: o,
            center: new t.Point(o.x + o.width / 2, o.y + o.height / 2),
            rotation: this.viewport.getRotation(!0) * Math.PI / 180
          }, a = this.viewport.flipped ? -1 : 1, l = e.Mat3.makeTranslation(-s.center.x, -s.center.y), h = e.Mat3.makeScaling(2 / s.bounds.width * a, -2 / s.bounds.height), d = e.Mat3.makeRotation(-s.rotation), p = h.multiply(d).multiply(l);
          n.bindFramebuffer(n.FRAMEBUFFER, null), n.clear(n.COLOR_BUFFER_BIT), this._outputContext.clearRect(0, 0, this._outputCanvas.width, this._outputCanvas.height);
          let w = !1;
          i.forEach((y, _) => {
            if (y.isTainted()) {
              w && (this._outputContext.drawImage(this._renderingCanvas, 0, 0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.clear(n.COLOR_BUFFER_BIT), w = !1);
              const E = this._getBackupCanvasDrawer();
              E.draw([y]), this._outputContext.drawImage(E.canvas, 0, 0);
            } else {
              let E = y.getTilesToDraw();
              if (y.placeholderFillStyle && y._hasOpaqueTile === !1 && this._drawPlaceholder(y), E.length === 0 || y.getOpacity() === 0)
                return;
              let P = E[0], C = y.compositeOperation || this.viewer.compositeOperation || y._clip || y._croppingPolygons || y.debugMode, M = C || y.opacity < 1 || P.hasTransparency;
              C && (w && this._outputContext.drawImage(this._renderingCanvas, 0, 0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.clear(n.COLOR_BUFFER_BIT)), n.useProgram(this._firstPass.shaderProgram), M ? (n.bindFramebuffer(n.FRAMEBUFFER, this._glFrameBuffer), n.clear(n.COLOR_BUFFER_BIT)) : n.bindFramebuffer(n.FRAMEBUFFER, null);
              let F = p, L = y.getRotation(!0);
              if (L % 360 !== 0) {
                let U = e.Mat3.makeRotation(-L * Math.PI / 180), Y = y.getBoundsNoRotate(!0).getCenter(), te = e.Mat3.makeTranslation(Y.x, Y.y), $ = e.Mat3.makeTranslation(-Y.x, -Y.y), ee = te.multiply(U).multiply($);
                F = p.multiply(ee);
              }
              let N = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
              if (N <= 0)
                throw new Error(`WegGL error: bad value for gl parameter MAX_TEXTURE_IMAGE_UNITS (${N}). This could happen
                        if too many contexts have been created and not released, or there is another problem with the graphics card.`);
              let V = new Float32Array(N * 12), j = new Array(N), Q = new Array(N), Z = new Array(N);
              for (let U = 0; U < E.length; U++) {
                let Y = E[U].tile, te = U % N, $ = te + 1, ee = Y.getCanvasContext(), re = ee ? this._TextureMap.get(ee.canvas) : null;
                if (re || (this._tileReadyHandler({ tile: Y, tiledImage: y }), re = ee ? this._TextureMap.get(ee.canvas) : null), re && this._getTileData(Y, y, re, F, te, V, j, Q, Z), $ === N || U === E.length - 1) {
                  for (let ie = 0; ie <= $; ie++)
                    n.activeTexture(n.TEXTURE0 + ie), n.bindTexture(n.TEXTURE_2D, j[ie]);
                  n.bindBuffer(n.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), n.bufferData(n.ARRAY_BUFFER, V, n.DYNAMIC_DRAW), Q.forEach((ie, oe) => {
                    n.uniformMatrix3fv(this._firstPass.uTransformMatrices[oe], !1, ie);
                  }), n.uniform1fv(this._firstPass.uOpacities, new Float32Array(Z)), n.bindBuffer(n.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), n.vertexAttribPointer(this._firstPass.aOutputPosition, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), n.vertexAttribPointer(this._firstPass.aTexturePosition, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this._firstPass.bufferIndex), n.vertexAttribPointer(this._firstPass.aIndex, 1, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLES, 0, 6 * $);
                }
              }
              M && (n.useProgram(this._secondPass.shaderProgram), n.bindFramebuffer(n.FRAMEBUFFER, null), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, this._renderToTexture), this._gl.uniform1f(this._secondPass.uOpacityMultiplier, y.opacity), n.bindBuffer(n.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), n.vertexAttribPointer(this._secondPass.aTexturePosition, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), n.vertexAttribPointer(this._secondPass.aOutputPosition, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLES, 0, 6)), w = !0, C && (this._applyContext2dPipeline(y, E, _), w = !1, n.bindFramebuffer(n.FRAMEBUFFER, null), n.clear(n.COLOR_BUFFER_BIT)), _ === 0 && this._raiseTiledImageDrawnEvent(y, E.map((U) => U.tile));
            }
          }), w && this._outputContext.drawImage(this._renderingCanvas, 0, 0);
        }
        // Public API required by all Drawer implementations
        /**
        * Sets whether image smoothing is enabled or disabled
        * @param {Boolean} enabled If true, uses gl.LINEAR as the TEXTURE_MIN_FILTER and TEXTURE_MAX_FILTER, otherwise gl.NEAREST.
        */
        setImageSmoothingEnabled(i) {
          this._imageSmoothingEnabled !== i && (this._imageSmoothingEnabled = i, this._unloadTextures(), this.viewer.world.draw());
        }
        /**
        * Draw a rect onto the output canvas for debugging purposes
        * @param {OpenSeadragon.Rect} rect
        */
        drawDebuggingRect(i) {
          let n = this._outputContext;
          n.save(), n.lineWidth = 2 * e.pixelDensityRatio, n.strokeStyle = this.debugGridColor[0], n.fillStyle = this.debugGridColor[0], n.strokeRect(
            i.x * e.pixelDensityRatio,
            i.y * e.pixelDensityRatio,
            i.width * e.pixelDensityRatio,
            i.height * e.pixelDensityRatio
          ), n.restore();
        }
        // private
        _getTextureDataFromTile(i) {
          return i.getCanvasContext().canvas;
        }
        /**
        * Draw data from the rendering canvas onto the output canvas, with clipping,
        * cropping and/or debug info as requested.
        * @private
        * @param {OpenSeadragon.TiledImage} tiledImage - the tiledImage to draw
        * @param {Array} tilesToDraw - array of objects containing tiles that were drawn
        */
        _applyContext2dPipeline(i, n, o) {
          if (this._outputContext.save(), this._outputContext.globalCompositeOperation = o === 0 ? null : i.compositeOperation || this.viewer.compositeOperation, i._croppingPolygons || i._clip ? (this._renderToClippingCanvas(i), this._outputContext.drawImage(this._clippingCanvas, 0, 0)) : this._outputContext.drawImage(this._renderingCanvas, 0, 0), this._outputContext.restore(), i.debugMode) {
            const s = this.viewer.viewport.getFlip();
            s && this._flip(), this._drawDebugInfo(n, i, s), s && this._flip();
          }
        }
        // private
        _getTileData(i, n, o, s, a, l, h, d, p) {
          let w = o.texture, y = o.position;
          l.set(y, a * 12);
          let _ = this._calculateOverlapFraction(i, n), E = i.positionedBounds.width * _.x, P = i.positionedBounds.height * _.y, C = i.positionedBounds.x + (i.x === 0 ? 0 : E), M = i.positionedBounds.y + (i.y === 0 ? 0 : P), F = i.positionedBounds.x + i.positionedBounds.width - (i.isRightMost ? 0 : E), L = i.positionedBounds.y + i.positionedBounds.height - (i.isBottomMost ? 0 : P), N = F - C, V = L - M, j = new e.Mat3([
            N,
            0,
            0,
            0,
            V,
            0,
            C,
            M,
            1
          ]);
          if (i.flipped) {
            let Z = e.Mat3.makeTranslation(0.5, 0), U = e.Mat3.makeTranslation(-0.5, 0), Y = Z.multiply(e.Mat3.makeScaling(-1, 1)).multiply(U);
            j = j.multiply(Y);
          }
          let Q = s.multiply(j);
          p[a] = i.opacity, h[a] = w, d[a] = Q.values;
        }
        // private
        _textureFilter() {
          return this._imageSmoothingEnabled ? this._gl.LINEAR : this._gl.NEAREST;
        }
        // private
        _setupRenderer() {
          let i = this._gl;
          i || e.console.error("_setupCanvases must be called before _setupRenderer"), this._unitQuad = this._makeQuadVertexBuffer(0, 1, 0, 1), this._makeFirstPassShaderProgram(), this._makeSecondPassShaderProgram(), this._renderToTexture = i.createTexture(), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this._renderToTexture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, this._renderingCanvas.width, this._renderingCanvas.height, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, this._textureFilter()), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), this._glFrameBuffer = i.createFramebuffer(), i.bindFramebuffer(i.FRAMEBUFFER, this._glFrameBuffer), i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.COLOR_ATTACHMENT0,
            // attach texture as COLOR_ATTACHMENT0
            i.TEXTURE_2D,
            // attach a 2D texture
            this._renderToTexture,
            // the texture to attach
            0
          ), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA);
        }
        //private
        _makeFirstPassShaderProgram() {
          let i = this._glNumTextures = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), n = () => [...Array(i).keys()].map((w) => `uniform mat3 u_matrix_${w};`).join(`
`), o = () => [...Array(i).keys()].map((w) => `${w > 0 ? "else " : ""}if(int(a_index) == ${w}) { transform_matrix = u_matrix_${w}; }`).join(`
`);
          const s = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;
            attribute float a_index;

            ${n()} // create a uniform mat3 for each potential tile to draw

            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {

                mat3 transform_matrix; // value will be set by the if/elses in makeConditional()

                ${o()}

                gl_Position = vec4(transform_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
                v_image_index = a_index;
            }
            `, a = `
            precision mediump float;

            // our textures
            uniform sampler2D u_images[${i}];
            // our opacities
            uniform float u_opacities[${i}];

            // the varyings passed in from the vertex shader.
            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {
                // can't index directly with a variable, need to use a loop iterator hack
                for(int i = 0; i < ${i}; ++i){
                    if(i == int(v_image_index)){
                        gl_FragColor = texture2D(u_images[i], v_texture_position) * u_opacities[i];
                    }
                }
            }
            `;
          let l = this._gl, h = this.constructor.initShaderProgram(l, s, a);
          l.useProgram(h), this._firstPass = {
            shaderProgram: h,
            aOutputPosition: l.getAttribLocation(h, "a_output_position"),
            aTexturePosition: l.getAttribLocation(h, "a_texture_position"),
            aIndex: l.getAttribLocation(h, "a_index"),
            uTransformMatrices: [...Array(this._glNumTextures).keys()].map((w) => l.getUniformLocation(h, `u_matrix_${w}`)),
            uImages: l.getUniformLocation(h, "u_images"),
            uOpacities: l.getUniformLocation(h, "u_opacities"),
            bufferOutputPosition: l.createBuffer(),
            bufferTexturePosition: l.createBuffer(),
            bufferIndex: l.createBuffer()
          }, l.uniform1iv(this._firstPass.uImages, [...Array(i).keys()]);
          let d = new Float32Array(i * 12);
          for (let w = 0; w < i; ++w)
            d.set(Float32Array.from(this._unitQuad), w * 12);
          l.bindBuffer(l.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), l.bufferData(l.ARRAY_BUFFER, d, l.STATIC_DRAW), l.enableVertexAttribArray(this._firstPass.aOutputPosition), l.bindBuffer(l.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), l.enableVertexAttribArray(this._firstPass.aTexturePosition), l.bindBuffer(l.ARRAY_BUFFER, this._firstPass.bufferIndex);
          let p = [...Array(this._glNumTextures).keys()].map((w) => Array(6).fill(w)).flat();
          l.bufferData(l.ARRAY_BUFFER, new Float32Array(p), l.STATIC_DRAW), l.enableVertexAttribArray(this._firstPass.aIndex);
        }
        // private
        _makeSecondPassShaderProgram() {
          const i = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;

            uniform mat3 u_matrix;

            varying vec2 v_texture_position;

            void main() {
                gl_Position = vec4(u_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
            }
            `, n = `
            precision mediump float;

            // our texture
            uniform sampler2D u_image;

            // the texCoords passed in from the vertex shader.
            varying vec2 v_texture_position;

            // the opacity multiplier for the image
            uniform float u_opacity_multiplier;

            void main() {
                gl_FragColor = texture2D(u_image, v_texture_position);
                gl_FragColor *= u_opacity_multiplier;
            }
            `;
          let o = this._gl, s = this.constructor.initShaderProgram(o, i, n);
          o.useProgram(s), this._secondPass = {
            shaderProgram: s,
            aOutputPosition: o.getAttribLocation(s, "a_output_position"),
            aTexturePosition: o.getAttribLocation(s, "a_texture_position"),
            uMatrix: o.getUniformLocation(s, "u_matrix"),
            uImage: o.getUniformLocation(s, "u_image"),
            uOpacityMultiplier: o.getUniformLocation(s, "u_opacity_multiplier"),
            bufferOutputPosition: o.createBuffer(),
            bufferTexturePosition: o.createBuffer()
          }, o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), o.bufferData(o.ARRAY_BUFFER, this._unitQuad, o.STATIC_DRAW), o.enableVertexAttribArray(this._secondPass.aOutputPosition), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), o.bufferData(o.ARRAY_BUFFER, this._unitQuad, o.DYNAMIC_DRAW), o.enableVertexAttribArray(this._secondPass.aTexturePosition);
          let a = e.Mat3.makeScaling(2, 2).multiply(e.Mat3.makeTranslation(-0.5, -0.5));
          o.uniformMatrix3fv(this._secondPass.uMatrix, !1, a.values);
        }
        // private
        _resizeRenderer() {
          let i = this._gl, n = this._renderingCanvas.width, o = this._renderingCanvas.height;
          i.viewport(0, 0, n, o), i.deleteTexture(this._renderToTexture), this._renderToTexture = i.createTexture(), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this._renderToTexture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, n, o, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, this._textureFilter()), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.bindFramebuffer(i.FRAMEBUFFER, this._glFrameBuffer), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, this._renderToTexture, 0);
        }
        // private
        _setupCanvases() {
          let i = this;
          this._outputCanvas = this.canvas, this._outputContext = this._outputCanvas.getContext("2d"), this._renderingCanvas = document.createElement("canvas"), this._clippingCanvas = document.createElement("canvas"), this._clippingContext = this._clippingCanvas.getContext("2d"), this._renderingCanvas.width = this._clippingCanvas.width = this._outputCanvas.width, this._renderingCanvas.height = this._clippingCanvas.height = this._outputCanvas.height, this._gl = this._renderingCanvas.getContext("webgl"), this._resizeHandler = function() {
            i._outputCanvas !== i.viewer.drawer.canvas && (i._outputCanvas.style.width = i.viewer.drawer.canvas.clientWidth + "px", i._outputCanvas.style.height = i.viewer.drawer.canvas.clientHeight + "px");
            let n = i._calculateCanvasSize();
            (i._outputCanvas.width !== n.x || i._outputCanvas.height !== n.y) && (i._outputCanvas.width = n.x, i._outputCanvas.height = n.y), i._renderingCanvas.style.width = i._outputCanvas.clientWidth + "px", i._renderingCanvas.style.height = i._outputCanvas.clientHeight + "px", i._renderingCanvas.width = i._clippingCanvas.width = i._outputCanvas.width, i._renderingCanvas.height = i._clippingCanvas.height = i._outputCanvas.height, i._resizeRenderer();
          }, this.viewer.addHandler("resize", this._resizeHandler);
        }
        // private
        _makeQuadVertexBuffer(i, n, o, s) {
          return new Float32Array([
            i,
            s,
            n,
            s,
            i,
            o,
            i,
            o,
            n,
            s,
            n,
            o
          ]);
        }
        // private
        _tileReadyHandler(i) {
          let n = i.tile, o = i.tiledImage;
          if (o.isTainted())
            return;
          let s = n.getCanvasContext(), a = s && s.canvas;
          if (!a || e.isCanvasTainted(a)) {
            o.isTainted() || (o.setTainted(!0), e.console.warn("WebGL cannot be used to draw this TiledImage because it has tainted data. Does crossOriginPolicy need to be set?"), this._raiseDrawerErrorEvent(o, "Tainted data cannot be used by the WebGLDrawer. Falling back to CanvasDrawer for this TiledImage."));
            return;
          }
          if (!this._TextureMap.get(a)) {
            let h = this._gl, d = h.createTexture(), p, w = o.source.tileOverlap, y, _;
            if (n.sourceBounds ? (y = Math.min(n.sourceBounds.width, a.width) / a.width, _ = Math.min(n.sourceBounds.height, a.height) / a.height) : (y = 1, _ = 1), w > 0) {
              let P = this._calculateOverlapFraction(n, o), C = (n.x === 0 ? 0 : P.x) * y, M = (n.y === 0 ? 0 : P.y) * _, F = (n.isRightMost ? 1 : 1 - P.x) * y, L = (n.isBottomMost ? 1 : 1 - P.y) * _;
              p = this._makeQuadVertexBuffer(C, F, M, L);
            } else y === 1 && _ === 1 ? p = this._unitQuad : p = this._makeQuadVertexBuffer(0, y, 0, _);
            let E = {
              texture: d,
              position: p
            };
            this._TextureMap.set(a, E), h.activeTexture(h.TEXTURE0), h.bindTexture(h.TEXTURE_2D, d), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this._textureFilter()), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this._textureFilter()), this._uploadImageData(s);
          }
        }
        // private
        _calculateOverlapFraction(i, n) {
          let o = n.source.tileOverlap, s = i.sourceBounds.width, a = i.sourceBounds.height, l = (i.x === 0 ? 0 : o) + (i.isRightMost ? 0 : o), h = (i.y === 0 ? 0 : o) + (i.isBottomMost ? 0 : o), d = o / (s + l), p = o / (a + h);
          return {
            x: d,
            y: p
          };
        }
        // private
        _unloadTextures() {
          Array.from(this._TextureMap.keys()).forEach((n) => {
            this._cleanupImageData(n);
          });
        }
        // private
        _uploadImageData(i) {
          let n = this._gl, o = i.canvas;
          try {
            if (!o)
              throw i;
            n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, o);
          } catch (s) {
            e.console.error("Error uploading image data to WebGL", s);
          }
        }
        // private
        _imageUnloadedHandler(i) {
          let n = i.context2D.canvas;
          this._cleanupImageData(n);
        }
        // private
        _cleanupImageData(i) {
          let n = this._TextureMap.get(i);
          this._TextureMap.delete(i), n && this._gl.deleteTexture(n.texture);
        }
        // private
        _setClip() {
        }
        // private
        _renderToClippingCanvas(i) {
          if (this._clippingContext.clearRect(0, 0, this._clippingCanvas.width, this._clippingCanvas.height), this._clippingContext.save(), this.viewer.viewport.getFlip()) {
            const n = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
            this._clippingContext.translate(n.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-n.x, 0);
          }
          if (i._clip) {
            let o = [
              { x: i._clip.x, y: i._clip.y },
              { x: i._clip.x + i._clip.width, y: i._clip.y },
              { x: i._clip.x + i._clip.width, y: i._clip.y + i._clip.height },
              { x: i._clip.x, y: i._clip.y + i._clip.height }
            ].map((s) => {
              let a = i.imageToViewportCoordinates(s.x, s.y, !0).rotate(this.viewer.viewport.getRotation(!0), this.viewer.viewport.getCenter(!0));
              return this.viewportCoordToDrawerCoord(a);
            });
            this._clippingContext.beginPath(), o.forEach((s, a) => {
              this._clippingContext[a === 0 ? "moveTo" : "lineTo"](s.x, s.y);
            }), this._clippingContext.clip(), this._setClip();
          }
          if (i._croppingPolygons) {
            let n = i._croppingPolygons.map((o) => o.map((s) => {
              let a = i.imageToViewportCoordinates(s.x, s.y, !0).rotate(this.viewer.viewport.getRotation(!0), this.viewer.viewport.getCenter(!0));
              return this.viewportCoordToDrawerCoord(a);
            }));
            this._clippingContext.beginPath(), n.forEach((o) => {
              o.forEach((s, a) => {
                this._clippingContext[a === 0 ? "moveTo" : "lineTo"](s.x, s.y);
              });
            }), this._clippingContext.clip();
          }
          if (this.viewer.viewport.getFlip()) {
            const n = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
            this._clippingContext.translate(n.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-n.x, 0);
          }
          this._clippingContext.drawImage(this._renderingCanvas, 0, 0), this._clippingContext.restore();
        }
        /**
         * Set rotations for viewport & tiledImage
         * @private
         * @param {OpenSeadragon.TiledImage} tiledImage
         */
        _setRotations(i) {
          var n = !1;
          this.viewport.getRotation(!0) % 360 !== 0 && (this._offsetForRotation({
            degrees: this.viewport.getRotation(!0),
            saveContext: n
          }), n = !1), i.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
            degrees: i.getRotation(!0),
            point: this.viewport.pixelFromPointNoRotate(
              i._getRotationPoint(!0),
              !0
            ),
            saveContext: n
          });
        }
        // private
        _offsetForRotation(i) {
          var n = i.point ? i.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), o = this._outputContext;
          o.save(), o.translate(n.x, n.y), o.rotate(Math.PI / 180 * i.degrees), o.translate(-n.x, -n.y);
        }
        // private
        _flip(i) {
          i = i || {};
          var n = i.point ? i.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), o = this._outputContext;
          o.translate(n.x, 0), o.scale(-1, 1), o.translate(-n.x, 0);
        }
        // private
        _drawDebugInfo(i, n, o) {
          for (var s = i.length - 1; s >= 0; s--) {
            var a = i[s].tile;
            try {
              this._drawDebugInfoOnTile(a, i.length, s, n, o);
            } catch (l) {
              e.console.error(l);
            }
          }
        }
        // private
        _drawDebugInfoOnTile(i, n, o, s, a) {
          var l = this.viewer.world.getIndexOfItem(s) % this.debugGridColor.length, h = this.context;
          h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", h.strokeStyle = this.debugGridColor[l], h.fillStyle = this.debugGridColor[l], this._setRotations(s), a && this._flip({ point: i.position.plus(i.size.divide(2)) }), h.strokeRect(
            i.position.x * e.pixelDensityRatio,
            i.position.y * e.pixelDensityRatio,
            i.size.x * e.pixelDensityRatio,
            i.size.y * e.pixelDensityRatio
          );
          var d = (i.position.x + i.size.x / 2) * e.pixelDensityRatio, p = (i.position.y + i.size.y / 2) * e.pixelDensityRatio;
          h.translate(d, p);
          const w = this.viewport.getRotation(!0);
          h.rotate(Math.PI / 180 * -w), h.translate(-d, -p), i.x === 0 && i.y === 0 && (h.fillText(
            "Zoom: " + this.viewport.getZoom(),
            i.position.x * e.pixelDensityRatio,
            (i.position.y - 30) * e.pixelDensityRatio
          ), h.fillText(
            "Pan: " + this.viewport.getBounds().toString(),
            i.position.x * e.pixelDensityRatio,
            (i.position.y - 20) * e.pixelDensityRatio
          )), h.fillText(
            "Level: " + i.level,
            (i.position.x + 10) * e.pixelDensityRatio,
            (i.position.y + 20) * e.pixelDensityRatio
          ), h.fillText(
            "Column: " + i.x,
            (i.position.x + 10) * e.pixelDensityRatio,
            (i.position.y + 30) * e.pixelDensityRatio
          ), h.fillText(
            "Row: " + i.y,
            (i.position.x + 10) * e.pixelDensityRatio,
            (i.position.y + 40) * e.pixelDensityRatio
          ), h.fillText(
            "Order: " + o + " of " + n,
            (i.position.x + 10) * e.pixelDensityRatio,
            (i.position.y + 50) * e.pixelDensityRatio
          ), h.fillText(
            "Size: " + i.size.toString(),
            (i.position.x + 10) * e.pixelDensityRatio,
            (i.position.y + 60) * e.pixelDensityRatio
          ), h.fillText(
            "Position: " + i.position.toString(),
            (i.position.x + 10) * e.pixelDensityRatio,
            (i.position.y + 70) * e.pixelDensityRatio
          ), this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), s.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), h.restore();
        }
        _drawPlaceholder(i) {
          const n = i.getBounds(!0), o = this.viewportToDrawerRectangle(i.getBounds(!0)), s = this._outputContext;
          let a;
          typeof i.placeholderFillStyle == "function" ? a = i.placeholderFillStyle(i, s) : a = i.placeholderFillStyle, this._offsetForRotation({ degrees: this.viewer.viewport.getRotation(!0) }), s.fillStyle = a, s.translate(o.x, o.y), s.rotate(Math.PI / 180 * n.degrees), s.translate(-o.x, -o.y), s.fillRect(o.x, o.y, o.width, o.height), this._restoreRotationChanges();
        }
        /**
         * Get the canvas center
         * @private
         * @returns {OpenSeadragon.Point} The center point of the canvas
         */
        _getCanvasCenter() {
          return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
        }
        // private
        _restoreRotationChanges() {
          var i = this._outputContext;
          i.restore();
        }
        // modified from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
        static initShaderProgram(i, n, o) {
          function s(d, p, w) {
            const y = d.createShader(p);
            return d.shaderSource(y, w), d.compileShader(y), d.getShaderParameter(y, d.COMPILE_STATUS) ? y : (e.console.error(
              `An error occurred compiling the shaders: ${d.getShaderInfoLog(y)}`
            ), d.deleteShader(y), null);
          }
          const a = s(i, i.VERTEX_SHADER, n), l = s(i, i.FRAGMENT_SHADER, o), h = i.createProgram();
          return i.attachShader(h, a), i.attachShader(h, l), i.linkProgram(h), i.getProgramParameter(h, i.LINK_STATUS) ? h : (e.console.error(
            `Unable to initialize the shader program: ${i.getProgramInfoLog(
              h
            )}`
          ), null);
        }
      };
    }(g), function(e) {
      e.Viewport = function(t) {
        var r = arguments;
        r.length && r[0] instanceof e.Point && (t = {
          containerSize: r[0],
          contentSize: r[1],
          config: r[2]
        }), t.config && (e.extend(!0, t, t.config), delete t.config), this._margins = e.extend({
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }, t.margins || {}), delete t.margins, t.initialDegrees = t.degrees, delete t.degrees, e.extend(!0, this, {
          //required settings
          containerSize: null,
          contentSize: null,
          //internal state properties
          zoomPoint: null,
          rotationPivot: null,
          viewer: null,
          //configurable options
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
        // deprecated
        get degrees() {
          return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
        },
        // deprecated
        set degrees(t) {
          e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(t);
        },
        /**
         * Updates the viewport's home bounds and constraints for the given content size.
         * @function
         * @param {OpenSeadragon.Point} contentSize - size of the content in content units
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:reset-size
         */
        resetContentSize: function(t) {
          return e.console.assert(t, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(t instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(t.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(t.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, t.y / t.x), t.x), this;
        },
        // deprecated
        setHomeBounds: function(t, r) {
          e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(t, r);
        },
        // Set the viewport's content bounds
        // @param {OpenSeadragon.Rect} bounds - the new bounds in viewport coordinates
        // without rotation
        // @param {Number} contentFactor - how many content units per viewport unit
        // @fires OpenSeadragon.Viewer.event:reset-size
        // @private
        _setContentBounds: function(t, r) {
          e.console.assert(t, "[Viewport._setContentBounds] bounds is required"), e.console.assert(t instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(t.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(t.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = t.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(
            r
          ), this._contentBounds = t.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(r), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", {
            contentSize: this._contentSizeNoRotate.clone(),
            contentFactor: r,
            homeBounds: this._contentBoundsNoRotate.clone(),
            contentBounds: this._contentBounds.clone()
          });
        },
        /**
         * Returns the home zoom in "viewport zoom" value.
         * @function
         * @returns {Number} The home zoom in "viewport zoom".
         */
        getHomeZoom: function() {
          if (this.defaultZoomLevel)
            return this.defaultZoomLevel;
          var t = this._contentAspectRatio / this.getAspectRatio(), r;
          return this.homeFillsViewer ? r = t >= 1 ? t : 1 : r = t >= 1 ? 1 : t, r / this._contentBounds.width;
        },
        /**
         * Returns the home bounds in viewport coordinates.
         * @function
         * @returns {OpenSeadragon.Rect} The home bounds in vewport coordinates.
         */
        getHomeBounds: function() {
          return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
        },
        /**
         * Returns the home bounds in viewport coordinates.
         * This method ignores the viewport rotation. Use
         * {@link OpenSeadragon.Viewport#getHomeBounds} to take it into account.
         * @function
         * @returns {OpenSeadragon.Rect} The home bounds in vewport coordinates.
         */
        getHomeBoundsNoRotate: function() {
          var t = this._contentBounds.getCenter(), r = 1 / this.getHomeZoom(), i = r / this.getAspectRatio();
          return new e.Rect(
            t.x - r / 2,
            t.y - i / 2,
            r,
            i
          );
        },
        /**
         * @function
         * @param {Boolean} immediately
         * @fires OpenSeadragon.Viewer.event:home
         */
        goHome: function(t) {
          return this.viewer && this.viewer.raiseEvent("home", {
            immediately: t
          }), this.fitBounds(this.getHomeBounds(), t);
        },
        /**
         * @function
         */
        getMinZoom: function() {
          var t = this.getHomeZoom(), r = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * t;
          return r;
        },
        /**
         * @function
         */
        getMaxZoom: function() {
          var t = this.maxZoomLevel;
          return t || (t = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, t /= this._contentBounds.width), Math.max(t, this.getHomeZoom());
        },
        /**
         * @function
         */
        getAspectRatio: function() {
          return this._containerInnerSize.x / this._containerInnerSize.y;
        },
        /**
         * @function
         * @returns {OpenSeadragon.Point} The size of the container, in screen coordinates.
         */
        getContainerSize: function() {
          return new e.Point(
            this.containerSize.x,
            this.containerSize.y
          );
        },
        /**
         * The margins push the "home" region in from the sides by the specified amounts.
         * @function
         * @returns {Object} Properties (Numbers, in screen coordinates): left, top, right, bottom.
         */
        getMargins: function() {
          return e.extend({}, this._margins);
        },
        /**
         * The margins push the "home" region in from the sides by the specified amounts.
         * @function
         * @param {Object} margins - Properties (Numbers, in screen coordinates): left, top, right, bottom.
         */
        setMargins: function(t) {
          e.console.assert(e.type(t) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          }, t), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
        },
        /**
         * Returns the bounds of the visible area in viewport coordinates.
         * @function
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to, in viewport coordinates.
         */
        getBounds: function(t) {
          return this.getBoundsNoRotate(t).rotate(-this.getRotation(t));
        },
        /**
         * Returns the bounds of the visible area in viewport coordinates.
         * This method ignores the viewport rotation. Use
         * {@link OpenSeadragon.Viewport#getBounds} to take it into account.
         * @function
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to, in viewport coordinates.
         */
        getBoundsNoRotate: function(t) {
          var r = this.getCenter(t), i = 1 / this.getZoom(t), n = i / this.getAspectRatio();
          return new e.Rect(
            r.x - i / 2,
            r.y - n / 2,
            i,
            n
          );
        },
        /**
         * @function
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to,
         * including the space taken by margins, in viewport coordinates.
         */
        getBoundsWithMargins: function(t) {
          return this.getBoundsNoRotateWithMargins(t).rotate(
            -this.getRotation(t),
            this.getCenter(t)
          );
        },
        /**
         * @function
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to,
         * including the space taken by margins, in viewport coordinates.
         */
        getBoundsNoRotateWithMargins: function(t) {
          var r = this.getBoundsNoRotate(t), i = this._containerInnerSize.x * this.getZoom(t);
          return r.x -= this._margins.left / i, r.y -= this._margins.top / i, r.width += (this._margins.left + this._margins.right) / i, r.height += (this._margins.top + this._margins.bottom) / i, r;
        },
        /**
         * @function
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         */
        getCenter: function(t) {
          var r = new e.Point(
            this.centerSpringX.current.value,
            this.centerSpringY.current.value
          ), i = new e.Point(
            this.centerSpringX.target.value,
            this.centerSpringY.target.value
          ), n, o, s, a, l, h, d, p;
          return t ? r : this.zoomPoint ? (n = this.pixelFromPoint(this.zoomPoint, !0), o = this.getZoom(), s = 1 / o, a = s / this.getAspectRatio(), l = new e.Rect(
            r.x - s / 2,
            r.y - a / 2,
            s,
            a
          ), h = this._pixelFromPoint(this.zoomPoint, l), d = h.minus(n).rotate(-this.getRotation(!0)), p = d.divide(this._containerInnerSize.x * o), i.plus(p)) : i;
        },
        /**
         * @function
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         */
        getZoom: function(t) {
          return t ? this.zoomSpring.current.value : this.zoomSpring.target.value;
        },
        // private
        _applyZoomConstraints: function(t) {
          return Math.max(
            Math.min(t, this.getMaxZoom()),
            this.getMinZoom()
          );
        },
        /**
         * @function
         * @private
         * @param {OpenSeadragon.Rect} bounds
         * @returns {OpenSeadragon.Rect} constrained bounds.
         */
        _applyBoundaryConstraints: function(t) {
          var r = this.viewportToViewerElementRectangle(t).getBoundingBox(), i = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), n = !1, o = !1;
          if (!this.wrapHorizontal) {
            var s = r.x + r.width, a = i.x + i.width, l, h, d;
            r.width > i.width ? l = this.visibilityRatio * i.width : l = this.visibilityRatio * r.width, h = i.x - s + l, d = a - r.x - l, l > i.width ? (r.x += (h + d) / 2, n = !0) : d < 0 ? (r.x += d, n = !0) : h > 0 && (r.x += h, n = !0);
          }
          if (!this.wrapVertical) {
            var p = r.y + r.height, w = i.y + i.height, y, _, E;
            r.height > i.height ? y = this.visibilityRatio * i.height : y = this.visibilityRatio * r.height, _ = i.y - p + y, E = w - r.y - y, y > i.height ? (r.y += (_ + E) / 2, o = !0) : E < 0 ? (r.y += E, o = !0) : _ > 0 && (r.y += _, o = !0);
          }
          var P = n || o, C = P ? this.viewerElementToViewportRectangle(r) : t.clone();
          return C.xConstrained = n, C.yConstrained = o, C.constraintApplied = P, C;
        },
        /**
         * @function
         * @private
         * @param {Boolean} [immediately=false] - whether the function that triggered this event was
         * called with the "immediately" flag
         */
        _raiseConstraintsEvent: function(t) {
          this.viewer && this.viewer.raiseEvent("constrain", {
            immediately: t
          });
        },
        /**
         * Enforces the minZoom, maxZoom and visibilityRatio constraints by
         * zooming and panning to the closest acceptable zoom and location.
         * @function
         * @param {Boolean} [immediately=false]
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:constrain if constraints were applied
         */
        applyConstraints: function(t) {
          var r = this.getZoom(), i = this._applyZoomConstraints(r);
          r !== i && this.zoomTo(i, this.zoomPoint, t);
          var n = this.getConstrainedBounds(!1);
          return n.constraintApplied && (this.fitBounds(n, t), this._raiseConstraintsEvent(t)), this;
        },
        /**
         * Equivalent to {@link OpenSeadragon.Viewport#applyConstraints}
         * @function
         * @param {Boolean} [immediately=false]
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:constrain
         */
        ensureVisible: function(t) {
          return this.applyConstraints(t);
        },
        /**
         * @function
         * @private
         * @param {OpenSeadragon.Rect} bounds
         * @param {Object} options (immediately=false, constraints=false)
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        _fitBounds: function(t, r) {
          r = r || {};
          var i = r.immediately || !1, n = r.constraints || !1, o = this.getAspectRatio(), s = t.getCenter(), a = new e.Rect(
            t.x,
            t.y,
            t.width,
            t.height,
            t.degrees + this.getRotation()
          ).getBoundingBox();
          a.getAspectRatio() >= o ? a.height = a.width / o : a.width = a.height * o, a.x = s.x - a.width / 2, a.y = s.y - a.height / 2;
          var l = 1 / a.width;
          if (i)
            return this.panTo(s, !0), this.zoomTo(l, null, !0), n && this.applyConstraints(!0), this;
          var h = this.getCenter(!0), d = this.getZoom(!0);
          this.panTo(h, !0), this.zoomTo(d, null, !0);
          var p = this.getBounds(), w = this.getZoom();
          if (w === 0 || Math.abs(l / w - 1) < 1e-8)
            return this.zoomTo(l, null, !0), this.panTo(s, i), n && this.applyConstraints(!1), this;
          if (n) {
            this.panTo(s, !1), l = this._applyZoomConstraints(l), this.zoomTo(l, null, !1);
            var y = this.getConstrainedBounds();
            this.panTo(h, !0), this.zoomTo(d, null, !0), this.fitBounds(y);
          } else {
            var _ = a.rotate(-this.getRotation()), E = _.getTopLeft().times(l).minus(p.getTopLeft().times(w)).divide(l - w);
            this.zoomTo(l, E, i);
          }
          return this;
        },
        /**
         * Makes the viewport zoom and pan so that the specified bounds take
         * as much space as possible in the viewport.
         * Note: this method ignores the constraints (minZoom, maxZoom and
         * visibilityRatio).
         * Use {@link OpenSeadragon.Viewport#fitBoundsWithConstraints} to enforce
         * them.
         * @function
         * @param {OpenSeadragon.Rect} bounds
         * @param {Boolean} [immediately=false]
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        fitBounds: function(t, r) {
          return this._fitBounds(t, {
            immediately: r,
            constraints: !1
          });
        },
        /**
         * Makes the viewport zoom and pan so that the specified bounds take
         * as much space as possible in the viewport while enforcing the constraints
         * (minZoom, maxZoom and visibilityRatio).
         * Note: because this method enforces the constraints, part of the
         * provided bounds may end up outside of the viewport.
         * Use {@link OpenSeadragon.Viewport#fitBounds} to ignore them.
         * @function
         * @param {OpenSeadragon.Rect} bounds
         * @param {Boolean} [immediately=false]
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        fitBoundsWithConstraints: function(t, r) {
          return this._fitBounds(t, {
            immediately: r,
            constraints: !0
          });
        },
        /**
         * Zooms so the image just fills the viewer vertically.
         * @param {Boolean} immediately
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        fitVertically: function(t) {
          var r = new e.Rect(
            this._contentBounds.x + this._contentBounds.width / 2,
            this._contentBounds.y,
            0,
            this._contentBounds.height
          );
          return this.fitBounds(r, t);
        },
        /**
         * Zooms so the image just fills the viewer horizontally.
         * @param {Boolean} immediately
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        fitHorizontally: function(t) {
          var r = new e.Rect(
            this._contentBounds.x,
            this._contentBounds.y + this._contentBounds.height / 2,
            this._contentBounds.width,
            0
          );
          return this.fitBounds(r, t);
        },
        /**
         * Returns bounds taking constraints into account
         * Added to improve constrained panning
         * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
         * @returns {OpenSeadragon.Rect} The bounds in viewport coordinates after applying constraints. The returned $.Rect
         *                               contains additional properties constraintsApplied, xConstrained and yConstrained.
         *                               These flags indicate whether the viewport bounds were modified by the constraints
         *                               of the viewer rectangle, and in which dimension(s).
         */
        getConstrainedBounds: function(t) {
          var r, i;
          return r = this.getBounds(t), i = this._applyBoundaryConstraints(r), i;
        },
        /**
         * @function
         * @param {OpenSeadragon.Point} delta
         * @param {Boolean} immediately
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:pan
         */
        panBy: function(t, r) {
          var i = new e.Point(
            this.centerSpringX.target.value,
            this.centerSpringY.target.value
          );
          return this.panTo(i.plus(t), r);
        },
        /**
         * @function
         * @param {OpenSeadragon.Point} center
         * @param {Boolean} immediately
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:pan
         */
        panTo: function(t, r) {
          return r ? (this.centerSpringX.resetTo(t.x), this.centerSpringY.resetTo(t.y)) : (this.centerSpringX.springTo(t.x), this.centerSpringY.springTo(t.y)), this.viewer && this.viewer.raiseEvent("pan", {
            center: t,
            immediately: r
          }), this;
        },
        /**
         * @function
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:zoom
         */
        zoomBy: function(t, r, i) {
          return this.zoomTo(
            this.zoomSpring.target.value * t,
            r,
            i
          );
        },
        /**
         * Zooms to the specified zoom level
         * @function
         * @param {Number} zoom The zoom level to zoom to.
         * @param {OpenSeadragon.Point} [refPoint] The point which will stay at
         * the same screen location. Defaults to the viewport center.
         * @param {Boolean} [immediately=false]
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:zoom
         */
        zoomTo: function(t, r, i) {
          var n = this;
          return this.zoomPoint = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, i ? this._adjustCenterSpringsForZoomPoint(function() {
            n.zoomSpring.resetTo(t);
          }) : this.zoomSpring.springTo(t), this.viewer && this.viewer.raiseEvent("zoom", {
            zoom: t,
            refPoint: r,
            immediately: i
          }), this;
        },
        /**
         * Rotates this viewport to the angle specified.
         * @function
         * @param {Number} degrees The degrees to set the rotation to.
         * @param {Boolean} [immediately=false] Whether to animate to the new angle
         * or rotate immediately.
         * * @returns {OpenSeadragon.Viewport} Chainable.
         */
        setRotation: function(t, r) {
          return this.rotateTo(t, null, r);
        },
        /**
         * Gets the current rotation in degrees.
         * @function
         * @param {Boolean} [current=false] True for current rotation, false for target.
         * @returns {Number} The current rotation in degrees.
         */
        getRotation: function(t) {
          return t ? this.degreesSpring.current.value : this.degreesSpring.target.value;
        },
        /**
         * Rotates this viewport to the angle specified around a pivot point. Alias for rotateTo.
         * @function
         * @param {Number} degrees The degrees to set the rotation to.
         * @param {OpenSeadragon.Point} [pivot] (Optional) point in viewport coordinates
         * around which the rotation should be performed. Defaults to the center of the viewport.
         * @param {Boolean} [immediately=false] Whether to animate to the new angle
         * or rotate immediately.
         * * @returns {OpenSeadragon.Viewport} Chainable.
         */
        setRotationWithPivot: function(t, r, i) {
          return this.rotateTo(t, r, i);
        },
        /**
         * Rotates this viewport to the angle specified.
         * @function
         * @param {Number} degrees The degrees to set the rotation to.
         * @param {OpenSeadragon.Point} [pivot] (Optional) point in viewport coordinates
         * around which the rotation should be performed. Defaults to the center of the viewport.
         * @param {Boolean} [immediately=false] Whether to animate to the new angle
         * or rotate immediately.
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        rotateTo: function(t, r, i) {
          if (!this.viewer || !this.viewer.drawer.canRotate())
            return this;
          if (this.degreesSpring.target.value === t && this.degreesSpring.isAtTargetValue())
            return this;
          if (this.rotationPivot = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, i)
            if (this.rotationPivot) {
              var n = t - this._oldDegrees;
              if (!n)
                return this.rotationPivot = null, this;
              this._rotateAboutPivot(t);
            } else
              this.degreesSpring.resetTo(t);
          else {
            var o = e.positiveModulo(this.degreesSpring.current.value, 360), s = e.positiveModulo(t, 360), a = s - o;
            a > 180 ? s -= 360 : a < -180 && (s += 360);
            var l = o - s;
            this.degreesSpring.resetTo(t + l), this.degreesSpring.springTo(t);
          }
          return this._setContentBounds(
            this.viewer.world.getHomeBounds(),
            this.viewer.world.getContentFactor()
          ), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: t, immediately: !!i, pivot: this.rotationPivot || this.getCenter() }), this;
        },
        /**
         * Rotates this viewport by the angle specified.
         * @function
         * @param {Number} degrees The degrees by which to rotate the viewport.
         * @param {OpenSeadragon.Point} [pivot] (Optional) point in viewport coordinates
         * around which the rotation should be performed. Defaults to the center of the viewport.
         * * @param {Boolean} [immediately=false] Whether to animate to the new angle
         * or rotate immediately.
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        rotateBy: function(t, r, i) {
          return this.rotateTo(this.degreesSpring.target.value + t, r, i);
        },
        /**
         * @function
         * @returns {OpenSeadragon.Viewport} Chainable.
         * @fires OpenSeadragon.Viewer.event:resize
         */
        resize: function(t, r) {
          var i = this.getBoundsNoRotate(), n = i, o;
          this.containerSize.x = t.x, this.containerSize.y = t.y, this._updateContainerInnerSize(), r && (o = t.x / this.containerSize.x, n.width = i.width * o, n.height = n.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", {
            newContainerSize: t,
            maintain: r
          });
          var s = this.fitBounds(n, !0);
          return this.viewer && this.viewer.raiseEvent("after-resize", {
            newContainerSize: t,
            maintain: r
          }), s;
        },
        // private
        _updateContainerInnerSize: function() {
          this._containerInnerSize = new e.Point(
            Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)),
            Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom))
          );
        },
        /**
         * Update the zoom, degrees, and center (X and Y) springs.
         * @function
         * @returns {Boolean} True if the viewport is still animating, false otherwise.
         */
        update: function() {
          var t = this;
          this._adjustCenterSpringsForZoomPoint(function() {
            t.zoomSpring.update();
          }), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(!0) : this.degreesSpring.update();
          var r = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
          this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value;
          var i = r || !this.zoomSpring.isAtTargetValue() || !this.centerSpringX.isAtTargetValue() || !this.centerSpringY.isAtTargetValue() || !this.degreesSpring.isAtTargetValue();
          return i;
        },
        // private - pass true to use spring, or a number for degrees for immediate rotation
        _rotateAboutPivot: function(t) {
          var r = t === !0, i = this.rotationPivot.minus(this.getCenter());
          this.centerSpringX.shiftBy(i.x), this.centerSpringY.shiftBy(i.y), r ? this.degreesSpring.update() : this.degreesSpring.resetTo(t);
          var n = this.degreesSpring.current.value - this._oldDegrees, o = i.rotate(n * -1).times(-1);
          this.centerSpringX.shiftBy(o.x), this.centerSpringY.shiftBy(o.y);
        },
        // private
        _adjustCenterSpringsForZoomPoint: function(t) {
          if (this.zoomPoint) {
            var r = this.pixelFromPoint(this.zoomPoint, !0);
            t();
            var i = this.pixelFromPoint(this.zoomPoint, !0), n = i.minus(r), o = this.deltaPointsFromPixels(
              n,
              !0
            );
            this.centerSpringX.shiftBy(o.x), this.centerSpringY.shiftBy(o.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
          } else
            t();
        },
        /**
         * Convert a delta (translation vector) from viewport coordinates to pixels
         * coordinates. This method does not take rotation into account.
         * Consider using deltaPixelsFromPoints if you need to account for rotation.
         * @param {OpenSeadragon.Point} deltaPoints - The translation vector to convert.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        deltaPixelsFromPointsNoRotate: function(t, r) {
          return t.times(
            this._containerInnerSize.x * this.getZoom(r)
          );
        },
        /**
         * Convert a delta (translation vector) from viewport coordinates to pixels
         * coordinates.
         * @param {OpenSeadragon.Point} deltaPoints - The translation vector to convert.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        deltaPixelsFromPoints: function(t, r) {
          return this.deltaPixelsFromPointsNoRotate(
            t.rotate(this.getRotation(r)),
            r
          );
        },
        /**
         * Convert a delta (translation vector) from pixels coordinates to viewport
         * coordinates. This method does not take rotation into account.
         * Consider using deltaPointsFromPixels if you need to account for rotation.
         * @param {OpenSeadragon.Point} deltaPixels - The translation vector to convert.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        deltaPointsFromPixelsNoRotate: function(t, r) {
          return t.divide(
            this._containerInnerSize.x * this.getZoom(r)
          );
        },
        /**
         * Convert a delta (translation vector) from pixels coordinates to viewport
         * coordinates.
         * @param {OpenSeadragon.Point} deltaPixels - The translation vector to convert.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        deltaPointsFromPixels: function(t, r) {
          return this.deltaPointsFromPixelsNoRotate(t, r).rotate(-this.getRotation(r));
        },
        /**
         * Convert viewport coordinates to pixels coordinates.
         * This method does not take rotation into account.
         * Consider using pixelFromPoint if you need to account for rotation.
         * @param {OpenSeadragon.Point} point the viewport coordinates
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        pixelFromPointNoRotate: function(t, r) {
          return this._pixelFromPointNoRotate(
            t,
            this.getBoundsNoRotate(r)
          );
        },
        /**
         * Convert viewport coordinates to pixel coordinates.
         * @param {OpenSeadragon.Point} point the viewport coordinates
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        pixelFromPoint: function(t, r) {
          return this._pixelFromPoint(t, this.getBoundsNoRotate(r));
        },
        // private
        _pixelFromPointNoRotate: function(t, r) {
          return t.minus(
            r.getTopLeft()
          ).times(
            this._containerInnerSize.x / r.width
          ).plus(
            new e.Point(this._margins.left, this._margins.top)
          );
        },
        // private
        _pixelFromPoint: function(t, r) {
          return this._pixelFromPointNoRotate(
            t.rotate(this.getRotation(!0), this.getCenter(!0)),
            r
          );
        },
        /**
         * Convert pixel coordinates to viewport coordinates.
         * This method does not take rotation into account.
         * Consider using pointFromPixel if you need to account for rotation.
         * @param {OpenSeadragon.Point} pixel Pixel coordinates
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        pointFromPixelNoRotate: function(t, r) {
          var i = this.getBoundsNoRotate(r);
          return t.minus(
            new e.Point(this._margins.left, this._margins.top)
          ).divide(
            this._containerInnerSize.x / i.width
          ).plus(
            i.getTopLeft()
          );
        },
        /**
         * Convert pixel coordinates to viewport coordinates.
         * @param {OpenSeadragon.Point} pixel Pixel coordinates
         * @param {Boolean} [current=false] - Pass true for the current location;
         * defaults to false (target location).
         * @returns {OpenSeadragon.Point}
         */
        pointFromPixel: function(t, r) {
          return this.pointFromPixelNoRotate(t, r).rotate(
            -this.getRotation(r),
            this.getCenter(r)
          );
        },
        // private
        _viewportToImageDelta: function(t, r) {
          var i = this._contentBoundsNoRotate.width;
          return new e.Point(
            t * this._contentSizeNoRotate.x / i,
            r * this._contentSizeNoRotate.x / i
          );
        },
        /**
         * Translates from OpenSeadragon viewer coordinate system to image coordinate system.
         * This method can be called either by passing X,Y coordinates or an
         * OpenSeadragon.Point
         * Note: not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.
         * @function
         * @param {(OpenSeadragon.Point|Number)} viewerX either a point or the X
         * coordinate in viewport coordinate system.
         * @param {Number} [viewerY] Y coordinate in viewport coordinate system.
         * @returns {OpenSeadragon.Point} a point representing the coordinates in the image.
         */
        viewportToImageCoordinates: function(t, r) {
          if (t instanceof e.Point)
            return this.viewportToImageCoordinates(t.x, t.y);
          if (this.viewer) {
            var i = this.viewer.world.getItemCount();
            if (i > 1)
              this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
            else if (i === 1) {
              var n = this.viewer.world.getItemAt(0);
              return n.viewportToImageCoordinates(t, r, !0);
            }
          }
          return this._viewportToImageDelta(
            t - this._contentBoundsNoRotate.x,
            r - this._contentBoundsNoRotate.y
          );
        },
        // private
        _imageToViewportDelta: function(t, r) {
          var i = this._contentBoundsNoRotate.width;
          return new e.Point(
            t / this._contentSizeNoRotate.x * i,
            r / this._contentSizeNoRotate.x * i
          );
        },
        /**
         * Translates from image coordinate system to OpenSeadragon viewer coordinate system
         * This method can be called either by passing X,Y coordinates or an
         * OpenSeadragon.Point
         * Note: not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.
         * @function
         * @param {(OpenSeadragon.Point | Number)} imageX the point or the
         * X coordinate in image coordinate system.
         * @param {Number} [imageY] Y coordinate in image coordinate system.
         * @returns {OpenSeadragon.Point} a point representing the coordinates in the viewport.
         */
        imageToViewportCoordinates: function(t, r) {
          if (t instanceof e.Point)
            return this.imageToViewportCoordinates(t.x, t.y);
          if (this.viewer) {
            var i = this.viewer.world.getItemCount();
            if (i > 1)
              this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
            else if (i === 1) {
              var n = this.viewer.world.getItemAt(0);
              return n.imageToViewportCoordinates(t, r, !0);
            }
          }
          var o = this._imageToViewportDelta(t, r);
          return o.x += this._contentBoundsNoRotate.x, o.y += this._contentBoundsNoRotate.y, o;
        },
        /**
         * Translates from a rectangle which describes a portion of the image in
         * pixel coordinates to OpenSeadragon viewport rectangle coordinates.
         * This method can be called either by passing X,Y,width,height or an
         * OpenSeadragon.Rect
         * Note: not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.
         * @function
         * @param {(OpenSeadragon.Rect | Number)} imageX the rectangle or the X
         * coordinate of the top left corner of the rectangle in image coordinate system.
         * @param {Number} [imageY] the Y coordinate of the top left corner of the rectangle
         * in image coordinate system.
         * @param {Number} [pixelWidth] the width in pixel of the rectangle.
         * @param {Number} [pixelHeight] the height in pixel of the rectangle.
         * @returns {OpenSeadragon.Rect} This image's bounds in viewport coordinates
         */
        imageToViewportRectangle: function(t, r, i, n) {
          var o = t;
          if (o instanceof e.Rect || (o = new e.Rect(t, r, i, n)), this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1)
              this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
            else if (s === 1) {
              var a = this.viewer.world.getItemAt(0);
              return a.imageToViewportRectangle(
                t,
                r,
                i,
                n,
                !0
              );
            }
          }
          var l = this.imageToViewportCoordinates(o.x, o.y), h = this._imageToViewportDelta(o.width, o.height);
          return new e.Rect(
            l.x,
            l.y,
            h.x,
            h.y,
            o.degrees
          );
        },
        /**
         * Translates from a rectangle which describes a portion of
         * the viewport in point coordinates to image rectangle coordinates.
         * This method can be called either by passing X,Y,width,height or an
         * OpenSeadragon.Rect
         * Note: not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.
         * @function
         * @param {(OpenSeadragon.Rect | Number)} viewerX either a rectangle or
         * the X coordinate of the top left corner of the rectangle in viewport
         * coordinate system.
         * @param {Number} [viewerY] the Y coordinate of the top left corner of the rectangle
         * in viewport coordinate system.
         * @param {Number} [pointWidth] the width of the rectangle in viewport coordinate system.
         * @param {Number} [pointHeight] the height of the rectangle in viewport coordinate system.
         */
        viewportToImageRectangle: function(t, r, i, n) {
          var o = t;
          if (o instanceof e.Rect || (o = new e.Rect(t, r, i, n)), this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1)
              this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
            else if (s === 1) {
              var a = this.viewer.world.getItemAt(0);
              return a.viewportToImageRectangle(
                t,
                r,
                i,
                n,
                !0
              );
            }
          }
          var l = this.viewportToImageCoordinates(o.x, o.y), h = this._viewportToImageDelta(o.width, o.height);
          return new e.Rect(
            l.x,
            l.y,
            h.x,
            h.y,
            o.degrees
          );
        },
        /**
         * Convert pixel coordinates relative to the viewer element to image
         * coordinates.
         * Note: not accurate with multi-image.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        viewerElementToImageCoordinates: function(t) {
          var r = this.pointFromPixel(t, !0);
          return this.viewportToImageCoordinates(r);
        },
        /**
         * Convert pixel coordinates relative to the image to
         * viewer element coordinates.
         * Note: not accurate with multi-image.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        imageToViewerElementCoordinates: function(t) {
          var r = this.imageToViewportCoordinates(t);
          return this.pixelFromPoint(r, !0);
        },
        /**
         * Convert pixel coordinates relative to the window to image coordinates.
         * Note: not accurate with multi-image.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        windowToImageCoordinates: function(t) {
          e.console.assert(
            this.viewer,
            "[Viewport.windowToImageCoordinates] the viewport must have a viewer."
          );
          var r = t.minus(
            e.getElementPosition(this.viewer.element)
          );
          return this.viewerElementToImageCoordinates(r);
        },
        /**
         * Convert image coordinates to pixel coordinates relative to the window.
         * Note: not accurate with multi-image.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        imageToWindowCoordinates: function(t) {
          e.console.assert(
            this.viewer,
            "[Viewport.imageToWindowCoordinates] the viewport must have a viewer."
          );
          var r = this.imageToViewerElementCoordinates(t);
          return r.plus(
            e.getElementPosition(this.viewer.element)
          );
        },
        /**
         * Convert pixel coordinates relative to the viewer element to viewport
         * coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        viewerElementToViewportCoordinates: function(t) {
          return this.pointFromPixel(t, !0);
        },
        /**
         * Convert viewport coordinates to pixel coordinates relative to the
         * viewer element.
         * @param {OpenSeadragon.Point} point
         * @returns {OpenSeadragon.Point}
         */
        viewportToViewerElementCoordinates: function(t) {
          return this.pixelFromPoint(t, !0);
        },
        /**
         * Convert a rectangle in pixel coordinates relative to the viewer element
         * to viewport coordinates.
         * @param {OpenSeadragon.Rect} rectangle the rectangle to convert
         * @returns {OpenSeadragon.Rect} the converted rectangle
         */
        viewerElementToViewportRectangle: function(t) {
          return e.Rect.fromSummits(
            this.pointFromPixel(t.getTopLeft(), !0),
            this.pointFromPixel(t.getTopRight(), !0),
            this.pointFromPixel(t.getBottomLeft(), !0)
          );
        },
        /**
         * Convert a rectangle in viewport coordinates to pixel coordinates relative
         * to the viewer element.
         * @param {OpenSeadragon.Rect} rectangle the rectangle to convert
         * @returns {OpenSeadragon.Rect} the converted rectangle
         */
        viewportToViewerElementRectangle: function(t) {
          return e.Rect.fromSummits(
            this.pixelFromPoint(t.getTopLeft(), !0),
            this.pixelFromPoint(t.getTopRight(), !0),
            this.pixelFromPoint(t.getBottomLeft(), !0)
          );
        },
        /**
         * Convert pixel coordinates relative to the window to viewport coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        windowToViewportCoordinates: function(t) {
          e.console.assert(
            this.viewer,
            "[Viewport.windowToViewportCoordinates] the viewport must have a viewer."
          );
          var r = t.minus(
            e.getElementPosition(this.viewer.element)
          );
          return this.viewerElementToViewportCoordinates(r);
        },
        /**
         * Convert viewport coordinates to pixel coordinates relative to the window.
         * @param {OpenSeadragon.Point} point
         * @returns {OpenSeadragon.Point}
         */
        viewportToWindowCoordinates: function(t) {
          e.console.assert(
            this.viewer,
            "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer."
          );
          var r = this.viewportToViewerElementCoordinates(t);
          return r.plus(
            e.getElementPosition(this.viewer.element)
          );
        },
        /**
         * Convert a viewport zoom to an image zoom.
         * Image zoom: ratio of the original image size to displayed image size.
         * 1 means original image size, 0.5 half size...
         * Viewport zoom: ratio of the displayed image's width to viewport's width.
         * 1 means identical width, 2 means image's width is twice the viewport's width...
         * Note: not accurate with multi-image.
         * @function
         * @param {Number} viewportZoom The viewport zoom
         * target zoom.
         * @returns {Number} imageZoom The image zoom
         */
        viewportToImageZoom: function(t) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1)
              this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var i = this.viewer.world.getItemAt(0);
              return i.viewportToImageZoom(t);
            }
          }
          var n = this._contentSizeNoRotate.x, o = this._containerInnerSize.x, s = this._contentBoundsNoRotate.width, a = o / n * s;
          return t * a;
        },
        /**
         * Convert an image zoom to a viewport zoom.
         * Image zoom: ratio of the original image size to displayed image size.
         * 1 means original image size, 0.5 half size...
         * Viewport zoom: ratio of the displayed image's width to viewport's width.
         * 1 means identical width, 2 means image's width is twice the viewport's width...
         * Note: not accurate with multi-image; use [TiledImage.imageToViewportZoom] for the specific image of interest.
         * @function
         * @param {Number} imageZoom The image zoom
         * target zoom.
         * @returns {Number} viewportZoom The viewport zoom
         */
        imageToViewportZoom: function(t) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1)
              this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image. Instead, use [TiledImage.imageToViewportZoom] for the specific image of interest");
            else if (r === 1) {
              var i = this.viewer.world.getItemAt(0);
              return i.imageToViewportZoom(t);
            }
          }
          var n = this._contentSizeNoRotate.x, o = this._containerInnerSize.x, s = this._contentBoundsNoRotate.width, a = n / o / s;
          return t * a;
        },
        /**
         * Toggles flip state and demands a new drawing on navigator and viewer objects.
         * @function
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        toggleFlip: function() {
          return this.setFlip(!this.getFlip()), this;
        },
        /**
         * Get flip state stored on viewport.
         * @function
         * @returns {Boolean} Flip state.
         */
        getFlip: function() {
          return this.flipped;
        },
        /**
         * Sets flip state according to the state input argument.
         * @function
         * @param {Boolean} state - Flip state to set.
         * @returns {OpenSeadragon.Viewport} Chainable.
         */
        setFlip: function(t) {
          return this.flipped === t ? this : (this.flipped = t, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: t }), this);
        },
        /**
         * Gets current max zoom pixel ratio
         * @function
         * @returns {Number} Max zoom pixel ratio
         */
        getMaxZoomPixelRatio: function() {
          return this.maxZoomPixelRatio;
        },
        /**
         * Sets max zoom pixel ratio
         * @function
         * @param {Number} ratio - Max zoom pixel ratio
         * @param {Boolean} [applyConstraints=true] - Apply constraints after setting ratio;
         * Takes effect only if current zoom is greater than set max zoom pixel ratio
         * @param {Boolean} [immediately=false] - Whether to animate to new zoom
         */
        setMaxZoomPixelRatio: function(t, r = !0, i = !1) {
          e.console.assert(!isNaN(t), "[Viewport.setMaxZoomPixelRatio] ratio must be a number"), !isNaN(t) && (this.maxZoomPixelRatio = t, r && this.getZoom() > this.getMaxZoom() && this.applyConstraints(i));
        }
      };
    }(g), function(e) {
      e.TiledImage = function(t) {
        this._initialized = !1, e.console.assert(t.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(t.drawer, "[TiledImage] options.drawer is required"), e.console.assert(t.viewer, "[TiledImage] options.viewer is required"), e.console.assert(t.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(t.source, "[TiledImage] options.source is required"), e.console.assert(
          !t.clip || t.clip instanceof e.Rect,
          "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"
        ), e.EventSource.call(this), this._tileCache = t.tileCache, delete t.tileCache, this._drawer = t.drawer, delete t.drawer, this._imageLoader = t.imageLoader, delete t.imageLoader, t.clip instanceof e.Rect && (this._clip = t.clip.clone()), delete t.clip;
        var r = t.x || 0;
        delete t.x;
        var i = t.y || 0;
        delete t.y, this.normHeight = t.source.dimensions.y / t.source.dimensions.x, this.contentAspectX = t.source.dimensions.x / t.source.dimensions.y;
        var n = 1;
        t.width ? (n = t.width, delete t.width, t.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete t.height)) : t.height && (n = t.height / this.normHeight, delete t.height);
        var o = t.fitBounds;
        delete t.fitBounds;
        var s = t.fitBoundsPlacement || g.Placement.CENTER;
        delete t.fitBoundsPlacement;
        var a = t.degrees || 0;
        delete t.degrees;
        var l = t.ajaxHeaders;
        delete t.ajaxHeaders, e.extend(!0, this, {
          //internal state properties
          viewer: null,
          tilesMatrix: {},
          // A '3d' dictionary [level][x][y] --> Tile.
          coverage: {},
          // A '3d' dictionary [level][x][y] --> Boolean; shows what areas have been drawn.
          loadingCoverage: {},
          // A '3d' dictionary [level][x][y] --> Boolean; shows what areas are loaded or are being loaded/blended.
          lastDrawn: [],
          // An unordered list of Tiles drawn last frame.
          lastResetTime: 0,
          // Last time for which the tiledImage was reset.
          _needsDraw: !0,
          // Does the tiledImage need to be drawn again?
          _needsUpdate: !0,
          // Does the tiledImage need to update the viewport again?
          _hasOpaqueTile: !1,
          // Do we have even one fully opaque tile?
          _tilesLoading: 0,
          // The number of pending tile requests.
          _tilesToDraw: [],
          // info about the tiles currently in the viewport, two deep: array[level][tile]
          _lastDrawn: [],
          // array of tiles that were last fetched by the drawer
          _isBlending: !1,
          // Are any tiles still being blended?
          _wasBlending: !1,
          // Were any tiles blending before the last draw?
          _isTainted: !1,
          // Has a Tile been found with tainted data?
          //configurable settings
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
          initial: n,
          springStiffness: this.springStiffness,
          animationTime: this.animationTime
        }), this._degreesSpring = new e.Spring({
          initial: a,
          springStiffness: this.springStiffness,
          animationTime: this.animationTime
        }), this._updateForScale(), o && this.fitBounds(o, s, !0), this._ownAjaxHeaders = {}, this.setAjaxHeaders(l, !1), this._initialized = !0;
      }, e.extend(
        e.TiledImage.prototype,
        e.EventSource.prototype,
        /** @lends OpenSeadragon.TiledImage.prototype */
        {
          /**
           * @returns {Boolean} Whether the TiledImage needs to be drawn.
           */
          needsDraw: function() {
            return this._needsDraw;
          },
          /**
           * Mark the tiled image as needing to be (re)drawn
           */
          redraw: function() {
            this._needsDraw = !0;
          },
          /**
           * @returns {Boolean} Whether all tiles necessary for this TiledImage to draw at the current view have been loaded.
           */
          getFullyLoaded: function() {
            return this._fullyLoaded;
          },
          // private
          _setFullyLoaded: function(t) {
            t !== this._fullyLoaded && (this._fullyLoaded = t, this.raiseEvent("fully-loaded-change", {
              fullyLoaded: this._fullyLoaded
            }));
          },
          /**
           * Clears all tiles and triggers an update on the next call to
           * {@link OpenSeadragon.TiledImage#update}.
           */
          reset: function() {
            this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = !0;
          },
          /**
           * Updates the TiledImage's bounds, animating if needed. Based on the new
           * bounds, updates the levels and tiles to be drawn into the viewport.
           * @param viewportChanged Whether the viewport changed meaning tiles need to be updated.
           * @returns {Boolean} Whether the TiledImage needs to be drawn.
           */
          update: function(t) {
            let r = this._xSpring.update(), i = this._ySpring.update(), n = this._scaleSpring.update(), o = this._degreesSpring.update(), s = r || i || n || o || this._needsUpdate;
            if (s || t || !this._fullyLoaded) {
              let a = this._updateLevelsForViewport();
              this._setFullyLoaded(a);
            }
            return this._needsUpdate = !1, s ? (this._updateForScale(), this._raiseBoundsChange(), this._needsDraw = !0, !0) : !1;
          },
          /**
           * Mark this TiledImage as having been drawn, so that it will only be drawn
           * again if something changes about the image. If the image is still blending,
           * this will have no effect.
           * @returns {Boolean} whether the item still needs to be drawn due to blending
           */
          setDrawn: function() {
            return this._needsDraw = this._isBlending || this._wasBlending, this._needsDraw;
          },
          /**
           * Set the internal _isTainted flag for this TiledImage. Lazy loaded - not
           * checked each time a Tile is loaded, but can be set if a consumer of the
           * tiles (e.g. a Drawer) discovers a Tile to have tainted data so that further
           * checks are not needed and alternative rendering strategies can be used.
           * @private
           */
          setTainted(t) {
            this._isTainted = t;
          },
          /**
           * @private
           * @returns {Boolean} whether the TiledImage has been marked as tainted
           */
          isTainted() {
            return this._isTainted;
          },
          /**
           * Destroy the TiledImage (unload current loaded tiles).
           */
          destroy: function() {
            this.reset(), this.source.destroy && this.source.destroy(this.viewer);
          },
          /**
           * Get this TiledImage's bounds in viewport coordinates.
           * @param {Boolean} [current=false] - Pass true for the current location;
           * false for target location.
           * @returns {OpenSeadragon.Rect} This TiledImage's bounds in viewport coordinates.
           */
          getBounds: function(t) {
            return this.getBoundsNoRotate(t).rotate(this.getRotation(t), this._getRotationPoint(t));
          },
          /**
           * Get this TiledImage's bounds in viewport coordinates without taking
           * rotation into account.
           * @param {Boolean} [current=false] - Pass true for the current location;
           * false for target location.
           * @returns {OpenSeadragon.Rect} This TiledImage's bounds in viewport coordinates.
           */
          getBoundsNoRotate: function(t) {
            return t ? new e.Rect(
              this._xSpring.current.value,
              this._ySpring.current.value,
              this._worldWidthCurrent,
              this._worldHeightCurrent
            ) : new e.Rect(
              this._xSpring.target.value,
              this._ySpring.target.value,
              this._worldWidthTarget,
              this._worldHeightTarget
            );
          },
          // deprecated
          getWorldBounds: function() {
            return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
          },
          /**
           * Get the bounds of the displayed part of the tiled image.
           * @param {Boolean} [current=false] Pass true for the current location,
           * false for the target location.
           * @returns {$.Rect} The clipped bounds in viewport coordinates.
           */
          getClippedBounds: function(t) {
            var r = this.getBoundsNoRotate(t);
            if (this._clip) {
              var i = t ? this._worldWidthCurrent : this._worldWidthTarget, n = i / this.source.dimensions.x, o = this._clip.times(n);
              r = new e.Rect(
                r.x + o.x,
                r.y + o.y,
                o.width,
                o.height
              );
            }
            return r.rotate(this.getRotation(t), this._getRotationPoint(t));
          },
          /**
           * @function
           * @param {Number} level
           * @param {Number} x
           * @param {Number} y
           * @returns {OpenSeadragon.Rect} Where this tile fits (in normalized coordinates).
           */
          getTileBounds: function(t, r, i) {
            var n = this.source.getNumTiles(t), o = (n.x + r % n.x) % n.x, s = (n.y + i % n.y) % n.y, a = this.source.getTileBounds(t, o, s);
            return this.getFlip() && (a.x = Math.max(0, 1 - a.x - a.width)), a.x += (r - o) / n.x, a.y += this._worldHeightCurrent / this._worldWidthCurrent * ((i - s) / n.y), a;
          },
          /**
           * @returns {OpenSeadragon.Point} This TiledImage's content size, in original pixels.
           */
          getContentSize: function() {
            return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
          },
          /**
           * @returns {OpenSeadragon.Point} The TiledImage's content size, in window coordinates.
           */
          getSizeInWindowCoordinates: function() {
            var t = this.imageToWindowCoordinates(new e.Point(0, 0)), r = this.imageToWindowCoordinates(this.getContentSize());
            return new e.Point(r.x - t.x, r.y - t.y);
          },
          // private
          _viewportToImageDelta: function(t, r, i) {
            var n = i ? this._scaleSpring.current.value : this._scaleSpring.target.value;
            return new e.Point(
              t * (this.source.dimensions.x / n),
              r * (this.source.dimensions.y * this.contentAspectX / n)
            );
          },
          /**
           * Translates from OpenSeadragon viewer coordinate system to image coordinate system.
           * This method can be called either by passing X,Y coordinates or an {@link OpenSeadragon.Point}.
           * @param {Number|OpenSeadragon.Point} viewerX - The X coordinate or point in viewport coordinate system.
           * @param {Number} [viewerY] - The Y coordinate in viewport coordinate system.
           * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
           * @returns {OpenSeadragon.Point} A point representing the coordinates in the image.
           */
          viewportToImageCoordinates: function(t, r, i) {
            var n;
            return t instanceof e.Point ? (i = r, n = t) : n = new e.Point(t, r), n = n.rotate(-this.getRotation(i), this._getRotationPoint(i)), i ? this._viewportToImageDelta(
              n.x - this._xSpring.current.value,
              n.y - this._ySpring.current.value
            ) : this._viewportToImageDelta(
              n.x - this._xSpring.target.value,
              n.y - this._ySpring.target.value
            );
          },
          // private
          _imageToViewportDelta: function(t, r, i) {
            var n = i ? this._scaleSpring.current.value : this._scaleSpring.target.value;
            return new e.Point(
              t / this.source.dimensions.x * n,
              r / this.source.dimensions.y / this.contentAspectX * n
            );
          },
          /**
           * Translates from image coordinate system to OpenSeadragon viewer coordinate system
           * This method can be called either by passing X,Y coordinates or an {@link OpenSeadragon.Point}.
           * @param {Number|OpenSeadragon.Point} imageX - The X coordinate or point in image coordinate system.
           * @param {Number} [imageY] - The Y coordinate in image coordinate system.
           * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
           * @returns {OpenSeadragon.Point} A point representing the coordinates in the viewport.
           */
          imageToViewportCoordinates: function(t, r, i) {
            t instanceof e.Point && (i = r, r = t.y, t = t.x);
            var n = this._imageToViewportDelta(t, r, i);
            return i ? (n.x += this._xSpring.current.value, n.y += this._ySpring.current.value) : (n.x += this._xSpring.target.value, n.y += this._ySpring.target.value), n.rotate(this.getRotation(i), this._getRotationPoint(i));
          },
          /**
           * Translates from a rectangle which describes a portion of the image in
           * pixel coordinates to OpenSeadragon viewport rectangle coordinates.
           * This method can be called either by passing X,Y,width,height or an {@link OpenSeadragon.Rect}.
           * @param {Number|OpenSeadragon.Rect} imageX - The left coordinate or rectangle in image coordinate system.
           * @param {Number} [imageY] - The top coordinate in image coordinate system.
           * @param {Number} [pixelWidth] - The width in pixel of the rectangle.
           * @param {Number} [pixelHeight] - The height in pixel of the rectangle.
           * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
           * @returns {OpenSeadragon.Rect} A rect representing the coordinates in the viewport.
           */
          imageToViewportRectangle: function(t, r, i, n, o) {
            var s = t;
            s instanceof e.Rect ? o = r : s = new e.Rect(t, r, i, n);
            var a = this.imageToViewportCoordinates(s.getTopLeft(), o), l = this._imageToViewportDelta(s.width, s.height, o);
            return new e.Rect(
              a.x,
              a.y,
              l.x,
              l.y,
              s.degrees + this.getRotation(o)
            );
          },
          /**
           * Translates from a rectangle which describes a portion of
           * the viewport in point coordinates to image rectangle coordinates.
           * This method can be called either by passing X,Y,width,height or an {@link OpenSeadragon.Rect}.
           * @param {Number|OpenSeadragon.Rect} viewerX - The left coordinate or rectangle in viewport coordinate system.
           * @param {Number} [viewerY] - The top coordinate in viewport coordinate system.
           * @param {Number} [pointWidth] - The width in viewport coordinate system.
           * @param {Number} [pointHeight] - The height in viewport coordinate system.
           * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
           * @returns {OpenSeadragon.Rect} A rect representing the coordinates in the image.
           */
          viewportToImageRectangle: function(t, r, i, n, o) {
            var s = t;
            t instanceof e.Rect ? o = r : s = new e.Rect(t, r, i, n);
            var a = this.viewportToImageCoordinates(s.getTopLeft(), o), l = this._viewportToImageDelta(s.width, s.height, o);
            return new e.Rect(
              a.x,
              a.y,
              l.x,
              l.y,
              s.degrees - this.getRotation(o)
            );
          },
          /**
           * Convert pixel coordinates relative to the viewer element to image
           * coordinates.
           * @param {OpenSeadragon.Point} pixel
           * @returns {OpenSeadragon.Point}
           */
          viewerElementToImageCoordinates: function(t) {
            var r = this.viewport.pointFromPixel(t, !0);
            return this.viewportToImageCoordinates(r);
          },
          /**
           * Convert pixel coordinates relative to the image to
           * viewer element coordinates.
           * @param {OpenSeadragon.Point} pixel
           * @returns {OpenSeadragon.Point}
           */
          imageToViewerElementCoordinates: function(t) {
            var r = this.imageToViewportCoordinates(t);
            return this.viewport.pixelFromPoint(r, !0);
          },
          /**
           * Convert pixel coordinates relative to the window to image coordinates.
           * @param {OpenSeadragon.Point} pixel
           * @returns {OpenSeadragon.Point}
           */
          windowToImageCoordinates: function(t) {
            var r = t.minus(
              g.getElementPosition(this.viewer.element)
            );
            return this.viewerElementToImageCoordinates(r);
          },
          /**
           * Convert image coordinates to pixel coordinates relative to the window.
           * @param {OpenSeadragon.Point} pixel
           * @returns {OpenSeadragon.Point}
           */
          imageToWindowCoordinates: function(t) {
            var r = this.imageToViewerElementCoordinates(t);
            return r.plus(
              g.getElementPosition(this.viewer.element)
            );
          },
          // private
          // Convert rectangle in viewport coordinates to this tiled image point
          // coordinates (x in [0, 1] and y in [0, aspectRatio])
          _viewportToTiledImageRectangle: function(t) {
            var r = this._scaleSpring.current.value;
            return t = t.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new e.Rect(
              (t.x - this._xSpring.current.value) / r,
              (t.y - this._ySpring.current.value) / r,
              t.width / r,
              t.height / r,
              t.degrees
            );
          },
          /**
           * Convert a viewport zoom to an image zoom.
           * Image zoom: ratio of the original image size to displayed image size.
           * 1 means original image size, 0.5 half size...
           * Viewport zoom: ratio of the displayed image's width to viewport's width.
           * 1 means identical width, 2 means image's width is twice the viewport's width...
           * @function
           * @param {Number} viewportZoom The viewport zoom
           * @returns {Number} imageZoom The image zoom
           */
          viewportToImageZoom: function(t) {
            var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
            return r * t;
          },
          /**
           * Convert an image zoom to a viewport zoom.
           * Image zoom: ratio of the original image size to displayed image size.
           * 1 means original image size, 0.5 half size...
           * Viewport zoom: ratio of the displayed image's width to viewport's width.
           * 1 means identical width, 2 means image's width is twice the viewport's width...
           * Note: not accurate with multi-image.
           * @function
           * @param {Number} imageZoom The image zoom
           * @returns {Number} viewportZoom The viewport zoom
           */
          imageToViewportZoom: function(t) {
            var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
            return t / r;
          },
          /**
           * Sets the TiledImage's position in the world.
           * @param {OpenSeadragon.Point} position - The new position, in viewport coordinates.
           * @param {Boolean} [immediately=false] - Whether to animate to the new position or snap immediately.
           * @fires OpenSeadragon.TiledImage.event:bounds-change
           */
          setPosition: function(t, r) {
            var i = this._xSpring.target.value === t.x && this._ySpring.target.value === t.y;
            if (r) {
              if (i && this._xSpring.current.value === t.x && this._ySpring.current.value === t.y)
                return;
              this._xSpring.resetTo(t.x), this._ySpring.resetTo(t.y), this._needsDraw = !0, this._needsUpdate = !0;
            } else {
              if (i)
                return;
              this._xSpring.springTo(t.x), this._ySpring.springTo(t.y), this._needsDraw = !0, this._needsUpdate = !0;
            }
            i || this._raiseBoundsChange();
          },
          /**
           * Sets the TiledImage's width in the world, adjusting the height to match based on aspect ratio.
           * @param {Number} width - The new width, in viewport coordinates.
           * @param {Boolean} [immediately=false] - Whether to animate to the new size or snap immediately.
           * @fires OpenSeadragon.TiledImage.event:bounds-change
           */
          setWidth: function(t, r) {
            this._setScale(t, r);
          },
          /**
           * Sets the TiledImage's height in the world, adjusting the width to match based on aspect ratio.
           * @param {Number} height - The new height, in viewport coordinates.
           * @param {Boolean} [immediately=false] - Whether to animate to the new size or snap immediately.
           * @fires OpenSeadragon.TiledImage.event:bounds-change
           */
          setHeight: function(t, r) {
            this._setScale(t / this.normHeight, r);
          },
          /**
           * Sets an array of polygons to crop the TiledImage during draw tiles.
           * The render function will use the default non-zero winding rule.
           * @param {OpenSeadragon.Point[][]} polygons - represented in an array of point object in image coordinates.
           * Example format: [
           *  [{x: 197, y:172}, {x: 226, y:172}, {x: 226, y:198}, {x: 197, y:198}], // First polygon
           *  [{x: 328, y:200}, {x: 330, y:199}, {x: 332, y:201}, {x: 329, y:202}]  // Second polygon
           *  [{x: 321, y:201}, {x: 356, y:205}, {x: 341, y:250}] // Third polygon
           * ]
           */
          setCroppingPolygons: function(t) {
            var r = function(n) {
              return n instanceof e.Point || typeof n.x == "number" && typeof n.y == "number";
            }, i = function(n) {
              return n.map(function(o) {
                try {
                  if (r(o))
                    return { x: o.x, y: o.y };
                  throw new Error();
                } catch {
                  throw new Error("A Provided cropping polygon point is not supported");
                }
              });
            };
            try {
              if (!e.isArray(t))
                throw new Error("Provided cropping polygon is not an array");
              this._croppingPolygons = t.map(function(n) {
                return i(n);
              }), this._needsDraw = !0;
            } catch (n) {
              e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(n), this.resetCroppingPolygons();
            }
          },
          /**
           * Resets the cropping polygons, thus next render will remove all cropping
           * polygon effects.
           */
          resetCroppingPolygons: function() {
            this._croppingPolygons = null, this._needsDraw = !0;
          },
          /**
           * Positions and scales the TiledImage to fit in the specified bounds.
           * Note: this method fires OpenSeadragon.TiledImage.event:bounds-change
           * twice
           * @param {OpenSeadragon.Rect} bounds The bounds to fit the image into.
           * @param {OpenSeadragon.Placement} [anchor=OpenSeadragon.Placement.CENTER]
           * How to anchor the image in the bounds.
           * @param {Boolean} [immediately=false] Whether to animate to the new size
           * or snap immediately.
           * @fires OpenSeadragon.TiledImage.event:bounds-change
           */
          fitBounds: function(t, r, i) {
            r = r || e.Placement.CENTER;
            var n = e.Placement.properties[r], o = this.contentAspectX, s = 0, a = 0, l = 1, h = 1;
            if (this._clip && (o = this._clip.getAspectRatio(), l = this._clip.width / this.source.dimensions.x, h = this._clip.height / this.source.dimensions.y, t.getAspectRatio() > o ? (s = this._clip.x / this._clip.height * t.height, a = this._clip.y / this._clip.height * t.height) : (s = this._clip.x / this._clip.width * t.width, a = this._clip.y / this._clip.width * t.width)), t.getAspectRatio() > o) {
              var d = t.height / h, p = 0;
              n.isHorizontallyCentered ? p = (t.width - t.height * o) / 2 : n.isRight && (p = t.width - t.height * o), this.setPosition(
                new e.Point(t.x - s + p, t.y - a),
                i
              ), this.setHeight(d, i);
            } else {
              var w = t.width / l, y = 0;
              n.isVerticallyCentered ? y = (t.height - t.width / o) / 2 : n.isBottom && (y = t.height - t.width / o), this.setPosition(
                new e.Point(t.x - s, t.y - a + y),
                i
              ), this.setWidth(w, i);
            }
          },
          /**
           * @returns {OpenSeadragon.Rect|null} The TiledImage's current clip rectangle,
           * in image pixels, or null if none.
           */
          getClip: function() {
            return this._clip ? this._clip.clone() : null;
          },
          /**
           * @param {OpenSeadragon.Rect|null} newClip - An area, in image pixels, to clip to
           * (portions of the image outside of this area will not be visible). Only works on
           * browsers that support the HTML5 canvas.
           * @fires OpenSeadragon.TiledImage.event:clip-change
           */
          setClip: function(t) {
            e.console.assert(
              !t || t instanceof e.Rect,
              "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"
            ), t instanceof e.Rect ? this._clip = t.clone() : this._clip = null, this._needsUpdate = !0, this._needsDraw = !0, this.raiseEvent("clip-change");
          },
          /**
           * @returns {Boolean} Whether the TiledImage should be flipped before rendering.
           */
          getFlip: function() {
            return this.flipped;
          },
          /**
           * @param {Boolean} flip Whether the TiledImage should be flipped before rendering.
           * @fires OpenSeadragon.TiledImage.event:bounds-change
           */
          setFlip: function(t) {
            this.flipped = t;
          },
          get flipped() {
            return this._flipped;
          },
          set flipped(t) {
            let r = this._flipped !== !!t;
            this._flipped = !!t, r && (this.update(!0), this._needsDraw = !0, this._raiseBoundsChange());
          },
          get wrapHorizontal() {
            return this._wrapHorizontal;
          },
          set wrapHorizontal(t) {
            let r = this._wrapHorizontal !== !!t;
            this._wrapHorizontal = !!t, this._initialized && r && (this.update(!0), this._needsDraw = !0);
          },
          get wrapVertical() {
            return this._wrapVertical;
          },
          set wrapVertical(t) {
            let r = this._wrapVertical !== !!t;
            this._wrapVertical = !!t, this._initialized && r && (this.update(!0), this._needsDraw = !0);
          },
          get debugMode() {
            return this._debugMode;
          },
          set debugMode(t) {
            this._debugMode = !!t, this._needsDraw = !0;
          },
          /**
           * @returns {Number} The TiledImage's current opacity.
           */
          getOpacity: function() {
            return this.opacity;
          },
          /**
           * @param {Number} opacity Opacity the tiled image should be drawn at.
           * @fires OpenSeadragon.TiledImage.event:opacity-change
           */
          setOpacity: function(t) {
            this.opacity = t;
          },
          get opacity() {
            return this._opacity;
          },
          set opacity(t) {
            t !== this.opacity && (this._opacity = t, this._needsDraw = !0, this.raiseEvent("opacity-change", {
              opacity: this.opacity
            }));
          },
          /**
           * @returns {Boolean} whether the tiledImage can load its tiles even when it has zero opacity.
           */
          getPreload: function() {
            return this._preload;
          },
          /**
           * Set true to load even when hidden. Set false to block loading when hidden.
           */
          setPreload: function(t) {
            this._preload = !!t, this._needsDraw = !0;
          },
          /**
           * Get the rotation of this tiled image in degrees.
           * @param {Boolean} [current=false] True for current rotation, false for target.
           * @returns {Number} the rotation of this tiled image in degrees.
           */
          getRotation: function(t) {
            return t ? this._degreesSpring.current.value : this._degreesSpring.target.value;
          },
          /**
           * Set the current rotation of this tiled image in degrees.
           * @param {Number} degrees the rotation in degrees.
           * @param {Boolean} [immediately=false] Whether to animate to the new angle
           * or rotate immediately.
           * @fires OpenSeadragon.TiledImage.event:bounds-change
           */
          setRotation: function(t, r) {
            this._degreesSpring.target.value === t && this._degreesSpring.isAtTargetValue() || (r ? this._degreesSpring.resetTo(t) : this._degreesSpring.springTo(t), this._needsDraw = !0, this._needsUpdate = !0, this._raiseBoundsChange());
          },
          /**
           * Get the region of this tiled image that falls within the viewport.
           * @returns {OpenSeadragon.Rect} the region of this tiled image that falls within the viewport.
           * Returns false for images with opacity==0 unless preload==true
           */
          getDrawArea: function() {
            if (this._opacity === 0 && !this._preload)
              return !1;
            var t = this._viewportToTiledImageRectangle(
              this.viewport.getBoundsWithMargins(!0)
            );
            if (!this.wrapHorizontal && !this.wrapVertical) {
              var r = this._viewportToTiledImageRectangle(
                this.getClippedBounds(!0)
              );
              t = t.intersection(r);
            }
            return t;
          },
          /**
           *
           * @returns {Array} Array of Tiles that make up the current view
           */
          getTilesToDraw: function() {
            let t = this._tilesToDraw.flat();
            return this._updateTilesInViewport(t), t = this._tilesToDraw.flat(), t.forEach((r) => {
              r.tile.beingDrawn = !0;
            }), this._lastDrawn = t, t;
          },
          /**
           * Get the point around which this tiled image is rotated
           * @private
           * @param {Boolean} current True for current rotation point, false for target.
           * @returns {OpenSeadragon.Point}
           */
          _getRotationPoint: function(t) {
            return this.getBoundsNoRotate(t).getCenter();
          },
          get compositeOperation() {
            return this._compositeOperation;
          },
          set compositeOperation(t) {
            t !== this._compositeOperation && (this._compositeOperation = t, this._needsDraw = !0, this.raiseEvent("composite-operation-change", {
              compositeOperation: this._compositeOperation
            }));
          },
          /**
           * @returns {String} The TiledImage's current compositeOperation.
           */
          getCompositeOperation: function() {
            return this._compositeOperation;
          },
          /**
           * @param {String} compositeOperation the tiled image should be drawn with this globalCompositeOperation.
           * @fires OpenSeadragon.TiledImage.event:composite-operation-change
           */
          setCompositeOperation: function(t) {
            this.compositeOperation = t;
          },
          /**
           * Update headers to include when making AJAX requests.
           *
           * Unless `propagate` is set to false (which is likely only useful in rare circumstances),
           * the updated headers are propagated to all tiles and queued image loader jobs.
           *
           * Note that the rules for merging headers still apply, i.e. headers returned by
           * {@link OpenSeadragon.TileSource#getTileAjaxHeaders} take precedence over
           * the headers here in the tiled image (`TiledImage.ajaxHeaders`).
           *
           * @function
           * @param {Object} ajaxHeaders Updated AJAX headers, which will be merged over any headers specified in {@link OpenSeadragon.Options}.
           * @param {Boolean} [propagate=true] Whether to propagate updated headers to existing tiles and queued image loader jobs.
           */
          setAjaxHeaders: function(t, r) {
            if (t === null && (t = {}), !e.isPlainObject(t)) {
              console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
              return;
            }
            this._ownAjaxHeaders = t, this._updateAjaxHeaders(r);
          },
          /**
           * Update headers to include when making AJAX requests.
           *
           * This function has the same effect as calling {@link OpenSeadragon.TiledImage#setAjaxHeaders},
           * except that the headers for this tiled image do not change. This is especially useful
           * for propagating updated headers from {@link OpenSeadragon.TileSource#getTileAjaxHeaders}
           * to existing tiles.
           *
           * @private
           * @function
           * @param {Boolean} [propagate=true] Whether to propagate updated headers to existing tiles and queued image loader jobs.
           */
          _updateAjaxHeaders: function(t) {
            if (t === void 0 && (t = !0), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, t) {
              var r, i, n, o;
              for (var s in this.tilesMatrix) {
                r = this.source.getNumTiles(s);
                for (var a in this.tilesMatrix[s]) {
                  i = (r.x + a % r.x) % r.x;
                  for (var l in this.tilesMatrix[s][a])
                    if (n = (r.y + l % r.y) % r.y, o = this.tilesMatrix[s][a][l], o.loadWithAjax = this.loadTilesWithAjax, o.loadWithAjax) {
                      var h = this.source.getTileAjaxHeaders(s, i, n);
                      o.ajaxHeaders = e.extend({}, this.ajaxHeaders, h);
                    } else
                      o.ajaxHeaders = null;
                }
              }
              for (var d = 0; d < this._imageLoader.jobQueue.length; d++) {
                var p = this._imageLoader.jobQueue[d];
                p.loadWithAjax = p.tile.loadWithAjax, p.ajaxHeaders = p.tile.loadWithAjax ? p.tile.ajaxHeaders : null;
              }
            }
          },
          // private
          _setScale: function(t, r) {
            var i = this._scaleSpring.target.value === t;
            if (r) {
              if (i && this._scaleSpring.current.value === t)
                return;
              this._scaleSpring.resetTo(t), this._updateForScale(), this._needsDraw = !0, this._needsUpdate = !0;
            } else {
              if (i)
                return;
              this._scaleSpring.springTo(t), this._updateForScale(), this._needsDraw = !0, this._needsUpdate = !0;
            }
            i || this._raiseBoundsChange();
          },
          // private
          _updateForScale: function() {
            this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
          },
          // private
          _raiseBoundsChange: function() {
            this.raiseEvent("bounds-change");
          },
          // private
          _isBottomItem: function() {
            return this.viewer.world.getItemAt(0) === this;
          },
          // private
          _getLevelsInterval: function() {
            var t = Math.max(
              this.source.minLevel,
              Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))
            ), r = this.viewport.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(0),
              !0
            ).x * this._scaleSpring.current.value, i = Math.min(
              Math.abs(this.source.maxLevel),
              Math.abs(Math.floor(
                Math.log(r / this.minPixelRatio) / Math.log(2)
              ))
            );
            return i = Math.max(i, this.source.minLevel || 0), t = Math.min(t, i), {
              lowestLevel: t,
              highestLevel: i
            };
          },
          // returns boolean flag of whether the image should be marked as fully loaded
          _updateLevelsForViewport: function() {
            var t = this._getLevelsInterval(), r = t.lowestLevel, i = t.highestLevel, n = [], o = this.getDrawArea(), s = e.now();
            if (this._lastDrawn.forEach((F) => {
              F.tile.beingDrawn = !1;
            }), this._tilesToDraw = [], this._tilesLoading = 0, this.loadingCoverage = {}, !o)
              return this._needsDraw = !1, this._fullyLoaded;
            var a = new Array(i - r + 1);
            for (let F = 0, L = i; L >= r; L--, F++)
              a[F] = L;
            for (let F = i + 1; F <= this.source.maxLevel; F++) {
              var l = this.tilesMatrix[F] && this.tilesMatrix[F][0] && this.tilesMatrix[F][0][0];
              if (l && l.isBottomMost && l.isRightMost && l.loaded) {
                a.push(F);
                break;
              }
            }
            let h = !1;
            for (let F = 0; F < a.length; F++) {
              let L = a[F];
              var d = this.viewport.deltaPixelsFromPointsNoRotate(
                this.source.getPixelRatio(L),
                !0
              ).x * this._scaleSpring.current.value;
              if (F === a.length - 1 || d >= this.minPixelRatio)
                h = !0;
              else if (!h)
                continue;
              var p = this.viewport.deltaPixelsFromPointsNoRotate(
                this.source.getPixelRatio(L),
                !1
              ).x * this._scaleSpring.current.value, w = this.viewport.deltaPixelsFromPointsNoRotate(
                this.source.getPixelRatio(
                  Math.max(
                    this.source.getClosestLevel(),
                    0
                  )
                ),
                !1
              ).x * this._scaleSpring.current.value, y = this.immediateRender ? 1 : w, _ = Math.min(1, (d - 0.5) / 0.5), E = y / Math.abs(
                y - p
              ), P = this._updateLevel(
                L,
                _,
                E,
                o,
                s,
                n
              );
              n = P.bestTiles;
              var C = P.updatedTiles.filter((N) => N.loaded), M = /* @__PURE__ */ function(N, V, j) {
                return function(Q) {
                  return {
                    tile: Q,
                    level: N,
                    levelOpacity: V,
                    currentTime: j
                  };
                };
              }(L, _, s);
              if (this._tilesToDraw[L] = C.map(M), this._providesCoverage(this.coverage, L))
                break;
            }
            return n && n.length > 0 ? (n.forEach(function(F) {
              F && !F.context2D && this._loadTile(F, s);
            }, this), this._needsDraw = !0, !1) : this._tilesLoading === 0;
          },
          /**
           * Update all tiles that contribute to the current view
           * @private
           *
           */
          _updateTilesInViewport: function(t) {
            let r = e.now(), i = this;
            this._tilesLoading = 0, this._wasBlending = this._isBlending, this._isBlending = !1, this.loadingCoverage = {};
            let n = t.length ? t[0].level : 0;
            if (!this.getDrawArea())
              return;
            function s(l) {
              let h = l.tile;
              if (h && h.loaded) {
                let d = i._blendTile(
                  h,
                  h.x,
                  h.y,
                  l.level,
                  l.levelOpacity,
                  r,
                  n
                );
                i._isBlending = i._isBlending || d, i._needsDraw = i._needsDraw || d || i._wasBlending;
              }
            }
            let a = 0;
            for (let l = 0; l < t.length; l++) {
              let h = t[l];
              s(h), this._providesCoverage(this.coverage, h.level) && (a = Math.max(a, h.level));
            }
            if (a > 0)
              for (let l in this._tilesToDraw)
                l < a && delete this._tilesToDraw[l];
          },
          /**
           * Updates the opacity of a tile according to the time it has been on screen
           * to perform a fade-in.
           * Updates coverage once a tile is fully opaque.
           * Returns whether the fade-in has completed.
           * @private
           *
           * @param {OpenSeadragon.Tile} tile
           * @param {Number} x
           * @param {Number} y
           * @param {Number} level
           * @param {Number} levelOpacity
           * @param {Number} currentTime
           * @param {Boolean} lowestLevel
           * @returns {Boolean} true if blending did not yet finish
           */
          _blendTile: function(t, r, i, n, o, s, a) {
            let l = 1e3 * this.blendTime, h, d;
            return t.blendStart || (t.blendStart = s), h = s - t.blendStart, d = l ? Math.min(1, h / l) : 1, n === a && (d = 1, h = l), this.alwaysBlend && (d *= o), t.opacity = d, d === 1 && (this._setCoverage(this.coverage, n, r, i, !0), this._hasOpaqueTile = !0), h < l;
          },
          /**
           * Updates all tiles at a given resolution level.
           * @private
           * @param {Number} level
           * @param {Number} levelOpacity
           * @param {Number} levelVisibility
           * @param {OpenSeadragon.Rect} drawArea
           * @param {Number} currentTime
           * @param {OpenSeadragon.Tile[]} best Array of the current best tiles
           * @returns {Object} Dictionary {bestTiles: OpenSeadragon.Tile - the current "best" tiles to draw, updatedTiles: OpenSeadragon.Tile) - the updated tiles}.
           */
          _updateLevel: function(t, r, i, n, o, s) {
            var a = n.getBoundingBox().getTopLeft(), l = n.getBoundingBox().getBottomRight();
            this.viewer && this.viewer.raiseEvent("update-level", {
              tiledImage: this,
              havedrawn: !0,
              // deprecated, kept for backwards compatibility
              level: t,
              opacity: r,
              visibility: i,
              drawArea: n,
              topleft: a,
              bottomright: l,
              currenttime: o,
              best: s
            }), this._resetCoverage(this.coverage, t), this._resetCoverage(this.loadingCoverage, t);
            var h = this._getCornerTiles(t, a, l), d = h.topLeft, p = h.bottomRight, w = this.source.getNumTiles(t), y = this.viewport.pixelFromPoint(this.viewport.getCenter());
            this.getFlip() && (p.x += 1, this.wrapHorizontal || (p.x = Math.min(p.x, w.x - 1)));
            for (var _ = Math.max(0, (p.x - d.x) * (p.y - d.y)), E = new Array(_), P = 0, C = d.x; C <= p.x; C++)
              for (var M = d.y; M <= p.y; M++) {
                var F;
                if (this.getFlip()) {
                  var L = (w.x + C % w.x) % w.x;
                  F = C + w.x - L - L - 1;
                } else
                  F = C;
                if (n.intersection(this.getTileBounds(t, F, M)) !== null) {
                  var N = this._updateTile(
                    F,
                    M,
                    t,
                    i,
                    y,
                    w,
                    o,
                    s
                  );
                  s = N.bestTiles, E[P] = N.tile, P += 1;
                }
              }
            return {
              bestTiles: s,
              updatedTiles: E
            };
          },
          /**
           * @private
           * @param {OpenSeadragon.Tile} tile
           * @param {Boolean} overlap
           * @param {OpenSeadragon.Viewport} viewport
           * @param {OpenSeadragon.Point} viewportCenter
           * @param {Number} levelVisibility
           */
          _positionTile: function(t, r, i, n, o) {
            var s = t.bounds.getTopLeft();
            s.x *= this._scaleSpring.current.value, s.y *= this._scaleSpring.current.value, s.x += this._xSpring.current.value, s.y += this._ySpring.current.value;
            var a = t.bounds.getSize();
            a.x *= this._scaleSpring.current.value, a.y *= this._scaleSpring.current.value, t.positionedBounds.x = s.x, t.positionedBounds.y = s.y, t.positionedBounds.width = a.x, t.positionedBounds.height = a.y;
            var l = i.pixelFromPointNoRotate(s, !0), h = i.pixelFromPointNoRotate(s, !1), d = i.deltaPixelsFromPointsNoRotate(a, !0), p = i.deltaPixelsFromPointsNoRotate(a, !1), w = h.plus(p.divide(2)), y = n.squaredDistanceTo(w);
            this.viewer.drawer.minimumOverlapRequired(this) && (r || (d = d.plus(new e.Point(1, 1))), t.isRightMost && this.wrapHorizontal && (d.x += 0.75), t.isBottomMost && this.wrapVertical && (d.y += 0.75)), t.position = l, t.size = d, t.squaredDistance = y, t.visibility = o;
          },
          /**
           * Update a single tile at a particular resolution level.
           * @private
           * @param {Number} x
           * @param {Number} y
           * @param {Number} level
           * @param {Number} levelVisibility
           * @param {OpenSeadragon.Point} viewportCenter
           * @param {Number} numberOfTiles
           * @param {Number} currentTime
           * @param {OpenSeadragon.Tile} best - The current "best" tile to draw.
           * @returns {Object} Dictionary {bestTiles: OpenSeadragon.Tile[] - the current best tiles, tile: OpenSeadragon.Tile the current tile}
           */
          _updateTile: function(t, r, i, n, o, s, a, l) {
            var h = this._getTile(
              t,
              r,
              i,
              a,
              s
            );
            this.viewer && this.viewer.raiseEvent("update-tile", {
              tiledImage: this,
              tile: h
            }), this._setCoverage(this.coverage, i, t, r, !1);
            var d = h.loaded || h.loading || this._isCovered(this.loadingCoverage, i, t, r);
            if (this._setCoverage(this.loadingCoverage, i, t, r, d), !h.exists)
              return {
                bestTiles: l,
                tile: h
              };
            if (h.loaded && h.opacity === 1 && this._setCoverage(this.coverage, i, t, r, !0), this._positionTile(
              h,
              this.source.tileOverlap,
              this.viewport,
              o,
              n
            ), !h.loaded)
              if (h.context2D)
                this._setTileLoaded(h);
              else {
                var p = this._tileCache.getImageRecord(h.cacheKey);
                p && this._setTileLoaded(h, p.getData());
              }
            return h.loading ? this._tilesLoading++ : d || (l = this._compareTiles(l, h, this.maxTilesPerFrame)), {
              bestTiles: l,
              tile: h
            };
          },
          // private
          _getCornerTiles: function(t, r, i) {
            var n, o;
            this.wrapHorizontal ? (n = e.positiveModulo(r.x, 1), o = e.positiveModulo(i.x, 1)) : (n = Math.max(0, r.x), o = Math.min(1, i.x));
            var s, a, l = 1 / this.source.aspectRatio;
            this.wrapVertical ? (s = e.positiveModulo(r.y, l), a = e.positiveModulo(i.y, l)) : (s = Math.max(0, r.y), a = Math.min(l, i.y));
            var h = this.source.getTileAtPoint(t, new e.Point(n, s)), d = this.source.getTileAtPoint(t, new e.Point(o, a)), p = this.source.getNumTiles(t);
            return this.wrapHorizontal && (h.x += p.x * Math.floor(r.x), d.x += p.x * Math.floor(i.x)), this.wrapVertical && (h.y += p.y * Math.floor(r.y / l), d.y += p.y * Math.floor(i.y / l)), {
              topLeft: h,
              bottomRight: d
            };
          },
          /**
           * Obtains a tile at the given location.
           * @private
           * @param {Number} x
           * @param {Number} y
           * @param {Number} level
           * @param {Number} time
           * @param {Number} numTiles
           * @returns {OpenSeadragon.Tile}
           */
          _getTile: function(t, r, i, n, o) {
            var s, a, l, h, d, p, w, y, _, E, P = this.tilesMatrix, C = this.source;
            return P[i] || (P[i] = {}), P[i][t] || (P[i][t] = {}), (!P[i][t][r] || !P[i][t][r].flipped != !this.flipped) && (s = (o.x + t % o.x) % o.x, a = (o.y + r % o.y) % o.y, l = this.getTileBounds(i, t, r), h = C.getTileBounds(i, s, a, !0), d = C.tileExists(i, s, a), p = C.getTileUrl(i, s, a), w = C.getTilePostData(i, s, a), this.loadTilesWithAjax ? (y = C.getTileAjaxHeaders(i, s, a), e.isPlainObject(this.ajaxHeaders) && (y = e.extend({}, this.ajaxHeaders, y))) : y = null, _ = C.getContext2D ? C.getContext2D(i, s, a) : void 0, E = new e.Tile(
              i,
              t,
              r,
              l,
              d,
              p,
              _,
              this.loadTilesWithAjax,
              y,
              h,
              w,
              C.getTileHashKey(i, s, a, p, y, w)
            ), this.getFlip() ? s === 0 && (E.isRightMost = !0) : s === o.x - 1 && (E.isRightMost = !0), a === o.y - 1 && (E.isBottomMost = !0), E.flipped = this.flipped, P[i][t][r] = E), E = P[i][t][r], E.lastTouchTime = n, E;
          },
          /**
           * Dispatch a job to the ImageLoader to load the Image for a Tile.
           * @private
           * @param {OpenSeadragon.Tile} tile
           * @param {Number} time
           */
          _loadTile: function(t, r) {
            var i = this;
            t.loading = !0, this._imageLoader.addJob({
              src: t.getUrl(),
              tile: t,
              source: this.source,
              postData: t.postData,
              loadWithAjax: t.loadWithAjax,
              ajaxHeaders: t.ajaxHeaders,
              crossOriginPolicy: this.crossOriginPolicy,
              ajaxWithCredentials: this.ajaxWithCredentials,
              callback: function(n, o, s) {
                i._onTileLoad(t, r, n, o, s);
              },
              abort: function() {
                t.loading = !1;
              }
            });
          },
          /**
           * Callback fired when a Tile's Image finished downloading.
           * @private
           * @param {OpenSeadragon.Tile} tile
           * @param {Number} time
           * @param {*} data image data
           * @param {String} errorMsg
           * @param {XMLHttpRequest} tileRequest
           */
          _onTileLoad: function(t, r, i, n, o) {
            if (i)
              t.exists = !0;
            else {
              e.console.error("Tile %s failed to load: %s - error: %s", t, t.getUrl(), n), this.viewer.raiseEvent("tile-load-failed", {
                tile: t,
                tiledImage: this,
                time: r,
                message: n,
                tileRequest: o
              }), t.loading = !1, t.exists = !1;
              return;
            }
            if (r < this.lastResetTime) {
              e.console.warn("Ignoring tile %s loaded before reset: %s", t, t.getUrl()), t.loading = !1;
              return;
            }
            var s = this, a = function() {
              var l = s.source, h = l.getClosestLevel();
              s._setTileLoaded(t, i, h, o);
            };
            a();
          },
          /**
           * @private
           * @param {OpenSeadragon.Tile} tile
           * @param {*} data image data, the data sent to ImageJob.prototype.finish(), by default an Image object
           * @param {Number|undefined} cutoff
           * @param {XMLHttpRequest|undefined} tileRequest
           */
          _setTileLoaded: function(t, r, i, n) {
            var o = 0, s = !1, a = this;
            function l() {
              return s && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), o++, h;
            }
            function h() {
              o--, o === 0 && (t.loading = !1, t.loaded = !0, t.hasTransparency = a.source.hasTransparency(
                t.context2D,
                t.getUrl(),
                t.ajaxHeaders,
                t.postData
              ), t.context2D || a._tileCache.cacheTile({
                data: r,
                tile: t,
                cutoff: i,
                tiledImage: a
              }), a.viewer.raiseEvent("tile-ready", {
                tile: t,
                tiledImage: a,
                tileRequest: n
              }), a._needsDraw = !0);
            }
            var d = l();
            this.viewer.raiseEvent("tile-loaded", {
              tile: t,
              tiledImage: this,
              tileRequest: n,
              get image() {
                return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), r;
              },
              data: r,
              getCompletionCallback: l
            }), s = !0, d();
          },
          /**
           * Determines the 'best tiles' from the given 'last best' tiles and the
           * tile in question.
           * @private
           *
           * @param {OpenSeadragon.Tile[]} previousBest The best tiles so far.
           * @param {OpenSeadragon.Tile} tile The new tile to consider.
           * @param {Number} maxNTiles The max number of best tiles.
           * @returns {OpenSeadragon.Tile[]} The new best tiles.
           */
          _compareTiles: function(t, r, i) {
            return t ? (t.push(r), this._sortTiles(t), t.length > i && t.pop(), t) : [r];
          },
          /**
           * Sorts tiles in an array according to distance and visibility.
           * @private
           *
           * @param {OpenSeadragon.Tile[]} tiles The tiles.
           */
          _sortTiles: function(t) {
            t.sort(function(r, i) {
              return r === null ? 1 : i === null ? -1 : r.visibility === i.visibility ? r.squaredDistance - i.squaredDistance : i.visibility - r.visibility;
            });
          },
          /**
           * Returns true if the given tile provides coverage to lower-level tiles of
           * lower resolution representing the same content. If neither x nor y is
           * given, returns true if the entire visible level provides coverage.
           *
           * Note that out-of-bounds tiles provide coverage in this sense, since
           * there's no content that they would need to cover. Tiles at non-existent
           * levels that are within the image bounds, however, do not.
           * @private
           *
           * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
           * @param {Number} level - The resolution level of the tile.
           * @param {Number} x - The X position of the tile.
           * @param {Number} y - The Y position of the tile.
           * @returns {Boolean}
           */
          _providesCoverage: function(t, r, i, n) {
            var o, s, a, l;
            if (!t[r])
              return !1;
            if (i === void 0 || n === void 0) {
              o = t[r];
              for (a in o)
                if (Object.prototype.hasOwnProperty.call(o, a)) {
                  s = o[a];
                  for (l in s)
                    if (Object.prototype.hasOwnProperty.call(s, l) && !s[l])
                      return !1;
                }
              return !0;
            }
            return t[r][i] === void 0 || t[r][i][n] === void 0 || t[r][i][n] === !0;
          },
          /**
           * Returns true if the given tile is completely covered by higher-level
           * tiles of higher resolution representing the same content. If neither x
           * nor y is given, returns true if the entire visible level is covered.
           * @private
           *
           * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
           * @param {Number} level - The resolution level of the tile.
           * @param {Number} x - The X position of the tile.
           * @param {Number} y - The Y position of the tile.
           * @returns {Boolean}
           */
          _isCovered: function(t, r, i, n) {
            return i === void 0 || n === void 0 ? this._providesCoverage(t, r + 1) : this._providesCoverage(t, r + 1, 2 * i, 2 * n) && this._providesCoverage(t, r + 1, 2 * i, 2 * n + 1) && this._providesCoverage(t, r + 1, 2 * i + 1, 2 * n) && this._providesCoverage(t, r + 1, 2 * i + 1, 2 * n + 1);
          },
          /**
           * Sets whether the given tile provides coverage or not.
           * @private
           *
           * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
           * @param {Number} level - The resolution level of the tile.
           * @param {Number} x - The X position of the tile.
           * @param {Number} y - The Y position of the tile.
           * @param {Boolean} covers - Whether the tile provides coverage.
           */
          _setCoverage: function(t, r, i, n, o) {
            if (!t[r]) {
              e.console.warn(
                "Setting coverage for a tile before its level's coverage has been reset: %s",
                r
              );
              return;
            }
            t[r][i] || (t[r][i] = {}), t[r][i][n] = o;
          },
          /**
           * Resets coverage information for the given level. This should be called
           * after every draw routine. Note that at the beginning of the next draw
           * routine, coverage for every visible tile should be explicitly set.
           * @private
           *
           * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
           * @param {Number} level - The resolution level of tiles to completely reset.
           */
          _resetCoverage: function(t, r) {
            t[r] = {};
          }
        }
      );
    }(g), function(e) {
      var t = function(i) {
        e.console.assert(i, "[TileCache.cacheTile] options is required"), e.console.assert(i.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(i.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = i.tile, this.tiledImage = i.tiledImage;
      }, r = function(i) {
        e.console.assert(i, "[ImageRecord] options is required"), e.console.assert(i.data, "[ImageRecord] options.data is required"), this._tiles = [], i.create.apply(null, [this, i.data, i.ownerTile]), this._destroyImplementation = i.destroy.bind(null, this), this.getImage = i.getImage.bind(null, this), this.getData = i.getData.bind(null, this), this.getRenderedContext = i.getRenderedContext.bind(null, this);
      };
      r.prototype = {
        destroy: function() {
          this._destroyImplementation(), this._tiles = null;
        },
        addTile: function(i) {
          e.console.assert(i, "[ImageRecord.addTile] tile is required"), this._tiles.push(i);
        },
        removeTile: function(i) {
          for (var n = 0; n < this._tiles.length; n++)
            if (this._tiles[n] === i) {
              this._tiles.splice(n, 1);
              return;
            }
          e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", i);
        },
        getTileCount: function() {
          return this._tiles.length;
        }
      }, e.TileCache = function(i) {
        i = i || {}, this._maxImageCacheCount = i.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
      }, e.TileCache.prototype = {
        /**
         * @returns {Number} The total number of tiles that have been loaded by
         * this TileCache.
         */
        numTilesLoaded: function() {
          return this._tilesLoaded.length;
        },
        /**
         * Caches the specified tile, removing an old tile if necessary to stay under the
         * maxImageCacheCount specified on construction. Note that if multiple tiles reference
         * the same image, there may be more tiles than maxImageCacheCount; the goal is to keep
         * the number of images below that number. Note, as well, that even the number of images
         * may temporarily surpass that number, but should eventually come back down to the max specified.
         * @param {Object} options - Tile info.
         * @param {OpenSeadragon.Tile} options.tile - The tile to cache.
         * @param {String} options.tile.cacheKey - The unique key used to identify this tile in the cache.
         * @param {Image} options.image - The image of the tile to cache.
         * @param {OpenSeadragon.TiledImage} options.tiledImage - The TiledImage that owns that tile.
         * @param {Number} [options.cutoff=0] - If adding this tile goes over the cache max count, this
         * function will release an old tile. The cutoff option specifies a tile level at or below which
         * tiles will not be released.
         */
        cacheTile: function(i) {
          e.console.assert(i, "[TileCache.cacheTile] options is required"), e.console.assert(i.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(i.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(i.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
          var n = i.cutoff || 0, o = this._tilesLoaded.length, s = this._imagesLoaded[i.tile.cacheKey];
          if (s || (i.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), i.data = i.image), e.console.assert(i.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), s = this._imagesLoaded[i.tile.cacheKey] = new r({
            data: i.data,
            ownerTile: i.tile,
            create: i.tiledImage.source.createTileCache,
            destroy: i.tiledImage.source.destroyTileCache,
            getImage: i.tiledImage.source.getTileCacheDataAsImage,
            getData: i.tiledImage.source.getTileCacheData,
            getRenderedContext: i.tiledImage.source.getTileCacheDataAsContext2D
          }), this._imagesLoadedCount++), s.addTile(i.tile), i.tile.cacheImageRecord = s, this._imagesLoadedCount > this._maxImageCacheCount) {
            for (var a = null, l = -1, h = null, d, p, w, y, _, E, P = this._tilesLoaded.length - 1; P >= 0; P--)
              if (E = this._tilesLoaded[P], d = E.tile, !(d.level <= n || d.beingDrawn)) {
                if (!a) {
                  a = d, l = P, h = E;
                  continue;
                }
                y = d.lastTouchTime, p = a.lastTouchTime, _ = d.level, w = a.level, (y < p || y === p && _ > w) && (a = d, l = P, h = E);
              }
            a && l >= 0 && (this._unloadTile(h), o = l);
          }
          this._tilesLoaded[o] = new t({
            tile: i.tile,
            tiledImage: i.tiledImage
          });
        },
        /**
         * Clears all tiles associated with the specified tiledImage.
         * @param {OpenSeadragon.TiledImage} tiledImage
         */
        clearTilesFor: function(i) {
          e.console.assert(i, "[TileCache.clearTilesFor] tiledImage is required");
          for (var n, o = 0; o < this._tilesLoaded.length; ++o)
            n = this._tilesLoaded[o], n.tiledImage === i && (this._unloadTile(n), this._tilesLoaded.splice(o, 1), o--);
        },
        // private
        getImageRecord: function(i) {
          return e.console.assert(i, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[i];
        },
        // private
        _unloadTile: function(i) {
          e.console.assert(i, "[TileCache._unloadTile] tileRecord is required");
          var n = i.tile, o = i.tiledImage;
          let s = n.getCanvasContext && n.getCanvasContext();
          n.unload(), n.cacheImageRecord = null;
          var a = this._imagesLoaded[n.cacheKey];
          a && (a.removeTile(n), a.getTileCount() || (a.destroy(), delete this._imagesLoaded[n.cacheKey], this._imagesLoadedCount--, s && (s.canvas.width = 0, s.canvas.height = 0, o.viewer.raiseEvent("image-unloaded", {
            context2D: s,
            tile: n
          }))), o.viewer.raiseEvent("tile-unloaded", {
            tile: n,
            tiledImage: o
          }));
        }
      };
    }(g), function(e) {
      e.World = function(t) {
        var r = this;
        e.console.assert(t.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = t.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function(i) {
          r._autoRefigureSizes ? r._figureSizes() : r._needsSizesFigured = !0;
        }, this._figureSizes();
      }, e.extend(
        e.World.prototype,
        e.EventSource.prototype,
        /** @lends OpenSeadragon.World.prototype */
        {
          /**
           * Add the specified item.
           * @param {OpenSeadragon.TiledImage} item - The item to add.
           * @param {Number} [options.index] - Index for the item. If not specified, goes at the top.
           * @fires OpenSeadragon.World.event:add-item
           * @fires OpenSeadragon.World.event:metrics-change
           */
          addItem: function(t, r) {
            if (e.console.assert(t, "[World.addItem] item is required"), e.console.assert(t instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), r = r || {}, r.index !== void 0) {
              var i = Math.max(0, Math.min(this._items.length, r.index));
              this._items.splice(i, 0, t);
            } else
              this._items.push(t);
            this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, t.addHandler("bounds-change", this._delegatedFigureSizes), t.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", {
              item: t
            });
          },
          /**
           * Get the item at the specified index.
           * @param {Number} index - The item's index.
           * @returns {OpenSeadragon.TiledImage} The item at the specified index.
           */
          getItemAt: function(t) {
            return e.console.assert(t !== void 0, "[World.getItemAt] index is required"), this._items[t];
          },
          /**
           * Get the index of the given item or -1 if not present.
           * @param {OpenSeadragon.TiledImage} item - The item.
           * @returns {Number} The index of the item or -1 if not present.
           */
          getIndexOfItem: function(t) {
            return e.console.assert(t, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, t);
          },
          /**
           * @returns {Number} The number of items used.
           */
          getItemCount: function() {
            return this._items.length;
          },
          /**
           * Change the index of a item so that it appears over or under others.
           * @param {OpenSeadragon.TiledImage} item - The item to move.
           * @param {Number} index - The new index.
           * @fires OpenSeadragon.World.event:item-index-change
           */
          setItemIndex: function(t, r) {
            e.console.assert(t, "[World.setItemIndex] item is required"), e.console.assert(r !== void 0, "[World.setItemIndex] index is required");
            var i = this.getIndexOfItem(t);
            if (r >= this._items.length)
              throw new Error("Index bigger than number of layers.");
            r === i || i === -1 || (this._items.splice(i, 1), this._items.splice(r, 0, t), this._needsDraw = !0, this.raiseEvent("item-index-change", {
              item: t,
              previousIndex: i,
              newIndex: r
            }));
          },
          /**
           * Remove an item.
           * @param {OpenSeadragon.TiledImage} item - The item to remove.
           * @fires OpenSeadragon.World.event:remove-item
           * @fires OpenSeadragon.World.event:metrics-change
           */
          removeItem: function(t) {
            e.console.assert(t, "[World.removeItem] item is required");
            var r = e.indexOf(this._items, t);
            r !== -1 && (t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy(), this._items.splice(r, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(t));
          },
          /**
           * Remove all items.
           * @fires OpenSeadragon.World.event:remove-item
           * @fires OpenSeadragon.World.event:metrics-change
           */
          removeAll: function() {
            this.viewer._cancelPendingImages();
            var t, r;
            for (r = 0; r < this._items.length; r++)
              t = this._items[r], t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy();
            var i = this._items;
            for (this._items = [], this._figureSizes(), this._needsDraw = !0, r = 0; r < i.length; r++)
              t = i[r], this._raiseRemoveItem(t);
          },
          /**
           * Clears all tiles and triggers updates for all items.
           */
          resetItems: function() {
            for (var t = 0; t < this._items.length; t++)
              this._items[t].reset();
          },
          /**
           * Updates (i.e. animates bounds of) all items.
           * @function
           * @param viewportChanged Whether the viewport changed, which indicates that
           * all TiledImages need to be updated.
           */
          update: function(t) {
            for (var r = !1, i = 0; i < this._items.length; i++)
              r = this._items[i].update(t) || r;
            return r;
          },
          /**
           * Draws all items.
           */
          draw: function() {
            this.viewer.drawer.draw(this._items), this._needsDraw = !1, this._items.forEach((t) => {
              this._needsDraw = t.setDrawn() || this._needsDraw;
            });
          },
          /**
           * @returns {Boolean} true if any items need updating.
           */
          needsDraw: function() {
            for (var t = 0; t < this._items.length; t++)
              if (this._items[t].needsDraw())
                return !0;
            return this._needsDraw;
          },
          /**
           * @returns {OpenSeadragon.Rect} The smallest rectangle that encloses all items, in viewport coordinates.
           */
          getHomeBounds: function() {
            return this._homeBounds.clone();
          },
          /**
           * To facilitate zoom constraints, we keep track of the pixel density of the
           * densest item in the World (i.e. the item whose content size to viewport size
           * ratio is the highest) and save it as this "content factor".
           * @returns {Number} the number of content units per viewport unit.
           */
          getContentFactor: function() {
            return this._contentFactor;
          },
          /**
           * As a performance optimization, setting this flag to false allows the bounds-change event handler
           * on tiledImages to skip calculations on the world bounds. If a lot of images are going to be positioned in
           * rapid succession, this is a good idea. When finished, setAutoRefigureSizes should be called with true
           * or the system may behave oddly.
           * @param {Boolean} [value] The value to which to set the flag.
           */
          setAutoRefigureSizes: function(t) {
            this._autoRefigureSizes = t, t & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1);
          },
          /**
           * Arranges all of the TiledImages with the specified settings.
           * @param {Object} options - Specifies how to arrange.
           * @param {Boolean} [options.immediately=false] - Whether to animate to the new arrangement.
           * @param {String} [options.layout] - See collectionLayout in {@link OpenSeadragon.Options}.
           * @param {Number} [options.rows] - See collectionRows in {@link OpenSeadragon.Options}.
           * @param {Number} [options.columns] - See collectionColumns in {@link OpenSeadragon.Options}.
           * @param {Number} [options.tileSize] - See collectionTileSize in {@link OpenSeadragon.Options}.
           * @param {Number} [options.tileMargin] - See collectionTileMargin in {@link OpenSeadragon.Options}.
           * @fires OpenSeadragon.World.event:metrics-change
           */
          arrange: function(t) {
            t = t || {};
            var r = t.immediately || !1, i = t.layout || e.DEFAULT_SETTINGS.collectionLayout, n = t.rows || e.DEFAULT_SETTINGS.collectionRows, o = t.columns || e.DEFAULT_SETTINGS.collectionColumns, s = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, a = t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, l = s + a, h;
            !t.rows && o ? h = o : h = Math.ceil(this._items.length / n);
            var d = 0, p = 0, w, y, _, E, P;
            this.setAutoRefigureSizes(!1);
            for (var C = 0; C < this._items.length; C++)
              C && C % h === 0 && (i === "horizontal" ? (p += l, d = 0) : (d += l, p = 0)), w = this._items[C], y = w.getBounds(), y.width > y.height ? _ = s : _ = s * (y.width / y.height), E = _ * (y.height / y.width), P = new e.Point(
                d + (s - _) / 2,
                p + (s - E) / 2
              ), w.setPosition(P, r), w.setWidth(_, r), i === "horizontal" ? d += l : p += l;
            this.setAutoRefigureSizes(!0);
          },
          // private
          _figureSizes: function() {
            var t = this._homeBounds ? this._homeBounds.clone() : null, r = this._contentSize ? this._contentSize.clone() : null, i = this._contentFactor || 0;
            if (!this._items.length)
              this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
            else {
              var n = this._items[0], o = n.getBounds();
              this._contentFactor = n.getContentSize().x / o.width;
              for (var s = n.getClippedBounds().getBoundingBox(), a = s.x, l = s.y, h = s.x + s.width, d = s.y + s.height, p = 1; p < this._items.length; p++)
                n = this._items[p], o = n.getBounds(), this._contentFactor = Math.max(
                  this._contentFactor,
                  n.getContentSize().x / o.width
                ), s = n.getClippedBounds().getBoundingBox(), a = Math.min(a, s.x), l = Math.min(l, s.y), h = Math.max(h, s.x + s.width), d = Math.max(d, s.y + s.height);
              this._homeBounds = new e.Rect(a, l, h - a, d - l), this._contentSize = new e.Point(
                this._homeBounds.width * this._contentFactor,
                this._homeBounds.height * this._contentFactor
              );
            }
            (this._contentFactor !== i || !this._homeBounds.equals(t) || !this._contentSize.equals(r)) && this.raiseEvent("metrics-change", {});
          },
          // private
          _raiseRemoveItem: function(t) {
            this.raiseEvent("remove-item", { item: t });
          }
        }
      );
    }(g);
  }(_e)), _e.exports;
}
var yi = vi();
const de = /* @__PURE__ */ Qe(yi);
var Fe, nt;
function wi() {
  if (nt) return Fe;
  nt = 1;
  var x = Lt(), g = Tt();
  function e(t, r) {
    var i = -1, n = g(t) ? Array(t.length) : [];
    return x(t, function(o, s, a) {
      n[++i] = r(o, s, a);
    }), n;
  }
  return Fe = e, Fe;
}
var Be, st;
function Ti() {
  if (st) return Be;
  st = 1;
  function x(g, e) {
    var t = g.length;
    for (g.sort(e); t--; )
      g[t] = g[t].value;
    return g;
  }
  return Be = x, Be;
}
var Ie, ot;
function xi() {
  if (ot) return Ie;
  ot = 1;
  var x = zt();
  function g(e, t) {
    if (e !== t) {
      var r = e !== void 0, i = e === null, n = e === e, o = x(e), s = t !== void 0, a = t === null, l = t === t, h = x(t);
      if (!a && !h && !o && e > t || o && s && l && !a && !h || i && s && l || !r && l || !n)
        return 1;
      if (!i && !o && !h && e < t || h && r && n && !i && !o || a && r && n || !s && n || !l)
        return -1;
    }
    return 0;
  }
  return Ie = g, Ie;
}
var Me, at;
function _i() {
  if (at) return Me;
  at = 1;
  var x = xi();
  function g(e, t, r) {
    for (var i = -1, n = e.criteria, o = t.criteria, s = n.length, a = r.length; ++i < s; ) {
      var l = x(n[i], o[i]);
      if (l) {
        if (i >= a)
          return l;
        var h = r[i];
        return l * (h == "desc" ? -1 : 1);
      }
    }
    return e.index - t.index;
  }
  return Me = g, Me;
}
var He, lt;
function Ei() {
  if (lt) return He;
  lt = 1;
  var x = kt(), g = Nt(), e = Ut(), t = wi(), r = Ti(), i = Wt(), n = _i(), o = Vt(), s = jt();
  function a(l, h, d) {
    h.length ? h = x(h, function(y) {
      return s(y) ? function(_) {
        return g(_, y.length === 1 ? y[0] : y);
      } : y;
    }) : h = [o];
    var p = -1;
    h = x(h, i(e));
    var w = t(l, function(y, _, E) {
      var P = x(h, function(C) {
        return C(y);
      });
      return { criteria: P, index: ++p, value: y };
    });
    return r(w, function(y, _) {
      return n(y, _, d);
    });
  }
  return He = a, He;
}
var Le, ht;
function Si() {
  if (ht) return Le;
  ht = 1;
  var x = Gt(), g = Tt(), e = qt(), t = Zt();
  function r(i, n, o) {
    if (!t(o))
      return !1;
    var s = typeof n;
    return (s == "number" ? g(o) && e(n, o.length) : s == "string" && n in o) ? x(o[n], i) : !1;
  }
  return Le = r, Le;
}
var ze, ut;
function Pi() {
  if (ut) return ze;
  ut = 1;
  var x = xt(), g = Ei(), e = _t(), t = Si(), r = e(function(i, n) {
    if (i == null)
      return [];
    var o = n.length;
    return o > 1 && t(i, n[0], n[1]) ? n = [] : o > 2 && t(n[0], n[1], n[2]) && (n = [n[0]]), g(i, x(n, 1), []);
  });
  return ze = r, ze;
}
var bi = Pi();
const ct = /* @__PURE__ */ Qe(bi);
var ke, dt;
function Ci() {
  if (dt) return ke;
  dt = 1;
  var x = Xt(), g = xt(), e = Yt();
  function t(r, i, n) {
    var o = r.length;
    if (o < 2)
      return o ? e(r[0]) : [];
    for (var s = -1, a = Array(o); ++s < o; )
      for (var l = r[s], h = -1; ++h < o; )
        h != s && (a[s] = x(a[s] || l, r[h], i, n));
    return e(g(a, 1), i, n);
  }
  return ke = t, ke;
}
var Ne, ft;
function Ri() {
  if (ft) return Ne;
  ft = 1;
  var x = Kt(), g = _t(), e = Ci(), t = Qt(), r = g(function(i) {
    return e(x(i, t));
  });
  return Ne = r, Ne;
}
var Di = Ri();
const pt = /* @__PURE__ */ Qe(Di);
function Ai(x, g) {
  if (!(x instanceof g)) throw new TypeError("Cannot call a class as a function");
}
function Oi(x, g) {
  for (var e = 0; e < g.length; e++) {
    var t = g[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(x, Bi(t.key), t);
  }
}
function Fi(x, g, e) {
  return g && Oi(x.prototype, g), Object.defineProperty(x, "prototype", { writable: !1 }), x;
}
function Bi(x) {
  var g = Ii(x, "string");
  return typeof g == "symbol" ? g : g + "";
}
function Ii(x, g) {
  if (typeof x != "object" || !x) return x;
  var e = x[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(x, g);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(x);
}
var Mi = /* @__PURE__ */ function() {
  function x(g, e) {
    Ai(this, x), this.viewer = g, this.ref = e, this.containerWidth = 0, this.containerHeight = 0, this.imgAspectRatio = 1;
  }
  return Fi(x, [{
    key: "canvas",
    get: function() {
      return this.canvasDiv.firstElementChild;
    }
    /** */
  }, {
    key: "canvasDiv",
    get: function() {
      return this.ref.current;
    }
    /** */
  }, {
    key: "context2d",
    get: function() {
      return this.canvas.getContext("2d");
    }
    /** */
  }, {
    key: "clear",
    value: function() {
      this.context2d.clearRect(0, 0, this.containerWidth, this.containerHeight);
    }
    /**
     * resize - resizes the added Canvas overlay.
     */
  }, {
    key: "resize",
    value: function() {
      this.containerWidth !== this.viewer.container.clientWidth && (this.containerWidth = this.viewer.container.clientWidth, this.canvasDiv.setAttribute("width", this.containerWidth), this.canvas.setAttribute("width", this.containerWidth)), this.containerHeight !== this.viewer.container.clientHeight && (this.containerHeight = this.viewer.container.clientHeight, this.canvasDiv.setAttribute("height", this.containerHeight), this.canvas.setAttribute("height", this.containerHeight)), this.viewportOrigin = new de.Point(0, 0);
      var e = this.viewer.viewport.getBoundsNoRotateWithMargins(!0);
      this.viewportOrigin.x = e.x, this.viewportOrigin.y = e.y * this.imgAspectRatio, this.viewportWidth = e.width, this.viewportHeight = e.height * this.imgAspectRatio;
      var t = this.viewer.world.getItemAt(0);
      t && (this.imgWidth = t.source.dimensions.x, this.imgHeight = t.source.dimensions.y, this.imgAspectRatio = this.imgWidth / this.imgHeight);
    }
    /**
     * canvasUpdate - sets up the dimensions for the canvas update to mimick image
     * 0 dimensions. Then call provided update function.
     * @param {Function} update
     */
  }, {
    key: "canvasUpdate",
    value: function(e) {
      var t = this.viewer.viewport.getZoom(!0), r = this.viewer.world.getItemAt(0);
      if (r) {
        var i = r.viewportToImageZoom(t), n = (this.viewportOrigin.x / this.imgWidth - this.viewportOrigin.x) / this.viewportWidth * this.containerWidth, o = (this.viewportOrigin.y / this.imgHeight - this.viewportOrigin.y) / this.viewportHeight * this.containerHeight;
        this.clearBeforeRedraw && this.clear(), this.context2d.translate(n, o), this.context2d.scale(i, i);
        var s = this.viewer.viewport.getCenter(), a = this.viewer.viewport.getFlip();
        a && (this.context2d.translate(s.x * 2, 0), this.context2d.scale(-1, 1));
        var l = this.viewer.viewport.getRotation();
        l !== 0 && (this.context2d.translate(s.x, s.y), this.context2d.rotate(l * Math.PI / 180), this.context2d.translate(-1 * s.x, -1 * s.y)), e(), this.context2d.setTransform(1, 0, 0, 1, 0, 0);
      }
    }
  }]);
}();
function Ue(x) {
  return ki(x) || zi(x) || Li(x) || Hi();
}
function Hi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Li(x, g) {
  if (x) {
    if (typeof x == "string") return qe(x, g);
    var e = {}.toString.call(x).slice(8, -1);
    return e === "Object" && x.constructor && (e = x.constructor.name), e === "Map" || e === "Set" ? Array.from(x) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? qe(x, g) : void 0;
  }
}
function zi(x) {
  if (typeof Symbol < "u" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x);
}
function ki(x) {
  if (Array.isArray(x)) return qe(x);
}
function qe(x, g) {
  (g == null || g > x.length) && (g = x.length);
  for (var e = 0, t = Array(g); e < g; e++) t[e] = x[e];
  return t;
}
function Ni(x, g) {
  if (!(x instanceof g)) throw new TypeError("Cannot call a class as a function");
}
function Ui(x, g) {
  for (var e = 0; e < g.length; e++) {
    var t = g[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(x, Vi(t.key), t);
  }
}
function Wi(x, g, e) {
  return g && Ui(x.prototype, g), Object.defineProperty(x, "prototype", { writable: !1 }), x;
}
function Vi(x) {
  var g = ji(x, "string");
  return typeof g == "symbol" ? g : g + "";
}
function ji(x, g) {
  if (typeof x != "object" || !x) return x;
  var e = x[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(x, g);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(x);
}
var gt = /* @__PURE__ */ function() {
  function x(g) {
    var e = g.resource, t = g.palette, r = g.zoomRatio, i = g.offset, n = g.selected, o = g.hovered;
    Ni(this, x), this.resource = e, this.palette = t, this.zoomRatio = r, this.offset = i, this.selected = n, this.hovered = o;
  }
  return Wi(x, [{
    key: "toContext",
    value: function(e) {
      this.context = e, this.resource.svgSelector ? this.svgContext() : this.resource.fragmentSelector && this.fragmentContext();
    }
    /** */
  }, {
    key: "svgString",
    get: function() {
      return this.resource.svgSelector.value;
    }
    /** */
  }, {
    key: "svgContext",
    value: function() {
      var e = this, t;
      this.hovered ? t = this.palette.hovered : this.selected ? t = this.palette.selected : t = this.palette.default, t.globalAlpha !== 0 && Ue(this.svgPaths).forEach(function(r) {
        e.context.save(), e.context.translate(e.offset.x, e.offset.y);
        var i = new Path2D(r.attributes.d.nodeValue);
        e.context.strokeStyle = e.color, r.attributes["stroke-dasharray"] && e.context.setLineDash(r.attributes["stroke-dasharray"].nodeValue.split(","));
        var n = {
          fill: "fillStyle",
          stroke: "strokeStyle",
          "stroke-dashoffset": "lineDashOffset",
          "stroke-linecap": "lineCap",
          "stroke-linejoin": "lineJoin",
          "stroke-miterlimit": "miterlimit",
          "stroke-width": "lineWidth"
        };
        Object.keys(n).forEach(function(o) {
          r.attributes[o] && (e.context[n[o]] = r.attributes[o].nodeValue);
        }), e.context.lineWidth /= e.zoomRatio, (e.selected || e.hovered) && (e.context.strokeStyle = t.strokeStyle || t.fillStyle), r.attributes["stroke-opacity"] ? e.context.globalAlpha = t.globalAlpha * r.attributes["stroke-opacity"].nodeValue : e.context.globalAlpha = t.globalAlpha, e.context.stroke(i), r.attributes.fill && r.attributes.fill.nodeValue !== "none" && (r.attributes["fill-opacity"] ? e.context.globalAlpha = t.globalAlpha * r.attributes["fill-opacity"].nodeValue : e.context.globalAlpha = t.globalAlpha, e.context.fill(i)), e.context.restore();
      });
    }
    /** */
  }, {
    key: "fragmentContext",
    value: function() {
      var e = this, t = this.resource.fragmentSelector;
      t[0] += this.offset.x, t[1] += this.offset.y;
      var r;
      if (this.selected ? r = this.palette.selected : this.hovered ? r = this.palette.hovered : r = this.palette.default, this.context.save(), Object.keys(r).forEach(function(o) {
        e.context[o] = r[o];
      }), r.globalAlpha !== 0) {
        if (r.fillStyle) {
          var i;
          (i = this.context).fillRect.apply(i, Ue(t));
        } else {
          var n;
          this.context.lineWidth = 1 / this.zoomRatio, (n = this.context).strokeRect.apply(n, Ue(t));
        }
        this.context.restore();
      }
    }
    /** */
  }, {
    key: "svgPaths",
    get: function() {
      var e = new DOMParser(), t = e.parseFromString(this.svgString, "text/xml");
      return t.getElementsByTagName("path");
    }
  }]);
}();
function mt(x, g) {
  var e = Object.keys(x);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(x);
    g && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(x, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Te(x) {
  for (var g = 1; g < arguments.length; g++) {
    var e = arguments[g] != null ? arguments[g] : {};
    g % 2 ? mt(Object(e), !0).forEach(function(t) {
      Gi(x, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(e)) : mt(Object(e)).forEach(function(t) {
      Object.defineProperty(x, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return x;
}
function Gi(x, g, e) {
  return (g = Ft(g)) in x ? Object.defineProperty(x, g, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : x[g] = e, x;
}
function We(x) {
  return Xi(x) || Zi(x) || Ot(x) || qi();
}
function qi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(x) {
  if (typeof Symbol < "u" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x);
}
function Xi(x) {
  if (Array.isArray(x)) return Ze(x);
}
function Ve(x, g) {
  return Qi(x) || Ki(x, g) || Ot(x, g) || Yi();
}
function Yi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ot(x, g) {
  if (x) {
    if (typeof x == "string") return Ze(x, g);
    var e = {}.toString.call(x).slice(8, -1);
    return e === "Object" && x.constructor && (e = x.constructor.name), e === "Map" || e === "Set" ? Array.from(x) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ze(x, g) : void 0;
  }
}
function Ze(x, g) {
  (g == null || g > x.length) && (g = x.length);
  for (var e = 0, t = Array(g); e < g; e++) t[e] = x[e];
  return t;
}
function Ki(x, g) {
  var e = x == null ? null : typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
  if (e != null) {
    var t, r, i, n, o = [], s = !0, a = !1;
    try {
      if (i = (e = e.call(x)).next, g === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (t = i.call(e)).done) && (o.push(t.value), o.length !== g); s = !0) ;
    } catch (l) {
      a = !0, r = l;
    } finally {
      try {
        if (!s && e.return != null && (n = e.return(), Object(n) !== n)) return;
      } finally {
        if (a) throw r;
      }
    }
    return o;
  }
}
function Qi(x) {
  if (Array.isArray(x)) return x;
}
function Ji(x, g) {
  if (!(x instanceof g)) throw new TypeError("Cannot call a class as a function");
}
function vt(x, g) {
  for (var e = 0; e < g.length; e++) {
    var t = g[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(x, Ft(t.key), t);
  }
}
function $i(x, g, e) {
  return g && vt(x.prototype, g), e && vt(x, e), Object.defineProperty(x, "prototype", { writable: !1 }), x;
}
function Ft(x) {
  var g = er(x, "string");
  return typeof g == "symbol" ? g : g + "";
}
function er(x, g) {
  if (typeof x != "object" || !x) return x;
  var e = x[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(x, g);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(x);
}
function tr(x, g, e) {
  return g = Pe(g), ir(x, Bt() ? Reflect.construct(g, e || [], Pe(x).constructor) : g.apply(x, e));
}
function ir(x, g) {
  if (g && (typeof g == "object" || typeof g == "function")) return g;
  if (g !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rr(x);
}
function rr(x) {
  if (x === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return x;
}
function Bt() {
  try {
    var x = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bt = function() {
    return !!x;
  })();
}
function Pe(x) {
  return Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(g) {
    return g.__proto__ || Object.getPrototypeOf(g);
  }, Pe(x);
}
function nr(x, g) {
  if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
  x.prototype = Object.create(g && g.prototype, { constructor: { value: x, writable: !0, configurable: !0 } }), Object.defineProperty(x, "prototype", { writable: !1 }), g && Xe(x, g);
}
function Xe(x, g) {
  return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, Xe(x, g);
}
var It = /* @__PURE__ */ function(x) {
  function g(e) {
    var t;
    return Ji(this, g), t = tr(this, g, [e]), t.ref = /* @__PURE__ */ ne.createRef(), t.osdCanvasOverlay = null, t.updateCanvas = function() {
    }, t.onUpdateViewport = t.onUpdateViewport.bind(t), t.onCanvasClick = t.onCanvasClick.bind(t), t.onCanvasMouseMove = Pt(t.onCanvasMouseMove.bind(t), 10), t.onCanvasExit = t.onCanvasExit.bind(t), t;
  }
  return nr(g, x), $i(g, [{
    key: "componentDidMount",
    value: function() {
      this.initializeViewer();
    }
    /**
     * When the tileSources change, make sure to close the OSD viewer.
     * When the annotations change, reset the updateCanvas method to make sure
     * they are added.
     * When the viewport state changes, pan or zoom the OSD viewer as appropriate
     */
  }, {
    key: "componentDidUpdate",
    value: function(t) {
      var r = this.props, i = r.drawAnnotations, n = r.drawSearchAnnotations, o = r.annotations, s = r.searchAnnotations, a = r.hoveredAnnotationIds, l = r.selectedAnnotationId, h = r.highlightAllAnnotations, d = r.viewer;
      this.initializeViewer();
      var p = !g.annotationsMatch(o, t.annotations), w = !g.annotationsMatch(s, t.searchAnnotations), y = pt(a, t.hoveredAnnotationIds).length > 0;
      this.osdCanvasOverlay && y && (a.length > 0 ? this.osdCanvasOverlay.canvasDiv.style.cursor = "pointer" : this.osdCanvasOverlay.canvasDiv.style.cursor = "");
      var _ = l !== t.selectedAnnotationId, E = i !== t.drawAnnotations || n !== t.drawSearchAnnotations || h !== t.highlightAllAnnotations;
      (w || p || _ || y || E) && (this.updateCanvas = this.canvasUpdateCallback(), d.forceRedraw());
    }
    /**
     */
  }, {
    key: "componentWillUnmount",
    value: function() {
      var t = this.props.viewer;
      t.removeHandler("canvas-click", this.onCanvasClick), t.removeHandler("canvas-exit", this.onCanvasExit), t.removeHandler("update-viewport", this.onUpdateViewport), t.removeHandler("mouse-move", this.onCanvasMouseMove);
    }
    /** */
  }, {
    key: "onCanvasClick",
    value: function(t) {
      var r = this, i = this.props.canvasWorld, n = t.position, o = t.eventSource.viewport, s = o.pointFromPixel(n), a = i.canvasAtPoint(s);
      if (a) {
        var l = i.canvasToWorldCoordinates(a.id), h = Ve(l, 4);
        h[0], h[1];
        var d = h[2], p = h[3], w = this.annotationsAtPoint(a, s);
        if (w.length > 0 && (t.preventDefaultAction = !0), w.length === 1)
          this.toggleAnnotation(w[0].id);
        else if (w.length > 0) {
          var y = function(C) {
            var M = Math.PI / 180;
            return function(F) {
              for (var L = 0, N = 0; N < 360; N += 1) {
                var V = Math.cos(N * M) * C + s.x, j = Math.sin(N * M) * C + s.y;
                r.isAnnotationAtPoint(F, a, {
                  x: V,
                  y: j
                }) && (L += 1);
              }
              return {
                anno: F,
                score: L
              };
            };
          }, _ = [], E = 1;
          for (_ = ct(w.map(y(E)), "score"); E < Math.max(d, p) && _[0].score === _[1].score; )
            E *= 2, _ = ct(w.map(y(E)), "score");
          this.toggleAnnotation(_[0].anno.id);
        }
      }
    }
    /** */
  }, {
    key: "onCanvasMouseMove",
    value: function(t) {
      var r = this.props, i = r.annotations, n = r.canvasWorld, o = r.hoverAnnotation, s = r.hoveredAnnotationIds, a = r.searchAnnotations, l = r.viewer, h = r.windowId;
      if (!(i.length === 0 && a.length === 0)) {
        var d = t.position, p = l.viewport.pointFromPixel(d), w = n.canvasAtPoint(p);
        if (!w) {
          o(h, []);
          return;
        }
        var y = this.annotationsAtPoint(w, p);
        pt(s, y.map(function(_) {
          return _.id;
        })).length > 0 && o(h, y.map(function(_) {
          return _.id;
        }));
      }
    }
    /** If the cursor leaves the canvas, wipe out highlights */
  }, {
    key: "onCanvasExit",
    value: function(t) {
      var r = this.props, i = r.hoverAnnotation, n = r.windowId;
      this.onCanvasMouseMove.cancel(), i(n, []);
    }
    /**
     * onUpdateViewport - fires during OpenSeadragon render method.
     */
  }, {
    key: "onUpdateViewport",
    value: function(t) {
      this.updateCanvas();
    }
    /** @private */
  }, {
    key: "initializeViewer",
    value: function() {
      var t = this.props.viewer;
      t && (this.osdCanvasOverlay || (this.osdCanvasOverlay = new Mi(t, this.ref), t.addHandler("canvas-click", this.onCanvasClick), t.addHandler("canvas-exit", this.onCanvasExit), t.addHandler("update-viewport", this.onUpdateViewport), t.addHandler("mouse-move", this.onCanvasMouseMove), this.updateCanvas = this.canvasUpdateCallback()));
    }
    /** */
  }, {
    key: "canvasUpdateCallback",
    value: function() {
      var t = this;
      return function() {
        t.osdCanvasOverlay.clear(), t.osdCanvasOverlay.resize(), t.osdCanvasOverlay.canvasUpdate(t.renderAnnotations.bind(t));
      };
    }
    /** @private */
  }, {
    key: "isAnnotationAtPoint",
    value: function(t, r, i) {
      var n = this.props.canvasWorld, o = n.canvasToWorldCoordinates(r.id), s = Ve(o, 2), a = s[0], l = s[1], h = i.x - a, d = i.y - l;
      if (t.svgSelector) {
        var p = this.osdCanvasOverlay.context2d, w = new gt({
          resource: t
        }), y = w.svgPaths;
        return We(y).some(function(F) {
          return p.isPointInPath(new Path2D(F.attributes.d.nodeValue), h, d);
        });
      }
      if (t.fragmentSelector) {
        var _ = Ve(t.fragmentSelector, 4), E = _[0], P = _[1], C = _[2], M = _[3];
        return E <= h && h <= E + C && P <= d && d <= P + M;
      }
      return !1;
    }
    /** @private */
  }, {
    key: "annotationsAtPoint",
    value: function(t, r) {
      var i = this, n = this.props, o = n.annotations, s = n.searchAnnotations, a = [].concat(We(o), We(s)), l = Et(a.map(function(h) {
        return h.resources;
      })).filter(function(h) {
        return t.id !== h.targetId ? !1 : i.isAnnotationAtPoint(h, t, r);
      });
      return l;
    }
    /** */
  }, {
    key: "toggleAnnotation",
    value: function(t) {
      var r = this.props, i = r.selectedAnnotationId, n = r.selectAnnotation, o = r.deselectAnnotation, s = r.windowId;
      i === t ? o(s, t) : n(s, t);
    }
    /**
     * annotationsToContext - converts anontations to a canvas context
     */
  }, {
    key: "annotationsToContext",
    value: function(t, r) {
      var i = this.props, n = i.highlightAllAnnotations, o = i.hoveredAnnotationIds, s = i.selectedAnnotationId, a = i.canvasWorld, l = i.viewer, h = this.osdCanvasOverlay.context2d, d = l.viewport.getZoom(!0) / l.viewport.getMaxZoom();
      t.forEach(function(p) {
        p.resources.forEach(function(w) {
          if (a.canvasIds.includes(w.targetId)) {
            var y = a.offsetByCanvas(w.targetId), _ = new gt({
              hovered: o.includes(w.id),
              offset: y,
              palette: Te(Te({}, r), {}, {
                default: Te(Te({}, r.default), !n && r.hidden)
              }),
              resource: w,
              selected: s === w.id,
              zoomRatio: d
            });
            _.toContext(h);
          }
        });
      });
    }
    /** */
  }, {
    key: "renderAnnotations",
    value: function() {
      var t = this.props, r = t.annotations, i = t.drawAnnotations, n = t.drawSearchAnnotations, o = t.searchAnnotations, s = t.palette;
      n && this.annotationsToContext(o, s.search), i && this.annotationsToContext(r, s.annotations);
    }
    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function() {
      var t = this.props.viewer;
      return t ? /* @__PURE__ */ Jt.createPortal(/* @__PURE__ */ ne.createElement("div", {
        ref: this.ref,
        style: {
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%"
        }
      }, /* @__PURE__ */ ne.createElement("canvas", null)), t.canvas) : /* @__PURE__ */ ne.createElement(ne.Fragment, null);
    }
  }], [{
    key: "annotationsMatch",
    value: (
      /**
       * annotationsMatch - compares previous annotations to current to determine
       * whether to add a new updateCanvas method to draw annotations
       * @param  {Array} currentAnnotations
       * @param  {Array} prevAnnotations
       * @return {Boolean}
       */
      function(t, r) {
        return !t && !r ? !0 : t && !r || !t && r ? !1 : t.length === 0 && r.length === 0 ? !0 : t.length !== r.length ? !1 : t.every(function(i, n) {
          var o = i.resources.map(function(a) {
            return a.id;
          }), s = r[n].resources.map(function(a) {
            return a.id;
          });
          return o.length === 0 && s.length === 0 ? !0 : o.length !== s.length ? !1 : !!(i.id === r[n].id && Ge(o, s));
        });
      }
    )
  }]);
}(St.Component);
It.defaultProps = {
  annotations: [],
  deselectAnnotation: function() {
  },
  drawAnnotations: !0,
  drawSearchAnnotations: !0,
  highlightAllAnnotations: !1,
  hoverAnnotation: function() {
  },
  hoveredAnnotationIds: [],
  palette: {},
  searchAnnotations: [],
  selectAnnotation: function() {
  },
  selectedAnnotationId: void 0,
  viewer: null
};
var sr = function(g, e) {
  var t = e.windowId;
  return {
    annotations: si(g, {
      windowId: t
    }),
    canvasWorld: At(g, {
      windowId: t
    }),
    drawAnnotations: Ee(g).window.forceDrawAnnotations || Se(g, {
      content: "annotations",
      windowId: t
    }).length > 0,
    drawSearchAnnotations: Ee(g).window.forceDrawAnnotations || Se(g, {
      content: "search",
      windowId: t
    }).length > 0,
    highlightAllAnnotations: it(g, {
      windowId: t
    }).highlightAllAnnotations,
    hoveredAnnotationIds: it(g, {
      windowId: t
    }).hoveredAnnotationIds,
    palette: ni(g).palette,
    searchAnnotations: ri(g, {
      windowId: t
    }),
    selectedAnnotationId: ii(g, {
      windowId: t
    })
  };
}, or = {
  deselectAnnotation: ti,
  hoverAnnotation: ei,
  selectAnnotation: $t
}, ar = bt(Dt(), Rt(sr, or), Ct("AnnotationsOverlay"));
const lr = ar(It);
var hr = {
  /** */
  get: function(g) {
    return this.refs[g];
  },
  refs: {},
  /** */
  set: function(g, e) {
    this.refs[g] = e;
  }
};
function yt(x, g, e) {
  if (Je()) return Reflect.construct.apply(null, arguments);
  var t = [null];
  t.push.apply(t, g);
  var r = new (x.bind.apply(x, t))();
  return r;
}
function je(x) {
  return fr(x) || dr(x) || cr(x) || ur();
}
function ur() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cr(x, g) {
  if (x) {
    if (typeof x == "string") return Ye(x, g);
    var e = {}.toString.call(x).slice(8, -1);
    return e === "Object" && x.constructor && (e = x.constructor.name), e === "Map" || e === "Set" ? Array.from(x) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ye(x, g) : void 0;
  }
}
function dr(x) {
  if (typeof Symbol < "u" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x);
}
function fr(x) {
  if (Array.isArray(x)) return Ye(x);
}
function Ye(x, g) {
  (g == null || g > x.length) && (g = x.length);
  for (var e = 0, t = Array(g); e < g; e++) t[e] = x[e];
  return t;
}
function wt(x, g) {
  var e = Object.keys(x);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(x);
    g && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(x, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function xe(x) {
  for (var g = 1; g < arguments.length; g++) {
    var e = arguments[g] != null ? arguments[g] : {};
    g % 2 ? wt(Object(e), !0).forEach(function(t) {
      pr(x, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(e)) : wt(Object(e)).forEach(function(t) {
      Object.defineProperty(x, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return x;
}
function pr(x, g, e) {
  return (g = Mt(g)) in x ? Object.defineProperty(x, g, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : x[g] = e, x;
}
function gr(x, g) {
  if (!(x instanceof g)) throw new TypeError("Cannot call a class as a function");
}
function mr(x, g) {
  for (var e = 0; e < g.length; e++) {
    var t = g[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(x, Mt(t.key), t);
  }
}
function vr(x, g, e) {
  return g && mr(x.prototype, g), Object.defineProperty(x, "prototype", { writable: !1 }), x;
}
function Mt(x) {
  var g = yr(x, "string");
  return typeof g == "symbol" ? g : g + "";
}
function yr(x, g) {
  if (typeof x != "object" || !x) return x;
  var e = x[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(x, g);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(x);
}
function wr(x, g, e) {
  return g = be(g), Tr(x, Je() ? Reflect.construct(g, e || [], be(x).constructor) : g.apply(x, e));
}
function Tr(x, g) {
  if (g && (typeof g == "object" || typeof g == "function")) return g;
  if (g !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return xr(x);
}
function xr(x) {
  if (x === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return x;
}
function Je() {
  try {
    var x = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Je = function() {
    return !!x;
  })();
}
function be(x) {
  return be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(g) {
    return g.__proto__ || Object.getPrototypeOf(g);
  }, be(x);
}
function _r(x, g) {
  if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
  x.prototype = Object.create(g && g.prototype, { constructor: { value: x, writable: !0, configurable: !0 } }), Object.defineProperty(x, "prototype", { writable: !1 }), g && Ke(x, g);
}
function Ke(x, g) {
  return Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, Ke(x, g);
}
var Ht = /* @__PURE__ */ function(x) {
  function g(e) {
    var t;
    return gr(this, g), t = wr(this, g, [e]), t.state = {
      viewer: void 0
    }, t.ref = /* @__PURE__ */ ne.createRef(), t.apiRef = /* @__PURE__ */ ne.createRef(), hr.set(e.windowId, t.apiRef), t.onCanvasMouseMove = Pt(t.onCanvasMouseMove.bind(t), 10), t.onViewportChange = t.onViewportChange.bind(t), t.zoomToWorld = t.zoomToWorld.bind(t), t;
  }
  return _r(g, x), vr(g, [{
    key: "componentDidMount",
    value: function() {
      var t = this.props, r = t.osdConfig, i = t.t, n = t.windowId;
      if (this.ref.current) {
        var o = new de(xe({
          id: this.ref.current.id
        }, r)), s = o.canvas && o.canvas.firstElementChild;
        s && (s.setAttribute("role", "img"), s.setAttribute("aria-label", i("digitizedView")), s.setAttribute("aria-describedby", "".concat(n, "-osd"))), this.apiRef.current = o, this.setState({
          viewer: o
        }), o.addHandler("animation-finish", this.onViewportChange), o.innerTracker && (o.innerTracker.moveHandler = this.onCanvasMouseMove);
      }
    }
    /**
     * When the tileSources change, make sure to close the OSD viewer.
     * When the annotations change, reset the updateCanvas method to make sure
     * they are added.
     * When the viewport state changes, pan or zoom the OSD viewer as appropriate
     */
  }, {
    key: "componentDidUpdate",
    value: function(t, r) {
      var i = this.props, n = i.viewerConfig, o = i.canvasWorld, s = this.state.viewer;
      if (this.apiRef.current = s, r.viewer === void 0) {
        n && (n.zoom = n.zoom || s.viewport.imageToViewportZoom(1), s.viewport.panTo(n, !0), s.viewport.zoomTo(n.zoom, n, !0), n.degrees !== void 0 && s.viewport.setRotation(n.degrees), n.flip !== void 0 && s.viewport.setFlip(n.flip)), this.addAllImageSources(!n);
        return;
      }
      if (!this.infoResponsesMatch(t.infoResponses) || !this.nonTiledImagedMatch(t.nonTiledImages)) {
        s.close();
        var a = !Ge(o.canvasIds, t.canvasWorld.canvasIds);
        a && s.preserveViewport ? this.addAllImageSources(!1) : this.addAllImageSources(a || !n);
      } else if (!Ge(o.layers, t.canvasWorld.layers))
        this.refreshTileProperties();
      else if (n && n !== t.viewerConfig) {
        var l = s.viewport;
        (n.x !== l.centerSpringX.target.value || n.y !== l.centerSpringY.target.value) && l.panTo(n, !1), n.zoom !== l.zoomSpring.target.value && l.zoomTo(n.zoom, n, !1), n.rotation !== l.getRotation() && l.setRotation(n.rotation), n.flip !== l.getFlip() && l.setFlip(n.flip);
      }
    }
    /**
     */
  }, {
    key: "componentWillUnmount",
    value: function() {
      var t = this.state.viewer;
      t.innerTracker && t.innerTracker.moveHandler === this.onCanvasMouseMove && (t.innerTracker.moveHandler = null), t.removeAllHandlers(), this.apiRef.current = void 0;
    }
    /** Shim to provide a mouse-move event coming from the viewer */
  }, {
    key: "onCanvasMouseMove",
    value: function(t) {
      var r = this.state.viewer;
      r.raiseEvent("mouse-move", t);
    }
    /**
     * Forward OSD state to redux
     */
  }, {
    key: "onViewportChange",
    value: function(t) {
      var r = this.props, i = r.updateViewport, n = r.windowId, o = t.eventSource.viewport;
      i(n, {
        flip: o.getFlip(),
        rotation: o.getRotation(),
        x: Math.round(o.centerSpringX.target.value),
        y: Math.round(o.centerSpringY.target.value),
        zoom: o.zoomSpring.target.value
      });
    }
    /** */
  }, {
    key: "addAllImageSources",
    value: function() {
      var t = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, i = this.props, n = i.nonTiledImages, o = i.infoResponses;
      Promise.all(o.map(function(s) {
        return t.addTileSource(s);
      }), n.map(function(s) {
        return t.addNonTiledImage(s);
      })).then(function() {
        (o[0] || n[0]) && (r && t.zoomToWorld(), t.refreshTileProperties());
      });
    }
    /** */
  }, {
    key: "addNonTiledImage",
    value: function(t) {
      var r = this.props.canvasWorld, i = this.state.viewer, n = t.getProperty("type"), o = t.getProperty("format") || "";
      return n === "Image" || n === "dctypes:Image" || o.startsWith("image/") ? new Promise(function(s, a) {
        i || a(), i.addSimpleImage({
          error: function(h) {
            return a(h);
          },
          fitBounds: yt(de.Rect, je(r.contentResourceToWorldCoordinates(t))),
          index: r.layerIndexOfImageResource(t),
          opacity: r.layerOpacityOfImageResource(t),
          success: function(h) {
            return s(h);
          },
          url: t.id
        });
      }) : Promise.resolve();
    }
    /**
     */
  }, {
    key: "addTileSource",
    value: function(t) {
      var r = this.props.canvasWorld, i = this.state.viewer;
      return new Promise(function(n, o) {
        i || o();
        var s = xe({}, t.json), a = r.contentResource(t.id);
        a && i.addTiledImage({
          error: function(h) {
            return o(h);
          },
          fitBounds: yt(de.Rect, je(r.contentResourceToWorldCoordinates(a))),
          index: r.layerIndexOfImageResource(a),
          opacity: r.layerOpacityOfImageResource(a),
          success: function(h) {
            return n(h);
          },
          tileSource: s
        });
      });
    }
    /** */
  }, {
    key: "refreshTileProperties",
    value: function() {
      for (var t = this.props.canvasWorld, r = this.state.viewer.world, i = [], n = 0; n < r.getItemCount(); n += 1)
        i.push(r.getItemAt(n));
      i.forEach(function(o, s) {
        var a = t.contentResource(o.source["@id"] || o.source.id);
        if (a) {
          var l = t.layerIndexOfImageResource(a);
          s !== l && r.setItemIndex(o, l), o.setOpacity(t.layerOpacityOfImageResource(a));
        }
      });
    }
    /**
     */
  }, {
    key: "fitBounds",
    value: function(t, r, i, n) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = this.state.viewer;
      s.viewport.fitBounds(new de.Rect(t, r, i, n), o);
    }
    /**
     * infoResponsesMatch - compares previous tileSources to current to determine
     * whether a refresh of the OSD viewer is needed.
     * @param  {Array} prevTileSources
     * @return {Boolean}
     */
  }, {
    key: "infoResponsesMatch",
    value: function(t) {
      var r = this.props.infoResponses;
      return r.length === 0 && t.length === 0 ? !0 : r.length !== t.length ? !1 : r.every(function(i, n) {
        return !t[n] || !i.json || !t[n].json || i.tokenServiceId !== t[n].tokenServiceId ? !1 : !!(i.json["@id"] && i.json["@id"] === t[n].json["@id"] || i.json.id && i.json.id === t[n].json.id);
      });
    }
    /**
     * nonTiledImagedMatch - compares previous images to current to determin
     * whether a refresh of the OSD viewer is needed
     */
  }, {
    key: "nonTiledImagedMatch",
    value: function(t) {
      var r = this.props.nonTiledImages;
      return r.length === 0 && t.length === 0 ? !0 : r.some(function(i, n) {
        return t[n] ? i.id === t[n].id : !1;
      });
    }
    /**
     * zoomToWorld - zooms the viewer to the extent of the canvas world
     */
  }, {
    key: "zoomToWorld",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = this.props.canvasWorld;
      this.fitBounds.apply(this, je(r.worldBounds()).concat([t]));
    }
    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function() {
      var t = this, r = this.props, i = r.children, n = r.classes, o = r.label, s = r.t, a = r.windowId, l = r.drawAnnotations, h = this.state.viewer, d = ne.Children.map(i, function(p) {
        return /* @__PURE__ */ ne.cloneElement(p, {
          zoomToWorld: t.zoomToWorld
        });
      });
      return /* @__PURE__ */ ne.createElement(ne.Fragment, null, /* @__PURE__ */ ne.createElement("section", {
        className: oi(ai("osd-container"), n.osdContainer),
        id: "".concat(a, "-osd"),
        ref: this.ref,
        "aria-label": s("item", {
          label: o
        }),
        "aria-live": "polite"
      }, l && /* @__PURE__ */ ne.createElement(lr, {
        viewer: h,
        windowId: a
      }), d, /* @__PURE__ */ ne.createElement(li, Object.assign({
        viewer: h
      }, xe(xe({}, this.props), {}, {
        children: null
      })))));
    }
  }]);
}(St.Component);
Ht.defaultProps = {
  children: null,
  drawAnnotations: !1,
  infoResponses: [],
  label: null,
  nonTiledImages: [],
  osdConfig: {},
  viewerConfig: null
};
var Er = function(g, e) {
  var t = e.windowId, r = At(g, {
    windowId: t
  }), i = ci(g), n = Et(r.canvases.map(function(o) {
    return o.imageServiceIds;
  }));
  return {
    canvasWorld: r,
    drawAnnotations: Ee(g).window.forceDrawAnnotations || Se(g, {
      content: "annotations",
      windowId: t
    }).length > 0 || Se(g, {
      content: "search",
      windowId: t
    }).length > 0,
    infoResponses: n.map(function(o) {
      return i[o];
    }).filter(function(o) {
      return o !== void 0 && o.isFetching === !1 && o.error === void 0;
    }),
    label: pi(g, {
      canvasId: (gi(g, {
        windowId: t
      }) || {}).id,
      windowId: t
    }),
    nonTiledImages: fi(g, {
      windowId: t
    }),
    osdConfig: Ee(g).osdConfig,
    viewerConfig: di(g, {
      windowId: t
    })
  };
}, Sr = {
  updateViewport: hi
}, Pr = {
  osdContainer: {
    flex: 1,
    position: "relative"
  }
}, br = bt(ui(Pr), Dt(), Rt(Er, Sr), Ct("OpenSeadragonViewer"));
const Or = br(Ht);
export {
  Or as default
};
//# sourceMappingURL=OpenSeadragonViewer.js.map
