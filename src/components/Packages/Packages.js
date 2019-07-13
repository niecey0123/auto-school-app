import React from 'react';


const Packages =()=>{
    return(
        <table class="table">
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
    )
}

export default Packages;