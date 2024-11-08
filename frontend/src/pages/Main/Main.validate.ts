import { FormState } from './Main.types';

//**
// * Валидация данных ввода
// *
// * @param {FormState} input
// * @returns {boolean}
// */
export const validateFormInput = (input: FormState): boolean => {

    if (input.initialBlockNumber > input.lastBlockNumber) {
      throw new Error('Первый блок не должен быть больше последнего');
    }
  
    if (input.initialBlockNumber > input.totalTransitions) {
      throw new Error('Первый блок больше количества переходов');
    }
  
    if (input.lastBlockNumber > input.totalTransitions) {
      throw new Error('Последний блок больше количества переходов');
    }
    
    if (input.patentedTensileStrengthMin >= input.patentedTensileStrengthMax) {
      throw new Error('Минимальное ВСР не может быть больше или равно максимальному');
    }
  
    if (input.patentedTensileStrengthMin < 0 || input.patentedTensileStrengthMin > 5000) {
      throw new Error('Минимальное ВСР должно быть между 0 и 5000 H/мм²');
    }
  
    if (input.patentedTensileStrengthMax < 0 || input.patentedTensileStrengthMax > 5000) {
      throw new Error('Максимальное ВСР должно быть между 0 и 5000 H/мм²');
    }
  
    if (input.patentedTensileStrengthMax - input.patentedTensileStrengthMin > 1000) {
      throw new Error('Разница между min и max ВСР не должна превышать 1000 H/мм²');
    }
    return true;
  }
  