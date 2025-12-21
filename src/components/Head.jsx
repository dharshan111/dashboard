import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import dayjs from "dayjs";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MobileHeader from "./MobileHeader";

/* Search container */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    cursor: "pointer",
  },
  width: "100%",
  maxWidth: 200,
}));

/* Icon wrapper */
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

/* Input */
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  border: "1px solid #1e293b",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: "14px",
  },
}));

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const Head = () => {
  const [value, setValue] = React.useState(dayjs("2023-04-22"));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  if (isMobile || isTablet) {
    return <MobileHeader />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        p: 1.5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: "15px", fontweight: 400, color: "#a4a7beff" }}
        >
          Dashboard
        </Typography>
        <ArrowForwardIosIcon size="small" sx={{ fontSize: "12px" }} />
        <Typography variant="body1" sx={{ color: "white", fontWeight: 600 }}>
          Home
        </Typography>
      </div>

      <div style={{ display: "flex", gap: "5px" }}>
        {/* Search */}
        <Search>
          <SearchIconWrapper>
            <SearchOutlinedIcon sx={{ color: "#fff" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              borderRadius: "10px",
              border: "none",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Search>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slots={{
              field: ButtonField,
            }}
            slotProps={{
              field: {
                value,
                
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </Box>
  );
};

function ButtonField(props) {
  const { value, inputRef, inputProps } = props;

  return (
    <>
      <Button
        ref={inputRef}
        onClick={inputProps?.onClick}
        startIcon={<CalendarTodayIcon />}
        sx={{
          textTransform: "none",
          border: "1px solid #1e293b",
          color: "#f3ebebff",
          fontSize: "14px",
          borderRadius: "10px",
          px: 1.5,

          "&:focus": {
            color: "#eceff3ff",
          },

          "&:hover": {
            color: "#eceff3ff",
          },
        }}
      >
        {value ? value.format("MMM DD, YYYY") : "Select date"}
      </Button>

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
    </>
  );
}

export default Head;
