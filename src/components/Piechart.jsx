import * as React from "react";
import PropTypes from "prop-types";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";

const data = [
  { label: "India", value: 50000 },
  { label: "USA", value: 35000 },
  { label: "Brazil", value: 10000 },
  { label: "Other", value: 5000 },
];

const countries = [
  {
    name: "India",
    value: 50,
    flag: <AssistantPhotoIcon />,
    color: "hsl(220, 20%, 65%)",
  },
  {
    name: "USA",
    value: 35,
    flag: <AssistantPhotoIcon />,
    color: "hsl(220, 20%, 42%)",
  },
  {
    name: "Brazil",
    value: 10,
    flag: <AssistantPhotoIcon />,
    color: "hsl(220, 20%, 35%)",
  },
  {
    name: "Other",
    value: 5,
    flag: <AssistantPhotoIcon />,
    color: "hsl(220, 20%, 25%)",
  },
];

const StyledText = styled("text", {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme }) => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fill: "#fff",
  fontFamily: theme.typography.fontFamily,
  variants: [
    {
      props: {
        variant: "primary",
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: {
        variant: "secondary",
      },
      style: {
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

const colors = [
  "hsl(220, 20%, 65%)",
  "hsl(220, 20%, 42%)",
  "hsl(220, 20%, 35%)",
  "hsl(220, 20%, 25%)",
];

export default function ChartUserByCountry() {
  const theme = useTheme();
  
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
        borderRadius: "10px",
        flexGrow: 1,
        border: "1px solid #333",
        backgroundColor: '#080808',
      }}
    >
      <CardContent sx={{ backgroundColor: '#080808' }}>
        <Typography 
          component="h2" 
          variant="subtitle2"
          sx={{ 
            color: theme.palette.common.white,
            mb: 2 
          }}
        >
          Users by country
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PieChart
            colors={colors}
            margin={{
              left: 20,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { fade: "global", highlight: "item" },
                // REMOVED arcLabel to hide text on pie slices
                // arcLabel: (item) => `${item.value}`, // Comment or remove this line
                // arcLabelMinAngle: 20, // Also remove this
              },
            ]}
            height={260}
            width={260}
            hideLegend
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            sx={{
              '& text': {
                fill: '#fff !important',
              },
              // arc label styling not showing them
              // '& .MuiPieArcLabel-root': {
              //   fill: '#fff',
              //   fontWeight: 'bold',
              //   fontSize: '12px',
              //   filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
              // },
            }}
          >
            <PieCenterLabel primaryText="98.5K" secondaryText="Total" />
          </PieChart>
        </Box>
        {countries.map((country, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: "center", gap: 2, pb: 2 }}
          >
            <Box sx={{ color: '#fff' }}>
              {country.flag}
            </Box>
            <Stack sx={{ gap: 1, flexGrow: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: "500",
                    color: theme.palette.common.white 
                  }}
                >
                  {country.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme.palette.common.white 
                  }}
                >
                  {country.value}%
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                aria-label="Number of users by country"
                value={country.value}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: country.color,
                    borderRadius: 2,
                  },
                  height: 8,
                  borderRadius: 2,
                }}
              />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}