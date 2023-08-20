"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const grupos_controller_1 = require("../controllers/grupos.controller");
const router = express_1.default.Router();
router.get('/', grupos_controller_1.obtenertodoslosgrupos);
router.get('/:id', grupos_controller_1.obtenerDetalleGrupo);
exports.default = router;
