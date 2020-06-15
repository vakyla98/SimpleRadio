import axios from 'axios'

export class StationService {
    constructor(http) {
        this.http = http
    }
    async getAllStations() {
        let stations = []
        //request give not an array of objects, so we structure the data as we need
        await axios.get(this.http).then(res => {
            for (let prop in res.data) {
                stations.push(res.data[prop])
            }
        })
        return stations
    } 
}
