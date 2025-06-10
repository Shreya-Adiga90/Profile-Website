const express = require('express');
const router = express.Router();
const userController = require('../controller/userManagement');

router.get('/profile',userController.getUserInfo );


module.exports = router;