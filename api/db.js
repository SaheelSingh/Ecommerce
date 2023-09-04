const mongoose = require('mongoose');
const connectDb = () => {
    try {
        mongoose.connect('mongodb+srv://ecommerce2:saheel@cluster0.2pfvlib.mongodb.net/?retryWrites=true&w=majority', {
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