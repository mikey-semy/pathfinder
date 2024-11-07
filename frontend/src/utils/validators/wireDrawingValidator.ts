import { WireDrawingInput } from "../../types";

//**
// * Валидация данных ввода
// *
// * @param {WireDrawingInput} input
// * @returns {boolean}
// */
export const validateWireDrawingInput = (input: WireDrawingInput): boolean => {
    // Проверка диаметров
    if (input.initialWireSize <= input.finalWireSize) {
      throw new Error('Начальный диаметр должен быть больше конечного, умник!');
    }
  
    // Проверка количества переходов
    if (input.totalTransitions < 1 || input.totalTransitions > 20) {
      throw new Error('Количество переходов должно быть от 1 до 20. Ты что, собрался проволоку в нить превращать?');
    }
  
    // Проверка содержания углерода
    if (input.carbonRange.max <= input.carbonRange.min) {
      throw new Error('Максимальное содержание углерода должно быть больше минимального. Физику в школе прогуливал?');
    }
  
    return true;
  }
  