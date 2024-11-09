import React, { useState, useEffect } from 'react';
import { InputContainer, InputField, InputLabel, UnitLabel, ErrorText} from './Input.styles';
import { InputTypes } from './Input.types';

const Input: React.FC<InputTypes> = ({
    type = "number",
    value: initialValue = '',
    onChange,
    placeholder,
    disabled = false,
    id,
    label,
    asLabel,
    unitLabel,
    error,
    as,
    step = "0.01",
    min,
    max,
    precision = 2,
    hasError,
    readOnly = false,
  }) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const [localError, setLocalError] = useState<string | null>(null);
    
    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    const validateInput = (value: number) => {
        if (min !== undefined && value < min) {
            return `Минимальное значение: ${min}`;
        }
        if (max !== undefined && value > max) {
            return `Максимальное значение: ${max}`;
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = e.target.value.replace(',', '.');
        const [whole, decimal] = newValue.split('.');
    
        let finalValue = newValue;
        if (decimal && decimal.length > precision) {
            finalValue = `${whole}.${decimal.slice(0, precision)}`;
        }
    
        setInputValue(finalValue);
    
        const numericValue = Number(finalValue);
        const validationError = validateInput(numericValue);
        setLocalError(validationError);
   
        if (onChange && !validationError) {
            e.target.value = finalValue;
            onChange(e);
        }
    };

  return (

    <InputContainer>
        {label && <InputLabel as={asLabel}>{label}</InputLabel>}
        <InputField
            type={type}
            inputMode="decimal"
            pattern="[0-9]*[.,]?[0-9]+"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            as={as}
            step={step}
            min={min}
            max={max}
            hasError={!!error || !!localError || hasError}
            readOnly={readOnly}
        />
        {unitLabel && <UnitLabel>{unitLabel}</UnitLabel>}
        {(error || localError) && <ErrorText>{error || localError}</ErrorText>}
    </InputContainer>

  );
};

export default Input;