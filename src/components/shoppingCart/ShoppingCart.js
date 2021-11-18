import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import { NavLink } from 'react-router-dom';

const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

  const empty = (
    <div className="p-2 d-flex align-items-center">
      Your cart is empty
    </div>
  )

  return (
    <div>
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
      {
        shoppingCart.length < 1 && empty
      }

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Amount: <span>{totalCartAmount}</span> SEK
          </div>
          <small className="text-muted"><i className="fas fa-gem"></i> Free shipping</small>
        </div>
        <NavLink exact className="nav-link" to="/cart">
        <button className="btn font-weight-bold">Checkout</button>
        </NavLink>
      </div>
      
    </div>
  )
}

export default ShoppingCart

