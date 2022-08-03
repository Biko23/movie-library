import { Route, Routes } from 'react-router-dom'
import AllMoviesPage from './pages/AllMovies'
import NewMoviePage from './pages/NewMovie'
import FavouritesPage from './pages/Favourites'
import MainNavigation from './components/layout/MainNavigation'
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' exact element={<AllMoviesPage />} />
        <Route path='/new-movie' element={<NewMoviePage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
