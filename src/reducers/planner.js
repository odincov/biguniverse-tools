import {
  UPDATE_PLANNER,
  SELECT_STAR,
  UPDATE_DATE
} from '../actions/planner';

import stars from '../data/binary-stars.js';

const initialStar = stars.find((item) => { return item.name === 'Algol' });

const initialState = {
  stars: stars,
  star: initialStar,
  date: new Date()
}

export default function planner (state = initialState, action) {
  switch (action.type) {
  case UPDATE_PLANNER:
    return {
      ...state,
      scheduler: action.data
    }
    break;
  case SELECT_STAR:
    return {
      ...state,
      star: action.data
    };
    break;
  case UPDATE_DATE:
    return {
      ...state,
      date: action.data
    }
    break;
  default:
    return state;
  }
}
