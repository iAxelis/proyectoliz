import { Modal, Box, Typography, Button } from '@mui/material';

const DetailsModal = ({ open, onClose, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        <Typography variant="h6" gutterBottom>
          Detalles de Acceso
        </Typography>
        {data && (
          <>
            <Typography><strong>Nombre:</strong> {data.nombre}</Typography>
            <Typography><strong>Apellido:</strong> {data.apellido}</Typography>
            <Typography><strong>Método:</strong> {data.tipoAcceso}</Typography>
            <Typography><strong>Fecha y Hora:</strong> {data.fechaHora}</Typography>
          </>
        )}
        <Button 
          onClick={onClose} 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default DetailsModal;