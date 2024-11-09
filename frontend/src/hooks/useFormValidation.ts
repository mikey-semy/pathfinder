import { useCallback, Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';
import { FormInputsTypes } from '../pages/Main/Main.types';
import { validateFormInput } from '../utils/validators/validateFormInput';
import { ERROR_PATTERNS, errorMap } from '../utils/validators/errorMapping';

export const useFormValidation = (
  inputValues: FormInputsTypes, 
  setErrors: Dispatch<SetStateAction<Record<string, string>>>
) => {
  return useCallback(
    debounce((values: FormInputsTypes) => {
      try {
        validateFormInput(values);
        setErrors({});
      } catch (error) {
        if (error instanceof Error) {
          const fieldMatch = error.message.toLowerCase().match(ERROR_PATTERNS);
          const fieldId = fieldMatch?.[0] ? errorMap.get(fieldMatch[0]) : '';
          if (fieldId) {
            setErrors(prev => ({
              ...prev,
              [fieldId]: error.message
            }));
          }
        }
      }
    }, 300),
    [inputValues]
  );
};
