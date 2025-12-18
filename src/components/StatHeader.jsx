import { Box, Typography } from "@mui/material";

export default function StatHeader({
  title,
  value,
  percent,
  percentColor,
  subtitle,
}) {
  return (
    <Box mb={2}>
      <Typography fontSize={15} color="#fff" fontWeight={500}>
        {title}
      </Typography>

      <Box display="flex" alignItems="center" gap={1} mt={0.5}>
        <Typography fontSize={28} fontWeight={600} color="white">
          {value}
        </Typography>

        <Box
          sx={{
            px: 1,
            py: 0.3,
            fontSize: 12,
            borderRadius: 10,
            bgcolor: `${percentColor}22`,
            color: percentColor,
          }}
        >
          {percent}
        </Box>
      </Box>

      <Typography fontSize={12} color="#94a3b8">
        {subtitle}
      </Typography>
    </Box>
  );
}
