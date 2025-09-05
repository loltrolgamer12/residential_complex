const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');
const DamageReportController = require('../controllers/DamageReportController');

const damageReportController = new DamageReportController();

router.post('/', auth, damageReportController.createReport.bind(damageReportController));
router.get('/my-reports', auth, damageReportController.getMyReports.bind(damageReportController));

module.exports = router;
