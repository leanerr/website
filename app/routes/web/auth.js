const express = require('express');
const router = express.Router();
const passport = require('passport');

// Controllers
const loginController = require('app/http/controllers/auth/loginController');
const registerController = require('app/http/controllers/auth/registerController');
// const forgotPasswordController = require('app/http/controllers/auth/forgotPasswordController');
// const resetPasswordController = require('app/http/controllers/auth/resetPasswordController');


// validators 
const registerValidator = require('app/http/validators/registerValidator');
const loginValidator = require('app/http/validators/loginValidator');
// const forgotPasswordValidator = require('app/http/validators/forgotPasswordValidator');
// const resetPasswordValidator = require('app/http/validators/resetPasswordValidator');
router.use((req , res , next) => {
    res.locals.layout = "auth/master";
next();
});
// Home Routes
router.get('/login' , loginController.showLoginForm);
router.post('/login' , loginValidator.handle() ,loginController.loginProccess);

router.get('/register' , registerController.showRegsitrationForm);
router.post('/register' , registerValidator.handle() , registerController.registerProccess);



router.get('/google' , passport.authenticate('google' , { scope : ['profile' , 'email'] }));
router.get('/google/callback' , passport.authenticate('google' , { successRedirect : '/' , failureRedirect : '/register' }) )

module.exports = router;