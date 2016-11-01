import React from 'react';
import ReactDOM from 'react-dom';
// import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    let store = configureStore();
    ReactDOM.render(<Root store={store} />, rootEl);
    window.store = store;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
});
