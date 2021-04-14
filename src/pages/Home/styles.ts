import styled from 'styled-components';

import pageLoginBackground from '../../assets/homeBackground.jpg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    flex: 1;
    background: url(${pageLoginBackground}) no-repeat center;
    background-size: cover;
    background-position-x: 20%;
    opacity: 0.45;
    animation: in 3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

    @keyframes in {
        from {
            transform: scale(1.1, 1.1);
            opacity: 0.75;
        }
        to {
            transform: scale(1, 1);
            opacity: 0.45;
        }
    }

`;

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;