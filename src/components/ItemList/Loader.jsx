import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ColoresJulioFood } from '../../Colores';
import { styled } from '@mui/system';

const TextoLoader = styled ("h1") ({

  color: ColoresJulioFood.hover,
  fontSize: "50px",
  fontWeight: "bold",
  fontFamily: "KittyKatt",
  padding: "20px",

});

export default function Loader () {

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {

    setOpen (true);

  };

  const handleOpen = () => {

    setOpen (true);

  };

  return (

    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", flexDirection: "column",}} open={open} onClick={handleClose}>

      <TextoLoader>...Loading...</TextoLoader>

      <CircularProgress thickness={5} size={100} sx={{color: ColoresJulioFood.hover}} />

    </Backdrop>


  );

}