import { stationService } from '../../services'
export default {
    state: {
        stations: [],
    },
    mutations: {
        updateStations(state, stations) {
            state.stations = stations
        },
    },
    actions: {
        async fetchStations(ctx) {
            let stations = await stationService.getAllStations()
            ctx.commit('updateStations', stations)
        },
    },
    getters: {
        getAllStations(state) {
            return state.stations
        },
        getStationByRoute: state => name => {
            return state.stations.find(station => station.route === name)
        },
    },
}
