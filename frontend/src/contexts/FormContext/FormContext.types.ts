export interface FormInputsTypes {
    initialWireSize: number;
    finalWireSize: number;
    totalTransitions: number;
    firstReduction: number;
    drawingVelocity: number;
    initialBlockNumber: number;
    lastDieReduction: number;
    lastBlockNumber: number;
    steelGrade: string;
    patentedTensileStrengthMin: number;
    patentedTensileStrengthMax: number;
}

export interface FormResultsTypes {
 
    // Предел прочности начальный, Н/мм²
    tensileStrength: number;  //? обычно от 0 до 1000 Н/мм² = tesileStrength(steelGrade), где steelGrade - тип заготовки 
  
    // Коэффициент распределения относительного обжатия
    relativeCompressionDistributionRatio: number; //? от 0 до 1 = relativeCompressionDistributionRatio(finalWireSize, initialWireSize, totalTransitions, lastDieReduction)
  
    // Суммарное обжатие (89.4%)
    totalReduction: number; //? от 0 до 100% = totalReduction(finalWireSize, initialWireSize)

    // Среднее обжатие (22.10%)
    averageReduction: number; //? от 0 до 100% = averageReduction(finalWireSize, initialWireSize, totalTransitions)

    // № блока со средним обжатием (No. 5)
    averageBlockNumber: string; //? текст = calculateAverageBlock(totalTransitions, initialBlockNumber)

    // Входная скорость (1 м/с)
    inputSpeed: number; //? метров в секунду = calculateInputSpeed(finalWireSize, initialWireSize, drawingVelocity)
  }
