import pythonBash from './pythonConnector'
import * as path from 'path'

var interval = null

export const createInterval = ()=> {
    interval = setInterval(()=>{
        pythonBash([__dirname + '/envirophat.py'],(err,data) => {
            if(err) return console.error(err)
            console.log(data)
        })
    },5000)
}
export const deleteInterval = ()=>{
    if(interval!==null)
        clearInterval(interval)
}