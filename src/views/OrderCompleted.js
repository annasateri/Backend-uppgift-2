import React from 'react';
import { Link } from 'react-router-dom';
import thankYou from '../assets/images/thankYou.png';
import logoFrontPage from '../assets/images/LogoFrontpage.png';
import orderImg from '../assets/images/orderImg.png';

const OrderCompleted = () => {
    return (
    <div className="order-completed">
        <div className="container shadow-2 text-center mt-5">
            <div>
                <img className="thankYou" src={thankYou} alt="..." />
                <h4>FOR YOUR ORDER<br/>AT</h4>
                <img className="logo-ordercomp mb-4" src={logoFrontPage} alt="..." />
                <p>We hope you enjoy your purchase!<br/>You will soon receive an<br/>order confirmation sent to your email.<br/>Get <b>15% OFF</b> your next order, use code: <b>THANKYOU15</b></p>
                <Link className="links" to={`/`}>www.jewelryofsweden.com</Link>
            </div>
    
            <div>
                <img className="orderimgcompleted" src={orderImg} alt="..." />
            </div>
        </div>
    </div>
    )
}

export default OrderCompleted
