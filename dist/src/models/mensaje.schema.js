"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensajeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    emisor: Number,
    receptor: Number,
    mensaje: String,
    hora: String,
});
exports.mensajeSchema = mongoose_1.default.model('mensajes', schema);
