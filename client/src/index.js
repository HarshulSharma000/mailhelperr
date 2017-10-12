import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers,{},applyMiddleware(reduxThunk));
ReactDOM.render(//Place below lines in a single line with spaces React.children.only expected
    <Provider store={store}> 
        <App/>
    </Provider>,
    document.querySelector('#root')
);
//registerServiceWorker();
