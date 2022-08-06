import { useRef } from 'react'

import styles from './NewMovieForm.module.css'
import Card from '../ui/Card'

function NewMovieForm(props) {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const genreInputRef = useRef()
    const releaseDateInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()

        const title = titleInputRef.current.value
        const image = imageInputRef.current.value
        const genre = genreInputRef.current.value
        const releaseDate = releaseDateInputRef.current.value

        const movieData = {
            title : title,
            image: image,
            genre: genre,
            releaseDate: releaseDate
        }
        console.log('New movie: ', movieData);

        props.onAddMovie(movieData)


    }
    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Movie title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Movie Art</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='genre'>Movie genre</label>
                    <input type='text' required id='genre' ref={genreInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='releaseDate'>Movie Release Date</label>
                    <input type='date' required id='releaseDate' ref={releaseDateInputRef} />
                </div>
                <div className={styles.actions}>
                    <button>Submit</button>
                </div>
    
            </form>
        </Card>
        )
}

export default NewMovieForm