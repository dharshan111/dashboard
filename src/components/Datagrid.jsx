import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./gridData";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ScrollContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  position: "relative",
  overflowX: "auto",

  // Custom scrollbar
  "&::-webkit-scrollbar": {
    height: "8px",
    background: "grey",
  },

  "&::-webkit-scrollbar-track": {
    background: "grey",
    borderRadius: "4px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#475569",
    borderRadius: "4px",
    "&:hover": {
      background: "#64748b",
    },
  },
}));

export default function CustomizedDataGrid() {
  return (
    <ScrollContainer>
      <DataGrid
        sx={{
          border: "1px solid #1e293b",
          borderRadius: "10px",
          color: "#E5E7E7",
          backgroundColor: "#080808",
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
                background: "#0f0f0fff",
              },
            },
          },

          /* Checkbox style */
          "& .MuiCheckbox-root": {
            padding: "4px",
            borderRadius: "10px",
          },

          "& .MuiCheckbox-root .MuiSvgIcon-root": {
            fontSize: 20,
            borderRadius: "5px",
            color: "grey",
          },

          /* Checked state */
          "& .MuiCheckbox-root.Mui-checked": {
            "& .MuiSvgIcon-root": {
              backgroundColor: "#496eafff",
              color: "#fcfdffff",
            },
          },

          "& .MuiChip-label": {
            background: "none !important",
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
              color: "#b1b0b0ff",
            },
          },
          "& .MuiTablePagination-input": {
            color: "#fff",
            border: "1px solid #34445f",
            borderRadius: "10px",
          },

          "& .MuiTablePagination-selectLabel": {
            color: "#fff",
          },

          "& .MuiTablePagination-displayedRows": {
            color: "#fff",
          },

          // Row styling
          "& .MuiDataGrid-row": {
            backgroundColor: "rgba(30, 41, 59, 0.1)",

            "&:hover": {
              backgroundColor: "#0f172a",
            },

            "&.Mui-selected": {
              backgroundColor: "#000",

              "&:hover": {
                backgroundColor: "#1a1a1a",
              },
            },
          },

          // Cell styling
          "& .MuiDataGrid-cell": {
            border: "none",
            borderBottom: "1px solid #1e293b",
            color: "#e2e8f0",
          },

          // Header styling
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#0f1011ff",
            "& .MuiDataGrid-sortButton": {
              backgroundColor: "transparent",
            },
          },

          // Footer styling
          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #1e293b",
            backgroundColor: "#0f1011ff",
          },

          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },

          // menu style

            "& .MuiListItemIcon-root": {
              fill: "#fff",
            },
          
          "& .MuiSvgIcon-root": {
            color: "#868282ff",
          },

          "& .MuiPaper-root": {
            background: "#000",
            color: "#fff",
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
