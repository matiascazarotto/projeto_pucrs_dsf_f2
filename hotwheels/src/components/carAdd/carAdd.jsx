import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHotWheels from "../../hooks/useHotWheels";
import { Box, TextField, Button } from "@mui/material";
import { Typography, CircularProgress } from "@mui/material";
import axios from "axios";

const CarAdd = () => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { data, loading, error } = useHotWheels("http://localhost:5000/cars");
  const [car, setCar] = useState(data || {
    name: "",
    brand: "",
    color: "",
    year: ""
  });

  useEffect(() => {
    if (data.length > 0) {
      const lastId = Math.max(...data.map(car => car.id));
      const newId = lastId + 1;
      setCar(prevCar => ({ ...prevCar, id: newId }));
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

  const handleSaveClick = () => {
    axios.post("http://localhost:5000/cars", car)
      .then(() => {
        setIsSaved(true);
        navigate("/CarsList");
      })
      .catch((error) => {
        console.log(isSaved);
      });

    setIsSaved(true);
    navigate("/CarsList");
  };

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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveClick}
          disabled={!car.name || !car.brand || !car.color || !car.year}>
          Salvar
        </Button>

      </form>
    </Box>
  );
};

export default CarAdd;