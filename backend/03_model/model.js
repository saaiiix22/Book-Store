const mongoose = require("mongoose")
const { accSchema, bookSchema, orderSchema } = require("../02_Schema/schema")

const accModel = mongoose.model("accounts",accSchema)
const bookModel = mongoose.model("books", bookSchema)
const orderModel = mongoose.model("orders", orderSchema)

module.exports = {accModel,bookModel,orderModel}