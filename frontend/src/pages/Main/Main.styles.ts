import { styled } from "styled-components";

export const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 16px;
    margin-bottom: 16px;
`;

export const FormFieldSetLegend = styled.legend`
font-size: 14px;
  font-weight: 600;
  color: #666;
  padding: 0 8px;
  background: white;
`;

export const InputRange = styled.input`
    width: 90px;
`;

export const SelectSteelGrade = styled.select`
    width: 90px;
`;