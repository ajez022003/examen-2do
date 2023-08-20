import mongoose from 'mongoose'
import { conversaciones, usuarioConversacion } from './conversaciones.model'
import { mensajes } from './mensajes.model'



const schema= new mongoose.Schema<conversaciones>({
    _id:mongoose.Schema.Types.ObjectId,
    id: Number,

    emisor:Array<usuarioConversacion>,
    receptor:Array<usuarioConversacion>,
 
    mensajes:Array<mensajes>,
})

export const conversacionSchema= mongoose.model('conversaciones',schema)