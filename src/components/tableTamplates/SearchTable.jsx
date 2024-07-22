import { useState, useEffect } from 'react';
import Badge from '../partials/Badge';
import Pagination from '../partials/Pagination';

const SearchTable = ({ headers, tableData, columnSettings }) => {
  //   console.log('>>>> whats table data in searchTabe', tableData);
  const [onWatchList, setOnWatchList] = useState(false);
  const [tableDataState, setTableDataState] = useState([]);

  //   const [randomUsers, setRandomUsers] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  //   const renderAfterCalled = useRef(false);
  const [filters, setFilters] = useState([
    'Group 1',
    'Group 2',
    'Saved Filter Group',
  ]);

  // TODO: make this call more efficient
  useEffect(() => {
    setTableDataState(tableData);
  });

  // Handle pagination calculations
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = tableDataState.slice(indexOfFirstUser, indexOfLastUser);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ul>
        <ul className='table-headers' style={{ alignItems: 'center' }}>
          <li className='d-flex flex-wrap flex-sm-nowrap col-12'>
            {headers.map((item, index) => {
              return (
                <div key={index} className={columnSettings[index]}>
                  {item}
                </div>
              );
            })}
          </li>
        </ul>
        <ul className='ps-0' id='kt_project_users_table_pane'>
          {tableData.length === 0 && (
            <li className='d-flex flex-wrap flex-sm-nowrap col-12 table-list-item'>
              <div className='col-3 d-flex align-items-center'>
                <span
                  style={{
                    fontSize: 'var(--size-14)',
                    fontWeight: 'var(--font-weight-400)',
                    lineHeight: 'var(--size-20)',
                  }}
                >
                  No Data Available
                </span>
              </div>
            </li>
          )}
          {currentUsers.map((item, index) => {
            return (
              <>
                <li
                  key={index}
                  className='d-flex flex-wrap flex-sm-nowrap col-12 table-list-item'
                >
                  <div
                    className={columnSettings[0]}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {onWatchList ? (
                        <img
                          className='watchlist-eye-new-companies-table'
                          src='/vendors/media/icons/eye(1).svg'
                          alt='watchlist-icon'
                        />
                      ) : (
                        <img
                          className='watchlist-eye-new-companies-table'
                          src='/vendors/media/icons/eye(2).svg'
                          alt='watchlist-icon'
                        />
                      )}
                    </div>
                  </div>

                  <div className={columnSettings[1]}>
                    <div
                      className='d-flex justify-content-between align-items-start flex-wrap'
                      style={{ padding: '0 0px 0 0' }}
                    >
                      <div className='d-flex align-items-center mb-2'>
                        <div
                          className='symbol symbol-40px symbol-lg-40px position-relative'
                          style={{ display: 'flex' }}
                        >
                          {!item.logo || item.logo.length === 0 ? (
                            <div className='empty-logo-placeholder'></div>
                          ) : (
                            <img
                              style={{
                                borderRadius: '100px',
                                height: '40px',
                                width: '40px',
                              }}
                              src={item['logo']}
                              alt='image'
                            />
                          )}

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              marginLeft: '12px',
                            }}
                          >
                            <span
                              className='table-font-style-1'
                              style={{
                                width: '150px',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {item['name']}
                            </span>
                            <span
                              className='search-company-table-description'
                              style={{
                                color: 'var(--secondary-text-color-grey)',
                                width: '20vw',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {item['description']}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={columnSettings[2]}>
                    <div className='d-flex flex-column'>
                      <div className='d-flex align-items-center mb-2'>
                        {new Date(item.founding_date).toLocaleString('en-us', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  <div className={columnSettings[3]}>
                    {/* <!-- TODO need series data sent to this route --> */}
                  </div>

                  <div className={columnSettings[4]}>
                    <Badge
                      text='New'
                      color='company-badge-new-label'
                      closeBtn={false}
                    />
                  </div>

                  <div className={columnSettings[5]}>
                    {/* <!-- TODO need type of customer data sent to this route fintech vs biotech etc--> */}
                    <Badge
                      text='FinTech'
                      color='company-badge-industry'
                      closeBtn={false}
                    />
                  </div>

                  <div className={columnSettings[6]}>
                    {item.customer_type.toUpperCase()}
                  </div>

                  <div
                    className={columnSettings[7]}
                    style={{ display: 'flex' }}
                  >
                    {filters.map((filterText, ind) => {
                      return (
                        <div
                          key={`${item.id}${ind}`}
                          className='search-company-table-badge'
                          style={{ marginRight: '5px' }}
                        >
                          <Badge
                            text={filterText}
                            color='company-saved-filter-group-badge'
                            closeBtn={false}
                          />
                        </div>
                      );
                    })}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </ul>
      {/* TODO: Add next and previous to pagination */}
      {tableDataState.length <= itemsPerPage ? null : (
        <Pagination
          itemsPerPage={itemsPerPage}
          length={tableDataState.length}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default SearchTable;
