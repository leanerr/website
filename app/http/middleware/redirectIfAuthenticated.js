const User = require('app/models/user');
const middleware = require('./middleware');

class redirectIfAuthenticated extends middleware {
    
    handle(req , res ,next) {
        if(req.isAuthenticated())
            return res.redirect('/')
    
        next();
    }


}


module.exports = new redirectIfAuthenticated();