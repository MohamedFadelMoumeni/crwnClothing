import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
export const CollectionItemContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
margin:0 10px;

&:hover {
    .image {
      opacity: 0.8;
    }

    button{
      opacity: 0.85;
      display: flex;
    }
}
@media screen and (max-width: 800px){
  width: 80%;
  margin: 1em 0;

`

export const AddButton = styled(CustomButton)`
width: 80%;
opacity: 0.7;
position: absolute;
top: 255px;
display: none;

`

export const ImageDiv = styled.div`
background-image : url(${({ imageUrl }) => imageUrl});
width: 100%;
height: 95%;
background-size: cover;
background-position: center;
margin-bottom: 5px;

`

export const CollectionFooter = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
`

export const NameSpan = styled.div`
width: 90%;
margin-bottom: 15px;
`

export const PriceSpan = styled.div`
width: 10%;
`