import { UPDATE_PLANNER } from '../actions/planner';
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

let planner = new VariableStarPlanner();
let scheduler = [], formDate, date;

export default function planner (state = [], action) {
  switch (action.type) {
  case UPDATE_PLANNER:
    planner.ep = action.data.ep;
    planner.period = action.data.period;
    formDate = action.data.year + '-' + (action.data.month-1) + '-' + action.data.day;
    date = new Date(formDate);
    return planner.getScheduler(date,  10);
  default:
    planner.ep = initialValues.ep;
    planner.period = initialValues.period;
    formDate = initialValues.year + '-' + (initialValues.month-1) + '-' + initialValues.day;
    date = new Date(formDate);
    return planner.getScheduler(date,  10);
  }
}
