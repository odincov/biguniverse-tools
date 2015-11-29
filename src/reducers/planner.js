import { UPDATE_PLANNER, LOAD_DEFAULT } from '../actions/planner';
import VariableStarPlanner from '../utils/variableStarPlanner';

import stars from '../data/binary-stars';

const now = new Date();
const initialValues = {
  day: now.getDate(),
  month: (now.getMonth()+1),
  year: now.getFullYear(),
  ep: stars[0].ep,
  period: stars[0].period
};

export default function planner (state = [], action) {
  switch (action.type) {
  case UPDATE_PLANNER:
    let planner = new VariableStarPlanner(action.data.ep, action.data.period);
    let formDate = action.data.year + '-' + (action.data.month-1) + '-' + action.data.day;
    let date = new Date(formDate);
    return planner.getScheduler(date,  10);
  default:
    return state;
  }
}
