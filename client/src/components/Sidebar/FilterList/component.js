import React from 'react';
import styled from 'styled-components/macro';
import SidebarFilterListItem from './Item';
import SidebarFilterListHeader from './Header';

const FilterList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const SidebarFilterList = ({ filter, mainCategory, setFilter, fetchPosts }) => {
  const onChange = (key, value) => {
    const newFilter = filter.map(f =>
      f.key === key ? { ...f, active: value } : f
    );
    setFilter(newFilter);
    fetchPosts(mainCategory);
  };

  return (
    <FilterList>
      <SidebarFilterListHeader />
      {filter.map((category, index) => (
        <SidebarFilterListItem
          key={index}
          category={category}
          onChange={onChange}
          mainCategory={mainCategory}
        />
      ))}
    </FilterList>
  );
};

export default SidebarFilterList;
