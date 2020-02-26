import * as  express from 'express'
import { createInterval } from './bashConnector/intervalEnvirophat';
import apiRestRoute from './routers/apiRest'
const PORT = process.env.PORT || 3000

const app = express()
createInterval()
app.use('/api/rest',apiRestRoute)
app.listen(PORT, () => console.log('Start application, PORT:' + PORT))