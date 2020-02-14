import * as  express from 'express'
import { createInterval } from './bashConnector/envirophat';

const app = express()
createInterval()
app.listen(80, () => console.log('Start application'))