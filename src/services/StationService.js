import axios from 'axios'
import store from '../store/index'

export class StationService {
    constructor(http) {
        this.http = http
        this.full_http = http + '.json'
    }
    async getAllStations() {
        let stations = []
        //request give not an array of objects, so we structure the data as we need
        await axios.get(this.full_http).then(res => {
            for (let prop in res.data) {
                stations.push(res.data[prop])
            }
        })
        stations.sort((a, b) => (a.name > b.name ? 1 : -1))
        return stations
    }
    async addStation(data) {
        let id = store.state.stationsModule.stations.length
        await axios.post(this.http + '/' + id + '.json', 0)
        //firebase generate a key to my data, so I create a station with my id,
        //and after that rewrite data with put request, for deleting this key
        await this.editStation(id, data)
    }
    async editStation(id, data) {
        await axios.put(this.http + '/' + id + '.json', {
            image: data.image,
            name: data.name,
            route: data.route,
            url: data.url,
        })
    }
}
