export default {
    state: {
        favouritesStations: [],
    },
    mutations: {
        toggleFavourite(state, favourite) {
            let hasFavourite = state.favouritesStations.includes(favourite)
            if (hasFavourite) {
                let filtred = state.favouritesStations.filter(
                    el => el !== favourite
                )
                state.favouritesStations = filtred
            } else {
                state.favouritesStations.push(favourite)
            }
        },
        updateFavourites(state, favourites) {
            if (favourites.length) {
                state.favouritesStations = favourites
            }
        },
    },
    actions: {},
    getters: {},
}
