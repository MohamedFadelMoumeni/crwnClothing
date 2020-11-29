import React from 'react';
import { connect } from 'react-redux';
import { deleteCartItem, setCartItems, decreaseQuantity } from '../../redux/cartItems/cartItems.action';
import { CheckoutContainer, ImgContainer, SpanElement, SpanQuantity, RemoveButton, CountItem } from './checkout.styles';

const CheckOutItem = ({ cartItem, deleteCartItem, setCartItems, decreaseQuantity }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CheckoutContainer>
            <ImgContainer>
                <img src={imageUrl} alt="item" />
            </ImgContainer>
            <SpanElement>{name}</SpanElement>
            <SpanQuantity>
                <CountItem onClick={() => decreaseQuantity(cartItem)}>&#10092; </CountItem>
                {quantity}
                <CountItem onClick={() => setCartItems(cartItem)}> &#10093; </CountItem></SpanQuantity>
            <SpanElement>{price}</SpanElement>
            <RemoveButton onClick={() => deleteCartItem(cartItem)}>&#10005;</RemoveButton>

        </CheckoutContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteCartItem: (item) => dispatch(deleteCartItem(item)),
    setCartItems: (item) => dispatch(setCartItems(item)),
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item))

})

export default connect(null, mapDispatchToProps)(CheckOutItem);