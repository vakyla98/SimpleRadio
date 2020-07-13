import {StationService} from './StationService'
import {LS_service} from './LS_service'

export const stationService = new StationService('https://simple-radio-x.firebaseio.com/stations')
export const ls_service = new LS_service()