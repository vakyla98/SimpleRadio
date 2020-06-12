import {db} from '../../main'
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
            let info = db.ref().child('stations/')
            info.once('value', snapshot => {
                snapshot.forEach(el => {
                    stations.push(el.toJSON())
                })
            })
            ctx.commit('updateStations', stations)
        },
    },
    getters: {
        getAllStations(state){
            return state.stations
        },
    },
}
