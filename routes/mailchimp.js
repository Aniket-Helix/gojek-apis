var express = require('express');
var router = express.Router();
const chimpController = require('../controllers/mailchimp');
const auth = require('../controllers/auth');

router.post('/addMemberToList', auth.authenticateToken, chimpController.addMemberToList);

module.exports = router;
