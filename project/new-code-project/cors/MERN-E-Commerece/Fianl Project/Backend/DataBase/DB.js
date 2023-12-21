 const colors = require('colors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const DataBase = async()=>{
try {
    await mongoose.connect("mongodb+srv://azaan:azaan@cluster0.deanbuu.mongodb.net/ecommerce")
        console.log(`DataBase is Connected to Server on Port ${process.env.PORT}`.bgGreen.black);
} catch (error) {
    console.log({
        message: "DataBase is not connected",
        error : error
    });
}
}
module.exports = DataBase