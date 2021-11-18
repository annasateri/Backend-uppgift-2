import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/actions/cartActions';

const CartItem = ({product}) => {

    const dispatch = useDispatch();
  
    const del = e => {
        e.stopPropagation();
        dispatch(deleteProduct(product._id))
    }

    return (

      <tr>
      <th scope="row">
      <img src={ product.img } alt="..." className="img-fluid z-depth-0 image-width-cartItem" />
      </th>
      <td>
        <p className="text-muted">{ product.title }</p>
      </td>
      <td>{ product.description }</td>
      <td>{ product.quantity }</td>
      <td>{ product.price }</td>
      <td>
      <button type="button" className="btn btn-sm px-3" onClick={del}>X</button>
      </td>
    </tr>
    )
}

export default CartItem
