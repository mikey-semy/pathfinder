import React from 'react';
import { Form } from '../../components';
import { Input } from '../../components';
const Main: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
  };
  return (
        <>
          
          <Form onSubmit={handleSubmit}>
            <Input 
              type="number"
              label="Начальный диаметр (мм):"
              value="4"
              min={4}
              max={8}
              step="1"
            />
            <Input 
              type="number"
              label="Конечный диаметр (мм):"
              value="1.30"
              min={0.80}
              max={4.00}
              step="0.01"
            />
            <Input 
              type="number"
              label="Процент обжатия (%):"
              value="0.00"
              min={0}
              max={100}
              step="0.01"
            />
            <Input 
              type="number"
              label="Количество переходов волочения:"
              value="9"
              min={1}
              max={20}
              step="1"
            />
            <Input 
              type="number"
              label="Скорость волочения (м/с):"
              value="9.00"
              min={0.1}
              max={20}
              step="0.1"
            />
            <Input 
              type="number"
              label="Номер начального блока:"
              value="1"
              min={1}
              max={10}
              step="1"
            />
          </Form>
        </>
  );
};

export default Main;