import { Alert, Box, Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { color } from '../guides';
import { IDict } from '../interfaces/interfaces';

const auth: IDict = {
  login: 'password',
  qwe: '123'
};
const onClickCheck = (login: string, password: string): boolean => {
  if (login in auth && auth[login] === password) {
    return false;
  } else return true;
};

export const Authorization = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [link, setLink] = useState<boolean>(true);

  const changePassword = (value: string) => {
    setPassword(value);
  };
  const changeLogin = (value: string) => {
    setLogin(value);
  };

  return (
    <Box
      display='flex'
      maxWidth='500px'
      width='100%'
      margin='0 auto'
      padding='20px'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Paper
        elevation={20}
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '15px' }}
      >
        <TextField
          label='Логин'
          sx={{ marginBottom: '10px' }}
          value={login}
          onChange={(event) => {
            changeLogin(event.target.value);
            setLink(onClickCheck(login, password));
            console.log(event.target.value)
          }}
        ></TextField>
        <TextField
          label='Пароль'
          sx={{ marginBottom: '10px' }}
          value={password}
          onChange={(event) => {
            changePassword(event.target.value);
            setLink(onClickCheck(login, password));
          }}
        ></TextField>

        <Button
          sx={{ width: '100%' }}
          variant='contained'
          onClick={() => {
            setError(onClickCheck(login, password));
            // setLink(onClickCheck(login, password));
            // redirect('/');
          }}
        >
          <Link
            to={link ? '/authorization' : '/'}
            style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}
          >
            Войти
          </Link>
        </Button>

        {error ? (
          <Alert sx={{ marginBottom: '10px', marginTop: '10px' }} severity='error'>
            Неверный логи или пароль
          </Alert>
        ) : (
          ''
        )}
      </Paper>
    </Box>
  );
};
