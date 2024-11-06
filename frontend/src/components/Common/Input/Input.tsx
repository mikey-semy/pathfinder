import React, { useState, useEffect } from 'react';
import { InputContainer, InputField } from './Input.styles';
import { InputTypes } from './Input.types';

const Input: React.FC<InputTypes> = ({
    type = "text",
    value: initialValue = '',
    onChange,
    placeholder,
    disabled = false,
    name,
    label,
    error,
    as,
    step = "0.01",
    min,
    max,
    precision = 2
  }) => {
    const [inputValue, setInputValue] = useState(initialValue);

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = e.target.value.replace(',', '.');
        const [whole, decimal] = newValue.split('.');
    
        let finalValue = newValue;
        if (decimal && decimal.length > precision) {
            finalValue = `${whole}.${decimal.slice(0, precision)}`;
        }
    
        setInputValue(finalValue);
    
        if (onChange) {
            e.target.value = finalValue;
            onChange(e);
        }
    };

  return (

    <InputContainer>
        {label && <label>{label}</label>}
        <InputField
            type={type}
            inputMode="decimal"
            pattern="[0-9]*[.,]?[0-9]+"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            name={name}
            as={as}
            step={step}
            min={min}
            max={max}
            
        />
        {error && <span>{error}</span>}
    </InputContainer>

  );
};

export default Input;