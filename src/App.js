import React, { Component } from 'react';

import './App.css';
import 'currency-flags/dist/currency-flags.min.css';
import CXForm from './components/CXForm';
import CXTable from './components/CXTable';
import { getFxRates } from './services/exchange-rates.service';

class App extends Component {
  constructor(props) {
    super(props);
    // other state props - errors, isLoading
    this.state = {
      apiData: {
        base: '',
        date: '',
        rates: [],
      },
    };
  }
  componentDidMount() {
    // handling error here as if status 4xx/5xx can update error state
    // and show on UI
    getFxRates()
      .then(({ data }) => {
        this.setApiData(data);
      })
      .catch(err => console.error(err));
  }

  setApiData = data => this.setState(() => ({ apiData: data }));

  handleSubmit = e => {
    e.preventDefault();
    const { currency, date } = e.target;
    getFxRates(currency.value, date.value).then(({ data }) => {
      this.setApiData(data);
    });
  };

  render = () => {
    const { base, date, rates } = this.state.apiData;
    // map rates object into array of currency/rate objects
    const transformedRates = Object.keys(rates)
      .sort()
      .map(key => {
        return {
          currency: key,
          rate: parseFloat(rates[key]).toFixed(4),
        };
      });
    return (
      <div className="App">
        <header className="App-header">CX App</header>
        <CXForm options={transformedRates} handleSubmit={this.handleSubmit} />
        <CXTable base={base} data={transformedRates} date={date} />
      </div>
    );
  };
}

export default App;
