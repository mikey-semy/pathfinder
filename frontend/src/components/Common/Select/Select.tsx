import React from 'react';
import { SelectTypes } from './Select.types';
import { SelectContainer, SelectField } from './Select.styles';

const Select: React.FC<SelectTypes> = (
    {
        label,
        name, 
        options, 
        value, 
        onChange, 
        placeholder
    }) => {
    return (
        <SelectContainer>
            {label && <label>{label}</label>}
            <SelectField
                name={name}
                value={value || ''}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.label}>
                        {option.label}
                    </option>
                ))}
            </SelectField>
        </SelectContainer>
    );
};

export default Select;