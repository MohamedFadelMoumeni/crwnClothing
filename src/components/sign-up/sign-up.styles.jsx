import styled from 'styled-components';


export const SignUpContainer = styled.div`
width: 30vw;
display: flex;
flex-direction: column;
@media screen and (max-width: 800px){
    margin-top: 20px;
    width: 90%;
}

`

export const ButtonElement = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const ErrorContainer = styled.p`
color:red;
`

export default SignUpContainer;