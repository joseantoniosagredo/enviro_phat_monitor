import { Callback } from "../utils/typescript";
import { execFile } from 'child_process'
import {PythonShell} from 'python-shell'
const options = {
    scriptPath: __dirname
  }

export default function (script: string, callback: Callback<string>) {
    PythonShell.run( script,options,(err,output)=>{
        if(err) return callback(err)
        callback(null,output[0])
    })
}