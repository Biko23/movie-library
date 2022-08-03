import Card from '../ui/Card'
import styles from './MovieItem.module.css'

function MovieItem(props) {
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
          <button>Favourite</button>
        </div>
      </Card>
    </li>
  )
}

export default MovieItem