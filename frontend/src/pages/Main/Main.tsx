import React from 'react';
import { MainContainer } from './Main.styles';
import { FormInputValues, FormResults } from '../../components';
import { FormProvider } from '../../contexts/FormContext/FormContext';
const Main: React.FC = () => {

  return (
    <FormProvider>
      <MainContainer>
        <FormInputValues />
        <FormResults />
      </MainContainer>
    </FormProvider>
    );  
};

export default Main;