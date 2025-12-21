import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box, IconButton } from '@mui/material';

const MobileHeader = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: "100%",
        top: 0,
        zIndex: 1000,
        backgroundColor: '#05142cff',
        display: 'flex',
        padding:1.3,
        justifyContent:'space-between',
        
      }}
    >
      <Typography 
        variant="h6"
        sx={{ 
          fontWeight: 600,
        }}
      >
        Dashboard
      </Typography>
      
      <IconButton
        onClick={toggleDrawer} // Add click handler
        sx={{ 
          border: '1px solid rgba(43, 44, 44, 0.67)', 
          borderRadius: 1, 
          color: "#fff",
          padding: 0.5,
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  )
}

export default MobileHeader