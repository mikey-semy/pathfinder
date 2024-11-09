import styled from 'styled-components';
import { FormFieldSet, FormFieldSetLegend } from '../Common/Form/Form.styles';

export const FormResultsContainer = styled.div`
    /* width: fit-content; */
`;

export const FormFieldSetLegendResults  = styled(FormFieldSetLegend)``;

export const FormFieldSetResults = styled(FormFieldSet)`
    display: flex;
    /* flex-direction: column; */
    gap: 10px;
    align-items: flex-start;
    padding: 10px 20px;
`;