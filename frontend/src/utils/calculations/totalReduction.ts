/**
 * Расчет суммарного обжатия проволоки
 * @param finalDiameter - Конечный диаметр проволоки в миллиметрах
 * @param initialDiameter - Начальный диаметр проволоки в миллиметрах
 * @returns Суммарное обжатие проволоки
 */

interface TotalReductionParams {
    finalDiameter: number;
    initialDiameter: number;
  }
  
  export const calculateTotalReduction = ({
    finalDiameter,
    initialDiameter
  }: TotalReductionParams): number => {
    return 1 - Math.pow(finalDiameter / initialDiameter, 2);
  }
  
// Применение:
//   const totalReduction = calculateTotalReduction({
//     finalDiameter: 1.30,  // Конечный диаметр
//     initialDiameter: 4.0  // Начальный диаметр
//   });
  
//   console.log(`Суммарное обжатие: ${(totalReduction * 100).toFixed(2)}%`);