const express = require('express');
const router = express.Router();

// Controllers
const landController = require('app/http/controllers/landController');


router.use((req , res , next) => {
    res.locals.layout = "land/master";
next();
});



// Home Routes

router.get('/' , landController.index);

module.exports = router;