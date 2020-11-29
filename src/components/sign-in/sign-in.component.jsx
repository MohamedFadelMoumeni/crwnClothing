import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import {SignInContainer, ButtonElement, ErrorMessage} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart, errorMessage }) => {

    const [userCredentiels, setCredentiels] = useState({ email: '', password: '', error: '' })

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { email, password } = userCredentiels;
        emailSignInStart(email, password);




    }
    const handleChange = (e) => {

        const { value, name } = e.target;
        setCredentiels({ ...userCredentiels, [name]: value })


    }




    const { email, password, error } = userCredentiels;

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="email"
                    handleChange={handleChange}
                    required />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="password"
                    handleChange={handleChange}
                    required />


               <ButtonElement>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" onClick={() => googleSignInStart()} isGoogle>Sign In With Google</CustomButton>
                    </ButtonElement>
            </form>
            {
                error ? (<ErrorMessage>{error}</ErrorMessage>) : null
            }
      </SignInContainer>
    )

}
const mapStateToProps = state => ({
    errorMessage: state.user.errorMessage
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
