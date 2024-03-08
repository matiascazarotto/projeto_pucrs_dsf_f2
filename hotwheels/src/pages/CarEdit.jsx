import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import CarEdit from '../components/carEdit/carEdit';

const CarEditPage = ({ cars }) => {
  const { id } = useParams();

  return (
    <Box marginTop={5}>
      <Typography variant="h2"> Editar Carro </Typography>
      <CarEdit cars={cars} />
    </Box>
  );
};

export default CarEditPage;