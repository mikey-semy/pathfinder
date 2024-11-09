import { TENSILE_STRENGTH_TABLE } from '../constants/tensileStrengthTable';

/**
 * Получение предела прочности начального для определенного типа заготовки
 * @param steelGrade тип заготовки
 * @returns предел прочности начальный
 */
const getInitialTensileStrength = (steelGrade: string): number => {
  const row = TENSILE_STRENGTH_TABLE.find(
    row => row.quality.toLowerCase() === steelGrade.toLowerCase()
  );
  
  if (!row) {
    throw new Error(`Тип заготовки ${steelGrade} не найден в таблице!`);
  }
  
  return row.initial;
}

// Использование:
// const calculateTensileStrength = (steelGrade: string) => {
//     const tensileStrength = getInitialTensileStrength(steelGrade);
//     console.log(`Предел прочности для ${steelGrade}: ${tensileStrength} Н/мм²`);
//     return tensileStrength;
//   };

export default getInitialTensileStrength;