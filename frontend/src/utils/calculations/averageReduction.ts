/**
 * Функция вычисления средней переходов волочения
 * @param finalWireSize - Конечный диаметр проволоки в миллиметрах
 * @param initialWireSize - Начальный диаметр проволоки в миллиметрах
 * @param totalTransitions - Количество переходов волочения
 * @returns Средняя переходов волочения
 */

interface AverageReductionParams {
    finalWireSize: number;    // Конечный диаметр проволоки в миллиметрах
    initialWireSize: number;  // Начальный диаметр проволоки в миллиметрах
    totalTransitions: number; // Количество переходов волочения
  }
  
  export const calculateAverageReduction = ({
    finalWireSize,
    initialWireSize,
    totalTransitions
  }: AverageReductionParams): number => {
    let result = 1 - Math.pow(
      Math.pow(finalWireSize / initialWireSize, 2),
      1 / totalTransitions);
    return Number((100 * result).toFixed(2));
  }
  export default calculateAverageReduction;