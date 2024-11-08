import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    max-width: 800px;
    width: 400px;
    margin: 10px auto;
    padding: 24px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
        width: 380px;
        gap: 5px;
        padding: 20px;
    }
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FormActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: end;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 10px;
`;