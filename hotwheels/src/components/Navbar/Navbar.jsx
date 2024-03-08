import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F99E2C' }}>
       <Toolbar sx={{ justifyContent: 'center' }}>
        <Box >
          <Button
            sx={{ color: location.pathname === '/' ? '#FFF' : '#000' }}
            component={RouterLink}
            to="/">
            Home
          </Button>
          <Button
            sx={{ color: location.pathname === '/About' ? '#FFF' : '#000' }}
            component={RouterLink}
            to="/About">
            Sobre
          </Button>
          <Button
            sx={{ color: location.pathname === '/CarsList' ? '#FFF' : '#000' }}
            component={RouterLink}
            to="/CarsList">
            Lista de Carros
          </Button>
          <Button
            sx={{ color: location.pathname === '/CarDetail' ? '#FFF' : '#000' }}
            component={RouterLink}
            to="/CarDetail">
            Adicionar Carro
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
