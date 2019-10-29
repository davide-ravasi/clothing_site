import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

// here we combine all the slices of the state inside
// a big object
export default combineReducers({
    user: userReducer
})