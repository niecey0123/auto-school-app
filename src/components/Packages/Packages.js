import React from 'react';
import '../Packages.css'

const Packages =()=>{
    return(
        <div className="table-container">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Driving Lessons</th>
            <th scope="col">Lesson With Car For Road Test</th>
            <th scope="col">Road Test Appointment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1 Lesson <br></br>
            $40</th>
            <td>$130</td>
            <td>$20</td>
          </tr>
          <tr>
          <th scope="row">6 Lessons <br></br>
            $224</th>
            <td>$320</td>
            <td>Free</td>
          </tr>
          <tr>
          <th scope="row">8 Lessons <br></br>
            $305</th>
            <td>$405</td>
            <td>Free</td>
          </tr>
          <tr>
          <th scope="row">10 Lessons <br></br>
            $380</th>
             <td>$480</td>
            <td>Free</td>
          </tr>
          <tr>
          <th scope="row">12 Lessons <br></br>
            $470</th>
            <td>$565</td>
            <td>Free </td>
          </tr>
          <tr>
              
              <th scope="row">15 Lessons <br></br>
                $580</th>
                 <td>$670</td>
                <td>Free</td>
              </tr>
          <tr>
              
          <th scope="row">20 Lessons <br></br>
            $740</th>
             <td>$850</td>
            <td>Free</td>
          </tr>
         
        </tbody>
      </table>

        <h2 id="special">Special Skills</h2>
      <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Highway Lessons<br></br>
            90 mins per lesson</th>
            <th scope="col">Evaluation Lessons <br></br>
            45 mins per lesson</th>
            <th scope="col">Lane Changing Lessons<br></br>
            90 mins per lesson</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$150</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          
          </tbody>
          </table>
      </div>

      <div className="notification is-warning">
        <button className="delete"></button>
        <strong>Note:</strong> An additional fee of $50 will be added for any road test taken outside of Brooklyn.
         , plus toll fess if applicable. Any lesson cancellation must be done <strong>24 hours in advance</strong>.<p id="finePrint">
           The above prices are subject to change at anytime without notice.  
         </p>
    </div>
      </div>
    )
}

export default Packages;