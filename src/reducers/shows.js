import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from 'actions/show';

const entities = handleActions(
  {
    [showSuccess]: (state, action) => action.payload,
  },
  { _embedded: { cast: [] } },
);

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (state, action) => action.payload,
  },
  null,
);

const getEntities = state => state.shows.entities;
const getIsShowLoading = state => state.shows.isLoading;
const getShowError = state => state.shows.error;

export default combineReducers({
  entities,
  isLoading,
  error,
});

export { getEntities, getIsShowLoading, getShowError };
