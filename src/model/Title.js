const {Schema, model} = require("mongoose");
const userSchema = new Schema({
    title: {
        type: "String",
        required: true,
        minlength: 10,
        maxlength: 40
    },
    description: {
        type: "String",
        required: true,
        minlength: 20,
        maxlength: 80
    },
    author: {
        type: "String",
        required: true,
        minlength: 5,
        maxlength: 20
    },
},{timestamps: true})

const userModel = model ("titles", userSchema)

module.exports = userModel;