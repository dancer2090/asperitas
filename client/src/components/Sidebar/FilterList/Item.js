import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

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
`;

const SidebarFilterListItem = ({ category, onChange }) => {
  const setValue = value => {
    console.log(value);
    onChange(category.key, value);
  };

  return (
    <Item>
      {!category.hidden && (
        <Fragment>
          <input
            type='checkbox' 
            id={`filter-checkbox-${category.key}`}
            checked={category.active}
            onChange={() => setValue(!category.active)}
          />
          <label htmlFor={`filter-checkbox-${category.key}`}>
            {category.label}
          </label>
        </Fragment>
      )}
    </Item>
  );
};

export default SidebarFilterListItem;
