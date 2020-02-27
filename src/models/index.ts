import * as mongoose from 'mongoose'
const HOST = process.env.mongo_host || 'localhost'
const PORT = process.env.mongo_port || '27017'
const DB_NAME = process.env.mongo_db_name || 'db_envirophat'
mongoose.connect(`mongodb://${HOST}:${PORT}/${DB_NAME}`, err => {
    if (err) return console.error(err)
    console.log(`connected to mongodb://${HOST}:${PORT}/${DB_NAME}`)
})

export { default as EnvirophatModel } from './envirophat'