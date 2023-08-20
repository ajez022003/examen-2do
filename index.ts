import express, {Request, Response, Express} from 'express';
import usuarioRouter from './src/routers/usuarios.router';
import gruposRouter from './src/routers/grupos.router'
import conversacionesRouter from './src/routers/conversaciones.router'
import {Database} from './src/utils/database'
import { error } from 'console';


const app:Express=express()
const db: Database =new Database()

app.use(express.json())
app.use('/usuarios', usuarioRouter)
app.use('/grupos',gruposRouter)
app.use('/conversaciones',conversacionesRouter)



app.get("/",(req:Request, res:Response)=>{
    try{
        res.send("Servidor para el ejercicio de teams levantado")
    }catch{
        res.send(error)
    }
   
    res.end()
})
app.listen(4000, ()=>{
    console.log("Servidor levantado en el puerto 4000")
})