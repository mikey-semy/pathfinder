import { SteelGradeOption } from '../../utils/constants/SteelGrades/steekGrades.types';

export interface FormState {
    initialWireSize: string;
    finalWireSize: string;
    totalTransitions: string;
    firstReduction: string;
    drawingVelocity: string;
    initialBlockNumber: string;
    lastDieReduction: string;
    lastBlockNumber: string;
    carbonRange: SteelGradeOption;
}