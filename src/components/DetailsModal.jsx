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
            <Typography><strong>Hora:</strong> {data.hora}</Typography>
            <Typography><strong>Método:</strong> {data.metodo}</Typography>
            <Typography><strong>Email:</strong> {data.email}</Typography>
            <Typography><strong>Tipo:</strong> {data.tipo}</Typography>
            <Typography><strong>Detalles:</strong> {data.detalles}</Typography>
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