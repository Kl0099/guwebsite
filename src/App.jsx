import React, { useState } from 'react'
import FirstSem from './pages/Sem-first/FirstSem'
import Homepage from './pages/Homepage'
import About from './components/aboutus/About'
import Contactus from './components/contactus/Contactus'
import { BrowserRouter as Router,Route,Link, BrowserRouter,Routes} from 'react-router-dom';
import Switch from 'react-router-dom';
// import GoogleFontsLoader from 'google-fonts-loader';

import './app.css';
const App = () => {
//   <GoogleFontsLoader fonts={[{ name: 'Poppins', weights: [300, 400, 500, 600, 700] }]}></GoogleFontsLoader>
  return (
    <BrowserRouter>
     <div className="app">
        <Homepage/>
    </div>
    </BrowserRouter>
   
  )
}

export default App
