import { ApiRouter } from 'mongoose-restapi-ui'
import { EnvirophatModel } from '../models';

const route = ApiRouter()
route.setGlobalRoute('/api/rest/')
route.setModel('/envirophat',EnvirophatModel)

export default route