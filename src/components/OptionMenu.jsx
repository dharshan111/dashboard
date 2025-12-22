import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0',
});

export default function OptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <IconButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ 
          borderColor: 'transparent',
          color: '#94a3b8',
          border:"1px solid #1e293b",
          borderRadius:"10px",
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
          }
        }}
      >
        <MoreVertRoundedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
            background: '#000',
            borderRadius: '10px',
            border: '1px solid black',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            color: '#ffffff',
            background: 'transparent', // Make paper transparent to show list background
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
            borderColor: '#334155',
          },
          [`& .${listItemIconClasses.root}`]: {
            color: '#94a3b8',
          },
        }}
      >
        <MenuItem 
          onClick={handleClose}
          sx={{ 
            color: '#e2e8f0',
            '&:hover': { 
              backgroundColor: '#334155',
              borderRadius: '15px',
            }
          }}
        >
          Profile
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          sx={{ 
            color: '#e2e8f0',
            '&:hover': { 
              backgroundColor: '#334155',
              borderRadius: '15px',
            }
          }}
        >
          My account
        </MenuItem>
        <Divider />
        <MenuItem 
          onClick={handleClose}
          sx={{ 
            color: '#e2e8f0',
            '&:hover': { 
              backgroundColor: '#334155',
              borderRadius: '15px',
            }
          }}
        >
          Add another account
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          sx={{ 
            color: '#e2e8f0',
            '&:hover': { 
              backgroundColor: '#334155',
              borderRadius: '15px',
            }
          }}
        >
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{
            color: '#e2e8f0',
            '&:hover': { 
              backgroundColor: '#334155',
              borderRadius: '15px',
            },
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}