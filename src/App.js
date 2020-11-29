import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Contact from './pages/contact/contact.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';


import {GlobalStyles} from './global.styles';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()

  }, [checkUserSession])


  return (

    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact render={HomePage} path="/" />
        <Route exact render={Contact} path="/contact" />
        <Route component={ShopPage} path="/shop" />
        <Route exact path="/signin" render={() => currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      <h3 className="owner">Powered By Mohamed Fadel Moumeni .</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
