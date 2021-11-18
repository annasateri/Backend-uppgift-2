import React from 'react';
import logoFrontpage from '../assets/images/LogoFrontpage.png';
import homeImage from '../assets/images/frontpage1.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className="home">
      <div className="container pt-5">
        <div className="text-center mt-3">
          <img className="logo-home card-img-top" src={logoFrontpage} alt="..." />
          
          <div className="card-body-cascade text-center">
            <h6 className="font-weight-bold indigo-text py-2">EXCLUSIVE JEWELRY FOR EVERY OCCASION</h6>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed debitis accusantium, sapiente quae non aut architecto odit vitae inventore molestias, saepe quasi!<br/>Consectetur ducimus nulla corporis explicabo numquam aliquid in sit praesentium culpa iste officiis quisquam mollitia odio assumenda dolorum nesciunt corrupti, quam facere sunt sed. Nostrum, exercitationem nemo.</p>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum possimus quod animi aperiam dolorem adipisci fugiat et odio. Laboriosam sapiente nam quidem animi, voluptates sequi quam! Quaerat, at quis.<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nobis dolorem iusto amet ipsam, fugit totam atque architecto, voluptates tenetur eveniet praesentium alias ab fugiat, minus nisi. Est blanditiis, expedita libero omnis, vero unde a id consectetur at itaque aliquid.</p>
            {/* <!-- Linkedin --> */}
            <Link to={`/`} className="px-2 fa-lg li-ic"><i className="fab fa-instagram"></i></Link>
            {/* <!-- Twitter --> */}
            <Link to={`/`} className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></Link>
            {/* <!-- Dribbble --> */}
            <Link to={`/`} className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></Link>
          </div>
        </div>
        <div className="card shadow-0 card-cascade wider reverse">
      </div>
      <div className="mt-0">
        <div className="row">
          <img className="card-img-top" src={homeImage} alt="..." />
        </div>
      </div>
    </div>
  </div>


    )
}

export default Home
