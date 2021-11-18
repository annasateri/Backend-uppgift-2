import actiontypes from '../actiontypes';
import axios from 'axios';

export const newOrders = (data) => {
    console.log(data)


    return async dispatch => {
    const newOrder = {
        userId: data.user._id,
        email: data.user.email,
        cart: data.cart,
        totalPrice: data.total
    }
    console.log(newOrder)
    await axios.post('http://localhost:9999/api/orders', newOrder)
    dispatch(setOrder(newOrder))
    }
}
export const setOrder = (newOrder) => {
  return {
      type: actiontypes().orders.setOrder,
      payload: newOrder
  }
}

export const getOrders = () => {
    return async dispatch => {
      const res = await axios.get('http://localhost:9999/api/orders')
      dispatch(setOrders(res.data))
    }
  }

  export const setOrders = (orders) => {
    return {
        type: actiontypes().orders.setOrders,
        payload: orders
    }
}

export const findUserOrder = (id) => {
    return async dispatch => {
      const res = await axios.get('http://localhost:9999/api/orders')
      const result = await res.data.filter(order => order.userId === id)
      dispatch(sortOrders(result))
    }
  }

  export const sortOrders = sortedOrders => {
    return {
        type: actiontypes().orders.sortedOrders,
        payload: sortedOrders
    }
}

export const getOneOrder = (_id) => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/orders/' + _id)
    dispatch(setOneOrder(res.data))
  }
}

export const setOneOrder = (order) => {
  return {
      type: actiontypes().orders.order,
      payload: order
  }
}

export const deleteOrder = (_id) => {
  return async dispatch => {
    await axios.delete('http://localhost:9999/api/orders/' + _id)
    console.log('deleted')
  }
}

export const changeStatus = (data) => {
  return async dispatch => {
    let value = {
      delivered: data.value
    }
    
    await axios.patch('http://localhost:9999/api/orders/' + data._id, value)
    dispatch(getOrders())
  }
}