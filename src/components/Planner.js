import React, { Component, PropTypes } from 'react';
import PlannerForm from './PlannerForm';

import initialValues from '../utils/initialValues';

import Wrapper from './Wrapper';
import Logotype from './Logotype';
import ImageHeader from './ImageHeader';
import PlannerResult from './PlannerResult';

let img = require('../images/bitu-bg.jpg');

export default class Planner extends Component {

  static propTypes = {
    updatePlanner: PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  componentDidMount () {
    this.props.updatePlanner(initialValues);
  }

  render() {
    const {
      setDate,
      planner,
      updatePlanner
    } = this.props;

    return (
      <div>
        <Logotype/>
        <h1>Планировщик минимумов переменных звезд</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        <PlannerForm onSubmit={updatePlanner}/>
        <PlannerResult planner={planner}/>
        <hr/>
        <p>
          &copy; Большая Вселенная, 2010—2015.<br/>
          Использование материалов сайта «Большая Вселенная» разрешено при наличии активной ссылки на источник.<br/>
          Все права на фотографии и иллюстрации принадлежат их авторам.
        </p>
      </div>
    );
  }
}
