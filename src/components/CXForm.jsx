import React from 'react';

const CXForm = props => {
  const { handleSubmit, options } = props;
  return (
    <div className="cx-form__container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select Date and Currency</legend>
          <div className="cx-form__field-container">
            <label htmlFor="date">
              Date:
              <input
                className="cx-form__field"
                min="1999-01-01"
                name="date"
                type="date"
              />
            </label>
          </div>
          <div className="cx-form__field-container">
            <label htmlFor="currency">
              Currency:
              <select className="cx-form__field" id="currency">
                <option value="">-</option>
                {options &&
                  options.map(country => (
                    <option
                      key={`option-${country.currency}`}
                      value={country.currency}
                    >
                      {country.currency}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <button type="submit">Get Rates</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CXForm;
