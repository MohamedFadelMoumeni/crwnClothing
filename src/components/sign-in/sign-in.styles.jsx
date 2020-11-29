import styled from 'styled-components';

export const SignInContainer = styled.div`
width: 30vw;
display: flex;
flex-direction: column;
@media screen and (max-width: 800px){
    width: 90%;
}
`

export const ButtonElement = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ErrorMessage = styled.p`
color: red;
font-size: 20px
`