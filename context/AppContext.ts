import { createContext } from "react"

const INITIAL_STATE = {
  actualProject: '',
  showName: true
}

const AppContext = createContext({
  state: INITIAL_STATE,
  setActualProject: (title:string) => {},
  setShowName: (show:boolean) => {}
})

export { AppContext, INITIAL_STATE }