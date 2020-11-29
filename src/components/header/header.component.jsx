import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectShowHide } from '../../redux/showHide/showHide.selectors';
import { signOutStart } from '../../redux/user/user.actions'


import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../card-dropdown/card-dropdown.component';
import setToggler from '../../redux/showHide/showHide.action';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from './header.styles';



const Header = ({ currentUser, show, setToggler, signOutStart }) => {

    console.log(currentUser)
    return (
        <HeaderContainer>
            <LogoContainer to="/"><Logo className="logo" /></LogoContainer>
            <OptionsContainer>
                <OptionContainer to="/shop">SHOP</OptionContainer>
                <OptionContainer to="/contact">CONTACT</OptionContainer>
                {
                    currentUser ?
                        (<OptionContainer onClick={() => signOutStart()}>SIGN OUT</OptionContainer>)
                        :
                        (<OptionContainer to="/signin">SIGN IN</OptionContainer>)
                }
                <OptionContainer onClick={setToggler} icon><CartIcon /></OptionContainer>



            </OptionsContainer>
            {
                show ? (<CardDropdown />) : null
            }



        </HeaderContainer >
    )
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    show: selectShowHide(state)

});
const mapDispatchToProps = dispatch => ({
    setToggler: () => dispatch(setToggler()),
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);