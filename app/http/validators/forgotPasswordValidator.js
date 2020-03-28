const validator = require('./validator');
const { check } = require('express-validator/check');

class forgotPasswordValidator extends validator {
    
    handle() {
        return [
            check('email')
                .isEmail()
                .withMessage('فیلد ایمیل معتبر نیست')
        ]
    }
}

module.exports = new forgotPasswordValidator();