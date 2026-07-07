import { n as e } from "./chunk.js";
import { i as t, n, s as r } from "./tslib.es6.js";
//#region node_modules/@blueprintjs/icons/lib/esm/paths-loaders/allPathsLoader.js
var i;
//#endregion
e((() => {
	r(), i = function(e, r) {
		return n(void 0, void 0, void 0, function() {
			var n;
			return t(this, function(t) {
				switch (t.label) {
					case 0: return [4, import(
						/* webpackChunkName: "blueprint-icons-all-paths" */
						"./allPaths.js"
)];
					case 1: return n = t.sent().getIconPaths, [2, n(e, r)];
				}
			});
		});
	};
}))();
export { i as allPathsLoader };

//# sourceMappingURL=allPathsLoader.js.map