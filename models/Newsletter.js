const mongoose = require("mongoose")

const NewsletterSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email Address must Required"],
        unique:true
    }
})

const Newsletter = new mongoose.model("Newsletter",NewsletterSchema)
module.exports = Newsletter 