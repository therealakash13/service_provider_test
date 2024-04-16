const express = require('express');
const router = express.Router();
const authcontrollers =  require('../contollers/auth-controller');
const loginSchema = require('../validators/auth-validator');
const signupSchema = require('../validators/auth-validator'); 
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

router.route('/').get( authcontrollers.home ); 

router.route('/register').post(validate(signupSchema), authcontrollers.register);

router.route('/login').post(validate(loginSchema),authcontrollers.login);

router.route('/user').get(authMiddleware, authcontrollers.newuser);

module.exports = router;