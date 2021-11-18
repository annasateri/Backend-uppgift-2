import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/shoppingCart/CartItem';
import { newOrders } from '../store/actions/orderActions';
import cartLogo from '../assets/images/shoppingBag.png';

const Cart = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
    const user = useSelector(state => state.userReducer.oneUser);
    

    const completed = () => {
   
      let newOrder = {
        cart: shoppingCart,
        total: totalCartAmount,
        user: user
      }
      
      dispatch(newOrders(newOrder));
      console.log(newOrder)

      history.push('/ordercompleted')

    }
    
    return (


      <div className="container z-depth-1 p-5 my-5">
          <div className="text-center mb-5">
            <img className="shopping-bag-title" src={cartLogo} alt="..." />
          </div>
          <section>
        
            <div className="table-responsive">
              <table className="table product-table table-cart-v-1">
                <thead>
                  <tr>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Product</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Description</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Quantity</strong>
                    </th>
                    {/* <!-- <th></th> --> */}
                    <th className="font-weight-bold">
                      <strong>Price</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>

            <tbody>
    
            {
                  shoppingCart && shoppingCart.map(product => (
                      <CartItem key={product._id} product={product} />
                  ))
            }
    
              <tr>
                <td colSpan="3"></td>
                <td>
                  <h4 className="mt-2">
                    <strong>Total</strong>
                  </h4>
                </td>
                <td className="text-right">
                  <h4 className="mt-2">
                    <strong>{ totalCartAmount } SEK</strong>
                  </h4>
                </td>
                <td colSpan="3" className="text-right">
                  <button type="button" className="btn btn-rounded px-4 completed-btn" onClick={completed}>Complete purchase &nbsp;
                    <i className="fas fa-angle-right right"></i>
                  </button>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

    
      </section>
    
    </div>
    )
}

export default Cart
