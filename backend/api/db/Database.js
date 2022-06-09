const mongoose = require('mongoose');
const env = require('../config/envConfig')

const connectDatabase = () => {
    mongoose.connect(env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`MongoDb is connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase;