import React, { useState } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";

// Desktop Sidebar
import Sidebar from "./components/Sidebar";

// Mobile Components
import MobileHeader from "./components/MobileHeader";
import MobileSidebar from "./components/MobileSidebar";

// Dashboard Components
import Head from "./components/Head";
import DashboardStats from "./components/DashboardStats";

import Barchart from "./components/Barchart";
import Barchart2 from "./components/Barchart2";
import Datagrid from "./components/Datagrid";
import Tree from "./components/Tree";
import Piechart from "./components/Piechart";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <Box
      className="innerWidth"
      sx={{
        display: "flex",
        minHeight: "100vh",
        color: "#E5E7E7",
        backgroundColor: "#080808",
      }}
    >
      {/* Desktop Sidebar */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Box>

      {/* Mobile Drawer Sidebar */}
      <MobileSidebar open={mobileOpen} onClose={closeDrawer} />

      {/* Mobile Header */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileHeader toggleDrawer={toggleDrawer} />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { sm: "100%", md: "1700px" },
          ml: { xs: 0, md: 2 },
          p: 1,
        }}
      >
        {/* Desktop Header */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Head />
        </Box>

        <Typography
          variant="h6"
          sx={{
            mt: { xs: 8, sm: 8, md: 8, lg: 0 },
            m: {lg:1},
            mb:{lg:1}// Desktop (lg) has 0 margin-top
          }}
        >
          Overview
        </Typography>

        <Grid container spacing={2} columns={12} sx={{ mb: 1 }}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <DashboardStats />
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={12} sx={{ mb: 2, mt: 2, }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Barchart2 />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Barchart />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Details
        </Typography>

        <Grid container spacing={1} columns={12}>
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
