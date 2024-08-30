const mongoose = require('mongoose');
let db = null;
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000, 
    family: 4,
    directConnection:true
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const connectDb = async () => {
    try {
        db = await mongoose.connect('mongodb://root:secret@db:27017/ecommerce?authSource=admin', option)
        console.log('connected to Database');
    }
    catch(err) {
        if(!db) {
            await sleep(5000)
            connectDb()
        }
        console.log(err)
    }
}

module.exports = connectDb;
