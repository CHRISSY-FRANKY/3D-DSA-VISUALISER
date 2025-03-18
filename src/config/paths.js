const path = require("path"); // import path module to make life easier

const srcDir = path.join(__dirname, '..'); // path to src/

const paths = // central hub
{
    src: srcDir,  // main directories
    root: path.join(srcDir, '..'),
    nodeModules: path.join(srcDir, '../node_modules'),

    indexHTML: path.join(srcDir, 'index.html'), // main files
    server: path.join(srcDir, 'server.js'),

    routes: path.join(srcDir, 'routes'), // routes directory

    libs: path.join(srcDir, '../node_modules') // libraries directory
};

module.exports = paths;