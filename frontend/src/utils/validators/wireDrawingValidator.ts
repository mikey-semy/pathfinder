import { WireDrawingParams } from "../../types";

//**
// * Валидация данных ввода
// *
// * @param {WireDrawingInput} input
// * @returns {boolean}
// */
export const validateWireDrawingInput = (input: WireDrawingParams): boolean => {
    // Проверка диаметров
    if (input.initialWireSize <= input.finalWireSize) {
      throw new Error('Начальный диаметр должен быть больше конечного, умник!');
    }
  
    // Проверка количества переходов
    if (input.totalTransitions < 1 || input.totalTransitions > 20) {
      throw new Error('Количество переходов должно быть от 1 до 20. Ты что, собрался проволоку в нить превращать?');
    }

    if (input.initialBlockNumber < 1 || input.initialBlockNumber > 10) {
      throw new Error('Первый блок должен быть от 1 до 10. Ты что, собрался проволоку в нить превращать?');
    }
    
    if (input.initialBlockNumber > input.lastBlockNumber) {
      throw new Error('Первый блок больше последнего? Ты в каком направлении волочишь?');
    }
  
    if (input.initialBlockNumber > input.totalTransitions) {
      throw new Error('Первый блок больше количества переходов? Математику прогуливал?');
    }
  
    if (input.lastBlockNumber > input.totalTransitions) {
      throw new Error('Последний блок больше количества переходов? Ты где такую машину видел?');
    }
    return true;
  }
  