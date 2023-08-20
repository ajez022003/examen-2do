"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarMensajeUsuario = exports.obtenerConversacionesUsuario = exports.login = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
//no me funcionaba la base de datos para el login
//exportar los detalles para el login 
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuariologin = yield usuarios_schema_1.UsuarioSchema.findOne({ nombre: req.body.nombre, contrasena: req.body.contrasena }, { contrasena: false });
    if (usuariologin) {
        res.send({ status: true, message: 'login correcto', usuariologin });
    }
    else {
        res.send({ status: false, message: 'login incorrecto' });
    }
});
exports.login = login;
//exportar los detalles de la conversacion de cada usuario
const obtenerConversacionesUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_schema_1.UsuarioSchema.findById({ _id: req.params._id }, { conversaciones: true });
    if (usuario) {
        res.send({ status: true, message: 'conversaciones de usuarios obtenidas', conversaciones: usuario.conversaciones });
    }
    else {
        res.send({ status: false, message: 'no se encontraron conversaciones' });
    }
});
exports.obtenerConversacionesUsuario = obtenerConversacionesUsuario;
//terminado sin probar por problemas con la base de datos
//agregar mensajes a la conversacion de cada usuario*
const AgregarMensajeUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarios_schema_1.UsuarioSchema.aggregate([
        {
            $lookup: {
                from: 'conversaciones',
                localField: 'conversaciones',
                foreignField: 'mensajes',
                as: 'mensajes'
            },
        },
    ]);
});
exports.AgregarMensajeUsuario = AgregarMensajeUsuario;
