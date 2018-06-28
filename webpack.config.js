var path = require('path');

module.exports = {
  entry: {
    app: [ "./node_modules/core-js/client/shim.min.js",
      "./node_modules/zone.js/dist/zone.js",
      "./node_modules/reflect-metadata/Reflect.js",
      "./Startup.js"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  }
};
