import mongoose from 'mongoose'
import { mensajes } from './mensajes.model'
export interface usuarioConversacion{
    id: number
    nombre: string
    imagen: string
}


export interface conversaciones{
    _id?: mongoose.Types.ObjectId
    id: number
    emisor:Array<usuarioConversacion>
    receptor:Array<usuarioConversacion>
    mensajes:Array<mensajes>
    
}