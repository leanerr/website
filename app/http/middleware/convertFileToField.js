const User = require('app/models/user');
const middleware = require('./middleware');

class convertFileToField extends middleware {

    handle(req , res , next) {
        if(! req.file) 
            req.body.images = undefined;
        else
            req.body.images = req.file.filename;

        next();
    }
}


module.exports = new convertFileToField();