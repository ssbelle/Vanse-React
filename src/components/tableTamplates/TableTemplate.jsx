import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from '../partials/Badge.jsx';
import CardHeader from '../partials/CardHeader.jsx';

import SearchTable from '../../components/tableTamplates/SearchTable.jsx';
import SearchFiltersModal from '../partials/SearchFiltersModal.jsx';
import SaveSearchModal from '../partials/SaveSearchModal.jsx';
import SearchButton from '../partials/SearchButton.jsx';

const TableTemplate = ({
  contentType,
  tableData,
  headers,
  columnSettings,
  tableTitle,
  subtitle,
  singleLine,
  showSearch,
  onFilter,
}) => {
  // TODO: remove hardcoded and get filters from advanced form data search results
  const hardcodedFilters = [
    { customer_type: 'B2B' },
    { founding_date: '2018' },
  ];
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearchItems, setFilteredSearchItems] = useState(tableData);

  const [filterBadges, setFilterBadges] = useState([]);

  const [show, setShow] = useState(false);
  const [showSaveFilterModal, setShowSaveFilterModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleSaveFilterModalClose = () => setShowSaveFilterModal(false);
  const handleSaveFilterModalShow = () => {
    setShowSaveFilterModal(true);
  };

  const handleUnsavedFilterSubmit = () => {
    // TODO: make call here to save search
    console.log('>>> handleSearchSave');
  };

  useEffect(() => {
    setData(tableData);

    setFilterBadges(hardcodedFilters);
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const search = e.target.value;

    setSearchTerm(search);
  };

  const handleOnClick = () => {
    const searchInput = document.getElementById('searchInput');

    // console.log('>>> search term', searchInput, searchTerm);
    const filteredItems = data.filter((term) => {
      return term.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // console.log('>>>> sear match', filteredItems);
    setFilteredSearchItems(filteredItems);
  };

  const handleFiltersSubmit = () => {
    // Handle updating filterBadges
    console.log('>> shawna', hardcodedFilters);
    setFilterBadges(hardcodedFilters);
    onFilter();
  };

  const removeFilterBadge = (e) => {
    e.preventDefault();

    const badgesArray = filterBadges.filter((badge, i) => {
      console.log('>>>. whats e', i.toString() === e.target.dataset.filterId);
      return i.toString() !== e.target.dataset.filterId;
    });

    setFilterBadges(badgesArray);
  };

  return (
    <>
      <section className='table-card' style={{ width: '100%' }}>
        <div className='card-section-wrapper-border'>
          <div
            style={{
              padding: '20px 0 0px 0px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CardHeader
              title={tableTitle}
              subtitle={subtitle}
              underline={false}
              singleLine={singleLine}
            />

            {contentType === 'search' && (
              <>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}
                >
                  {/* <SearchButton /> */}

                  {/* <!--begin::Compact form--> */}
                  <div className='d-flex align-items-center'>
                    <Form style={{ display: 'flex', paddingRight: '26px' }}>
                      <>
                        {/* <!--begin::Input group--> */}
                        <div className='position-relative w-md-400px me-md-2'>
                          {/* <i className='ki-outline ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6'></i> */}
                          {/* TODO: Add form validation */}

                          <input
                            id='searchInput'
                            type='text'
                            className='form-control form-control-solid ps-10'
                            name='searchcompanyname'
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder='Search by Company Name'
                          />
                        </div>

                        <div className='d-flex align-items-center'>
                          <Button
                            type='submit'
                            id='searchsumitbtn'
                            className='btn btn-primary'
                            onClick={handleOnClick}
                          >
                            <span className='indicator-label'>Search</span>
                          </Button>
                        </div>
                      </>
                    </Form>
                  </div>
                  <Form>
                    <Button
                      type='button'
                      className='btn'
                      onClick={handleShow}
                      style={{
                        border: 'none',
                        background: '#fff',
                        padding: '5px 26px 0 0',
                      }}
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span className='card-section-header-subtitle'>
                        Filters
                      </span>
                    </Button>

                    <SearchFiltersModal
                      handleSubmit={handleFiltersSubmit}
                      handleClose={handleClose}
                      show={show}
                    />
                  </Form>
                </div>
              </>
            )}
            {/* <%- include('cardHeader.html', {title: tableTitle, subtitle: subtitle, underline: false, singleLine: singleLine ? singleLine : false }); %>
            <% if(contentType === "search"){ %> 
                <div style="display: flex; flex-direction: column; align-items: end;">
                    <!--begin::Input group-->
                    <%- include ('../searchButton.html') %>
                    <button type="button"  className="btn" style="border: none; background: #fff; padding: 5px 26px 0 0;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span className="card-section-header-subtitle">Filters</span>
                    </button>
                </div>
                <% } %>  */}
          </div>

          {contentType === 'search' && !showSearch && (
            <section
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                borderTop: '1px solid var(--tertiary-format-grey-color)',
                paddingBottom: '10px',
                paddingTop: '5px',
                marginTop: '15px',
              }}
            >
              <div
                style={{
                  paddingLeft: '26px',
                  paddingBottom: '10px',
                  paddingTop: '10px',

                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  className='unsaved-filter-group-count'
                  style={
                    filterBadges.length > 0
                      ? { display: 'block' }
                      : { display: 'none' }
                  }
                >
                  {`Applied Filters (${filterBadges.length})`}
                </div>
                <div>
                  {/* TODO: Adjust how some filters will be displayed as they are verbose in designs */}
                  {filterBadges.length > 0 &&
                    filterBadges.map((f, i) => {
                      return (
                        <Badge
                          key={i}
                          text={Object.values(f)}
                          color='company-filter-badges'
                          closeBtn={true}
                          handleCloseBadge={() => removeFilterBadge}
                          index={i}
                        />
                      );
                    })}
                </div>
              </div>
              <section
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingRight: '26px',
                }}
              >
                <div>
                  <Button
                    type='submit'
                    id='edit-filtered-search'
                    className='orange-gradient-primary'
                    onClick={handleShow}
                    style={{
                      border: '1px solid #F16063',
                      backgroundColor: 'transparent',
                      background: '#fff',
                      color: '#F16063',
                      padding: '9px 16px',
                      borderRadius: '8px',
                      marginRight: '15px',
                    }}
                  >
                    <span className='indicator-label'>Edit</span>
                  </Button>
                  <Button
                    type='submit'
                    id='save-filtered-search'
                    onClick={handleSaveFilterModalShow}
                    style={{
                      backgroundColor: 'transparent',
                      background: 'var(--orange-gradient)!important',
                      border: 'var(--orange-gradient)!important',
                      color: '#fff',
                      padding: '9px 16px',
                      borderRadius: '8px',
                    }}
                  >
                    <span className='indicator-label'>Save</span>
                  </Button>
                  <SaveSearchModal
                    show={showSaveFilterModal}
                    handleSubmit={handleUnsavedFilterSubmit}
                    handleClose={handleSaveFilterModalClose}
                  />
                </div>
              </section>
            </section>
          )}

          <SearchTable
            headers={headers}
            tableData={filteredSearchItems}
            columnSettings={columnSettings}
          />

          {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <%- include('searchFilters.html'); %>
  </div> */}

          {/* {contentType === "employee") */}
          {/* { */}
          {/* // <%- include('tableContentTemplates/employeeTable.html', {tableData: tableData, columns: columnSettings, headers: headers });  %> */}
          {/* }
            if(contentType === "company")
            {
              // <%- include('tableContentTemplates/companyTable.html', {tableData: tableData, columns: columnSettings, headers: headers });  %>
            }
            if(contentType === "funding")
            {
              // <%- include('tableContentTemplates/fundingTable.html', {tableData: tableData, columns: columnSettings, headers: headers });  %>
            }
            if(contentType === "search")
            {
              // <%- include('tableContentTemplates/searchCompanyTable.html', {tableData: tableData, columns: columnSettings, headers: headers });  %>
            } */}
        </div>
      </section>
    </>
  );
};

export default TableTemplate;
