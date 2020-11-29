import CONSTANT_TYPES from '../redux.types';
import { addItemToCart, decreaseCartItems } from './cartItems.util';
const INITIAL_STATE = {
    cartItems: []
}

const cartItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SET_CARTITEMS:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CONSTANT_TYPES.DELETE_CARTITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }


        case CONSTANT_TYPES.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseCartItems(state.cartItems, action.payload)
            }
        case CONSTANT_TYPES.CLEAR_CART_ITEMS:
            return {
                ...state,
                cartItems: []
            }


        default:
            return state;
    }
}

export default cartItemsReducer;