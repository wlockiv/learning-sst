/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverBuildTarget: "node-cjs",
  server: undefined,
  serverDependenciesToBundle: [
    "@test-sst-app/services"
  ]
  // appDirectory: "app",
};
