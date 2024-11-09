export interface WireDrawingParams {
    // Тип заготовки (строковый литерал)
    // steelGrade: string;  // например: 'k85', 'k70' и т.д.
  
    // Начальный диаметр проволоки в миллиметрах
    initialWireSize: number;  // диапазон обычно от 4.0 до 8.0 мм
  
    // Конечный диаметр проволоки в миллиметрах
    finalWireSize: number;    // диапазон обычно от 0.8 до 4.0 мм
  
    // Процент обжатия на первом переходе
    firstReduction: number;   // от 0 до 100%
  
    // Количество переходов волочения
    totalTransitions: number; // целое число от 1 до 20
  
    // Предел прочности начальный, Н/мм²
    tensileStrength: number;  //? обычно от 0 до 1000 Н/мм² = tesileStrength(steelGrade), где steelGrade - тип заготовки 
  
    // Скорость волочения, метров в секунду
    drawingVelocity: number;     // обычно от 0.1 до 20 м/с - или drawingSpeed
  
    // Номер начального блока
    initialBlockNumber: number;    // целое число, обычно от 1 до 10
  
    // Коэффициент распределения относительного обжатия
    relativeCompressionDistributionRatio: number; //? от 0 до 1 = relativeCompressionDistributionRatio(finalWireSize, initialWireSize, totalTransitions, lastDieReduction)
  
    // Суммарное обжатие (89.4%)
    totalReduction: number; //? от 0 до 100% = totalReduction(finalWireSize, initialWireSize)

    // Среднее обжатие (22.10%)
    averageReduction: number; //? от 0 до 100% = averageReduction(finalWireSize, initialWireSize, totalTransitions)

    // Обжатие в последней волоке (20.0%)
    lastDieReduction: number; // от 0 до 100%

    // № блока перед намоткой (No. 9)
    lastBlockNumber: number; // целое число, 1 до 11

    // № блока со средним обжатием (No. 5)
    averageBlockNumber: string; //? текст = calculateAverageBlock(totalTransitions, initialBlockNumber)

    // Входная скорость (1 м/с)
    inputSpeed: number; //? метров в секунду = calculateInputSpeed(finalWireSize, initialWireSize, drawingVelocity)
  }

  // Типы заготовок
  export enum steelGrade {
    D82 = 'D8-2',
    FM5 = 'FM5',
    K07 = 'K07',
    K20 = 'K20',
    K25 = 'K25',
    K30 = 'K30',
    K35 = 'K35',
    K40 = 'K40',
    K45 = 'K45',
    K50 = 'K50',
    K55 = 'K55',
    K60 = 'K60',
    K65 = 'K65',
    K70 = 'K70',
    K75 = 'K75',
    K80 = 'K80',
    K85 = 'K85',
    KR06 = 'KR06',
    R09 = 'R09'
  }
  
  // Применение:
  // const workpieceOptions = Object.values(steelGrade).map(type => (
  //   <option key={type} value={type}>{type}</option>
  // ));
  // <select value={selectedType} onChange={handleTypeChange}>
  //   {workpieceOptions}
  // </select>