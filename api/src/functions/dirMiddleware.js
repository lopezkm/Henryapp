var fs = require("fs");
const middleware = {};
middleware.dir = __dirname.substring(0, __dirname.length - 13);

module.exports = middleware;
