import React from 'react';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router'

import Contact from './components/Contact/Contact'
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';



function App() {
  return (
    <div className="App">

    <NavBar />
<Switch>
<Route exact path="/" component={Home} />

<Route exact path="/contact" component={Contact} />
<Route exact path="/package-deals" component={Packages} />

</Switch>

<Footer/>
  
      </div>
      
  );
}

export default App;
