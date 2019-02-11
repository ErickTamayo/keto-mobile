import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { State } from '../records/StartScreenState'
import StartScreen from '../components/StartScreen'
import { addCounter, AddCounter, userLogout, UserLogout } from '../actions'

export interface StateProps {
  counter: number
}

export interface DispatchProps {
  addCounter: () => AddCounter
  userLogout: () => UserLogout
}

export const mapStateToProps = ({ startScreen }: { startScreen: State }): StateProps => ({
  counter: startScreen.counter,
})

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addCounter: (): AddCounter => dispatch(addCounter()),
  userLogout: (): UserLogout => dispatch(userLogout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
