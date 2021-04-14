import styled from 'styled-components';

import pageAboutImage from '../../assets/aboutImage.jpg'; 

export const Image = styled.div`
    width: 50vw;
    height: 100vh;
    flex: 1;
    background: url(${pageAboutImage}) no-repeat center;
    background-size: cover;
    opacity: 0.6;
    animation: inAbout 3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    
    @keyframes inAbout {
        from {
            transform: translateX(-10%);
            opacity: 0.9;
        }
        to {
            transform: translateX(0%);
            opacity: 0.6;
        }
    }
    margin: 0;
    @media screen and (max-width: 900px){
        width: 100vw;
        height: 20vh;
        animation: inAboutMobile 3s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        opacity: 0.5;
        background-position-y: 19%;
        @keyframes inAboutMobile {
            from {
                transform: translatey(-10%);
                opacity: 0.9;
            }
            to {
                transform: translatey(0%);
                opacity: 0.5;
            }
        }
    }
`;

export const TextArea = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    p {
        color: #fff;
        margin: 0 60px;
    }
    
    animation: inTextArea 3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    
    @keyframes inTextArea {
        from {
            transform: translateX(10%);
            opacity: 0.2;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    div p {
        &:nth-child(n-1){
            margin-top: 8px;
        }
    }
    @media screen and (max-width: 900px){
        width: 100vw;
        height: 80vh;
        p {
            margin: 0 20px;
            font-size: 13px;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;
