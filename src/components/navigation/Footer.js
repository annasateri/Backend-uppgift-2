import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<footer className="footer-bg text-center">
  <div className="container p-4 pb-0">
    <section>
      <form>
        <div className="row d-flex justify-content-center">
 
          <div className="col-auto mb-3">
            <p className="pt-2">
              <strong>Subscribe to receive updates,<br/>access to exclusive deals and more.</strong>
            </p>
          </div>
   
          <div className="col-md-5 col-12 mt-3">
            <input type="email" className="form-control" placeholder="E-mail"/>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-rounded font-weight-bold mt-3">
              Subscribe
            </button>
          </div>

        </div>
      </form>
    </section>
  </div>
  <div className="small text-center p-3 bg-black text-white">
    © 2021 Copyright:
    <Link to={`/`} className="footer-link"> Jewelryofsweden.com</Link>
  </div>
</footer>
    )
}

export default Footer
