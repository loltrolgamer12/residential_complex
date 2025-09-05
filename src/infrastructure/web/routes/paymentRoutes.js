const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

router.post('/', auth, roleAuth(['admin']), (req, res) => {
    const { apartmentId, amount, dueDate } = req.body;
    
    res.status(201).json({
        success: true,
        data: { id: Date.now(), apartmentId, amount, dueDate, status: 'pending' },
        message: 'Pago de administración registrado.'
    });
});

router.put('/:id/pay', auth, (req, res) => {
    res.json({
        success: true,
        data: { id: req.params.id, status: 'paid', paymentDate: new Date() },
        message: 'Pago registrado como realizado.'
    });
});

module.exports = router;
