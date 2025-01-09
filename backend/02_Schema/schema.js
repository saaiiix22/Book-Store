const mongoose = require("mongoose")

const accSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})
const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    rating:Number,
    summary:String,
    imgUrl:String
})

const orderSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    rating:Number,
    summary:String,
    imgUrl:String,
    buyerId:String
})

module.exports = {accSchema,bookSchema,orderSchema}