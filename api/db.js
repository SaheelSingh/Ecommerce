const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connected to Database');
    }
    catch(err) {
        console.log('failed to connect')
    }
}

module.exports = connectDb;