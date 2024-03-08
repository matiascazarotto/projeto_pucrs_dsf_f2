import React from "react";
import { Typography, Container, Box} from '@mui/material';
import hotwheelsImage from '../logo.png';

function Home() {
    return (
        <Container>
            <Box marginTop={5}></Box>
            <Typography variant="h2"> HotWheels </Typography>
            <img src={hotwheelsImage} alt="Hotwheels" style={{ display: 'block', margin: 'auto', marginTop: '20px', width: '50%' }} />
            <Typography variant="h4" align="center" sx={{ mt: 2 }}> Bem-vindo a coleção HotWheels! </Typography>
        </Container>
    )
}

export default Home;
