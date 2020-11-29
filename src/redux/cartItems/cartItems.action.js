import CONSTANT_TYPES from '../redux.types';
export const setCartItems = (item) => ({
    type: CONSTANT_TYPES.SET_CARTITEMS,
    payload: item
});

export const deleteCartItem = (item) => ({
    type: CONSTANT_TYPES.DELETE_CARTITEM,
    payload: item
})


export const decreaseQuantity = (item) => ({
    type: CONSTANT_TYPES.DECREASE_QUANTITY,
    payload: item
})

export const clearCartItems = () => ({
    type: CONSTANT_TYPES.CLEAR_CART_ITEMS
})

