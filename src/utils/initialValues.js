import star from '../data/default-star';

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

export default initialValues;
