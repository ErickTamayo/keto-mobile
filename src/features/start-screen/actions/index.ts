import { ADD_COUNTER, USER_LOGOUT } from '../constants'

export interface AddCounter {
  type: ADD_COUNTER
}

export interface UserLogout {
  type: USER_LOGOUT
}

export const addCounter = (): AddCounter => ({
  type: ADD_COUNTER,
})

export const userLogout = (): UserLogout => ({
  type: USER_LOGOUT,
})
