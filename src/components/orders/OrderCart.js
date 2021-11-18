import React from 'react';

const OrderCart = ({product}) => {
    return (


  <tbody>
    <tr>
      <th scope="row"><img src={ product.img } className="order-cart-img" alt="..." /></th>
      <td>{ product.title }</td>
      <td>{ product.description }</td>
      <td>{ product.price }</td>
    </tr>
  </tbody>

    )
}

export default OrderCart
