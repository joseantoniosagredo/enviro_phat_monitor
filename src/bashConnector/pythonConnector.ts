import { Callback } from "../utils/typescript";
import { execFile } from 'child_process'

export default function (script: string[], callback: Callback<string>) {
    execFile('python3', script,(err,data,errdata)=>{
        if(data) console.log(data)
        if(err) return console.log(err)
        if(errdata) return console.log(errdata)
    })
}