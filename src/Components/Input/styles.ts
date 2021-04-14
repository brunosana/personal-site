import styled, { css } from 'styled-components';

interface ErrorProps {
    error: string | undefined;
}

export const Container = styled.div`
    width: 100%;
    border: none;
    border: 2px solid #FF0266;
    padding: 15px 30px;
    border-radius: 10px;
    display: flex;
    input {
        border: 0;
        flex: 1;
        background: transparent;
        width: auto;
        color: #FFF;
        font-size: 14px;
    }

    svg {
        margin-right: 25px;
        color: #FF0266;
    }

    &:nth-child(n-1) {
        margin-top: 10px;
    }

    @media screen and (max-width: 720px){
        input {
            width: 100px;
        }
        padding: 10px 10px;
        &:nth-child(n-1) {
            margin-top: 0px;
        }
    }

`;

export const Error = styled.span<ErrorProps>`
    margin-top: 5px;
    width: 100%;
    text-align: left;
    padding-left: 10px;
    font-size: 14px;
    opacity: 0;
    ${props => props.error && css`opacity: 1;`}
    @media screen and (max-width: 720px){
        margin-top: 2px;
    }
`;