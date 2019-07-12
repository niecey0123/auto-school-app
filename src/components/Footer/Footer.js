import React from 'react';
import '../Footer.css'



const Footer =()=>{
    return(
<footer>
  <div className="content has-text-centered iconBox">
  
      {/* <strong>Uptopia Auto School</strong> */}
      <i className="fas fa-map-marker-alt icon "></i>
      <a href="#">Find Us</a>

      <i className="fas fa-envelope-square icon"></i>
      <a href="#">Email Us</a>

      <i className="far fa-comment-dots icon"></i>
      <a href="#">Leave A Review</a>





  </div>
</footer>
    )
}

export default Footer;