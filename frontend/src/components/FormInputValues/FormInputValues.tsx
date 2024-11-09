import React, { useState, useContext } from 'react';
import { defaultInputValues } from '../../contexts/FormContext/FormContext';
import { Form, Input, Select } from '../../components';
import { STEEL_GRADES } from '../../utils/constants/SteelGrades/steelGrades';
import { FormInputsTypes } from './FormInputValues.types';
import { InputRange, SelectSteelGrade } from './FormInputValues.styles';
import { FormFieldSet, FormFieldSetLegend } from '../Common/Form/Form.styles';
import { useFormValidation } from '../../hooks/useFormValidation';
import { FormContext } from '../../contexts/FormContext/FormContext';
import { 
  getInitialTensileStrength, 
  calculateInputSpeed, 
  calculateAverageBlock ,
  calculateAverageReduction,
  calculateFullReduction,
  calculateTotalReduction

} from '../../utils/calculations';

const FormInputValues: React.FC = () => {
  const { setResults } = useContext(FormContext);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const hasErrors = Object.keys(errors).length > 0;

  const [inputValues, setState] = useState<FormInputsTypes>({
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
  });

  const [carbonRange, setCarbonRange] = useState<{ min: number; max: number }>({ 
    min: 0.42, 
    max: 0.50 
  });

  const debouncedValidation = useFormValidation(inputValues, setErrors);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'steelGrade') {
      const selectedGrade = STEEL_GRADES.find(grade => grade.label === value);
      if (selectedGrade) {
        console.log(`Выбранная марка стали: ${selectedGrade.label}`);
        console.log(`Содержание углерода - минимум: ${selectedGrade.value.min}, максимум: ${selectedGrade.value.max}`);
        setState(prev => ({ ...prev, [id]: value }));
        setCarbonRange({ 
          min: selectedGrade.value.min!, 
          max: selectedGrade.value.max!
        });
      } else {
        console.log('Не выбрана марка стали');
      }
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      const newValues = { ...inputValues, [id]: Number(value) };
      setState(newValues);
      debouncedValidation(newValues); 
  };
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлены!');
    console.log('Полученные данные:');
    Object.keys(inputValues).forEach(key => {
      console.log(`${key}: ${inputValues[key as keyof FormInputsTypes]}`);
    });
    console.log(`Содержание углерода по выбранному типу стали - минимум: ${carbonRange.min}, максимум: ${carbonRange.max}`);

    const newResults = {
      tensileStrength: getInitialTensileStrength(inputValues.steelGrade),
      relativeCompressionDistributionRatio: calculateFullReduction({
        finalWireSize: inputValues.finalWireSize,
        initialWireSize: inputValues.initialWireSize,
        totalTransitions: inputValues.totalTransitions,
        lastDieReduction: inputValues.lastDieReduction
      }), //! Проверить
      totalReduction: calculateTotalReduction({
        finalWireSize: inputValues.finalWireSize,
        initialWireSize: inputValues.initialWireSize
      }),
      averageReduction: calculateAverageReduction({
        finalWireSize: inputValues.finalWireSize,
        initialWireSize: inputValues.initialWireSize,
        totalTransitions: inputValues.totalTransitions
      }),
      averageBlockNumber: calculateAverageBlock({
        totalTransitions: inputValues.totalTransitions,
        initialBlockNumber: inputValues.initialBlockNumber,
      }),
      inputSpeed: calculateInputSpeed({
        finalWireSize: inputValues.finalWireSize,
        initialWireSize: inputValues.initialWireSize,
        drawingVelocity: inputValues.drawingVelocity
        }),
      };
  
    setResults(newResults);
  };
  
  const handleReset = () => {
    setState(defaultInputValues);
    setCarbonRange({ min: 0.42, max: 0.50 }); //! Нужно будет изменить
    setErrors({});
    debouncedValidation(defaultInputValues);
  };

  return (
    <>

          <Form 
            onSubmit={handleSubmit} 
            onReset={handleReset}
            isSubmitDisabled={hasErrors}
            error={Object.values(errors)[0]}
          >
            <FormFieldSet>
              <FormFieldSetLegend>Параметры проволоки</FormFieldSetLegend>
              <Input
                label="Начальный диаметр"
                unitLabel="мм"
                id="initialWireSize"
                value={inputValues.initialWireSize}
                onChange={handleInputChange}
                min={4} max={8} step="1"
                error={errors['initialWireSize']}
                hasError={!!errors['initialWireSize']}
              />
              <Input
                label="Итоговый диаметр"
                unitLabel="мм"
                id="finalWireSize" 
                value={inputValues.finalWireSize}
                onChange={handleInputChange}
                min={0.80} max={4.00} step="0.01"
                error={errors['finalWireSize']}
                hasError={!!errors['finalWireSize']}
              />
            </FormFieldSet>

            <FormFieldSet>
              <FormFieldSetLegend>Параметры волочения</FormFieldSetLegend>
              <Input 
                label="Первое обжатие"
                unitLabel="%"
                id="firstReduction"
                value={inputValues.firstReduction}
                onChange={handleInputChange}
                min={0} max={100} step="0.01"
                error={errors['firstReduction']}
                hasError={!!errors['firstReduction']}
              />
              <Input
                label="Последнее общатие"
                unitLabel="%"
                id="lastDieReduction"
                value={inputValues.lastDieReduction}
                onChange={handleInputChange}
                min={0} max={100} step="0.01"
                error={errors['lastDieReduction']}
                hasError={!!errors['lastDieReduction']}
              />
              <Input
                label="Скорость волочения"
                unitLabel="м/с"
                id="drawingVelocity"
                value={inputValues.drawingVelocity}
                onChange={handleInputChange}
                min={0.1} max={20} step="0.1"
                error={errors['drawingVelocity']}
                hasError={!!errors['drawingVelocity']}
              />
            </FormFieldSet>

            <FormFieldSet>
              <FormFieldSetLegend>Параметры блоков</FormFieldSetLegend>
              <Input
                label="Первый блок"
                unitLabel="№"
                id="initialBlockNumber"
                value={inputValues.initialBlockNumber}
                onChange={handleInputChange}
                min={1} max={10} step="1"
                error={errors['initialBlockNumber']}
                hasError={!!errors['initialBlockNumber']}
              />
              <Input
                label="Последний блок"
                unitLabel="№"
                id="lastBlockNumber"
                value={inputValues.lastBlockNumber}
                onChange={handleInputChange}
                min={1} max={11} step="1"
                error={errors['lastBlockNumber']}
                hasError={!!errors['lastBlockNumber']}
              />
              <Input
                label="Количество переходов"
                id="totalTransitions"
                value={inputValues.totalTransitions}
                onChange={handleInputChange}
                min={1} max={11} step="1"
                error={errors['totalTransitions']}
                hasError={!!errors['totalTransitions']}
              />
            </FormFieldSet>

            <FormFieldSet>
              <FormFieldSetLegend>Характеристики материала</FormFieldSetLegend>
              <Select
                as={SelectSteelGrade}
                label="Марка стали"
                id="steelGrade"
                options={STEEL_GRADES}
                value={inputValues.steelGrade}
                onChange={handleSelectChange}
                
              />
              <FormFieldSet>
                <FormFieldSetLegend>ВСР заготовки</FormFieldSetLegend>
                <Input
                  as={InputRange}
                  label="Минимум"
                  unitLabel="H/мм²"
                  id="patentedTensileStrengthMin"
                  value={inputValues.patentedTensileStrengthMin}
                  onChange={handleInputChange}
                  min={0} max={5000} step="1"
                  error={errors['patentedTensileStrengthMin']}
                  hasError={!!errors['patentedTensileStrengthMin']}

                />
                <Input
                  as={InputRange}
                  label="Максимум"
                  unitLabel="H/мм²"
                  id="patentedTensileStrengthMax"
                  value={inputValues.patentedTensileStrengthMax}
                  onChange={handleInputChange}
                  min={0} max={5000} step="1"
                  error={errors['patentedTensileStrengthMax']}
                  hasError={!!errors['patentedTensileStrengthMax']}
                />
              </FormFieldSet>
            </FormFieldSet>
          </Form>

    </>
    );  
};

export default FormInputValues;