import actiontypes from '../actiontypes';

const initState = {
    products: null,
    product: null
};

const productCatalogReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().productCatalog.set:
        return {
            ...state,
            products: action.payload
        }
        case actiontypes().productCatalog.get:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}

export default productCatalogReducer;