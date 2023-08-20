import Express from 'express'
import {obtenerConversacionesUsuario,AgregarMensajeUsuario, login} from '../controllers/usuarios.controller'
const router =Express.Router();
//obtener los usuarios para el login
// http://localhost:4000/usuariox/login
router.post('/login',login)

//(controlador usuarios)mostrar los mensajes de usuarios en la ventana modal
router.get('/:id_usuario',obtenerConversacionesUsuario)

//*(controlador usuarios)*agregar caciones de artistas a la lista de playlist del usuario*
// http://localhost:4000/usuarios/:id/mensajes
router.put('/:id_usuario/mensajes', AgregarMensajeUsuario)
export default router