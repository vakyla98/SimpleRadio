export class LS_service {
    getFavourites() {
        return JSON.parse(localStorage.getItem('favourites')) || []
    }
    setFavourites(favourites) {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
}
