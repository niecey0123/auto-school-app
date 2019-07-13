import React from 'react';
import '../Promotions.css'



const Promotions=()=>{
    return (
        <div className="promo">
        <div className="offer-container">
    <div>
        <ol className="offer1">
        <h3>Individual Lessons</h3>
        <li className="list1">45 Mins Per Lesson</li>
        <img src={require('../../images/road.jpg')} alt="car_photo"/>
        </ol>
       
    </div>

    <div>
        <ol className="offer2">
        <h3>Lesson Packages</h3>
        <li className="list2">Car Provided For Road Test</li>
        <li className="list2">Road Test Appointment</li>
        <img src={require('../../images/save.png')} alt="savings_photo"/>

        </ol>
       
    </div>

    <div>
        <ol className="offer3">
        <h3 id="skills">Special Skills</h3>
        <li className="list3">Highway Lessons</li>
        <li className="list3">Evaluation Lessons</li>
        {/* <li className="list3">Lane Changing Lessons</li> */}

        <img className="beware" src={require('../../images/beware.jpeg')} alt="caution_photo"/>

        </ol>
       
    </div>

  
        </div>
         <button className="btn">
        Learn More 
        </button> 
        </div>
        )
}




export default Promotions