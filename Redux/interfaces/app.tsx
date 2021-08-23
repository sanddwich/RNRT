import {
  SET_APP_ERROR,
  SET_APP_LOADING,
} from '../constants/ActionTypes'

interface setAppLoading {
  type: typeof SET_APP_LOADING
  loading: boolean
}

interface setAppError {
  type: typeof SET_APP_ERROR
  error: string
}

export type AppActionType =
  | setAppLoading
  | setAppError
