import React, { useContext, useState } from 'react';
import { Link, Redirect, useRouteMatch, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../../auth/AuthContext';
import ViewAll from './panels/ViewAll';
import EditPanel from './panels/EditPanel';
import CreatePanel from './panels/CreatePanel';
import DeletePanel from './panels/DeletePanel';

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
  const { path, url } = useRouteMatch();
  if (auth.authenticated) {
    return (
      <DashBoardStyles>
        <SideBar>
          <header>
            <h1>Firebase App</h1>
            <p>tagline goes here</p>
          </header>
          <ul>
            <li>
              <Link to={`${url}`}>View All</Link>
            </li>
            <li>
              <Link to={`${url}/create`}>Create Content</Link>
            </li>
            <li>
              <Link to={`${url}/edit`}>Edit Content</Link>
            </li>
            <li>
              <Link to={`${url}/delete`}>Delete Content</Link>
            </li>
          </ul>
        </SideBar>
        <Panels>
          <Switch>
            <Route exact path={path}>
              <ViewAll />
            </Route>
            <Route path={`${path}/create`}>
              <CreatePanel />
            </Route>
            <Route path={`${path}/edit`}>
              <EditPanel />
            </Route>
            <Route path={`${path}/delete`}>
              <DeletePanel />
            </Route>
          </Switch>
        </Panels>
      </DashBoardStyles>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default DashBoard;
