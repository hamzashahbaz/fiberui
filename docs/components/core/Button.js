import React from 'react';
import styled from 'styled-components';

const Action = styled.a`
  background-color: ${(p) => (!p.type ? p.theme.colors.R400 : 'transparent')};
  border: ${(p) => (!p.type ? 'none' : `1px solid ${p.theme.colors[p.color]}`)};
  border-radius: 4px;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  color: ${(p) => (!p.type ? p.theme.colors.N0 : p.theme.colors[p.color])};
  font-size: ${(p) => p.theme.typography.button.size};
  line-height: ${(p) => p.theme.typography.button.lineHeight};
  font-weight: ${(p) => p.theme.typography.button.weight};
`;

const Button = (props) => {
  return (
    <Action color={props.color} type={props.secondary} onPress={props.action}>
    {props.title}
    </Action>
  );
};

Button.defaultProps = {
  color: 'N0',
};

export default Button;
