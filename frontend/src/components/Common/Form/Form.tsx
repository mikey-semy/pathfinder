import React from 'react';
import { FormContainer, FormSection, FormActions } from './Form.styles';    
import { FormTypes } from './Form.types';
import Button from '../Button';

const Form: React.FC<FormTypes> = ({ onSubmit, children }) => {
    return (
        <FormContainer onSubmit={onSubmit}>
            <FormSection>
                {children}
            </FormSection>
            <FormActions>
                <Button 
                    type="submit"
                    title="Расчитать"
                /> 
            </FormActions>
        </FormContainer>
    );
};

export default Form;