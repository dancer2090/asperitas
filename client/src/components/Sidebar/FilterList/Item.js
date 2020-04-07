import React from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '../../shared/form/Checkbox';

const Item = styled.div`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.theme.normalText};
  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${props => props.theme.accent};
  }
  ${props =>
    (props.hidden || props.isMain) &&
    css`
      pointer-events: none;
      input,
      label {
        pointer-events: none;
      }
    `}

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const SidebarFilterListItem = ({ category, onChange, mainCategory }) => {
  const setValue = value => {
    onChange(category.key, value);
  };

  return (
    <Item {...category} isMain={category.key === mainCategory}>
      <label htmlFor={`filter-checkbox-${category.key}`}>
        <Checkbox
          checked={category.active}
          id={`filter-checkbox-${category.key}`}
          disabled={category.key === mainCategory}
          onChange={() => setValue(!category.active)}
        />
        {category.label}
      </label>
    </Item>
  );
};

export default SidebarFilterListItem;
