import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/userActions';
import { useHistory } from 'react-router-dom';
import imageLogo from '../assets/images/LogoFrontpage.png';

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const loggedIn = useSelector(state => state.userReducer.loggedIn)

    let email = useRef();
    let password = useRef();

    const loginUser = (e) => {
        e.preventDefault();
        const user = {
            email: email.current.value,
            password: password.current.value
        }
        dispatch(login(user))
    }

    useEffect(() => {
        if(loggedIn) {
            history.push('/')
        }
    }, [history, loggedIn])


    return (

    <div className="login container mt-5 w-50">
        <div className="text-center">
            <img className="card-img-top img" src={imageLogo} alt="..." />
        </div>
        <form className="text-center m-0 border border-light p-5" onSubmit={loginUser} >
            <p className="h4 mb-4">SIGN IN</p>
            {/* <!-- Email --> */}
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" v-model="email" placeholder="E-mail" ref={email} />
            {/* <!-- Password --> */}
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" v-model="password" placeholder="Password" ref={password} />
            {/* <!-- Sign in button --> */}
            <button className="btn btn-block font-weight-bold" type="submit">SIGN IN</button>
            <p className="m-0 py-2">or</p>
            <button className="btn signIn btn-block font-weight-bold"><i className="fab fa-facebook-f pe-2"></i> SIGN IN WITH FACEBOOK</button>
            {/* <!-- Register --> */}
            <p className="pt-3">New at Jewelry Of Sweden? 
            &ensp;<a className="link" href="/register">Join us!</a>
            </p>
        </form>
    </div>
    )
}

export default Login
