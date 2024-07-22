const CardHeader = ({ title, subtitle, underline, singleLine }) => {
  return (
    <>
      <div
        className={underline && title ? 'card-section-header' : null}
        style={singleLine ? { display: 'flex', alignItems: 'center' } : null}
      >
        {title && (
          <>
            <h4
              className='card-section-header-title'
              style={{
                paddingRight: singleLine ? '5px' : '0',
              }}
            >
              {title}
            </h4>
            {singleLine && (
              <div
                className='card-section-header-subtitle'
                style={{ paddingRight: '5px' }}
              >
                {singleLine ? '|' : null}
              </div>
            )}
            {subtitle && (
              <span className='card-section-header-subtitle'>{subtitle}</span>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CardHeader;
