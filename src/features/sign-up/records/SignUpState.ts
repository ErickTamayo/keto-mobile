import { Record } from 'immutable'

export interface State {
  gender: 'male' | 'female' | null
}

const defaultState: State = {
  gender: null,
}

export default class SignUpState extends Record(defaultState) implements State {
  public readonly gender!: 'male' | 'female' | null
}
