import React from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from '../contexts';
import { Header } from '../components';
import { TypographyStyles, GlobalStyles, ResetStyles, Variables, LightTheme, DarkTheme } from '../styles';
import { AppContainer, MainContainer } from './App.styles';


const AppContent: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <StyledThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <TypographyStyles />
      <GlobalStyles />
      <ResetStyles />
      <Variables />
      <AppContainer>
        <Header />   
        <MainContainer>
          <Outlet />
        </MainContainer>
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