import React, { useEffect } from 'react';
import OrderCard from '../components/orders/OrderCard';
import { useSelector, useDispatch } from 'react-redux';
import { findUserOrder } from '../store/actions//orderActions';
import myOrders from '../assets/images/Orders.png';

const Order = () => {

    const dispatch = useDispatch();

    let oneUser = useSelector(state => state.userReducer.oneUser)
    let orders = useSelector(state => state.orderReducer.sortedOrders)
    let id

    const sort = () => {
        if(oneUser) {
            let _id = oneUser._id
            id = _id
        }
    }
    sort();


    useEffect(() => {
        dispatch(findUserOrder(id))
    },[dispatch, id])



    return (
  <div className="text-center mt-5">
    <img className="my-orders-title" src={myOrders} alt="..." />
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
                  <strong>EMAIL</strong>
                </th>
                <th>
                  <strong>ID</strong>
                </th>
                <th>
                  <strong>PRICE</strong>
                </th>
                <th>
                  <strong>DELIVERED</strong>
                </th>
              </tr>
            </thead>
            <tbody>
            {
                    orders && orders.map(order => (
                        <OrderCard key={order._id} order={order} />
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

export default Order
