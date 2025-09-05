const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../../../config/environment');

class AuthService {
    async hashPassword(password) {
        return await bcrypt.hash(password, 12);
    }

    async comparePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    generateToken(payload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    }

    verifyToken(token) {
        return jwt.verify(token, JWT_SECRET);
    }
}

module.exports = AuthService;
