import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ComboBox from "./Calendario";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Formulario(props) {
  const [reservar, setReservar] = useState(false);
  const [nombre, setNombre] = useState(''); // Nuevo estado para el nombre

  const reservado = () => {
    setReservar(!reservar);
  };

  function imprimirReservacion() {
    return (
      <div>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Reservación exitosa, {nombre}</Alert>
        </Stack>
        <h1>prueba</h1>
      </div>
    )
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  }

  const arregloDias = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
  ];

  const arregloHoras = [
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  return (
    <div>
      {reservar && imprimirReservacion()}

      <TextField
        className="inp"
        variant="outlined"
        label="Nombre"
        onChange={handleNombreChange}
        name="Nombre"
        placeholder="Nombre"
      />
      <TextField
        className="inp"
        variant="outlined"
        label="Telefono"
        onChange={props.dia}
        name="Telefono"
        placeholder="Telefono"
      />
      <ComboBox opciones={arregloDias} />
      <ComboBox opciones={arregloHoras} />

      <Button variant="contained" onClick={reservado}>
        Submit
      </Button>
    </div>
  );
}

export default Formulario;
