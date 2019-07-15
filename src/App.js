import React , {Component} from 'react';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router'

import Contact from './components/Contact/Contact'
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';
import About from './components/About/About';
import Review from './components/Reviews/Review';



  class App  extends Component {
    state = { 
      autoSchool:{
        name: 'Utopia Auto School', address: '1722 Flatbush Ave',city:'Brooklyn',state:'New York',number:'(646) 479-1666',email:'utopiaautoschool@gmail.com'
      }
     }

    render() { 
  return (
    <div className="App">

    <NavBar />
<Switch>
<Route exact path="/" component={Home} />

<Route exact path="/contact" component={Contact} />
<Route exact path="/package-deals" component={Packages} />
<Route exact path="/about" component={About} />
<Route exact path="/reviews" component={Review} school={this.state.autoSchool} />


</Switch>

<Footer/>
  
      </div>
      
  );
  }
}
export default App;
