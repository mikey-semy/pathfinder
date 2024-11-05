/**
 * Функция для вычисления производительности
 * @param {number} finalDiameter - Конечный диаметр проволоки в миллиметрах
 * @param {number} finalSpeed - Скорость волочения на последнем переходе, метров в секунду
 * @returns {object} - Объект с производительностью в килограммах в час и тоннах за 8 часов при 75% загрузке
 */
interface ProductionParams {
    finalDiameter: number;  //Конечный диаметр проволоки в миллиметрах
    finalSpeed: number;     // Скорость волочения на последнем переходе, метров в секунду
  }
  
  export const calculateProduction = ({
    finalDiameter,
    finalSpeed
  }: ProductionParams) => {
    // Килограммы в час
    const kgPerHour = Math.pow(finalDiameter, 2) * 22.2112 * finalSpeed;
    
    // Тонны за 8 часов при 75% загрузке
    const tonnesPer8Hours = (kgPerHour * 12 * 0.75) / 1000;
  
    return {
      kgPerHour: Number(kgPerHour.toFixed(2)),
      tonnesPer8Hours: Number(tonnesPer8Hours.toFixed(2))
    };
  }

  // Применение:
//   const production = calculateProduction({
//     finalDiameter: 1.30,  // мм
//     finalSpeed: 9.0       // м/с
//   });
  
//   console.log(`
//     Производительность:
//     ${production.kgPerHour} кг/час
//     ${production.tonnesPer8Hours} тонн за 8 часов при 75% загрузке
//   `);
  