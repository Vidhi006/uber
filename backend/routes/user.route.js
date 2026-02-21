const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller")
const {body} = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware")
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be at least 3 character long'),
    body('password').isLength({min:6}).withMessage('Password should be at least 6 character long'),
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('InValid Email'),
    body('password').isLength({min:6}).withMessage('Password Incorrect')
],
    userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)
module.exports = router;