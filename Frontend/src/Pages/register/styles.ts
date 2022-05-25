import Styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = Styled.div`
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: #1997ff;
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

    p{
        margin-bottom: 2rem;
        color: #888;
    }

    input {
        width: 100%;
        padding: 1rem 3rem;

        border: none;
        border-radius: 30px;

        box-shadow: 1px 1px 30px #b7deff;

        margin-bottom: 1rem; 

        &::placeholder {
            color: #004e8f;
        }
    }
`;

export const RegisterButtons = Styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
   
    button{
        width: 50%;
        padding: 1rem 1.5rem;
        margin-top: 1rem;

        font-size: 0.9rem;  
        font-weight: 600;

        background: #1997ff;
        color: #fff;
    
        border: none;
        border-radius: 30px;

        text-align: center;
    
        text-decoration: none; 

        margin: 0 1rem;

        &:hover{
            background: #007be0;
        }
    }
`;

export const StyledLink = Styled(Link)`
    width: 50%;
    padding: 1rem 1.5rem;
    margin-top: 1rem;

    font-size: 0.9rem;
    font-weight: 600;

    background: #1997ff;
    color: #fff;

  
  
    border: none;
    border-radius: 30px;

    text-align: center;
  
    text-decoration: none; 

    &:hover{
        background: #007be0;
    }
`;

