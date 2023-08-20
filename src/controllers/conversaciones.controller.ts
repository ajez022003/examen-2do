import { Request,Response  } from "express";
import { conversacionSchema } from "../models/conversaciones.schema";

export const obtenerConversaciones =async(req:Request,res:Response)=>{
    const conversaciones=await conversacionSchema.find()
    if (conversaciones){
        res.send({status:true, message:'conversaciones obtenida',conversaciones})

    }else{
        res.send({status:false, message:'no se obtuvo la lista de conversaciones'})
    }
}
export const obtenerDetalleconversacion =async(req:Request, res:Response)=>{
const detalleGrupo=await conversacionSchema.findById({_id:req.params._id})
if (detalleGrupo){
    res.send ({status:true, message:'se obtuvo los detalles de la conversacion'})
}else{
    res.send({status:false, message:'no se obtuvo el detalle'})
}
}