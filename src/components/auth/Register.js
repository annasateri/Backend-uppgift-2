import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/userActions';
import { useHistory } from 'react-router-dom';


const Register = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    let firstName = useRef();
    let lastName = useRef();
    let email = useRef();
    let password = useRef();

    const reset = () => {
        document.querySelector('#form').reset()
    }

    const loggedIn = useSelector(state => state.userReducer.loggedIn)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName.current.value !== '' && lastName.current.value !== '' && email.current.value !== '' && password.current.value !== '') {
            const newUser = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                password: password.current.value
            }
            dispatch(registerUser(newUser))
            reset();
            console.log(newUser)
        } else {
            console.log('error')
        }
    }

    useEffect(() => {
        if(loggedIn) {
            history.push('/')
        }
    }, [history, loggedIn])


        return (
            
        <div className="register container mt-5 w-50">
            <form className="text-center border border-light p-5" id="form" onSubmit={handleSubmit}>
                <p className="h4 mb-4">SIGN UP</p>
                {/* First name and Last name */}
                <input type="firstName" name="firstName" className="form-control mb-4" placeholder="First name" ref={firstName} required />
                <input type="lastName" name="lastName" className="form-control mb-4" placeholder="Last name" ref={lastName} required />
                {/* <!-- E-mail --> */}
                <input type="email" name="email" className="form-control mb-4" placeholder="E-mail" ref={email} required />
                {/* <!-- Password --> */}
                <input type="password" name="password" className="form-control mb-4" placeholder="Password" ref={password} required />
                {/* <!-- Sign up button --> */}
                <button className="btn signIn btn-block font-weight-bold" type="submit">SIGN UP</button>
                <p className="m-0 py-2">or</p>
                <button className="btn signIn btn-block font-weight-bold"><i className="fab fa-facebook-f pe-2"></i> SIGN UP WITH FACEBOOK</button>

                {/* <!-- Login --> */}
                <p className="pt-3">Already a member?
                &ensp;<a className="link" href="/login">Login</a>
                </p>
            </form>
        </div>
        )
}

export default Register