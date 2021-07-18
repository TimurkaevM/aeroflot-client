import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from './Calendar/index';
import Tickets from './Tickets/index';
import Departures from './Departures/index';
import Slider from './Slider/index';
import Favorites from './Favorites';
import LogOut from './LogOut';
import { Container, Grid } from '@material-ui/core';

import { useContentStyles } from './style';

function Content() {
  const classes = useContentStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2021-07-16T21:11:54'),
  );

  const tickets = useSelector((state) => state.tickets.items);
  const filteredTickets = tickets.filter(
    (ticket) => +ticket.date.slice(8, 10) === selectedDate.getDate(),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className={classes.root}
        >
          <Grid item xs={5}>
            <Departures />
          </Grid>
          <Grid item xs={4}>
            <Calendar
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </Grid>
        </Grid>
        <Slider />
        <Favorites />
        <Tickets tickets={filteredTickets} />
      </div>
      <LogOut />
    </Container>
  );
}

export default Content;
