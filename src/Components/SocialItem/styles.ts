import styled from 'styled-components';

export const Content = styled.a`
    width: 50%;
    text-decoration: none;
    svg {
        fill: #FFF; 
    }
    span {
        color: #FFF;
        font-size: 29px;
        margin-left: 20px;
    }
    background-color: #FF0266;
    border-radius: 6px;
    padding: 8px 10px;
    display: flex;
    align-items: center;

    transition: 0.1s;

    &:hover {
        transform: scale(1.05, 1.05);
    }

    &:nth-child(n-1){
        margin-top: 15px;
    }

    @media screen and (max-width: 900px){
        span {
            display: none;
        }
        justify-content: center;
    }
    @media screen and (max-width: 720px){
        width: 10%;
        height: 50%;
        svg {
            transform: scale(0.5, 0.5);
        }
    }
    @media screen and (max-width: 424px){
        width: 20%;
        height: 50%;
    }
    @media screen and (max-width: 360px){
        width: 20%;
        height: 50%;
        svg {
            transform: scale(1, 1);
        }
    }

    animation: inSocialItem 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

    @keyframes inSocialItem {
        from { opacity: 0; }
        to { opacity: 1; }
    }

`;