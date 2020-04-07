import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

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
`;

const SidebarFilterListItem = ({ category, onChange, mainCategory }) => {
  const setValue = value => {
    onChange(category.key, value);
  };

  return (
    <Item {...category} isMain={category.key === mainCategory}>
      <input
        type='checkbox'
        id={`filter-checkbox-${category.key}`}
        checked={category.active}
        disabled={category.key === mainCategory}
        onChange={() => setValue(!category.active)}
      />
      <label htmlFor={`filter-checkbox-${category.key}`}>
        {category.label}
      </label>
    </Item>
  );
};

export default SidebarFilterListItem;
