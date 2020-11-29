import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 19px 0;
@media screen and (max-width: 800px){
    padding: 10px;
    mrgin-bottom: 20px;
}
`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
align-self: center;
@media screen and (max-width : 800px){
    wodth: 50px;
}
`
export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width : 800px){
    width: 80%;
   
}
`
export const OptionContainer = styled(Link)`
cursor: pointer;
padding: ${({ icon }) => icon ? '0' : '0 20px'};
 @media screen and (max-width: 800px){
    padding: ${({ icon }) => icon ? '0' : '0 10px'};
 }
`