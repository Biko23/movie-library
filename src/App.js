import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllMoviesPage from './pages/AllMovies'
import NewMoviePage from './pages/NewMovie'
import FavouritesPage from './pages/Favourites'
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' exact element={<AllMoviesPage />} />
          <Route path='/new-movie' element={<NewMoviePage />} />
          <Route path='/favourites' element={<FavouritesPage />} />
        </Routes>
      </Layout>
      
    </div>
  );
}

export default App;
