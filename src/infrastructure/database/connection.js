const { Sequelize } = require('sequelize');
const { 
    DB_HOST, 
    DB_PORT, 
    DB_NAME, 
    DB_USER, 
    DB_PASS, 
    DB_DIALECT 
} = require('../../../config/environment');

const sequelize = new Sequelize({
    dialect: DB_DIALECT,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión a base de datos establecida correctamente.');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

module.exports = {
    sequelize,
    testConnection
};