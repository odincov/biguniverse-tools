import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import planner from './planner';

const rootReducer = combineReducers({
  counter,
  planner
});

export default rootReducer;
