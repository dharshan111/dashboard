import { Box, Typography } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { areaElementClasses } from "@mui/x-charts/LineChart";

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export default function StatCardSX(props) {
  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 2,
        border: "1px solid #1e293b",
        width: 260,
        height:200,
      }}
    >
      {/* TITLE */}
      <Typography fontSize={14} fontWeight="600" color="white">
        {props.title}
      </Typography>

      {/* VALUE + PERCENT */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={600} mt={1} color="white">
          {props.value}
        </Typography>

        <Box
          sx={{
            fontSize: 12,
            px: 1,
            py: 0.3,
            borderRadius: 10,
            bgcolor: props.percentBg,
            color: props.percentColor,
          }}
        >
          {props.percent}
        </Box>
      </Box>

      {/* SUBTEXT */}
      <Typography fontSize={12} color="#94a3b8">
        Last 30 days
      </Typography>

      {/* GRAPH */}
      <Box mt={2} height={40}>
        <SparkLineChart
          data={props.data}
          area
          showTooltip
          showHighlight
          color={props.graphColor}
          sx={{
            [`& .${areaElementClasses.root}`]: {
              fill: `url(#area-gradient-${props.title})`,
            },
          }}
        >
          <AreaGradient
            color={props.graphColor}
            id={`area-gradient-${props.title}`}
          />
        </SparkLineChart>
      </Box>
    </Box>
  );
}
