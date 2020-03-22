import { EnvirophatModel } from "./models";
import { Callback } from "./utils/typescript";
import { EnviroPhatType } from "./models/envirophat";

export function getLastRegister(callback:Callback<EnviroPhatType |null>){
    EnvirophatModel.find().sort({date:-1}).limit(1).exec((err,data)=>{
        if(err) return callback(err)
        if(data.length===0) return callback(null,null)
        callback(null,data[0])
    })
}