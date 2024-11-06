import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
    
    padding: 0 24px;
    height: 60px;
    width: 100%;

    /* background-color: var(--header-background, #5A0); */
    /* box-shadow: var(--box-shadow-default); */
    z-index: 999;

    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        padding-left: 10px; 
    }
`;
