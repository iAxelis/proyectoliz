import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Fab
} from '@mui/material';
import { Logout, Add } from '@mui/icons-material';
import AccessTable from '../components/AccessTable';
import UserModal from '../components/UserModal';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bienvenido, {user?.name}
          </Typography>
          <Button 
            color="inherit" 
            onClick={handleLogout}
            startIcon={<Logout />}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, position: 'relative' }}>
        <AccessTable />
        
        <Fab 
          color="secondary" 
          aria-label="add"
          sx={{ position: 'fixed', bottom: 32, right: 32 }}
          onClick={() => setOpenModal(true)}
        >
          <Add />
        </Fab>

        <UserModal 
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      </Container>
    </>
  );
};

export default Dashboard;