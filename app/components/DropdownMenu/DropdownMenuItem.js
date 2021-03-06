// @flow
import React from 'react';
import styled from 'styled-components';
import { color } from 'shared/styles/constants';

type Props = {
  onClick?: SyntheticEvent => void,
  children?: React.Element<any>,
};

const DropdownMenuItem = ({ onClick, children, ...rest }: Props) => {
  return (
    <MenuItem onClick={onClick} {...rest}>
      {children}
    </MenuItem>
  );
};

const MenuItem = styled.a`
  display: flex;
  margin: 0;
  padding: 5px 10px;
  height: 32px;

  color: ${color.slateDark};
  justify-content: left;
  align-items: center;
  cursor: pointer;
  font-size: 15px;

  svg {
    margin-right: 8px;
  }

  &:hover {
    color: ${color.white};
    background: ${color.primary};

    svg {
      fill: ${color.white};
    }
  }
`;

export default DropdownMenuItem;
