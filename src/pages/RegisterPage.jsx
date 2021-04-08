import React from 'react';
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';
import firebaseApp from './../firebase/fireConfig';
import { Redirect } from 'react-router-dom';
import AuthContext, { AuthProvider } from './../auth/AuthContext';
import { useState } from 'react';
const RegisterPageStyles = styled.div`
  max-width: 480px;
  margin: 6rem auto 0;
  header {
    text-align: center;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  button {
    margin-top: 1rem;
  }
`;

const RegisterPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    //no this
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //auth
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
  if (success) {
    return <Redirect to="/login" />;
  } else {
    return (
      <RegisterPageStyles>
        <header>
          <h1>Unlimited Trial Account</h1>
          <p>No credit card required</p>
        </header>
        <FormInput
          inputType="text"
          label="name on the account"
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <FormInput
          inputType="email"
          label="valid email address"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <FormInput
          inputType="password"
          label="password (8 characters)"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <Button
          label="create a new account"
          uiStyle="login"
          onClick={handleSignUp}
        />
      </RegisterPageStyles>
    );
  }
};

export default RegisterPage;
