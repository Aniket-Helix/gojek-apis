var express = require('express');
var router = express.Router();
const sectionController = require('../controllers/sections');
const auth = require('../controllers/auth')

router.get('/getSectionsAndVariables', auth.authenticateToken, sectionController.getSectionsAndVariables);
router.get('/getVariableNotes', auth.authenticateToken, sectionController.getVariableNotes);
router.get('/getVariableDetails', auth.authenticateToken, sectionController.getVariableDetails);

module.exports = router;
