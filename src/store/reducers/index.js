import { combineReducers } from 'redux';

import productCatalog from './productCatalogReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    productCatalog,
    cartReducer,
    userReducer,
    orderReducer
})