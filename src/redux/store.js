import { createStore, applyMiddleware} from 'redux';
// allows our browser to cache our store
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of our store
export const persistor = persistStore(store);

export default {store, persistor};