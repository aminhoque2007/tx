import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import App from '../App';
import CXTable from '../components/CXTable';
import CXForm from '../components/CXForm';

describe('App Component', () => {
  test('renders with one CXForm and one CXTable component', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(CXForm).length).toEqual(1);
    expect(wrapper.find(CXTable).length).toEqual(1);
  });

  /*
  // App.test.js
  Test 2 -> would replace above test and fully mount the component by
  mocking axios using axios.get.mockImplementation which would resolve
  the exported getLatestFxResponse. This will get set on the App state
  and fully render CXForm and CXTable. I'd then assert that the Form
  exists, and that the CXTable h3 title is as expected as it's dynamic
  and I'd assert on the number of rows in the CXTable against the number
  of currencies in the state object.

  Test 3 and 4 -> invoke the handleSubmit method with currency and date args and
  then without any args and assert that the correct form data and endpoints are hit.

  Test 5 -> mock a 4xx/5xx response and assert that the UI renders the correct
  error and validation messages.

  I would consider the above to be sufficient to also cover tests for CXForm and CXTable
  considering there isn't a lot of functionality in the UI at present.

  // exchange-rates.service.test.js
  use axios-mock-adapter or moxios to assert that the correct URL and HTTP method
  is invoked.

  * */
});
