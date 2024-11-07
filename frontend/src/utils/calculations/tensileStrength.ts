import { TENSILE_STRENGTH_TABLE } from '../constants/tensileStrengthTable';

/**
 * Получение предела прочности начального для определенного типа заготовки
 * @param wireType тип заготовки
 * @returns предел прочности начальный
 */
export const getInitialTensileStrength = (wireType: string): number => {
  const row = TENSILE_STRENGTH_TABLE.find(
    row => row.quality.toLowerCase() === wireType.toLowerCase()
  );
  
  if (!row) {
    throw new Error(`Тип заготовки ${wireType} не найден в таблице!`);
  }
  
  return row.initial;
}

// Использование:
// const calculateTensileStrength = (wireType: string) => {
//     const tensileStrength = getInitialTensileStrength(wireType);
//     console.log(`Предел прочности для ${wireType}: ${tensileStrength} Н/мм²`);
//     return tensileStrength;
//   };