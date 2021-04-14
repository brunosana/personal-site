import styled from 'styled-components';

export const SocialArea = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @keyframes inTitle {
        from { transform: translateY(-20px); }
        to { transform: translateY(0px); }
    }
    h2 {
        width: 50%;
        text-align: left;
        margin-bottom: 15px;
        padding: 0 5px;
        font-size: 30px;
        animation: inTitle 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 720px){
        width: 100vw;
        h2 {
            font-size: 22px;
            text-align: center;
            margin-bottom: 0;
        }
        div {
            flex-direction: row;  
            align-items: center;
            justify-content: center;
            a {
                margin: 5px;
            }
        }
    }
`;

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 720px){
        flex-direction: column;
    }
`;

export const FormArea = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @keyframes inTitle {
        from { transform: translateY(-20px); }
        to { transform: translateY(0px); }
    }
    form {
        width: 100%;
        max-width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 35px;
        animation: inSocialForm 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

        @keyframes inSocialForm {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    }
    h2 {
        padding: 0 45px;
        width: 100%;
        margin-bottom: 15px;
        font-size: 30px;
        text-align: left;
        animation: inTitle 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

    }
    @media screen and (max-width: 720px){
        width: 100vw;
        form {
            padding: 0 60px;

        }
        h2 {
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 22px;
            text-align: center;
        }
    }
`;