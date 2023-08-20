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
exports.obtenerDetalleGrupo = exports.obtenertodoslosgrupos = void 0;
const grupos_schema_1 = require("../models/grupos.schema");
const obtenertodoslosgrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaGrupos = yield grupos_schema_1.gruposSchema.find();
    if (listaGrupos) {
        res.send({ status: true, message: 'lista obtenida', listaGrupos });
    }
    else {
        res.send({ status: false, message: 'no se obtuvo la lista' });
    }
});
exports.obtenertodoslosgrupos = obtenertodoslosgrupos;
const obtenerDetalleGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detalleGrupo = yield grupos_schema_1.gruposSchema.findById({ _id: req.params._id });
    if (detalleGrupo) {
        res.send({ status: true, message: 'se obtuvo los detalles del grupo' });
    }
    else {
        res.send({ status: false, message: 'no se obtuvo el detalle' });
    }
});
exports.obtenerDetalleGrupo = obtenerDetalleGrupo;
