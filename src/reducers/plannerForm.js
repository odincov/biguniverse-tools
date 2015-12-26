import { reducer as formReducer } from 'redux-form';
import { SELECT_STAR } from '../actions/plannerForm';

export default formReducer.plugin({
  plannerForm: (state, action) => {
    switch(action.type) {
      case SELECT_STAR:
        return {
          ...state,
          period: { value: action.data.period },
          ep: { value: action.data.ep },
          ra: { value: action.data.ra },
          decl: { value: action.data.decl }
        };
      default:
        return state;
    }
  }
})
