const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

router.get('/', auth, (req, res) => {
    const notifications = [
        {
            id: 1,
            title: 'Nuevo huésped Airbnb',
            message: 'Huésped registrado en apartamento 101-A',
            type: 'airbnb_checkin',
            isRead: false
        },
        {
            id: 2,
            title: 'Mantenimiento programado',
            message: 'Mantenimiento de piscina el 15 de enero',
            type: 'maintenance',
            isRead: false
        }
    ];
    
    res.json({ success: true, data: notifications });
});

router.post('/', auth, roleAuth(['admin']), (req, res) => {
    const { title, message, recipientType } = req.body;
    
    res.status(201).json({
        success: true,
        data: { id: Date.now(), title, message, recipientType, sentAt: new Date() },
        message: 'Notificación enviada.'
    });
});

module.exports = router;
