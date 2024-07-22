import CardHeader from './CardHeader.jsx';

const Header = () => {
  return (
    <>
      <div id='app-header'>
        <div
          className='search-header-title'
          style={{ margin: 0, display: 'flex', paddingLeft: '26px' }}
        >
          <CardHeader
            title='Find Companies'
            subtitle='Search companies for deal flow, save filters and add to watchlist.'
            underline={false}
            singleLine={true}
          />
        </div>

        <div className='d-flex align-items-stretch'></div>

        {/* <div className='app-navbar flex-shrink-0'>
          <div
            className='app-navbar-item ms-3 ms-md-6'
            id='kt_header_user_menu_toggle'
          >
            <div
              className='cursor-pointer symbol symbol-30px symbol-md-35px'
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach='parent'
              data-kt-menu-placement='bottom-end'
            >
              <img
                className='symbol symbol-circle symbol-30px symbol-md-35px'
                src='/vendors/media/avatars/blank.png'
                alt='user'
              />
            </div>
            <a
              href='/invite'
              className='btn btn-sm btn-flex btn-primary align-self-center ms-5 ms-lg-11 px-3'
            >
              <i className='ki-outline ki-plus-square fs-3'></i>Invite
            </a>

            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-7 w-275px'
              data-kt-menu='true'
            >
              <div className='menu-item px-3'>
                <div className='menu-content d-flex align-items-center px-3'>
                  <div className='symbol symbol-50px me-5'>
                    <img alt='Logo' src='/vendors/media/avatars/blank.png' />
                  </div> */}

        {/* <div className='d-flex flex-column'>
                    <div className='fw-bold d-flex align-items-center fs-5'>
                      {user?.firstName} {user?.lastName}
                    </div>
                    <span className='fw-semibold text-muted text-hover-primary fs-7'>
                      {user?.email}
                    </span>
                  </div> */}
        {/* </div>
              </div>

              <div className='separator my-2'></div>

              <div className='menu-item px-5'>
                <a href='/auth/userprofile' className='menu-link px-5'>
                  My Profile
                  <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>
                    Coming Soon
                  </span>
                </a>
              </div>

              <div className='menu-item px-5'>
                <a href='/auth/invite' className='menu-link px-5'>
                  Invite Members
                  <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>
                    Coming Soon
                  </span>
                </a>
              </div>

              <div
                className='menu-item px-5'
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement='left-start'
                data-kt-menu-offset='-15px, 0'
              >
                <a href='#' className='menu-link px-5'>
                  <span className='menu-title'>
                    My Subscription
                    <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>
                      v2.0
                    </span>
                  </span>
                  <span className='menu-arrow'></span>
                </a>
                {/* <!--begin::Menu sub--> */}
        {/* <div className='menu-sub menu-sub-dropdown w-175px py-4'> */}
        {/*                  
                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-5'>
                      Billing
                      <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>
                        Soon
                      </span>
                    </a>
                  </div>

                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link d-flex flex-stack px-5'>
                      Statements
                      <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>
                        Soon
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='separator my-2'></div>

              <div className='menu-item px-5'>
                <a href='/auth/signout' className='menu-link px-5'>
                  Sign Out
                </a>
              </div>
            </div>
          </div>

          <div
            className='app-navbar-item d-lg-none ms-2 me-n3'
            title='Show header menu'
          >
            <div
              className='btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px'
              id='kt_app_header_menu_toggle'
            >
              <i className='ki-outline ki-text-align-left fs-1'></i>
            </div>
          </div>
        </div>  */}
      </div>
    </>
  );
};

export default Header;
