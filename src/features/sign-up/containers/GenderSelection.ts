import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { State } from '../records/SignUpState'
import GenderSelection from '../components/GenderSelection'
import { selectGender, SelectGender } from '../actions'

export interface StateProps {
  gender: 'male' | 'female' | null
}

export interface DispatchProps {
  selectGender: (gender: 'male' | 'female') => SelectGender
}

export const mapStateToProps = ({ signUp }: { signUp: State }): StateProps => {
  return {
    gender: signUp.gender,
  }
}

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  selectGender: (gender: 'male' | 'female'): SelectGender => dispatch(selectGender(gender)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderSelection)
