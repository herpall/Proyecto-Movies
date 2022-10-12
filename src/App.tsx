import { Typography, ImageList, Container, ImageListItem, Box, Link, Grid } from '@mui/material';
import React from 'react';
import './App.css';
import MaAppBar from './Components/AppBar';
import Footer from './Components/Footer';
import axios from 'axios';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Movie from './Pages/Movie';
import Page404 from './Pages/Page404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <MaAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Movie/:id" element={<Movie/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes> 
      <Footer/>
    </Router>
  );
}



export default App;
