import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
  width: 90px;
  max-height: 80px;
`;

export const InputField = styled.input<{ hasError?: boolean }>`
    border: 1px solid ${props => props.hasError ? 'red' : '#ccc'};
    &:focus {
      border-color: ${props => props.hasError ? 'red' : '#007bff'};
      box-shadow: 0 0 0 2px ${props => props.hasError ? 'rgba(255,0,0,0.25)' : 'rgba(0,123,255,0.25)'};
    }
  `;

export const InputLabel = styled.label`
  text-align: center;
  font-size: 13px;
  color: #333;
  margin-bottom: 4px;
  width: 80%;
`;

export const UnitLabel = styled.span`
  position: absolute;
  display: block;
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: center;
  padding: 2px 4px;
  border-radius: 5px;
  width: 40px;
  top: 98%;
  left: 70%;
  transform: translateY(-50%);
  font-weight: 600;
  font-size: 10px;
  color: #333;
  z-index: 1000;
  user-select: none;
`;

export const ErrorText = styled.span`
    color: #ff3333;
    font-size: 12px;
    margin-top: 4px;
`;