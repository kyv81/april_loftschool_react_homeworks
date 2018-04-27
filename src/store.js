import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import loggerMiddleware from './middlewares/loggerMiddleware';
import showMiddleware from './middlewares/showMiddleware';
import searchMiddleware from './middlewares/searchMiddleware';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(loggerMiddleware, searchMiddleware, showMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );
