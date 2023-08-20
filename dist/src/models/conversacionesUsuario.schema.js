"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversacionesUsuarioSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    idConversacion: Number,
    idDestinatario: Number,
    idGrupo: Number,
    tipo: String,
    ultimoMensaje: String,
    horaUltimoMensaje: String,
    nombreDestinatario: String,
    imagenDestinatario: String,
});
exports.conversacionesUsuarioSchema = mongoose_1.default.model('conversaciones de Usuario', schema);
