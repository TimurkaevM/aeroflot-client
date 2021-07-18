import { useEffect } from 'react';
import Auth from './Auth/index';
import View from './View';
import Register from './Registration/index';
import Content from './Content/index';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../redux/ducks/usersReducer';
import { fetchTickets } from '../redux/ducks/ticketsReducer';
import { fetchImages } from '../redux/ducks/imagesReducer';

import style from './style.module.css';

function App() {
  const isAuth = useSelector((state) => state.users.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    dispatch(fetchImages());
    dispatch(fetchTickets());
  }, [dispatch]);

  let routes;

  if (isAuth) {
    routes = (
      <Switch>
        <Route exact path="/content" component={Content} />
        <Redirect to="/content" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={View} />
        <Route path="/auth" component={Auth} />
        <Route path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <div className={style.app}>{routes}</div>;
}

export default App;
