const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('app/http/controllers/homeController');
const courseController = require('app/http/controllers/courseController');
const landController = require('app/http/controllers/landController');

router.get('/logout' , (req ,res) => {
    req.logout();
    res.clearCookie('remember_token');
    res.redirect('/');
});

// Home Routes
router.get('/' , homeController.index);
router.get('/post' , courseController.index);
router.get('/posts' , courseController.posts);
router.get('/about-us' , homeController.about);
router.get('/post/:course' , courseController.single);

router.get('/sitemap.xml' , homeController.sitemap);
router.get('/feed/post' , homeController.feedCourses);

module.exports = router;