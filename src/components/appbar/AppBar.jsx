import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import firebaseApp from '../../firebase/fireConfig';

const AppBarStyles = styled.nav`
  box-shadow: 0 0 3px 1px grey;
  position: relative;
  z-index: 4;
  background-color: inherit;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    padding: 1rem;
  }
  li {
    margin: 0 1rem 0;
  }
  a {
    text-decoration: none;
    color: grey;
  }
`;

const AppBar = (props) => {
  const handleLogOut = () => {
    firebaseApp.auth().signOut();
  };
  return (
    <AppBarStyles>
      <ul>
        <li>
          <Link to="/">Employee Manager</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li> */}
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogOut}>Sign Out</button>
        </li>
      </ul>
    </AppBarStyles>
  );
};

export default AppBar;
