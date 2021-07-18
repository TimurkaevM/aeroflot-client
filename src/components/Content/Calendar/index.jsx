import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function Calendar(props) {
  return (
    <Grid container justifyContent="center">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={props.selectedDate}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}

export default Calendar;
