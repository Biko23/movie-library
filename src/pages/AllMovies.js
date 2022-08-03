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
    return (
      <section>
        <h1>All Movies</h1>
        <MovieList movies={DUMMY_DATA} />
      </section>
        )
}

export default AllMoviesPage