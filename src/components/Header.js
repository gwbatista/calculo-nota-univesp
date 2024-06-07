// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Calculadora da Média Final - UNIVESP
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
