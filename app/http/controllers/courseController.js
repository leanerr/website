const controller = require('app/http/controllers/controller');
const Course = require('app/models/course');
const Category = require('app/models/category');

class courseController extends controller {


    async index(req , res) {

        // return res.json(req.query);
        let query = {};
    let { search  , category } = req.query;

        // if(search && search !== '*') {
        //    query.body = new RegExp(search, 'gi');
        //     // query.title = new RegExp(search , 'gi');
        // }



        if(category && category !== 'all') {
            category = await Category.findOne({ slug : category});
            if(category)
                query.categories = { $in : [ category.id ]}
        }

        let courses = Course.find({...query  , $or : [{ title :new RegExp(req.query.search , 'gi') } , { body : new RegExp(req.query.search , 'gi')}   ] , }).sort({ createdAt : -1});
        // let courses = Course.find({ ...query })

        if(req.query.order)
            courses.sort({ createdAt : 1});

        courses = await courses.exec();

        let categories = await Category.find({ parent : null }).populate('childs').exec();
        let headers = await Course.find({}).sort({ createdAt : -1 }).skip(0).limit(3).exec();
        let oldest = await Course.find({}).sort({ createdAt : +1 }).skip(8).limit(3).exec();
        res.render('home/courses' , { courses  , categories , headers , oldest });
    }

    async single(req , res) {
        let categories = await Category.find({ parent : null }).populate('childs').exec();
        let lastCourses = await Course.find({}).sort({ createdAt : -1 }).skip(2).limit(4).exec();
        let headers = await Course.find({}).sort({ createdAt : -1 }).skip(0).limit(3).exec();
        let oldest = await Course.find({}).sort({ createdAt : +1 }).skip(8).limit(3).exec();
        let courses = await Course.find({}).sort({ createdAt : -1 }).skip(2).limit(4).exec();
        let course = await Course.findOne({ slug : req.params.course })
            .populate([
                {
                    path : 'user',
                    select : 'name'
                }
            ]);
        // let canUserUse = await this.canUse(req , course);

        res.render('home/single-course' , { course , lastcourses: lastCourses , courses , categories , headers , oldest});
    }


    async posts(req , res) {
        try {
            let headers = await Course.find({}).sort({ createdAt : -1 }).skip(0).limit(3).exec();
            let oldest = await Course.find({}).sort({ createdAt : +1 }).skip(8).limit(3).exec();
            let page = req.query.page || 1;
            let courses = await Course.paginate({} , { page , sort : { createdAt : -1 } , limit : 9 });
            let categories = await Category.find({ parent : null }).populate('childs').exec();
            res.render('home/posts',  { title : 'مقاله ها' , courses , categories , headers , oldest });
        } catch (err) {
            next(err);
        }
    }
    // async canUse(req  , course) {
    //     let canUse = false;
    //     if(req.isAuthenticated()) {
    //         switch (course.type) {
    //             case 'vip':
    //                 canUse = req.user.isVip()
    //                 break;
    //             case 'cash':
    //                 canUse = req.user.checkLearning(course);
    //                 break;
    //             default:
    //                 canUse = true;
    //                 break;
    //         }
    //     }
    //     return canUse;
    // }

}

module.exports = new courseController();