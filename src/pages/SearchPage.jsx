import { useState, useEffect } from 'react';
import Header from '../components/partials/Header.jsx';
import Sidebar from '../components/partials/Sidebar.jsx';
import SearchNavTabs from '../components/partials/SearchNavTabs.jsx';
import TableTemplate from '../components/tableTamplates/TableTemplate.jsx';
import tableConfigs from '../tableConfigs.json';
import companySearchMockData from '../companySearchMockData.json';

const SearchPage = () => {
  const [filterGroupName, setFilterGroupName] = useState(
    'Unsaved Filter Group'
  );

  const handleFilterGroupNameChange = (e) => {
    const filterName = e;
    document.addEventListener('updateFilterNameEvent', (e) => {
      setFilterGroupName(filterName);
    });
  };

  return (
    <>
      <Sidebar />
      <Header />
      <section style={{ paddingLeft: '139px', paddingRight: '26px' }}>
        <SearchNavTabs
          handleFilterGroupNameChange={handleFilterGroupNameChange}
          filterGroupName={filterGroupName}
        />
      </section>
    </>
  );
};

export default SearchPage;
