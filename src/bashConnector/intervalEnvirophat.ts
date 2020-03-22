import pythonBash from './pythonConnector'
import * as path from 'path'
import { EnvirophatModel } from '../models';

var interval = null

export const createInterval = ()=> {
    interval = setInterval(()=>{
        pythonBash('envirophat_script.py',(err,data) => {
            if(err) return console.error(err)
            const envphat = new EnvirophatModel(data)
            envphat.save(err => {
                if(err) return console.error(err)
                console.log('Saved')
            })
        })
    },5000)
}
export const deleteInterval = ()=>{
    if(interval!==null)
        clearInterval(interval)
}
