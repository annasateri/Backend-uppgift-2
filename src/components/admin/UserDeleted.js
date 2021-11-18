import React from 'react';
import { useHistory } from 'react-router-dom';

const UserDeleted = () => {

    const history = useHistory();

    const goBack = () => {
        history.push('/admin')
      }

    return (
        <div className="product-details text-center">
        <div className="card">
            <div className="card-header">Jewelry of Sweden
            </div>
            <div>
                <h1 className="display-1 mt-3"><i className="far fa-check-circle"></i></h1>
                <h5 className="card-title mb-5">User deleted successfully</h5>
                <p className="card-text">
                    User was deleted permanently,<br/>press the button below to be redirected to the Admin page.
                </p>
                <button className="btn" onClick={goBack}>go back</button>
            </div>
        </div>
        </div>
    )
}

export default UserDeleted
