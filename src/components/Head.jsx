import React from "react";
import { styled } from "@mui/material/styles";
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
  border: "1px solid #1e293b",
  borderRadius: "10px",
  backgroundColor: "transparent",
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

// Custom ButtonField component
const ButtonField = React.forwardRef(function ButtonField(props, ref) {
  const {
    // These props come from the DatePicker slotProps
    id,
    disabled,
    onClick,
    value,
    format,
    // Other props
    ...other
  } = props;

  const formatDate = (dateValue, dateFormat) => {
    if (!dateValue) return "Select date";
    return dayjs(dateValue).format(dateFormat || "MMM DD, YYYY");
  };

  return (
    <Button
      id={id}
      disabled={disabled}
      ref={ref}
      onClick={onClick}
      startIcon={<CalendarTodayIcon fontSize="small" />}
      sx={{
        textTransform: "none",
        border: "1px solid #1e293b",
        color: "#f3ebebff",
        fontSize: "14px",
        borderRadius: "10px",
        px: 1.5,
        minWidth: "fit-content",
        "&:focus": {
          color: "#eceff3ff",
        },
        "&:hover": {
          color: "#eceff3ff",
          backgroundColor: "transparent",
        },
      }}
      {...other}
    >
      {formatDate(value, format)}
    </Button>
  );
});

const Head = () => {
  const [value, setValue] = React.useState(dayjs("2023-04-22"));
  const [open, setOpen] = React.useState(false);
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
          sx={{ fontSize: "15px", fontWeight: 400, color: "#a4a7beff" }}
        >
          Dashboard
        </Typography>
        <ArrowForwardIosIcon size="small" sx={{ fontSize: "12px" }} />
        <Typography variant="body1" sx={{ color: "white", fontWeight: 600 }}>
          Home
        </Typography>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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

        {/* DatePicker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            slots={{
              field: ButtonField,
            }}
            slotProps={{
              field: {
                onClick: () => setOpen(!open),
                value: value,
                format: "MMM DD, YYYY",
              },
              popper: {
                placement: "bottom-end",
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                ],
                sx: {
                  "& .MuiPaper-root": {
                    backgroundColor: "#000",
                    color: "#fff",
                    position:"relative",
                    top:73,
                    left:1000,
                    border:"1px solid #1e293b",
                    borderRadius:"15px",
                    boxShadow:" rgba(201, 195, 195, 0.1) 0px 10px 10px",
                  },

                  "& .MuiDayCalendar-header": {
                    backgroundColor: "#000",
                    
                    "& .MuiDayCalendar-weekDayLabel": {
                      color: "#fff",
                      
                    },
                  },
                  "& .MuiDayCalendar-monthContainer": {
                    backgroundColor: "#000",
                    "& .MuiDayCalendar-weekContainer": {
                      "& .MuiButtonBase-root": {
                        color: "#fff",
                        
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#1976d2",
                          "&:hover": {
                            backgroundColor: "#1565c0",
                          },
                        },
                        "&.MuiPickersDay-today": {
                          borderColor: "#fff",
                          
                        },
                      },
                    },
                  },
                  "& .MuiMonthCalendar-root": {
                    backgroundColor: "#000",
                    
                    "& .MuiButtonBase-root": {
                      color:"#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#1976d2",
                        
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      },
                    },
                  },
                  "& .MuiYearCalendar-root": {
                    backgroundColor: "#000",
                    
                    "& .MuiButtonBase-root": {
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#1976d2",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      },
                    },
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    backgroundColor: "#000",
                    
                    "& .MuiPickersCalendarHeader-label": {
                      color: "#fff",
                      
                    },
                    "& .MuiIconButton-root": {
                      color: "#fff",
                      borderRadius:"5px",
                      background:"#0d1624ff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    },
                  },
                  "& .MuiPickersArrowSwitcher-root": {
                    "& .MuiIconButton-root": {
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    },
                  },
                },
              },
              nextIconButton: {
                size: "small",
                sx: {
                  color: "#fff",
                  p:1,
                  borderRadius:"5px",
                  border:"1px solid #1e293b",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                },
              },
              previousIconButton: {
                size: "small",
                sx: {
                  color: "#fff",
                  borderRadius:"5px",
                  p:1,
                  border:"1px solid #1e293b",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                },
              },
              textField: {
                variant: "outlined",
              },
            }}
            views={["day", "month", "year"]}
            sx={{
              "& .MuiOutlinedInput-root": {
                border: "none",
              },
            }}
          />
        </LocalizationProvider>

        {/* Notification Icon */}
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
      </div>
    </Box>
  );
};

export default Head;
