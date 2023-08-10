import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/main.scss"
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './components/UI/ModalProvider/ModalProvider';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from './providers/ThemeContext';
import { MenuProvider } from './providers/MenuProvider';
import { UserProvider } from './providers/UserProvider';
import { AuthenticationWrapperProvider } from './providers/Authentication';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>

      <SnackbarProvider>

        <AuthenticationWrapperProvider>
          <UserProvider>
            <MenuProvider>
              <ThemeProvider>
                <ModalProvider>
                  <App />
                </ModalProvider>
                </ThemeProvider>
            </MenuProvider>
          </UserProvider>
        </AuthenticationWrapperProvider>

      </SnackbarProvider>
    </QueryClientProvider>
  </BrowserRouter>
);