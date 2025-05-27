import { _ as i, a as o, p as c, I as u } from "./WorkspaceArea.js";
var h = function(n, s) {
  return i(void 0, void 0, void 0, function() {
    var a, r;
    return o(this, function(e) {
      switch (e.label) {
        case 0:
          return a = c(n), s !== u.STANDARD ? [3, 2] : [4, import(
            /* webpackChunkName: "blueprint-icons-16px-paths" */
            "./WorkspaceArea.js"
          ).then((t) => t.b)];
        case 1:
          return r = e.sent(), [3, 4];
        case 2:
          return [4, import(
            /* webpackChunkName: "blueprint-icons-20px-paths" */
            "./WorkspaceArea.js"
          ).then((t) => t.c)];
        case 3:
          r = e.sent(), e.label = 4;
        case 4:
          return [2, r[a]];
      }
    });
  });
};
export {
  h as splitPathsBySizeLoader
};
//# sourceMappingURL=splitPathsBySizeLoader.js.map
