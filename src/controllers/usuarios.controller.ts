import {Request, Response } from 'express'
import { UsuarioSchema } from '../models/usuarios.schema'
import { usuario } from '../models/usuarios.model'

//no me funcionaba la base de datos para el login
//exportar los detalles para el login 
export const login =async(req:Request,res:Response)=>{
    const usuariologin= await UsuarioSchema.findOne({nombre:req.body.nombre, contrasena:req.body.contrasena}, {contrasena:false})
    if(usuariologin){
        res.send({status:true, message:'login correcto', usuariologin})
    }else{
        res.send({status:false, message:'login incorrecto'})
    }
 
}

//exportar los detalles de la conversacion de cada usuario
export const obtenerConversacionesUsuario=async(req:Request, res:Response)=>{
    const usuario =await UsuarioSchema.findById({_id:req.params._id},{conversaciones:true})
    if (usuario){
        res.send({status:true, message:'conversaciones de usuarios obtenidas',conversaciones:usuario.conversaciones})
    }else{
        res.send({status:false, message:'no se encontraron conversaciones'})
    }
}

//terminado sin probar por problemas con la base de datos
//agregar mensajes a la conversacion de cada usuario*
export const AgregarMensajeUsuario= async(req: Request, res: Response)=>{
    const usuarios:usuario[]= await UsuarioSchema.aggregate(
 [
 {
     $lookup:{
         from: 'conversaciones', 
         localField: 'conversaciones',
         foreignField: 'mensajes',
         as: 'mensajes'
     },
 },
    
 ])
 }
 









