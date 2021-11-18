import React from 'react';
import { useHistory } from 'react-router-dom';

const OrderCard = ({order}) => {

    const history = useHistory();

    const delivered = (
        order.delivered ? 
          <p>Yes</p>
        : <p>No</p>
      )

    const oneOrder = () => {
        history.push('/orderdetails/' + order._id)
    }

    return (
            <tr onClick={oneOrder} className="pointer one-order">
              <th scope="row"><i className="fas fa-gem"></i></th>
                    <td>{ order.email }</td>
                    <td>{ order._id }</td>
                    <td>{ order.totalPrice } SEK</td>
                    <td>{ delivered } </td>
            </tr>
    )
}

export default OrderCard
