import { UPDATE_PLANNER, LOAD_DEFAULT } from '../actions/planner';

export default function planner (state = [], action) {
  switch (action.type) {
  case UPDATE_PLANNER:
    return action.data;
  default:
    return state;
  }
}
