import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
// import RootMiddleware from '../middleware/root_middleware';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
