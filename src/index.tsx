import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppWithRedux from "./state/AppWithRedux";
import {store} from './state/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister()
