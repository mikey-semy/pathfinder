/**
 * Функция для вычисления номера блока со средним обжатием
 * @param {number} transitionsCount - Количество переходов волочения
 * @param {number} startingBlock - Номер начального блока
 */
interface AverageBlockParams {
    transitionsCount: number;
    startingBlock: number;
  }
  
export const calculateAverageBlock = ({
  transitionsCount,
  startingBlock
}: AverageBlockParams): string => {
  const middleBlockNumber = (transitionsCount / 2) - 0.5 + startingBlock;
  
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
//     transitionsCount: 9,  // Количество переходов
//     startingBlock: 1      // Начальный блок
//   });
  
//   console.log(`Блок со средним обжатием: ${averageBlock}`);