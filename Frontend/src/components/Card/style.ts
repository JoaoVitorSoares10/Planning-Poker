import Styled from 'styled-components';

export const Container = Styled.div`
    width: 5rem;
    height: 8rem;
    margin: 0 1rem;

    border: 2px solid #75c1ff;
    color: #75c1ff;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: all 0.5s;

    p {
        font-size: 1.3rem;
        font-weight: 600;
    }

    &:hover {
        transform: translateY(-20px);
        background: #75c1ff;
        color: #fff;
    }
`;