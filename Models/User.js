const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require('../Config/MongoDB');

//Defining User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//Password Hashing
UserSchema.pre('save', async function(){
    try{
        var User = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(User.password, salt);

        User.password = hashpass;
    }
    catch(err){
        throw err;
    }
})
//Compare Password
UserSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

//Creating User Model
const userModel = mongoose.model('User' , UserSchema);

module.exports = userModel;

