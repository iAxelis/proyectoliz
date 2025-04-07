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
  Fingerprint,
  CreditCard,
  Pin
} from '@mui/icons-material';
import DetailsModal from './DetailsModal';

const AccessTable = ({ accessLogs }) => {
  const [selectedAccess, setSelectedAccess] = useState(null);

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
              <TableRow key={log.id || Math.random()} hover>
                <TableCell style={{ color: log.nombre === "No Autorizado" ? "red" : "inherit" }}>
                  {log.nombre}
                </TableCell>
                <TableCell>{log.fechaHora}</TableCell>
                <TableCell>
                  <Chip
                    icon={getMethodIcon(log.tipoAcceso)}
                    label={log.tipoAcceso}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => setSelectedAccess(log)}>
                    <InfoIcon color="info" />
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