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
exports.obtenerDetalleconversacion = exports.obtenerConversaciones = void 0;
const conversaciones_schema_1 = require("../models/conversaciones.schema");
const obtenerConversaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conversaciones = yield conversaciones_schema_1.conversacionSchema.find();
    if (conversaciones) {
        res.send({ status: true, message: 'conversaciones obtenida', conversaciones });
    }
    else {
        res.send({ status: false, message: 'no se obtuvo la lista de conversaciones' });
    }
});
exports.obtenerConversaciones = obtenerConversaciones;
const obtenerDetalleconversacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detalleGrupo = yield conversaciones_schema_1.conversacionSchema.findById({ _id: req.params._id });
    if (detalleGrupo) {
        res.send({ status: true, message: 'se obtuvo los detalles de la conversacion' });
    }
    else {
        res.send({ status: false, message: 'no se obtuvo el detalle' });
    }
});
exports.obtenerDetalleconversacion = obtenerDetalleconversacion;
