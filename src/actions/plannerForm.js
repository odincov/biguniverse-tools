export const SELECT_STAR = 'SELECT_STAR';

export function selectStar (data) {
  return {
    type: SELECT_STAR,
    data: data
  }
}
