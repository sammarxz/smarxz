import { INITIAL_STATE } from "./AppContext";

enum AppContextActions {
  SetActualProject = "SET_ACTUAL_PROJECT",
  SetShowName = 'SET_SHOW_NAME'
}

interface DispatchAction {
  type: AppContextActions,
  payload?: any
}

const AppReducer = (state = INITIAL_STATE, action:DispatchAction):typeof INITIAL_STATE => {
  switch(action.type) {
    case AppContextActions.SetActualProject:
      return {
        ...state,
        actualProject: action.payload
      };
    case AppContextActions.SetShowName:
      return {
        ...state,
        showName: action.payload
      }
    default:
      throw new Error('Invalid action.type');
  }
}

export { AppReducer, AppContextActions }