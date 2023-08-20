import mongoose from 'mongoose'

export interface mensajes{
    emisor: number
    receptor: number
    mensaje:string
    hora:string
}