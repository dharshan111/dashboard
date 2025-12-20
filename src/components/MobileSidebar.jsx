import React from "react";
import { Box, Drawer, Divider, Stack, Typography, Avatar } from "@mui/material";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import {Button} from "@mui/material";



const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;


const MobileSideMenu = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#0C1118",
          borderLeft: "1px solid #1e293b",
          marginTop: "56px",
          height: "calc(100vh - 56px)",
          boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Box sx={{ mr: "auto", minWidth: 0, display: "flex", p: 1, gap:7, alignItems:"center", }}>
        <Box sx={{ mr: "auto", minWidth: 0, display:"flex", gap:1, alignItems:"center", }}>  
        <Avatar
            sizes="small"
            alt="Riley Carter"
            src="./phonecall.jpg"
            sx={{
              width: 30,
              height: 30,
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
            }}
          />

          
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "#ffffff",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Riley Carter
            </Typography>
          </Box>

          <IconButton
            sx={{
              position: "relative",
              textTransform: "none",
              border: "1px solid #1e293b",
              color: "#f3ebebff",
              fontSize: "10px",
              borderRadius: "10px",
              px: 1.3,
            }}
          >
            <NotificationsIcon fontSize="small" />
            <CartBadge
              variant="dot"
              sx={{
                position: "absolute",
                top: 15,
                right: 10,
                "& .MuiBadge-badge": {
                  backgroundColor: "#e53935",
                },
              }}
            />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "#1e293b" }} />

        {/* Main Menu Content */}
        <Box
          sx={{
            overflow: "auto",
            flex: 1,
            backgroundColor: "#0C1017",
          }}
        >
        <Divider sx={{ borderColor: "#1e293b" }} />
          <MenuContent />
          <Box sx={{ p: 2 }}>
            <CardAlert />
          </Box>
        </Box>

      
        <Stack
          direction="row"
          sx={{
            p: 1,
            gap: 1.5,
            alignItems: "center",
            backgroundColor: "#0C1017",
            borderTop: "1px solid #1e293b",
          }}
        >
          <Button sx={{
                color:"#fff",
                border:"1px solid #1e293b",
                display:"flex",
                gap:1.5,
                width:"100%",
                borderRadius:3,
          }}>
            <Typography varient="h6" fontSize="small">Logout</Typography>
            <LogoutRoundedIcon fontSize="small" />
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MobileSideMenu;
