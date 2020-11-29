import React from 'react';
import { CartItemContainer, ItemContainer } from './cart-item.styles';

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <img src={imageUrl} alt="item" />
        <ItemContainer>
            <span className="name" syle={{ fontSize: '12px' }}>{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </ItemContainer>

    </CartItemContainer>
)

export default CartItem;