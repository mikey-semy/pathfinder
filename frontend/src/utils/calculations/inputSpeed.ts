/**
 * Функция для вычисления скорости волочения
 * @param {number} finalWireSize - Конечный диаметр проволоки в миллиметрах
 * @param {number} initialWireSize - Начальный диаметр проволоки в миллиметрах
 * @param {number} drawingVelocity - Скорость волочения, метров в секунду
 * @returns {number} - Скорость волочения
 */
interface InputSpeedParams {
    finalWireSize: number;    // Конечный диаметр проволоки в миллиметрах
    initialWireSize: number;  // Начальный диаметр проволоки в миллиметрах
    drawingVelocity: number;       // Скорость волочения, метров в секунду или drawingSpeed
}
  
export const calculateInputSpeed = ({
  finalWireSize,
  initialWireSize,
  drawingVelocity
}: InputSpeedParams): number => {
  return Math.pow(finalWireSize, 2) * drawingVelocity / Math.pow(initialWireSize, 2);
}

// Применение:
// const inputSpeed = calculateInputSpeed({
//     finalWireSize: 1.30,    // Конечный диаметр
//     initialWireSize: 4.0,   // Начальный диаметр  
//     drawingVelocity: 9.0         // Конечная скорость
//   });
  
//   console.log(`Входная скорость: ${inputSpeed.toFixed(2)} м/с`);
  