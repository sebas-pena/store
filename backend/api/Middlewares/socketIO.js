const express = require('express');
const app = express();
const http = require("http");
const socketUtils = require("../connection/Socket");
const server = http.createServer(app);
const io = socketUtils.sio(server);
socketUtils.connection(io);

const socketIOMiddleware = function (req, res, next) {
    req.io = io;
    next();
}

module.exports = socketIOMiddleware;