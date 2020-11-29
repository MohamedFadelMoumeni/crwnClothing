import React from 'react';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { selectCartItems, selectorCartItemsTotal } from '../../redux/cartItems/cartItems.selectors';
import StripeCheckoutButton from '../../components/stripe-buton/stripe-button.component';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalDivContainer, TextPayContainer } from './checkout.styles';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>


        </CheckoutHeader>
        {
            cartItems.length ?
                (
                    cartItems.map(cartItem => (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem} />


                    ))
                ) :
                (<p className="empty">Your cart is empty .</p>)
        }
        <TotalDivContainer>
            <span className="total-container">TOTAL : ${cartItemsTotal}</span>



        </TotalDivContainer>
        <StripeCheckoutButton price={cartItemsTotal} />
        <TextPayContainer>
            *Please use the following test credit card for payments*
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                </TextPayContainer>
    </CheckoutContainer>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartItemsTotal: selectorCartItemsTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);