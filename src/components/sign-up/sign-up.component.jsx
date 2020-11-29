import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions'
import { SignUpContainer, ButtonElement } from './sign-up.styles';
import './sign-up.style.scss';

const SignUp = ({ signUpStart }) => {

    const [userCredentiels, setCredentiels] = useState({ displayName: '', email: '', password: '', confirmPassword: '', error: '' })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentiels({ ...userCredentiels, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = userCredentiels;
        if (password !== confirmPassword) {
            setCredentiels({ ...userCredentiels, error: "password dont't match" })
            return;
        }
        signUpStart(displayName, email, password);

    }


    const { displayName, email, password, confirmPassword, error } = userCredentiels;
    return (
        <SignUpContainer>
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="name"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    handleChange={handleChange}
                    required />

                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                    required />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    handleChange={handleChange}
                    required />


                <ButtonElement>
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </ButtonElement>
            </form>

            {
                error ? (<p className="error">{error}</p>) : null
            }



        </SignUpContainer >
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})
export default connect(null, mapDispatchToProps)(SignUp);