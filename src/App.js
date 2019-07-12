import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import SlideShow from './components/SlideShow/SlideShow'
import Promotions from './components/Promotions/Promotions';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <SlideShow />
    <Promotions />
    <Footer />
      </div>
  );
}

export default App;
