import React, { useState } from 'react';
import { Form, Input, Select } from '../../components';
import { STEEL_GRADES } from '../../utils/constants/SteelGrades/steelGrades';
import { FormState } from './Main.types';

const Main: React.FC = () => {
  const [state, setState] = useState<FormState>({
    initialWireSize: "4",
    finalWireSize: "1.30",
    totalTransitions: "9",
    firstReduction: "0.00",
    drawingVelocity: "9.00",
    initialBlockNumber: "1",
    lastDieReduction: "10",
    lastBlockNumber: "9",
    carbonRange: STEEL_GRADES[0]
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
    
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Form data:');
    Object.keys(state).forEach(key => {
      console.log(`${key}: ${state[key as keyof FormState]}`);
    });
  };
  return (
        <>
          <Form onSubmit={handleSubmit}>
            <Select
              label="Марка стали:"
              name="carbonRange"
              options={STEEL_GRADES}
              value={(state.carbonRange || STEEL_GRADES[0]).label}
              onChange={handleChange}
              placeholder=""
            />
            <Input 
              type="number"
              name="initialWireSize"
              label="Начальный диаметр (мм):"
              onChange={handleChange}
              value={state.initialWireSize}
              min={4}
              max={8}
              step="1"
            />
            <Input 
              type="number"
              name="finalWireSize"
              label="Конечный диаметр (мм):"
              onChange={handleChange}
              value={state.finalWireSize}
              min={0.80}
              max={4.00}
              step="0.01"
            />
            <Input 
              type="number"
              name="totalTransitions"
              label="Количество переходов волочения:"
              onChange={handleChange}
              value={state.totalTransitions}
              min={1}
              max={20}
              step="1"
            />
            <Input 
              type="number"
              name="firstReduction"
              label="Процент обжатия (%):"
              onChange={handleChange}
              value={state.firstReduction}
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              type="number"
              name="drawingVelocity"
              label="Скорость волочения (м/с):"
              onChange={handleChange}
              value={state.drawingVelocity}
              min={0.1}
              max={20}
              step="0.1"
            />
            <Input 
              type="number"
              name="initialBlockNumber"
              label="Номер начального блока:"
              onChange={handleChange}
              value={state.initialBlockNumber}
              min={1}
              max={10}
              step="1"
            />
            <Input 
              type="number"
              name="lastDieReduction"
              label="Процент обжатия (%):"
              onChange={handleChange}
              value={state.lastDieReduction}
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              type="number"
              name="lastBlockNumber"
              label="Номер последнего блока:"
              onChange={handleChange}
              value={state.lastBlockNumber}
              min={1}
              max={10}
              step="1"
            />
          </Form>
        </>
  );
};

export default Main;