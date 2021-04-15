import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import firebaseApp from '../../../../firebase/fireConfig';

import Button from 'components/buttons/Button';
import FormInput from 'components/forms/FormInput';
import { UserAdd } from 'components/icons';

const WidgetStyles = styled.aside`
  background: #ffffff;
  box-shadow: 0 0 3px 0px #c5c5c5;
  border-radius: 8px;
  padding: 2rem;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  svg {
    width: 1.5rem;
    margin-right: 0.25rem;
  }
`;

const AddEmployeeWidget = (props) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  function handleInsert() {
    //insert the data from the state
    //create a unique id checking to see if the id is in the collection
    //pass firebase function offloaded to firebase cloud to process
    const id = uuidv4().substr(0, 8);
    const userId = firebaseApp.auth().currentUser.uid;
    const newDocRef = firebaseApp
      .firestore()
      .collection(userId)
      .doc('hr')
      .collection('employees')
      .doc(id);
    newDocRef.set({
      id,
      name,
      department,
    });
    setName('');
    setDepartment('');
  }

  return (
    <WidgetStyles>
      <header>
        <UserAdd />
        <h2>Add New Employee</h2>
      </header>
      <FormInput
        type="text"
        label="fullname"
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        type="text"
        label="department"
        onChange={(e) => setDepartment(e.target.value)}
      />
      <Button label="add employee" onClick={handleInsert} />
    </WidgetStyles>
  );
};

export default AddEmployeeWidget;
