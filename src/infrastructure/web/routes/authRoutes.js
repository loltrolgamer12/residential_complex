const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email y contraseña requeridos'
        });
    }
    
    const token = 'demo-jwt-token-' + Date.now();
    
    res.json({
        success: true,
        data: {
            token,
            user: { id: 1, name: 'Usuario Demo', email, role: 'owner' }
        },
        message: 'Login exitoso'
    });
});

module.exports = router;
