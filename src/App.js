import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;