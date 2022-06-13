const app = require('./app');
const env = require('./config/envConfig.js');
const { Server } = require('socket.io');
const WebSocketServer = Server;
const http = require('http');

// Socket
const server = http.createServer(app);
const io = new WebSocketServer(server);

io.on('connection', () => {
    console.log('User connected');
})

// Port
const port = env.PORT || 5000;

// Start Server
server.listen({ port: process.env.PORT, host: '0.0.0.0' }, () => {
     console.log(`Server is working on http://localhost:${process.env.PORT}`)
});