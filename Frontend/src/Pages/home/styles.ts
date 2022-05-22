import Styled from 'styled-components';

export const Container = Styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

`;

export const Header = Styled.header`
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        padding: 0.5rem;

        font-size: 0.9rem;
        font-weight: 400;

        background: #fff;
        color: #1997ff;

        border: 1px solid #1997ff;
        border-radius: 10px;

        img {
            width: 1rem;
            fill: #f00;
        }

        &:hover{
            background: #b7deff;
        }
    }
`;

export const Content = Styled.main`
    max-width: 1200px;
    margin: auto;

    height: 100%;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Status = Styled.div`
    max-width: 80%;
    margin: auto; 

    display: flex;
    align-items: center;
    justify-content: center;

    h2{  
        color: #5ebdf9;
        font-weight: 600;
    }
`;

export const Players = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    padding: 2rem 0;
`;


export const Deck = Styled.div`
    margin-bottom: 6rem;
`;

export const CardsTitle = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 2rem 0;

    h3 {
        font-weight: 400;
    }
`;

export const Cards = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

