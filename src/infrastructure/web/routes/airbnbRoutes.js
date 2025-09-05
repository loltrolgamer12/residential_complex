const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');
const AirbnbController = require('../controllers/AirbnbController');

const airbnbController = new AirbnbController();

router.post('/guests', auth, roleAuth(['admin', 'owner']), airbnbController.registerGuest.bind(airbnbController));
router.put('/guests/:id/checkin', auth, roleAuth(['admin', 'security']), airbnbController.checkInGuest.bind(airbnbController));
router.get('/guests/active', auth, roleAuth(['admin', 'security']), airbnbController.getActiveGuests.bind(airbnbController));

module.exports = router;
