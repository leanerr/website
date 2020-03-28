const controller = require('app/http/controllers/controller');

class courseController extends controller {
    index(req , res) {
        res.render('admin/index');
    }
    uploadImage(req , res){
        let image = req.file;
        res.json({
            "uploaded" : 1 ,
            "fileName" : image.originalname ,
            "url" :  `${image.destination}/${image.filename}`.substring(8)
            // "url" : `https://mag.fitexapp.ir${image.destination}/${image.filename}`.substring(8)

        });
    }

}

module.exports = new courseController();