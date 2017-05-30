import { combineReducers } from 'redux';

import { counterReducer } from 'components/counter/reducer';

export default combineReducers({
	counter: counterReducer
});