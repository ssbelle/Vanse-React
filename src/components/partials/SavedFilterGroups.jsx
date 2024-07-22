import { useState, useEffect } from 'react';
import filterGroupsMockData from '../../savedFilterGroupsMockData.json';

const SavedFilterGroups = () => {
  // TODO: Make call to db to get the savedfiltergroups
  const [savedFilterGroups, setSavedFilterGroups] = useState([]);

  useEffect(() => {
    setSavedFilterGroups(filterGroupsMockData);
  }, []);

  return (
    <div className='card-body'>
      {/* <!-- TODO: add search and filter functionality --> */}
      {/* <!-- TODO Fix search when you click on filter group to open --> */}

      <div className='' style={{ marginTop: '20px' }}>
        {savedFilterGroups.length > 0 &&
          savedFilterGroups.map((group, index) => {
            return <div key={index}>{group.filter_name}</div>;
          })}
      </div>
    </div>
  );
};

export default SavedFilterGroups;

// TODO: remove when saved filter api calls made this is for reference for how it was done on the express ejs app
// <div className="mr-5 mb-3 col">
// {/* <!--begin:Author--> */}
// <button className="btn btn-bg-light w-100 text-start" type="button" onclick="_searchPg.setCurrentSavedSearch(<%= data.savedSearches[i]['id'] %>);">
//     <div className="flex-grow-1 me-2">
//         <span className="text-gray-800 text-hover-primary fs-7"><%= data.savedSearches[i]["savedsearch_name"] %></span>
//         <span className="text-muted fw-semibold d-block fs-8">Saved on: <%= new Date(data.savedSearches[i]["create_date"]).toLocaleString('en-us',{day: 'numeric', month:'short', year:'numeric'})  %></span>
//     </div>
// </button>
// {/* <!--end:Author--> */}
// </div>
