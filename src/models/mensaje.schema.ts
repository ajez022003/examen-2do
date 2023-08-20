import mongoose from 'mongoose'
import { mensajes } from './mensajes.model'

const schema= new mongoose.Schema<mensajes>({
    emisor: Number,
    receptor: Number,
    mensaje:String,
    hora:String,
})
export const mensajeSchema= mongoose.model('mensajes',schema)