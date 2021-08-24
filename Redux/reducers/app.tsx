import {
  SET_APP_ERROR,
  SET_APP_LOADING,
} from '../constants/ActionTypes'
import { AppActionType } from '../interfaces/app'
import { AppState } from '../interfaces/interfaces'

const initialState: AppState = {
  error: '',
  loading: false,
  config: {
    appName: 'DefaultApp',
    theme: {
      bgColor1: "#0B8389",
      bgColor2: "#FFFFFF",
      bgColor3: "#1BA39C",
      bgColor4: "#16A086",
      textColor1: "#FFFFFF",
      textColor2: "#000000",
    }
  },
}

const app = (state: AppState = initialState, action: AppActionType) => {
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case SET_APP_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default app
