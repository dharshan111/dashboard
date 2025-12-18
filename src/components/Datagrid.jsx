import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./gridData";

export default function CustomizedDataGrid() {
  return (
    <DataGrid
      sx={{
        border: "1px solid #1e293b",
        borderRadius: "10px",
        
        /* Checkbox style */
        "& .MuiCheckbox-root": {
          padding: "4px",
          borderRadius: "4px",
        },

         "& .MuiDataGrid-virtualScrollerRenderZone":{
            borderbottom: "1px solid #1e293b",
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

        "& .MuiTablePaginationActions-root": {
          display: "flex",
          gap: "10px",
          padding: "10px",
          "& .MuiButtonBase-root": {
            border: "1px solid #34445f",
            fontSize: "5px",
            borderRadius: "6px",
            padding: "4px",
          },
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
  );
}
