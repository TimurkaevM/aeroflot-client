import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login, ChangeError } from '../../redux/ducks/usersReducer';
import { useAuthStyles } from './style';
import Input from '../Registration/Input';
import InputError from '../Registration/InputError';

function Auth() {
  const classes = useAuthStyles();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    dispatch(ChangeError());
  };

  const passChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    dispatch(ChangeError());
  };

  const handleClick = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const letters = /^[А-Яа-яёЁ]+$/;

    if (error === 'Пользователь не найден') {
      return setEmailError(error);
    }
    if (error === 'Неверный пароль') {
      return setPasswordError(error);
    }
    if (!email) {
      return setEmailError('Не может быть пустым');
    }
    if (!re.test(String(email).toLowerCase())) {
      return setEmailError('Некорректные данные');
    }
    if (!password) {
      return setPasswordError('Не может быть пустым');
    }
    if (password.length < 8) {
      return setPasswordError('минимум 8 символов');
    }
    if (letters.test(String(password).toLowerCase())) {
      return setPasswordError(
        'Можно использовать только Латинские буквы и цифры',
      );
    }
    if (email && password) {
      dispatch(login(email, password));
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Simple Flight Check
        </Typography>
        <form className={classes.form} noValidate>
          {emailError ? (
            <InputError
              margin="normal"
              helperText={emailError}
              autoComplete="email"
              value={email}
              id="email"
              name="email"
              onChange={emailChange}
            />
          ) : (
            <Input
              margin="normal"
              autoComplete="email"
              value={email}
              id="email"
              name="email"
              onChange={emailChange}
            />
          )}
          {passwordError ? (
            <InputError
              margin="normal"
              helperText={passwordError}
              autoComplete="current-password"
              value={password}
              id="password"
              name="password"
              onChange={passChange}
            />
          ) : (
            <Input
              margin="normal"
              autoComplete="current-password"
              value={password}
              id="password"
              name="password"
              onChange={passChange}
            />
          )}
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Войти
          </Button>
        </form>
      </div>
      <Box mt={8} />
    </Container>
  );
}

export default Auth;
