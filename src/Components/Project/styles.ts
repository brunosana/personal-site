import styled from 'styled-components';


export const Content = styled.a`
    background-color: #FF0266;
    width: 300px;
    height: 200px;
    display: flex;
    margin: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    p, a {
        color: #FFF;
        text-align: center;
    }
    a {
        text-decoration: none;
        font-size: 12px;

    }
    #ProjectName {
        font-weight: bold;
        font-size: 25px;
    }
    #ProjectArea {
    }
    #ProjectTags {}

    &:hover {
        transform: scale(1.1, 1.1);
        cursor: pointer;
        #ProjectLinks {
            opacity: 1;
        }
    }
`;