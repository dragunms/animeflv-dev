import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

export function configureStore(preloadedState) {
    const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));

    sagaMiddleware.run(saga);

    return store;
}
