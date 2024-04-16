const express = require('express');
const adminController = require('../contollers/admin-controller');
const authmiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.route('/users').get(authmiddleware, adminController.getAllUsers);

router.route('/users/:id').get(authmiddleware, adminController.getUserById);

router.route('/users/update/:id').patch(authmiddleware, adminController.updateUserById);

router.route('/users/delete/:id').delete(authmiddleware, adminController.deleteUserById);

router.route('/contacts').get(authmiddleware, adminController.getAllContacts);

router.route('/contacts/delete/:id').delete(authmiddleware, adminController.deleteContactById);

module.exports = router;

// http://localhost:5173/admin/contacts