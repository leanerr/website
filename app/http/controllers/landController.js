const controller = require('app/http/controllers/controller');
const Course = require('../../models/course');
class landController extends controller {


    async index(req, res) {
        let headers = await Course.find({}).sort({ createdAt : -1 }).skip(0).limit(3).exec();
        const title = 'اپلیکیشن فیتکس';
        res.render('land/index', {title , headers});
    }



}


module.exports = new landController();