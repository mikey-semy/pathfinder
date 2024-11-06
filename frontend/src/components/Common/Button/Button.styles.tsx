import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    padding: 10px;
    transition: opacity 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: #5A0;
    }

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }

`;

export const ButtonIcon = styled.span`
    display: none;
`;

export const ButtonTitle = styled.span`
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    color: #000;
`;