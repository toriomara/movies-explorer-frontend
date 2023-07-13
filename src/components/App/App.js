import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import '../../index.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound'

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <Layout isLogged={isLogged}>
      <main className="content">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/saved-movies' element={<SavedMovies/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
    </Layout>
  )
}

export default App;
