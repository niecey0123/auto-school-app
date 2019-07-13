import React from 'react';
import '../Contact.css'


const Contact =()=>{
    return(
      <div>
  <section class="section">
    <div class="container">
      <h1 class="title">Contact Us</h1>
    </div>
  </section>
        <div className="form">
  
       <div className="field is-horizontal">
  <div className="field-label is-normal">
  <label className="label">Name</label>

  </div>
  <div className="field-body">
    <div className="field">
      <p className="control is-expanded has-icons-left">
        <input className="input" type="firstName" placeholder=" First Name" />
      </p>
    </div>
    <div className="field">
      <p className="control is-expanded  has-icons-right">
        <input className="input " type="lastName" placeholder="Last Name"  />
      </p>
    </div>
  </div>
</div>

  <div className="field is-horizontal email">
    <div className="field-label is-normal">
      <label className="label">Email</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input className="input is-info" type="text" placeholder="alex@smith.com" />
        </div>
      
      </div>
    </div>
  </div>


 <div className="field is-horizontal email">
  <div className="field-label is-normal">
    <label className="label">Leave A Message</label>
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <textarea className="textarea" placeholder="Explain how we can help you" defaultValue={""} />
      </div>
    </div>
  </div>
</div>


        <button class="button is-primary">
          Send message
        </button>



</div>
</div>
    )
}

export default Contact;