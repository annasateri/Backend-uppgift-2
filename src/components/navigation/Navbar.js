import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { logout } from '../../store/actions/userActions';
import logoNavbar from '../../assets/images/logoNavbar.png';

const Navbar = () => {

    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.userReducer.loggedIn)
    const user = useSelector(state => state.userReducer.oneUser);
    const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)

    const history = useHistory();

    const logoutUser = () => {
        dispatch(logout())

        history.push('/')
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="logo-text">
        <NavLink exact className="nav-link" to="/">
            <img className="navbar-brand logo-img" src={logoNavbar} alt="" />
        </NavLink>
        </div>
        <div className="container">
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact className="nav-link" to="/shop">Shop</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact className="nav-link" to="/newin">New In</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact className="nav-link" to="/aboutus">About Us</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact className="nav-link" to="/createproduct"><i className="fas fa-plus"></i></NavLink>
                </li>
            </ul>
                <ul className="nav-item navbar-nav ml-auto nav-flex-icons">

            <li className="nav-item dropdown">
                <span
                className="nav-link dropdown-toggle hidden-arrow"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <i className="fas fa-user"></i>
                </span>
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="navbarDropdownMenuLink">

                    {
                        loggedIn && user ?
                        <div>
                        <NavLink exact className="nav-link" to="/order">My Orders</NavLink>

                        {
                            user.admin ?
                            <NavLink exact className="nav-link" to="/admin">Admin</NavLink>
                            :
                            ''
                        }

                        <Link to={`/`}><button className="btn w-100 font-weight-bold" onClick={logoutUser}>Logout</button></Link>
                        </div>
                        :
                        <Link to={`/login`}><button className="btn w-100 font-weight-bold">Login</button></Link>
                    }

                </ul>
            </li>
                
            <li className="nav-item dropdown">
                <span
                className="nav-link dropdown-toggle hidden-arrow"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <i className="fas fa-shopping-bag"></i>
                {
                    totalCartQuantity > 0 ? 
                    <span className="badge rounded-pill badge-notification">{ totalCartQuantity }</span>
                    :
                    ''
                }
                </span>
                <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                    <ShoppingCart />
                </ul>
            </li>

        </ul>
        </div>
    </div>
    </nav>
    )
}

export default Navbar
