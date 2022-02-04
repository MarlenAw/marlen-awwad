import styled from "styled-components";

export const DivStyled = styled.div`
    display: flex;
    margin: 0 0 3% 10%;
`;

export const ImageDivStyled = styled.div<{width?: string}>`
    background: ${({ theme }) => theme.colors.white};
    padding:3px 2px 0 3px;
    border-radius: 50%;
    margin: 3px 0 0 0;
`;

export const TextDivStyled = styled.div<{width?: string}>`
    padding: 15px;
    color: ${({ theme }) => theme.colors.black};
`;


