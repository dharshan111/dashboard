import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

export default function CardAlert() {
  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0, borderRadius:"15px", border:"1px solid #6a6c6eff", background:"#31353aff", }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Plan about to expire
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: '#557DAE' }}>
          Enjoy 10% off when renewing your plan <br /> today.
        </Typography>
        <Button size="small" fullWidth sx={{
            padding:"8px",
            borderRadius:"10px",
            color:"black",
            backgroundColor:"white",
            fontSize:"12px",
        }}>
          Get the discount
        </Button>
      </CardContent>
    </Card>
  );
}