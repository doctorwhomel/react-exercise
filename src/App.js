import React from 'react';
import logo from './logo.svg';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <CampsitesList/>
      <Footer />
    </div>  
    );
}

export default App;
