import { useNavigate } from 'react-router-dom'
import NewMovieForm from '../components/movies/NewMovieForm'
function NewMoviesPage() {

    const navigate = useNavigate()

    function addMovieHandler(movieData) {
        fetch('https://movie-library-9ef95-default-rtdb.firebaseio.com/movies.json',
        {
            method: 'POST',
            body:   JSON.stringify(movieData),
            headers:    {
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            navigate('/')
        })
    }
    return (
    <div>New Movies page
        <NewMovieForm  onAddMovie={addMovieHandler}/>
    </div>
    )
}

export default NewMoviesPage