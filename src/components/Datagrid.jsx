import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./gridData";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";

// Create scroll animation
const scrollAnimation = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled container with scroll animation
const ScrollContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px", 
  position: "relative",
  overflowX: "auto",
  
  // Custom scrollbar
  "&::-webkit-scrollbar": {
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#1e293b",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#475569",
    borderRadius: "4px",
    "&:hover": {
      background: "#64748b",
    },
  },
  
  // Scroll animation indicator
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    height: "3px",
    background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
    backgroundSize: "200% 100%",
    animation: `${scrollAnimation} 2s linear infinite`,
    opacity: "0.7",
    pointerEvents: "none",
  },
  
  // Hide animation when not scrolling
  "&:not(:hover)::after": {
    opacity: "0.3",
  },
}));

export default function CustomizedDataGrid() {
  return (
    <ScrollContainer>
      <DataGrid
        sx={{
          border: "1px solid #1e293b",
          borderRadius: "10px",
          width: "100%",
          minWidth: "700px", // Minimum width
          
          // DataGrid scrollbar styling
          "& .MuiDataGrid-virtualScroller": {
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            
            "&::-webkit-scrollbar-track": {
              background: "#0f172a",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#475569",
              borderRadius: "4px",
              "&:hover": {
                background: "#64748b",
              },
            },
          },
          
          /* Checkbox style */
          "& .MuiCheckbox-root": {
            padding: "4px",
            borderRadius: "4px",
          },

          "& .MuiDataGrid-virtualScrollerRenderZone": {
            borderBottom: "1px solid #1e293b",
          },

          "& .MuiCheckbox-root .MuiSvgIcon-root": {
            fontSize: 20,
            borderRadius: "5px",
          },

          /* Checked state */
          "& .MuiCheckbox-root.Mui-checked": {
            "& .MuiSvgIcon-root": {
              backgroundColor: "#1e293b",
              color: "#1b17daff",
            },
          },

          "& .MuiChip-label":{
            background:"none !important",
          },

          "& .MuiTablePaginationActions-root": {
            display: "flex",
            gap: "10px",
            padding: "10px",
            "& .MuiButtonBase-root": {
              border: "1px solid #34445f",
              fontSize: "12px",
              borderRadius: "6px",
              padding: "4px",
            },
          },
          
          // Row styling
          "& .MuiDataGrid-row": {
            "&.even": {
              backgroundColor: "rgba(30, 41, 59, 0.1)",
            },
            "&.odd": {
              backgroundColor: "transparent",
            },
          },
          
          // Cell styling
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #334155",
            color: "#e2e8f0",
          },
          
          // Header styling
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#0f172a",
            borderBottom: "2px solid #1e293b",
          },
          
          // Footer styling
          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #1e293b",
            backgroundColor: "#0f172a",
          },
        }}
        checkboxSelection
        rows={rows}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
                border: "1px solid #1e293b",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
            },
          },
        }}
      />
    </ScrollContainer>
  );
}