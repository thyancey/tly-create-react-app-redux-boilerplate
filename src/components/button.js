import React from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from 'themes/';

const $Button = styled.button`
  padding: 1rem;
  margin: 1rem;

  background-color: ${themeGet('color', 'blue')};
  border:none;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px ${themeGet('color', 'green')}

  ${p => p.isActive && css`
    background-color: ${themeGet('color', 'green')}
  `}
`;

const Button = ({ text, isActive, onClick }) => {
  return (
    <$Button isActive={isActive} onClick={(e) => onClick(e)}>
      { text }
    </$Button>
  );
}

export default Button;
