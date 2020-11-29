import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cartItems/cartItems.selectors';
import setToggler from '../../redux/showHide/showHide.action';
import './card-dropdown.style.scss';


const CardDropdown = ({ cartItems, history, setToggler }) => (
    <div className="card-dropdown">
        <div className="cart-items" >
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem} />))
                ) : (<p className="message">Your cart is empty
                </p>)
            }


        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            setToggler();
        }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
const mapDispatchToProps = dispatch => ({
    setToggler: () => dispatch(setToggler())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDropdown));