import mongoose from "mongoose";
import { grupos, miembros } from "./grupos.model";
import { mensajes } from "./mensajes.model";

const schema =new mongoose.Schema<grupos>({
    id: Number,
    nombregrupo: String,
    miembros: Array<miembros>,
    mensajes: Array<mensajes>,

})
export const gruposSchema=mongoose.model('grupos', schema)