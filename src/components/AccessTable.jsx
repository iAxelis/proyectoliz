import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton,
  Chip
} from '@mui/material';
import { 
  Info as InfoIcon,
  Edit,
  Delete,
  Fingerprint,
  CreditCard,
  Pin
} from '@mui/icons-material';
import DetailsModal from './DetailsModal';

const AccessTable = () => {
  const [selectedAccess, setSelectedAccess] = useState(null);
  const [accessLogs] = useState([
    { 
      id: 1, 
      nombre: "Juan Pérez", 
      hora: "2023-08-20 08:15:00", 
      metodo: "Huella", 
      detalles: "Acceso autorizado sector A",
      email: "juan@empresa.com",
      tipo: "Administrador"
    },
  ]);

  const getMethodIcon = (method) => {
    switch(method.toLowerCase()) {
      case 'huella': return <Fingerprint fontSize="small" />;
      case 'tarjeta': return <CreditCard fontSize="small" />;
      case 'pin': return <Pin fontSize="small" />;
      default: return <InfoIcon fontSize="small" />;
    }
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ bgcolor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'white' }}>Hora</TableCell>
              <TableCell sx={{ color: 'white' }}>Método</TableCell>
              <TableCell sx={{ color: 'white' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accessLogs.map((log) => (
              <TableRow key={log.id} hover>
                <TableCell>{log.nombre}</TableCell>
                <TableCell>{log.hora}</TableCell>
                <TableCell>
                  <Chip
                    icon={getMethodIcon(log.metodo)}
                    label={log.metodo}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => setSelectedAccess(log)}>
                    <InfoIcon color="info" />
                  </IconButton>
                  <IconButton>
                    <Edit color="warning" />
                  </IconButton>
                  <IconButton>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DetailsModal 
        open={!!selectedAccess}
        onClose={() => setSelectedAccess(null)}
        data={selectedAccess}
      />
    </>
  );
};

export default AccessTable;