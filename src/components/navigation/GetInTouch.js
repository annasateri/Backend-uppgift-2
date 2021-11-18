import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
<div className="get-in-touch">
    <div className="container text-center mb-5">
        <div className="p-5">
            <i className="fas fa-gem"></i>
            <p>INFO@JEWELRYOFSWEDEN.COM</p>
            <h4>GET IN TOUCH</h4>
            <p>Have any questions regarding the brand or our products? Please take a minute to read our <Link to={`/`} className="links">FAQ's.</Link><br/>If you can't find what you're looking for, don't hesitate to contact us at <Link to={`/`} className="links">info@jewelryofsweden.com</Link> and we'll get back to you as soon as possible.</p>
        </div>
    </div>
</div>
    )
}

export default GetInTouch
