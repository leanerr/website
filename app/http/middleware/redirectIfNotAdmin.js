const User = require('app/models/user');
const middleware = require('./middleware');

class redirectIfNotAdmin extends middleware {

    handle(req , res ,next) {
        if(req.isAuthenticated() && req.user.admin)
            return next();

        return res.redirect('/');
    }


}


module.exports = new redirectIfNotAdmin();