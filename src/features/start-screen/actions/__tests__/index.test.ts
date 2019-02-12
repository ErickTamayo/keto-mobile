import thunk from 'redux-thunk'
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store'
import { ADD_COUNTER } from '../../constants'
import { addCounter } from '..'

describe('feature/start-screen action creator', () => {
  const mockStore = configureMockStore([thunk])
  let store: MockStoreEnhanced

  beforeEach(() => {
    store = mockStore({ counter: 0 })
  })

  describe('addCounter()', () => {
    it('dispatches', () => {
      const expectedActions = [
        {
          type: ADD_COUNTER,
        },
      ]

      store.dispatch(addCounter())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
