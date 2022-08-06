import { useContext } from 'react'

import FavouritesContext from '../store/FavouritesContext'
import MovieList from '../components/movies/MovieList'

function FavouritesPage() {
    const favouritesContext = useContext(FavouritesContext)
    return (
        <section>
            <h1>My Favourites</h1>
            <MovieList movies = {favouritesContext.favourites}/>
        </section>
    )
}

export default FavouritesPage