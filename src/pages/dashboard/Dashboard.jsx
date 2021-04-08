import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../../auth/AuthContext';
import { Redirect } from 'react-router-dom';

const DashBoardStyles = styled.section`
  display: flex;
`;

const SideBar = styled.aside`
  position: relative;
  z-index: 1;
  width: 298px;
  box-shadow: 0 0 3px 1px grey;
  height: calc(100vh - 64px);
  padding: 2rem;
  header {
    margin-bottom: 1rem;
    font-size: 13px;
  }
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  li {
    opacity: 0.7;
    font-size: 12px;
    margin-bottom: 0.35rem;
  }
`;

const Panels = styled.section`
  flex: 1;
  background: #f3f3f3;
  height: calc(100vh - 64px);
  width: calc(100% - 198px);
`;
const DashBoard = (props) => {
  const auth = useContext(AuthContext);
  console.log(auth);
  if (auth.authenticated) {
    return (
      <DashBoardStyles>
        <SideBar>
          <header>
            <h1>Firebase App</h1>
            <p>tagline goes here</p>
          </header>
          <ul>
            <li>View All</li>
            <li>CREATE</li>
            <li>EDIT</li>
            <li>DELETE</li>
          </ul>
        </SideBar>
        <Panels></Panels>
      </DashBoardStyles>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default DashBoard;
