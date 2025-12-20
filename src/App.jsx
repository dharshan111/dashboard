import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import Barchart from "./components/Barchart";
import Barchart2 from "./components/Barchart2";
import Tree from "./components/Tree";
import Head from "./components/Head";
import DashboardStats from "./components/DashboardStats";
import Fourthbx from "./components/Fourthbx";
import Piechart from "./components/Piechart";
import Datagrid from "./components/Datagrid";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (

    <Box 
      sx={{
        display: "flex",
        color: "#E5E7E7",
        backgroundColor: "#080808",
        minHeight: "100vh",
        p: 2,  // Equivalent to padding: 20px (MUI uses 8px spacing unit)
      }}
    >
      <Sidebar />

      <Box
        sx={{
          width: "100%",
          maxWidth: { sm: "100%", md: "1700px" },
          ml: 2, // Add some margin left since sidebar is separate
        }}
      >
        <Head />

        <Typography
          component="h2"
          variant="h6"
          sx={{ mb: 2, color: "#E5E7E7" }}
        >
          Overview
        </Typography>

        <Grid container spacing={1} columns={12} sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, sm: 8, lg: 9 }}>
            <DashboardStats />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Fourthbx />
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Barchart2 />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Barchart />
          </Grid>
        </Grid>

        <Typography
          component="h2"
          variant="h6"
          sx={{ mb: 2, color: "#E5E7E7" }}
        >
          Details
        </Typography>

        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, lg: 9 }}>
            <Datagrid />
          </Grid>
          <Grid size={{ xs: 12, lg: 3 }}>
            <Stack
              gap={2}
              direction={{ xs: "column", sm: "row", lg: "column" }}
            >
              <Tree />
              <Piechart />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
