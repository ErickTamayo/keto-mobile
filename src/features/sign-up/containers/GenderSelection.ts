import { connect } from 'react-redux'
import { Dispatch } from 'redux'
// import { State } from '../records/GenderSelectionState'
import GenderSelection from '../components/GenderSelection'
// import { addCounter, AddCounter } from '../actions'

export interface StateProps {}

export interface DispatchProps {}

export const mapStateToProps = (): StateProps => ({})

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderSelection)
