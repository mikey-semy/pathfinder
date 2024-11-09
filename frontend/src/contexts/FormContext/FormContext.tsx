import React, { createContext, useState } from 'react';
import { FormInputsTypes, FormResultsTypes } from './FormContext.types';

interface FormContextType {
  inputValues: FormInputsTypes;
  results: FormResultsTypes;
  setInputValues: (values: FormInputsTypes) => void;
  setResults: (results: FormResultsTypes) => void;
}

export const defaultInputValues: FormInputsTypes = {
  initialWireSize: 4,
  finalWireSize: 1.30,
  totalTransitions: 9,
  firstReduction: 0.00,
  drawingVelocity: 9.00,
  initialBlockNumber: 1,
  lastDieReduction: 10,
  lastBlockNumber: 9,
  steelGrade: '45',
  patentedTensileStrengthMin: 1275,
  patentedTensileStrengthMax: 1305,
};

export const defaultResults: FormResultsTypes = {
  tensileStrength: 0,
  relativeCompressionDistributionRatio: 0,
  totalReduction: 0,
  averageReduction: 0,
  averageBlockNumber: '',
  inputSpeed: 0,
};

export const FormContext = createContext<FormContextType>({} as FormContextType);

export const FormProvider: React.FC<{children: React.ReactNode}> = ({ children }): React.ReactElement => {
  const [inputValues, setInputValues] = useState<FormInputsTypes>(defaultInputValues);
  const [results, setResults] = useState<FormResultsTypes>(defaultResults);
  return (
    <FormContext.Provider value={{
        inputValues,
        results,
        setInputValues,
        setResults
      }}>
      {children}
    </FormContext.Provider>
  );
};
