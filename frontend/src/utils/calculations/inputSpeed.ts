/**
 * Функция для вычисления скорости волочения
 * @param {number} finalDiameter - Конечный диаметр проволоки в миллиметрах
 * @param {number} initialDiameter - Начальный диаметр проволоки в миллиметрах
 * @param {number} finalSpeed - Скорость волочения на последнем переходе, метров в секунду
 * @returns {number} - Скорость волочения
 */
interface InputSpeedParams {
    finalDiameter: number;    // Конечный диаметр проволоки в миллиметрах
    initialDiameter: number;  // Начальный диаметр проволоки в миллиметрах
    finalSpeed: number;       // Скорость волочения на последнем переходе, метров в секунду или drawingSpeed
}
  
export const calculateInputSpeed = ({
  finalDiameter,
  initialDiameter,
  finalSpeed
}: InputSpeedParams): number => {
  return Math.pow(finalDiameter, 2) * finalSpeed / Math.pow(initialDiameter, 2);
}

// Применение:
// const inputSpeed = calculateInputSpeed({
//     finalDiameter: 1.30,    // Конечный диаметр
//     initialDiameter: 4.0,   // Начальный диаметр  
//     finalSpeed: 9.0         // Конечная скорость
//   });
  
//   console.log(`Входная скорость: ${inputSpeed.toFixed(2)} м/с`);
  