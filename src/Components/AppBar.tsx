import React from 'react';
import { Button, Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  

export default function MaAppBar(){
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="static" 
          sx={{ background: 'linear-gradient(94.43deg, #8C54FB -19.98%, #CE4F51 113.48%)' }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HerMoovies
            </Typography>
            <Button color="inherit">Series</Button>
            <Button color="inherit">Moovies</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
  
      
      </>
    );
  }