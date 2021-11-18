import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../../store/actions/userActions';
import usersAdminImg from '../../assets/images/usersAdmin.png';

const AdminUser = () => {

    const dispatch = useDispatch();
    const history = useHistory();


    let users = useSelector(state => state.userReducer.users)


    const oneUser = (user) => {
        // history.push('/userdetails/' + user._id)
        history.push({
          pathname: '/userdetails/' + user._id,
          state: user
        })
    }

    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])



    return (
        <div className="text-center mt-5">
            <img src={usersAdminImg} className="admin-image" alt="..."/>
            <div className="container my-5">
            <section className="dark-grey-text mb-5">
            {/* <!-- Table --> */}
            <div className="card">
              <table className="table table-responsive-md mb-0">
                <thead className="card-body">
                  <tr>
                    <th>
                      <strong><i className="fas fa-gem"></i></strong>
                    </th>
                    <th>
                      <strong>FIRSTNAME</strong>
                    </th>
                    <th>
                      <strong>LASTNAME</strong>
                    </th>
                    <th>
                      <strong>EMAIL</strong>
                    </th>
                    <th>
                      <strong>ID</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                            
                            {
                            users && users.map(user => (
    
                                // <tr onClick={() => oneUser(user._id)} className="pointer one-order" key={user._id} user={user}>
                                <tr onClick={() => oneUser(user)} className="pointer one-order" key={user._id} user={user}>
                                <th scope="row"><i className="fas fa-gem"></i></th>
                                      <td>{ user.firstName }</td>
                                      <td>{ user.lastName }</td>
                                      <td>{ user.email }</td>
                                      <td>{ user._id }</td>
                                </tr>
    
                            ))
                    }


                </tbody>
              </table>
            </div>
          {/* <!-- Table --> */}
      </section>
    </div>
    </div>

    )
}

export default AdminUser
