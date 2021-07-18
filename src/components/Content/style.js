import { makeStyles } from '@material-ui/core';

export const useContentStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    maxWidth: '100%',
    position: 'relative',
    background: '#E5E5E5',
    padding: '60px 0',
    margin: '0',
    overflowY: 'scroll',
    boxSizing: 'border-box',
  },
  paper: {
    width: '650px',
    backgroundColor: ' #FFFFFF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '20px',
    padding: '65px 40px 40px',
    boxSizing: 'border-box',
    margin: 'auto',
  },
}));
