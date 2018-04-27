import { createActions } from 'redux-actions';

const { showRequest, showSuccess, showFailure } = createActions({
  SHOW_REQUEST: null,
  SHOW_SUCCESS: null,
  SHOW_FAILURE: null,
});

export { showRequest, showSuccess, showFailure };
