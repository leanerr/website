const controller = require('app/http/controllers/controller');
const passport = require('passport');
const User = require('app/models/user');


class registerController extends controller {

    showRegsitrationForm(req , res) {
        const title = 'صفحه عضویت';

        res.render('auth/register' , {  title   });

    }
    // recaptcha : this.recaptcha.render() , 

    async registerProccess(req ,res , next) {
        // await this.recaptchaValidation(req , res);
        let result = await this.validationData(req)

        if(result) {
            return this.register(req , res , next)
        } 
        
        return this.back(req, res);
    }
    
    register(req , res , next) {
        passport.authenticate('local.register' , { 
            successRedirect : '/',
            failureRedirect : '/register',
            failureFlash : true
        })(req, res , next);
    }

}

module.exports = new registerController();