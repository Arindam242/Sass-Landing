import { createGlobalStyle } from "styled-components";
import Roboto from "./fonts/Roboto-Black.ttf";

const GloabalStyles = createGlobalStyle`
     @font-face { 
        font-family: Roboto;
        src: url(${Roboto}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
   
`;

export default GloabalStyles;
