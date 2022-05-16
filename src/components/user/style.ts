import Styled from 'styled-components';

export const Container = Styled.div`
    text-align: center;
    margin: 1rem 1rem;

    transition: all 0.5s;

    p{ 
        font-size: 1rem;
        font-weight: 600;

        margin-top: 0.3rem;
    }
`;

export const Status = Styled.div`
    width: 4rem;
    height: 7rem;
    
    background: #ddf;

    border-radius: 5px;
`;