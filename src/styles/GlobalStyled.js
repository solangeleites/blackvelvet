import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

    :root{
            --black: #0A100D;
            --dark-beige: #B9BAA3;
            --light-beige:D6D5C9;
            --red:#902923;
        }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Popins', sans-serif;
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;
        letter-spacing: 1;
        user-select: none;

        
}
`;
