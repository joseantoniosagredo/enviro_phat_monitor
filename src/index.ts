import * as  express from 'express'
import { createInterval } from './bashConnector/intervalEnvirophat';

const PORT = process.env.PORT || 3000

const app = express()
createInterval()
app.listen(PORT, () => console.log('Start application, PORT:' + PORT))