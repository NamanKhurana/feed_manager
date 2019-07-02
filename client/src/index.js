import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers'
import reduxThunk from 'redux-thunk';

//DEVELOPMENT ONLY AXIOS HELPERS
import axios from 'axios';
window.axios = axios


const store = createStore(reducers,{},applyMiddleware(reduxThunk))
                        //REDUCER,//INITIALSTATE,//REDUX-THUNK
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.querySelector('#root'))

// console.log('STRIPE KEY IS',process.env.REACT_APP_STRIPE_KEY)
// console.log('ENVIRONMENT IS',process.env.NODE_ENV)