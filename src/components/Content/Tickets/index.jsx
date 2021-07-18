import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import Ticket from './Ticket';
import {
  AddingFavorite,
  DeletingFavorite,
} from '../../../redux/ducks/applicationReducer';

import { useTicketsStyles } from './style';

function Tickets(props) {
  const classes = useTicketsStyles();

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.application.favorites);

  const addingTicketFavorites = (ticket) => {
    dispatch(AddingFavorite(ticket));
  };

  const deleteTicketFavorites = (id) => {
    dispatch(DeletingFavorite(id));
  };

  return (
    <List className={classes.list}>
      {props.tickets.map((ticket) => {
        return (
          <Ticket
            key={ticket._id}
            ticket={ticket}
            favorites={favorites}
            deleteTicketFavorites={deleteTicketFavorites}
            addingTicketFavorites={addingTicketFavorites}
          />
        );
      })}
    </List>
  );
}

export default Tickets;
