import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static"   sx={{backgroundColor:'black'}}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        Smart Pro 
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header