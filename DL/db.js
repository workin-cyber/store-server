// מטרת קובץ זה :
// התחברות לשרת MONGO מרוחק - atlas / או לשרת מקומי

// import mongoose from 'mongoose';
const mongoose =require('mongoose');

const MONGO_URL = 'mongodb+srv://Admin:Admin123@cluster0.zyg0zzq.mongodb.net/test1?retryWrites=true&w=majority'

exports.connect = async ()=> {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true },
            (err) => {
                if (err) { throw err }

                console.log("Connection Success, State:" ,mongoose.connection.readyState);
            })
    }
    catch (e) {
        console.log('error mongoose: ', e);
    }
}

// module.exports = {connect};

