import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import StatHeader from "./StatHeader";

const pData = [2234, 3872, 2998, 4125, 3357, 2789, 2998];

const uData = [3098, 4215, 2384, 2101, 4752, 3593, 2384];

const sData = [4051, 2275, 3129, 4693, 3904, 2093, 2274];

const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export default function StackedBarChart() {
  return (
    <>
      <Box
        sx={{
          width: "40%",
          padding: "10px",
          color: "#fff",
          borderRadius: "10px",
          border: "1px solid #1e293b",
        }}
      >
        <StatHeader
          title="Page views and downloads"
          value="1.3M"
          percent="-8%"
          percentColor="#ef4444"
          subtitle="Page views and downloads for the last 6 months"
        />

        <BarChart
          height={270}
          width={500}
          margin={{ top: 0, bottom: 30, left: 5, right: 5 }}
          series={[
            {
              data: pData,
              label: "page view",
              stack: "total",
              color: "#1A6ABB",
            },
            {
              data: uData,
              label: "Downloads",
              stack: "total",
              color: "#1C88F3",
            },
            {
              data: sData,
              label: "Conversions",
              stack: "total",
              color: "#5EAFFF",
            },
          ]}
          xAxis={[{ data: xLabels }]}
          yAxis={[{ width: 50 }]}
          grid={{ horizontal: true,
            horizontalStrokeDasharray: "6 6",
            horizontalStrokeWidth: 1.5,
            horizontalStroke: "#837f7f",
          }}
          sx={{
            "& .MuiBarElement-root": {
              width: 35,
              padding: "20px",
              borderRadius: "20px",
            },

            "& .MuiChartsTooltip-root": {
              color: "#fff",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            },

            "& .MuiChartsTooltip-label": {
              color: "#fff",
              fontWeight: 600,
            },

            "& .MuiChartsAxis-tickLabel": {
              fill: "#fff",
            },

            "& .MuiChartsAxis-line": {
              stroke: "#fff",
            },

            "& .MuiChartsAxis-tick": {
              stroke: "#fff",
            },


            /* Hide legend */
            "& .MuiChartsLegend-root": {
              display: "none",
            },
          }}
        />
      </Box>
    </>
  );
}
