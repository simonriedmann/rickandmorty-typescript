import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    ;
    h1 {
        padding: 1rem;
        margin:0;
        padding: 0.5rem;
    }
}
`