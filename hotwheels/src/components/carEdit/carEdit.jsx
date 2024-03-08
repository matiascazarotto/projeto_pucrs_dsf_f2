import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useHotWheels from "../../hooks/useHotWheels";
import useHotWheelsApi from "../../hooks/useHotWheelsApi";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";

const CarEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useHotWheels("http://localhost:5000/cars/" + parseInt(id));
  const { updateCar } = useHotWheelsApi(parseInt(id));
  const [car, setCar] = useState({
    name: "",
    brand: "",
    color: "",
    year: ""
  });
 
  useEffect(() => {
    if (data) {
      setCar(data);
    }
  }, [data]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSaveCar = async (car) => {
    try {
      await updateCar(car);
      navigate("/CarsList");
    } catch (error) {
      console.error("Erro ao excluir o carro:", error);
    }
  };

  if (!car) {
    return <Typography variant="body1">Carro não encontrado.</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', marginX: 10, marginTop: 2 }}>
      <form>
        <TextField
          label="Nome"
          name="name"
          value={car.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Marca"
          name="brand"
          value={car.brand}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cor"
          name="color"
          value={car.color}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ano"
          name="year"
          value={car.year}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={() => handleSaveCar(car)}
          disabled={!car.name || !car.brand || !car.color || !car.year}>
          Salvar
        </Button>
      </form>
    </Box>
  );
};

export default CarEdit;