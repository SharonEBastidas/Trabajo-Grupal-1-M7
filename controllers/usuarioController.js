const usuarioService = require("../services/usuarioService");
const Usuario = require('../models/usuario');

const title = "Ecommerce"
// Consultar usuario registrados
const getUserList = async (req, res) => {
    const usuarios = await usuarioService.obtenerTodosLosUsuarios();
    res.render("usuario/show", {title, usuarios});
}

// Agregar un nuevo estudiante
const getAddUsuarioForm = async (req, res) => {
    res.render("usuario/add", {title});
}

const addUsuario = async (req, res) => {
    await usuarioService.crearUsuario(req.body);
    res.redirect("/usuario");
}

// Consultar estudiante por rut
const getConsultUsuarioForm = async (req, res) => {
    res.render("usuario/consult", {title});
}

const consultUsuario = async (req, res) => {
    const correo = await usuarioService.obtenerUsuarioPorCorreo(req.body.correo);
    res.render("usuario/consultShow", { title, correo})
}

// Actualizar información del estudiante
const getEditUsuarioForm = async (req, res) => {
    res.render("usuario/edit", {title});
}

const editUsuario = async (req, res) => {
    await usuarioService.actualizarUsuario(req.body.correo, req.body);
    res.redirect("/usuario");
}

// Eliminar registro de estudiante
const getDeleteUsuarioForm = (req, res) => {
    res.render("usuario/delete", {title});
}

const deleteUsuario = async (req, res) => {
    await usuarioService.eliminarUsuario(req.body.correo);
    res.redirect("/usuario");
}

module.exports = {
    getUserList,
    getAddUsuarioForm,
    addUsuario,
    getConsultUsuarioForm,
    consultUsuario,
    getEditUsuarioForm,
    editUsuario,
    getDeleteUsuarioForm,
    deleteUsuario
};