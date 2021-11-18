import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, changeStatus } from '../../store/actions/orderActions';
import ordersAdminImg from '../../assets/images/ordersAdmin.png';

const AdminOrder = () => {

    const dispatch = useDispatch();

    let orders = useSelector(state => state.orderReducer.orders)


    useEffect(() => {
        dispatch(getOrders())
    },[dispatch])


    const statusBtn = (order) => {
      if(order.delivered) {
        let data = {
          ...order,
          value: false
        }
        dispatch(changeStatus(data))
      } else {
        let data = {
          ...order,
          value: true
        }
        dispatch(changeStatus(data))
      }
    }



    return (
        <div className="text-center mt-5">
            <img src={ordersAdminImg} className="admin-image" alt="..."/>
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
                      <strong>CREATED</strong>
                    </th>
                    <th>
                      <strong>DELIVERED</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>

                {
                        orders && orders.map(order => (

                            <tr className="one-order" key={order._id} order={orders} >
                            <th scope="row"><i className="fas fa-gem"></i></th>
                                  <td>{ order.email }</td>
                                  <td>{ order._id }</td>
                                  <td>{ order.totalPrice } SEK</td>
                                  <td>{ order.createdAt.slice(0, 10) } </td>
                                  <td><button className={`btn-admin ${order.delivered ? 'btn-success' : 'btn-dark'}`} onClick={() => statusBtn(order)}>{order.delivered ? 'Yes' : 'No'} </button></td>
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

export default AdminOrder
