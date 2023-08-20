import mongoose from "mongoose";
import { mensajes } from "./mensajes.model";


export interface miembros{
    id: number
    nombre:string
    imagen:string
    
}
export interface grupos{
    _id?: mongoose.Types.ObjectId
    id: number
    nombregrupo: string
    miembros: Array<miembros>
    mensajes: Array<mensajes>
}