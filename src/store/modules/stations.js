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
        async fetchStations({ commit }) {
            commit('changeLoadingState', true)
            let stations = await stationService.getAllStations()
            commit('updateStations', stations)
            commit('changeLoadingState', false)
        },
    },
    getters: {
        getStationByRoute: state => name => {
            return state.stations.find(station => station.route === name)
        },
        getNextStation: state => curStation => {
            let curIndex = state.stations.indexOf(curStation)
            let nextIndex = curIndex + 1
            if (nextIndex > state.stations.length - 1) nextIndex = 0
            return state.stations[nextIndex]
        },
        getPrevStation: state => curStation => {
            let curIndex = state.stations.indexOf(curStation)
            let prevIndex = curIndex - 1
            if (prevIndex < 0) prevIndex = state.stations.length - 1
            return state.stations[prevIndex]
        },
    },
}
