const express = require('express');
const router = express.Router();
const contactForm = require('../contollers/constact-controller');

router.route("/contact").post(contactForm);

module.exports = router;