import MovieItem from './MovieItem'
import styles from './MovieList.module.css'

function MovieList(props) {
  return (
    <ul className={styles.list}>
      {props.movies.map((movie) => (
                        <MovieItem
                          key={movie.id}
                          id={movie.is}
                          image={movie.image}
                          title={movie.title}
                          genre={movie.genre}
                          release_date={movie.release_date}
                        />
                        )
                      )
      }
    </ul>
  )
}

export default MovieList