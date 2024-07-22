import Nav from 'react-bootstrap/Nav';

const Sidebar = () => {
  return (
    <>
      <div className='app-sidebar'>
        <div className='app-sidebar-nav'>
          <div className='app-header-logo flex-grow-1 d-flex align-items-center justify-content-center p-2'>
            <a href='https://forumvc.ai' className='p-2 mw-60px'>
              <img
                className='theme-light-show mx-auto img-fluid'
                src='/vendors/media/logos/vanse-logo.svg'
                alt='vanse-ai-logo'
              />
            </a>
          </div>

          <Nav
            defaultActiveKey='/search'
            as='ul'
            className='nav d-flex flex-column align-items-center mt-5'
          >
            <Nav.Item as='li' className='nav-item py-1'>
              <a
                href='/search'
                className="nav-link py-4 px-1 btn <%= page === 'search' ? 'active' : '' %> mh-48px mw-48px"
              >
                <img
                  className='fs-1'
                  src='/vendors/media/icons/search.svg'
                  alt='search-icon'
                />
                <span className='pt-2 fs-9 fs-lg-7 fw-bold d-lg-none'>
                  Find Companies
                </span>
              </a>
            </Nav.Item>

            <Nav.Item as='li' className='nav-item py-1 mh-48px mw-48px'>
              <a
                href='/watchlist'
                className="nav-link py-4 px-1 btn <%= page === 'watchlist' ? 'active' : '' %>"
              >
                <img
                  className='fs-1'
                  src='/vendors/media/icons/eye.svg'
                  alt='watchlist-icon'
                />
                <span className='pt-2 fs-9 fs-lg-7 fw-bold d-lg-none'>
                  Watchlist
                </span>
              </a>
            </Nav.Item>

            <Nav.Item as='li' className='nav-item py-1 mh-48px mw-48px'>
              <a
                href='/chatbox'
                className="nav-link py-4 px-1 btn <%= page === 'space' ? 'active' : '' %>"
              >
                <img
                  className='fs-1'
                  src='/vendors/media/icons/chat.svg'
                  alt='chat-icon'
                />
                <span className='pt-2 fs-9 fs-lg-7 fw-bold d-lg-none'>
                  Chatbot
                </span>
              </a>
            </Nav.Item>

            <Nav.Item as='li' className='nav-item py-1 mh-48px mw-48px'>
              <a
                href='/agents'
                className="nav-link py-4 px-1 btn <%= page === 'agents' ? 'active' : '' %>"
              >
                <img
                  className='fs-1'
                  src='/vendors/media/icons/settings.svg'
                  alt='chat-icon'
                />
                <span className='pt-2 fs-9 fs-lg-7 fw-bold d-lg-none'>
                  Integrations
                </span>
              </a>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
