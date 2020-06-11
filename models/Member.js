const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    id : String,
    email : { 
        type : String, 
        required : true 
    },
    firstName : String,
    lastName : String,
    age : Number,
    createdAt : { 
        type : Date, 
        default : Date.now 
    }
});

module.exports = mongoose.model('members', MemberSchema);