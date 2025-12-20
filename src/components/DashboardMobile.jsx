import React, { useState } from "react";
import { Box } from "@mui/material";
import MobileHeader from "./MobileHeader";
import MobileSideMenu from "./MobileSideMenu";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* Header */}
      <MobileHeader toggleDrawer={toggleDrawer} />

      {/* Sidebar */}
      <MobileSideMenu open={open} onClose={closeDrawer} />

      {/* Your main dashboard content here */}
    </Box>
  );
};

export default Dashboard;
