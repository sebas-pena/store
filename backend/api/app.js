const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./db/Database');
const productRoute = require('./routes/product');
const http = require("http");

// Connect to DB
connectDatabase();

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Socket
const socketUtils = require("./connection/Socket");
const server = http.createServer(app);
const io = socketUtils.sio(server);
socketUtils.connection(io);

// Middleware
const socketIO = require('./Middlewares/socketIO');

// Routes
app.use("/api/products", productRoute);
app.use("/api/v1/hello", socketIO, (req, res) => {
    req.io.emit("message", `Hello, ${req.originalUrl}`);
    res.send("hello world!");
});

module.exports = app;