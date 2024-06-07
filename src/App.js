import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import logo from './logo.png';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [notaAtividade, setnotaAtividade] = useState(0);
  const [notaProva, setnotaProva] = useState(0);
  const [notaFinal, setnotaFinal] = useState(null);

  const calculatenotaFinal = () => {
    const notaAtividadeTotal = notaAtividade * 0.4;
    const notaProvaTotal = notaProva * 0.6;
    const notaFinal = notaAtividadeTotal + notaProvaTotal;
    setnotaFinal(notaFinal);
  };

  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <img className="logo" src={logo} alt="UNIVESP Logo" style={{ width: 190, marginTop: 16 }} />
        <Box my={4}>
          <TextField
            label="Média AVA das Atividades"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={notaAtividade}
            onChange={e => setnotaAtividade(parseFloat(e.target.value))}
          />
          <TextField
            label="Nota da Prova"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={notaProva}
            onChange={e => setnotaProva(parseFloat(e.target.value))}
          />
          <Button variant="contained" color="primary" onClick={calculatenotaFinal} style={{ marginTop: 16 }}>
            Calcular Nota Final
          </Button>
          {notaFinal !== null && (
            <Typography variant="h6" component="div" style={{ marginTop: 20, color: notaFinal >= 5 ? 'green' : 'red' }}>
              Nota Final: {notaFinal.toFixed(2)} - {notaFinal >= 5 ? 'APROVADO' : 'REPROVADO'}
            </Typography>
          )}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
