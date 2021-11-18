import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProductCatalog = () => {
  return async dispatch => {
    const res = await axios.get('https://localhost:44338/api/Products')
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}

export const getOneProduct = (id) => {
  return async dispatch => {
    const res = await axios.get('https://localhost:44338/api/Products/'+ id)
    dispatch(setProduct(res.data))
  }
}

export const setProduct = product => {
  return {
    type: actiontypes().productCatalog.get,
    payload: product
  }
}



export const createProduct = (data) => {
  return async dispatch => {
    console.log(data)

    await axios.post('https://localhost:44338/api/Products', data)
    console.log('Product created successfully')
    dispatch(getProductCatalog())
  }
}