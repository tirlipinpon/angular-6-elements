const path = require('path');

module.exports = {
  entry: {
    Startup: [
      './dist/elementsApp/runtime.js',
      './dist/elementsApp/polyfills.js',
      // './dist/elementsApp/scripts.js',
      './dist/elementsApp/main.js',
    ]
  },
  output: {
    path: path.join(__dirname, "elements"),
    publicPath: "/elements//",
    filename: "jsa-counter.js"
  }
};
