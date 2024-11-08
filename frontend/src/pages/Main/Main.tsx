import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash-es';
import { Form, Input, Select } from '../../components';
import { STEEL_GRADES } from '../../utils/constants/SteelGrades/steelGrades';
import { FormState } from './Main.types';
import { FormFieldSet, FormFieldSetLegend, InputRange, SelectSteelGrade } from './Main.styles';
import { validateFormInput } from './Main.validate';
const Main: React.FC = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setState] = useState<FormState>({
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
  })

  const [carbonRange, setCarbonRange] = useState<{ min: number; max: number }>({ 
    min: 0.42, 
    max: 0.50 
  });

  const debouncedValidation = useCallback(
    debounce((values: FormState) => {
      try {
        validateFormInput(values)
        setErrors({});
      } catch (error) {
        if (error instanceof Error) {
          const fieldMatch = error.message.toLowerCase().match(/(начальный диаметр|итоговый диаметр|первый блок|последний блок|количество переходов)/);
          const fieldMap: Record<string, string> = {
            'начальный диаметр': 'initialWireSize',
            'итоговый диаметр': 'finalWireSize',
            'первый блок': 'initialBlockNumber',
            'последний блок': 'lastBlockNumber',
            'количество переходов': 'totalTransitions',
            'минимальное вср': 'patentedTensileStrengthMin',
            'максимальное вср': 'patentedTensileStrengthMax'
          };
          
          const fieldId = fieldMatch ? fieldMap[fieldMatch[0]] : '';
          if (fieldId) {
            setErrors(prev => ({
              ...prev,
              [fieldId]: error.message
            }));
          }
        }
      };
    }, 300), [formValues]
  );
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
      const newValues = { ...formValues, [id]: Number(value) };
      setState(newValues);
      debouncedValidation(newValues); 
  };
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлены!');
    console.log('Полученные данные:');
    Object.keys(formValues).forEach(key => {
      console.log(`${key}: ${formValues[key as keyof FormState]}`);
    });
    console.log(`Содержание углерода по выбранному типу стали - минимум: ${carbonRange.min}, максимум: ${carbonRange.max}`);
  };
  
  return (
        <>
          <Form onSubmit={handleSubmit}>
            <FormFieldSet>
              <FormFieldSetLegend>Параметры проволоки</FormFieldSetLegend>
              <Input
                label="Начальный диаметр"
                unitLabel="мм"
                id="initialWireSize"
                value={formValues.initialWireSize}
                onChange={handleInputChange}
                min={4} max={8} step="1"
                error={errors['initialWireSize']}
                hasError={!!errors['initialWireSize']}
              />
              <Input
                label="Итоговый диаметр"
                unitLabel="мм"
                id="finalWireSize" 
                value={formValues.finalWireSize}
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
                value={formValues.firstReduction}
                onChange={handleInputChange}
                min={0} max={100} step="0.01"
                error={errors['firstReduction']}
                hasError={!!errors['firstReduction']}
              />
              <Input
                label="Последнее общатие"
                unitLabel="%"
                id="lastDieReduction"
                value={formValues.lastDieReduction}
                onChange={handleInputChange}
                min={0} max={100} step="0.01"
                error={errors['lastDieReduction']}
                hasError={!!errors['lastDieReduction']}
              />
              <Input
                label="Скорость волочения"
                unitLabel="м/с"
                id="drawingVelocity"
                value={formValues.drawingVelocity}
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
                value={formValues.initialBlockNumber}
                onChange={handleInputChange}
                min={1} max={10} step="1"
                error={errors['initialBlockNumber']}
                hasError={!!errors['initialBlockNumber']}
              />
              <Input
                label="Последний блок"
                unitLabel="№"
                id="lastBlockNumber"
                value={formValues.lastBlockNumber}
                onChange={handleInputChange}
                min={1} max={11} step="1"
                error={errors['lastBlockNumber']}
                hasError={!!errors['lastBlockNumber']}
              />
              <Input
                label="Количество переходов"
                id="totalTransitions"
                value={formValues.totalTransitions}
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
                value={formValues.steelGrade}
                onChange={handleSelectChange}
                
              />
              <FormFieldSet>
                <FormFieldSetLegend>ВСР заготовки</FormFieldSetLegend>
                <Input
                  as={InputRange}
                  label="Минимум"
                  unitLabel="H/мм²"
                  id="patentedTensileStrengthMin"
                  value={formValues.patentedTensileStrengthMin}
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
                  value={formValues.patentedTensileStrengthMax}
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

export default Main;