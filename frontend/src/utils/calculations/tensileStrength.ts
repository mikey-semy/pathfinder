import { TENSILE_STRENGTH_TABLE } from '../constants/tensileStrengthTable';

/**
 * Получение предела прочности начального для определенного типа заготовки
 * @param workpieceType тип заготовки
 * @returns предел прочности начальный
 */
export const getInitialTensileStrength = (workpieceType: string): number => {
  const row = TENSILE_STRENGTH_TABLE.find(
    row => row.quality.toLowerCase() === workpieceType.toLowerCase()
  );
  
  if (!row) {
    throw new Error(`Тип заготовки ${workpieceType} не найден в таблице!`);
  }
  
  return row.initial;
}

// Использование:
// const calculateTensileStrength = (workpieceType: string) => {
//     const tensileStrength = getInitialTensileStrength(workpieceType);
//     console.log(`Предел прочности для ${workpieceType}: ${tensileStrength} Н/мм²`);
//     return tensileStrength;
//   };