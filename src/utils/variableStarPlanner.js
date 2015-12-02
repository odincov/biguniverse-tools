import julian from 'julian';

const RAD = 57.29578;

export default class VirableStarPlanner {

  constructor (ep, period, decl, ra) {
    this.ep = parseFloat(ep);
    this.period = parseFloat(period);

    this.DECL = parseFloat(decl) / RAD;
    this.R_A = parseFloat(ra) / RAD;
    this.LL = Math.cos(this.DECL) * Math.cos(this.R_A);
    this.M_CORR = 0.91748 * Math.cos(this.DECL) * Math.sin(this.R_A) + 0.39778 * Math.sin(this.DECL);
  }

  getAng (big) {
    let tmp = 0;

    if (big > 0) {
      tmp = big / 360.0;
      tmp = (tmp - Math.floor(tmp)) * 360.0;
    } else {
      tmp = Math.ceil(Math.abs(big / 360.0));
      tmp = big + tmp * 360.0;
    }

    return tmp;
  }

  getJulianDate (date) {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth()+1;

    if (month < 3) {
      year -= 1;
      month += 12;
    }

    day = day + 1 / 1440;

    let a = Math.floor(year / 100);
    let b = 2 - a + Math.floor(a / 4);

    return Math.floor(365.25 * year) + Math.floor(30.6001 * (month + 1)) + day + 1720994.5 + b;
  }

  getScheduler (date, l) {
    let result = [];

    const julianDate = this.getJulianDate(date);

    const cycles = Math.floor((julianDate - this.ep) / this.period) + 1;
    const nextMinimum = cycles * this.period + this.ep;

    for (let j = 0; j<l; j++) {
      let jdTemp = nextMinimum + (j * this.period);

      const T = (jdTemp - 2451545.0) / 36525;
      const L = this.getAng(280.4659 + 35999.371946 * T);
      const M = this.getAng(L - 282.9405 - 0.322204 * T) / RAD;
      const lambda = this.getAng(L + 1.9148 * Math.sin(M) + 0.02 * Math.sin (2 * M)) / RAD;
      const nu = lambda - L / RAD + M;
      const R = 0.99972 / (1 + 0.01671 * Math.cos(nu));
      const tau = 0.005775 * R * (this.LL * Math.cos (lambda) + this.M_CORR * Math.sin (lambda));

      jdTemp = jdTemp + tau + 0.5;

      const zz = Math.floor(jdTemp);
      const ff = jdTemp - zz;
      const alpha = Math.floor((zz - 1867216.25) / 36524.25);
      const aa = zz + 1 + alpha - Math.floor(alpha / 4);
      const bb = aa + 1524;
      const cc = Math.floor((bb - 122.1) / 365.25);
      const dd = Math.floor(365.25 * cc);
      const ee = Math.floor((bb - dd) / 30.6001);

      const calendar_day = bb - dd - Math.floor(30.6001 * ee) + ff;

      let calendar_month = ee;

      if (ee < 13.5) calendar_month = ee - 1;
      if (ee > 13.5) calendar_month = ee - 13;

      let calendar_year = cc;

      if (calendar_month > 2.5) calendar_year = cc - 4716;
      if (calendar_month < 2.5) calendar_year = cc - 4715;

      let int_day = Math.floor(calendar_day);
      let hours = (calendar_day - int_day) * 24;
      let int_hours = Math.floor(hours);
      let minutes = Math.floor((hours - Math.floor(hours)) * 60 + 0.5);

      const date = new Date(calendar_year, calendar_month, int_day, int_hours, minutes);

      result.push(date);
    }

    return result;
  }

}
