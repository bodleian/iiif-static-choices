import { n as e } from "./chunk.js";
import { i as t, n, s as r } from "./tslib.es6.js";
import { n as i, r as a, s as o, t as s } from "./iconTypes.js";
//#region node_modules/@blueprintjs/icons/lib/esm/paths-loaders/splitPathsBySizeLoader.js
var c;
//#endregion
e((() => {
	r(), a(), i(), c = function(e, r) {
		return n(void 0, void 0, void 0, function() {
			var n, i;
			return t(this, function(t) {
				switch (t.label) {
					case 0: return n = o(e), r === s.STANDARD ? [4, import(
						/* webpackChunkName: "blueprint-icons-16px-paths" */
						"./paths.js"
).then((e) => (e.t(), e.n))] : [3, 2];
					case 1: return i = t.sent(), [3, 4];
					case 2: return [4, import(
						/* webpackChunkName: "blueprint-icons-20px-paths" */
						"./paths2.js"
).then((e) => (e.t(), e.n))];
					case 3: i = t.sent(), t.label = 4;
					case 4: return [2, i[n]];
				}
			});
		});
	};
}))();
export { c as splitPathsBySizeLoader };

//# sourceMappingURL=splitPathsBySizeLoader.js.map