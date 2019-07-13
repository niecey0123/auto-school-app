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
         <li className="navbar-item"><Link to="/">HOME</Link></li>
          <li className="navbar-item"><Link to={'/about'}>ABOUT US</Link></li>

          <li className="navbar-item"><Link to={'/reviews'}>REVIEWS</Link></li>
          <li className="navbar-item"><Link to={'/package-deals'}>PACKAGES</Link></li>
          <li className="navbar-item"><Link to="/contact">CONTACT US</Link></li>

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


