import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon sx={{ fontSize: "20px" }} /> },
  { text: "Analytics", icon: <AnalyticsRoundedIcon sx={{ fontSize: "20px" }} /> },
  { text: "Clients", icon: <PeopleRoundedIcon sx={{ fontSize: "20px" }} /> },
  { text: "Tasks", icon: <AssignmentRoundedIcon sx={{ fontSize: "20px" }} /> },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon sx={{ fontSize: "20px" }} /> },
  { text: "About", icon: <InfoRoundedIcon sx={{ fontSize: "20px" }} /> },
  { text: "Feedback", icon: <HelpRoundedIcon sx={{ fontSize: "20px" }} /> },
];

export default function MenuContent() {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        p: 1,
        justifyContent: "space-between",
        background: "#0C1118",
        "& .MuiListItemText-root": {
          "& .MuiTypography-root": {
            color: "#bdb4b4ff !important",
            fontWeight: 800,
          },
        },
        "& .MuiSvgIcon-root": {
          color: "#999696ff !important",
        },
      }}
    >
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ 
              display: "block", 
              background: "#0C1118",
              mb: 0.5,
            }}
          >
            <ListItemButton 
              selected={index === 0}
              sx={{
                borderRadius: "10px",
                
                "&.Mui-selected": {
                  backgroundColor: "grey.700",
                  "&:hover": {
                    backgroundColor: "grey.700",
                  },
                  "& .MuiListItemIcon-root, & .MuiListItemText-root .MuiTypography-root": {
                    color: "white !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white !important",
                  },
                },
                // Hover state styles
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "& .MuiListItemIcon-root, & .MuiListItemText-root .MuiTypography-root": {
                    color: "white !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white !important",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "32px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ 
              display: "block", 
              background: "#0C1118",
              mb: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "10px",
                // Hover state styles
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "& .MuiListItemIcon-root, & .MuiListItemText-root .MuiTypography-root": {
                    color: "white !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white !important",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "32px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}