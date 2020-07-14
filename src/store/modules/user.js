export default {
    state: {
        favouritesStations: [],
    },
    mutations: {
        updateFavourites(state, favourites) {
            if (favourites.length) {
                state.favouritesStations = favourites
            }
        },
    },
    actions: {},
    getters: {},
}
