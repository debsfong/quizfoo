import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    let store = configureStore();

    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={store} />, rootEl);
    window.store = store;
});
