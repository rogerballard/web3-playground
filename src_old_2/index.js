/**
 * Import dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

import store from './utils/store'
import registerServiceWorker from './utils/registerServiceWorker'
import getWeb3 from './utils/getWeb3'
import App from './App';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
