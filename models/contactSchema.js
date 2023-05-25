const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name : String,
    email: {type: String, required: true},
    age: Number,
    address: String
})

const Contact = mongoose.model("Contact", contactSchema )
module.exports = Contact