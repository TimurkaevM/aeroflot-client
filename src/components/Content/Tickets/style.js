import { makeStyles } from '@material-ui/core';

export const useTicketsStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 350,
    scrollbarColor: '#458245 #714826',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '3px',
      backgroundColor: '#E7E7E7',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#1157A7',
      borderRadius: '9em',
      boxShadow: 'inset 1px 1px 10px #f3faf7',
    },
  },
  listItem: {
    padding: '20px 11px 17px',
    borderBottom: '1px solid rgba(135, 135, 135, 0.2)',
  },
  avatar: {
    width: '63px',
    height: '63px',
    color: 'rgba(0, 119, 255, 0.05)',
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '24px',
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    width: '50px',
    height: '50px',
    alignSelf: 'flex-end',
  },
  price: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  text: {
    fontWeight: '300',
    fontSize: '11px',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
    color: '#878787',
  },
  number: {
    fonStyle: 'normal',
    fontWeight: 'normal',
    fonSize: '17px',
    lineHeight: '22px',
    letterSpacing: '-0.408px',
    color: '#424242',
    marginLeft: '8px',
  },
  heart: {
    color: 'red',
  },
}));
