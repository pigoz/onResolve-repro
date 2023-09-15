console.log("preloadind plugin.ts...");

Bun.plugin({
  name: "foo.ts",
  setup(build) {
    build.onResolve({ filter: /.+/ }, (args) => {
      console.log("onResolve", args);
    });
    build.onLoad({ filter: /foo.ts/ }, (args) => {
      console.log("onLoad", args);
      return { exports: { foo: 2 }, loader: "object" };
    });
  },
});
