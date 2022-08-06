import { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavouritesContext from '../../store/FavouritesContext'

function MainNavigation() {

    const favoritesContext = useContext(FavouritesContext)

    return <header className={classes.header}>
        <div>Movies Library</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All movies</Link>
                </li>
                <li>
                    <Link to='/new-movie'>New Movie</Link>
                </li>
                <li>
                    <Link to='/favourites'>Favourites<span className={classes.badge}>{favoritesContext.totalFavourites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>

}

export default MainNavigation