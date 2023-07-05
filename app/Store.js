import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const Store = createStore(reducers, applyMiddleware(thunk));

// const getToken = () => Store?.getState()?.generalState?.token;

const getToken = () => Store?.getState()?.generalState?.token;

export { Store, getToken };
