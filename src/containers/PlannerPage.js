import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Planner from '../components/Planner';
import * as PlannerActions from '../actions/planner';


function mapStateToProps(state) {
  return {
    planner: state.planner
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlannerActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
