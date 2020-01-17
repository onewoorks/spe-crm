import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import {Provider} from 'react-redux'

// const createStore = redux.createStore
// const initState = {
//     totalOrder: 0
// }
// const rootReducer = (state = initState, action) => {
//     return state
// }
// const storeRedux = createStore(rootReducer)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
