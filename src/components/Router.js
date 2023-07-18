import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from '../components/Main/Main';
import Movies from '../components/Movies/Movies';
import SavedMovies from '../components/SavedMovies/SavedMovies';
import Profile from '../components/Profile/Profile';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import NotFound from '../components/NotFound/NotFound'

import MainLayout from '../layouts/MainLayout/MainLayout';
import PureLayout from '../layouts/PureLayout/PureLayout';
import ProfileLayout from '../layouts/ProfileLayout/ProfileLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="/saved-movies" element={<SavedMovies/>}/>
      </Route>      
      <Route path="/profile" element={<ProfileLayout/>}>
        <Route index element={<Profile/>}/>
      </Route>
      <Route path="/signup" element={<PureLayout/>}>
        <Route path="" element={<Register/>}/>
      </Route>
      <Route path="/signin" element={<PureLayout/>}>
        <Route path="" element={<Login/>}/>
      </Route>
      <Route path="/*" element={<PureLayout/>}>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </>
  )
);

export default router;
