import React from 'react';
import '../About.css'

const About =()=>{
    return(
    <div>
    <section className="section">
    <div className="container">
      <h1 className="title">About Us</h1>
    </div>
   </section>

<div className="facts">
  <h1 className="fact">Utopia Auto School Is Licensed By The State Of New York</h1>
  <br></br>
    <p className="fact-info" >
    We are located in the FlatBush section of Brooklyn and proudly serve the 5 boroughs and surrounding areas. 
    </p>

  <br></br>

  <h1 className="fact">What We Offer To Our Customers</h1>
  <br></br>
  <p  className="fact-info" >
  We offer professional driving instruction throughout the week including Saturdays and Sundays, mornings and evenings. We secure road test appointments and provide you with dependable easy to control vehicles for your road test.
  </p>

  <br></br>

  <h1 className="fact">Customer Appreciation</h1>
  <br></br>
  <p  className="fact-info" >
  Thank you so much for choosing the Utopia Auto School. We truly value you and look forward to providing you with great quality professional driving instruction.
  </p>


  </div>
  {/* <img id="car1" src={require('../../images/car1.png')} alt="design"/> */}

 </div>
    )
}


export default About;