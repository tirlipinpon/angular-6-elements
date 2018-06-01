const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/elementsApp/runtime.js',
    './dist/elementsApp/polyfills.js',
    // './dist/elementsApp/scripts.js',
    './dist/elementsApp/main.js',
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/jsa-counter.js', function(err) {
    if (err) throw err
    console.log('done');
  });
  await fs.copyFile('./dist/elementsApp/styles.css', 'elements/styles.css');
  console.log('build ok');

})();
