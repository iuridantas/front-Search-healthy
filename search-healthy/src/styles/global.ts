import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        display: flex;
        min-height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    #root {
        display: flex;
        justify-content: space-between;
        min-height: 100vh;
    }

    body {
        background-color: rgba(66, 153, 225, 0.3);
    }
`;
