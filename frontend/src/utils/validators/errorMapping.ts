const ERROR_KEYWORDS = [
    'начальный диаметр',
    'итоговый диаметр', 
    'первый блок',
    'последний блок',
    'количество переходов',
    'минимальное вср',
    'максимальное вср'
  ];
  
  export const ERROR_PATTERNS = new RegExp(`(${ERROR_KEYWORDS.join('|')})`);
  
  export const errorMap = new Map([
    ['начальный диаметр', 'initialWireSize'],
    ['итоговый диаметр', 'finalWireSize'],
    ['первый блок', 'initialBlockNumber'],
    ['последний блок', 'lastBlockNumber'],
    ['количество переходов', 'totalTransitions'],
    ['минимальное вср', 'patentedTensileStrengthMin'],
    ['максимальное вср', 'patentedTensileStrengthMax'],
    ['минимальное вср не может быть больше или равно максимальному', 'patentedTensileStrengthMin'],
    ['максимальное вср не может быть меньше или равно минимальному', 'patentedTensileStrengthMax']
  ]);
  