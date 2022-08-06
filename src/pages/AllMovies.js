import { useState, useEffect } from 'react'

// import MovieItem from '../components/movies/movieItem'
import MovieList from '../components/movies/MovieList'

const DUMMY_DATA = [
    {   id: '1',
        image: '',
        title: 'Test movie 1',
        genre: ['Action', 'Comedy', 'Fantasy'],
        release_date: '01-01-2000',
    },
    {   id: '2',
    image: '',
    title: 'Test movie 2',
    genre: ['Action', 'Comedy', 'Fantasy'],
    release_date: '01-01-2001',
    },
    {   id: '3',
    image: '',
    title: 'Test movie 3',
    genre: ['Action', 'Comedy', 'Fantasy'],
    release_date: '01-01-2002',
    },
    {   id: '4',
    image: '',
    title: 'Test movie 4',
    genre: ['Action', 'Comedy', 'Fantasy'],
    release_date: '01-01-2003',
    },
    {   id: '5',
    image: '',
    title: 'Test movie 5',
    genre: ['Action', 'Comedy', 'Fantasy'],
    release_date: '01-01-2004',
    }
]

function AllMoviesPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://movie-library-9ef95-default-rtdb.firebaseio.com/movies.json')
      .then((response) => {
        console.log("Response: ", response.json);
        return response.json
      })
      .then((data) => {

        const movies = []
        for(const key in data) {
          const movie = {
            id: key,
            ...data[key]
          }


          movies.push(movie)
        }
        setIsLoading(false)
        setMovies(movies)
      })
    }, [])
  

    if (isLoading) {
      return (
        <section>
          <p>Loading</p>
        </section>
      )      
    }
    return (
      <section>
        <h1>All Movies</h1>
        <MovieList movies={DUMMY_DATA} />
      </section>
        )
}

export default AllMoviesPage