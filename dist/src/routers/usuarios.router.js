"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
//obtener los usuarios para el login
// http://localhost:4000/usuariox/login
router.post('/login', usuarios_controller_1.login);
//(controlador usuarios)mostrar los mensajes de usuarios en la ventana modal
router.get('/:id_usuario', usuarios_controller_1.obtenerConversacionesUsuario);
//*(controlador usuarios)*agregar caciones de artistas a la lista de playlist del usuario*
// http://localhost:4000/usuarios/:id/mensajes
router.put('/:id_usuario/mensajes', usuarios_controller_1.AgregarMensajeUsuario);
exports.default = router;
