import { useState, useContext } from 'react';

import { Button, TextField } from '@material-ui/core';

import { auth, signInWithGoogle } from '../firebase';
import { MainContext } from '../MainContext';

import {
  ButtonContainer,
  SignInContainer,
  TitleContainer,
} from './SignIn.styles';

const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { setLoading } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const { email, password } = user;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        setUser({
          email: '',
          password: '',
        });
      })
      .catch((e) => {
        alert('Wrong email and password combination');
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          label="email"
          required
        />
        <TextField
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          label="password"
          required
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button color="primary" type="button" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
