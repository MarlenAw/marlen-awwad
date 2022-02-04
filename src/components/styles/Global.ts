import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    body{
        background: url("./icons/bg-image.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
        background-color: ${({ theme }) => theme.colors.saddleBrown};

        display: flex;
        justify-content: ${({ theme }) => theme.bodyJustifyContent.center};
        align-items: ${({ theme }) => theme.bodyAlignItems.center};
        text-align: center;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-weight: normal;
    }
`;


export default GlobalStyled; 