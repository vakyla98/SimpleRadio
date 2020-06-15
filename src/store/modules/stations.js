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
            ctx.commit('changeLoadingState', true)
            let stations = await stationService.getAllStations()
            ctx.commit('updateStations', stations)
            ctx.commit('changeLoadingState', false)
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
