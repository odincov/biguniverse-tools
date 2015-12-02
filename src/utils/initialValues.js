import stars from '../data/binary-stars';

const now = new Date();

const initialValues = {
  day: now.getDate(),
  month: (now.getMonth()+1),
  year: now.getFullYear(),
  ep: stars[0].ep,
  period: stars[0].period,
  decl: stars[0].decl,
  ra: stars[0].ra
};

export default initialValues;
