import {StationService} from './StationService'
import {DB_Service} from './DB_Service'

export const stationService = new StationService('https://simple-radio-x.firebaseio.com/stations.json')
export const db_Service = new DB_Service()