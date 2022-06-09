const express = require('express');
const app = express();
const cors = require('cors');
const productRoute = require('./routes/product');

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

module.exports = app;