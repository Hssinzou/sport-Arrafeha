//imporatation de mongoose 
const mongoose = require("mongoose");
//importation of mongoose unique validator
const uniqueValidator = require("mongoose-unique-validator");
// create match schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type : String , unique : true} , 
    pwd: {type : String },
    tell : String , 
    role : String , 
    avatar : String , 
});
//affect model name to schema
const user = mongoose.model("User" , userSchema)
//affect model 
userSchema.plugin(uniqueValidator);
//export match
module.exports=user;
