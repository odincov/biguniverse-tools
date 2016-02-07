import VariableStarPlanner from '../utils/variableStarPlanner';
import star from '../data/default-star';
import stars from '../data/binary-stars';

const now = new Date();

export const UPDATE_PLANNER = 'UPDATE_PLANNER';
export const SELECT_STAR = 'SELECT_STAR';
export const UPDATE_DATE = 'UPDATE_DATE';

export function updatePlanner (data) {
  const { star, date } = data;

  const planner = new VariableStarPlanner(star.ep, star.period, star.decl, star.ra);
  const scheduler = planner.getScheduler(new Date(date),  10);

  return {
    type: UPDATE_PLANNER,
    data: scheduler
  }
}

export function updateDate (date) {
  return function (dispatch, getState) {
    dispatch({
      type: UPDATE_DATE,
      data: date
    });

    const { star } = getState().planner;

    dispatch(updatePlanner({ star, date }));
  }
}

export function selectStar (data) {
  return function (dispatch, getState) {
    const star = stars.find(function (item) {
      return item.name === data;
    });

    dispatch({
      type: SELECT_STAR,
      data: star
    });

    const { date } = getState().planner;

    dispatch(updatePlanner({ star, date }));
  };
}
