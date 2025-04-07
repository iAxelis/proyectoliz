import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  Grid,
  Link,
  Alert
} from '@mui/material';
import { Lock, Person } from '@mui/icons-material';

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await apiService.login(formData.username, formData.password);
      login(res.user); // almacenas al usuario en el contexto
      navigate('/dashboard');
    } catch (err) {
      setError('Usuario o contraseña incorrecta');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
          <Lock fontSize="medium" />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Control de Accesos
        </Typography>
        {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            margin="normal"
            fullWidth
            label="Usuario"
            InputProps={{
              startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />,
            }}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Contraseña"
            type="password"
            InputProps={{
              startAdornment: <Lock sx={{ mr: 1, color: 'action.active' }} />,
            }}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Acceder
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthPage;
