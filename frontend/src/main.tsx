import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import App from './App/App.tsx';
import Main from './pages/Main/Main.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />
      },
    ],
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <RouterProvider 
        router={router} 
        future={{ v7_startTransition: true }}
      />
  </StrictMode>,
);
