import React from "react";
import { Typography, Container } from '@mui/material';
import hotwheelsImage from '../logo.png';

function NotFound() {
    return (
        <Container>
            <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                Página não encontrada!
            </Typography>
            <img src={hotwheelsImage} alt="Hotwheels" style={{ display: 'block', margin: 'auto', marginTop: '20px', width: '30%' }} />
        </Container>
    );
}

export default NotFound;
