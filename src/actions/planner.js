export const UPDATE_PLANNER = 'UPDATE_PLANNER';

export function updatePlanner (data) {
  return {
    type: UPDATE_PLANNER,
    data: data
  }
}
