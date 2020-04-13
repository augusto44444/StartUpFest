import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'


const INITIAL_STATE = {
    menu: 1
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_MENU':
            return { ...state, menu: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.register()