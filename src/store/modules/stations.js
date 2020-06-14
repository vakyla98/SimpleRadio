import axios from 'axios'
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
            let stations = []
            //request give not an array of objects, so we structure the data as we need
            await axios
                .get('https://simple-radio-x.firebaseio.com/stations.json')
                .then(res => {
                    for (let prop in res.data) {
                        stations.push(res.data[prop])
                    }
                })
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
