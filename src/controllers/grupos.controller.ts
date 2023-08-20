import { Request,Response  } from "express";
import { gruposSchema } from "../models/grupos.schema";

export const obtenertodoslosgrupos =async(req:Request,res:Response)=>{
    const listaGrupos=await gruposSchema.find()
    if (listaGrupos){
        res.send({status:true, message:'lista obtenida',listaGrupos})

    }else{
        res.send({status:false, message:'no se obtuvo la lista'})
    }
}
export const obtenerDetalleGrupo =async(req:Request, res:Response)=>{
const detalleGrupo=await gruposSchema.findById({_id:req.params._id})
if (detalleGrupo){
    res.send ({status:true, message:'se obtuvo los detalles del grupo'})
}else{
    res.send({status:false, message:'no se obtuvo el detalle'})
}
}