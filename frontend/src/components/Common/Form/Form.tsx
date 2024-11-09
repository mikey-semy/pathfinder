import React from 'react';
import { FormContainer, FormSection, FormActions, ErrorMessage } from './Form.styles';    
import { FormTypes } from './Form.types';
import Button from '../Button';
import { GiBroom } from 'react-icons/gi';
const Form: React.FC<FormTypes> = ({
    as,
    onSubmit,
    onReset, 
    children, 
    error, 
    isSubmitDisabled 
}) => {
    return (
        <FormContainer 
            as={as}
            onSubmit={onSubmit}
        >
            <FormSection>
                {children}
            </FormSection>
            <FormActions>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {onReset && <Button 
                    type="reset"
                    icon={GiBroom}
                    // title="Очистить"
                    onClick={onReset}
                /> }
                {onSubmit && <Button 
                    type="submit"
                    title="Расчитать"
                    disabled={isSubmitDisabled || !!error}
                />}
            </FormActions>
        </FormContainer>
    );
};

export default Form;