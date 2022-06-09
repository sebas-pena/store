const app = require('./app');
const env = require('./config/envConfig.js');
const connectDatabase = require('./db/Database');

// Connect to DB
connectDatabase();

// Port
const port = env.PORT || 5000;

// Create Server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});