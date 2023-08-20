import mongoose from "mongoose";

export interface conversacionesUsuario{
    idConversacion:number
    _id:mongoose.Schema.Types.ObjectId,
    idDestinatario: number
    idGrupo: number
    tipo: string
    ultimoMensaje:string
    horaUltimoMensaje: string
    nombreDestinatario:string
    imagenDestinatario: string
}



export interface usuario{
    _id?: mongoose.Types.ObjectId;
    id: number
    nombre: string
    contrasena:string
    status: string


    conversaciones:Array<conversacionesUsuario>
}