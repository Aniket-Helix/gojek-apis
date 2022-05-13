var express = require('express');
var router = express.Router();
const reportController = require('../controllers/reports');
const auth = require('../controllers/auth');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/getAllData', auth.authenticateToken, reportController.getReportData);
router.post('/getFilteredData', auth.authenticateToken, reportController.getFilteredReportData);

module.exports = router;
