import React from 'react';
import styled from 'styled-components';

const sizes = {
  lg: '1.5rem',
  md: '1rem',
  sm: '.5rem',
};

const StyledButton = styled.button`
  color: ${props => props.color || 'black'};
  background: ${props => props.background || 'white'};
  font-size: ${props => (props.size ? sizes[props.size] : sizes['md'])};
  padding: ${props => props.padding || null};
  border-radius: 10px;
`;

function Button({ disabled, text, onSubmit, color, padding, background, size }) {
  return (
    <StyledButton
      size={size}
      color={color}
      background={background}
      onClick={onSubmit}
      padding={padding}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
