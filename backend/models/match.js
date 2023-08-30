//imporatation de mongoose 
const mongoose = require("mongoose");
// create match schema
const matchSchema = mongoose.Schema({
    scoreone: Number,
    scoretwo: Number,
    teamone: String ,
    teamtwo: String ,
});
//affect model name to schema
const match = mongoose.model("Match" , matchSchema)
//export match
module.exports=match;