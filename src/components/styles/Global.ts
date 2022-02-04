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
        min-height: 85vh;
        margin: 5% 0 0 0;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            background: url("./icons/bg-imagee.jpg");
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: calc(100%) calc(100%);
            background-color: ${({ theme }) => theme.colors.saddleBrown};

            display: flex;
            justify-content: ${({ theme }) => theme.bodyJustifyContent.center};
            align-items: ${({ theme }) => theme.bodyAlignItems.bottom};
            text-align: center;
            min-height: 70vh;
            margin: 25% 0 0 0;
        }
    }


    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-weight: normal;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            color: ${({ theme }) => theme.colors.black};
        }  
    }  
`;


export default GlobalStyled; 