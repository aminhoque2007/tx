Heroku link:
https://tx-code-challenge.herokuapp.com/

Possible improvements

-> different devices - I've assumed the app will be used on Desktop.
-> browser support - I've only tested on latest versions of Chrome and Firefox, but should also check on Safari and various other browser vendors/versions/OS.

-> show an initial list of rates based on the base currency being derived from user's geo-location
-> cover edge cases e.g. if no rates are available for a currency for a specific day - then omit from table or show indication icon/tooltip for country.

-> error handling and form validation - show immediate feedback if dates are above/below max/min allowed dates.

BUGS

-> When initially loading the app, an initial table is loaded with the latest currency rates. The base rate (EUR) does not show in the initial table - I'd investigate and possibly add baseCurrency/baseRate to the transformedRates array.

CSS

-> separate styles to make these more logical and manageable e.g. component styles, layout styles etc.

-> make use of css/scss variables e.g. for colours.


TESTS

I was pressed for time as I am currently working over 10 hours a day (lots of meetings with USA counterparts as releases are keeping us busy). I've only written one test, however the following are things I'd like to test if I had more time:

// App.test.js
Test 2 -> would replace above test and fully mount the component by mocking axios using axios.get.mockImplementation which would resolve the exported getLatestFxResponse. This will get set on the App state and fully render CXForm and CXTable. I'd then assert that the Form exists, and that the CXTable h3 title is as expected as it's dynamic and I'd assert on the number of rows in the CXTable against the number of currencies in the state object.

Test 3 and 4 -> invoke the handleSubmit method with currency and date args and then without any args and assert that the correct form data and endpoints are hit.

Test 5 -> mock a 4xx/5xx response and assert that the UI renders the correct error and validation messages.

I would consider the above to be sufficient to also cover tests for CXForm and CXTable considering there isn't a lot of functionality in the UI at present.

// exchange-rates.service.test.js
use axios-mock-adapter or moxios to assert that the correct URL and HTTP method is invoked.
