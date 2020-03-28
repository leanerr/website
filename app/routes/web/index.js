const express = require('express');
const router = express.Router();

// Middlewares
const redirectIfAuthenticated = require('app/http/middleware/redirectIfAuthenticated');
const redirectIfNotAdmin = require('app/http/middleware/redirectIfNotAdmin');
const errorHandler = require('../../http/middleware/errorHandler');
// Admin Router
const adminRouter = require('app/routes/web/admin');
router.use('/admin' , redirectIfNotAdmin.handle , adminRouter);

// Home Router
const homeRouter = require('app/routes/web/home');
router.use('/' , homeRouter);

// Landing Router
const landRouter = require('app/routes/web/landing');
router.use('/land' , landRouter);

// Auth Router
const authRouter = require('app/routes/web/auth');
router.use('/auth' , redirectIfAuthenticated.handle ,authRouter);

//Handle errors
router.all('*' , errorHandler.error404);
router.use(errorHandler.handler);


module.exports = router;