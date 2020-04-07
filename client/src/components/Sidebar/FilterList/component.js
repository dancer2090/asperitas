import React from 'react';
import styled from 'styled-components/macro';
import SidebarFilterListItem from './Item';
import SidebarFilterListHeader from './Header';

const FilterList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapFilter = (categories, onChange) =>
  categories.map((category, index) => (
    <SidebarFilterListItem
      key={index}
      category={category}
      onChange={onChange}
    />
  ));

const SidebarCategoryList = ({ filter, setFilter }) => {
  const onChange = (key, value) => {
    console.log('update redux', key);
    const newFilter = filter.map(f => (f.key === key ? { ...f, active: value } : f));
    setFilter(newFilter);
  };

  return (
    <FilterList>
      <SidebarFilterListHeader />
      {mapFilter(filter, onChange)}
    </FilterList>
  );
};

export default SidebarCategoryList;
