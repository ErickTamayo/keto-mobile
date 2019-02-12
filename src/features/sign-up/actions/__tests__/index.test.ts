import thunk from 'redux-thunk'
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store'
import { SELECT_GENDER } from '../../constants'
import { selectGender } from '..'

describe('feature/start-screen action creators', () => {
  const mockStore = configureMockStore([thunk])
  let store: MockStoreEnhanced

  beforeEach(() => {
    store = mockStore({ gender: null })
  })

  describe('selectGender()', () => {
    it('dispatches expected actions', () => {
      const expectedActions = [{ type: SELECT_GENDER, gender: 'male' }]

      store.dispatch(selectGender('male'))

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
