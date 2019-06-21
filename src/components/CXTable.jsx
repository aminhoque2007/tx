import React, { Fragment } from 'react';

const CXTable = props => {
  const { base, data, date } = props;
  return (
    <Fragment>
      <h3>{`Currency Exchange rates for ${base} on ${date}`}</h3>
      <div style={{ margin: '0 auto', width: '15vw' }}>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Currency</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(country => (
                <tr key={`country-${country.currency}`}>
                  <td>
                    <span
                      className={`currency-flag currency-flag-${country.currency.toLowerCase()}`}
                    />
                  </td>
                  <td>{country.currency}</td>
                  <td>{country.rate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default CXTable;
