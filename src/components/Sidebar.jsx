import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [active, setActive] = useState("Home");

  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const menuItems = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "Analytics", icon: <BarChartIcon /> },
    { label: "Clients", icon: <PeopleIcon /> },
    { label: "Tasks", icon: <TaskIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "About", icon: <InfoIcon /> },
    { label: "Feedback", icon: <FeedbackIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: "#020617",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #1e293b",
      }}
    >
      {/* TOP APP SELECTOR */}
      <Box sx={{ p: 2 }}>
        <Box
          onClick={handleOpen}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            borderRadius: 2,
            border: "1px solid #1e293b",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#020617",
            },
          }}
        >
          <Box>
            <Typography fontSize={14} fontWeight={600}>
              Sitemapk-web
            </Typography>
            <Typography fontSize={12} color="#94a3b8">
              Web app
            </Typography>
          </Box>
          <ExpandMoreIcon />
        </Box>

        {/* DROPDOWN */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              bgcolor: "#020617",
              color: "#fff",
              borderRadius: 2,
              border: "1px solid #1e293b",
              mt: 1,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Sitemapk-web</MenuItem>
          <MenuItem onClick={handleClose}>Marketing App</MenuItem>
          <MenuItem onClick={handleClose}>Admin Panel</MenuItem>
        </Menu>
      </Box>

      {/* MENU LIST */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", px: 1 }}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.label}
              onClick={() => setActive(item.label)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                bgcolor:
                  active === item.label ? "#1e293b" : "transparent",
                "&:hover": {
                  bgcolor: "#1e293b",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#94a3b8", minWidth: 36 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: active === item.label ? 600 : 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* PROMO CARD */}
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            border: "1px solid #1e293b",
            bgcolor: "#020617",
          }}
        >
          <Typography fontSize={14} fontWeight={600}>
            Plan about to expire
          </Typography>
          <Typography fontSize={12} color="#94a3b8" mt={0.5}>
            Enjoy 10% off when renewing your plan today.
          </Typography>
        </Box>
      </Box>

      {/* USER PROFILE */}
      <Divider sx={{ borderColor: "#1e293b" }} />
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Avatar src="https://i.pravatar.cc/40" />
        <Box>
          <Typography fontSize={14} fontWeight={600}>
            Riley Carter
          </Typography>
          <Typography fontSize={12} color="#94a3b8">
            riley@email.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
