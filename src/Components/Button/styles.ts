import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    border-radius: 10px;
    width: 100%;
    padding: 15px 30px;
    margin-top: 15px;
    font-size: 16px;
    transition: 0.2s;
    @media screen and (max-width: 400px){
        font-size: 20px;
        font-weight: bold;
    }

    &:hover {
        cursor: pointer;
        color: #FFF;
        background-color: #FF0266;
    }

`;