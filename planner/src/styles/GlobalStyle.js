import { createGlobalStyle } from "styled-components";
import "../fonts/font.css";

const GlobalStyle = createGlobalStyle`
    
    body {
        width:100vw;
        height:100vh;
        margin: 0;
        box-sizing: border-box;
        font-family: "cafe-font";
        background-color: #faeee7;
    }
    p {
        margin: 0;
        padding: 0;
    }
    table {
        width: 100%;
        border: 1px solid;
        border-collapse: collapse;
    }
    tr,
    td {
        border: 1px solid;
    }
`;

export default GlobalStyle;
