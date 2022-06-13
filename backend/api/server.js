const app = require('./app');
const http = require("http");
const env = require('./config/envConfig.js');

// Port
const port = env.PORT || 5000;

// Serve Http
const server = http.createServer(app);

// Start Server
server.listen({ port: process.env.PORT, host: '0.0.0.0' }, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});