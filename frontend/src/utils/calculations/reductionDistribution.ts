import { calculateAverageReduction } from './averageReduction';

/**
 *  Функция вычисления полного распределения переходов волочения
 *  @param finalWireSize - Конечный диаметр проволоки в миллиметрах
 *  @param initialWireSize - Начальный диаметр проволоки в миллиметрах
 *  @param totalTransitions - Количество переходов волочения
 *  @param lastDieReduction - Последний переход волочения
 *  @returns Полное распределение переходов волочения
 */

interface relativeCompressionDistributionRatioParams {
    finalWireSize: number;
    initialWireSize: number;
    totalTransitions: number;
    lastDieReduction: number;
  }
  
  export const calculateFullReduction = ({
    finalWireSize,
    initialWireSize,
    totalTransitions,
    lastDieReduction
  }: relativeCompressionDistributionRatioParams): number => {
    const averageReduction = calculateAverageReduction({
      finalWireSize,
      initialWireSize,
      totalTransitions
    });
  
    return (averageReduction * 100 - lastDieReduction * 100) / ((totalTransitions - 1) / 2);
  }

// Применение:
//   const result = calculateFullReduction({
//     finalWireSize: 1.30,      // Конечный диаметр проволоки в миллиметрах
//     initialWireSize: 4.0,     // Начальный диаметр проволоки в миллиметрах
//     totalTransitions: 9,      // Количество переходов волочения
//     lastDieReduction: 0.20    // Процент обжатия на последнем переходе(в данном случае 20%)
//   });
  
//   console.log(`
//     Средняя величина единичного обжатия: ${result.averageReduction * 100}%
//     Коэффициент распределения: ${result.distribution}
//   `);