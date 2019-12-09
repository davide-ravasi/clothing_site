import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN',
})

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
})

export const removeCartItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})
