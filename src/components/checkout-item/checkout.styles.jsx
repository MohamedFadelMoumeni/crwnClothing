import styled from 'styled-components';

export const CheckoutContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`

export const ImgContainer = styled.div`
width: 23%;
padding-right: 15px;

img {
    width: 100%;
    height: 100%;
  }
`

export const SpanElement = styled.span`
width: 23%;
@media screen and (max-width: 800px){
  font-size: 20px;
}
`
export const SpanQuantity = styled.span`
padding-left: 20px;
width: 23%;
`
export const RemoveButton = styled.div`
padding-left: 12px;
cursor: pointer;
`

export const CountItem = styled.span`
cursor: pointer;
`