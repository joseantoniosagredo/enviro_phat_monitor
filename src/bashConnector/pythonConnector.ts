import { Callback } from "../utils/typescript";
import { execFile } from 'child_process'
import {PythonShell} from 'python-shell'
import { EnviroPhatType } from "../models/envirophat";
const options = {
    scriptPath: __dirname
  }

export default function (script: string, callback: Callback<EnviroPhatType>) {
    PythonShell.run( script,options,(err,output)=>{
        if(err) return callback(err)
        const data: EnviroPhatType = JSON.parse(output[0])
        callback(null,data)
    })
}