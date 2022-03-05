import * as React from 'react';
import { Container, Typography, Box} from '@mui/material/Container';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reactjs mui Starter App
        </Typography>
      </Box>
    </Container>
  );
}