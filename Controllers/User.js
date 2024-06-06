const User = require('../Models/User');
const jwt = require('jsonwebtoken');

async function handleGetAllUsers(req, res){
    const allUsers = await User.find({});
    return res.json(allUsers);
}
async function handleCreateNewUser(req, res){
    const body = req.body;
    try{
        const newUser = new User({username: body.username, email: body.email, password: body.password});
        await newUser.save();
    }
    catch(err){
        throw err;
    }
    return res.status(201).json({msg: "success"});
}
async function handleGetUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "User not found"});
    return res.json(user);
}
async function handleUpdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, {username: req.body.username});
    return res.json({msg: "username changed successfully."});
}
async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "User is deleted successfully"});
}
async function handleLoginUserByEmailAndPass(req, res){
    try{
        //Finding the user with requested email
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.json({status: "User does not exist with this email."});
        }
        //Matching the password
        const isMatch = await user.comparePassword(req.body.password);
        if(isMatch === false){
            return res.json({status: "Password is incorrect."});
        }
        //Generating the token
        const token = await jwt.sign({_id: user._id, email: user.email}, "secretKey", {expiresIn: '1h'});
        //sending the response
        return res.json({status: true, token: token});
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    handleGetAllUsers, 
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleLoginUserByEmailAndPass
}