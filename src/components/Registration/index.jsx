import React, { useState } from 'react';
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpStyles } from './style';
import { registration, ChangeError } from '../../redux/ducks/usersReducer';
import Input from './Input';
import InputError from './InputError';

function Register() {
  const classes = useSignUpStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');

  const emailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    dispatch(ChangeError());
  };
  const nameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };
  const surnameChange = (e) => {
    setSurname(e.target.value);
    setSurnameError('');
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const letters = /^[А-Яа-яёЁ]+$/;

    if (error !== null) {
      setEmailError(error);
      dispatch(ChangeError());
    }
    if (!name) {
      return setNameError('Не может быть пустым');
    }
    if (!surname) {
      return setSurnameError('Не может быть пустым');
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
    if (email && password && name && surname) {
      dispatch(registration(name, surname, email, password));
    }
  };

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {nameError ? (
                <InputError
                  helperText={nameError}
                  autoComplete="name"
                  value={name}
                  id="name"
                  name="name"
                  onChange={nameChange}
                />
              ) : (
                <Input
                  autoComplete="name"
                  value={name}
                  id="name"
                  name="name"
                  onChange={nameChange}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {surnameError ? (
                <InputError
                  helperText={surnameError}
                  autoComplete="surname"
                  value={surname}
                  id="surname"
                  name="surname"
                  onChange={surnameChange}
                />
              ) : (
                <Input
                  autoComplete="surname"
                  value={surname}
                  id="surname"
                  name="surname"
                  onChange={surnameChange}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {emailError ? (
                <InputError
                  helperText={emailError}
                  autoComplete="email"
                  value={email}
                  id="email"
                  name="email"
                  onChange={emailChange}
                />
              ) : (
                <Input
                  autoComplete="email"
                  value={email}
                  id="email"
                  name="email"
                  onChange={emailChange}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {passwordError ? (
                <InputError
                  helperText={passwordError}
                  autoComplete="current-password"
                  value={password}
                  id="password"
                  name="password"
                  onChange={passwordChange}
                />
              ) : (
                <Input
                  autoComplete="current-password"
                  value={password}
                  id="password"
                  name="password"
                  onChange={passwordChange}
                />
              )}
            </Grid>
          </Grid>
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Register;
