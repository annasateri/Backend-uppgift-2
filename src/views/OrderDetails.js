import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneOrder, setOneOrder } from '../store/actions/orderActions';
import OrderCart from '../components/orders/OrderCart';

const OrderDetails = () => {

    const id = useParams().id
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getOneOrder(id))
       
        return () => {
            dispatch(setOneOrder(null))
        }
    }, [dispatch, id])


    const order = useSelector(state => state.orderReducer.order);


    return (
        <div>
            {
                order ?
                <div className="container mt-5">

                <div className="text-center">
                    <h3 className="mb-5">Orderdetails</h3>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col"><i className="fas fa-gem"></i></th>
                        <th scope="col">Product</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                        
                        {
                            order.cart ?

                            order.cart.map(product => (
                                <OrderCart key={product.index} product={product} />
                            ))
                            :
                            <p>No products...</p>

                        }

                    </table>

                    </div>
                </div>

                :
                <div>loading...</div>
            }
            

        </div>
    )
}

export default OrderDetails
