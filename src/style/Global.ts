import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    html, body, #root {
        height: 100%;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background: #06071B; 
        border-radius: 8px;
    }
    ::-webkit-scrollbar-track {
        background: white;
        border-radius: 10px;
    }
`;

export default GlobalStyle;