import { useReducer, useCallback } from "react"

import { AppContext, INITIAL_STATE } from "./AppContext"
import { AppContextActions, AppReducer } from "./AppReducer"

const AppProvider = (
  { children } : { children: React.ReactElement }
) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE) 

  const setActualProject = useCallback((title:string) => {
    dispatch({
      type: AppContextActions.SetActualProject,
      payload: title
    })
  }, [dispatch])

  const setShowName = useCallback((option) => {
    dispatch({
      type: AppContextActions.SetShowName,
      payload: option
    })
  }, [dispatch])

  return (
    <AppContext.Provider value={{ 
      state,
      setActualProject,
      setShowName
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider }