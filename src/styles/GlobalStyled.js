import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
* {
    /* background: url(https://img.freepik.com/fotos-premium/fondo-textura-peluda-animal-patrones-fisuras_970779-1699.jpg?w=740) center center fixed; */
    /* background-size: fill; */
}

    :root{
            --black: #0A100D;
            --dark-beige: #B9BAA3;
            /* --light-beige:#D6D5C9; */
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
        color: var(--dark-beige);
}

`;
