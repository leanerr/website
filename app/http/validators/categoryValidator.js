const validator = require('./validator');
const { check } = require('express-validator/check');
const Category = require('app/models/category');

class categoryValidator extends validator {

    handle() {
        return [
            check('name')
                .isLength({ min : 3 })
                .withMessage('عنوان نمیتواند کمتر از 3 کاراکتر باشد')
                .custom(async (value , { req }) => {
                    if(req.query._method === 'put') {
                        let category = await Category.findById(req.params.id);
                        if(category.name === value) return;
                    }

                    let category = await Category.findOne({ slug : this.slug(value) });
                    if(category) {
                        throw new Error('چنین دسته ای با این عنوان قبلا در سایت قرار داد شده است')
                    }
                }),

            check('parent')
                .not().isEmpty()
                .withMessage('فیلد مرجع دسته نمیتواند خالی بماند')
        ]
    }
    slug(title) {
        return title.replace(/([^۰-۹آ-یa-z0-9]|-)+/g , "-")
    }
}

module.exports = new categoryValidator();