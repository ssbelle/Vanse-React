import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import SavedFilterGroups from '../partials/SavedFilterGroups.jsx';

import TableTemplate from '../../components/tableTamplates/TableTemplate.jsx';
import tableConfigs from '../../tableConfigs.json';
import companySearchMockData from '../../companySearchMockData.json';

const SearchNavTabs = ({ handleFilterGroupNameChange, filterGroupName }) => {
  const [activeTabKey, setActiveKey] = useState('');

  useEffect(() => {
    setActiveKey('new-companies');
  }, []);

  const onFilterSearch = () => {
    setActiveKey('unsaved-filter-group');
  };

  const onExitUnsavedTab = () => {
    setActiveKey('new-companies');
  };

  return (
    <>
      <Tabs
        activeKey={activeTabKey}
        id='search-tabs'
        onSelect={
          activeTabKey === 'unsaved-filter-group'
            ? () => null
            : (k) => setActiveKey(k)
        }
        className='nav nav-stretch nav-line-tabs nav-line-tabs-2x fs-7 fw-bold'
        style={{ paddingTop: '17px' }}
      >
        <Tab
          eventKey='new-companies'
          title='New Companies'
          className='nav-item search-nav-item'
        >
          <TableTemplate
            contentType='search'
            tableData={companySearchMockData}
            headers={tableConfigs.searchCompanyTable.headers}
            columnSettings={tableConfigs.searchCompanyTable.columnSettings}
            tableTitle={
              tableConfigs.searchCompanyTable.cardHeaderNewCompanies.title
            }
            subtitle={
              tableConfigs.searchCompanyTable.cardHeaderNewCompanies.subtitle
            }
            singleLine={false}
            showSearch={true}
            onFilter={onFilterSearch}
          />
        </Tab>
        <Tab
          eventKey='all-companies'
          title='All Companies'
          className='nav-item search-nav-item'
        >
          {/* TODO: Needs to get the data from the all search companies call */}
          <TableTemplate
            contentType='search'
            tableData={companySearchMockData}
            headers={tableConfigs.searchCompanyTable.headers}
            columnSettings={tableConfigs.searchCompanyTable.columnSettings}
            tableTitle={
              tableConfigs.searchCompanyTable.cardHeaderAllCompanies.title
            }
            subtitle={
              tableConfigs.searchCompanyTable.cardHeaderAllCompanies.subtitle
            }
            singleLine={false}
            showSearch={true}
            onFilter={onFilterSearch}
          />
        </Tab>
        {activeTabKey === 'unsaved-filter-group' && (
          <Tab
            eventKey='unsaved-filter-group'
            title={
              <>
                <span>{filterGroupName}</span>
                <Button onClick={onExitUnsavedTab}>
                  <img
                    className='unsaved-filter-button-close'
                    style={{ marginLeft: '5px' }}
                    src='/vendors/media/icons/xClose.svg'
                  />
                </Button>
              </>
            }
            className='nav-item search-nav-item'
          >
            {/* TODO: Needs to get the data from the advanced Filter search call */}
            <TableTemplate
              contentType='search'
              tableData={companySearchMockData}
              headers={tableConfigs.searchCompanyTable.headers}
              columnSettings={tableConfigs.searchCompanyTable.columnSettings}
              tableTitle={filterGroupName}
              subtitle='Companies based on the filters you applied. To return to the filter group later, you must save.'
              singleLine={false}
              showSearch={false}
              onFilter={onFilterSearch}
              handleFilterGroupNameChange={handleFilterGroupNameChange}
            />
          </Tab>
        )}

        <Tab
          eventKey='add-filter-group'
          title='Add Filter Group'
          className='nav-item search-nav-item'
        ></Tab>
        <Tab
          eventKey='saved-filter-groups'
          title='Saved Filter Groups'
          className='nav-item search-nav-item'
        >
          <SavedFilterGroups />
        </Tab>
      </Tabs>
    </>
  );
};

export default SearchNavTabs;
