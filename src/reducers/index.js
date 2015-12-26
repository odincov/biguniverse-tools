import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import planner from './planner';
import plannerForm from './plannerForm';

const rootReducer = combineReducers({
  form: plannerForm,
  counter,
  planner
});

export default rootReducer;
