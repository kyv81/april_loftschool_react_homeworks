import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from 'actions/search';
import { createSelector } from 'reselect';

const elements = handleActions(
  {
    [searchSuccess]: (state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (state, action) => action.payload,
  },
  null,
);

const getElements = state => state.search.elements;
const getIsLoading = state => state.search.isLoading;
const getError = state => state.search.error;

const getShowPreview = createSelector(getElements, elements =>
  elements.map(el => ({
    id: el.id,
    image: el.image,
    name: el.name,
    summary: el.summary,
    url: el.url,
  })),
);

export default combineReducers({
  elements,
  isLoading,
  error,
});

export { getElements, getIsLoading, getError, getShowPreview };
