const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');
const MaintenanceController = require('../controllers/MaintenanceController');

const maintenanceController = new MaintenanceController();

router.post('/', auth, roleAuth(['admin']), maintenanceController.createMaintenance.bind(maintenanceController));
router.put('/:id/status', auth, roleAuth(['admin']), maintenanceController.updateStatus.bind(maintenanceController));
router.get('/', auth, maintenanceController.getMaintenances.bind(maintenanceController));

module.exports = router;
