import { Box, Grid } from "@mui/material";
import StatCardSX from "./StatCardSX";
import Fourthbx from "./Fourthbx";

export default function DashboardStats() {

  return (
    <>
      <Grid container spacing={2} sx={{ flexWrap: { md: "nowrap" } }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          {/* CARD 1 */}
          <StatCardSX
            title="Users"
            value="14k"
            percent="+25%"
            percentColor="#22c55e"
            percentBg="rgba(34,197,94,0.15)"
            content="Last 30 days"
            graphBg="linear-gradient(to right, #22c55e33, transparent)"
            graphColor="green"
            data={[
              200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320,
              360, 380, 320, 400, 320, 420, 360,
            ]}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          {/* CARD 2 */}
          <StatCardSX
            title="Conversations"
            value="325"
            percent="-25%"
            percentColor="#ef4444"
            percentBg="rgba(239,68,68,0.15)"
            graphBg="linear-gradient(to right, #ef444433, transparent)"
            graphColor="red"
            data={[
              615, 228, 306, 110, 312, 119, 514, 15, 228, 306, 110, 312, 119,
              514,
            ]}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          {/* CARD 3 */}
          <StatCardSX
            title="Event count"
            value="200k"
            percent="+5%"
            percentColor="#dcdfe2ff"
            percentBg="rgba(39, 58, 88, 0.15)"
            graphBg="linear-gradient(to right, #d6d1d19f, transparent)"
            graphColor="grey"
            data={[
              615, 228, 306, 10, 312, 119, 514, 15, 228, 306, 610, 312, 119,
              514,
            ]}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Fourthbx />
        </Grid>
      </Grid>
    </>
  );
}
