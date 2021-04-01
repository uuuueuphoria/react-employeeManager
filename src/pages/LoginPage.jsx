import React from 'react';
import styled from 'styled-components';
import fireBaseApp from './../firebase/fireConfig';
import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';
import firebaseApp from './../firebase/fireConfig';
const LoginPageStyles = styled.div`
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

const LoginPage = () => {
  const handleLogin = (e) => {
    //no this
    firebaseApp
      .auth()
      .signInWithEmailAndPassword('wanlun@home.com', '123456ab')
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        console.log(userCredential.user.email);
        //redirect to the dashboard
      });
  };
  function xxx() {
    //can use this
  }
  return (
    <LoginPageStyles>
      <header>
        <h1>Login to your Account</h1>
      </header>
      <FormInput inputType="email" label="enter email address" />
      <FormInput inputType="password" label="enter your password" />
      <Button onClick={handleLogin} label="Sign In" uiStyle="signup" />
    </LoginPageStyles>
  );
};

export default LoginPage;
