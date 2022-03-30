import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='container'>
<footer>
    <div className="row">
      <div className="col-md-6">
        <ul className="footer-nav">
          <li><a href="#">Food Delivery</a></li>
          <li><a href="#about">How it Works</a></li>
          <li><a href="#contact">Our Cities</a></li>
          <li><a href="#contact">Sign up</a></li>
        </ul>
      </div>

      <div className="col-md-9">
        <ul className="footer-social-icon">
          <li><a href="# "><i className="ion-social-facebook icon-small"></i></a></li>
          <li><a href="# "><i className="ion-social-twitter icon-small"></i></a></li>
          <li><a href="# "><i className="ion-social-googleplus icon-small"></i></a></li>
          <li><a href="# "><i className="ion-social-instagram icon-small"></i></a></li>
        </ul>

      </div>

    </div>
    <div className="row">
      <div className="col-sm-6 text-center">
        Copyright &copy; 2022 Saurav Kumar. All rights reserved
      </div>
    </div>
  </footer>


    </div>
  )
}

export default Footer