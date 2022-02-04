import styled from "styled-components";

export const FooterStyled = styled.span`
    position:absolute; 
    bottom:0;
    right: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.pearl};
    background-color: ${({ theme }) => theme.colors.saddleBrown};
    width: 100%;
    display: block;
    padding: 0.5%;
    text-align: ${({ theme }) => theme.bodyJustifyContent.center};
    font-size: large;
`;