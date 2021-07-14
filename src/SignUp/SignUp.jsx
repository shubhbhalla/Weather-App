import { useState, useContext } from 'react';

import { Button, TextField } from '@material-ui/core';

import { auth, createUserProfileDocument } from '../firebase';

import { SignUpContainer, TitleContainer } from './SignUp.styles';
import { MainContext } from '../MainContext';

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { getUserData } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, password, confirmPassword, email } = user;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    if (password.length < 6) {
      alert('passwords should be atleast 6 characters');
      return;
    }

    // how do i fix this asynchronous problem when the user first signs in?
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCred) => {
        createUserProfileDocument(userCred.user, name, getUserData);

        setUser({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('email already in use, please use a different email id');
        } else {
          console.log(error);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do have an account</TitleContainer>
      <span>Sign up with your email and password</span>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          label="Name"
          required
        />
        <TextField
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <TextField
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <TextField
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
