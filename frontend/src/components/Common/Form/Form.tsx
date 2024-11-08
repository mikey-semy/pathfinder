import React from 'react';
import { FormContainer, FormSection, FormActions, ErrorMessage } from './Form.styles';    
import { FormTypes } from './Form.types';
import Button from '../Button';

const Form: React.FC<FormTypes> = ({ onSubmit, children, error }) => {
    return (
        <FormContainer onSubmit={onSubmit}>
            <FormSection>
                {children}
            </FormSection>
            <FormActions>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button 
                    type="submit"
                    title="Расчитать"
                /> 
            </FormActions>
        </FormContainer>
    );
};

export default Form;