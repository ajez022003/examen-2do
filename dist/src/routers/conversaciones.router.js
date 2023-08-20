"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversaciones_controller_1 = require("../controllers/conversaciones.controller");
const router = express_1.default.Router();
router.get('/', conversaciones_controller_1.obtenerConversaciones);
router.get('/:id', conversaciones_controller_1.obtenerDetalleconversacion);
exports.default = router;
