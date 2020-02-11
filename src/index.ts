import * as  express from 'express'
import { createInterval } from './timer/envirophat';

const app = express()
createInterval()
app.listen(80, () => console.log('Start application'))