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
        try{
            const data: EnviroPhatType = JSON.parse(output[0])
            callback(null,data)
        }catch (e) {
            console.error(e)
            console.error('Error to parse ',output[0])
            console.error('Output: ',output.toString())
            callback(e)
        }
        

    })
}