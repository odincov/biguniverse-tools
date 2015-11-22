import { UPDATE_PLANNER } from '../actions/planner';
import VariableStarPlanner from '../utils/variableStarPlanner';


export default function planner (state = [], action) {
  switch (action.type) {
  case UPDATE_PLANNER:
    let planner = new VariableStarPlanner(action.data.ep, action.data.period);
    let date = new Date(action.data.date);

    let scheduler = planner.getScheduler(date,  10);

    console.log(scheduler);

    return state = [{'update': 'planner'}];
  default:
    return state = [];
  }
}
