import React from 'react';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router'

import Contact from './components/Contact/Contact'
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">

    <NavBar />
<Switch>
<Route exact path="/" component={Home} />

<Route exact path="/contact" component={Contact} />

</Switch>

<Footer/>
  
      </div>
      
  );
}

export default App;
