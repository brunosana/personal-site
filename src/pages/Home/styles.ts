import styled from 'styled-components';

import pageLoginBackground from '../../assets/homeBackground.jpg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    flex: 1;
    background: url(${pageLoginBackground}) no-repeat center;
    background-size: cover;
    opacity: 0.4;
    animation: in 3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    
    @keyframes in {
        from {
            transform: scale(1.1, 1.1);
            opacity: 0.65;
        }
        to {
            transform: scale(1, 1);
            opacity: 0.4;
        }
    }

`;