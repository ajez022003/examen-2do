import mongoose from "mongoose";
import {conversacionesUsuario, usuario} from "./usuarios.model"



const schema =new mongoose.Schema<usuario>({
   
    id: Number,
    nombre: String,
    contrasena:String,
    status: String,

    
    conversaciones:Array<conversacionesUsuario>,

})
export const UsuarioSchema= mongoose.model('usuarios',schema)