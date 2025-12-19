import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from './SelectContent';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
// import OptionMenu from './OptionMenu';

const drawerWidth = 260;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  marginTop: '10px',
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: "#0C1118",
    borderRight: '1px solid #1e293b',
    boxShadow: '4px 0 20px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#0f172a',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#334155',
      borderRadius: '3px',
      '&:hover': {
        background: '#475569',
      },
    },
  },
}));

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block', backgroundColor:"#0C1118" },
      }}
    >
      {/* Top Section with Logo/Select */}
      <Box
        sx={{
          display: 'flex',
          p: 2,
          backgroundColor: '#0f172a',
          borderBottom: '1px solid #1e293b',
        }}
      >
        <SelectContent />
      </Box>
      
      {/* Divider */}
      <Divider sx={{ borderColor: '#1e293b' }} />
      
      {/* Main Menu Content */}
      <Box
        sx={{
          overflow: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0C1017',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#334155',
            borderRadius: '3px',
          },
        }}
      >
        <MenuContent />
        <Box sx={{ p: 2, background:"#0C1017" }}>
          <CardAlert />
        </Box>
      </Box>
      
      {/* Divider above user section */}
      <Divider sx={{ borderColor: '#1e293b' }} />
      
      {/* User Profile Section */}
      <Stack
        direction="row"
        sx={{
          p: 2.5,
          gap: 1.5,
          alignItems: 'center',
          backgroundColor: '#0C1017',
          borderTop: '1px solid #1e293b',
          '&:hover': {
            backgroundColor: 'rgba(30, 41, 59, 0.3)',
            transition: 'background-color 0.2s ease',
          },
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ 
            width: 40, 
            height: 40,
            border: '2px solid #3b82f6',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
          }}
        />
        <Box sx={{ mr: 'auto', minWidth: 0, background:"none"}}>
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 600, 
              lineHeight: '1.2',
              color: '#ffffff',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              background:"none",
              textOverflow: 'ellipsis',
            }}
          >
            Riley Carter
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#94a3b8',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              background:"none",
              textOverflow: 'ellipsis',
            }}
          >
            riley@email.com
          </Typography>
        </Box>
        {/* <OptionMenu /> */}
      </Stack>
    </Drawer>
  );
}