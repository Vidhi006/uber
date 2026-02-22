const userModel= require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
module.exports.authUser = async(req,res , next) =>{
    let token;

    if (req.cookies?.token) {
        token = req.cookies.token;
    } 
    else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization?.split(" ")[1];
    }
    if(!token){
        return res.status(401).json({message:'unauthorized'});
    }

    const isBlackListed = await blacklistTokenModel.findOne({token: token})
    if(isBlackListed){
        return res.status(401).json({message: "Unauthorized"})
    }
    // aagr token mil jata h to token to decode krenge and code try and catch me likhenge
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}