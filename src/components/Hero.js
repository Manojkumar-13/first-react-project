import React from 'react';
// font awsome import
import{library} from '@fortawesome/fontawesome-svg-core';
import{fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

const Hero = () =>{
  return(
    <div>
      <Nav/>
      <div className="hero">
      <div className="banner">
      <h1 className="banner-title">
        MY Book Store
      </h1>
      <a href='#book' className="btn-banner">Show Now</a>
      </div>
      </div>
    </div>
  )
};
const Nav = () => {
  return(
  <nav className ="navbar">
    <div className ="nav-center">
      <span className ="nav-icon">
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      </span>
      <div className ="navbar-brand">
        Book <span className ="navbar-brand-title">Store</span>
      </div>
      <div className ="btn-cart">
        <span className ="nav-icon">
        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
        </span>
        <div className ="cart-items">0</div>
      </div>
    </div>
  </nav>
  );
}

export default Hero
