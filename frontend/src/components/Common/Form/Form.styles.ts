import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    max-width: 800px;
    width: 400px;
    
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

export const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 16px;
    margin-bottom: 16px;
`;

export const FormFieldSetLegend = styled.legend`
    font-size: 14px;
    font-weight: 600;
    color: #666;
    padding: 0 8px;
    background: white;
`;

export const FormActions = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const ErrorMessage = styled.div`
    position: absolute;
    left: 0;
    top: -10px;
    width: 50%;
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 10px;
`;