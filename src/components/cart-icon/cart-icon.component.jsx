import React from 'react';
import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cartItems/cartItems.selectors';
import { connect } from 'react-redux';
import './cart-icon.style.scss';

const CartIcon = ({ itemCount }) => (
    <div className="cart-icon">
        <Logo className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapsStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapsStateToProps)(CartIcon);
