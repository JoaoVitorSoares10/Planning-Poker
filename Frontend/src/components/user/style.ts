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

    .selected {
        background: #00f;
    }

    .non-selected {
        background: #ddf;
    }
`;

export const Status = Styled.div`
    width: 4rem;
    height: 7rem;

    border-radius: 5px;
`;