import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Planner from '../components/page-planner/Planner';

import * as PlannerActions from '../actions/planner';

function mapStateToProps(state) {
  return {
    scheduler: state.planner.scheduler,
    star: state.planner.star,
    stars: state.planner.stars,
    date: state.planner.date
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlannerActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
