const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    rol: {
        type: DataTypes.STRING,
    }
});

module.exports= Usuario;