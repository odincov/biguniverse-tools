import VariableStarPlanner from '../utils/variableStarPlanner';
import star from '../data/default-star';
import stars from '../data/binary-stars';

const now = new Date();

const initialValues = {
  day: now.getDate(),
  month: (now.getMonth()+1),
  year: now.getFullYear(),
  ep: star.ep,
  period: star.period,
  decl: star.decl,
  ra: star.ra
};

export const UPDATE_PLANNER = 'UPDATE_PLANNER';
export const SELECT_STAR = 'SELECT_STAR';



export function updatePlanner (data) {
  const { ep, period, decl, ra, year, month, day } = data;

  let planner = new VariableStarPlanner(ep, period, decl, ra);
  let formDate = year + '-' + (month-1) + '-' + day;
  let date = new Date(formDate);
  let scheduler = planner.getScheduler(date,  10);

  return {
    type: UPDATE_PLANNER,
    data: scheduler
  }
}

export function selectStar (data) {
  const star = stars.find(function (item) {
    return item.name === data;
  });

  return {
    type: SELECT_STAR,
    data: star
  }
}
