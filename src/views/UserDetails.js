import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getOneUser, setUser, deleteUser, updateUser } from '../store/actions/userActions';

const UserDetails = () => {

    const user = useSelector(state => state.userReducer.getUser);

    const [edit, setEdit] = useState(false)

    let userFirstName = useRef()
    let userLastName = useRef()
    let userEmail = useRef()

    const handleSubmit = (user) => {

        let updatedUser = {
            _id: user._id,
            // firstName = Om ref-value finns så använder den värdet man har skrivit in. Annars används det befintliga värdet som användaren redan har. 
            firstName: userFirstName.current.value ? userFirstName.current.value : user.firstName,
            lastName: userLastName.current.value ? userLastName.current.value : user.lastName,
            email: userEmail.current.value ? userEmail.current.value : user.email
        }

        dispatch(updateUser(updatedUser));
        console.log(updatedUser)
        setEdit(false)
        
      };

    const history = useHistory();
     
        const id = useParams().id
        const dispatch = useDispatch();

        const deleteOneUser = (_id) => {
            dispatch(deleteUser(_id))
            history.push('/userdeleted')
          }

          const toggleEdit = () => {
              if(edit) {
                  setEdit(false)
              } else {
                  setEdit(true)
              }
          }

        useEffect(() => {
            dispatch(getOneUser(id))
            return () => {
                dispatch(setUser(null))
            }
            
        }, [dispatch, id])


    return (

        <div>

            {
                user ?

                <div>
                    <div>
                    <h3 className="mt-5 mb-5">Customer information</h3>
                    
                    <div>
                    {
                        edit ?
                        <div>
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col"><i className="fas fa-gem"></i></th>
                                <th scope="col">Email</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">User ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"><i className="fas fa-gem"></i></th>
                                <td><input type="text" className="form-control" ref={userEmail} placeholder={ user.email } /></td>
                                <td><input type="text" className="form-control" ref={userFirstName} placeholder={ user.firstName } /></td>
                                <td><input type="text" className="form-control" ref={userLastName} placeholder={ user.lastName } /></td>
                                <td>{ user._id }</td>
                                </tr>
                            </tbody>
                            </table>
                            <p className="mt-5">When you save the new information the previous information can not be restored.</p>
                        </div>

                        :

                        <div>
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col"><i className="fas fa-gem"></i></th>
                                <th scope="col">Email</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">User ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"><i className="fas fa-gem"></i></th>
                                <td>{ user.email }</td>
                                <td>{ user.firstName }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user._id }</td>
                                </tr>

                            </tbody>
                            </table>
                            <p className="mt-5">Edit user information allows the admin to update/modify some information in customer accounts such as email address, firstname and lastname.<br/>It may not provide access for modifying users password.</p>
                        </div>
                    }
                    </div>

                        <div className="d-flex">
                            <button className="btn-admin me-2" onClick={() => toggleEdit()}>{edit ? 'Cancel' : 'Edit'}</button>
                            {
                                edit ?
                                <div className="d-flex">
                                    <button className="btn-admin me-2" onClick={() => handleSubmit(user)}>Save</button>
                                    <button className="btn-admin" onClick={() => deleteOneUser(user._id)}><i className="fas fa-trash"></i></button>
                                </div>
                                :
                                ''
                                
                            }


                        </div>
                        </div>
                </div>
                : 
                <p>loading...</p>
            }
        </div>
    )
}

export default UserDetails