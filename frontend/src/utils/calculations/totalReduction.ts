/**
 * Расчет суммарного обжатия проволоки
 * @param finalWireSize - Конечный диаметр проволоки в миллиметрах
 * @param initialWireSize - Начальный диаметр проволоки в миллиметрах
 * @returns Суммарное обжатие проволоки
 */

interface TotalReductionParams {
    finalWireSize: number;
    initialWireSize: number;
  }
  
  const calculateTotalReduction = ({
    finalWireSize,
    initialWireSize
  }: TotalReductionParams): number => {
    let result = 1 - Math.pow(finalWireSize / initialWireSize, 2);
    return Number((result * 100).toFixed(2));
  }
  
// Применение:
//   const totalReduction = calculateTotalReduction({
//     finalWireSize: 1.30,  // Конечный диаметр
//     initialWireSize: 4.0  // Начальный диаметр
//   });
  
//   console.log(`Суммарное обжатие: ${(totalReduction * 100).toFixed(2)}%`);
export default calculateTotalReduction;