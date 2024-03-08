import React from "react";
import { Typography, Container, Box } from '@mui/material';

function About() {
    return (
        <Container>
            <Box marginTop={5}></Box>
            <Typography variant="h2"> 
                Sobre
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
                Esta é uma aplicação para um CRUD de carros HotWheels.
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
                Elaborada na Disciplina Desenvolvimento de Sistemas Frontend.
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
                Do curso de Graduação OnLine da PUCRS.
            </Typography>
        </Container>
    )
}

export default About;
