const actiontypes = () => {
  return {
    productCatalog: {
      set: 'SET_PRODUCT_CATALOG',
      get: 'GET_ONE_PRODUCT'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'
    },
    users: {
      loggedIn: 'LOGGED_IN',
      oneUser: 'ONE_USER',
      setUsers: 'SET_USERS',
      getUser: 'GET_USER'
    },
    orders: {
      setOrder: 'SET_ORDER',
      setOrders: 'SET_ORDERS',
      sortedOrders: 'SORT_ORDERS',
      getOneOrder: 'GET_ONE_ORDER',
      order: 'ORDER'
    }
  }
}

export default actiontypes;