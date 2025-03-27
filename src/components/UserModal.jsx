import { useState } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  Button, 
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { Fingerprint, CreditCard, Pin } from '@mui/icons-material';

const UserModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    accessMethod: 'huella',
    pin: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar usuario
    onClose();
  };

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
          Nuevo Usuario
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          
          
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Método de acceso</InputLabel>
            <Select
              value={formData.accessMethod}
              label="Método de acceso"
              onChange={(e) => setFormData({ ...formData, accessMethod: e.target.value })}
            >
              <MenuItem value="huella">
                <Fingerprint sx={{ mr: 1 }} /> Huella
              </MenuItem>
              <MenuItem value="tarjeta">
                <CreditCard sx={{ mr: 1 }} /> Tarjeta RFID
              </MenuItem>
              <MenuItem value="pin">
                <Pin sx={{ mr: 1 }} /> PIN
              </MenuItem>
            </Select>
          </FormControl>

          {formData.accessMethod === 'pin' && (
            <TextField
              fullWidth
              margin="normal"
              label="PIN"
              type="password"
              value={formData.pin}
              onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
            />
          )}

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" onClick={onClose}>
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" type="submit">
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default UserModal;