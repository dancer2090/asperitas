import React from 'react';
import styled from 'styled-components';
import { transition, wideFont } from '../../helpers';
import Checkbox from '../Checkbox';

const Label = styled.label`
  ${transition('color', 'background-color')};
  ${wideFont};

  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  color: #818e99;
  outline: 0;
`;

const CheckboxGroupOption = props => (
  <>
    <Label htmlFor={props.value} active={props.active}>
      <Checkbox
        id={props.value}
        checked={props.active}
        onChange={props.onClick}
      />
      {props.name}
    </Label>
  </>
);

export default CheckboxGroupOption;
