import { useState } from 'react';

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
  };

  return (
    // <div className='accordion-body'>
    //   {/* <!--begin::Compact form--> */}
    //   <div className='d-flex align-items-center'>
    //     {/* <!--begin::Input group--> */}
    //     <div className='position-relative w-md-400px me-md-2'>
    //       {/* <i className='ki-outline ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6'></i> */}
    //       <input
    //         type='text'
    //         className='form-control form-control-solid ps-10'
    //         name='searchcompanyname'
    //         value={searchTerm}
    //         onChange={handleInputChange}
    //         placeholder='Search by Company Name'
    //       />
    //     </div>
    //     {/* <!--end::Input group--> */}
    //     <div className='d-flex align-items-center'>
    //       <button
    //         type='submit'
    //         id='searchsumitbtn'
    //         className='btn btn-primary me-5'
    //       >
    //         <span className='indicator-label'>Search</span>
    //       </button>
    //     </div>
    //   </div>
    //   {/* <!--end::Compact form--> */}
    // </div>
    <div></div>
  );
};

export default SearchButton;
