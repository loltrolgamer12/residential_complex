const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // limitar cada IP a 5 intentos por ventana
    message: {
        success: false,
        error: 'Demasiados intentos de autenticación. Por favor, intente más tarde.',
        statusCode: 429
    }
});

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // limitar cada IP a 100 solicitudes por ventana
});

module.exports = {
    authLimiter,
    apiLimiter
};