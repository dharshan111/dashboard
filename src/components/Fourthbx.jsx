import { Box, Typography } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Fourthbx() {
  return (
    
    <>
      <Box
        sx={{
          width:"100%",
          p: 2.5,
          borderRadius: 2,
          border: "1px solid #1e293b",
          height:190,
          background:"#0B0E14",
          display:"flex",
          flexDirection:"column",
          gap:"2.5px",
        }}
      >
        {/* TITLE */}
        <Typography fontSize={14}>
          <AutoGraphIcon />
        </Typography>

        {/* VALUE + PERCENT */}
        <Box>
          <Typography fontSize={15} fontWeight={600} mt={1} color="white">
            Explore your data
          </Typography>
        </Box>

        {/* SUBTEXT */}
        <Typography fontSize={14} color="#94a3b8">
          Uncover performance and visitor insights with our data wizardry.
        </Typography>

        {/* GRAPH PLACEHOLDER */}
        <Box />
        <Button
          endIcon={<ArrowForwardIosIcon sx={{fontSize:"5px",}}/>}
          sx={{
            border:"1px solid grey",
            textTransform: "none",
            background:"white",
            fontSize: 14,
            fontWeight:450,
            color:"black",
            width:130,
            borderRadius: "10px",

          }}
        >
          Get insights
        </Button>
      </Box>
    </>
  );
}
