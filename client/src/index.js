import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
//import registerServiceWorker from './registerServiceWorker';

//Just for Mail testing(Not using passport since its not just about cookies and apis)
import axios from 'axios';
window.axios = axios

const store = createStore(reducers,{},applyMiddleware(reduxThunk));
ReactDOM.render(//Place below lines in a single line with spaces React.children.only expected
    <Provider store={store}> 
        <App/>
    </Provider>,
    document.querySelector('#root')
);
//registerServiceWorker();

//console.log(process.env.REACT_APP_STRIPE_KEY);
//console.log(process.env.NODE_ENV);
