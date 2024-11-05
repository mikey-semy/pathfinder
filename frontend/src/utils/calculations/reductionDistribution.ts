import { calculateAverageReduction } from './averageReduction';

/**
 *  Функция вычисления полного распределения переходов волочения
 *  @param finalDiameter - Конечный диаметр проволоки в миллиметрах
 *  @param initialDiameter - Начальный диаметр проволоки в миллиметрах
 *  @param transitionsCount - Количество переходов волочения
 *  @param lastDieReduction - Последний переход волочения
 *  @returns Полное распределение переходов волочения
 */

interface ReductionDistributionParams {
    finalDiameter: number;
    initialDiameter: number;
    transitionsCount: number;
    lastDieReduction: number;
  }
  
  export const calculateFullReduction = ({
    finalDiameter,
    initialDiameter,
    transitionsCount,
    lastDieReduction
  }: ReductionDistributionParams): number => {
    const averageReduction = calculateAverageReduction({
      finalDiameter,
      initialDiameter,
      transitionsCount
    });
  
    return (averageReduction * 100 - lastDieReduction * 100) / ((transitionsCount - 1) / 2);
  }

// Применение:
//   const result = calculateFullReduction({
//     finalDiameter: 1.30,      // Конечный диаметр проволоки в миллиметрах
//     initialDiameter: 4.0,     // Начальный диаметр проволоки в миллиметрах
//     transitionsCount: 9,      // Количество переходов волочения
//     lastDieReduction: 0.20    // Процент обжатия на последнем переходе(в данном случае 20%)
//   });
  
//   console.log(`
//     Средняя величина единичного обжатия: ${result.averageReduction * 100}%
//     Коэффициент распределения: ${result.distribution}
//   `);