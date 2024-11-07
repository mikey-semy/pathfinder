import React, { useState } from 'react';
import { Form, Input} from '../../components';

const Main: React.FC = () => {
  const [state, setState] = useState({})
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
    
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
  };
  return (
        <>
          <Form onSubmit={handleSubmit}>
            <Input 
              type="number"
              name="initialDiameter"
              label="Начальный диаметр (мм):"
              onChange={handleChange}
              value="4"
              min={4}
              max={8}
              step="1"
            />
            <Input 
              type="number"
              name="finalDiameter"
              label="Конечный диаметр (мм):"
              onChange={handleChange}
              value="1.30"
              min={0.80}
              max={4.00}
              step="0.01"
            />
            <Input 
              type="number"
              name="firstReduction"
              label="Процент обжатия (%):"
              onChange={handleChange}
              value="0.00"
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              type="number"
              name="transitionsCount"
              label="Количество переходов волочения:"
              onChange={handleChange}
              value="9"
              min={1}
              max={20}
              step="1"
            />
            <Input 
              type="number"
              name="finalSpeed"
              label="Скорость волочения (м/с):"
              onChange={handleChange}
              value="9.00"
              min={0.1}
              max={20}
              step="0.1"
            />
            <Input 
              type="number"
              name="startingBlock"
              label="Номер начального блока:"
              onChange={handleChange}
              value="1"
              min={1}
              max={10}
              step="1"
            />
            <Input 
              type="number"
              name="lastDieReduction"
              label="Процент обжатия (%):"
              onChange={handleChange}
              value="10"
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              type="number"
              name="lastBlockNumber"
              label="Номер последнего блока:"
              onChange={handleChange}
              value="9"
              min={1}
              max={10}
              step="1"
            />
          </Form>
        </>
  );
};

export default Main;