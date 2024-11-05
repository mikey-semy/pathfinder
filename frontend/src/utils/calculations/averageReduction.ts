/**
 * Функция вычисления средней переходов волочения
 * @param finalDiameter - Конечный диаметр проволоки в миллиметрах
 * @param initialDiameter - Начальный диаметр проволоки в миллиметрах
 * @param transitionsCount - Количество переходов волочения
 * @returns Средняя переходов волочения
 */

interface AverageReductionParams {
    finalDiameter: number;    // Конечный диаметр проволоки в миллиметрах
    initialDiameter: number;  // Начальный диаметр проволоки в миллиметрах
    transitionsCount: number; // Количество переходов волочения
  }
  
  export const calculateAverageReduction = ({
    finalDiameter,
    initialDiameter,
    transitionsCount
  }: AverageReductionParams): number => {
    return 1 - Math.pow(
      Math.pow(finalDiameter / initialDiameter, 2),
      1 / transitionsCount
    );
  }
  