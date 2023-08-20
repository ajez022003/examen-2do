"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_router_1 = __importDefault(require("./src/routers/usuarios.router"));
const grupos_router_1 = __importDefault(require("./src/routers/grupos.router"));
const conversaciones_router_1 = __importDefault(require("./src/routers/conversaciones.router"));
const database_1 = require("./src/utils/database");
const console_1 = require("console");
const app = (0, express_1.default)();
const db = new database_1.Database();
app.use(express_1.default.json());
app.use('/usuarios', usuarios_router_1.default);
app.use('/grupos', grupos_router_1.default);
app.use('/conversaciones', conversaciones_router_1.default);
app.get("/", (req, res) => {
    try {
        res.send("Servidor para el ejercicio de teams levantado");
    }
    catch (_a) {
        res.send(console_1.error);
    }
    res.end();
});
app.listen(4000, () => {
    console.log("Servidor levantado en el puerto 4000");
});
