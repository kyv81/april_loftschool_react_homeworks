import { searchRequest, searchSuccess, searchFailure } from 'actions/search';
import { search } from 'api';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(result => {
        store.dispatch(searchSuccess(result));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  next(action);
};

export default searchMiddleware;
