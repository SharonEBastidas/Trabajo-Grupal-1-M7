const Usuario = require('../models/usuario');

const obtenerTodosLosUsuarios = async () => {
    return await Usuario.findAll({ order: [['id', 'ASC']]});
};

const crearUsuario = async (datos) => {
    return await Usuario.create(datos);
};

const actualizarUsuario = async (correo, datos) => {
    const usuario = await Usuario.findOne({ where: { correo }});
    if (usuario) {
    return await usuario.update(datos);
    }
    return null;
};

const obtenerUsuarioPorCorreo = async (correo) => {
    return await Usuario.findOne({ where: { correo }});
};

const eliminarUsuario = async (correo) => {
    const usuario = await Usuario.findOne({ where: { correo }});
    if (usuario) {
    return await usuario.destroy();
    }
    return null;
};

module.exports ={
    obtenerTodosLosUsuarios,
    crearUsuario,
    actualizarUsuario,
    obtenerUsuarioPorCorreo,
    eliminarUsuario,
};