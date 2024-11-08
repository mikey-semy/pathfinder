import React, { useState } from 'react';
import { Form, Input, Select } from '../../components';
import { STEEL_GRADES } from '../../utils/constants/SteelGrades/steelGrades';
import { FormState } from './Main.types';

const Main: React.FC = () => {
  
  const [formValues, setState] = useState<FormState>({
    initialWireSize: 4,
    finalWireSize: 1.30,
    totalTransitions: 9,
    firstReduction: 0.00,
    drawingVelocity: 9.00,
    initialBlockNumber: 1,
    lastDieReduction: 10,
    lastBlockNumber: 9,
    steelGrade: '45'
  })

  const [carbonRange, setCarbonRange] = useState<{ min: number; max: number }>({ 
    min: 0.42, 
    max: 0.50 
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'steelGrade') {
      const selectedGrade = STEEL_GRADES.find(grade => grade.label === value);
      if (selectedGrade) {
        console.log(`Выбранная марка стали: ${selectedGrade.label}`);
        console.log(`Содержание углерода - минимум: ${selectedGrade.value.min}, максимум: ${selectedGrade.value.max}`);
        setState(prev => ({ ...prev, [name]: value }));
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
      const { name, value } = e.target;
      setState(prev => ({ ...prev, [name]: value }));
  }
    
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
            <Select
              label="Марка стали:"
              name="steelGrade"
              options={STEEL_GRADES}
              value={formValues.steelGrade} 
              onChange={handleSelectChange}
              placeholder="Выберите марку стали"
            />
            <Input 
              label="Начальный диаметр (мм):"
              type="number"
              name="initialWireSize"
              onChange={handleInputChange}
              value={formValues.initialWireSize}
              min={4}
              max={8}
              step="1"
            />
            <Input 
              label="Конечный диаметр (мм):"
              type="number"
              name="finalWireSize"
              onChange={handleInputChange}
              value={formValues.finalWireSize}
              min={0.80}
              max={4.00}
              step="0.01"
            />
            <Input 
              label="Количество переходов волочения:"
              type="number"
              name="totalTransitions"
              onChange={handleInputChange}
              value={formValues.totalTransitions}
              min={1}
              max={20}
              step="1"
            />
            <Input 
              label="Процент обжатия (%):"
              type="number"
              name="firstReduction"
              onChange={handleInputChange}
              value={formValues.firstReduction}
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              label="Скорость волочения (м/с):"
              type="number"
              name="drawingVelocity"
              onChange={handleInputChange}
              value={formValues.drawingVelocity}
              min={0.1}
              max={20}
              step="0.1"
            />
            <Input 
              label="Номер начального блока:"
              type="number"
              name="initialBlockNumber"
              onChange={handleInputChange}
              value={formValues.initialBlockNumber}
              min={1}
              max={10}
              step="1"
            />
            <Input 
              label="Процент обжатия (%):"
              type="number"
              name="lastDieReduction"
              onChange={handleInputChange}
              value={formValues.lastDieReduction}
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              label="Номер последнего блока:"
              type="number"
              name="lastBlockNumber"
              onChange={handleInputChange}
              value={formValues.lastBlockNumber}
              min={1}
              max={10}
              step="1"
            />
          </Form>
        </>
  );
};

export default Main;