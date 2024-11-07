/**
 * Функция для вычисления номера блока со средним обжатием
 * @param {number} totalTransitions - Количество переходов волочения
 * @param {number} initialBlockNumber - Номер начального блока
 */
interface AverageBlockParams {
    totalTransitions: number;
    initialBlockNumber: number;
  }
  
export const calculateAverageBlock = ({
  totalTransitions,
  initialBlockNumber
}: AverageBlockParams): string => {
  const middleBlockNumber = (totalTransitions / 2) - 0.5 + initialBlockNumber;
  
  if (middleBlockNumber % 1 === 0) {
    return `No. ${middleBlockNumber}`;
  } 
  else {
    const lowerBlock = Math.floor(middleBlockNumber);
    const upperBlock = Math.ceil(middleBlockNumber);
    return `No's ${lowerBlock} & ${upperBlock}`;
  }
}
  
//   const averageBlock = calculateAverageBlock({
//     totalTransitions: 9,  // Количество переходов
//     initialBlockNumber: 1      // Начальный блок
//   });
  
//   console.log(`Блок со средним обжатием: ${averageBlock}`);