import { useContext } from 'react'


import Card from '../ui/Card'
import styles from './MovieItem.module.css'
import FavouritesContext from '../../store/FavouritesContext'

function MovieItem(props) {
  const favouritesContext = useContext(FavouritesContext)
  // const itemIsFavourite = favouritesContext.itemIsFavourite(props.id)
  const itemIsFavourite = favouritesContext.itemIsFavourite(props.id)

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesContext.removeFavourite(props.id)
    } else {
      favouritesContext.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        genre: props.genre,
        releaseDate: props.realease_date
      })
    }
  }
  return (
    <li className={ styles.item}>
      <Card>        
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.genre}</address>
          <p>{props.release_date}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'Add to favourites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MovieItem