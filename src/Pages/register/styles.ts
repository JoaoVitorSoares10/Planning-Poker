import Styled from 'styled-components';

export const Container = Styled.div`
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = Styled.main`
    width: 32rem;
    padding: 5rem 3rem;

    border-radius: 30px;

    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: #5EBDF9;
    }

    div {
        position: relative;
        width: 100%;
        margin: 1rem 0;

        display: flex;

        img {
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: 4%;
            width: 1.5rem;
            margin: auto 0;

            background: white;
        }
    }

    p{
        margin-bottom: 2rem;
        color: #888;
    }

    input {
        width: 100%;
        padding: 1rem 3rem;

        border: 1px solid #ddd;
        border-radius: 30px;

        &::placeholder {
            color: #004e8f;
        }
    }

    button {
        width: 50%;
        padding: 1rem 1.5rem;
        margin-top: 1rem;

        font-size: 0.9rem;
        font-weight: 600;

        background: #5EBDF9;
        color: #fff;

        border: none;
        border-radius: 30px;

        &:hover{
            background: #007be0;
        }
    }
`;

