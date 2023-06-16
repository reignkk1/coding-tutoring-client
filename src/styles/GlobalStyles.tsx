import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}


// 여기에 스타일을 지정하시면 전역으로 적용 됩니다.

.ql-editor{
    font-size:18px;
    
}
.ql-editor strong{
     font-weight:bold;
     
 }


* {
    box-sizing:border-box;
}

@font-face {
    font-family: 'thin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil1Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
}
@font-face {
    font-family: 'light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil2Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil3Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil4Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

body{
    font-family: light;
    background-color: #0e1620;
    color: #ffffff;
}

ul, li{
    list-style:none;
}

a {
    text-decoration:none;
}

button{
    font-family: medium;
    background-color: inherit;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
}
`;

export default GlobalStyles;
