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
        getNextStation: state => curStation => {
            let curIndex = state.stations.indexOf(curStation)
            let nextIndex = curIndex + 1
            if ( nextIndex > state.stations.length - 1) nextIndex = 0;
            console.log(state.stations[nextIndex].route)
            return state.stations[nextIndex]
        },
        getPrevStation: state => curStation => {
            let curIndex = state.stations.indexOf(curStation)
            let prevIndex = curIndex - 1
            if( prevIndex < 0 ) prevIndex = state.stations.length - 1
            console.log(state.stations[prevIndex].route)
            return state.stations[prevIndex]
        },
    },
}
