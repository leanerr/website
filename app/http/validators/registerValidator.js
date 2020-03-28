const validator = require('./validator');
const { check } = require('express-validator/check');

class registerValidator extends validator {
    
    handle() {
        return [
            check('name')
                .isLength({ min : 5 })
                .withMessage('فیلد نام نمیتواند کمتر از 5 کاراکتر باشد'),

            check('email')
                .isEmail()
                .withMessage('فیلد ایمیل معتبر نیست'),

            check('password')
                .isLength({ min : 8 })
                .withMessage('فیلد پسورد نمیتواند کمتر از 8 کاراکتر باشد'),
        ]
    }
}

module.exports = new registerValidator();