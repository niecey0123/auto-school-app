import React from 'react';
import '../SlideShow.css'


const pic1 = require('../../images/slide1.jpg');
const pic2 = require('../../images/slide2.jpg');
const pic3 = require('../../images/slide3.jpg');




const SlideShow =()=>{
    return(
        <div>
       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={pic1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic3}alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

{/* <div>
<button className="btn">
 Learn More 
</button>
</div> */}
</div>

    )
}

export default SlideShow;