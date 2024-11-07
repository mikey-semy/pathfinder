/**
 * Функция для вычисления производительности
 * @param {number} finalWireSize - Конечный диаметр проволоки в миллиметрах
 * @param {number} drawingVelocity - Скорость волочения на последнем переходе, метров в секунду
 * @returns {object} - Объект с производительностью в килограммах в час и тоннах за 8 часов при 75% загрузке
 */
interface ProductionParams {
    finalWireSize: number;  //Конечный диаметр проволоки в миллиметрах
    drawingVelocity: number;     // Скорость волочения, метров в секунду
  }
  
  export const calculateProduction = ({
    finalWireSize,
    drawingVelocity
  }: ProductionParams) => {
    // Килограммы в час
    const kgPerHour = Math.pow(finalWireSize, 2) * 22.2112 * drawingVelocity;
    
    // Тонны за 8 часов при 75% загрузке
    const tonnesPer8Hours = (kgPerHour * 12 * 0.75) / 1000;
  
    return {
      kgPerHour: Number(kgPerHour.toFixed(2)),
      tonnesPer8Hours: Number(tonnesPer8Hours.toFixed(2))
    };
  }

  // Применение:
//   const production = calculateProduction({
//     finalWireSize: 1.30,  // мм
//     drawingVelocity: 9.0       // м/с
//   });
  
//   console.log(`
//     Производительность:
//     ${production.kgPerHour} кг/час
//     ${production.tonnesPer8Hours} тонн за 8 часов при 75% загрузке
//   `);
  