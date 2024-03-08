import React from 'react';
import { Typography, Box } from '@mui/material';
import ListCars from '../components/listCars/listCars';

const Carros = () => {
  return (
    <div>
      <Box marginTop={5}></Box>
      <Typography variant="h2">Lista de Carros</Typography>    
      <ListCars /> 
    </div>
  );
};

export default Carros;