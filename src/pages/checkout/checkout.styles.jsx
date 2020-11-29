import styled from 'styled-components';

export const CheckoutContainer = styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;
@media screen and (max-width: 800px){
    width: 90%;
}
`

export const CheckoutHeader = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;
`

export const TotalDivContainer = styled.div`
margin: 30px 0;
margin-left: auto;
font-size: 36px;
@media screen and (max-width: 800){
    font-size: 10px;
}
`
export const TextPayContainer = styled.p`
text-align: center;
color: red;
font-size: 30px;
`
