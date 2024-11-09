import React from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from '../contexts';
import { Header } from '../components';
import { TypographyStyles, GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '../styles';
import { AppContainer, MainWrapper } from './App.styles';


const AppContent: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <TypographyStyles />
      <ResetStyles />
      <GlobalStyles />
      <Variables />
      <AppContainer>
        <Header />   
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </AppContainer>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>    
  );
};
export default App;
