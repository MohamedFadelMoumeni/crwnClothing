
import { createSelector } from 'reselect';

const selectItems = state => state.items;

export const selectCartItems = createSelector(
    [selectItems],
    (items) => items.cartItems
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)

export const selectorCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) => (acc + cartItem.price) * cartItem.quantity, 0)
)

