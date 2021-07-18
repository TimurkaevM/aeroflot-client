import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

import { useViewStyles } from './style';

export default function View() {
  const classes = useViewStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <div className={classes.root}>
          <Button
            className={classes.button}
            onClick={() => history.push('/register')}
            variant="outlined"
            color="primary"
          >
            Регистрация
          </Button>
          <Button
            className={classes.button}
            onClick={() => history.push('/auth')}
            variant="outlined"
            color="secondary"
          >
            Войти
          </Button>
        </div>
      </div>
    </Container>
  );
}
