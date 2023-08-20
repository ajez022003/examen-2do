import express from 'express'
import { obtenertodoslosgrupos,obtenerDetalleGrupo } from '../controllers/grupos.controller';

const router =express.Router();
router.get('/',obtenertodoslosgrupos)
router.get('/:id',obtenerDetalleGrupo)



export default router