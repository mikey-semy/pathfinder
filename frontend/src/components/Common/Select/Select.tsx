import React from 'react';
import { SelectTypes } from './Select.types';
import { SelectContainer, SelectField, SelectLabel, SelectOption } from './Select.styles';

const Select: React.FC<SelectTypes> = (
    {
        as,
        label,
        id, 
        options, 
        value, 
        onChange, 
        placeholder
    }) => {
    return (
        <SelectContainer>
            {label && <SelectLabel>{label}</SelectLabel>}
            <SelectField
                as={as}
                id={id}
                value={value || ''}
                onChange={onChange}
            >
                <SelectOption value="">{placeholder}</SelectOption>
                {options.map((option, index) => (
                    <SelectOption key={index} value={option.label}>
                        {option.label}
                    </SelectOption>
                ))}
            </SelectField>
        </SelectContainer>
    );
};

export default Select;