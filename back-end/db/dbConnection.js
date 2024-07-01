const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/AuthDataBase');
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error(error);
    }

}

module.exports = connectDB;