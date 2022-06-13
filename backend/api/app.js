const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./db/Database');
const productRoute = require('./routes/product');

// Connect to DB
connectDatabase();

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use("/api/products", productRoute);

module.exports = app;