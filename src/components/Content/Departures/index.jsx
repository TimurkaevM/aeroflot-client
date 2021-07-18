import { Grid, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Departures() {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Typography variant="h6" align="center">
        Вылеты
      </Typography>
      <ArrowForwardIosIcon style={{ fontSize: 16, color: '#A7A7A7' }} />
      <Typography variant="h6" align="center">
        SVO - JFK
      </Typography>
    </Grid>
  );
}

export default Departures;
