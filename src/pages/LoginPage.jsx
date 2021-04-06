import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from 'react';
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';
import firebaseApp from './../firebase/fireConfig';
import { Redirect } from 'react-router-dom';

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
  //useState ---hook----functional approach to build components
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleLogin = (e) => {
    //no this
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //auth
        setIsValid(true);
        //redirect to the dashboard, use react router dom
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setIsValid(false);
      });
  };
  if (isValid) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <LoginPageStyles>
        <header>
          <h1>Login to your Account</h1>
        </header>
        <FormInput
          inputType="email"
          label="enter email address"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <FormInput
          inputType="password"
          label="enter your password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <Button onClick={handleLogin} label="Sign In" uiStyle="signup" />
      </LoginPageStyles>
    );
  }
};

export default LoginPage;
