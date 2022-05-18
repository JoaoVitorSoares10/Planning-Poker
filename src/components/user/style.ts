import Styled from 'styled-components';

export const Container = Styled.div`
    text-align: center;
    margin: 1rem 1rem;

    transition: all 0.5s;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{ 
        font-size: 1rem;
        font-weight: 600;

        margin-top: 0.3rem;

        color: #777;
    }
`;

export const Status = Styled.div`
    width: 4rem;
    height: 7rem;
    
    background: #ddf;

    border-radius: 5px;
`;