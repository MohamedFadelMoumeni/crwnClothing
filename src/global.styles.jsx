import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    font-family: 'Open Sans Condensed', sans-serif;
  @media screen and (max-width: 800px){
      padding: 10px;
  }
  
}
a{
    text-decoration: none;
    color: #000;
}
.App {
    margin:20px  auto;
    max-width: 1150px;
}
.owner {
    text-align: center;
}
` 