import React from 'react';
import styled from 'styled-components';
import CheckboxGroupOption from './Option';
import Label from '../Label';

const CheckboxGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  input[type='checkbox'] {
    display: none;
  }
`;

function handleClick(e, value, fn, values) {
  e.preventDefault();
  const newValue =
    values.indexOf(value) !== -1
      ? values.filter(v => v !== value)
      : [...values, value];
  fn(newValue);
}

const renderOptions = field => {
  const {
    input: { value: values, onChange }
  } = field;

  return field.options.map((option, key) => (
    <CheckboxGroupOption
      {...option}
      active={values.indexOf(option.value) !== -1}
      onClick={e => handleClick(e, option.value, onChange, values)}
      key={key}
    />
  ));
};

const CheckboxGroup = ({ field }) => {
  const { label } = field;
  return (
    <CheckboxGroupWrapper>
      <Label>{label}</Label>
      {renderOptions(field)}
    </CheckboxGroupWrapper>
  );
};

export default CheckboxGroup;
