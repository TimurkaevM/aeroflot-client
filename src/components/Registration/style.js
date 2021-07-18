import { makeStyles } from '@material-ui/core';

export const useSignUpStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    maxWidth: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(20px)',
    padding: '0',
    margin: '0',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '410px',
    backgroundColor: ' #FFFFFF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '20px',
    padding: '53px 33px 37px',
    boxSizing: 'border-box',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(104.34deg, #3C4CAD -15.34%, #00C3FF 145.95%)',
  },
}));
