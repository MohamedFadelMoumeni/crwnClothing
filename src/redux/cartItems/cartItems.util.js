export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }


}

export const decreaseCartItems = (cartItems, cartToDecrease) => {
    const decrease = cartItems.map(cartItem => (
        (cartItem.id === cartToDecrease.id) ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
    )).filter(item => item.quantity >= 1);

    return decrease;
}