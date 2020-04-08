import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import SidebarCreatePostButton from './CreatePostButton';
import SidebarCategoryList from './CategoryList';
import SidebarFilterList from './FilterList';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  margin-left: 24px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({ token }) => (
  <Fragment>
    <Wrapper>
      {token && <SidebarCreatePostButton />}
      <SidebarCategoryList />
      <SidebarFilterList />
    </Wrapper>
  </Fragment>
);

export default Sidebar;
