const controller = require('app/http/controllers/controller');
const passport = require('passport');
const PasswordReset = require('app/models/password-reset');
const User = require('app/models/user');
const uniqueString = require('unique-string')

class forgotPasswordController extends controller {
    
    showForgotPassword(req , res) {
        const title = 'فراموشی رمز عبور';
        res.render('home/auth/passwords/email' , { recaptcha : this.recaptcha.render() , title });
    }

    async sendPasswordResetLink(req  ,res , next) {
        await this.recaptchaValidation(req , res);
        let result = await this.validationData(req)
        if(result) {
            return this.sendResetLink(req, res)
        } 
        
        return this.back(req ,res);
    }

    async sendResetLink(req ,res , next) {
        let user = await User.findOne({ email : req.body.email });
        if(! user) {
            req.flash('errors' , 'چنین کاربری وجود ندارد');
            return this.back(req, res);
        }

        const newPasswordReset = new PasswordReset({
            email : req.body.email,
            token : uniqueString()
        });
        
        await newPasswordReset.save();

        // send Mail
        
        // req.flash('success' , 'ایمیل بازیابی رمز عبور با موفقیت انجام شد');
        res.redirect('/');
    }

}

module.exports = new forgotPasswordController();