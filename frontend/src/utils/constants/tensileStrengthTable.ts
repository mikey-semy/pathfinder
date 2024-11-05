/**
 * Таблица напряжений
 * @see ...
 * */

interface TensileStrengthRow {
    quality: string; // тип заготовки
    initial: number; // начальное напряжение
    strain: number; // напряжение
    constant: number; // константа
}
  
export const TENSILE_STRENGTH_TABLE: TensileStrengthRow[] = [
    { quality: 'D8-2', initial: 491, strain: 156, constant: 491 },
    { quality: 'FM5', initial: 491, strain: 156, constant: 491 },
    { quality: 'K07', initial: 500, strain: 156, constant: 500 },
    { quality: 'K20', initial: 486, strain: 250, constant: 530 },
    { quality: 'K25', initial: 537, strain: 258.8, constant: 582 },
    { quality: 'K30', initial: 589, strain: 273.5, constant: 633 },
    { quality: 'K35', initial: 640, strain: 288.3, constant: 678 },
    { quality: 'K40', initial: 691, strain: 300, constant: 730 },
    { quality: 'K45', initial: 742, strain: 311.8, constant: 776 },
    { quality: 'K50', initial: 794, strain: 323.5, constant: 833 },
    { quality: 'K55', initial: 845, strain: 335.3, constant: 879 },
    { quality: 'K60', initial: 896, strain: 347.1, constant: 926 },
    { quality: 'K65', initial: 948, strain: 352.9, constant: 984 },
    { quality: 'K70', initial: 999, strain: 370.6, constant: 1029 },
    { quality: 'K75', initial: 1050, strain: 376.5, constant: 1087 },
    { quality: 'K80', initial: 1102, strain: 396.2, constant: 1128 },
    { quality: 'K85', initial: 1153, strain: 411.8, constant: 1176 },
    { quality: 'KR06', initial: 330, strain: 171, constant: 491 },
    { quality: 'R09', initial: 325, strain: 171, constant: 491 },
];