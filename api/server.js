const app = require('./app');
const dotevn = require('dotenv');
const connectDatabase = require('./db/Database');
dotevn.config();

// Config
dotevn.config({
    path: './config/.env'
});

// Connect to DB
connectDatabase();

// Create Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});