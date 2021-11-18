import actiontypes from '../actiontypes';

const initState = {
    setOrder: null,
    orders: [],
    sortedOrders: [],
    getOneOrder: null,
    order: null,
}


export const orderReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().orders.setOrders:
            return {
                ...state,
                orders: action.payload
        }
        case actiontypes().orders.sortedOrders:
            return {
                ...state,
                sortedOrders: action.payload
            }
        case actiontypes().orders.order:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}

export default orderReducer;