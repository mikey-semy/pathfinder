import { Option } from '../../../components/Common/Select/Select.types';

export interface SteelGradeOption extends Option {
  value: { min: number | undefined; max: number | undefined; };
}
