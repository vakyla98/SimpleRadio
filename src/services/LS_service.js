export class LS_service {
    getFavourites() {
        console.log('catched')
        let favourites = JSON.parse(localStorage.getItem('favourites'))
        return favourites || []
    }
    setFavourites(favourites) {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
}
