import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

// here we combine all the slices of the state inside
// a big object
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})