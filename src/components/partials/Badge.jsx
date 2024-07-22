import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Badge = ({ text, color, closeBtn, handleCloseBadge, index }) => {
  const [additionalPreviousExits, setAdditionalPreviousExits] = useState(false);
  const [companyName, setCompanyName] = useState(false);
  const [earlyEmployeeCalculation, setEarlyEmployeeCalculation] =
    useState(false);
  //   console.log('>>> whats badge index ???', index);
  return (
    <>
      {color === 'employee-exits-badge-yes' ? (
        <div
          className={`badge badge-primary ${color}`}
          style={{ padding: '3px 8px', borderRadius: '100px' }}
        >
          <div
            className='badge-dot'
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '100px',
              marginRight: '4px',
            }}
          ></div>
          {text.toString()}
        </div>
      ) : (
        <div
          className={`badge badge-primary ${color}`}
          style={{ padding: '3px 8px', borderRadius: '100px' }}
        >
          {color === 'employee-exits-badge-no' ? (
            <div
              className='badge-dot'
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '100px',
                marginRight: '4px',
              }}
            ></div>
          ) : (
            <span
              style={
                closeBtn ? { display: 'flex', alignItems: 'center' } : null
              }
            >
              {text.toString()}{' '}
              {closeBtn ? (
                <Button
                  onClick={handleCloseBadge({ index })}
                  style={{
                    background: '#fff',
                    color: 'red',
                    border: 'none',
                    padding: '0 0 1px 0',
                    height: '15px',
                    width: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    data-filter-id={index}
                    className='filter-button-close'
                    style={{ marginLeft: '5px' }}
                    src='/vendors/media/icons/xClose.svg'
                  />
                </Button>
              ) : null}
            </span>
          )}
        </div>
      )}
    </>
  );
};

// <!-- if companyName is present in data -->
// <% if(false){ %>
//     <div class="badge badge-primary employee-exits-company-name" style="padding: 3px 8px; border-radius: 100px;">
//         <%= companyName %>
//     </div>
// <% } %>
// <!--  if additionalPreviousExits is present in the data -->
// <% if(false){ %>
//     <div class="badge badge-primary employee-badge-additional-count" style="padding: 3px 8px; border-radius: 100px;">
//         <%= additionalPreviousExits %>
//     </div>
// <% } %>
// <!-- if early employee calc is present in data -->
// <% if(false){ %>
//     <div class="badge badge-primary employee-badge-additional-count" style="padding: 3px 8px; border-radius: 100px;">
//         <%= earlyEmployeeCalculation %>
//     </div>
// <% } %>

export default Badge;
