const koa = require('koa');
const serveStatic = require('koa-static');

// Initialize KOA
const app = new koa();

// Serve static files
app.use(serveStatic('.'));

// KOA server listen
app.listen(4000);

console.log('koa server listening in port 4000');