const { createServer } = require('http');
const next = require('next');
const port = process.env.PORT || 80;

// Create the next application and tells it to use the routing stuff.
const app = next({
    // dev flag that specifies if we run in production / development mode
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

// Run the server to listen on local host
const ipAddress = "127.0.0.1"

// Runs on any valid IP Address available on the machine
//const ipAddress = "0.0.0.0"
app.prepare().then(() => {
    createServer(handler).listen(port, ipAddress, (err) => {
        if (err) throw err;
        console.log('Ready on '+ ipAddress +":" + port);
    });
});
