import React from 'react';
import useHotWheels from '../../hooks/useHotWheels';
import useHotWheelsApi from '../../hooks/useHotWheelsApi';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Avatar, Typography, CircularProgress, Grid, Container } from '@mui/material';

const ListCars = () => {
  const { data, loading, error, refetch} = useHotWheels('http://localhost:5000/cars');
  const { deleteCar } = useHotWheelsApi('http://localhost:5000/cars');

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  const handleDeleteCar = async (carId) => {
    try {
      await deleteCar(carId);
      refetch();
    } catch (error) {
      console.error("Erro ao excluir o carro:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {data.map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4} data-testid="car">
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <Avatar src={`https://www.google.com/search?q=${car.name}`} alt={car.name} sx={{ width: 100, height: 100, mt: 2 }} />
              <CardContent sx={{ flex: 1, textAlign: 'center' }}>
                <Link to={`/CarDetail/editar/${car.id}`} style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" gutterBottom>{car.name}</Typography>
                </Link>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>{car.brand}</Typography>
                <Typography variant="body1" color="textSecondary">{car.color}</Typography>
                <Button variant="contained" color="error" onClick={() => handleDeleteCar(car.id)}>Excluir</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListCars;