const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

router.get('/', auth, (req, res) => {
    const apartments = [
        {
            id: 1,
            number: '101-A',
            tower: 'Torre A',
            floor: 1,
            status: 'owner_occupied',
            type: '2 habitaciones'
        },
        {
            id: 2,
            number: '102-A',
            tower: 'Torre A',
            floor: 1,
            status: 'rented',
            type: '3 habitaciones'
        }
    ];
    res.json({ success: true, data: apartments });
});

router.post('/', auth, roleAuth(['admin', 'owner']), (req, res) => {
    const { number, tower, floor, status, type } = req.body;
    
    const newApartment = {
        id: Date.now(),
        number,
        tower,
        floor,
        status: status || 'vacant',
        type,
        ownerId: req.user.id,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    
    res.status(201).json({
        success: true,
        data: newApartment,
        message: 'Apartamento registrado exitosamente'
    });
});

module.exports = router;
