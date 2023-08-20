import express from 'express'
import { obtenerConversaciones, obtenerDetalleconversacion } from '../controllers/conversaciones.controller';
const router= express.Router()



router.get('/',obtenerConversaciones)
router.get('/:id',obtenerDetalleconversacion)

export default router