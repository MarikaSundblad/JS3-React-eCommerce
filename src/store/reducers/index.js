import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer'
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  productCatalog: productCatalogReducer,
  product: productReducer,
  cartReducer,
  auth: authReducer,
  users: usersReducer,
  userReducer
})
