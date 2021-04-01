import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyles = styled.button`
  width: 100%;
  border: inherit;
  background-color: inherit;
  font-size: 1rem;
  color: #8e979c;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.65rem 1rem;
  margin-bottom: 0.5rem;
  ${(props) =>
    props.uiStyle === 'signup' &&
    css`
      background: #f15b29;
      color: white;
    `}
  ${(props) =>
    props.uiStyle === 'login' &&
    css`
      background: blue;
      color: white;
    `}
`;

const CallToActionButton = styled(ButtonStyles)``;
const Button = (props) => {
  return (
    <ButtonStyles {...props}>
      {props.icon}
      {props.label}
      {props.children}
    </ButtonStyles>
  );
};

export default Button;
