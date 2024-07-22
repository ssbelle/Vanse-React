import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SaveSearchModal = ({
  handleSubmit,
  handleClose,
  show,
  handleFilterGroupNameChange,
}) => {
  const [filterGroupName, setFilterGroupName] = useState('');

  useEffect(() => {
    handleFilterGroupNameChange(filterGroupName);
  }, [filterGroupName]);

  const handleSaveSearchSubmit = () => {
    // TODO: update the tab name in tab and cardheader
    // TODO: Make call to DB to save filter group
    const updateFilterNameEvent = new Event('updateFilterNameEvent');
    document.dispatchEvent(updateFilterNameEvent);
    handleSubmit();
    handleClose();
  };

  const handleInputChange = (e) => {
    const filterName = e.target.value;
    setFilterGroupName(filterName);
  };

  return (
    <>
      <div style={{ maxWidth: '500px' }}>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
          id='savedUnamedSearchModal'
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body style={{ maxWidth: '500px', padding: ' 0 30px' }}>
            <section>
              <img src='/vendors/media/icons/save-01.svg' />
              <Modal.Title>Save Filter Group</Modal.Title>
              <span>Name your custom filter group</span>
            </section>

            <Form>
              <input
                id='savedUnamedSearchInput'
                type='text'
                className='form-control form-control-solid ps-10'
                name='savedUnamedSearchInput'
                value={filterGroupName}
                onChange={handleInputChange}
                placeholder='Type Name'
              />
            </Form>
          </Modal.Body>
          <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='secondary'
              onClick={handleSaveSearchSubmit}
              style={{
                backgroundColor: 'transparent',
                background: 'var(--orange-gradient)!important',
                border: 'var(--orange-gradient)!important',
                color: '#fff',
                padding: '9px 16px',
                borderRadius: '8px',
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SaveSearchModal;
