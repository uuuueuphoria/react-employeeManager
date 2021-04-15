import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';

import AddEmployeeWidget from './widgets/AddEmployeeWidget';
import EmployeeDisplayWidget from './widgets/EmployeeDisplayWidget';
import firebaseApp from '../../../firebase/fireConfig';

const ViewAllPanelStyles = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  aside {
    width: 480px;
  }
`;

const ViewAll = (props) => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    let store = [];
    const userId = firebaseApp.auth().currentUser.uid;
    //console.log(userId);
    const employeesRef = firebaseApp
      .firestore()
      .collection(userId)
      .doc('hr')
      .collection('employees');

    employeesRef.onSnapshot((snapshot) => {
      store = snapshot.docs.map((doc) => doc.data());
      setEmployees(store);
      //console.log(employees);
    });
  };
  return (
    <section>
      <ViewAllPanelStyles>
        <AddEmployeeWidget />
        <EmployeeDisplayWidget employees={employees} />
      </ViewAllPanelStyles>
    </section>
  );
};

export default ViewAll;
