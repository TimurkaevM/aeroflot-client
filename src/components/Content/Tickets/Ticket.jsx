import React from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import plane from '../../../assets/icons/plane.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useTicketsStyles } from './style';

function Ticket({
  ticket,
  addingTicketFavorites,
  favorites,
  deleteTicketFavorites,
}) {
  dayjs.extend(advancedFormat);
  const classes = useTicketsStyles();

  const checked = favorites.some((favorite) => favorite._id === ticket._id);

  return (
    <React.Fragment>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <div className={classes.avatar}>
            <img src={plane} alt="" />
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={`${ticket.fromCity} (${ticket.fromAirport}) - ${ticket.toCity} (${ticket.toAirport})`}
          secondary={
            <React.Fragment>
              <span>
                {dayjs(ticket.date).format('DD MMMM, YYYY')} -{' '}
                {dayjs(ticket.date).format('HH : mm')}
              </span>
              <br />
              <span>{'Aeroflot'}</span>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction className={classes.action}>
          <div className={classes.btn}>
            {checked ? (
              <IconButton
                color="secondary"
                edge="end"
                aria-label="changed"
                onClick={() => deleteTicketFavorites(ticket._id)}
              >
                <FavoriteIcon className={classes.heart} />
              </IconButton>
            ) : (
              <IconButton
                color="secondary"
                edge="end"
                aria-label="changed"
                onClick={() => addingTicketFavorites(ticket)}
              >
                <FavoriteBorderIcon className={classes.heart} />
              </IconButton>
            )}
          </div>
          <div className={classes.price}>
            <div className={classes.text}>Price: </div>
            <div className={classes.number}>{ticket.price} ₽</div>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
}

export default Ticket;
