import React from 'react';
import '../Review.css'


const Review = () => {
    return (
        <div className="reviews">
       <section className="section">
            <div className="container">
            <h1 className="title">Testimonials</h1>
            </div>
        </section>
         <div className="reviewContainer">

            <div className="quote">
            <img className=" quote-logo" src={require('../../images/quotes.png')} alt="quotation"/>
            <br></br>
            <p className="review">"Calm and assured driving class. I am a nervous driver and appreciate the patience and guidance offered by the teacher."</p>
            <div id="driver-photo1"></div>
            <h4 className="driver-name">Lyn Z.</h4>
            </div>

            <div className="quote">
            <img className=" quote-logo" src={require('../../images/quotes.png')} alt="quotation"/>
            <br></br>
            <p className="review">" I took this class and felt so confident driving after getting my license. Thank you so much for being so uplifting and reassuring me that I can do it! "</p>
            <div id="driver-photo2"></div>
            <h4 className="driver-name">Mark B.</h4>
            </div>

             <div className="quote">
            <img className=" quote-logo" src={require('../../images/quotes.png')} alt="quotation"/>
            <br></br>
            <p className="review">"The instructors were soooo amazing. I took 8 lessons and I can definetly say it was worth every dollar. I was afraid because I've had bad experiences in the past. My overall experience has been great, Thanks!"</p>
            <div id="driver-photo3"></div>
            <h4 className="driver-name">Kyrstal W.</h4>
            </div>

            </div> 


        </div>
    )
}

export default Review
