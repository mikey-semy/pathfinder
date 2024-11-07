import React from 'react';
import { SelectTypes } from './Select.types'

const Select: React.FC<SelectTypes> = ({options, value, onChange, placeholder}) => {
    return (
        <select 
            value={value !== null ? value.toString() : ''} 
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;