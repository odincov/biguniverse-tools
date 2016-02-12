import React, { Component, PropTypes } from 'react';

import initialValues from '../../utils/initialValues';
import initialStar from '../../data/default-star';

import Form from './PlannerForm';
import Result from './PlannerResult';

let img = require('../../images/bitu-bg.jpg');

export default class Planner extends Component {

  static propTypes = {
    updatePlanner: PropTypes.func.isRequired,
    selectStar: PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  componentDidMount () {
    const { star, date } = this.props;
    this.props.updatePlanner({ star, date });
  }

  render () {
    const {
      scheduler,
      star,
      stars,
      date,
      updatePlanner,
      updateDate,
      selectStar
    } = this.props;

    return (
      <div>
        <h1>Планировщик экстремумов переменных звезд</h1>
        <p>
          Наблюдения правильных переменных звезд хорошо начинать вблизи экстремумов — минимума блеска в случае затменно-переменных звезд и максимума блеска в случае цефеид. Предлагаемый ниже калькулятор позволяет рассчитать время экстремумов некоторых ярких цефеид и затменно-переменных звезд, которые можно наблюдать с территории России и сопредельных государств.
        </p>
        <p>
          Для этого на календаре выберите интересующую вас дату, от которой будет рассчитываться время. Далее из списка звезд выберите интересующую вас звезду. Внизу автоматически появтся список из ближайших десяти экстремумов. В левом столбце будет указано ваше местное время, в правом — Всемирное (время по Гринвичу).
        </p>
        <p>
          Точность наступления минимума или максимума блеска составляет нескольких минут.
        </p>
        <Form plannerUpdate={updatePlanner} updateDate={updateDate} star={star} selectStar={selectStar}/>
        <Result scheduler={scheduler}/>
        <p>
          Эпохи и периоды звезд взяты с сайта Американской ассоциации наблюдателей переменных звезд (AAVSO): <a href="https://www.aavso.org/">https://www.aavso.org/</a>
        </p>
      </div>
    );
  }
}
