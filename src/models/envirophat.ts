import { Schema, model, Document } from 'mongoose'
export type EnviroPhatType = {
    pressure: string
    temperature: number
    altitude: number
    rgb: {
        red: number,
        green: number,
        blue: number
    }
    light: number
    raw: number[]
}
const schema = new Schema({
    pressure: { type: String, required: true },
    temperature: { type: Number, required: true },
    altitude: { type: Number, required: true },
    rgb: {
        red: { type: Number, required: true },
        green: { type: Number, required: true },
        blue: { type: Number, required: true }
    },
    light: { type: Number, required: true },
    raw: [{ type: Number, required: true }],
    date: { type: Date, required: true, default: new Date() }
})

export default model<EnviroPhatType & Document>('envirophat', schema, 'envirophat')