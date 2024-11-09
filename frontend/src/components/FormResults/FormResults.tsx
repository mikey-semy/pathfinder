import React, { useContext } from 'react';
import { Form, Input } from '../../components';
import { FormResultsContainer, FormFieldSetResults, FormFieldSetLegendResults } from './FormResults.styles';
import { FormContext } from '../../contexts/FormContext/FormContext';

const FormResults: React.FC = () => {
  const { results } = useContext(FormContext);

  return (
    <Form as={FormResultsContainer}>
      {/* Механические характеристики */}
      <FormFieldSetResults>
        <FormFieldSetLegendResults>Механические характеристики</FormFieldSetLegendResults>
        <Input
          label="Предел прочности начальный"
          unitLabel="Н/мм²"
          id="tensileStrength"
          value={results.tensileStrength}
          readOnly
        />
      </FormFieldSetResults>

      {/* Параметры обжатия */}
      <FormFieldSetResults>
        <FormFieldSetLegendResults>Параметры обжатия</FormFieldSetLegendResults>
        <Input
          label="Коэффициент распределения"
          id="relativeCompressionDistributionRatio"
          value={results.relativeCompressionDistributionRatio}
          readOnly
        />
        <Input
          label="Суммарное обжатие"
          unitLabel="%"
          id="totalReduction"
          value={results.totalReduction}
          readOnly
        />
        <Input
          label="Среднее обжатие"
          unitLabel="%"
          id="averageReduction"
          value={results.averageReduction}
          readOnly
        />
      </FormFieldSetResults>

      {/* Технологические параметры */}
      <FormFieldSetResults>
        <FormFieldSetLegendResults>Технологические параметры</FormFieldSetLegendResults>
        <Input
          type="string"
          label="Блок со средним обжатием"
          unitLabel="№"
          id="averageBlockNumber"
          value={results.averageBlockNumber}
          readOnly
        />
        <Input
          label="Входная скорость"
          unitLabel="м/с"
          id="inputSpeed"
          value={results.inputSpeed}
          readOnly
        />
      </FormFieldSetResults>
    </Form>
  );
};

export default FormResults;
