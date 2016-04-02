var proxyMiddleware = require('http-proxy-middleware');

var proxy = proxyMiddleware('/rest', {target: 'http://localhost:8081'});
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
  server: {
    watchOptions: {
        ignored: "node_modules"
    },
    middleware: [
      proxy
    ]
  }
};