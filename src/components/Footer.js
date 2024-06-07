import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box mt={5} mb={3}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Projeto desenvolvido por '}
        <Link color="inherit" href="https://github.com/gwbatista/calculo-nota-univesp" target="_blank" rel="noopener">
          Guilherme Watanabe
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
