import React, { useState } from 'react';

const MaterialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'k85',
    initialDiameter: 4,
    finalDiameter: 1.30,
    compressionPerUnit: '0,00%',
    numberOfTransitions: 9,
    averageStress: 0,
    drawingSpeed: 9.00,
    startingBlock: 'No. 1',
    compressionDistributionCoefficient: 0.525350753,
    carbonContent: '0,75 - 0,85',
    potentialAverageStress: '130 - 133',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Здесь можно добавить логику для обработки данных формы
  };

  return (
    <form onSubmit={handleSubmit}>
  <div className='input-group'>
    <label className='input-group__label'>Тип заготовки:</label>
    <input
      className='input-group__input'
      type="text"
      name="type"
      value={formData.type}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Диаметр заготовки (мм):</label>
    <input
      className='input-group__input'
      type="number"
      name="initialDiameter"
      value={formData.initialDiameter}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Диаметр готовой проволоки (мм):</label>
    <input
      className='input-group__input'
      type="number"
      step="0.01"
      name="finalDiameter"
      value={formData.finalDiameter}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>1 ед. обжатие (%):</label>
    <input
      className='input-group__input'
      type="text"
      name="compressionPerUnit"
      value={formData.compressionPerUnit}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Количество переходов:</label>
    <input
      className='input-group__input'
      type="number"
      name="numberOfTransitions"
      value={formData.numberOfTransitions}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>σв (среднее напряжение) Н/мм²:</label>
    <input
      className='input-group__input'
      type="number"
      name="averageStress"
      value={formData.averageStress}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Скорость волочения (м/с):</label>
    <input
      className='input-group__input'
      type="number"
      step="0.01"
      name="drawingSpeed"
      value={formData.drawingSpeed}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Начать с блока №:</label>
    <input
      className='input-group__input'
      type="text"
      name="startingBlock"
      value={formData.startingBlock}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Коэффициент распределения относительного обжатия по переходам:</label>
    <input
      className='input-group__input'
      type="number"
      step="0.000000001"
      name="compressionDistributionCoefficient"
      value={formData.compressionDistributionCoefficient}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>Содержание углерода, %:</label>
    <input
      className='input-group__input'
      type="text"
      name="carbonContent"
      value={formData.carbonContent}
      onChange={handleChange}
    />
  </div>
  <div className='input-group'>
    <label className='input-group__label'>σв (среднее напряжение) кгс/мм² потенциальной заготовки:</label>
    <input
      className='input-group__input'
      type="text"
      name="potentialAverageStress"
      value={formData.potentialAverageStress}
      onChange={handleChange}
    />
  </div>
  <button className='input-group__button' type="submit">Отправить</button>
</form>
  );
};

export default MaterialForm;
