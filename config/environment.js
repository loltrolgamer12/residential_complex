require('dotenv').config();

module.exports = {
    // Server Configuration
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    
    // Database Configuration
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 5432,
    DB_NAME: process.env.DB_NAME || 'residential_complex',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASS: process.env.DB_PASS || '',
    DB_DIALECT: process.env.DB_DIALECT || 'postgres',
    
    // JWT Configuration
    JWT_SECRET: process.env.JWT_SECRET || 'residential-complex-super-secret-key-2024',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
    
    // Email Configuration
    EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.gmail.com',
    EMAIL_PORT: process.env.EMAIL_PORT || 587,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    
    // File Upload
    MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 10485760,
    UPLOAD_PATH: process.env.UPLOAD_PATH || './uploads',
    
    // Security
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 12,
    
    // CORS
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000'
};
require('dotenv').config();

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'super_secret_key',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/residential_complex'
};
