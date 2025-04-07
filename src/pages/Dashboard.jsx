import { useContext, useState, useEffect } from 'react';
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
import apiService from '../services/apiService';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [accessLogs, setAccessLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getRecords();
        console.log("Datos recibidos: ",response);

        if(Array.isArray(response) && response.length > 0 && response[0].data) {

          const transformedData = response[0].data.map( (item, index) => ({
            id: item.id_record || item.id,
            nombre: item.nombre || "No Autorizado",
            apellido: item.apellido || "No Autorizado",
            fechaHora: item.fechaHora ? new Date(item.fechaHora).toLocaleString(): "Fecha no disponible",
            tipoAcceso: item.tipoAcceso ? item.tipoAcceso.charAt(0).toUpperCase() + item.tipoAcceso.slice(1) : 'Desconocido'
          }));
          setAccessLogs(transformedData);
        }
        
      } catch (err) {
        console.error('Error al obtener datos: ', err);
      }
    };

    fetchData();
  }, []);

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
        <AccessTable accessLogs={accessLogs} />
        
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