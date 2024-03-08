import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import CarAdd from '../components/carAdd/carAdd';

const CarAddPage = ({ cars }) => {
  const { id } = useParams();

  return (
    <Box marginTop={5}>
      <Typography variant="h2"> Adicionar Carro </Typography>
      <CarAdd cars={cars} />
    </Box>
  );
};

export default CarAddPage;