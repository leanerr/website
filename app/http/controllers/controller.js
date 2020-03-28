const autoBind = require('auto-bind');
const Recaptcha = require('express-recaptcha').Recaptcha;
const { validationResult } = require('express-validator/check');
const isMongoId = require('validator/lib/isMongoId');

module.exports = class controller {
    constructor() {
        autoBind(this);
        this.recaptchaConfig();
    }

    recaptchaConfig() {
        this.recaptcha = new Recaptcha(
            config.service.recaptcha.client_key,
            config.service.recaptcha.secret_key ,
            {...config.service.recaptcha.options}
        );
    }

    recaptchaValidation(req , res) {
        return new Promise((resolve , reject) => {
            this.recaptcha.verify(req , (err , data) => {
                if(err) {
                    req.flash('errors' , 'گزینه امنیتی مربوط به شناسایی روبات خاموش است، لطفا از فعال بودن آن اطمینان حاصل نمایید و مجدد امتحان کنید');
                    this.back(req,res)
                } else resolve(true);
            })
        })
    }

    async validationData(req) {
        const result = validationResult(req);
        if (! result.isEmpty()) {
            const errors = result.array();
            const messages = [];

            errors.forEach(err => messages.push(err.msg));

            req.flash('errors' , messages);

            return false;
        }

        return true;
    }

    back(req , res) {
        req.flash('formData' , req.body);
        return res.redirect(req.header('Referer') || '/');
    }

    isMongoId(paramId) {
        if(! isMongoId(paramId))
            this.error('ای دی وارد شده صحیح نیست', 404);
    }

    error(message , status = 500) {
        let err = new Error(message);
        err.status = status;
        throw err;
    }
}