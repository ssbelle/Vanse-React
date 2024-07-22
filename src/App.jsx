import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './Bundle.css';
import './BootstrapInherited.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import SearchPage from './pages/SearchPage.jsx';

const router = createBrowserRouter([{ path: '/', element: <SearchPage /> }]);

function App() {
  const [count, setCount] = useState(0);

  // Limit the amount of times UseEffect is called with dependancy and ref especially with strict mode on for my sanity
  useEffect(() => {
    // getUserData();
  }, []);

  const isAuthorized = function (req, res, next) {
    var usertoken = req.cookies._vcaitoken;

    if (typeof usertoken !== 'undefined') {
      var options = {
        method: 'GET',
        url: `https://${API_DOMAIN}/api/Account/userinfo`,
        headers: {
          'content-type': 'application/json',
          apikey: usertoken,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          //if successful, add user information to request object
          req.user = {
            id: 1,
            org_id: 0,
            provider: 'web',
            linkedInUrl: '',
            firstName: '',
            lastName: '',
            email: 'karthik@forumvc.com',
            acceptTerms: true,
            role: 3,
            created: '2023-12-21T18:26:54',
          };

          req.user = response.data;
          console.log('>>> req shawna', req.user);
          next();
        })
        .catch(function (error) {
          console.error(error);
          res.redirect('/');
        });
    } else {
      res.redirect('/');
    }
  };
  // Call to data source and simple validation check
  // async function getUserData() {
  //   try {
  //     await fetch('https://vcai.forthestudio.dev/api/Search/companies', {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //         apikey:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcnRoaWtAZm9ydW12Yy5jb20iLCJuYmYiOjE3MjEzMzI0NzYsImV4cCI6MTcyMzkyNDQ3NiwiaWF0IjoxNzIxMzMyNDc2fQ.Sbl2AJ91SoNJmBlCHoBiNyYCppAmMybi5yyGKfjtBkY',
  //       },
  //       data: {
  //         company_name: 'contentstack',
  //         tags: ['90'],
  //         investors: [],
  //         universities: [],
  //         founding_year: '',
  //         people_hightlight: [undefined],
  //         funding_rounds: [undefined],
  //         locations: [undefined],
  //         headcount: { filter: 0, value: 0 },
  //         headcount_traction: { filter: 90, value: 0 },
  //         website_traction: { filter: 90, value: 0 },
  //         funding: { filter: 0, value: 0 },
  //       },
  //     })
  //       .then((res) => {
  //         console.log('>> res is shawna', res);
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log('>>>>shawna ', data);
  //       });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  return <RouterProvider router={router} />;
}

export default App;
