import React from 'react';
import { SelectTypes } from './Select.types'

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
        <>
            {label && <label>{label}</label>}
            <select
                name={name}
                value={value || ''}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;