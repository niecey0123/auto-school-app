import React from 'react';
import {Link} from 'react-router-dom'
import '../NavBar.css'



const logo = require('../../images/autoLogo.png');
const NavBar = ()=>{
    return(
<header>
      <div>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">

       <div className="navbar-start ">
         <li className="navbar-item"><Link to="/pets">Home</Link></li>
          <li className="navbar-item"><Link to={'/matches'}>ABOUT US</Link></li>
          <li className="navbar-item"><Link to={'/owners'}>REVIEWS</Link></li>
          <li className="navbar-item"><Link to={'/owners'}>PACKAGES</Link></li>
          <li className="navbar-item"><Link to={'/owners'}>CONTACT US</Link></li>

        </div>

        <div className="navbar-end">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
          <img className="logo" src={logo}  alt="" />
      </a>
        </div>
    </div>
 </nav> 
       </div>

</header>
    )
}

export default NavBar
